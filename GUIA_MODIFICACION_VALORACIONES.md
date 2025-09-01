# 📋 Guía de Modificación de Valoraciones y Estrellas

Esta guía te explica cómo modificar las valoraciones (estrellas) y calificaciones de los productos para que se actualicen tanto en el **SimpleModal** como en la **página completa del producto**.

## 🎯 Archivos a Modificar

### 1. **Archivo Principal: `lib/data/real-amazon-products.ts`**

**Ubicación:** `C:\ProyectosAlba\linkerstore\lib\data\real-amazon-products.ts`

Este es el archivo donde están almacenados todos los datos de los productos de Amazon. Aquí es donde debes modificar las valoraciones.

#### 📝 **Estructura de cada producto:**

```typescript
{
  asin: "B08XYZ123A",
  title: "Chaleco de Seguridad Reflectante...",
  brand: "ProSafety",
  rating: 4.5,           // ← AQUÍ modificas la valoración (0.0 a 5.0)
  review_count: 1247,    // ← AQUÍ modificas el número de reseñas
  is_prime: true,
  image_url: "...",
  amazon_url: "...",
  category: "safety"
}
```

#### ✏️ **Cómo modificar:**

1. **Abrir el archivo:** `lib/data/real-amazon-products.ts`
2. **Buscar el producto** por su ASIN (ejemplo: "B08XYZ123A")
3. **Modificar los campos:**
   - `rating`: Número decimal de 0.0 a 5.0 (ejemplo: 4.8)
   - `review_count`: Número entero de reseñas (ejemplo: 2543)

#### 🔍 **Ejemplo de modificación:**

**Antes:**
```typescript
{
  asin: "B08XYZ123A",
  title: "Chaleco de Seguridad Reflectante...",
  rating: 4.5,
  review_count: 1247,
  // ... otros campos
}
```

**Después:**
```typescript
{
  asin: "B08XYZ123A",
  title: "Chaleco de Seguridad Reflectante...",
  rating: 4.8,           // ← Cambiado de 4.5 a 4.8
  review_count: 2543,    // ← Cambiado de 1247 a 2543
  // ... otros campos
}
```

---

## 🔄 Dónde se Actualizan Automáticamente

Una vez que modifiques el archivo `real-amazon-products.ts`, los cambios se reflejarán automáticamente en:

### 1. **SimpleModal (Modal de Vista Rápida)**
- **Archivo:** `components/modals/SimpleModal.tsx`
- **Líneas 193-205:** Sistema de renderizado de estrellas
- **Línea 206:** Número de valoración
- **Línea 207-211:** Contador de reseñas

### 2. **Página Completa del Producto**
- **Archivo:** `app/store/[asin]/page.tsx`
- **Sección:** Información del producto y valoraciones

### 3. **Tarjetas de Producto (ProductCard)**
- **Archivo:** `components/store/ProductCard.tsx`
- **Sección:** Rating y review count en las tarjetas

---

## 📊 Sistema de Estrellas

### **Cómo Funcionan las Estrellas:**

1. **Estrellas completas:** Se muestran según la parte entera del rating
2. **Media estrella:** Se muestra si hay decimales (ejemplo: 4.5 = 4 estrellas + media estrella)
3. **Estrellas vacías:** Se completan hasta 5 estrellas total

### **Ejemplos visuales:**

- `rating: 5.0` → ⭐⭐⭐⭐⭐
- `rating: 4.5` → ⭐⭐⭐⭐⭐ (4 completas + media)
- `rating: 3.2` → ⭐⭐⭐⭐⭐ (3 completas + 2 vacías)
- `rating: 4.8` → ⭐⭐⭐⭐⭐ (4 completas + media)

---

## 🎨 Personalización Avanzada

### **Si quieres modificar el diseño de las estrellas:**

**Archivo:** `components/modals/SimpleModal.tsx`
**Líneas 28-44:** Función `renderStars()`

```typescript
// Función para renderizar estrellas
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  // Estrellas completas
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
  }
  
  // Media estrella
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
  }
  
  // Estrellas vacías
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
  }
  
  return stars;
};
```

---

## 🚀 Pasos Rápidos para Cambiar Valoración

### **Ejemplo: Cambiar valoración del chaleco de 4.5 a 4.9**

1. **Abrir:** `lib/data/real-amazon-products.ts`
2. **Buscar:** `"B08XYZ123A"` (ASIN del chaleco)
3. **Cambiar:**
   ```typescript
   rating: 4.9,           // ← De 4.5 a 4.9
   review_count: 3500,    // ← Opcional: aumentar reseñas
   ```
4. **Guardar** el archivo
5. **Refrescar** la página para ver los cambios

---

## 📌 Notas Importantes

### ⚠️ **Restricciones:**
- **Rating mínimo:** 0.0
- **Rating máximo:** 5.0
- **Formato:** Usar decimales (ejemplo: 4.7, no 4,7)
- **Review count:** Números enteros positivos

### 🔄 **Sincronización:**
- Los cambios son **automáticos** en toda la aplicación
- **No necesitas** modificar otros archivos
- **Un solo archivo** controla todas las valoraciones

### 🎯 **Para productos específicos:**
- **Chaleco:** ASIN "B08XYZ123A"
- **Otros productos:** Busca por título o ASIN en el archivo

---

## 📞 Soporte

Si necesitas ayuda adicional para modificar las valoraciones o tienes preguntas sobre el sistema de estrellas, puedes:

1. Revisar los ejemplos en este documento
2. Verificar la sintaxis en `real-amazon-products.ts`
3. Probar con valores pequeños antes de hacer cambios grandes

---

**¡Con esta guía podrás modificar fácilmente las valoraciones de cualquier producto!** ⭐
