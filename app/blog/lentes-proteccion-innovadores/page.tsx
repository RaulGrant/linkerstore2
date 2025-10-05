'use client';

import { motion, AnimatePresence } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import ProductComparison from '@/components/blog/ProductComparison';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  AlertTriangle,
  Eye,
  Zap,
  Sun,
  Droplets,
  Wind,
  Info,
  ChevronDown,
  Sparkles,
  Settings,
  TrendingUp,
  Package,
  Glasses
} from 'lucide-react';
import { useState } from 'react';

export default function LentesProteccionArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedTint, setSelectedTint] = useState<'claro' | 'gris' | 'ambar' | 'fotocromatico'>('claro');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'kleenguard-nemesis',
      name: 'Kleenguard Nemesis V30',
      rating: 4.6,
      reviewCount: 2300,
      isRecommended: true,
      bestFor: 'Mejor Diseño y Estilo',
      amazonLink: 'https://www.mercadolibre.com.mx/gafas-de-seguridad-kleenguard-v30-nemesis-14481/p/MLM2022204992'
    },
    {
      id: '3m-securefit',
      name: '3M SecureFit Serie 400',
      rating: 4.7,
      reviewCount: 850,
      isRecommended: true,
      bestFor: 'Mejor Tecnología Antiempañante',
      amazonLink: 'https://www.amazon.com.mx/3M-SecureFit-400-Safety-Glasses/dp/B00AZ8B57S'
    },
    {
      id: 'hexarmor-vs250',
      name: 'Hexarmor VS250 Variomatic',
      rating: 5.0,
      reviewCount: 45,
      isRecommended: false,
      bestFor: 'Opción Más Innovadora',
      amazonLink: 'https://www.mercadolibre.com.mx/lentes-de-seguridad-fotocromaticos'
    }
  ];

  const comparisonFeatures = [
    { name: 'Cumple ANSI Z87.1+', product1: true, product2: true, product3: true },
    { name: 'Tratamiento Antiempañante', product1: 'Básico', product2: 'Premium (Scotchgard)', product3: 'Premium (TruShield®)' },
    { name: 'Protección UV 99.9%', product1: true, product2: true, product3: true },
    { name: 'Patillas Ajustables', product1: false, product2: 'Auto-ajustables', product3: true },
    { name: 'Tinte Principal', product1: 'Gris/Ahumado', product2: 'Claro', product3: 'Fotocromático' },
    { name: 'Peso', product1: 'Ligero', product2: '19g (Ultraligero)', product3: 'Ligero' },
    { name: 'Disponibilidad', product1: 'Mercado Libre', product2: 'Amazon MX', product3: 'Mercado Libre' }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
      title: 'Mejor Calzado de Seguridad Industrial México 2025',
      excerpt: 'Guía completa de botas industriales certificadas NOM-113.',
      description: 'Guía completa de botas industriales certificadas NOM-113.',
      category: 'EPP',
      publishDate: '3 Oct 2025',
      readTime: '25 min',
      image: '/images/safety-boots.jpg',
      slug: 'mejor-calzado-seguridad-industrial-mexico-2025'
    },
    {
      id: '2',
      title: 'Los Mejores Chalecos de Seguridad Reflectantes 2025',
      excerpt: 'Comparativa completa de chalecos de alta visibilidad.',
      description: 'Comparativa completa de chalecos de alta visibilidad.',
      category: 'EPP',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      image: '/images/chalecos-seguridad.jpg',
      slug: 'mejores-chalecos-seguridad-2025'
    },
    {
      id: '3',
      title: 'Guía Completa Mejores Overoles de Trabajo 2025',
      excerpt: 'Todo sobre materiales, normativas y los mejores overoles.',
      description: 'Todo sobre materiales, normativas y los mejores overoles.',
      category: 'EPP',
      publishDate: '3 Oct 2025',
      readTime: '22 min',
      image: '/images/overoles.jpg',
      slug: 'guia-completa-mejores-overoles-trabajo-2025'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Qué significa la marca "Z87+" en los lentes?',
      answer: 'La marca "Z87+" es una certificación otorgada por el Instituto Nacional Estadounidense de Estándares (ANSI) que garantiza que los lentes de seguridad han superado pruebas de alto impacto. Esto significa que la mica y el armazón son capaces de resistir el impacto de una pequeña bola de acero disparada a alta velocidad (150 pies por segundo) sin romperse ni desprenderse. Es el estándar de oro que diferencia a la protección ocular de grado profesional de las gafas convencionales y es un requisito indispensable en la mayoría de los entornos industriales y de construcción.'
    },
    {
      question: '¿Los lentes de seguridad protegen del sol igual que los lentes de sol?',
      answer: 'Protegen de maneras complementarias pero no son intercambiables. Los lentes de seguridad de buena calidad con micas de policarbonato ofrecen un excelente bloqueo de la radiación UV (99.9%), que es la protección fundamental contra el daño solar a largo plazo. Sin embargo, su función principal es la resistencia a impactos, algo que los lentes de sol no ofrecen. La regla es simple: para protección contra impactos, usa siempre lentes de seguridad certificados.'
    },
    {
      question: '¿Cómo evito que mis lentes de seguridad se empañen?',
      answer: 'La forma más efectiva de combatir el empañamiento es elegir desde el principio un modelo con un recubrimiento antiempañante (anti-fog) de alta calidad integrado en la mica. Las tecnologías modernas, como las de 3M, Bollé o Hexarmor, utilizan recubrimientos que gestionan la humedad para mantener la visión clara. Además, un diseño con buena ventilación ayuda a circular el aire y reducir la acumulación de humedad.'
    },
    {
      question: '¿Puedo usar lentes de seguridad sobre mis lentes de aumento?',
      answer: 'Sí, es una necesidad muy común y existen soluciones específicas para ello. Debes buscar lentes de seguridad catalogados como "OTG" (Over The Glasses) o "sobrelentes". Estos modelos están diseñados con un armazón más ancho y profundo que se ajusta cómodamente sobre la mayoría de los lentes de prescripción, proporcionando una cobertura completa sin presionar el armazón inferior. Marcas como Truper, Bollé, Honeywell y 3M ofrecen excelentes opciones OTG.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema lentes/visión */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${180 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
                  left: `${(i * 2.3) % 100}%`,
                  top: `${(i * 3.9) % 100}%`,
                }}
                animate={{
                  x: [0, 110 + (i % 60), -90 + (i % 40), 0],
                  y: [0, -130 + (i % 50), 110 + (i % 45), 0],
                  scale: [0.3, 1.3, 0.4, 1],
                  opacity: [0.2, 0.9, 0.3, 0.7],
                  rotate: [0, 190 + (i % 180), 360]
                }}
                transition={{
                  duration: 13 + (i % 9),
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Iconos de lentes flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`glasses-${i}`}
                className="absolute text-white opacity-30"
                style={{
                  fontSize: `${14 + (i % 10)}px`,
                  left: `${(i * 4) % 100}%`,
                  top: `${(i * 6) % 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  rotate: [0, 360],
                  opacity: [0.2, 0.7, 0.2]
                }}
                transition={{
                  duration: 11 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
              >
                <Glasses className="w-6 h-6" />
              </motion.div>
            ))}

            {/* Rayos de luz (40 rayos) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`light-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
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

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-cyan-600/20 border border-cyan-400/30 rounded-full px-4 py-2 text-cyan-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Eye className="h-4 w-4" />
                👓 Protección Ocular Innovadora
              </motion.div>
              
              <motion.h1 
                className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl md:text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ¿Ya Conocías Estos Lentes de Protección Innovadores?
              </motion.h1>
              
              <motion.p 
                className="text-xl text-cyan-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía Definitiva 2025: Tecnologías avanzadas que revolucionan la seguridad visual en México
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 sm:p-4 md:p-6 text-sm text-cyan-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  3 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  18 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo */}
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${180 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
                  left: `${(i * 11) % 100}%`,
                  top: `${(i * 19) % 100}%`,
                }}
                animate={{
                  y: [0, -70, 0],
                  x: [0, 50, -30, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.7, 1.5, 0.7],
                }}
                transition={{
                  duration: 9 + (i % 9),
                  repeat: Infinity,
                  delay: i * 0.04,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50"
                >
                  {/* Introducción */}
                  <section id="introduccion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-8 border-cyan-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500 rounded-full p-3 flex-shrink-0">
                          <Sparkles className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-900 mb-3">👓 La Revolución de la Protección Ocular</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            Atrás quedaron los días en que la protección ocular era un simple pedazo de plástico incómodo y voluminoso. 
                            <strong className="text-cyan-600"> Hoy, los lentes de seguridad son una pieza de alta tecnología</strong>, 
                            diseñados no solo para detener impactos, sino para mejorar tu visibilidad, adaptarse a la luz y ofrecer una 
                            comodidad que te hará olvidar que los llevas puestos.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-xl text-gray-700 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      En esta guía 2025, exploraremos las <b className="text-cyan-600">innovaciones que están revolucionando la seguridad visual</b>, 
                      desde micas que nunca se empañan hasta diseños que querrás usar incluso fuera del trabajo.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-8 w-8 text-blue-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">¿Por Qué Esta Guía es Diferente?</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        No solo te mostraremos los productos mejor calificados en el mercado mexicano, sino que <b className="text-blue-700">decodificaremos 
                        las tecnologías</b> que realmente importan: desde el significado de la certificación ANSI Z87.1+ hasta cómo funcionan los 
                        recubrimientos antiempañantes premium y las micas fotocromáticas inteligentes.
                      </p>
                    </motion.div>
                  </section>

                  {/* Guía de Características Clave */}
                  <section id="caracteristicas-clave" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        🔬 Guía de Características Clave: Tecnología que Salva Vidas
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La elección de lentes de protección ha trascendido la simple barrera física para convertirse en una 
                      <b className="text-cyan-600"> decisión tecnológica</b>. Comprender estas innovaciones es el primer paso para 
                      realizar una inversión inteligente.
                    </motion.p>

                    {/* Resistencia a Impactos ANSI Z87.1+ */}
                    <motion.div 
                      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-red-500 mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <Shield className="h-10 w-10 text-red-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900">Resistencia a Impactos: El Estándar de Oro ANSI Z87.1+</h3>
                          <p className="text-gray-600 text-sm mt-1">La Certificación que Diferencia Vida o Muerte</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        La norma del Instituto Nacional Estadounidense de Estándares (ANSI) Z87.1 es el <b className="text-red-700">referente 
                        que define los requisitos mínimos</b> para los equipos de protección ocular en entornos laborales y recreativos. Esta 
                        certificación garantiza que los lentes han superado rigurosas pruebas de laboratorio.
                      </p>

                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-red-300">
                        <h4 className="font-bold text-red-900 mb-3 text-lg flex items-center gap-2">
                          <AlertTriangle className="h-6 w-6" />
                          La Diferencia Crucial: Z87 vs Z87+
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6">
                          <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold text-orange-800 mb-2">⚠️ Certificación Básica "Z87":</p>
                            <p className="text-sm text-gray-700">
                              Solo requiere superar una prueba de impacto de <b>baja energía</b> (una bola de 1 pulgada dejada caer desde 50 pulgadas).
                            </p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
                            <p className="font-bold text-green-800 mb-2">✅ Certificación Premium "Z87+":</p>
                            <p className="text-sm text-gray-700">
                              Resiste el impacto de una bola de acero de <b>0.25 pulgadas disparada a 150 pies por segundo</b> (45.7 m/s) 
                              sin romperse ni desprenderse del armazón.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-sm text-yellow-900">
                          <Info className="h-4 w-4 inline mr-2" />
                          <b>Crucial:</b> Para cualquier actividad con herramientas eléctricas, maquinaria, deportes de tiro o entornos 
                          con proyectiles a alta velocidad, la certificación <b className="text-red-700">"Z87+"</b> no es una opción, 
                          sino una <b>necesidad absoluta</b>.
                        </p>
                      </div>
                    </motion.div>

                    {/* Tecnologías Avanzadas de la Mica */}
                    <motion.div 
                      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-purple-500 mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <Settings className="h-10 w-10 text-purple-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900">Tecnologías Avanzadas de la Mica</h3>
                          <p className="text-gray-600 text-sm mt-1">Visión Clara y Duradera</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        La mica, o lente, es el <b className="text-purple-700">corazón tecnológico</b> de las gafas de protección. 
                        Su material base, comúnmente policarbonato por su excepcional resistencia al impacto y ligereza, se ve potenciado 
                        por una serie de tratamientos superficiales que definen su rendimiento en el mundo real.
                      </p>

                      <div className="space-y-6">
                        {/* Antiempañante */}
                        <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <Droplets className="h-6 w-6 text-blue-600" />
                            <h4 className="font-bold text-blue-900 text-lg">Tratamiento Antiempañante (Anti-Fog)</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            El empañamiento es uno de los problemas <b className="text-blue-700">más frustrantes y peligrosos</b>, 
                            ya que obliga al usuario a quitarse la protección para limpiar la mica, exponiendo sus ojos al riesgo.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-gray-700 mb-2">
                              <b className="text-blue-800">Tecnología Premium: 3M™ Scotchgard™</b>
                            </p>
                            <p className="text-sm text-gray-600">
                              Utiliza química hidrofílica que hace que el agua se extienda formando una película delgada y transparente, 
                              manteniendo la claridad óptica. Superior a sprays o gamuzas, está adherido a la lente y soporta múltiples 
                              lavados sin perder efectividad.
                            </p>
                          </div>
                        </div>

                        {/* Antirayaduras */}
                        <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <Shield className="h-6 w-6 text-green-600" />
                            <h4 className="font-bold text-green-900 text-lg">Tratamiento Antirayaduras (Anti-Scratch)</h4>
                          </div>
                          <p className="text-gray-700">
                            El policarbonato, a pesar de su increíble resistencia al impacto, es un material relativamente blando y 
                            susceptible a las rayaduras. Un tratamiento antirayaduras, o <b className="text-green-700">"hard coat"</b>, 
                            es una capa endurecida que aumenta su durabilidad. Unos lentes rayados no solo son molestos, sino que pueden 
                            distorsionar la visión, causar fatiga ocular y comprometer la seguridad.
                          </p>
                        </div>

                        {/* Protección UV */}
                        <div className="bg-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <Sun className="h-6 w-6 text-yellow-600" />
                            <h4 className="font-bold text-yellow-900 text-lg">Protección UV del 99.9%</h4>
                          </div>
                          <p className="text-gray-700 mb-3">
                            Para cualquier persona que trabaje al aire libre, la protección contra la radiación ultravioleta es 
                            <b className="text-yellow-700"> indispensable</b>. La exposición prolongada a los rayos UVA y UVB puede 
                            causar daños oculares graves a largo plazo, como cataratas y degeneración macular.
                          </p>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <Info className="h-4 w-4 inline mr-2" />
                              <b>Importante:</b> La protección UV es independiente del color o tinte de la mica. Incluso los lentes 
                              completamente transparentes pueden y deben ofrecer una protección UV completa del 99.9%.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* La Ciencia del Tinte */}
                    <motion.div 
                      className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-orange-300 mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Package className="h-8 w-8 text-orange-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900">La Ciencia del Tinte: Adaptación a Cada Entorno de Luz</h3>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        El color de la mica <b className="text-orange-700">no es meramente estético</b>; es una herramienta funcional 
                        diseñada para optimizar la visión en condiciones de iluminación específicas, mejorando el contraste y reduciendo 
                        la fatiga ocular.
                      </p>

                      {/* Selector de Tinte */}
                      <div className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-6 md:mb-8">
                        <motion.button
                          onClick={() => setSelectedTint('claro')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedTint === 'claro'
                              ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          Claro
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedTint('gris')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedTint === 'gris'
                              ? 'bg-gradient-to-r from-gray-600 to-slate-700 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          Gris/Ahumado
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedTint('ambar')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedTint === 'ambar'
                              ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-300'
                          }`}
                        >
                          Ámbar/Amarillo
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedTint('fotocromatico')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedTint === 'fotocromatico'
                              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-300'
                          }`}
                        >
                          Fotocromático
                        </motion.button>
                      </div>

                      {/* Contenido según tinte seleccionado */}
                      <AnimatePresence mode="wait">
                        {selectedTint === 'claro' && (
                          <motion.div
                            key="claro"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white p-3 sm:p-4 md:p-6 rounded-xl"
                          >
                            <h4 className="font-bold text-gray-900 mb-3">💡 Micas Claras: Máxima Visibilidad Interior</h4>
                            <p className="text-gray-700 mb-3">
                              Proporcionan la <b className="text-gray-800">máxima transmisión de luz visible (VLT)</b> y una percepción 
                              del color sin alteraciones.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b>✓ Ideal para:</b> Trabajos en interiores, laboratorios o en condiciones de luz general donde la 
                                principal preocupación es la protección contra impactos.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {selectedTint === 'gris' && (
                          <motion.div
                            key="gris"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-gradient-to-br from-gray-100 to-slate-100 p-3 sm:p-4 md:p-6 rounded-xl"
                          >
                            <h4 className="font-bold text-gray-900 mb-3">😎 Micas Grises/Ahumadas: Protección Solar</h4>
                            <p className="text-gray-700 mb-3">
                              Actúan como lentes de sol, <b className="text-gray-800">reduciendo la cantidad total de luz</b> que llega al ojo.
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b>✓ Ideal para:</b> Trabajos en exteriores bajo luz solar directa y brillante, minimizan el 
                                deslumbramiento y la fatiga visual sin distorsionar los colores.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {selectedTint === 'ambar' && (
                          <motion.div
                            key="ambar"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-gradient-to-br from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl"
                          >
                            <h4 className="font-bold text-amber-900 mb-3">🌅 Micas Ámbar/Amarillas: Máximo Contraste</h4>
                            <p className="text-gray-700 mb-3">
                              Filtran la luz azul y la luz difusa, lo que <b className="text-amber-800">aumenta significativamente el 
                              contraste y la percepción de la profundidad</b>.
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b>✓ Ideal para:</b> Condiciones de baja luminosidad como el amanecer, atardecer, días nublados o 
                                en interiores con iluminación deficiente. Mejoran la agudeza visual en entornos con niebla o polvo.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {selectedTint === 'fotocromatico' && (
                          <motion.div
                            key="fotocromatico"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-gradient-to-br from-purple-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-400"
                          >
                            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                              <Sparkles className="h-6 w-6" />
                              🚀 Tecnología Innovadora: Lentes Fotocromáticos
                            </h4>
                            <p className="text-gray-700 mb-4">
                              Estos lentes representan la <b className="text-purple-800">solución "todo en uno"</b> más avanzada. 
                              Contienen moléculas fotosensibles que reaccionan a la radiación UV.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-white p-4 rounded-lg">
                                <p className="font-bold text-purple-800 mb-2">☀️ En Exteriores:</p>
                                <p className="text-sm text-gray-700">
                                  Al exponerse a la luz solar, las moléculas cambian su estructura química, oscureciendo la mica en segundos.
                                </p>
                              </div>
                              <div className="bg-white p-4 rounded-lg">
                                <p className="font-bold text-purple-800 mb-2">🏢 En Interiores:</p>
                                <p className="text-sm text-gray-700">
                                  Al regresar a un entorno interior sin UV, el proceso se invierte y los lentes se aclaran automáticamente.
                                </p>
                              </div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg mt-4">
                              <p className="text-sm text-purple-900">
                                <b>✓ Perfecto para:</b> Trabajadores que se mueven constantemente entre interiores y exteriores 
                                (supervisores de obra, personal de logística, electricistas), eliminando la necesidad de portar dos 
                                pares de gafas.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Ergonomía y Comodidad */}
                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-green-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="h-8 w-8 text-green-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">Ergonomía y Comodidad: La Clave para el Uso Constante</h3>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        La eficacia de un equipo de protección personal (EPP) <b className="text-green-700">depende directamente de su 
                        uso constante</b>. Los lentes de seguridad más avanzados tecnológicamente son inútiles si se quedan en la caja 
                        de herramientas debido a que son incómodos.
                      </p>

                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                        <h4 className="font-bold text-green-800 mb-4">🔗 El Círculo Virtuoso de la Protección</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                              <span className="text-white font-bold">1</span>
                            </div>
                            <p className="text-gray-700">
                              <b className="text-green-700">Seguridad:</b> La meta principal es el cumplimiento (uso 100% del tiempo).
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                              <span className="text-white font-bold">2</span>
                            </div>
                            <p className="text-gray-700">
                              <b className="text-green-700">Confort:</b> El principal obstáculo es la falta de comodidad. Lentes que 
                              aprietan, se deslizan o pesan demasiado serán inevitablemente descartados.
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                              <span className="text-white font-bold">3</span>
                            </div>
                            <p className="text-gray-700">
                              <b className="text-green-700">Tecnología:</b> Los recubrimientos antiempañantes cierran el círculo. 
                              Lentes que se empañan constantemente interrumpen el trabajo y tientan al usuario a quitárselos.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <Zap className="h-6 w-6" />
                          Innovación: Tecnología de Difusión de Presión (PDT)
                        </h4>
                        <p className="text-gray-700">
                          Un ejemplo revolucionario es la <b className="text-blue-700">Tecnología de Difusión de Presión de 3M</b>, 
                          presente en su línea SecureFit. En lugar de patillas rígidas que ejercen presión sobre las sienes, este diseño 
                          incorpora nervaduras flexibles que se autoajustan a la forma y tamaño de la cabeza del usuario, distribuyendo 
                          la presión de manera uniforme. El resultado es un ajuste seguro, firme y extraordinariamente cómodo.
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Top 6 Productos Destacados */}
                  <section id="productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Lentes de Protección Destacados en México 2025
                      </span>
                    </motion.h2>

                    {/* Nota importante sobre calificaciones */}
                    <motion.div 
                      className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm text-blue-800">
                            <strong>Nota importante:</strong> Las calificaciones y número de reseñas mostradas corresponden 
                            a la información disponible en las plataformas al momento de la publicación (3 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - Kleenguard Nemesis V30 */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-yellow-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-yellow-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥇 #1
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            MEJOR DISEÑO Y ESTILO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Kleenguard Nemesis V30 (Mica Ahumada/Gris)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.4) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(2,300+ reseñas) - 4.6/5</span>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, mecánica, trabajo al aire libre, actividades recreativas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Los Kleenguard Nemesis son, indiscutiblemente, <b className="text-yellow-700">uno de los lentes de seguridad más 
                          populares en el mercado mexicano</b>, y la razón es simple: combinan una protección certificada de alto impacto 
                          con un diseño deportivo y ligero que los usuarios realmente quieren usar. Su <b className="bg-yellow-100 px-2 py-1 rounded">
                          estética moderna</b> elimina la apariencia de equipo de seguridad tradicional, lo que fomenta un uso constante.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño Atractivo:</b> Estilo deportivo y envolvente aumenta la aceptación de uso</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Comodidad Superior:</b> Extremadamente ligeros con patillas flexibles y suaves</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección Certificada:</b> ANSI Z87.1+ y protección UV del 99.9%</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Detalle Práctico:</b> Incluyen cordón para el cuello</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Antiempañante Básico:</b> Puede ser insuficiente en alta humedad o esfuerzo físico</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ajuste Limitado:</b> Las patillas no son ajustables, puede no ser perfecto para todos</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/gafas-de-seguridad-kleenguard-v30-nemesis-14481/p/MLM2022204992"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Milwaukee */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-red-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-red-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-red-100 text-red-800 px-4 py-2 font-bold">
                            MÁS DURADEROS
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Milwaukee Lentes de Seguridad Antirayaduras y Antiempañantes (Claros)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(1,270+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, mecánica, industria pesada, profesionales exigentes
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Provenientes de una marca sinónimo de durabilidad en herramientas, los lentes de seguridad Milwaukee están 
                          diseñados para <b className="text-red-700">el profesional que exige robustez</b>. Su principal fortaleza radica 
                          en la combinación de un recubrimiento antirayaduras de capa dura, que soporta el abuso diario en el sitio de 
                          trabajo, y un <b className="bg-red-100 px-2 py-1 rounded">tratamiento antiempañante eficaz</b>.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Doble Certificación
                          </h4>
                          <p className="text-gray-700">
                            Cumplen no solo con la norma estadounidense <b className="text-blue-700">ANSI Z87.1+</b>, sino también 
                            con la canadiense <b className="text-blue-700">CSA Z94.3</b>, lo que subraya su calidad internacional.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Durabilidad Extrema:</b> Recubrimiento de capa dura mantiene la claridad visual</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Rendimiento Antiempañante:</b> Efectivo en la mayoría de las condiciones</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Comodidad para el Trabajo:</b> Puente nasal flexible y patillas cómodas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Doble Certificación:</b> ANSI Z87.1+ y CSA Z94.3</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Límites del Antiempañante:</b> Puede superarse en sudoración extrema</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño Funcional:</b> Estética robusta pero menos estilizada</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/lentes-seguridad-claras-antirayas-milwaukee-48-73-2010/p/MLM27892719"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - 3M SecureFit */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥉 #3
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            MEJOR TECNOLOGÍA
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          3M SecureFit Serie 400 con Recubrimiento Scotchgard
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(850+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Profesionales que buscan máximo confort, jornadas prolongadas, trabajo en ambientes húmedos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          La serie SecureFit de 3M representa la <b className="text-blue-700">vanguardia en ergonomía y tecnología de recubrimientos</b>. 
                          Su innovación patentada, la Tecnología de Difusión de Presión en las patillas, permite que los lentes se autoajusten a 
                          prácticamente cualquier tamaño de cabeza. Cuando esto se combina con el <b className="bg-blue-100 px-2 py-1 rounded">
                          recubrimiento antiempañante Scotchgard™</b>, el resultado es un par de lentes ultraligeros con visión clara durante todo el día.
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-purple-300">
                          <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center gap-2">
                            <Sparkles className="h-6 w-6" />
                            Tecnología de Difusión de Presión (PDT)
                          </h4>
                          <p className="text-gray-700">
                            Las patillas incorporan <b className="text-purple-700">nervaduras flexibles</b> que se autoajustan a la forma y 
                            tamaño de la cabeza, distribuyendo la presión de manera uniforme. El resultado es un ajuste seguro, firme y 
                            extraordinariamente cómodo sin necesidad de ajustes manuales.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Comodidad Revolucionaria:</b> PDT ofrece ajuste personalizado sin ajustes manuales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Antiempañante de Élite:</b> Scotchgard™ superior a tratamientos convencionales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ultraligero:</b> Solo 19 gramos, reduce fatiga durante uso prolongado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Puente Nasal Ajustable:</b> Para un ajuste perfecto personalizado</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio Premium:</b> Tecnología avanzada se refleja en mayor costo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Percepción de Fragilidad:</b> Diseño sin marco puede parecer menos robusto</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Disponible en Amazon México</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.amazon.com.mx/3M-SecureFit-400-Safety-Glasses/dp/B00AZ8B57S"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Amazon →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Hexarmor VS250 */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-purple-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-purple-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            ⭐ #4
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 font-bold">
                            OPCIÓN MÁS INNOVADORA
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Hexarmor VS250 con Micas Fotocromáticas (Variomatic)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(45+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Trabajadores que transitan constantemente entre interiores y exteriores (supervisores, electricistas, logística)
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Los Hexarmor VS250 son la <b className="text-purple-700">máxima expresión de la protección ocular adaptativa</b>. 
                          Su característica estrella es la mica fotocromática (denominada "Variomatic"), que se oscurece de forma inteligente 
                          en presencia de luz UV y se aclara en interiores, ofreciendo una <b className="bg-purple-100 px-2 py-1 rounded">
                          solución única para cualquier condición de luz</b>.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-yellow-400">
                          <h4 className="font-bold text-yellow-900 mb-3 text-lg flex items-center gap-2">
                            <Sun className="h-6 w-6" />
                            Tecnología Fotocromática Inteligente
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                              <p className="font-bold text-yellow-800 mb-2">☀️ En Exteriores:</p>
                              <p className="text-sm text-gray-700">
                                Las moléculas fotosensibles reaccionan a la radiación UV, oscureciendo la mica en segundos para 
                                proteger contra el deslumbramiento.
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="font-bold text-yellow-800 mb-2">🏢 En Interiores:</p>
                              <p className="text-sm text-gray-700">
                                El proceso se invierte automáticamente, aclarando los lentes para máxima visibilidad en 
                                ambientes sin UV.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Recubrimiento Premium TruShield®
                          </h4>
                          <p className="text-gray-700">
                            Tecnología de última generación que ofrece una <b className="text-green-700">excelente y duradera protección</b> 
                            contra el empañamiento y las rayaduras, manteniendo la visión nítida en las condiciones más exigentes.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-purple-200">
                            <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Tecnología Fotocromática:</b> Se adapta automáticamente a cambios de luz</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Recubrimiento Premium:</b> TruShield® excelente contra empañamiento y rayaduras</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño Ergonómico:</b> Patillas suaves y puente nasal ajustable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Certificación Global:</b> ANSI Z87.1+, CE EN166 y CSA Z94.3</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Inversión Elevada:</b> Tecnología avanzada en rango de precio más alto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Velocidad de Transición:</b> Ligero retardo al pasar de oscuro a claro en interiores</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/lentes-de-seguridad-fotocromaticos"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Truper Sobrelente */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💰 #5
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MEJOR OPCIÓN ECONÓMICA OTG
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Truper Sobrelente de Seguridad Antiempaño (Modelo 101954)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(200+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Usuarios que necesitan usar lentes de prescripción en el trabajo, presupuesto ajustado
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Truper ofrece una solución práctica y altamente efectiva para el gran número de usuarios que necesitan usar 
                          <b className="text-green-700"> lentes de prescripción en el trabajo</b>. Este sobrelente, o modelo OTG 
                          (Over-The-Glass), está diseñado con un armazón amplio que se ajusta cómodamente sobre la mayoría de los lentes 
                          de aumento. Su característica más destacada es la inclusión de un <b className="bg-green-100 px-2 py-1 rounded">
                          tratamiento antiempañante</b>, resolviendo dos problemas comunes a un costo inmejorable.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Glasses className="h-6 w-6" />
                            Diseño OTG (Over-The-Glass)
                          </h4>
                          <p className="text-gray-700">
                            El amplio espacio interior permite usarlos sobre lentes graduados sin causar presión o incomodidad. El diseño 
                            envolvente ofrece una <b className="text-blue-700">sólida protección frontal y lateral</b> contra partículas 
                            y salpicaduras.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño OTG Funcional:</b> Se ajusta sobre lentes graduados sin presión</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Antiempañante Incluido:</b> Añade valor significativo en este segmento de precio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Excelente Relación Calidad-Precio:</b> Marca confiable a costo muy bajo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Buena Cobertura:</b> Protección frontal y lateral completa</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Estética y Volumen:</b> Más voluminosos y menos estéticos que lentes integrados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Durabilidad de Recubrimientos:</b> Puede no igualar marcas premium bajo uso intensivo</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/lentes-de-seguridad-mica-transparente-truper-14252/p/MLM39874983"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Bollé Safety SWIFT OTG */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🌱 #6
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            MEJOR OTG PREMIUM ECOLÓGICO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Bollé Safety SWIFT OTG con Recubrimiento PLATINUM Lite
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.5) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Producto de lanzamiento reciente)</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Profesionales con lentes graduados que buscan máxima calidad y compromiso ecológico
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Bollé redefine el concepto de sobrelente con el SWIFT OTG. Este modelo no solo se ajusta sobre gafas graduadas, 
                          sino que lo hace con un <b className="text-teal-700">diseño excepcionalmente ligero, balanceado y con patillas 
                          delgadas y flexibles</b> que minimizan la interferencia con el armazón de prescripción. Incorpora el recubrimiento 
                          <b className="bg-teal-100 px-2 py-1 rounded">PLATINUM Lite</b>, una tecnología de élite.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-400">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Wind className="h-6 w-6" />
                            Compromiso con la Sostenibilidad
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Fabricado con un <b className="text-green-700">33% de policarbonato reciclado</b> y diseñado para ser 
                            completamente reciclable gracias a su construcción mono-material sin partes metálicas.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <Info className="h-4 w-4 inline mr-2" />
                              Una opción consciente para empresas y profesionales comprometidos con la reducción de su huella ambiental.
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-teal-200">
                            <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Recubrimiento de Alto Rendimiento:</b> PLATINUM Lite superior y duradero</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño OTG Superior:</b> Más ligero, delgado y cómodo que sobrelentes tradicionales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sostenibilidad:</b> 33% materiales reciclados y completamente reciclable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección Certificada:</b> ANSI Z87.1-2020 más reciente</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Costo Elevado:</b> Precio considerablemente más alto que sobrelentes básicos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Disponibilidad Limitada:</b> Producto más nuevo con menor reconocimiento en mercado masivo</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-3382861608-sobre-lente-de-seguridad-bolle-swift-otg-antiempano-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Comparación de Productos */}
                  <section id="comparacion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                        📊 Comparación Detallada: Top 3 Cara a Cara
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Comparativo: Los 3 Mejores Valorados"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />
                  </section>

                  {/* Guía de Compra Rápida */}
                  <section id="guia-compra" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🛒 Guía de Compra Rápida: 3 Consejos + 3 Errores a Evitar
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* 3 Consejos Clave */}
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 text-center">
                          💡 3 Consejos Clave para Acertar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                1
                              </div>
                              <div>
                                <h4 className="font-bold text-green-900 mb-2">Prioriza el Ajuste y la Comodidad Sobre Todo</h4>
                                <p className="text-gray-700">
                                  La protección ocular más avanzada es ineficaz si no se usa. Busca características ergonómicas como 
                                  patillas ajustables o autoajustables (como la tecnología PDT de 3M) y puentes nasales de goma suave. 
                                  Unos lentes que se ajustan mal no solo son incómodos, sino que <b className="text-green-700">dejan 
                                  huecos peligrosos</b> por donde pueden entrar partículas. La mejor protección es aquella que olvidas 
                                  que llevas puesta.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                2
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-900 mb-2">Elige el Tinte Adecuado para TU Entorno</h4>
                                <p className="text-gray-700">
                                  La elección del color de la mica debe ser una <b className="text-blue-700">decisión funcional, no estética</b>. 
                                  No compres micas oscuras si la mayor parte de tu trabajo es en interiores. Utiliza micas claras para 
                                  máxima agudeza visual en interiores, micas grises para sol directo, y micas amarillas para mejorar el 
                                  contraste en condiciones de poca luz. Si transitas constantemente entre interiores y exteriores, una 
                                  inversión en lentes fotocromáticos te ahorrará tiempo y garantizará la protección adecuada.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                3
                              </div>
                              <div>
                                <h4 className="font-bold text-purple-900 mb-2">No Escatimes en un Buen Tratamiento Antiempañante</h4>
                                <p className="text-gray-700">
                                  En el clima a menudo húmedo de muchas regiones de México, o en cualquier trabajo que requiera esfuerzo 
                                  físico, el empañamiento es el <b className="text-purple-700">principal enemigo de la seguridad y la productividad</b>. 
                                  Un recubrimiento antiempañante de alta calidad no es un lujo, sino una característica de seguridad esencial. 
                                  Busca tecnologías premium que ofrezcan una resistencia duradera al empañamiento, ya que esto te evitará la 
                                  peligrosa necesidad de quitarte los lentes para limpiarlos en medio de una tarea.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-red-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-6 text-center">
                          ❌ 3 Errores Comunes a Evitar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                            <div className="flex items-start gap-4">
                              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-red-900 mb-2">Usar Lentes de Sol como Lentes de Seguridad</h4>
                                <p className="text-gray-700">
                                  Este es uno de los <b className="text-red-700">errores más peligrosos</b>. Los lentes de sol estándar, 
                                  incluso los de marcas costosas, no están diseñados ni certificados para resistir impactos. Sus micas pueden 
                                  fragmentarse al recibir un golpe, proyectando pedazos de plástico o cristal directamente hacia los ojos y 
                                  causando una lesión mucho más grave que el impacto original. Busca siempre la marca <b>"ANSI Z87.1+"</b> 
                                  en el armazón o la mica.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                              <Eye className="h-8 w-8 text-orange-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-orange-900 mb-2">Ignorar los Huecos y el Mal Ajuste</h4>
                                <p className="text-gray-700">
                                  Seleccionar un modelo basándose únicamente en su apariencia sin probar el ajuste es un grave error. Unos 
                                  lentes que dejan <b className="text-orange-700">espacios significativos en los lados, por arriba o por debajo</b>, 
                                  son una invitación para que el polvo, las virutas, las salpicaduras químicas y otros peligros lleguen a tus 
                                  ojos. El diseño debe ser envolvente y ceñido al contorno de tu cara.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4">
                              <Droplets className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-yellow-900 mb-2">Limpiarlos con la Ropa o Productos Inadecuados</h4>
                                <p className="text-gray-700">
                                  Usar la esquina de tu camisa, un pañuelo de papel o limpiadores domésticos con alcohol o solventes es la 
                                  forma <b className="text-yellow-700">más rápida de arruinar tus lentes de seguridad</b>. Estas prácticas 
                                  abrasivas destruyen irreversiblemente los delicados recubrimientos antiempañante y antirayaduras, reduciendo 
                                  drásticamente su vida útil y tu capacidad de ver con claridad a través de ellos.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Settings className="h-8 w-8 text-indigo-600" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900">🧼 Mantenimiento: Prolonga la Vida de tus Lentes</h3>
                        </div>
                        
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Para maximizar la vida útil de tus lentes de protección y asegurar que sus tecnologías funcionen como el primer día, 
                            un <b className="text-indigo-700">cuidado adecuado es fundamental</b>.
                          </p>
                          
                          <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <h4 className="font-bold text-indigo-900 mb-2 text-center">🚿 Limpieza Correcta</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Enjuagar con agua fría primero</li>
                                <li>• Usar solución específica o jabón neutro</li>
                                <li>• Limpiar con paño de microfibra</li>
                                <li>• Nunca usar ropa o papel</li>
                              </ul>
                            </div>
                            
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <h4 className="font-bold text-indigo-900 mb-2 text-center">❌ Evitar</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Agua caliente</li>
                                <li>• Solventes o alcohol</li>
                                <li>• Limpiacristales domésticos</li>
                                <li>• Limpieza en seco</li>
                              </ul>
                            </div>
                            
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <h4 className="font-bold text-indigo-900 mb-2 text-center">📦 Almacenamiento</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Guardar en funda protectora</li>
                                <li>• Evitar golpes y rayones</li>
                                <li>• Lugar seco y fresco</li>
                                <li>• Reemplazar si hay rayones profundos</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <p className="text-sm text-green-900">
                              <CheckCircle className="h-4 w-4 inline mr-2" />
                              <b>Un cuidado adecuado</b> no solo protege tu inversión, sino que garantiza que tus lentes te protejan 
                              eficazmente día tras día.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ❓ Preguntas Frecuentes
                      </span>
                    </motion.h2>

                    <div className="space-y-4 max-w-4xl mx-auto">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          className="border border-gray-200 rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.01 }}
                        >
                          <button
                            onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                            className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-cyan-50 hover:from-cyan-50 hover:to-blue-50 transition-all flex items-center justify-between gap-4"
                          >
                            <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {expandedFAQ === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="p-3 sm:p-4 md:p-6 bg-white text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Conclusión */}
                  <section id="conclusion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        🎯 Conclusión: Invierte en Tu Visión
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Eye className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                            Invertir en tu visión es una de las <b className="text-green-700">decisiones más inteligentes que puedes tomar</b>, 
                            y como hemos visto, la tecnología actual hace que proteger tus ojos sea más fácil y efectivo que nunca. No hay 
                            razón para conformarse con menos que una protección certificada, cómoda y adaptada a tus necesidades.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 sm:p-4 md:p-6 mt-8">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <Sparkles className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Opción Más Innovadora</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Hexarmor VS250 Fotocromáticos</b> - Adaptabilidad inigualable para cualquier entorno con tecnología de punta.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Star className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Relación Calidad-Precio</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Kleenguard Nemesis V30</b> - El favorito del mercado con diseño que conquista por su estilo y protección certificada.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-cyan-200">
                          <div className="text-center mb-4">
                            <Shield className="h-10 w-10 mx-auto text-cyan-600 mb-2" />
                            <h3 className="text-lg font-bold text-cyan-900">Mejor Tecnología</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>3M SecureFit Serie 400</b> - Ergonomía revolucionaria y el mejor recubrimiento antiempañante del mercado.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Tu Visión, Tu Futuro</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Tus ojos son <b>irreemplazables</b>. No hay segundas oportunidades cuando se trata de lesiones oculares. Proteger tu 
                        visión hoy con tecnología de vanguardia es proteger tu capacidad de trabajar, conducir, leer y disfrutar de la vida mañana.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        👁️ Protege tus ojos hoy con la tecnología del mañana 👁️
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál de estos lentes innovadores elegirás? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        👓 Ve con claridad, trabaja con seguridad 👓
                      </p>
                    </motion.div>
                  </section>

                  {/* Artículos Relacionados */}
                  <section id="articulos-relacionados" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        📚 Artículos Relacionados que Te Pueden Interesar
                      </span>
                    </motion.h2>
                    <RelatedArticles articles={relatedArticles} />
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