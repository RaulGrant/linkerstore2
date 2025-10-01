import { AmazonProduct, ProductFilters } from './types/store';

/**
 * Filtra productos según los criterios especificados
 */
export function filterProducts(products: AmazonProduct[], filters: ProductFilters): AmazonProduct[] {
  return products.filter(product => {
    // Filtro por búsqueda
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.brand?.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower));
      
      if (!matchesSearch) return false;
    }

    // Filtro por categoría
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Filtro por rango de precios - REMOVIDO
    // Los precios ya no están disponibles en el producto

    // Filtro por calificación
    if (filters.rating && (!product.rating || product.rating < filters.rating)) {
      return false;
    }

    // Filtro por Prime
    if (filters.isPrime && !product.is_prime) {
      return false;
    }

    // Filtro por marca
    if (filters.brand && (!product.brand || !product.brand.toLowerCase().includes(filters.brand.toLowerCase()))) {
      return false;
    }

    return true;
  });
}

/**
 * Ordena productos según diferentes criterios
 */
export function sortProducts(products: AmazonProduct[], sortBy: 'rating' | 'name' | 'newest' = 'newest'): AmazonProduct[] {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'name':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
    default:
      return sorted.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  }
}

/**
 * Busca productos similares basado en categoría y tags
 */
export function findSimilarProducts(product: AmazonProduct, allProducts: AmazonProduct[], limit: number = 4): AmazonProduct[] {
  const similar = allProducts.filter(p => {
    if (p.id === product.id) return false;
    
    // Misma categoría
    if (p.category === product.category) return true;
    
    // Tags similares
    const commonTags = p.tags.filter(tag => product.tags.includes(tag));
    if (commonTags.length > 0) return true;
    
    return false;
  });
  
  return similar.slice(0, limit);
}

/**
 * Genera URL de afiliado (mock)
 */
export function generateAffiliateUrl(product: AmazonProduct): string {
  // En producción, esto generaría una URL real de afiliado
  return `${product.amazon_url}?tag=linkerpro-20`;
}

/**
 * Registra un clic en producto (mock)
 */
export async function registerProductClick(productId: string, userId?: string): Promise<void> {
  // Mock implementation - en el futuro se conectará con la API
  console.log('Product click registered:', { productId, userId, timestamp: new Date().toISOString() });
  
  // Aquí iría la lógica para enviar datos a la API
  // fetch('/api/products/click', {
  //   method: 'POST',
  //   body: JSON.stringify({ productId, userId }),
  // });
}

/**
 * Obtiene productos por categoría
 */
export function getProductsByCategory(products: AmazonProduct[], category: string): AmazonProduct[] {
  return products.filter(product => product.category === category && product.is_active);
}

/**
 * Obtiene productos destacados
 */
export function getFeaturedProducts(products: AmazonProduct[], limit: number = 6): AmazonProduct[] {
  return products
    .filter(product => product.is_active && product.rating && product.rating >= 4.5)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

/**
 * Calcula el tiempo estimado de envío
 */
export function getEstimatedDelivery(product: AmazonProduct): string {
  if (product.is_prime) {
    return '1-2 días hábiles';
  }
  
  return '3-5 días hábiles';
}

/**
 * Valida si un producto está disponible
 */
export function isProductAvailable(product: AmazonProduct): boolean {
  return product.is_active;
}
