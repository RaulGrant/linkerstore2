#!/usr/bin/env python3
"""
Generic PDF -> structured TXT extractor for "report + top products" style documents.

What it does:
- Extracts text per page (pdfplumber) and links (PyMuPDF / fitz).
- Detects likely headings using font size heuristics and numbering patterns.
- Splits the document into sections (heading + body). If headings are absent,
  falls back to keyword-based section splitting.
- Detects tables with pdfplumber and outputs an ASCII-ish representation and marks them as TABLE.
- Finds product candidates (blocks that include URLs, prices, known-brand tokens or "Enlace:" patterns).
- Outputs a normalized TXT (human-readable) and an optional JSON file with structured data.
- Explicitly annotates when content is a TABLE so downstream agents can render it properly.

Dependencies:
- pip install pdfplumber pymupdf regex

Usage:
- python3 extract_pdf_to_structured_txt.py /path/to/your.pdf output_prefix
  Example:
  python3 extract_pdf_to_structured_txt.py calzado-seguridad-tec.pdf extracted_calzado

Notes:
- This script is heuristic-driven to be generic for "technical reports" with
  product lists and links. It will work best on reasonably well-formed PDF text (not scanned images).
- For scanned PDFs, add an OCR step (Tesseract) before using this script.
"""

import sys
import os
import re
import json
from collections import defaultdict, namedtuple
from pathlib import Path

try:
    import pdfplumber
    import fitz  # pymupdf
except Exception as e:
    print("Missing dependencies. Install with: pip install pdfplumber pymupdf regex")
    raise e

# ---------- Config / heuristics ----------
HEADING_SIZE_FACTOR = 1.25  # heading if char size > avg_size * factor
MIN_HEADING_CHAR_SIZE = 10   # or absolute minimum size to consider
NUMBERED_HEADING_RE = re.compile(r'^\s*\d+(\.\d+)*\s+.+')  # 1.  or 2.1 Title
SECTION_KEYWORDS = [
    'introducción', 'resumen', 'conclusión', 'conclusiones', 'introduccion',
    'norma', 'nom', 'marco jurídico', 'normativ', 'metodología', 'materiales',
    'mantenimiento', 'análisis', 'recomendaciones', 'referencias', 'bibliografía',
    'productos', 'análisis de mercado', 'top', 'guía', 'selección', 'uso', 'inspección'
]
URL_RE = re.compile(r'https?://[^\s\)\]\}]+', re.IGNORECASE)
PRICE_RE = re.compile(r'((?:\$|MXN|USD)\s?[0-9]+(?:[,\.][0-9]{2})?)', re.IGNORECASE)
BRAND_HINTS = [
    'berrendo', 'riverline', 'puma', 'truper', 'skechers', 'bota', 'botas', 'tenis',
    'esd', 'dielectrico', 'dieléctrico', 'nom-113', 'nom', 'nom-017'
]

# ---------- helpers ----------
def normalize_whitespace(s):
    return re.sub(r'[ \t]{2,}', ' ', (s or '')).strip()

def ascii_table_from_table(table):
    # table is list of rows (lists)
    if not table:
        return ''
    # compute widths
    widths = [max(len(str(cell)) for cell in column) for column in zip(*table)]
    lines = []
    sep = '+'.join('-' * (w + 2) for w in widths)
    sep = '+' + sep + '+'
    for i, row in enumerate(table):
        row_line = '|' + '|'.join(' ' + str(cell).ljust(widths[idx]) + ' ' for idx, cell in enumerate(row)) + '|'
        lines.append(row_line)
        # after header row add separator (if looks like header)
        if i == 0:
            lines.append(sep)
    return '\n'.join([sep] + lines + [sep])

# ---------- extraction functions ----------
def extract_text_and_chars(pdf_path):
    """Return pages list: each page is dict with page_num, text (str), chars (list)"""
    pages = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages, start=1):
            text = page.extract_text() or ""
            # page.chars gives list of characters with 'size', 'text', 'fontname', 'top', 'bottom', etc.
            chars = page.chars or []
            # words with bbox are useful for mapping links later
            words = page.extract_words(x_tolerance=1, y_tolerance=1) or []
            pages.append({
                'page_num': i,
                'text': text,
                'chars': chars,
                'words': words,
                'pdfplumber_page': page  # keep reference for table extraction
            })
    return pages

