# 📊 Guía Específica: Valores y Métricas de Gráficas

## 🎯 **VALORES RECOMENDADOS POR TIPO DE PRODUCTO**

### **🛡️ EPP (Equipo de Protección Personal)**

#### **Distribución de Calificaciones Típica:**
```typescript
const ratingData = [
  { stars: 5, count: 180, percentage: 60 },  // EPP premium
  { stars: 4, count: 90, percentage: 30 },   // Buena calidad
  { stars: 3, count: 21, percentage: 7 },    // Promedio
  { stars: 2, count: 6, percentage: 2 },     // Bajo
  { stars: 1, count: 3, percentage: 1 }      // Defectuoso
];
```

#### **Métricas de Comparación:**
```typescript
// Producto Actual (EPP de calidad)
durability: 95,    // EPP debe ser muy duradero
safety: 98,        // Seguridad es crítica
comfort: 88,       // Comodidad importante pero no crítica
value: 87          // Relación precio-beneficio
```

#### **Análisis de Sentimientos:**
```typescript
const sentimentData = [
  { aspect: "Calidad", positive: 94, negative: 6 },      // Alta calidad esperada
  { aspect: "Precio", positive: 75, negative: 25 },      // Precio puede ser alto
  { aspect: "Durabilidad", positive: 96, negative: 4 },  // Durabilidad crítica
  { aspect: "Comodidad", positive: 82, negative: 18 },   // Comodidad variable
  { aspect: "Diseño", positive: 79, negative: 21 }       // Diseño menos importante
];
```

---

### **🔧 HERRAMIENTAS**

#### **Distribución de Calificaciones Típica:**
```typescript
const ratingData = [
  { stars: 5, count: 220, percentage: 55 },  // Herramientas profesionales
  { stars: 4, count: 140, percentage: 35 },  // Buena funcionalidad
  { stars: 3, count: 28, percentage: 7 },    // Promedio
  { stars: 2, count: 8, percentage: 2 },     // Problemas menores
  { stars: 1, count: 4, percentage: 1 }      // Defectuosas
];
```

#### **Métricas de Comparación:**
```typescript
// Producto Actual (Herramienta profesional)
durability: 93,    // Muy duraderas
safety: 91,        // Seguridad importante
comfort: 89,       // Ergonomía importante
value: 92          // Buen valor por dinero
```

#### **Análisis de Sentimientos:**
```typescript
const sentimentData = [
  { aspect: "Calidad", positive: 91, negative: 9 },      // Calidad esperada
  { aspect: "Precio", positive: 84, negative: 16 },      // Precio justificado
  { aspect: "Durabilidad", positive: 93, negative: 7 },  // Durabilidad clave
  { aspect: "Comodidad", positive: 87, negative: 13 },   // Ergonomía importante
  { aspect: "Diseño", positive: 89, negative: 11 }       // Diseño funcional
];
```

---

### **🏭 SEGURIDAD INDUSTRIAL**

#### **Distribución de Calificaciones Típica:**
```typescript
const ratingData = [
  { stars: 5, count: 195, percentage: 65 },  // Seguridad crítica
  { stars: 4, count: 75, percentage: 25 },   // Buena seguridad
  { stars: 3, count: 21, percentage: 7 },    // Promedio
  { stars: 2, count: 6, percentage: 2 },     // Preocupante
  { stars: 1, count: 3, percentage: 1 }      // Peligroso
];
```

#### **Métricas de Comparación:**
```typescript
// Producto Actual (Seguridad Industrial)
durability: 96,    // Máxima durabilidad
safety: 99,        // Seguridad crítica
comfort: 85,       // Comodidad secundaria
value: 89          // Inversión justificada
```

---

## 🎛️ **RANGOS RECOMENDADOS POR MÉTRICA**

### **📊 Distribución de Estrellas**

#### **Productos Premium (>$100):**
- 5 estrellas: 60-70%
- 4 estrellas: 20-30%
- 3 estrellas: 5-10%
- 2 estrellas: 1-3%
- 1 estrella: 0-2%

#### **Productos Medios ($50-$100):**
- 5 estrellas: 45-60%
- 4 estrellas: 25-35%
- 3 estrellas: 8-15%
- 2 estrellas: 2-5%
- 1 estrella: 1-3%

#### **Productos Económicos (<$50):**
- 5 estrellas: 35-50%
- 4 estrellas: 30-40%
- 3 estrellas: 10-20%
- 2 estrellas: 3-8%
- 1 estrella: 2-5%

---

### **⚖️ Métricas de Comparación (0-100)**

#### **Durabilidad:**
- **Excelente:** 90-100
- **Muy bueno:** 80-89
- **Bueno:** 70-79
- **Promedio:** 60-69
- **Bajo:** <60

#### **Seguridad:**
- **Crítica (EPP):** 95-100
- **Muy seguro:** 85-94
- **Seguro:** 75-84
- **Promedio:** 65-74
- **Preocupante:** <65

#### **Comodidad:**
- **Muy cómodo:** 85-100
- **Cómodo:** 75-84
- **Aceptable:** 65-74
- **Incómodo:** 55-64
- **Muy incómodo:** <55

