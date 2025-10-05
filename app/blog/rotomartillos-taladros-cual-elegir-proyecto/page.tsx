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
  Zap,
  Hammer,
  Construction,
  Wrench,
  Battery,
  Power,
  Gauge,
  Settings,
  TrendingUp,
  Info,
  ChevronDown,
  Package,
  ThermometerSun,
  FlameKindling
} from 'lucide-react';
import { useState } from 'react';

export default function RotomartillosTaladrosArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<'taladro' | 'percutor' | 'rotomartillo'>('percutor');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'dewalt-dcd7781',
      name: 'DeWalt DCD7781D2-B3',
      rating: 4.8,
      reviewCount: 381,
      isRecommended: true,
      bestFor: 'Mejor Taladro Inalámbrico Versátil',
      amazonLink: 'https://www.mercadolibre.com.mx/juego-de-taladro-percutor-atornillador-de-12-brushless-20v-max-dewalt-dcd7781d2/p/MLM18373456'
    },
    {
      id: 'truper-roto',
      name: 'Truper ROTO-1/2A8',
      rating: 4.8,
      reviewCount: 5027,
      isRecommended: false,
      bestFor: 'Mejor Calidad-Precio con Cable',
      amazonLink: 'https://www.mercadolibre.com.mx/rotomartillo-truper-roto-12a8-750w-220v-naranja-y-negro/p/MLM15160653'
    },
    {
      id: 'dewalt-dch133',
      name: 'DeWalt DCH133M2',
      rating: 4.8,
      reviewCount: 130,
      isRecommended: true,
      bestFor: 'Mejor Rotomartillo SDS Plus',
      amazonLink: 'https://www.mercadolibre.com.mx/rotomartillo-electroneumatico-dewalt-dch133m2-b2-inalambrico-amarillo-y-negro-con-16kw-de-potencia/p/MLM44712352'
    }
  ];

  const comparisonFeatures = [
    { name: 'Tipo de Herramienta', product1: 'Taladro-Rotomartillo', product2: 'Rotomartillo', product3: 'Rotomartillo SDS Plus' },
    { name: 'Fuente de Poder', product1: 'Inalámbrico (20V MAX)', product2: 'Con Cable (750W)', product3: 'Inalámbrico (20V MAX)' },
    { name: 'Motor Brushless', product1: true, product2: false, product3: true },
    { name: 'Función de Percusión', product1: 'Sí (Mecánica)', product2: 'Sí (Mecánica)', product3: 'Sí (Electroneumática)' },
    { name: 'Uso Principal', product1: 'Madera, Metal, Ladrillo', product2: 'Ladrillo, Concreto ligero', product3: 'Concreto, Losa, Cincelado' },
    { name: 'Energía de Impacto', product1: 'N/A', product2: 'N/A', product3: '2.6 Joules' },
    { name: 'Ideal Para', product1: 'Hogar y DIY', product2: 'Uso Rudo Económico', product3: 'Profesional Concreto' },
    { name: 'Disponibilidad', product1: 'Mercado Libre', product2: 'Mercado Libre', product3: 'Mercado Libre' }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
      title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
      excerpt: 'Guía completa y comparativa de los chalecos mejor calificados para trabajo.',
      description: 'Guía completa y comparativa de los chalecos mejor calificados para trabajo.',
      category: 'EPP',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      image: '/images/chalecos-seguridad.jpg',
      slug: 'mejores-chalecos-seguridad-2025'
    },
    {
      id: '2',
      title: 'Los Mejores Botiquines de Emergencia para el Trabajo',
      excerpt: 'Guía completa de normativas, productos y mejores prácticas en México.',
      description: 'Guía completa de normativas, productos y mejores prácticas en México.',
      category: 'Seguridad',
      publishDate: '2 Oct 2025',
      readTime: '20 min',
      image: '/images/botiquines.jpg',
      slug: 'mejores-botiquines-emergencia-trabajo'
    },
    {
      id: '3',
      title: 'Top 7 Kits de Herramientas 2025',
      excerpt: 'La guía definitiva para elegir el kit perfecto de herramientas.',
      description: 'La guía definitiva para elegir el kit perfecto de herramientas.',
      category: 'Herramientas',
      publishDate: '30 Ago 2025',
      readTime: '18 min',
      image: '/images/kits-herramientas.jpg',
      slug: 'top-7-kits-herramientas-2025'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Cuál es la diferencia real entre un taladro percutor y un rotomartillo?',
      answer: 'La diferencia fundamental reside en el mecanismo que genera el golpeteo. Un taladro percutor utiliza un sistema mecánico de dos discos estriados que, al rozar, producen una vibración de alta frecuencia pero bajo impacto, adecuada para materiales como el ladrillo hueco. En cambio, un rotomartillo emplea un sistema electroneumático, donde un pistón comprime aire para impulsar un martillo con gran fuerza, generando golpes más lentos pero inmensamente más potentes, diseñados específicamente para fracturar materiales duros como el concreto.'
    },
    {
      question: '¿Puedo usar un rotomartillo como si fuera un taladro normal?',
      answer: 'Sí. Prácticamente todos los rotomartillos modernos cuentan con un selector de modo que permite desactivar la función de percusión y utilizarlos exclusivamente en modo de rotación. Esto los hace perfectamente capaces de perforar materiales como madera, metal o plástico, siempre y cuando se utilice la broca adecuada para cada material. Esta versatilidad es una de sus mayores ventajas.'
    },
    {
      question: '¿Qué significa que un motor sea "brushless" o sin carbones?',
      answer: 'Un motor "brushless" o sin escobillas es una tecnología de motor avanzada que no utiliza las tradicionales escobillas de carbón, que son piezas de desgaste por fricción. En su lugar, emplea un controlador electrónico para gestionar el flujo de energía. Esto se traduce en múltiples beneficios: es más eficiente (la batería dura más), genera más potencia y torque, produce menos calor, es más compacto y tiene una vida útil mucho más larga al no tener piezas que necesiten reemplazo periódico.'
    },
    {
      question: 'En una batería, ¿qué es más importante: el Voltaje (V) o los Amperios-hora (Ah)?',
      answer: 'Ambos son igualmente importantes porque miden aspectos diferentes del rendimiento. El Voltaje (V) se puede comparar con la "potencia" del motor de un coche; determina la fuerza máxima que la herramienta puede generar. Los Amperios-hora (Ah) son como el "tamaño del tanque de gasolina"; determinan la autonomía o cuánto tiempo puede funcionar la herramienta con una sola carga. En resumen: el Voltaje proporciona la fuerza para hacer el trabajo, mientras que los Amperios-hora proporcionan el tiempo para terminarlo.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema herramientas/construcción */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${25 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Iconos de herramientas flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`tool-${i}`}
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
                {i % 4 === 0 ? <Hammer className="w-6 h-6" /> : 
                 i % 4 === 1 ? <Wrench className="w-6 h-6" /> : 
                 i % 4 === 2 ? <Construction className="w-6 h-6" /> :
                 <Power className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de energía (40 ondas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute border-2 border-yellow-400 rounded-full opacity-30"
                style={{
                  width: 70,
                  height: 70,
                  left: `${(i * 5.5) % 100}%`,
                  top: `${(i * 7.5) % 100}%`,
                }}
                animate={{
                  scale: [0, 3.5, 0],
                  opacity: [0.6, 0, 0.4]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
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
                className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-2 text-orange-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Hammer className="h-4 w-4" />
                🔧 Herramientas Eléctricas
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Rotomartillos vs. Taladros: Guía Completa México 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Todo lo que necesitas saber para elegir la herramienta correcta para cada trabajo
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  4 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  25 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden min-h-screen">
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
                  background: `hsl(${30 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                      className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-8 border-orange-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-3">⚠️ La Herramienta Incorrecta = Frustración Garantizada</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            ¿Estás por colgar una repisa, armar un mueble o remodelar por completo un muro? 
                            <strong className="text-orange-600"> La elección entre un taladro y un rotomartillo puede parecer confusa</strong>, 
                            pero es la decisión que definirá el éxito o la frustración de tu proyecto. Usar la herramienta incorrecta no solo 
                            te hará perder tiempo y esfuerzo, sino que <b className="bg-orange-100 px-2 py-1 rounded">puede dañar la pared y tu propia máquina</b>.
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
                      Aunque visualmente similares, estas herramientas operan bajo <b>principios fundamentalmente distintos</b> que 
                      determinan su eficacia en diferentes materiales. Comprender estas diferencias no solo garantiza un trabajo bien hecho, 
                      sino que también previene daños costosos a la herramienta y al material de trabajo.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Construction className="h-8 w-8 text-blue-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Tu Guía Definitiva para 2025</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        En esta guía definitiva para 2025, desglosamos <b>todo lo que necesitas saber para elegir la herramienta perfecta</b> 
                        para cada trabajo en el contexto mexicano, asegurando que tu próxima compra sea una inversión inteligente.
                      </p>
                    </motion.div>
                  </section>

                  {/* Mecanismo de Acción */}
                  <section id="mecanismo-accion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🔬 Mecanismo de Acción: El Corazón de la Herramienta
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La distinción más importante radica en <b className="text-orange-600">cómo cada herramienta aplica la fuerza</b>. 
                      Este es el factor que determina para qué materiales es efectiva cada una.
                    </motion.p>

                    {/* Selector de tipo de herramienta */}
                    <div className="flex justify-center gap-4 mb-4 sm:mb-6 md:mb-8">
                      <motion.button
                        onClick={() => setSelectedTool('taladro')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedTool === 'taladro'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Taladro Simple
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedTool('percutor')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedTool === 'percutor'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Taladro Percutor
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedTool('rotomartillo')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedTool === 'rotomartillo'
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        Rotomartillo
                      </motion.button>
                    </div>

                    {/* Contenido según herramienta seleccionada */}
                    <AnimatePresence mode="wait">
                      {selectedTool === 'taladro' && (
                        <motion.div
                          key="taladro"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300"
                        >
                          <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            Taladro-Atornillador (Rotación Simple)
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg mb-4">
                            <p className="text-gray-700 mb-4">
                              Su función principal es <b className="text-green-700">la rotación</b>. Un motor eléctrico hace girar un mandril 
                              (portabrocas) para perforar materiales relativamente blandos como madera, plástico y metal, o para insertar y 
                              remover tornillos.
                            </p>
                            <p className="text-gray-700">
                              Todo su mecanismo interno está optimizado para transferir la fuerza de giro, conocida como <b>torque</b>, 
                              de la manera más eficiente posible.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-100 p-4 rounded-lg">
                              <h5 className="font-bold text-green-800 mb-2">✓ Materiales Ideales:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Madera y plásticos</li>
                                <li>• Metal (láminas y perfiles)</li>
                                <li>• Atornillado de todo tipo</li>
                              </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                              <h5 className="font-bold text-red-800 mb-2">✗ NO usar en:</h5>
                              <ul className="text-sm text-red-700 space-y-1">
                                <li>• Concreto o losa</li>
                                <li>• Mampostería densa</li>
                                <li>• Piedra</li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedTool === 'percutor' && (
                        <motion.div
                          key="percutor"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300"
                        >
                          <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Power className="h-6 w-6" />
                            Taladro Percutor (Rotación + Percusión Mecánica)
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg mb-4">
                            <p className="text-gray-700 mb-4">
                              Además de girar, añade un <b className="text-blue-700">movimiento de golpeteo hacia adelante</b>. Este efecto 
                              se logra a través de un mecanismo de embrague, usualmente compuesto por dos discos metálicos con crestas o estrías.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-blue-900 font-semibold mb-2">📊 Características Técnicas:</p>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Frecuencia: Más de <b>30,000 GPM</b> (Golpes por Minuto)</li>
                                <li>• Impacto: Alta frecuencia pero <b>baja energía</b></li>
                                <li>• Depende de la <b>presión del usuario</b></li>
                              </ul>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-100 p-4 rounded-lg">
                              <h5 className="font-bold text-blue-800 mb-2">✓ Materiales Ideales:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Ladrillo hueco</li>
                                <li>• Tabique rojo</li>
                                <li>• Block ligero</li>
                                <li>• Muros de yeso</li>
                              </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                              <h5 className="font-bold text-red-800 mb-2">✗ NO usar en:</h5>
                              <ul className="text-sm text-red-700 space-y-1">
                                <li>• Concreto denso o losa</li>
                                <li>• Piedra</li>
                                <li>• Hormigón armado</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-sm text-yellow-900">
                              <AlertTriangle className="h-4 w-4 inline mr-2" />
                              <b>Nota importante:</b> Esta es la función que se encuentra en la mayoría de los taladros multipropósito para el hogar.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedTool === 'rotomartillo' && (
                        <motion.div
                          key="rotomartillo"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300"
                        >
                          <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                            <FlameKindling className="h-6 w-6" />
                            Rotomartillo (Rotación + Percusión Electroneumática)
                          </h4>
                          
                          <div className="bg-gradient-to-r from-red-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-lg mb-4 border-2 border-red-400">
                            <p className="text-red-900 font-bold mb-3 text-lg">🏆 Esta es la tecnología superior para materiales duros y densos</p>
                            <p className="text-gray-700">
                              En lugar de discos mecánicos, utiliza un <b className="text-red-700">sistema con un pistón que comprime aire</b> 
                              dentro de un cilindro. Esta presión de aire impulsa con gran fuerza un martillo interno, que a su vez golpea el 
                              mecanismo del portabrocas.
                            </p>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg mb-4">
                            <h5 className="font-bold text-red-800 mb-3">⚡ Ventajas del Sistema Electroneumático:</h5>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Golpes <b>mucho más contundentes y potentes</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Frecuencia menor pero <b>mayor energía de impacto</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>La herramienta realiza la mayor parte del trabajo de fractura del material</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Requiere <b>esfuerzo mínimo</b> por parte del operador</span>
                              </li>
                            </ul>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-100 p-4 rounded-lg">
                              <h5 className="font-bold text-red-800 mb-2">✓ Materiales Ideales:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <b>Concreto y losa</b></li>
                                <li>• Hormigón armado</li>
                                <li>• Piedra</li>
                                <li>• Mampostería densa</li>
                              </ul>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                              <h5 className="font-bold text-green-800 mb-2">✓ Funciones Adicionales:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Modo "solo cincelado"</li>
                                <li>• Demolición ligera</li>
                                <li>• Remover azulejos</li>
                                <li>• Crear canaletas</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-4 bg-gradient-to-r from-yellow-100 to-amber-100 p-4 rounded-lg border-2 border-yellow-400">
                            <p className="text-yellow-900 font-bold text-center">
                              💡 Los modelos avanzados con encastre SDS incluyen modo de solo cincelado para demolición ligera
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Regla clara */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">🎯 Regla de Oro</h3>
                      </div>
                      <div className="bg-white/20 p-3 sm:p-4 md:p-6 rounded-xl backdrop-blur-sm">
                        <p className="text-xl font-bold mb-4 text-center">
                          Para madera y tabique = Taladro percutor es suficiente
                        </p>
                        <p className="text-xl font-bold text-center">
                          Para concreto y losa = Rotomartillo es INDISPENSABLE
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Fuente de Poder y Tecnología */}
                  <section id="fuente-poder" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        🔋 Fuente de Poder y Tecnología de Motor
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* Con Cable vs. Inalámbrico */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-blue-200"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                          <Battery className="h-8 w-8" />
                          Con Cable vs. Inalámbrico
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <Power className="h-5 w-5" />
                              Con Cable
                            </h4>
                            <div className="space-y-3 mb-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Fuente de poder <b>constante e ininterrumpida</b></span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Ideales para <b>trabajos largos y demandantes</b></span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Más potencia y torque por <b>menor precio</b></span>
                              </div>
                            </div>
                            <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                              <p className="text-sm text-red-800">
                                <AlertTriangle className="h-4 w-4 inline mr-2" />
                                Movilidad restringida por longitud del cable
                              </p>
                            </div>
                          </div>

                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <Battery className="h-5 w-5" />
                              Inalámbrico
                            </h4>
                            <div className="space-y-3 mb-4">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><b>Portabilidad total</b> sin restricciones</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Modelos modernos <b>extremadamente potentes</b></span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Opción preferida para <b>instalación y reparaciones</b></span>
                              </div>
                            </div>
                            <div className="bg-green-100 p-3 rounded-lg">
                              <p className="text-sm text-green-900 font-semibold">
                                💡 Gracias a avances en baterías, rivalizan con herramientas con cable
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Motores Brushed vs. Brushless */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-purple-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                          <Settings className="h-8 w-8" />
                          Motores con Carbones vs. Sin Carbones (Brushless)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-300">
                            <h4 className="font-bold text-gray-800 mb-4">⚙️ Con Carbones (Brushed)</h4>
                            <p className="text-sm text-gray-700 mb-3">
                              Tecnología tradicional que utiliza <b>pequeñas escobillas de carbón</b> para transmitir electricidad a las 
                              partes giratorias del motor.
                            </p>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <h5 className="font-semibold text-red-800 mb-2">Desventajas:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Generan fricción y calor</li>
                                <li>• Menor eficiencia energética</li>
                                <li>• Desgaste que requiere reemplazo</li>
                                <li>• Necesita mantenimiento</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-400">
                            <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                              <Zap className="h-5 w-5" />
                              Sin Escobillas (Brushless) 🏆
                            </h4>
                            <p className="text-sm text-gray-700 mb-3">
                              Tecnología moderna que utiliza un <b>controlador electrónico</b> para gestionar el motor, 
                              eliminando el contacto físico y la fricción.
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                              <h5 className="font-semibold text-purple-800 mb-2">Beneficios Significativos:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• ✓ <b>Mayor eficiencia energética</b></li>
                                <li>• ✓ Más potencia y torque</li>
                                <li>• ✓ Menor generación de calor</li>
                                <li>• ✓ Vida útil considerablemente más larga</li>
                                <li>• ✓ Prácticamente <b>cero mantenimiento</b></li>
                              </ul>
                            </div>
                            <div className="mt-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600">
                              <p className="text-sm text-purple-900 font-bold">
                                💰 Aunque el costo inicial es mayor, representa una inversión más inteligente a largo plazo
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Especificaciones Técnicas */}
                  <section id="especificaciones" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        📊 Potencia y Especificaciones Técnicas
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Entender los números te ayudará a <b className="text-green-600">elegir la herramienta correcta</b> para tus necesidades específicas.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {/* Velocidad (RPM) */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border-2 border-green-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Gauge className="h-8 w-8 text-green-600" />
                          <h3 className="text-xl font-bold text-green-900">Velocidad (RPM)</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Indica cuán rápido gira el mandril. <b className="text-green-700">Revoluciones por Minuto</b>.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-green-900 font-semibold mb-2">⚡ Velocidades Altas:</p>
                            <p className="text-sm text-gray-700">Ideales para perforar materiales blandos como la madera.</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-900 font-semibold mb-2">🐢 Velocidades Bajas + Alto Torque:</p>
                            <p className="text-sm text-gray-700">Mejores para perforar metal o atornillar con precisión.</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Tasa de Impacto (GPM) */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border-2 border-blue-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Hammer className="h-8 w-8 text-blue-600" />
                          <h3 className="text-xl font-bold text-blue-900">Tasa de Impacto (GPM/BPM)</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Mide la frecuencia del martilleo en modo de percusión. <b className="text-blue-700">Golpes por Minuto</b>.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-900 font-semibold mb-2">📈 Número Alto (ej. 30,000 GPM):</p>
                            <p className="text-sm text-gray-700">Característico de taladros percutores - vibraciones rápidas pero ligeras.</p>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <p className="text-sm text-red-900 font-semibold mb-2">💥 GPM Menor + Mayor Energía:</p>
                            <p className="text-sm text-gray-700">Rotomartillos tienen menos GPM pero <b>cada golpe tiene más energía (Joules)</b>.</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Torque (Nm) */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border-2 border-purple-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Wrench className="h-8 w-8 text-purple-600" />
                          <h3 className="text-xl font-bold text-purple-900">Torque (Nm)</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Es la <b className="text-purple-700">fuerza de rotación o torsión</b>. Newton-metro.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <p className="text-sm text-purple-900 font-semibold mb-2">🔧 Torque Alto:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Atornillar tornillos grandes en materiales duros</li>
                              <li>• Usar brocas de gran diámetro</li>
                              <li>• Brocas de paleta o sierras de corona</li>
                            </ul>
                          </div>
                          <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
                            <p className="text-sm text-purple-900 font-bold">
                              💡 Recomendación: Para uso general versátil, superior a 40 Nm
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Baterías */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border-2 border-orange-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Battery className="h-8 w-8 text-orange-600" />
                          <h3 className="text-xl font-bold text-orange-900">Baterías (Herramientas Inalámbricas)</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <p className="text-sm text-orange-900 font-semibold mb-2">⚡ Voltaje (V):</p>
                            <p className="text-sm text-gray-700 mb-2">
                              Representa la "potencia" general del sistema. A mayor voltaje, mayor capacidad para trabajos pesados.
                            </p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="text-sm text-orange-800 font-semibold">
                                Estándar actual: 18V o 20V MAX* para alto rendimiento
                              </p>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-900 font-semibold mb-2">🔋 Amperios-hora (Ah):</p>
                            <p className="text-sm text-gray-700 mb-2">
                              Mide la capacidad de la batería. Como el "tamaño del tanque de gasolina".
                            </p>
                            <div className="bg-white p-3 rounded-lg">
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• 2.0Ah: Mínimo recomendado para uso regular</li>
                                <li>• 4.0Ah - 5.0Ah: Uso profesional o jornadas largas</li>
                                <li>• Mayor Ah = Mayor tiempo de funcionamiento</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 6 Productos */}
                  <section id="productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Productos Destacados en el Mercado Mexicano
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-lg text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      El mercado mexicano muestra una clara segmentación: marcas internacionales reconocidas por rendimiento profesional 
                      y marcas locales con excelente relación calidad-precio y amplia distribución.
                    </motion.p>

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
                            a la información disponible en Mercado Libre al momento de la publicación (4 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - DeWalt DCD7781D2-B3 */}
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
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MEJOR VERSÁTIL INALÁMBRICO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          DeWalt DCD7781D2-B3: El Mejor Taladro-Rotomartillo Inalámbrico para el Hogar
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(381+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Usuario doméstico avanzado o semi-profesional, Proyectos DIY
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este modelo de DeWalt es la opción ideal para el usuario doméstico avanzado o semi-profesional que busca una 
                          herramienta <b className="text-yellow-700">"todo en uno"</b>. Su motor brushless de 20V MAX* ofrece una excelente 
                          combinación de potencia, eficiencia y durabilidad. Es lo suficientemente compacto para trabajar en espacios reducidos, 
                          pero su función de percusión mecánica le permite enfrentar tareas en <b className="bg-yellow-100 px-2 py-1 rounded">
                          mampostería ligera como ladrillo</b>, haciéndolo extremadamente versátil.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Motor Brushless que extiende tiempo de uso y vida útil</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Muy versátil: taladro, atornillador y percutor</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Excelente ergonomía y diseño compacto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Altas calificaciones - fiabilidad comprobada</span>
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
                                <span>Percusión mecánica NO apta para concreto denso/losas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Inversión inicial mayor vs. opciones con cable</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/juego-de-taladro-percutor-atornillador-de-12-brushless-20v-max-dewalt-dcd7781d2/p/MLM18373456"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Bosch GSB 18V-50 */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            PROFESIONAL INALÁMBRICO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Bosch GSB 18V-50 Professional: Rotomartillo Inalámbrico de Alto Rendimiento
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(100+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Uso Intensivo Profesional, Trabajo Diario
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Perteneciente a la línea azul <b className="text-blue-700">"Heavy Duty"</b> de Bosch, este taladro-rotomartillo 
                          está diseñado para el rigor del trabajo diario. Su motor brushless de 18V entrega un potente torque de 
                          <b className="bg-blue-100 px-2 py-1 rounded"> 50 Nm</b>, ideal para perforaciones exigentes en madera, metal y 
                          mampostería. Es una herramienta robusta, fiable y con el respaldo de una de las marcas líderes para profesionales.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción Heavy Duty para durabilidad profesional</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Motor Brushless potente que optimiza batería</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mandril metálico de apriete rápido</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Ecosistema compatible de 18V Bosch Professional</span>
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
                                <span>Precio elevado - enfocado en mercado profesional</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Percusión mecánica, no para concreto pesado</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/taladro-rotomartillo-bosch-gsb-18v-50-professional-inalambrico-18v-azul-220v/p/MLM25024759"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Truper ROTO-1/2A8 */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥉 #3
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            MEJOR CALIDAD-PRECIO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Truper ROTO-1/2A8: La Mejor Opción Calidad-Precio para Uso Rudo (con Cable)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(5,027+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Trabajos domésticos exigentes, Profesionales con presupuesto ajustado
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            🏆 Fenómeno de Ventas en México
                          </h4>
                          <p className="text-gray-700">
                            Este rotomartillo de Truper es un <b className="text-yellow-700">fenómeno de ventas</b> en México, y con razón. 
                            Su <b>masiva popularidad y altas calificaciones</b> son un testimonio de su valor en el mercado local.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Ofrece una potencia considerable de <b className="text-green-700">750W</b> y un rendimiento sólido a un precio 
                          sumamente accesible. Es la herramienta perfecta para trabajos domésticos exigentes y para profesionales que necesitan 
                          una máquina de batalla confiable para <b className="bg-green-100 px-2 py-1 rounded">perforar concreto ligero y ladrillo</b> 
                          sin realizar una gran inversión.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Extraordinaria relación potencia-precio (750W)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Volumen masivo de ventas y calificaciones</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Incluye mango auxiliar y guía de profundidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Respaldado por red de servicio Truper en todo México</span>
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
                                <span>Herramienta con cable - movilidad limitada</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No tiene ergonomía/acabados de marcas premium</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/rotomartillo-truper-roto-12a8-750w-220v-naranja-y-negro/p/MLM15160653"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Makita HP1630 */}
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
                            ESTÁNDAR PROFESIONAL
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Makita HP1630: El Estándar Profesional para Trabajo Ligero (con Cable)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(866+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Instaladores, Electricistas, Técnicos profesionales
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El Makita HP1630 es un <b className="text-purple-700">clásico en el arsenal de cualquier profesional</b>. Con 710W 
                          de potencia, es una herramienta notablemente ligera, duradera y precisa. Es la elección preferida de innumerables 
                          instaladores, electricistas y técnicos por su <b className="bg-purple-100 px-2 py-1 rounded">fiabilidad japonesa</b> 
                          y su capacidad para operar durante largas jornadas sin sobrecalentarse.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-purple-200">
                            <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Calidad de construcción y durabilidad legendarias</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño ligero y ergonómico - reduce fatiga</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Motor eficiente con rendimiento constante</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Extremadamente popular entre profesionales</span>
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
                                <span>Menos potente que otras opciones en su rango</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mandril requiere llave (menos conveniente)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/taladro-percutor-makita-hp1630-710w-220v-azul/p/MLM8390439"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Milwaukee M18 FUEL */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-red-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-red-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🚀 #5
                          </Badge>
                          <Badge className="bg-red-100 text-red-800 px-4 py-2 font-bold">
                            MEJOR KIT COMBO PREMIUM
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Milwaukee M18 FUEL 2-Tool Combo Kit: Para Profesionales Exigentes
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(410+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Profesionales que dependen de sus herramientas para su sustento
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-yellow-900 mb-2">🏆 La Cúspide de la Tecnología</h4>
                          <p className="text-gray-700">
                            Este kit de Milwaukee representa la <b className="text-red-700">cúspide de la tecnología</b> en herramientas 
                            inalámbricas. Incluye un taladro-rotomartillo y un atornillador de impacto, ambos equipados con la tecnología 
                            M18 FUEL que garantiza una potencia y un rendimiento extremos.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Una característica destacada es su función de seguridad <b className="bg-red-100 px-2 py-1 rounded">AutoStop™</b>, 
                          que detiene la herramienta para prevenir el exceso de rotación en caso de atasco. Es el paquete definitivo para 
                          profesionales que no aceptan concesiones en rendimiento o seguridad.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Potencia y rendimiento líderes en la industria</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Incluye 2 herramientas especializadas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Tecnología de seguridad AutoStop™</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Ecosistema robusto M18 de Milwaukee</span>
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
                                <span>Inversión inicial más alta de la lista</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Potencia excesiva para usuario doméstico</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/milwaukee-m18-fuel-combo"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - DeWalt DCH133M2 */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-orange-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-orange-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💪 #6
                          </Badge>
                          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 font-bold">
                            MEJOR ROTOMARTILLO SDS
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          DeWalt DCH133M2: El Mejor Rotomartillo SDS Plus Inalámbrico para Concreto
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(130+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl mb-6">
                          <p className="text-orange-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Instaladores profesionales, Trabajo en concreto, Zonas sin acceso eléctrico
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-4 border-red-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                            <FlameKindling className="h-6 w-6" />
                            🔨 Cuando el Trabajo Real es Perforar Concreto
                          </h4>
                          <p className="text-gray-700">
                            Cuando el trabajo real es perforar concreto, se necesita un rotomartillo con sistema SDS Plus. Este modelo inalámbrico 
                            de DeWalt ofrece <b className="text-red-700">2.6 Joules de energía de impacto</b> gracias a su mecanismo electroneumático, 
                            combinado con la total libertad de una batería de 20V MAX*.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Es la herramienta ideal para instaladores que necesitan hacer anclajes, pasar tuberías y realizar pequeñas demoliciones 
                          donde un taladro percutor convencional <b className="bg-orange-100 px-2 py-1 rounded">simplemente no es una opción viable</b>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-orange-200">
                            <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mecanismo electroneumático real para concreto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Motor Brushless - máxima autonomía y durabilidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>3 modos: taladro, rotomartillo y cincelado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Portabilidad total para trabajo en campo</span>
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
                                <span>Inversión significativamente mayor que con cable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Duración de batería limitante en cincelado continuo</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/rotomartillo-electroneumatico-dewalt-dch133m2-b2-inalambrico-amarillo-y-negro-con-16kw-de-potencia/p/MLM44712352"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
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
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                        📊 Comparación Detallada: Top 3 Cara a Cara
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Comparativo: Las 3 Mejores Opciones"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />
                  </section>

                  {/* Guía de Compra Rápida */}
                  <section id="guia-compra" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🛒 Guía de Compra Rápida: 3 Consejos Clave
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* Consejo 1 */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-red-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-3">La Regla del Concreto</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Si el proyecto principal implica perforar <b className="text-red-700">concreto, losas, piedra o cualquier tipo de hormigón</b>, 
                              la elección es simple: <b className="bg-red-100 px-2 py-1 rounded">se necesita un rotomartillo</b>.
                            </p>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <p className="text-red-800 font-semibold">
                                ⚡ Para trabajos frecuentes o exigentes, un modelo con mecanismo electroneumático (SDS) es la única opción viable. 
                                Un taladro percutor servirá para ladrillo hueco, pero sufrirá en concreto denso.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Consejo 2 */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            2
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3">Pensar en el Ecosistema</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Al elegir una herramienta inalámbrica, no se está comprando solo un taladro, sino una <b className="text-blue-700">entrada 
                              a un sistema de baterías</b> de una marca específica (DeWalt 20V MAX*, Makita 18V LXT, Milwaukee M18, etc.).
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-blue-800 font-semibold">
                                💡 Es estratégico investigar qué otras herramientas de esa plataforma podrían ser útiles en el futuro. 
                                A largo plazo, resulta mucho más económico adquirir herramientas adicionales "sin batería ni cargador".
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Consejo 3 */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            3
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-3">El Cable Sigue Siendo Rey para Potencia Continua</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Para trabajos estacionarios en un taller o para tareas de demolición prolongadas que demandan energía constante, 
                              una herramienta con cable sigue ofreciendo la <b className="text-green-700">mejor relación potencia-precio</b>.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-green-800 font-semibold">
                                ✓ Nunca se quedará sin batería a mitad de una tarea crítica y suele ser la opción más robusta y económica 
                                para el trabajo pesado y continuo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-6 text-center">
                          ❌ 3 Errores Comunes a Evitar
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                            <h4 className="font-bold text-red-900 mb-2">1. Usar un Taladro Normal para Perforar Muros</h4>
                            <p className="text-gray-700">
                              Es el error más frecuente y costoso. Intentar perforar mampostería o concreto sin activar la función de percusión 
                              sobrecalentará el motor, desgastará la broca inútilmente y no logrará avanzar en el material.
                            </p>
                          </div>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-900 mb-2">2. Usar el Modo Percutor en Madera, Metal o Azulejos</h4>
                            <p className="text-gray-700">
                              Activar el martilleo en estos materiales es contraproducente y dañino. En madera, astilla y rompe las fibras. 
                              En metal, desafila y destruye la broca. En azulejos, es casi garantía de que se agrietarán.
                            </p>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
                            <h4 className="font-bold text-yellow-900 mb-2">3. Comprar por Voltaje sin Considerar los Ah</h4>
                            <p className="text-gray-700">
                              En herramientas inalámbricas, elegir un kit económico con baterías de bajo amperaje (ej. 1.5Ah) para trabajos que 
                              requieren autonomía causará interrupciones y frustración. Para uso regular, busca baterías de 2.0Ah mínimo, 
                              y 4.0Ah-5.0Ah para uso profesional.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                          <Settings className="h-8 w-8" />
                          🔧 Mantenimiento Básico
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Para asegurar que la inversión dure muchos años, un mantenimiento básico es fundamental. Después de cada uso, 
                          especialmente en construcción, <b className="text-purple-700">limpia el polvo de las rejillas de ventilación</b> 
                          usando aire comprimido o un cepillo suave. Un motor que no puede ventilarse se sobrecalentará y sufrirá desgaste prematuro.
                        </p>
                        <div className="mt-4 bg-white p-4 rounded-lg">
                          <p className="text-purple-800 font-semibold">
                            🔋 Para modelos inalámbricos: Evita descargas completas prolongadas, no expongas las baterías a calor extremo, 
                            y almacénalas en un lugar fresco y seco para maximizar su vida útil.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
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
                            className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-orange-50 hover:from-orange-50 hover:to-amber-50 transition-all flex items-center justify-between gap-4"
                          >
                            <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-orange-600 flex-shrink-0" />
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
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        🎯 Conclusión: Elige Inteligente, Trabaja Inteligente
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Construction className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            En resumen, la decisión se reduce a una simple regla: si tu mundo es la madera, el metal y el tabique, 
                            un buen taladro-atornillador es tu mejor aliado. Pero si el concreto, la losa o el ladrillo macizo son tu desafío, 
                            <b className="text-green-700"> un rotomartillo es innegociable</b>.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Para la gran mayoría de los hogares y proyectos de fin de semana, nuestra recomendación como la mejor opción 
                            versátil es el <b className="bg-green-200 px-2 py-1 rounded">DeWalt DCD7781D2-B3</b>, por su balance entre potencia 
                            inalámbrica y funcionalidad.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 mt-8">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Versátil</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>DeWalt DCD7781D2-B3</b> - Balance perfecto entre potencia, funcionalidad y portabilidad inalámbrica.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Package className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Valor</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Truper ROTO-1/2A8</b> - Campeón indiscutible en calidad-precio para trabajos pesados con cable.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <FlameKindling className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor para Concreto</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>DeWalt DCH133M2</b> - Rotomartillo SDS Plus inalámbrico para profesionales del concreto.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Elige Sabiamente, Trabaja Inteligente</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Para quienes enfrentan trabajos más pesados y buscan la máxima potencia por su dinero, el mercado ofrece opciones 
                        excepcionales que combinan seguridad, precisión y durabilidad sin comprometer el presupuesto.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🔧 Transforma tus proyectos de "trabajo duro" a "trabajo inteligente" 🔧
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál será tu compañero de trabajo perfecto? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        🔨 Equípate bien, trabaja con precisión, construye con confianza 🔨
                      </p>
                    </motion.div>
                  </section>

                  {/* Artículos Relacionados */}
                  <section id="articulos-relacionados" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
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