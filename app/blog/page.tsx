'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogHero from '@/components/blog/BlogHero';
import ArticleCard from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Calendar } from 'lucide-react';

// Nota: Los metadatos se moverán a layout.tsx o se manejará el SEO de otra forma
// ya que este componente ahora es 'use client'

// Datos de los 15 artículos del plan maestro con fechas desde el 8 de agosto
const featuredArticles = [
  {
    title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
    excerpt: 'Analizamos 7 de los chalecos mejor calificados en Amazon para ayudarte a elegir la protección ideal según tu trabajo y presupuesto. Descubre nuestra guía y comparativa.',
    category: 'Seguridad Industrial',
    readTime: '12 min',
    publishDate: '29 Ago 2025',
    slug: 'mejores-chalecos-seguridad-2025',
    views: 15200,
    isPopular: true,
    isNew: true
  },
  {
    title: 'Top 7 Kits de Herramientas Que Todo Profesional (y Aficionado) Debe Tener en 2025',
    excerpt: 'Los conjuntos de herramientas esenciales para trabajos industriales y hogar. Calidad, funcionalidad y mejor relación valor-rendimiento.',
    category: 'Herramientas',
    readTime: '13 min',
    publishDate: '30 Ago 2025',
    slug: 'top-7-kits-herramientas-2025',
    views: 980,
    isPopular: true
  },
  {
  title: 'Guía NOM-009-STPS-2011: Trabajos en Alturas',
  excerpt: 'Los 7 puntos clave que todo supervisor debe dominar para garantizar la seguridad en trabajos de altura. Incluye análisis de riesgos, jerarquía de controles y plan de emergencia.',
  category: 'Seguridad Industrial',
  readTime: '15 min',
  publishDate: '1 Oct 2025',
  slug: 'guia-nom-009-stps-2011-trabajos-altura',
  views: 900,
  isPopular: false,
  isNew: true
},
  {
    title: 'Los Mejores Botiquines de Emergencia para el Lugar de Trabajo',
    excerpt: 'Equipos de primeros auxilios especializados para diferentes entornos laborales. Normativas y contenido recomendado.',
    category: 'Primeros Auxilios',
    readTime: '7 min',
    publishDate: '22 Ago 2025',
    slug: 'mejores-botiquines-emergencia-trabajo',
    views: 750
  },
  {
    title: 'Guía Completa: Los Mejores Overoles de Trabajo de 2025',
    excerpt: 'Ropa de protección integral para diferentes industrias. Materiales, ajustes y características de seguridad evaluadas.',
    category: 'EPP',
    readTime: '9 min',
    publishDate: '20 Ago 2025',
    slug: 'guia-completa-mejores-overoles-trabajo-2025',
    views: 892,
    isNew: true
  },
  {
    title: 'El Mejor Calzado Industrial: Botas de Seguridad Probadas',
    excerpt: 'Análisis exhaustivo de botas de seguridad. Resistencia, comodidad y protección en diferentes condiciones de trabajo.',
    category: 'Calzado',
    readTime: '8 min',
    publishDate: '18 Ago 2025',
    slug: 'mejor-calzado-industrial-botas-seguridad',
    views: 1150,
    isPopular: true
  },
  {
    title: '¿Ya Conocías Estos Lentes de Protección Innovadores?',
    excerpt: 'Descubre las últimas innovaciones en protección ocular. Tecnología antiempañante, UV y resistencia a impactos.',
    category: 'Seguridad',
    readTime: '6 min',
    publishDate: '16 Ago 2025',
    slug: 'lentes-proteccion-innovadores',
    views: 680
  },
  {
    title: 'Los Mejores Arneses de Seguridad para Trabajo en Altura',
    excerpt: 'Equipos de protección anticaídas. Certificaciones, sistemas de anclaje y características de seguridad fundamentales.',
    category: 'Seguridad',
    readTime: '10 min',
    publishDate: '14 Ago 2025',
    slug: 'mejores-arneses-seguridad-trabajo-altura',
    views: 934,
    isPopular: true
  },
  {
    title: 'Escaleras Industriales: Guía de Compra y Mejores Modelos',
    excerpt: 'Comparativa de escaleras profesionales. Materiales, capacidades de carga y características de seguridad.',
    category: 'Construcción',
    readTime: '8 min',
    publishDate: '12 Ago 2025',
    slug: 'escaleras-industriales-guia-compra-mejores-modelos',
    views: 567
  },
  {
    title: 'Protección Auditiva en el Trabajo: Tapones vs Orejeras',
    excerpt: 'Análisis detallado de equipos de protección auditiva. NRR, comodidad y efectividad en diferentes ambientes.',
    category: 'Seguridad',
    readTime: '7 min',
    publishDate: '10 Ago 2025',
    slug: 'proteccion-auditiva-trabajo-tapones-vs-orejeras',
    views: 723
  },
  {
    title: 'Los Mejores Multímetros para Electricistas Profesionales',
    excerpt: 'Instrumentos de medición precisos para trabajo eléctrico. Características técnicas, seguridad y durabilidad.',
    category: 'Equipos',
    readTime: '9 min',
    publishDate: '8 Ago 2025',
    slug: 'mejores-multimetros-electricistas-profesionales',
    views: 856,
    isNew: true
  },
  {
    title: 'Rotomartillos y Taladros: Cuál Elegir Según tu Proyecto',
    excerpt: 'Guía completa para seleccionar la herramienta correcta. Potencia, versatilidad y aplicaciones específicas.',
    category: 'Herramientas',
    readTime: '8 min',
    publishDate: '25 Ago 2025',
    slug: 'rotomartillos-taladros-cual-elegir-proyecto',
    views: 612
  },
  {
    title: 'Termómetros Industriales: Precisión en Cada Medición',
    excerpt: 'Instrumentos de temperatura para aplicaciones industriales. Rangos, precisión y características técnicas.',
    category: 'Equipos',
    readTime: '6 min',
    publishDate: '23 Ago 2025',
    slug: 'termometros-industriales-precision-medicion',
    views: 445
  },
  {
    title: 'Monitores de Gases: Protección Invisible Pero Vital',
    excerpt: 'Detectores de gases peligrosos en el ambiente laboral. Tipos de sensores, calibración y mantenimiento.',
    category: 'Industrial',
    readTime: '9 min',
    publishDate: '21 Ago 2025',
    slug: 'monitores-gases-proteccion-invisible-vital',
    views: 789
  },
  {
    title: 'Selladores Industriales: Guía de Productos y Aplicaciones',
    excerpt: 'Materiales de sellado para diferentes aplicaciones industriales. Resistencia química, térmica y durabilidad.',
    category: 'Industrial',
    readTime: '7 min',
    publishDate: '19 Ago 2025',
    slug: 'selladores-industriales-guia-productos-aplicaciones',
    views: 523
  },
  {
    title: 'Los Mejores Extintores para Diferentes Tipos de Incendios',
    excerpt: 'Sistemas de extinción de incendios. Clasificación de fuegos, agentes extintores y ubicación estratégica.',
    category: 'Seguridad',
    readTime: '10 min',
    publishDate: '17 Ago 2025',
    slug: 'mejores-extintores-diferentes-tipos-incendios',
    views: 1045,
    isPopular: true
  }
];

