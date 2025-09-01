'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface ArticleContentProps {
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags?: string[];
  children: ReactNode;
  className?: string;
}

export default function ArticleContent({
  title,
  subtitle,
  author,
  publishDate,
  readTime,
  category,
  tags = [],
  children,
  className = ''
}: ArticleContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`max-w-4xl mx-auto ${className}`}
    >
      {/* Header del artículo */}
      <header className="mb-8">
        {/* Categoría */}
        <div className="mb-4">
          <Badge variant="secondary" className="text-sm">
            {category}
          </Badge>
        </div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtítulo */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-6 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Meta información */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6"
        >
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime} de lectura</span>
          </div>
        </motion.div>

        {/* Tags */}
        {tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </motion.div>
        )}
      </header>

      {/* Contenido del artículo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-blue-500 prose-blockquote:text-gray-700 prose-li:text-gray-700"
      >
        {children}
      </motion.div>

      {/* Separador */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"
      />

      {/* Footer del artículo */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="text-center py-8"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            ¿Te resultó útil este artículo?
          </h3>
          <p className="text-gray-600 mb-4">
            Si tienes alguna pregunta o necesitas más información sobre seguridad industrial,
            no dudes en contactarnos.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <span>Contactar Experto</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.footer>
    </motion.article>
  );
}
