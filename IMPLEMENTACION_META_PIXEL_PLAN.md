# Plan de Implementación Meta Pixel - LinkerStore

## 📋 Resumen Ejecutivo

Este documento detalla la implementación completa del Meta Pixel (ID: 2002160850545438) en todo el sitio web LinkerStore para rastrear eventos de usuario, conversiones de afiliados y métricas de engagement. La implementación cubrirá todos los componentes, páginas y interacciones del usuario.

## 🎯 Objetivos de Tracking

### Eventos Principales a Rastrear:
1. **PageView** - Visualización de todas las páginas
2. **ViewContent** - Visualización de contenido específico (productos, artículos)
3. **Click** - Clicks en enlaces de afiliados (Amazon, Mercado Libre)
4. **CompleteRegistration** - Registro de usuarios
5. **Lead** - Suscripciones a newsletter, descargas de contenido
6. **Search** - Búsquedas en el sitio
7. **AddToCart** - Interacción con productos (aunque no haya carrito real)
8. **InitiateCheckout** - Redirección a páginas de afiliados

### Métricas de Engagement:
- Tiempo en página
- Interacciones con elementos del blog
- Navegación entre secciones
- Descargas de recursos
- Clicks en CTAs

## 🏗️ Estructura de Implementación

### 1. Configuración Base (app/layout.tsx)

**Archivos a modificar:**
- `app/layout.tsx`

**Cambios necesarios:**
- Añadir script de Meta Pixel al `<head>`
- Configurar eventos de PageView automáticos
- Implementar función de tracking global

