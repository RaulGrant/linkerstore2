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
  Droplets,
  Flame,
  Construction,
  Beaker,
  Layers,
  Zap,
  ThermometerSun,
  Package,
  FileText,
  Info,
  TrendingUp,
  ChevronDown,
  Wrench,
  HardHat,
  Factory
} from 'lucide-react';
import { useState } from 'react';

export default function SelladoresIndustrialesArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<'silicona' | 'poliuretano' | 'epoxico' | 'acrilico' | 'hibrido'>('silicona');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'sikaflex-1a',
      name: 'Sika Sikaflex-1a Purform',
      rating: 4.8,
      reviewCount: 100,
      isRecommended: true,
      bestFor: 'Alto Desempeño Industrial',
      amazonLink: 'https://www.mercadolibre.com.mx/sika-sikaflex-sellador-elastico-poliuretano-1a-300ml-color-negro/p/MLM24156214'
    },
    {
      id: 'loctite-596',
      name: 'Loctite SI 596 RTV Rojo',
      rating: 4.7,
      reviewCount: 85,
      isRecommended: false,
      bestFor: 'Altas Temperaturas',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-2120536951-silicon-alta-temp-formador-juntas-rtv-rojo-70-ml-loctite-596-_JM'
    },
    {
      id: 'sika-anchorfix',
      name: 'Sika AnchorFix-2+ Tropical',
      rating: 5.0,
      reviewCount: 45,
      isRecommended: true,
      bestFor: 'Anclajes Estructurales',
      amazonLink: 'https://www.mercadolibre.com.mx/sika-anchorfix2-tropical-adhesivo-para-anclajes-300-ml/up/MLMU562396917'
    }
  ];

  const comparisonFeatures = [
    { name: 'Base Química', product1: 'Poliuretano', product2: 'Silicona Acética', product3: 'Epoxi-Acrilato' },
    { name: 'Rango de Temperatura', product1: '-40°C a +80°C', product2: '-60°C a +260°C', product3: '-40°C a +80°C' },
    { name: 'Dureza Shore A', product1: '50', product2: '30', product3: 'N/A (Rígido)' },
    { name: 'Capacidad de Movimiento', product1: '±35%', product2: '600% Elongación', product3: 'N/A (Rígido)' },
    { name: 'Tiempo de Curado', product1: '3 mm/24h', product2: '3 mm/24h', product3: '40 min a 5h' },
    { name: 'Pintable', product1: true, product2: false, product3: false },
    { name: 'Certificaciones', product1: 'NSF/ANSI 61', product2: 'MIL-A-46106A', product3: 'ETAG 001' },
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
      title: 'Guía Completa: Mejores Overoles de Trabajo 2025',
      excerpt: 'Análisis detallado de materiales, normativas y los mejores overoles disponibles.',
      description: 'Análisis detallado de materiales, normativas y los mejores overoles disponibles.',
      category: 'EPP',
      publishDate: '3 Oct 2025',
      readTime: '22 min',
      image: '/images/overoles-trabajo.jpg',
      slug: 'guia-completa-mejores-overoles-trabajo-2025'
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
      question: '¿Cuál es la diferencia fundamental entre un sellador de silicona y uno de poliuretano?',
      answer: "La diferencia principal reside en su estructura química, que dicta sus propiedades. La silicona destaca por su superior flexibilidad, resistencia a los rayos UV y a temperaturas extremas, siendo ideal para exteriores y sellado de vidrio, pero no se puede pintar. El poliuretano ofrece una excelente resistencia mecánica y a la abrasión, se adhiere fuertemente al concreto y es pintable, pero es menos resistente a la exposición directa y prolongada a los rayos UV. En resumen: piense en la silicona para 'flexibilidad y resistencia al clima' y en el poliuretano para 'dureza, tráfico y capacidad de ser pintado'."
    },
    {
      question: '¿Qué significa "RTV" en un sellador de silicona?',
      answer: "RTV son las siglas de 'Room Temperature Vulcanizing' (Vulcanizado a Temperatura Ambiente). Este término indica que el sellador cura mediante una reacción química con la humedad presente en el aire a temperatura ambiente, sin necesidad de aplicar calor o mezclar un segundo componente para endurecer."
    },
    {
      question: '¿Puedo aplicar un sellador nuevo sobre una junta que ya tiene sellador viejo?',
      answer: "No. Este es un error crítico que garantiza una falla prematura. La adhesión de un nuevo sellador depende de una superficie perfectamente limpia y seca. Es imperativo eliminar mecánicamente todo el sellador viejo, ya sea cortándolo o raspándolo. Posteriormente, la junta debe limpiarse con un solvente adecuado (como alcohol isopropílico) para remover cualquier residuo, polvo o grasa antes de aplicar el nuevo cordón de sellador."
    },
    {
      question: '¿Cómo puedo quitar sellador de poliuretano o silicona que ya está curado?',
      answer: "La remoción es un proceso principalmente mecánico. Para Silicona Curada: Utilice una navaja o un rascador para cortar y retirar la mayor parte del material. Aplicar calor con una pistola de aire caliente puede ayudar a ablandar la silicona, facilitando su remoción. Para los residuos finos, se pueden utilizar solventes como acetona o removedores de silicona comerciales. Para Poliuretano Curado: Es extremadamente difícil de quitar debido a su alta adherencia y tenacidad. El método principal es el raspado y lijado mecánico. La acetona es efectiva para disolver el poliuretano fresco, pero tiene una eficacia muy limitada una vez que ha curado por completo."
    },
    {
      question: '¿Todos los selladores que dicen "pintable" se comportan igual con la pintura?',
      answer: "No. Los selladores acrílicos son los más fáciles y rápidos de pintar, a menudo en menos de una hora. Los selladores de poliuretano también son pintables, pero es crucial esperar a que estén completamente curados para evitar problemas de adherencia de la pintura. Es importante considerar que aplicar una pintura rígida sobre un sellador elastomérico puede provocar que la pintura se agriete cuando la junta se mueva. Por ello, se recomienda el uso de pinturas flexibles. Las siliconas, por su naturaleza química, NUNCA deben pintarse."
    }
  ];;

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema industrial/químico */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${210 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Moléculas químicas flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`molecule-${i}`}
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
                {i % 3 === 0 ? <Beaker className="w-6 h-6" /> : 
                 i % 3 === 1 ? <Droplets className="w-6 h-6" /> : 
                 <Layers className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de sellado (40 ondas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute border-2 border-blue-400 rounded-full opacity-30"
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
                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Factory className="h-4 w-4" />
                🏭 Selladores Industriales
              </motion.div>
              
              <motion.h1 
                className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl md:text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Selladores Industriales: Guía Completa de Productos y Aplicaciones 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía técnica definitiva: Química, rendimiento y los 6 mejores productos del mercado mexicano
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 sm:p-4 md:p-6 text-sm text-blue-200"
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
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
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
                  background: `hsl(${210 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                          <Droplets className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3">🔬 Más que un Simple Pegamento</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            La selección de un sellador industrial trasciende la simple elección de un producto; es una 
                            <strong className="text-blue-600"> decisión de ingeniería</strong> que impacta la durabilidad, 
                            seguridad y eficiencia de una instalación. Comprender las propiedades fundamentales de cada familia 
                            de selladores y los parámetros que definen su rendimiento es <b className="bg-blue-100 px-2 py-1 rounded">
                            el primer paso para garantizar un sellado exitoso y duradero</b>.
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
                      En el entorno industrial mexicano, <b>un sellado adecuado no es solo cuestión de evitar fugas</b>. 
                      Es una barrera crítica contra la corrosión, una garantía de eficiencia energética en sistemas HVAC, 
                      y un factor determinante en la integridad estructural de edificios y maquinaria.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-green-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">Tu Hoja de Ruta Técnica</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía para 2025 desglosa el mercado mexicano desde la <b>química fundamental</b> hasta los 
                        <b className="text-green-700"> 6 productos más destacados disponibles en Mercado Libre</b>, 
                        proporcionando los datos técnicos y el análisis necesario para tomar la decisión correcta, la primera vez.
                      </p>
                    </motion.div>
                  </section>

                  {/* La Química Detrás del Sello */}
                  <section id="quimica-selladores" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🧪 La Química Detrás del Sello: Familias de Selladores
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La composición química de un sellador es <b className="text-purple-600">el factor determinante</b> de su 
                      comportamiento. La distinción entre polímeros inorgánicos y orgánicos da lugar a fortalezas y debilidades 
                      intrínsecas que definen su idoneidad para aplicaciones específicas.
                    </motion.p>

                    {/* Selector de Material */}
                    <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                      <motion.button
                        onClick={() => setSelectedMaterial('silicona')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'silicona'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Silicona
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedMaterial('poliuretano')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'poliuretano'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Poliuretano
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedMaterial('epoxico')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'epoxico'
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        Epóxico
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedMaterial('acrilico')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'acrilico'
                            ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-300'
                        }`}
                      >
                        Acrílico
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedMaterial('hibrido')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedMaterial === 'hibrido'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-300'
                        }`}
                      >
                        Híbrido (MS)
                      </motion.button>
                    </div>

                    {/* Contenido según material seleccionado */}
                    <AnimatePresence mode="wait">
                      {selectedMaterial === 'silicona' && (
                        <motion.div
                          key="silicona"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                            <Droplets className="h-8 w-8" />
                            Selladores de Silicona
                          </h3>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-blue-800 mb-3 text-lg">📖 Descripción</h4>
                            <p className="text-gray-700 leading-relaxed">
                              Los selladores de silicona son <b className="text-blue-700">polímeros inorgánicos basados en una cadena 
                              de silicio-oxígeno (Si-O)</b>. Esta estructura les confiere una flexibilidad y una resistencia ambiental 
                              superiores. Su mecanismo de curado más común es a temperatura ambiente por exposición a la humedad 
                              atmosférica, conocido como <b className="bg-blue-100 px-2 py-1 rounded">RTV (Vulcanizado a Temperatura Ambiente)</b>.
                            </p>
                            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                              <p className="text-sm text-blue-900">
                                <Info className="h-4 w-4 inline mr-2" />
                                Existen dos sistemas de curado principales: el <b>acético</b> (libera ácido acético, olor a vinagre) 
                                y el <b>neutro</b> (olor bajo, compatible con metales sensibles).
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Clave
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Excepcional resistencia a intemperie, UV y ozono</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Amplio rango de temperatura: -60°C a +260°C</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Alta flexibilidad y elasticidad duradera</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Adherencia sobresaliente en vidrio, cerámica y metales</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Limitaciones Críticas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Generalmente NO es pintable</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Adherencia limitada en ciertos plásticos y porosos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Formulaciones acéticas corroen cobre y latón</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-400">
                            <h4 className="font-bold text-green-900 mb-3 text-lg">🏭 Aplicaciones Industriales Típicas</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Sellado de muros cortina (fachadas de vidrio)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Juntas en sistemas HVAC</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Maquinaria expuesta a altas temperaturas</span>
                                </li>
                              </ul>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Encapsulado de componentes electrónicos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Formación de juntas automotrices</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Sellado de hornos y calderas</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedMaterial === 'poliuretano' && (
                        <motion.div
                          key="poliuretano"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300"
                        >
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                            <Construction className="h-8 w-8" />
                            Selladores de Poliuretano (PU)
                          </h3>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-green-800 mb-3 text-lg">📖 Descripción</h4>
                            <p className="text-gray-700 leading-relaxed">
                              Son <b className="text-green-700">polímeros orgánicos</b> conocidos por su notable tenacidad, 
                              resistencia a la abrasión y una fuerza de adhesión formidable. Como elastómeros, forman 
                              <b className="bg-green-100 px-2 py-1 rounded ml-1">uniones permanentes que combinan fuerza y flexibilidad</b>.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-green-200">
                              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Clave
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Resistencia mecánica, abrasión y desgarro superior</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Excepcional adherencia a concreto, mampostería y madera</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Pueden ser lijados y pintados una vez curados</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Capacidad de movimiento: ±25% a ±35%</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Limitaciones Críticas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Susceptible a degradación UV sin protección (pintura)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Contienen isocianatos (requiere precauciones)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Sensible a humedad excesiva y bajas temperaturas</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-400">
                            <h4 className="font-bold text-blue-900 mb-3 text-lg">🏭 Aplicaciones Industriales Típicas</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>Juntas de expansión en pisos de concreto</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>Sellado perimetral de fachadas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>Adhesión de paneles prefabricados</span>
                                </li>
                              </ul>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>Aplicaciones estructurales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>Pegado de parabrisas automotrices</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span>Almacenes, fábricas y estacionamientos</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedMaterial === 'epoxico' && (
                        <motion.div
                          key="epoxico"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300"
                        >
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                            <Wrench className="h-8 w-8" />
                            Selladores y Adhesivos Epóxicos
                          </h3>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-red-800 mb-3 text-lg">📖 Descripción</h4>
                            <p className="text-gray-700 leading-relaxed">
                              Son sistemas de <b className="text-red-700">dos componentes (resina + endurecedor)</b> que, al mezclarse, 
                              inician una reacción química exotérmica que resulta en una "soldadura química". El producto curado es un 
                              <b className="bg-red-100 px-2 py-1 rounded ml-1">plástico termoestable extremadamente rígido y resistente</b>.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Clave
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Resistencia mecánica extrema (compresión, tracción, impacto)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Superior resistencia a solventes, ácidos y álcalis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Adherencia insuperable a concreto y acero</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Completamente impermeable y durable</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-yellow-400">
                              <h4 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Limitaciones Críticas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b className="text-red-700">Material RÍGIDO</b> - Sin capacidad de movimiento elástico</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>NO usar en juntas de expansión (fallará inmediatamente)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Requiere mezcla precisa y tiene tiempo limitado de trabajo</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-400">
                            <h4 className="font-bold text-purple-900 mb-3 text-lg">🏭 Aplicaciones Industriales Típicas</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Anclaje químico</b> de varillas y pernos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span>Fijación de maquinaria pesada en concreto</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span>Reparación estructural de elementos</span>
                                </li>
                              </ul>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span>Adhesión de acero a concreto</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span>Recubrimientos de pisos industriales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span>Tanques y estructuras marinas</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

{selectedMaterial === 'acrilico' && (
                        <motion.div
                          key="acrilico"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-yellow-300"
                        >
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-yellow-900 mb-6 flex items-center gap-3">
                            <Package className="h-8 w-8" />
                            Selladores Acrílicos
                          </h3>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-yellow-800 mb-3 text-lg">📖 Descripción</h4>
                            <p className="text-gray-700 leading-relaxed">
                              Son formulaciones <b className="text-yellow-700">base agua</b> que utilizan resinas acrílicas como aglutinante, 
                              lo que los hace muy fáciles de aplicar y limpiar con agua mientras están frescos. Representan la 
                              <b className="bg-yellow-100 px-2 py-1 rounded ml-1">opción más económica para aplicaciones de bajo movimiento</b>.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-yellow-200">
                              <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Clave
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Extremadamente fácil de usar y aplicar</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Pintable rápidamente (30 minutos o menos)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Bajo olor y bajo contenido de VOC</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Buena adherencia en yeso, madera y mampostería</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Limitaciones Críticas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Capacidad de movimiento MUY limitada</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Tiende a agrietarse en juntas dinámicas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Pobre resistencia al agua y la intemperie</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>NO apto para inmersión o contacto constante con agua</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-400">
                            <h4 className="font-bold text-green-900 mb-3 text-lg">🏭 Aplicaciones Industriales Típicas</h4>
                            <div className="bg-white/70 p-4 rounded-lg">
                              <p className="text-gray-700 mb-3">
                                <b className="text-green-700">Su uso se limita principalmente a aplicaciones interiores</b>, como:
                              </p>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Sellado de grietas estáticas en muros y techos antes de pintar</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Sellado perimetral de marcos de puertas y ventanas (interiores)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Molduras en áreas no expuestas a la humedad</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedMaterial === 'hibrido' && (
                        <motion.div
                          key="hibrido"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                        >
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                            <Zap className="h-8 w-8" />
                            Polímeros Híbridos (MS - Silano Modificado)
                          </h3>

                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                              <Star className="h-5 w-5" />
                              🚀 Tecnología de Próxima Generación
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              Esta tecnología avanzada representa una <b className="text-purple-700">fusión de las mejores características 
                              de las siliconas y los poliuretanos</b>. Combina la excepcional resistencia a la intemperie y la flexibilidad 
                              de la silicona con la fuerte adherencia y la capacidad de ser pintado del poliuretano.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-purple-200">
                              <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas Revolucionarias
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b className="text-green-600">Libres de isocianatos y solventes</b> - Más seguros</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Excelente adherencia a amplia gama de sustratos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Pintables, alta resistencia UV, no amarillean</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b className="text-blue-600">Curan incluso sobre superficies húmedas</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>A menudo sin necesidad de imprimación</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-yellow-400">
                              <h4 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                                <Info className="h-5 w-5" />
                                Consideraciones
                              </h4>
                              <p className="text-sm text-gray-700 mb-3">
                                Como tecnología avanzada, los polímeros MS suelen tener un <b>costo inicial más elevado</b> 
                                que las siliconas o poliuretanos tradicionales.
                              </p>
                              <div className="bg-white p-3 rounded-lg">
                                <p className="text-xs text-gray-600">
                                  Sin embargo, su versatilidad, seguridad y rendimiento superior los hacen una 
                                  <b className="text-purple-700"> excelente inversión a largo plazo</b> para proyectos críticos.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-400">
                            <h4 className="font-bold text-green-900 mb-3 text-lg">🏭 Aplicaciones Industriales en Expansión</h4>
                            <p className="text-gray-700 mb-4">
                              Se están consolidando como la <b className="text-green-700">solución "todo en uno"</b> para:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Sellado de fachadas arquitectónicas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Juntas de construcción exigentes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Aplicaciones marinas</span>
                                </li>
                              </ul>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Industria automotriz</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Proyectos de muy alto rendimiento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Aplicaciones que requieren versatilidad máxima</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-center text-lg font-bold">
                              🌟 El futuro del sellado industrial está aquí 🌟
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>                  {/* Parámetros de Rendimiento Críticos */}
                  <section id="parametros-rendimiento" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        📊 Parámetros de Rendimiento Críticos
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La elección de un sellador no es una decisión de mantenimiento, sino una <b className="text-orange-600">
                      decisión de gestión de activos</b>. Un fallo prematuro puede acarrear costos que exceden con creces 
                      el precio del material.
                    </motion.p>

                    <div className="space-y-8">
                      {/* Capacidad de Movimiento */}
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-blue-200"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">📏</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4">Capacidad de Movimiento (%)</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                              <h4 className="font-bold text-blue-800 mb-2">📖 Definición:</h4>
                              <p className="text-gray-700 leading-relaxed">
                                Este parámetro cuantifica la <b className="text-blue-700">deformación máxima</b> que un sellador puede 
                                soportar sin romperse, expresada como un porcentaje del ancho original de la junta. Un valor de 
                                <b className="bg-blue-100 px-2 py-1 rounded mx-1">±25%</b> indica que el sellador puede expandirse 
                                un 25% y contraerse un 25%, manejando un movimiento total del 50%.
                              </p>
                            </div>
                            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-xl border-2 border-red-300">
                              <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Importancia Industrial:
                              </h4>
                              <p className="text-gray-700">
                                Es el <b className="text-red-700">factor más crítico</b> para juntas de expansión en edificios, 
                                puentes y pisos de concreto, las cuales están sujetas a movimientos constantes por cambios de temperatura 
                                y cargas dinámicas. Un sellador con capacidad inadecuada está destinado a fallar.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Dureza Shore A */}
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-200"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">💪</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-4">Dureza (Shore A)</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                              <h4 className="font-bold text-green-800 mb-2">📖 Definición:</h4>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                Mide la <b className="text-green-700">resistencia a la indentación</b> en una escala de 0 a 100. 
                                Valores más altos corresponden a materiales más duros.
                              </p>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <p className="text-sm text-green-900">
                                  <Info className="h-4 w-4 inline mr-2" />
                                  <b>Referencia:</b> Banda elástica ≈ 25A | Llanta de montacargas ≈ 95A
                                </p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border-2 border-blue-300">
                              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                <Construction className="h-5 w-5" />
                                Importancia Industrial:
                              </h4>
                              <p className="text-gray-700">
                                La dureza está relacionada con la <b className="text-blue-700">resistencia a la abrasión y al punzonamiento</b>. 
                                Para juntas en pisos industriales con tráfico de montacargas, se necesita una dureza más alta (35-40 Shore A) 
                                para resistir el desgaste mecánico.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Tiempos de Curado */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-purple-200"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">⏱️</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4">Tiempos de Curado</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div className="bg-white/70 p-4 rounded-xl">
                                <h4 className="font-bold text-purple-800 mb-2">⏰ Tiempo de Formación de Piel:</h4>
                                <p className="text-sm text-gray-700">
                                  El tiempo hasta que la superficie deja de ser pegajosa al tacto (típicamente 15-60 minutos).
                                </p>
                              </div>
                              <div className="bg-white/70 p-4 rounded-xl">
                                <h4 className="font-bold text-purple-800 mb-2">🕐 Curado Total:</h4>
                                <p className="text-sm text-gray-700">
                                  Tiempo necesario para alcanzar propiedades mecánicas completas (puede ser 24h por cada 3mm de profundidad).
                                </p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-4 rounded-xl border-2 border-yellow-300">
                              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Impacto en Productividad:
                              </h4>
                              <p className="text-gray-700">
                                Estos tiempos tienen un <b className="text-yellow-700">impacto directo en la productividad del proyecto</b>. 
                                Un tiempo de piel rápido minimiza contaminación por polvo y permite pintar antes. El curado total determina 
                                cuándo una junta puede someterse a tráfico o carga.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Resistencia Ambiental */}
                      <motion.div 
                        className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-orange-200"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-orange-500 rounded-2xl p-4 flex-shrink-0">
                            <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🌡️</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-4">Resistencia Ambiental, Química y de Temperatura</h3>
                            <div className="bg-white/70 p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                              <p className="text-gray-700 leading-relaxed">
                                Se refiere a la capacidad del sellador para <b className="text-orange-700">mantener su integridad y propiedades</b> 
                                después de exposición prolongada a factores ambientales como radiación UV, agua, productos químicos 
                                (aceites, solventes, álcalis) y las temperaturas de servicio de la operación.
                              </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                                <h4 className="font-bold text-blue-800 mb-2 text-sm">🌞 Siliconas:</h4>
                                <p className="text-xs text-gray-700">
                                  Mejor resistencia a UV y temperaturas extremas (-60°C a +260°C)
                                </p>
                              </div>
                              <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                                <h4 className="font-bold text-green-800 mb-2 text-sm">⛽ Poliuretanos:</h4>
                                <p className="text-xs text-gray-700">
                                  Buena resistencia a combustibles y aceites industriales
                                </p>
                              </div>
                              <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
                                <h4 className="font-bold text-red-800 mb-2 text-sm">🧪 Epóxicos:</h4>
                                <p className="text-xs text-gray-700">
                                  Máxima resistencia a amplio espectro de químicos agresivos
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Certificaciones */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Shield className="h-8 w-8" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Certificaciones y Normativas Clave en México</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6">
                          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                            <h4 className="font-bold mb-2">🚰 NSF/ANSI 61:</h4>
                            <p className="text-sm">
                              Garantiza seguridad para contacto con agua potable. <b>Requisito indispensable</b> para plantas de 
                              tratamiento, tanques de almacenamiento y sistemas de tuberías de agua potable.
                            </p>
                          </div>
                          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                            <h4 className="font-bold mb-2">🍽️ NSF/ANSI 51:</h4>
                            <p className="text-sm">
                              Certifica seguridad para equipos de procesamiento de alimentos, tanto en zonas de contacto 
                              directo como indirecto con alimentos.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 bg-red-500/30 p-4 rounded-xl border-2 border-red-300">
                          <h4 className="font-bold mb-2">🔥 Resistencia al Fuego (NMX-C-307-ONNCE-2009, ASTM E814):</h4>
                          <p className="text-sm">
                            Evalúan la capacidad de un sistema de sellado para actuar como <b>barrera contra propagación de fuego, 
                            humo y gases tóxicos</b>. Vital para sellar penetraciones en muros cortafuego, garantizando compartimentación 
                            e integridad estructural.
                          </p>
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
                        🏆 Top 6 Selladores Destacados del Mercado Mexicano
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
                            a la información disponible en Mercado Libre al momento de la publicación (4 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - Sika Sikaflex-1a Purform */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥇 #1
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            ALTO DESEMPEÑO INDUSTRIAL
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Sika Sikaflex-1a Purform
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(100+ reseñas) - 4.8/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Juntas estructurales, sistemas de agua potable, construcción industrial de alto rendimiento
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Es un sellador de poliuretano elástico de un solo componente que cura con la humedad del ambiente. 
                          Su característica distintiva es la tecnología <b className="bg-green-100 px-2 py-1 rounded">"Purform" de Sika</b>, 
                          que reduce el contenido de diisocianato monomérico a menos del 0.1%, haciéndolo 
                          <b className="text-green-700"> significativamente más seguro</b> para el aplicador sin comprometer el rendimiento.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            Rendimiento Mecánico Superior
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/70 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-blue-600">Capacidad de movimiento:</b> ±35% (ASTM C719)
                              </p>
                            </div>
                            <div className="bg-white/70 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-blue-600">Elongación a la rotura:</b> 800%
                              </p>
                            </div>
                            <div className="bg-white/70 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-blue-600">Dureza Shore A:</b> 50
                              </p>
                            </div>
                            <div className="bg-white/70 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-blue-600">Tiempo de curado:</b> 3 mm/24h
                              </p>
                            </div>
                          </div>
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
                                <span>Excepcional durabilidad en juntas dinámicas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Adherencia sin imprimación en concreto húmedo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Pintable y resistente a intemperie</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b className="text-green-700">Certificación NSF/ANSI 61</b> para agua potable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Tecnología Purform más segura</span>
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
                                <span>Tiempo de curado más largo que siliconas (160 min para piel)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precio premium comparado con alternativas genéricas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Requiere buena ventilación durante aplicación</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-green-700 mb-2">💰 Rango de Precio: $250 - $350 MXN</p>
                              <p className="text-sm text-gray-600">* Cartucho 300ml - Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/sika-sikaflex-sellador-elastico-poliuretano-1a-300ml-color-negro/p/MLM24156214"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Loctite SI 596 RTV Rojo */}
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
                            ALTAS TEMPERATURAS
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Loctite SI 596 RTV Rojo
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(85+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Motores, cajas de engranajes, bombas, compresores, hornos industriales y calderas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un sellador de silicona de curado acético (RTV) monocomponente, <b className="text-red-700">específicamente 
                          formulado para aplicaciones de alta temperatura</b> y para la formación de juntas "in situ" directamente 
                          sobre las bridas de la maquinaria. Su color rojo característico facilita la inspección visual.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-yellow-300">
                          <h4 className="font-bold text-yellow-900 mb-3 text-lg flex items-center gap-2">
                            <Flame className="h-6 w-6" />
                            Resistencia Térmica Extrema
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/70 p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-red-600">Servicio continuo:</b> Hasta 260°C (500°F)
                              </p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-orange-600">Picos intermitentes:</b> Hasta 316°C (600°F)
                              </p>
                            </div>
                          </div>
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
                                <span>Resistencia térmica excepcional (-60°C a +260°C)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Forma sello flexible que no se encoge ni agrieta</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Resistente a aceites y fluidos automotrices</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Consistencia tixotrópica (no escurre en vertical)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Cumple especificación militar Mil-A-46106A</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-yellow-400">
                            <h4 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Contras
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b className="text-red-700">No es pintable</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Curado acético (libera ácido acético - olor a vinagre)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Puede corroer cobre y latón</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No recomendado para contacto directo con gasolina</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">💰 Rango de Precio: $80 - $120 MXN</p>
                              <p className="text-sm text-gray-600">* Tubo 70ml - Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-2120536951-silicon-alta-temp-formador-juntas-rtv-rojo-70-ml-loctite-596-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Sika AnchorFix-2+ Tropical */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-purple-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-purple-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥉 #3
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 font-bold">
                            ANCLAJES ESTRUCTURALES
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Sika AnchorFix-2+ Tropical
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
                            <strong>🎯 Ideal para:</strong> Anclaje de varillas de refuerzo, fijación de maquinaria pesada, barandales, racks y estructuras metálicas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un adhesivo de anclaje de dos componentes a base de <b className="text-purple-700">resina epoxi-acrilato</b>, 
                          libre de estireno y solventes. La designación "Tropical" indica que está formulado para un 
                          <b className="bg-purple-100 px-2 py-1 rounded mx-1">curado óptimo en climas cálidos</b>, como los de México, 
                          y está diseñado para soportar cargas medias a altas.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                            <Wrench className="h-6 w-6" />
                            Alto Rendimiento Estructural
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/70 p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-green-600">Curado rápido:</b> Resistencia funcional en 40 min a 25°C
                              </p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                              <p className="text-sm text-gray-700">
                                <b className="text-green-600">Versatilidad:</b> Concreto fisurado y no fisurado, mampostería
                              </p>
                            </div>
                          </div>
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
                                <span>Alta capacidad de carga estructural</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Curado rápido permite puesta en servicio temprana</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Formulación "Tropical" optimizada para México</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Consistencia tixotrópica para aplicaciones verticales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Cartucho automezclable asegura proporción correcta</span>
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
                                <span>Requiere pistola de calafateo de doble émbolo especializada</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b className="text-red-700">Completamente rígido</b> - Sin capacidad de movimiento</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No usar en juntas de expansión</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Rango de Precio: $400 - $550 MXN</p>
                              <p className="text-sm text-gray-600">* Cartucho 300ml - Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/sika-anchorfix2-tropical-adhesivo-para-anclajes-300-ml/up/MLMU562396917"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>                      {/* Producto #4 - DAP Alex Plus */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            ⭐ #4
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            MEJOR ACRÍLICO PINTABLE
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          DAP Alex Plus (Acrílico con Silicona)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(880+ reseñas en HD México) - 4.1/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Sellado de juntas interiores, grietas para pintar, marcos de puertas/ventanas, molduras
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un sellador de <b className="text-blue-700">látex acrílico mejorado con aditivos de silicona</b> para mayor 
                          flexibilidad y adhesión. Está diseñado como un producto de uso general para interiores y exteriores, con un 
                          enfoque principal en ser <b className="bg-blue-100 px-2 py-1 rounded">pintable rápidamente</b>.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                            <Zap className="h-6 w-6" />
                            Velocidad de Acabado Profesional
                          </h4>
                          <div className="bg-white/70 p-4 rounded-lg">
                            <p className="text-gray-700">
                              Su principal ventaja es que <b className="text-green-700">se puede pintar en solo 30 minutos</b> con pinturas 
                              base látex o aceite, acelerando significativamente los proyectos de acabado. Es muy fácil de aplicar, alisar y 
                              limpiar con agua mientras está fresco.
                            </p>
                          </div>
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
                                <span><b className="text-blue-600">Pintable en 30 minutos</b> - Máxima rapidez</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Extremadamente fácil de aplicar y limpiar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Flexibilidad mejorada vs. acrílicos convencionales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Menor encogimiento que acrílicos puros</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Producto de volumen masivo muy popular</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Limitaciones
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b className="text-red-700">NO para juntas de alto movimiento</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No apto para inmersión constante en agua</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Durabilidad inferior a poliuretanos/siliconas en exteriores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>No usar en duchas, piscinas o áreas de alta humedad</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Rango de Precio: $80 - $120 MXN</p>
                              <p className="text-sm text-gray-600">* Cartucho 162ml - Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/sellador-acrilico-siliconado-pintable-grietas-alex-plus-dap-color-blanco/p/MLM25204286"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - DOWSIL 732 */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🏆 #5
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            CERTIFICACIÓN ALIMENTICIA
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          DOWSIL 732 Multi-Purpose Sealant
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.4) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Calificaciones variables por vendedor)</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Industria alimentaria, cámaras frigoríficas, sellado de equipos de procesamiento, aplicaciones MRO
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un sellador de silicona de <b className="text-teal-700">curado acético (RTV) de un componente</b>, reconocido como 
                          un estándar de la industria para aplicaciones de sellado y adhesión industrial de propósito general. Es fabricado 
                          por DOW (anteriormente Dow Corning), líder global en tecnología de siliconas.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Certificación para Contacto con Alimentos
                          </h4>
                          <div className="bg-white/70 p-4 rounded-lg">
                            <p className="text-gray-700 mb-3">
                              Cumple con la norma <b className="text-green-700">FDA 21 CFR 177.2600</b>, que lo hace apto para 
                              <b className="bg-green-100 px-2 py-1 rounded mx-1">contacto incidental con alimentos</b>, un requisito 
                              clave en la industria alimentaria y de bebidas.
                            </p>
                            <div className="bg-green-50 p-3 rounded-lg">
                              <p className="text-sm text-green-900">
                                <Info className="h-4 w-4 inline mr-2" />
                                También cumple con especificación militar <b>MIL-A-46106</b>, demostrando su fiabilidad
                              </p>
                            </div>
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
                                <span><b className="text-teal-600">Certificación FDA</b> para contacto con alimentos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Buena adherencia a amplia variedad de sustratos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Rango de temperatura: -45°C a +180°C</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Dureza Shore A: 25 (flexible y resistente)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Marca DOW con reputación global</span>
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
                                <span>Curado acético (fuerte olor a vinagre)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Puede causar corrosión en metales reactivos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b className="text-red-700">No es pintable</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Disponibilidad variable en Mercado Libre</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Rango de Precio: Variable</p>
                              <p className="text-sm text-gray-600">* Buscar en Mercado Libre - Precio varía por vendedor</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/silicon-dow-corning-732"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Buscar en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Pennsylvania Duretán */}
                      <motion.div 
                        className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-amber-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-amber-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💪 #6
                          </Badge>
                          <Badge className="bg-amber-100 text-amber-800 px-4 py-2 font-bold">
                            FAVORITO LOCAL MEXICANO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Pennsylvania Duretán
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Muy popular en ML) - 4.8/5 promedio</span>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-xl mb-6">
                          <p className="text-amber-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Juntas de construcción general, pisos industriales, marcos de puertas/ventanas, losas de concreto
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un sellador de <b className="text-amber-700">poliuretano de un solo componente</b>, ampliamente utilizado en la 
                          construcción en México para el sellado de juntas tanto verticales como horizontales. Es conocido por su 
                          <b className="bg-amber-100 px-2 py-1 rounded mx-1">disponibilidad en una amplia gama de colores</b> y su 
                          excelente relación calidad-precio.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            Fuerte Presencia en el Mercado Mexicano
                          </h4>
                          <div className="bg-white/70 p-4 rounded-lg">
                            <p className="text-gray-700">
                              Es un producto <b className="text-green-700">reconocido y fácilmente disponible en México</b>, conocido por 
                              ofrecer una durabilidad confiable a un precio competitivo. Su popularidad se debe a décadas de presencia en 
                              el mercado de la construcción nacional.
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Excelente relación calidad-precio</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Muy fácil de encontrar en México</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Pintable para acabados estéticos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Disponible en múltiples colores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Formatos de 300ml y 600ml (salchicha)</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Limitaciones
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Susceptible a degradación UV sin pintar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Documentación técnica menos detallada que marcas globales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Parámetros específicos (Shore A, movimiento) no siempre publicados</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-amber-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-amber-700 mb-2">💰 Rango de Precio: $150 - $250 MXN</p>
                              <p className="text-sm text-gray-600">* Variable por color y formato - Ver precio actual en la plataforma</p>
                            </div>
                            <a 
                              href="https://listado.mercadolibre.com.mx/sellador-duretan"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Buscar en Mercado Libre →
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
                      title="Análisis Comparativo: Los 3 Selladores Mejor Valorados"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />
                  </section>

                  {/* Guía de Compra Rápida por Aplicación */}
                  <section id="guia-compra" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        🛒 Guía de Compra Rápida por Aplicación
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Los profesionales industriales no buscan un producto químico, sino una <b className="text-orange-600">solución 
                      a un problema específico</b>. Esta guía traduce los datos técnicos en recomendaciones directas.
                    </motion.p>

                    <div className="space-y-8">
                      {/* Juntas de Expansión */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 rounded-2xl p-4 flex-shrink-0">
                            <Construction className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4">
                              Si necesita sellar JUNTAS DE EXPANSIÓN EN PISOS Y FACHADAS
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">(Alto movimiento y exposición a la intemperie)</p>
                            
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-blue-700">Recomendación:</b> La elección debe centrarse en un sellador de 
                                <b> Poliuretano o Polímero Híbrido (MS)</b> que ofrezca una alta capacidad de movimiento 
                                (igual o superior a ±25%) y una dureza Shore A adecuada para el tipo de tráfico (30-40 para pisos).
                              </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                                <h4 className="font-bold text-green-800 mb-2">🏆 Opción Premium:</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                  <b>Sika Sikaflex-1a Purform</b> - Rendimiento documentado y certificaciones que avalan su 
                                  durabilidad en condiciones más exigentes.
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl border-2 border-amber-300">
                                <h4 className="font-bold text-amber-800 mb-2">💰 Alternativa Costo-Efectiva:</h4>
                                <p className="text-sm text-gray-700">
                                  <b>Pennsylvania Duretán</b> - Popular en México, ampliamente utilizado para juntas de construcción general.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Alta Temperatura */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-red-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-red-500 rounded-2xl p-4 flex-shrink-0">
                            <Flame className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-4">
                              Si necesita formar JUNTAS EN MAQUINARIA, MOTORES O SISTEMAS DE ALTA TEMPERATURA
                            </h3>
                            
                            <div className="bg-red-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-red-700">Recomendación:</b> La única tecnología adecuada para esta tarea es una 
                                <b> Silicona RTV para Altas Temperaturas</b>. Es crucial verificar el rango de temperatura de servicio 
                                continuo e intermitente para asegurar que cumple con los requisitos de la operación.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-xl border-2 border-red-300">
                              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                                <Star className="h-5 w-5" />
                                Producto Sugerido:
                              </h4>
                              <p className="text-gray-700">
                                <b>Loctite SI 596 RTV Rojo</b> - Específicamente formulado para este propósito, resistiendo 
                                temperaturas de hasta 260°C continuos y el contacto con fluidos como el aceite. Productos similares 
                                de marcas como Truper o Permatex también son opciones comunes disponibles en el canal automotriz y ferretero.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Anclajes Estructurales */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-purple-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 rounded-2xl p-4 flex-shrink-0">
                            <Wrench className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4">
                              Si necesita realizar ANCLAJES ESTRUCTURALES
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">(Fijar varillas, pernos, maquinaria pesada)</p>
                            
                            <div className="bg-purple-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-purple-700">Recomendación:</b> Para esta aplicación <b className="text-red-700">
                                crítica de seguridad</b>, se debe utilizar un <b>adhesivo Epóxico de dos componentes</b>. Estos productos 
                                no son selladores elásticos, sino adhesivos rígidos de ultra alta resistencia diseñados para transferir cargas estructurales.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300">
                              <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                                <Star className="h-5 w-5" />
                                Producto Sugerido:
                              </h4>
                              <p className="text-gray-700 mb-3">
                                <b>Sika AnchorFix-2+ Tropical</b> - Diseñado para anclajes de alta carga en concreto, incluso si está 
                                fisurado, y su formulación "Tropical" asegura un curado fiable en los climas cálidos de México.
                              </p>
                              <div className="bg-white/70 p-3 rounded-lg">
                                <p className="text-sm text-purple-800">
                                  <Info className="h-4 w-4 inline mr-2" />
                                  La familia Sika AnchorFix ofrece una gama de productos para diferentes niveles de carga y tiempos de curado.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Grietas Pintables */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-green-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 rounded-2xl p-4 flex-shrink-0">
                            <Package className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-4">
                              Si necesita sellar GRIETAS Y JUNTAS INTERIORES QUE SERÁN PINTADAS
                            </h3>
                            
                            <div className="bg-green-50 p-4 rounded-xl mb-4">
                              <p className="text-gray-700">
                                <b className="text-green-700">Recomendación:</b> Un <b>Sellador Acrílico o Acrílico Siliconizado</b> 
                                es la opción más eficiente y económica. Están diseñados específicamente para ser pintados rápidamente 
                                y son fáciles de aplicar y limpiar.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                <Star className="h-5 w-5" />
                                Producto Sugerido:
                              </h4>
                              <p className="text-gray-700">
                                <b>DAP Alex Plus</b> - El líder en esta categoría, destacando por su capacidad de ser pintado en solo 
                                30 minutos y por su flexibilidad mejorada gracias a la adición de silicona. Otras opciones populares en 
                                el mercado mexicano incluyen productos de Sista, Cemex y Truper.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Industria Alimentaria */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-teal-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-500 rounded-2xl p-4 flex-shrink-0">
                            <Shield className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-900 mb-4">
                              Si trabaja en la INDUSTRIA ALIMENTARIA O SISTEMAS DE AGUA POTABLE
                            </h3>
                            
                            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-4 rounded-xl mb-4">
                              <p className="text-gray-800 font-semibold">
                                <AlertTriangle className="h-5 w-5 inline mr-2 text-yellow-600" />
                                <b className="text-red-700">Es MANDATORIO</b> utilizar un sellador que cuente con la certificación 
                                adecuada para garantizar la seguridad y el cumplimiento normativo.
                              </p>
                            </div>

                            <div className="bg-teal-50 p-4 rounded-xl mb-4">
                              <h4 className="font-bold text-teal-800 mb-2">🔍 Busque productos con:</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Certificación NSF/ANSI 61</b> para agua potable</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                  <span><b>NSF 51 / FDA 177.2600</b> para contacto incidental con alimentos</span>
                                </li>
                              </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl border-2 border-blue-300">
                                <h4 className="font-bold text-blue-800 mb-2">🍽️ Procesamiento de Alimentos:</h4>
                                <p className="text-sm text-gray-700">
                                  <b>DOWSIL 732</b> - Estándar en la industria para sellado general en áreas de procesamiento, 
                                  gracias a su cumplimiento con la norma FDA.
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                                <h4 className="font-bold text-green-800 mb-2">🚰 Tanques de Agua Potable:</h4>
                                <p className="text-sm text-gray-700">
                                  <b>Sikaflex-1a Purform</b> - Opción ideal debido a su certificación NSF/ANSI 61 específica 
                                  para contacto con agua potable.
                                </p>
                              </div>
                            </div>
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
                        ❓ Preguntas Frecuentes para Profesionales
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
                            className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all flex items-center justify-between gap-4"
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
                        🎯 Conclusión: Elija con Inteligencia, Selle con Confianza
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Beaker className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            La elección del sellador industrial adecuado se reduce a una simple premisa: 
                            <b className="text-green-700"> adaptar la química del producto a la exigencia de la aplicación</b>. 
                            Como hemos visto, no existe un "mejor sellador universal", sino el sellador 
                            <b className="bg-green-100 px-2 py-1 rounded mx-1">"correcto" para cada junta específica</b>.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Ya sea que la prioridad sea la flexibilidad ante el clima, la resistencia al tráfico pesado o el 
                            cumplimiento de normativas sanitarias, la clave es <b>entender las propiedades fundamentales de cada tecnología</b>.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 sm:p-4 md:p-6 mt-8">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Alto Rendimiento</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Sika Sikaflex-1a Purform</b> - Tecnología avanzada con certificaciones que garantizan 
                            rendimiento y seguridad en aplicaciones críticas.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-red-200">
                          <div className="text-center mb-4">
                            <Flame className="h-10 w-10 mx-auto text-red-600 mb-2" />
                            <h3 className="text-lg font-bold text-red-900">Mejor Alta Temperatura</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Loctite SI 596 RTV</b> - La solución especializada para motores, bombas y sistemas 
                            expuestos a temperaturas extremas.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Wrench className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Estructural</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Sika AnchorFix-2+ Tropical</b> - El adhesivo epóxico de confianza para anclajes 
                            de alta carga en condiciones tropicales.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Antes de su Próxima Compra</h3>
                      </div>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                          <span>Consulte siempre la <b>ficha técnica del producto (TDS)</b></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                          <span>Evalúe las <b>condiciones de servicio específicas</b> de su aplicación</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                          <span>Utilice esta guía como su <b>referencia técnica</b> para garantizar un sellado duradero, seguro y rentable</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-4 sm:p-6 md:p-8 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="h-8 w-8 text-purple-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900">Visión a Futuro</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Mientras que las siliconas y los poliuretanos siguen siendo los pilares del sellado industrial, 
                        el futuro apunta hacia <b className="text-purple-700">tecnologías híbridas como los polímeros MS 
                        (Silano Modificado)</b>. Estos productos, que combinan lo mejor de ambos mundos sin sus desventajas 
                        intrínsecas —libres de isocianatos, pintables y resistentes a los rayos UV—, representan la próxima 
                        evolución en rendimiento y seguridad.
                      </p>
                      <p className="text-gray-700 leading-relaxed font-semibold">
                        Mantenerse informado sobre estas innovaciones será clave para optimizar la 
                        <b className="bg-purple-100 px-2 py-1 rounded mx-1">fiabilidad y sostenibilidad</b> 
                        de las instalaciones industriales en México en los años venideros.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-blue-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        🔧 La unión perfecta es aquella que resiste el tiempo
                      </p>
                      <p className="text-lg text-blue-800 font-semibold">
                        Selle con precisión técnica, confíe en la química correcta
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