def extract_links_with_fitz(pdf_path):
    """Return dict: page_num -> list of link dicts {uri, from_rect}"""
    links_by_page = defaultdict(list)
    doc = fitz.open(pdf_path)
    for page_index in range(len(doc)):
        page = doc[page_index]
        # page.get_links() is sometimes limited; Getting annotations also helps
        for l in page.get_links():
            uri = l.get('uri') or l.get('uri', None)
            if uri:
                # fitz returns rect as (x0,y0,x1,y1)
                links_by_page[page_index + 1].append({
                    'uri': uri,
                    'rect': l.get('from'),  # tuple or None
                })
        # annotations for link URIs
        for annot in page.annots(types=[fitz.PDF_ANNOT_LINK]) or []:
            try:
                uri = annot.get_uri()
                if uri:
                    rect = annot.rect
                    links_by_page[page_index + 1].append({
                        'uri': uri,
                        'rect': (rect.x0, rect.y0, rect.x1, rect.y1)
                    })
            except Exception:
                continue
    doc.close()
    return links_by_page

def map_links_to_text(pages, links_by_page):
    """Try to find anchor text for each link by intersecting bbox with words from pdfplumber.
       Returns list of product link dicts with page, uri, anchor_text (if found).
    """
    mapped = []
    for p in pages:
        pg = p['page_num']
        words = p['words'] or []
        for link in links_by_page.get(pg, []):
            uri = link.get('uri')
            rect = link.get('rect')
            anchor = None
            if rect:
                x0, y0, x1, y1 = rect
                # pdfplumber words have x0, top, x1, bottom
                overlaps = []
                for w in words:
                    # mapping coordinate systems may differ; try a direct bbox overlap test
                    try:
                        wx0 = float(w.get('x0'))
                        wy0 = float(w.get('top'))
                        wx1 = float(w.get('x1'))
                        wy1 = float(w.get('bottom'))
                        # If word bbox intersects link rect
                        if not (wx1 < x0 or wx0 > x1 or wy1 < y0 or wy0 > y1):
                            overlaps.append(w.get('text'))
                    except Exception:
                        continue
                if overlaps:
                    anchor = ' '.join(overlaps)
            mapped.append({'page': pg, 'uri': uri, 'anchor': anchor})
    return mapped

def detect_headings_on_page(page):
    """Return list of headings detected on this page with their approximate line text and y coordinate"""
    chars = page['chars']
    if not chars:
        return []
    # group chars into lines by rounding top position
    lines = defaultdict(list)
    for ch in chars:
        # use 'top' attribute rounded to 1 decimal
        top = round(float(ch.get('top', 0)), 1)
        lines[top].append(ch)
    # compute average char size on page
    sizes = [float(c.get('size', 0)) for c in chars if c.get('size')]
    avg_size = (sum(sizes) / len(sizes)) if sizes else 0
    headings = []
    for top, chs in sorted(lines.items()):
        text = ''.join([c.get('text', '') for c in chs]).strip()
        if not text:
            continue
        max_size = max((float(c.get('size', 0)) for c in chs), default=0)
        # heuristics: large font or numbered heading or all-caps short text
        if (max_size >= max(MIN_HEADING_CHAR_SIZE, avg_size * HEADING_SIZE_FACTOR)) or NUMBERED_HEADING_RE.match(text) or (len(text) < 80 and text.isupper()):
            headings.append({'text': normalize_whitespace(text), 'y': top})
    return headings

def build_sections_from_pages(pages):
    """Return list of sections: each is dict {title, start_page, end_page, content, is_table, tables:list}"""
    # Step 1: detect headings across pages and assemble a list of (page_num, y, heading_text)
    detected_headings = []
    for p in pages:
        heads = detect_headings_on_page(p)
        for h in heads:
            detected_headings.append({'page': p['page_num'], 'y': h['y'], 'text': h['text']})
    # Step 2: if detected_headings empty, fallback to keyword-based splitting within text
    sections = []
    if detected_headings:
        # sort headings by page then y
        detected_headings = sorted(detected_headings, key=lambda x: (x['page'], x['y']))
        for idx, h in enumerate(detected_headings):
            title = h['text']
            start_page = h['page']
            # determine end_page: either next heading.page or last page
            end_page = detected_headings[idx + 1]['page'] if idx + 1 < len(detected_headings) else pages[-1]['page_num']
            # Collect text between this heading and the next heading (inclusive of start_page until next heading position)
            content_parts = []
            for p in pages:
                if p['page_num'] < start_page:
                    continue
                if p['page_num'] > end_page:
                    continue
                content_parts.append(f"--- PAGE {p['page_num']} ---\n{p['text']}")
            content = '\n'.join(content_parts).strip()
            sections.append({
                'title': title,
                'start_page': start_page,
                'end_page': end_page,
                'content': content,
                'tables': []  # to be filled
            })
    else:
        # no headings found: try to split by section keywords inside combined text
        combined = '\n'.join([f"--- PAGE {p['page_num']} ---\n{p['text']}" for p in pages])
        # create split points by keyword lines
        # find lines that look like section titles: lines that end with ":" or are all caps or start with digits
        lines = combined.splitlines()
        current_title = "Introduction"
        current_content = []
        page_marker = 1
        for ln in lines:
            stripped = ln.strip()
            if not stripped:
                continue
            # detect page markers to update page_marker
            mpage = re.match(r'--- PAGE (\d+) ---', stripped)
            if mpage:
                page_marker = int(mpage.group(1))
                continue
            low = stripped.lower()
            if any(k in low for k in SECTION_KEYWORDS) and len(stripped) < 120:
                # start new section
                if current_content:
                    sections.append({
                        'title': current_title,
                        'start_page': page_marker,
                        'end_page': page_marker,
                        'content': '\n'.join(current_content).strip(),
                        'tables': []
                    })
                current_title = stripped
                current_content = []
            else:
                current_content.append(stripped)
        if current_content:
            sections.append({
                'title': current_title,
                'start_page': 1,
                'end_page': pages[-1]['page_num'],
                'content': '\n'.join(current_content).strip(),
                'tables': []
            })
    return sections

