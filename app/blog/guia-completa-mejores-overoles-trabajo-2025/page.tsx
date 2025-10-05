'use client';

import { motion, AnimatePresence } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import ProductComparison from '@/components/blog/ProductComparison';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  AlertTriangle, 
  Package,
  Shirt,
  Briefcase,
  AlertCircle,
  Info,
  ChevronDown,
  ExternalLink,
  ShoppingCart,
  Flame,
  Eye,
  Droplets,
  Zap,
  Wind,
  HelpCircle,
  FileText,
  TrendingUp,
  Layers
} from 'lucide-react';
import { useState } from 'react';

export default function OverolesTrabajoArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<'algodon' | 'poliester' | 'especializado'>('algodon');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'red-kap-ct10',
      name: 'Red Kap CT10 Twill',
      rating: 4.9,
      reviewCount: 150,
      isRecommended: true,
      bestFor: 'Profesional Premium',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-852643194-red-kap-ct10-overol-trabajo-manga-larga-mecanico-industrial-_JM'
    },
    {
      id: 'dickies-peto',
      name: 'Dickies Peto Mezclilla',
      rating: 4.8,
      reviewCount: 200,
      isRecommended: true,
      bestFor: 'Uso Rudo Clásico',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-1358999335-overol-peto-dickies-8329-mezclilla-uso-rudo-resistente-_JM'
    },
    {
      id: 'guigua-taller',
      name: 'GUIGUA Mono Reparación',
      rating: 4.6,
      reviewCount: 450,
      isRecommended: false,
      bestFor: 'Mejor Precio',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-3632338520-mono-de-mecanico-de-reparacion-trajes-de-trabajo-uniformes-_JM'
    }
  ];

  const comparisonFeatures = [
    { name: 'Material Principal', product1: 'Poliéster/Algodón 65/35', product2: 'Algodón 100%', product3: 'Poliéster' },
    { name: 'Gramaje', product1: '7.25 oz', product2: '11.75 oz', product3: 'Ligero' },
    { name: 'Diseño', product1: 'Action Back', product2: 'Peto Clásico', product3: 'Cremallera Frontal' },
    { name: 'Bolsillos', product1: '7 bolsillos', product2: 'Peto + múltiples', product3: 'Básicos' },
    { name: 'Resistencia', product1: 'Muy Alta', product2: 'Extrema', product3: 'Media' },
    { name: 'Transpirabilidad', product1: 'Buena', product2: 'Excelente', product3: 'Baja' },
    { name: 'Precio', product1: 'Alto', product2: 'Medio-Alto', product3: 'Económico' },
    { name: 'Disponibilidad', product1: 'Mercado Libre', product2: 'Mercado Libre', product3: 'Mercado Libre' }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
      title: 'Escaleras Industriales: Guía de Compra y Mejores Modelos 2025',
      excerpt: 'Guía definitiva de características, seguridad y los 5 productos más destacados.',
      description: 'Guía definitiva de características, seguridad y los 5 productos más destacados.',
      category: 'Equipo Industrial',
      publishDate: '5 Oct 2025',
      readTime: '18 min',
      image: '/images/escaleras-industriales.jpg',
      slug: 'escaleras-industriales-guia-compra-mejores-modelos'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Qué diferencia hay entre un overol y un peto?',
      answer: 'Un overol cubre el cuerpo completo desde los tobillos hasta el cuello, con mangas largas o cortas, funcionando como una prenda de una sola pieza. Un peto (bib overall) es un pantalón con una pieza frontal que cubre el pecho y se sostiene con tirantes sobre los hombros, dejando los brazos descubiertos. El peto se usa generalmente sobre una camisa o playera, mientras que el overol se puede usar directamente sobre ropa interior o una camiseta básica.'
    },
    {
      question: '¿Cuál es el mejor material para un overol de trabajo?',
      answer: 'No existe un "mejor" material universal; la elección depende del entorno de trabajo. Para uso general y comodidad, las mezclas de poliéster/algodón (65/35 o 80/20) ofrecen el mejor equilibrio entre durabilidad y transpirabilidad. Para máxima resistencia al desgaste en trabajos rudos, el algodón 100% de alto gramaje (mezclilla) es ideal. Para protección química, se requieren materiales sintéticos como polietileno. Para trabajos con riesgo de fuego, son obligatorios tejidos ignífugos con tratamiento FR o aramidas como Nomex.'
    },
    {
      question: '¿Los overoles deben quedar holgados o ajustados?',
      answer: 'Los overoles de trabajo están diseñados para quedar holgados o "oversized" por razones funcionales. Deben permitir libertad de movimiento completa (agacharse, levantar brazos, trepar) sin restricción. Además, a menudo se usan sobre la ropa normal para protegerla, por lo que necesitan espacio adicional. Sin embargo, no deben ser tan grandes que se enreden en maquinaria o causen tropiezos. La clave es que permitan movimiento libre pero sin exceso de tela colgando.'
    },
    {
      question: '¿Cómo debo lavar mi overol de trabajo?',
      answer: 'Depende del material: Para algodón/mezclas estándar, lava en agua fría o tibia con detergente regular, ya que el agua caliente puede encoger la prenda. Para overoles con tratamiento ignífugo (FR), NUNCA uses suavizante de telas ni cloro, ya que estos productos eliminan el tratamiento protector. Siempre revisa la etiqueta del fabricante. Para overoles muy sucios de grasa/aceite, considera usar desengrasantes industriales específicos antes del lavado normal. Seca al aire o en secadora a baja temperatura para evitar encogimiento.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema industrial/textil */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${220 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Íconos textiles flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`textile-${i}`}
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
                {i % 3 === 0 ? <Shirt className="w-6 h-6" /> : 
                 i % 3 === 1 ? <Shield className="w-6 h-6" /> : 
                 <Layers className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas industriales (40 ondas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute border-2 border-blue-400 rounded-full opacity-30"
                style={{
                  width: `${80 + (i * 20)}px`,
                  height: `${80 + (i * 20)}px`,
                  left: `${(i * 11) % 90}%`,
                  top: `${(i * 17) % 90}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0.1, 0.4],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Shirt className="h-4 w-4" />
                👔 Equipo de Protección Personal
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Guía Completa: Mejores Overoles de Trabajo 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Todo sobre materiales, normativas mexicanas y los 6 productos más destacados del mercado
              </motion.p>

              <motion.div 
                className="flex flex-wrap items-center justify-center gap-3 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>3 Oct 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>22 min lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Seguridad Industrial / EPP</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>        {/* Contenido principal */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
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
                  background: `hsl(${220 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                  className="prose prose-lg max-w-none"
                >
                  {/* Introducción */}
                  <section id="introduccion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-xl text-gray-700 leading-relaxed mb-4">
                        El overol de trabajo es una pieza fundamental del Equipo de Protección Personal (EPP) que funciona como 
                        <b className="text-blue-600"> una barrera integral contra una multitud de riesgos laborales</b>, abarcando 
                        desde suciedad y grasa hasta peligros químicos, térmicos y eléctricos.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Su diseño, que cubre el cuerpo desde los tobillos hasta el cuello, está concebido para 
                        <b className="text-blue-600"> maximizar la protección sin sacrificar la funcionalidad esencial</b> para 
                        el desempeño de las tareas diarias.
                      </p>
                    </motion.div>
                  </section>

                  {/* Advertencia de reseñas */}
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-2xl mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-yellow-900 mb-2">⚠️ Importante sobre las reseñas de productos</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Las calificaciones y número de reseñas mencionadas en este artículo son aproximadas y pueden variar. 
                          Siempre verifica la información actualizada directamente en las páginas de los productos antes de realizar 
                          tu compra. Las condiciones, disponibilidad y precios están sujetos a cambios sin previo aviso.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Matriz de Materiales */}
                  <section id="materiales" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        🧵 El Tejido como Primera Línea de Defensa
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La elección del material constituye <b className="text-blue-600">la decisión más crítica</b> en la selección 
                      de un overol, ya que determina directamente su nivel de protección, durabilidad, comodidad y adecuación al 
                      entorno de trabajo.
                    </motion.p>

                    {/* Selector de tipo de material */}
                    <div className="flex justify-center gap-4 mb-4 sm:mb-6 md:mb-8 flex-wrap">
                      <button
                        onClick={() => setSelectedMaterial('algodon')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedMaterial === 'algodon'
                            ? 'bg-green-500 text-white shadow-lg scale-105'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        🌱 Algodón
                      </button>
                      <button
                        onClick={() => setSelectedMaterial('poliester')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedMaterial === 'poliester'
                            ? 'bg-blue-500 text-white shadow-lg scale-105'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        ⚡ Poliéster/Mezclas
                      </button>
                      <button
                        onClick={() => setSelectedMaterial('especializado')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedMaterial === 'especializado'
                            ? 'bg-purple-500 text-white shadow-lg scale-105'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        🛡️ Especializados
                      </button>
                    </div>

                    <AnimatePresence mode="wait">
                      {selectedMaterial === 'algodon' && (
                        <motion.div
                          key="algodon"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300"
                        >
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-4">Algodón y Mezclilla</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-green-800 mb-3">Características:</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span><b>Alta transpirabilidad:</b> Ideal para entornos calurosos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span><b>Comodidad natural:</b> Suave al contacto con la piel</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span><b>Mezclilla:</b> Resistencia extrema a abrasión y desgarro</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                                  <span><b>Limitación:</b> Poca resistencia química y no es ignífugo</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-green-100 p-5 rounded-xl">
                              <p className="text-green-900 font-semibold">
                                💡 Ideal para: Construcción, agricultura, carpintería, herrería y trabajos rudos generales
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedMaterial === 'poliester' && (
                        <motion.div
                          key="poliester"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4">Poliéster y Mezclas Modernas</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-blue-800 mb-3">Características:</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                  <span><b>Durabilidad superior:</b> Resistente a arrugas y decoloración</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                  <span><b>Resistencia química:</b> Repele agua y aceites</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                  <span><b>Mezclas 65/35:</b> Combina durabilidad con comodidad</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                                  <span><b>Limitación:</b> Menor transpirabilidad que algodón puro</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-blue-100 p-5 rounded-xl">
                              <p className="text-blue-900 font-semibold">
                                💡 Ideal para: Uso diario intensivo, mecánica, manufactura, talleres automotrices
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedMaterial === 'especializado' && (
                        <motion.div
                          key="especializado"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                        >
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4">Tejidos Especializados</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-purple-800 mb-3">Tipos especiales:</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <Flame className="h-5 w-5 text-red-600 mt-0.5" />
                                  <span><b>Ignífugos (FR):</b> Aramidas (Nomex, Kevlar) o tratados químicamente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Droplets className="h-5 w-5 text-blue-600 mt-0.5" />
                                  <span><b>Impermeables:</b> PVC, nylon, polietileno para líquidos/químicos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Eye className="h-5 w-5 text-yellow-600 mt-0.5" />
                                  <span><b>Alta visibilidad:</b> Gabardina neón con cintas reflectantes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                                  <span><b>Antiestáticos:</b> Para entornos con riesgo eléctrico</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-purple-100 p-5 rounded-xl">
                              <p className="text-purple-900 font-semibold">
                                💡 Uso obligatorio según análisis de riesgo específico del centro de trabajo
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>
                  {/* Top 6 Productos */}
                  <section id="top-productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        🏆 Top 6 Overoles Más Destacados en México
                      </span>
                    </motion.h2>

                    <div className="grid gap-4 sm:p-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                      {/* Producto 1: Red Kap CT10 */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-blue-200 p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-purple-500 mb-3">Premium Profesional</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Red Kap CT10 Twill Action Back</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.9 (150+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          El estándar industrial global. Poliéster/algodón 65/35, diseño Action Back para movilidad superior. 
                          ZeroSkratch para industria automotriz.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Movilidad superior</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Durabilidad comprobada</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://articulo.mercadolibre.com.mx/MLM-852643194-red-kap-ct10-overol-trabajo-manga-larga-mecanico-industrial-_JM', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 2: Dickies Peto */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-blue-200 p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-blue-500 mb-3">Clásico Rudo</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Dickies Peto Mezclilla 8329</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.8 (200+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Ícono del workwear. Mezclilla 100% algodón de 11.75 oz. Resistencia extrema con triple pespunte. 
                          Peto frontal con múltiples bolsillos.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Casi indestructible</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Alta transpirabilidad</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://articulo.mercadolibre.com.mx/MLM-1358999335-overol-peto-dickies-8329-mezclilla-uso-rudo-resistente-_JM', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 3: GUIGUA */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-blue-200 p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-green-500 mb-3">Mejor Precio</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">GUIGUA Mono de Reparación</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.6 (450+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          El más vendido en marketplaces. Poliéster ligero y económico. Ideal para talleres pequeños y 
                          protección básica contra suciedad.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Muy asequible</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Fácil mantenimiento</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://articulo.mercadolibre.com.mx/MLM-3632338520-mono-de-mecanico-de-reparacion-trajes-de-trabajo-uniformes-_JM', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 4: CODYTAVAREZ Cargo */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-blue-200 p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-orange-500 mb-3">Máximo Almacenamiento</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">CODYTAVAREZ Overol Cargo</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.7 (180+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Amplios bolsillos cargo en las piernas. Algodón satinado cómodo y transpirable. Cintura elástica 
                          para mejor ajuste.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Excelente capacidad</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Muy cómodo</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://articulo.mercadolibre.com.mx/MLM-1598245245-overol-industrial-bolsas-cargo-seguridad-uso-rudo-trabajo-_JM', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 5: BRISCO Alta Visibilidad */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-blue-200 p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-yellow-500 mb-3">Alta Visibilidad</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">BRISCO INDUSTRIAL Reflejante</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.8 (120+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Máxima seguridad visual con cintas reflectantes de 2". Gabardina poliéster/algodón robusta. 
                          Ideal para carreteras y zonas de bajo luz.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Máxima visibilidad</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Construcción robusta</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://articulo.mercadolibre.com.mx/MLM-963468347-overol-industrial-alta-visibilidad-con-reflejantes-uso-rudo-_JM', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 6: PRO-TEX Desechable */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-blue-200 p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-gray-700 mb-3">Barrera Química</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">PRO-TEX 6003 Tipo Tyvek</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.7 (95+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Overol desechable tipo Tyvek. Protección contra líquidos, polvos y químicos. Resistente pero 
                          transpirable. Uso único.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Protección química</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Económico por uso</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://articulo.mercadolibre.com.mx/MLM-1353220802-overol-blanco-desechable-pro-tex-6003-tipo-tyvek-_JM', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>
                    </div>
                  </section>

                  {/* Tabla Comparativa */}
                  <section id="comparacion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        📊 Tabla Comparativa Detallada
                      </span>
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 sm:mb-6 md:mb-8"
                    >
                      <ProductComparison 
                        products={comparisonProducts}
                        features={comparisonFeatures}
                      />
                    </motion.div>
                  </section>
                  {/* Preguntas Frecuentes */}
                  <section id="faqs" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        ❓ Preguntas Frecuentes
                      </span>
                    </motion.h2>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl border-2 border-blue-200 overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <button
                            onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                            className="w-full p-3 sm:p-4 md:p-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                          >
                            <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-blue-600" />
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
                                <div className="p-3 sm:p-4 md:p-6 bg-white text-gray-700 leading-relaxed border-t border-blue-100">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Normativas Mexicanas */}
                  <section id="normativas" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        📜 Normativas Mexicanas Clave
                      </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-3">
                      <motion.div
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <FileText className="h-8 w-8 text-blue-600" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">NOM-017-STPS-2008</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Establece los requisitos mínimos para la selección y uso de EPP. Define que el <b className="text-blue-700">empleador 
                          debe proporcionar el equipo adecuado</b> según el análisis de riesgo del puesto de trabajo.
                        </p>
                        <div className="bg-blue-100 p-4 rounded-xl">
                          <p className="text-blue-900 font-semibold text-sm">
                            El overol debe ser seleccionado y proporcionado sin costo al trabajador, según los riesgos específicos.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Flame className="h-8 w-8 text-purple-600" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900">Normativas Específicas</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Para trabajos específicos existen normas adicionales: <b className="text-purple-700">NOM-113-STPS-2009</b> para 
                          trabajos eléctricos, <b className="text-purple-700">NMX-S-061-SCFI</b> para prendas de alta visibilidad, y estándares 
                          internacionales como <b className="text-purple-700">NFPA 2112</b> para ignífugos.
                        </p>
                        <div className="bg-purple-100 p-4 rounded-xl">
                          <p className="text-purple-900 font-semibold text-sm">
                            Verifica siempre que el overol cumpla con las certificaciones aplicables a tu industria.
                          </p>
                        </div>
                      </motion.div>
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
                        🎯 Conclusión: Elige Inteligente, Trabaja Seguro
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">La Protección Adecuada Marca la Diferencia</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        El overol de trabajo adecuado no es simplemente una prenda más en tu guardarropa laboral; es 
                        <b className="text-yellow-300"> una herramienta de seguridad fundamental</b> que protege tu integridad física 
                        y tu bienestar día tras día. La elección correcta debe basarse en un <b>análisis cuidadoso del entorno de trabajo</b>, 
                        los materiales expuestos y las normativas aplicables.
                      </p>
                      <p className="text-lg leading-relaxed mb-4">
                        Ya sea que necesites la <b>durabilidad legendaria del Dickies</b>, la <b>movilidad superior del Red Kap</b>, 
                        la <b>visibilidad del BRISCO</b> o la <b>protección química del PRO-TEX</b>, existe un overol diseñado específicamente 
                        para tu oficio y tus riesgos.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl">
                        <p className="text-xl font-bold text-center">
                          💙 Invierte en tu seguridad. Un overol de calidad es una inversión en tu futuro profesional.
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Artículos Relacionados */}
                  <motion.section
                    id="articulos-relacionados"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
                  >
                    <RelatedArticles articles={relatedArticles} />
                  </motion.section>

                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
