'use client';

import { motion } from 'framer-motion';
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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`space-y-6 ${className}`}
    >
      {/* Título de la sección */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        <p className="text-gray-600">
          📚 Explora más contenido relacionado con este tema
        </p>
      </motion.div>

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="group"
            whileHover={{ y: -4 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group-hover:border-blue-200">
              {/* Header del artículo con emoji */}
              <div className="relative h-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
                <motion.div 
                  className="text-6xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getCategoryEmoji(article.category)}
                </motion.div>
                
                {/* Badge de popular */}
                {article.isPopular && (
                  <motion.div 
                    className="absolute top-3 left-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <Badge className="bg-orange-500 text-white text-xs flex items-center gap-1 animate-pulse">
                      <TrendingUp className="h-3 w-3" />
                      🔥 Popular
                    </Badge>
                  </motion.div>
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
                <motion.h3 
                  className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {article.title}
                </motion.h3>

                {/* Excerpt */}
                <motion.p 
                  className="text-gray-600 text-sm mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {article.excerpt}
                </motion.p>

                {/* Meta información */}
                <motion.div 
                  className="flex items-center justify-between text-xs text-gray-500 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </motion.div>

                {/* Botón de acción */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
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
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA para ver más artículos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-6"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0, type: "spring" }}
            className="text-4xl mb-4"
          >
            📖
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            ¿Quieres explorar más contenido?
          </h3>
          <p className="text-gray-600 mb-6">
            Descubre todos nuestros artículos sobre seguridad industrial y equipos de protección personal.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-lg">
              <Link href="/blog" className="flex items-center gap-2">
                <span>Ver Todos los Artículos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
