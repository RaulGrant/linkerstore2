# 📝 Guía Completa de Edición - Contenido de Productos

## 📍 **Ubicación de Archivos**

### **1. Modal QuickView** 🔍
**Archivo:** `components/modals/ProductQuickViewModal.tsx`
**Líneas:** 45-150 (aproximadamente)

### **2. Página Completa de Producto** 📄
**Archivo:** `app/store/[asin]/page.tsx`
**Función:** `generateProductContent()` (líneas 30-200 aproximadamente)

---

## 🎯 **SECCIÓN 1: RESEÑAS DE USUARIOS**

### **📍 Ubicación:**
- **Modal:** `ProductQuickViewModal.tsx` líneas ~45-90
- **Página:** `page.tsx` líneas ~40-85

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección en ambos archivos:
const detailedReviews = [
  {
    id: 1,
    name: "Carlos Mendoza",           // ← EDITAR: Nombre del usuario
    verified: true,                   // ← EDITAR: true/false para verificación
    rating: 5,                        // ← EDITAR: 1-5 estrellas
    date: "15 de julio, 2024",        // ← EDITAR: Fecha de la reseña
    title: "Excelente calidad para uso industrial", // ← EDITAR: Título
    text: `He estado usando este ${product.category?.toLowerCase()}...`, // ← EDITAR: Texto completo
    helpful: 24,                      // ← EDITAR: Número de "útil"
    images: 3,                        // ← EDITAR: Cantidad de imágenes
    pros: [                           // ← EDITAR: Lista de pros
      "Construcción robusta", 
      "Certificación completa", 
      "Confort prolongado"
    ],
    cons: [                           // ← EDITAR: Lista de contras
      "Precio ligeramente alto", 
      "Tiempo de envío"
    ]
  },
  // ↓ Repetir para reseña 2 y 3...
```

### **💡 Consejos para Reseñas:**
- **Texto:** 150-250 palabras por reseña
- **Nombres:** Usar nombres hispanos realistas
- **Fechas:** Usar fechas de los últimos 6 meses
- **Pros/Contras:** 2-4 elementos por lista
- **Helpful:** Números entre 10-50
- **Images:** Números entre 0-5

---

## 📊 **SECCIÓN 2: GRÁFICAS DE CALIFICACIONES**

### **📍 Ubicación:**
- **Modal:** `ProductQuickViewModal.tsx` líneas ~92-98
- **Página:** `page.tsx` líneas ~87-93

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección:
const ratingData = [
  { stars: 5, count: 245, percentage: 65 },  // ← EDITAR: 5 estrellas
  { stars: 4, count: 89, percentage: 24 },   // ← EDITAR: 4 estrellas  
  { stars: 3, count: 28, percentage: 7 },    // ← EDITAR: 3 estrellas
  { stars: 2, count: 11, percentage: 3 },    // ← EDITAR: 2 estrellas
  { stars: 1, count: 4, percentage: 1 }      // ← EDITAR: 1 estrella
];
```

### **🧮 Cálculos Importantes:**
- **count:** Número absoluto de reseñas por estrella
- **percentage:** Porcentaje del total (debe sumar 100%)
- **Ejemplo:** Si tienes 1000 reseñas totales:
  - 5 estrellas: 650 reseñas = 65%
  - 4 estrellas: 240 reseñas = 24%
  - etc.

---

## ⚖️ **SECCIÓN 3: COMPARACIÓN DE PRODUCTOS**

### **📍 Ubicación:**
- **Modal:** `ProductQuickViewModal.tsx` líneas ~100-125
- **Página:** `page.tsx` líneas ~95-120

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección:
const comparativeProducts = [
  {
    name: "Producto Actual",         // ← NO EDITAR (es dinámico)
    rating: product.rating || 4.5,  // ← NO EDITAR (automático)
    price: product.price,           // ← NO EDITAR (automático)
    durability: 95,                 // ← EDITAR: Durabilidad 0-100
    safety: 98,                     // ← EDITAR: Seguridad 0-100
    comfort: 92,                    // ← EDITAR: Comodidad 0-100
    value: 90                       // ← EDITAR: Valor 0-100
  },
  {
    name: "Competidor A",           // ← EDITAR: Nombre del competidor
    rating: 4.2,                    // ← EDITAR: Calificación 1-5
    price: product.price * 1.15,    // ← EDITAR: Multiplicador de precio
    durability: 88,                 // ← EDITAR: Métricas 0-100
    safety: 94,
    comfort: 85,
    value: 82
  },
  {
    name: "Competidor B",           // ← EDITAR: Segundo competidor
    rating: 4.1,                    // ← EDITAR: Calificación
    price: product.price * 0.85,    // ← EDITAR: Precio (más barato)
    durability: 82,                 // ← EDITAR: Métricas
    safety: 90,
    comfort: 88,
    value: 85
  }
];
```

### **💡 Consejos para Comparaciones:**
- **Producto Actual:** Siempre debe tener métricas altas (85-100)
- **Competidores:** Variar para mostrar ventajas/desventajas
- **Precio:** Usar multiplicadores (1.15 = 15% más caro, 0.85 = 15% más barato)

---

## 🧠 **SECCIÓN 4: ANÁLISIS DE SENTIMIENTOS**

### **📍 Ubicación:**
- **Modal:** `ProductQuickViewModal.tsx` líneas ~127-133
- **Página:** `page.tsx` líneas ~122-128

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección:
const sentimentData = [
  { aspect: "Calidad", positive: 92, negative: 8 },      // ← EDITAR
  { aspect: "Precio", positive: 78, negative: 22 },      // ← EDITAR
  { aspect: "Durabilidad", positive: 89, negative: 11 }, // ← EDITAR
  { aspect: "Comodidad", positive: 85, negative: 15 },   // ← EDITAR
  { aspect: "Diseño", positive: 91, negative: 9 }        // ← EDITAR
];
```

### **🧮 Reglas para Sentimientos:**
- **positive + negative = 100** (siempre)
- **Calidad:** Usualmente 85-95% positivo
- **Precio:** Usualmente 70-85% positivo
- **Durabilidad:** Usualmente 80-90% positivo
- **Comodidad:** Usualmente 75-90% positivo
- **Diseño:** Usualmente 85-95% positivo

---

## 📈 **SECCIÓN 5: TENDENCIAS DE VENTAS**

### **📍 Ubicación:**
- **Modal:** Líneas ~400-420 (en el JSX)
- **Página:** Similar ubicación en el JSX

### **🔧 Cómo Editar:**

```typescript
// Buscar en el JSX esta sección:
<div className="text-2xl font-bold text-green-600">+23%</div>     // ← EDITAR: Crecimiento
<div className="text-sm text-gray-600">Ventas este mes</div>

<div className="text-2xl font-bold text-blue-600">1,247</div>     // ← EDITAR: Compradores
<div className="text-sm text-gray-600">Compradores únicos</div>

<div className="text-2xl font-bold text-purple-600">2.3 años</div> // ← EDITAR: Vida útil
<div className="text-sm text-gray-600">Vida útil promedio</div>
```

---

## 📊 **SECCIÓN 6: MÉTRICAS DE SATISFACCIÓN**

### **📍 Ubicación:**
- **Modal:** En el JSX, sección "overview"
- **Página:** En el JSX, dentro de la reseña técnica

### **🔧 Cómo Editar:**

```typescript
// Buscar estas líneas en el JSX:
<div className="text-2xl font-bold text-green-600">92%</div>      // ← EDITAR: Satisfacción
<div className="text-sm text-gray-600">Satisfacción</div>

<div className="text-2xl font-bold text-blue-600">4.8/5</div>     // ← EDITAR: Calidad
<div className="text-sm text-gray-600">Calidad</div>

<div className="text-2xl font-bold text-purple-600">95%</div>     // ← EDITAR: Recompra
<div className="text-sm text-gray-600">Recomprarían</div>
```

---

## 🎯 **SECCIÓN 7: PROS Y CONTRAS POR CATEGORÍA**

### **📍 Ubicación:**
- **Modal:** No aplica (usa datos dinámicos)
- **Página:** `page.tsx` líneas ~130-180

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección:
const prosConsData = {
  epp: {                              // ← Categoría: EPP
    pros: [
      'Cumple con estándares OSHA/ANSI',     // ← EDITAR: Pros específicos
      'Materiales duraderos y resistentes',
      'Diseño ergonómico para uso prolongado',
      'Certificaciones internacionales'
    ],
    cons: [
      'Requiere mantenimiento regular',       // ← EDITAR: Contras
      'Puede requerir período de adaptación',
      'Costo inicial medio-alto'
    ]
  },
  herramientas: {                     // ← Categoría: Herramientas
    pros: [
      'Construcción robusta para uso industrial', // ← EDITAR
      'Precisión y confiabilidad',
      'Garantía del fabricante',
      'Versatilidad de aplicaciones'
    ],
    cons: [
      'Requiere calibración periódica',       // ← EDITAR
      'Necesita almacenamiento adecuado',
      'Curva de aprendizaje para nuevos usuarios'
    ]
  },
  default: {                          // ← Categoría: Por defecto
    pros: [
      'Calidad industrial verificada',        // ← EDITAR
      'Relación costo-beneficio favorable',
      'Disponibilidad inmediata',
      'Soporte técnico disponible'
    ],
    cons: [
      'Puede requerir accesorios adicionales', // ← EDITAR
      'Necesita seguir instrucciones específicas',
      'Mantenimiento preventivo recomendado'
    ]
  }
};
```

---

## 👥 **SECCIÓN 8: PERFILES DE USUARIO**

### **📍 Ubicación:**
- **Página:** `page.tsx` líneas ~185-215

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección:
const userProfiles = {
  epp: [                              // ← Categoría EPP
    'Contratistas de construcción',          // ← EDITAR: Tipos de usuario
    'Supervisores de seguridad industrial',
    'Trabajadores de soldadura',
    'Personal de mantenimiento'
  ],
  herramientas: [                     // ← Categoría Herramientas
    'Técnicos especializados',              // ← EDITAR
    'Electricistas certificados',
    'Mecánicos industriales',
    'Ingenieros de campo'
  ],
  default: [                          // ← Por defecto
    'Profesionales industriales',           // ← EDITAR
    'Contratistas generales',
    'Supervisores de obra',
    'Personal técnico'
  ]
};
```

---

## 🔧 **SECCIÓN 9: GUÍAS DE USO**

### **📍 Ubicación:**
- **Página:** `page.tsx` líneas ~220-250

### **🔧 Cómo Editar:**

```typescript
// Buscar esta sección:
const usageGuides = {
  epp: [                              // ← Categoría EPP
    '1. Inspeccionar antes de cada uso',     // ← EDITAR: Pasos
    '2. Verificar certificaciones vigentes',
    '3. Seguir protocolos de limpieza',
    '4. Almacenar en lugar seco y seguro',
    '5. Reemplazar según vida útil'
  ],
  herramientas: [                     // ← Categoría Herramientas
    '1. Calibrar antes del primer uso',     // ← EDITAR
    '2. Verificar estado de componentes',
    '3. Usar con equipos compatibles',
    '4. Mantener limpio y lubricado',
    '5. Seguir manual del fabricante'
  ],
  default: [                          // ← Por defecto
    '1. Leer manual de instrucciones',      // ← EDITAR
    '2. Verificar compatibilidad',
    '3. Usar equipo de protección',
    '4. Seguir procedimientos seguros',
    '5. Realizar mantenimiento regular'
  ]
};
```

---

## 🚀 **INSTRUCCIONES DE APLICACIÓN**

### **⚠️ IMPORTANTE:**
1. **Los cambios aplican automáticamente a TODOS los productos**
2. **Editar AMBOS archivos:** Modal y Página completa
3. **Mantener coherencia** entre ambas versiones
4. **Respetar el formato** TypeScript existente

### **📝 Pasos para Editar:**

1. **Abrir archivo:**
   ```
   components/modals/ProductQuickViewModal.tsx
   ```

2. **Buscar la sección** que quieres editar usando Ctrl+F

3. **Hacer los cambios** siguiendo los ejemplos arriba

4. **Repetir en el segundo archivo:**
   ```
   app/store/[asin]/page.tsx
   ```

5. **Guardar ambos archivos**

6. **Verificar en navegador:**
   ```
   http://localhost:3002/store/B08XYZ123A
   ```

### **🔍 Búsquedas Útiles:**
- **Reseñas:** Buscar `detailedReviews`
- **Gráficas:** Buscar `ratingData`
- **Comparación:** Buscar `comparativeProducts`
- **Sentimientos:** Buscar `sentimentData`
- **Pros/Contras:** Buscar `prosConsData`
- **Usuarios:** Buscar `userProfiles`
- **Guías:** Buscar `usageGuides`

---

## 📋 **CATEGORÍAS DISPONIBLES**

### **Categorías Reconocidas:**
- `epp` - Equipo de Protección Personal
- `herramientas` - Herramientas
- `seguridad` - Seguridad Industrial
- `default` - Por defecto (para cualquier otra)

### **Para Agregar Nueva Categoría:**

1. **Añadir en prosConsData:**
```typescript
nuevacategoria: {
  pros: ["Pro 1", "Pro 2", "Pro 3"],
  cons: ["Con 1", "Con 2"]
}
```

2. **Añadir en userProfiles:**
```typescript
nuevacategoria: [
  "Usuario tipo 1",
  "Usuario tipo 2"
]
```

3. **Añadir en usageGuides:**
```typescript
nuevacategoria: [
  "1. Paso uno",
  "2. Paso dos"
]
```

---

## ✅ **CHECKLIST DE EDICIÓN**

- [ ] Editado Modal QuickView
- [ ] Editado Página Completa  
- [ ] Coherencia entre ambos archivos
- [ ] Verificado formato TypeScript
- [ ] Probado en navegador
- [ ] Sin errores de consola

---

## 📞 **SOPORTE**

Si encuentras errores:
1. Verificar sintaxis TypeScript
2. Revisar que las comas estén correctas
3. Verificar que los porcentajes sumen 100%
4. Asegurar que no falten comillas o corchetes
