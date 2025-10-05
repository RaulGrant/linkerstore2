'use client';

import { motion, AnimatePresence } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import ProductComparison from '@/components/blog/ProductComparison';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  AlertTriangle, 
  Package,
  Heart,
  Briefcase,
  AlertCircle,
  Info,
  ChevronDown,
  ExternalLink,
  ShoppingCart,
  Flame,
  Eye,
  Droplets,
  Scissors,
  ThermometerSun,
  HelpCircle,
  FileText,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

export default function BotiquinesEmergenciaArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<'bajo' | 'medio' | 'alto'>('bajo');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'jaloma-22',
      name: 'Jaloma Botiquín 22 pzas',
      rating: 4.8,
      reviewCount: 300,
      isRecommended: true,
      bestFor: 'Opción Económica',
      amazonLink: 'https://www.mercadolibre.com.mx/jaloma-botiquin-en-caja-plastica-primeros-auxilios-22-pzas/p/MLM35212740'
    },
    {
      id: 'surtek-gabinete',
      name: 'Gabinete Surtek (Vacío)',
      rating: 4.8,
      reviewCount: 220,
      isRecommended: true,
      bestFor: 'Base Industrial',
      amazonLink: 'https://www.mercadolibre.com.mx/caja-para-botiquin-de-primeros-auxilios-surtek/p/MLM23015343'
    },
    {
      id: 'matein-1233',
      name: 'Matein 1233 Multicompartimiento',
      rating: 4.9,
      reviewCount: 284,
      isRecommended: false,
      bestFor: 'Portátil Profesional',
      amazonLink: 'https://www.mercadolibre.com.mx/botiquin-multicompartimiento-de-primeros-auxilios-matein-1233-impermeable-color-negro/p/MLM37682961'
    }
  ];

  const comparisonFeatures = [
    { name: 'Tipo de Estuche', product1: 'Plástico Portátil', product2: 'Metal Fijo', product3: 'Tela Impermeable' },
    { name: 'Capacidad Personas', product1: '10-25', product2: '50+ (vacío)', product3: '50+ (vacío)' },
    { name: 'Incluye Insumos', product1: 'Sí (22 piezas)', product2: 'No (vacío)', product3: 'No (vacío)' },
    { name: 'Material Curación', product1: 'Básico', product2: 'Personalizable', product3: 'Personalizable' },
    { name: 'Portabilidad', product1: 'Alta', product2: 'Fijo', product3: 'Muy Alta' },
    { name: 'Durabilidad', product1: 'Media', product2: 'Muy Alta', product3: 'Alta' },
    { name: 'Ideal Para', product1: 'Oficinas/Hogar', product2: 'Industrial', product3: 'Brigadistas/Vehículos' },
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
      excerpt: 'Materiales, normativas mexicanas y los 6 productos más destacados.',
      description: 'Materiales, normativas mexicanas y los 6 productos más destacados.',
      category: 'EPP',
      publishDate: '3 Oct 2025',
      readTime: '22 min',
      image: '/images/overoles.jpg',
      slug: 'guia-completa-mejores-overoles-trabajo-2025'
    },
    {
      id: '3',
      title: 'Escaleras Industriales: Guía de Compra y Mejores Modelos 2025',
      excerpt: 'Guía definitiva de características, seguridad y los 5 productos más destacados.',
      description: 'Guía definitiva de características, seguridad y los 5 productos más destacados.',
      category: 'Equipo Industrial',
      publishDate: '5 Oct 2025',
      readTime: '18 min',
      image: '/images/escaleras-industriales.jpg',
      slug: 'escaleras-industriales-guia-compra-mejores-modelos'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Qué normativa de la STPS deben cumplir los botiquines en México?',
      answer: 'No existe una única norma que "certifique" un botiquín. El cumplimiento es una suma de responsabilidades del empleador. La NOM-005-STPS-1998 ofrece una guía de contenido que, aunque no es obligatoria, es la referencia más común. La NOM-030-STPS-2009 obliga a las empresas a realizar un análisis de riesgos, y el botiquín debe ser adecuado para responder a ese análisis. Finalmente, otras normas específicas como la NOM-006-STPS-2014 (manejo de materiales) exigen contar con el material de curación adecuado para los riesgos particulares de la actividad. En resumen, el botiquín debe ser "adecuado" para los peligros identificados en su empresa.'
    },
    {
      question: '¿Es obligatorio tener un botiquín en mi negocio aunque sea pequeño?',
      answer: 'Sí. El Reglamento Federal de Seguridad y Salud en el Trabajo establece la obligación general de contar con un botiquín de primeros auxilios en todos los centros de trabajo, sin excepción por tamaño. La NOM-030-STPS-2009 aplica a "todos los centros de trabajo donde laboren trabajadores", lo cual incluye a las micro y pequeñas empresas. El tamaño y contenido del botiquín debe ajustarse a los riesgos identificados y al número de trabajadores, pero la obligación de tenerlo es universal.'
    },
    {
      question: '¿Cada cuánto tiempo debo revisar y reabastecer el botiquín?',
      answer: 'La revisión debe ser al menos mensual. En cada revisión, se debe: 1) Verificar las fechas de caducidad de todos los productos y desechar los vencidos, 2) Reponer inmediatamente cualquier material que se haya utilizado, 3) Confirmar que el contenido real coincide con el inventario listado, 4) Inspeccionar el estado físico del estuche y su accesibilidad. Mantener un registro escrito de estas revisiones es una buena práctica y puede ser requerido en inspecciones de la STPS.'
    },
    {
      question: '¿Un botiquín básico es suficiente para cualquier industria?',
      answer: 'No. Un botiquín "genérico" es insuficiente para entornos de riesgo medio o alto. Por ejemplo, una empresa de construcción, manufactura pesada o que maneje químicos debe contar con insumos especializados como apósitos para quemaduras, estaciones de lavado ocular, vendajes de compresión y, en algunos casos, kits de control de hemorragias (IFAK). El botiquín debe ser el resultado de un análisis de riesgo específico de la empresa, no una compra estándar sin evaluación.'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema médico/emergencia */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (100 partículas) */}
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-large-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 7),
                  height: 4 + (i % 7),
                  backgroundColor: `hsl(${340 + (i * 10)}, 85%, ${65 + (i % 25)}%)`,
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

            {/* Íconos médicos flotantes (25 iconos) */}
            {Array.from({ length: 25 }, (_, i) => (
              <motion.div
                key={`medical-${i}`}
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
                {i % 3 === 0 ? <Heart className="w-6 h-6" /> : 
                 i % 3 === 1 ? <Shield className="w-6 h-6" /> : 
                 <AlertCircle className="w-6 h-6" />}
              </motion.div>
            ))}

            {/* Ondas de emergencia (40 ondas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute border-2 border-red-400 rounded-full opacity-30"
                style={{
                  width: `${80 + (i * 20)}px`,
                  height: `${80 + (i * 20)}px`,
                  left: `${(i * 11) % 90}%`,
                  top: `${(i * 17) % 90}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0.1, 0.4],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="h-4 w-4" />
                🏥 Seguridad en el Trabajo
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
                📋 Guía completa sobre normativas mexicanas, características clave y los 6 productos más destacados del mercado
              </motion.p>

              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2 Oct 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>20 min lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Seguridad Industrial</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 relative overflow-hidden min-h-screen">
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
                  background: `hsl(${340 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                  className="prose prose-lg max-w-none"
                >                  {/* Introducción */}
                  <section id="introduccion" className="mb-16">
                    <motion.div 
                      className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-red-200 mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-xl text-gray-700 leading-relaxed mb-4">
                        En cualquier lugar de trabajo, desde una tranquila oficina hasta una ajetreada obra de construcción, 
                        <b className="text-red-600"> el riesgo de un accidente es una realidad inevitable</b>. Los segundos que 
                        siguen a un incidente son críticos, y la diferencia entre un susto menor y una emergencia grave a menudo 
                        reside en una sola cosa: <b className="text-red-700">la preparación</b>.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Contar con el botiquín de primeros auxilios adecuado no es solo una obligación legal en México, es la 
                        herramienta fundamental que demuestra el <b className="text-red-600">compromiso de una empresa con la 
                        seguridad y el bienestar de su equipo</b>.
                      </p>
                    </motion.div>
                  </section>

                  {/* Advertencia de reseñas */}
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 border-4 border-yellow-400 p-6 rounded-2xl mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-yellow-900 mb-2">⚠️ Importante sobre las reseñas de productos</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Las calificaciones y número de reseñas mencionadas en este artículo son aproximadas y pueden variar. 
                          Siempre verifica la información actualizada directamente en las páginas de los productos antes de realizar 
                          tu compra. Las condiciones, disponibilidad y precios están sujetos a cambios sin previo aviso.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Guía de Características Clave */}
                  <section id="caracteristicas-clave" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        🎯 Guía de Características Clave
                      </span>
                    </motion.h2>

                    <motion.p 
                      className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Elegir un botiquín de primeros auxilios para un entorno laboral en México va más allá de simplemente seleccionar 
                      el que contiene más piezas. <b className="text-red-600">Una decisión informada debe considerar el marco normativo, 
                      los riesgos específicos y las necesidades logísticas</b> del centro de trabajo.
                    </motion.p>

                    {/* Cumplimiento Normativo */}
                    <motion.div 
                      className="bg-white p-8 rounded-2xl border-2 border-red-200 mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <FileText className="h-8 w-8 text-red-600" />
                        <h3 className="text-2xl font-bold text-gray-900">Cumplimiento Normativo en México</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Un error común es buscar un botiquín "certificado" que garantice el cumplimiento total. En la práctica, 
                        <b className="text-red-600"> no existe tal certificación unificada</b>. La responsabilidad final recae en 
                        el empleador, quien debe ensamblar un sistema de respuesta basado en un análisis de riesgos.
                      </p>
                      <div className="bg-red-50 p-6 rounded-xl mb-4">
                        <h4 className="font-bold text-red-900 mb-3">Normativas Relevantes:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span><b>NOM-005-STPS-1998:</b> Ofrece guía de contenido (no obligatoria, pero es la mejor referencia)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span><b>NOM-030-STPS-2009:</b> Exige diagnóstico de seguridad y salud</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span><b>NOM-006-STPS-2014:</b> Requiere botiquín conforme a riesgos identificados</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 border-2 border-yellow-300 p-5 rounded-xl">
                        <p className="text-gray-800 font-semibold">
                          ⚡ La NOM-005-STPS-1998 recomienda organizar el contenido en 4 categorías: Material Seco, 
                          Material Líquido, Instrumental y Material Complementario.
                        </p>
                      </div>
                    </motion.div>

                    {/* Adecuación al Nivel de Riesgo */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <AlertTriangle className="h-7 w-7 text-red-600" />
                        Adecuación al Nivel de Riesgo
                      </h3>

                      {/* Selector de nivel de riesgo */}
                      <div className="flex justify-center gap-4 mb-8">
                        <button
                          onClick={() => setSelectedRisk('bajo')}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            selectedRisk === 'bajo'
                              ? 'bg-green-500 text-white shadow-lg scale-105'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          🟢 Bajo Riesgo
                        </button>
                        <button
                          onClick={() => setSelectedRisk('medio')}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            selectedRisk === 'medio'
                              ? 'bg-yellow-500 text-white shadow-lg scale-105'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          🟡 Riesgo Medio
                        </button>
                        <button
                          onClick={() => setSelectedRisk('alto')}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            selectedRisk === 'alto'
                              ? 'bg-red-500 text-white shadow-lg scale-105'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          🔴 Alto Riesgo
                        </button>
                      </div>

                      <AnimatePresence mode="wait">
                        {selectedRisk === 'bajo' && (
                          <motion.div
                            key="bajo"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                          >
                            <h4 className="text-2xl font-bold text-green-900 mb-4">Entornos de Bajo Riesgo</h4>
                            <p className="text-gray-700 mb-4"><b>Ejemplos:</b> Oficinas, comercios, servicios profesionales</p>
                            <div className="bg-white p-6 rounded-xl mb-4">
                              <h5 className="font-bold text-green-800 mb-3">Incidentes más comunes:</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span>Cortes con papel</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span>Pequeños raspones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span>Caídas menores</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                                  <span>Malestares generales</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-green-100 p-5 rounded-xl">
                              <p className="text-green-900 font-semibold">
                                💡 Recomendación: El Botiquín Jaloma es ideal para este nivel, con vendas adhesivas, 
                                gasas pequeñas y toallitas antisépticas.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {selectedRisk === 'medio' && (
                          <motion.div
                            key="medio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border-2 border-yellow-300"
                          >
                            <h4 className="text-2xl font-bold text-yellow-900 mb-4">Entornos de Riesgo Medio</h4>
                            <p className="text-gray-700 mb-4"><b>Ejemplos:</b> Restaurantes, talleres mecánicos, manufactura ligera</p>
                            <div className="bg-white p-6 rounded-xl mb-4">
                              <h5 className="font-bold text-yellow-800 mb-3">Riesgos incrementados:</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                  <span>Cortes más profundos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                  <span>Quemaduras por calor o químicos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                  <span>Lesiones oculares por partículas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                  <span>Esguinces</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-yellow-100 p-5 rounded-xl">
                              <p className="text-yellow-900 font-semibold">
                                💡 Recomendación: Botiquín metálico equipado con apósitos grandes, vendas elásticas, 
                                insumos para quemaduras y estaciones de lavado ocular.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {selectedRisk === 'alto' && (
                          <motion.div
                            key="alto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl border-2 border-red-300"
                          >
                            <h4 className="text-2xl font-bold text-red-900 mb-4">Entornos de Alto Riesgo</h4>
                            <p className="text-gray-700 mb-4"><b>Ejemplos:</b> Construcción, industria pesada, minería, seguridad privada</p>
                            <div className="bg-white p-6 rounded-xl mb-4">
                              <h5 className="font-bold text-red-800 mb-3">Emergencias críticas:</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                                  <span>Hemorragias severas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                                  <span>Fracturas expuestas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                                  <span>Shock hipovolémico</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                                  <span>Trauma que amenaza la vida</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-red-100 p-5 rounded-xl">
                              <p className="text-red-900 font-semibold">
                                💡 Recomendación: Botiquín general + Kit de Trauma (IFAK) con torniquetes de combate, 
                                vendajes de compresión israelí, agentes hemostáticos y mantas térmicas.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </section>
                  {/* Top 6 Productos */}
                  <section id="top-productos" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        🏆 Top 6 Botiquines Más Destacados en México
                      </span>
                    </motion.h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {/* Producto 1: Jaloma */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-red-200 p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-green-500 mb-3">Mejor Económico</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Jaloma Botiquín 22 pzas</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.8 (300+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Kit básico y popular, ideal para oficinas pequeñas y hogar. Estuche plástico portátil con elementos esenciales.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Muy económico y accesible</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Marca reconocida en México</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://www.mercadolibre.com.mx/jaloma-botiquin-en-caja-plastica-primeros-auxilios-22-pzas/p/MLM35212740', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 2: Gabinete Surtek */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-red-200 p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-blue-500 mb-3">Base Industrial</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Gabinete Surtek (Vacío)</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.8 (220+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Gabinete metálico vacío para montar en pared. Ideal para personalización según análisis de riesgos de la empresa.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Material muy resistente</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Personalización total</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://www.mercadolibre.com.mx/caja-para-botiquin-de-primeros-auxilios-surtek/p/MLM23015343', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 3: Botiquín Metálico Mediano */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-red-200 p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-purple-500 mb-3">Oficinas</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Botiquín Metálico de Pared</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.9 (69+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Gabinete metálico equipado con material básico. Solución lista para usar en oficinas y comercios.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Listo para usar</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Apariencia profesional</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://www.mercadolibre.com.mx/botiquin-metalico-extra-grande-mayor-capacidad-y-seguridad/p/MLM2040441748', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 4: Matein 1233 */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-red-200 p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-orange-500 mb-3">Portátil Pro</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Matein 1233 Multicompartimiento</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.9 (284+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Maleta impermeable de gran capacidad para brigadistas y vehículos. Múltiples compartimentos organizados.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Gran organización interna</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Material impermeable</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://www.mercadolibre.com.mx/botiquin-multicompartimiento-de-primeros-auxilios-matein-1233-impermeable-color-negro/p/MLM37682961', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 5: Blekrasi Táctico */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-red-200 p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-red-500 mb-3">Kit Trauma</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Blekrasi Kit Táctico</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.8 (86+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Kit IFAK para control de hemorragias y trauma severo. Complemento vital para industrias de alto riesgo.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Insumos especializados</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Sistema MOLLE</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://www.mercadolibre.com.mx/blekrasi-kit-tactico-de-primeros-auxilios-de-emergencia-kit-de-supervivencia-de-primeros-auxilios-verde/p/MLM45691097', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>

                      {/* Producto 6: Industrial Num.5 */}
                      <motion.div
                        className="bg-white rounded-2xl border-2 border-red-200 p-6 hover:shadow-2xl transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Badge className="bg-gray-700 mb-3">Industria Pesada</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Botiquín Industrial Num.5</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">4.7 (43+ reseñas)</span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Gabinete metálico robusto de gran tamaño para fábricas y talleres. Construcción para uso rudo industrial.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Gran capacidad</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">Construcción robusta</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open('https://www.mercadolibre.com.mx/botiquin-industrial-primeros-auxilios-urgencias-medico-num5/up/MLMU513224577', '_blank')}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar en Mercado Libre
                        </Button>
                      </motion.div>
                    </div>
                  </section>

                  {/* Tabla Comparativa */}
                  <section id="comparacion" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        📊 Tabla Comparativa Detallada
                      </span>
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8"
                    >
                      <ProductComparison 
                        products={comparisonProducts}
                        features={comparisonFeatures}
                      />
                    </motion.div>
                  </section>
                  {/* Guía de Compra Rápida */}
                  <section id="guia-compra" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        💡 Guía de Compra Rápida
                      </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* 3 Consejos Clave */}
                      <motion.div
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-2xl font-bold text-green-900 mb-6">✅ 3 Consejos Clave</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                              <span className="text-white font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-green-900 mb-1">Realiza tu Análisis de Riesgos</h4>
                              <p className="text-gray-700 text-sm">
                                Antes de comprar, lista los peligros específicos de tu lugar de trabajo. 
                                Tu botiquín debe responder directamente a esa lista.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                              <span className="text-white font-bold">2</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-green-900 mb-1">Piensa en un "Sistema"</h4>
                              <p className="text-gray-700 text-sm">
                                Combina un gabinete fijo central con kits portátiles para vehículos y áreas remotas.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                              <span className="text-white font-bold">3</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-green-900 mb-1">Calidad sobre Cantidad</h4>
                              <p className="text-gray-700 text-sm">
                                No te dejes llevar por kits que anuncian "299 piezas". Importa más la calidad 
                                y utilidad real de los insumos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3 Errores a Evitar */}
                      <motion.div
                        className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl border-2 border-red-300"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-2xl font-bold text-red-900 mb-6">❌ 3 Errores Comunes</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-red-900 mb-1">Comprar lo más Barato</h4>
                              <p className="text-gray-700 text-sm">
                                Adquirir el kit más económico sin verificar que sea adecuado para tus riesgos 
                                te deja desprotegido legal y operativamente.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-red-900 mb-1">Guardarlo Bajo Llave</h4>
                              <p className="text-gray-700 text-sm">
                                Debe estar visible, señalizado y accesible sin candados. El tiempo es crítico 
                                en emergencias.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-red-900 mb-1">No Capacitar al Personal</h4>
                              <p className="text-gray-700 text-sm">
                                El mejor botiquín no sirve si nadie sabe usar correctamente sus componentes. 
                                La capacitación es fundamental.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Mantenimiento */}
                    <motion.div
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Package className="h-8 w-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-blue-900">Mantenimiento del Botiquín</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Un botiquín es un recurso dinámico, no estático. Es crucial designar a una persona responsable de su 
                        <b className="text-blue-700"> revisión mensual</b>: verificar fechas de caducidad, reponer material utilizado, 
                        confirmar inventario y mantenerlo en lugar fresco, seco y limpio. <b className="text-blue-700">Mantener un registro 
                        escrito</b> de estas revisiones es buena práctica y puede ser requerido en inspecciones de la STPS.
                      </p>
                    </motion.div>
                  </section>

                  {/* Preguntas Frecuentes */}
                  <section id="faqs" className="mb-16">
                    <motion.h2 
                      className="text-4xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        ❓ Preguntas Frecuentes
                      </span>
                    </motion.h2>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl border-2 border-red-200 overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <button
                            onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-red-50 transition-colors"
                          >
                            <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-red-600" />
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
                                <div className="p-6 bg-white text-gray-700 leading-relaxed border-t border-red-100">
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
                        🎯 Conclusión: La Preparación Salva Vidas
                      </span>
                    </motion.h2>

                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">La Seguridad No Puede Esperar</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Contar con el botiquín de primeros auxilios adecuado es <b>mucho más que cumplir con una obligación legal</b>. 
                        Es un compromiso tangible con la seguridad y el bienestar de cada persona que forma parte de tu equipo. 
                        Los segundos que siguen a un accidente son críticos, y <b className="text-yellow-300">la preparación marca 
                        la diferencia</b> entre un susto menor y una tragedia.
                      </p>
                      <p className="text-lg leading-relaxed mb-4">
                        Recuerda que no existe una solución única para todos. El botiquín correcto es aquel que responde directamente 
                        a los <b>riesgos específicos identificados en tu análisis de seguridad</b>, que es accesible en segundos, 
                        y cuyo personal sabe usar correctamente.
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                        <p className="text-xl font-bold text-center">
                          💚 Invierte en preparación hoy. Tu equipo te lo agradecerá mañana.
                        </p>
                      </div>
                    </motion.div>
                  </section>

                  {/* Artículos Relacionados */}
                  <motion.section
                    id="articulos-relacionados"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mb-16"
                  >
                    <RelatedArticles articles={relatedArticles} />
                  </motion.section>

                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
