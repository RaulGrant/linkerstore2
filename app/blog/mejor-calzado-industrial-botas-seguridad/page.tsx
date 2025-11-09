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
  Footprints,
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
  HardHat,
  ShieldAlert,
  Activity,
  Target
} from 'lucide-react';
import { useState } from 'react';

export default function CalzadoSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCasquillo, setSelectedCasquillo] = useState<'acero' | 'policarbonato' | 'composite'>('policarbonato');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'caterpillar-second',
      name: 'Caterpillar Second Shift Steel Toe',
      rating: 5.0,
      reviewCount: 3,
      isRecommended: true,
      bestFor: 'Construcción y Trabajo Rudo',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-2132681711-botas-caterpillar-second-shift-wp-steel-toe-p91660-_JM'
    },
    {
      id: 'berrendo-3017',
      name: 'Berrendo 3017 Biotech Dieléctricas',
      rating: 4.7,
      reviewCount: 266,
      isRecommended: true,
      bestFor: 'Electricistas y Mantenimiento',
      amazonLink: 'https://mercadolibre.com/sec/2VaKvc7'
    },
    {
      id: 'puma-p664',
      name: 'Puma Safety P664 Dieléctrico',
      rating: 4.9,
      reviewCount: 79,
      isRecommended: false,
      bestFor: 'Diseño Deportivo Moderno',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-2669668266-tenis-de-seguridad-puma-safety-p664-dielectrico-para-hombre-_JM'
    }
  ];

  const comparisonFeatures = [
    { name: 'Material del Casquillo', product1: 'Acero', product2: 'Policarbonato', product3: 'Fibra de Vidrio' },
    { name: 'Protección Dieléctrica', product1: 'Sí (EH Rated)', product2: 'Sí (NOM Tipo III)', product3: 'Sí (NOM Tipo III)' },
    { name: 'Construcción', product1: 'Goodyear Welt', product2: 'Inyección Directa', product3: 'Microfibra Textil' },
    { name: 'Material Principal', product1: 'Piel de Grano Completo', product2: 'Piel Napa', product3: 'Microfibra Textil' },
    { name: 'Tipo de Suela', product1: 'Goma Industrial', product2: 'Hule Vulcanizado', product3: 'TPU Effectfoam' },
    { name: 'Resistente a Aceites', product1: true, product2: true, product3: true },
    { name: 'Impermeable', product1: 'Sí (WP)', product2: 'No', product3: 'No' },
    { name: 'Certificación NOM-113', product1: 'Internacional', product2: 'Sí', product3: 'Sí' }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
      title: 'Los Mejores Overoles de Trabajo para México 2025',
      excerpt: 'Guía definitiva: Materiales, normativas y los 6 productos más destacados.',
      description: 'Guía definitiva: Materiales, normativas y los 6 productos más destacados.',
      category: 'EPP',
      publishDate: '3 Oct 2025',
      readTime: '22 min',
      image: '/images/overoles-trabajo.jpg',
      slug: 'guia-completa-mejores-overoles-trabajo-2025'
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
      question: '¿Qué es mejor, casquillo de acero o de policarbonato/composite?',
      answer: 'No existe una opción que sea "mejor" en todos los casos; la elección depende del tipo de trabajo. El casquillo de acero ofrece la máxima resistencia al impacto y al corte, y generalmente es más económico. Es la opción tradicional para trabajos de alto riesgo como la construcción pesada o la demolición. Sus desventajas son su mayor peso y su capacidad para conducir el calor y el frío. Por otro lado, el casquillo de policarbonato o composite es significativamente más ligero (hasta un 50% más ligero), lo que reduce la fatiga. Además, no conduce la temperatura ni la electricidad, siendo la opción obligatoria para electricistas y más cómoda en climas extremos. Tampoco activa detectores de metales. Una ventaja de seguridad importante es que, tras un impacto, tiende a recuperar su forma, disminuyendo el riesgo de que los dedos queden atrapados, a diferencia del acero que puede deformarse permanentemente.'
    },
    {
      question: '¿Qué significa que una bota sea dieléctrica?',
      answer: 'Una bota dieléctrica es un equipo de protección personal diseñado específicamente para aislar al usuario del suelo y protegerlo contra un choque eléctrico. Está fabricada con materiales no conductores que impiden que una corriente eléctrica peligrosa circule a través del cuerpo en caso de un contacto accidental con una fuente energizada. Es fundamental no confundirla con el calzado antiestático, cuyo propósito es el contrario: disipar la electricidad estática de forma controlada para prevenir chispas en entornos inflamables. En México, el calzado dieléctrico está clasificado como Tipo III según la NOM-113-STPS-2009, y debe resistir tensiones de hasta 14,000 voltios.'
    },
    {
      question: '¿Cuál es la norma (NOM) que regula el calzado de seguridad en México?',
      answer: 'La norma principal que regula el calzado de seguridad en México es la NOM-113-STPS-2009, "Seguridad-Equipo de protección personal-Calzado de protección-Clasificación, especificaciones y métodos de prueba". Esta Norma Oficial Mexicana, emitida por la Secretaría del Trabajo y Previsión Social (STPS), es la que establece los requisitos técnicos, las clasificaciones de protección (Tipo I, II, III, etc.) y los métodos de prueba que todo calzado de seguridad debe cumplir para ser comercializado en el territorio nacional. Buscar productos que certifiquen su cumplimiento con esta norma garantiza que han sido evaluados y aprobados para resistir los riesgos específicos para los que fueron diseñados.'
    },
    {
      question: '¿Cada cuánto tiempo debo reemplazar mis botas de seguridad?',
      answer: 'En México, la normativa (NOM-017-STPS-2008) no establece un plazo fijo y obligatorio para el reemplazo; el criterio principal es funcional. El equipo de protección personal debe ser sustituido cuando presente daños, desgaste o pérdida de sus propiedades de protección. Sin embargo, en la práctica industrial, se recomienda reemplazar el calzado de seguridad cada 6 a 12 meses en trabajos de uso intensivo y en entornos exigentes como la construcción o la minería. Para trabajos más ligeros, la vida útil puede extenderse. Es crucial reemplazar las botas inmediatamente si la suela está visiblemente desgastada, agrietada o despegada, si el casquillo protector presenta abolladuras o está expuesto, o si el material del corte tiene cortes profundos. Además, después de un accidente grave, como la caída de un objeto pesado sobre la puntera, la bota debe ser desechada y reemplazada, incluso si no muestra daños visibles, ya que su integridad estructural pudo haberse comprometido.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema calzado/protección */}
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

            {/* Iconos de zapatos flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`shoe-${i}`}
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
                <Footprints className="w-6 h-6" />
              </motion.div>
            ))}

            {/* Ondas de protección (40 ondas) */}
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
                <Footprints className="h-4 w-4" />
                👷 Calzado de Protección Personal
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                El Mejor Calzado de Seguridad Industrial para México 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva: Normativas NOM-113, tipos de protección y los 7 mejores productos
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-blue-200"
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
            {/* Partículas de fondo */}
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
                          <Footprints className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3">👷 La Base de tu Seguridad: Tus Pies</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            En cualquier jornada laboral, tus pies son <strong className="text-blue-600">la base de todo</strong>: 
                            soportan tu peso, te mueven por terrenos difíciles y son la primera línea de defensa contra innumerables 
                            riesgos. Protegerlos no es una opción, <b className="bg-blue-100 px-2 py-1 rounded">es una inversión fundamental</b> 
                            en tu seguridad, tu salud y tu productividad.
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
                      Elegir el <b>calzado industrial correcto</b> puede ser la decisión más importante que tomes para tu bienestar 
                      en el trabajo. Desde la <b className="text-blue-600">robustez necesaria en la construcción</b> hasta la 
                      <b className="text-blue-600"> protección aislante crucial para un electricista</b>, cada entorno exige 
                      características específicas.
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-green-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">Tu Guía Definitiva para 2025</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        En esta guía hemos investigado y analizado el mercado mexicano para ayudarte a dar cada paso con total 
                        confianza. Desde entender la <b>NOM-113-STPS-2009</b> hasta comparar los mejores modelos disponibles, 
                        te equiparemos con el conocimiento necesario para hacer la <b className="text-green-700">elección perfecta</b>.
                      </p>
                    </motion.div>
                  </section>

                  {/* Normatividad NOM-113 */}
                  <section id="normatividad" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ⚖️ La NOM-113-STPS-2009: Tu Punto de Partida
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-400 p-4 sm:p-6 md:p-8 rounded-2xl mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-10 w-10 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-900 mb-3">⚠️ No Es Solo Cumplimiento, Es Tu Protección</h3>
                          <p className="text-gray-800 leading-relaxed mb-4">
                            La base para cualquier decisión de compra de calzado de protección en México es el cumplimiento de la 
                            <span className="bg-yellow-200 px-2 py-1 rounded font-semibold"> NOM-113-STPS-2009</span>. 
                            Adquirir calzado certificado bajo esta norma no es solo una medida de seguridad personal, sino también 
                            <b> una obligación legal</b> para las empresas.
                          </p>
                          <p className="text-gray-800 leading-relaxed font-semibold">
                            El incumplimiento puede derivar en sanciones durante inspecciones de la Secretaría del Trabajo y 
                            Previsión Social (STPS).
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      La norma clasifica el calzado en diferentes <b>tipos según la protección</b> que ofrecen. Los más relevantes 
                      para el entorno industrial son:
                    </motion.p>

                    {/* Tipos de Calzado según NOM-113 */}
                    <div className="grid md:grid-cols-2 gap-3 mb-4 sm:mb-6 md:mb-8">
                      {/* Tipo II */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-xl border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-blue-900">Tipo II - Con Puntera de Protección</h3>
                            <p className="text-gray-600 text-sm">La categoría más común</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Diseñado para proteger los dedos de los pies contra riesgos de <b className="text-blue-700">impacto</b> 
                          (energía de al menos 101.7 J) y <b className="text-blue-700">compresión</b> (carga de al menos 11.3 kN).
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">
                            ✓ Base para la mayoría del calzado industrial
                          </p>
                        </div>
                      </motion.div>

                      {/* Tipo III */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-xl border-l-8 border-yellow-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <Zap className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-yellow-900">Tipo III - Dieléctrico</h3>
                            <p className="text-gray-600 text-sm">Esencial para electricistas</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Aísla al usuario del suelo para protegerlo contra <b className="text-yellow-700">choques eléctricos</b>, 
                          debiendo resistir tensiones de hasta <b>14,000 voltios</b>.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <p className="text-sm text-yellow-800">
                            ⚡ Obligatorio para personal que trabaja cerca de circuitos energizados
                          </p>
                        </div>
                      </motion.div>

                      {/* Tipo VI */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-xl border-l-8 border-red-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <ShieldAlert className="h-8 w-8 text-red-600 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-red-900">Tipo VI - Resistente a la Penetración</h3>
                            <p className="text-gray-600 text-sm">Indispensable en construcción</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Protege la planta del pie contra <b className="text-red-700">objetos punzocortantes</b> como clavos o 
                          vidrios, con entresuela reforzada que resiste hasta <b>1,200 Newtons</b>.
                        </p>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-sm text-red-800">
                            🔨 Vital para construcción, reciclaje o manejo de escombros
                          </p>
                        </div>
                      </motion.div>

                      {/* Tipo VII */}
                      <motion.div 
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-xl border-l-8 border-purple-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <Activity className="h-8 w-8 text-purple-600 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-purple-900">Tipo VII - Antiestático</h3>
                            <p className="text-gray-600 text-sm">Para atmósferas inflamables</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Disipa de forma controlada la <b className="text-purple-700">electricidad estática</b> acumulada en el cuerpo 
                          para evitar chispas en atmósferas inflamables o dañar componentes electrónicos sensibles.
                        </p>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-sm text-purple-800">
                            ⚠️ NO confundir con dieléctrico - propósito opuesto
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Advertencia sobre Certificación */}
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">🚨 Riesgo del Comprador No Informado</h3>
                      </div>
                      <p className="leading-relaxed text-lg mb-4">
                        Muchas marcas de alto volumen y bajo costo que dominan las plataformas de e-commerce pueden:
                      </p>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">!</span>
                          <span>Omitir la certificación NOM-113</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">!</span>
                          <span>Mencionar solo estándares internacionales</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">!</span>
                          <span>Declarar que son para "uso laboral" pero NO para "seguridad industrial"</span>
                        </li>
                      </ul>
                      <div className="mt-6 bg-white/20 p-4 rounded-xl">
                        <p className="text-xl font-bold text-center">
                          ✓ La verificación activa de la NOM-113 es tu PRIMER y MÁS CRÍTICO filtro de compra
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* El Escudo del Pie: Tipos de Casquillo */}
                  <section id="tipos-casquillo" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🛡️ El Escudo del Pie: Tipos de Casquillo
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      El casquillo es el componente que brinda la <b className="text-purple-600">protección contra impacto y compresión</b>. 
                      La elección del material tiene un impacto directo en el peso, la comodidad y la idoneidad del calzado.
                    </motion.p>

                    {/* Selector de Tipo de Casquillo */}
                    <div className="flex justify-center gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 flex-wrap">
                      <motion.button
                        onClick={() => setSelectedCasquillo('acero')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedCasquillo === 'acero'
                            ? 'bg-gradient-to-r from-gray-600 to-slate-600 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-500'
                        }`}
                      >
                        Acero
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedCasquillo('policarbonato')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedCasquillo === 'policarbonato'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Policarbonato
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedCasquillo('composite')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedCasquillo === 'composite'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        Composite
                      </motion.button>
                    </div>

                    {/* Contenido según tipo de casquillo */}
                    <AnimatePresence mode="wait">
                      {selectedCasquillo === 'acero' && (
                        <motion.div
                          key="acero"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-gray-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-gray-600 rounded-xl">
                              <Construction className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Casquillo de Acero</h3>
                              <p className="text-gray-600">El material tradicional y más común</p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Protección excepcional</b> contra impactos severos y cortes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Costo accesible</b> - generalmente más económico</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Alta resistencia</b> y durabilidad comprobada</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Desventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>El más pesado</b> - aumenta la fatiga</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Conduce calor y frío</b> al pie (incómodo en climas extremos)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Conduce electricidad</b> - NO usar en trabajos eléctricos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Activa detectores de metales</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Puede deformarse</b> permanentemente tras impacto fuerte</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gray-100 p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="text-gray-800 font-bold text-center">
                              🎯 <b>Ideal para:</b> Construcción pesada, demolición, trabajos de alto riesgo mecánico
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedCasquillo === 'policarbonato' && (
                        <motion.div
                          key="policarbonato"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-blue-500 rounded-xl">
                              <Zap className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2">Casquillo de Policarbonato</h3>
                              <p className="text-gray-600">La alternativa moderna no metálica</p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Hasta 50% más ligero</b> que el acero - reduce fatiga significativamente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>NO conduce electricidad</b> - INDISPENSABLE para electricistas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>NO conduce temperatura</b> - más cómodo en climas extremos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>NO activa detectores de metales</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Memoria de forma</b> - tiende a recuperarse tras impacto</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Desventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Precio más elevado</b> que el acero</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Puede ser menos resistente a cortes que el acero</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-400">
                            <p className="text-blue-900 font-bold text-center text-lg mb-2">
                              ⚡ <b>Ideal para:</b> Electricistas, personal de logística, supervisores con largas caminatas
                            </p>
                            <p className="text-blue-800 text-center">
                              La opción SUPERIOR para trabajos eléctricos y entornos con detectores de metales
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedCasquillo === 'composite' && (
                        <motion.div
                          key="composite"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-green-500 rounded-xl">
                              <Shield className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-2">Casquillo Composite (Fibra de Vidrio/Kevlar)</h3>
                              <p className="text-gray-600">La opción de alto rendimiento</p>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <p className="text-gray-700 leading-relaxed">
                              Los casquillos composite combinan <b className="text-green-700">múltiples materiales avanzados</b> 
                              como fibra de vidrio, Kevlar o fibra de carbono. Representan la <b>evolución tecnológica</b> del 
                              calzado de seguridad, ofreciendo propiedades similares al policarbonato con características adicionales.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 mb-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Ventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Extremadamente ligero</b> - similar o superior al policarbonato</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Todas las ventajas del policarbonato</b> (no metálico, no conductor)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Mayor resistencia a la perforación</b> en algunos casos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Excelente relación resistencia/peso</b></span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200">
                              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Desventajas
                              </h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span><b>Precio premium</b> - generalmente el más costoso</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Menor disponibilidad en algunos mercados</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-400">
                            <p className="text-green-900 font-bold text-center text-lg">
                              🏆 <b>Ideal para:</b> Trabajadores que priorizan máximo confort, profesionales móviles, 
                              trabajos de precisión que requieren agilidad
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Recomendación Práctica */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">💡 Recomendación Práctica</h3>
                      </div>
                      <p className="leading-relaxed text-lg">
                        Alinea el material del casquillo con tu actividad laboral:
                      </p>
                      <ul className="space-y-3 text-lg mt-4">
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">✓</span>
                          <span><b>Acero:</b> Construcción pesada, demolición, alto riesgo mecánico</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">✓</span>
                          <span><b>Policarbonato/Composite:</b> Electricistas, logística, supervisores con largas caminatas, paso por detectores de metales</span>
                        </li>
                      </ul>
                    </motion.div>
                  </section>

                  {/* La Conexión con el Suelo: Tipos de Suela */}
                  <section id="tipos-suela" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        👟 La Conexión con el Suelo: Tipos de Suela
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La suela es el <b className="text-orange-600">punto de contacto con el entorno</b> y su diseño es crucial 
                      para la estabilidad y protección.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                      {/* Propiedades de la Suela */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-orange-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-6">🛡️ Propiedades Clave</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-bold text-orange-800 mb-2">Suela Antiderrapante</h4>
                            <p className="text-sm text-gray-700">
                              Fundamental para prevenir caídas en superficies húmedas, aceitosas o resbaladizas. 
                              La eficacia depende del material Y del diseño del labrado.
                            </p>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-800 mb-2">Resistencia a Aceites e Hidrocarburos (FO)</h4>
                            <p className="text-sm text-gray-700">
                              Propiedad específica necesaria para talleres mecánicos, refinerías o plantas industriales 
                              donde hay derrames de estos fluidos.
                            </p>
                          </div>

                          <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-bold text-red-800 mb-2">Suela Antiperforación (Tipo VI)</h4>
                            <p className="text-sm text-gray-700">
                              Para cumplir con la NOM Tipo VI, incluye una entresuela resistente a la penetración. 
                              Puede ser lámina de acero o materiales flexibles como Kevlar.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Materiales de la Suela */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-purple-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6">🔬 Materiales</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">🔥 Hule (Goma)</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Excelente resistencia a la abrasión</li>
                              <li>• Altas temperaturas (hasta 130°C+)</li>
                              <li>• Resistente a agentes químicos</li>
                              <li><b className="text-green-700">✓ Ideal para industria pesada</b></li>
                            </ul>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-800 mb-2">💨 Poliuretano (PU)</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Ligero y flexible</li>
                              <li>• Excelente amortiguación y confort</li>
                              <li>• Menos resistente a altas temperaturas</li>
                              <li><b className="text-green-700">✓ Ideal para almacenes y producción</b></li>
                            </ul>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-green-800 mb-2">⚡ TPU (Poliuretano Termoplástico)</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Evolución del PU con mayor resistencia</li>
                              <li>• Mejor en entornos fríos</li>
                              <li>• Mayor durabilidad</li>
                              <li><b className="text-green-700">✓ Versátil para múltiples entornos</b></li>
                            </ul>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-bold text-purple-800 mb-2">🏆 Doble Densidad</h4>
                            <p className="text-sm text-gray-700">
                              Combina PU de baja densidad (amortiguación) con PU de alta densidad o TPU (durabilidad). 
                              <b className="text-purple-700"> Lo mejor de dos mundos.</b>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 7 Productos */}
                  <section id="productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 7 Calzado de Seguridad Destacado en México 2025
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
                            a la información disponible en Mercado Libre al momento de la publicación (3 Oct 2025). 
                            Te recomendamos visitar el enlace del producto para ver la información más actualizada, 
                            incluyendo precio actual, disponibilidad y reseñas recientes de compradores verificados.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="space-y-12">
                      {/* Producto #1 - Berrendo 3017 */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥇 #1
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            MEJOR PARA ELECTRICISTAS
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Botas Berrendo 3017 Dieléctricas Biotech
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(266+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Electricistas, Mantenimiento Industrial, Trabajos con Riesgo Eléctrico
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un <b className="text-blue-700">referente en el mercado mexicano</b> de la marca Berrendo. Bota unisex diseñada 
                          para resistir derrames de aceite y proteger contra choques eléctricos. Su construcción de inyección directa y 
                          corte de piel Napa la hacen duradera y transpirable, mientras que su casquillo de policarbonato y certificación 
                          Dieléctrica (Tipo III) la hacen <b className="bg-blue-100 px-2 py-1 rounded">ideal para trabajos con riesgo eléctrico</b>.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Certificación Dual NOM-113
                          </h4>
                          <p className="text-gray-700">
                            Cumple con <b>NOM-113-STPS-2009 Tipo II y Tipo III (PP+D)</b>. Una marca mexicana con gran reputación 
                            en seguridad industrial que destaca la certificación como sello de garantía.
                          </p>
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
                                <span><b>Certificación dual:</b> NOM-113 Tipo II y Tipo III (PP+D)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Casquillo de policarbonato</b> no metálico, ligero y seguro</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca mexicana líder</b> en seguridad industrial</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción robusta</b> de piel y suela resistente a aceites</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Alta durabilidad por inyección directa al corte</span>
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
                                <span><b>Precio más elevado</b> que marcas de importación</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño tradicional tipo borceguí, menos casual</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/2VaKvc7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Caterpillar Second Shift */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-yellow-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-yellow-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥈 #2
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            MEJOR PARA CONSTRUCCIÓN
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Caterpillar Second Shift Steel Toe WP
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(3+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción, Demolición, Trabajo Rudo Extremo
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un <b className="text-yellow-700">ícono global del calzado de trabajo</b>. La Second Shift es reconocida por su 
                          extrema durabilidad gracias a su construcción Goodyear Welt y su corte de piel de grano completo. Esta versión 
                          cuenta con puntera de acero, protección contra riesgos eléctricos (EH) y es impermeable, haciéndola una 
                          <b className="bg-yellow-100 px-2 py-1 rounded"> fortaleza para los pies</b> en los entornos más exigentes.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Construcción Goodyear Welt
                          </h4>
                          <p className="text-gray-700">
                            Método artesanal donde la suela se cose al corte a través de una vira. Es <b className="text-blue-700">extremadamente 
                            robusto</b> y permite que la bota sea <b>resuelada</b>, prolongando su vida útil significativamente.
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
                                <span><b>Construcción Goodyear Welt</b> para máxima durabilidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección completa:</b> Puntera de acero (ASTM F2413-18)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección EH</b> contra riesgo eléctrico</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Impermeable</b> (WP - Waterproof)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Suela de goma industrial antideslizante</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca con reputación mundial</b> de resistencia</span>
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
                                <span><b>Más pesada</b> que botas con casquillo de composite</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Requiere <b>periodo de amoldamiento</b> (break-in)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/1KmV8U4"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Timberland PRO Pit Boss */}
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
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MÁXIMO CONFORT
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Timberland PRO Pit Boss 6" Steel Toe
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.4) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Miles de reseñas globales) - 4.6/5</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Jornadas Extensas, Trabajo que Requiere Movilidad Constante
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          La Pit Boss de Timberland PRO es <b className="text-green-700">famosa por equilibrar protección robusta con confort excepcional</b> 
                          para largas jornadas. Cuenta con casquillo de acero, protección contra riesgo eléctrico y una suela de goma antideslizante. 
                          Su principal diferenciador es la <b className="bg-green-100 px-2 py-1 rounded">tecnología PRO 24/7 Comfort Suspension™</b>, 
                          diseñada para reducir la fatiga del pie.
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-purple-300">
                          <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center gap-2">
                            <Activity className="h-6 w-6" />
                            Tecnología Anti-Fatiga
                          </h4>
                          <p className="text-gray-700">
                            Sistema PRO 24/7 Comfort Suspension™ que <b className="text-purple-700">reduce la fatiga</b>, soporta el arco 
                            y amortigua cada paso. Forro con tratamiento antimicrobiano para control de olores.
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
                                <span><b>Tecnología de confort superior</b> (Anti-Fatigue / 24/7 Comfort)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Construcción Goodyear Welt</b> para mayor durabilidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Suela de goma PRO® resistente a abrasión, deslizamientos y aceites</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Forro antimicrobiano</b> para control de olores</span>
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
                                <span><b>Precio premium</b> - una de las más costosas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Casquillo de acero la hace más pesada que alternativas de composite</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                       <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-yellow-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/2FZYzJG"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - Riverline Spyder */}
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
                            MÁS LIGERO Y ERGONÓMICO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Riverline Spyder SPYG2
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.4) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(235+ reseñas) - 4.6/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Industria Ligera, Logística, Almacenes, Supervisión
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Un calzado <b className="text-purple-700">ergonómico de diseño moderno</b>, ideal para industria ligera. Es 
                          extremadamente ligero gracias a su casquillo de policarbonato y suela de PU de doble densidad. Ofrece protección 
                          dieléctrica y cuenta con <b className="bg-purple-100 px-2 py-1 rounded">forros internos Airflow</b> para mantener 
                          el pie fresco y seco. Cumple con la certificación NOM-113-STPS-2009.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            Excelente Relación Calidad-Precio
                          </h4>
                          <p className="text-gray-700">
                            Las opiniones suelen ser positivas, destacando la <b className="text-blue-700">buena calidad de los materiales</b> 
                            en relación con su precio competitivo. Muy elogiado por usuarios para largas jornadas.
                          </p>
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
                                <span><b>Muy ligero y cómodo</b> para largas jornadas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Casquillo de policarbonato</b> con protección dieléctrica certificada</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Excelente relación calidad-precio</b> según reseñas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño moderno y deportivo</span>
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
                                <span><b>No recomendado para trabajo rudo</b> o condiciones húmedas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Algunos usuarios reportan que el diseño real difiere de las fotos</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-purple-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://mercadolibre.com/sec/2hp3jwz"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - Puma Safety P664 (ahora es Timberland Pro Pit 6 Botas Industriales Dieléctricas Seguridad) */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-red-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-red-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🔥 #5
                          </Badge>
                          <Badge className="bg-red-100 text-red-800 px-4 py-2 font-bold">
                            MEJOR DISEÑO 
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Timberland Pro Pit 6 Botas Industriales Dieléctricas Seguridad
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(79+ reseñas) - 4.9/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6">
                          <p className="text-red-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Automotriz, Logística, Producción - Trabajadores Activos y Modernos
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Puma Safety traslada su experiencia en <b className="text-red-700">calzado deportivo al mundo industrial</b>. Este 
                          modelo tipo tenis ofrece un diseño atractivo sin sacrificar protección. Cuenta con casquillo no metálico (fibra de 
                          vidrio), certificación dieléctrica (NOM-113), y una suela resistente al calor hasta 250°C. Su construcción es 
                          <b className="bg-red-100 px-2 py-1 rounded"> ligera y flexible</b>, ideal para trabajadores activos.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Star className="h-6 w-6" />
                            Calificaciones Excepcionales
                          </h4>
                          <p className="text-gray-700">
                            Diseño deportivo y moderno, muy atractivo visualmente. <b className="text-green-700">100% libre de metal</b> 
                            con casquillo de fibra de vidrio. Plantilla ergonómica con amortiguación de gel en el talón.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño deportivo y moderno</b> muy atractivo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección dieléctrica</b> y casquillo de fibra de vidrio (100% sin metal)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Plantilla ergonómica con <b>amortiguación de gel</b> en el talón</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Calificaciones de usuarios <b>excepcionalmente altas</b></span>
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
                                <span><b>Precio elevado</b> - rango de marcas premium</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Algunos usuarios lo perciben como "algo pesado"</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Suela considerada delgada para estar de pie por periodos muy prolongados</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-2669668266-tenis-de-seguridad-puma-safety-p664-dielectrico-para-hombre-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Nieion */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💰 #6
                          </Badge>
                          <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 font-bold">
                            MÁS VENDIDO ONLINE
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Nieion Tenis de Seguridad Sport Industrial
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.4) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(23,500+ reseñas) - 4.6/5</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Presupuesto Ajustado, Uso Ocasional, Trabajadores que Priorizan Precio
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            🏆 Fenómeno de Ventas en Mercado Libre
                          </h4>
                          <p className="text-gray-700">
                            Este calzado es un <b className="text-yellow-700">líder absoluto de ventas</b>, con más de 23,500 reseñas. 
                            Su popularidad se debe a su precio muy accesible, diseño casual y percepción de buen valor por el dinero.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El fenómeno de ventas en e-commerce mexicano. Este calzado tipo tenis ofrece las <b className="text-teal-700">características 
                          de seguridad básicas</b> (puntera de protección, suela resistente) a un precio muy accesible. Generalmente cuenta con 
                          casquillo de acero y entresuela de Kevlar antiperforación, en un diseño ligero con parte superior de malla transpirable.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-teal-200">
                            <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Precio extremadamente competitivo</b> - accesible para amplio público</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño de tenis casual</b> - se puede usar fuera del trabajo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Ligero y transpirable</b> gracias a malla en parte superior</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>A menudo incluye <b>suela antiperforación de Kevlar</b></span>
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
                                <span>La <b>certificación NOM-113</b> no siempre es destacada o clara</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Durabilidad bajo trabajo rudo</b> puede ser inferior a marcas premium</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                          <p className="text-sm text-yellow-900">
                            <AlertTriangle className="h-4 w-4 inline mr-2" />
                            <b>Importante:</b> Verificar con el vendedor la certificación NOM-113-STPS-2009 si es requisito para tu trabajo.
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1371896349-zapatos-de-seguridad-tenis-sport-industriale-de-fibra-nieion-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #7 - Ekinio */}
                      <motion.div 
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-indigo-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-indigo-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💎 #7
                          </Badge>
                          <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 font-bold">
                            MEJOR ECONÓMICO CON ALTAS CALIFICACIONES
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Ekinio Tenis de Seguridad Industrial
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.3) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(3,800+ reseñas) - 4.7/5</span>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                          <p className="text-indigo-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Presupuesto Moderado con Búsqueda de Calidad, Uso Diario Ligero a Medio
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Similar a Nieion, Ekinio es otra marca dominante en el e-commerce mexicano que ofrece calzado de seguridad estilo tenis. 
                          Este modelo es <b className="text-indigo-700">muy valorado por su comodidad y ligereza</b>. Incorpora una puntera de acero 
                          estándar europeo, entresuela de Kevlar anti-pinchazos y una parte superior de malla transpirable, combinando 
                          <b className="bg-indigo-100 px-2 py-1 rounded"> protección integral con un diseño moderno</b> y un precio accesible.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <Star className="h-6 w-6" />
                            Excelente Valoración de Usuarios
                          </h4>
                          <p className="text-gray-700">
                            Con una calificación de <b className="text-green-700">4.7/5 estrellas y miles de reseñas</b>, los usuarios 
                            destacan constantemente su excelente relación calidad-precio, comodidad y ligereza para uso prolongado.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-indigo-200">
                            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Excelente relación calidad-precio</b> muy elogiada en reseñas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Protección completa:</b> casquillo de acero y suela antiperforación de Kevlar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Muy cómodo y ligero</b> para uso prolongado según miles de usuarios</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diseño moderno y transpirable</span>
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
                                <span>Algunos usuarios mencionan que la <b>suela puede sentirse delgada o débil</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>La certificación específica NOM-113 no es el principal punto de marketing</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-indigo-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-indigo-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad en la plataforma</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1711411513-tenis-de-seguridad-zapatos-industrial-trabajo-botas-ekinio-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
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
                      title="Análisis Comparativo: Los 3 Mejores Valorados"
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
                        🛒 Guía de Compra Rápida: 3 Consejos + 3 Errores a Evitar
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* 3 Consejos Clave */}
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 text-center">
                          💡 3 Consejos Clave para Acertar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                1
                              </div>
                              <div>
                                <h4 className="font-bold text-green-900 mb-2">Conoce tu Riesgo, Conoce tu "Tipo"</h4>
                                <p className="text-gray-700">
                                  Antes de evaluar precios o diseños, es <b className="text-green-700">imperativo analizar el entorno laboral</b>. 
                                  Si existe riesgo eléctrico, es indispensable buscar calzado certificado como Tipo III Dieléctrico. Si se 
                                  trabaja con objetos punzantes en el suelo, la protección Tipo VI Antiperforación es necesaria. Alinear la 
                                  necesidad específica con la clasificación de la NOM-113 es el paso más importante.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                2
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-900 mb-2">La Comodidad No es un Lujo, es Seguridad</h4>
                                <p className="text-gray-700">
                                  Un calzado incómodo provoca <b className="text-blue-700">fatiga y distracción</b>, lo que incrementa el 
                                  riesgo de accidentes. Es fundamental buscar características que promuevan el confort: plantillas antifatiga, 
                                  forros transpirables y un peso adecuado. Se recomienda probarse el calzado <b>al final del día</b>, cuando 
                                  los pies están más hinchados, y usar los mismos calcetines del trabajo.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                                3
                              </div>
                              <div>
                                <h4 className="font-bold text-purple-900 mb-2">Verifica la Certificación NOM-113-STPS-2009</h4>
                                <p className="text-gray-700">
                                  No se debe asumir que todo el calzado etiquetado como "de seguridad" cumple con la regulación mexicana. 
                                  Es <b className="text-purple-700">crucial buscar explícitamente la mención de la NOM</b> en la etiqueta o 
                                  descripción. Esta certificación asegura que el calzado ha superado las pruebas de resistencia requeridas 
                                  en México, representando una inversión segura tanto para la protección del trabajador como para el 
                                  cumplimiento legal de la empresa.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores Comunes */}
                      <motion.div 
                        className="bg-gradient-to-r from-red-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-red-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-6 text-center">
                          ❌ 3 Errores Comunes a Evitar
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                            <div className="flex items-start gap-4">
                              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-red-900 mb-2">Comprar Solo por Precio</h4>
                                <p className="text-gray-700">
                                  Es el error más frecuente y potencialmente el <b className="text-red-700">más costoso</b>. Un calzado de 
                                  bajo precio puede carecer de la certificación adecuada, tener una durabilidad reducida o no ofrecer la 
                                  comodidad necesaria para una jornada completa. Esto puede resultar en un gasto mayor a largo plazo debido 
                                  a reemplazos frecuentes o, en el peor de los casos, a un accidente laboral.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                              <Eye className="h-8 w-8 text-orange-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-orange-900 mb-2">Ignorar el Peso y el Material del Casquillo</h4>
                                <p className="text-gray-700">
                                  Adquirir una bota con casquillo de acero para un trabajo que implica <b className="text-orange-700">caminar 
                                  largas distancias</b> o pasar constantemente por detectores de metales es un error de planificación. Se debe 
                                  evaluar si un casquillo de composite o policarbonato, que es más ligero y no metálico, se adapta mejor a la 
                                  rutina diaria y a las exigencias del puesto.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4">
                              <Users className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-yellow-900 mb-2">Elegir la Talla Incorrecta o sin Probar</h4>
                                <p className="text-gray-700">
                                  Comprar en línea es práctico, pero una talla inadecuada puede causar desde <b className="text-yellow-700">ampollas 
                                  y rozaduras hasta problemas posturales crónicos</b>. Es vital leer las guías de tallas del fabricante, revisar 
                                  las opiniones de otros compradores sobre el ajuste (si "viene amplio" o "viene reducido") y asegurarse de que 
                                  haya suficiente espacio para mover los dedos cómodamente.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mantenimiento */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Wrench className="h-8 w-8 text-indigo-600" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900">🔧 Mantenimiento: Prolonga la Vida de tu Calzado</h3>
                        </div>
                        
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            El calzado de seguridad es una <b className="text-indigo-700">herramienta esencial</b>; su cuidado adecuado prolonga 
                            su vida útil y mantiene su capacidad de protección.
                          </p>
                          
                          <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <h4 className="font-bold text-indigo-900 mb-2 text-center">🔍 Inspección</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Revisar antes de cada uso</li>
                                <li>• Buscar grietas o deformaciones</li>
                                <li>• Verificar desgaste de suela</li>
                              </ul>
                            </div>
                            
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <h4 className="font-bold text-indigo-900 mb-2 text-center">🧼 Limpieza</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Cepillo suave y trapo húmedo</li>
                                <li>• Cremas para piel si aplica</li>
                                <li>• NO calor directo para secar</li>
                              </ul>
                            </div>
                            
                            <div className="bg-indigo-50 p-4 rounded-lg">
                              <h4 className="font-bold text-indigo-900 mb-2 text-center">💨 Secado</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Aire en lugar ventilado</li>
                                <li>• Nunca sol directo o calentadores</li>
                                <li>• Evita resecar el material</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <p className="text-sm text-green-900">
                              <CheckCircle className="h-4 w-4 inline mr-2" />
                              <b>Un buen mantenimiento</b> no solo protege tu inversión, sino que asegura que el calzado proteja al 
                              trabajador eficazmente.
                            </p>
                          </div>
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
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        🎯 Conclusión: Da Cada Paso con Confianza
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Footprints className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            La elección del <b className="text-green-700">calzado industrial adecuado</b> va más allá de una simple compra; 
                            es un compromiso con tu seguridad diaria. Como hemos visto, la bota perfecta depende de los riesgos específicos 
                            de tu trabajo, desde la robustez necesaria en la construcción hasta la protección aislante crucial para un electricista.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Invertir en un par de botas <b>certificadas y diseñadas para tu labor</b> no solo previene accidentes, sino que 
                            mejora tu comodidad y rendimiento.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 mt-8">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <Construction className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Todo Terreno</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Caterpillar Second Shift Steel Toe</b> - Durabilidad probada y protección completa para construcción y 
                            trabajo rudo.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Zap className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Especializada</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Berrendo 3017 Biotech</b> - Protección dieléctrica certificada y la confianza de una marca líder mexicana 
                            para electricistas.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Valor</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Riverline Spyder</b> o <b>Ekinio</b> - Excelente balance entre precio, comodidad y protección certificada 
                            para uso diario.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Tu Seguridad, Tu Prioridad</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Recuerda: <b>el calzado adecuado es aquel que te permite concentrarte plenamente en tu trabajo</b>, con la tranquilidad 
                        de que tu seguridad está garantizada. Invierte en calidad, prioriza el ajuste perfecto y trabaja con la confianza que 
                        solo la protección correcta puede ofrecer.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🛡️ Proteger tus pies es proteger tu futuro 🛡️
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál de estas botas se convertirá en tu compañera de trabajo? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        👷 Equípate bien, trabaja seguro, camina con confianza 👷
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