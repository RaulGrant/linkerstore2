import requests
from bs4 import BeautifulSoup
import re
import json
import time

def scrape_amazon_product(url):
    """
    Realiza scraping de una URL de producto de Amazon para obtener detalles completos.
    Esta versión es más robusta y tiene selectores de respaldo.
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'Accept-Language': 'es-MX,es;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Upgrade-Insecure-Requests': '1'
    }
    
    print(f"Procesando: {url}")
    product_data = {'url': url}
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"  -> Error al acceder a la URL: {e}")
        return None

    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Título Exacto
    title_element = soup.select_one('#productTitle')
    product_data['title'] = title_element.get_text(strip=True) if title_element else 'No encontrado'

    # Precio (MXN)
    price_text = '0'
    price_selectors = ['.a-price .a-offscreen', 'span.a-price-whole', '#price_inside_buybox']
    for selector in price_selectors:
        price_element = soup.select_one(selector)
        if price_element:
            price_text = re.sub(r'[^\d.]', '', price_element.get_text(strip=True))
            if price_text:
                break
    product_data['price'] = price_text if price_text else '0'

    # Descripción
    desc_element = soup.select_one('#feature-bullets')
    product_data['description'] = desc_element.get_text(strip=True) if desc_element else 'No encontrada'

    # Rating
    rating_text = '0'
    rating_element = soup.select_one('span[data-hook="rating-out-of-text"], #acrPopover .a-icon-alt')
    if rating_element:
        match = re.search(r'(\d\.?\d*)', rating_element.get_text(strip=True))
        if match:
            rating_text = match.group(1)
    product_data['rating'] = rating_text

    # Conteo de Reseñas
    review_count_text = '0'
    review_count_element = soup.select_one('#acrCustomerReviewText')
    if review_count_element:
        match = re.search(r'(\d+,?\d*)', review_count_element.get_text(strip=True))
        if match:
            review_count_text = match.group(1).replace(',', '')
    product_data['review_count'] = review_count_text

    # Es Prime
    product_data['is_prime'] = bool(soup.select_one('#prime-badge-sprite, .isPrime, #primeBadge_feature_div'))

    # Está Activo (disponible)
    product_data['is_active'] = bool(soup.select_one('#add-to-cart-button, #buy-now-button'))

    # Etiquetas (Categorías)
    tags = [a.get_text(strip=True) for a in soup.select('#wayfinding-breadcrumbs ul li a')]
    product_data['tags'] = tags if tags else []

    # Reseñas de Usuarios
    reviews = []
    review_elements = soup.select('div[data-hook="review"]')
    for review in review_elements[:3]: # Obtener las primeras 3 reseñas
        author = review.select_one('.a-profile-name')
        text = review.select_one('span[data-hook="review-body"]')
        if author and text:
            reviews.append({'author': author.get_text(strip=True), 'text': text.get_text(strip=True)})
    product_data['reviews'] = reviews

    # Especificaciones
    specifications = {}
    spec_rows = soup.select('#productDetails_techSpec_section_1 tr, #detail-bullets_feature_div li')
    for row in spec_rows:
        key_elem = row.select_one('th, .a-text-bold')
        val_elem = row.select_one('td, .a-list-item > span:last-child')
        if key_elem and val_elem:
            key = " ".join(key_elem.get_text(strip=True).split())
            value = " ".join(val_elem.get_text(strip=True).split())
            if key and value:
                specifications[key.replace(':', '')] = value
    product_data['specifications'] = specifications

    print(f"  -> Título: {product_data['title']}")
    print(f"  -> Datos extraídos: { {k: v for k, v in product_data.items() if k not in ['url', 'title']} }")
    
    return product_data

def main():
    """Función principal del script."""
    urls = [
        "https://a.co/d/1dVFtHu", "https://a.co/d/7HU6S69", "https://a.co/d/5mZYaMM",
        "https://a.co/d/eUoj1Us", "https://a.co/d/0sbC1Cv", "https://a.co/d/cS79Pr6",
        "https://a.co/d/0k65ZEs", "https://a.co/d/7ZqgthE", "https://a.co/d/3In2VcR",
        "https://a.co/d/hsV0TPS", "https://a.co/d/fxkQvl4", "https://a.co/d/hNp6mKk",
        "https://a.co/d/2AG9lSw", "https://a.co/d/4CAV57w", "https://a.co/d/fzVA3h6",
        "https://a.co/d/20jUzgv", "https://a.co/d/4TyGPZB", "https://a.co/d/6E9QQKy",
        "https://a.co/d/865MGaD", "https://a.co/d/aGLaGB5", "https://a.co/d/g4mpofd",
        "https://a.co/d/hj9YLvb", "https://a.co/d/bVf8d9P", "https://a.co/d/2oP7ecN",
        "https://a.co/d/hLmApi4", "https://a.co/d/6hG2XrA", "https://a.co/d/7WHB6zt",
        "https://a.co/d/gPstWl8", "https://a.co/d/hezZLc7", "https://a.co/d/1o4YUvB",
        "https://a.co/d/gThwGym", "https://a.co/d/eMCCaFn", "https://a.co/d/9QCpCof",
        "https://a.co/d/fefS4AC", "https://a.co/d/bx89Rbt", "https://a.co/d/2hKtyLK",
        "https://a.co/d/izhWvv3", "https://a.co/d/alNLQwh", "https://a.co/d/3wMtkQJ",
        "https://a.co/d/avjgJGa", "https://a.co/d/1npVQ7K", "https://a.co/d/d5pVgGR",
        "https://a.co/d/a7YShEb", "https://a.co/d/bAe2wCE", "https://a.co/d/7KwE43V",
        "https://a.co/d/aVebQcM", "https://a.co/d/7qKEfFs"
    ]
    
    all_products_data = []
    for i, url in enumerate(urls):
        data = scrape_amazon_product(url)
        if data:
            all_products_data.append(data)
        print("-" * 20)
        if i < len(urls) - 1:
            time.sleep(1.5) # Pausa para no saturar a Amazon

    output_file = 'scraped_product_data_completa.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_products_data, f, ensure_ascii=False, indent=4)
        
    print(f"\n¡Scraping completado! Los datos se han guardado en '{output_file}'")

if __name__ == '__main__':
    main()