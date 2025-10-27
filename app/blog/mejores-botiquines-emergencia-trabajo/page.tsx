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
  Heart,
  Activity,
  FileText,
  Users,
  Briefcase,
  Building,
  Construction,
  Package,
  ChevronDown,
  Info,
  Zap,
  Eye,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

export default function BotiquinesTrabajoArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<'bajo' | 'medio' | 'alto'>('bajo');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'metalico-pared',
      name: 'Botiquín Metálico de Pared Mediano',
      rating: 4.9,
      reviewCount: 69,
      isRecommended: true,
      bestFor: 'Oficinas y Comercios',
      amazonLink: 'https://mercadolibre.com/sec/1dq6Lfe'
    },
    {
      id: 'industrial-num5',
      name: 'Botiquín Industrial Num.5',
      rating: 4.7,
      reviewCount: 43,
      isRecommended: false,
      bestFor: 'Industria Pesada',
      amazonLink: 'https://mercadolibre.com/sec/2yRYKpK'
    },
    {
      id: 'matein-1233',
      name: 'Botiquín Matein 1233',
      rating: 4.9,
      reviewCount: 284,
      isRecommended: true,
      bestFor: 'Brigadistas y Móviles',
      amazonLink: 'https://mercadolibre.com/sec/1GCdYb6'
    }
  ];

  const comparisonFeatures = [
    { name: 'Tipo de Estuche', product1: 'Metal (fijo)', product2: 'Metal (fijo/semi-portátil)', product3: 'Tela (portátil)' },
    { name: 'Ideal para', product1: 'Oficinas, comercios', product2: 'Industria, talleres', product3: 'Brigadistas, vehículos' },
    { name: 'Capacidad', product1: 'Mediana', product2: 'Grande (51x41x11 cm)', product3: 'Variable con compartimentos' },
    { name: 'Portabilidad', product1: false, product2: 'Limitada', product3: true },
    { name: 'Impermeable', product1: false, product2: false, product3: true },
    { name: 'Compartimentos Ajustables', product1: false, product2: true, product3: true },
    { name: 'Incluye Contenido', product1: 'Sí (básico)', product2: 'Generalmente vacío', product3: 'Vacío' },
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
      title: 'Top 7 Kits de Herramientas 2025',
      excerpt: 'La guía definitiva para elegir el kit perfecto de herramientas.',
      description: 'La guía definitiva para elegir el kit perfecto de herramientas.',
      category: 'Herramientas',
      publishDate: '30 Ago 2025',
      readTime: '18 min',
      image: '/images/kits-herramientas.jpg',
      slug: 'top-7-kits-herramientas-2025'
    },
    {
      id: '3',
      title: 'Monitores de Gases: Protección Invisible Pero Vital',
      excerpt: 'Guía esencial sobre detección de gases en espacios confinados.',
      description: 'Guía esencial sobre detección de gases en espacios confinados.',
      category: 'Seguridad Industrial',
      publishDate: '21 Oct 2025',
      readTime: '25 min',
      image: '/images/monitores-gases.jpg',
      slug: 'monitores-gases-proteccion-invisible-vital'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Qué normativa de la STPS deben cumplir los botiquines en México?',
      answer: 'No existe una única norma que "certifique" un botiquín. El cumplimiento es una suma de responsabilidades del empleador. La NOM-005-STPS-1998 ofrece una guía de contenido que, aunque no es obligatoria, es la referencia más común. La NOM-030-STPS-2009 obliga a las empresas a realizar un análisis de riesgos, y el botiquín debe ser adecuado para responder a ese análisis. En resumen, el botiquín debe ser "adecuado" para los peligros identificados en su empresa.'
    },
    {
      question: '¿Es obligatorio tener un botiquín en mi negocio aunque sea pequeño?',
      answer: 'Sí. La Ley Federal del Trabajo y las Normas Oficiales Mexicanas aplican a todos los "centros de trabajo", sin importar su tamaño. Desde una microempresa con un solo empleado hasta una gran corporación, todas tienen la obligación de contar con los medios necesarios para prestar los primeros auxilios en caso de emergencia. Lo que varía es el tamaño, la cantidad y la complejidad de los botiquines, los cuales deben ser proporcionales al número de trabajadores y al nivel de riesgo del entorno.'
    },
    {
      question: '¿Cada cuánto debo revisar y reponer el contenido de mi botiquín?',
      answer: 'La mejor práctica, recomendada por expertos en seguridad industrial, es realizar una inspección visual mensual para detectar faltantes evidentes y un inventario detallado cada 3 a 6 meses para verificar caducidades. Es fundamental reponer cualquier insumo utilizado de forma inmediata para que el kit esté siempre completo y listo para la siguiente emergencia.'
    },
    {
      question: '¿Puedo incluir medicamentos como paracetamol o ibuprofeno en el botiquín?',
      answer: 'Se debe tener extrema precaución con este tema. La NOM-005-STPS-1998 indica que la inclusión de medicamentos queda "a criterio del médico responsable del servicio de urgencias". Para la mayoría de las empresas que no cuentan con personal médico en sitio, suministrar medicamentos a un empleado puede tener serias implicaciones legales. La recomendación general es NO incluir medicamentos de ningún tipo y limitarse a material de curación, antisépticos y material instrumental.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema médico/emergencia */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${350 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Cruces médicas flotantes (20 cruces) */}
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={`cross-${i}`}
                className="absolute text-white opacity-30"
                style={{
                  fontSize: `${12 + (i % 8)}px`,
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  rotate: [0, 360],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 10 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-6 h-6" />
              </motion.div>
            ))}

            {/* Partículas de pulso (30 partículas) */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute border-2 border-red-300 rounded-full opacity-40"
                style={{
                  width: 60,
                  height: 60,
                  left: `${(i * 6.67) % 100}%`,
                  top: `${(i * 8.33) % 100}%`,
                }}
                animate={{
                  scale: [0, 3, 0],
                  opacity: [0.6, 0, 0.4]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.4,
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
                className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 rounded-full px-4 py-2 text-red-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Heart className="h-4 w-4" />
                🏥 Seguridad y Salud en el Trabajo
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Botiquines de Emergencia para el Trabajo en 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-red-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía completa de normativas, productos y mejores prácticas en México
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-sm text-red-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  2 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  20 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo médicas */}
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${350 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
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
                      className="bg-gradient-to-r from-red-50 to-pink-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-red-500 rounded-full p-3 flex-shrink-0">
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-red-900 mb-3">⚠️ Los Segundos Son Críticos</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            En cualquier lugar de trabajo, desde una tranquila oficina hasta una ajetreada obra de construcción, 
                            <strong className="text-red-600"> el riesgo de un accidente es una realidad inevitable</strong>. 
                            Los segundos que siguen a un incidente son críticos, y la diferencia entre un susto menor y una 
                            emergencia grave a menudo reside en una sola cosa: <b className="bg-red-100 px-2 py-1 rounded">la preparación</b>.
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
                      Contar con el <b>botiquín de primeros auxilios adecuado</b> no es solo una obligación legal en México, 
                      es la herramienta fundamental que demuestra el compromiso de una empresa con la 
                      <b className="text-red-600"> seguridad y el bienestar de su equipo</b>.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Más Allá del Cumplimiento</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Elegir un botiquín va más allá de simplemente seleccionar el que contiene más piezas. Una decisión informada 
                        debe considerar el <b>marco normativo mexicano</b>, los <b>riesgos específicos</b> de la operación y las 
                        <b> necesidades logísticas</b> del centro de trabajo.
                      </p>
                    </motion.div>
                  </section>

                  {/* Normatividad Mexicana */}
                  <section id="normatividad" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        📜 Cumplimiento Normativo en México
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-400 p-8 rounded-2xl mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Error Común: La Certificación Inexistente</h3>
                          <p className="text-gray-800 leading-relaxed mb-4">
                            Un error común es buscar un botiquín <b className="text-yellow-800">"certificado"</b> o que garantice el 
                            cumplimiento total de la ley por sí solo. <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">
                            En la práctica, no existe tal certificación unificada</span>.
                          </p>
                          <p className="text-gray-800 leading-relaxed font-semibold">
                            La responsabilidad final recae en el <b>empleador</b>, quien debe ensamblar un sistema de respuesta 
                            basado en un análisis de sus propios riesgos.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-lg text-gray-700 mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      La normativa mexicana relevante es un <b>conjunto de disposiciones</b> que se complementan entre sí:
                    </motion.p>

                    {/* NOM-005-STPS-1998 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-500 mb-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <FileText className="h-8 w-8 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-blue-900">NOM-005-STPS-1998</h3>
                          <p className="text-gray-600 text-sm">Sustancias Químicas Peligrosas</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Frecuentemente citada por su guía de referencia sobre el contenido de un botiquín. 
                        <b className="bg-blue-50 px-2 py-1 rounded ml-2">Sin embargo, esta guía es explícitamente "No obligatoria"</b>.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <Info className="h-4 w-4 inline mr-2" />
                          <b>Importante:</b> Es un excelente punto de partida, pero NO una lista de verificación exhaustiva 
                          ni legalmente vinculante para todos los centros de trabajo.
                        </p>
                      </div>
                    </motion.div>

                    {/* NOM-030-STPS-2009 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-green-500 mb-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Activity className="h-8 w-8 text-green-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-green-900">NOM-030-STPS-2009</h3>
                          <p className="text-gray-600 text-sm">Servicios Preventivos de Seguridad y Salud</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Exige que cada empresa realice un <b className="text-green-700">"Diagnóstico de seguridad y salud"</b> 
                        para identificar sus riesgos particulares.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800 font-semibold">
                          ✓ Esta es la norma que fundamenta la obligación del análisis de riesgos específicos.
                        </p>
                      </div>
                    </motion.div>

                    {/* NOM-006-STPS-2014 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-purple-500 mb-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Package className="h-8 w-8 text-purple-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-purple-900">NOM-006-STPS-2014</h3>
                          <p className="text-gray-600 text-sm">Manejo y Almacenamiento de Materiales</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Requiere que el centro de trabajo cuente con un botiquín cuyo contenido sea 
                        <b className="text-purple-700"> "de conformidad con los riesgos identificados y el número de trabajadores expuestos"</b>.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-purple-800 font-semibold">
                          ⚡ El botiquín debe ser proporcional y específico a los riesgos del centro de trabajo.
                        </p>
                      </div>
                    </motion.div>

                    {/* Conclusión Normativa */}
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">El Proceso Correcto</h3>
                      </div>
                      <p className="leading-relaxed text-lg mb-4">
                        No es buscar un sello de <span className="line-through">"Cumple NOM-005"</span>, sino:
                      </p>
                      <ol className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                          <span><b>Realizar un análisis de riesgo interno</b> (como lo exige la NOM-030)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                          <span><b>Adquirir o ensamblar un botiquín</b> que cubra esos riesgos específicos</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                          <span><b>Usar la guía de la NOM-005-STPS-1998</b> como mejor referencia inicial</span>
                        </li>
                      </ol>
                    </motion.div>

                    {/* Contenido Recomendado NOM-005 */}
                    <motion.div 
                      className="mt-8 bg-white p-8 rounded-2xl shadow-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        📋 Contenido Recomendado según NOM-005-STPS-1998
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Material Seco */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            Material Seco
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Gasas de diversas medidas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Vendas elásticas y de gasa</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Tela adhesiva (micropore)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Apósitos y abatelenguas</span>
                            </li>
                          </ul>
                        </div>

                        {/* Material Líquido */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                          <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                            <Activity className="h-5 w-5" />
                            Material Líquido
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Benzal (clorhexidina)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Tintura de yodo (isodine)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Jabón neutro líquido</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Alcohol y agua estéril</span>
                            </li>
                          </ul>
                        </div>

                        {/* Instrumental */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                          <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center gap-2">
                            <Activity className="h-5 w-5" />
                            Instrumental
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Tijeras (rectas y de botón)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Pinzas de curación</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Termómetro</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Ligaduras de hule</span>
                            </li>
                          </ul>
                        </div>

                        {/* Material Complementario */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200">
                          <h4 className="font-bold text-orange-900 mb-4 text-lg flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Material Complementario
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Guantes de cirujano</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Tablillas/férulas para inmovilizar</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Manta térmica</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Linterna de mano</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Adecuación por Nivel de Riesgo */}
                  <section id="nivel-riesgo" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ⚠️ Adecuación al Nivel de Riesgo
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      El contenido del botiquín debe ser un <b className="text-red-600">reflejo directo</b> de los peligros 
                      potenciales en el lugar de trabajo.
                    </motion.p>

                    {/* Selector de Nivel de Riesgo */}
                    <div className="flex justify-center gap-4 mb-10">
                      <motion.button
                        onClick={() => setSelectedRisk('bajo')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedRisk === 'bajo'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Riesgo Bajo
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedRisk('medio')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedRisk === 'medio'
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-300'
                        }`}
                      >
                        Riesgo Medio
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedRisk('alto')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedRisk === 'alto'
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        Riesgo Alto
                      </motion.button>
                    </div>

                    {/* Contenido según nivel de riesgo */}
                    <AnimatePresence mode="wait">
                      {selectedRisk === 'bajo' && (
                        <motion.div
                          key="bajo"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-green-500 rounded-xl">
                              <Briefcase className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-green-900 mb-2">Entornos de Bajo Riesgo</h3>
                              <p className="text-gray-600">Oficinas, Comercios, Servicios Profesionales</p>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Incidentes Más Comunes
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Cortes con papel</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Pequeños raspones</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Caídas menores</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Malestares generales</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-100 p-6 rounded-xl">
                            <h4 className="font-bold text-green-900 mb-4">✓ Contenido Recomendado</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Vendas adhesivas de varios tamaños</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Gasas pequeñas estériles</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Toallitas antisépticas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Material básico de curación</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>Producto ideal:</b> Botiquín Jaloma básico</span>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}

                      {selectedRisk === 'medio' && (
                        <motion.div
                          key="medio"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-yellow-500 rounded-xl">
                              <Building className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-yellow-900 mb-2">Entornos de Riesgo Medio</h3>
                              <p className="text-gray-600">Restaurantes, Talleres Mecánicos, Manufactura Ligera</p>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Riesgos Incrementados
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Cortes más profundos</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Quemaduras (calor/químicos)</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Lesiones oculares</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">Esguinces y torceduras</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-yellow-100 p-6 rounded-xl">
                            <h4 className="font-bold text-yellow-900 mb-4">✓ Contenido Reforzado</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>Apósitos de mayor tamaño</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>Más rollos de gasa estéril</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>Vendas elásticas para esguinces</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span><b className="text-red-600">Indispensable:</b> Insumos para quemaduras (geles/apósitos)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span><b className="text-blue-600">Indispensable:</b> Estaciones de lavado ocular</span>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}

                      {selectedRisk === 'alto' && (
                        <motion.div
                          key="alto"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-red-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-red-500 rounded-xl">
                              <Construction className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-red-900 mb-2">Entornos de Alto Riesgo</h3>
                              <p className="text-gray-600">Construcción, Industria Pesada, Minería, Seguridad Privada</p>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Emergencias de Trauma que Amenazan la Vida
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                <span className="text-gray-700 font-semibold">Hemorragias severas</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                <span className="text-gray-700 font-semibold">Fracturas expuestas</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                <span className="text-gray-700 font-semibold">Shock hipovolémico</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                <span className="text-gray-700 font-semibold">Trauma craneoencefálico</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-red-100 p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-red-900 mb-4">⚠️ Un Botiquín Estándar es INSUFICIENTE</h4>
                            <p className="text-red-800 mb-4 font-semibold">
                              Se debe estar preparado para emergencias que amenazan la vida. Además del botiquín general, 
                              es <b>altamente recomendable</b> contar con:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span><b className="text-red-700">Kit de Control de Hemorragias (IFAK)</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Torniquetes de combate</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Vendajes de compresión (tipo israelí)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Agentes hemostáticos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Mantas térmicas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Férulas de inmovilización</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-xl">
                            <p className="text-lg font-bold text-center">
                              🚨 Elementos que NO se encuentran en botiquines convencionales 🚨
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Top 6 Productos */}
                  <section id="productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Botiquines Destacados de 2025
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
                            a la información disponible en Mercado Libre al momento de la publicación (2 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - Jaloma */}
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
                            MEJOR OPCIÓN ECONÓMICA
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Jaloma Botiquín en Caja Plástica (22 pzas)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(300+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Oficinas Pequeñas, Hogar y Auto
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un kit básico y muy popular en México, ideal para tener una solución de primeros auxilios 
                          fundamental a un costo muy bajo. Su estuche de plástico lo hace portátil para emergencias 
                          menores en entornos de bajo riesgo.
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
                                <span>Extremadamente económico y accesible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Marca Jaloma reconocida y de confianza</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Estuche ligero y portátil con asa</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Contiene elementos esenciales básicos</span>
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
                                <span>Insuficiente para entornos industriales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Estuche de plástico menos duradero</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/17VWdsg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Gabinete Surtek */}
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
                            MEJOR BASE PARA KIT FIJO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Gabinete para Botiquín Surtek (Vacío)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(220+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Industrial, Oficinas y Talleres
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Gabinete metálico vacío para montar en la pared, fabricado en lámina calibre 24. Es la opción 
                          preferida por empresas que desean armar su propio botiquín personalizado según su análisis de 
                          riesgo, garantizando durabilidad y un punto de emergencia central y visible.
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
                                <span>Material muy resistente (lámina de acero)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Permite personalización total del contenido</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Fácil instalación en pared</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Excelente relación calidad-precio</span>
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
                                <span>Se vende vacío (costo adicional de insumos)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No es portátil (punto fijo)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/2wiufhR"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Botiquín Metálico de Pared */}
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
                            MEJOR PARA OFICINAS
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Botiquín Metálico de Pared Mediano (Equipado)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(69+ reseñas) - 4.9/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Oficinas y Comercios
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un gabinete metálico que ya viene equipado con material de curación básico. Representa una 
                          solución "todo en uno" para pequeñas y medianas empresas que buscan un botiquín de pared 
                          duradero sin la necesidad de comprar los insumos por separado.
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
                                <span>Solución lista para usar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Estuche metálico duradero</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Buena relación calidad-precio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Apariencia profesional</span>
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
                                <span>Contenido básico (puede requerir suplementos)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No es portátil</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/1dq6Lfe"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Matein 1233 */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-6 py-3">
                            ⭐ #4
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            MEJOR OPCIÓN PORTÁTIL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Botiquín Matein 1233 Multicompartimiento
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(284+ reseñas) - 4.9/5</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Brigadistas, Vehículos de Trabajo y Personal Móvil
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Una maleta de tela impermeable de gran capacidad, con múltiples compartimentos, divisores 
                          ajustables y correa para el hombro. Es una de las opciones mejor calificadas y más vendidas, 
                          ideal para profesionales de la salud, brigadas de emergencia o para tener un kit muy completo 
                          y organizado en un vehículo de trabajo.
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
                                <span>Excelente organización con divisores ajustables</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Material resistente e impermeable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Muy portátil con asa y correa</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Tiras reflejantes para alta visibilidad</span>
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
                                <span>Se vende vacío (costo adicional)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No protege contra aplastamiento fuerte</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/1GCdYb6"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Blekrasi Táctico */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl shadow-2xl border-2 border-red-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-red-500 text-white font-bold text-lg px-6 py-3">
                            🚨 #5
                          </Badge>
                          <Badge className="bg-red-100 text-red-800 px-4 py-2 font-bold">
                            MEJOR KIT DE TRAUMA
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Blekrasi Kit Táctico de Primeros Auxilios (IFAK)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(86+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, Seguridad Privada, Zonas Remotas - Alto Riesgo
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este es un kit tipo IFAK (Individual First Aid Kit) diseñado por veteranos militares para el 
                          <b className="text-red-600"> control de hemorragias y trauma</b>. Incluye elementos como torniquete 
                          de combate y vendajes de compresión. <span className="bg-red-100 px-2 py-1 rounded font-semibold">
                          No es un botiquín general, sino un complemento vital</span> para industrias de alto riesgo.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-xl mb-6">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-yellow-900 mb-2">⚠️ Importante: Requiere Capacitación</p>
                              <p className="text-gray-700 text-sm">
                                Los componentes de este kit, especialmente el torniquete, requieren capacitación específica 
                                para su uso correcto. No es para personal sin entrenamiento en control de hemorragias.
                              </p>
                            </div>
                          </div>
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
                                <span><b>Salva vidas</b> en caso de trauma severo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Incluye torniquete de combate</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Bolsa compacta con sistema MOLLE</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Componentes de alta calidad</span>
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
                                <span>NO reemplaza botiquín general</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Requiere capacitación específica</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/2D1XM9U"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Industrial Num.5 */}
                      <motion.div 
                        className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-3xl shadow-2xl border-2 border-gray-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-gray-600 text-white font-bold text-lg px-6 py-3">
                            🏭 #6
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-800 px-4 py-2 font-bold">
                            MEJOR PARA INDUSTRIA PESADA
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Botiquín Industrial Urgencias Medico Num.5
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(43+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl mb-6">
                          <p className="text-gray-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Industria Pesada, Talleres y Fábricas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un gabinete metálico de gran tamaño (aproximadamente 51x41x11 cm) y construcción robusta, 
                          diseñado específicamente para entornos industriales. Cuenta con múltiples divisiones internas, 
                          manija y sistema para colgar, ofreciendo una solución centralizada y de alta capacidad para 
                          fábricas y talleres de uso rudo.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-gray-300">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Gran capacidad de almacenamiento</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Construcción muy robusta (lámina cal. 25)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Múltiples divisiones internas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño versátil (portátil y montable)</span>
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
                                <span>Generalmente se vende vacío</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Tamaño y peso limitan portabilidad</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-6 rounded-xl border-2 border-gray-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-gray-700 mb-2">Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/2yRYKpK"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
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
                        📊 Comparación Detallada: Cara a Cara
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Cara a Cara: Top 3 Botiquines"
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
                        🛒 Guía de Compra Rápida
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* 3 Consejos Clave */}
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-200"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                          💡 3 Consejos Clave para Acertar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                1
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-900 mb-2">Primero Realiza tu Análisis de Riesgos</h4>
                                <p className="text-gray-700">
                                  Antes de comparar precios o modelos, elabora una lista de los peligros específicos de tu 
                                  lugar de trabajo (cortes, quemaduras, caídas, exposición a químicos, etc.). Tu botiquín 
                                  debe ser una respuesta directa a esa lista, como lo exigen las normativas de la STPS.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                2
                              </div>
                              <div>
                                <h4 className="font-bold text-green-900 mb-2">Piensa en un "Sistema", no en un Solo Botiquín</h4>
                                <p className="text-gray-700">
                                  Para la mayoría de las empresas, la solución más efectiva es un sistema combinado: un 
                                  <b className="text-green-700"> gabinete fijo y central</b> (como el de Surtek) en un área común, 
                                  y varios <b className="text-green-700">kits portátiles</b> (como el Matein equipado) para vehículos, 
                                  áreas remotas o personal móvil.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                3
                              </div>
                              <div>
                                <h4 className="font-bold text-purple-900 mb-2">La Calidad Importa más que la Cantidad</h4>
                                <p className="text-gray-700">
                                  No te dejes llevar por kits que anuncian "299 piezas". Es crucial revisar que el contenido 
                                  sea de calidad y verdaderamente útil para los riesgos identificados. Es más valioso tener 
                                  <b className="text-purple-700"> 10 gasas estériles de gran tamaño</b> que 100 pequeñas vendas 
                                  adhesivas si trabajas con maquinaria pesada.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-red-200"
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
                                <h4 className="font-bold text-red-900 mb-2">Comprar el más Barato para "Cumplir"</h4>
                                <p className="text-gray-700">
                                  Adquirir el kit más económico sin verificar que su contenido sea adecuado para los riesgos 
                                  reales de la empresa lo deja desprotegido legal y operativamente. Esta práctica puede resultar 
                                  en un incumplimiento de las NOMs más importantes.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                              <Eye className="h-8 w-8 text-orange-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-orange-900 mb-2">Guardarlo Bajo Llave o en Lugar Inaccesible</h4>
                                <p className="text-gray-700">
                                  El botiquín debe estar en un lugar <b className="text-orange-700">visible, claramente señalizado 
                                  y sin candados</b> o cualquier dispositivo que dificulte su acceso inmediato en una emergencia. 
                                  El tiempo es un factor crítico en la atención de primeros auxilios.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4">
                              <Users className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-yellow-900 mb-2">No Capacitar a Nadie en su Uso</h4>
                                <p className="text-gray-700">
                                  Contar con el mejor botiquín no sirve de nada si el personal no sabe cómo utilizar correctamente 
                                  un vendaje de compresión, una férula o incluso cómo limpiar una herida adecuadamente. La 
                                  <b className="text-yellow-700"> capacitación de una brigada de primeros auxilios</b> es un 
                                  componente fundamental de cualquier programa de seguridad.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Activity className="h-8 w-8 text-purple-600" />
                          <h3 className="text-2xl font-bold text-purple-900">🔧 Mantenimiento es Clave</h3>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Un botiquín de primeros auxilios es un <b className="text-purple-700">recurso dinámico</b>, 
                            no un objeto estático. Es crucial designar a una persona o comité responsable de su revisión periódica.
                          </p>
                          
                          <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <h4 className="font-bold text-purple-900 mb-2 text-center">📅 Mensual</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Inspección visual</li>
                                <li>• Verificar faltantes</li>
                                <li>• Revisar estado general</li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <h4 className="font-bold text-purple-900 mb-2 text-center">🗓️ Trimestral</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Inventario detallado</li>
                                <li>• Verificar caducidades</li>
                                <li>• Reponer utilizados</li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <h4 className="font-bold text-purple-900 mb-2 text-center">📍 Ubicación</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Lugar fresco y seco</li>
                                <li>• Limpio y protegido</li>
                                <li>• Señalizado claramente</li>
                              </ul>
                            </div>
                          </div>
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
                            className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all flex items-center justify-between gap-4"
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
                        🎯 Conclusión: Tu Mejor Inversión en Seguridad
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-8 rounded-r-2xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Heart className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            Elegir un botiquín de emergencia va más allá de comprar una caja con vendas; es una 
                            <b className="text-green-700"> decisión estratégica que protege su activo más valioso: su gente</b>.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Como se ha visto, la clave no está en encontrar un kit "certificado", sino en entender los 
                            riesgos únicos de su entorno y equiparse para enfrentarlos.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Opción General</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Botiquín Matein 1233</b> - Versatilidad y organización impecable, puede equiparse 
                            a medida de necesidades específicas.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Construction className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor para Uso Rudo</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Gabinete Metálico Surtek</b> + <b>Kit Táctico Blekrasi</b> - Sistema combinado 
                            para entornos industriales de alto riesgo.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Briefcase className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Económico</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Jaloma Básico</b> - Solución accesible y confiable para oficinas pequeñas 
                            y entornos de bajo riesgo.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-2xl border-2 border-red-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        💡 Invertir en la preparación correcta hoy
                      </p>
                      <p className="text-lg text-red-800 font-semibold">
                        es la mejor forma de garantizar la seguridad de todos mañana.
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