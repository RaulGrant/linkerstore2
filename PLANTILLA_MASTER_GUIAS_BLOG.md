# 🎯 PLANTILLA MASTER PARA CREACIÓN DE GUÍAS TÉCNICAS DE BLOG

## 📋 INSTRUCCIONES DE USO

Esta plantilla está diseñada para replicar el éxito del **Manual de Cascos de Seguridad** (`/blog/manual-cascos-seguridad-proteccion-craneal`) que se convirtió en un estándar de calidad para guías técnicas. Utiliza esta estructura para crear guías profesionales, técnicamente precisas y comercialmente efectivas.

---

## 🏗️ ESTRUCTURA DE ARCHIVOS A CREAR

### 1. **PÁGINA PRINCIPAL**
**Ubicación**: `app/blog/[nombre-guia]/page.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import Hero[NombreGuia] from "@/components/blog/[NombreGuia]/Hero[NombreGuia]";
import TopProducts from "@/components/blog/[NombreGuia]/TopProducts";
import SectionBlock from "@/components/blog/[NombreGuia]/SectionBlock";
import RelatedGuidesBanner from "@/components/blog/[NombreGuia]/RelatedGuidesBanner";
import SideBanners from "@/components/blog/[NombreGuia]/SideBanners";

export default function [NombreGuia]Article() {
  // Control de visibilidad de banners (igual que cascos)
  const [showSideBanners, setShowSideBanners] = useState(true);
  const [showHeroCTAs, setShowHeroCTAs] = useState(true);
  
  // SEO dinámico
  useEffect(() => {
    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaTitle) {
      metaTitle.setAttribute('content', '[TÍTULO SEO OPTIMIZADO]');
    }
    if (metaDescription) {
      metaDescription.setAttribute('content', '[DESCRIPCIÓN SEO 155 CARACTERES]');
    }
  }, []);

  // Data de secciones basada en análisis de PDF
  const sectionsData = [
    // 7 secciones técnicas aquí
  ];

  return (
    <BlogLayout>
      <article>
        {/* Side Banners */}
        <SideBanners showBanners={showSideBanners} />
        
        {/* Hero Section */}
        <Hero[NombreGuia] showHeroCTAs={showHeroCTAs} />
        
        {/* Top 5 Products Section */}
        <TopProducts />
        
        {/* Main Sections */}
        <div className="bg-white">
          {sectionsData.map((section, index) => {
            const getVariant = (sectionNumber: number) => {
              if (sectionNumber === 1 || sectionNumber === 4) return 'featured';
              if (sectionNumber === 2 || sectionNumber === 5) return 'alternate';
              return 'default';
            };
            
            return (
              <SectionBlock
                key={index}
                {...section}
                variant={getVariant(section.sectionNumber)}
              />
            );
          })}
        </div>
        
        {/* Related Guides */}
        <RelatedGuidesBanner />
        
        {/* References and Technical Sources */}
        <div id="referencias" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                📖 Referencias Técnicas y Fuentes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Normativas Oficiales</h3>
                  <ul className="space-y-2 text-left text-gray-700">
                    {/* Lista de normativas específicas */}
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Fuentes Técnicas</h3>
                  <ul className="space-y-2 text-left text-gray-700">
                    {/* Lista de fuentes y PDF analizado */}
                  </ul>
                </div>
              </div>
              
              {/* CTA Final */}
              <motion.div 
                className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  [TEXTO DE AUTORIDAD Y CTA FINAL]
                </p>
                <motion.button 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🛒</span>
                  Ver Catálogo Completo
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}
```

### 2. **COMPONENTES A CREAR**

#### **Hero Component** - `components/blog/[NombreGuia]/Hero[NombreGuia].tsx`
```typescript
// Estructura base similar a HeroManual.tsx
export default function Hero[NombreGuia]({ showHeroCTAs = true }) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background decorativo */}
      {/* Partículas flotantes animadas */}
      {/* Contenido principal con badges, título, estadísticas */}
      {/* CTAs principales */}
    </section>
  );
}
```

