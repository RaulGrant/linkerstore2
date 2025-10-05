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
  Anchor,
  Ruler,
  Scissors,
  Zap,
  Info,
  ChevronDown,
  Eye,
  Construction,
  HardHat,
  TrendingUp,
  Settings,
  Package,
  Users,
  FileText,
  Activity
} from 'lucide-react';
import { useState } from 'react';

export default function ArnesesSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedAnchorType, setSelectedAnchorType] = useState<'dorsal' | 'lateral' | 'hombro'>('dorsal');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'jyrsa-10a',
      name: 'Jyrsa JYR-10A',
      rating: 4.8,
      reviewCount: 120,
      isRecommended: true,
      bestFor: 'Mejor Básico Certificado',
      amazonLink: 'https://www.mercadolibre.com.mx/arnes-con-anillo-d-espalda-trabajo-alturas-jyrsa-jyr-10a-verde-alta-visibilidad/p/MLM43738470'
    },
    {
      id: 'truper-14434',
      name: 'Truper 14434',
      rating: 5.0,
      reviewCount: 200,
      isRecommended: true,
      bestFor: 'Mejor Versátil',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-833998590-arnes-cuerpo-completo-5-anillos-truper-14434-_JM'
    },
    {
      id: 'msa-vform',
      name: 'MSA V-Form',
      rating: 5.0,
      reviewCount: 85,
      isRecommended: false,
      bestFor: 'Mejor Premium',
      amazonLink: 'https://articulo.mercadolibre.com.mx/MLM-1663193802-arnes-v-form-msa-argolla-d-en-espalda-y-cadera-contra-caidas-_JM'
    }
  ];

  const comparisonFeatures = [
    { name: 'Puntos de Anclaje', product1: '1 Dorsal', product2: '5 Anillos', product3: '3 Anillos' },
    { name: 'Certificación NOM-009', product1: true, product2: false, product3: false },
    { name: 'Certificación ANSI', product1: 'Z359.1-2007', product2: 'Z359.11 + EN 361', product3: 'Z359.11 + CSA + OSHA' },
    { name: 'Capacidad de Carga', product1: '140 kg', product2: '140 kg', product3: '140-180 kg' },
    { name: 'Indicador de Caída', product1: true, product2: false, product3: false },
    { name: 'Acolchado', product1: false, product2: false, product3: 'Opcional Premium' },
    { name: 'Material', product1: 'Poliéster bicolor', product2: 'Poliéster', product3: 'Poliéster Premium' },
    { name: 'Aplicación', product1: 'Detención de caídas', product2: 'Multiuso completo', product3: 'Profesional multiuso' }
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
      excerpt: 'Análisis de materiales, normativas y los mejores productos del mercado.',
      description: 'Análisis de materiales, normativas y los mejores productos del mercado.',
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
      question: '¿A partir de qué altura es obligatorio usar arnés en México según la NOM-009-STPS-2011?',
      answer: 'El uso de un sistema de protección contra caídas, que incluye un arnés de cuerpo completo, es mandatorio para todo trabajo que se realice a una altura de 1.80 metros o más sobre el nivel de referencia inferior. Esta es una de las disposiciones centrales de la NOM-009-STPS-2011.'
    },
    {
      question: '¿Cuál es la vida útil de un arnés de seguridad y cuándo debo reemplazarlo?',
      answer: 'La vida útil no es un estándar único y depende de las especificaciones del fabricante, la frecuencia de uso, el entorno de trabajo y el mantenimiento. Como regla general, muchos fabricantes establecen una vida útil máxima de 10 años a partir de la fecha de fabricación, siempre y cuando el equipo pase todas las inspecciones. Sin embargo, un arnés debe ser retirado de servicio y reemplazado inmediatamente si presenta cualquier daño durante la inspección pre-uso o si ha estado involucrado en la detención de una caída.'
    },
    {
      question: '¿Puedo usar un arnés que ya ha detenido una caída?',
      answer: 'Absolutamente no. Un arnés que ha sido sometido a las fuerzas de impacto de una caída real debe ser retirado del servicio y destruido de inmediato. Las costuras y las cintas pueden haber sufrido daños estructurales microscópicos que comprometen su integridad, aunque no sean visibles. Si el arnés cuenta con indicadores de caída, estos se habrán activado, proporcionando una prueba visual de que el equipo ya no es seguro.'
    },
    {
      question: '¿Qué diferencia hay entre un arnés de posicionamiento y uno de detención de caídas?',
      answer: 'Un sistema de detención de caídas está diseñado para arrestar una caída libre de forma segura y siempre utiliza el anillo "D" dorsal para mantener al trabajador en posición vertical. Un sistema de posicionamiento utiliza los anillos "D" laterales (cadera) para sostener a un trabajador en su lugar de trabajo, permitiéndole tener las manos libres. Este sistema no está diseñado para soportar las fuerzas dinámicas de una caída libre y debe usarse siempre en conjunto con un sistema de detención de caídas independiente.'
    },
    {
      question: '¿Cómo debo limpiar y almacenar mi arnés de seguridad?',
      answer: 'La limpieza debe realizarse a mano con un cepillo de cerdas suaves, agua fría o tibia y un jabón de pH neutro. Se deben evitar solventes, lejía o cualquier producto químico agresivo. Para secarlo, debe colgarse en un lugar bien ventilado, a la sombra y alejado de la luz solar directa y fuentes de calor. El almacenamiento correcto es en un lugar limpio, seco y oscuro, protegido de la exposición a rayos UV, vapores químicos y contacto con objetos afilados.'
    },
    {
      question: '¿Qué significa que un arnés cumpla con la norma ANSI Z359.11?',
      answer: 'Significa que el arnés ha sido diseñado, fabricado y sometido a pruebas rigurosas que cumplen o superan los requisitos del American National Standards Institute para arneses de cuerpo completo. Esta norma abarca aspectos críticos como la resistencia de los materiales, el diseño de los componentes, el rendimiento en pruebas de caída dinámicas y estáticas, y los requisitos de etiquetado. Es un sello de calidad y seguridad reconocido a nivel mundial.'
    },
    {
      question: '¿Es necesario recibir capacitación formal (DC-3) para usar un arnés de seguridad?',
      answer: 'Sí, es un requisito legal. La NOM-009-STPS-2011 exige que todos los trabajadores que realicen trabajos en altura reciban una capacitación completa, tanto teórica como práctica, impartida por instructores debidamente certificados. La Constancia de Competencias o de Habilidades Laborales (formato DC-3), emitida por un agente capacitador registrado ante la STPS, es el documento oficial que acredita que el trabajador ha recibido y aprobado dicha capacitación.'
    },
    {
      question: '¿Qué es el "trauma por suspensión" y cómo se previene?',
      answer: 'El trauma por suspensión, también conocido como síndrome del arnés, es una emergencia médica que puede ocurrir cuando una persona queda suspendida e inmóvil en un arnés después de una caída. Las correas de las piernas pueden comprimir las venas femorales, impidiendo el retorno de la sangre al corazón. La prevención se basa en tener un plan de rescate rápido y eficiente para minimizar el tiempo de suspensión, y el uso de cintas o estribos anti-trauma que permiten al trabajador suspendido aliviar la presión venosa.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema altura/seguridad */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${20 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Símbolos de altura flotantes (25 símbolos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`symbol-${i}`}
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
                {i % 3 === 0 ? <Anchor className="w-6 h-6" /> : 
                 i % 3 === 1 ? <HardHat className="w-6 h-6" /> : 
                 <Construction className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de seguridad (40 ondas) */}
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

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
                <Shield className="h-4 w-4" />
                🧗 Protección para Trabajo en Altura
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Arneses de Seguridad para Trabajo en Altura 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva: Normativas mexicanas NOM-009-STPS, anatomía y análisis de los 6 mejores productos
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-orange-200"
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
                  background: `hsl(${20 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                      className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-red-500 rounded-full p-3 flex-shrink-0">
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-3">⚠️ Tu Vida Depende de Este Equipo</h3>
                          <p className="text-lg text-gray-800 leading-relaxed">
                            En México, cualquier trabajo a más de <strong className="text-red-600">1.80 metros del suelo</strong> no es 
                            solo una tarea; es una operación de alto riesgo regulada por ley. Según la <b className="bg-red-100 px-2 py-1 rounded">
                            NOM-009-STPS-2011</b>, la vida del trabajador depende de un sistema de protección integral, y el corazón 
                            de ese sistema es el arnés de seguridad que lleva puesto.
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
                      Sin embargo, el mercado actual, especialmente en plataformas en línea, presenta un panorama confuso. ¿Cómo navegar 
                      la abrumadora variedad de opciones, donde un <b>"arnés de seguridad"</b> puede costar desde $300 hasta más de $3,000? 
                      ¿Cómo distinguir un equipo que cumple con la normativa y protege una vida, de uno que simplemente ofrece una 
                      <b className="text-red-600"> falsa y peligrosa sensación de seguridad</b>?
                    </motion.p>

                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 mt-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Tu Manual de Campo Completo</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Esta guía definitiva para 2025 es tu manual de campo. Hemos realizado una <b>investigación exhaustiva del mercado 
                        mexicano</b>, analizando las regulaciones, desglosando la tecnología de los componentes y evaluando los productos 
                        más populares y mejor calificados. El objetivo es proporcionarte el conocimiento técnico y práctico necesario para 
                        tomar <b className="text-blue-700">la decisión más importante: aquella que protege tu vida</b> y la de tu equipo.
                      </p>
                    </motion.div>
                  </section>

                  {/* Marco Regulatorio */}
                  <section id="marco-regulatorio" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ⚖️ El Fundamento Ineludible: Marco Regulatorio en México
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      En México, la seguridad en trabajos en altura no es opcional; está <b className="text-red-600">rigurosamente regulada</b>. 
                      El incumplimiento expone a los trabajadores a riesgos mortales y somete a las empresas a severas sanciones.
                    </motion.p>

                    {/* NOM-009-STPS-2011 */}
                    <motion.div 
                      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-red-500 mb-6"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <FileText className="h-8 w-8 text-red-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900">NOM-009-STPS-2011</h3>
                          <p className="text-gray-600 text-sm">Condiciones de seguridad para realizar trabajos en altura</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        La <b className="text-red-700">Norma Oficial Mexicana NOM-009-STPS-2011</b> es el pilar legal que gobierna estas actividades. 
                        Su cumplimiento es obligatorio para todas las empresas y establece los requisitos mínimos para prevenir accidentes.
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-red-800 mb-3">📐 Ámbito de Aplicación:</h4>
                          <p className="text-gray-700 text-sm">
                            Aplicable a todas las actividades laborales que se realicen a una altura <b className="text-red-700">superior a 
                            1.80 metros</b> sobre un nivel de referencia inferior.
                          </p>
                        </div>
                        <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-red-800 mb-3">🦺 EPP Obligatorio:</h4>
                          <p className="text-gray-700 text-sm">
                            Exige el uso de un <b className="text-red-700">arnés de cuerpo completo certificado</b> como parte del 
                            equipamiento mínimo, complementado con líneas de vida, anclajes y elementos de amortiguación.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl">
                        <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          ⚠️ Sanciones por Incumplimiento
                        </h4>
                        <p className="text-gray-800">
                          Multas de <b className="text-red-700">250 a 5,000 veces la UMA</b>, posible clausura del centro de trabajo 
                          y responsabilidades civiles por daños.
                        </p>
                      </div>
                    </motion.div>

                    {/* Estándares Internacionales */}
                    <motion.div 
                      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-blue-500 mb-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Estándares Internacionales como Sello de Calidad</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Mientras que la NOM-009-STPS-2011 establece la base legal en México, los estándares internacionales actúan como un 
                        <b className="text-blue-700"> sello de calidad y rendimiento superior</b>.
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-blue-800 mb-3">🇺🇸 ANSI/ASSP Z359.11</h4>
                          <p className="text-gray-700 text-sm">
                            Estándar del American National Standards Institute para arneses de cuerpo completo. Define requisitos de diseño, 
                            rendimiento, pruebas y marcado. Especifica pruebas para usuarios de <b>59 a 140 kg</b>.
                          </p>
                        </div>
                        <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-blue-800 mb-3">🇪🇺 Normas Europeas (EN)</h4>
                          <p className="text-gray-700 text-sm">
                            Referente global. La <b>EN 361</b> especifica requisitos para arneses de detención de caídas, y la <b>EN 358</b> 
                            cubre equipos para posicionamiento y sujeción.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <p className="text-sm text-blue-900">
                          <Info className="h-4 w-4 inline mr-2" />
                          <b>Importante:</b> Un arnés que cumple con estos estándares generalmente excede los requisitos mínimos y demuestra 
                          un compromiso mayor con la seguridad del usuario.
                        </p>
                      </div>
                    </motion.div>

                    {/* Certificación y Etiquetas */}
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">La Importancia de la Certificación y las Etiquetas</h3>
                      </div>
                      <p className="leading-relaxed text-lg mb-4">
                        Un arnés de calidad profesional debe contar con una <b>etiqueta duradera y legible</b> que contenga:
                      </p>
                      <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                          <span>Nombre del fabricante, modelo y número de serie</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                          <span>Fecha de fabricación</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                          <span>Normativas que cumple (NOM, ANSI, EN)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                          <span>Capacidad máxima de carga</span>
                        </li>
                      </ul>
                      <div className="mt-6 bg-white/20 p-4 rounded-lg">
                        <p className="font-bold text-xl">
                          ⚠️ La ausencia de esta etiqueta o la incapacidad de verificar las certificaciones declaradas es una 
                          <span className="bg-red-500 px-2 py-1 rounded ml-2">SEÑAL DE ALERTA INMEDIATA</span>
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Anatomía del Arnés */}
                  <section id="anatomia-arnes" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🔬 Anatomía del Arnés: Componentes Esenciales
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La resistencia y fiabilidad de un arnés dependen directamente de la <b className="text-blue-600">calidad de sus 
                      componentes</b> y los materiales con los que están fabricados.
                    </motion.p>

                    {/* Cintas y Correas */}
                    <motion.div 
                      className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-green-300 mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-xl p-4">
                          <Scissors className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-2">Cintas y Correas (Webbing)</h3>
                          <p className="text-gray-600">El esqueleto del arnés</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Son el <b className="text-green-700">esqueleto del arnés</b>. Deben distribuir las fuerzas de una caída a través 
                        de las partes más fuertes del cuerpo.
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">🧵 Materiales Comunes</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Poliéster:</b> Excelente resistencia a UV y químicos, ideal para exteriores</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Nylon:</b> Mayor elasticidad, ayuda a absorber energía de la caída</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><b>Ancho estándar:</b> 44-45 mm para distribución adecuada de carga</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-100 p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-green-800 mb-3">🔥 Materiales Especializados</h4>
                          <p className="text-gray-700 text-sm">
                            Para trabajos específicos como <b>soldadura</b> o en entornos con <b>riesgo de arco eléctrico</b>, 
                            se utilizan materiales ignífugos como el <b className="text-green-700">Kevlar®</b>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Herrajes y Hebillas */}
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-blue-300 mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-blue-500 rounded-xl p-4">
                          <Settings className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2">Herrajes y Hebillas (Hardware & Buckles)</h3>
                          <p className="text-gray-600">Puntos de conexión y ajuste</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Son los puntos de conexión y ajuste del arnés. <b className="text-blue-700">Su integridad es tan crucial</b> 
                        como la de las cintas.
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold text-blue-800 mb-2">🔧 Paso (Pass-Thru)</h5>
                          <p className="text-sm text-gray-700">Simples y muy seguras, requieren enhebrar manualmente en cada uso</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold text-blue-800 mb-2">⚡ Rápida (Quick-Connect)</h5>
                          <p className="text-sm text-gray-700">Permiten ponerse y quitarse rápidamente, aumentan probabilidad de uso correcto</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold text-blue-800 mb-2">📌 Lengüeta (Tongue)</h5>
                          <p className="text-sm text-gray-700">Funcionan como cinturón tradicional, ofrecen ajuste seguro y familiar</p>
                        </div>
                      </div>

                      <div className="bg-blue-100 p-4 rounded-lg">
                        <p className="text-sm text-blue-900">
                          <Info className="h-4 w-4 inline mr-2" />
                          <b>Materiales:</b> Generalmente <b>acero forjado</b> por su alta resistencia. También <b>aluminio</b> para 
                          reducir peso. Para trabajos eléctricos, herrajes <b className="text-blue-700">dieléctricos</b> son mandatorios.
                        </p>
                      </div>
                    </motion.div>

                    {/* Costuras y Refuerzos */}
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border-2 border-purple-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-purple-500 rounded-xl p-4">
                          <Activity className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-2">Costuras y Refuerzos</h3>
                          <p className="text-gray-600">Los puntos que soportan toda la carga</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Las costuras unen las cintas y <b className="text-purple-700">soportan toda la carga en una caída</b>. 
                        Se debe buscar:
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                          <h4 className="font-bold text-purple-800 mb-3">✓ Características Clave</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Patrón de costura de seguridad (lock-stitch)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Hilo de color contrastante (facilita inspección)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span>Costuras reforzadas en zonas de alta tensión</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-purple-100 p-3 sm:p-4 md:p-6 rounded-xl">
                          <p className="text-purple-900 font-semibold mb-2">🔍 Inspección Visual</p>
                          <p className="text-sm text-gray-700">
                            Las zonas de alta tensión, como alrededor de los anillos "D", deben tener <b>costuras visiblemente reforzadas</b>. 
                            El hilo contrastante permite detectar fácilmente hilos cortados, deshilachados o dañados.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Puntos de Anclaje */}
                  <section id="puntos-anclaje" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        ⚓ Puntos de Anclaje: Funcionalidad y Aplicación Táctica
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      La funcionalidad de un arnés está definida por la <b className="text-orange-600">cantidad y ubicación de sus anillos "D"</b>. 
                      No se trata de que "más es mejor", sino de que cada anillo tiene un propósito específico.
                    </motion.p>

                    <div className="bg-yellow-50 border-4 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-4 sm:mb-6 md:mb-8">
                      <p className="text-yellow-900 font-semibold text-center text-lg">
                        ⚠️ El estándar de la industria exige que cada anillo "D" de anclaje tenga una resistencia mínima de 
                        <span className="bg-yellow-200 px-2 py-1 rounded mx-2">2,270 kg (5,000 lbs)</span>
                      </p>
                    </div>

                    {/* Selector de tipo de anillo */}
                    <div className="flex justify-center gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                      <motion.button
                        onClick={() => setSelectedAnchorType('dorsal')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedAnchorType === 'dorsal'
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300'
                        }`}
                      >
                        Anillo Dorsal
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedAnchorType('lateral')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedAnchorType === 'lateral'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        Anillos Laterales
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedAnchorType('hombro')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                          selectedAnchorType === 'hombro'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-300'
                        }`}
                      >
                        Otros Anillos
                      </motion.button>
                    </div>

                    {/* Contenido según tipo de anillo */}
                    <AnimatePresence mode="wait">
                      {selectedAnchorType === 'dorsal' && (
                        <motion.div
                          key="dorsal"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="bg-red-500 rounded-xl p-4">
                              <Anchor className="h-10 w-10 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-2">Anillo Dorsal (Dorsal D-Ring)</h3>
                              <p className="text-gray-600">El único para detención de caídas</p>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-red-800 mb-3">📍 Ubicación</h4>
                            <p className="text-gray-700">
                              En la espalda, <b className="text-red-700">entre los omóplatos</b>.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-red-400">
                            <h4 className="font-bold text-red-900 mb-3 text-lg">⚠️ Función Crítica</h4>
                            <p className="text-gray-800 leading-relaxed mb-3">
                              Este es el <b className="bg-red-200 px-2 py-1 rounded">ÚNICO punto de anclaje diseñado y certificado para 
                              la detención de caídas (fall arrest)</b>.
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                              Su posición asegura que, en caso de caída, el cuerpo del trabajador quede suspendido en una 
                              <b className="text-red-700"> posición vertical</b>, minimizando el riesgo de lesiones y facilitando un 
                              rescate seguro.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedAnchorType === 'lateral' && (
                        <motion.div
                          key="lateral"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="bg-blue-500 rounded-xl p-4">
                              <Users className="h-10 w-10 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2">Anillos Laterales (Side/Hip D-Rings)</h3>
                              <p className="text-gray-600">Para posicionamiento de trabajo</p>
                            </div>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-blue-800 mb-3">📍 Ubicación</h4>
                            <p className="text-gray-700">
                              A ambos lados de la <b className="text-blue-700">cadera</b>.
                            </p>
                          </div>

                          <div className="bg-blue-100 p-3 sm:p-4 md:p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-blue-800 mb-3">🔧 Función</h4>
                            <p className="text-gray-700 leading-relaxed">
                              Su uso es exclusivo para <b className="text-blue-700">posicionamiento de trabajo</b>. Permiten que un 
                              trabajador se sujete a una estructura (como un poste o una viga) y utilice ambas manos para realizar 
                              una tarea.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-red-400">
                            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-6 w-6" />
                              ⚠️ ADVERTENCIA CRÍTICA
                            </h4>
                            <p className="text-red-800 font-semibold text-lg">
                              Nunca deben usarse para detener una caída. Siempre deben complementarse con un sistema de detención 
                              de caídas independiente conectado al anillo dorsal.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {selectedAnchorType === 'hombro' && (
                        <motion.div
                          key="hombro"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300"
                        >
                          <div className="flex items-start gap-4 mb-6">
                            <div className="bg-purple-500 rounded-xl p-4">
                              <Package className="h-10 w-10 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-2">Otros Anillos Especializados</h3>
                              <p className="text-gray-600">Para aplicaciones específicas</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-purple-800 mb-3">💪 Anillos Pectorales/Esternales</h4>
                              <p className="text-gray-700">
                                <b>Ubicación:</b> Centro del pecho<br/>
                                <b>Uso:</b> Sistemas de ascenso y descenso por escaleras (líneas de vida verticales) o para operaciones de rescate.
                              </p>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-purple-800 mb-3">🎯 Anillos de Hombro</h4>
                              <p className="text-gray-700">
                                <b>Ubicación:</b> En los hombros<br/>
                                <b>Uso:</b> Rescate y extracción de trabajadores de espacios confinados.
                              </p>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-purple-800 mb-3">⚓ Anillo Ventral</h4>
                              <p className="text-gray-700">
                                <b>Ubicación:</b> Parte frontal de la cintura<br/>
                                <b>Uso:</b> Trabajos en suspensión y acceso por cuerdas (rope access).
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Características Adicionales */}
                  <section id="caracteristicas-adicionales" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                        ✨ Ergonomía y Características Adicionales de Seguridad
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Más allá de la resistencia estructural, las características que mejoran la comodidad y la seguridad funcional 
                      son <b className="text-green-600">vitales</b>, especialmente para quienes lo usan durante jornadas completas.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                      {/* Acolchado */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-green-500 rounded-lg p-3">
                            <span className="text-white text-lg sm:text-xl md:text-2xl">🛏️</span>
                          </div>
                          <h3 className="text-xl font-bold text-green-900">Acolchado (Padding)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Las almohadillas en hombros, espalda, cintura y perneras <b className="text-green-700">distribuyen la presión 
                          de manera uniforme</b>, reduciendo la fatiga y los puntos de roce. En caso de una caída, un buen acolchado 
                          puede ayudar a mitigar el inicio del trauma por suspensión.
                        </p>
                      </motion.div>

                      {/* Sistemas de Ajuste */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-500 rounded-lg p-3">
                            <span className="text-white text-lg sm:text-xl md:text-2xl">📏</span>
                          </div>
                          <h3 className="text-xl font-bold text-blue-900">Sistemas de Ajuste</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Un arnés profesional debe tener al menos <b className="text-blue-700">5 puntos de ajuste</b> (uno en el pecho, 
                          dos en el torso/hombros y dos en las piernas) para garantizar una adaptación segura y personalizada a diferentes 
                          complexiones físicas. Un ajuste incorrecto es uno de los errores más peligrosos y comunes.
                        </p>
                      </motion.div>

                      {/* Indicadores de Caída */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-amber-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-yellow-500 rounded-lg p-3">
                            <span className="text-white text-lg sm:text-xl md:text-2xl">⚠️</span>
                          </div>
                          <h3 className="text-xl font-bold text-yellow-900">Indicadores de Caída</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Son una característica de seguridad crucial. Consisten en una sección de la cinta doblada y cosida que 
                          <b className="text-yellow-700"> se desgarra visiblemente</b> cuando el arnés es sometido a las fuerzas de una caída.
                        </p>
                        <div className="bg-yellow-100 p-4 rounded-lg">
                          <p className="text-yellow-900 font-semibold">
                            ✓ Esto elimina cualquier duda sobre si el equipo debe ser retirado de servicio.
                          </p>
                        </div>
                      </motion.div>

                      {/* Cintas Anti-Trauma */}
                      <motion.div 
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-red-500 rounded-lg p-3">
                            <span className="text-white text-lg sm:text-xl md:text-2xl">🩹</span>
                          </div>
                          <h3 className="text-xl font-bold text-red-900">Cintas Anti-Trauma</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Son pequeñas cintas o estribos guardados en bolsas en las perneras. Tras una caída, el trabajador suspendido 
                          puede desplegarlos y pisarlos.
                        </p>
                        <div className="bg-red-100 p-4 rounded-lg">
                          <p className="text-red-900 font-semibold">
                            ✓ Esto permite usar los músculos de las piernas para <b>aliviar la presión</b> de las correas sobre las 
                            arterias femorales, retrasando el inicio del trauma por suspensión, una condición potencialmente mortal.
                          </p>
                        </div>
                      </motion.div>

                      {/* Porta-Ganchos */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-500 rounded-lg p-3">
                            <span className="text-white text-lg sm:text-xl md:text-2xl">🔗</span>
                          </div>
                          <h3 className="text-xl font-bold text-purple-900">Porta-Ganchos y Porta-Herramientas</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Elementos diseñados para sujetar los ganchos de la línea de vida y las herramientas cuando no están en uso. 
                          Esto previene que queden colgando, <b className="text-purple-700">reduciendo significativamente los riesgos</b> 
                          de tropiezos y enganches.
                        </p>
                      </motion.div>
                    </div>
                  </section>

                  {/* Top 6 Productos */}
                  <section id="productos" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Arneses Destacados del Mercado Mexicano 2025
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
                      {/* Producto #1 - Combyeo Kit */}
                      <motion.div 
                        className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-yellow-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-yellow-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💰 #1
                          </Badge>
                          <Badge className="bg-red-100 text-red-800 px-4 py-2 font-bold">
                            NO RECOMENDADO PROFESIONAL
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Combyeo Arnés de Seguridad con Cuerda Doble y Gancho
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.2) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Muchas reseñas en ML) - 4.8/5</span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl mb-6 border-2 border-red-300">
                          <p className="text-red-800 font-semibold">
                            <strong>⚠️ ADVERTENCIA:</strong> Kit de ultra bajo costo con certificaciones NO verificables. 
                            NO recomendado para uso profesional regulado por STPS.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este producto es un claro ejemplo del segmento de ultra bajo costo que domina las listas de "más vendidos". 
                          Se comercializa como un kit "todo en uno" a un precio que rara vez supera los $500 MXN. Su principal atractivo 
                          es el <b>precio accesible</b>, pero presenta serias deficiencias en certificación.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ventajas Percibidas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Precio extremadamente accesible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Kit completo (arnés + línea de vida)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Conveniente para compra única</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Deficiencias Críticas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sin certificación NOM-009-STPS verificable</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sin certificación ANSI Z359.11 verificable</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Manuales frecuentemente solo en inglés</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Riesgo legal para empresas en inspecciones STPS</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-red-700 mb-2">⚠️ Rango: ~$400-500 MXN</p>
                              <p className="text-sm text-red-600 font-semibold">Solo para uso doméstico de muy bajo riesgo</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/arnes-seguridad-contra-caidas-con-cuerda-doble-y-gancho-3-m/p/MLM53473765"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #2 - Jyrsa JYR-10A */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-green-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥇 #2
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 px-4 py-2 font-bold">
                            MEJOR BÁSICO CERTIFICADO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Jyrsa JYR-10A (1 Anillo Dorsal)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(N/A - Marca confiable) - Excelente reputación</span>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-6">
                          <p className="text-green-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Construcción General, Andamios, Mantenimiento de Techos, Detención de Caídas
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El modelo JYR-10A de Jyrsa representa la <b className="text-green-700">opción de nivel de entrada confiable y certificada</b>, 
                          fabricada por una marca mexicana con sólida reputación en seguridad industrial. Este arnés está diseñado para cumplir 
                          una función esencial: la detención de caídas.
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Certificaciones Transparentes
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Su mayor fortaleza es la <b className="text-blue-700">transparencia en sus certificaciones</b>. El producto 
                            cumple explícitamente con la <b>NOM-009-STPS-2011</b> y la norma <b>ANSI Z359.1-2007</b>, garantizando su 
                            aceptación en cualquier entorno laboral regulado en México.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Cintas bicolor de alta visibilidad</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Indicadores de caída</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Capacidad de carga certificada: 140 kg</span>
                              </li>
                            </ul>
                          </div>
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
                                <span><b>Certificaciones claras:</b> NOM-009-STPS y ANSI Z359.1</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Indicadores de caída:</b> Seguridad adicional verificable</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca mexicana confiable:</b> Con soporte local</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Fichas técnicas detalladas</b> disponibles</span>
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
                                <span><b>Funcionalidad limitada:</b> Solo 1 anillo dorsal</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sin acolchado:</b> Menos cómodo para uso prolongado</span>
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
                              href="https://www.mercadolibre.com.mx/arnes-con-anillo-d-espalda-trabajo-alturas-jyrsa-jyr-10a-verde-alta-visibilidad/p/MLM43738470"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #3 - Truper 14434 */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-blue-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-blue-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            🥈 #3
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 font-bold">
                            MEJOR TODOTERRENO VERSÁTIL
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Truper 14434 (5 Anillos)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(200+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl mb-6">
                          <p className="text-blue-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Mantenimiento Industrial, Equipos Multitarea, Trabajos que requieren Posicionamiento y Rescate
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Proveniente de una de las marcas más reconocidas en el mercado ferretero mexicano, el arnés Truper 14434 es una 
                          opción extremadamente popular por su <b className="text-blue-700">versatilidad y precio competitivo</b>. Sus cinco 
                          puntos de anclaje lo convierten en una herramienta multifuncional.
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-purple-300">
                          <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center gap-2">
                            <Package className="h-6 w-6" />
                            Máxima Multifuncionalidad
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Equipado con <b className="text-purple-700">cinco anillos "D"</b> (uno dorsal, dos laterales en la cadera y 
                            dos en los hombros), este arnés es apto para:
                          </p>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="bg-white p-3 rounded-lg text-center">
                              <p className="font-bold text-purple-800">✓ Detención de Caídas</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center">
                              <p className="font-bold text-purple-800">✓ Posicionamiento</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center">
                              <p className="font-bold text-purple-800">✓ Rescate</p>
                            </div>
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
                                <span><b>Multifuncionalidad total:</b> 5 puntos de anclaje</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Certificaciones:</b> ANSI Z359.11 y EN 361</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Excelentes calificaciones:</b> 5.0 estrellas en ML</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Marca confiable:</b> Truper con distribución nacional</span>
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
                                <span><b>Nota de certificado:</b> "No disponible" en algunas fichas técnicas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sin acolchado:</b> En su rango de precio</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-blue-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-833998590-arnes-cuerpo-completo-5-anillos-truper-14434-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #4 - LICA-KIT */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-purple-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-purple-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            📦 #4
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 font-bold">
                            MEJOR SOLUCIÓN COMPLETA
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          LICA-KIT (Arnés, Amortiguador y Punto Fijo)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 || i === 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(58+ opiniones) - 4.7/5</span>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl mb-6">
                          <p className="text-purple-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Nuevos Contratistas, Estandarización de Equipos, Empresas que Buscan Compatibilidad Garantizada
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Este kit de la marca LICA, con la etiqueta <b>"Más Vendido"</b>, responde directamente a la necesidad del 
                          mercado de una <b className="text-purple-700">solución de seguridad integral y lista para usar</b>. El paquete 
                          incluye un arnés certificado, una línea de vida con amortiguador de impacto y un punto de anclaje.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-green-300">
                          <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                            <CheckCircle className="h-6 w-6" />
                            Certificaciones Múltiples
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Ofrece un <b className="text-green-700">sistema completo de detención de caídas</b> cuyos componentes están 
                            certificados bajo múltiples normas internacionales:
                          </p>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="bg-white p-3 rounded-lg text-center">
                              <p className="font-bold text-green-800">ANSI Z359.1-2014</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center">
                              <p className="font-bold text-green-800">CE: EN361:2002</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center">
                              <p className="font-bold text-green-800">EN 358:1999</p>
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
                                <span><b>Sistema completo:</b> Arnés + línea de vida + anclaje</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Compatibilidad garantizada:</b> Todos los componentes certificados juntos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Alta calificación:</b> 4.7 estrellas con 58+ opiniones</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Incluye mochila:</b> Para transporte y almacenamiento</span>
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
                                <span><b>Funcionalidad básica:</b> Arnés con solo 1 anillo dorsal</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Limitado a detención de caídas:</b> Sin posicionamiento</span>
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
                              href="https://articulo.mercadolibre.com.mx/MLM-594033466-lica-kit-kit-de-arnes-amortiguador-y-punto-fijo-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #5 - MSA V-Form */}
                      <motion.div 
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-indigo-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-indigo-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            👑 #5
                          </Badge>
                          <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 font-bold">
                            PROFESIONAL PREMIUM
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          MSA V-Form (3 Anillos)
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(85+ reseñas) - 5.0/5</span>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                          <p className="text-indigo-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Linieros, Técnicos de Telecomunicaciones, Personal de Turbinas Eólicas, Profesionales de Altura
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          El arnés V-Form de MSA, un <b className="text-indigo-700">líder mundial en equipos de seguridad</b>, representa 
                          el estándar profesional en términos de diseño, ergonomía y rendimiento. El modelo con tres anillos (dorsal y dos 
                          laterales en la cadera) está optimizado para profesionales que requieren tanto detención de caídas como 
                          posicionamiento de trabajo.
                        </p>

                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-orange-300">
                          <h4 className="font-bold text-orange-800 mb-3 text-lg flex items-center gap-2">
                            <TrendingUp className="h-6 w-6" />
                            Diseño Revolucionario RaceFORM
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Su calidad está respaldada por certificaciones robustas: <b>ANSI Z359.11, CSA Z259.10 y OSHA</b>. El diseño 
                            es su principal diferenciador, con la hebilla <b className="text-orange-700">"RaceFORM"</b> que crea:
                          </p>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-orange-800 text-sm">✓ Ajuste Atlético</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-orange-800 text-sm">✓ Sin Cintas Sueltas</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-bold text-orange-800 text-sm">✓ Movilidad Superior</p>
                            </div>
                          </div>
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
                                <span><b>Certificaciones premium:</b> ANSI, CSA, OSHA</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Diseño RaceFORM:</b> Ergonomía superior</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Alta capacidad:</b> Hasta 180 kg (OSHA)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Acolchado opcional:</b> Para máximo confort</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Calificación perfecta:</b> 5.0 estrellas</span>
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
                                <span><b>Precio premium:</b> Significativamente más caro</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Complejidad de opciones:</b> Amplia gama de configuraciones</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-indigo-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-indigo-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Ver precio actual y disponibilidad</p>
                            </div>
                            <a 
                              href="https://articulo.mercadolibre.com.mx/MLM-1663193802-arnes-v-form-msa-argolla-d-en-espalda-y-cadera-contra-caidas-_JM"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                            >
                              🛒 Ver en Mercado Libre →
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Producto #6 - Warthog Safety */}
                      <motion.div 
                        className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-teal-200"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-500 text-white font-bold text-lg px-4 sm:px-6 py-3">
                            💪 #6
                          </Badge>
                          <Badge className="bg-teal-100 text-teal-800 px-4 py-2 font-bold">
                            COMPETIDOR ROBUSTO
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          Warthog Safety Arnés 5 Puntos de Ajuste
                        </h3>

                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(Variable) - N/A</span>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-xl mb-6">
                          <p className="text-teal-800 font-semibold">
                            <strong>🎯 Ideal para:</strong> Industria General, Construcción, Alternativa Económica a Marcas Premium
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Warthog Safety se posiciona como un <b className="text-teal-700">fuerte competidor en el rango medio</b> del 
                          mercado, ofreciendo un arnés multifuncional con certificación clara a un precio accesible. Aunque algunas 
                          descripciones en línea son inconsistentes, el modelo más completo ofrece cinco anillos "D".
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl mb-6 border-2 border-blue-300">
                          <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center gap-2">
                            <Shield className="h-6 w-6" />
                            Certificación ANSI
                          </h4>
                          <p className="text-gray-700 mb-3">
                            El arnés cuenta con <b className="text-blue-700">certificación ANSI Z359.1-2007</b>, una garantía de 
                            cumplimiento con estándares de seguridad rigurosos. Dispone de <b>5 puntos de ajuste</b> para una adaptación 
                            segura al cuerpo del usuario.
                          </p>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="font-semibold text-blue-900 mb-2">Aplicaciones:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Detención de caídas</li>
                              <li>• Posicionamiento de trabajo</li>
                              <li>• Uso en espacios confinados</li>
                            </ul>
                          </div>
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
                                <span><b>Certificación ANSI Z359.1-2007</b></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>5 puntos de ajuste</b> para seguridad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Capacidad estándar:</b> 140 kg</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Alternativa económica</b> viable a marcas premium</span>
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
                                <span><b>Inconsistencia en descripciones:</b> Verificar modelo exacto</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><b>Sin características avanzadas:</b> No tiene acolchado ni indicadores explícitos</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-teal-700 mb-2">💰 Disponible en Mercado Libre</p>
                              <p className="text-sm text-gray-600">* Verificar especificaciones del modelo exacto</p>
                            </div>
                            <a 
                              href="https://www.mercadolibre.com.mx/arnes-seguridad-anti-caidas-warthog-safety-5-puntos-ajuste-color-verdenegro/p/MLM35606995"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
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
                      title="Análisis Comparativo: Los 3 Mejores Arneses Certificados"
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
                        🛒 Guía de Compra Rápida: 5 Pasos para la Elección Perfecta
                      </span>
                    </motion.h2>

                    <div className="space-y-8">
                      {/* Paso 1 */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-blue-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            1
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3">Diagnostica tu Riesgo</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              El punto de partida NO es el catálogo de productos, sino un <b className="text-blue-700">análisis de tu entorno 
                              de trabajo</b>. Define con precisión los peligros a los que te enfrentas diariamente.
                            </p>
                            <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl">
                              <h4 className="font-bold text-blue-800 mb-3">¿Qué Tareas Realizarás?</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Solo Detención de Caídas:</b> Arnés con 1 anillo dorsal (Jyrsa JYR-10A)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Con Posicionamiento:</b> Arnés con anillos laterales adicionales (Truper 14434, MSA V-Form)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span><b>Rescate/Espacios Confinados:</b> Arnés con anillos de hombro (Truper 14434)</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 2 */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            2
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-3">Verifica las Certificaciones</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Esta es <b className="text-green-700">LA DECISIÓN MÁS CRÍTICA</b>. Un arnés sin certificaciones verificables 
                              no solo te expone a riesgos legales, sino que pone en peligro tu vida.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-800 mb-2">✓ Certificaciones Mínimas</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• <b>NOM-009-STPS-2011</b> (México)</li>
                                  <li>• <b>ANSI Z359.11</b> (USA)</li>
                                  <li>• <b>EN 361</b> (Europa) - opcional</li>
                                </ul>
                              </div>
                              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                <h4 className="font-bold text-red-800 mb-2">❌ Señales de Alerta</h4>
                                <ul className="text-sm text-red-700 space-y-1">
                                  <li>• Sin etiqueta legible</li>
                                  <li>• Certificaciones "genéricas"</li>
                                  <li>• No especifica normas</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 3 - Domina tu Talla */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-4 border-purple-400"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            3
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-3">Domina tu Talla y Ajuste 🎯</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              <b className="bg-purple-200 px-2 py-1 rounded">Un arnés mal ajustado puede ser TAN PELIGROSO</b> como no 
                              llevarlo. Puede causar lesiones graves durante una caída o permitir que el trabajador se deslice fuera.
                            </p>

                            <div className="space-y-4">
                              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                                <h4 className="font-bold text-purple-900 mb-3 text-lg">📏 Procedimiento de Ajuste Correcto (5 Pasos)</h4>
                                <ol className="space-y-3 text-gray-700">
                                  <li className="flex items-start gap-3">
                                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                                    <span><b>Inspección Visual:</b> Antes de cada uso, inspecciona el arnés completamente</span>
                                  </li>
                                  <li className="flex items-start gap-3">
                                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                                    <span><b>Colocación Inicial:</b> Sostén por el anillo dorsal, introduce los brazos como chaleco</span>
                                  </li>
                                  <li className="flex items-start gap-3">
                                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                                    <span><b>Ajuste de Perneras:</b> Deben estar ceñidas pero no apretadas (regla: mano plana sí, puño no)</span>
                                  </li>
                                  <li className="flex items-start gap-3">
                                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                                    <span><b>Ajuste de Torso y Pecho:</b> Anillo dorsal centrado entre omóplatos, correa de pecho a altura del esternón</span>
                                  </li>
                                  <li className="flex items-start gap-3">
                                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                                    <span><b>Verificación Final:</b> Sin cintas torcidas, extremos recogidos en trabillas</span>
                                  </li>
                                </ol>
                              </div>

                              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-yellow-400">
                                <h4 className="font-bold text-yellow-900 text-lg mb-2">⚠️ Regla de Oro del Tallaje</h4>
                                <p className="text-gray-800 font-semibold">
                                  Si tus medidas están entre dos tallas, <b className="bg-yellow-300 px-2 py-1 rounded">SIEMPRE elige la 
                                  más grande</b>. Es mejor tener holgura que garantiza movilidad, que una prenda ajustada que restrinja y 
                                  pueda desgarrarse.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 4 */}
                      <motion.div 
                        className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-l-8 border-orange-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            4
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-3">Inspección y Mantenimiento</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              Un arnés es un equipo que <b className="text-orange-700">se degrada con el uso y el tiempo</b>. Un programa 
                              riguroso de inspección es un requisito legal y una práctica de seguridad indispensable.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-xl">
                                <h4 className="font-bold text-orange-800 mb-3">🔍 Inspección Pre-Uso (Diaria)</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span><b>Cintas:</b> Cortes, deshilachados, abrasión, quemaduras</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span><b>Herrajes:</b> Deformaciones, fisuras, corrosión</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span><b>Etiquetas:</b> Legibilidad y fecha dentro de vida útil</span>
                                  </li>
                                </ul>
                              </div>
                              
                              <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-xl">
                                <h4 className="font-bold text-orange-800 mb-3">📋 Inspección Formal (Anual)</h4>
                                <p className="text-sm text-gray-700 mb-3">
                                  La <b>NOM-009-STPS-2011</b> exige que una persona competente realice una inspección formal y 
                                  documentada al menos <b className="text-orange-700">una vez al año</b>.
                                </p>
                                <div className="bg-white p-3 rounded-lg">
                                  <p className="text-sm text-gray-700">
                                    ✓ Mantener registro con número de serie<br/>
                                    ✓ Documentar cada inspección<br/>
                                    ✓ Vida útil máxima: ~10 años
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                              <p className="text-red-800 font-semibold">
                                <AlertTriangle className="h-4 w-4 inline mr-2" />
                                <b>CRÍTICO:</b> Un arnés que ha detenido una caída debe ser <b>retirado y destruido inmediatamente</b>, 
                                sin importar su apariencia.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Paso 5 - TCO */}
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-white text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                            5
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Considera el Costo Total de Propiedad (TCO)</h3>
                            <p className="leading-relaxed mb-6 text-lg">
                              No te dejes guiar únicamente por el precio de compra. <b>Un arnés económico de $400 MXN que necesita ser 
                              reemplazado cada seis meses</b> resulta, a largo plazo, mucho más costoso que un modelo certificado de 
                              $1,000 MXN que puede durar varios años.
                            </p>
                            
                            <div className="bg-white/20 p-3 sm:p-4 md:p-6 rounded-xl backdrop-blur-sm">
                              <h4 className="font-bold text-xl mb-4">💰 Ejemplo de TCO Real</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-lg">
                                  <p className="font-bold text-red-300 mb-2">Arnés Sin Certificación</p>
                                  <ul className="text-sm space-y-1">
                                    <li>• Costo inicial: $400 MXN</li>
                                    <li>• Vida útil: 6 meses</li>
                                    <li>• <b className="text-red-300">Costo 2 años: $1,600 MXN</b></li>
                                    <li>• Reemplazos: 4</li>
                                    <li>• <b className="text-red-300">+ Riesgo legal incalculable</b></li>
                                  </ul>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                  <p className="font-bold text-green-300 mb-2">Arnés Certificado (Jyrsa/Truper)</p>
                                  <ul className="text-sm space-y-1">
                                    <li>• Costo inicial: $1,000-1,500 MXN</li>
                                    <li>• Vida útil: 2-5 años</li>
                                    <li>• <b className="text-green-300">Costo 2 años: $1,000-1,500 MXN</b></li>
                                    <li>• Reemplazos: 0</li>
                                    <li>• <b className="text-green-300">✓ Cumplimiento normativo</b></li>
                                  </ul>
                                </div>
                              </div>
                              <p className="text-center mt-4 text-lg font-bold text-yellow-300">
                                💡 La certificación no es un gasto, es una inversión en seguridad y ahorro
                              </p>
                            </div>
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
                            className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-orange-50 hover:from-orange-50 hover:to-red-50 transition-all flex items-center justify-between gap-4"
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
                        🎯 Conclusión: Equípate con Inteligencia
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-lg mb-4 sm:mb-6 md:mb-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                          <Shield className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <p className="text-xl text-gray-800 leading-relaxed mb-4">
                            Desde la <b className="text-green-700">resistencia legendaria de un arnés certificado Jyrsa</b> hasta la 
                            versatilidad profesional del Truper 14434 y la ergonomía premium del MSA V-Form, hemos recorrido el espectro 
                            completo de arneses de seguridad disponibles para el profesional en México.
                          </p>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            La elección final, como hemos visto, <b>depende de los riesgos y exigencias de tu labor diaria</b>. Sin embargo, 
                            ahora cuentas con las herramientas para decidir con inteligencia y precisión.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 mt-8">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-green-200">
                          <div className="text-center mb-4">
                            <TrendingUp className="h-10 w-10 mx-auto text-green-600 mb-2" />
                            <h3 className="text-lg font-bold text-green-900">Mejor Certificado Básico</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Jyrsa JYR-10A</b> - Cumplimiento normativo garantizado, ideal para detención de caídas con marca mexicana confiable.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-blue-200">
                          <div className="text-center mb-4">
                            <Package className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                            <h3 className="text-lg font-bold text-blue-900">Mejor Versátil</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>Truper 14434</b> - 5 anillos, certificación ANSI y EN, perfecto balance funcionalidad-precio para equipos multitarea.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md border border-purple-200">
                          <div className="text-center mb-4">
                            <Star className="h-10 w-10 mx-auto text-purple-600 mb-2" />
                            <h3 className="text-lg font-bold text-purple-900">Mejor Premium</h3>
                          </div>
                          <p className="text-gray-700 text-center">
                            <b>MSA V-Form</b> - El estándar profesional para quienes viven en su arnés: linieros, técnicos de altura, profesionales exigentes.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="h-8 w-8" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Tu Decisión, Tu Seguridad</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Recuerda: <b>el arnés adecuado es aquel que te permite concentrarte plenamente en tu trabajo</b>, con la tranquilidad 
                        de que tu seguridad está garantizada. Invierte en calidad, prioriza las certificaciones verificables y trabaja con 
                        la confianza que solo la protección correcta puede ofrecer.
                      </p>
                      <p className="text-xl font-bold text-center bg-white/20 p-4 rounded-xl">
                        🛡️ La seguridad en el trabajo no es, ni será nunca, negociable 🛡️
                      </p>
                    </motion.div>

                    <motion.div 
                      className="mt-8 text-center bg-gradient-to-r from-yellow-100 to-amber-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-yellow-400"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        ¿Cuál de estos arneses se convertirá en tu compañero de altura? 
                      </p>
                      <p className="text-lg text-orange-800 font-semibold">
                        🧗 Equípate bien, trabaja seguro, regresa a casa 🧗
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