def extract_tables_for_sections(pages, sections):
    """Use pdfplumber page.extract_tables() to find tables and attach them to sections"""
    # map pages to sections for quick lookup
    page_to_sections = defaultdict(list)
    for s in sections:
        for p in range(s['start_page'], s['end_page'] + 1):
            page_to_sections[p].append(s)
    for p in pages:
        page_obj = p['pdfplumber_page']
        try:
            tables = page_obj.extract_tables()
        except Exception:
            tables = []
        if tables:
            for t in tables:
                # pick the first section that contains this page
                sects = page_to_sections.get(p['page_num'], [])
                if sects:
                    sects[0]['tables'].append({
                        'page': p['page_num'],
                        'table': t
                    })
                else:
                    # create a generic section if none found
                    sections.append({
                        'title': f'TABLE on page {p["page_num"]}',
                        'start_page': p['page_num'],
                        'end_page': p['page_num'],
                        'content': '',
                        'tables': [{'page': p['page_num'], 'table': t}]
                    })
    return sections

def extract_product_candidates(sections, links_mapped):
    """
    Heuristics to detect product entries:
    - Blocks containing a URL are strong candidates
    - Blocks containing brand hints or words like 'Enlace', 'Ficha', 'Modelo', 'Precio'
    - Tables where header matches product columns
    Returns list of products with fields: title, description, url(s), page(s), price(if any)
    """
    products = []
    seen_urls = set()

    # 1) scan sections for explicit URLs and lines with brand hints/price
    for s in sections:
        lines = s['content'].splitlines()
        candidate_block = []
        for ln in lines:
            candidate_block.append(ln)
            # if line contains URL or 'Enlace' or price or brand hint or 'Clasificación' or 'Modelo'
            if URL_RE.search(ln) or 'enlace' in ln.lower() or PRICE_RE.search(ln) or any(b in ln.lower() for b in BRAND_HINTS) or re.search(r'\bmodelo\b', ln.lower()):
                block_text = '\n'.join(candidate_block).strip()
                urls = URL_RE.findall(block_text)
                prices = PRICE_RE.findall(block_text)
                # try to locate pages (we don't have page per line here; use section pages)
                product = {
                    'title': block_text.splitlines()[0][:120],
                    'description': block_text,
                    'urls': urls,
                    'prices': prices,
                    'pages': (s['start_page'], s['end_page'])
                }
                # dedupe by url or exact description
                key = (tuple(urls), product['title'])
                if key not in seen_urls:
                    products.append(product)
                    seen_urls.add(key)
                candidate_block = []
            # flush candidate_block if blank line
            if not ln.strip():
                candidate_block = []
        # also try to detect explicit product tables in section
        for t in s.get('tables', []):
            header = t['table'][0] if t['table'] else []
            header_join = ' '.join((str(h).lower() for h in header))
            if any(hk in header_join for hk in ['modelo', 'modelo', 'marca', 'enlace', 'precio', 'url']):
                # treat each table row as product
                for row in t['table'][1:]:
                    row_text = ' | '.join(str(c or '') for c in row)
                    urls = URL_RE.findall(row_text)
                    prices = PRICE_RE.findall(row_text)
                    product = {
                        'title': (row[0] or '')[:120],
                        'description': row_text,
                        'urls': urls,
                        'prices': prices,
                        'pages': (t['page'], t['page'])
                    }
                    key = (tuple(urls), product['title'])
                    if key not in seen_urls:
                        products.append(product)
                        seen_urls.add(key)

    # 2) scan mapped links for anchors and add as product if anchor contains brand hint or word 'enlace' or price
    for lm in links_mapped:
        uri = lm.get('uri')
        anchor = lm.get('anchor') or ''
        if not uri:
            continue
        lower_anchor = anchor.lower()
        if ('enlace' in lower_anchor) or any(b in lower_anchor for b in BRAND_HINTS) or re.search(r'\bmodelo\b', lower_anchor):
            product = {
                'title': anchor or uri,
                'description': '',
                'urls': [uri],
                'prices': [],
                'pages': (lm['page'], lm['page'])
            }
            key = (tuple(product['urls']), product['title'])
            if key not in seen_urls:
                products.append(product)
                seen_urls.add(key)
    # final: attempt to sort products by pages and presence of URL and price (simple heuristic)
    products = sorted(products, key=lambda p: (0 if p['urls'] else 1, -len(p['description']), p['pages']))
    return products

