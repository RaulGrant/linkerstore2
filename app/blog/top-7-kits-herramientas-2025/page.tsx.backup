"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import ProductComparison from "@/components/blog/ProductComparison";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function KitsHerramientasArticle() {
  // Datos para la comparación de productos
  const comparisonData = {
    title: "Análisis Cara a Cara: Top 4 Kits de Herramientas",
    products: [
      {
        id: "dewalt",
        name: "DEWALT DWMT81535",
        rating: 4.8,
        reviewCount: 3200,
        isRecommended: true,
        bestFor: "Mecánica Profesional",
        amazonLink: "https://a.co/d/5N9DGsg",
      },
      {
        id: "pretul-83",
        name: "Pretul SET-83",
        rating: 4.2,
        reviewCount: 850,
        isRecommended: false,
        bestFor: "Mecánica Económica",
        amazonLink: "https://a.co/d/eT7dePl",
      },
      {
        id: "cartman",
        name: "CARTMAN 238 Piezas",
        rating: 4.6,
        reviewCount: 2100,
        isRecommended: false,
        bestFor: "Hogar Completo",
        amazonLink: "https://a.co/d/79C1aAG",
      },
      {
        id: "kirogily",
        name: "KIROGILY 150 en 1",
        rating: 4.9,
        reviewCount: 1800,
        isRecommended: false,
        bestFor: "Electrónica",
        amazonLink: "https://a.co/d/8Rhjm4P",
      },
    ],
    features: [
      { name: "Piezas Totales", product1: "247", product2: "83", product3: "238", product4: "150" },
      { name: "Uso Principal", product1: "Mecánica Profesional", product2: "Mecánica Básica", product3: "Bricolaje / Hogar", product4: "Electrónica" },
      { name: "Material", product1: "Acero CR-V Pulido", product2: "Acero al Carbono", product3: "Acero Aleado", product4: "Acero CR-V (HRC55)" },
      { name: "Tipo de Estuche", product1: "Plástico Rígido", product2: "Tela", product3: "Plástico Rígido", product4: "Estuche Plegable" },
      { name: "Puntas Magnéticas", product1: "No (Dados)", product2: "Sí (Desarmador)", product3: "Sí (Algunos)", product4: "Sí (Todas)" },
      { name: "Precio Aproximado", product1: "$$$$", product2: "$$", product3: "$$$", product4: "$$" },
    ],
  };

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
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas extendido por toda la sección */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`hero-large-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: `${8 + (i % 6)}px`,
                  height: `${8 + (i % 6)}px`,
                  backgroundColor: `hsl(${200 + (i * 4)}, 70%, ${60 + (i % 20)}%)`,
                  left: `${(i * 1.25) % 100}%`,
                  top: `${(i * 1.67) % 100}%`,
                  boxShadow: `0 0 ${10 + (i % 8)}px hsl(${200 + (i * 4)}, 70%, ${60 + (i % 20)}%, 0.8)`
                }}
                animate={{
                  y: [0, -100, 20, -60, 0],
                  x: [0, 40, -30, 20, 0],
                  scale: [0.5, 1.2, 0.8, 1.5, 0.5],
                  opacity: [0.2, 0.8, 0.3, 0.9, 0.2]
                }}
                transition={{
                  duration: 8 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Partículas medianas (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`hero-medium-particle-${i}`}
                className="absolute rounded-full opacity-40"
                style={{
                  width: `${4 + (i % 4)}px`,
                  height: `${4 + (i % 4)}px`,
                  backgroundColor: `hsl(${180 + (i * 6)}, 80%, ${50 + (i % 30)}%)`,
                  left: `${(i * 0.83) % 100}%`,
                  top: `${(i * 1.25) % 100}%`
                }}
                animate={{
                  y: [0, -80, 40, -40, 0],
                  x: [0, 30, -20, 15, 0],
                  scale: [0.3, 1, 0.6, 1.2, 0.3],
                  opacity: [0.1, 0.6, 0.2, 0.7, 0.1]
                }}
                transition={{
                  duration: 6 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Micro partículas (160 partículas) */}
            {Array.from({ length: 160 }, (_, i) => (
              <motion.div
                key={`hero-micro-particle-${i}`}
                className="absolute rounded-full opacity-30"
                style={{
                  width: `${2 + (i % 3)}px`,
                  height: `${2 + (i % 3)}px`,
                  backgroundColor: `hsl(${160 + (i * 8)}, 75%, ${45 + (i % 35)}%)`,
                  left: `${(i * 0.625) % 100}%`,
                  top: `${(i * 0.94) % 100}%`
                }}
                animate={{
                  y: [0, -50, 25, -25, 0],
                  x: [0, 20, -15, 10, 0],
                  scale: [0.2, 0.8, 0.4, 1, 0.2],
                  opacity: [0.05, 0.4, 0.1, 0.5, 0.05]
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.025,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Líneas conectoras (40 líneas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`hero-line-particle-${i}`}
                className="absolute opacity-20"
                style={{
                  width: `${40 + (i * 8)}px`,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, hsl(${220 + (i * 10)}, 85%, 65%), transparent)`,
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 2.5) % 100}%`,
                  transformOrigin: 'center center'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.5, 1.5, 0.8, 1.2, 0.5],
                  opacity: [0.1, 0.3, 0.05, 0.25, 0.1]
                }}
                transition={{
                  duration: 12 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
              />
            ))}

            {/* Ondas expansivas (30 ondas) */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={`hero-wave-particle-${i}`}
                className="absolute border-2 border-cyan-400 rounded-full opacity-20"
                style={{
                  width: 60 + (i * 10),
                  height: 60 + (i * 10),
                  left: `${(i * 3.33) % 100}%`,
                  top: `${(i * 3.33) % 100}%`,
                }}
                animate={{
                  scale: [0, 3, 0.5, 2, 0],
                  borderWidth: [4, 0.5, 3, 1, 4],
                  opacity: [0.3, 0.05, 0.2, 0.1, 0.3]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Partículas de destello (60 partículas) */}
            {Array.from({ length: 60 }, (_, i) => (
              <motion.div
                key={`hero-sparkle-particle-${i}`}
                className="absolute"
                style={{
                  left: `${(i * 1.67) % 100}%`,
                  top: `${(i * 1.33) % 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0.2, 1, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-3 h-3 bg-yellow-300 rounded-full"
                  style={{
                    boxShadow: `0 0 ${8 + (i % 10)}px hsl(${50 + (i * 15)}, 90%, 60%)`
                  }}
                />
              </motion.div>
            ))}

            {/* Partículas orbitales (50 partículas) */}
            {Array.from({ length: 50 }, (_, i) => (
              <motion.div
                key={`hero-orbital-particle-${i}`}
                className="absolute w-4 h-4 rounded-full opacity-50"
                style={{
                  backgroundColor: `hsl(${190 + (i * 8)}, 75%, ${55 + (i % 30)}%)`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((i / 50) * 2 * Math.PI) * (200 + i * 4),
                    Math.cos((i / 50) * 2 * Math.PI + Math.PI) * (200 + i * 4),
                    Math.cos((i / 50) * 2 * Math.PI) * (200 + i * 4)
                  ],
                  y: [
                    Math.sin((i / 50) * 2 * Math.PI) * (120 + i * 2.5),
                    Math.sin((i / 50) * 2 * Math.PI + Math.PI) * (120 + i * 2.5),
                    Math.sin((i / 50) * 2 * Math.PI) * (120 + i * 2.5)
                  ],
                  scale: [0.3, 1, 0.5, 1.2, 0.3],
                  opacity: [0.1, 0.7, 0.2, 0.8, 0.1]
                }}
                transition={{
                  duration: 20 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1 className="text-5xl font-bold mb-6 text-gray-100 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              Top 7 Kits de Herramientas Que Todo Profesional (y Aficionado) Debe Tener en 2025
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Calendar className="w-4 h-4 mr-1" />
                Fecha de publicación: 30 de Agosto del 2025
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                <Clock className="w-4 h-4 mr-1" />
                Tiempo de lectura: 13 min
              </Badge>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">¡Elige el kit correcto y nunca te quedarás a medias!</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Un buen kit de herramientas es la diferencia entre una reparación exitosa y una frustración. Descubre los mejores kits para cada necesidad y presupuesto en 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de contenido principal con partículas de fondo */}
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {/* Sistema de partículas de fondo para la sección de contenido (175+ partículas) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Partículas principales de fondo (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`bg-main-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 5)}px`,
                  height: `${4 + (i % 5)}px`,
                  background: `hsl(${200 + (i * 10) % 80}, 60%, ${55 + (i % 25)}%)`,
                  left: `${(i * 1.7) % 100}%`,
                  top: `${(i * 2.3) % 100}%`,
                  boxShadow: `0 0 ${6 + (i % 4)}px hsl(${200 + (i * 10) % 80}, 60%, ${55 + (i % 25)}%, 0.6)`,
                }}
                animate={{
                  y: [0, -60, 30, -30, 0],
                  x: [0, 25, -15, 20, 0],
                  opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
                  scale: [0.8, 1.4, 0.9, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Partículas de destello con brillo (40 partículas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`bg-sparkle-particle-${i}`}
                className="absolute"
                style={{
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 2.1) % 100}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0.3, 1, 0],
                  rotate: [0, 180 + (i % 90)],
                  opacity: [0.2, 0.9, 0.1, 0.6, 0.2]
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: `hsl(${40 + (i * 8)}, 80%, 60%)`,
                    boxShadow: `0 0 ${8 + (i % 6)}px hsl(${40 + (i * 8)}, 80%, 60%, 0.8)`
                  }}
                />
              </motion.div>
            ))}

            {/* Ondas con bordes (15 ondas) */}
            {Array.from({ length: 15 }, (_, i) => (
              <motion.div
                key={`bg-wave-particle-${i}`}
                className="absolute border-2 rounded-full"
                style={{
                  width: 100 + (i * 20),
                  height: 100 + (i * 20),
                  borderColor: `hsl(${180 + (i * 15)}, 70%, 65%)`,
                  left: `${20 + (i * 4)}%`,
                  top: `${10 + (i * 5)}%`,
                  opacity: 0.15,
                }}
                animate={{
                  scale: [0.5, 2, 0.8, 1.5, 0.5],
                  rotate: [0, 180 + (i % 120)],
                  borderWidth: [2, 0.5, 2],
                  opacity: [0.1, 0.3, 0.05, 0.25, 0.1]
                }}
                transition={{
                  duration: 12 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Líneas conectoras con gradiente (20 líneas) */}
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={`bg-line-particle-${i}`}
                className="absolute opacity-20"
                style={{
                  width: `${60 + (i * 12)}px`,
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, hsl(${210 + (i * 12)}, 70%, 60%), transparent)`,
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 4.5) % 100}%`,
                  transformOrigin: 'center center'
                }}
                animate={{
                  rotate: [0, 360 + (i % 90)],
                  scale: [0.5, 1.8, 0.7, 1.3, 0.5],
                  opacity: [0.1, 0.4, 0.05, 0.3, 0.1]
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
          <div className="max-w-6xl mx-auto">
            <div className="w-full">
              <motion.article className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50 relative z-10">
                {/* Guía de Características Clave */}
                <section id="guia-caracteristicas" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    🔍 Guía de Características Clave
                  </motion.h2>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-green-200 mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Antes de sumergirnos en las recomendaciones, es crucial entender qué hace a un buen kit de herramientas. 
                      No todos los juegos son iguales, y tu elección debe basarse en tus necesidades específicas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Materiales y Construcción */}
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Materiales y Construcción</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        La calidad de un kit se define por sus materiales. Busca herramientas fabricadas en 
                        <b> Acero al Cromo-Vanadio (CR-V)</b>, un estándar en la industria que garantiza una alta 
                        resistencia a la corrosión y al desgaste. Un acabado cromado pulido no solo le da una 
                        apariencia profesional, sino que también añade una capa extra de protección.
                      </p>
                    </motion.div>

                    {/* Tipo y Cantidad de Piezas */}
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Tipo y Cantidad de Piezas</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Más no siempre es mejor. Un kit de 200 piezas puede ser inútil si no incluye las herramientas 
                        que necesitas. Identifica tu uso principal:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <b>Mecánica:</b> Prioriza dados (sockets) de diferentes medidas (métricos y SAE), 
                            matracas (ratchets) de buena calidad y llaves combinadas.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <b>Electrónica:</b> Busca destornilladores de precisión, puntas magnéticas, 
                            pinzas antiestáticas y herramientas de palanca (spudgers).
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <b>Uso General/Hogar:</b> Un buen balance es clave. Necesitarás un martillo, 
                            alicates, cinta métrica, llaves Allen y una variedad de destornilladores.
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Calidad del Estuche */}
                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Calidad del Estuche</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Un buen estuche no es un extra, es parte de la herramienta. Un 
                        <b> estuche de plástico moldeado por soplado</b> es ideal, ya que cada pieza tiene su 
                        lugar designado, evitando que se pierdan o se dañen. Para portabilidad, un estuche de 
                        tela puede ser más ligero, pero ofrece menos protección.
                      </p>
                    </motion.div>

                    {/* Ergonomía y Diseño */}
                    <motion.div 
                      className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="flex items-center mb-4">
                        <Star className="w-8 h-8 text-emerald-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Ergonomía y Diseño</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Los mangos de los destornilladores y matracas deben ser 
                        <b> antideslizantes y cómodos</b> (busca mangos de vinilo o bimateriales). 
                        Características como la liberación rápida en las matracas o las puntas magnéticas 
                        en los destornilladores son detalles que marcan una gran diferencia en el uso diario.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* Introducción a los Kits de Herramientas */}
                <section className="mb-16">
                  <motion.div 
                    className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-10 rounded-3xl shadow-2xl border border-slate-200 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-2xl">🔧</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">La Importancia de Elegir el Kit Correcto</h2>
                      </div>
                      
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                          <b>Estar preparado para cualquier imprevisto es la marca de un verdadero profesional</b>, y también de un aficionado al bricolaje que valora su tiempo y su trabajo. Desde una reparación de emergencia en casa hasta el mantenimiento de maquinaria compleja en un taller, tener el kit de herramientas adecuado no es un lujo, <b>es una necesidad fundamental</b>. Un buen juego de herramientas no solo te ahorra tiempo y dinero, sino que también garantiza que cada tarea se realice con la precisión y seguridad que se merece.
                        </p>
                        
                        <p>
                          Pero, <b>¿cómo elegir el kit perfecto entre un mar de opciones?</b> El mercado está saturado de juegos que prometen ser la solución definitiva, pero la realidad es que la calidad, durabilidad y funcionalidad varían enormemente. Un kit inadecuado puede convertirse en una fuente de frustración, con piezas que se rompen en el primer uso o la ausencia de esa punta de destornillador específica que necesitas con urgencia.
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-2xl border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">
                            💡 <b>En esta guía definitiva, hemos hecho el trabajo pesado por ti.</b>
                          </p>
                          <p>
                            Analizamos a fondo <b>7 de los kits de herramientas más populares y mejor calificados en Amazon para 2025</b>. Desglosaremos desde los juegos de destornilladores de precisión para los amantes de la electrónica hasta los robustos kits de mecánica para el taller. Prepárate para descubrir cuál es la caja de herramientas que no puede faltar en tu arsenal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Top 7 Kits de Herramientas Recomendados */}
                <section id="top-7-productos" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    🏆 Top 7 Kits de Herramientas Recomendados de 2025
                  </motion.h2>
                  
                  <div className="space-y-12">
                    {/* Producto #1 - DEWALT DWMT81535 */}
                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-3xl shadow-2xl border-2 border-yellow-200 relative overflow-hidden"
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">DEWALT DWMT81535: El Kit Profesional para Mecánica</h3>
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
                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl mb-6 border border-yellow-200">
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
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
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
                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Precio elevado</b> comparado con otras opciones</span>
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

                        {/* Precio y CTA */}
                        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-2 border-orange-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-orange-600 mb-2">$4,000 MXN</p>
                              <p className="text-sm text-gray-600">* El precio puede variar</p>
                            </div>
                            <div className="text-right">
                              <div className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors cursor-pointer">
                                🛒 Ver en Amazon →
                              </div>
                            </div>
                          </div>
                        </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 text-sm">
                            <b>Contras:</b> Precio elevado, puede ser excesivo para uso doméstico básico.
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-orange-600">$3,800 - $4,200 MXN</span>
                        </div>
                        
                        <motion.a
                          href="https://a.co/d/5N9DGsg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          🛒 Ver en Amazon
                          <motion.svg 
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Producto #2 - CARTMAN 238 Piezas */}
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-8 rounded-3xl shadow-2xl border-2 border-blue-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white font-bold text-lg px-4 py-2">
                          🥈 #2
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">CARTMAN 238 Piezas: El Taller Completo en una Caja</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 fill-current opacity-60" />
                          </div>
                          <span className="ml-2 text-gray-600">(2,100+ reseñas)</span>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <b>Mejor para:</b> El entusiasta del bricolaje que quiere estar preparado para todo.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Si buscas un kit que cubra desde reparaciones del hogar hasta mantenimiento básico del auto, 
                          esta opción de CARTMAN es difícil de superar. Con <b>238 piezas</b>, es uno de los juegos más 
                          completos para uso general. Incluye una impresionante variedad de llaves, dados, alicates, 
                          destornilladores e incluso una <b>pequeña sierra</b>. Es la solución perfecta para quienes no 
                          quieren comprar herramientas por separado y prefieren tener todo organizado en un solo lugar.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl mb-6 border border-green-200">
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
                              <span className="ml-2 text-gray-600">Acero Aleado</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Uso principal:</span>
                              <span className="ml-2 text-gray-600">Bricolaje / Hogar</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Plástico rígido</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Extremadamente completo y versátil</b></span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Buena organización</b> en el estuche</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Ideal para amplia gama</b> de tareas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye herramientas especiales</b> como sierra</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Excelente relación</b> calidad-precio</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Calidad variable</b> en algunas piezas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>No apto</b> para uso rudo industrial</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Algunas herramientas</b> pueden ser redundantes</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Precio y CTA */}
                        <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl border-2 border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-blue-600 mb-2">$1,600 MXN</p>
                              <p className="text-sm text-gray-600">* El precio puede variar</p>
                            </div>
                            <div className="text-right">
                              <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors cursor-pointer">
                                🛒 Ver en Amazon →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Producto #3 - Pretul SET-83 */}
                    <motion.div 
                      className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 rounded-3xl shadow-2xl border-2 border-green-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white font-bold text-lg px-4 py-2">
                          🥉 #3
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Pretul SET-83: Calidad-Precio para el Mecánico Aficionado</h3>
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                              ))}
                              <Star className="w-5 h-5 fill-current opacity-40" />
                            </div>
                            <span className="ml-2 text-gray-600">(850+ reseñas)</span>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-xl mb-6">
                            <p className="text-green-800 font-semibold">
                              <b>Mejor para:</b> Tareas de mecánica en casa y mantenimiento automotriz básico.
                            </p>
                          </div>

                          <p className="text-gray-700 leading-relaxed mb-6">
                            Pretul, una marca de <b>Grupo Truper</b>, ofrece un balance excepcional con este kit de 
                            <b> 83 piezas</b>. Se enfoca en lo esencial para la mecánica: un sólido juego de dados, 
                            llaves Allen y un desarmador con sistema de matraca. Viene en un práctico estuche de tela 
                            que, aunque menos robusto que uno de plástico, lo hace muy portátil. Es la opción ideal para 
                            quienes empiezan en la mecánica o necesitan un kit secundario para llevar en el auto.
                          </p>
                          
                          {/* Especificaciones técnicas */}
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl mb-6 border border-green-200">
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
                                <span className="font-semibold text-gray-700">Uso principal:</span>
                                <span className="ml-2 text-gray-600">Mecánica Básica</span>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-700">Estuche:</span>
                                <span className="ml-2 text-gray-600">Tela portátil</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Ventajas */}
                            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                              <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Ventajas
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-green-700 text-sm"><b>Excelente relación calidad-precio</b></span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-green-700 text-sm"><b>Herramientas marcadas</b> para fácil identificación</span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-green-700 text-sm"><b>Estuche de tela portátil</b> y ligero</span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-green-700 text-sm"><b>Marca confiable</b> Grupo Truper</span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-green-700 text-sm"><b>Ideal para principiantes</b> en mecánica</span>
                                </div>
                              </div>
                            </div>

                            {/* Desventajas */}
                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                              <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Contras
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-red-700 text-sm"><b>Estuche de tela</b> ofrece menos protección</span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-red-700 text-sm"><b>Menos piezas</b> que otros kits</span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-red-700 text-sm"><b>No incluye</b> herramientas especializadas</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Precio y CTA */}
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold text-green-600 mb-2">$600 MXN</p>
                                <p className="text-sm text-gray-600">* El precio puede variar</p>
                              </div>
                              <div className="text-right">
                                <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors cursor-pointer">
                                  🛒 Ver en Amazon →
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </motion.div>

                    {/* Producto #4 - KIROGILY 150 en 1 */}
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-8 rounded-3xl shadow-2xl border-2 border-purple-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-500 text-white font-bold text-lg px-4 py-2">
                          🏅 #4
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">KIROGILY 150 en 1: El Cirujano de la Electrónica</h3>
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
                            <b>Mejor para:</b> Reparación de celulares, consolas, laptops y cualquier dispositivo electrónico.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Con una calificación casi perfecta, este kit de KIROGILY es el sueño de todo técnico en electrónica. 
                          No solo incluye <b>124 puntas de precisión de acero CR-V</b>, sino que también viene con 
                          <b>26 herramientas de reparación esenciales</b>, como palancas, pinzas antiestáticas y una alfombrilla 
                          magnética para no perder ni un solo tornillo. El diseño del estuche es plegable y muy portátil, ideal 
                          para trabajos a domicilio.
                        </p>
                        
                        {/* Especificaciones compactas */}
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-xl mb-4 border border-purple-200">
                          <div className="grid grid-cols-4 gap-4 text-xs">
                            <div className="text-center">
                              <div className="font-bold text-purple-600">150</div>
                              <div className="text-gray-600">Piezas</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-purple-600">CR-V</div>
                              <div className="text-gray-600">Material</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-purple-600">HRC55</div>
                              <div className="text-gray-600">Dureza</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-purple-600">Plegable</div>
                              <div className="text-gray-600">Estuche</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Extremadamente completo</b> para electrónica</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Incluye alfombrilla magnética</b></span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Puntas de alta dureza</b> (HRC52-56)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Excelente calificación</b> de usuarios</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Estuche plegable</b> y portátil</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>No es adecuado</b> para trabajos pesados</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>No incluye</b> herramientas de mecánica</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Limitado</b> a dispositivos electrónicos</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Precio y CTA */}
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl border-2 border-purple-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-purple-600 mb-2">$450 MXN</p>
                              <p className="text-sm text-gray-600">* El precio puede variar</p>
                            </div>
                            <div className="text-right">
                              <div className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-purple-600 transition-colors cursor-pointer">
                                🛒 Ver en Amazon →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {/* Producto #5 - AXIDUN 117 en 1 */}
                    <motion.div 
                      className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl shadow-2xl border-2 border-teal-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-teal-500 text-white font-bold text-lg px-4 py-2">
                          🏅 #5
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">AXIDUN 117 en 1: El Destornillador de Precisión Más Popular</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 fill-current opacity-30" />
                          </div>
                          <span className="ml-2 text-gray-600">(3,500+ reseñas)</span>
                        </div>
                        
                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <b>Mejor para:</b> Usuarios que necesitan una solución económica y confiable para reparaciones electrónicas.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Siendo un <b>#1 más vendido en su categoría</b>, el kit de AXIDUN ha demostrado su valía. 
                          Ofrece una increíble cantidad de <b>puntas de precisión magnéticas (98)</b> y herramientas de 
                          palanca en un paquete muy compacto y a un <b>precio imbatible</b>. Incluye extensiones flexibles 
                          y rígidas para alcanzar tornillos en los lugares más difíciles. Es la herramienta perfecta para 
                          tener a mano para reparaciones rápidas de gadgets.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl mb-6 border border-teal-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">117 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Puntas magnéticas:</span>
                              <span className="ml-2 text-gray-600">98 puntas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Uso principal:</span>
                              <span className="ml-2 text-gray-600">Electrónica</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Portabilidad:</span>
                              <span className="ml-2 text-gray-600">Muy compacto</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Precio increíblemente bajo</b></span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Muy popular</b> con miles de reseñas positivas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Puntas magnéticas</b> de calidad</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Muy portátil</b> y compacto</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Extensiones flexibles</b> incluidas</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Durabilidad limitada</b> para uso profesional intensivo</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Calidad variable</b> en algunas piezas</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Solo para electrónica</b> básica</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Precio y CTA */}
                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl border-2 border-teal-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-teal-600 mb-2">$220 MXN</p>
                              <p className="text-sm text-gray-600">* El precio puede variar</p>
                            </div>
                            <div className="text-right">
                              <div className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-teal-600 transition-colors cursor-pointer">
                                🛒 Ver en Amazon →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Producto #6 - Pretul SET-104 */}
                    <motion.div 
                      className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl border-2 border-indigo-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-indigo-500 text-white font-bold text-lg px-4 py-2">
                          🏅 #6
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Pretul SET-104: El Todoterreno Confiable</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 fill-current opacity-10" />
                          </div>
                          <span className="ml-2 text-gray-600">(650+ reseñas)</span>
                        </div>
                        
                        <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                          <p className="text-indigo-800 font-semibold">
                            <b>Mejor para:</b> El hogar o como un primer kit de herramientas completo.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Este juego de <b>104 piezas de Pretul</b> es una evolución de su popular kit de 83 piezas, 
                          ahora en un <b>estuche de plástico rígido</b> que protege y organiza mejor las herramientas. 
                          Ofrece una excelente variedad de dados, puntas y llaves.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Estuche de plástico rígido</b></span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Buena variedad</b> de herramientas</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Excelente relación</b> calidad-precio</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Marca confiable</b> Truper</span>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 text-sm">
                            <b>Contras:</b> La calidad es para uso doméstico, no industrial.
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-indigo-600">$550 - $650 MXN</span>
                        </div>
                        
                        <motion.a
                          href="https://a.co/d/5n1P5CA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          🛒 Ver en Amazon
                          <motion.svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </motion.a>
                      </div>
                    </motion.div>
                    {/* Producto #7 - Pretul SET-12 */}
                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-8 rounded-3xl shadow-2xl border-2 border-orange-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white font-bold text-lg px-4 py-2">
                          🏅 #7
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Pretul SET-12: Lo Esencial para el Hogar</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(3)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                            <Star className="w-5 h-5 fill-current opacity-60" />
                            <Star className="w-5 h-5 fill-current opacity-60" />
                          </div>
                          <span className="ml-2 text-gray-600">(400+ reseñas)</span>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-xl mb-6">
                          <p className="text-orange-800 font-semibold">
                            <b>Mejor para:</b> Hogar básico o primer kit de herramientas económico.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Con solo <b>12 piezas esenciales</b>, este kit de Pretul es perfecto para quienes recién 
                          empiezan o solo necesitan las herramientas más básicas. Incluye los destornilladores y 
                          alicates más comunes en un <b>estuche compacto</b>.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Muy económico</b></span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Incluye herramientas más comunes</b> para el hogar</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Estuche compacto</b></span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <span><b>Ideal para principiantes</b></span>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 text-sm">
                            <b>Contras:</b> La calidad de los materiales es básica, no apto para trabajos exigentes.
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-orange-600">$180 - $220 MXN</span>
                        </div>
                        
                        <motion.a
                          href="https://a.co/d/9VbPx1A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          🛒 Ver en Amazon
                          <motion.svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Comparativa Detallada */}
                <section id="comparativa" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    ⚖️ Comparativa Detallada
                  </motion.h2>
                  <ProductComparison 
                    title={comparisonData.title}
                    products={comparisonData.products}
                    features={comparisonData.features}
                  />
                </section>

                {/* Guía de Compra Rápida */}
                <section id="guia-compra" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    💡 Guía de Compra Rápida
                  </motion.h2>
                  <ul>
                    <li><b>Para el profesional:</b> Invierte en un kit de marca reconocida como <b>DEWALT</b>. Durabilidad y garantía a largo plazo.</li>
                    <li><b>Para el aficionado al auto:</b> <b>Pretul SET-83</b> o <b>SET-104</b> ofrecen lo esencial sin gastar de más.</li>
                    <li><b>Para el "mil usos" en casa:</b> <b>CARTMAN</b> es tu mejor aliado para cualquier situación.</li>
                    <li><b>Para el gurú de la tecnología:</b> <b>KIROGILY</b> o <b>AXIDUN</b> son indispensables para gadgets y electrónica.</li>
                  </ul>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    ❓ Preguntas Frecuentes
                  </motion.h2>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-3">❓</span>
                        ¿Qué es el acero Cromo-Vanadio (CR-V) y por qué es importante?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-10">Es una aleación de acero que mejora la resistencia y la dureza, evitando que las herramientas se deformen o rompan bajo presión. Es un indicador de buena calidad.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-3">❓</span>
                        ¿Realmente necesito un kit con más de 200 piezas?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-10">Depende de tu uso. Para el hogar, 100-150 piezas suelen ser suficientes. Para mecánica profesional, más de 200 piezas aseguran tener el dado o la llave correcta para cualquier vehículo.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-3">❓</span>
                        ¿Son importantes las puntas magnéticas?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-10">¡Mucho! Especialmente en electrónica o lugares de difícil acceso. Ayudan a sostener el tornillo en la punta del destornillador, evitando que se caiga y se pierda.</p>
                    </div>
                  </div>
                </section>

                {/* Conclusión */}
                <section id="conclusion" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    🎯 Conclusión
                  </motion.h2>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-indigo-200">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Elegir un kit de herramientas es una decisión personal que depende del tipo de trabajo que realizas. No existe un "mejor kit" universal, pero sí existe el "mejor kit para ti".
                    </p>
                    <ul>
                      <li><b>Profesional:</b> <b>DEWALT DWMT81535</b> es la mejor opción por calidad y exhaustividad.</li>
                      <li><b>Bricolaje:</b> <b>CARTMAN 238 piezas</b> es la opción más inteligente y versátil.</li>
                      <li><b>Electrónica:</b> <b>KIROGILY 150 piezas</b> es una inversión pequeña con gran retorno en funcionalidad y precisión.</li>
                    </ul>
                  </div>
                </section>

                {/* Artículos relacionados */}
                {/* <RelatedArticles articles={relatedArticles} /> */}
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
