// Script para generar automáticamente el mapeo de imágenes
// Ejecutar en terminal: node scripts/generate-image-mapping.js

const fs = require('fs');
const path = require('path');

// Ruta donde están las imágenes de productos
const imagesDir = path.join(__dirname, '../public/images/products');

// Función para escanear y generar el mapeo
function generateImageMapping() {
  const mapping = {};
  
  try {
    // Leer todos los archivos en el directorio de productos
    const files = fs.readdirSync(imagesDir);
    
    // Agrupar archivos por ASIN
    const productFiles = {};
    
    files.forEach(file => {
      if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
        const asinMatch = file.match(/^([A-Z0-9]{10})_/);
        if (asinMatch) {
          const asin = asinMatch[1];
          if (!productFiles[asin]) {
            productFiles[asin] = [];
          }
          productFiles[asin].push(file);
        }
      }
    });
    
    // Generar mapeo para cada producto
    Object.keys(productFiles).forEach(asin => {
      const files = productFiles[asin];
      const imageCount = files.length;
      
      // Ordenar archivos: _Prin primero, luego _1, _2, etc.
      const sortedFiles = files.sort((a, b) => {
        if (a.includes('_Prin')) return -1;
        if (b.includes('_Prin')) return 1;
        
        const aNum = parseInt(a.match(/_(\d+)\./)?.[1] || '0');
        const bNum = parseInt(b.match(/_(\d+)\./)?.[1] || '0');
        return aNum - bNum;
      });
      
      // Extraer sufijos y eliminar duplicados
      const images = [...new Set(sortedFiles.map(file => {
        const suffix = file.replace(asin, '').replace(/\.(webp|jpg|png)$/, '');
        return suffix + '.webp'; // Normalizar a .webp
      }))];
      
      mapping[asin] = {
        asin,
        imageCount: images.length, // Usar la longitud real sin duplicados
        images
      };
    });
    
    // Generar código TypeScript
    const outputCode = `// Mapeo de imágenes disponibles por producto
// Auto-generado el ${new Date().toISOString().split('T')[0]}
// Este archivo debe actualizarse cuando se agreguen nuevas imágenes

export interface ProductImageInfo {
  asin: string;
  imageCount: number;
  images: string[];
}

// Lista de productos con sus imágenes disponibles
export const PRODUCT_IMAGE_MAPPING: Record<string, ProductImageInfo> = ${JSON.stringify(mapping, null, 2)};

// Función para obtener las imágenes de un producto sin peticiones HTTP
export function getProductImageUrls(asin: string): Array<{ url: string; alt: string }> {
  const productInfo = PRODUCT_IMAGE_MAPPING[asin];
  
  if (!productInfo) {
    // Si no está en el mapeo, intentar con imagen principal únicamente
    return [
      { url: \`/images/products/\${asin}_Prin.webp\`, alt: \`\${asin} - Imagen principal\` }
    ];
  }
  
  return productInfo.images.map((suffix, index) => ({
    url: \`/images/products/\${asin}\${suffix}\`,
    alt: \`\${asin} - \${index === 0 ? 'Imagen principal' : \`Vista \${index}\`}\`
  }));
}

// Función para verificar si un producto tiene múltiples imágenes
export function hasMultipleImages(asin: string): boolean {
  const productInfo = PRODUCT_IMAGE_MAPPING[asin];
  return productInfo ? productInfo.imageCount > 1 : false;
}

// Función para obtener el número total de imágenes de un producto
export function getProductImageCount(asin: string): number {
  const productInfo = PRODUCT_IMAGE_MAPPING[asin];
  return productInfo ? productInfo.imageCount : 1;
}

// Función auxiliar para agregar un producto al mapeo (usar en development)
export function addProductToMapping(asin: string, imageCount: number): ProductImageInfo {
  const images = ['_Prin.webp'];
  for (let i = 1; i < imageCount; i++) {
    images.push(\`_\${i}.webp\`);
  }
  
  const productInfo: ProductImageInfo = {
    asin,
    imageCount,
    images
  };
  
  PRODUCT_IMAGE_MAPPING[asin] = productInfo;
  return productInfo;
}

// Función para verificar si un producto está en el mapeo
export function isProductMapped(asin: string): boolean {
  return asin in PRODUCT_IMAGE_MAPPING;
}
`;
    
    // Escribir el archivo
    const outputPath = path.join(__dirname, '../lib/utils/productImageMapping.ts');
    fs.writeFileSync(outputPath, outputCode, 'utf8');
    
    console.log('✅ Mapeo de imágenes generado exitosamente!');
    console.log(`📁 Archivo: ${outputPath}`);
    console.log(`📸 Productos encontrados: ${Object.keys(mapping).length}`);
    console.log('📋 Productos mapeados:');
    
    Object.keys(mapping).forEach(asin => {
      const count = mapping[asin].imageCount;
      console.log(`   - ${asin}: ${count} imagen${count === 1 ? '' : 'es'}`);
    });
    
  } catch (error) {
    console.error('❌ Error al generar el mapeo:', error.message);
    console.log('💡 Asegúrate de que exista la carpeta: public/images/products/');
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateImageMapping();
}

module.exports = { generateImageMapping };
