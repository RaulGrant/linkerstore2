# 🚀 Guía Rápida de Referencia - Edición de Productos

## 📂 **ARCHIVOS PRINCIPALES**

### **Modal QuickView:**
```
components/modals/ProductQuickViewModal.tsx
```

### **Página Completa:**
```
app/store/[asin]/page.tsx
```

---

## 🔍 **BÚSQUEDAS RÁPIDAS (Ctrl+F)**

| **Sección** | **Buscar** | **Línea Aprox.** |
|-------------|------------|-------------------|
| Reseñas de usuarios | `detailedReviews` | 45-90 |
| Gráficas de estrellas | `ratingData` | 92-98 |
| Comparación productos | `comparativeProducts` | 100-125 |
| Análisis sentimientos | `sentimentData` | 127-133 |
| Pros/Contras | `prosConsData` | 135-170 |
| Perfiles usuario | `userProfiles` | 175-200 |
| Guías de uso | `usageGuides` | 205-235 |
| Métricas satisfacción | `92%` o `4.8/5` | En JSX |
| Tendencias ventas | `+23%` o `1,247` | En JSX |

---

## ⚡ **EDICIONES MÁS COMUNES**

### **1. Cambiar Reseñas (2 min):**
```typescript
// Buscar: detailedReviews
name: "Nuevo Nombre",
rating: 5,
title: "Nuevo título",
text: `Nuevo texto de la reseña...`,
helpful: 25,
pros: ["Pro 1", "Pro 2"],
cons: ["Con 1", "Con 2"]
```

### **2. Ajustar Gráficas (1 min):**
```typescript
// Buscar: ratingData
{ stars: 5, count: 200, percentage: 60 },
{ stars: 4, count: 100, percentage: 30 },
{ stars: 3, count: 20, percentage: 6 },
{ stars: 2, count: 10, percentage: 3 },
{ stars: 1, count: 3, percentage: 1 }
```

### **3. Modificar Comparación (2 min):**
```typescript
// Buscar: comparativeProducts
{
  name: "Competidor Nuevo",
  rating: 4.2,
  price: product.price * 1.20,
  durability: 85,
  safety: 90,
  comfort: 88,
  value: 80
}
```

### **4. Cambiar Sentimientos (1 min):**
```typescript
// Buscar: sentimentData
{ aspect: "Calidad", positive: 95, negative: 5 },
{ aspect: "Precio", positive: 80, negative: 20 },
```

---

## 📊 **VALORES TÍPICOS POR CATEGORÍA**

### **EPP (Seguridad):**
- **Seguridad:** 95-99
- **Durabilidad:** 90-96
- **Calidad positiva:** 90-95%

### **Herramientas:**
- **Durabilidad:** 88-95
- **Valor:** 85-94
- **Calidad positiva:** 85-92%

### **Económicos (<$50):**
- **5 estrellas:** 40-55%
- **Valor:** 80-90
- **Precio positivo:** 75-85%

### **Premium (>$100):**
- **5 estrellas:** 60-75%
- **Durabilidad:** 90-98
- **Calidad positiva:** 90-96%

---

## ⚠️ **REGLAS IMPORTANTES**

1. **Porcentajes SIEMPRE suman 100%**
2. **Editar AMBOS archivos** (Modal + Página)
3. **Mantener coherencia** entre métricas
4. **Productos de seguridad = métricas altas**
5. **Precio alto = expectativas altas**

---

## 🎯 **CHECKLIST RÁPIDO**

- [ ] Modal editado
- [ ] Página editada
- [ ] Porcentajes correctos
- [ ] Sin errores sintaxis
- [ ] Probado en navegador

---

## 🔧 **COMANDOS ÚTILES**

### **Reiniciar servidor:**
```bash
Ctrl+C (en terminal)
pnpm run dev
```

### **Ver producto:**
```
http://localhost:3002/store/B08XYZ123A
```

### **Verificar errores:**
```bash
npx tsc --noEmit --skipLibCheck
```

---

## 🆘 **PROBLEMAS COMUNES**

### **Error: Cannot read property...**
- **Causa:** Falta coma o corchete
- **Solución:** Verificar sintaxis TypeScript

### **Gráficas no se muestran:**
- **Causa:** Porcentajes no suman 100%
- **Solución:** Recalcular porcentajes

### **Página no carga:**
- **Causa:** Error en función generateProductContent
- **Solución:** Verificar estructura de datos

### **Modal no abre:**
- **Causa:** Error en detailedReviews
- **Solución:** Verificar formato de reseñas

---

## 📱 **CONTACTO RÁPIDO**

Si tienes problemas:
1. Verificar console del navegador (F12)
2. Revisar terminal de desarrollo
3. Comparar con formato original
4. Usar búsquedas de esta guía

---

## 📋 **PLANTILLAS LISTAS**

### **Reseña Nueva:**
```typescript
{
  id: 4,
  name: "Ana García",
  verified: true,
  rating: 4,
  date: "12 de agosto, 2024",
  title: "Muy satisfecha con la compra",
  text: `Producto excelente para uso diario. La calidad es muy buena y cumple perfectamente con lo que necesitaba. Llegó rápido y bien empacado. Lo recomiendo.`,
  helpful: 15,
  images: 2,
  pros: ["Buena calidad", "Llegó rápido", "Buen precio"],
  cons: ["Instrucciones mejorar", "Empaque regular"]
}
```

### **Competidor Nuevo:**
```typescript
{
  name: "Marca Competidora",
  rating: 4.0,
  price: product.price * 1.10,
  durability: 85,
  safety: 88,
  comfort: 82,
  value: 78
}
```

### **Sentimiento Balanceado:**
```typescript
{ aspect: "Calidad", positive: 88, negative: 12 },
{ aspect: "Precio", positive: 82, negative: 18 },
{ aspect: "Durabilidad", positive: 85, negative: 15 },
{ aspect: "Comodidad", positive: 79, negative: 21 },
{ aspect: "Diseño", positive: 83, negative: 17 }
```
