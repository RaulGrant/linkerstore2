# 📊 Guía Completa de Google Analytics 4 para LinkerStore

## 📋 Índice
1. [Configuración Inicial](#configuración-inicial)
2. [Implementación de Etiquetas](#implementación-de-etiquetas)
3. [Eventos Personalizados](#eventos-personalizados)
4. [Verificación y Debugging](#verificación-y-debugging)
5. [Monitoreo en Tiempo Real](#monitoreo-en-tiempo-real)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Configuración Inicial

### 1. Configurar Google Analytics 4

#### Paso 1: Crear Cuenta de Google Analytics
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Haz clic en "Empezar"
3. Configura tu cuenta:
   - **Nombre de la cuenta**: LinkerStore
   - **Nombre de la propiedad**: LinkerStore Blog
   - **Zona horaria**: México (GMT-6)
   - **Moneda**: Peso mexicano (MXN)

#### Paso 2: Obtener el Measurement ID
```
GA4 Measurement ID: G-XXXXXXXXXX
```

### 2. Configuración en Next.js

#### Archivo: `lib/gtag.js`
```javascript
// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

#### Archivo: `.env.local`
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Archivo: `pages/_app.js` o `app/layout.js`
```javascript
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as gtag from '../lib/gtag'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_location: window.location.href,
              page_title: document.title,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
```

---

## 🏷️ Implementación de Etiquetas

### 1. Etiquetas Básicas de Página

#### Seguimiento de Páginas del Blog
```javascript
// lib/analytics.js
import * as gtag from './gtag'

export const trackPageView = (url, title) => {
  gtag.pageview(url)
  gtag.event({
    action: 'page_view',
    category: 'engagement',
    label: title,
  })
}

// Uso en componentes
useEffect(() => {
  trackPageView(window.location.pathname, document.title)
}, [])
```

### 2. Etiquetas para E-commerce (Afiliados)

#### Seguimiento de Clics en Enlaces de Afiliados
```javascript
export const trackAffiliateClick = (platform, productId, productName, category) => {
  gtag.event({
    action: 'click',
    category: 'affiliate_link',
    label: `${platform}_${productName}`,
    custom_parameters: {
      platform: platform,
      product_id: productId,
      product_name: productName,
      product_category: category,
      currency: 'MXN'
    }
  })
}

// Uso en componentes
const handleAffiliateClick = (productName, url) => {
  trackAffiliateClick('mercadolibre', 'ML123', productName, 'chaleco_seguridad')
  window.open(url, '_blank')
}
```

### 3. Etiquetas de Engagement

#### Seguimiento de Tiempo de Lectura
```javascript
export const trackReadingTime = (articleId, timeSpent) => {
  gtag.event({
    action: 'reading_time',
    category: 'engagement',
    label: articleId,
    value: Math.round(timeSpent / 1000), // segundos
    custom_parameters: {
      article_id: articleId,
      time_spent_seconds: Math.round(timeSpent / 1000)
    }
  })
}
```

#### Seguimiento de Scroll Depth
```javascript
export const trackScrollDepth = (articleId, percentage) => {
  gtag.event({
    action: 'scroll',
    category: 'engagement',
    label: `${articleId}_${percentage}%`,
    value: percentage,
    custom_parameters: {
      article_id: articleId,
      scroll_percentage: percentage
    }
  })
}
```

---

## 📊 Eventos Personalizados

### 1. Eventos del Blog

#### Implementación en React Components
```javascript
// hooks/useAnalytics.js
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

export const useAnalytics = () => {
  const trackEvent = (eventName, parameters = {}) => {
    gtag.event({
      action: eventName,
      category: parameters.category || 'user_interaction',
      label: parameters.label || '',
      value: parameters.value || 0,
      custom_parameters: parameters.custom_parameters || {}
    })
  }

  return { trackEvent }
}

// Uso en componentes
const { trackEvent } = useAnalytics()

const handleProductCardHover = (productName) => {
  trackEvent('product_hover', {
    category: 'product_interaction',
    label: productName,
    custom_parameters: {
      product_name: productName,
      interaction_type: 'hover'
    }
  })
}
```

### 2. Eventos de Navegación

```javascript
// Seguimiento de navegación por secciones
export const trackSectionView = (sectionId, articleId) => {
  gtag.event({
    action: 'section_view',
    category: 'navigation',
    label: `${articleId}_${sectionId}`,
    custom_parameters: {
      article_id: articleId,
      section_id: sectionId
    }
  })
}

// Seguimiento de FAQ expansions
export const trackFAQExpansion = (questionId, questionText) => {
  gtag.event({
    action: 'faq_expand',
    category: 'user_interaction',
    label: questionId,
    custom_parameters: {
      question_id: questionId,
      question_text: questionText.substring(0, 100) // Limitar longitud
    }
  })
}
```

### 3. Eventos de Conversión

```javascript
// Seguimiento de objetivos de conversión
export const trackConversion = (conversionType, value = 0) => {
  gtag.event({
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: value,
    custom_parameters: {
      conversion_type: conversionType,
      conversion_value: value
    }
  })
}

// Ejemplos de uso
trackConversion('newsletter_signup')
trackConversion('affiliate_click', 1)
trackConversion('article_completion')
```

---

## 🔍 Verificación y Debugging

### 1. Google Analytics DebugView

#### Habilitar Debug Mode
```javascript
// Agregar en el script de inicialización
gtag('config', '${gtag.GA_TRACKING_ID}', {
  debug_mode: true, // Solo en desarrollo
  page_location: window.location.href,
  page_title: document.title,
});
```

#### Verificar en Consola del Navegador
```javascript
// Verificar si gtag está cargado
console.log('gtag disponible:', typeof gtag !== 'undefined')

// Ver dataLayer
console.log('dataLayer:', window.dataLayer)

// Enviar evento de prueba
gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'debugging',
  value: 1
})
```

### 2. Google Tag Assistant

#### Instalación y Uso
1. Instala la extensión [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Abre tu sitio web
3. Haz clic en la extensión
4. Verifica que aparezca tu GA4 tag

### 3. Herramientas de Desarrollo

#### Verificar Network Requests
```javascript
// En DevTools > Network, filtrar por:
// - google-analytics.com
// - googletagmanager.com
// - collect?
```

#### Verificar Local Storage
```javascript
// En DevTools > Application > Local Storage
// Buscar entradas relacionadas con GA
localStorage.getItem('_ga')
localStorage.getItem('_ga_' + GA_TRACKING_ID.replace('G-', ''))
```

---

## 📈 Monitoreo en Tiempo Real

### 1. Real-time Reports en GA4

#### Acceder a Reportes en Tiempo Real
1. Ve a Google Analytics 4
2. Navega a **Reports** > **Realtime**
3. Observa:
   - Usuarios activos
   - Páginas más vistas
   - Eventos en tiempo real
   - Ubicaciones geográficas

### 2. Eventos Personalizados en Tiempo Real

#### Configurar Custom Events
```javascript
// Evento para monitorear en tiempo real
export const trackRealtimeEvent = (eventName, data = {}) => {
  gtag.event('custom_' + eventName, {
    event_category: 'realtime',
    event_label: data.label || eventName,
    custom_parameters: {
      timestamp: Date.now(),
      page_url: window.location.href,
      ...data
    }
  })
}

// Ejemplos de uso
trackRealtimeEvent('article_started', { article_id: 'chalecos-seguridad' })
trackRealtimeEvent('product_viewed', { product_name: 'Chaleco Elite' })
trackRealtimeEvent('affiliate_clicked', { platform: 'mercadolibre' })
```

### 3. Dashboard Personalizado

#### Métricas Clave para Monitorear
- **Page Views por Artículo**
- **Tasa de Clics en Enlaces de Afiliados**
- **Tiempo Promedio en Página**
- **Porcentaje de Scroll**
- **Conversiones por Fuente de Tráfico**

---

## 🔧 Troubleshooting

### 1. Problemas Comunes

#### GA4 No Recibe Datos
```javascript
// Verificaciones paso a paso:

// 1. Verificar Measurement ID
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_ID)

// 2. Verificar que gtag esté cargado
if (typeof gtag === 'undefined') {
  console.error('gtag no está definido')
} else {
  console.log('gtag está funcionando')
}

// 3. Verificar dataLayer
console.log('dataLayer length:', window.dataLayer?.length || 0)

// 4. Enviar evento de prueba
gtag('event', 'debug_test', {
  event_category: 'debug',
  event_label: 'troubleshooting'
})
```

#### Eventos No Aparecen en GA4
```javascript
// Verificar formato de eventos
const correctEventFormat = {
  action: 'click', // Requerido
  category: 'button', // Opcional pero recomendado
  label: 'header_cta', // Opcional
  value: 1, // Opcional, debe ser número
  custom_parameters: { // Opcional
    button_text: 'Ver Productos',
    page_section: 'header'
  }
}

gtag('event', correctEventFormat.action, correctEventFormat)
```

### 2. Debugging Avanzado

#### Modo Debug Detallado
```javascript
// Agregar logging detallado
const debugGtag = (command, ...args) => {
  console.log('gtag:', command, args)
  if (typeof gtag !== 'undefined') {
    gtag(command, ...args)
  } else {
    console.error('gtag no disponible')
  }
}

// Usar debugGtag en lugar de gtag durante desarrollo
debugGtag('event', 'test', { event_category: 'debug' })
```

#### Verificar Cookies y Storage
```javascript
// Verificar cookies de GA
document.cookie.split(';').forEach(cookie => {
  if (cookie.includes('_ga')) {
    console.log('GA Cookie:', cookie.trim())
  }
})

// Verificar sessionStorage
Object.keys(sessionStorage).forEach(key => {
  if (key.includes('ga') || key.includes('gtag')) {
    console.log('GA SessionStorage:', key, sessionStorage.getItem(key))
  }
})
```

---

## 📝 Implementación Práctica en LinkerStore

### 1. Eventos Específicos del Blog

```javascript
// lib/blog-analytics.js
export const trackBlogInteraction = {
  // Cuando un usuario empieza a leer un artículo
  articleStart: (articleId, articleTitle) => {
    gtag('event', 'article_start', {
      event_category: 'blog_engagement',
      event_label: articleId,
      custom_parameters: {
        article_id: articleId,
        article_title: articleTitle,
        timestamp: Date.now()
      }
    })
  },

  // Cuando termina de leer (llegó al final)
  articleComplete: (articleId, timeSpent) => {
    gtag('event', 'article_complete', {
      event_category: 'blog_engagement',
      event_label: articleId,
      value: Math.round(timeSpent / 1000),
      custom_parameters: {
        article_id: articleId,
        reading_time_seconds: Math.round(timeSpent / 1000)
      }
    })
  },

  // Clic en producto recomendado
  productClick: (productName, productUrl, position) => {
    gtag('event', 'select_item', {
      event_category: 'ecommerce',
      items: [{
        item_id: productName.toLowerCase().replace(/\s+/g, '_'),
        item_name: productName,
        item_category: 'seguridad_industrial',
        item_list_name: 'productos_recomendados',
        index: position,
        price: 0, // No tenemos precio exacto
        quantity: 1
      }]
    })
  },

  // Expansión de FAQ
  faqExpand: (questionIndex, question) => {
    gtag('event', 'faq_expand', {
      event_category: 'user_interaction',
      event_label: `question_${questionIndex}`,
      custom_parameters: {
        question_index: questionIndex,
        question_preview: question.substring(0, 50)
      }
    })
  }
}
```

### 2. Implementación en Componentes

```javascript
// En tu componente de artículo
import { trackBlogInteraction } from '../lib/blog-analytics'

export default function ChalecoArticle() {
  useEffect(() => {
    // Trackear inicio del artículo
    trackBlogInteraction.articleStart(
      'chalecos-seguridad-2025',
      'Los Mejores Chalecos de Seguridad Reflectantes 2025'
    )

    // Trackear tiempo de lectura
    const startTime = Date.now()
    
    return () => {
      const timeSpent = Date.now() - startTime
      if (timeSpent > 30000) { // Solo si leyó más de 30 segundos
        trackBlogInteraction.articleComplete('chalecos-seguridad-2025', timeSpent)
      }
    }
  }, [])

  const handleProductClick = (product, index) => {
    trackBlogInteraction.productClick(product.name, product.url, index)
    window.open(product.url, '_blank')
  }

  const handleFAQExpand = (index, question) => {
    trackBlogInteraction.faqExpand(index, question)
    setExpandedFAQ(index)
  }
}
```

---

## 🎯 Métricas Clave a Monitorear

### 1. Engagement del Blog
- **Tiempo promedio en página**
- **Bounce rate por artículo**
- **Scroll depth promedio**
- **FAQs más expandidas**

### 2. Performance de Afiliados
- **CTR de enlaces de afiliados**
- **Productos más clickeados**
- **Conversión por fuente de tráfico**
- **Revenue por referral**

### 3. User Journey
- **Páginas por sesión**
- **Flujo de navegación entre artículos**
- **Puntos de salida más comunes**
- **Retorno de usuarios**

---

## ✅ Checklist de Implementación

- [ ] ✅ Configurar cuenta de Google Analytics 4
- [ ] ✅ Agregar Measurement ID al proyecto
- [ ] ✅ Implementar gtag.js en Next.js
- [ ] ✅ Configurar seguimiento de páginas
- [ ] ✅ Implementar eventos personalizados
- [ ] ✅ Configurar seguimiento de afiliados
- [ ] ✅ Testear en modo debug
- [ ] ✅ Verificar en tiempo real
- [ ] ✅ Configurar goals y conversiones
- [ ] ✅ Documentar eventos para el equipo

---

## 📞 Recursos Adicionales

- [Documentación oficial GA4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
- [Google Tag Manager](https://tagmanager.google.com/)
- [GA4 BigQuery Export](https://developers.google.com/analytics/bigquery)

---

**💡 Tip Final**: Siempre testea en modo debug antes de enviar a producción, y mantén una documentación actualizada de todos los eventos personalizados que implementes.