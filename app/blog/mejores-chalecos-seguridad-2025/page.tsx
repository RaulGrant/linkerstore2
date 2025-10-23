'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import ProductComparison from '@/components/blog/ProductComparison';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle } from 'lucide-react';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';
import { useEffect } from 'react';

export default function ChalecosSeguridadArticle() {
  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'mejores-chalecos-seguridad-2025');
    trackBlogView(articleId, 'Los 7 Mejores Chalecos Reflectantes de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  // Función para manejar clicks en enlaces de Amazon
  const handleAmazonClick = (productName: string, amazonUrl: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('amazon', productId, productName, 'chaleco_seguridad');
  };

  // Datos para la comparación de productos
  const comparisonData = {
    title: "Análisis Cara a Cara: Top 3 Chalecos",
    products: [
      {
        id: 'prod-1',
        name: 'Simonetta Vespetti',
        rating: 4.4,
        reviewCount: 427,
        isRecommended: true,
        bestFor: 'Mejor Funcionalidad',
        amazonLink: 'https://a.co/d/bw2qd4o'
      },
      {
        id: 'prod-2',
        name: 'Señor Seguridad',
        rating: 4.4,
        reviewCount: 338,
        isRecommended: false,
        bestFor: 'Máxima Durabilidad',
        amazonLink: 'https://a.co/d/2eQjkvK'
      },
      {
        id: 'prod-3',
        name: 'Greaxid Personalizable',
        rating: 4.5,
        reviewCount: 180,
        isRecommended: false,
        bestFor: 'Equipos y Empresas',
        amazonLink: 'https://a.co/d/cZ8m0fH'
      }
    ],
    features: [
      { name: 'Material Principal', product1: 'Poliéster', product2: 'Gabardina', product3: 'Poliéster' },
      { name: 'Estilo', product1: 'Estándar', product2: 'Brigadista', product3: 'Estándar' },
      { name: 'Total de Bolsillos', product1: '5', product2: '5+', product3: '5' },
      { name: 'Bolsillo para ID', product1: true, product2: false, product3: false },
      { name: 'Ajuste Lateral', product1: false, product2: true, product3: false },
      { name: 'Personalizable', product1: false, product2: false, product3: true },
      { name: 'Visibilidad Clase 2', product1: false, product2: false, product3: true },
      { name: 'Disponibilidad', product1: 'Amazon Prime', product2: 'Amazon Prime', product3: 'Envío Estándar' }
    ]
  };

  // Datos para artículos relacionados
  const relatedArticles = [
    {
      id: 1,
      title: 'Los Mejores Cascos de Seguridad Industrial 2025',
      excerpt: 'Guía completa de cas cos de protección para trabajo y construcción.',
      description: 'Guía completa de cascos de protección para trabajo y construcción.',
      category: 'EPP',
      publishDate: '10 Nov 2023',
      readTime: '8 min',
      image: '/images/safety-helmets.jpg',
      slug: 'mejores-cascos-seguridad-industrial'
    },
    {
      id: 2,
      title: 'Guantes de Seguridad: Cómo Elegir la Protección Adecuada',
      excerpt: 'Todo lo que necesitas saber sobre guantes de trabajo y protección.',
      description: 'Todo lo que necesitas saber sobre guantes de trabajo y protección.',
      category: 'EPP',
      publishDate: '8 Nov 2023',
      readTime: '10 min',
      image: '/images/safety-gloves.jpg',
      slug: 'guia-guantes-seguridad-trabajo'
    },
    {
      id: 3,
      title: 'Calzado de Seguridad: Las Mejores Botas Industriales',
      excerpt: 'Análisis detallado de las botas de seguridad más resistentes.',
      description: 'Análisis detallado de las botas de seguridad más resistentes.',
      category: 'EPP',
      publishDate: '5 Nov 2023',
      readTime: '15 min',
      image: '/images/safety-boots.jpg',
      slug: 'mejor-calzado-industrial-botas-seguridad'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas extendido por toda la sección */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas - distribuidas por toda la sección) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`section-large-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${45 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 3.7) % 100}%`,
                }}
                animate={{
                  x: [0, 100 + (i % 50), -80 + (i % 30), 0],
                  y: [0, -120 + (i % 40), 100 + (i % 35), 0],
                  scale: [0.3, 1.2, 0.5, 1],
                  opacity: [0.2, 0.8, 0.3, 0.7],
                  rotate: [0, 180 + (i % 180), 360]
                }}
                transition={{
                  duration: 12 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Partículas medianas rápidas (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`section-medium-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: 2 + (i % 4),
                  height: 2 + (i % 4),
                  backgroundColor: `hsl(${200 + (i * 4)}, 75%, ${70 + (i % 20)}%)`,
                  left: `${(i * 1.67) % 100}%`,
                  top: `${(i * 2.33) % 100}%`,
                }}
                animate={{
                  x: [0, 60 + (i % 30), -40 + (i % 20)],
                  y: [0, -80 + (i % 25), 60 + (i % 30)],
                  scale: [0, 1, 0.2, 1, 0],
                  opacity: [0, 0.9, 0.1, 0.6, 0]
                }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "linear"
                }}
              />
            ))}

            {/* Micropartículas súper rápidas (160 partículas) */}
            {Array.from({ length: 160 }, (_, i) => (
              <motion.div
                key={`section-micro-particle-${i}`}
                className="absolute rounded-full opacity-50"
                style={{
                  width: 1 + (i % 2),
                  height: 1 + (i % 2),
                  backgroundColor: `hsl(${280 + (i * 3)}, 80%, ${75 + (i % 15)}%)`,
                  left: `${(i * 1.25) % 100}%`,
                  top: `${(i * 1.75) % 100}%`,
                }}
                animate={{
                  x: [0, 30 + (i % 15), -20 + (i % 10)],
                  y: [0, -40 + (i % 12), 30 + (i % 15)],
                  scale: [0, 0.8, 0.1, 1, 0],
                  opacity: [0, 0.7, 0.05, 0.5, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 3 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Líneas conectoras con gradientes (40 líneas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`section-line-particle-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"
                style={{
                  width: 80 + (i * 15),
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 4.5) % 100}%`,
                  transformOrigin: 'center center'
                }}
                animate={{
                  scale: [0.2, 1.5, 0.3, 1],
                  rotate: [0, 360 + (i % 90)],
                  opacity: [0.1, 0.6, 0.05, 0.4]
                }}
                transition={{
                  duration: 10 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Ondas expansivas (30 ondas) */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={`section-wave-particle-${i}`}
                className="absolute border-2 border-orange-400 rounded-full opacity-30"
                style={{
                  width: 80,
                  height: 80,
                  left: `${15 + (i * 6)}%`,
                  top: `${10 + (i * 5.5)}%`,
                }}
                animate={{
                  scale: [0, 4, 0.1, 1],
                  borderWidth: [3, 0.1, 3],
                  opacity: [0.5, 0.05, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Partículas de destello (60 partículas) */}
            {Array.from({ length: 60 }, (_, i) => (
              <motion.div
                key={`section-sparkle-particle-${i}`}
                className="absolute"
                style={{
                  left: `${(i * 3.33) % 100}%`,
                  top: `${(i * 2.67) % 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0.1, 1, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-2 h-2 bg-yellow-300 rounded-full"
                  style={{
                    boxShadow: `0 0 ${6 + (i % 8)}px hsl(${45 + (i * 12)}, 85%, 55%)`
                  }}
                />
              </motion.div>
            ))}

            {/* Partículas orbitales (50 partículas) */}
            {Array.from({ length: 50 }, (_, i) => (
              <motion.div
                key={`section-orbital-particle-${i}`}
                className="absolute w-3 h-3 rounded-full opacity-60"
                style={{
                  backgroundColor: `hsl(${180 + (i * 7)}, 70%, ${60 + (i % 25)}%)`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((i / 50) * 2 * Math.PI) * (150 + i * 3),
                    Math.cos((i / 50) * 2 * Math.PI + Math.PI) * (150 + i * 3),
                    Math.cos((i / 50) * 2 * Math.PI) * (150 + i * 3)
                  ],
                  y: [
                    Math.sin((i / 50) * 2 * Math.PI) * (100 + i * 2),
                    Math.sin((i / 50) * 2 * Math.PI + Math.PI) * (100 + i * 2),
                    Math.sin((i / 50) * 2 * Math.PI) * (100 + i * 2)
                  ],
                  scale: [0.5, 1.2, 0.3, 1],
                  opacity: [0.2, 0.8, 0.1, 0.6]
                }}
                transition={{
                  duration: 15 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto relative"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-2 text-orange-100 text-sm font-medium mb-6 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="h-4 w-4" />
                🦺 Equipos de Protección Personal
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Chalecos de Seguridad Reflectantes de 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva y comparativa de los 7 chalecos mejor calificados en Amazon
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-sm text-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Calendar className="h-4 w-4" />
                  </motion.div>
                  29 de Agosto, 2025
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="h-4 w-4" />
                  </motion.div>
                  12 min de lectura
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido del artículo - MEJORADO */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo más grandes y visibles */}
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${200 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                  boxShadow: `0 0 ${2 + (i % 4)}px hsl(${200 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 40, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Ondas de fondo más prominentes */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`content-wave-${i}`}
                className="absolute border-2 rounded-full"
                style={{
                  width: `${150 + i * 80}px`,
                  height: `${150 + i * 80}px`,
                  left: `${(i * 25) % 80}%`,
                  top: `${(i * 30) % 90}%`,
                  borderColor: `hsl(${220 + (i * 20) % 60}, 50%, ${60 + (i % 20)}%, 0.4)`,
                }}
                animate={{
                  scale: [0.8, 1.5, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12 + i * 3,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Líneas conectoras más visibles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`content-line-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${80 + (i * 15) % 120}px`,
                  height: '2px',
                  background: `linear-gradient(90deg, 
                    hsl(${180 + (i * 25) % 80}, 60%, ${50 + (i % 25)}%, 0.6),
                    hsl(${240 + (i * 25) % 80}, 60%, ${50 + (i % 25)}%, 0.2),
                    transparent)`,
                  left: `${(i * 12) % 85}%`,
                  top: `${(i * 23) % 85}%`,
                  transform: `rotate(${i * 25}deg)`,
                }}
                animate={{
                  scaleX: [0, 1.2, 0],
                  opacity: [0, 0.8, 0],
                  rotate: [i * 25, i * 25 + 180, i * 25],
                }}
                transition={{
                  duration: 6 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Partículas brillantes adicionales */}
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${1 + (i % 3)}px`,
                  height: `${1 + (i % 3)}px`,
                  background: `hsl(${250 + (i * 20) % 60}, 80%, ${70 + (i % 20)}%)`,
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 27) % 100}%`,
                  boxShadow: `0 0 ${4 + (i % 3)}px hsl(${250 + (i * 20) % 60}, 80%, ${70 + (i % 20)}%)`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Partículas adicionales específicamente para los márgenes/bordes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Partículas en los bordes laterales */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={`edge-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${6 + (i % 4)}px`,
                  height: `${6 + (i % 4)}px`,
                  background: `hsl(${190 + (i * 20) % 100}, 70%, ${50 + (i % 30)}%)`,
                  left: i < 15 ? `${(i * 2) % 15}%` : `${85 + (i * 2) % 15}%`,
                  top: `${(i * 7) % 100}%`,
                  boxShadow: `0 0 ${8 + (i % 6)}px hsl(${190 + (i * 20) % 100}, 70%, ${50 + (i % 30)}%, 0.8)`,
                }}
                animate={{
                  y: [0, -80, 0],
                  x: [0, (i % 2 === 0 ? 30 : -30), 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.5, 1.8, 0.5],
                }}
                transition={{
                  duration: 10 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Partículas en la parte superior e inferior */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`topbottom-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 5)}px`,
                  height: `${4 + (i % 5)}px`,
                  background: `hsl(${160 + (i * 25) % 120}, 65%, ${55 + (i % 25)}%)`,
                  left: `${(i * 5) % 100}%`,
                  top: i < 10 ? `${(i * 2) % 20}%` : `${80 + (i * 2) % 20}%`,
                  boxShadow: `0 0 ${6 + (i % 4)}px hsl(${160 + (i * 25) % 120}, 65%, ${55 + (i % 25)}%, 0.7)`,
                }}
                animate={{
                  x: [0, 60, -40, 0],
                  y: [0, -40, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.8, 1.6, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 py-12 relative z-20">
            <div className="max-w-6xl mx-auto">
              {/* Contenido del Artículo */}
              <div className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50 relative z-10"
                >
                  {/* Introducción */}
                  <section id="introduccion" className="mb-16">
                    <motion.h1 
                      className="text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Los Mejores Chalecos de Seguridad Reflectantes de 2025: Guía y Comparativa
                    </motion.h1>
                    
                    <motion.div 
                      className="text-sm text-gray-600 mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <strong>📅 Fecha de publicación:</strong> 29 de Agosto del 2025 | <strong>⏱️ Tiempo de lectura:</strong> 12 min
                    </motion.div>

                    {/* Texto principal mejorado */}
                    <motion.div 
                      className="bg-gradient-to-r from-orange-50 to-red-50 border-l-8 border-orange-400 p-8 rounded-r-2xl mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                          <span className="text-white text-2xl">⚠️</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-orange-900 mb-3">¡La Visibilidad Puede Salvar Tu Vida!</h3>
                          <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            En cualquier entorno laboral de alto riesgo, desde una bulliciosa obra en construcción hasta el control de tráfico en una carretera nocturna, <strong className="text-orange-700">la visibilidad no es una opción, es una necesidad vital</strong>. Cada año, miles de accidentes laborales ocurren por falta de visibilidad, un problema que tiene una solución simple pero increíblemente efectiva: <strong className="text-orange-700">el chaleco de seguridad reflectante</strong>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Imagen principal del artículo - Más grande y destacada */}
                    <motion.div 
                      className="my-12 text-center"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-20 scale-105"></div>
                        <img 
                          src="/images/blogs/1 chalecos/articulo1_imagen.webp" 
                          alt="Chalecos de seguridad reflectantes - Comparativa 2025"
                          className="relative rounded-3xl shadow-2xl mx-auto max-w-full border-4 border-white"
                          style={{ maxHeight: '600px', width: 'auto' }}
                        />
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border">
                          <span className="text-sm font-semibold text-gray-700">🔍 Análisis Completo 2025</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Texto de continuación mejorado */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                            <span className="text-white text-xl">🛡️</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-blue-900 mb-3">Tu Primera Línea de Defensa</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              Este <strong>Equipo de Protección Personal (EPP)</strong> es la primera línea de defensa para asegurar que seas visto por operadores de maquinaria, conductores y compañeros de trabajo, <span className="bg-blue-200 px-2 py-1 rounded font-semibold">reduciendo drásticamente el riesgo de accidentes</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 rounded-full p-3 flex-shrink-0">
                            <span className="text-white text-xl">🤔</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-purple-900 mb-3">¿Todos los Chalecos Son Iguales?</h4>
                            <div className="space-y-3">
                              <p className="text-gray-700 leading-relaxed text-lg">
                                <strong>Pero no todos los chalecos son iguales.</strong> La durabilidad, el material, la cantidad de bolsillos y el nivel de reflectividad varían enormemente.
                              </p>
                              <div className="bg-white/60 p-4 rounded-lg">
                                <p className="text-purple-800 font-semibold">
                                  🤷‍♂️ ¿Necesitas un chaleco ligero para eventos esporádicos o uno de uso rudo tipo brigadista que aguante el día a día?
                                </p>
                                <p className="text-purple-800 font-semibold mt-2">
                                  🏢 ¿Es la personalización con el logo de tu empresa una prioridad?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-500 rounded-full p-3">
                          <span className="text-white text-2xl">📋</span>
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">Tu Guía Definitiva</h3>
                      </div>
                      <p className="text-gray-800 font-medium text-lg leading-relaxed">
                        En esta guía definitiva, hemos analizado a fondo <strong className="bg-green-200 px-2 py-1 rounded">7 de los chalecos de seguridad más populares y mejor calificados en Amazon para 2025</strong>. Desglosaremos sus características, compararemos sus pros y contras, y te daremos todas las herramientas para que tomes una decisión informada y protejas lo más importante: <strong className="text-green-700">tu seguridad y la de tu equipo</strong>.
                      </p>
                    </motion.div>
                  </section>

                  {/* Guía de Características */}
                  <section id="guia-caracteristicas" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      🛡️ Guía de Características Clave para Elegir tu Chaleco
                    </motion.h2>
                    
                    <motion.p 
                      className="text-xl text-gray-700 leading-relaxed mb-8 text-center font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Antes de sumergirnos en las recomendaciones, es crucial entender qué hace a un buen chaleco de seguridad. Considera estos factores:
                    </motion.p>

                    <div className="space-y-8">
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-green-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-3xl">🧵</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-green-900">Materiales y Construcción</h3>
                            <p className="text-gray-700 mb-4 text-lg">Los dos materiales más comunes son el <strong>poliéster</strong> y la <strong>gabardina</strong> (una mezcla de poliéster y algodón).</p>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-white/70 p-4 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-2">💨 Poliéster:</h4>
                                <p className="text-gray-700">Es ligero, transpirable y de secado rápido. Ideal para climas cálidos y uso general donde la comodidad es clave.</p>
                              </div>
                              <div className="bg-white/70 p-4 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-2">💪 Gabardina:</h4>
                                <p className="text-gray-700">Es significativamente más robusta, resistente al desgaste y a la exposición solar. Perfecta para trabajos industriales, de construcción y brigadistas que necesitan máxima durabilidad.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-yellow-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-3xl">👁️</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-yellow-900">Visibilidad y Reflectividad</h3>
                            <div className="bg-white/70 p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                La característica principal. Busca chalecos con <strong className="bg-yellow-200 px-2 py-1 rounded">bandas reflectantes anchas (generalmente de 2 pulgadas)</strong> que cubran el torso, hombros y espalda para garantizar una <strong className="bg-yellow-200 px-2 py-1 rounded">visibilidad de 360°</strong>. Algunos modelos, como el de Greaxid, cumplen con la <strong className="bg-orange-200 px-2 py-1 rounded">Clase 2</strong>, un estándar que exige una mayor cantidad de material fluorescente y reflectante, haciéndolos visibles desde más de 300 metros.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-3xl">🔧</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-blue-900">Funcionalidad y Bolsillos</h3>
                            <div className="bg-white/70 p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                Un buen chaleco es también una herramienta de trabajo. Evalúa la cantidad y tipo de bolsillos. ¿Necesitas un compartimento para radio, un bolsillo transparente para tu identificación, espacios para plumas o bolsillos grandes para herramientas? Los chalecos tipo brigadista suelen ofrecer la mayor capacidad de carga.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-purple-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-3xl">📏</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-purple-900">Ajuste y Comodidad</h3>
                            <div className="bg-white/70 p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                Un chaleco mal ajustado puede ser incómodo e incluso peligroso. Los modelos vienen con cierre de cremallera frontal o con sistemas de ajuste lateral (cintas o broches tipo "samsonite"). Los de ajuste lateral ofrecen mayor versatilidad para adaptarse a diferentes complexiones o para usarse sobre ropa gruesa.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-orange-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-3xl">🎨</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-orange-900">Personalización</h3>
                            <div className="bg-white/70 p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                Si buscas uniformar a tu equipo, varios chalecos ofrecen servicios de personalización para añadir logotipos, texto o imágenes. Esto no solo mejora la imagen de tu empresa, sino que también ayuda a identificar roles en el lugar de trabajo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 7 Productos */}
                  <section id="top-7-productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      🏆 Top 7 Chalecos de Seguridad Recomendados para 2025
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 mb-6 text-center font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Hemos seleccionado una variedad de chalecos para cubrir todas las necesidades y presupuestos.
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-600 mb-12 italic text-center bg-blue-50 p-4 rounded-lg border border-blue-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <em>(Nota: Para ver información actualizada, visita directamente la página del producto en Amazon o Mercado Libre).</em>
                    </motion.p>

                    <div className="space-y-10">
                      {/* Producto 1 */}
                      <motion.div 
                        className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-yellow-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 500 }}
                          >
                            🥇 #1
                          </motion.span>
                          <motion.span 
                            className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                          >
                            MEJOR FUNCIONALIDAD
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Simonetta Vespetti - Mejor Opción en Funcionalidad</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Con una calificación estelar y siendo el #1 más vendido en su categoría, este chaleco de Simonetta Vespetti es la prueba de que no necesitas gastar una fortuna para obtener calidad. Fabricado en 100% poliéster, es ligero, cómodo y perfecto para una amplia gama de actividades. Sus 5 bolsillos, incluyendo uno transparente para identificación, lo hacen increíblemente funcional para el uso diario.
                        </p>

                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Uso general, logística, eventos, y cualquiera que busque el mejor balance entre costo y beneficio.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>⭐ Calificación:</strong> 4.2/5 estrellas (55 reseñas)</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Excelente relación calidad-funcionalidad, muy popular y bien calificado, ligero, funcional con bolsillo para ID.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> El poliéster puede ser menos duradero que la gabardina para uso industrial pesado.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/bw2qd4o" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                          onClick={() => handleAmazonClick('Simonetta Vespetti Chaleco Reflectante', 'https://a.co/d/bw2qd4o')}
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 2 */}
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.0, type: "spring", stiffness: 500 }}
                          >
                            🥈 #2
                          </motion.span>
                          <motion.span 
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.1 }}
                          >
                            MÁXIMA DURABILIDAD
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Señor Seguridad - El Más Duradero y Profesional</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Cuando la durabilidad es la máxima prioridad, el chaleco de Señor Seguridad es el claro ganador. Su construcción en gabardina (80% algodón) y su diseño tipo brigadista están pensados para el uso rudo. Cuenta con múltiples bolsillos especializados, incluyendo uno para radio y una bolsa trasera de gran capacidad. Los costados abiertos con ajuste garantizan que se adapte a cualquier usuario.
                        </p>
{/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Brigadistas, construcción, minería, y cualquier trabajo que exija máxima resistencia.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>⭐ Calificación:</strong> 4.5/5 estrellas (150+ reseñas)</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Extremadamente duradero, múltiples bolsillos funcionales, ajuste universal, excelente para cargar equipo.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Es más pesado y costoso que los modelos de poliéster.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/2eQjkvK" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 3 */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-purple-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2, type: "spring", stiffness: 500 }}
                          >
                            🥉 #3
                          </motion.span>
                          <motion.span 
                            className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.3 }}
                          >
                            MEJOR PARA EQUIPOS
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Greaxid Personalizable - Mejor para Equipos y Empresas</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Si necesitas equipar a tu equipo y reforzar tu marca, el chaleco de Greaxid es la opción perfecta. No solo ofrece personalización completa con logos o texto, sino que también cumple con el estándar de alta visibilidad Clase 2. Con 5 bolsillos, clips para micrófono y un anillo en D, está diseñado para la eficiencia en el trabajo.
                        </p>
{/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Empresas de construcción, seguridad, logística y control de tráfico que buscan uniformes personalizados.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>⭐ Calificación:</strong> 4.0/5 estrellas (200+ reseñas)</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Totalmente personalizable, alta visibilidad Clase 2, muy funcional, excelente valor.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> El proceso de personalización requiere un paso extra antes de la compra.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/cZ8m0fH" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Productos adicionales con diseño expandido */}
                      {/* Producto 4 */}
                      <motion.div 
                        className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-teal-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.4, type: "spring", stiffness: 500 }}
                          >
                            🏆 #4
                          </motion.span>
                          <motion.span 
                            className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                          >
                            MEJOR PACK ECONÓMICO
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Límite-MX (Pack de 2) - Mejor Oferta por Volumen</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Para quienes necesitan equipar a un pequeño equipo con un presupuesto ajustado, esta oferta de Límite-MX es insuperable. Con una alta relación calidad-funcionalidad, obtienes dos chalecos de poliéster con 5 bolsillos, incluyendo el práctico porta-identificación transparente. Es una solución económica y funcional para necesidades básicas de visibilidad.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Pequeños equipos, voluntarios, vigilantes de estacionamiento.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon (paquete de 2 unidades)</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Increíble relación calidad-funcionalidad (2 chalecos), funcional con 5 bolsillos.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Diseño básico y talla única que puede no ajustarse a todos.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/bSAfSbb" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 5 */}
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-emerald-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.6, type: "spring", stiffness: 500 }}
                          >
                            ⭐ #5
                          </motion.span>
                          <motion.span 
                            className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.7 }}
                          >
                            ALTA CALIFICACIÓN
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">WolunLi Personalizable - La Opción Más Versátil para Personalizar</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Similar al de Greaxid, el chaleco de WolunLi es otra excelente alternativa para la personalización. Con una calificación casi perfecta (4.8 estrellas), destaca por su calidad y la facilidad para añadir logos o texto. Fabricado en poliéster ligero y con 5 bolsillos, es una opción cómoda y profesional para cualquier equipo.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Equipos que buscan una alternativa de personalización con una calificación muy alta.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Calificación de usuario excepcional, totalmente personalizable, ligero y cómodo.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Ligeramente más caro que otras opciones personalizables.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/5aP2Ibi" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 6 */}
                      <motion.div 
                        className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-amber-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.8, type: "spring", stiffness: 500 }}
                          >
                            💪 #6
                          </motion.span>
                          <motion.span 
                            className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.9 }}
                          >
                            BRIGADISTA EQUILIBRADO
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Genérico (Axo Click) - El Brigadista de Gabardina Equilibrado</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Este chaleco tipo brigadista ofrece la durabilidad de la tela de gabardina a un valor más accesible que las opciones premium. Con 5 bolsillos bien distribuidos (incluyendo uno trasero) y ajuste lateral, es una opción robusta y versátil para trabajos industriales que no requieren la máxima especialización.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Uso industrial general, mantenimiento, brigadas con presupuesto moderado.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Material de gabardina duradero, buen número de bolsillos, valor competitivo para su tipo.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Menos calificaciones de usuarios que otras marcas.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/8aWIMYC" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 7 */}
                      <motion.div 
                        className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.9, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-rose-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.0, type: "spring", stiffness: 500 }}
                          >
                            💰 #7
                          </motion.span>
                          <motion.span 
                            className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.1 }}
                          >
                            ECONÓMICO BRIGADISTA
                          </motion.span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Genérico (Mexsafe) - Opción Económica de Brigadista</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Si te gusta el estilo y la funcionalidad de un chaleco brigadista pero tu presupuesto es limitado, esta opción de Mexsafe es para ti. Ofrece las características esenciales, como 5 bolsillos frontales y ajuste lateral, en una mezcla de poliéster y algodón. Es un punto de entrada funcional al mundo de los chalecos de trabajo más serios.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Usuarios que necesitan la funcionalidad de un brigadista sin el alto costo.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon</p>
                          </div>
                          <div className="bg-white/70 p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Muy asequible para un chaleco tipo brigadista, funcional.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> La calidad de los materiales puede no ser tan alta como en modelos más caros.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/5SDZaw8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>
                    </div>
                  </section>

                  {/* Comparativa Detallada */}
                  <section id="comparativa" className="mb-12">
                    <motion.h2 
                      className="text-3xl font-bold mb-6 text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      📊 Comparativa Detallada
                    </motion.h2>
                    
                    <p className="text-gray-700 mb-6">
                      Para ayudarte a visualizar las diferencias clave, aquí tienes una tabla comparando nuestras 3 mejores selecciones: el de mejor calidad-funcionalidad, el más duradero y el mejor para personalización.
                    </p>

                    <ProductComparison 
                      title="Análisis Cara a Cara: Top 3 Chalecos"
                      products={[
                        {
                          id: 'prod-1',
                          name: 'Simonetta Vespetti',
                          rating: 4.4,
                          reviewCount: 427,
                          isRecommended: true,
                          bestFor: 'Mejor Funcionalidad',
                          amazonLink: 'https://a.co/d/bw2qd4o'
                        },
                        {
                          id: 'prod-2',
                          name: 'Señor Seguridad',
                          rating: 4.4,
                          reviewCount: 338,
                          isRecommended: false,
                          bestFor: 'Máxima Durabilidad',
                          amazonLink: 'https://a.co/d/2eQjkvK'
                        },
                        {
                          id: 'prod-3',
                          name: 'Greaxid Personalizable',
                          rating: 4.5,
                          reviewCount: 180,
                          isRecommended: false,
                          bestFor: 'Equipos y Empresas',
                          amazonLink: 'https://a.co/d/cZ8m0fH'
                        }
                      ]}
                      features={[
                        { name: 'Material Principal', product1: 'Poliéster', product2: 'Gabardina', product3: 'Poliéster' },
                        { name: 'Estilo', product1: 'Estándar', product2: 'Brigadista', product3: 'Estándar' },
                        { name: 'Total de Bolsillos', product1: '5', product2: '5+', product3: '5' },
                        { name: 'Bolsillo para ID', product1: true, product2: false, product3: false },
                        { name: 'Ajuste Lateral', product1: false, product2: true, product3: false },
                        { name: 'Personalizable', product1: false, product2: false, product3: true },
                        { name: 'Visibilidad Clase 2', product1: false, product2: false, product3: true },
                        { name: 'Disponibilidad', product1: 'Amazon', product2: 'Amazon', product3: 'Amazon' }
                      ]}
                    />
                  </section>

                  {/* Guía de Compra */}
                  <section id="guia-compra" className="mb-12">
                    <motion.h2 
                      className="text-3xl font-bold mb-6 text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      🛒 Guía de Compra Rápida: ¿Cómo Acertar en tu Elección?
                    </motion.h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>🎯 Define tu Necesidad:</strong> ¿Es para uso diario intensivo (construcción) o esporádico (eventos)? Esto definirá si necesitas gabardina o poliéster.</li>
                          <li><strong>🔧 No ignores los Bolsillos:</strong> Haz una lista de lo que necesitas llevar contigo. Un bolsillo para radio o para ID puede ser un factor decisivo.</li>
                          <li><strong>📏 Prioriza el Ajuste:</strong> Un chaleco que se atora o queda demasiado suelto es un riesgo. Elige entre tallas específicas o ajuste universal según tu preferencia.</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-red-900">❌ Errores Comunes a Evitar:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Comprar solo por valor bajo, ignorando la durabilidad.</li>
                          <li>• Elegir un chaleco sin suficientes bolsillos para tus herramientas.</li>
                          <li>• No verificar las instrucciones de lavado, lo que puede arruinar la reflectividad.</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-green-900">🧽 Mantenimiento es Clave:</h3>
                        <p className="text-gray-700">
                          Lava tu chaleco según las indicaciones (mano o máquina) para preservar las propiedades reflectantes. Reemplázalo si las bandas están desgastadas, rotas o sucias permanentemente. <strong>La vida útil promedio con uso regular es de 6 meses a 1 año.</strong>
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" className="mb-12">
                    <motion.h2 
                      className="text-3xl font-bold mb-6 text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      ❓ Preguntas Frecuentes (FAQ)
                    </motion.h2>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Cuál es la diferencia entre un chaleco de poliéster y uno de gabardina?</h3>
                        <p className="text-gray-700">El poliéster es ligero y transpirable, ideal para comodidad. La gabardina es una mezcla con algodón, mucho más gruesa y resistente, diseñada para trabajos pesados.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Qué significa "Clase 2" en un chaleco de seguridad?</h3>
                        <p className="text-gray-700">Es un estándar de la norma ANSI/ISEA 107 que certifica un mayor nivel de visibilidad. Requiere una cantidad mínima de material de fondo fluorescente y de material reflectante, haciéndolo adecuado para trabajar cerca de tráfico que supera los 40 km/h.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Puedo lavar mi chaleco reflectante en la lavadora?</h3>
                        <p className="text-gray-700">Depende del fabricante. Algunos modelos de poliéster lo permiten, pero la mayoría, especialmente los de gabardina o con estampados, recomiendan lavado a mano para no dañar las bandas reflectantes. Siempre revisa la etiqueta.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Cada cuánto tiempo debo reemplazar mi chaleco de seguridad?</h3>
                        <p className="text-gray-700">No hay una regla fija, pero se recomienda inspeccionarlo regularmente. Si está roto, descolorido o las cintas reflectantes están dañadas, es hora de reemplazarlo. Con uso diario, su vida útil efectiva suele ser de 6 a 12 meses.</p>
                      </div>
                    </div>
                  </section>

                  {/* Conclusión */}
                  <section id="conclusion" className="mb-16">
                    <motion.h2 
                      className="text-3xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      🎯 Conclusión: Tu Mejor Inversión en Seguridad
                    </motion.h2>
                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-400 p-8 rounded-r-2xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <span className="text-white text-3xl">🏆</span>
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                            Elegir el chaleco de seguridad correcto es una de las decisiones más simples y rentables que puedes tomar para protegerte en el trabajo. No se trata solo de cumplir una norma, sino de garantizar que vuelvas a casa sano y salvo cada día.
                          </p>
                          <div className="bg-white/80 p-6 rounded-xl mb-4">
                            <p className="text-gray-700 leading-relaxed mb-3 text-lg">
                              Después de nuestro análisis, nuestra recomendación principal para la <strong className="bg-yellow-200 px-2 py-1 rounded">mejor opción general es el Chaleco Simonetta Vespetti</strong>. Ofrece una combinación inmejorable de funcionalidad, altas calificaciones y un valor accesible que lo hace perfecto para la mayoría de los usuarios.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              Si tu trabajo exige lo máximo en resistencia y capacidad de carga, no busques más: el <strong className="bg-blue-200 px-2 py-1 rounded">Chaleco Señor Seguridad</strong> es la inversión profesional que necesitas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl border-2 border-orange-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        ¡Esperamos que esta guía te haya sido de gran utilidad! 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        🦺 Invierte en tu visibilidad y trabaja siempre seguro 🦺
                      </p>
                    </motion.div>
                  </section>

                  {/* Sección de Artículos Relacionados */}
                  <section id="articulos-relacionados" className="mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.8 }}
                    >
                      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        📚 Artículos Relacionados que Te Pueden Interesar
                      </h2>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedArticles.map((article, index) => (
                          <motion.div
                            key={article.id}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold
                                ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                  index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                                  'bg-gradient-to-r from-purple-500 to-purple-600'}`}>
                                {index === 0 ? '⛑️' : index === 1 ? '🧤' : '👢'}
                              </div>
                              <div className="flex-1">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                  ${index === 0 ? 'bg-blue-100 text-blue-800' :
                                    index === 1 ? 'bg-green-100 text-green-800' :
                                    'bg-purple-100 text-purple-800'}`}>
                                  {article.category}
                                </span>
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                              <span className="flex items-center gap-1">
                                📅 {article.publishDate}
                              </span>
                              <span className="flex items-center gap-1">
                                ⏱️ {article.readTime}
                              </span>
                            </div>
                            
                            <a 
                              href={`/blog/${article.slug}`}
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors
                                ${index === 0 ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                                  index === 1 ? 'bg-green-500 hover:bg-green-600 text-white' :
                                  'bg-purple-500 hover:bg-purple-600 text-white'}`}
                            >
                              Leer Artículo
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </motion.div>
                        ))}
                      </div>

                      {/* Call to Action para más artículos */}
                      <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                      >
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8">
                          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            🔍 ¿Quieres Ver Más Contenido de Seguridad Industrial?
                          </h3>
                          <p className="text-gray-700 mb-6 text-lg">
                            Explora nuestra colección completa de guías y comparativas de equipos de protección personal
                          </p>
                          <a 
                            href="/blog"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            <span className="text-xl">📖</span>
                            Ver Todos los Artículos
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </section>
                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}

