// Script para procesar el archivo JSON y crear la base de datos de productos
const fs = require('fs');
const path = require('path');

// Función para limpiar y procesar texto
function cleanText(text: string): string {
  if (!text || text === 'No encontrado' || text === 'No encontrada') return '';
  
  // Remover caracteres invisibles de Unicode como U+200E
  return text
    .replace(/[\u200E\u200F\u202A-\u202E]/g, '') // Marcas direccionales
    .replace(/\u00A0/g, ' ') // Espacios no separables
    .replace(/\s+/g, ' ') // Múltiples espacios
    .trim();
}

// Función para extraer el precio
function extractPrice(priceStr: string): number {
  if (!priceStr || priceStr === 'No encontrado') return 0;
  
  // Remover todo excepto números y puntos
  const numericPrice = priceStr.replace(/[^\d.]/g, '');
  const price = parseFloat(numericPrice);
  
  return isNaN(price) ? 0 : Math.round(price);
}

// Función para extraer rating
function extractRating(ratingStr: string): number {
  if (!ratingStr || ratingStr === 'No encontrado' || ratingStr === '0') return 0;
  
  const rating = parseFloat(ratingStr);
  return isNaN(rating) ? 0 : Math.max(0, Math.min(5, rating));
}

// Función para extraer conteo de reseñas
function extractReviewCount(countStr: string): number {
  if (!countStr || countStr === 'No encontrado' || countStr === '0') return 0;
  
  const count = parseInt(countStr.replace(/[^\d]/g, ''));
  return isNaN(count) ? 0 : count;
}

// Función para determinar la categoría basada en el título
function determineCategory(title: string): {category: string; sub_category: string} {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('chaleco') || lowerTitle.includes('overol')) {
    return {category: 'EPP', sub_category: 'Ropa de Seguridad'};
  }
  if (lowerTitle.includes('bota') || lowerTitle.includes('tenis') || lowerTitle.includes('zapato')) {
    return {category: 'EPP', sub_category: 'Calzado de Seguridad'};
  }
  if (lowerTitle.includes('guante')) {
    return {category: 'EPP', sub_category: 'Protección de Manos'};
  }
  if (lowerTitle.includes('lente') || lowerTitle.includes('gafa') || lowerTitle.includes('protector facial')) {
    return {category: 'EPP', sub_category: 'Protección Ocular'};
  }
  if (lowerTitle.includes('arnes') || lowerTitle.includes('arnés')) {
    return {category: 'EPP', sub_category: 'Protección contra Caídas'};
  }
  if (lowerTitle.includes('tapon') || lowerTitle.includes('orejera')) {
    return {category: 'EPP', sub_category: 'Protección Auditiva'};
  }
  if (lowerTitle.includes('respirador') || lowerTitle.includes('mascarilla')) {
    return {category: 'EPP', sub_category: 'Protección Respiratoria'};
  }
  if (lowerTitle.includes('casco')) {
    return {category: 'EPP', sub_category: 'Protección de Cabeza'};
  }
  if (lowerTitle.includes('escalera')) {
    return {category: 'Herramientas', sub_category: 'Acceso y Elevación'};
  }
  if (lowerTitle.includes('llave') || lowerTitle.includes('destornillador') || lowerTitle.includes('herramienta')) {
    return {category: 'Herramientas', sub_category: 'Manuales'};
  }
  if (lowerTitle.includes('taladro') || lowerTitle.includes('rotomartillo')) {
    return {category: 'Herramientas', sub_category: 'Eléctricas'};
  }
  if (lowerTitle.includes('multimetro') || lowerTitle.includes('medidor')) {
    return {category: 'Instrumentos', sub_category: 'Medición'};
  }
  if (lowerTitle.includes('linterna')) {
    return {category: 'Iluminación', sub_category: 'Portátil'};
  }
  if (lowerTitle.includes('detector') || lowerTitle.includes('monitor')) {
    return {category: 'Seguridad', sub_category: 'Detección'};
  }
  if (lowerTitle.includes('botiquin')) {
    return {category: 'Seguridad', sub_category: 'Primeros Auxilios'};
  }
  if (lowerTitle.includes('extintor')) {
    return {category: 'Seguridad', sub_category: 'Extinción'};
  }
  if (lowerTitle.includes('cinta') && (lowerTitle.includes('señal') || lowerTitle.includes('delimit'))) {
    return {category: 'Seguridad', sub_category: 'Señalización'};
  }
  if (lowerTitle.includes('sellador') || lowerTitle.includes('cinta') && lowerTitle.includes('butilo')) {
    return {category: 'Materiales', sub_category: 'Sellado'};
  }
  
  return {category: 'Otros', sub_category: 'General'};
}

// Función para extraer la marca del título
function extractBrand(title: string, specs: Record<string, string>): string {
  // Primero intentar obtener de specifications
  if (specs['Fabricante'] || specs['Marca']) {
    return cleanText(specs['Fabricante'] || specs['Marca'] || '');
  }
  
  // Lista de marcas conocidas
  const brands = [
    'LICA', 'Lubardy', 'ThreeH', 'YOMYM', 'RTUMENG', 'AdooAdii', 'GLOROUSCHU',
    'Loop', 'Procase', 'Truper', 'AKRON', 'Crescent', 'YIYITOOLS', 'LIBRATON',
    'CRAFTSMAN', 'Bosch', 'AstroAI', 'MOYAC', 'ANMIEN', 'CARTMAN', 'AKSTEST',
    'Bitwo', 'ThermoPro', 'RTOVZON', 'Surtek', 'TPOUIDD', 'Jaloma', 'Sika',
    'BOMEI', 'Límite-MX'
  ];
  
  for (const brand of brands) {
    if (title.toLowerCase().includes(brand.toLowerCase())) {
      return brand;
    }
  }
  
  // Intentar extraer primera palabra en mayúsculas
  const words = title.split(' ');
  for (const word of words) {
    if (word.length > 2 && word === word.toUpperCase() && /^[A-Z]/.test(word)) {
      return word;
    }
  }
  
  return 'Generic';
}

