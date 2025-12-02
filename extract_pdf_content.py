#!/usr/bin/env python3
"""
PDF Content Extractor for Safety Helmet Regulations
Extracts text content from PDF and identifies key sections
"""

import PyPDF2
import re
import sys
from pathlib import Path

def extract_pdf_text(pdf_path):
    """Extract all text from PDF file"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            
            # Get basic PDF info
            num_pages = len(pdf_reader.pages)
            print(f"PDF has {num_pages} pages")
            print("=" * 50)
            
            all_text = ""
            page_texts = {}
            
            # Extract text from each page
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                page_text = page.extract_text()
                page_texts[page_num + 1] = page_text
                all_text += f"\n--- PAGE {page_num + 1} ---\n{page_text}\n"
            
            return all_text, page_texts, num_pages
            
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return None, None, 0

def analyze_sections(text, page_texts):
    """Analyze text to identify key sections about safety helmets"""
    
    # Key section patterns to look for
    section_patterns = {
        "introduction": [
            r"introducci[óo]n",
            r"alcance",
            r"objetivo",
            r"prop[óo]sito",
            r"generalidades"
        ],
        "regulations": [
            r"nom[-\s]*\d+",
            r"norma[s]?\s+oficial[es]?\s+mexican[as]?",
            r"regulaci[óo]n[es]?",
            r"legislaci[óo]n",
            r"ley[es]?",
            r"reglament[os]?"
        ],
        "helmet_types": [
            r"tipos?\s+de\s+cascos?",
            r"clasificaci[óo]n",
            r"categor[íi]as?",
            r"clases?\s+de\s+cascos?"
        ],
        "materials": [
            r"materiales?",
            r"resistencia",
            r"especificaciones?\s+t[ée]cnicas?",
            r"identificadores?",
            r"etiquetado"
        ],
        "usage": [
            r"uso\s+correcto",
            r"compatibilidad",
            r"epp\s+complementario",
            r"utilizaci[óo]n",
            r"aplicaci[óo]n"
        ],
        "maintenance": [
            r"inspecci[óo]n",
            r"mantenimiento",
            r"vida\s+[úu]til",
            r"conservaci[óo]n",
            r"almacenamiento"
        ],
        "compliance": [
            r"sanciones?",
            r"responsabilidad[es]?",
            r"obligaciones?",
            r"empresas?",
            r"empleador[es]?",
            r"buenas\s+pr[áa]cticas"
        ]
    }
    
    # Find sections in each page
    sections_found = {}
    
    for section_name, patterns in section_patterns.items():
        sections_found[section_name] = []
        
        for page_num, page_text in page_texts.items():
            page_text_lower = page_text.lower()
            
            for pattern in patterns:
                matches = re.findall(pattern, page_text_lower, re.IGNORECASE)
                if matches:
                    sections_found[section_name].append({
                        'page': page_num,
                        'matches': matches,
                        'text_snippet': page_text[:200] + "..."
                    })
    
    return sections_found

def find_nom_standards(text):
    """Find specific NOM standards mentioned"""
    nom_patterns = [
        r"NOM[-\s]*(\d+[-\s]*\w*[-\s]*\d*)",
        r"Norma\s+Oficial\s+Mexicana\s+NOM[-\s]*(\d+[-\s]*\w*[-\s]*\d*)",
        r"nom[-\s]*(\d+)"
    ]
    
    nom_standards = set()
    
    for pattern in nom_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        for match in matches:
            nom_standards.add(f"NOM-{match.replace('-', '').replace(' ', '')}")
    
    return list(nom_standards)

def find_products_brands(text):
    """Find helmet products, brands, or models mentioned"""
    # Common helmet brands and product indicators
    brand_patterns = [
        r"3M",
        r"MSA",
        r"Honeywell",
        r"North",
        r"Bullard",
        r"Protecta",
        r"Miller",
        r"DBI-SALA",
        r"marca[s]?\s+(\w+)",
        r"modelo[s]?\s+(\w+)",
        r"fabricante[s]?\s+(\w+)"
    ]
    
    products_found = []
    
    for pattern in brand_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        products_found.extend(matches)
    
    return list(set(products_found))

def main():
    pdf_path = r"c:\ProyectosAlba\linkerstore\app\blog\manual-cascos-seguridad-proteccion-craneal\Guía Cascos Seguridad Leyes Mexicanas.pdf"
    
    print("Extracting PDF content...")
    print("=" * 50)
    
    # Extract text
    full_text, page_texts, num_pages = extract_pdf_text(pdf_path)
    
    if not full_text:
        print("Failed to extract PDF content")
        return
    
    print(f"Successfully extracted content from {num_pages} pages")
    print("=" * 50)
    
    # Analyze sections
    print("\nANALYZING SECTIONS:")
    print("=" * 50)
    sections = analyze_sections(full_text, page_texts)
    
    section_names = {
        "introduction": "1. Introducción y Alcance",
        "regulations": "2. Regulaciones Mexicanas Aplicables (Normas NOM)",
        "helmet_types": "3. Tipos de Cascos y sus Usos",
        "materials": "4. Materiales, Resistencia e Identificadores Técnicos",
        "usage": "5. Uso Correcto y Compatibilidad con otros EPP",
        "maintenance": "6. Inspección, Mantenimiento y Vida Útil",
        "compliance": "7. Sanciones, Responsabilidades y Buenas Prácticas"
    }
    
    for section_key, section_title in section_names.items():
        print(f"\n{section_title}")
        print("-" * 40)
        
        if section_key in sections and sections[section_key]:
            pages_found = [item['page'] for item in sections[section_key]]
            unique_pages = sorted(list(set(pages_found)))
            print(f"Páginas encontradas: {', '.join(map(str, unique_pages))}")
            
            # Show some matches
            for item in sections[section_key][:2]:  # Show first 2 matches
                print(f"  - Página {item['page']}: {', '.join(item['matches'])}")
        else:
            print("No se encontró contenido específico para esta sección")
    
    # Find NOM standards
    print(f"\n\nNORMAS NOM IDENTIFICADAS:")
    print("=" * 50)
    nom_standards = find_nom_standards(full_text)
    if nom_standards:
        for nom in nom_standards:
            print(f"- {nom}")
    else:
        print("No se encontraron referencias específicas a normas NOM")
    
    # Find products/brands
    print(f"\n\nPRODUCTOS/MARCAS MENCIONADOS:")
    print("=" * 50)
    products = find_products_brands(full_text)
    if products:
        for product in products:
            print(f"- {product}")
    else:
        print("No se encontraron marcas o productos específicos")
    
    # Save extracted text to file for manual review
    output_file = "extracted_helmet_pdf_content.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(full_text)
    
    print(f"\n\nTexto completo guardado en: {output_file}")
    print("Revisa este archivo para análisis más detallado")

if __name__ == "__main__":
    main()