# ---------- output ----------
def save_txt_and_json(output_prefix, meta, sections, products, links_mapped):
    txt_path = f"{output_prefix}.txt"
    json_path = f"{output_prefix}.json"
    with open(txt_path, 'w', encoding='utf-8') as f:
        f.write(f"Extracted PDF content - {meta.get('file_name')}\n")
        f.write(f"Pages: {meta.get('num_pages')}\n")
        f.write("=" * 80 + "\n\n")

        f.write("TOP PRODUCTS (heuristic extraction)\n")
        f.write("-" * 40 + "\n")
        if products:
            for i, p in enumerate(products, start=1):
                f.write(f"{i}. Title: {p.get('title')}\n")
                f.write(f"   Pages: {p.get('pages')}\n")
                if p.get('prices'):
                    f.write(f"   Prices found: {', '.join(p.get('prices'))}\n")
                if p.get('urls'):
                    for u in p.get('urls'):
                        f.write(f"   URL: {u}\n")
                f.write("   Description:\n")
                for line in p.get('description', '').splitlines():
                    f.write(f"     {line}\n")
                f.write("\n")
        else:
            f.write("No product-like blocks were confidently detected.\n\n")

        f.write("\n" + "=" * 80 + "\n\n")
        f.write("SECTIONS\n")
        f.write("-" * 40 + "\n")
        for s_idx, s in enumerate(sections, start=1):
            f.write(f"Section {s_idx}: {s.get('title')}\n")
            f.write(f"Pages: {s.get('start_page')} - {s.get('end_page')}\n")
            f.write("-" * 20 + "\n")
            # if tables exist, annotate and write them separately
            if s.get('tables'):
                f.write("[This section contains TABLE(s). See below each TABLE block annotated explicitly]\n\n")
            # write content (trim long)
            content_preview = s.get('content') or ''
            # Mark explicitly if looks like a table in the content
            # But we also output extracted tables explicitly
            lines = content_preview.splitlines()
            for ln in lines:
                f.write(ln + "\n")
            f.write("\n")
            # output any tables attached to this section
            for t in s.get('tables', []):
                f.write(f"--- TABLE on page {t['page']} ---\n")
                # t['table'] is list of lists (rows)
                table_text = ascii_table_from_table(t['table'])
                if not table_text:
                    f.write("[TABLE detected but failed to normalize]\n")
                else:
                    f.write(table_text + "\n")
                f.write("--- END TABLE ---\n\n")
            f.write("\n" + ("-" * 40) + "\n\n")

        f.write("\n" + "=" * 80 + "\n\n")
        f.write("LINKS FOUND (from annotations)\n")
        f.write("-" * 40 + "\n")
        for lm in links_mapped:
            f.write(f"Page {lm.get('page')}: {lm.get('uri')} (anchor: {lm.get('anchor')})\n")

    # JSON output for programmatic consumption
    out = {
        'meta': meta,
        'sections': sections,
        'products': products,
        'links': links_mapped
    }
    with open(json_path, 'w', encoding='utf-8') as fj:
        json.dump(out, fj, ensure_ascii=False, indent=2)

    print(f"Saved TXT: {txt_path}")
    print(f"Saved JSON: {json_path}")

# ---------- main ----------
def main():
    if len(sys.argv) < 3:
        print("Usage: python3 extract_pdf_to_structured_txt.py /path/to/file.pdf output_prefix")
        sys.exit(1)
    pdf_path = sys.argv[1]
    output_prefix = sys.argv[2]

    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        sys.exit(1)

    print(f"Opening PDF: {pdf_path}")
    pages = extract_text_and_chars(pdf_path)
    num_pages = len(pages)
    meta = {'file_name': os.path.basename(pdf_path), 'num_pages': num_pages}

    print("Extracting links (annotations) with PyMuPDF...")
    links_by_page = extract_links_with_fitz(pdf_path)
    links_mapped = map_links_to_text(pages, links_by_page)

    print("Detecting sections using heading heuristics...")
    sections = build_sections_from_pages(pages)

    print("Extracting tables and attaching to sections...")
    sections = extract_tables_for_sections(pages, sections)

    print("Detecting product-like blocks...")
    products = extract_product_candidates(sections, links_mapped)

    print("Saving outputs...")
    save_txt_and_json(output_prefix, meta, sections, products, links_mapped)
    print("Done.")

if __name__ == '__main__':
    main()