// Función para generar tags
function generateTags(title: string, category: string): string[] {
  const lowerTitle = title.toLowerCase();
  const tags: string[] = [];
  
  // Tags comunes basados en palabras clave
  const tagMappings = {
    'chaleco': ['chaleco', 'seguridad', 'reflectante'],
    'overol': ['overol', 'industrial', 'trabajo'],
    'bota': ['botas', 'seguridad', 'calzado'],
    'tenis': ['tenis', 'seguridad', 'calzado'],
    'guante': ['guantes', 'protección', 'manos'],
    'lente': ['lentes', 'protección', 'ocular'],
    'gafa': ['gafas', 'seguridad', 'protección'],
    'arnes': ['arnés', 'seguridad', 'caídas'],
    'tapon': ['tapones', 'protección', 'auditiva'],
    'orejera': ['orejeras', 'ruido', 'protección'],
    'respirador': ['respirador', 'protección', 'respiratoria'],
    'casco': ['casco', 'seguridad', 'cabeza'],
    'escalera': ['escalera', 'acceso', 'altura'],
    'llave': ['llaves', 'herramientas', 'mecánico'],
    'destornillador': ['destornilladores', 'herramientas'],
    'taladro': ['taladro', 'herramientas', 'eléctrico'],
    'multimetro': ['multímetro', 'medición', 'eléctrico'],
    'linterna': ['linterna', 'iluminación', 'led'],
    'detector': ['detector', 'seguridad', 'monitoreo'],
    'botiquin': ['botiquín', 'primeros auxilios', 'emergencia'],
    'extintor': ['extintor', 'seguridad', 'fuego']
  };
  
  for (const [keyword, relatedTags] of Object.entries(tagMappings)) {
    if (lowerTitle.includes(keyword)) {
      tags.push(...relatedTags);
    }
  }
  
  // Agregar categoría como tag
  tags.push(category.toLowerCase());
  
  // Remover duplicados y retornar máximo 6 tags
  return [...new Set(tags)].slice(0, 6);
}

// Función principal para procesar el archivo
function processProductData(): void {
  try {
    // Leer el archivo JSON
    const jsonData = fs.readFileSync('scraped_product_data_completa.json', 'utf8');
    const rawProducts: RawProductData[] = JSON.parse(jsonData);
    
    console.log(`Procesando ${rawProducts.length} productos...`);
    
    const processedProducts = rawProducts.map((product, index) => {
      const {category, sub_category} = determineCategory(product.title);
      const brand = extractBrand(product.title, product.specifications);
      const tags = generateTags(product.title, category);
      
      // Limpiar specifications
      const cleanedSpecs: Record<string, string> = {};
      if (product.specifications && typeof product.specifications === 'object') {
        for (const [key, value] of Object.entries(product.specifications)) {
          const cleanKey = cleanText(key.replace(':', ''));
          const cleanValue = cleanText(value);
          if (cleanKey && cleanValue) {
            cleanedSpecs[cleanKey] = cleanValue;
          }
        }
      }
      
      return {
        id: String(index + 1),
        asin: `B${String(index + 1).padStart(2, '0')}${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        title: cleanText(product.title),
        description: cleanText(product.description) || `${cleanText(product.title)} - Producto industrial de alta calidad.`,
        price: extractPrice(product.price),
        currency: 'MXN',
        image_url: `/images/products/B${String(index + 1).padStart(2, '0')}${Math.random().toString(36).substr(2, 6).toUpperCase()}_Prin.webp`,
        amazon_url: product.url,
        category,
        sub_category,
        brand,
        rating: extractRating(product.rating),
        review_count: extractReviewCount(product.review_count),
        is_prime: Boolean(product.is_prime),
        is_active: Boolean(product.is_active),
        tags,
        reviews: product.reviews || [],
        specifications: cleanedSpecs,
        created_at: '2025-07-31T00:00:00Z',
        updated_at: '2025-07-31T00:00:00Z'
      };
    });
    
    // Generar el archivo TypeScript
    const output = `import { AmazonProduct } from '@/lib/types/store';

// Catálogo oficial de productos industriales - Amazon Afiliados
// Actualizado: 31 de Julio, 2025
// Datos extraídos directamente de Amazon para máxima precisión

export const realAmazonProducts: AmazonProduct[] = ${JSON.stringify(processedProducts, null, 2)};`;
    
    // Escribir el archivo
    fs.writeFileSync('lib/data/real-amazon-products.ts', output);
    
    console.log(`✅ Archivo generado exitosamente con ${processedProducts.length} productos`);
    console.log('📁 Ubicación: lib/data/real-amazon-products.ts');
    
  } catch (error) {
    console.error('❌ Error procesando el archivo:', error);
  }
}

// Ejecutar el script
processProductData();
