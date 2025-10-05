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
  Activity,
  Gauge,
  Settings,
  TrendingUp,
  Package,
  ChevronDown,
  Info,
  Eye,
  Wrench,
  Construction,
  Battery,
  Thermometer
} from 'lucide-react';
import { useState } from 'react';

export default function MultimetrosProfesionalesArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCAT, setSelectedCAT] = useState<'cat2' | 'cat3' | 'cat4'>('cat3');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'fluke-117',
      name: 'Fluke 117',
      rating: 4.9,
      reviewCount: 1500,
      isRecommended: true,
      bestFor: 'Estándar de la Industria',
      amazonLink: 'https://www.amazon.com.mx/Fluke-117-Mult%C3%ADmetro-electricistas-verdadero/dp/B000OCFFMW'
    },
    {
      id: 'unit-ut204',
      name: 'UNI-T UT204+',
      rating: 4.8,
      reviewCount: 422,
      isRecommended: true,
      bestFor: 'Mejor Calidad-Precio',
      amazonLink: 'https://www.mercadolibre.com.mx/pinza-amperimetrica-digital-uni-t-ut204-600a-acdc-true-rms-ncv-multimetro-profesional/p/MLM15532755'
    },
    {
      id: 'kaiweets-ht118a',
      name: 'Kaiweets HT118A',
      rating: 4.7,
      reviewCount: 10000,
      isRecommended: false,
      bestFor: 'Alto Valor',
      amazonLink: 'https://www.amazon.com.mx/KAIWEETS-Mult%C3%ADmetro-digital-autom%C3%A1tico-continuidad/dp/B08D3B44V5'
    }
  ];

  const comparisonFeatures = [
    { name: 'Categoría de Seguridad', product1: 'CAT III 600V', product2: 'CAT III 300V', product3: 'CAT IV 600V' },
    { name: 'True RMS', product1: true, product2: true, product3: true },
    { name: 'Auto-Rango', product1: true, product2: true, product3: true },
    { name: 'Mide Temperatura', product1: false, product2: true, product3: true },
    { name: 'Tipo', product1: 'Multímetro', product2: 'Pinza', product3: 'Multímetro' },
    { name: 'VoltAlert™/NCV', product1: true, product2: true, product3: true },
    { name: 'Pantalla', product1: 'Grande LCD', product2: '6000 cuentas', product3: '6000 cuentas' },
    { name: 'Disponibilidad', product1: 'Amazon MX', product2: 'Mercado Libre', product3: 'Amazon MX' }
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
      title: 'Guía Completa: Mejores Overoles de Trabajo 2025',
      excerpt: 'Materiales, normativas mexicanas y los 6 productos más destacados.',
      description: 'Materiales, normativas mexicanas y los 6 productos más destacados.',
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
      question: '¿Qué significan las categorías CAT II, CAT III y CAT IV?',
      answer: 'Las categorías de medición (CAT) definen el entorno en el que un multímetro puede ser utilizado de forma segura, basándose en el riesgo de sobretensiones transitorias. CAT II se aplica a circuitos conectados a tomacorrientes, CAT III a la distribución eléctrica de un edificio (paneles, barras colectoras), y CAT IV a la fuente de instalación (acometida, medidores de CFE). Para trabajo profesional, CAT III 600V es el mínimo indispensable.'
    },
    {
      question: '¿Qué es True RMS y por qué lo necesita un profesional?',
      answer: 'True RMS significa "Verdadero Valor Eficaz" y permite medir con precisión voltaje o corriente de cualquier forma de onda AC, no solo las sinusoidales. Los sistemas modernos con variadores de velocidad, LEDs y equipos electrónicos distorsionan las ondas, y un medidor sin True RMS puede dar lecturas erróneas de hasta 40%, lo cual es peligroso e inadecuado para diagnóstico profesional.'
    },
    {
      question: '¿Cuál es la diferencia entre un multímetro digital (DMM) y una pinza amperimétrica?',
      answer: 'Un DMM mide corriente de forma invasiva (debe abrir el circuito e insertar el medidor en serie), siendo muy preciso pero limitado a corrientes bajas. Una pinza amperimétrica mide de forma no invasiva mediante su gancho alrededor del conductor, detectando el campo magnético sin interrumpir el circuito. Es más seguro, rápido e ideal para corrientes altas.'
    },
    {
      question: '¿Con qué frecuencia debo calibrar mi multímetro?',
      answer: 'Para entornos industriales, laboratorios o aplicaciones donde la precisión documentada es crítica (normas ISO), se recomienda calibración profesional anualmente. Para uso general de electricista, aunque no obligatorio, es buena práctica verificar la precisión periódicamente comparando con un medidor calibrado o fuente de referencia, especialmente después de caídas fuertes.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema eléctrico/medición */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${40 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Iconos de electricidad flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`electric-${i}`}
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
                {i % 3 === 0 ? <Zap className="w-6 h-6" /> : 
                 i % 3 === 1 ? <Activity className="w-6 h-6" /> : 
                 <Gauge className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de medición (40 ondas) */}
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
                className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-400/30 rounded-full px-4 py-2 text-yellow-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Gauge className="h-4 w-4" />
                ⚡ Instrumentación Profesional
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Multímetros para Electricistas Profesionales 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-yellow-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Análisis completo: Seguridad, precisión y los 6 modelos más destacados en México
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-yellow-200"
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
        <div className="bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo eléctricas */}
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${45 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-8 border-yellow-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-500 rounded-full p-3 flex-shrink-0">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-900 mb-3">⚡ Tus Ojos en el Mundo Invisible</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            Para un electricista profesional, el multímetro <strong className="text-yellow-600">no es solo una herramienta; 
                            son sus ojos y oídos en un mundo invisible de voltajes y corrientes</strong>. Es el instrumento que se interpone 
                            entre un diagnóstico preciso y un error costoso, entre una jornada de trabajo segura y un accidente.
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
                      En un oficio donde <b>la precisión es sinónimo de seguridad</b>, elegir el multímetro correcto no es 
                      una opción, es la <b className="text-yellow-600">base sobre la que se construye cada trabajo bien hecho</b>.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-blue-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Más que Medición: Inversión en Seguridad</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía analiza a fondo <b>las características no negociables</b> que todo electricista profesional 
                        debe exigir: desde las categorías de seguridad CAT hasta la tecnología True RMS. Hemos investigado 
                        <b className="text-blue-700"> 6 modelos destacados disponibles en México</b>, comparando desde el 
                        legendario Fluke 117 hasta opciones emergentes con excelente relación calidad-precio.
                      </p>
                    </motion.div>
                  </section>

                  {/* Seguridad Categorías CAT */}
                  <section id="categorias-cat" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        🛡️ Seguridad Ante Todo: Entendiendo las Categorías CAT
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La característica más crítica de cualquier multímetro es su <b className="text-red-600">clasificación de seguridad</b>. 
                      Esta no se refiere al voltaje máximo que puede leer, sino a su capacidad para soportar 
                      <b> sobretensiones transitorias</b>: picos de energía que pueden alcanzar miles de voltios.
                    </motion.p>

                    {/* Selector de Categoría CAT */}
                    <div className="flex justify-center gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                      <motion.button
                        onClick={() => setSelectedCAT('cat2')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedCAT === 'cat2'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        CAT II
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedCAT('cat3')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedCAT === 'cat3'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        CAT III
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedCAT('cat4')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedCAT === 'cat4'
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        CAT IV
                      </motion.button>
                    </div>

                    {/* Contenido según categoría CAT */}
                    <AnimatePresence mode="wait">
                      {selectedCAT === 'cat2' && (
                        <motion.div
                          key="cat2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-green-300"
                        >
                          <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            CAT II - Circuitos Monofásicos
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <h5 className="font-bold text-green-800 mb-3">📍 Aplicación:</h5>
                            <p className="text-gray-700 mb-3">
                              Mediciones en circuitos conectados directamente a un <b className="text-green-700">tomacorriente monofásico</b>, 
                              como electrodomésticos y herramientas portátiles.
                            </p>
                          </div>

                          <div className="bg-green-100 p-4 rounded-lg">
                            <p className="text-green-900 font-semibold text-center">
                              ⚠️ <b>NO es suficiente para trabajo profesional en instalaciones eléctricas</b>
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedCAT === 'cat3' && (
                        <motion.div
                          key="cat3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-blue-300"
                        >
                          <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            CAT III - Distribución Trifásica (Estándar Profesional)
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <h5 className="font-bold text-blue-800 mb-3">📍 Aplicación:</h5>
                            <p className="text-gray-700 mb-3">
                              Circuitos de <b className="text-blue-700">distribución trifásica</b>, incluyendo:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>Paneles de distribución</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>Centros de control de motores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>Barras colectoras</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>Acometidas en instalaciones industriales y comerciales</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-lg border-2 border-blue-400">
                            <p className="text-blue-900 font-bold text-center text-lg">
                              ✅ <b>CAT III 600V es el MÍNIMO indispensable para trabajo profesional</b>
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedCAT === 'cat4' && (
                        <motion.div
                          key="cat4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-red-300"
                        >
                          <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            CAT IV - Fuente de Instalación (Máxima Protección)
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <h5 className="font-bold text-red-800 mb-3">📍 Aplicación:</h5>
                            <p className="text-gray-700 mb-3">
                              Mediciones en la <b className="text-red-700">fuente de la instalación de baja tensión</b>:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Acometidas de servicio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Conexiones a la red de CFE</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Dispositivos primarios de protección</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Sistemas fotovoltaicos conectados a red</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-red-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-lg border-2 border-red-400">
                            <p className="text-red-900 font-bold text-center text-lg">
                              🏆 <b>Máxima seguridad y versatilidad - Preparado para cualquier escenario</b>
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Advertencia sobre energía distribuida */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-4 sm:p-6 md:p-8 rounded-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-10 w-10 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Riesgos Emergentes: Sistemas Fotovoltaicos</h4>
                          <p className="text-gray-800 leading-relaxed mb-4">
                            La creciente prevalencia de <b className="text-yellow-700">recursos de energía distribuida</b> (sistemas 
                            fotovoltaicos) en el panorama residencial y comercial de México está introduciendo nuevas complejidades. 
                            Estos sistemas crean nuevas vías para la propagación de transitorios de alta energía.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-yellow-900 font-semibold text-center">
                              💡 Un electricista que trabaja en instalaciones modernas debe considerar 
                              <b className="text-yellow-700"> CAT III 1000V o CAT IV 600V</b> para estar protegido frente a 
                              tecnologías emergentes
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* True RMS */}
                  <section id="true-rms" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        📊 True RMS: Precisión Inquebrantable en Sistemas Modernos
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La precisión es fundamental, y en la medición de corriente alterna (AC), el estándar de oro es 
                      el <b className="text-purple-600">Verdadero Valor Eficaz</b>, o True RMS (TRMS).
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                      {/* Medidor de Respuesta Promedio */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-red-500 rounded-xl p-3">
                            <AlertTriangle className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-red-900">❌ Medidor de Respuesta Promedio</h3>
                        </div>
                        
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                          <p className="text-gray-700 mb-4">
                            Solo puede medir con precisión <b className="text-red-700">ondas AC perfectamente sinusoidales</b>.
                          </p>
                          <div className="bg-red-100 p-4 rounded-lg">
                            <p className="text-red-900 font-bold mb-2">⚠️ Problemas Graves:</p>
                            <ul className="text-sm text-red-800 space-y-2">
                              <li>• Lecturas hasta <b>40% más bajas</b> o <b>10% más altas</b></li>
                              <li>• Diagnósticos erróneos</li>
                              <li>• Riesgo de subestimar energía presente</li>
                              <li>• Fallas prematuras de equipos</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-red-200 p-4 rounded-lg text-center">
                          <p className="text-red-900 font-bold">
                            🚫 INADECUADO para trabajo profesional moderno
                          </p>
                        </div>
                      </motion.div>

                      {/* Medidor True RMS */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-green-500 rounded-xl p-3">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-green-900">✅ Medidor True RMS</h3>
                        </div>
                        
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                          <p className="text-gray-700 mb-4">
                            Mide con precisión <b className="text-green-700">cualquier forma de onda AC</b>, incluso las distorsionadas.
                          </p>
                          <div className="bg-green-100 p-4 rounded-lg">
                            <p className="text-green-900 font-bold mb-2">✓ Ventajas Cruciales:</p>
                            <ul className="text-sm text-green-800 space-y-2">
                              <li>• Precisión en cargas no lineales</li>
                              <li>• Diagnóstico correcto y seguro</li>
                              <li>• Previene re-trabajos costosos</li>
                              <li>• Protege reputación profesional</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-green-200 p-4 rounded-lg text-center">
                          <p className="text-green-900 font-bold">
                            ✅ REQUISITO BÁSICO para competencia profesional
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Cargas No Lineales Comunes */}
                    <motion.div 
                      className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6 text-center">
                        ⚡ Cargas No Lineales en Sistemas Modernos
                      </h3>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl">
                          <p className="font-bold text-purple-900 mb-2">🔧 Industriales:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Variadores de frecuencia (VFDs)</li>
                            <li>• Controles de motores</li>
                            <li>• Equipos de soldadura</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                          <p className="font-bold text-purple-900 mb-2">💡 Iluminación:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Sistemas LED</li>
                            <li>• Balastros electrónicos</li>
                            <li>• Reguladores de intensidad</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                          <p className="font-bold text-purple-900 mb-2">🖥️ Electrónicos:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Fuentes de computadoras</li>
                            <li>• Equipos de climatización</li>
                            <li>• Cargadores electrónicos</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>

                    {/* Ejemplo Práctico */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-yellow-100 to-amber-100 border-4 border-yellow-400 p-4 sm:p-6 md:p-8 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-500 rounded-full p-3 flex-shrink-0">
                          <Settings className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-yellow-900 mb-3">📖 Caso Práctico Real</h4>
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-800 leading-relaxed mb-3">
                              <b className="text-yellow-700">Escenario:</b> Un electricista usa un medidor no-TRMS para diagnosticar 
                              un motor controlado por un VFD.
                            </p>
                            <div className="space-y-2">
                              <p className="text-gray-700">
                                ❌ <b>Medidor indica:</b> Corriente dentro de parámetros seguros
                              </p>
                              <p className="text-gray-700">
                                ⚡ <b>Corriente real (TRMS detectaría):</b> Significativamente mayor
                              </p>
                              <p className="text-gray-700">
                                🔥 <b>Resultado:</b> Sobrecalentamiento y fallo del motor
                              </p>
                              <p className="text-red-700 font-bold">
                                💸 <b>Consecuencia:</b> Re-trabajos costosos y daño a reputación profesional
                              </p>
                            </div>
                          </div>
                          <p className="text-yellow-900 font-bold text-center mt-4 text-lg">
                            💡 Invertir en True RMS = Inversión en precisión, calidad y viabilidad del negocio
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Funcionalidad Esencial */}
                  <section id="funcionalidad" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        🔧 Funcionalidad Esencial para el Campo de Batalla Eléctrico
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* Funciones Fundamentales */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                          <Gauge className="h-8 w-8" />
                          Funciones Fundamentales (Obligatorias)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                              <Zap className="h-5 w-5" />
                              Mediciones Eléctricas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Voltaje AC/DC:</b> Medición más básica y frecuente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Corriente AC/DC:</b> Análisis de cargas y sobrecorrientes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Resistencia (Ohms):</b> Integridad de componentes y cables</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                              <Activity className="h-5 w-5" />
                              Funciones de Diagnóstico
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Continuidad:</b> Con zumbador audible fuerte y rápido</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Prueba de diodos:</b> Verificación de componentes</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      {/* Características que Ahorran Tiempo */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                          <TrendingUp className="h-8 w-8" />
                          Características que Ahorran Tiempo (Profesionales)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-green-800 mb-3">🔧 Funciones Avanzadas:</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>Capacitancia:</b> Probar condensadores de arranque/marcha en motores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>Frecuencia y Ciclo de Trabajo:</b> Diagnóstico de VFDs y controles electrónicos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>Medición de Temperatura:</b> Verificar sobrecalentamiento de componentes</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-green-100 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-green-500">
                            <h4 className="font-bold text-green-800 mb-3">⚡ Auto-Rango:</h4>
                            <p className="text-gray-700 mb-3">
                              Selecciona automáticamente la escala de medición más apropiada.
                            </p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="text-green-900 font-semibold">
                                ✓ Ahorra tiempo<br/>
                                ✓ Reduce errores de usuario<br/>
                                ✓ <b className="text-green-700">Estándar para equipos profesionales</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Funciones Especiales */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                          <Zap className="h-8 w-8" />
                          Funciones Especiales de Seguridad
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-purple-800 mb-3">⚡ VoltAlert™ / NCV:</h4>
                            <p className="text-gray-700 mb-3">
                              <b>Detección de voltaje sin contacto</b> - Permite identificar cables energizados sin necesidad 
                              de hacer contacto físico.
                            </p>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-purple-900 text-sm">
                                💡 <b>Aumenta la seguridad</b> al permitir una verificación preliminar antes de cualquier medición
                              </p>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-purple-800 mb-3">🔌 Modo LoZ (Baja Impedancia):</h4>
                            <p className="text-gray-700 mb-3">
                              Elimina <b>lecturas fantasma</b> causadas por voltajes inducidos en circuitos abiertos.
                            </p>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-purple-900 text-sm">
                                💡 <b>Previene diagnósticos erróneos</b> especialmente en instalaciones con cableado paralelo
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Durabilidad y Construcción */}
                  <section id="durabilidad" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        💪 Construido para el Trabajo Rudo: Durabilidad y Facilidad de Uso
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La durabilidad y la ergonomía <b className="text-orange-600">no son lujos, son requisitos</b> para un 
                      rendimiento fiable día tras día en las duras condiciones de un sitio de trabajo.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                      {/* Protección Física */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-orange-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-6">🛡️ Protección Física</h3>

                        <div className="space-y-4">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5" />
                              Protección contra Caídas
                            </h4>
                            <p className="text-gray-700 mb-3">
                              Diseñados para sobrevivir caídas mediante:
                            </p>
                            <ul className="text-sm text-gray-700 space-y-2">
                              <li>• Carcasas robustas de alta resistencia</li>
                              <li>• Fundas de goma (holster) que absorben impactos</li>
                              <li>• <b className="text-orange-700">Especificación mínima: 1 metro de altura</b></li>
                            </ul>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                              <Package className="h-5 w-5" />
                              Clasificación IP (Protección de Ingreso)
                            </h4>
                            <p className="text-gray-700 mb-3">
                              Indica el nivel de sellado contra polvo y agua:
                            </p>
                            <div className="bg-orange-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-700 mb-2">
                                <b>Primer dígito (0-6):</b> Protección contra sólidos (polvo)
                              </p>
                              <p className="text-sm text-gray-700 mb-2">
                                <b>Segundo dígito (0-8):</b> Protección contra líquidos (agua)
                              </p>
                              <p className="text-orange-900 font-bold text-sm">
                                Ejemplo: <b>IP67</b> = Completamente estanco al polvo + Sumergible 1m por 30 min
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Ergonomía y Usabilidad */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6">🎯 Ergonomía y Usabilidad</h3>

                        <div className="space-y-4">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                              <Wrench className="h-5 w-5" />
                              Calidad de Puntas de Prueba
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Cables de silicona flexibles:</b> No se endurecen con frío, resistentes al calor</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Buen agarre:</b> Con tapas protectoras para las puntas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Reemplazables:</b> Marca de instrumento profesional</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                              <Eye className="h-5 w-5" />
                              Pantalla y Características Prácticas
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>LCD grande y clara</b> con retroiluminación potente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Soporte (kickstand)</b> estable para colocar en superficie</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Colgador magnético</b> para fijarlo a panel metálico</span>
                              </li>
                            </ul>
                            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                              <p className="text-blue-900 font-semibold text-sm">
                                💡 Estas características <b>liberan las manos del operario</b>, permitiendo trabajo más seguro y eficiente
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 6 Productos */}
                  <section id="productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Multímetros Destacados en México 2025
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
                            a la información disponible al momento de la publicación (4 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - Fluke 117 */}
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
                            ESTÁNDAR DE LA INDUSTRIA
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Fluke 117 True-RMS para Electricistas
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(1,500+ reseñas) - 4.9/5</span>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Electricistas Comerciales y Residenciales, Mantenimiento Profesional
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El Fluke 117 es <b className="text-yellow-700">la herramienta de referencia</b> para electricistas profesionales 
                          que exigen fiabilidad, precisión y seguridad sin concesiones. Diseñado específicamente para el trabajo de campo, 
                          integra medición True RMS para precisión en cargas complejas, categoría de seguridad CAT III 600V, y funciones 
                          inteligentes como la <b className="bg-yellow-100 px-2 py-1 rounded">detección de voltaje sin contacto (VoltAlert™)</b> 
                          y entrada de baja impedancia (LoZ) para eliminar lecturas fantasma.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            Diseño Compacto Profesional
                          </h4>
                          <p className="text-gray-700">
                            Su <b className="text-blue-700">diseño compacto y robusto</b> está hecho para soportar las exigencias del uso 
                            diario en entornos comerciales, hospitalarios y escolares. Incluye pantalla grande con retroiluminación blanca 
                            brillante para trabajar en cuartos eléctricos con poca luz.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Fiabilidad legendaria:</b> Construido para durar años en condiciones exigentes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>VoltAlert™ y LoZ:</b> Funciones que ahorran tiempo y aumentan seguridad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>True RMS:</b> Garantiza lecturas correctas en sistemas modernos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ergonomía excelente:</b> Compacto con pantalla grande y retroiluminación</span>
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
                                <span><b>Precio premium:</b> Inversión significativamente mayor vs otras marcas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>No mide temperatura:</b> A diferencia del Fluke 116 de la misma serie</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Disponible en Distribuidores Autorizados</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.amazon.com.mx/Fluke-117-Mult%C3%ADmetro-electricistas-verdadero/dp/B000OCFFMW"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Amazon →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - UNI-T UT204+ */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MEJOR CALIDAD-PRECIO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Pinza Amperimétrica UNI-T UT204+ True RMS
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(422+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Profesionales con Presupuesto Inteligente, Solar, Automotriz
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          La UNI-T UT204+ se ha consolidado en el mercado mexicano como <b className="text-green-700">la opción inteligente</b> 
                          para profesionales que necesitan funcionalidad de pinza amperimétrica sin pagar el precio de marcas tradicionales. 
                          Ofrece medición de corriente AC/DC hasta 600A, True RMS, categoría CAT II 600V / CAT III 300V, y un conjunto completo 
                          de funciones incluyendo <b className="bg-green-100 px-2 py-1 rounded">voltaje, resistencia, capacitancia, frecuencia y temperatura</b>.
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-purple-300">
                          <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center gap-2">
                            <Battery className="h-6 w-6" />
                            Versatilidad para Aplicaciones Especializadas
                          </h4>
                          <p className="text-gray-700">
                            Su capacidad para medir <b className="text-purple-700">corriente DC</b> la hace ideal para trabajos en 
                            <b> sistemas de energía solar y automotrices</b>, una función crucial que a menudo falta en pinzas de este 
                            rango de precio. Incluye detección de voltaje sin contacto (NCV) y pantalla de 6000 cuentas.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Relación calidad-precio excepcional:</b> Características profesionales por fracción del costo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Mide corriente DC:</b> Crucial para solar y automotriz</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Funcionalidad completa:</b> Temperatura y NCV incluidos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Muy popular:</b> Alta calificación en Mercado Libre México</span>
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
                                <span><b>Categoría CAT III 300V:</b> Inferior para voltajes más altos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción:</b> Puede no igualar robustez a largo plazo de Fluke</span>
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
                              href="https://www.mercadolibre.com.mx/pinza-amperimetrica-digital-uni-t-ut204-600a-acdc-true-rms-ncv-multimetro-profesional/p/MLM15532755"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Kaiweets HT118A */}
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
                            ALTO VALOR
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Kaiweets HT118A True RMS 6000 Cuentas
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(10,000+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Profesionales y Aficionados Serios, Excelente Primer Multímetro Profesional
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El Kaiweets HT118A es un <b className="text-blue-700">fenómeno en el mercado</b> de multímetros, ofreciendo un 
                          conjunto de características que rivalizan con equipos mucho más caros. Con clasificación de seguridad 
                          <b className="bg-blue-100 px-2 py-1 rounded"> CAT III 1000V / CAT IV 600V</b>, medición True RMS, auto-rango, 
                          y una pantalla LCD grande de 6000 cuentas, está perfectamente equipado para diagnóstico profesional.
                        </p>

                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-orange-300">
                          <h4 className="font-bold text-orange-800 mb-3 text-lg flex items-center gap-2">
                            <Thermometer className="h-6 w-6" />
                            Funciones de Valor Añadido
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Incluye características adicionales como medición de temperatura, NCV, y una <b className="text-orange-700">linterna 
                            incorporada</b>, todo en un paquete robusto con protección de doble fusible cerámico.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-orange-900 font-semibold">
                              💡 <b>Diseño inteligente:</b> La pantalla se vuelve naranja para advertir de alto voltaje y los conectores 
                              de las puntas se iluminan para guiar al usuario
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio excepcionalmente competitivo:</b> Características profesionales de alto nivel</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Seguridad impresionante:</b> CAT III 1000V / CAT IV 600V para su costo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Repleto de funciones:</b> Temperatura, capacitancia, frecuencia, NCV, linterna</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño innovador:</b> Pantalla de advertencia naranja y conectores iluminados</span>
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
                                <span><b>Marca menos establecida:</b> Comparada con Fluke o Klein Tools</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Velocidad de auto-rango:</b> Ligeramente más lenta que modelos premium</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Disponible en Amazon México</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.amazon.com.mx/KAIWEETS-Mult%C3%ADmetro-digital-autom%C3%A1tico-continuidad/dp/B08D3B44V5"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Amazon →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Fluke 101 */}
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
                            BÁSICO CONFIABLE
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Fluke 101 - Multímetro Digital de Bolsillo
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(75+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Respaldo, Tareas Ligeras, Diagnósticos Rápidos de Voltaje
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El Fluke 101 es <b className="text-purple-700">la puerta de entrada al ecosistema Fluke</b>. Ofrece la fiabilidad 
                          y seguridad de la marca (CAT III 600V) en un formato ultracompacto y ligero, diseñado para uso con una sola mano. 
                          Mide voltaje AC/DC, resistencia, capacitancia y frecuencia, lo que lo hace ideal para 
                          <b className="bg-purple-100 px-2 py-1 rounded"> pruebas eléctricas básicas</b>.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-yellow-900 mb-2">⚠️ Limitaciones Importantes</h4>
                              <p className="text-gray-800">
                                Aunque carece de funciones avanzadas como medición de corriente y True RMS, es una excelente opción como 
                                <b className="text-yellow-700"> segundo multímetro de respaldo</b> o para técnicos que realizan diagnósticos 
                                rápidos de voltaje y continuidad.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-purple-200">
                            <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Calidad Fluke garantizada:</b> CAT III 600V certificado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ultracompacto:</b> Ideal para llevar en el bolsillo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Muy fácil de usar:</b> Interfaz sencilla para mediciones rápidas</span>
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
                                <span><b>NO mide corriente:</b> Limitación muy significativa para trabajo profesional</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>NO es True RMS:</b> Limita precisión en cargas no lineales</span>
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
                              href="https://www.mercadolibre.com.mx/multimetro-profesional-digital-fluke-101/p/MLM21993927"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - AstroAI */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💪 #5
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            VERSÁTIL ECONÓMICO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Pinza Amperimétrica Digital AstroAI TRMS 6000 Cuentas
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(514+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> HVAC, Mantenimiento General, Técnicos con Presupuesto Limitado
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Esta pinza de AstroAI es otra fuerte contendiente en la categoría de <b className="text-teal-700">calidad-precio</b>, 
                          ofreciendo un amplio rango de mediciones en formato de pinza amperimétrica. Con capacidad para medir corriente AC/DC, 
                          voltaje AC/DC, resistencia, capacitancia, frecuencia y temperatura, es una 
                          <b className="bg-teal-100 px-2 py-1 rounded"> herramienta muy versátil</b>.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Todo-en-Uno Asequible
                          </h4>
                          <p className="text-gray-700">
                            Cuenta con medición True RMS y auto-rango, y su pantalla de 6000 cuentas proporciona buena resolución. 
                            Es una opción sólida para <b className="text-blue-700">técnicos de HVAC y electricistas de mantenimiento</b> 
                            que necesitan una herramienta todo-en-uno a precio accesible.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-teal-200">
                            <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Todo-en-uno:</b> Pinza + multímetro completo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio muy atractivo:</b> True RMS y temperatura a bajo costo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Bien calificado:</b> Por usuarios en plataformas mexicanas</span>
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
                                <span><b>Categoría de seguridad:</b> No siempre claramente especificada</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precisión/durabilidad:</b> Pueden no estar al nivel de marcas líderes</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Disponible en Amazon/Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/astroai-multimetro-de-gancho-pinza-amperimetrica-multimetro-digital-automatico-medidor-de-corriente-voltaje-acdc-corriente-alternaresistencia-continua-diodos-pinza-indicador-de-seguridad/p/MLM31014690"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Klein Tools MM400 */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-orange-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-orange-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🔧 #6
                          </Badge>
                          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 font-bold">
                            BÁSICO ROBUSTO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Klein Tools MM400 - Multímetro Digital
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.5) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(625+ reseñas) - 4.5/5</span>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl mb-6">
                          <p className="text-orange-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Electricistas que Confían en Klein, Uso General
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Klein Tools es una <b className="text-orange-700">marca icónica entre electricistas</b>, y el MM400 es su multímetro 
                          de entrada. Es un equipo de rango automático que mide voltaje AC/DC, corriente AC/DC, resistencia, temperatura, 
                          capacitancia y más. Su principal fortaleza es su <b className="bg-orange-100 px-2 py-1 rounded">construcción robusta</b>, 
                          diseñada para soportar caídas de 1 metro y el desgaste del sitio de trabajo.
                        </p>

                        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-4 border-red-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-red-900 mb-2">⚠️ Limitación Crítica para 2025</h4>
                              <p className="text-gray-800 leading-relaxed">
                                <b className="text-red-700">NO es True RMS</b> - Su mayor punto débil para uso profesional en 2025, 
                                limitando su precisión en sistemas modernos con cargas no lineales. El precio puede ser superior al de 
                                modelos como Kaiweets o UNI-T que sí ofrecen True RMS.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-orange-200">
                            <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción robusta:</b> Diseñado para condiciones duras</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca de confianza:</b> Klein Tools tiene gran reputación</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Funcionalidad completa:</b> Temperatura y capacitancia incluidas</span>
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
                                <span><b>NO es True RMS:</b> Limitación crítica para trabajo profesional</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio elevado:</b> Comparado con opciones True RMS de otras marcas</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-700 mb-2">💰 Disponible en Amazon/Home Depot</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://www.homedepot.com/p/Klein-Tools-600V-AC-DC-Auto-Ranging-Digital-Multimeter-Drop-Resistant-Temperature-Measurement-MM400/206517333"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Home Depot →
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
                      title="Análisis Comparativo: Los 3 Mejores Multímetros"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />

                    {/* Análisis de Tendencia */}
                    <motion.div 
                      className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                        <TrendingUp className="h-8 w-8" />
                        📈 Análisis de Tendencia del Mercado
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Esta comparación visual revela una <b className="text-purple-700">tendencia de mercado significativa</b>. Mientras que 
                        los tres modelos comparten las características profesionales esenciales de True RMS y auto-rango, las marcas retadoras 
                        como UNI-T y Kaiweets están <b className="bg-purple-100 px-2 py-1 rounded">superando en especificaciones y funcionalidades</b> 
                        a los modelos de referencia de la industria.
                      </p>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                          <b className="text-purple-900">Observación clave:</b> El Kaiweets HT118A ofrece la clasificación de seguridad 
                          más alta del grupo (CAT IV 600V), y tanto este como la pinza UNI-T incluyen medición de temperatura, función 
                          ausente en el Fluke 117. Esta yuxtaposición obliga a una <b className="text-purple-700">evaluación crítica del valor</b>: 
                          el sobreprecio de una marca establecida ya no garantiza superioridad en todas las especificaciones.
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Guía de Compra Rápida */}
                  <section id="guia-compra" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
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
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-3">Nunca Comprometas la Seguridad</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              La primera y más importante verificación debe ser la <b className="text-red-700">Categoría de Seguridad (CAT)</b>. 
                              Para trabajos profesionales en México, no se debe aceptar nada por debajo de <b>CAT III 600V</b>.
                            </p>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <p className="text-red-800 font-semibold">
                                ⚡ Este no es un simple número en una hoja de especificaciones; es tu <b>equipo de protección personal</b> 
                                más importante como electricista.
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
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3">Exige Precisión: True RMS es Obligatorio</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              En el entorno eléctrico actual, saturado de variadores de velocidad, balastros electrónicos y LEDs, 
                              un medidor sin True RMS <b className="text-blue-700">proporcionará lecturas falsas y potencialmente peligrosas</b>.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-blue-800 font-semibold">
                                ✓ No es un lujo, es una <b>necesidad absoluta</b> para un diagnóstico preciso y seguro en 2025.
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
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-3">Invierte en un Equipo Robusto y Práctico</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              La vida en el sitio de trabajo es dura. Busca características de durabilidad como 
                              <b className="text-green-700"> protección contra caídas</b> y una buena clasificación IP si trabajas en 
                              entornos industriales, sucios o húmedos.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-green-800 font-semibold">
                                💡 Una pantalla grande y retroiluminada y puntas de prueba de silicona de alta calidad <b>no son extras</b>, 
                                son características que hacen el trabajo diario más fácil, rápido y seguro.
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
                            <h4 className="font-bold text-red-900 mb-2">1. Comprar Multímetros Baratos Sin Certificación de Seguridad</h4>
                            <p className="text-gray-700">
                              Adquirir un multímetro genérico sin una <b className="text-red-700">clasificación CAT clara</b> y emitida por 
                              un laboratorio reconocido (como UL o CSA) es arriesgarse a una falla catastrófica. Un transitorio de voltaje puede 
                              hacer que un medidor de baja calidad explote en las manos del usuario, causando lesiones graves. 
                              <b className="text-red-600"> El bajo precio no justifica el riesgo</b>.
                            </p>
                          </div>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-900 mb-2">2. Medir Corriente con un DMM de Forma Incorrecta</h4>
                            <p className="text-gray-700">
                              Intentar medir la corriente de un circuito conectando el multímetro <b className="text-orange-700">en paralelo</b> 
                              (como se mide el voltaje) en lugar de en serie. Esto crea un cortocircuito a través del multímetro. En el mejor 
                              de los casos, se quemará el fusible interno. En el peor, <b className="text-orange-600">el medidor puede ser 
                              destruido y provocar un peligroso arco eléctrico</b>.
                            </p>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
                            <h4 className="font-bold text-yellow-900 mb-2">3. No Inspeccionar las Puntas de Prueba Antes de Cada Uso</h4>
                            <p className="text-gray-700">
                              Un cable dañado, una punta de prueba con el <b className="text-yellow-700">aislamiento agrietado</b> o una 
                              conexión floja pueden exponer al usuario a voltajes peligrosos. La inspección visual de los cables antes de cada 
                              uso es un paso de seguridad crítico que a menudo se omite, pero que puede <b>prevenir accidentes graves</b>.
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
                          El multímetro es una <b className="text-purple-700">inversión en seguridad y calidad profesional</b>, y su 
                          fiabilidad depende de un cuidado básico. Antes de cada uso, realiza una inspección visual de la carcasa y, 
                          fundamentalmente, de los cables y puntas de prueba, buscando grietas, quemaduras o cualquier daño en el aislamiento. 
                          La limpieza debe realizarse con un paño ligeramente húmedo, evitando solventes que puedan dañar la carcasa. Al 
                          reemplazar las baterías, es crucial usar el tipo especificado. Si un fusible se quema, es imperativo reemplazarlo 
                          únicamente con uno del mismo tipo, voltaje y amperaje exactos especificados por el fabricante. 
                          <b className="text-red-600"> Usar un fusible incorrecto anula las protecciones de seguridad</b> del medidor y 
                          lo convierte en un riesgo para el usuario.
                        </p>
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
                            className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-yellow-50 hover:from-yellow-50 hover:to-orange-50 transition-all flex items-center justify-between gap-4"
                          >
                            <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-yellow-600 flex-shrink-0" />
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
                        🎯 Conclusión: Tu Mejor Inversión Profesional
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Gauge className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            Al final del día, la elección de un multímetro profesional es <b className="text-green-700">mucho más que 
                            una simple compra</b>; es una inversión directa en la seguridad personal, en la calidad del trabajo y en 
                            la confianza de los clientes.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Se ha demostrado que <b>no es necesario gastar una fortuna</b> para obtener las características de seguridad 
                            y precisión que el trabajo moderno exige.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 mt-8">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Estándar de Oro</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Fluke 117</b> - Fiabilidad incuestionable, probado en batalla y con reputación mundial. 
                            La elección profesional por excelencia.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Star className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Máximo Valor</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>UNI-T UT204+</b> - La pinza amperimétrica que ofrece versatilidad y conjunto de funciones 
                            que la convierten en la <b className="text-blue-700">opción de más alto valor</b> en el mercado mexicano.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Zap className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Innovación</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Kaiweets HT118A</b> - Especificaciones impresionantes (CAT IV 600V) con precio competitivo. 
                            La mejor opción para quien busca <b className="text-purple-700">máximo rendimiento por su dinero</b>.
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
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">La Clave: Elegir con Sabiduría para Trabajar con Seguridad</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Para el profesional inteligente que busca el <b>máximo rendimiento por su dinero</b>, el mercado ofrece 
                        opciones excepcionales que combinan seguridad, precisión y durabilidad sin comprometer el presupuesto.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        ⚡ La clave es elegir con sabiduría para poder trabajar con seguridad ⚡
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál será tu compañero de diagnóstico profesional? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        🔧 Equípate bien, mide con precisión, trabaja con seguridad 🔧
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