#### **TopProducts Component** - `components/blog/[NombreGuia]/TopProducts.tsx`
```typescript
// 5 productos top relacionados con la temática
const topProducts = [
  {
    id: 1,
    name: "[PRODUCTO 1]",
    model: "[MODELO ESPECÍFICO]",
    rating: 4.9,
    reviews: 847,
    image: "/images/[categoria]/[imagen].webp",
    certification: "[CERTIFICACIÓN RELEVANTE]",
    features: [
      // 5 características técnicas clave
    ],
    highlights: [
      // 3 destacados principales
    ],
    amazonLink: "[LINK AFILIADO MERCADOLIBRE]",
    category: "[CATEGORÍA TÉCNICA]"
  },
  // ... 4 productos más
];
```

#### **SectionBlock Component** - Reutilizar existente
`components/blog/ManualCascos/SectionBlock.tsx` (ya creado, reutilizable)

#### **SideBanners Component** - Personalizable
```typescript
// Adaptable para cada guía con CTAs específicos
```

---

## 📝 METODOLOGÍA DE ANÁLISIS DE PDF

### PASO 1: EXTRACCIÓN DE CONTENIDO
```bash
# Usar el script extract_pdf_content.py
python extract_pdf_content.py [archivo].pdf
```

### PASO 2: ANÁLISIS ESTRUCTURADO
1. **Identificar 7 Secciones Principales**
   - Introducción y contexto nacional
   - Normativas y marco legal
   - Clasificaciones técnicas
   - Materiales y especificaciones
   - Uso correcto y procedimientos
   - Mantenimiento e inspección
   - Responsabilidades y sanciones

2. **Extraer para cada sección:**
   - **Introduction**: Párrafo contextual (150-200 palabras)
   - **Expert Quote**: Cita directa del PDF con fuente
   - **Key Points**: 4-5 puntos técnicos clave
   - **Recommendations**: 4-5 recomendaciones prácticas
   - **CTA**: Call-to-action hacia catálogo o recursos

3. **Metadatos por sección:**
   - **Icon**: Emoji representativo (🛡️, 📋, ⚡, etc.)
   - **BgGradient**: Gradiente específico por tema
   - **Variant**: 'featured', 'alternate', o 'default'

### PASO 3: ESTRUCTURA DE DATOS
```typescript
const sectionsData = [
  {
    sectionNumber: 1,
    title: "[TÍTULO DESCRIPTIVO]",
    subtitle: "[SUBTÍTULO TÉCNICO ESPECÍFICO]",
    content: {
      introduction: "[PÁRRAFO INTRODUCTORIO BASADO EN PDF]",
      expertQuote: {
        text: "[CITA TEXTUAL DEL PDF]",
        source: "[FUENTE: Página X del PDF / Norma específica]"
      },
      keyPoints: [
        "[PUNTO TÉCNICO 1]",
        "[PUNTO TÉCNICO 2]",
        "[PUNTO TÉCNICO 3]",
        "[PUNTO TÉCNICO 4]"
      ],
      recommendations: [
        "[RECOMENDACIÓN PRÁCTICA 1]",
        "[RECOMENDACIÓN PRÁCTICA 2]", 
        "[RECOMENDACIÓN PRÁCTICA 3]",
        "[RECOMENDACIÓN PRÁCTICA 4]"
      ],
      callToAction: {
        text: "[CTA ESPECÍFICO PARA LA SECCIÓN]",
        link: "/catalogo" // o enlace específico
      }
    },
    icon: "[EMOJI]",
    bgGradient: "bg-gradient-to-br from-[color]-500 to-[color]-600"
  },
  // ... repetir para 7 secciones
];
```

---

## 🎨 GUÍA DE DISEÑO Y ANIMACIONES

