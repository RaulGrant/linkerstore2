# 📸 Guía de Imágenes para el Catálogo de Productos

## 🎯 Ubicación de las Imágenes

### Estructura de Carpetas
```
public/
  └── images/
      └── productos/
          ├── herramientas/
          ├── epp/
          ├── instrumentos/
          ├── kits/
          └── accesorios/
```

### Convención de Nombres
- **Formato:** `nombre-producto-numero.jpg` o `nombre-producto-numero.webp`
- **Ejemplo:** `taladro-bosch-1.jpg`, `taladro-bosch-2.jpg`, `taladro-bosch-3.jpg`
- **Sin espacios:** Usar guiones `-` en lugar de espacios
- **Minúsculas:** Todo en minúsculas
- **Numeración:** Empezar desde 1

## 🖼️ Especificaciones Técnicas

### Formatos Recomendados
- **Preferido:** `.webp` (mejor compresión)
- **Alternativo:** `.jpg` (compatible universal)
- **Evitar:** `.png` (archivos muy pesados para fotos)

### Dimensiones
- **Tamaño mínimo:** 800x800px
- **Tamaño óptimo:** 1200x1200px
- **Tamaño máximo:** 2000x2000px
- **Aspecto:** 1:1 (cuadrado) preferido

### Calidad
- **Resolución:** 72-150 DPI
- **Calidad JPEG:** 85-95%
- **Peso máximo:** 500KB por imagen
- **Compresión:** Usar herramientas como TinyPNG

## 🔧 Configuración en el Código

### Estructura del Producto con Múltiples Imágenes

```javascript
{
  id: "producto-001",
  name: "Taladro Bosch Professional",
  brand: "Bosch",
  category: "Herramientas Eléctricas",
  image: "/images/productos/herramientas/taladro-bosch-1.webp", // Imagen principal
  images: [ // Array de imágenes para el carrusel
    "/images/productos/herramientas/taladro-bosch-1.webp",
    "/images/productos/herramientas/taladro-bosch-2.webp",
    "/images/productos/herramientas/taladro-bosch-3.webp",
    "/images/productos/herramientas/taladro-bosch-4.webp"
  ],
  description: "Taladro profesional de alta potencia...",
  features: [
    "Motor de 800W",
    "13mm de capacidad",
    "Velocidad variable",
    "Incluye maletín"
  ],
  rating: 4.8,
  reviews: 234,
  amazonUrl: "https://amazon.com/...",
  // ... otros campos
}
```

### Ejemplo Completo de Producto

```javascript
{
  id: "chaleco-001",
  name: "Chaleco Reflectivo Alta Visibilidad",
  brand: "SafetyPro",
  category: "EPP",
  image: "/images/productos/epp/chaleco-reflectivo-1.webp",
  images: [
    "/images/productos/epp/chaleco-reflectivo-1.webp", // Vista frontal
    "/images/productos/epp/chaleco-reflectivo-2.webp", // Vista posterior
    "/images/productos/epp/chaleco-reflectivo-3.webp", // Detalle de cintas
    "/images/productos/epp/chaleco-reflectivo-4.webp", // En uso
    "/images/productos/epp/chaleco-reflectivo-5.webp"  // Empaque
  ],
  description: "Chaleco reflectivo de alta visibilidad conforme a normas mexicanas de seguridad industrial.",
  features: [
    "Tela 100% poliéster",
    "Cintas reflectivas 3M",
    "Conforme NOM-116-STPS",
    "Tallas S-XXXL disponibles",
    "Lavable a máquina"
  ],
  model: "SPV-001",
  rating: 4.6,
  reviews: 89,
  price: 185,
  originalPrice: 220,
  amazonUrl: "https://amazon.com.mx/dp/...",
}
```

## 📋 Checklist para Agregar Imágenes

