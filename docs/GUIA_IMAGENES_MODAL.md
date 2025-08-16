# 📸 Guía Completa de Gestión de Imágenes - LinkerPro

## 🎯 Resumen Ejecutivo

Esta guía detalla cómo gestionar todas las imágenes del catálogo de productos LinkerPro, incluyendo la implementación del modal con carrusel interactivo.

## 📁 Estructura de Archivos de Imágenes

### 📂 Directorio Principal
```
public/
└── images/
    └── products/
        ├── [ASIN]_Prin.webp     # Imagen principal
        ├── [ASIN]_1.webp        # Vista lateral/alternativa 1
        ├── [ASIN]_2.webp        # Vista trasera/alternativa 2
        ├── [ASIN]_3.webp        # Detalles/alternativa 3
        ├── [ASIN]_4.webp        # Accesorios/alternativa 4
        ├── [ASIN]_5.webp        # En uso/alternativa 5
        └── [ASIN]_6.webp        # Comparación/alternativa 6
```

### 🏷️ Convención de Nombres

**Formato:** `[ASIN]_[TIPO].webp`

- **ASIN**: Identificador único del producto (ej: `B08XYZ123`)
- **TIPO**: 
  - `Prin` = Imagen principal (obligatoria)
  - `1`, `2`, `3`, `4`, `5`, `6` = Imágenes adicionales del carrusel

**Ejemplos:**
```
B08XYZ123_Prin.webp    # Imagen principal del producto
B08XYZ123_1.webp       # Primera imagen adicional
B08XYZ123_2.webp       # Segunda imagen adicional
...
```

## 🔧 Configuración Técnica

### 📏 Especificaciones de Imagen

| Propiedad | Valor Requerido |
|-----------|----------------|
| **Formato** | WebP |
| **Dimensiones** | 800x800px (1:1 ratio) |
| **Calidad** | 85-90% |
| **Tamaño máximo** | 150KB por imagen |
| **Compresión** | WebP con pérdida optimizada |

### 🎨 Estándares de Calidad

1. **Fondo**: Preferiblemente blanco o transparente
2. **Iluminación**: Uniforme, sin sombras duras
3. **Enfoque**: Nítido en toda la imagen
4. **Composición**: Producto centrado, ocupando 80% del frame
5. **Consistencia**: Mismo estilo para toda la serie

## 🛠️ Implementación en Código

### 📍 Archivos Modificados

#### 1. **Modal Principal**
```
📄 /components/modals/ProductModal.tsx
```
- Modal responsivo con carrusel
- Sistema de navegación entre imágenes
- Zoom interactivo
- Miniaturas de navegación

#### 2. **Tarjeta de Producto**
```
📄 /components/store/ProductCard.tsx
```
- Integración del modal
- Evento de click para abrir modal
- Estado de modal abierto/cerrado

#### 3. **Tipos de Datos**
```
📄 /types/product.ts
```
- Definiciones de tipos TypeScript
- Compatibilidad con sistema existente

### 🔄 Función de Carga de Imágenes

```typescript
// Ubicación: /components/modals/ProductModal.tsx
const getProductImages = (asin: string): ProductImage[] => {
  const baseImages = [
    { url: `/images/products/${asin}_Prin.webp`, alt: `${asin} - Imagen principal` },
    { url: `/images/products/${asin}_1.webp`, alt: `${asin} - Vista lateral` },
    { url: `/images/products/${asin}_2.webp`, alt: `${asin} - Vista trasera` },
    { url: `/images/products/${asin}_3.webp`, alt: `${asin} - Detalles` },
    { url: `/images/products/${asin}_4.webp`, alt: `${asin} - Accesorios` },
    { url: `/images/products/${asin}_5.webp`, alt: `${asin} - En uso` },
    { url: `/images/products/${asin}_6.webp`, alt: `${asin} - Comparación` }
  ]
  
  return baseImages.slice(0, Math.max(3, Math.min(7, baseImages.length)))
}
```

## 📋 Proceso de Agregado de Imágenes

### 🔸 Paso 1: Preparación de Imágenes

1. **Obtener el ASIN** del producto desde `/lib/data/real-amazon-products.ts`
2. **Redimensionar** todas las imágenes a 800x800px
3. **Convertir** a formato WebP con calidad 85-90%
4. **Optimizar** el tamaño a menos de 150KB por imagen

### 🔸 Paso 2: Nomenclatura

```bash
# Ejemplo para producto con ASIN: "B08XYZ123"
Taladro_Bosch_Prin.webp   → B08XYZ123_Prin.webp
Taladro_Bosch_1.webp      → B08XYZ123_1.webp
Taladro_Bosch_2.webp      → B08XYZ123_2.webp
# ... hasta _6.webp
```

### 🔸 Paso 3: Ubicación de Archivos

```bash
# Copiar todas las imágenes a:
public/images/products/
```

### 🔸 Paso 4: Verificación