### **COLORES Y GRADIENTES**
- **Sección 1 (Intro)**: `from-blue-500 to-blue-600` 🛡️
- **Sección 2 (Normativa)**: `from-green-500 to-green-600` 📋
- **Sección 3 (Clasificación)**: `from-yellow-500 to-orange-500` ⚡
- **Sección 4 (Materiales)**: `from-purple-500 to-purple-600` 🔬
- **Sección 5 (Uso Correcto)**: `from-teal-500 to-teal-600` 🎯
- **Sección 6 (Mantenimiento)**: `from-orange-500 to-red-500` 🔧
- **Sección 7 (Responsabilidades)**: `from-gray-600 to-gray-700` ⚖️

### **ANIMACIONES FRAMER MOTION**
```typescript
// Animaciones de entrada escalonadas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
```

### **RESPONSIVE DESIGN**
- **Mobile First**: Diseño optimizado desde 320px
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes adaptativos**: Cards, grids, typography

---

## 🛍️ SECCIÓN TOP PRODUCTS

### **CRITERIOS DE SELECCIÓN**
1. **Certificaciones oficiales** (NOM, ANSI, CE, etc.)
2. **Diversidad de precios** ($500 - $2,500 MXN)
3. **Diferentes categorías** técnicas
4. **Disponibilidad** en MercadoLibre México
5. **Ratings altos** (4.7+ estrellas)

### **ESTRUCTURA DE PRODUCTO**
```typescript
{
  id: number,
  name: string,           // Marca + Modelo corto
  model: string,          // Descripción técnica completa  
  rating: number,         // 4.7 - 4.9
  reviews: number,        // 200 - 1000+
  image: string,          // WebP optimizado
  certification: string, // Certificación principal
  features: string[],     // 5 características técnicas
  highlights: string[],   // 3 puntos de venta únicos
  amazonLink: string,     // URL MercadoLibre
  category: string       // Clasificación técnica
}
```

### **PRECIOS SUGERIDOS POR CATEGORÍA**
- **Básico**: $500 - $800 MXN
- **Intermedio**: $800 - $1,500 MXN  
- **Premium**: $1,500 - $2,500 MXN
- **Especializado**: $2,000+ MXN

---

## 📊 SEO Y CONTENIDO

### **TÍTULO SEO** (Máximo 60 caracteres)
```
[Tipo Equipo]: Guía [Año] | Normativas México | [Marca]
```

### **META DESCRIPTION** (Máximo 155 caracteres)
```
Guía técnica completa sobre [equipo]. Cumplimiento [normativa], selección correcta, mantenimiento y top X productos certificados en México.
```

### **KEYWORDS PRINCIPALES**
- [Equipo] + seguridad industrial
- [Equipo] + certificado NOM/ANSI
- Guía [equipo] [año]
- [Equipo] + normativa mexicana
- Mejores [equipo] México

### **ESTRUCTURA H-TAGS**
- **H1**: Título principal de la guía
- **H2**: Títulos de secciones principales (7 secciones)
- **H3**: Subtítulos dentro de secciones
- **H4**: Características de productos

---

## 🔧 FUNCIONALIDADES TÉCNICAS

### **LAZY LOADING**
```typescript
import dynamic from 'next/dynamic';

const TopProducts = dynamic(() => import('@/components/blog/[Guia]/TopProducts'), {
  loading: () => <div>Cargando productos...</div>
});
```

### **ANALYTICS**
```typescript
// Google Analytics events
const trackProductClick = (productName: string) => {
  gtag('event', 'product_click', {
    product_name: productName,
    guide_name: '[nombre-guia]'
  });
};
```