```typescript
// Meta Pixel Script a añadir
const metaPixelScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2002160850545438');
fbq('track', 'PageView');
`;
```

### 2. Componentes de Navegación

**Archivos a modificar:**
- `components/navigation.tsx`
- `components/ConditionalFooter.tsx`

**Eventos a implementar:**
- Click en enlaces del menú principal
- Click en enlaces del footer
- Búsquedas desde navegación
- Interacciones con menú móvil

### 3. Páginas de Contenido

#### 3.1 Página Principal (app/page.tsx)

**Eventos específicos:**
- ViewContent al cargar la página
- Click en CTA principal
- Interacciones con hero section
- Navegación a secciones específicas

#### 3.2 Tienda (app/store/*)

**Archivos a modificar:**
- `app/store/page.tsx`
- `app/store/[asin]/page.tsx`

**Eventos específicos:**
- ViewContent para cada producto
- AddToCart (simulado) al interactuar con productos
- InitiateCheckout al hacer click en enlaces de afiliados
- Search al usar filtros

#### 3.3 Blog (app/blog/*)

**Archivos principales del blog:**
- `app/blog/page.tsx` (lista de artículos)
- Todos los archivos de artículos específicos

**Eventos específicos:**
- ViewContent para cada artículo
- Click en enlaces de afiliados dentro de artículos
- Interacciones con elementos interactivos (tabs, acordeones)
- Lead al suscribirse a updates
- Click en botones "Comprar en Amazon" / "Ver en Mercado Libre"

#### 3.4 Guías (app/guias/* y app/guides/*)

**Eventos específicos:**
- ViewContent para cada guía
- Interacciones con checklists
- Descargas de recursos (Lead events)
- Click en elementos interactivos

### 4. Componentes de Producto

**Archivos a modificar:**
- `components/product/*` (todos los componentes relacionados)
- `components/ProductCatalog.tsx`

**Eventos específicos:**
- ViewContent al mostrar productos
- Click en enlaces de afiliados
- AddToCart al interactuar con productos
- Comparación de productos

### 5. Componentes de Blog

**Archivos a modificar:**
- `components/blog/*` (todos los componentes del blog)

**Eventos específicos:**
- Interacciones con elementos del blog
- Click en enlaces relacionados
- Compartir en redes sociales
- Comentarios o reacciones

## 🔧 Implementación Técnica Detallada

### Paso 1: Configuración Global (Prioridad Alta)

**Archivo: `app/layout.tsx`**

```typescript
// 1. Importar Script component
import Script from 'next/script'

// 2. Añadir Meta Pixel al head
<Script
  id="meta-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2002160850545438');
      fbq('track', 'PageView');
    `,
  }}
/>

// 3. Noscript fallback
<noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src="https://www.facebook.com/tr?id=2002160850545438&ev=PageView&noscript=1"
  />
</noscript>
```

### Paso 2: Utilidad de Tracking

**Archivo: `lib/meta-pixel.ts` (nuevo)**

```typescript
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Eventos específicos para el negocio
export const trackAffiliateClick = (platform: 'amazon' | 'mercadolibre', productId?: string) => {
  trackEvent('Lead', {
    content_name: `${platform}_click`,
    content_category: 'affiliate_link',
    content_ids: productId ? [productId] : undefined,
    value: platform === 'amazon' ? 1 : 0.5,
    currency: 'USD'
  });
};

export const trackProductView = (productId: string, productName: string, category?: string) => {
  trackEvent('ViewContent', {
    content_type: 'product',
    content_ids: [productId],
    content_name: productName,
    content_category: category
  });
};

export const trackBlogView = (articleId: string, articleTitle: string) => {
  trackEvent('ViewContent', {
    content_type: 'article',
    content_ids: [articleId],
    content_name: articleTitle,
    content_category: 'blog'
  });
};
```

### Paso 3: Componentes de Enlaces de Afiliados

**Archivos a modificar:**
- Todos los componentes que contengan enlaces de Amazon/Mercado Libre

**Ejemplo de implementación:**

```typescript
import { trackAffiliateClick } from '@/lib/meta-pixel';

const AmazonButton = ({ asin, productName }: { asin: string; productName: string }) => {
  const handleClick = () => {
    trackAffiliateClick('amazon', asin);
    // Opcional: agregar más datos contextuales
  };

  return (
    <a 
      href={`https://amazon.com/dp/${asin}`}
      onClick={handleClick}
      // ... otros props
    >
      Ver en Amazon
    </a>
  );
};
```

### Paso 4: Tracking de Páginas Específicas

**Para cada página importante, implementar:**

1. **ViewContent** al cargar la página
2. **Eventos específicos** según las interacciones disponibles
3. **Tracking contextual** basado en el tipo de contenido

### Paso 5: Eventos Avanzados

**Scroll Depth Tracking:**
```typescript
// Implementar tracking de scroll depth
useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent >= 50 && !window.scrollTracked50) {
      trackCustomEvent('ScrollDepth', { percent: 50 });
      window.scrollTracked50 = true;
    }
    // Similar para 75% y 100%
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 📊 Eventos de Tracking por Sección

### Homepage
- **PageView** - Automático
- **ViewContent** - Hero section
- **Click** - CTAs principales
- **Lead** - Newsletter signup

### Tienda/Productos
- **ViewContent** - Cada producto visto
- **AddToCart** - Interacción con producto
- **InitiateCheckout** - Click en enlace de afiliado
- **Search** - Uso de filtros/búsqueda

### Blog
- **ViewContent** - Cada artículo
- **Lead** - Enlaces de afiliados
- **Click** - Elementos interactivos
- **CustomEvent** - Tiempo de lectura

### Guías
- **ViewContent** - Cada guía
- **Lead** - Descargas de recursos
- **CompleteRegistration** - Suscripciones
- **CustomEvent** - Completar checklist

## 🗂️ Archivos a Crear/Modificar

### Archivos Nuevos:
1. `lib/meta-pixel.ts` - Utilidades de tracking
2. `components/tracking/MetaPixelWrapper.tsx` - Componente wrapper
3. `hooks/useMetaPixel.ts` - Hook personalizado para tracking

### Archivos a Modificar:

#### Configuración Base:
- `app/layout.tsx` ✅ **PRIORIDAD ALTA**

#### Navegación:
- `components/navigation.tsx`
- `components/ConditionalFooter.tsx`

#### Páginas Principales:
- `app/page.tsx`
- `app/store/page.tsx`
- `app/store/[asin]/page.tsx`
- `app/blog/page.tsx`
- Todos los artículos de blog

#### Componentes:
- `components/ProductCatalog.tsx`
- `components/product/*` (todos)
- `components/blog/*` (todos)

## 📈 Métricas de Éxito

### KPIs Principales:
1. **Conversión de Afiliados**: % de clicks que generan ventas
2. **Engagement Rate**: Tiempo promedio en sitio
3. **Funnel Analysis**: Progresión PageView → ViewContent → Lead
4. **Content Performance**: Artículos/productos más efectivos

### Eventos de Conversión:
- **Click en Amazon**: Meta evento "Lead" con valor 1
- **Click en Mercado Libre**: Meta evento "Lead" con valor 0.5
- **Newsletter Signup**: Meta evento "CompleteRegistration"
- **Descarga de Recurso**: Meta evento "Lead"

## ⚡ Plan de Implementación

### Fase 1: Base (Día 1)
1. ✅ Configurar Meta Pixel en layout.tsx
2. ✅ Crear utilidades de tracking
3. ✅ Implementar PageView automático

### Fase 2: Enlaces de Afiliados (Día 2)
1. Identificar todos los enlaces de Amazon/Mercado Libre
2. Añadir tracking a botones de productos
3. Implementar eventos de Lead

### Fase 3: Contenido (Día 3-4)
1. Tracking de artículos de blog
2. Eventos de interacción en guías
3. Métricas de engagement

### Fase 4: Optimización (Día 5)
1. Eventos avanzados (scroll depth)
2. Testing y validación
3. Documentación final

## 🔍 Testing y Validación

### Herramientas de Testing:
1. **Facebook Pixel Helper** (extensión de Chrome)
2. **Events Manager** en Facebook Business
3. **Meta Pixel Debugger**

### Checkpoints de Validación:
- [ ] PageView events se disparan correctamente
- [ ] Affiliate clicks se registran como Lead events
- [ ] ViewContent events incluyen metadata correcta
- [ ] No hay errores en consola
- [ ] Events aparecen en Facebook Events Manager

## 📝 Notas de Implementación

### Consideraciones Técnicas:
- Usar `next/script` con estrategia "afterInteractive"
- Implementar checks de `typeof window !== 'undefined'`
- Evitar tracking en desarrollo (usar variables de entorno)
- Implementar rate limiting para eventos customizados

### GDPR/Privacidad:
- Actualizar política de privacidad
- Implementar consent management si es necesario
- Documentar qué datos se recolectan

### Performance:
- Meta Pixel se carga de forma asíncrona
- Eventos se envían sin bloquear UI
- Implementar fallbacks para usuarios con bloqueadores

## 🎯 Próximos Pasos

1. **Inmediato**: Implementar configuración base en layout.tsx
2. **Hoy**: Crear utilidades de tracking y testear eventos básicos
3. **Esta semana**: Rollout completo a todas las páginas
4. **Seguimiento**: Monitoreo y optimización basada en datos

---

**Pixel ID**: 2002160850545438
**Implementación**: Enero 2025
**Estado**: Documentación completa - Listo para implementación