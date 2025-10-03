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
  Shirt,
  Hammer,
  Zap,
  Flame,
  Droplets,
  Eye,
  Users,
  Info,
  TrendingUp,
  Package,
  FileText,
  ThermometerSun,
  Wind,
  ChevronDown,
  Construction,
  Wrench,
  HardHat
} from 'lucide-react';
import { useState } from 'react';

export default function OverolesTrabajoArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<'algodon' | 'mezcla' | 'especializado'>('mezcla');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'redkap-ct10',
      name: 'Red Kap CT10 Twill Action Back',
      rating: 4.6,
      reviewCount: 850,
      isRecommended: true,
      bestFor: 'Mantenimiento Industrial',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-852643194-red-kap-ct10-overol-trabajo-manga-larga-mecanico-industrial-_JM'
    },
    {
      id: 'dickies-bib',
      name: 'Dickies Bib Overall (Peto)',
      rating: 4.2,
      reviewCount: 620,
      isRecommended: false,
      bestFor: 'Construcción y Uso Rudo',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-1358999335-overol-peto-dickies-8329-mezclilla-uso-rudo-resistente-_JM'
    },
    {
      id: 'guigua-mono',
      name: 'GUIGUA Mono de Reparación',
      rating: 4.1,
      reviewCount: 1200,
      isRecommended: true,
      bestFor: 'Talleres y Mecánica',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-3632338520-mono-de-mecanico-de-reparacion-trajes-de-trabajo-uniformes-_JM'
    }
  ];

  const comparisonFeatures = [
    { name: 'Material Principal', product1: 'Sarga 65/35 Poli/Algodón', product2: 'Mezclilla 100% Algodón', product3: 'Poliéster' },
    { name: 'Peso del Tejido', product1: '7.25 oz', product2: '11.75 oz', product3: 'Ligero' },
    { name: 'Diseño Action-Back', product1: true, product2: false, product3: false },
    { name: 'Sistema ZeroSkratch', product1: true, product2: false, product3: false },
    { name: 'Total de Bolsillos', product1: '7 bolsillos', product2: 'Múltiples en peto', product3: 'Básicos' },
    { name: 'Transpirabilidad', product1: 'Buena', product2: 'Excelente', product3: 'Baja' },
    { name: 'Durabilidad', product1: 'Muy Alta', product2: 'Extrema', product3: 'Media' },
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
      question: '¿Cómo debo lavar mi overol, especialmente si es ignífugo?',
      answer: 'Para overoles estándar, sigue las instrucciones de la etiqueta. Para overoles ignífugos (FR), es CRUCIAL: lavar por separado, usar detergente suave SIN blanqueador ni suavizante (estos dejan residuos inflamables), lavar con agua fría/tibia (máx. 50°C), eliminar manchas de aceite/grasa antes del lavado, y secar a baja temperatura. Un lavado incorrecto puede anular las propiedades protectoras de la prenda.'
    },
    {
      question: '¿Cuál es la diferencia en durabilidad entre 100% algodón y mezcla poliéster/algodón?',
      answer: 'El 100% algodón es superior en comodidad y transpirabilidad, ideal para climas cálidos, pero es menos resistente a la abrasión, encoge y se decolora más rápido. La mezcla poliéster/algodón (típicamente 65/35) ofrece MUCHA más durabilidad: más resistente a rasgaduras, abrasión, arrugas y decoloración, convirtiéndola en el estándar para uso industrial intensivo donde la longevidad es crucial.'
    },
    {
      question: '¿Realmente necesito un overol con cintas reflejantes si solo trabajo de día?',
      answer: 'SÍ, si operas cerca de vehículos en movimiento (camiones, montacargas), en construcción con equipo pesado, o trabajas en días nublados, lluvia, neblina o jornadas tempranas/tardías. La alta visibilidad aumenta drásticamente tu seguridad al hacerte detectable. La NMX-S-061-SCFI mexicana lo exige para trabajos en vías públicas. La seguridad proactiva siempre es la mejor política.'
    },
    {
      question: '¿Se puede reparar un overol roto o se debe reemplazar?',
      answer: 'Depende del tipo: Para overoles de uso general (mezclilla, gabardina), pequeñas rasgaduras en zonas no críticas pueden repararse con parches. Sin embargo, para overoles de protección especializada (ignífugos, antiestáticos, químicos), CUALQUIER daño que comprometa la integridad de la barrera protectora (agujero, rasgadura, costura deshecha) es inaceptable. La prenda debe retirarse y reemplazarse inmediatamente: su uso representa un riesgo grave.'
    },
    {
      question: '¿Las tallas de overoles son unisex o debo buscar modelos específicos para mujer?',
      answer: 'Tradicionalmente, la mayoría son "unisex" (realmente patrón masculino), lo que puede resultar incómodo para mujeres: exceso en hombros/cintura, ajuste apretado en busto/caderas. Un overol mal ajustado no solo es incómodo, sino un riesgo de seguridad (enganche en maquinaria). Cada vez más marcas ofrecen líneas diseñadas específicamente para anatomía femenina con ajuste más seguro y ergonómico. Se recomienda activamente buscar estos modelos.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema industrial/trabajo */}
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
                {i % 3 === 0 ? <Wrench className="w-6 h-6" /> : 
                 i % 3 === 1 ? <Hammer className="w-6 h-6" /> : 
                 <HardHat className="w-6 h-6" />}
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
                <Shirt className="h-4 w-4" />
                👷 Equipo de Protección Personal
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Overoles de Trabajo para México 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva: Materiales, normativas mexicanas y los 6 productos más destacados
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-sm text-orange-200"
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
                  22 min de lectura
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
                      className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-8 border-orange-500 p-8 rounded-r-2xl mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-orange-900 mb-3">🛡️ Tu Overol: Más que una Prenda, Tu Primera Herramienta</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            Tu overol de trabajo <strong className="text-orange-600">no es solo una prenda; es la primera y más importante herramienta de tu arsenal</strong>. 
                            Protege tu activo más valioso: tú mismo. En un entorno laboral cada vez más exigente en México, donde la seguridad 
                            es una prioridad y una obligación legal, <b className="bg-orange-100 px-2 py-1 rounded">elegir el overol correcto no es un gasto, es una inversión</b> 
                            directa en tu integridad, eficiencia y profesionalismo.
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
                      Pero con un mercado saturado de opciones, desde la <b>mezclilla más ruda para la construcción</b> hasta los 
                      <b className="text-orange-600"> tejidos ignífugos de alta tecnología</b> para la industria energética, ¿cómo saber 
                      cuál es la inversión correcta para ti?
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Tu Mapa de Navegación</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía es tu mapa completo. Hemos analizado a fondo el mercado mexicano para desglosar <b>materiales, normativas 
                        y los 6 mejores productos disponibles en 2025</b>, para que tu próxima elección sea la más segura e inteligente. 
                        Desde cómo tomarte las medidas correctamente hasta entender qué significa realmente <b className="text-blue-700">'uso rudo'</b>.
                      </p>
                    </motion.div>
                  </section>

                  {/* Anatomía del Overol */}
                  <section id="anatomia-overol" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🔬 Anatomía del Overol: Guía de Características Esenciales
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      El overol es una <b className="text-orange-600">barrera integral</b> contra suciedad, grasa, riesgos químicos, 
                      térmicos y eléctricos. Su diseño cubre el cuerpo desde los tobillos hasta el cuello, maximizando la protección 
                      sin sacrificar la funcionalidad.
                    </motion.p>

                    {/* El Tejido como Primera Línea */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-purple-500 mb-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <Package className="h-10 w-10 text-purple-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-purple-900">El Tejido como Primera Línea de Defensa</h3>
                          <p className="text-gray-600 text-sm mt-1">Matriz de Materiales</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        La elección del material es <b className="text-purple-700">la decisión más crítica</b>, ya que determina directamente 
                        el nivel de protección, durabilidad, comodidad y adecuación a tu entorno de trabajo específico.
                      </p>

                      {/* Selector de Material */}
                      <div className="flex justify-center gap-4 mb-8">
                        <motion.button
                          onClick={() => setSelectedMaterial('algodon')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedMaterial === 'algodon'
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                          }`}
                        >
                          Fibras Naturales
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedMaterial('mezcla')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedMaterial === 'mezcla'
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                          }`}
                        >
                          Sintéticos y Mezclas
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedMaterial('especializado')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                            selectedMaterial === 'especializado'
                              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                          }`}
                        >
                          Alto Rendimiento
                        </motion.button>
                      </div>

                      {/* Contenido según material seleccionado */}
                      <AnimatePresence mode="wait">
                        {selectedMaterial === 'algodon' && (
                          <motion.div
                            key="algodon"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300"
                          >
                            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                              <Wind className="h-6 w-6" />
                              Fibras Tradicionales y de Uso General
                            </h4>
                            
                            <div className="space-y-6">
                              <div className="bg-white p-6 rounded-lg">
                                <h5 className="font-bold text-green-800 mb-3">🌾 Algodón y Mezclilla (Denim)</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-700 mb-3">
                                      <b>El algodón</b> es valorado por su <b className="text-green-700">alta transpirabilidad y comodidad</b>, 
                                      ideal para entornos calurosos donde la gestión del sudor es prioritaria.
                                    </p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Máxima transpirabilidad</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Extremadamente cómodo</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Natural y suave al tacto</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-sm text-green-900 font-semibold mb-2">📍 Mezclilla (Denim):</p>
                                    <p className="text-sm text-gray-700">
                                      <b>El estándar histórico</b> para construcción y agricultura gracias a su <b>notable resistencia a la abrasión</b> y el desgaste.
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-4 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                  <p className="text-sm text-red-800">
                                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                                    <b>Limitaciones:</b> Protección limitada contra químicos, no es inherentemente resistente al fuego.
                                  </p>
                                </div>
                              </div>

                              <div className="bg-white p-6 rounded-lg">
                                <h5 className="font-bold text-green-800 mb-3">🧱 Gabardina y Lona (Canvas)</h5>
                                <p className="text-sm text-gray-700 mb-3">
                                  La <b>gabardina</b> (mezcla algodón/poliéster) ofrece un equilibrio clásico: durabilidad y estructura resistente 
                                  sin sacrificar comodidad. Común en talleres y fábricas.
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                  <p className="text-sm text-gray-700">
                                    La <b>lona</b> es un tejido de mayor gramaje, conocida por su <b className="text-green-700">excepcional resistencia 
                                    a rasgaduras y perforaciones</b>, siendo la opción preferida para trabajos con materiales ásperos o pesados.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {selectedMaterial === 'mezcla' && (
                          <motion.div
                            key="mezcla"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300"
                          >
                            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                              <Zap className="h-6 w-6" />
                              Fibras Sintéticas y Mezclas Modernas
                            </h4>
                            
                            <div className="space-y-6">
                              <div className="bg-white p-6 rounded-lg">
                                <h5 className="font-bold text-blue-800 mb-3">⚡ Poliéster 100%</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-700 mb-3">
                                      El <b>poliéster</b> es un pilar de la ropa de trabajo moderna debido a su <b className="text-blue-700">durabilidad superior</b>.
                                    </p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Resistente a las arrugas</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>No se decolora fácilmente</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Repele el agua</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Secado rápido</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                    <p className="text-sm text-red-800 font-semibold mb-2">❌ Principal desventaja:</p>
                                    <p className="text-sm text-red-700">
                                      <b>Baja transpirabilidad</b> - puede resultar caluroso en jornadas largas.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border-2 border-blue-400">
                                <h5 className="font-bold text-blue-900 mb-3 text-lg">🏆 Mezclas Poliéster/Algodón: El Estándar de la Industria</h5>
                                <p className="text-gray-800 mb-4 leading-relaxed">
                                  La industria ha adoptado masivamente las <b className="text-blue-700">mezclas de poliéster/algodón</b> 
                                  (comúnmente <b>65/35 o 80/20</b>). Esta combinación aprovecha:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="bg-white p-4 rounded-lg">
                                    <p className="font-semibold text-blue-800 mb-2">✓ Del Poliéster:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                      <li>• Resistencia extrema</li>
                                      <li>• Longevidad superior</li>
                                      <li>• Resistencia a químicos</li>
                                    </ul>
                                  </div>
                                  <div className="bg-white p-4 rounded-lg">
                                    <p className="font-semibold text-blue-800 mb-2">✓ Del Algodón:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                      <li>• Comodidad natural</li>
                                      <li>• Absorción de humedad</li>
                                      <li>• Transpirabilidad</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                                  <p className="text-sm text-blue-900 font-bold text-center">
                                    📌 Resultado: Un tejido versátil y de alto rendimiento para uso diario intensivo
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {selectedMaterial === 'especializado' && (
                          <motion.div
                            key="especializado"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-2 border-red-300"
                          >
                            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                              <Flame className="h-6 w-6" />
                              Tejidos de Alto Rendimiento y Tratamientos Especiales
                            </h4>
                            
                            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-xl mb-6">
                              <p className="text-gray-800 font-semibold text-center">
                                ⚠️ La creciente complejidad de los riesgos industriales ha impulsado una <b>híper-especialización</b>. 
                                Ya no es suficiente una protección genérica. La selección debe basarse en un <b className="text-red-700">análisis de riesgo específico</b>.
                              </p>
                            </div>

                            <div className="space-y-6">
                              {/* Ignífugos */}
                              <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                                <div className="flex items-start gap-3 mb-4">
                                  <Flame className="h-8 w-8 text-red-600 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-bold text-red-800 text-lg">🔥 Ignífugos (FR - Flame Resistant)</h5>
                                    <p className="text-sm text-gray-600">Obligatorios en soldadura, petroquímica, eléctrica y bomberos</p>
                                  </div>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg mb-4">
                                  <p className="text-sm text-red-900 font-semibold mb-2">⚠️ CRUCIAL - Dos tipos:</p>
                                  <div className="space-y-3">
                                    <div className="bg-white p-3 rounded-lg">
                                      <p className="font-bold text-green-700 mb-1">✓ Inherentemente Ignífugos:</p>
                                      <p className="text-sm text-gray-700">Aramidas (ej. Kevlar) - <b>NO pierden propiedades con el lavado</b></p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg">
                                      <p className="font-bold text-orange-700 mb-1">⚠️ Tratados Químicamente:</p>
                                      <p className="text-sm text-gray-700">Más económicos pero la <b>eficacia puede disminuir</b> con el tiempo y cuidado inadecuado</p>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700">
                                  <b>Función:</b> No se inflaman y no propagan la llama, protegiendo al trabajador de quemaduras críticas.
                                </p>
                              </div>

                              {/* Impermeables */}
                              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                                <div className="flex items-start gap-3 mb-4">
                                  <Droplets className="h-8 w-8 text-blue-600 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-bold text-blue-800 text-lg">💧 Impermeables y Repelentes</h5>
                                    <p className="text-sm text-gray-600">Para trabajos a la intemperie y ambientes húmedos</p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-3">
                                  Fabricados con <b>nylon, PVC o poliéster con recubrimientos especiales</b>. Protegen de lluvia, humedad y salpicaduras 
                                  de líquidos no peligrosos.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                  <p className="text-sm text-blue-900">
                                    <b>Destacado:</b> El <b className="text-blue-700">polietileno de alta densidad (PEAD)</b> ofrece una barrera eficaz 
                                    contra derrames químicos y líquidos corrosivos.
                                  </p>
                                </div>
                              </div>

                              {/* Alta Visibilidad */}
                              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
                                <div className="flex items-start gap-3 mb-4">
                                  <Eye className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-bold text-yellow-800 text-lg">👁️ Alta Visibilidad</h5>
                                    <p className="text-sm text-gray-600">Fundamental para trabajo nocturno, carreteras y zonas de tráfico</p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-3">
                                  Diseñados con <b>telas fluorescentes (gabardina neón)</b> y complementados con <b>cintas retrorreflectantes</b>. 
                                  Hacen al usuario claramente visible en cualquier condición de luz.
                                </p>
                                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                  <p className="text-sm text-yellow-900 font-semibold">
                                    ⚖️ Su uso es <b>fundamental y a menudo regulado</b> en trabajos nocturnos, carreteras, construcciones y 
                                    almacenes con poca iluminación o alto tráfico de maquinaria.
                                  </p>
                                </div>
                              </div>

                              {/* Antiestáticos */}
                              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                                <div className="flex items-start gap-3 mb-4">
                                  <Zap className="h-8 w-8 text-purple-600 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-bold text-purple-800 text-lg">⚡ Antiestáticos y Dieléctricos</h5>
                                    <p className="text-sm text-gray-600">Protección contra descargas eléctricas</p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700">
                                  Para entornos con riesgo de descargas eléctricas, existen overoles fabricados con <b>tejidos especiales que no conducen 
                                  la electricidad</b>, protegiendo al trabajador de arcos eléctricos y contacto con fuentes de tensión.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Diseño Ergonómico */}
                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-xl border-2 border-green-300 mb-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                        <Users className="h-8 w-8" />
                        Diseño Ergonómico y Funcionalidad Práctica
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Un diseño eficaz trasciende la estética; es una <b className="text-green-700">característica de ingeniería</b> que impacta 
                        directamente en la seguridad, comodidad y productividad. Una prenda mal diseñada puede limitar el movimiento, causar fatiga 
                        y <b className="text-red-600">convertirse en un riesgo de enganche</b>.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Ajuste y Movilidad */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="text-center mb-4">
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="inline-block"
                            >
                              <span className="text-4xl">🤸</span>
                            </motion.div>
                            <h4 className="font-bold text-green-800 mt-2">Ajuste y Movilidad</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Fuelles en la espalda</b> (action-back) para expansión al estirar brazos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Elásticos en cintura</b> para ajuste sin restricción</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Corte amplio</b> especialmente en entrepierna para agacharse cómodamente</span>
                            </li>
                          </ul>
                        </div>

                        {/* Configuración de Bolsillos */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="text-center mb-4">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="inline-block"
                            >
                              <span className="text-4xl">👜</span>
                            </motion.div>
                            <h4 className="font-bold text-green-800 mt-2">Configuración de Bolsillos</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Bolsillos cargo</b> en piernas para gran capacidad</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Bolsillos en pecho</b> con divisiones para lápices y herramientas pequeñas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Cierres de cremallera/velcro</b> para objetos de valor</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Trabillas para martillo</b> y bolsillos para reglas</span>
                            </li>
                          </ul>
                        </div>

                        {/* Sistemas de Cierre */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="text-center mb-4">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="inline-block"
                            >
                              <span className="text-4xl">🔒</span>
                            </motion.div>
                            <h4 className="font-bold text-green-800 mt-2">Sistemas de Cierre</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Cremalleras de latón</b> de doble vía - robustas y prácticas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Broches y botones</b> - alternativas menos seguras</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Cierres cubiertos</b> (ZeroSkratch) para evitar rayar superficies en sector automotriz</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Normatividad Mexicana */}
                  <section id="normatividad" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ⚖️ Marco Regulatorio Mexicano: Más Allá de la Etiqueta
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
                          <h3 className="text-2xl font-bold text-yellow-900 mb-3">⚠️ No es una Decisión Discrecional</h3>
                          <p className="text-gray-800 leading-relaxed mb-4">
                            La selección y uso de EPP, incluyendo overoles, <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">
                            NO es opcional para las empresas en México, sino una obligación legal</span> estipulada por la Secretaría del Trabajo 
                            y Previsión Social (STPS).
                          </p>
                          <p className="text-gray-800 leading-relaxed font-semibold">
                            El cumplimiento protege al trabajador y exime al empleador de responsabilidades legales en caso de accidente.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* NOM-017-STPS-2008 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-600 mb-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <FileText className="h-10 w-10 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-blue-900">NOM-017-STPS-2008</h3>
                          <p className="text-gray-600 text-sm">Equipo de protección personal - Selección, uso y manejo en los centros de trabajo</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Esta es la <b className="text-blue-700">Norma Oficial Mexicana fundamental</b> que rige el EPP. Obliga a los patrones a:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-blue-50 p-6 rounded-xl">
                          <h4 className="font-bold text-blue-800 mb-3">📋 Obligaciones del Empleador:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Realizar <b>análisis de riesgos</b> para cada puesto de trabajo</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>Determinar y <b>proporcionar el equipo necesario SIN COSTO</b> al empleado</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span><b>Capacitar</b> al trabajador en uso, mantenimiento y limitaciones del equipo</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">🦺 Clasificación del Overol:</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Dentro de la guía de referencia, el overol se clasifica como EPP para protección del:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><b>Tronco</b></span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><b>Extremidades superiores</b></span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><b>Extremidades inferiores</b></span>
                            </li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-3">
                            Destinado a resguardar contra riesgos como contacto con sustancias peligrosas o exposición a temperaturas extremas.
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <Info className="h-4 w-4 inline mr-2" />
                          <b>Crucial:</b> La norma NO especifica marcas o modelos, sino que establece el <b>proceso de selección basado en riesgos</b>.
                        </p>
                      </div>
                    </motion.div>

                    {/* NMX-S-061-SCFI-2017 */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-yellow-600 mb-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Eye className="h-10 w-10 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-yellow-900">NMX-S-061-SCFI-2017</h3>
                          <p className="text-gray-600 text-sm">Seguridad - Ropa de alta visibilidad para uso profesional</p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-xl mb-4">
                        <p className="text-yellow-900 font-semibold mb-2">⚠️ Nota Importante:</p>
                        <p className="text-sm text-gray-700">
                          Aunque es una <b>Norma Mexicana (NMX)</b> y NO una Norma Oficial (NOM) de carácter obligatorio general, 
                          <b className="text-yellow-700"> se vuelve requisito indispensable</b> en licitaciones y para trabajos  regulados por entidades como la Secretaría de Comunicaciones y Transportes.
                        </p>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Establece los <b className="text-yellow-700">requisitos técnicos específicos</b> para la ropa de alta visibilidad:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                          <h4 className="font-bold text-yellow-800 mb-3">📐 Especificaciones Técnicas:</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                              <span>Propiedades <b>colorimétricas</b> del material de fondo fluorescente</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                              <span>Coeficientes de <b>retrorreflexión</b> de las cintas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                              <span>Medición bajo <b>estándares técnicos</b> verificables</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-6 rounded-xl">
                          <h4 className="font-bold text-yellow-800 mb-3">🎯 Aplicación:</h4>
                          <p className="text-sm text-gray-700">
                            Asegura que la prenda cumpla su función de manera efectiva bajo estándares medibles, 
                            garantizando la <b className="text-yellow-700">visibilidad del trabajador en condiciones críticas</b>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Conclusión Normativa */}
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">El Proceso Correcto de Cumplimiento</h3>
                      </div>
                      <p className="leading-relaxed text-lg mb-4">
                        No es buscar un sello de <span className="line-through">"Cumple NOM-005"</span>, sino:
                      </p>
                      <ol className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                          <span><b>Realizar un análisis de riesgo interno</b> para cada puesto de trabajo (NOM-030-STPS-2009)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                          <span><b>Determinar el EPP específico</b> que cubra esos riesgos identificados (NOM-017-STPS-2008)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                          <span><b>Adquirir o ensamblar</b> el overol con las características técnicas adecuadas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                          <span><b>Capacitar al personal</b> en uso, mantenimiento y limitaciones del equipo</span>
                        </li>
                      </ol>
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
                        🏆 Top 6 Overoles Destacados del Mercado Mexicano 2025
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
                            a la información disponible en Mercado Libre al momento de la publicación (3 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - Red Kap CT10 */}
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
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            ESTÁNDAR INDUSTRIAL GLOBAL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Red Kap CT10 Twill Action Back Coverall
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || i === 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(850+ reseñas) - 4.6/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Mecánicos, Personal de Mantenimiento Industrial, Técnicos de Manufactura, Sector Automotriz
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El modelo CT10 de Red Kap es un <b className="text-blue-700">referente mundial en la industria</b>, reconocido por su 
                          equilibrio entre durabilidad, funcionalidad y diseño para el movimiento. Confeccionado en sarga de <b>7.25 oz con mezcla 
                          65% poliéster / 35% algodón</b>, ofrece notable resistencia a las arrugas y facilita la liberación de suciedad y manchas 
                          de aceite. Su característica estrella es el <b className="bg-blue-100 px-2 py-1 rounded">diseño Action Back</b> con 
                          pliegues en la espalda que se expanden para un rango de movimiento superior.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            Tecnología ZeroSkratch™
                          </h4>
                          <p className="text-gray-700">
                            Todos los cierres y botones están <b>cubiertos para proteger las superficies de trabajo</b>, un requisito 
                            indispensable en la industria automotriz. Esta característica evita rayones en vehículos y superficies delicadas.
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
                                <span><b>Movilidad Superior:</b> Action Back y aberturas laterales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Durabilidad Comprobada:</b> Sarga resistente y construcción robusta</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Funcionalidad Profesional:</b> ZeroSkratch y resistencia a manchas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>7 Bolsillos Estratégicos:</b> 2 pecho, 2 frontales, 2 traseros, 1 para regla</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Reputación Global:</b> Red Kap es marca confiable mundialmente</span>
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
                                <span><b>Precio Premium:</b> Costo significativamente más alto que alternativas genéricas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ajuste Oversized:</b> Diseñado para usarse sobre la ropa, puede resultar muy holgado</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Rango de Precio: $950 - $1,200 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-852643194-red-kap-ct10-overol-trabajo-manga-larga-mecanico-industrial-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Dickies Bib Overall */}
                      <motion.div 
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-2xl border-2 border-indigo-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-indigo-500 text-white font-bold text-lg px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 font-bold">
                            CLÁSICO DE USO RUDO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          Dickies Bib Overall (Peto de Mezclilla)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(620+ reseñas) - 4.2/5</span>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                          <p className="text-indigo-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, Agricultura, Carpinteros, Herreros - Cualquier oficio de uso extremo
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El overol con peto de Dickies es <b className="text-indigo-700">más que una prenda de trabajo; es un ícono cultural del workwear</b>. 
                          Su diseño se ha mantenido prácticamente sin cambios por décadas, priorizando la robustez y la funcionalidad pura. Fabricado con 
                          <b> mezclilla de algodón 100% de alto gramaje (11.75 oz)</b>, ofrece una transpirabilidad superior a las fibras sintéticas y una 
                          <b className="bg-indigo-100 px-2 py-1 rounded"> resistencia excepcional al uso rudo</b>.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Ventaja Funcional Clave
                          </h4>
                          <p className="text-gray-700">
                            El <b>gran peto frontal</b> está equipado con múltiples bolsillos y divisiones para tener herramientas, lápices y 
                            accesorios al alcance de la mano. Las <b>costuras de triple pespunte</b> en áreas de mayor tensión y los refuerzos 
                            en puntos clave garantizan una <b className="text-green-700">durabilidad legendaria</b>.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-indigo-200">
                            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Resistencia Extrema:</b> Mezclilla de alto gramaje casi indestructible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Comodidad y Transpirabilidad:</b> 100% algodón, cómodo en jornadas largas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Gran Capacidad de Carga:</b> Diseño del peto inigualable para herramientas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño Atemporal:</b> Estilo clásico probado por generaciones</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Costuras Reforzadas:</b> Triple pespunte en puntos críticos</span>
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
                                <span><b>Peso:</b> Puede resultar pesado y caluroso en climas cálidos de México</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección Limitada:</b> Poca resistencia a químicos, no es ignífugo</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-2 border-indigo-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-indigo-700 mb-2">💰 Rango de Precio: $1,200 - $1,800 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1358999335-overol-peto-dickies-8329-mezclilla-uso-rudo-resistente-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - GUIGUA Mono */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-6 py-3">
                            🥉 #3
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            FAVORITO DEL TALLER - MÁS VENDIDO
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          GUIGUA Mono de Reparación
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(1,200+ reseñas) - 4.1/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Mecánicos de fin de semana, Aprendices, Talleres pequeños, Protección básica contra suciedad/aceite
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            🏆 Consistentemente "MÁS VENDIDO" en Mercado Libre
                          </h4>
                          <p className="text-gray-700">
                            Este producto se posiciona consistentemente como líder de ventas, un testimonio de su <b className="text-yellow-700">formidable propuesta de valor</b>.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Su principal atractivo es un <b className="text-green-700">precio muy accesible</b>, convirtiéndolo en una opción de entrada 
                          para muchos trabajadores. Fabricado predominantemente en <b>poliéster</b>, es un overol ligero, fácil de lavar y que resiste 
                          bien las manchas de fluidos comunes en un taller. El diseño es sencillo pero funcional, con <b>cierre de cremallera frontal</b> 
                          para facilitar su colocación, cuello alto y múltiples bolsillos en pecho y piernas.
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
                                <span><b>Precio Muy Asequible:</b> Bajo costo lo hace accesible para cualquier presupuesto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ligero y Fácil Mantenimiento:</b> Poliéster fácil de limpiar, secado rápido</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección Básica Eficaz:</b> Mantiene la ropa personal limpia de suciedad y grasa</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Múltiples Bolsillos:</b> En pecho y piernas para herramientas básicas</span>
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
                                <span><b>Menor Durabilidad:</b> Material/costuras no resisten el mismo abuso que marcas premium</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Baja Transpirabilidad:</b> Poliéster puede resultar caluroso en jornadas largas</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Rango de Precio: $350 - $550 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-3632338520-mono-de-mecanico-de-reparacion-trajes-de-trabajo-uniformes-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - CODYTAVAREZ Cargo */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl border-2 border-purple-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-purple-500 text-white font-bold text-lg px-6 py-3">
                            ⭐ #4
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 font-bold">
                            CAMPEÓN DE LA CARGA
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          CODYTAVAREZ Overol Industrial con Bolsas Cargo
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.5) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(780+ reseñas) - 4.4/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Electricistas, Instaladores, Telecomunicaciones, Plomeros - Profesionales con muchas herramientas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este overol, también un <b>éxito de ventas en Mercado Libre</b>, se diferencia por su enfoque en la <b className="text-purple-700">capacidad 
                          de almacenamiento</b>. Su característica principal son los <b>amplios bolsillos tipo "cargo" en las piernas</b>, que complementan los 
                          bolsillos tradicionales en pecho y cadera. Confeccionado en un tejido descrito como <b>"imitación de algodón satinado"</b>, busca 
                          ofrecer una sensación suave y cómoda al tacto, a la vez que es <b className="bg-purple-100 px-2 py-1 rounded">transpirable y resistente a las manchas</b>.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Opiniones de Usuarios
                          </h4>
                          <p className="text-gray-700">
                            Las opiniones suelen ser positivas, destacando la <b className="text-blue-700">buena calidad de los materiales y las costuras</b> 
                            en relación con su precio competitivo. El diseño incluye una <b>cintura elástica</b> que mejora el ajuste y la comodidad.
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
                                <span><b>Excelente Capacidad de Almacenamiento:</b> Bolsillos cargo son un diferenciador clave</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Buena Relación Precio-Calidad:</b> Características avanzadas a precio de marketplace</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Cómodo:</b> Material suave y cintura elástica valorados por usuarios</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Transpirable:</b> Mejor gestión del calor que poliéster puro</span>
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
                                <span><b>Tallaje Inconsistente:</b> Algunas tallas vienen reducidas o con tiro corto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Consejo:</b> Revisar guía de tallas y considerar pedir una talla más grande</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Rango de Precio: $290 - $500 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1598245245-overol-industrial-bolsas-cargo-seguridad-uso-rudo-trabajo-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - BRISCO Alta Visibilidad */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl shadow-2xl border-2 border-yellow-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-yellow-500 text-white font-bold text-lg px-6 py-3">
                            👁️ #5
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            GUARDIÁN DE LA VISIBILIDAD
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          BRISCO INDUSTRIAL Overol con Cintas Reflejantes
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || i === 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(450+ reseñas) - 4.6/5</span>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, Carreteras/Autopistas, Almacenes, Centros Logísticos - Trabajo en condiciones de baja visibilidad
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-4 border-red-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                            <Eye className="h-6 w-6" />
                            🚨 La Seguridad Activa es el Pilar
                          </h4>
                          <p className="text-gray-700">
                            BRISCO INDUSTRIAL es una marca con fuerte presencia en Mercado Libre en el segmento de EPP, y sus overoles con reflejantes 
                            son consistentemente bien calificados por su <b className="text-red-700">compromiso con la seguridad visible</b>.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este modelo combina un <b>tejido base duradero (típicamente gabardina poliéster/algodón)</b> con <b className="text-yellow-700">cintas 
                          retrorreflectantes de 2 pulgadas</b> estratégicamente colocadas en torso, brazos y piernas para <b className="bg-yellow-100 px-2 py-1 rounded">
                          maximizar la visibilidad desde todos los ángulos</b>. La construcción está pensada para el uso rudo, con <b>costuras reforzadas con 
                          presillas de seguridad</b> y <b>cierres plásticos antiestáticos de alta resistencia</b>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Máxima Seguridad Visual:</b> Cintas reflejantes aumentan drásticamente la visibilidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción Robusta:</b> Diseñado para trabajo pesado con refuerzos en puntos clave</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Cumplimiento Normativo Potencial:</b> Probable cumplimiento con NMX-S-061-SCFI</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Cierres Antiestáticos:</b> Seguridad adicional en ciertos entornos</span>
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
                                <span><b>Costo Adicional:</b> Material reflejante certificado incrementa el precio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño Utilitario:</b> Estética subordinada a la función de seguridad</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                          <p className="text-sm text-yellow-900">
                            <Info className="h-4 w-4 inline mr-2" />
                            <b>Importante:</b> Verificar con el vendedor la certificación NMX-S-061-SCFI si es requisito para tu trabajo.
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Rango de Precio: $750 - $1,200 MXN</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-963468347-overol-industrial-alta-visibilidad-con-reflejantes-uso-rudo-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - PRO-TEX Desechable */}
                      <motion.div 
                        className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-3xl shadow-2xl border-2 border-gray-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-gray-600 text-white font-bold text-lg px-6 py-3">
                            🛡️ #6
                          </Badge>
                          <Badge className="bg-gray-100 text-gray-800 px-4 py-2 font-bold">
                            BARRERA DESECHABLE ESENCIAL
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          PRO-TEX 6003 Overol Desechable (Tipo Tyvek)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(920+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl mb-6">
                          <p className="text-gray-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Pintores, Aplicadores de Pesticidas, Limpieza Industrial, Técnicos de Laboratorio - Exposición a partículas/líquidos
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                            <Star className="h-6 w-6" />
                            ⭐ Una de las Opciones MEJOR CALIFICADAS
                          </h4>
                          <p className="text-gray-700">
                            Este overol desechable es una de las opciones mejor calificadas y <b className="text-green-700">más vendidas en Mercado Libre</b> 
                            para protección de un solo uso, con una excelente calificación basada en cientos de reseñas.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Fabricado en <b>polietileno laminado</b>, emula las propiedades del material Tyvek de DuPont, ofreciendo una <b className="text-gray-700">barrera 
                          eficaz contra partículas sólidas y líquidas</b>. Es <b className="bg-gray-100 px-2 py-1 rounded">impermeable, antiestático y muy ligero</b>. 
                          Su diseño está enfocado en el sellado: incluye un <b>gorro integrado</b> y <b>elásticos en capucha, muñecas y tobillos</b> para minimizar 
                          la entrada de contaminantes.
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
                                <span><b>Protección Confiable:</b> Barrera efectiva contra contaminantes no peligrosos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Muy Económico por Uso:</b> Bajo costo ideal para tareas de alta contaminación</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ligero y Cómodo:</b> No añade peso ni restringe movimiento significativamente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Antiestático:</b> Característica de seguridad importante en ciertos entornos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sellado Completo:</b> Gorro integrado y elásticos en puntos críticos</span>
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
                                <span><b>Uso Único:</b> No diseñado para ser reutilizado, genera residuos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Baja Resistencia Mecánica:</b> No protege contra rasgaduras, abrasión o pinchazos</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-6 rounded-xl border-2 border-gray-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-gray-700 mb-2">💰 Precio: $80 - $100 MXN (por pieza)</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1353220802-overol-blanco-desechable-pro-tex-6003-tipo-tyvek-_JM"
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
                        📊 Comparación Detallada: Top 3 Cara a Cara
                      </span>
                    </motion.h2>
                    <ProductComparison 
                      title="Análisis Comparativo: Los 3 Overoles Mejor Valorados"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                      buttonText="Ver en Mercado Libre"
                      affiliateNote="📢 Divulgación: Los enlaces son de afiliados de Mercado Libre. Podemos recibir una comisión si realizas una compra, sin costo adicional para ti. Esto nos ayuda a mantener este contenido gratuito y actualizado."
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
                        🛒 Guía de Compra Rápida: 5 Pasos para la Compra Perfecta
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-2xl mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-yellow-900 mb-2">⚠️ El Desafío de la Compra Online</h3>
                          <p className="text-gray-800">
                            La compra de un overol en línea presenta un desafío particular: <b className="text-yellow-700">la imposibilidad de probarse 
                            la prenda</b>. Este factor de incertidumbre sobre el ajuste es, a menudo, el mayor obstáculo. Esta guía te proporciona el 
                            método para <b className="bg-yellow-200 px-2 py-1 rounded">eliminar el riesgo y transformar la duda en confianza</b>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-8">
                      {/* Paso 1 */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">Diagnostica tu Riesgo</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              El punto de partida NO es el catálogo de productos, sino un <b className="text-blue-700">análisis de tu entorno de trabajo</b>. 
                              Define con precisión los peligros a los que te enfrentas diariamente.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl">
                              <h4 className="font-bold text-blue-800 mb-3">❓ Preguntas Clave:</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <Flame className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                  <span>¿Hay riesgo de <b>chispas o fuego</b>? → Necesitas overol ignífugo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Droplets className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>¿<b>Exposición a lluvia o líquidos</b>? → Impermeable</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Eye className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                  <span>¿Trabajas en <b>condiciones de poca luz o cerca de vehículos</b>? → Alta visibilidad</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Shirt className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>¿Tu principal necesidad es <b>protegerte de suciedad y grasa</b>? → Básico de gabardina o mezclilla</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 2 */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            2
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-green-900 mb-3">Elige tu Material</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Una vez definido el riesgo, <b className="text-green-700">el material se elige casi por consecuencia</b>. 
                              No es una decisión estética, es una decisión de supervivencia.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                  <ThermometerSun className="h-5 w-5" />
                                  Climas Cálidos
                                </h4>
                                <p className="text-sm text-gray-700">
                                  <b>100% algodón</b> - Máxima transpirabilidad, sin abrasión extrema
                                </p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                                  <Shield className="h-5 w-5" />
                                  Durabilidad
                                </h4>
                                <p className="text-sm text-gray-700">
                                  <b>Mezclas poliéster/algodón, gabardina, lona</b> - Resistencia al desgaste diario
                                </p>
                              </div>
                              <div className="bg-red-50 p-4 rounded-lg">
                                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                                  <Flame className="h-5 w-5" />
                                  Riesgos Específicos
                                </h4>
                                <p className="text-sm text-gray-700">
                                  <b>Tejidos certificados</b> - Ignífugos, impermeables, antiestáticos
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 3 - Domina tu Talla */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border-4 border-purple-400"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            3
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-purple-900 mb-3">Domina tu Talla (La Clave del Éxito Online) 🎯</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              <b className="bg-purple-200 px-2 py-1 rounded">Este es el paso MÁS CRÍTICO</b> donde ocurren la mayoría de los errores. 
                              Sigue este proceso metódicamente:
                            </p>

                            <div className="space-y-6">
                              {/* Olvida tu talla casual */}
                              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                                <div className="flex items-start gap-3 mb-3">
                                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                                  <h4 className="font-bold text-red-900 text-lg">❌ Olvida tu talla de ropa casual</h4>
                                </div>
                                <p className="text-gray-700">
                                  La ropa de trabajo tiene un <b>sistema de tallaje propio</b>. Un overol talla 40 NO es equivalente a un pantalón 
                                  talla 40. Además, muchos modelos están diseñados para usarse sobre la ropa, incorporando holgura adicional.
                                </p>
                              </div>

                              {/* Toma tus medidas */}
                              <div className="bg-purple-100 p-6 rounded-xl">
                                <h4 className="font-bold text-purple-900 mb-4 text-lg">📏 Toma tus Medidas Corporales</h4>
                                <p className="text-sm text-purple-800 mb-4">
                                  Utiliza una cinta métrica flexible. <b>Pide ayuda a otra persona para mayor precisión</b>.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="bg-white p-4 rounded-lg">
                                    <h5 className="font-bold text-purple-800 mb-2">🫁 Pecho</h5>
                                    <p className="text-sm text-gray-700">
                                      Rodea la parte más ancha del pecho, pasando por debajo de los brazos y sobre los omóplatos. 
                                      Ajustada pero NO apretada.
                                    </p>
                                  </div>
                                  <div className="bg-white p-4 rounded-lg">
                                    <h5 className="font-bold text-purple-800 mb-2">⭕ Cintura</h5>
                                    <p className="text-sm text-gray-700">
                                      Mide alrededor de tu cintura natural, a la altura del ombligo. Realiza esta medida <b>sobre la camisa</b>, 
                                      no sobre los pantalones.
                                    </p>
                                  </div>
                                  <div className="bg-white p-4 rounded-lg">
                                    <h5 className="font-bold text-purple-800 mb-2">📐 Entrepierna</h5>
                                    <p className="text-sm text-gray-700">
                                      De pie y descalzo, mide desde la ingle por la parte interior de la pierna hasta el suelo. 
                                      Ajusta según la altura de tu calzado de trabajo.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Consulta la guía */}
                              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                                <div className="flex items-start gap-3 mb-3">
                                  <FileText className="h-6 w-6 text-purple-600 flex-shrink-0" />
                                  <h4 className="font-bold text-purple-900 text-lg">📋 Consulta la Guía de Tallas del Fabricante</h4>
                                </div>
                                <p className="text-gray-700 mb-3">
                                  Cada marca (Dickies, Red Kap, etc.) tiene su propia tabla de equivalencias. <b className="text-purple-700">Búscala 
                                  SIEMPRE</b> en la página del producto o en el sitio web oficial. No asumas que las tallas son universales.
                                </p>
                              </div>

                              {/* Regla de Oro */}
                              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-4 border-yellow-400">
                                <div className="flex items-start gap-3">
                                  <Star className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-bold text-yellow-900 text-xl mb-2">👑 La Regla de Oro</h4>
                                    <p className="text-gray-800 text-lg">
                                      Si tus medidas se encuentran entre dos tallas, <b className="bg-yellow-300 px-2 py-1 rounded">elige SIEMPRE 
                                      la más grande</b>. Es preferible tener un poco de holgura extra que garantiza la movilidad, a una prenda 
                                      ajustada que restrinja el movimiento y pueda desgarrarse en las costuras.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 4 */}
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-orange-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            4
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-orange-900 mb-3">Verifica la Funcionalidad</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Revisa la descripción del producto para confirmar que cuenta con los <b className="text-orange-700">detalles que tu trabajo requiere</b>. 
                              Estos pequeños detalles tienen un gran impacto en la eficiencia diaria.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-orange-50 p-4 rounded-lg">
                                <h4 className="font-bold text-orange-800 mb-3">🔍 Checklist de Funcionalidad:</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span>¿Cierre de doble vía para mayor comodidad?</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span>¿Bolsillos cargo para herramientas voluminosas?</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span>¿Refuerzos en las rodillas?</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span>¿Trabillas para martillo?</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span>¿Diseño Action-Back para movilidad?</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                                <h4 className="font-bold text-orange-800 mb-3">💡 Tip Profesional:</h4>
                                <p className="text-sm text-gray-700">
                                  Un overol con características específicas para tu oficio puede aumentar tu productividad en un 20-30% 
                                  al tener herramientas siempre accesibles y diseño que no limita tu movimiento.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 5 - TCO */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-white text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-2xl">
                            5
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">Considera el Costo de Vida Útil (TCO)</h3>
                            <p className="leading-relaxed mb-6 text-lg">
                              No te dejes guiar únicamente por el precio de compra. <b>Un overol económico de $400 MXN que necesita ser reemplazado 
                              cada seis meses</b> resulta, a largo plazo, mucho más costoso que un modelo de alta durabilidad de $1,000 MXN que puede 
                              durar varios años.
                            </p>
                            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                              <h4 className="font-bold text-xl mb-4">💰 Ejemplo de TCO (Total Cost of Ownership):</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-lg">
                                  <p className="font-bold text-yellow-300 mb-2">Overol Económico:</p>
                                  <ul className="text-sm space-y-1">
                                    <li>• Costo inicial: $400 MXN</li>
                                    <li>• Vida útil: 6 meses</li>
                                    <li>• Costo por 2 años: <b className="text-red-300">$1,600 MXN</b></li>
                                    <li>• Reemplazos necesarios: 4</li>
                                  </ul>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                  <p className="font-bold text-green-300 mb-2">Overol Premium:</p>
                                  <ul className="text-sm space-y-1">
                                    <li>• Costo inicial: $1,000 MXN</li>
                                    <li>• Vida útil: 2+ años</li>
                                    <li>• Costo por 2 años: <b className="text-green-300">$1,000 MXN</b></li>
                                    <li>• Reemplazos necesarios: 0</li>
                                  </ul>
                                </div>
                              </div>
                              <p className="text-center mt-4 text-lg font-bold text-yellow-300">
                                💡 Ahorro de $600 MXN + Protección constante + Menos tiempo buscando reemplazos
                              </p>
                            </div>
                            <p className="mt-4 text-center text-lg">
                              <b>Invertir en calidad es una decisión financieramente inteligente</b> que reduce costos de reposición y 
                              garantiza una protección constante.
                            </p>
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
                            className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-orange-50 hover:from-orange-50 hover:to-amber-50 transition-all flex items-center justify-between gap-4"
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
                        🎯 Conclusión: Equípate con Inteligencia
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
                            Desde la <b className="text-green-700">resistencia legendaria de un peto de mezclilla Dickies</b> hasta la protección 
                            especializada de un overol de alta visibilidad que cumple con la normativa mexicana, hemos recorrido el espectro completo 
                            de la ropa de trabajo disponible para el profesional en México.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            La elección final, como hemos visto, <b>depende de los riesgos y exigencias de tu labor diaria</b>. Sin embargo, 
                            ahora cuentas con las herramientas para decidir con inteligencia y precisión.
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
                            <b>Red Kap CT10</b> - Si priorizas la durabilidad de una marca global, movilidad y características profesionales como ZeroSkratch.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Construction className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Uso Rudo</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Dickies Bib Overall</b> - El clásico indestructible para construcción y agricultura, con transpirabilidad 
                            superior del 100% algodón.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Package className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Valor</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>GUIGUA Mono</b> o <b>CODYTAVAREZ Cargo</b> - Opciones asequibles y funcionales para talleres y oficios con 
                            presupuesto moderado.
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
                        <Shirt className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">Tu Decisión, Tu Seguridad</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Recuerda: <b>el overol adecuado es aquel que te permite concentrarte plenamente en tu trabajo</b>, con la tranquilidad 
                        de que tu seguridad está garantizada. Invierte en calidad, prioriza el ajuste perfecto y trabaja con la confianza que 
                        solo la protección correcta puede ofrecer.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🛡️ La seguridad en el trabajo no es, ni será nunca, negociable 🛡️
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál de estos overoles se convertirá en tu compañero de jornada? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        👷 Equípate bien, trabaja seguro 👷
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