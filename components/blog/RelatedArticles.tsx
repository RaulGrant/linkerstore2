'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp, Shield, Wrench, Heart } from 'lucide-react';

interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  image?: string; // Opcional
  slug: string;
  isPopular?: boolean;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
  className?: string;
}

export default function RelatedArticles({
  articles,
  title = "Artículos Relacionados",
  className = ''
}: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  // Función para obtener emoji según la categoría
  const getCategoryEmoji = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'Herramientas': '🔧',
      'Seguridad': '🛡️',
      'EPP': '🦺',
      'Reseñas': '⭐',
      'Guías': '📚',
      'Equipos': '⚡',
      'Industrial': '🏭',
      'Construcción': '🏗️',
      'Primeros Auxilios': '❤️‍🩹',
      'Calzado': '👷‍♂️'
    };
    return categoryMap[category] || '📄';
  };

  return (
    <section
      className={`space-y-6 ${className}`}
    >
      {/* Título de la sección */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        <p className="text-gray-600">
          📚 Explora más contenido relacionado con este tema
        </p>
      </div>

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="group"
          >
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group-hover:border-blue-200 hover:-translate-y-1">
              {/* Header del artículo con emoji */}
              <div className="relative h-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
                <div className="text-6xl transition-transform hover:scale-110 hover:rotate-3">
                  {getCategoryEmoji(article.category)}
                </div>
                
                {/* Badge de popular */}
                {article.isPopular && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-orange-500 text-white text-xs flex items-center gap-1 animate-pulse">
                      <TrendingUp className="h-3 w-3" />
                      🔥 Popular
                    </Badge>
                  </div>
                )}

                {/* Categoría */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs bg-white/80 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>

                {/* Patrón decorativo */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
                    `
                  }} />
                </div>
              </div>

              <CardContent className="p-6">
                {/* Título */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta información */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Botón de acción */}
                <div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    <Link href={`/blog/${article.slug}`} className="flex items-center justify-center gap-2">
                      <span>Leer Artículo</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* CTA para ver más artículos */}
      <div className="text-center pt-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <div className="text-4xl mb-4 transition-transform hover:scale-110">
            📖
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            ¿Quieres explorar más contenido?
          </h3>
          <p className="text-gray-600 mb-6">
            Descubre todos nuestros artículos sobre seguridad industrial y equipos de protección personal.
          </p>
          <div className="transition-transform hover:scale-105">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-lg">
              <Link href="/blog" className="flex items-center gap-2">
                <span>Ver Todos los Artículos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
