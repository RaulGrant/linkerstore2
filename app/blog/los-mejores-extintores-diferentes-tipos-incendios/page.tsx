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
  Flame,
  Droplets,
  Zap,
  Wind,
  ChevronDown,
  Info,
  TrendingUp,
  FileText,
  Package,
  Activity,
  Eye,
  Beaker,
  ThermometerSun
} from 'lucide-react';
import { useState } from 'react';

export default function ExtintoresGuiaArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedFireClass, setSelectedFireClass] = useState<'a' | 'b' | 'c' | 'k'>('a');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'pqs-abc',
      name: 'Extintor PQS ABC 4.5 kg',
      rating: 4.8,
      reviewCount: 97,
      isRecommended: true,
      bestFor: 'Uso General Oficinas/Hogar',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-703515506-extintor-45-kg-pqs-nuevo-tipo-abc-responsiva-certificado-_JM'
    },
    {
      id: 'co2',
      name: 'Extintor de CO₂ 5 lbs',
      rating: 4.9,
      reviewCount: 150,
      isRecommended: false,
      bestFor: 'Equipos Electrónicos',
      amazonLink: 'https://www.mercadolibre.com.mx/extintor-de-5-lbs-tipo-co2-ideal-para-fuego-bc/p/MLM52296516'
    },
    {
      id: 'clase-k',
      name: 'Extintor Clase K 6 L',
      rating: 5.0,
      reviewCount: 15,
      isRecommended: false,
      bestFor: 'Cocinas Comerciales',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-932269040-extintor-para-cocina-tipo-k-6-litros-curso-letrero-_JM'
    }
  ];

  const comparisonFeatures = [
    { name: 'Agente Extintor', product1: 'Polvo Químico Seco', product2: 'Dióxido de Carbono', product3: 'Químico Húmedo' },
    { name: 'Clases de Fuego', product1: 'A, B, C', product2: 'B, C', product3: 'A, K' },
    { name: 'Capacidad', product1: '4.5 kg', product2: '2.3 kg (5 lbs)', product3: '6 Litros' },
    { name: 'Seguro para Eléctricos', product1: true, product2: true, product3: false },
    { name: 'Deja Residuo', product1: 'Sí (Corrosivo)', product2: 'No (Limpio)', product3: 'Sí (Líquido)' },
    { name: 'Cumplimiento NOM', product1: true, product2: true, product3: true },
    { name: 'Ideal para', product1: 'Multiuso', product2: 'Equipos sensibles', product3: 'Cocinas' },
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
      title: 'Guía Completa de los Mejores Overoles de Trabajo 2025',
      excerpt: 'Análisis detallado de materiales, normativas y productos destacados.',
      description: 'Análisis detallado de materiales, normativas y productos destacados.',
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
      question: '¿Qué significan las letras A, B y C en un extintor?',
      answer: 'Las letras indican la "clase" de fuego para la que el extintor es efectivo. Clase A es para combustibles sólidos como madera, papel y tela. Clase B es para líquidos y gases inflamables como gasolina o aceite. Clase C es para incendios que involucran equipos eléctricos conectados a la corriente. Un extintor que muestra las tres letras, "ABC", es multipropósito y puede usarse de forma segura en los tres tipos de fuego más comunes.'
    },
    {
      question: '¿Cuál es el extintor más recomendable para una casa u oficina en México?',
      answer: 'Para la mayoría de los hogares y oficinas, el extintor más recomendable es uno de Polvo Químico Seco (PQS) de tipo ABC con una capacidad de 4.5 kg. Esta opción es la más versátil, ya que cubre casi todos los riesgos comunes (papel, líquidos, aparatos eléctricos). Además, su capacidad es suficiente para controlar un incendio incipiente en un espacio residencial o de oficina. Es también el tamaño estándar que solicitan las autoridades de Protección Civil para la mayoría de los negocios.'
    },
    {
      question: '¿Cada cuánto se debe recargar un extintor aunque no se use?',
      answer: 'Según la normativa mexicana (NOM-154-SCFI-2005), todos los extintores deben recibir un servicio de mantenimiento por un profesional certificado al menos una vez al año. Durante esta revisión anual, el técnico especializado evaluará el estado del equipo y determinará si es necesaria una recarga. Aunque no se haya usado, el agente químico puede compactarse o el cilindro puede perder presión con el tiempo. Esta revisión es obligatoria para negocios y una práctica de seguridad indispensable para el hogar.'
    },
    {
      question: '¿Cómo sé si mi extintor todavía sirve?',
      answer: 'Puedes hacer una revisión rápida una vez al mes siguiendo tres pasos sencillos. Primero, mira el manómetro: la aguja debe estar apuntando a la zona verde, lo que indica que la presión interna es correcta. Segundo, revisa el sello de seguridad (un pequeño precinto de plástico que atraviesa el pasador metálico) para asegurarte de que no esté roto o manipulado. Finalmente, inspecciona visualmente el cilindro en busca de abolladuras, óxido, fugas o cualquier otro daño evidente.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema fuego/extintores */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fuego (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-fire-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${15 + (i * 8)}, 90%, ${60 + (i % 25)}%)`,
                  left: `${(i * 2.1) % 100}%`,
                  top: `${(i * 3.3) % 100}%`,
                }}
                animate={{
                  x: [0, 90 + (i % 50), -70 + (i % 30), 0],
                  y: [0, -110 + (i % 40), 90 + (i % 35), 0],
                  scale: [0.3, 1.3, 0.4, 1],
                  opacity: [0.2, 0.9, 0.3, 0.7],
                  rotate: [0, 170 + (i % 180), 360]
                }}
                transition={{
                  duration: 11 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.22,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Llamas flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`flame-${i}`}
                className="absolute text-white opacity-30"
                style={{
                  fontSize: `${13 + (i % 9)}px`,
                  left: `${(i * 4.2) % 100}%`,
                  top: `${(i * 5.8) % 100}%`,
                }}
                animate={{
                  y: [0, -55, 0],
                  rotate: [0, 360],
                  opacity: [0.2, 0.7, 0.2]
                }}
                transition={{
                  duration: 10 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.55,
                  ease: "easeInOut"
                }}
              >
                <Flame className="w-6 h-6" />
              </motion.div>
            ))}

            {/* Ondas de calor (35 ondas) */}
            {Array.from({ length: 35 }, (_, i) => (
              <motion.div
                key={`heat-${i}`}
                className="absolute border-2 border-orange-400 rounded-full opacity-30"
                style={{
                  width: 65,
                  height: 65,
                  left: `${(i * 5.8) % 100}%`,
                  top: `${(i * 7.2) % 100}%`,
                }}
                animate={{
                  scale: [0, 3.2, 0],
                  opacity: [0.6, 0, 0.4]
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  delay: i * 0.45,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
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
                <Flame className="h-4 w-4" />
                🔥 Guía de Seguridad Contra Incendios
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Guía Completa de Extintores en México 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Todo lo que necesitas saber: Clasificación, normativas y los mejores productos
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-sm text-orange-200"
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
                  18 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo */}
            {Array.from({ length: 110 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${20 + (i * 13) % 80}, 65%, ${55 + (i % 30)}%)`,
                  left: `${(i * 12) % 100}%`,
                  top: `${(i * 18) % 100}%`,
                }}
                animate={{
                  y: [0, -65, 0],
                  x: [0, 45, -25, 0],
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

          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50"
                >
                  {/* Introducción */}
                  <section id="introduccion" className="mb-16">
                    <motion.div 
                      className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-red-500 rounded-full p-3 flex-shrink-0">
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-red-900 mb-3">⚠️ No Todos los Fuegos Son Iguales</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            Ante el peligro de un incendio, tu primer instinto podría ser buscar el extintor más cercano. 
                            Pero, <strong className="text-red-600">¿sabías que no todos los fuegos son iguales y que usar el 
                            extintor incorrecto puede ser tan peligroso como el propio incendio?</strong> Elegir el equipo 
                            adecuado no es una opción, <b className="bg-red-100 px-2 py-1 rounded">es una necesidad crítica 
                            para proteger tu vida, tu familia y tu patrimonio</b>.
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
                      La selección de un extintor de incendios es una <b>decisión crítica para la seguridad</b> de cualquier 
                      espacio, ya sea un hogar, un vehículo o un centro de trabajo. En México, esta elección no solo se basa 
                      en la eficacia del equipo, sino también en un <b className="text-red-600">estricto marco normativo</b>.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Tu Guía Experta 2025</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía 2025 te convertirá en un experto, ayudándote a navegar el mercado mexicano para encontrar 
                        el extintor perfecto para cada riesgo. Comprenderás las <b>clasificaciones de fuego</b>, los 
                        <b className="text-blue-700"> agentes extintores</b>, el marco normativo obligatorio y los 
                        <b> mejores productos disponibles</b> actualmente.
                      </p>
                    </motion.div>
                  </section>

                  {/* Clasificación de Fuegos */}
                  <section id="clasificacion-fuegos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        🔥 Clasificación de Fuegos: Entendiendo el Riesgo
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      El factor más determinante al elegir un extintor es el <b className="text-red-600">tipo de material 
                      combustible</b> que podría originar un incendio. Utilizar un agente extintor incorrecto no solo puede 
                      ser ineficaz, sino que puede <b>agravar peligrosamente la situación</b>.
                    </motion.p>

                    {/* Selector de Clase de Fuego */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                      <motion.button
                        onClick={() => setSelectedFireClass('a')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedFireClass === 'a'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Clase A
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedFireClass('b')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedFireClass === 'b'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Clase B
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedFireClass('c')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedFireClass === 'c'
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-300'
                        }`}
                      >
                        Clase C
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedFireClass('k')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedFireClass === 'k'
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        Clase K
                      </motion.button>
                    </div>

                    {/* Contenido según clase de fuego seleccionada */}
                    <AnimatePresence mode="wait">
                      {selectedFireClass === 'a' && (
                        <motion.div
                          key="clase-a"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                        >
                          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                            <Package className="h-7 w-7" />
                            Fuego Clase A: Combustibles Sólidos
                          </h3>
                          
                          <div className="bg-white p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-green-800 mb-2">📦 Materiales Involucrados:</h4>
                            <p className="text-gray-700 mb-3">
                              Involucra combustibles sólidos comunes que, al quemarse, <b className="text-green-700">dejan brasas y cenizas</b>. 
                              Esto incluye materiales como madera, papel, textiles, cartón y ciertos plásticos.
                            </p>
                          </div>

                          <div className="bg-green-100 p-6 rounded-xl">
                            <h4 className="font-bold text-green-800 mb-2">💧 Método de Extinción:</h4>
                            <p className="text-gray-700">
                              El método de extinción más efectivo para esta clase es el <b className="text-green-700">enfriamiento</b>, 
                              típicamente logrado con agua o agentes que la contienen. Los extintores PQS ABC también son muy efectivos.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedFireClass === 'b' && (
                        <motion.div
                          key="clase-b"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Droplets className="h-7 w-7" />
                            Fuego Clase B: Líquidos y Gases Inflamables
                          </h3>
                          
                          <div className="bg-white p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-blue-800 mb-2">⛽ Materiales Involucrados:</h4>
                            <p className="text-gray-700 mb-3">
                              Se origina en líquidos inflamables y combustibles, así como en gases. Ejemplos comunes son la 
                              <b className="text-blue-700"> gasolina, el diésel, aceites, solventes, pinturas y gas propano</b>. 
                              Estos fuegos no dejan brasas.
                            </p>
                          </div>

                          <div className="bg-blue-100 p-6 rounded-xl">
                            <h4 className="font-bold text-blue-800 mb-2">🌪️ Método de Extinción:</h4>
                            <p className="text-gray-700">
                              Deben ser extinguidos por <b className="text-blue-700">sofocación</b> (eliminando el oxígeno) o 
                              interrumpiendo la reacción química en cadena de la combustión. Nunca uses agua en estos fuegos.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedFireClass === 'c' && (
                        <motion.div
                          key="clase-c"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-300"
                        >
                          <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
                            <Zap className="h-7 w-7" />
                            Fuego Clase C: Equipos Eléctricos Energizados
                          </h3>
                          
                          <div className="bg-white p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-yellow-800 mb-2">⚡ Materiales Involucrados:</h4>
                            <p className="text-gray-700 mb-3">
                              Implica equipos y aparatos eléctricos que están conectados a una fuente de energía 
                              <b className="text-yellow-700"> ("energizados")</b>, como electrodomésticos, computadoras, 
                              tableros eléctricos y cableado.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-l-4 border-red-500">
                            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              ⚠️ Peligro Principal:
                            </h4>
                            <p className="text-gray-700">
                              El principal riesgo añadido es la <b className="text-red-700">electrocución</b>, por lo que es 
                              imperativo utilizar un agente extintor que no sea conductor de la electricidad. Los extintores 
                              PQS ABC y de CO₂ son seguros para esta clase.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedFireClass === 'k' && (
                        <motion.div
                          key="clase-k"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-red-300"
                        >
                          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                            <Flame className="h-7 w-7" />
                            Fuego Clase K: Aceites y Grasas de Cocina
                          </h3>
                          
                          <div className="bg-white p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-red-800 mb-2">🍳 Materiales Involucrados:</h4>
                            <p className="text-gray-700 mb-3">
                              Es específico de cocinas y se refiere a incendios que involucran 
                              <b className="text-red-700"> aceites y grasas de origen vegetal o animal a muy altas temperaturas</b>, 
                              como los que ocurren en freidoras industriales o sartenes.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-4 border-yellow-400">
                            <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              ⚠️ EXTREMADAMENTE PELIGROSO:
                            </h4>
                            <p className="text-gray-800 font-semibold mb-3">
                              Estos fuegos son particularmente peligrosos. <b className="text-red-700">El uso de agua puede 
                              provocar una reacción violenta y explosiva</b> que esparce el aceite en llamas.
                            </p>
                            <p className="text-gray-700">
                              Requieren un agente especializado que enfríe y sofoque el fuego mediante un proceso químico 
                              llamado <b className="text-red-700">saponificación</b> (convierte la grasa en espuma jabonosa).
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Agentes Extintores */}
                  <section id="agentes-extintores" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🧪 Agentes Extintores: El Arsenal Contra el Fuego
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Cada clase de fuego requiere un <b className="text-purple-600">"arma" específica</b>. Los agentes 
                      extintores son las sustancias contenidas dentro del cilindro del extintor, diseñadas para combatir 
                      eficazmente uno o más tipos de fuego.
                    </motion.p>

                    <div className="space-y-8">
                      {/* PQS ABC */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-yellow-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-yellow-500 rounded-2xl p-4 flex-shrink-0">
                            <Beaker className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-yellow-900">Polvo Químico Seco (PQS) - Tipo ABC</h3>
                            <p className="text-gray-600 text-sm">El "Todoterreno" Más Popular en México</p>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl mb-4">
                          <h4 className="font-bold text-yellow-800 mb-2">📝 Descripción:</h4>
                          <p className="text-gray-700">
                            Es el agente más versátil y popular en México. Compuesto principalmente de 
                            <b className="text-yellow-700"> fosfato monoamónico</b>, es eficaz contra fuegos de 
                            <b> Clase A, B y C</b>, ya que no conduce la electricidad.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Versatilidad total (Clases A, B, C)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precio económico</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Ampliamente disponible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Estándar para cumplimiento NOM</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Desventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Residuo corrosivo</b> dañino para electrónicos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Limpieza difícil y exhaustiva</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Puede dañar maquinaria delicada</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      {/* CO₂ */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <Wind className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-blue-900">Dióxido de Carbono (CO₂)</h3>
                            <p className="text-gray-600 text-sm">Agente Limpio para Equipos Sensibles</p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl mb-4">
                          <h4 className="font-bold text-blue-800 mb-2">📝 Descripción:</h4>
                          <p className="text-gray-700">
                            Es un gas que apaga el fuego al <b className="text-blue-700">desplazar el oxígeno</b> (sofocación) 
                            y enfriar drásticamente la temperatura. Es un agente <b>"limpio"</b>, lo que significa que 
                            <b className="bg-blue-100 px-2 py-1 rounded mx-1">no deja ningún tipo de residuo</b>.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>No deja residuo</b> - protege equipos costosos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No conductor de electricidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Enfriamiento rápido</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Ideal para servidores, laboratorios</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Desventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Limitado en fuegos Clase A</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Riesgo de asfixia</b> en espacios cerrados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Más costoso que PQS</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      {/* Químico Húmedo */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-red-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-red-500 rounded-2xl p-4 flex-shrink-0">
                            <Flame className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-red-900">Químico Húmedo (Acetato de Potasio)</h3>
                            <p className="text-gray-600 text-sm">Especializado para Clase K - Cocinas</p>
                          </div>
                        </div>

                        <div className="bg-red-50 p-6 rounded-xl mb-4">
                          <h4 className="font-bold text-red-800 mb-2">📝 Descripción:</h4>
                          <p className="text-gray-700">
                            Este agente líquido está diseñado específicamente para los fuegos de Clase K. Al ser descargado 
                            sobre aceite o grasa caliente, provoca una reacción química conocida como 
                            <b className="text-red-700"> saponificación</b>, que crea una capa de espuma jabonosa sobre la superficie.
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-4 border-yellow-400 mb-4">
                          <h4 className="font-bold text-yellow-900 mb-2">⚗️ Proceso de Saponificación:</h4>
                          <p className="text-gray-800">
                            La espuma jabonosa <b>sofoca las llamas</b> y, al mismo tiempo, <b>enfría el aceite</b> por debajo 
                            de su temperatura de ignición, evitando que el fuego se reinicie.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Único efectivo</b> para aceites de cocina</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Previene la reignición</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Aplicación suave evita salpicaduras</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción robusta (acero inoxidable)</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Limitaciones
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Uso muy específico (solo A y K)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No apto para fuegos eléctricos (Clase C)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Costo elevado vs PQS</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      {/* Agua */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-cyan-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-cyan-500 rounded-2xl p-4 flex-shrink-0">
                            <Droplets className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-cyan-900">Agua a Presión</h3>
                            <p className="text-gray-600 text-sm">Básico y Limitado - Solo Clase A</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-4 border-red-400">
                          <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6" />
                            ⚠️ ADVERTENCIA CRÍTICA:
                          </h4>
                          <p className="text-gray-800 font-semibold mb-3">
                            Este es el agente más básico, efectivo únicamente para fuegos de Clase A por su gran capacidad 
                            de enfriamiento. Su uso es <b className="text-red-700">extremadamente limitado y peligroso</b>:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-800">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span><b>Clase B:</b> Puede esparcir el líquido inflamable</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span><b>Clase C:</b> Alto riesgo de electrocución</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span><b>Clase K:</b> Causa reacción explosiva</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Capacidad y Rating */}
                  <section id="capacidad-rating" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                        📏 Capacidad y Rating: Decodificando la Etiqueta
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La etiqueta de un extintor contiene dos datos cruciales que informan sobre su <b className="text-green-600">potencia</b>: 
                      la capacidad y el rating de extinción.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border-2 border-blue-200"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Package className="h-8 w-8 text-blue-600" />
                          <h3 className="text-2xl font-bold text-blue-900">Capacidad Nominal</h3>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                          <p className="text-gray-700 mb-4">
                            Indica la <b className="text-blue-700">cantidad de agente extintor</b> que contiene el cilindro. 
                            Se expresa en:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span><b>Kilogramos (kg)</b> para agentes en polvo (PQS)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span><b>Litros (L)</b> para agentes líquidos (Químico Húmedo)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">📊 Capacidades Comunes:</h4>
                          <ul className="text-sm text-blue-900 space-y-1">
                            <li>• <b>1-2.5 kg:</b> Automóviles</li>
                            <li>• <b>4.5 kg:</b> Oficinas y comercios</li>
                            <li>• <b>9 kg+:</b> Talleres e industria</li>
                          </ul>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border-2 border-purple-200"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Activity className="h-8 w-8 text-purple-600" />
                          <h3 className="text-2xl font-bold text-purple-900">Rating de Extinción</h3>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                          <p className="text-gray-700 mb-4">
                            Es una clasificación alfanumérica (ej. <b className="bg-purple-100 px-2 py-1 rounded">2-A:10-B:C</b>) 
                            que mide el <b className="text-purple-700">poder de extinción</b> bajo pruebas UL estandarizadas:
                          </p>
                          <div className="space-y-3 text-sm text-gray-700">
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="font-bold text-purple-800 mb-1">Número antes de 'A':</p>
                              <p>Cada unidad = 1.25 galones de agua. <b>2A</b> = 2.5 galones de capacidad</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="font-bold text-purple-800 mb-1">Número antes de 'B':</p>
                              <p>Área en pies² de fuego líquido. <b>10B</b> = 10 pies² (~0.93 m²)</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="font-bold text-purple-800 mb-1">Letra 'C':</p>
                              <p>Confirma que es <b>seguro para fuegos eléctricos</b> (no conductor)</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Marco Normativo */}
                  <section id="marco-normativo" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ⚖️ Marco Normativo Mexicano
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-400 p-8 rounded-2xl mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-10 w-10 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-yellow-900 mb-3">⚠️ No es Opcional, es Ley</h3>
                          <p className="text-gray-800 leading-relaxed mb-4 text-lg">
                            En México, la posesión y el mantenimiento de extintores en entornos laborales 
                            <span className="bg-yellow-200 px-2 py-1 rounded font-semibold mx-1">no es opcional, sino una obligación legal</span>. 
                            La normativa busca garantizar que los equipos sean adecuados para el riesgo y estén en condiciones operativas óptimas.
                          </p>
                          <p className="text-gray-800 leading-relaxed font-semibold">
                            El cumplimiento protege al trabajador y exime al empleador de responsabilidades legales en caso de accidente.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* NOM-002-STPS-2010 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-red-600 mb-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <FileText className="h-10 w-10 text-red-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-red-900">NOM-002-STPS-2010</h3>
                          <p className="text-gray-600 text-sm">Prevención y Protección contra Incendios en los Centros de Trabajo</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Esta Norma Oficial Mexicana es la <b className="text-red-700">piedra angular de la seguridad contra incendios</b> 
                        en los centros de trabajo. Obliga a los empleadores a:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-red-50 p-6 rounded-xl">
                          <h4 className="font-bold text-red-800 mb-3">📋 Obligaciones del Patrón:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>Realizar análisis para clasificar el <b>riesgo de incendio</b> (ordinario o alto)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>Instalar extintores <b>adecuados y suficientes</b></span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>Asegurar que estén <b>visibles y accesibles</b></span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span><b>Señalizarlos correctamente</b> con letreros</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>Proporcionar <b>mantenimiento periódico</b></span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">🎯 Impacto en el Mercado:</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            La existencia de esta norma es un <b className="text-green-700">motor principal del mercado</b>, 
                            ya que la compra de extintores para negocios está fuertemente impulsada por la necesidad de 
                            cumplir con estas disposiciones.
                          </p>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm text-green-800 font-semibold">
                              💡 Esto explica la omnipresencia del <b>extintor PQS ABC de 4.5 kg</b>, que se ha convertido 
                              en el estándar de facto para la mayoría de los establecimientos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* NOM-154-SCFI-2005 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-600 mb-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Activity className="h-10 w-10 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-blue-900">NOM-154-SCFI-2005</h3>
                          <p className="text-gray-600 text-sm">Equipos contra incendio - Extintores - Servicio de mantenimiento y recarga</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-xl mb-4">
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Esta norma regula a las empresas que prestan el <b className="text-blue-700">servicio de mantenimiento 
                          y recarga de extintores</b>. La ley exige que cada extintor reciba un servicio de mantenimiento completo 
                          por una empresa dictaminada (certificada) <b>al menos una vez al año</b>, incluso si el equipo no ha sido utilizado.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-3">🔧 Mantenimiento Anual:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Verificación de componentes internos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Comprobación de presión</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Recarga del agente si es necesario</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Emisión de etiqueta de servicio</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                          <h4 className="font-bold text-purple-800 mb-3">📅 Inspección Mensual:</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Adicional al servicio profesional anual, el propietario debe realizar una <b>inspección visual cada mes</b>:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Aguja en zona verde</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Sellos intactos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Sin daños físicos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Acceso despejado</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>

                    {/* Conclusión Normativa */}
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">Interacción Entre Normativas</h3>
                      </div>
                      <p className="leading-relaxed text-lg mb-4">
                        La interacción entre estos factores define el mercado. Por ejemplo, la propiedad <b>corrosiva del PQS</b>, 
                        el agente más común, crea una demanda específica para agentes limpios como el CO₂.
                      </p>
                      <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                        <p className="text-white leading-relaxed">
                          💡 El daño potencial a equipos electrónicos o maquinaria de alto valor es la <b>causa directa</b> que 
                          justifica la inversión en un extintor de CO₂, que, aunque más costoso inicialmente, previene pérdidas 
                          económicas mucho mayores por daños colaterales post-extinción.
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Top 6 Productos */}
                  <section id="productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Extintores Destacados del Mercado Mexicano
                      </span>
                    </motion.h2>

                    {/* Nota importante sobre calificaciones */}
                    <motion.div 
                      className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-12"
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
                      {/* Producto #1 - PQS ABC 4.5kg */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-6 py-3">
                            🥇 #1
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            MEJOR CUMPLIMIENTO NORMATIVO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Extintor De Polvo Químico Seco De 4.5kg PQS ABC Nuevo
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(97+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Establecimientos comerciales, oficinas y hogares con riesgos mixtos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este es el extintor <b className="text-green-700">más versátil y comúnmente requerido en México</b> para 
                          establecimientos comerciales, oficinas y hogares. Su capacidad de 4.5 kg de Polvo Químico Seco (PQS) es 
                          eficaz contra fuegos de <b className="bg-green-100 px-2 py-1 rounded">Clase A (sólidos), B (líquidos) y C (eléctricos)</b>. 
                          Vendedores como Grupo GK a menudo lo ofrecen como un paquete de cumplimiento, incluyendo carta responsiva 
                          para Protección Civil y bitácora de mantenimiento.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            Estándar de la Industria
                          </h4>
                          <p className="text-gray-700">
                            La capacidad de 4.5 kg es el <b className="text-blue-700">estándar mínimo exigido por Protección Civil</b> 
                            para la mayoría de los negocios en México. Su popularidad se debe a décadas de demostrar efectividad 
                            en incendios reales.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Versatilidad Total:</b> Combate los tres tipos de fuego más comunes (A, B, C)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Cumplimiento Normativo:</b> Tamaño estándar para negocios en México</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Mejor Relación Costo-Beneficio:</b> Más económico para protección certificada</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Alta Disponibilidad:</b> Modelo más vendido con mayor confianza del mercado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Incluye documentación para Protección Civil</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Residuo Corrosivo:</b> El polvo puede dañar permanentemente equipos electrónicos y motores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Limpieza Difícil:</b> El residuo es un polvo fino que requiere limpieza exhaustiva</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No ideal para áreas con equipos sensibles o electrónica delicada</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Rango de Precio: $250 - $400 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-703515506-extintor-45-kg-pqs-nuevo-tipo-abc-responsiva-certificado-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - CO₂ 5 lbs */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            MEJOR PARA ELECTRÓNICOS
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Extintor De 5 Lbs Tipo Co2 Ideal Para Fuego BC
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">Calificado como "MÁS VENDIDO"</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Servidores, Equipo Médico, Laboratorios, Centros de Datos, Equipos Electrónicos Costosos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este extintor de 5 lbs (2.3 kg) de <b className="text-blue-700">Dióxido de Carbono (CO₂)</b> está diseñado 
                          para fuegos de Clase B (líquidos inflamables) y C (eléctricos). Su principal ventaja es que es un 
                          <b className="bg-blue-100 px-2 py-1 rounded mx-1">agente limpio</b>: el gas se disipa sin dejar residuos, 
                          evitando daños a equipos electrónicos sensibles. Es la elección profesional para centros de datos, 
                          cocinas con equipos eléctricos costosos y laboratorios.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Eye className="h-6 w-6" />
                            Protección de Activos Valiosos
                          </h4>
                          <p className="text-gray-700 mb-3">
                            No deja <b className="text-green-700">ningún residuo</b>, protegiendo equipos costosos y delicados de 
                            daños colaterales. La inversión en este extintor puede salvar equipos que valen miles de veces su costo.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-green-800 font-semibold">
                              💡 <b>Ejemplo:</b> Un servidor que vale $50,000 MXN puede salvarse con un extintor de $800 MXN, 
                              vs. un PQS que lo destruiría con su polvo corrosivo.
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Agente Limpio:</b> No deja residuo, protege equipos costosos y delicados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Seguridad Eléctrica:</b> No conductor, extremadamente seguro para equipos energizados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Enfriamiento Rápido:</b> La descarga de CO₂ es extremadamente fría</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Ideal para salas de servidores, centros de cómputo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Previene pérdidas económicas millonarias</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Eficacia Limitada en Clase A:</b> No es ideal para materiales sólidos como madera o papel</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Riesgo de Asfixia:</b> En espacios cerrados puede desplazar el oxígeno</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precio más elevado que extintores PQS</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Rango de Precio: $700 - $1,000 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/extintor-de-5-lbs-tipo-co2-ideal-para-fuego-bc/p/MLM52296516"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Clase K */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl shadow-2xl border-2 border-red-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-red-500 text-white font-bold text-lg px-6 py-3">
                            🥉 #3
                          </Badge>
                          <Badge className="bg-red-100 text-red-800 px-4 py-2 font-bold">
                            ESPECIALISTA EN COCINAS
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Extintor Para Cocina Tipo K 6 Litros + Curso + Letrero
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(15+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Restaurantes, Cocinas Industriales, Freidoras, Áreas de Preparación de Alimentos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este extintor de 6 litros utiliza un <b className="text-red-700">agente químico húmedo a base de acetato de potasio</b>, 
                          diseñado específicamente para los peligrosos fuegos de Clase K (aceites y grasas de cocina). El agente crea una 
                          <b className="bg-red-100 px-2 py-1 rounded mx-1">capa de espuma jabonosa</b> que sofoca las llamas y enfría el 
                          aceite para prevenir la reignición. Su cilindro de acero inoxidable resiste la corrosión en ambientes de cocina.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl mb-6 border-4 border-yellow-400">
                          <h4 className="font-bold text-yellow-900 mb-3 text-lg flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6" />
                            ⚠️ INDISPENSABLE en Cocinas Comerciales
                          </h4>
                          <p className="text-gray-800 font-semibold mb-3">
                            Los fuegos de aceite son <b className="text-red-700">EXTREMADAMENTE PELIGROSOS</b>. Usar agua o 
                            un extintor incorrecto puede causar una explosión violenta que esparce el aceite en llamas.
                          </p>
                          <p className="text-gray-700">
                            Este es el <b className="text-red-700">ÚNICO tipo de extintor verdaderamente efectivo y seguro</b> 
                            para apagar fuegos de aceites de cocina a alta temperatura. No es opcional, es obligatorio.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Especialista en Grasas:</b> Único realmente efectivo para aceites de cocina</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Previene Reignición:</b> El efecto de saponificación enfría el combustible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Aplicación Suave:</b> Boquilla especial evita salpicaduras peligrosas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción Robusta:</b> Acero inoxidable para ambientes de cocina</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Incluye curso y letrero de señalización</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Uso Específico:</b> No es multipropósito, limitado a Clase A y K</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>No para Clase C:</b> No recomendado para fuegos eléctricos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Costo Elevado:</b> Significativamente más caro que PQS</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">💰 Rango de Precio: $1,500 - $2,500 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-932269040-extintor-para-cocina-tipo-k-6-litros-curso-letrero-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Compacto para Auto */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl border-2 border-purple-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-purple-500 text-white font-bold text-lg px-6 py-3">
                            🚗 #4
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 font-bold">
                            MEJOR PARA VEHÍCULOS
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Extintor Recargable Auto Camioneta Universal 1 Kg C/ Base
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(240+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Automóviles, Camionetas, Vehículos Particulares y Comerciales
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este extintor compacto de 1 kg de PQS tipo ABC es ideal para llevar en un automóvil. Su 
                          <b className="text-purple-700"> tamaño reducido</b> permite un fácil almacenamiento, y su 
                          <b className="bg-purple-100 px-2 py-1 rounded mx-1">base de montaje incluida</b> lo mantiene seguro 
                          y sin rodar. A pesar de su tamaño, ofrece protección contra los tipos de fuego más probables en un 
                          vehículo: sólidos (tapicería), líquidos (combustible) y eléctricos.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl mb-6 border-2 border-yellow-300">
                          <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            💡 Importante para Vehículos
                          </h4>
                          <p className="text-gray-700">
                            Con solo 1 kg de agente, el tiempo de descarga es muy corto (aproximadamente 6-10 segundos), 
                            adecuado <b className="text-yellow-700">solo para incendios muy pequeños e incipientes</b>. 
                            Sin embargo, esos segundos pueden salvar tu vehículo y tu vida.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-purple-200">
                            <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño Compacto:</b> Fácil de almacenar sin ocupar mucho espacio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Soporte Incluido:</b> Base de montaje evita que se dañe o descargue</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección ABC:</b> Cubre todos los riesgos de un automóvil</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Recargable:</b> No es de un solo uso, puede recargarse</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Muy alta calificación de usuarios (4.8/5)</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Capacidad Limitada:</b> Solo 6-10 segundos de descarga, para fuegos muy pequeños</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Residuo Dañino:</b> El polvo puede ser corrosivo en el motor</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Requiere limpieza inmediata después de usar</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Rango de Precio: $150 - $250 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-2889051444-extintor-recargable-auto-camioneta-universal-1-kg-c-base-bgs-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Kidde FA110 */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-6 py-3">
                            🏠 #5
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            MARCA INTERNACIONAL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Kidde FA110 Multi Propósito Extintor
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(20,000+ reseñas globales) - 4.7/5</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Seguridad del Hogar, Departamentos, Casas Particulares
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este extintor de la reconocida marca Kidde es una opción popular para la seguridad del hogar. Con 
                          <b className="text-teal-700"> 2.5 lbs (1.1 kg) de agente PQS ABC</b>, es adecuado para combatir los 
                          incendios domésticos más comunes (basura, líquidos, eléctricos). Su diseño compacto, construcción de 
                          <b className="bg-teal-100 px-2 py-1 rounded mx-1">aluminio ligero</b> y el soporte incluido lo hacen 
                          fácil de instalar y manejar en una emergencia.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Marca de Prestigio Mundial
                          </h4>
                          <p className="text-gray-700">
                            <b className="text-blue-700">Kidde es un líder mundial</b> en seguridad contra incendios, lo que 
                            inspira confianza en la calidad del producto. Miles de reseñas positivas a nivel mundial respaldan 
                            su fiabilidad. Ofrece una garantía limitada de 6 años del fabricante.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-teal-200">
                            <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca de Prestigio:</b> Kidde es líder mundial en seguridad contra incendios</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ligero y Fácil de Usar:</b> Construcción de aluminio, manejable para cualquiera</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Altamente Calificado:</b> Miles de reseñas positivas globales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Garantía Extendida:</b> 6 años de garantía del fabricante</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Disponible en Amazon México con Prime</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>De Un Solo Uso:</b> El modelo FA110 está diseñado para ser desechado después de usar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>No Recargable:</b> No puede recargarse profesionalmente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Capacidad Reducida:</b> Limitado a incendios pequeños</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Ver precio en Amazon México</p>
                              <p className="text-sm text-gray-600">* Disponible con Amazon Prime</p>
                            </div>
                            <a 
                              href="https://www.amazon.com.mx/Kidde-FA110-Multi-Prop%C3%B3sito-extintor-unidad/dp/B00002ND64/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Amazon →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Jaloma Básico */}
                      <motion.div 
                        className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-3xl shadow-2xl border-2 border-amber-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-amber-500 text-white font-bold text-lg px-6 py-3">
                            💰 #6
                          </Badge>
                          <Badge className="bg-amber-100 text-amber-800 px-4 py-2 font-bold">
                            OPCIÓN ECONÓMICA
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Jaloma Botiquín en Caja Plástica (Extintor Portátil Básico)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(300+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-xl mb-6">
                          <p className="text-amber-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Presupuesto Ajustado, Primer Extintor para el Hogar, Uso Esporádico
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este es un kit básico y muy popular en México, ideal para tener una <b className="text-amber-700">solución 
                          fundamental de primeros auxilios contra incendios</b> a un costo muy bajo. Aunque la capacidad es más pequeña, 
                          su <b className="bg-amber-100 px-2 py-1 rounded mx-1">estuche de plástico lo hace portátil</b> para emergencias menores en entornos de bajo riesgo.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            Marca Reconocida en México
                          </h4>
                          <p className="text-gray-700">
                            <b className="text-green-700">Jaloma es una marca reconocida y de confianza</b> en el mercado mexicano. 
                            Aunque es una opción económica, mantiene estándares de calidad básicos que la hacen ideal como primer 
                            extintor o para lugares donde el riesgo de incendio es muy bajo.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Extremadamente Económico:</b> Precio muy accesible para cualquier presupuesto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca Reconocida:</b> Jaloma es confiable en México</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Portátil:</b> Estuche ligero con asa para transporte</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Ideal como primer extintor o backup</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Capacidad Limitada:</b> No apto para entornos industriales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Menos Duradero:</b> Estuche de plástico menos resistente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Puede no cumplir requisitos de negocios</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-xl border-2 border-amber-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-amber-700 mb-2">💰 Rango de Precio: $100 - $200 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/jaloma-botiquin-en-caja-plastica-primeros-auxilios-22-pzas/p/MLM35212740"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Comparación de Productos */}
                  <section id="comparacion" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                        📊 Comparación Detallada: Top 3 Cara a Cara
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Comparativo: Los 3 Extintores Esenciales"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />
                  </section>

                  {/* Guía de Compra Rápida */}
                  <section id="guia-compra" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🛒 Guía de Compra Rápida por Aplicación
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Los profesionales industriales no buscan un producto químico, sino una <b className="text-orange-600">solución 
                      a un problema específico</b>. Esta guía traduce los datos técnicos en recomendaciones directas.
                    </motion.p>

                    <div className="space-y-8">
                      {/* Para Oficina/Casa */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 rounded-2xl p-4 flex-shrink-0">
                            <Package className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-green-900 mb-3">
                              Para Oficina o Casa
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">(Protección general contra riesgos mixtos)</p>
                            
                            <div className="bg-green-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-green-700">Recomendación:</b> Un extintor de <b>Polvo Químico Seco (PQS) tipo ABC 
                                de 4.5 kg</b> es la opción más práctica, económica y cumple con los requisitos de Protección Civil.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                              <h4 className="font-bold text-green-800 mb-2">🏆 Producto Recomendado:</h4>
                              <p className="text-sm text-gray-700">
                                <b>Extintor PQS ABC 4.5 kg (Grupo GK)</b> - Incluye carta responsiva y bitácora. Es el estándar 
                                de la industria y cubre A, B y C.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Para Equipos Electrónicos */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <Zap className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">
                              Para Proteger Equipos Electrónicos Valiosos
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">(Servidores, centros de datos, equipos médicos)</p>
                            
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-blue-700">Recomendación:</b> La única opción segura es un extintor de 
                                <b> Dióxido de Carbono (CO₂)</b>. No deja residuo y no daña los equipos sensibles. 
                                <b className="text-red-600"> Nunca uses PQS en estas áreas</b>.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border-2 border-blue-300">
                              <h4 className="font-bold text-blue-800 mb-2">🏆 Producto Recomendado:</h4>
                              <p className="text-sm text-gray-700">
                                <b>Extintor de CO₂ 5 lbs (Instrutek)</b> - Agente limpio, no conductor, perfecto para salas de 
                                servidores y equipos costosos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Para Cocinas */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-red-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-red-500 rounded-2xl p-4 flex-shrink-0">
                            <Flame className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-red-900 mb-3">
                              Para Cocinas Comerciales y Restaurantes
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">(Freidoras, áreas de preparación con aceite)</p>
                            
                            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-4 rounded-xl border-4 border-yellow-400 mb-4">
                              <p className="text-gray-800 font-semibold">
                                <AlertTriangle className="h-5 w-5 inline mr-2 text-red-600" />
                                <b className="text-red-700">Es OBLIGATORIO</b> tener un extintor especializado Clase K. 
                                Los fuegos de aceite son extremadamente peligrosos y el agua o PQS pueden causar explosiones.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-xl border-2 border-red-300">
                              <h4 className="font-bold text-red-800 mb-2">🏆 Producto Recomendado:</h4>
                              <p className="text-sm text-gray-700">
                                <b>Extintor Clase K 6 Litros (Grupo GK)</b> - Con químico húmedo (acetato de potasio), 
                                crea espuma jabonosa que sofoca y enfría el aceite.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Para Vehículos */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-purple-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 rounded-2xl p-4 flex-shrink-0">
                            <Activity className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-purple-900 mb-3">
                              Para Tu Vehículo
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">(Automóvil, camioneta, vehículo comercial)</p>
                            
                            <div className="bg-purple-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-purple-700">Recomendación:</b> Un extintor compacto de <b>1 kg de PQS tipo ABC</b> 
                                es ideal. Debe incluir base de montaje para evitar que ruede y se dañe.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300">
                              <h4 className="font-bold text-purple-800 mb-2">🏆 Producto Recomendado:</h4>
                              <p className="text-sm text-gray-700 mb-2">
                                <b>Extintor Recargable Auto 1 kg (BGS)</b> - Compacto, con base incluida, recargable y 
                                cubre todos los riesgos vehiculares.
                              </p>
                              <p className="text-xs text-purple-700 italic">
                                💡 Recuerda: Solo 6-10 segundos de descarga, para fuegos incipientes únicamente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Consejos Clave */}
                    <motion.div 
                      className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-indigo-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
                        💡 3 Consejos Clave para Acertar
                      </h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="text-center mb-4">
                            <span className="text-4xl">🎯</span>
                            <h4 className="font-bold text-indigo-800 mt-2">1. Identifica tu Riesgo</h4>
                          </div>
                          <p className="text-sm text-gray-700 text-center">
                            Antes de comprar, analiza qué materiales combustibles hay en tu espacio. ¿Oficina con papel y computadoras? 
                            ¿Taller con solventes? ¿Cocina con freidoras? La respuesta define el tipo de extintor.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="text-center mb-4">
                            <span className="text-4xl">🔄</span>
                            <h4 className="font-bold text-indigo-800 mt-2">2. Versatilidad vs Especialización</h4>
                          </div>
                          <p className="text-sm text-gray-700 text-center">
                            Si tienes dudas, el PQS ABC es la opción más segura para protección integral. Pero si tienes equipos 
                            costosos o una cocina comercial, invierte en el especializado.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="text-center mb-4">
                            <span className="text-4xl">📚</span>
                            <h4 className="font-bold text-indigo-800 mt-2">3. Aprende a Usarlo</h4>
                          </div>
                          <p className="text-sm text-gray-700 text-center">
                            Un extintor es inútil si no sabes operarlo bajo presión. Memoriza la técnica P.A.S.E.: 
                            <b> Pull, Aim, Squeeze, Sweep</b> (Tira, Apunta, Suelta, Barre).
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Errores Comunes */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                        ❌ 3 Errores Comunes a Evitar
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                          <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-red-900 mb-2">1. Usar Agua en Fuegos Eléctricos o de Grasa</h4>
                              <p className="text-gray-700 text-sm">
                                Este es el error más peligroso. Usar agua en un fuego eléctrico (Clase C) puede provocar 
                                <b className="text-red-700"> electrocución mortal</b>. En grasa de cocina (Clase K), causará una 
                                <b className="text-red-700"> explosión violenta</b> que esparce el aceite en llamas.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                          <div className="flex items-start gap-4">
                            <Package className="h-8 w-8 text-orange-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-orange-900 mb-2">2. Comprar un Extintor Demasiado Pequeño</h4>
                              <p className="text-gray-700 text-sm">
                                Un extintor compacto de 1 kg es adecuado para un vehículo, pero será completamente insuficiente 
                                para un incendio en una habitación u oficina. La capacidad debe ser proporcional al área y 
                                cantidad de material combustible.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
                          <div className="flex items-start gap-4">
                            <Activity className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-yellow-900 mb-2">3. Olvidar el Mantenimiento Anual Obligatorio</h4>
                              <p className="text-gray-700 text-sm">
                                En México, la NOM-154-SCFI-2005 exige que todos los extintores reciban revisión profesional 
                                <b className="text-yellow-700"> al menos una vez al año</b>. Omitir este paso es ilegal y te 
                                deja con una falsa sensación de seguridad.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mantenimiento */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Shield className="h-8 w-8 text-green-600" />
                        <h3 className="text-2xl font-bold text-green-900">🔧 Mantenimiento: La Clave de la Seguridad</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Tu extintor es un dispositivo de seguridad que requiere cuidado constante para ser fiable. 
                        <b className="text-green-700"> Mensualmente</b>, realiza una inspección visual rápida: comprueba que 
                        la aguja del manómetro esté en la zona verde, que el pasador de seguridad y el sello no estén rotos, 
                        y que no haya golpes, óxido o fugas.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">📅 Inspección Mensual (Tú mismo):</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Aguja del manómetro en zona verde</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Sello de seguridad intacto</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Sin daños físicos visibles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Acceso libre y despejado</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3">🔧 Mantenimiento Anual (Profesional):</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            <b className="text-blue-700">Crucial y obligatorio</b> para negocios según la NOM-002-STPS-2010. 
                            Debes contratar a una empresa especializada y certificada para:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Verificar componentes internos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Recargar agente si es necesario</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Emitir etiqueta y reporte certificado</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
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
                            className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-orange-50 hover:from-orange-50 hover:to-red-50 transition-all flex items-center justify-between gap-4"
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
                                <div className="p-6 bg-white text-gray-700 leading-relaxed">
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
                  <section id="conclusion" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        🎯 Conclusión: Equípate con Inteligencia, Protégete con Confianza
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-8 rounded-r-2xl shadow-lg mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Flame className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            La seguridad contra incendios es una <b className="text-green-700">inversión, no un gasto</b>. 
                            Ahora que conoces las clases de fuego y los agentes para combatirlos, la elección es clara.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            La prevención es tu primera línea de defensa, pero tener la herramienta correcta es tu mejor plan de respaldo.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Uso General</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Extintor PQS ABC 4.5 kg</b> - El equipo indispensable que todo hogar y negocio en México debería tener.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Zap className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor para Electrónicos</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Extintor de CO₂ 5 lbs</b> - Inversión inteligente que salvará equipos costosos e irremplazables.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
                          <div className="text-center mb-4">
                            <Flame className="h-10 w-10 mx-auto text-red-600 mb-2" />
                            <h3 className="text-lg font-bold text-red-900">Mejor para Cocinas</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Extintor Clase K 6 L</b> - Obligatorio y especializado para restaurantes y cocinas comerciales.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-2xl mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">No Esperes a la Emergencia</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Para una protección integral y el cumplimiento normativo, el extintor PQS ABC de 4.5 kg es el equipo 
                        indispensable. Y si buscas proteger activos electrónicos irremplazables, invertir en un extintor de CO₂ 
                        no es un lujo, es una <b>decisión financiera inteligente</b> que te salvará de pérdidas mucho mayores.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🔥 Equípate hoy y vive con la tranquilidad de estar preparado 🔥
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        🛡️ La unión perfecta es aquella que protege tu vida
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        Elige con precisión técnica, confía en el extintor correcto
                      </p>
                    </motion.div>
                  </section>

                  {/* Artículos Relacionados */}
                  <section id="articulos-relacionados" className="mb-12">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
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