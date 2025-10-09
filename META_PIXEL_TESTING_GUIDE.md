# 🔍 Meta Pixel - Guía de Testing y Validación

## 🎯 **Validación Completa del Meta Pixel**

### ✅ **Estado Actual: IMPLEMENTACIÓN COMPLETA**

Todas las fases de implementación han sido completadas exitosamente:

- ✅ **Fase 1**: Configuración base en layout.tsx
- ✅ **Fase 2**: Enlaces de afiliados (Amazon/Mercado Libre)
- ✅ **Fase 3**: Componentes de tienda (ProductCard, ProductModal)
- ✅ **Fase 4**: Páginas principales con ViewContent tracking
- ✅ **Fase 5**: Scroll depth y engagement tracking avanzado
- ✅ **Fase 6**: Navegación y guías interactivas

## 🛠️ **Herramientas de Testing Necesarias**

### **1. Facebook Pixel Helper (Chrome Extension)**
**Instalación:**
1. Ve a Chrome Web Store
2. Busca "Facebook Pixel Helper"
3. Añade la extensión
4. Pin la extensión en la barra de herramientas

### **2. Facebook Events Manager**
**Acceso:**
1. Ve a [business.facebook.com](https://business.facebook.com)
2. Events Manager > Tu Pixel (ID: 2002160850545438)
3. Pestaña "Test Events" para ver eventos en tiempo real

### **3. Meta Pixel Debugger**
**URL:** [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)

## 🧪 **Protocolo de Testing Paso a Paso**

### **Test 1: Verificación Básica del Pixel**

1. **Abrir el sitio:** http://localhost:3000
2. **Verificar con Pixel Helper:**
   - ✅ Pixel Helper debe mostrar "1 pixel found"
   - ✅ Estado: "Active"
   - ✅ Eventos: "PageView"

**Resultado esperado:**
```
✓ Facebook Pixel (2002160850545438)
✓ PageView event fired
✓ No errors detected
```

### **Test 2: Eventos de Navegación**

**Pasos:**
1. Hacer click en logo "LinkerPro" → Debe trackear `nav_click`
2. Navegar a diferentes secciones del menú
3. Verificar cada navegación genera evento

**Eventos esperados:**
- `Custom Event: nav_click`
- Parámetros: `{element_type: "nav_click", element_id: "logo", page_context: "navigation_to_/"}`

### **Test 3: Blog Articles Tracking**

**Artículo 1: Chalecos de Seguridad**
1. **URL:** http://localhost:3000/blog/mejores-chalecos-seguridad-2025
2. **Eventos esperados:**
   - ✅ `PageView` (automático)
   - ✅ `ViewContent` (artículo)
   - ✅ `Lead` (al hacer click en Amazon)

**Test específico:**
```bash
1. Cargar página → ViewContent event
2. Scroll down 50% → ScrollDepth event (50%)
3. Click "Ver en Amazon" → Lead event + AffiliateClick custom event
4. Permanecer 30 segundos → TimeOnPage event
```

**Artículo 2: Kits de Herramientas**
1. **URL:** http://localhost:3000/blog/top-7-kits-herramientas-2025
2. **Mismos eventos que artículo 1**

### **Test 4: Componentes de Tienda**

**ProductCard Testing:**
1. Ir a página con productos (si existe)
2. **Hover sobre ProductCard** → `ViewContent` (producto)
3. **Click "Ver detalles"** → `AddToCart` (simulado)
4. **Click "Comprar en Amazon"** → `Lead` + `InitiateCheckout`

**ProductModal Testing:**
1. Abrir modal de producto
2. **Click tabs** → `ElementInteraction` events
3. **Click "Comprar en Amazon"** → `InitiateCheckout` + `Lead`

### **Test 5: Scroll Depth & Engagement**

**Homepage Testing:**
1. **Cargar homepage** → `ViewContent` (página)
2. **Scroll 25%** → `ScrollDepth` (25%)
3. **Scroll 50%** → `ScrollDepth` (50%)
4. **Scroll 75%** → `ScrollDepth` (75%)
5. **Scroll 100%** → `ScrollDepth` (100%)
6. **Esperar 30 seg** → `TimeOnPage` (30 segundos)

### **Test 6: Guías Interactivas**

**NOM-009 Guide:**
1. **URL:** http://localhost:3000/blog/guia-nom-009-stps-2011-trabajos-altura
2. **Cargar página** → `ViewContent` (guía)
3. **Click en tabs** → `ElementInteraction` events
4. **Scroll completo** → Múltiples `ScrollDepth`

### **Test 7: Comparación de Productos**

**ProductComparison Component:**
1. Ir a artículo con comparación
2. **Click botones de productos** → `Lead` events con contexto "product_comparison"
3. Verificar plataforma correcta (amazon/mercadolibre)

## 📊 **Eventos y Parámetros Esperados**

### **Standard Events:**
```javascript
// PageView - Automático en cada página
fbq('track', 'PageView');

// ViewContent - Artículos, productos, páginas
fbq('track', 'ViewContent', {
  content_type: 'article|product|page',
  content_ids: ['generated_id'],
  content_name: 'Nombre del contenido',
  content_category: 'categoria'
});

// Lead - Clicks en afiliados
fbq('track', 'Lead', {
  content_name: 'amazon_affiliate_click',
  content_category: 'affiliate_link',
  content_ids: ['product_id'],
  value: 1.0, // Amazon: 1.0, Mercado Libre: 0.8
  currency: 'USD'
});

// AddToCart - Interés en producto
fbq('track', 'AddToCart', {
  content_type: 'product',
  content_ids: ['product_id'],
  content_name: 'Nombre producto',
  value: 1,
  currency: 'USD'
});

// InitiateCheckout - Redirección a afiliado
fbq('track', 'InitiateCheckout', {
  content_type: 'product',
  content_ids: ['product_id'],
  content_name: 'Nombre producto',
  value: 1,
  currency: 'USD'
});
```

### **Custom Events:**
```javascript
// AffiliateClick - Tracking detallado de afiliados
fbq('trackCustom', 'AffiliateClick', {
  platform: 'amazon|mercadolibre',
  product_id: 'id',
  product_name: 'nombre',
  category: 'categoria'
});

// ScrollDepth - Engagement de scroll
fbq('trackCustom', 'ScrollDepth', {
  percentage: 25|50|75|100,
  page_title: 'Título página',
  timestamp: 'ISO_timestamp'
});

// TimeOnPage - Tiempo en página
fbq('trackCustom', 'TimeOnPage', {
  seconds: 30|60|90...,
  page_title: 'Título página',
  timestamp: 'ISO_timestamp'
});

// ElementInteraction - Interacciones específicas
fbq('trackCustom', 'ElementInteraction', {
  element_type: 'tab_click|nav_click|button_click',
  element_id: 'identificador',
  page_context: 'contexto',
  timestamp: 'ISO_timestamp'
});
```

## 🚨 **Problemas Comunes y Soluciones**

### **1. Pixel Helper muestra "No Pixel Found"**
**Solución:**
- Verificar que el servidor esté corriendo en puerto 3000
- Revisar consola del navegador por errores JavaScript
- Confirmar que `app/layout.tsx` tiene el script del pixel

### **2. Eventos no aparecen en Events Manager**
**Solución:**
- Los eventos pueden tardar hasta 15 minutos en aparecer
- Usar "Test Events" para testing en tiempo real
- Verificar que el Pixel ID (2002160850545438) sea correcto

### **3. Eventos duplicados**
**Solución:**
- Verificar que no hay múltiples llamadas al mismo evento
- Revisar que el `useEffect` tenga las dependencias correctas

### **4. Errores en consola**
**Solución típica:**
```javascript
// Error: fbq is not defined
// Verificar que el script se carga antes de los eventos
if (typeof window !== 'undefined' && window.fbq) {
  window.fbq('track', 'Event');
}
```

## ✅ **Checklist de Validación Final**

### **Verificaciones Técnicas:**
- [ ] Pixel Helper muestra pixel activo
- [ ] PageView se dispara en cada navegación
- [ ] ViewContent tracking en artículos
- [ ] Lead events en clicks de Amazon/Mercado Libre
- [ ] ScrollDepth events funcionando
- [ ] TimeOnPage tracking activo
- [ ] Navigation clicks trackeados
- [ ] Interactive elements (tabs) trackeados

### **Verificaciones de Datos:**
- [ ] Product IDs generados correctamente
- [ ] Categorías asignadas apropiadamente
- [ ] Valores monetarios correctos (Amazon: $1, ML: $0.8)
- [ ] Platform detection funcionando
- [ ] Custom parameters incluidos

### **Verificaciones de Performance:**
- [ ] No errores en consola
- [ ] Pixel no afecta velocidad de carga
- [ ] Events no se disparan excesivamente
- [ ] Memory leaks controlados

## 📈 **Métricas Post-Implementación**

### **KPIs a Monitorear:**
1. **Affiliate Conversion Rate**: Lead events / PageViews
2. **Content Engagement**: ScrollDepth / ViewContent
3. **Time on Site**: Promedio TimeOnPage events
4. **Popular Content**: ViewContent por artículo/producto
5. **Navigation Patterns**: Nav clicks más frecuentes

### **Optimizaciones Basadas en Datos:**
- Identificar contenido con mayor engagement
- Optimizar artículos con bajo ScrollDepth
- Mejorar CTAs con pocos clicks de afiliados
- Personalizar navegación según patrones

---

## 🎯 **Resultado Final**

Con esta implementación completa, LinkerStore ahora tiene:

✅ **Tracking completo de Meta Pixel**  
✅ **Eventos de afiliados Amazon/Mercado Libre**  
✅ **Engagement metrics avanzado**  
✅ **Navigation y interaction tracking**  
✅ **Scroll depth y time on page**  
✅ **Interactive content tracking**

**🎊 El sitio está listo para análisis avanzado y optimización de conversiones de afiliados.**