#### **Valor:**
- **Excelente valor:** 90-100
- **Buen valor:** 80-89
- **Valor justo:** 70-79
- **Caro:** 60-69
- **Muy caro:** <60

---

### **🧠 Análisis de Sentimientos (Positivo %)**

#### **Por Aspecto - Rangos Típicos:**

**Calidad:**
- Productos premium: 90-95%
- Productos buenos: 85-90%
- Productos promedio: 75-85%

**Precio:**
- Muy competitivo: 85-90%
- Competitivo: 75-85%
- Caro pero justificado: 65-75%
- Caro: 50-65%

**Durabilidad:**
- Herramientas profesionales: 90-95%
- EPP: 88-94%
- Productos estándar: 80-88%

**Comodidad:**
- Productos ergonómicos: 85-92%
- Diseño estándar: 75-85%
- Funcional básico: 65-75%

**Diseño:**
- Diseño premium: 90-95%
- Diseño moderno: 85-90%
- Diseño funcional: 75-85%
- Diseño básico: 65-75%

---

## 📈 **TENDENCIAS DE VENTAS - Valores Realistas**

### **Crecimiento Mensual:**
- **Productos nuevos:** +15% a +30%
- **Productos establecidos:** +5% a +15%
- **Productos estacionales:** +20% a +50%
- **Productos en declive:** -5% a +5%

### **Compradores Únicos:**
- **Productos nicho:** 200-800
- **Productos populares:** 800-2000
- **Productos masivos:** 2000-5000

### **Vida Útil Promedio:**
- **EPP:** 6 meses - 2 años
- **Herramientas manuales:** 2-5 años
- **Herramientas eléctricas:** 3-7 años
- **Equipos industriales:** 5-15 años

---

## 📊 **MÉTRICAS DE SATISFACCIÓN**

### **Satisfacción General:**
- **Excelente:** 90-95%
- **Muy bueno:** 85-90%
- **Bueno:** 80-85%
- **Promedio:** 70-80%

### **Calidad (x/5):**
- **Premium:** 4.7-5.0
- **Muy bueno:** 4.3-4.6
- **Bueno:** 4.0-4.2
- **Promedio:** 3.5-3.9

### **Recompra (%):**
- **Marca fiel:** 90-95%
- **Satisfechos:** 80-90%
- **Contentos:** 70-80%
- **Indecisos:** 60-70%

---

## 🔢 **EJEMPLOS PRÁCTICOS**

### **Ejemplo 1: Casco de Seguridad Premium ($85)**
```typescript
// Distribución de calificaciones
{ stars: 5, count: 195, percentage: 65 }
{ stars: 4, count: 75, percentage: 25 }
{ stars: 3, count: 21, percentage: 7 }
{ stars: 2, count: 6, percentage: 2 }
{ stars: 1, count: 3, percentage: 1 }

// Métricas de comparación
durability: 94, safety: 98, comfort: 88, value: 87

// Sentimientos
Calidad: 93% positivo
Precio: 76% positivo
Durabilidad: 95% positivo
Comodidad: 84% positivo
Diseño: 81% positivo

// Satisfacción
Satisfacción: 91%
Calidad: 4.6/5
Recompra: 88%
```

### **Ejemplo 2: Taladro Industrial ($145)**
```typescript
// Distribución de calificaciones
{ stars: 5, count: 220, percentage: 55 }
{ stars: 4, count: 140, percentage: 35 }
{ stars: 3, count: 28, percentage: 7 }
{ stars: 2, count: 8, percentage: 2 }
{ stars: 1, count: 4, percentage: 1 }

// Métricas de comparación
durability: 93, safety: 89, comfort: 91, value: 94

// Sentimientos
Calidad: 91% positivo
Precio: 87% positivo
Durabilidad: 93% positivo
Comodidad: 89% positivo
Diseño: 90% positivo

// Satisfacción
Satisfacción: 89%
Calidad: 4.4/5
Recompra: 86%
```

---

## ⚡ **CONSEJOS RÁPIDOS**

### **Para Productos Nuevos:**
- Menos reseñas totales (50-200)
- Distribución más conservadora
- Sentimientos ligeramente más bajos

### **Para Productos Establecidos:**
- Más reseñas (200-500+)
- Distribución más estable
- Métricas más altas y consistentes

### **Para Productos Premium:**
- Altas expectativas = métricas altas
- Precio justificado por calidad
- Durabilidad y seguridad prioritarias

### **Para Productos Económicos:**
- Expectativas moderadas
- Valor por dinero importante
- Aceptar compromisos en durabilidad

---

## ⚠️ **ERRORES COMUNES A EVITAR**

1. **Porcentajes que no suman 100%**
2. **Métricas demasiado perfectas** (todo en 95-100%)
3. **Sentimientos inconsistentes** con el precio
4. **Reseñas muy positivas** para productos baratos
5. **Durabilidad baja** en productos de seguridad
6. **Precios irreales** en comparaciones

---

## 🎯 **VALIDACIÓN FINAL**

Antes de guardar, verificar:
- [ ] Porcentajes suman 100%
- [ ] Métricas coherentes con precio
- [ ] Sentimientos realistas
- [ ] No hay valores extremos injustificados
- [ ] Consistencia entre modal y página
