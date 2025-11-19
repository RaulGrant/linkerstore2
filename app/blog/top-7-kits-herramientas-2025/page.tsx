"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import ProductComparison from "@/components/blog/ProductComparison";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';
import { useEffect } from 'react';

export default function KitsHerramientasArticle() {
  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'top-7-kits-herramientas-2025');
    trackBlogView(articleId, 'Top 7 Kits de Herramientas Mecánicas 2025', 'herramientas_mecanicas');
  }, []);

  // Función para manejar clicks en enlaces de Amazon
  const handleAmazonClick = (productName: string, amazonUrl: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('amazon', productId, productName, 'herramientas_mecanicas');
  };

  // Datos para la comparación de productos (Solo los 3 primeros con información completa)
  const comparisonProducts = [
    {
      id: "dewalt",
      name: "DEWALT DWMT81535",
      rating: 4.8,
      reviewCount: 3200,
      isRecommended: true,
      bestFor: "Mecánica Profesional",
      amazonLink: "https://mercadolibre.com/sec/2naVqQs",
    },
    {
      id: "pretul-83",
      name: "Pretul SET-83",
      rating: 4.2,
      reviewCount: 850,
      isRecommended: false,
      bestFor: "Mecánica Básica",
      amazonLink: "https://mercadolibre.com/sec/1GQ24Dg",
    },
    {
      id: "cartman",
      name: "CARTMAN 238 Piezas",
      rating: 4.5,
      reviewCount: 2100,
      isRecommended: true,
      bestFor: "Bricolaje / Hogar",
      amazonLink: "https://mercadolibre.com/sec/2Du7866",
    },
  ];

  const comparisonFeatures = [
    { name: "Piezas Totales", product1: "247", product2: "83", product3: "238" },
    { name: "Uso Principal", product1: "Mecánica Profesional", product2: "Mecánica Básica", product3: "Bricolaje / Hogar" },
    { name: "Material", product1: "Acero CR-V Pulido", product2: "Acero al Carbono", product3: "Acero Aleado" },
    { name: "Tipo de Estuche", product1: "Plástico Rígido", product2: "Tela", product3: "Plástico Rígido" },
    { name: "Puntas Magnéticas", product1: "No (Dados)", product2: "Sí (Desarmador)", product3: "Sí (Algunos)" },
    { name: "Disponibilidad", product1: "Amazon Prime", product2: "Amazon Prime", product3: "Envío Estándar" },
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: "1",
      title: "Los Mejores Chalecos de Seguridad Reflectantes de 2025",
      excerpt: "Guía y comparativa de los mejores chalecos de seguridad para el trabajo y la industria.",
      description: "Guía y comparativa de los mejores chalecos de seguridad para el trabajo y la industria.",
      category: "EPP",
      publishDate: "29 Ago 2025",
      readTime: "12 min",
      image: "/images/chalecos-seguridad.jpg",
      slug: "mejores-chalecos-seguridad-2025",
    },
    {
      id: "2",
      title: "Guantes de Seguridad: Cómo Elegir la Protección Adecuada",
      excerpt: "Todo lo que necesitas saber sobre guantes de trabajo y protección.",
      description: "Todo lo que necesitas saber sobre guantes de trabajo y protección.",
      category: "EPP",
      publishDate: "8 Nov 2023",
      readTime: "10 min",
      image: "/images/safety-gloves.jpg",
      slug: "guia-guantes-seguridad-trabajo",
    },
    {
      id: "3",
      title: "Calzado de Seguridad: Las Mejores Botas Industriales",
      excerpt: "Análisis detallado de las botas de seguridad más resistentes.",
      description: "Análisis detallado de las botas de seguridad más resistentes.",
      category: "EPP",
      publishDate: "5 Nov 2023",
      readTime: "15 min",
      image: "/images/safety-boots.jpg",
      slug: "mejor-calzado-industrial-botas-seguridad",
    },
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section con partículas animadas */}
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
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Top 7 Kits de Herramientas 2025
              </motion.h1>
              <motion.p 
                className="text-xl md:text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                La guía definitiva para elegir el kit perfecto. Desde profesionales hasta aficionados, 
                descubre cuál es la caja de herramientas que transformará tu trabajo.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          
          {/* Sistema masivo de partículas mejorado para el artículo 2 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas flotantes principales (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`main-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 8)}px`,
                  height: `${3 + (i % 8)}px`,
                  backgroundColor: `hsl(${210 + (i * 3)}, 65%, ${65 + (i % 20)}%)`,
                  left: `${(i * 8.33) % 100}%`,
                  top: `${(i * 12.5) % 100}%`,
                  opacity: 0.4 + (i % 4) * 0.1,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 12, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 18 + (i % 12),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ))}
            
            {/* Partículas medianas orbitales (80 partículas) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`orbital-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${6 + (i % 5)}px`,
                  height: `${6 + (i % 5)}px`,
                  backgroundColor: `hsl(${190 + (i * 4)}, 70%, ${55 + (i % 25)}%)`,
                  left: `${(i * 12.5) % 100}%`,
                  top: `${(i * 18.75) % 100}%`,
                  opacity: 0.25,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 20, 0],
                  rotate: [0, -180, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 22 + (i % 8),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
              />
            ))}
            
            {/* Partículas grandes flotantes especiales (40 partículas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`special-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${10 + (i % 6)}px`,
                  height: `${10 + (i % 6)}px`,
                  backgroundColor: `hsl(${240 + (i * 5)}, 60%, ${70 + (i % 15)}%)`,
                  left: `${(i * 25) % 100}%`,
                  top: `${(i * 31.25) % 100}%`,
                  opacity: 0.15,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 30, 0],
                  rotate: [0, 270, 360],
                  scale: [1, 1.6, 1],
                }}
                transition={{
                  duration: 28 + (i % 10),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
            
            {/* Partículas pequeñas rápidas (200 partículas) */}
            {Array.from({ length: 200 }, (_, i) => (
              <motion.div
                key={`fast-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${1 + (i % 3)}px`,
                  height: `${1 + (i % 3)}px`,
                  backgroundColor: `hsl(${200 + (i * 2)}, 50%, ${75 + (i % 10)}%)`,
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7.5) % 100}%`,
                  opacity: 0.6,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 12 + (i % 6),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.02,
                }}
              />
            ))}
          </div>

          {/* Animaciones de fondo del contenido - copiadas del artículo 1 */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Ondas expansivas (30 ondas) */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={`section-wave-particle-${i}`}
                className="absolute border-2 border-blue-400 rounded-full opacity-30"
                style={{
                  width: 80,
                  height: 80,
                  left: `${15 + (i * 6)}%`,
                  top: `${10 + (i * 5.5)}%`,
                }}
                animate={{
                  scale: [0, 2.5, 0.1, 1],
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
                    Math.cos((i / 50) * 2 * Math.PI) * (80 + i * 1.5),
                    Math.cos((i / 50) * 2 * Math.PI + Math.PI) * (80 + i * 1.5),
                    Math.cos((i / 50) * 2 * Math.PI) * (80 + i * 1.5)
                  ],
                  y: [
                    Math.sin((i / 50) * 2 * Math.PI) * (60 + i * 1),
                    Math.sin((i / 50) * 2 * Math.PI + Math.PI) * (60 + i * 1),
                    Math.sin((i / 50) * 2 * Math.PI) * (60 + i * 1)
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
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="w-full">
              <motion.article className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50 relative z-10">
                
                {/* Sección introductoria con mejor diseño */}
                <section id="introduccion-principal" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.div 
                    className="bg-gradient-to-br from-slate-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-100 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Elementos decorativos flotantes */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-15">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-lg sm:text-xl md:text-2xl">🔧</span>
                      </div>
                      <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900">La Importancia de Elegir el Kit Correcto</h2>
                    </div>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        <b>Estar preparado para cualquier imprevisto es la marca de un verdadero profesional</b>, y también de un aficionado al bricolaje que valora su tiempo y su trabajo. Desde una reparación de emergencia en casa hasta el mantenimiento de maquinaria compleja en un taller, tener el kit de herramientas adecuado no es un lujo, <b>es una necesidad fundamental</b>. Un buen juego de herramientas no solo te ahorra tiempo y dinero, sino que también garantiza que cada tarea se realice con la precisión y seguridad que se merece.
                      </p>
                      
                      <p>
                        Pero, <b>¿cómo elegir el kit perfecto entre un mar de opciones?</b> El mercado está saturado de juegos que prometen ser la solución definitiva, pero la realidad es que la calidad, durabilidad y funcionalidad varían enormemente. Un kit inadecuado puede convertirse en una fuente de frustración, con piezas que se rompen en el primer uso o la ausencia de esa punta de destornillador específica que necesitas con urgencia.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-3 sm:p-4 md:p-6 rounded-2xl border border-blue-200">
                        <p className="font-semibold text-blue-900 mb-2">
                          💡 <b>En esta guía definitiva, hemos hecho el trabajo pesado por ti.</b>
                        </p>
                        <p>
                          Analizamos a fondo <b>7 de los kits de herramientas más populares y mejor calificados en Amazon para 2025</b>. Desglosaremos desde los juegos de destornilladores de precisión para los amantes de la electrónica hasta los robustos kits de mecánica para el taller. Prepárate para descubrir cuál es la caja de herramientas que no puede faltar en tu arsenal.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Top 7 Kits de Herramientas */}
                <section id="top-kits" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 1.2,
                      backgroundPosition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    🏆 Top 7 Kits de Herramientas Recomendados de 2025
                  </motion.h2>
                  
                  {/* Nota importante sobre calificaciones */}
                  <motion.div 
                    className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-6 rounded-r-lg mb-4 sm:mb-6 md:mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="text-blue-400 text-xl">📋</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-800">
                          <strong>Nota importante:</strong> La calificación mostrada en este artículo corresponde a la información disponible en Amazon al momento de la publicación (30 Ago 2025). Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial del producto en Amazon para ver la calificación y reseñas más recientes de cada producto aquí mostrado.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="space-y-12">
                    {/* Producto #1 - DEWALT DWMT81535 */}
                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-yellow-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-white font-bold text-lg px-4 py-2">
                          🥇 #1
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">DEWALT DWMT81535: El Kit Profesional para Mecánica</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(3,200+ reseñas)</span>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <b>Mejor para:</b> Mecánicos profesionales y aficionados serios del automovilismo.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Este monstruo de <b>247 piezas</b> de DEWALT es la definición de un kit de grado profesional. 
                          Construido para durar, cada pieza tiene un acabado de cromo pulido que resiste la corrosión. 
                          La estrella del show son sus <b>matracas de 72 dientes</b>, que permiten trabajar en espacios 
                          reducidos con un arco de giro de solo 5 grados. La calidad se siente en cada componente, desde 
                          los dados grabados con láser para fácil identificación hasta el robusto estuche moldeado con 
                          pestillos metálicos.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-yellow-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">247 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero CR-V Pulido</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Matracas:</span>
                              <span className="ml-2 text-gray-600">72 dientes (5° arco)</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Plástico rígido moldeado</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Calidad de construcción DEWALT</b> inigualable</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Increíblemente completo</b> para mecánica</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Matracas de alta precisión</b> (72 dientes)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Excelente durabilidad</b> para uso profesional</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Dados grabados con láser</b> para fácil identificación</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Inversión considerable</b> comparado con otras opciones</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Puede ser excesivo</b> para uso doméstico básico</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Estuche voluminoso</b> para transporte frecuente</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-600 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                              <a 
                href="https://mercadolibre.com/sec/2naVqQs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors inline-block"
              >
                🛒 Ver en Mercado Libre →
              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Producto #2 - Pretul SET-83 */}
                    <motion.div 
                      className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-emerald-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-emerald-500 text-white font-bold text-lg px-4 py-2">
                          🥈 #2
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pretul SET-83: La Opción Económica Confiable</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                          </div>
                          <span className="ml-2 text-gray-600">(850+ reseñas)</span>
                        </div>
                        
                        <div className="bg-emerald-50 p-4 rounded-xl mb-6">
                          <p className="text-emerald-800 font-semibold">
                            <b>Mejor para:</b> Mecánicos que buscan lo básico sin comprometer la calidad.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Con <b>83 piezas cuidadosamente seleccionadas</b>, el Pretul SET-83 demuestra que no necesitas 
                          200+ piezas para tener un kit efectivo. Se enfoca en las herramientas más utilizadas en mecánica 
                          básica: dados métricos e imperiales, extensiones, matraca reversible y llaves combinadas. 
                          Su <b>estuche de lona resistente</b> lo hace perfecto para técnicos móviles que valoran la 
                          portabilidad sin sacrificar la funcionalidad.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-emerald-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">83 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero al Carbono</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Sistemas:</span>
                              <span className="ml-2 text-gray-600">Métrico e Imperial</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Lona resistente con cierre</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Excelente relación calidad-funcionalidad</b></span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Muy portable</b> y fácil de transportar</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye lo esencial</b> para mecánica básica</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Calidad Pretul</b> reconocida en México</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Limitado en piezas especiales</b></span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>No incluye destornilladores</b></span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Estuche de tela</b> menos protección</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-emerald-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-emerald-600 mb-2">Disponible en Amazon</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                              <a 
                href="https://mercadolibre.com/sec/1GQ24Dg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-colors inline-block"
              >
                🛒 Ver en Mercado Libre →
              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Producto #3 - CARTMAN 238 Piezas */}
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-blue-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-500 text-white font-bold text-lg px-4 py-2">
                          🥉 #3
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">CARTMAN 238 Piezas: El Favorito del Bricolaje</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 fill-current opacity-50" />
                          </div>
                          <span className="ml-2 text-gray-600">(2,100+ reseñas)</span>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <b>Mejor para:</b> Entusiastas del bricolaje y proyectos domésticos diversos.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          El CARTMAN de <b>238 piezas</b> es el equilibrio perfecto entre variedad y practicidad. 
                          Combina herramientas de mecánica con accesorios para bricolaje doméstico, incluyendo una 
                          extensa colección de <b>puntas de destornillador magnéticas</b> y un juego completo de 
                          dados métricos e imperiales. Su estuche de plástico moldeado es <b>increíblemente resistente</b> 
                          y mantiene cada pieza perfectamente organizada con compartimentos individuales.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-blue-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">238 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero aleado</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Características:</span>
                              <span className="ml-2 text-gray-600">Puntas magnéticas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Plástico rígido moldeado</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Versátil</b> para múltiples aplicaciones</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Puntas magnéticas</b> muy útiles</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Excelente organización</b> del estuche</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Relación calidad-funcionalidad</b> sobresaliente</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>No es grado profesional</b> para uso intensivo</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Algunas piezas pequeñas</b> pueden perderse</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Calidad variable</b> en algunos accesorios</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-600 mb-2">Disponible en Amazon</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                              <a 
                              href="https://mercadolibre.com/sec/2Du7866"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-600    transition-colors inline-block"
                              >
                                🛒 Ver en Mercado Libre →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Producto #4 - KIROGILY 150 en 1 */}
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-purple-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-500 text-white font-bold text-lg px-4 py-2">
                          #4
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">KIROGILY 150 en 1: El Especialista en Electrónica</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(1,800+ reseñas)</span>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <b>Mejor para:</b> Reparación de electrónicos, smartphones y dispositivos de precisión.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Cuando se trata de <b>electrónicos y dispositivos de precisión</b>, el KIROGILY 150 en 1 
                          es incomparable. Sus <b>puntas de acero CR-V con dureza HRC55</b> están diseñadas específicamente 
                          para tornillos pequeños y delicados. Incluye puntas especializadas para iPhone, MacBook, 
                          consolas de videojuegos y prácticamente cualquier dispositivo electrónico. Su <b>diseño plegable</b> 
                          lo convierte en la herramienta perfecta para técnicos que trabajan en espacios reducidos.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-purple-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">150 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero CR-V (HRC55)</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Especialidad:</span>
                              <span className="ml-2 text-gray-600">Electrónicos y precisión</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Plegable compacto</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Perfecto para electrónicos</b> modernos</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Extremadamente portátil</b> y compacto</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Puntas magnéticas</b> de alta calidad</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye puntas especiales</b> para dispositivos Apple</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>No sirve para mecánica</b> pesada</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Piezas muy pequeñas</b> fáciles de perder</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Limitado a aplicaciones</b> de precisión</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-600 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                             <a 
                href="https://mercadolibre.com/sec/1tT2HL7" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-purple-600 transition-colors inline-block"
              >
                🛒 Ver en Mercado Libre →
              </a>

                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Producto #5 - Juego De Herramientas Mecanica Dados 216 Pcs Kit Estuche Color Variation */}
                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-orange-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white font-bold text-lg px-4 py-2">
                          #5
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Juego De Herramientas Mecanica Dados 216 Pcs Kit Estuche Color Variation</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                          </div>
                          <span className="ml-2 text-gray-600">(160+ reseñas)</span>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-xl mb-6">
                          <p className="text-orange-800 font-semibold">
                            <b>Mejor para:</b> Quienes buscan la máxima cantidad de herramientas por el mejor precio.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Este masivo set de <b>216 piezas</b>es uno de los más completos del mercado en su rango de precio. 
                          Su gran ventaja es que incluye <b>3 matracas (1/4", 3/8" y 1/2")</b>, cubriendo desde trabajos de precisión hasta mecánica general. 
                          Fabricadas en acero al cromo vanadio (Cr-V), ofrece una inmensa variedad de dados, puntas y llaves combinadas, 
                          todo organizado en un maletín rígido que, aunque voluminoso (10.5 kg), mantiene cada pieza en su lugar.
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-orange-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">216 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero Cromo Vanadio</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Matracas:</span>
                              <span className="ml-2 text-gray-600">3 (1/4", 3/8", 1/2")</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Maletín rígido (10.5 kg)</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Plástico rígido modular</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Increíble variedad</b> de piezas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye 3 medidas</b> de matracas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Relación precio-cantidad</b> imbatible</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Ideal para iniciar</b> un taller casero</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Calidad media</b> (no uso industrial)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Piezas pueden soltarse</b> dentro del estuche</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Bastante pesado</b> para transportar</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-600 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                              <a 
                                href="https://mercadolibre.com/sec/2KHakLi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors inline-block"
                              >
                                🛒 Ver en Mercado Libre →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                  
                    {/* Producto #6 - Kit Herramientas Eléctricas Nanwei */}
                    <motion.div 
                      className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-teal-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-teal-500 text-white font-bold text-lg px-4 py-2">
                          #6
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Kit Nanwei: El Híbrido con Taladro Inalámbrico</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 fill-current text-yellow-200" /> {/* 4.5 estrellas promedio */}
                          </div>
                          <span className="ml-2 text-gray-600">(500+ reseñas)</span>
                        </div>
                        
                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <b>Mejor para:</b> Quienes necesitan empezar desde cero y requieren un taladro de inmediato.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          El kit Nanwei se diferencia de todos los anteriores por una razón clave: <b>incluye un taladro inalámbrico</b>. 
                          No es solo un juego de dados, es una estación de trabajo completa para el hogar. Además de la herramienta eléctrica, 
                          viene equipado con lo esencial manual: martillo, pinzas, destornilladores, arco de sierra y cinta métrica. 
                          Es la opción ideal para "mudanza nueva" donde necesitas colgar cuadros, armar muebles y hacer reparaciones ligeras sin comprar todo por separado.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-teal-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Pieza principal:</span>
                              <span className="ml-2 text-gray-600">Taladro Inalámbrico</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Batería:</span>
                              <span className="ml-2 text-gray-600">Litio Recargable</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Herramientas:</span>
                              <span className="ml-2 text-gray-600">Manuales + Eléctrica</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Enfoque:</span>
                              <span className="ml-2 text-gray-600">Mantenimiento del Hogar</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Gran valor</b> al incluir taladro</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Solución "todo en uno"</b> real</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye básicos manuales</b> (martillo, metro)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Estuche compacto</b> y fácil de guardar</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Taladro de uso ligero</b> (no industrial)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Herramientas manuales</b> de calidad básica</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Batería</b> de duración moderada</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-teal-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-600 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                              <a 
                                href="https://mercadolibre.com/sec/1miMzDg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-teal-600 transition-colors inline-block"
                              >
                                🛒 Ver en Mercado Libre →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                   {/* Producto #7 - Deppon 168 Piezas */}
                    <motion.div 
                      className="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-red-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white font-bold text-lg px-4 py-2">
                          #7
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Deppon 168 Piezas: Kit de Emergencia Híbrido</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                          </div>
                          <span className="ml-2 text-gray-600">(100+ ventas)</span>
                        </div>
                        
                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <b>Mejor para:</b> Uso doméstico general y kit de emergencia para la cajuela del auto.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Este kit de <b>168 piezas</b> destaca por su enfoque práctico para el hogar y el auto. 
                          A diferencia de los kits puramente mecánicos, este incluye herramientas de uso general como 
                          <b>pinzas de electricista, martillo, cúter y cinta métrica</b>, además de dos matracas (1/4" y 1/2"). 
                          Es importante notar que el conteo de piezas incluye insumos de primeros auxilios (curitas), 
                          lo que lo hace un excelente "kit de supervivencia" para tener en casa o en el coche.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-red-100 to-rose-100 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border border-red-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">168 piezas*</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero y Plástico</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Matracas:</span>
                              <span className="ml-2 text-gray-600">2 (1/4" y 1/2")</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Extras:</span>
                              <span className="ml-2 text-gray-600">Guantes y Curitas</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Gran variedad</b> de herramientas manuales</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye llaves combinadas</b> (9 pzs)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Estuche naranja</b> de alta visibilidad</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Precio muy accesible</b></span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>*Conteo inflado:</b> Incluye 100 curitas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Calidad genérica</b> (marca Deppon)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Acabados básicos</b> en los mangos</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-red-100 to-rose-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-600 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <div className="text-right">
                              <a 
                                href="https://mercadolibre.com/sec/2tACX4Z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-500 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors inline-block"
                              >
                                🛒 Ver en Mercado Libre →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                  </div>
                </section>

                {/* Comparación de productos */}
                <section id="comparacion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 1.0,
                      backgroundPosition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    📊 Comparación Detallada: Cara a Cara
                  </motion.h2>
                  <ProductComparison 
                    title="Análisis Cara a Cara: Top 3 Kits de Herramientas"
                    products={comparisonProducts}
                    features={comparisonFeatures}
                  />
                </section>

                {/* Guía de compra */}
                <section id="guia-compra" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 1.1,
                      backgroundPosition: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    🎯 Guía de Compra: ¿Cuál Elegir?
                  </motion.h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                    {/* Para Profesionales */}
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-blue-200"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-lg sm:text-xl md:text-2xl">👔</span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Para Profesionales</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-blue-100">
                          <h4 className="font-bold text-blue-800 mb-2">🥇 Recomendación #1:</h4>
                          <p className="text-gray-700 font-semibold">DEWALT DWMT81535</p>
                          <p className="text-gray-600 text-sm">Calidad inigualable, 247 piezas, perfecto para mecánica profesional.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-blue-100">
                          <h4 className="font-bold text-blue-800 mb-2">🥈 Alternativa:</h4>
                          <p className="text-gray-700 font-semibold">MOYAC 111 Piezas</p>
                          <p className="text-gray-600 text-sm">Para técnicos móviles que priorizan portabilidad sin sacrificar calidad.</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Para Aficionados */}
                    <motion.div 
                      className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-green-200"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-lg sm:text-xl md:text-2xl">🏠</span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Para Aficionados</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-green-100">
                          <h4 className="font-bold text-green-800 mb-2">🥇 Recomendación #1:</h4>
                          <p className="text-gray-700 font-semibold">CARTMAN 238 Piezas</p>
                          <p className="text-gray-600 text-sm">Perfecto equilibrio entre variedad, calidad y funcionalidad para bricolaje.</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-green-100">
                          <h4 className="font-bold text-green-800 mb-2">🥈 Económica:</h4>
                          <p className="text-gray-700 font-semibold">Pretul SET-83</p>
                          <p className="text-gray-600 text-sm">Lo esencial para mecánica básica con excelente funcionalidad.</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Casos específicos */}
                  <div className="grid md:grid-cols-3 gap-3 mb-4 sm:mb-6 md:mb-8">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-purple-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="text-center mb-4">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">📱</span>
                        <h4 className="text-lg font-bold text-gray-900 mt-2">Reparación de Electrónicos</h4>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-purple-100">
                        <p className="font-semibold text-purple-800">KIROGILY 150 en 1</p>
                        <p className="text-gray-600 text-sm">Especialista en dispositivos, puntas de precisión, ideal para smartphones y laptops.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 to-red-100 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-orange-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="text-center mb-4">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">🔧</span>
                        <h4 className="text-lg font-bold text-gray-900 mt-2">Kit Todo-en-Uno</h4>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-orange-100">
                        <p className="font-semibold text-orange-800">ANMIEN 220 Piezas</p>
                        <p className="text-gray-600 text-sm">Versátil para múltiples aplicaciones, mecánica + electrónica en un solo kit.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-red-50 to-rose-100 p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-red-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="text-center mb-4">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">💰</span>
                        <h4 className="text-lg font-bold text-gray-900 mt-2">Presupuesto Limitado</h4>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-red-100">
                        <p className="font-semibold text-red-800">ZAWELIYO 253 Piezas</p>
                        <p className="text-gray-600 text-sm">Máxima cantidad de piezas al menor costo, ideal para empezar.</p>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Factores clave a considerar */}
                <section id="factores-clave" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, rotateX: -20, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      rotateX: 0, 
                      scale: 1,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 1.3,
                      backgroundPosition: {
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.06,
                      rotateX: 5,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    ⚡ Factores Clave a Considerar
                  </motion.h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                          <span className="mr-3">🎯</span>
                          Tipo de Uso
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Profesional:</b> Prioriza calidad y durabilidad sobre cantidad</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Doméstico:</b> Busca versatilidad y buena funcionalidad</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Ocasional:</b> Opta por kits básicos pero confiables</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                          <span className="mr-3">🔧</span>
                          Calidad del Material
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Acero CR-V:</b> Máxima durabilidad y resistencia</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Acero Aleado:</b> Buen equilibrio calidad-durabilidad</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Acabado:</b> Cromado pulido resiste corrosión</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border border-purple-200">
                        <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                          <span className="mr-3">📦</span>
                          Portabilidad
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Estuche rígido:</b> Máxima protección pero más volumen</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Estuche plegable:</b> Compacto y fácil de transportar</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Organización:</b> Compartimentos individuales vs. bandas elásticas</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-orange-200">
                        <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                          <span className="mr-3">💰</span>
                          Presupuesto vs. Necesidades
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Inversión a largo plazo:</b> Mejor comprar calidad una vez</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Uso esporádico:</b> Kits económicos pueden ser suficientes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">•</span>
                            <span><b>Costo por pieza:</b> Analiza qué realmente usarás</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Conclusión */}
                <section id="conclusion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    🎯 Conclusión: Tu Decisión Final
                  </motion.h2>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-200">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Elegir un kit de herramientas es una <b>decisión personal que depende del tipo de trabajo que realizas</b>. 
                      No existe un "mejor kit" universal, pero sí existe el "mejor kit para ti". Después de analizar 
                      exhaustivamente estas 7 opciones, aquí están nuestras recomendaciones finales:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-3 mb-6">
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-yellow-200 shadow-md">
                        <div className="text-center mb-4">
                          <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          <h3 className="text-lg font-bold text-gray-900">Para Profesionales</h3>
                        </div>
                        <p className="text-gray-700 text-center">
                          <b>DEWALT DWMT81535</b> es la inversión inteligente. Calidad que durará décadas.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200 shadow-md">
                        <div className="text-center mb-4">
                          <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏠</span>
                          <h3 className="text-lg font-bold text-gray-900">Para Bricolaje</h3>
                        </div>
                        <p className="text-gray-700 text-center">
                          <b>CARTMAN 238 piezas</b> es la opción más inteligente y versátil para el hogar.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-purple-200 shadow-md">
                        <div className="text-center mb-4">
                          <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">📱</span>
                          <h3 className="text-lg font-bold text-gray-900">Para Electrónica</h3>
                        </div>
                        <p className="text-gray-700 text-center">
                          <b>KIROGILY 150 piezas</b> es una pequeña inversión con gran retorno en funcionalidad.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200">
                      <p className="font-semibold text-blue-900 mb-2 text-center">
                        💡 <b>Nuestro Consejo Final</b>
                      </p>
                      <p className="text-gray-700 text-center">
                        Invierte en el kit que <b>realmente usarás</b>. Es mejor tener 50 herramientas de calidad 
                        que 250 piezas que se rompen en el primer uso. Tu trabajo y tu tiempo valen más que 
                        cualquier diferencia inicial en la inversión.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Preguntas frecuentes */}
                <section id="faq" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    ❓ Preguntas Frecuentes
                  </motion.h2>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué tipo de kit de herramientas necesito?</h3>
                      <p className="text-gray-700">
                        Depende del uso que le darás. Para <b>uso profesional</b>, busca kits completos con herramientas de alta calidad y resistencia. 
                        Para <b>bricolaje doméstico</b>, kits versátiles con herramientas básicas son suficientes. Para <b>uso ocasional</b>, 
                        kits compactos con herramientas esenciales pueden cubrir tus necesidades básicas.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">¿Es mejor un kit completo o comprar herramientas individuales?</h3>
                      <p className="text-gray-700">
                        Para <b>empezar, un kit es más económico</b> y te asegura tener lo básico. Una vez que identifiques 
                        qué herramientas usas más, puedes invertir en versiones individuales de mayor calidad. 
                        Los kits son perfectos para tener una <b>base sólida</b> desde el principio.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué diferencia hay entre el acero CR-V y el acero común?</h3>
                      <p className="text-gray-700">
                        El <b>acero CR-V (Cromo-Vanadio)</b> es mucho más resistente y duradero. Resiste mejor la corrosión, 
                        mantiene el filo por más tiempo y soporta mayor torque sin deformarse. Es la diferencia entre 
                        herramientas que duran años vs. herramientas que se desgastan en meses.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">¿Las puntas magnéticas realmente hacen la diferencia?</h3>
                      <p className="text-gray-700">
                        <b>Absolutamente</b>. Las puntas magnéticas evitan que los tornillos se caigan, especialmente útil 
                        cuando trabajas en espacios reducidos o con componentes pequeños. Para electrónicos es prácticamente 
                        indispensable, y para mecánica general es una gran comodidad.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* Artículos relacionados */}
                <section id="articulos-relacionados" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                    📚 Artículos Relacionados
                  </motion.h2>
                  <RelatedArticles articles={relatedArticles} />
                </section>

              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