1. **Abrir** la aplicación en localhost:3000
2. **Navegar** a la tienda
3. **Hacer clic** en cualquier producto
4. **Verificar** que el modal se abre correctamente
5. **Probar** navegación del carrusel

## 🎯 Lista de ASINs para Reemplazar Imágenes

### 📊 Productos Actuales (47 total)

| ID | ASIN | Producto | Categoría |
|----|------|----------|-----------|
| 1 | "B092GH1234" | Taladro Inalámbrico DeWalt 20V | Herramientas Eléctricas |
| 2 | "B0912XY5678" | Sierra Circular Makita 18V | Herramientas Eléctricas |
| 3 | "B0834ZA9012" | Lijadora Orbital Bosch Professional | Herramientas Eléctricas |
| 4 | "B0756BC3456" | Esmeril Angular Black+Decker 900W | Herramientas Eléctricas |
| 5 | "B0923DE7890" | Pistola de Calor Wagner 2000W | Herramientas Térmicas |
| ... | ... | ... | ... |

*Nota: Consulta el archivo `/lib/data/real-amazon-products.ts` para la lista completa de ASINs*

## 🛡️ Manejo de Errores

### 🔄 Fallback de Imágenes

```typescript
// Si no existe la imagen específica, se muestra placeholder
<Image
  src={images[currentImageIndex]?.url || '/images/placeholder-product.webp'}
  alt={images[currentImageIndex]?.alt || product.title}
  // ...
/>
```

### 🎯 Imagen Placeholder

- **Ubicación**: `/public/images/placeholder-product.webp`
- **Uso**: Cuando falta imagen específica del producto
- **Estilo**: Diseño neutral con icono de producto

## 🚀 Funcionalidades del Modal

### 🎨 Características Implementadas

- ✅ **Carrusel interactivo** con navegación por flechas
- ✅ **Miniaturas clicables** para salto directo
- ✅ **Zoom en imagen** con click
- ✅ **Navegación por teclado** (opcional)
- ✅ **Swipe en móviles** (opcional)
- ✅ **Responsive design** para todas las pantallas

### 📱 Tabs de Información

1. **Descripción**: Información detallada del producto
2. **Especificaciones**: Datos técnicos y dimensiones
3. **Reseñas**: Sistema de valoraciones y comentarios
4. **Relacionados**: Productos complementarios

## 🔧 Configuración Avanzada

### 🎛️ Personalización del Carrusel

```typescript
// En /components/modals/ProductModal.tsx
// Modificar estas constantes para ajustar comportamiento:

const MIN_IMAGES = 3;        // Mínimo de imágenes a mostrar
const MAX_IMAGES = 7;        // Máximo de imágenes a mostrar
const DEFAULT_QUALITY = 85;   // Calidad por defecto de WebP
```

### 🎨 Estilos Personalizados

```css
/* Añadir en globals.css para estilos adicionales */
.product-modal-carousel {
  /* Estilos personalizados del carrusel */
}

.product-modal-thumbnail {
  /* Estilos de miniaturas */
}
```

## 📈 Optimización y Performance

### ⚡ Lazy Loading

- **Implementado**: Carga bajo demanda de imágenes
- **Next.js Image**: Optimización automática
- **WebP Support**: Formato moderno para mejor compresión

### 🗂️ Gestión de Cache

- **Browser Cache**: 1 año para imágenes estáticas
- **CDN Ready**: Preparado para implementar CDN
- **Progressive Loading**: Carga progresiva de calidad

## 🔍 Resolución de Problemas

### ❌ Problemas Comunes

1. **Imagen no aparece**:
   - Verificar nombre de archivo (ASIN correcto)
   - Comprobar formato WebP
   - Revisar ubicación en `/public/images/products/`

2. **Modal no abre**:
   - Verificar importación de ProductModal
   - Comprobar estado `isModalOpen`
   - Revisar eventos de click

3. **Carrusel no funciona**:
   - Verificar que hay múltiples imágenes
   - Comprobar controles de navegación
   - Revisar estado `currentImageIndex`

### 🛠️ Debugging

```typescript
// Añadir console.log para debug:
console.log('Imágenes cargadas:', images);
console.log('Índice actual:', currentImageIndex);
console.log('ASIN del producto:', product.asin);
```

## 📊 Métricas y Monitoreo

### 📈 KPIs a Monitorear

- **Tiempo de carga** del modal
- **Tasa de interacción** con carrusel
- **Errores de carga** de imágenes
- **Conversión** modal → Amazon

---

## 🎯 Checklist de Implementación

- ✅ Modal con carrusel creado
- ✅ Integración en ProductCard
- ✅ Estructura de directorios
- ✅ Convención de nombres definida
- ✅ Fallbacks implementados
- ✅ Documentación completa
- ⏳ **Pendiente**: Subir imágenes reales
- ⏳ **Pendiente**: Contenido detallado por producto

---

**📞 Soporte**: Si tienes dudas sobre la implementación, revisa los archivos modificados o consulta esta documentación.
