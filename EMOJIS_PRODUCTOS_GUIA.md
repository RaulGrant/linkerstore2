# 🎨 Guía de Personalización de Emojis de Productos

## 📍 Ubicación de los Emojis

Los emojis de productos se configuran en el archivo:
```
/lib/data/product-fichas.ts
```

### 🔧 Cómo Cambiar un Emoji

1. **Abre el archivo**: `lib/data/product-fichas.ts`
2. **Busca el producto por ASIN**: Ejemplo `B08XYZ123A`
3. **Modifica la propiedad `icon`**:

```typescript
{
  id: "1",
  asin: "B08XYZ123A",
  customTitle: "Chaleco Reflectante Profesional",
  icon: "🦺", // ← AQUÍ cambias el emoji
  // ... resto de propiedades
}
```

## 🎭 Catálogo de Emojis Disponibles por Categoría

### 🛡️ Equipo de Protección Personal (EPP)
- `🦺` - Chalecos reflectantes
- `👷` - Cascos de seguridad
- `🥽` - Gafas de protección
- `🧤` - Guantes de trabajo
- `👢` - Botas de seguridad
- `😷` - Mascarillas y respiradores
- `🎧` - Protección auditiva

### 👔 Uniformes y Ropa de Trabajo
- `👔` - Overoles profesionales
- `👕` - Camisas de trabajo
- `🧥` - Chaquetas industriales
- `👖` - Pantalones de trabajo
- `🩳` - Shorts de trabajo
- `👘` - Delantales
- `🦺` - Chalecos de trabajo

### 🔧 Herramientas
- `🔧` - Llaves y herramientas manuales
- `🔨` - Martillos
- `⚡` - Herramientas eléctricas
- `🪚` - Sierras
- `📏` - Instrumentos de medición
- `🪜` - Escaleras
- `🧰` - Cajas de herramientas

### 🏗️ Construcción
- `🧱` - Materiales de construcción
- `🏗️` - Equipos de construcción
- `⚖️` - Equipos de medición
- `🔩` - Tornillos y sujetadores
- `🪣` - Contenedores y baldes
- `🎯` - Equipos de precisión

### 🚗 Automotriz
- `🚗` - Accesorios para vehículos
- `🔋` - Baterías
- `⚙️` - Repuestos mecánicos
- `🛞` - Neumáticos
- `🔧` - Herramientas automotrices
- `🚙` - Equipos para camiones

### 🏠 Hogar y Oficina
- `🏠` - Artículos para el hogar
- `💻` - Equipos de oficina
- `📱` - Electrónicos
- `🪑` - Muebles
- `💡` - Iluminación
- `🧹` - Limpieza

## 📐 Tamaños de Emojis Configurados

### 🔍 Ubicaciones donde aparecen los emojis:

1. **Página principal del producto** (`app/store/[asin]/page.tsx`)
   - Tamaño: `text-9xl` (muy grande)
   - Con animación bounce

2. **Quick View Modal** (`components/modals/ProductQuickViewModal.tsx`)
   - Tamaño: `text-8xl` (grande)
   - Con animación bounce

3. **Cards de productos** (en componentes de lista)
   - Tamaño: `text-4xl` (mediano)

### 🎨 Para hacer emojis aún más grandes:

Si quieres emojis súper grandes, puedes cambiar las clases CSS:

```typescript
// Cambiar de:
<div className="text-9xl mb-4 animate-bounce">

// A:
<div className="text-[12rem] mb-4 animate-bounce"> // Súper grande
// o
<div className="text-[10rem] mb-4 animate-bounce"> // Extra grande
```

## 🚀 Agregar Nuevos Productos con Emojis

### Plantilla para producto nuevo:

```typescript
{
  id: "X", // Número secuencial
  asin: "B0XXXXXXXX", // ASIN del producto
  customTitle: "Nombre descriptivo del producto",
  icon: "🔥", // ← Emoji que represente el producto
  technicalAnalysis: "Análisis detallado...",
  features: [
    "Característica 1",
    "Característica 2",
    // ...
  ],
  usageGuide: "Guía de uso...",
  whyChoose: "Razones para elegir...",
  originalReview: "Reseña original...",
  amazonUrl: "https://a.co/d/...",
  price: 0.00,
  category: "Categoría",
  brand: "Marca",
  rating: 4.5
}
```

## 🎯 Mejores Prácticas para Emojis

### ✅ Recomendaciones:
- Usar emojis que representen claramente el producto
- Mantener consistencia en la categoría (todos los chalecos con 🦺)
- Elegir emojis visualmente atractivos y reconocibles
- Evitar emojis muy complejos que no se vean bien en grande

### ❌ Evitar:
- Emojis muy abstractos o confusos
- Cambiar emojis frecuentemente (confunde a usuarios)
- Emojis que no tienen relación con el producto
- Emojis que no se ven bien en todos los dispositivos

## 🔄 Aplicar Cambios

Después de modificar los emojis:

1. **Guarda el archivo** `product-fichas.ts`
2. **El servidor de desarrollo se recarga automáticamente**
3. **Verifica los cambios** en la página del producto y modal

## 📞 Soporte Técnico

Si necesitas ayuda para:
- Agregar más productos
- Cambiar el tamaño de emojis
- Crear nuevas categorías
- Configurar animaciones personalizadas

¡Contáctanos para asistencia técnica personalizada!