### **SCROLL TRACKING**
```typescript
// Control de visibilidad de banners basado en scroll
useEffect(() => {
  const handleScroll = () => {
    // Lógica igual que en manual-cascos
    // Control Hero CTAs y Side Banners
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 📋 CHECKLIST DE IMPLEMENTACIÓN

### **ANTES DE COMENZAR**
- [ ] PDF técnico disponible y analizado
- [ ] 7 secciones identificadas y estructuradas  
- [ ] 5 productos seleccionados con links de MercadoLibre
- [ ] Imágenes optimizadas en WebP
- [ ] Normativas específicas investigadas

### **DESARROLLO**
- [ ] Página principal creada con estructura completa
- [ ] Hero component personalizado
- [ ] TopProducts con datos reales
- [ ] SectionBlock reutilizado correctamente
- [ ] SideBanners personalizados
- [ ] Animaciones Framer Motion implementadas
- [ ] SEO metadata configurado

### **CONTENIDO**
- [ ] 7 secciones técnicas completas (mín. 200 palabras c/u)
- [ ] Citas expertas con fuentes verificadas
- [ ] Key points técnicamente precisos
- [ ] Recomendaciones prácticas útiles
- [ ] CTAs relevantes y específicos

### **PRODUCTOS**
- [ ] 5 productos con especificaciones completas
- [ ] Precios actualizados
- [ ] Links de MercadoLibre funcionales
- [ ] Imágenes de calidad en WebP
- [ ] Certificaciones verificadas

### **TESTING**
- [ ] Responsive en todos los breakpoints
- [ ] Velocidad de carga < 3 segundos
- [ ] Todas las animaciones funcionan
- [ ] Links externos abren correctamente
- [ ] SEO score > 90 en Lighthouse

### **POST-IMPLEMENTACIÓN**
- [ ] Página agregada al sitemap
- [ ] Enlaces internos desde otras guías
- [ ] Social media cards configuradas
- [ ] Analytics configurado
- [ ] Search Console verificado

---

## 📈 MÉTRICAS DE ÉXITO

### **KPIs TÉCNICOS**
- **Tiempo en página**: >3 minutos
- **Bounce rate**: <40%
- **Page load speed**: <3 segundos
- **Core Web Vitals**: Todos en verde

### **KPIs COMERCIALES**  
- **CTR a catálogo**: >8%
- **Click en productos**: >15%
- **Conversión MercadoLibre**: >2%
- **Tráfico orgánico**: +25% mes/mes

### **KPIs CONTENIDO**
- **Shares sociales**: >50/mes
- **Comentarios/feedback**: >10/mes
- **Tiempo lectura promedio**: >4 minutos
- **Retorno de usuarios**: >30%

---

## 🎯 PROMPT PARA IMPLEMENTACIÓN

**Usa este prompt para crear nuevas guías:**

---

# PROMPT PARA NUEVA GUÍA TÉCNICA

Necesito crear una nueva guía técnica de blog siguiendo exactamente la estructura y calidad del **Manual de Cascos de Seguridad** (`/blog/manual-cascos-seguridad-proteccion-craneal`).

## 📁 INFORMACIÓN BASE
- **Tema**: [ESPECIFICAR EQUIPO/TEMA]
- **PDF Fuente**: [NOMBRE DEL ARCHIVO PDF]
- **Normativas**: [NORMAS APLICABLES - NOM, ANSI, etc.]
- **Público objetivo**: Profesionales de seguridad industrial en México

## 🎯 REQUERIMIENTOS

### 1. **ANÁLISIS DEL PDF**
- Extrae el contenido del PDF usando `extract_pdf_content.py [archivo].pdf`
- Identifica las 7 secciones técnicas principales
- Localiza citas expertas con página de referencia
- Extrae datos técnicos, especificaciones y normativas

### 2. **ESTRUCTURA A CREAR**
```
/app/blog/[nombre-guia]/page.tsx
/components/blog/[NombreGuia]/
  ├── Hero[NombreGuia].tsx
  ├── TopProducts.tsx  
  ├── SideBanners.tsx
  └── RelatedGuidesBanner.tsx