### ✅ Antes de Subir
- [ ] Imágenes en formato .webp o .jpg
- [ ] Dimensiones mínimas 800x800px
- [ ] Peso menor a 500KB por imagen
- [ ] Nombres sin espacios ni caracteres especiales
- [ ] Numeración secuencial (1, 2, 3, ...)

### ✅ Tipos de Fotos Recomendadas
1. **Imagen Principal:** Vista frontal/completa del producto
2. **Vista Lateral:** Otro ángulo del producto
3. **Detalles:** Características específicas (etiquetas, materiales, etc.)
4. **En Uso:** Producto siendo utilizado (si aplica)
5. **Empaque:** Caja o presentación original
6. **Accesorios:** Componentes adicionales incluidos

### ✅ Calidad de Imagen
- [ ] Buena iluminación (preferir luz natural)
- [ ] Fondo neutro (blanco o gris claro)
- [ ] Producto centrado y completo en el encuadre
- [ ] Enfoque nítido en todo el producto
- [ ] Sin reflejos o sombras molestas

## 🚀 Proceso de Implementación

### Paso 1: Preparar las Imágenes
1. Tomar/recopilar fotos del producto
2. Redimensionar a 1200x1200px
3. Comprimir usando TinyPNG o similar
4. Renombrar según convención

### Paso 2: Subir a la Carpeta Correcta
```bash
# Ejemplo de estructura:
public/images/productos/herramientas/
├── taladro-bosch-1.webp
├── taladro-bosch-2.webp
├── taladro-bosch-3.webp
└── taladro-bosch-4.webp
```

### Paso 3: Actualizar el Código
```javascript
// En app/catalogo/page.tsx, agregar/modificar el producto:
{
  // ... otros campos
  image: "/images/productos/herramientas/taladro-bosch-1.webp",
  images: [
    "/images/productos/herramientas/taladro-bosch-1.webp",
    "/images/productos/herramientas/taladro-bosch-2.webp",
    "/images/productos/herramientas/taladro-bosch-3.webp",
    "/images/productos/herramientas/taladro-bosch-4.webp"
  ],
  // ... otros campos
}
```

## 🔍 Funcionalidades del Carrusel

### Navegación
- **Flechas:** Navegación anterior/siguiente
- **Indicadores:** Puntos en la parte inferior
- **Thumbnails:** Miniaturas debajo de la imagen principal
- **Click:** Click en thumbnail para cambiar imagen

### Características
- **Responsive:** Se adapta a móvil y desktop
- **Touch:** Soporte para gestos touch en móviles
- **Lazy Loading:** Carga optimizada de imágenes
- **Animaciones:** Transiciones suaves entre imágenes

## 🛠️ Herramientas Recomendadas

### Compresión de Imágenes
- **Online:** [TinyPNG](https://tinypng.com/)
- **Software:** ImageOptim (Mac), Squoosh (Web)

### Redimensionamiento
- **Online:** [Photopea](https://photopea.com/) (gratuito)
- **Software:** GIMP, Photoshop, Figma

### Conversión a WebP
- **Online:** [Convertio](https://convertio.co/jpg-webp/)
- **Comando:** `cwebp imagen.jpg -o imagen.webp`

## ❗ Notas Importantes

1. **Fallback:** Si no hay `images` array, se usa la imagen principal
2. **Performance:** Máximo 6 imágenes por producto recomendado
3. **SEO:** Usar nombres descriptivos para las imágenes
4. **Accesibilidad:** Incluir texto alternativo descriptivo
5. **Consistencia:** Mantener el mismo estilo visual en todas las fotos

## 📞 Soporte

Si necesitas ayuda con la implementación o tienes dudas sobre el formato de imágenes, revisa:
- La estructura actual en `app/catalogo/page.tsx`
- Los productos existentes como ejemplo
- Las carpetas en `public/images/productos/`

**¡Listo!** Con esta guía podrás agregar imágenes profesionales que se mostrarán perfectamente en el carrusel del modal de productos. 🎉