'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import ProductComparison from '@/components/blog/ProductComparison';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ChalecosSeguridadArticle() {
  // Datos para la comparación de productos
  const comparisonData = {
    title: "Análisis Cara a Cara: Top 3 Chalecos",
    products: [
      {
        id: 'prod-1',
        name: 'Simonetta Vespetti',
        rating: 4.4,
        reviewCount: 427,
        isRecommended: true,
        bestFor: 'Mejor Funcionalidad',
        amazonLink: 'https://a.co/d/bw2qd4o'
      },
      {
        id: 'prod-2',
        name: 'Señor Seguridad',
        rating: 4.4,
        reviewCount: 338,
        isRecommended: false,
        bestFor: 'Máxima Durabilidad',
        amazonLink: 'https://a.co/d/2eQjkvK'
      },
      {
        id: 'prod-3',
        name: 'Greaxid Personalizable',
        rating: 4.5,
        reviewCount: 180,
        isRecommended: false,
        bestFor: 'Equipos y Empresas',
        amazonLink: 'https://a.co/d/cZ8m0fH'
      }
    ],
    features: [
      { name: 'Material Principal', product1: 'Poliéster', product2: 'Gabardina', product3: 'Poliéster' },
      { name: 'Estilo', product1: 'Estándar', product2: 'Brigadista', product3: 'Estándar' },
      { name: 'Total de Bolsillos', product1: '5', product2: '5+', product3: '5' },
      { name: 'Bolsillo para ID', product1: true, product2: false, product3: false },
      { name: 'Ajuste Lateral', product1: false, product2: true, product3: false },
      { name: 'Personalizable', product1: false, product2: false, product3: true },
      { name: 'Visibilidad Clase 2', product1: false, product2: false, product3: true },
      { name: 'Disponibilidad', product1: 'Amazon Prime', product2: 'Amazon Prime', product3: 'Envío Estándar' }
    ]
  };

  // Datos para artículos relacionados
  const relatedArticles = [
    {
      id: 1,
      title: 'Los Mejores Cascos de Seguridad Industrial 2025',
      excerpt: 'Guía completa de cas cos de protección para trabajo y construcción.',
      description: 'Guía completa de cascos de protección para trabajo y construcción.',
      category: 'EPP',
      publishDate: '10 Nov 2023',
      readTime: '8 min',
      image: '/images/safety-helmets.jpg',
      slug: 'mejores-cascos-seguridad-industrial'
    },
    {
      id: 2,
      title: 'Guantes de Seguridad: Cómo Elegir la Protección Adecuada',
      excerpt: 'Todo lo que necesitas saber sobre guantes de trabajo y protección.',
      description: 'Todo lo que necesitas saber sobre guantes de trabajo y protección.',
      category: 'EPP',
      publishDate: '8 Nov 2023',
      readTime: '10 min',
      image: '/images/safety-gloves.jpg',
      slug: 'guia-guantes-seguridad-trabajo'
    },
    {
      id: 3,
      title: 'Calzado de Seguridad: Las Mejores Botas Industriales',
      excerpt: 'Análisis detallado de las botas de seguridad más resistentes.',
      description: 'Análisis detallado de las botas de seguridad más resistentes.',
      category: 'EPP',
      publishDate: '5 Nov 2023',
      readTime: '15 min',
      image: '/images/safety-boots.jpg',
      slug: 'mejor-calzado-industrial-botas-seguridad'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas extendido por toda la sección */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas - distribuidas por toda la sección) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`section-large-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${45 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 3.7) % 100}%`,
                }}
                animate={{
                  x: [0, 100 + (i % 50), -80 + (i % 30), 0],
                  y: [0, -120 + (i % 40), 100 + (i % 35), 0],
                  scale: [0.3, 1.2, 0.5, 1],
                  opacity: [0.2, 0.8, 0.3, 0.7],
                  rotate: [0, 180 + (i % 180), 360]
                }}
                transition={{
                  duration: 12 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Partículas medianas rápidas (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`section-medium-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: 2 + (i % 4),
                  height: 2 + (i % 4),
                  backgroundColor: `hsl(${200 + (i * 4)}, 75%, ${70 + (i % 20)}%)`,
                  left: `${(i * 1.67) % 100}%`,
                  top: `${(i * 2.33) % 100}%`,
                }}
                animate={{
                  x: [0, 60 + (i % 30), -40 + (i % 20)],
                  y: [0, -80 + (i % 25), 60 + (i % 30)],
                  scale: [0, 1, 0.2, 1, 0],
                  opacity: [0, 0.9, 0.1, 0.6, 0]
                }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "linear"
                }}
              />
            ))}

            {/* Micropartículas súper rápidas (160 partículas) */}
            {Array.from({ length: 160 }, (_, i) => (
              <motion.div
                key={`section-micro-particle-${i}`}
                className="absolute rounded-full opacity-50"
                style={{
                  width: 1 + (i % 2),
                  height: 1 + (i % 2),
                  backgroundColor: `hsl(${280 + (i * 3)}, 80%, ${75 + (i % 15)}%)`,
                  left: `${(i * 1.25) % 100}%`,
                  top: `${(i * 1.75) % 100}%`,
                }}
                animate={{
                  x: [0, 30 + (i % 15), -20 + (i % 10)],
                  y: [0, -40 + (i % 12), 30 + (i % 15)],
                  scale: [0, 0.8, 0.1, 1, 0],
                  opacity: [0, 0.7, 0.05, 0.5, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 3 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Líneas conectoras con gradientes (40 líneas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`section-line-particle-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"
                style={{
                  width: 80 + (i * 15),
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 4.5) % 100}%`,
                  transformOrigin: 'center center'
                }}
                animate={{
                  scale: [0.2, 1.5, 0.3, 1],
                  rotate: [0, 360 + (i % 90)],
                  opacity: [0.1, 0.6, 0.05, 0.4]
                }}
                transition={{
                  duration: 10 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Ondas expansivas (30 ondas) */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={`section-wave-particle-${i}`}
                className="absolute border-2 border-orange-400 rounded-full opacity-30"
                style={{
                  width: 80,
                  height: 80,
                  left: `${15 + (i * 6)}%`,
                  top: `${10 + (i * 5.5)}%`,
                }}
                animate={{
                  scale: [0, 4, 0.1, 1],
                  borderWidth: [3, 0.1, 3],
                  opacity: [0.5, 0.05, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Partículas de destello (60 partículas) */}
            {Array.from({ length: 60 }, (_, i) => (
              <motion.div
                key={`section-sparkle-particle-${i}`}
                className="absolute"
                style={{
                  left: `${(i * 3.33) % 100}%`,
                  top: `${(i * 2.67) % 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0.1, 1, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-2 h-2 bg-yellow-300 rounded-full"
                  style={{
                    boxShadow: `0 0 ${6 + (i % 8)}px hsl(${45 + (i * 12)}, 85%, 55%)`
                  }}
                />
              </motion.div>
            ))}

            {/* Partículas orbitales (50 partículas) */}
            {Array.from({ length: 50 }, (_, i) => (
              <motion.div
                key={`section-orbital-particle-${i}`}
                className="absolute w-3 h-3 rounded-full opacity-60"
                style={{
                  backgroundColor: `hsl(${180 + (i * 7)}, 70%, ${60 + (i % 25)}%)`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((i / 50) * 2 * Math.PI) * (150 + i * 3),
                    Math.cos((i / 50) * 2 * Math.PI + Math.PI) * (150 + i * 3),
                    Math.cos((i / 50) * 2 * Math.PI) * (150 + i * 3)
                  ],
                  y: [
                    Math.sin((i / 50) * 2 * Math.PI) * (100 + i * 2),
                    Math.sin((i / 50) * 2 * Math.PI + Math.PI) * (100 + i * 2),
                    Math.sin((i / 50) * 2 * Math.PI) * (100 + i * 2)
                  ],
                  scale: [0.5, 1.2, 0.3, 1],
                  opacity: [0.2, 0.8, 0.1, 0.6]
                }}
                transition={{
                  duration: 15 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto relative"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-2 text-orange-100 text-sm font-medium mb-6 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="h-4 w-4" />
                🦺 Equipos de Protección Personal
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Chalecos de Seguridad Reflectantes de 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva y comparativa de los 7 chalecos mejor calificados en Amazon
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Calendar className="h-4 w-4" />
                  </motion.div>
                  29 de Agosto, 2025
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="h-4 w-4" />
                  </motion.div>
                  12 min de lectura
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido del artículo - MEJORADO */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo más grandes y visibles */}
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${200 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                  boxShadow: `0 0 ${2 + (i % 4)}px hsl(${200 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 40, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Ondas de fondo más prominentes */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`content-wave-${i}`}
                className="absolute border-2 rounded-full"
                style={{
                  width: `${150 + i * 80}px`,
                  height: `${150 + i * 80}px`,
                  left: `${(i * 25) % 80}%`,
                  top: `${(i * 30) % 90}%`,
                  borderColor: `hsl(${220 + (i * 20) % 60}, 50%, ${60 + (i % 20)}%, 0.4)`,
                }}
                animate={{
                  scale: [0.8, 1.5, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12 + i * 3,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Líneas conectoras más visibles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`content-line-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${80 + (i * 15) % 120}px`,
                  height: '2px',
                  background: `linear-gradient(90deg, 
                    hsl(${180 + (i * 25) % 80}, 60%, ${50 + (i % 25)}%, 0.6),
                    hsl(${240 + (i * 25) % 80}, 60%, ${50 + (i % 25)}%, 0.2),
                    transparent)`,
                  left: `${(i * 12) % 85}%`,
                  top: `${(i * 23) % 85}%`,
                  transform: `rotate(${i * 25}deg)`,
                }}
                animate={{
                  scaleX: [0, 1.2, 0],
                  opacity: [0, 0.8, 0],
                  rotate: [i * 25, i * 25 + 180, i * 25],
                }}
                transition={{
                  duration: 6 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Partículas brillantes adicionales */}
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${1 + (i % 3)}px`,
                  height: `${1 + (i % 3)}px`,
                  background: `hsl(${250 + (i * 20) % 60}, 80%, ${70 + (i % 20)}%)`,
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 27) % 100}%`,
                  boxShadow: `0 0 ${4 + (i % 3)}px hsl(${250 + (i * 20) % 60}, 80%, ${70 + (i % 20)}%)`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Partículas adicionales específicamente para los márgenes/bordes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Partículas en los bordes laterales */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={`edge-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${6 + (i % 4)}px`,
                  height: `${6 + (i % 4)}px`,
                  background: `hsl(${190 + (i * 20) % 100}, 70%, ${50 + (i % 30)}%)`,
                  left: i < 15 ? `${(i * 2) % 15}%` : `${85 + (i * 2) % 15}%`,
                  top: `${(i * 7) % 100}%`,
                  boxShadow: `0 0 ${8 + (i % 6)}px hsl(${190 + (i * 20) % 100}, 70%, ${50 + (i % 30)}%, 0.8)`,
                }}
                animate={{
                  y: [0, -80, 0],
                  x: [0, (i % 2 === 0 ? 30 : -30), 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.5, 1.8, 0.5],
                }}
                transition={{
                  duration: 10 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Partículas en la parte superior e inferior */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`topbottom-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 5)}px`,
                  height: `${4 + (i % 5)}px`,
                  background: `hsl(${160 + (i * 25) % 120}, 65%, ${55 + (i % 25)}%)`,
                  left: `${(i * 5) % 100}%`,
                  top: i < 10 ? `${(i * 2) % 20}%` : `${80 + (i * 2) % 20}%`,
                  boxShadow: `0 0 ${6 + (i % 4)}px hsl(${160 + (i * 25) % 120}, 65%, ${55 + (i % 25)}%, 0.7)`,
                }}
                animate={{
                  x: [0, 60, -40, 0],
                  y: [0, -40, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.8, 1.6, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-20">
            <div className="max-w-6xl mx-auto">
              {/* Contenido del Artículo */}
              <div className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50 relative z-10"
                >
                  {/* Introducción */}
                  <section id="introduccion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h1 
                      className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Los Mejores Chalecos de Seguridad Reflectantes de 2025: Guía y Comparativa
                    </motion.h1>
                    
                    <motion.div 
                      className="text-sm text-gray-600 mb-4 sm:mb-6 md:mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <strong>📅 Fecha de publicación:</strong> 29 de Agosto del 2025 | <strong>⏱️ Tiempo de lectura:</strong> 12 min
                    </motion.div>

                    {/* Texto principal mejorado */}
                    <motion.div 
                      className="bg-gradient-to-r from-orange-50 to-red-50 border-l-8 border-orange-400 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                          <span className="text-white text-lg sm:text-xl md:text-2xl">⚠️</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-orange-900 mb-3">¡La Visibilidad Puede Salvar Tu Vida!</h3>
                          <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            En cualquier entorno laboral de alto riesgo, desde una bulliciosa obra en construcción hasta el control de tráfico en una carretera nocturna, <strong className="text-orange-700">la visibilidad no es una opción, es una necesidad vital</strong>. Cada año, miles de accidentes laborales ocurren por falta de visibilidad, un problema que tiene una solución simple pero increíblemente efectiva: <strong className="text-orange-700">el chaleco de seguridad reflectante</strong>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Imagen principal del artículo - Más grande y destacada */}
                    <motion.div 
                      className="my-12 text-center"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-20 scale-105"></div>
                        <img 
                          src="/images/blogs/1 chalecos/articulo1_imagen.webp" 
                          alt="Chalecos de seguridad reflectantes - Comparativa 2025"
                          className="relative rounded-3xl shadow-2xl mx-auto max-w-full border-4 border-white"
                          style={{ maxHeight: '600px', width: 'auto' }}
                        />
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg border">
                          <span className="text-sm font-semibold text-gray-700">🔍 Análisis Completo 2025</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Texto de continuación mejorado */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                            <span className="text-white text-xl">🛡️</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-blue-900 mb-3">Tu Primera Línea de Defensa</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              Este <strong>Equipo de Protección Personal (EPP)</strong> es la primera línea de defensa para asegurar que seas visto por operadores de maquinaria, conductores y compañeros de trabajo, <span className="bg-blue-200 px-2 py-1 rounded font-semibold">reduciendo drásticamente el riesgo de accidentes</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 sm:p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 rounded-full p-3 flex-shrink-0">
                            <span className="text-white text-xl">🤔</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-purple-900 mb-3">¿Todos los Chalecos Son Iguales?</h4>
                            <div className="space-y-3">
                              <p className="text-gray-700 leading-relaxed text-lg">
                                <strong>Pero no todos los chalecos son iguales.</strong> La durabilidad, el material, la cantidad de bolsillos y el nivel de reflectividad varían enormemente.
                              </p>
                              <div className="bg-white/60 p-4 rounded-lg">
                                <p className="text-purple-800 font-semibold">
                                  🤷‍♂️ ¿Necesitas un chaleco ligero para eventos esporádicos o uno de uso rudo tipo brigadista que aguante el día a día?
                                </p>
                                <p className="text-purple-800 font-semibold mt-2">
                                  🏢 ¿Es la personalización con el logo de tu empresa una prioridad?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-4 sm:p-6 md:p-8 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-500 rounded-full p-3">
                          <span className="text-white text-lg sm:text-xl md:text-2xl">📋</span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">Tu Guía Definitiva</h3>
                      </div>
                      <p className="text-gray-800 font-medium text-lg leading-relaxed">
                        En esta guía definitiva, hemos analizado a fondo <strong className="bg-green-200 px-2 py-1 rounded">7 de los chalecos de seguridad más populares y mejor calificados en Amazon para 2025</strong>. Desglosaremos sus características, compararemos sus pros y contras, y te daremos todas las herramientas para que tomes una decisión informada y protejas lo más importante: <strong className="text-green-700">tu seguridad y la de tu equipo</strong>.
                      </p>
                    </motion.div>
                  </section>

                  {/* Guía de Características */}
                  <section id="guia-caracteristicas" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      🛡️ Guía de Características Clave para Elegir tu Chaleco
                    </motion.h2>
                    
                    <motion.p 
                      className="text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 text-center font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Antes de sumergirnos en las recomendaciones, es crucial entender qué hace a un buen chaleco de seguridad. Considera estos factores:
                    </motion.p>

                    <div className="space-y-8">
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-green-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🧵</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-green-900">Materiales y Construcción</h3>
                            <p className="text-gray-700 mb-4 text-lg">Los dos materiales más comunes son el <strong>poliéster</strong> y la <strong>gabardina</strong> (una mezcla de poliéster y algodón).</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white/70 p-4 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-2">💨 Poliéster:</h4>
                                <p className="text-gray-700">Es ligero, transpirable y de secado rápido. Ideal para climas cálidos y uso general donde la comodidad es clave.</p>
                              </div>
                              <div className="bg-white/70 p-4 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-2">💪 Gabardina:</h4>
                                <p className="text-gray-700">Es significativamente más robusta, resistente al desgaste y a la exposición solar. Perfecta para trabajos industriales, de construcción y brigadistas que necesitan máxima durabilidad.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-yellow-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">👁️</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-yellow-900">Visibilidad y Reflectividad</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                La característica principal. Busca chalecos con <strong className="bg-yellow-200 px-2 py-1 rounded">bandas reflectantes anchas (generalmente de 2 pulgadas)</strong> que cubran el torso, hombros y espalda para garantizar una <strong className="bg-yellow-200 px-2 py-1 rounded">visibilidad de 360°</strong>. Algunos modelos, como el de Greaxid, cumplen con la <strong className="bg-orange-200 px-2 py-1 rounded">Clase 2</strong>, un estándar que exige una mayor cantidad de material fluorescente y reflectante, haciéndolos visibles desde más de 300 metros.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🔧</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-blue-900">Funcionalidad y Bolsillos</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                Un buen chaleco es también una herramienta de trabajo. Evalúa la cantidad y tipo de bolsillos. ¿Necesitas un compartimento para radio, un bolsillo transparente para tu identificación, espacios para plumas o bolsillos grandes para herramientas? Los chalecos tipo brigadista suelen ofrecer la mayor capacidad de carga.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-purple-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">📏</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-900">Ajuste y Comodidad</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                Un chaleco mal ajustado puede ser incómodo e incluso peligroso. Los modelos vienen con cierre de cremallera frontal o con sistemas de ajuste lateral (cintas o broches tipo "samsonite"). Los de ajuste lateral ofrecen mayor versatilidad para adaptarse a diferentes complexiones o para usarse sobre ropa gruesa.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-orange-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🎨</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-orange-900">Personalización</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                              <p className="text-gray-700 text-lg leading-relaxed">
                                Si buscas uniformar a tu equipo, varios chalecos ofrecen servicios de personalización para añadir logotipos, texto o imágenes. Esto no solo mejora la imagen de tu empresa, sino que también ayuda a identificar roles en el lugar de trabajo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 7 Productos */}
                  <section id="top-7-productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      🏆 Top 7 Chalecos de Seguridad Recomendados para 2025
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 mb-6 text-center font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Hemos seleccionado una variedad de chalecos para cubrir todas las necesidades y presupuestos.
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 italic text-center bg-blue-50 p-4 rounded-lg border border-blue-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <em>(Nota: Para ver información actualizada, visita directamente la página del producto en Amazon o Mercado Libre).</em>
                    </motion.p>

                    <div className="space-y-10">
                      {/* Producto 1 */}
                      <motion.div 
                        className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-yellow-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 500 }}
                          >
                            🥇 #1
                          </motion.span>
                          <motion.span 
                            className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                          >
                            MEJOR FUNCIONALIDAD
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">Simonetta Vespetti - Mejor Opción en Funcionalidad</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Con una calificación estelar y siendo el #1 más vendido en su categoría, este chaleco de Simonetta Vespetti es la prueba de que no necesitas gastar una fortuna para obtener calidad. Fabricado en 100% poliéster, es ligero, cómodo y perfecto para una amplia gama de actividades. Sus 5 bolsillos, incluyendo uno transparente para identificación, lo hacen increíblemente funcional para el uso diario.
                        </p>

                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Uso general, logística, eventos, y cualquiera que busque el mejor balance entre costo y beneficio.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>⭐ Calificación:</strong> 4.2/5 estrellas (55 reseñas)</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Excelente relación calidad-funcionalidad, muy popular y bien calificado, ligero, funcional con bolsillo para ID.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> El poliéster puede ser menos duradero que la gabardina para uso industrial pesado.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/bw2qd4o" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 2 */}
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.0, type: "spring", stiffness: 500 }}
                          >
                            🥈 #2
                          </motion.span>
                          <motion.span 
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.1 }}
                          >
                            MÁXIMA DURABILIDAD
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">Señor Seguridad - El Más Duradero y Profesional</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Cuando la durabilidad es la máxima prioridad, el chaleco de Señor Seguridad es el claro ganador. Su construcción en gabardina (80% algodón) y su diseño tipo brigadista están pensados para el uso rudo. Cuenta con múltiples bolsillos especializados, incluyendo uno para radio y una bolsa trasera de gran capacidad. Los costados abiertos con ajuste garantizan que se adapte a cualquier usuario.
                        </p>
{/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Brigadistas, construcción, minería, y cualquier trabajo que exija máxima resistencia.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>⭐ Calificación:</strong> 4.5/5 estrellas (150+ reseñas)</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Extremadamente duradero, múltiples bolsillos funcionales, ajuste universal, excelente para cargar equipo.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Es más pesado y costoso que los modelos de poliéster.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/2eQjkvK" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 3 */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-purple-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2, type: "spring", stiffness: 500 }}
                          >
                            🥉 #3
                          </motion.span>
                          <motion.span 
                            className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.3 }}
                          >
                            MEJOR PARA EQUIPOS
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">Greaxid Personalizable - Mejor para Equipos y Empresas</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Si necesitas equipar a tu equipo y reforzar tu marca, el chaleco de Greaxid es la opción perfecta. No solo ofrece personalización completa con logos o texto, sino que también cumple con el estándar de alta visibilidad Clase 2. Con 5 bolsillos, clips para micrófono y un anillo en D, está diseñado para la eficiencia en el trabajo.
                        </p>
{/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Empresas de construcción, seguridad, logística y control de tráfico que buscan uniformes personalizados.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>⭐ Calificación:</strong> 4.0/5 estrellas (200+ reseñas)</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Totalmente personalizable, alta visibilidad Clase 2, muy funcional, excelente valor.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> El proceso de personalización requiere un paso extra antes de la compra.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/cZ8m0fH" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Productos adicionales con diseño expandido */}
                      {/* Producto 4 */}
                      <motion.div 
                        className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-teal-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.4, type: "spring", stiffness: 500 }}
                          >
                            🏆 #4
                          </motion.span>
                          <motion.span 
                            className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                          >
                            MEJOR PACK ECONÓMICO
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">Límite-MX (Pack de 2) - Mejor Oferta por Volumen</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Para quienes necesitan equipar a un pequeño equipo con un presupuesto ajustado, esta oferta de Límite-MX es insuperable. Con una alta relación calidad-funcionalidad, obtienes dos chalecos de poliéster con 5 bolsillos, incluyendo el práctico porta-identificación transparente. Es una solución económica y funcional para necesidades básicas de visibilidad.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Pequeños equipos, voluntarios, vigilantes de estacionamiento.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon (paquete de 2 unidades)</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Increíble relación calidad-funcionalidad (2 chalecos), funcional con 5 bolsillos.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Diseño básico y talla única que puede no ajustarse a todos.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/bSAfSbb" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 5 */}
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-emerald-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.6, type: "spring", stiffness: 500 }}
                          >
                            ⭐ #5
                          </motion.span>
                          <motion.span 
                            className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.7 }}
                          >
                            ALTA CALIFICACIÓN
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">WolunLi Personalizable - La Opción Más Versátil para Personalizar</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Similar al de Greaxid, el chaleco de WolunLi es otra excelente alternativa para la personalización. Con una calificación casi perfecta (4.8 estrellas), destaca por su calidad y la facilidad para añadir logos o texto. Fabricado en poliéster ligero y con 5 bolsillos, es una opción cómoda y profesional para cualquier equipo.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Equipos que buscan una alternativa de personalización con una calificación muy alta.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Calificación de usuario excepcional, totalmente personalizable, ligero y cómodo.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Ligeramente más caro que otras opciones personalizables.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/5aP2Ibi" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 6 */}
                      <motion.div 
                        className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-amber-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.8, type: "spring", stiffness: 500 }}
                          >
                            💪 #6
                          </motion.span>
                          <motion.span 
                            className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.9 }}
                          >
                            BRIGADISTA EQUILIBRADO
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">Genérico (Axo Click) - El Brigadista de Gabardina Equilibrado</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Este chaleco tipo brigadista ofrece la durabilidad de la tela de gabardina a un valor más accesible que las opciones premium. Con 5 bolsillos bien distribuidos (incluyendo uno trasero) y ajuste lateral, es una opción robusta y versátil para trabajos industriales que no requieren la máxima especialización.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Uso industrial general, mantenimiento, brigadas con presupuesto moderado.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Material de gabardina duradero, buen número de bolsillos, valor competitivo para su tipo.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> Menos calificaciones de usuarios que otras marcas.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/8aWIMYC" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>

                      {/* Producto 7 */}
                      <motion.div 
                        className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.9, duration: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.span 
                            className="bg-rose-500 text-white px-4 sm:px-6 py-3 rounded-full text-xl font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.0, type: "spring", stiffness: 500 }}
                          >
                            💰 #7
                          </motion.span>
                          <motion.span 
                            className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-bold"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.1 }}
                          >
                            ECONÓMICO BRIGADISTA
                          </motion.span>
                        </div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900">Genérico (Mexsafe) - Opción Económica de Brigadista</h3>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          Si te gusta el estilo y la funcionalidad de un chaleco brigadista pero tu presupuesto es limitado, esta opción de Mexsafe es para ti. Ofrece las características esenciales, como 5 bolsillos frontales y ajuste lateral, en una mezcla de poliéster y algodón. Es un punto de entrada funcional al mundo de los chalecos de trabajo más serios.
                        </p>
                        {/* Nota importante sobre calificaciones */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400 text-lg">📋</span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-800">
                                <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (29 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-700 mb-3 text-lg"><strong>🎯 Ideal para:</strong> Usuarios que necesitan la funcionalidad de un brigadista sin el alto costo.</p>
                            <p className="text-gray-700 mb-3 text-lg"><strong>� Disponibilidad:</strong> Disponible en Amazon</p>
                          </div>
                          <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-green-700 mb-3 text-lg"><strong>✅ Pros:</strong> Muy asequible para un chaleco tipo brigadista, funcional.</p>
                            <p className="text-red-700 mb-3 text-lg"><strong>❌ Contras:</strong> La calidad de los materiales puede no ser tan alta como en modelos más caros.</p>
                          </div>
                        </div>

                        <a 
                          href="https://a.co/d/5SDZaw8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Ver en Amazon →
                        </a>
                      </motion.div>
                    </div>
                  </section>

                  {/* Comparativa Detallada */}
                  <section id="comparativa" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                    <motion.h2 
                      className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      📊 Comparativa Detallada
                    </motion.h2>
                    
                    <p className="text-gray-700 mb-6">
                      Para ayudarte a visualizar las diferencias clave, aquí tienes una tabla comparando nuestras 3 mejores selecciones: el de mejor calidad-funcionalidad, el más duradero y el mejor para personalización.
                    </p>

                    <ProductComparison 
                      title="Análisis Cara a Cara: Top 3 Chalecos"
                      products={[
                        {
                          id: 'prod-1',
                          name: 'Simonetta Vespetti',
                          rating: 4.4,
                          reviewCount: 427,
                          isRecommended: true,
                          bestFor: 'Mejor Funcionalidad',
                          amazonLink: 'https://a.co/d/bw2qd4o'
                        },
                        {
                          id: 'prod-2',
                          name: 'Señor Seguridad',
                          rating: 4.4,
                          reviewCount: 338,
                          isRecommended: false,
                          bestFor: 'Máxima Durabilidad',
                          amazonLink: 'https://a.co/d/2eQjkvK'
                        },
                        {
                          id: 'prod-3',
                          name: 'Greaxid Personalizable',
                          rating: 4.5,
                          reviewCount: 180,
                          isRecommended: false,
                          bestFor: 'Equipos y Empresas',
                          amazonLink: 'https://a.co/d/cZ8m0fH'
                        }
                      ]}
                      features={[
                        { name: 'Material Principal', product1: 'Poliéster', product2: 'Gabardina', product3: 'Poliéster' },
                        { name: 'Estilo', product1: 'Estándar', product2: 'Brigadista', product3: 'Estándar' },
                        { name: 'Total de Bolsillos', product1: '5', product2: '5+', product3: '5' },
                        { name: 'Bolsillo para ID', product1: true, product2: false, product3: false },
                        { name: 'Ajuste Lateral', product1: false, product2: true, product3: false },
                        { name: 'Personalizable', product1: false, product2: false, product3: true },
                        { name: 'Visibilidad Clase 2', product1: false, product2: false, product3: true },
                        { name: 'Disponibilidad', product1: 'Amazon', product2: 'Amazon', product3: 'Amazon' }
                      ]}
                    />
                  </section>

                  {/* Guía de Compra */}
                  <section id="guia-compra" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                    <motion.h2 
                      className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      🛒 Guía de Compra Rápida: ¿Cómo Acertar en tu Elección?
                    </motion.h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <ul className="space-y-3 text-gray-700">
                          <li><strong>🎯 Define tu Necesidad:</strong> ¿Es para uso diario intensivo (construcción) o esporádico (eventos)? Esto definirá si necesitas gabardina o poliéster.</li>
                          <li><strong>🔧 No ignores los Bolsillos:</strong> Haz una lista de lo que necesitas llevar contigo. Un bolsillo para radio o para ID puede ser un factor decisivo.</li>
                          <li><strong>📏 Prioriza el Ajuste:</strong> Un chaleco que se atora o queda demasiado suelto es un riesgo. Elige entre tallas específicas o ajuste universal según tu preferencia.</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <h3 className="text-xl font-semibold mb-3 text-red-900">❌ Errores Comunes a Evitar:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Comprar solo por valor bajo, ignorando la durabilidad.</li>
                          <li>• Elegir un chaleco sin suficientes bolsillos para tus herramientas.</li>
                          <li>• No verificar las instrucciones de lavado, lo que puede arruinar la reflectividad.</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <h3 className="text-xl font-semibold mb-3 text-green-900">🧽 Mantenimiento es Clave:</h3>
                        <p className="text-gray-700">
                          Lava tu chaleco según las indicaciones (mano o máquina) para preservar las propiedades reflectantes. Reemplázalo si las bandas están desgastadas, rotas o sucias permanentemente. <strong>La vida útil promedio con uso regular es de 6 meses a 1 año.</strong>
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                    <motion.h2 
                      className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      ❓ Preguntas Frecuentes (FAQ)
                    </motion.h2>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Cuál es la diferencia entre un chaleco de poliéster y uno de gabardina?</h3>
                        <p className="text-gray-700">El poliéster es ligero y transpirable, ideal para comodidad. La gabardina es una mezcla con algodón, mucho más gruesa y resistente, diseñada para trabajos pesados.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Qué significa "Clase 2" en un chaleco de seguridad?</h3>
                        <p className="text-gray-700">Es un estándar de la norma ANSI/ISEA 107 que certifica un mayor nivel de visibilidad. Requiere una cantidad mínima de material de fondo fluorescente y de material reflectante, haciéndolo adecuado para trabajar cerca de tráfico que supera los 40 km/h.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Puedo lavar mi chaleco reflectante en la lavadora?</h3>
                        <p className="text-gray-700">Depende del fabricante. Algunos modelos de poliéster lo permiten, pero la mayoría, especialmente los de gabardina o con estampados, recomiendan lavado a mano para no dañar las bandas reflectantes. Siempre revisa la etiqueta.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
                        <h3 className="font-semibold text-lg mb-2">¿Cada cuánto tiempo debo reemplazar mi chaleco de seguridad?</h3>
                        <p className="text-gray-700">No hay una regla fija, pero se recomienda inspeccionarlo regularmente. Si está roto, descolorido o las cintas reflectantes están dañadas, es hora de reemplazarlo. Con uso diario, su vida útil efectiva suele ser de 6 a 12 meses.</p>
                      </div>
                    </div>
                  </section>

                  {/* Conclusión */}
                  <section id="conclusion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      🎯 Conclusión: Tu Mejor Inversión en Seguridad
                    </motion.h2>
                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-400 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                            Elegir el chaleco de seguridad correcto es una de las decisiones más simples y rentables que puedes tomar para protegerte en el trabajo. No se trata solo de cumplir una norma, sino de garantizar que vuelvas a casa sano y salvo cada día.
                          </p>
                          <div className="bg-white/80 p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <p className="text-gray-700 leading-relaxed mb-3 text-lg">
                              Después de nuestro análisis, nuestra recomendación principal para la <strong className="bg-yellow-200 px-2 py-1 rounded">mejor opción general es el Chaleco Simonetta Vespetti</strong>. Ofrece una combinación inmejorable de funcionalidad, altas calificaciones y un valor accesible que lo hace perfecto para la mayoría de los usuarios.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              Si tu trabajo exige lo máximo en resistencia y capacidad de carga, no busques más: el <strong className="bg-blue-200 px-2 py-1 rounded">Chaleco Señor Seguridad</strong> es la inversión profesional que necesitas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-orange-100 to-red-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-orange-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        ¡Esperamos que esta guía te haya sido de gran utilidad! 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        🦺 Invierte en tu visibilidad y trabaja siempre seguro 🦺
                      </p>
                    </motion.div>
                  </section>

                  {/* Sección de Artículos Relacionados */}
                  <section id="articulos-relacionados" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.8 }}
                    >
                      <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        📚 Artículos Relacionados que Te Pueden Interesar
                      </h2>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {relatedArticles.map((article, index) => (
                          <motion.div
                            key={article.id}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold
                                ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                  index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                                  'bg-gradient-to-r from-purple-500 to-purple-600'}`}>
                                {index === 0 ? '⛑️' : index === 1 ? '🧤' : '👢'}
                              </div>
                              <div className="flex-1">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                  ${index === 0 ? 'bg-blue-100 text-blue-800' :
                                    index === 1 ? 'bg-green-100 text-green-800' :
                                    'bg-purple-100 text-purple-800'}`}>
                                  {article.category}
                                </span>
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                              <span className="flex items-center gap-1">
                                📅 {article.publishDate}
                              </span>
                              <span className="flex items-center gap-1">
                                ⏱️ {article.readTime}
                              </span>
                            </div>
                            
                            <a 
                              href={`/blog/${article.slug}`}
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors
                                ${index === 0 ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                                  index === 1 ? 'bg-green-500 hover:bg-green-600 text-white' :
                                  'bg-purple-500 hover:bg-purple-600 text-white'}`}
                            >
                              Leer Artículo
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </motion.div>
                        ))}
                      </div>

                      {/* Call to Action para más artículos */}
                      <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                      >
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-6 md:p-8">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            🔍 ¿Quieres Ver Más Contenido de Seguridad Industrial?
                          </h3>
                          <p className="text-gray-700 mb-6 text-lg">
                            Explora nuestra colección completa de guías y comparativas de equipos de protección personal
                          </p>
                          <a 
                            href="/blog"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            <span className="text-xl">📖</span>
                            Ver Todos los Artículos
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </section>
                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