const allCategories = [
  'Todos',
  'Seguridad Industrial', 
  'Herramientas',
  'Primeros Auxilios',
  'EPP',
  'Calzado', 
  'Seguridad',
  'Construcción',
  'Equipos',
  'Industrial'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Filtrar artículos según la categoría seleccionada
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return featuredArticles;
    }
    return featuredArticles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  // Calcular contadores de categorías dinámicamente
  const categories = useMemo(() => {
    return allCategories.map(categoryName => {
      if (categoryName === 'Todos') {
        return {
          name: categoryName,
          count: featuredArticles.length,
          active: selectedCategory === categoryName
        };
      }
      
      const count = featuredArticles.filter(article => article.category === categoryName).length;
      return {
        name: categoryName,
        count,
        active: selectedCategory === categoryName
      };
    }).filter(category => category.count > 0); // Solo mostrar categorías con artículos
  }, [selectedCategory]);
  return (
    <BlogLayout>
      {/* Hero Section */}
      <BlogHero 
        title="Blog LinkerStore"
        subtitle="Encuentra lo que necesitas fácil y rápido"
        ctaText="Explorar Artículos"
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        {/* Sección de estadísticas */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-0">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15</p>
                  <p className="text-sm text-gray-600">Artículos Publicados</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-0">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">7 min</p>
                  <p className="text-sm text-gray-600">Tiempo Promedio de Lectura</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-0">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1 por semana</p>
                  <p className="text-sm text-gray-600">Nuevos Artículos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros de categorías */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explora por Categorías</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.active ? "default" : "secondary"}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                  category.active 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Grid de artículos */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'Todos' ? 'Artículos Destacados' : `Artículos de ${selectedCategory}`}
            </h2>
            <span className="text-sm text-gray-500">
              {filteredArticles.length} artículo{filteredArticles.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay artículos en esta categoría
              </h3>
              <p className="text-gray-500 mb-6">
                Pronto agregaremos más contenido para la categoría "{selectedCategory}"
              </p>
              <Button 
                onClick={() => setSelectedCategory('Todos')}
                variant="outline"
              >
                Ver todos los artículos
              </Button>
            </div>
          )}
        </div>

        {/* Botón cargar más */}
        <div className="text-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Cargar Más Artículos
          </Button>
        </div>

        {/* Enlaces rápidos y CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Guías Técnicas</h3>
            <p className="text-gray-600 mb-4">
              Manuales detallados y paso a paso para profesionales de seguridad industrial.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/guias">Ver Todas las Guías</Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🛡️ Equipos EPP</h3>
            <p className="text-gray-600 mb-4">
              Información sobre equipos de protección personal certificados y normativas.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/blog?category=EPP">Artículos sobre EPP</Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-4">👥 Nuestro Equipo</h3>
            <p className="text-gray-600 mb-4">
              Conoce a los expertos certificados que crean nuestro contenido especializado.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/sobre-nosotros">Conocer Equipo</Link>
            </Button>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
