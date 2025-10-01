import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/blog/BlogLayout';
import ArticleContent from '@/components/blog/ArticleContent';
import TocNavigation from '@/components/blog/TocNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import ProductComparison from '@/components/blog/ProductComparison';

// Datos de ejemplo para el artículo
const articleData = {
  title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
  subtitle: 'Guía completa para elegir el chaleco de alta visibilidad perfecto para tu trabajo',
  author: 'Equipo LinkerPro',
  publishDate: '26 de agosto de 2025',
  readTime: '8 min',
  category: 'Equipos de Protección Personal',
  tags: ['chaleco', 'seguridad', 'reflectante', 'EPP', 'alta visibilidad'],
  slug: 'mejores-chalecos-seguridad-reflectantes-2025'
};

// Tabla de contenidos
const tocItems = [
  { id: 'introduccion', title: 'Introducción', level: 1 },
  { id: 'importancia', title: '¿Por qué son importantes los chalecos reflectantes?', level: 2 },
  { id: 'normativas', title: 'Normativas y certificaciones', level: 1 },
  { id: 'caracteristicas', title: 'Características clave a considerar', level: 2 },
  { id: 'materiales', title: 'Materiales y construcción', level: 2 },
  { id: 'top-chalecos', title: 'Top 5 chalecos recomendados', level: 1 },
  { id: 'chaleco-1', title: 'Chaleco Reflectante Premium', level: 2 },
  { id: 'chaleco-2', title: 'Chaleco de Alta Visibilidad Pro', level: 2 },
  { id: 'chaleco-3', title: 'Chaleco Reflectante Económico', level: 2 },
  { id: 'comparativa', title: 'Comparativa detallada', level: 1 },
  { id: 'guia-compra', title: 'Guía de compra', level: 1 },
  { id: 'mantenimiento', title: 'Mantenimiento y cuidado', level: 2 },
  { id: 'conclusion', title: 'Conclusión', level: 1 }
];

// Artículos relacionados
const relatedArticles = [
  {
    id: '1',
    title: 'Los Mejores Overoles de Trabajo de 2025',
    excerpt: 'Descubre los overoles más duraderos y cómodos para diferentes entornos laborales.',
    category: 'Ropa de Trabajo',
    publishDate: '20 Ago 2025',
    readTime: '6 min',
    image: '/images/articles/overoles-trabajo.jpg',
    slug: 'mejores-overoles-trabajo-2025',
    isPopular: true
  },
  {
    id: '2',
    title: 'Guía Completa: Botas de Seguridad Industrial',
    excerpt: 'Todo lo que necesitas saber para elegir las mejores botas de seguridad.',
    category: 'Calzado Industrial',
    publishDate: '15 Ago 2025',
    readTime: '7 min',
    image: '/images/articles/botas-seguridad.jpg',
    slug: 'botas-seguridad-industrial-guia'
  },
  {
    id: '3',
    title: 'Los Mejores Cascos de Seguridad del Mercado',
    excerpt: 'Comparativa de cascos de seguridad con certificaciones y características técnicas.',
    category: 'Protección Craneal',
    publishDate: '10 Ago 2025',
    readTime: '5 min',
    image: '/images/articles/cascos-seguridad.jpg',
    slug: 'mejores-cascos-seguridad-2025'
  }
];

// Datos para la comparación de productos
const comparisonProducts = [
  {
    id: 'chaleco-premium',
    name: 'Chaleco Reflectante Premium',
    image: '/images/products/chaleco-premium.jpg',
    rating: 4.8,
    reviewCount: 245,
    isRecommended: true,
    bestFor: 'Trabajo nocturno',
    amazonLink: 'https://amazon.com/chaleco-premium'
  },
  {
    id: 'chaleco-pro',
    name: 'Chaleco Alta Visibilidad Pro',
    image: '/images/products/chaleco-pro.jpg',
    rating: 4.6,
    reviewCount: 189,
    bestFor: 'Construcción',
    amazonLink: 'https://amazon.com/chaleco-pro'
  },
  {
    id: 'chaleco-economico',
    name: 'Chaleco Reflectante Básico',
    image: '/images/products/chaleco-basico.jpg',
    rating: 4.3,
    reviewCount: 156,
    bestFor: 'Presupuesto limitado',
    amazonLink: 'https://amazon.com/chaleco-basico'
  }
];

