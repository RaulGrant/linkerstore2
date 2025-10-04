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
  Activity,
  Radio,
  Wind,
  Flame,
  Droplets,
  Eye,
  Zap,
  Package,
  ChevronDown,
  Info,
  AlertCircle,
  Settings,
  TrendingUp,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

export default function MonitoresGasesArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedSensor, setSelectedSensor] = useState<'electroquimico' | 'catalitico' | 'infrarrojo'>('electroquimico');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'drager-xam',
      name: 'Dräger X-am 2500',
      rating: 5.0,
      reviewCount: 25,
      isRecommended: true,
      bestFor: 'Industria Pesada',
      amazonLink: 'https://www.mercadolibre.com.mx/detector-de-gases-ex-o2-co-h2s-drger-x-am-2500/p/MLM25414537'
    },
    {
      id: 'honeywell-x3',
      name: 'Honeywell BW MicroClip X3',
      rating: 4.7,
      reviewCount: 150,
      isRecommended: true,
      bestFor: 'Profesional Compacto',
      amazonLink: 'https://www.mercadolibre.com.mx/detector-multigas-gas-alert-microclip-x3-mcx3xwhmyna/up/MLMU1096175422'
    },
    {
      id: 'honeywell-flex4',
      name: 'Honeywell BW Flex4',
      rating: 4.8,
      reviewCount: 89,
      isRecommended: false,
      bestFor: 'Próxima Generación',
      amazonLink: 'https://www.mercadolibre.com.mx/detector-portatil-multigas-honeywell-bw-flex/up/MLMU420826277'
    }
  ];

  const comparisonFeatures = [
    { name: 'Gases Detectados', product1: 'O₂, LEL, CO, H₂S', product2: 'O₂, LEL, CO, H₂S', product3: 'O₂, LEL, CO, H₂S' },
    { name: 'Clasificación IP', product1: 'IP67', product2: 'IP68', product3: 'IP68' },
    { name: 'Vida Útil Sensores', product1: '~5+ años', product2: '3-5 años', product3: '5+ años' },
    { name: 'Duración Batería', product1: 'Estándar', product2: '18 horas', product3: 'Hasta 2 meses (IR)' },
    { name: 'Conectividad', product1: 'No', product2: 'No', product3: 'Bluetooth' },
    { name: 'Tipo Sensor LEL', product1: 'Catalítico', product2: 'Catalítico', product3: 'IR (opcional)' },
    { name: 'Certificación ATEX', product1: 'Zona 0', product2: 'Sí', product3: 'Sí' },
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
      title: 'Guía Completa de Overoles de Trabajo 2025',
      excerpt: 'Todo sobre materiales, normativas y los mejores productos del mercado.',
      description: 'Todo sobre materiales, normativas y los mejores productos del mercado.',
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
      question: '¿Cuál es la diferencia real entre una prueba de respuesta (bump test) y una calibración?',
      answer: 'Aunque a menudo se confunden, son procedimientos distintos con objetivos diferentes. Una prueba de respuesta (bump test) es una verificación funcional rápida y cualitativa que se expone al detector a una concentración de gas para asegurar que los sensores reaccionan y que todas las alarmas se activan. Es un control de "pasa/no pasa" que debe realizarse antes de cada uso diario. Por otro lado, la calibración es un ajuste de precisión cuantitativo que utiliza un gas de concentración certificada para ajustar las lecturas del sensor, garantizando que sean exactas. Este proceso corrige la "deriva" natural del sensor y se realiza periódicamente cada 6 meses. En resumen: el bump test confirma que el detector funciona, mientras que la calibración asegura que mide correctamente.'
    },
    {
      question: '¿Qué 4 gases mide un detector estándar para espacios confinados y por qué?',
      answer: 'Un detector multigás estándar mide: 1) Oxígeno (O₂) para detectar niveles peligrosamente bajos (asfixia) o altos (riesgo de incendio), 2) Gases Combustibles (%LEL) para advertir sobre atmósferas explosivas antes de que alcancen la concentración mínima para inflamarse, 3) Monóxido de Carbono (CO), un gas tóxico invisible e inodoro común en procesos de combustión, y 4) Sulfuro de Hidrógeno (H₂S), altamente tóxico y frecuente en alcantarillado y plantas de tratamiento. Esta combinación proporciona protección integral contra asfixia, explosión y envenenamiento, las principales causas de accidentes fatales en espacios confinados.'
    },
    {
      question: '¿Cuánto duran los sensores de un monitor de gases?',
      answer: 'La vida útil depende de la tecnología: Los sensores electroquímicos (CO, H₂S, O₂) duran típicamente 2-3 años, aunque los nuevos sensores de oxígeno pueden durar hasta 5 años. Los sensores catalíticos (%LEL) duran 2-5 años en condiciones ideales, pero su vida se acorta si se exponen a "venenos" como siliconas o compuestos de azufre. Los sensores infrarrojos (IR) son los más duraderos, con una vida útil de 5-10 años o más ya que no se degradan químicamente. Factores como temperaturas extremas, humedad y golpes también pueden reducir la vida útil.'
    },
    {
      question: '¿Qué significa "LEL" y por qué mi detector no muestra el nombre del gas?',
      answer: 'LEL es el acrónimo de Límite Inferior de Explosividad. Es la concentración mínima de un gas combustible en el aire que puede propagar una llama o explotar al contacto con una fuente de ignición. Un monitor muestra %LEL en lugar de un gas específico porque los sensores catalíticos o infrarrojos no son selectivos; reaccionan a cualquier gas combustible. El 100% LEL significa que la atmósfera ha alcanzado la concentración mínima para ser explosiva. Las alarmas se configuran al 10% LEL para proporcionar advertencia temprana y un margen de seguridad suficiente para evacuar antes de que las condiciones se vuelvan críticas.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white py-20 relative overflow-hidden">
          {/* Sistema de partículas - Tema gases/detección */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes tipo moléculas (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-molecule-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: 3 + (i % 5),
                  height: 3 + (i % 5),
                  backgroundColor: `hsl(${i % 2 === 0 ? '200' : '280'}, 70%, ${60 + (i % 30)}%)`,
                  left: `${(i * 2.7) % 100}%`,
                  top: `${(i * 4.1) % 100}%`,
                  boxShadow: `0 0 ${4 + (i % 6)}px hsl(${i % 2 === 0 ? '200' : '280'}, 70%, ${60 + (i % 30)}%)`,
                }}
                animate={{
                  x: [0, 80 + (i % 40), -60 + (i % 30), 0],
                  y: [0, -100 + (i % 50), 80 + (i % 40), 0],
                  scale: [0.5, 1.3, 0.4, 1],
                  opacity: [0.3, 0.8, 0.2, 0.6],
                }}
                transition={{
                  duration: 15 + (i % 10),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Ondas de sensor (30 ondas) */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={`sensor-wave-${i}`}
                className="absolute border-2 rounded-full"
                style={{
                  width: 100,
                  height: 100,
                  borderColor: `hsl(${180 + (i * 15)}, 60%, 50%, 0.3)`,
                  left: `${(i * 6.67) % 100}%`,
                  top: `${(i * 8.33) % 100}%`,
                }}
                animate={{
                  scale: [0, 4, 0],
                  opacity: [0.5, 0, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Símbolos de alerta (20 símbolos) */}
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={`alert-${i}`}
                className="absolute text-yellow-400 opacity-20"
                style={{
                  fontSize: `${10 + (i % 8)}px`,
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7.5) % 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [0.8, 1.3, 0.8]
                }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              >
                <AlertTriangle className="w-6 h-6" />
              </motion.div>
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
                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Radio className="h-4 w-4" />
                🔬 Detección de Gases
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Monitores de Gases: Protección Invisible Pero Vital
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía completa 2025: Tecnología, normativas mexicanas y los mejores productos del mercado
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-sm text-gray-400"
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
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 6)}px`,
                  height: `${3 + (i % 6)}px`,
                  background: `hsl(${200 + (i * 20) % 100}, 50%, ${50 + (i % 25)}%)`,
                  left: `${(i * 12.5) % 100}%`,
                  top: `${(i * 15.5) % 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, 30, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.7, 1.2, 0.7],
                }}
                transition={{
                  duration: 10 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.08,
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
                          <h3 className="text-2xl font-bold text-red-900 mb-3">⚠️ Los Peligros Invisibles</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            En el trabajo, <strong className="text-red-600">los peligros más letales son a menudo los que no se pueden ver, oler ni sentir</strong>. 
                            En la quietud de un tanque, un pozo o una tubería, una atmósfera invisible puede robar el oxígeno del aire o encenderse con una sola chispa. 
                            En estos espacios confinados, <b className="bg-red-100 px-2 py-1 rounded">sus sentidos no son suficientes para protegerlo</b>.
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
                      Su único sentido capaz de detectar estas amenazas mortales es un <b>monitor de gases</b>: una protección invisible, 
                      pero absolutamente vital, que <b className="text-blue-600">marca la diferencia entre una jornada segura y una tragedia</b>.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Tu Guía Definitiva</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Esta guía completa analiza a fondo <b>la tecnología de detección de gases, el marco normativo mexicano y los mejores 
                        productos disponibles en 2025</b>, para que tu próxima decisión sea la más segura e inteligente en la protección de tu equipo.
                      </p>
                    </motion.div>
                  </section>

                  {/* Los 4 Gases Críticos */}
                  <section id="gases-criticos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ⚠️ Los 4 Gases Críticos en Espacios Confinados
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-10 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Antes de evaluar cualquier dispositivo, es imperativo comprender <b className="text-red-600">los peligros invisibles</b> 
                      que busca mitigar. Los espacios confinados presentan cuatro amenazas letales estándar.
                    </motion.p>

                    <div className="space-y-8">
                      {/* Oxígeno */}
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-xl border-2 border-blue-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <Wind className="h-10 w-10 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Oxígeno (O₂): El Equilibrio Vital</h3>
                            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                              El oxígeno es el gas más fundamental para la vida. El aire normal contiene aproximadamente <b>20.8% de oxígeno</b>. 
                              Cualquier desviación significativa presenta un peligro inmediato.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                                <h4 className="font-bold text-red-800 mb-3">❌ Deficiencia (&lt;19.5%)</h4>
                                <p className="text-gray-700 text-sm">
                                  Una atmósfera deficiente en oxígeno causa <b>asfixia</b>. Los síntomas van desde dificultad para respirar 
                                  y confusión hasta pérdida de conciencia y muerte. Puede ser causada por desplazamiento del oxígeno por otros 
                                  gases, combustión o reacciones químicas como la oxidación.
                                </p>
                              </div>
                              <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                                <h4 className="font-bold text-orange-800 mb-3">🔥 Enriquecimiento (&gt;23.5%)</h4>
                                <p className="text-gray-700 text-sm">
                                  Una atmósfera enriquecida en oxígeno es un <b>riesgo de incendio extremo</b>. Aumenta drásticamente la 
                                  inflamabilidad de los materiales, haciendo que la ropa, el aceite y otros objetos que normalmente no arden 
                                  puedan encenderse violentamente.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Gases Combustibles */}
                      <motion.div 
                        className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border-2 border-orange-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-orange-500 rounded-2xl p-4 flex-shrink-0">
                            <Flame className="h-10 w-10 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-orange-900 mb-4">2. Gases Combustibles (%LEL): El Riesgo de Explosión</h3>
                            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                              Este parámetro no mide un solo gas, sino la <b>inflamabilidad general de la atmósfera</b>. El LEL (Límite 
                              Inferior de Explosividad) es la concentración mínima de un gas combustible en el aire que puede encenderse 
                              en presencia de una fuente de ignición.
                            </p>
                            <div className="bg-white p-6 rounded-xl">
                              <div className="flex items-start gap-3 mb-4">
                                <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                  <h4 className="font-bold text-orange-800 mb-2">Margen de Seguridad Crítico</h4>
                                  <p className="text-gray-700 text-sm leading-relaxed">
                                    Los monitores <span className="bg-orange-100 px-2 py-1 rounded font-semibold">NO esperan a que se alcance 
                                    el 100% del LEL</span>. Las alarmas se activan típicamente al <b>10% LEL</b>, proporcionando un margen de 
                                    seguridad crucial para evacuar antes de que la atmósfera se vuelva explosiva.
                                  </p>
                                </div>
                              </div>
                              <div className="bg-orange-50 p-4 rounded-lg">
                                <p className="text-sm text-orange-900">
                                  <b>Ejemplo:</b> El metano tiene un LEL de 5% en volumen. Una alarma al 10% LEL se activará cuando 
                                  la concentración sea del 0.5% (mucho antes del peligro real).
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Monóxido de Carbono */}
                      <motion.div 
                        className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl shadow-xl border-2 border-gray-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-gray-600 rounded-2xl p-4 flex-shrink-0">
                            <Activity className="h-10 w-10 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Monóxido de Carbono (CO): El Asesino Silencioso</h3>
                            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                              El monóxido de carbono es un gas <b className="text-red-600">altamente tóxico, incoloro e inodoro</b>, 
                              lo que lo hace imposible de detectar sin un equipo adecuado.
                            </p>
                            <div className="bg-white p-6 rounded-xl">
                              <h4 className="font-bold text-gray-800 mb-3">⚠️ Mecanismo Letal</h4>
                              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                Es un subproducto de la combustión incompleta de materiales a base de carbono. Al ser inhalado, 
                                <b className="text-red-600"> se adhiere a la hemoglobina con una afinidad 200-300 veces mayor que el oxígeno</b>, 
                                impidiendo que este llegue a los órganos vitales y causando envenenamiento por asfixia química.
                              </p>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-700">
                                  <b>Fuentes comunes:</b> Motores de combustión interna (generadores, compresores), calentadores de propano, 
                                  trabajos de soldadura en áreas con ventilación deficiente.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Sulfuro de Hidrógeno */}
                      <motion.div 
                        className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-xl border-2 border-yellow-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="bg-yellow-600 rounded-2xl p-4 flex-shrink-0">
                            <Droplets className="h-10 w-10 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-yellow-900 mb-4">4. Sulfuro de Hidrógeno (H₂S): El Peligro Engañoso</h3>
                            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                              El ácido sulfhídrico es un gas <b>extremadamente tóxico, corrosivo e inflamable</b>. Es conocido por su 
                              distintivo olor a "huevo podrido" a bajas concentraciones.
                            </p>
                            <div className="bg-gradient-to-r from-red-100 to-orange-100 border-4 border-red-400 p-6 rounded-xl">
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                                <div>
                                  <h4 className="font-bold text-red-900 mb-2">🚨 La Trampa Mortal del Olfato</h4>
                                  <p className="text-gray-800 leading-relaxed">
                                    Este olor presenta un <b className="bg-red-200 px-2 py-1 rounded">peligroso engaño</b>: a concentraciones 
                                    más altas y letales, el H₂S <b>paraliza rápidamente el nervio olfativo</b>, eliminando la capacidad de 
                                    olerlo. Esta fatiga olfativa puede dar una falsa sensación de que el peligro ha desaparecido, cuando en 
                                    realidad ha aumentado a niveles mortales.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg mt-4">
                              <p className="text-sm text-gray-700">
                                <b>Fuentes comunes:</b> Descomposición de materia orgánica, industria del petróleo y gas, plantas de 
                                tratamiento de aguas residuales, sistemas de alcantarillado, industria papelera.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Tecnología de Sensores */}
                  <section id="tecnologia-sensores" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🔬 Tecnología de Sensores: El Corazón del Detector
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-10 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Los sensores realizan la detección real. Entender la tecnología detrás de ellos es <b className="text-purple-600">crucial 
                      para seleccionar un monitor fiable</b> y rentable para su entorno específico.
                    </motion.p>

                    {/* Selector de tipo de sensor */}
                    <div className="flex justify-center gap-4 mb-10">
                      <motion.button
                        onClick={() => setSelectedSensor('electroquimico')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedSensor === 'electroquimico'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Electroquímicos
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedSensor('catalitico')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedSensor === 'catalitico'
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-300'
                        }`}
                      >
                        Catalíticos
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedSensor('infrarrojo')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedSensor === 'infrarrojo'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Infrarrojos (IR)
                      </motion.button>
                    </div>

                    {/* Contenido según sensor seleccionado */}
                    <AnimatePresence mode="wait">
                      {selectedSensor === 'electroquimico' && (
                        <motion.div
                          key="electroquimico"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-blue-500 rounded-xl">
                              <Activity className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-blue-900 mb-2">Sensores Electroquímicos</h3>
                              <p className="text-gray-600">Tecnología más común para gases tóxicos y oxígeno</p>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              Principio de Funcionamiento
                            </h4>
                            <p className="text-gray-700 mb-4">
                              Opera de manera similar a una batería. El gas objetivo se <b>difunde a través de una membrana porosa</b> 
                              y reacciona en la superficie de un electrodo (oxidación o reducción). Esta reacción química genera una 
                              <b className="text-blue-700"> pequeña corriente eléctrica directamente proporcional</b> a la concentración 
                              del gas presente.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border-l-4 border-green-500">
                              <h4 className="font-bold text-green-800 mb-3">✅ Ventajas</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Buena especificidad para el gas objetivo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Tiempo de respuesta rápido</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Estándar de la industria para CO, H₂S y O₂</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                              <h4 className="font-bold text-red-800 mb-3">❌ Limitaciones</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Vida útil limitada (2-3 años típicamente)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Susceptibles a la deriva con el tiempo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Pueden sufrir interferencias cruzadas</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg mt-6">
                            <p className="text-sm text-blue-900">
                              <b>Aplicación ideal:</b> Detección de monóxido de carbono (CO), sulfuro de hidrógeno (H₂S) y 
                              monitorización de niveles de oxígeno (O₂).
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedSensor === 'catalitico' && (
                        <motion.div
                          key="catalitico"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-orange-500 rounded-xl">
                              <Flame className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-orange-900 mb-2">Sensores Catalíticos (Pellistors)</h3>
                              <p className="text-gray-600">Tecnología tradicional para gases combustibles</p>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              Principio de Funcionamiento
                            </h4>
                            <p className="text-gray-700 mb-4">
                              Utiliza un par de pequeñas <b>perlas de cerámica calentadas</b> ("pellistors"). Una perla está tratada con 
                              un catalizador (elemento activo) y la otra es inerte (referencia). Cuando un gas combustible entra en contacto 
                              con la perla activa caliente (~450°C), <b className="text-orange-700">se oxida o "quema"</b>. Esta combustión 
                              genera calor adicional que aumenta la resistencia eléctrica de la perla.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-xl mb-6">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-yellow-900 mb-2">⚠️ Limitación Crítica: Requiere Oxígeno</h4>
                                <p className="text-gray-800 leading-relaxed">
                                  Necesitan un <b className="bg-yellow-200 px-2 py-1 rounded">mínimo de 10-12% de oxígeno</b> en la atmósfera 
                                  para funcionar correctamente. Sin oxígeno, la combustión catalítica no puede ocurrir y <b className="text-red-700">
                                  el sensor no detectará el peligro</b>, incluso con gas combustible presente.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border-l-4 border-green-500">
                              <h4 className="font-bold text-green-800 mb-3">✅ Ventajas</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Responde a casi todos los gases combustibles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Tecnología robusta y probada</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Relativamente económico</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                              <h4 className="font-bold text-red-800 mb-3">❌ Limitaciones</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Requiere oxígeno para funcionar (10%)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Vulnerable al envenenamiento (siliconas, plomo, azufre)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Vida útil variable (2-5 años según condiciones)</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedSensor === 'infrarrojo' && (
                        <motion.div
                          key="infrarrojo"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-green-500 rounded-xl">
                              <Zap className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-green-900 mb-2">Sensores Infrarrojos (IR)</h3>
                              <p className="text-gray-600">Tecnología avanzada con ventajas significativas</p>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              Principio de Funcionamiento
                            </h4>
                            <p className="text-gray-700 mb-4">
                              Opera según el <b>principio de absorción de luz</b>. Un emisor genera un haz de luz infrarroja que pasa a 
                              través de la muestra de gas. Las moléculas de gases de hidrocarburos <b className="text-green-700">absorben 
                              energía lumínica en una longitud de onda específica</b>. Un detector mide cuánta luz ha sido absorbida, y 
                              esta cantidad es directamente proporcional a la concentración del gas.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-400 p-6 rounded-xl mb-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-green-900 mb-2">🏆 Ventaja Clave: No Requiere Oxígeno</h4>
                                <p className="text-gray-800 leading-relaxed">
                                  Su mayor ventaja es que <b className="bg-green-200 px-2 py-1 rounded">funcionan perfectamente en 
                                  atmósferas inertes</b> (sin oxígeno), lo que los hace ideales para tanques purgados con nitrógeno o 
                                  ambientes con bajo O₂. Son inmunes al envenenamiento por contaminantes.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-xl border-l-4 border-green-500">
                              <h4 className="font-bold text-green-800 mb-3">✅ Ventajas Superiores</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>No requieren oxígeno para operar</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Inmunes al envenenamiento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Vida útil muy larga (5-10+ años)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Deriva mínima, menos calibraciones</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                              <h4 className="font-bold text-red-800 mb-3">❌ Consideraciones</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>No pueden detectar hidrógeno (H₂)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Costo inicial significativamente más alto</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>Mayor consumo de energía</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                            <div className="flex items-start gap-3">
                              <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-green-900 mb-2">💡 Análisis de Costo Total de Propiedad (TCO)</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Aunque el costo inicial es más alto, el análisis del TCO a menudo demuestra su <b>superioridad económica</b>. 
                                  En entornos con venenos potenciales, el costo de reemplazar múltiples sensores catalíticos puede superar la 
                                  inversión inicial en un sensor IR. Esta decisión transforma la compra de un gasto a corto plazo a una 
                                  <b className="text-green-700"> inversión estratégica en seguridad y fiabilidad</b> a largo plazo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Top 5 Productos */}
                  <section id="productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        🏆 Top 5 Monitores de Gases del Mercado Mexicano 2025
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
                      {/* Producto #1 - Dräger X-am 2500 */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-6 py-3">
                            🥇 #1
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            ESTÁNDAR DE ORO INDUSTRIAL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Dräger X-am 2500
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(25+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Minería, Refinerías, Industria Química, Servicios de Emergencia
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El Dräger X-am 2500 es un monitor multigás de <b className="text-blue-700">fabricación alemana</b>, sinónimo de 
                          durabilidad y fiabilidad en los entornos más hostiles. Su diseño robusto con <b>protección IP67</b> lo hace 
                          resistente al agua y al polvo, mientras que sus sensores de larga duración (vida útil esperada de más de 5 años 
                          para O₂, CO y H₂S) y su 
                          <b className="bg-blue-100 px-2 py-1 rounded">sensor Ex catalítico con alta resistencia al envenenamiento</b> minimizan los costos operativos a largo plazo.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción extremadamente robusta (IP67)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Sensores de muy larga duración (5+ años)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Resistencia superior al envenenamiento</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Aprobado ATEX Zona 0</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Probado según MIL-STD-810G</span>
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
                                <span>Costo inicial significativamente más elevado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Puede ser ligeramente más grande y pesado</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Rango de Precio: $25,000 - $30,500 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/detector-de-gases-ex-o2-co-h2s-drger-x-am-2500/p/MLM25414537"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Honeywell BW MicroClip X3 */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MEJOR PROFESIONAL COMPACTO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Honeywell BW MicroClip X3
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(150+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Uso General Industrial, Contratistas, Servicios Públicos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El MicroClip X3 es uno de los <b className="text-green-700">monitores multigás más vendidos a nivel mundial</b>. 
                          Ofrece un equilibrio excepcional entre un diseño delgado y ligero (solo 179 g) y una fiabilidad probada en campo. 
                          Su operación con un solo botón lo hace increíblemente fácil de usar, minimizando la capacitación. La versión X3 
                          destaca por su <b className="bg-green-100 px-2 py-1 rounded">garantía de 3 años y sensor de O₂ con vida útil de 5 años</b>.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            Características Destacadas
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span><b>IntelliFlash:</b> Luz verde parpadeante confirma funcionamiento correcto</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span><b>Clasificación IP68:</b> Protección superior contra agua y polvo</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span><b>Batería garantizada:</b> 18 horas incluso a -20°C</span>
                            </li>
                          </ul>
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
                                <span>Extremadamente compacto y ligero (179g)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Operación intuitiva con un solo botón</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Garantía extendida de 3 años</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Sensor O₂ de 5 años reduce mantenimiento</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Clasificación IP68 superior</span>
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
                                <span>Precio elevado comparado con genéricos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Batería de 18h es buena pero superada por modelos IR</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Rango de Precio: $24,000 - $27,500 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/detector-multigas-gas-alert-microclip-x3-mcx3xwhmyna/up/MLMU1096175422"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Honeywell BW Flex4 */}
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
                            PRÓXIMA GENERACIÓN
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Honeywell BW Flex4
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(89+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Empresas que buscan tecnología de punta y conectividad
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El BW Flex representa <b className="text-purple-700">la evolución de los monitores portátiles</b>, integrando 
                          conectividad y sensores inteligentes. Su característica más destacada es la opción de un <b>sensor LEL infrarrojo 
                          (IR) de bajo consumo</b>, que permite una duración de batería de hasta <b className="bg-purple-100 px-2 py-1 rounded">
                          dos meses con una sola carga</b>, eliminando la necesidad de recargas diarias.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Radio className="h-6 w-6" />
                            Conectividad Bluetooth
                          </h4>
                          <p className="text-gray-700">
                            La conectividad <b>Bluetooth (BLE)</b> permite a los usuarios configurar el dispositivo, ver lecturas y descargar 
                            registros de eventos directamente en un smartphone o tablet, <b className="text-blue-700">simplificando enormemente 
                            la gestión de flotas</b> y el cumplimiento normativo para supervisores de seguridad.
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
                                <span>Duración de batería líder (hasta 2 meses con IR)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Conectividad Bluetooth para gestión digital</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Sensores "inteligentes" con info predictiva</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño robusto IP68</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Pantalla de alta resolución</span>
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
                                <span>Costo inicial alto, especialmente con sensor IR</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Requiere programa de seguridad con gestión digital</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/detector-portatil-multigas-honeywell-bw-flex/up/MLMU420826277"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Detector Genérico 4-en-1 */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-3xl shadow-2xl border-2 border-yellow-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-yellow-500 text-white font-bold text-lg px-6 py-3">
                            ⭐ #4
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            MEJOR RELACIÓN CALIDAD-PRECIO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Detector Multigás Genérico 4-en-1 (Tipo Yosoo/GOYOJO)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.5) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(1,000+ reseñas) - 4.6/5</span>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Presupuestos ajustados, contratistas independientes, uso ocasional no crítico
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Estos detectores, a menudo sin una marca reconocida, <b className="text-yellow-700">dominan las listas de más vendidos</b> 
                          en plataformas como Mercado Libre y Amazon por su precio extremadamente competitivo. Ofrecen la funcionalidad estándar 
                          de 4 gases (O₂, LEL, CO, H₂S), pantalla LCD a color, alarmas triples (sonido, luz, vibración) y batería recargable por USB.
                        </p>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-4 border-red-400 p-6 rounded-xl mb-6">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-red-900 mb-2">⚠️ Advertencia Importante para Uso Profesional</h4>
                              <p className="text-gray-800 leading-relaxed mb-3">
                                Estos dispositivos presentan <b className="bg-red-200 px-2 py-1 rounded">banderas rojas para uso profesional</b>. 
                                La información sobre certificaciones de seguridad cruciales (como ATEX, UL o CSA) es generalmente inexistente.
                              </p>
                              <p className="text-red-800 font-semibold">
                                Utilizar un equipo no certificado en un entorno industrial no solo es una violación de las mejores prácticas 
                                de seguridad, sino que también expone a la empresa a <b>graves responsabilidades legales</b> en caso de accidente.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precio muy bajo, extremadamente accesible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Funcionalidad completa de 4 gases</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Alarmas triples (sonido, luz, vibración)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Fácil de adquirir en e-commerce</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras Críticos
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Calidad y durabilidad cuestionables</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Sin certificaciones de seguridad (ATEX, UL, CSA)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Soporte técnico inexistente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precisión puede degradarse rápidamente</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Rango de Precio: $1,200 - $4,500 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/detector-de-4-gases"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Honeywell BW Clip Monogás */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-6 py-3">
                            🎯 #5
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            MEJOR MONOGÁS SIN MANTENIMIENTO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Honeywell BW Clip (Detector Monogás CO)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(200+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Riesgos específicos conocidos, EPP personal, ambientes con un solo gas peligroso
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El BW Clip es <b className="text-teal-700">la solución definitiva para monitorización de un único riesgo</b> de gas 
                          conocido, como el monóxido de carbono. Su concepto es la <b>simplicidad absoluta</b>: se enciende una vez y funciona 
                          de forma continua durante <b className="bg-teal-100 px-2 py-1 rounded">dos años sin necesidad de hacer absolutamente nada</b>. 
                          No requiere calibración, cambio de sensor ni recarga de batería.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Filosofía "Encender y Olvidar"
                          </h4>
                          <p className="text-gray-700">
                            Este enfoque elimina la <b>carga de mantenimiento</b> y garantiza el cumplimiento con un costo de propiedad totalmente 
                            predecible. Es ideal como equipo de protección personal asignado a cada trabajador expuesto a un <b className="text-green-700">
                            riesgo específico y constante</b>.
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
                                <span>Cero mantenimiento durante 2 años</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Extremadamente simple de usar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño compacto, ligero y robusto (IP66/67)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Costo total de propiedad bajo y predecible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Sin necesidad de calibración</span>
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
                                <span>Solo detecta un gas (inadecuado para espacios confinados con múltiples riesgos)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Desechable, genera residuos electrónicos</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-2392230887-bw-clip-bwc2-m-monitor-de-co-de-gas-unico-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
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
                        📊 Comparación Detallada: Top 3 Monitores
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Comparativo: Los 3 Monitores Mejor Valorados"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                      buttonText="Ver en Mercado Libre"
                      affiliateNote="📢 Divulgación: Los enlaces son de afiliados de Mercado Libre. Podemos recibir una comisión si realizas una compra, sin costo adicional para ti."
                    />
                  </section>

                  {/* Guía de Compra */}
                  <section id="guia-compra" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🛒 Guía de Compra Rápida
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* 3 Consejos Clave */}
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-2 border-green-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                          💡 3 Consejos Clave para Acertar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-xl border-l-4 border-green-500">
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                1
                              </div>
                              <div>
                                <h4 className="font-bold text-green-900 mb-2">Priorice el Análisis de Riesgos, No el Catálogo</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  El punto de partida nunca debe ser el precio o características de un producto, sino una <b>evaluación rigurosa 
                                  del entorno de trabajo</b>, tal como exige la NOM-033-STPS-2015. ¿A qué gases específicos están expuestos? 
                                  ¿Son riesgos constantes o variables? La respuesta determinará si necesita un monitor monogás para un riesgo 
                                  singular o un multigás para espacios confinados.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                2
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-900 mb-2">Invierta en Fiabilidad, No Solo en un Dispositivo</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Optar por marcas reconocidas como <b>Dräger o Honeywell</b> no es solo pagar por un nombre; es invertir en un 
                                  ecosistema de seguridad. Estos fabricantes ofrecen sensores de mayor calidad con vida útil más larga, construcción 
                                  robusta y soporte técnico fiable. También compatibilidad con estaciones de acoplamiento que automatizan 
                                  mantenimiento y documentación.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500">
                            <div className="flex items-start gap-4">
                              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                3
                              </div>
                              <div>
                                <h4 className="font-bold text-purple-900 mb-2">No Subestime la Importancia de la Robustez (Clasificación IP)</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Un monitor es una herramienta de campo, no de oficina. Busque una <b>clasificación de al menos IP67</b>, que 
                                  garantiza hermeticidad al polvo y resistencia a inmersión temporal en agua. Una clasificación IP68, como la del 
                                  Honeywell BW MicroClip X3 o Flex4, ofrece protección aún mayor. Esta robustez asegura que su inversión sobrevivirá 
                                  a las condiciones reales de trabajo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg border-2 border-red-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                          ❌ 3 Errores Comunes a Evitar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                            <div className="flex items-start gap-4">
                              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-red-900 mb-2">1. Confiar en el Olfato o la Vista</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Este es el error más fundamental y peligroso. Los gases más letales son <b>invisibles e inodoros</b>: monóxido 
                                  de carbono, metano y deficiencia de oxígeno. Incluso el H₂S, que tiene olor distintivo a bajas concentraciones, 
                                  es un traidor: a niveles peligrosos anestesia el nervio olfativo. <b className="text-red-700">El único sentido 
                                  en el que puede confiar es un monitor debidamente calibrado</b>.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                              <AlertCircle className="h-8 w-8 text-orange-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-orange-900 mb-2">2. Comprar Basado Únicamente en el Precio Inicial</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Un monitor genérico de bajo costo puede parecer inteligente, pero a menudo es una trampa. Estos dispositivos 
                                  tienen sensores de menor calidad que se degradan más rápido, construcción menos duradera y <b>falta total de 
                                  soporte postventa</b>. A largo plazo, el costo de reemplazos, sumado al riesgo incalculable de un fallo en una 
                                  situación de vida o muerte, hace que la inversión en equipo profesional sea mucho más rentable y segura.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4">
                              <HelpCircle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-yellow-900 mb-2">3. Creer que "Calibración" y "Prueba de Respuesta" son lo Mismo</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Omitir la <b>prueba de respuesta (bump test) diaria</b> porque el equipo fue "calibrado hace 3 meses" es 
                                  potencialmente fatal. Son procesos diferentes con propósitos distintos. La calibración asegura precisión a lo 
                                  largo del tiempo. La prueba de respuesta asegura <b className="text-yellow-700">funcionalidad en el momento del uso</b>, 
                                  verificando que sensores no estén bloqueados y alarmas funcionen. Un sensor puede estar calibrado pero tener 
                                  puertos obstruidos. Solo un bump test diario puede revelar este fallo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg border-2 border-indigo-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Settings className="h-8 w-8 text-indigo-600" />
                          <h3 className="text-2xl font-bold text-indigo-900">🔧 Mantenimiento Esencial</h3>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          El mantenimiento de un monitor de gases es un <b className="text-indigo-700">pilar no negociable</b> de cualquier 
                          programa de seguridad. Se basa en dos prácticas complementarias y obligatorias:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                              <Activity className="h-5 w-5" />
                              Prueba de Respuesta (Bump Test)
                            </h4>
                            <div className="space-y-3">
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-900 font-semibold mb-1">📅 Frecuencia:</p>
                                <p className="text-xs text-gray-700">Antes de cada jornada de uso</p>
                              </div>
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-900 font-semibold mb-1">🎯 Propósito:</p>
                                <p className="text-xs text-gray-700">
                                  Confirmar que sensores están vivos, sin obstrucciones, y que alarmas funcionan. Es la verificación de que 
                                  el equipo puede "gritar" si ve peligro.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                            <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              Calibración Periódica
                            </h4>
                            <div className="space-y-3">
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-sm text-purple-900 font-semibold mb-1">📅 Frecuencia:</p>
                                <p className="text-xs text-gray-700">Típicamente cada 6 meses por personal calificado</p>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-sm text-purple-900 font-semibold mb-1">🎯 Propósito:</p>
                                <p className="text-xs text-gray-700">
                                  Ajuste de precisión que compara y alinea las lecturas con una concentración de gas certificada, corrigiendo 
                                  cualquier desviación o "deriva" del sensor.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-4 border-red-400">
                          <p className="text-red-900 font-bold text-center text-lg">
                            ⚠️ Omitir cualquiera de estos pasos convierte un equipo de protección vital en una peligrosa fuente de falsa confianza
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
                            className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all flex items-center justify-between gap-4"
                          >
                            <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-blue-600 flex-shrink-0" />
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
                          <Shield className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            Elegir un monitor de gases no es un gasto, es <b className="text-green-700">la inversión más crítica que una empresa 
                            puede hacer en la vida de sus trabajadores</b>. Es la primera y última línea de defensa contra peligros invisibles.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Para operaciones industriales que exigen la máxima fiabilidad, el <b>Dräger X-am 2500</b> se establece como el estándar 
                            de la industria. Para quienes buscan la combinación perfecta de portabilidad y rendimiento probado, el 
                            <b> Honeywell BW MicroClip X3</b> es una elección inteligente y confiable.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Robustez</h3>
                          </div>
                          <p className="text-gray-700 text-center text-sm">
                            <b>Dräger X-am 2500</b> - Máxima durabilidad y fiabilidad para industria pesada con sensores de 5+ años de vida útil.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Package className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Compacto</h3>
                          </div>
                          <p className="text-gray-700 text-center text-sm">
                            <b>Honeywell BW MicroClip X3</b> - El monitor multigás más vendido mundialmente por su equilibrio perfecto 
                            entre tamaño, fiabilidad y facilidad de uso.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Zap className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Tecnología</h3>
                          </div>
                          <p className="text-gray-700 text-center text-sm">
                            <b>Honeywell BW Flex4</b> - Tecnología de próxima generación con conectividad Bluetooth y batería de hasta 2 meses.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">Recuerde: La Preparación es Clave</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Un monitor de gases adecuado es aquel que te permite concentrarte plenamente en tu trabajo, con la tranquilidad 
                        de que tu seguridad está garantizada. <b>Invierte en calidad, prioriza la certificación adecuada y 
                        trabaja con la confianza</b> que solo la protección correcta puede ofrecer.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        ⚠️ La detección de gases no es, ni será nunca, negociable ⚠️
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-2xl border-2 border-blue-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál de estos monitores se convertirá en tu guardián invisible? 
                      </p>
                      <p className="text-lg text-blue-800 font-semibold">
                        🔬 Equípate con inteligencia, detecta con precisión, trabaja seguro 🔬
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