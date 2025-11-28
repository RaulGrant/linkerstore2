'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Eye, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  slug: string;
  featuredImage?: string; // Opcional
  views?: number;
  isPopular?: boolean;
  isNew?: boolean;
}

// Posiciones fijas para las partículas para evitar diferencias SSR/Client
const FIXED_PARTICLE_POSITIONS = [
  { left: 25, top: 30 },
  { left: 70, top: 25 },
  { left: 15, top: 60 },
  { left: 80, top: 70 },
  { left: 45, top: 15 },
  { left: 60, top: 80 },
  { left: 30, top: 45 },
  { left: 85, top: 40 }
];

export default function ArticleCard({
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  slug,
  views,
  isPopular = false,
  isNew = false
}: ArticleCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Función para obtener emoji según la categoría
  const getCategoryEmoji = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'Seguridad Industrial': '🦺',
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

  // Función para formatear vistas de manera consistente
  const formatViews = (views: number) => {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Link href={`/blog/${slug}`} className="block h-full group cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ 
          y: -8, 
          scale: 1.03,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="h-full overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative">
        {/* Efecto de brillo completo en hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 z-20 pointer-events-none"
          whileHover={{ 
            opacity: [0, 0.3, 0],
            x: [-100, 300],
            transition: { duration: 0.8 }
          }}
          style={{ transform: "skewX(-20deg)" }}
        />

        {/* Header con emoji en lugar de imagen */}
        <motion.div 
          className="relative h-40 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden"
          whileHover={{ 
            backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))"
          }}
        >
          {/* Partículas flotantes en el header */}
          <div className="absolute inset-0 pointer-events-none">
            {mounted && FIXED_PARTICLE_POSITIONS.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0"
                animate={{
                  x: [0, (i % 2 === 0 ? 15 : -15)],
                  y: [0, (i % 3 === 0 ? 15 : -15)],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.4
                }}
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                }}
              />
            ))}
          </div>

          {/* Emoji principal */}
          <motion.div 
            className="text-7xl z-10"
            whileHover={{ 
              scale: 1.2, 
              rotate: [0, -5, 5, 0],
              transition: { 
                type: "spring", 
                stiffness: 300,
                rotate: { duration: 0.6 }
              }
            }}
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {getCategoryEmoji(category)}
          </motion.div>
          
          {/* Badges superiores */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            <motion.div
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, x: 2 }}
            >
              <Badge className="bg-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow">
                {category}
              </Badge>
            </motion.div>
            {isNew && (
              <motion.div
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.1, x: 2 }}
              >
                <Badge className="bg-green-600 text-white shadow-lg">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                  <span className="ml-1">Nuevo</span>
                </Badge>
              </motion.div>
            )}
            {isPopular && (
              <motion.div
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.1, x: 2 }}
              >
                <Badge className="bg-orange-600 text-white shadow-lg flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🔥
                  </motion.span>
                  <span>Popular</span>
                </Badge>
              </motion.div>
            )}
          </div>

          {/* Vistas en la esquina superior derecha */}
          {views && (
            <motion.div 
              className="absolute top-4 right-4 z-20"
              initial={{ scale: 0, x: 20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, x: -2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-lg">
                <Eye className="h-3 w-3 text-gray-600" />
                <span className="text-xs text-gray-600 font-medium">
                  {mounted ? formatViews(views) : views.toString()}
                </span>
              </div>
            </motion.div>
          )}

          {/* Patrón decorativo de fondo mejorado */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
              `
            }} />
          </div>
        </motion.div>

        <CardContent className="p-6 flex-1">
          {/* Metadatos */}
          <motion.div 
            className="flex items-center gap-4 text-sm text-gray-500 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </motion.div>

          {/* Título */}
          <motion.h3 
            className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.h3>

          {/* Excerpt */}
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {excerpt}
          </motion.p>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full"
          >
            <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded-md py-2 px-4">
              <div className="flex items-center justify-center gap-2 relative z-10">
                {/* Efecto de ondas en el botón */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  whileHover={{
                    x: [-100, 100],
                    transition: { duration: 0.6 }
                  }}
                  style={{ transform: "skewX(-20deg)" }}
                />
                
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="font-medium"
                >
                  Leer Artículo
                </motion.span>
                
                <motion.div
                  whileHover={{ 
                    x: 3,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