const comparisonFeatures = [
  { name: 'Material', product1: 'Poliéster 300D', product2: 'Poliéster 200D', product3: 'Poliéster 150D' },
  { name: 'Certificación ANSI', product1: true, product2: true, product3: false },
  { name: 'Reflectante 360°', product1: true, product2: false, product3: false },
  { name: 'Bolsillos', product1: '4 bolsillos', product2: '2 bolsillos', product3: '1 bolsillo' },
  { name: 'Ajustable', product1: true, product2: true, product3: true },
  { name: 'Lavable', product1: true, product2: true, product3: false },
  { name: 'Disponibilidad', product1: 'Amazon Prime', product2: 'Amazon Prime', product3: 'Envío Estándar' }
];

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  return {
    title: `${articleData.title} | LinkerPro`,
    description: articleData.subtitle,
    keywords: articleData.tags.join(', '),
    openGraph: {
      title: articleData.title,
      description: articleData.subtitle,
      type: 'article',
      publishedTime: articleData.publishDate,
      authors: [articleData.author],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // En un caso real, aquí cargarías el artículo basado en el slug
  if (params.slug !== articleData.slug) {
    notFound();
  }

  return (
    <BlogLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100 text-sm font-medium mb-6">
                📋 Guía Completa
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {articleData.title}
              </h1>
              <p className="text-xl text-blue-100">
                {articleData.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Tabla de contenidos - Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <TocNavigation items={tocItems} />
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="lg:col-span-3">
                <ArticleContent
                  title={articleData.title}
                  subtitle={articleData.subtitle}
                  author={articleData.author}
                  publishDate={articleData.publishDate}
                  readTime={articleData.readTime}
                  category={articleData.category}
                  tags={articleData.tags}
                >
                  {/* Contenido del artículo */}
                  <div id="introduccion">
                    <h2>Introducción</h2>
                    <p>
                      Los chalecos de seguridad reflectantes son elementos esenciales del equipo de protección personal (EPP)
                      en múltiples industrias. Su importancia radica en la capacidad de hacer visible a los trabajadores
                      en condiciones de baja iluminación, reduciendo significativamente el riesgo de accidentes laborales.
                    </p>
                  </div>

                  <div id="importancia">
                    <h3>¿Por qué son importantes los chalecos reflectantes?</h3>
                    <p>
                      Según estadísticas de la OSHA (Administración de Seguridad y Salud Ocupacional), miles de trabajadores
                      sufren accidentes relacionados con la visibilidad cada año. Los chalecos reflectantes pueden reducir
                      estos incidentes hasta en un 70% en condiciones de baja visibilidad.
                    </p>
                  </div>

                  <div id="normativas">
                    <h2>Normativas y Certificaciones</h2>
                    <p>
                      Los chalecos de seguridad deben cumplir con estándares internacionales como ANSI/ISEA 107-2020
                      en Estados Unidos o EN ISO 20471 en Europa. Estos estándares garantizan que el material reflectante
                      cumpla con requisitos mínimos de visibilidad.
                    </p>
                  </div>

                  <div id="caracteristicas">
                    <h3>Características clave a considerar</h3>
                    <ul>
                      <li><strong>Coeficiente de luminancia:</strong> Mide la capacidad reflectante del material</li>
                      <li><strong>Ángulo de visibilidad:</strong> Cuántos grados cubre el material reflectante</li>
                      <li><strong>Resistencia al desgaste:</strong> Durabilidad del material con el uso continuo</li>
                      <li><strong>Comodidad:</strong> Peso, ajuste y transpirabilidad del chaleco</li>
                    </ul>
                  </div>

                  <div id="materiales">
                    <h3>Materiales y construcción</h3>
                    <p>
                      Los chalecos modernos utilizan poliéster tejido con hilos reflectantes de vidrio o cerámica.
                      Los mejores modelos incorporan tecnología de prismas para máxima reflectividad en múltiples ángulos.
                    </p>
                  </div>

                  <div id="top-chalecos">
                    <h2>Top 5 Chalecos Recomendados</h2>
                    <p>
                      Después de analizar más de 20 modelos disponibles en el mercado, hemos seleccionado los
                      mejores chalecos de seguridad reflectantes basándonos en certificaciones, reseñas de usuarios
                      y pruebas de laboratorio.
                    </p>
                  </div>

                  {/* Comparación de productos */}
                  <div id="comparativa" className="my-12">
                    <ProductComparison
                      title="Comparativa: Mejores Chalecos Reflectantes"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />
                  </div>

                  <div id="guia-compra">
                    <h2>Guía de Compra</h2>
                    <p>
                      Al seleccionar un chaleco reflectante, considera primero el entorno de trabajo específico.
                      Para trabajos nocturnos en carreteras, prioriza la reflectividad 360°. Para entornos industriales,
                      enfócate en la durabilidad y comodidad.
                    </p>
                  </div>

                  <div id="mantenimiento">
                    <h3>Mantenimiento y cuidado</h3>
                    <ul>
                      <li>Lavar a máquina en ciclo suave con agua fría</li>
                      <li>No usar blanqueador ni secadora de alta temperatura</li>
                      <li>Inspeccionar regularmente el material reflectante</li>
                      <li>Reemplazar si hay desgaste significativo en las bandas reflectantes</li>
                    </ul>
                  </div>

                  <div id="conclusion">
                    <h2>Conclusión</h2>
                    <p>
                      Elegir el chaleco de seguridad reflectante adecuado puede marcar la diferencia entre un
                      día de trabajo seguro y un accidente potencial. Considera siempre las certificaciones,
                      el entorno de trabajo y la comodidad al tomar tu decisión.
                    </p>
                    <p>
                      Recuerda que la seguridad nunca debe ser comprometida por el costo. Un chaleco certificado
                      y de calidad es una inversión en tu bienestar y el de tus compañeros de trabajo.
                    </p>
                  </div>
                </ArticleContent>

                {/* Artículos relacionados */}
                <div className="mt-16">
                  <RelatedArticles articles={relatedArticles} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}
