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
  Thermometer,
  Zap,
  Target,
  Eye,
  Radio,
  Settings,
  TrendingUp,
  Info,
  ChevronDown,
  Droplet,
  Flame,
  Wind,
  Activity,
  BarChart3,
  Gauge
} from 'lucide-react';
import { useState } from 'react';

export default function TermometrosIndustrialesArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<'infrarrojo' | 'contacto' | 'hibrido'>('infrarrojo');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'fluke-62-max',
      name: 'Fluke 62 MAX',
      rating: 4.7,
      reviewCount: 23,
      isRecommended: true,
      bestFor: 'Estándar Oro en Durabilidad',
      amazonLink: 'https://www.mercadolibre.com.mx/fluke-62-max-termometro-inflarrojo-30-a-500-c-pistola/p/MLM24631909'
    },
    {
      id: 'fluke-51-ii',
      name: 'Fluke 51 II',
      rating: 4.8,
      reviewCount: 0,
      isRecommended: false,
      bestFor: 'Alta Precisión por Contacto',
      amazonLink: 'https://www.mercadolibre.com.mx/termometro-digital-de-contacto-fluke-51ii/up/MLMU557593774'
    },
    {
      id: 'klein-ir07',
      name: 'Klein Tools IR07',
      rating: 4.5,
      reviewCount: 0,
      isRecommended: true,
      bestFor: 'Mejor Híbrido Compacto',
      amazonLink: 'https://www.mercadolibre.com.mx/termometro-de-bolsillo-infrarojo-con-sonda-ir07-klein-tools/p/MLM31743207'
    }
  ];

  const comparisonFeatures = [
    { name: 'Tipo de Termómetro', product1: 'Infrarrojo', product2: 'Contacto (Termopar)', product3: 'Híbrido (IR + Sonda)' },
    { name: 'Rango de Temperatura', product1: '-30°C a 500°C (IR)', product2: '-200°C a 1372°C (Termopar K)', product3: '-40°C a 300°C (IR y Sonda)' },
    { name: 'Precisión', product1: '±1.5°C o ±1.5%', product2: '±0.05% + 0.3°C', product3: 'IR: ±2°C o ±2%; Sonda: ±1°C o ±1%' },
    { name: 'Relación D:S', product1: '10:1', product2: 'No Aplica', product3: '10:1' },
    { name: 'Requiere Contacto', product1: false, product2: true, product3: 'Sí (para modo sonda)' },
    { name: 'Emisividad Ajustable', product1: true, product2: 'N/A', product3: 'Fija 0.95' },
    { name: 'Clasificación IP', product1: 'IP54', product2: 'Funda protectora', product3: 'IP54' },
    { name: 'Disponibilidad', product1: 'Mercado Libre', product2: 'Distribuidores', product3: 'Mercado Libre' }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
      title: 'Rotomartillos vs. Taladros: Guía Completa México 2025',
      excerpt: 'Todo lo que necesitas saber para elegir la herramienta correcta.',
      description: 'Todo lo que necesitas saber para elegir la herramienta correcta.',
      category: 'Herramientas',
      publishDate: '4 Oct 2025',
      readTime: '25 min',
      image: '/images/rotomartillos.jpg',
      slug: 'rotomartillos-vs-taladros-guia-completa-mexico-2025'
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
      title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
      excerpt: 'Guía completa y comparativa de los chalecos mejor calificados para trabajo.',
      description: 'Guía completa y comparativa de los chalecos mejor calificados para trabajo.',
      category: 'EPP',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      image: '/images/chalecos-seguridad.jpg',
      slug: 'mejores-chalecos-seguridad-2025'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Cuál es la diferencia entre un termómetro infrarrojo y uno de termopar?',
      answer: 'La diferencia principal es el método de medición. Un termómetro infrarrojo (o pirómetro) es sin contacto; mide la temperatura de una superficie a distancia detectando la energía infrarroja que emite. Es rápido y seguro para objetos calientes o en movimiento. Un termómetro de termopar es de contacto; utiliza una sonda con dos metales diferentes que debe tocar físicamente el objeto para medir la temperatura por conducción. Es más preciso, especialmente para medir temperaturas internas (líquidos, aire) y no se ve afectado por las propiedades de la superficie del objeto.'
    },
    {
      question: '¿Qué es la emisividad y por qué es importante?',
      answer: 'La emisividad es una medida de la capacidad de un material para emitir energía infrarroja, en una escala de 0 a 1. Un "cuerpo negro" teórico perfecto tiene una emisividad de 1.0. Los materiales orgánicos, la pintura y las superficies oxidadas tienen una alta emisividad (cercana a 0.95), mientras que los metales pulidos tienen una muy baja (pueden ser inferiores a 0.1). Es crucial porque los termómetros infrarrojos miden esta energía emitida para calcular la temperatura. Si mide un material de baja emisividad (como el aluminio) con un termómetro configurado para alta emisividad, la lectura será muy inferior a la real.'
    },
    {
      question: '¿Qué significa la relación D:S o Distancia-Punto?',
      answer: 'La relación Distancia-Punto (D:S) le indica el tamaño del área que su termómetro infrarrojo está midiendo a una distancia determinada. Por ejemplo, una relación de 12:1 significa que si está a 12 pulgadas del objetivo, está midiendo la temperatura promedio de un círculo de 1 pulgada de diámetro. Si se aleja a 12 pies, medirá un círculo de 1 pie de diámetro. Para obtener una lectura precisa, debe asegurarse de que el objeto que desea medir sea más grande que el "punto" de medición a la distancia a la que se encuentra.'
    },
    {
      question: '¿Con qué frecuencia se debe calibrar un termómetro industrial?',
      answer: 'No hay una regla única, pero una buena práctica general es calibrar los termómetros industriales al menos una vez al año. Sin embargo, la frecuencia debe aumentar (cada 3 a 6 meses) si el instrumento se utiliza en aplicaciones críticas (industria alimentaria, farmacéutica), en entornos hostiles (altas temperaturas, vibraciones), o si ha sufrido una caída o se sospecha que sus lecturas son incorrectas. La recomendación del fabricante y los procedimientos de calidad internos de su empresa son la guía definitiva.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema temperatura/medición */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${20 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Termómetros flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`thermo-${i}`}
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
                {i % 3 === 0 ? <Thermometer className="w-6 h-6" /> : 
                 i % 3 === 1 ? <Gauge className="w-6 h-6" /> : 
                 <Activity className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de calor (40 ondas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute border-2 border-orange-400 rounded-full opacity-30"
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
                <Thermometer className="h-4 w-4" />
                🌡️ Instrumentación Industrial
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Termómetros Industriales: Precisión en Cada Medición
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía completa 2025: Tipos, características y los 6 mejores productos en México
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
                  22 min de lectura
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
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${25 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                          <Flame className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-red-900 mb-3">🌡️ La Variable Crítica: Temperatura</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            En el corazón de cualquier proceso industrial exitoso —desde la <strong className="text-red-600">fundición de metales hasta la pasteurización de alimentos</strong>— 
                            se encuentra una variable crítica: la temperatura. Una medición precisa no es un lujo, es un <b className="bg-red-100 px-2 py-1 rounded">pilar fundamental de la eficiencia, 
                            la calidad del producto y, sobre todo, la seguridad operativa</b>.
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
                      Una desviación de pocos grados puede significar la diferencia entre un lote perfecto y una pérdida costosa, o entre una operación 
                      segura y un fallo catastrófico del equipo. <b className="text-red-600">Elegir el termómetro industrial correcto no es solo comprar 
                      una herramienta, es invertir en control y certidumbre</b>.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Tu Guía para la Decisión Correcta</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía definitiva para 2025 te ayudará a comprender los <b>principios técnicos que definen el rendimiento</b> de un termómetro, 
                        evaluar las características cruciales según tu aplicación y conocer los <b className="text-blue-700">6 mejores productos disponibles 
                        en el mercado mexicano</b>, desde opciones económicas de entrada hasta herramientas especializadas de alta gama.
                      </p>
                    </motion.div>
                  </section>

                  {/* Tipo de Medición */}
                  <section id="tipo-medicion" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🎯 Tipo de Medición: La Elección Fundamental
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La elección más fundamental radica en el <b className="text-orange-600">método de medición</b>, que debe alinearse directamente 
                      con la naturaleza de la tarea.
                    </motion.p>

                    {/* Selector de tipo */}
                    <div className="flex justify-center gap-4 mb-8">
                      <motion.button
                        onClick={() => setSelectedType('infrarrojo')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedType === 'infrarrojo'
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        Infrarrojo (Sin Contacto)
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedType('contacto')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedType === 'contacto'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Contacto (Termopar/Sonda)
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedType('hibrido')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedType === 'hibrido'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-300'
                        }`}
                      >
                        Híbrido
                      </motion.button>
                    </div>

                    {/* Contenido según tipo seleccionado */}
                    <AnimatePresence mode="wait">
                      {selectedType === 'infrarrojo' && (
                        <motion.div
                          key="infrarrojo"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300"
                        >
                          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                            <Radio className="h-8 w-8" />
                            Termómetros Infrarrojos (Pirómetros)
                          </h3>
                          
                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-red-800 mb-3">⚡ Principio de Funcionamiento:</h4>
                            <p className="text-gray-700 mb-4">
                              Estos instrumentos operan midiendo la <b className="text-red-700">radiación infrarroja que emite la superficie de un objeto</b> 
                              para calcular su temperatura. No requieren contacto físico, permitiendo mediciones a distancia y de forma segura.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Principales
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Seguridad:</b> Mide objetos peligrosamente calientes sin riesgo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Velocidad:</b> Lecturas casi instantáneas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Versatilidad:</b> Ideal para objetos en movimiento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Accesibilidad:</b> Superficies de difícil acceso</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Limitaciones
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Solo mide <b>temperatura superficial</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Precisión afectada por <b>propiedades de la superficie (emisividad)</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Sensible a condiciones ambientales</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
                            <p className="text-orange-900 font-bold text-center text-lg">
                              💡 Ideal para: Inspecciones eléctricas, motores en funcionamiento, hornos industriales, superficies inaccesibles
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedType === 'contacto' && (
                        <motion.div
                          key="contacto"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Target className="h-8 w-8" />
                            Termómetros de Contacto (Termopares/Sondas RTD)
                          </h3>
                          
                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-blue-800 mb-3">🔬 Principio de Funcionamiento:</h4>
                            <p className="text-gray-700 mb-4">
                              Requieren que su sensor entre en <b className="text-blue-700">contacto físico con el objeto</b> hasta alcanzar un equilibrio térmico. 
                              Utilizan principalmente dos tipos de sensores:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-blue-800 mb-2">⚙️ Termopares</h5>
                                <p className="text-sm text-gray-700">
                                  Unión de dos metales distintos que generan un voltaje proporcional a la temperatura. 
                                  El <b>Tipo K</b> (Cromel-Alumel) es el más extendido en la industria.
                                </p>
                              </div>
                              <div className="bg-indigo-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-indigo-800 mb-2">📊 RTD (PT100)</h5>
                                <p className="text-sm text-gray-700">
                                  Detectores de temperatura por resistencia que varían su resistencia eléctrica con la temperatura. 
                                  Mayor precisión que los termopares.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Principales
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Alta precisión:</b> Especialmente RTD</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Temperaturas internas:</b> Líquidos, gases, materiales penetrables</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Independiente de emisividad:</b> No afectado por propiedades de superficie</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Rango extremo:</b> Termopares K: -200°C a +1372°C</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Limitaciones
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Tiempo de respuesta más lento</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>No apto para <b>superficies en movimiento</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Requiere contacto físico (riesgo en objetos calientes)</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                            <p className="text-blue-900 font-bold text-center text-lg">
                              💡 Ideal para: Laboratorios, control de calidad alimentaria/farmacéutica, medición de líquidos/gases, calibración
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedType === 'hibrido' && (
                        <motion.div
                          key="hibrido"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-300"
                        >
                          <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                            <Zap className="h-8 w-8" />
                            Termómetros Híbridos
                          </h3>
                          
                          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-yellow-900 mb-3 text-lg">🏆 Lo Mejor de Ambos Mundos</h4>
                            <p className="text-gray-800 leading-relaxed">
                              Estos equipos integran ambas tecnologías, ofreciendo una <b className="text-purple-700">pistola de medición infrarroja</b> junto 
                              con un <b className="text-purple-700">puerto para conectar una sonda de termopar</b>. Modelos como el Fluke 561 o el Klein Tools IR07 
                              son soluciones versátiles, ideales para técnicos de mantenimiento o de sistemas HVAC.
                            </p>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-purple-800 mb-4">🎯 Funcionalidad Dual:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-purple-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-purple-800 mb-2">📡 Modo Infrarrojo</h5>
                                <p className="text-sm text-gray-700">
                                  Para <b>inspecciones rápidas</b> de superficies, ductos, motores y componentes eléctricos sin necesidad de contacto.
                                </p>
                              </div>
                              <div className="bg-pink-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-pink-800 mb-2">🔌 Modo Sonda de Contacto</h5>
                                <p className="text-sm text-gray-700">
                                  Para <b>diagnósticos precisos</b> de temperatura de aire, líquidos o materiales donde se necesita máxima exactitud.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Máxima versatilidad:</b> Dos herramientas en una</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Portabilidad:</b> No necesita llevar dos instrumentos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Función diferencial:</b> Calcula T1-T2 en modelos avanzados</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Consideraciones
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Algunos tienen <b>emisividad fija</b> en modo IR</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>D:S puede ser menor que pirómetros dedicados</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                            <p className="text-purple-900 font-bold text-center text-lg">
                              💡 Ideal para: Técnicos HVAC, mantenimiento de edificios, servicios generales, electricistas, fontaneros
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Especificaciones Críticas */}
                  <section id="especificaciones" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        📊 Especificaciones de Rendimiento Críticas
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Estos tres parámetros definen las <b className="text-green-600">capacidades y limitaciones operativas</b> de un termómetro.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {/* Rango */}
                      <motion.div 
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="text-center mb-4">
                          <Gauge className="h-10 w-10 mx-auto text-green-600 mb-2" />
                          <h3 className="text-xl font-bold text-green-900">Rango de Temperatura</h3>
                        </div>
                        <p className="text-gray-700 mb-4 text-center">
                          Define la temperatura <b className="text-green-700">mínima y máxima</b> que el instrumento puede medir.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-700 mb-2">
                            <b>Ejemplo - Termopar Tipo K:</b>
                          </p>
                          <p className="text-center text-2xl font-bold text-green-700">
                            -200°C a +1372°C
                          </p>
                          <p className="text-xs text-gray-600 text-center mt-2">
                            Cubre la mayoría de procesos industriales
                          </p>
                        </div>
                      </motion.div>

                      {/* Precisión */}
                      <motion.div 
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="text-center mb-4">
                          <Target className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                          <h3 className="text-xl font-bold text-blue-900">Precisión</h3>
                        </div>
                        <p className="text-gray-700 mb-4 text-center">
                          Indica qué tan <b className="text-blue-700">cerca está la medición del valor real</b>.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-blue-800 mb-1">Formato común:</p>
                            <p className="text-center text-lg font-bold text-blue-700">±1.5% o ±2°C</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-xs text-gray-700">
                              <b>Fluke 51 II:</b> Precisión de laboratorio de <b className="text-green-600">±0.05% + 0.3°C</b>
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Resolución */}
                      <motion.div 
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="text-center mb-4">
                          <Eye className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                          <h3 className="text-xl font-bold text-purple-900">Resolución</h3>
                        </div>
                        <p className="text-gray-700 mb-4 text-center">
                          El <b className="text-purple-700">incremento más pequeño</b> que el termómetro puede mostrar en su pantalla.
                        </p>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-center text-3xl font-bold text-purple-700 mb-2">
                            0.1°C
                          </p>
                          <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400 mt-3">
                            <p className="text-xs text-yellow-900">
                              <AlertTriangle className="h-3 w-3 inline mr-1" />
                              <b>No confundir con precisión:</b> Un termómetro puede mostrar 0.1°C pero tener precisión de ±2°C
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Relación D:S */}
                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border-2 border-orange-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                        <Activity className="h-8 w-8" />
                        🎯 Relación Distancia-Punto (D:S): El Factor Decisivo en Pirómetros
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Este es uno de los conceptos <b className="text-orange-700">más importantes y a menudo malinterpretados</b> en la termometría infrarroja.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl">
                          <h4 className="font-bold text-orange-800 mb-4 text-lg">📐 Definición:</h4>
                          <p className="text-gray-700 mb-4">
                            Describe la relación entre la <b>distancia a la que se encuentra el termómetro del objetivo</b> y el <b>diámetro del área circular</b> 
                            cuya temperatura está midiendo.
                          </p>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <p className="text-orange-900 font-semibold mb-2">Ejemplo D:S de 12:1:</p>
                            <ul className="text-sm text-gray-700 space-y-2">
                              <li>• A 12 metros → Mide círculo de 1 metro</li>
                              <li>• A 24 metros → Mide círculo de 2 metros</li>
                              <li>• A 6 metros → Mide círculo de 0.5 metros</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl">
                          <h4 className="font-bold text-red-800 mb-4 text-lg">⚠️ Importancia Práctica:</h4>
                          <p className="text-gray-700 mb-4">
                            Para medir con precisión un objeto pequeño, es necesario <b className="text-red-700">acercarse lo suficiente</b> para que el 
                            área de medición del termómetro sea más pequeña que el objeto en sí.
                          </p>
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                            <p className="text-sm text-red-900">
                              <AlertTriangle className="h-4 w-4 inline mr-2" />
                              <b>Error común:</b> Medir un objetivo pequeño desde gran distancia con D:S bajo. El termómetro promediará 
                              la temperatura del objetivo con la de su entorno.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-2 border-yellow-400">
                        <div className="flex items-start gap-3">
                          <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-yellow-900 mb-2">💡 El Papel del Láser:</h4>
                            <p className="text-gray-800">
                              El puntero láser <b>NO indica el punto exacto de la medición</b>. Su función es ayudar a apuntar, indicando el 
                              <b className="text-yellow-700"> centro (láser simple) o los bordes (láser doble)</b> del área de medición circular.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Emisividad */}
                  <section id="emisividad" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🔬 Emisividad: La Característica Profesional Crítica
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
                          <h3 className="text-2xl font-bold text-yellow-900 mb-3">⚠️ El Factor que Cambia Todo</h3>
                          <p className="text-gray-800 leading-relaxed">
                            La emisividad es una característica que <b className="text-yellow-700">distingue las herramientas profesionales de los modelos básicos</b>, 
                            siendo especialmente crítica para las mediciones infrarrojas. Sin entenderla y ajustarla correctamente, tus lecturas pueden estar 
                            <b className="bg-yellow-200 px-2 py-1 rounded"> completamente equivocadas</b>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Definición */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-200"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="text-xl font-bold text-purple-900 mb-4">📚 ¿Qué es la Emisividad?</h3>
                        <p className="text-gray-700 mb-4">
                          Se define como la <b className="text-purple-700">eficiencia con la que una superficie emite energía térmica por radiación</b>, 
                          en una escala de <b>0 a 1</b>.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-800 mb-2">Alta Emisividad (≈0.95):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Materiales orgánicos</li>
                              <li>• Pintura</li>
                              <li>• Plástico</li>
                              <li>• Superficies oxidadas</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">Baja Emisividad (&lt;0.3):</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Metales brillantes</li>
                              <li>• Aluminio pulido</li>
                              <li>• Acero inoxidable</li>
                              <li>• Superficies reflectantes</li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      {/* Por qué es crucial */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-xl border-2 border-red-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-xl font-bold text-red-900 mb-4">🚨 ¿Por qué es Crucial?</h3>
                        <p className="text-gray-700 mb-4">
                          Los termómetros infrarrojos <b className="text-red-700">calculan la temperatura basándose en la energía que reciben</b>. 
                          Si la emisividad no está ajustada correctamente:
                        </p>
                        <div className="bg-white p-6 rounded-xl mb-4">
                          <h4 className="font-bold text-red-800 mb-3">❌ Ejemplo de Error Común:</h4>
                          <p className="text-gray-700 mb-3">
                            Al medir una superficie metálica brillante (baja emisividad) con un termómetro configurado en <b>emisividad 0.95</b>:
                          </p>
                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                            <ul className="text-sm text-red-900 space-y-2">
                              <li>• El instrumento interpretará la <b>baja energía recibida</b> como temperatura más baja</li>
                              <li>• La lectura será <b>mucho menor</b> que la temperatura real</li>
                              <li>• Además será susceptible a <b>reflejar radiación de objetos cercanos</b></li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-400">
                          <p className="text-green-900 font-bold text-center">
                            ✓ La emisividad ajustable es INDISPENSABLE para mediciones fiables en diversos materiales
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Funciones adicionales */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                        <Settings className="h-8 w-8 text-indigo-600" />
                        Funciones Adicionales Profesionales
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-indigo-50 p-6 rounded-xl">
                          <h4 className="font-bold text-indigo-800 mb-3">📊 Registro de Datos:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span><b>MAX/MIN:</b> Temperatura máxima y mínima registrada</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span><b>AVG:</b> Temperatura promedio</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span><b>DIF:</b> Temperatura diferencial</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-xl">
                          <h4 className="font-bold text-orange-800 mb-3">🔔 Alarmas:</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Alarmas audibles de <b>umbral alto y bajo</b>, extremadamente útiles para:
                          </p>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <Zap className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Monitoreo de procesos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Zap className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Detección rápida de anomalías térmicas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Zap className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Sin necesidad de supervisión constante</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Durabilidad */}
                  <section id="durabilidad" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        🛡️ Construcción para el Campo: Durabilidad y Protección IP
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Los entornos industriales son exigentes, por lo que la <b className="text-blue-600">robustez de una herramienta es tan importante 
                      como su precisión</b>.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Resistencia a caídas */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-green-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <Shield className="h-10 w-10 text-green-600 flex-shrink-0" />
                          <div>
                            <h3 className="text-2xl font-bold text-green-900">Resistencia a Caídas</h3>
                            <p className="text-gray-600 text-sm">Indicador clave de durabilidad</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          La capacidad de un instrumento para soportar caídas accidentales es un <b className="text-green-700">indicador clave de su durabilidad</b>.
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-center">⭐ Ejemplo: Fluke 62 MAX</h4>
                          <div className="text-center">
                            <p className="text-5xl font-bold text-green-700 mb-2">3m</p>
                            <p className="text-gray-700">Resistencia probada a caídas</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-4 text-center">
                            Una especificación vital para el <b>trabajo rudo en campo</b>
                          </p>
                        </div>
                      </motion.div>

                      {/* Grado IP */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <Droplet className="h-10 w-10 text-blue-600 flex-shrink-0" />
                          <div>
                            <h3 className="text-2xl font-bold text-blue-900">Grado de Protección (IP)</h3>
                            <p className="text-gray-600 text-sm">Norma IEC 60529</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          El código IP clasifica el nivel de <b className="text-blue-700">sellado contra objetos sólidos y líquidos</b>. 
                          Consta de dos dígitos:
                        </p>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Primer dígito (Sólidos) - 0 a 6:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• <b>5:</b> Protegido contra polvo (no estanco totalmente)</li>
                              <li>• <b>6:</b> Completamente estanco al polvo</li>
                            </ul>
                          </div>
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-indigo-800 mb-2">Segundo dígito (Líquidos) - 0 a 9:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• <b>4:</b> Salpicaduras desde cualquier dirección</li>
                              <li>• <b>5:</b> Chorros de agua a baja presión</li>
                              <li>• <b>7:</b> Inmersión temporal</li>
                            </ul>
                          </div>
                          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl border-2 border-blue-400">
                            <p className="text-blue-900 font-bold text-center">
                              🏭 <b>IP54</b> = Ideal para la mayoría de entornos industriales
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 6 Productos */}
                  <section id="productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Termómetros Industriales Destacados 2025
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
                      {/* Producto #1 - GOXAWEE */}
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
                            MEJOR OPCIÓN DE ENTRADA / CALIDAD-PRECIO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          GOXAWEE Termómetro Infrarrojo Digital (-50-600°C)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(127+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Diagnóstico general, talleres mecánicos, uso doméstico avanzado
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este pirómetro infrarrojo es <b className="text-green-700">uno de los más vendidos en el mercado mexicano</b>, principalmente por su 
                          precio extremadamente competitivo y un amplio rango de medición. Es una opción adecuada para tareas de diagnóstico general donde 
                          no se requiere la máxima precisión ni una robustez extrema. Su operación <b className="bg-green-100 px-2 py-1 rounded">"apuntar y disparar"</b> 
                          lo hace ideal para usuarios principiantes.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Costo muy bajo, accesible para cualquier presupuesto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Amplio rango: -50°C a 600°C</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Operación simple, ideal para principiantes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Relación D:S de 12:1</span>
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
                                <span>Emisividad fija en 0.95 - impreciso para metales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción de plástico sin protección IP</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Rango de Precio: $200 - $350 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1902465067-termometro-infrarrojo-digital-industrial-50-600-c-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Truper 18229 */}
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
                            ESTÁNDAR PARA EL PROFESIONAL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Truper 18229 (METE-500) - El Estándar del Taller Mexicano
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(313+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Mantenimiento industrial, talleres automotrices, técnicos de campo
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El termómetro de Truper es un <b className="text-blue-700">referente en el mercado mexicano</b>, reconocido por su fiabilidad y 
                          una excelente relación costo-beneficio. Ofrece un diseño ergonómico y especificaciones sólidas para el uso diario en entornos 
                          industriales y automotrices. Es la <b className="bg-blue-100 px-2 py-1 rounded">opción preferida por muchos técnicos</b> que buscan 
                          una herramienta de una marca con fuerte presencia y respaldo en México.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            🏆 La Confianza de una Marca Nacional
                          </h4>
                          <p className="text-gray-700">
                            Truper es sinónimo de herramientas profesionales en México, con <b className="text-yellow-700">amplia distribución y respaldo técnico</b> 
                            en todo el país. Este termómetro hereda esa confianza, ofreciendo rendimiento consistente con rango de -50°C a 550°C y relación D:S de 12:1.
                          </p>
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
                                <span>Marca de gran confianza en México</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Rendimiento consistente y fiable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Excelente relación calidad-precio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Incluye estuche y baterías</span>
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
                                <span>No cuenta con emisividad ajustable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precisión en rangos bajos inferior a modelos premium</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Rango de Precio: $400 - $650 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/termometro-digital-uso-industrial-truper-18229/p/MLM26505365"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - UNI-T UT300S */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl border-2 border-purple-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-purple-500 text-white font-bold text-lg px-6 py-3">
                            🥉 #3
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 font-bold">
                            MEJOR CON FUNCIONES AVANZADAS
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          UNI-T UT300S - Funciones Profesionales a Bajo Costo
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || i === 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(5+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Profesionales que necesitan emisividad ajustable sin alto costo
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-4 border-green-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                            <Star className="h-6 w-6" />
                            ⭐ El Diferenciador: Emisividad Ajustable
                          </h4>
                          <p className="text-gray-700">
                            El UT300S se posiciona estratégicamente al ofrecer <b className="text-green-700">emisividad ajustable en rango completo de 0.10 a 1.00</b>, 
                            permitiendo mediciones precisas en prácticamente cualquier material. Esta característica profesional a precio competitivo lo convierte 
                            en una herramienta <b className="bg-green-200 px-2 py-1 rounded">notablemente superior a los modelos de entrada</b>.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Además de la emisividad ajustable, incorpora <b>alarmas audibles de temperatura alta/baja</b> y una relación D:S de 12:1. 
                          Las funciones de registro MAX/MIN y retención de datos en pantalla complementan un paquete profesional a un precio muy accesible.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-purple-200">
                            <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Emisividad ajustable:</b> 0.10 a 1.00</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Alarmas de umbral alto/bajo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Funciones MAX/MIN y retención de datos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Buena calidad de construcción</span>
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
                                <span>Rango ligeramente más restringido: -32°C a 400°C</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Menor disponibilidad que marcas nacionales</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Rango de Precio: $450 - $750 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-595344108-termometro-digital-infrarrojo-laser-32c-a-400c-ut300s-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Fluke 62 MAX */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-2xl border-2 border-orange-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-orange-500 text-white font-bold text-lg px-6 py-3">
                            🏆 #4
                          </Badge>
                          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 font-bold">
                            ESTÁNDAR DE ORO - USO RUDO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Fluke 62 MAX - Durabilidad y Fiabilidad Sin Compromiso
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(23+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl mb-6">
                          <p className="text-orange-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Entornos industriales hostiles, profesionales que exigen fiabilidad absoluta
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-4 border-blue-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            🛡️ Diseñado para Sobrevivir y Funcionar
                          </h4>
                          <p className="text-gray-700 mb-4">
                            El Fluke 62 MAX está diseñado con un propósito claro: <b className="text-blue-700">sobrevivir y funcionar con fiabilidad en los 
                            entornos industriales más hostiles</b>. Su propuesta de valor se centra en una robustez excepcional.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                              <h5 className="font-bold text-green-700 mb-2">✓ IP54</h5>
                              <p className="text-sm text-gray-700">Protección contra polvo y salpicaduras de agua</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h5 className="font-bold text-green-700 mb-2">✓ 3 metros</h5>
                              <p className="text-sm text-gray-700">Resistencia probada a caídas</p>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Aunque su precio es considerablemente superior, ofrece la <b className="text-orange-700">precisión, repetibilidad y confianza</b> 
                          que caracterizan a la marca Fluke, junto con especificaciones profesionales completas: rango de -30°C a 500°C, emisividad ajustable, 
                          alarmas Hi/Lo y <b className="bg-orange-100 px-2 py-1 rounded">diseño ergonómico compacto</b>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-orange-200">
                            <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Durabilidad líder:</b> IP54 + resistencia a 3m</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Alta precisión y fiabilidad Fluke</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Funciones profesionales completas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño ergonómico y compacto</span>
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
                                <span>Precio significativamente más elevado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Dificultades reportadas para obtener facturas</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-700 mb-2">💰 Rango de Precio: $2,500 - $3,500 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/fluke-62-max-termometro-inflarrojo-30-a-500-c-pistola/p/MLM24631909"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Klein Tools IR07 */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-6 py-3">
                            💪 #5
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            MEJOR HÍBRIDO COMPACTO HVAC
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Klein Tools IR07 - Termómetro Doble IR/Sonda
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || Math.random() > 0.5 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Alta reputación Klein Tools)</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Técnicos HVAC, mantenimiento de edificios, electricistas, fontaneros
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            🔧 2 en 1: Funcionalidad de Bolsillo
                          </h4>
                          <p className="text-gray-700 mb-4">
                            El IR07 es una herramienta de bolsillo altamente especializada que combina una <b className="text-purple-700">medición infrarroja (IR)</b> 
                            con una <b className="text-purple-700">sonda de temperatura de contacto desplegable</b>. Este diseño híbrido lo convierte en un instrumento 
                            excepcionalmente versátil.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <b>Ejemplo de uso:</b> Medir rápidamente la temperatura superficial de un ducto con el sensor IR y luego medir con precisión 
                              la temperatura del aire en su interior con la sonda.
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Cuenta con construcción robusta, clasificación <b>IP54</b>, resistencia a caídas de <b>2 metros</b> y una relación D:S de 10:1. 
                          La capacidad para calcular la <b className="bg-teal-100 px-2 py-1 rounded">temperatura diferencial (T1-T2)</b> es especialmente 
                          útil para aplicaciones de HVAC donde se necesita medir la diferencia de temperatura entre entrada y salida.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-teal-200">
                            <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>2 en 1:</b> IR + Sonda en formato bolsillo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción robusta: IP54 + 2m caídas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Calcula temperatura diferencial (T1-T2)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño específico para HVAC</span>
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
                                <span>Emisividad fija en 0.95 (modo IR)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>D:S de 10:1 inferior a pirómetros dedicados</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Rango de Precio: $1,800 - $2,800 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/termometro-de-bolsillo-infrarojo-con-sonda-ir07-klein-tools/p/MLM31743207"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Fluke 51 II */}
                      <motion.div 
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-2xl border-2 border-indigo-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-indigo-500 text-white font-bold text-lg px-6 py-3">
                            🔬 #6
                          </Badge>
                          <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 font-bold">
                            MEJOR CONTACTO - PRECISIÓN LABORATORIO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Fluke 51 II - Termómetro Digital de Contacto
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 5 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Estándar de referencia en la industria)</span>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                          <p className="text-indigo-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Laboratorios de calibración, control de calidad alimentaria/farmacéutica, procesos críticos
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-yellow-900 mb-3 text-lg flex items-center gap-2">
                            <Target className="h-6 w-6" />
                            🎯 Cuando la Exactitud es No Negociable
                          </h4>
                          <p className="text-gray-700 mb-4">
                            El Fluke 51 II es un termómetro de contacto de una sola entrada diseñado para ofrecer <b className="text-yellow-700">precisión 
                            de laboratorio en un formato de mano y robusto</b>. Es la herramienta de elección para aplicaciones donde la exactitud es la 
                            máxima prioridad.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-bold text-indigo-800 mb-2">📊 Precisión Incomparable:</h5>
                            <p className="text-center text-3xl font-bold text-indigo-700 mb-2">
                              ±0.05% + 0.3°C
                            </p>
                            <p className="text-sm text-gray-600 text-center">Nivel de laboratorio certificado</p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Es compatible con termopares estándar tipo <b>J, K, T y E</b>, ofreciendo flexibilidad para diversas aplicaciones. Su diseño incluye 
                          una <b className="bg-indigo-100 px-2 py-1 rounded">funda protectora que absorbe impactos</b>, garantizando su durabilidad en el campo. 
                          La batería ofrece una autonomía típica de <b>1000 horas</b>, reduciendo costos operativos.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-indigo-200">
                            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precisión de laboratorio:</b> ±0.05% + 0.3°C</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Compatible con termopares J, K, T, E</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción extremadamente robusta</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Larga duración de batería: 1000 horas</span>
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
                                <span>Funcionalidad limitada a contacto únicamente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Inversión inicial muy elevada + costo de sondas</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-2 border-indigo-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-indigo-700 mb-2">💰 Rango de Precio: $4,500 - $6,500 MXN</p>
                              <p className="text-sm text-gray-600">* Consultar con distribuidores autorizados</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/termometro-digital-de-contacto-fluke-51ii/up/MLMU557593774"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
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
                      title="Análisis Comparativo: Los 3 Termómetros Mejor Valorados"
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
                        🛒 Guía de Compra Rápida: 3 Consejos Clave
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* Consejo 1 */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-purple-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-purple-900 mb-3">Priorice la Emisividad Ajustable para Superficies Variadas</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Si su trabajo diario implica medir la temperatura de <b className="text-purple-700">motores, tuberías metálicas, tableros eléctricos</b> 
                              o cualquier superficie que no seaoscura y mate, un termómetro con emisividad ajustable no es opcional, <b className="bg-purple-200 px-2 py-1 rounded">es una necesidad</b>.
                            </p>
                            <div className="bg-purple-50 p-6 rounded-xl">
                              <p className="text-gray-700 mb-3">
                                Un modelo con emisividad fija en 0.95 solo proporcionará lecturas fiables en materiales como:
                              </p>
                              <div className="grid md:grid-cols-2 gap-3">
                                <div className="bg-white p-3 rounded-lg">
                                  <p className="text-sm text-green-700">✓ Asfalto</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                  <p className="text-sm text-green-700">✓ Pintura</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                  <p className="text-sm text-green-700">✓ Madera</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                  <p className="text-sm text-green-700">✓ Plástico</p>
                                </div>
                              </div>
                              <p className="text-red-700 font-semibold mt-4">
                                ⚠️ Generando errores significativos en metales y superficies reflectantes
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Consejo 2 */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            2
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">Calcule su Necesidad de D:S</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Antes de comprar, piense en su aplicación más común. <b className="text-blue-700">Mida la distancia típica</b> desde la que necesita 
                              trabajar y el <b className="text-blue-700">tamaño del objetivo más pequeño</b> que debe medir con precisión.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl">
                              <h4 className="font-bold text-blue-800 mb-3">📐 Fórmula simple:</h4>
                              <div className="bg-white p-4 rounded-lg mb-4">
                                <p className="text-center text-2xl font-bold text-blue-700 mb-2">
                                  Distancia ÷ Tamaño del objetivo = D:S mínimo
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-2 border-yellow-400">
                                <p className="text-gray-800">
                                  <b>Ejemplo:</b> Si trabaja típicamente a 3 metros y mide un disyuntor de 10 cm de diámetro:
                                </p>
                                <p className="text-center text-xl font-bold text-yellow-700 mt-2">
                                  300 cm ÷ 10 cm = 30:1 mínimo requerido
                                </p>
                              </div>
                              <p className="text-sm text-gray-600 mt-4">
                                💡 Elija siempre un termómetro que <b>supere ese valor</b> para garantizar que el área de medición se mantenga 
                                dentro de los límites del objetivo.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Consejo 3 */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            3
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-green-900 mb-3">Invierta en un Modelo Híbrido para Máxima Versatilidad</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Para técnicos de campo, especialmente en <b className="text-green-700">HVAC, mantenimiento de edificios o servicios generales</b>, 
                              un termómetro híbrido (IR + Sonda) es una inversión inteligente.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-4">🎯 Ventajas del Modelo Híbrido:</h4>
                              <div className="space-y-3">
                                <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                  <div>
                                    <p className="font-semibold text-green-800">Elimina llevar dos instrumentos</p>
                                    <p className="text-sm text-gray-600">Todo en una sola herramienta compacta</p>
                                  </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                  <div>
                                    <p className="font-semibold text-green-800">Inspecciones rápidas con IR</p>
                                    <p className="text-sm text-gray-600">Escaneo superficial rápido sin contacto</p>
                                  </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                  <div>
                                    <p className="font-semibold text-green-800">Diagnósticos precisos con sonda</p>
                                    <p className="text-sm text-gray-600">Medición exacta de aire, líquidos y temperaturas internas</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-300">
                                <p className="text-blue-900 font-bold text-center">
                                  💡 Herramientas como Klein Tools IR07 o Fluke 561 son inversiones que se pagan solas
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg border-4 border-red-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-3">
                          <AlertTriangle className="h-8 w-8" />
                          ❌ 3 Errores Comunes a Evitar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                            <div className="flex items-start gap-4">
                              <span className="text-3xl">1️⃣</span>
                              <div>
                                <h4 className="font-bold text-red-900 mb-2">Confiar en Lecturas IR sobre Metales Brillantes sin Ajuste</h4>
                                <p className="text-gray-700">
                                  Es el error más frecuente y costoso. Apuntar un pirómetro básico a una tubería de acero inoxidable o a una barra de 
                                  aluminio pulido y aceptar la lectura es <b className="text-red-700">una receta para el desastre</b>. La baja emisividad 
                                  del metal hará que el termómetro refleje la temperatura de los objetos circundantes y muestre un valor falsamente bajo.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                              <span className="text-3xl">2️⃣</span>
                              <div>
                                <h4 className="font-bold text-orange-900 mb-2">Medir un "Punto" Demasiado Grande</h4>
                                <p className="text-gray-700 mb-3">
                                  Apuntar a un pequeño disyuntor desde el otro lado de una sala con un termómetro de D:S 12:1. 
                                  <b className="text-orange-700"> El instrumento promediará la temperatura del componente con la de la pared fría</b> que lo rodea, 
                                  enmascarando un peligroso punto caliente.
                                </p>
                                <div className="bg-orange-50 p-3 rounded-lg">
                                  <p className="text-sm text-orange-900 font-semibold">
                                    ✓ Solución: Acércate hasta que el objetivo sea significativamente más grande que el diámetro del punto de medición
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4">
                              <span className="text-3xl">3️⃣</span>
                              <div>
                                <h4 className="font-bold text-yellow-900 mb-2">Usar la Sonda de Contacto Incorrecta</h4>
                                <p className="text-gray-700 mb-3">
                                  Intentar medir la temperatura del aire con una sonda diseñada para superficies, o la temperatura de un líquido con 
                                  una sonda de aguja para alimentos. <b className="text-yellow-700">Cada tipo de sonda está optimizada para un medio específico</b>.
                                </p>
                                <div className="bg-yellow-50 p-3 rounded-lg">
                                  <p className="text-sm text-yellow-900 font-semibold">
                                    ⚠️ El uso de una sonda inadecuada resultará en tiempos de estabilización extremadamente largos y mediciones imprecisas
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento y Calibración */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg border-2 border-indigo-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Settings className="h-8 w-8 text-indigo-600" />
                          <h3 className="text-2xl font-bold text-indigo-900">🔧 Mantenimiento y Calibración</h3>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          La precisión de un termómetro industrial no solo depende de su calidad inicial, sino de su <b className="text-indigo-700">cuidado continuo</b>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl">
                            <h4 className="font-bold text-indigo-800 mb-4">🧼 Mantenimiento Diario:</h4>
                            <ul className="text-sm text-gray-700 space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span><b>Pirómetros:</b> Mantener lente del sensor IR limpio (paño suave o aire comprimido)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span><b>Termopares:</b> Manejar con cuidado para evitar doblar o romper alambres</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span>Evitar golpes y caídas innecesarias</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-6 rounded-xl">
                            <h4 className="font-bold text-purple-800 mb-4">📅 Calibración Periódica:</h4>
                            <div className="space-y-3">
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-purple-800 mb-1">Mínimo Anual:</p>
                                <p className="text-xs text-gray-700">Para aplicaciones generales</p>
                              </div>
                              <div className="bg-red-50 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-red-800 mb-1">Cada 3-6 meses:</p>
                                <p className="text-xs text-gray-700">Procesos críticos, entornos hostiles, o si hay sospecha de desviación</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-2 border-yellow-400">
                          <p className="text-yellow-900 font-bold text-center text-lg">
                            ⚠️ Con el tiempo y el uso, todos los sensores pueden desviarse. La calibración garantiza mediciones trazables y fiables.
                          </p>
                        </div>
                      </motion.div>
                    </div>
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
                        🎯 Conclusión: Transforme la Temperatura en Certidumbre
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-8 rounded-r-2xl shadow-lg mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Thermometer className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            La guía de 2025 demuestra que <b className="text-green-700">la precisión en cada medición comienza con una elección informada</b>. 
                            Ya sea que necesite la velocidad y seguridad de un pirómetro infrarrojo o la exactitud incuestionable de una sonda de contacto, 
                            el mercado mexicano ofrece una herramienta para cada tarea y presupuesto.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            La clave es <b className="bg-green-100 px-2 py-1 rounded">alinear las capacidades del instrumento con las demandas de su aplicación</b>.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor IR Robusto</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Fluke 62 MAX</b> - Máxima versatilidad y durabilidad en el campo con clasificación IP54 y resistencia a 3m de caída.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Target className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Precisión</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Fluke 51 II</b> - El estándar de oro en medición por contacto para procesos donde la precisión no es negociable.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Zap className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Valor</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>UNI-T UT300S</b> - Emisividad ajustable y alarmas profesionales a un precio muy competitivo.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Flame className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">Invierta en la Herramienta Adecuada</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Invierta en la herramienta adecuada y <b>transforme la temperatura de una variable a una constante controlada</b>. 
                        En el corazón de cualquier proceso industrial exitoso se encuentra la medición precisa, y ahora tiene el conocimiento 
                        para tomar esa decisión con confianza.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🌡️ Precisión en cada medición, control en cada proceso 🌡️
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl border-2 border-blue-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál será tu instrumento de medición? 
                      </p>
                      <p className="text-lg text-blue-800 font-semibold">
                        🎯 Mide con precisión, trabaja con certidumbre 🎯
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