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
  Layers,
  Weight,
  Ruler,
  Eye,
  Info,
  TrendingUp,
  Package,
  ChevronDown,
  Wrench,
  Construction,
  HardHat
} from 'lucide-react';
import { useState } from 'react';

export default function EscalerasIndustrialesArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<'fibra' | 'aluminio'>('fibra');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'cuprum-c3217',
      name: 'Cuprum C-3217-06',
      rating: 4.9,
      reviewCount: 72,
      isRecommended: true,
      bestFor: 'Electricistas y Mantenimiento',
      amazonLink: 'https://listado.mercadolibre.com.mx/escalera-cuprum-c-3217-06'
    },
    {
      id: 'truper-101906',
      name: 'Truper 101906',
      rating: 4.7,
      reviewCount: 344,
      isRecommended: true,
      bestFor: 'Múltiples Trabajos',
      amazonLink: 'https://listado.mercadolibre.com.mx/escalera-truper-101906'
    },
    {
      id: 'cuprum-494-24n',
      name: 'Cuprum 494-24N',
      rating: 5.0,
      reviewCount: 18,
      isRecommended: false,
      bestFor: 'Gran Altura',
      amazonLink: 'https://listado.mercadolibre.com.mx/escalera-cuprum-494-24n'
    }
  ];

  const comparisonFeatures = [
    { name: 'Material Principal', product1: 'Fibra de Vidrio', product2: 'Aluminio', product3: 'Aluminio' },
    { name: 'Tipo de Escalera', product1: 'Tijera', product2: 'Multipropósito', product3: 'Extensión' },
    { name: 'Capacidad de Carga', product1: 'Tipo IA (136 kg)', product2: 'Tipo I (150 kg)', product3: 'Tipo II (102 kg)' },
    { name: 'Altura Máxima Alcance', product1: '~3.8 metros', product2: '~5.0 metros', product3: '~7.3 metros' },
    { name: 'Apta Trabajos Eléctricos', product1: true, product2: false, product3: false },
    { name: 'Zapatas Antiderrapantes', product1: true, product2: true, product3: true },
    { name: 'Tapa con Ranuras', product1: true, product2: false, product3: false },
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
      question: '¿Qué es mejor, una escalera de aluminio o de fibra de vidrio?',
      answer: 'La elección depende exclusivamente del tipo de trabajo. Para cualquier tarea que involucre electricidad o la posibilidad de contacto con fuentes de energía, la fibra de vidrio es la única opción segura, ya que no conduce la electricidad. Para trabajos generales como pintura, carpintería o mantenimiento sin riesgo eléctrico, el aluminio es una excelente opción por ser más ligero y económico. La decisión no debe basarse en la preferencia, sino en la seguridad.'
    },
    {
      question: '¿Qué significa que una escalera sea "Tipo IA"?',
      answer: 'Es una clasificación de servicio (Duty Rating) del Instituto Nacional Estadounidense de Estándares (ANSI) que indica la robustez y capacidad de la escalera. "Tipo IA" significa "Servicio Extra Pesado" y está diseñada para soportar una carga total de 300 libras (aproximadamente 136 kg). Es una clasificación ideal para uso profesional e industrial rudo, ofreciendo mayor durabilidad y resistencia que las de Tipo I (113 kg) o Tipo II (102 kg).'
    },
    {
      question: '¿Cómo debo inspeccionar mi escalera antes de usarla?',
      answer: 'Antes de cada uso, se debe realizar una inspección visual completa. Revisar que las zapatas antiderrapantes no estén rotas, endurecidas o excesivamente gastadas. Asegurarse de que todos los peldaños estén firmes, sin grietas ni abolladuras significativas. En escaleras de tijera, verificar que los tirantes de seguridad se bloqueen firmemente. En las de extensión, comprobar que los seguros de los peldaños enganchen correctamente y que la cuerda no esté deshilachada. Finalmente, es vital que todas las etiquetas de seguridad e instrucciones del fabricante sean legibles. Si se encuentra cualquier defecto, la escalera no debe usarse y debe marcarse claramente como "dañada".'
    },
    {
      question: '¿Cuál es la forma correcta de subir y bajar de una escalera?',
      answer: 'La regla de oro es mantener siempre tres puntos de contacto: dos pies y una mano, o dos manos y un pie. Siempre se debe estar de frente a la escalera al subir o bajar. Nunca se deben subir herramientas o materiales con las manos; para ello se debe utilizar un cinturón de herramientas o una cuerda para subirlos una vez que se esté en posición. Es fundamental asegurarse de que las suelas del calzado estén limpias y libres de lodo, grasa o cualquier sustancia que pueda causar un resbalón.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema industrial/construcción */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${30 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Herramientas flotantes (25 iconos) */}
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
                {i % 3 === 0 ? <Construction className="w-6 h-6" /> : 
                 i % 3 === 1 ? <HardHat className="w-6 h-6" /> : 
                 <Wrench className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de trabajo (40 ondas) */}
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
                <Construction className="h-4 w-4" />
                🪜 Equipo Industrial
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Escaleras Industriales: Guía de Compra y Mejores Modelos 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva de características, seguridad y los 5 productos más destacados en México
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
            {/* Partículas de fondo industriales */}
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${35 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-red-900 mb-3">⚠️ Las Caídas: El Enemigo Silencioso</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            En México, <strong className="text-red-600">las caídas representan el 27% de todos los accidentes de trabajo</strong>, 
                            y un error tan simple como usar una escalera mal instalada o inadecuada es una de las causas principales en sectores 
                            como la construcción. Una herramienta que parece tan básica es, en realidad, 
                            <b className="bg-red-100 px-2 py-1 rounded"> una pieza crítica de seguridad personal</b>.
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
                      Elegir la escalera industrial correcta <b>no es una simple compra de ferretería</b>; es una 
                      <b className="text-orange-600"> decisión fundamental que protege la integridad física</b>, la eficiencia 
                      y la continuidad del negocio.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Tu Guía Definitiva para 2025</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía definitiva te ayudará a <b>invertir en la herramienta adecuada</b>, garantizando que cada 
                        ascenso sea seguro. Desde el análisis de materiales hasta los modelos mejor calificados del mercado mexicano, 
                        cubrimos todo lo que necesitas saber para tomar la <b className="text-blue-700">decisión más inteligente</b>.
                      </p>
                    </motion.div>
                  </section>

                  {/* Material de Fabricación */}
                  <section id="material-fabricacion" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🔬 Material de Fabricación: La Decisión de Seguridad Primordial
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La elección del material es <b className="text-orange-600">el factor más determinante para la seguridad del usuario</b>, 
                      especialmente en entornos con riesgos eléctricos.
                    </motion.p>

                    {/* Selector de Material */}
                    <div className="flex justify-center gap-4 mb-10">
                      <motion.button
                        onClick={() => setSelectedMaterial('fibra')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'fibra'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Fibra de Vidrio
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedMaterial('aluminio')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'aluminio'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Aluminio
                      </motion.button>
                    </div>

                    {/* Contenido según material seleccionado */}
                    <AnimatePresence mode="wait">
                      {selectedMaterial === 'fibra' && (
                        <motion.div
                          key="fibra"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-300"
                        >
                          <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Fibra de Vidrio: El Estándar de Oro para la Seguridad Eléctrica
                          </h4>
                          
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            La fibra de vidrio es un material compuesto que <b className="text-green-700">no conduce la electricidad</b>, 
                            lo que la convierte en la única opción segura para electricistas, técnicos de telecomunicaciones y cualquier 
                            profesional que trabaje cerca de instalaciones, cableado o fuentes de energía potenciales.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl">
                              <h5 className="font-bold text-green-800 mb-3">✅ Ventajas</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span><b>No conduce electricidad:</b> Seguridad total en trabajos eléctricos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Resistencia estructural superior:</b> Mayor durabilidad frente a impactos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Alta tolerancia:</b> Resistente a humedad y agentes químicos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Vida útil prolongada:</b> En condiciones industriales adversas</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                              <h5 className="font-bold text-red-800 mb-3">❌ Desventajas</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <Weight className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Mayor peso:</b> Más pesada que el aluminio</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Costo más elevado:</b> Inversión justificada por seguridad</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-green-100 p-4 rounded-lg">
                            <p className="text-green-900 font-semibold text-center">
                              🎯 <b>Ideal para:</b> Electricistas, técnicos de telecomunicaciones, trabajos cerca de instalaciones eléctricas
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedMaterial === 'aluminio' && (
                        <motion.div
                          key="aluminio"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300"
                        >
                          <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Layers className="h-6 w-6" />
                            Aluminio: Ligereza y Versatilidad para Tareas Generales
                          </h4>
                          
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            El aluminio destaca por su <b className="text-blue-700">ligereza</b>, lo que facilita enormemente su transporte 
                            y manipulación en el lugar de trabajo. Es naturalmente resistente a la corrosión y su costo generalmente más bajo 
                            lo convierte en una opción popular para tareas de mantenimiento general.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl">
                              <h5 className="font-bold text-blue-800 mb-3">✅ Ventajas</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Extremadamente ligero:</b> Fácil transporte y manipulación</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Resistente a la corrosión:</b> Ideal para trabajos en exteriores</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Costo más bajo:</b> Opción económica para uso general</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Durabilidad:</b> Excelente para tareas de construcción y logística</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                              <h5 className="font-bold text-red-800 mb-3">❌ Desventaja Crítica</h5>
                              <div className="bg-red-100 p-4 rounded-lg">
                                <p className="text-red-900 font-bold text-center mb-2">
                                  ⚡ ALTA CONDUCTIVIDAD ELÉCTRICA ⚡
                                </p>
                                <p className="text-sm text-red-800">
                                  El uso de una escalera de aluminio cerca de <b>cualquier fuente de energía</b>, incluso si se cree que 
                                  está aislada, representa un <b className="bg-red-200 px-2 py-1 rounded">riesgo mortal de electrocución</b> 
                                  y está estrictamente desaconsejado.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                            <p className="text-blue-900 font-semibold text-center">
                              🎯 <b>Ideal para:</b> Pintura, construcción, mantenimiento general, logística (SIN riesgo eléctrico)
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Tipología de Escaleras */}
                  <section id="tipologia-escaleras" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🪜 Tipología de Escaleras: Adaptando la Herramienta a la Tarea
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Utilizar un tipo de escalera inadecuado para la tarea es una <b className="text-red-600">causa frecuente de accidentes laborales</b>. 
                      Cada diseño responde a necesidades específicas de estabilidad, altura y configuración.
                    </motion.p>

                    <div className="space-y-8">
                      {/* Escaleras de Tijera */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-green-500 rounded-xl p-3 flex-shrink-0">
                            <span className="text-white text-2xl">🔺</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-green-900 mb-2">Escaleras de Tijera (Autosoportables)</h3>
                            <p className="text-gray-600 text-sm">Diseño en forma de "A" - No requieren superficie vertical de apoyo</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Estas escaleras, con su diseño en forma de "A", no requieren una superficie vertical de apoyo, lo que las hace 
                          <b className="text-green-700"> ideales para trabajos en el centro de una habitación o en áreas abiertas</b>. 
                          Son comunes en almacenes, mantenimiento eléctrico y construcción general.
                        </p>

                        <div className="bg-white p-6 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">🔧 Elementos de Seguridad Clave:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Tirantes o esparcidores:</b> Deben estar completamente extendidos y bloqueados durante el uso</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Tapa superior:</b> A menudo incorpora ranuras para herramientas, mejorando la eficiencia</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Base ancha:</b> Proporciona estabilidad sin necesidad de apoyo</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>

                      {/* Escaleras de Extensión */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-blue-500 rounded-xl p-3 flex-shrink-0">
                            <span className="text-white text-2xl">📏</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">Escaleras de Extensión</h3>
                            <p className="text-gray-600 text-sm">Dos o más secciones deslizantes - Para grandes alturas</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Compuestas por dos o más secciones que se deslizan para alcanzar alturas considerables, estas escaleras 
                          <b className="text-blue-700"> deben apoyarse firmemente contra una estructura estable</b> como una pared o un poste. 
                          Son indispensables para acceder a tejados, fachadas o postes de servicios públicos.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 p-6 rounded-xl">
                          <h4 className="font-bold text-yellow-900 mb-3">⚠️ Reglas de Seguridad Fundamentales:</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg">
                              <p className="font-bold text-yellow-800 mb-2">📐 Regla del Ángulo "4 a 1":</p>
                              <p className="text-sm text-gray-700">
                                La base de la escalera debe estar separada de la pared <b>1 metro por cada 4 metros de altura vertical</b>
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="font-bold text-yellow-800 mb-2">📏 Regla de Extensión de 3 Pies:</p>
                              <p className="text-sm text-gray-700">
                                La escalera debe sobrepasar el punto de aterrizaje en <b>aproximadamente 1 metro</b> para permitir una transición segura
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Escaleras Multipropósito */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-purple-500 rounded-xl p-3 flex-shrink-0">
                            <span className="text-white text-2xl">🔄</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-2">Escaleras Multipropósito o Articuladas</h3>
                            <p className="text-gray-600 text-sm">La solución más versátil del mercado</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Estos modelos son la <b className="text-purple-700">solución más versátil del mercado</b>, gracias a sus bisagras 
                          con sistema de bloqueo que permiten múltiples configuraciones: escalera de tijera, de extensión, para escalinatas 
                          e incluso como base para andamios.
                        </p>

                        <div className="bg-white p-6 rounded-xl">
                          <h4 className="font-bold text-purple-800 mb-3">🎯 Configuraciones Posibles:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-purple-900">✓ Escalera de Tijera</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-purple-900">✓ Escalera de Extensión</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-purple-900">✓ Para Escalinatas</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-purple-900">✓ Base para Andamios</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 bg-purple-100 p-4 rounded-lg">
                          <p className="text-purple-900 text-center font-semibold">
                            💡 Popular entre contratistas y profesionales que requieren una herramienta adaptable para diversos trabajos
                          </p>
                        </div>
                      </motion.div>

                      {/* Escaleras con Plataforma */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-orange-500 rounded-xl p-3 flex-shrink-0">
                            <span className="text-white text-2xl">🛡️</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-orange-900 mb-2">Escaleras con Plataforma</h3>
                            <p className="text-gray-600 text-sm">Máxima estabilidad y seguridad para tareas prolongadas</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Son una evolución de la escalera de tijera que incorpora una <b className="text-orange-700">plataforma de trabajo 
                          amplia y estable</b> en la parte superior, rodeada por un barandal de seguridad. Este diseño permite al usuario 
                          trabajar cómodamente con ambas manos libres y moverse en 360 grados.
                        </p>

                        <div className="bg-white p-6 rounded-xl">
                          <h4 className="font-bold text-orange-800 mb-3">🎯 Perfectas para:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Gestión de inventarios en almacenes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Mantenimiento de maquinaria compleja</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Instalaciones que requieren ambas manos libres</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>Tareas de larga duración en altura</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Capacidad de Carga */}
                  <section id="capacidad-carga" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        ⚖️ Capacidad de Carga y Tipo de Servicio: Entendiendo los Estándares
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La clasificación de servicio, comúnmente indicada como <b>"Tipo"</b>, es un estándar del 
                      <b className="text-blue-600"> Instituto Nacional Estadounidense de Estándares (ANSI)</b> que define la capacidad 
                      de carga máxima de una escalera.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-300 mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                        📋 Desglose de Tipos de Servicio (Norma ANSI)
                      </h3>

                      <div className="space-y-4">
                        {/* Tipo III */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-gray-400">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-800">Tipo III - Servicio Ligero</h4>
                            <Badge className="bg-gray-500 text-white">200 lbs / 90 kg</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            <b>Uso:</b> Doméstico
                          </p>
                        </div>

                        {/* Tipo II */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-400">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-yellow-800">Tipo II - Servicio Medio</h4>
                            <Badge className="bg-yellow-500 text-white">225 lbs / 102 kg</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            <b>Uso:</b> Comercial ligero (pintura, mantenimiento básico)
                          </p>
                        </div>

                        {/* Tipo I */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-blue-800">Tipo I - Servicio Pesado</h4>
                            <Badge className="bg-blue-500 text-white">250 lbs / 113 kg</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            <b>Uso:</b> Estándar mínimo recomendado para entornos industriales y construcción
                          </p>
                        </div>

                        {/* Tipo IA */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-green-400">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-green-800">Tipo IA - Servicio Extra Pesado</h4>
                            <Badge className="bg-green-500 text-white">300 lbs / 136 kg</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            <b>Uso:</b> Profesional intensivo y condiciones de trabajo exigentes
                          </p>
                        </div>

                        {/* Tipo IAA */}
                        <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-purple-800">Tipo IAA - Servicio Especial</h4>
                            <Badge className="bg-purple-500 text-white">375 lbs / 170 kg</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            <b>Uso:</b> La clasificación más alta, para trabajos más rudos y demandantes
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Advertencia importante */}
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-8 rounded-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-10 w-10 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Importante: Discrepancias en el Mercado Mexicano</h4>
                          <p className="text-gray-800 leading-relaxed mb-4">
                            Se observan <b className="text-yellow-700">discrepancias en la conversión de libras a kilogramos</b> en las 
                            descripciones de los productos. Algunas fichas técnicas asignan capacidades en kg muy superiores a las que 
                            corresponden al estándar ANSI para un "Tipo" determinado.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="text-yellow-900 font-semibold text-center">
                              🎯 <b>La especificación más importante a verificar es la capacidad de carga explícita en kilogramos</b> 
                              que declara el fabricante, ya que este es el dato que garantiza la seguridad bajo las condiciones de uso locales.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Características de Seguridad */}
                  <section id="caracteristicas-seguridad" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        🛡️ Características de Seguridad Indispensables
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Más allá de las especificaciones principales, ciertos componentes de diseño 
                      <b className="text-red-600"> mejoran drásticamente la seguridad y funcionalidad</b> de una escalera industrial.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Zapatas Antiderrapantes */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-green-500 rounded-lg p-3">
                            <span className="text-white text-2xl">👟</span>
                          </div>
                          <h3 className="text-xl font-bold text-green-900">Zapatas Antiderrapantes</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Son el <b className="text-green-700">punto de contacto crítico con el suelo</b>. Deben ser de caucho u otro 
                          material de alta fricción, estar en buen estado y limpias de aceite, lodo o desgaste excesivo. Modelos avanzados 
                          cuentan con zapatas giratorias que se adaptan a diferentes superficies.
                        </p>
                      </motion.div>

                      {/* Tirantes Antipellizcos */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-500 rounded-lg p-3">
                            <span className="text-white text-2xl">🔒</span>
                          </div>
                          <h3 className="text-xl font-bold text-blue-900">Tirantes Antipellizcos</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          En las escaleras de tijera, estos brazos metálicos bloquean la apertura. Los diseños modernos están pensados para 
                          <b className="text-blue-700"> evitar que las manos del operario queden atrapadas</b> al abrir o cerrar la escalera, 
                          un detalle crucial de seguridad.
                        </p>
                      </motion.div>

                      {/* Tapa Multifuncional */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-500 rounded-lg p-3">
                            <span className="text-white text-2xl">🧰</span>
                          </div>
                          <h3 className="text-xl font-bold text-purple-900">Tapa Multifuncional</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          La cubierta superior de muchas escaleras de tijera está diseñada con <b className="text-purple-700">ranuras, 
                          orificios y bandejas</b> para sostener herramientas, botes de pintura y otros materiales, lo que minimiza la 
                          necesidad de subir y bajar o de llevar objetos en las manos.
                        </p>
                      </motion.div>

                      {/* Peldaños Antideslizantes */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-500 rounded-lg p-3">
                            <span className="text-white text-2xl">👣</span>
                          </div>
                          <h3 className="text-xl font-bold text-orange-900">Peldaños Antideslizantes</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Los peldaños deben tener una <b className="text-orange-700">superficie estriada, ranurada o texturizada</b> para 
                          proporcionar un apoyo seguro, especialmente en condiciones de humedad. Los peldaños en forma de "D" en las escaleras 
                          de extensión ofrecen una superficie de pisada más cómoda y estable.
                        </p>
                      </motion.div>

                      {/* Etiquetas de Seguridad */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-300 md:col-span-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-yellow-500 rounded-lg p-3 flex-shrink-0">
                            <span className="text-white text-2xl">🏷️</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-yellow-900 mb-3">Etiquetas de Seguridad Legibles</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              <b className="bg-yellow-200 px-2 py-1 rounded">Una escalera sin sus etiquetas originales de fábrica se considera insegura</b>. Estas etiquetas contienen información vital sobre la capacidad de carga, el ángulo correcto de instalación y advertencias de uso que no deben ser ignoradas ni cubiertas con pintura.
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-yellow-900 font-semibold">
                                ⚠️ Si las etiquetas están dañadas o ilegibles, contacta al fabricante para obtener reemplazos antes de usar la escalera.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 5 Productos */}
                  <section id="productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 5 Escaleras Destacadas del Mercado Mexicano 2025
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
                      {/* Producto #1 - Cuprum C-3217-06 */}
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
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MEJOR PARA ELECTRICISTAS
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Cuprum C-3217-06 - Escalera de Tijera de Fibra de Vidrio
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(72+ reseñas) - 4.9/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Electricistas, Técnicos de Telecomunicaciones, Mantenimiento Industrial
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un <b className="text-green-700">estándar de la industria en México</b>, esta escalera Cuprum de fibra de vidrio 
                          es la elección predilecta para electricistas y personal de mantenimiento por su construcción dieléctrica. Su tapa 
                          profesional con ranuras para herramientas y tirantes antipellizcos la hacen segura y funcional para el uso rudo diario.
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
                                <span><b>Construcción dieléctrica:</b> Fibra de vidrio no conductora para máxima seguridad eléctrica</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Tapa profesional Holster Top®:</b> Diseñada para sostener herramientas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Seguridad total:</b> Zapatas antiderrapantes y peldaños estriados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca confiable:</b> Excelente reputación y altas calificaciones de usuarios</span>
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
                                <span><b>Mayor peso:</b> Más pesada que su contraparte de aluminio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio premium:</b> Superior al de modelos de aluminio de similar tamaño</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/escalera-cuprum-c-3217-06"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Truper 101906 */}
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
                            LA MÁS VERSÁTIL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Truper 101906 - Escalera Multipropósito Plegable 16 Escalones
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(344+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Contratistas Generales, Talleres, Múltiples Trabajos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          La escalera multiposiciones de Truper es una de las más vendidas por su <b className="text-blue-700">increíble 
                          versatilidad</b>. Con 16 peldaños y múltiples configuraciones (andamio, tijera, recta), se adapta a casi cualquier 
                          tarea. Fabricada en aluminio resistente, es una solución todo-en-uno para contratistas generales y talleres que 
                          enfrentan diversos desafíos de altura.
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-6 border-2 border-purple-300">
                          <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Configuraciones Múltiples
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-purple-900">✓ Modo Andamio</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-purple-900">✓ Modo Tijera</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-purple-900">✓ Modo Recta</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-purple-900">✓ Modo Escalinata</p>
                            </div>
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
                                <span><b>Extremadamente versátil:</b> Múltiples posiciones de uso</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño plegable:</b> Compacto para almacenamiento y transporte</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Buena capacidad:</b> Hasta 150 kg según listados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Muy popular:</b> Gran número de reseñas positivas</span>
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
                                <span><b>Curva de aprendizaje:</b> Las bisagras pueden ser complejas de operar al principio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>No apta para electricidad:</b> Material de aluminio conduce electricidad</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/escalera-truper-101906"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Cuprum 494-24N */}
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
                            USO RUDO - GRAN ALTURA
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Cuprum 494-24N - Escalera de Extensión de Aluminio 24 Peldaños
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(18+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, Telecomunicaciones, Mantenimiento de Fachadas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Cuando se necesita alcanzar alturas considerables, esta escalera de extensión Cuprum es una opción 
                          <b className="text-purple-700"> robusta y confiable</b>. Con 24 peldaños y una altura máxima de trabajo de más 
                          de 7 metros, es ideal para construcción, instalación de telecomunicaciones y mantenimiento de fachadas. Sus 
                          peldaños en forma de "D" ofrecen una pisada más cómoda y segura durante ascensos prolongados.
                        </p>

                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6 border-2 border-orange-300">
                          <h4 className="font-bold text-orange-800 mb-3 text-lg flex items-center gap-2">
                            <Ruler className="h-6 w-6" />
                            Sistema de Extensión Profesional
                          </h4>
                          <p className="text-gray-700">
                            Equipada con <b className="text-orange-700">sistema de polea y cuerda</b> que facilita la extensión de la 
                            escalera. Las zapatas giratorias con superficie antiderrapante se adaptan perfectamente al terreno para 
                            máxima estabilidad.
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
                                <span><b>Gran alcance:</b> Más de 7 metros de altura para trabajos exigentes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sistema de polea:</b> Facilita la extensión de la escalera</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Zapatas giratorias:</b> Adaptación perfecta al terreno</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca líder:</b> Reconocida por su alta durabilidad</span>
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
                                <span><b>Requiere apoyo sólido:</b> Necesita superficie estable para uso seguro</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Voluminosa y pesada:</b> Puede requerir dos personas para manejo</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/escalera-cuprum-494-24n"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Werner con Plataforma */}
                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl shadow-2xl border-2 border-orange-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-orange-500 text-white font-bold text-lg px-6 py-3">
                            🏆 #4
                          </Badge>
                          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 font-bold">
                            MEJOR PARA ALMACENES
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Werner - Escalera de Fibra de Vidrio con Plataforma (Uso Pesado)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Reputación de marca) - 5.0/5</span>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl mb-6">
                          <p className="text-orange-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Almacenes, Picking, Mantenimiento de Maquinaria, Tareas Prolongadas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Esta escalera Werner está diseñada para la <b className="text-orange-700">máxima seguridad y comodidad en trabajos 
                          que requieren permanecer en altura</b>. Su amplia plataforma, barandales de seguridad y construcción de fibra de 
                          vidrio Tipo IAA (170 kg) la hacen perfecta para tareas de picking en almacenes, mantenimiento de maquinaria o 
                          cualquier labor donde el operario necesite usar ambas manos con total estabilidad.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Características de Seguridad Premium
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-green-900">✓ Plataforma Amplia</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-green-900">✓ Barandales de Protección</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-green-900">✓ Base Extra Ancha</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-green-900">✓ Soportes Reforzados</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-orange-200">
                            <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Máxima estabilidad:</b> Plataforma y barandales de protección</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Capacidad superior:</b> Tipo IAA (170 kg / 375 lbs)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Material dieléctrico:</b> Seguridad en trabajos eléctricos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción robusta:</b> Uso rudo industrial</span>
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
                                <span><b>Precio premium:</b> Significativamente más alto que otros tipos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Menos portátil:</b> Más difícil de almacenar debido a su tamaño</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl border-2 border-orange-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-921501835-escalera-de-fibra-de-vidrio-de-uso-pesado-183cm-werner-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Convertible Económica */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-6 py-3">
                            💰 #5
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            OPCIÓN ECONÓMICA VERSÁTIL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Escalera Convertible Tipo Tijera/Extensión (Popular en Mercado Libre)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.5) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(84+ reseñas) - 4.5/5</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Pintores, Instaladores, Personal de Mantenimiento con Presupuesto Ajustado
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este modelo, muy popular en Mercado Libre, ofrece la <b className="text-teal-700">funcionalidad de una escalera de 
                          tijera y de extensión en un solo paquete</b> a un precio muy competitivo. Fabricada en aluminio, es una opción práctica 
                          para pintores, instaladores y personal de mantenimiento con necesidades variadas y un presupuesto ajustado. Aunque no 
                          tiene la robustez de marcas premium, su popularidad y reseñas indican una buena relación calidad-precio para trabajos 
                          no intensivos.
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
                                <span><b>Funcionalidad 2-en-1:</b> Tijera y extensión en un solo equipo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio muy accesible:</b> Comparado con modelos de marca</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ligera y portátil:</b> Fácil de transportar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Altamente vendida:</b> Amplia aceptación en el mercado</span>
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
                                <span><b>Menor durabilidad:</b> Componentes no tan robustos como marcas premium</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>No apta para uso industrial pesado</b> ni trabajos con riesgo eléctrico</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/escalera-convertible-tipo-tijera-extencion"
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
                        📊 Comparación Detallada: Top 3 Cara a Cara
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Comparativo: Las 3 Mejores Escaleras"
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
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-red-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-red-900 mb-3">Priorizar la Seguridad Eléctrica</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Elegir <b className="text-red-600">SIEMPRE fibra de vidrio</b> si existe la más mínima posibilidad de trabajar 
                              cerca de cables o instalaciones eléctricas.
                            </p>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <p className="text-red-800 font-semibold">
                                ⚡ El ahorro en una escalera de aluminio NO justifica el riesgo mortal de electrocución.
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
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">Calcular la Altura de Alcance Real</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              La altura de la escalera <b className="text-blue-600">NO es la altura a la que se puede trabajar</b>.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="font-bold text-blue-800 mb-2">📐 Escaleras de Tijera:</p>
                                <p className="text-sm text-gray-700">
                                  El alcance máximo es aproximadamente <b>1.2 metros por encima</b> de la altura de la escalera
                                </p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="font-bold text-blue-800 mb-2">📏 Escaleras de Extensión:</p>
                                <p className="text-sm text-gray-700">
                                  Debe extenderse aproximadamente <b>1 metro por encima</b> del punto de apoyo
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                              <p className="text-yellow-900 font-semibold">
                                ⚠️ NUNCA trabajar en los últimos peldaños
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
                            <h3 className="text-2xl font-bold text-green-900 mb-3">Verificar la Capacidad de Carga Total</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              La capacidad de carga (en kg) debe soportar el peso del usuario <b className="text-green-600">MÁS el peso de 
                              todas las herramientas y materiales</b> que se utilizarán.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-green-900 font-semibold text-center">
                                🎯 Para uso industrial, busca como mínimo una clasificación <b>Tipo I (113 kg) o superior</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                          ❌ 3 Errores Comunes a Evitar
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                            <h4 className="font-bold text-red-900 mb-2">1. Usar Aluminio Cerca de Electricidad</h4>
                            <p className="text-gray-700">
                              Es el error más peligroso. El aluminio es un excelente conductor. <b className="text-red-600">Incluso si una línea 
                              eléctrica parece aislada</b> o está a cierta distancia, no se debe correr el riesgo.
                            </p>
                          </div>
                          
                          <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-900 mb-2">2. Pararse en el Último Peldaño o en la Tapa Superior</h4>
                            <p className="text-gray-700">
                              La mayoría de las escaleras <b className="text-orange-600">prohíben explícitamente pararse en los dos peldaños superiores</b>. 
                              Hacerlo desplaza peligrosamente el centro de gravedad y es una causa principal de volcaduras y caídas graves.
                            </p>
                          </div>
                          
                          <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
                            <h4 className="font-bold text-yellow-900 mb-2">3. Extender el Cuerpo Fuera de los Rieles ("Regla de la Hebilla")</h4>
                            <p className="text-gray-700">
                              Se debe mantener la <b className="text-yellow-600">hebilla del cinturón (el centro del cuerpo) entre los dos rieles laterales</b> 
                              de la escalera en todo momento. Si es necesario estirarse demasiado para alcanzar algo, lo correcto es bajar y mover la escalera.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento Esencial */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Wrench className="h-8 w-8 text-purple-600" />
                          <h3 className="text-2xl font-bold text-purple-900">🔧 Mantenimiento Esencial</h3>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Una escalera industrial es una <b className="text-purple-700">inversión en seguridad que requiere cuidado constante</b>. 
                            La inspección visual antes de cada uso es obligatoria.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <h4 className="font-bold text-purple-900 mb-2">🔍 Inspeccionar:</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Peldaños agrietados o sueltos</li>
                                <li>• Zapatas antiderrapantes desgastadas</li>
                                <li>• Cuerdas deshilachadas (extensión)</li>
                                <li>• Funcionamiento de seguros y bisagras</li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <h4 className="font-bold text-purple-900 mb-2">🧹 Mantener:</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Limpia de grasa y lodo</li>
                                <li>• Almacenada en lugar seco</li>
                                <li>• Protegida del clima</li>
                                <li>• Colgada horizontalmente</li>
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
                        🎯 Conclusión: Invierte en Seguridad
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
                            Invertir en la escalera industrial correcta es <strong className="text-green-700">invertir en seguridad y productividad</strong>. 
                            La elección depende de una evaluación honesta de las necesidades: desde el material dictado por los riesgos eléctricos hasta 
                            el tipo y la capacidad de carga que el trabajo diario exige.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            No existe una "mejor escalera" universal, pero sí existe la <b className="bg-green-100 px-2 py-1 rounded">mejor escalera para 
                            cada tarea específica</b>.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <Zap className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor para Electricistas</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Cuprum C-3217-06</b> (Fibra de Vidrio) - Opción segura y robusta para trabajos eléctricos
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Package className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Versátil</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Truper 101906</b> (Multipropósito) - Solución todo-en-uno de gran valor para múltiples oficios
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Ruler className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Gran Altura</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Cuprum 494-24N</b> (Extensión) - Para construcción y trabajos que demandan alcance superior
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
                        <Construction className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">Analiza, Respeta y Elige Bien</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                Es imperativo <b>analizar el entorno, respetar las normas de seguridad y elegir una herramienta</b> que brinde 
                        respaldo en cada peldaño. Recuerda que las caídas representan el 27% de los accidentes laborales en México, 
                        y una escalera adecuada puede ser la diferencia entre la seguridad y un accidente grave.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🪜 La seguridad en altura no es negociable 🪜
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál de estas escaleras será tu compañera de altura? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        🎯 Equípate bien, trabaja seguro, regresa a casa 🎯
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