```

### 3. **CONTENIDO TÉCNICO**
- **7 secciones** técnicas (min. 200 palabras cada una)
- **Citas expertas** directas del PDF con fuente
- **Key points** técnicos (4-5 por sección)
- **Recomendaciones** prácticas (4-5 por sección)
- **CTAs** específicos por sección

### 4. **TOP 5 PRODUCTOS**
- Productos certificados disponibles en MercadoLibre México
- Rango de precios $500-$2,500 MXN
- Especificaciones técnicas completas
- Links de afiliado funcionales
- Ratings 4.7+ estrellas

### 5. **CARACTERÍSTICAS TÉCNICAS**
- **Animaciones**: Framer Motion idénticas a cascos
- **Responsive**: Mobile-first design
- **SEO**: Title <60 chars, description <155 chars
- **Performance**: <3 seg load time, Core Web Vitals verdes

## 📋 DATOS ESPECÍFICOS REQUERIDOS

**Completa esta información:**

- **Título SEO**: ________________________________
- **Meta Description**: __________________________
- **Keywords principales**: _______________________
- **Normativas aplicables**: _____________________
- **Archivo PDF fuente**: ________________________

## 🎨 ESPECIFICACIONES DE DISEÑO

- **Gradientes por sección**: Usar paleta de cascos como referencia
- **Iconos**: Emojis representativos por sección
- **Variantes**: Sección 1 y 4 = 'featured', Sección 2 y 5 = 'alternate'
- **Colores**: Mantener consistencia con brand azul-índigo

## 📊 DATOS EJEMPLO PARA LOS 7 SECCIONES

```typescript
const sectionsData = [
  {
    sectionNumber: 1,
    title: "[TÍTULO BASADO EN PDF]",
    subtitle: "[SUBTÍTULO TÉCNICO]", 
    content: {
      introduction: "[EXTRAER DEL PDF - 150-200 palabras]",
      expertQuote: {
        text: "[CITA TEXTUAL DEL PDF]",
        source: "[Página X del PDF / Norma específica]"
      },
      keyPoints: [
        "[DATO TÉCNICO 1 DEL PDF]",
        "[DATO TÉCNICO 2 DEL PDF]", 
        "[DATO TÉCNICO 3 DEL PDF]",
        "[DATO TÉCNICO 4 DEL PDF]"
      ],
      recommendations: [
        "[RECOMENDACIÓN PRÁCTICA 1]",
        "[RECOMENDACIÓN PRÁCTICA 2]",
        "[RECOMENDACIÓN PRÁCTICA 3]", 
        "[RECOMENDACIÓN PRÁCTICA 4]"
      ],
      callToAction: {
        text: "[CTA ESPECÍFICO]",
        link: "/catalogo"
      }
    },
    icon: "🛡️",
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600"
  }
  // ... Repetir estructura para las 7 secciones
];
```

## ✅ ENTREGABLES ESPERADOS

1. **Página principal** completamente funcional
2. **5 componentes** personalizados creados  
3. **Contenido técnico** basado 100% en el PDF
4. **5 productos** con especificaciones reales
5. **SEO optimizado** para México
6. **Performance** >90 en Lighthouse
7. **Responsive** perfecto en todos los dispositivos

**Implementa siguiendo EXACTAMENTE la estructura, diseño y funcionalidad del Manual de Cascos de Seguridad para garantizar consistencia y calidad.**

---

## 📚 REFERENCIAS Y RECURSOS

### **Archivos de Referencia**
- `/app/blog/manual-cascos-seguridad-proteccion-craneal/page.tsx`
- `/components/blog/ManualCascos/*`
- `/extracted_helmet_pdf_content.txt`
- `MANUAL_CASCOS_IMPLEMENTACION_COMPLETADA.md`

### **Herramientas**
- **PDF Processing**: `extract_pdf_content.py`
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **SEO**: Next.js metadata API
- **Images**: next/image con WebP

### **Normativas Comunes**
- **México**: NOM series (STPS, SCFI)
- **Internacional**: ANSI, OSHA, CE, ISO
- **Específicas**: Varían por equipo/industria

---

*Esta plantilla garantiza la replicación exacta del éxito del Manual de Cascos de Seguridad para cualquier nueva guía técnica de seguridad industrial.*