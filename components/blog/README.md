# Componentes del Blog - Documentación

## 📋 Componentes Desarrollados

### ✅ Componentes Existentes
- **ProductComparison.tsx** - Tabla comparativa de productos con animaciones y diseño moderno

### 🆕 Componentes Creados

#### 1. ArticleContent.tsx
Componente principal para el contenido de artículos del blog.

**Props:**
```typescript
interface ArticleContentProps {
  title: string;           // Título del artículo
  subtitle?: string;       // Subtítulo opcional
  author: string;          // Autor del artículo
  publishDate: string;     // Fecha de publicación
  readTime: string;        // Tiempo de lectura
  category: string;        // Categoría del artículo
  tags?: string[];         // Tags opcionales
  children: ReactNode;     // Contenido del artículo
  className?: string;      // Clases CSS adicionales
}
```

**Uso:**
```tsx
<ArticleContent
  title="Los Mejores Chalecos de Seguridad"
  subtitle="Guía completa para elegir el chaleco perfecto"
  author="Equipo LinkerPro"
  publishDate="26 de agosto de 2025"
  readTime="8 min"
  category="Equipos de Protección Personal"
  tags={['chaleco', 'seguridad', 'EPP']}
>
  {/* Contenido del artículo con headings, párrafos, etc. */}
</ArticleContent>
```

#### 2. TocNavigation.tsx
Tabla de contenidos interactiva con navegación automática.

**Props:**
```typescript
interface TocItem {
  id: string;      // ID del elemento HTML
  title: string;   // Título a mostrar
  level: number;   // Nivel de jerarquía (1=h2, 2=h3, etc.)
}

interface TocNavigationProps {
  items: TocItem[];      // Array de elementos del TOC
  className?: string;    // Clases CSS adicionales
}
```

**Uso:**
```tsx
const tocItems = [
  { id: 'introduccion', title: 'Introducción', level: 1 },
  { id: 'caracteristicas', title: 'Características', level: 2 },
  { id: 'conclusion', title: 'Conclusión', level: 1 }
];

<TocNavigation items={tocItems} />
```

#### 3. RelatedArticles.tsx
Muestra artículos relacionados con el contenido actual.

**Props:**
```typescript
interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  image: string;
  slug: string;
  isPopular?: boolean;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];  // Array de artículos relacionados
  title?: string;             // Título de la sección
  className?: string;         // Clases CSS adicionales
}
```

**Uso:**
```tsx
<RelatedArticles
  articles={relatedArticles}
  title="Artículos Relacionados"
/>
```

## 🎯 Características Técnicas

### Animaciones
- **Framer Motion**: Todas las animaciones están optimizadas para rendimiento
- **Intersection Observer**: Detección automática de secciones activas en TOC
- **Scroll suave**: Navegación fluida entre secciones

### Responsive Design
- **Mobile-first**: Optimizado para dispositivos móviles
- **Tablet y Desktop**: Adaptable a diferentes tamaños de pantalla
- **Touch-friendly**: Botones y elementos táctiles apropiados

### SEO y Performance
- **Meta tags dinámicos**: Generación automática de metadatos
- **Lazy loading**: Imágenes cargadas bajo demanda
- **Schema markup**: Preparado para datos estructurados

## 📁 Estructura de Archivos

```
components/blog/
├── ArticleContent.tsx      # Contenido principal del artículo
├── TocNavigation.tsx       # Tabla de contenidos
├── RelatedArticles.tsx     # Artículos relacionados
├── ProductComparison.tsx   # Comparativa de productos (existente)
├── ArticleCard.tsx         # Tarjeta de artículo (existente)
├── BlogHero.tsx           # Hero del blog (existente)
├── BlogLayout.tsx         # Layout principal (existente)
└── BlogFooter.tsx         # Footer del blog (existente)

app/blog/
├── page.tsx               # Página principal del blog
└── [slug]/
    └── page.tsx           # Página de artículo individual
```

## 🚀 Ejemplo de Implementación

Ver el archivo `app/blog/[slug]/page.tsx` para un ejemplo completo de cómo integrar todos los componentes en una página de artículo.

## 📝 Próximos Pasos

1. **Crear más artículos**: Usar la estructura del plan maestro para crear los 15 artículos
2. **Sistema de CMS**: Implementar un sistema de gestión de contenido
3. **SEO avanzado**: Agregar schema markup y optimizaciones adicionales
4. **Analytics**: Integrar seguimiento de engagement de usuarios

## 🔧 Personalización

Los componentes están diseñados para ser fácilmente personalizables:

- **Colores**: Variables CSS personalizables
- **Animaciones**: Duraciones y efectos ajustables
- **Layout**: Grid responsive configurable
- **Contenido**: Props flexibles para diferentes tipos de contenido

---

**Desarrollado para LinkerPro - Blog de Seguridad Industrial**
