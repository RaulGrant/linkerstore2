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
  Heart,
  Activity,
  Eye,
  Info,
  TrendingUp,
  Package,
  ChevronDown,
  FileText,
  HeartPulse,
  Siren
} from 'lucide-react';
import { useState } from 'react';

export default function BotiquinesEmergenciaArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedRiesgo, setSelectedRiesgo] = useState<'bajo' | 'medio' | 'alto'>('bajo');

  // Datos para comparación de productos
  const comparisonProducts = [
    {
      id: 'jaloma-basico',
      name: 'Jaloma Botiquín Caja Plástica (22 pzas)',
      rating: 4.8,
      reviewCount: 300,
      isRecommended: true,
      bestFor: 'Opción Económica / Oficinas',
      amazonLink: 'https://www.mercadolibre.com.mx/jaloma-botiquin-en-caja-plastica-primeros-auxilios-22-pzas/p/MLM35212740'
    },
    {
      id: 'surtek-gabinete',
      name: 'Gabinete Surtek (Vacío)',
      rating: 4.8,
      reviewCount: 220,
      isRecommended: true,
      bestFor: 'Base Kit Fijo / Industrial',
      amazonLink: 'https://www.mercadolibre.com.mx/caja-para-botiquin-de-primeros-auxilios-surtek/p/MLM23015343'
    },
    {
      id: 'metalico-mediano',
      name: 'Botiquín Metálico Equipado',
      rating: 4.9,
      reviewCount: 69,
      isRecommended: false,
      bestFor: 'Oficinas y Comercios',
      amazonLink: 'https://www.mercadolibre.com.mx/botiquin-metalico-extra-grande-mayor-capacidad-y-seguridad/p/MLM2040441748'
    },
    {
      id: 'matein-portatil',
      name: 'Matein 1233 Multicompartimiento',
      rating: 4.6,
      reviewCount: 142,
      isRecommended: false,
      bestFor: 'Portátil Profesional',
      amazonLink: 'https://www.mercadolibre.com.mx/botiquin-multicompartimiento-de-primeros-auxilios-matein-1233-impermeable-color-negro/p/MLM37682961'
    },
    {
      id: 'blekrasi-tactico',
      name: 'Blekrasi Kit Táctico',
      rating: 4.5,
      reviewCount: 87,
      isRecommended: false,
      bestFor: 'Alto Riesgo / Trauma',
      amazonLink: 'https://www.mercadolibre.com.mx/blekrasi-kit-tactico-de-primeros-auxilios-de-emergencia-kit-de-supervivencia-de-primeros-auxilios-verde/p/MLM45691097'
    },
    {
      id: 'uline-100p',
      name: 'Uline Kit 100 Personas',
      rating: 4.7,
      reviewCount: 45,
      isRecommended: false,
      bestFor: 'Plantas Industriales',
      amazonLink: 'https://es.uline.mx/Product/Detail/H-9590/First-Aid/Uline-First-Aid-Kit-Mexico-100-Person'
    }
  ];

  const comparisonFeatures = [
    { name: 'Tipo de Estuche', product1: 'Plástico Portátil', product2: 'Metálico Vacío', product3: 'Metálico Equipado', product4: 'Textil Impermeable', product5: 'Textil Táctico', product6: 'Gabinete Grande' },
    { name: 'Número de Piezas', product1: '22 pzas', product2: 'N/A (Vacío)', product3: 'Básico', product4: '~200 pzas', product5: 'Control Hemorragia', product6: '100 personas' },
    { name: 'Montaje en Pared', product1: false, product2: true, product3: true, product4: false, product5: false, product6: true },
    { name: 'Portabilidad', product1: true, product2: false, product3: false, product4: true, product5: true, product6: false },
    { name: 'Nivel de Riesgo', product1: 'Bajo', product2: 'Todos', product3: 'Bajo-Medio', product4: 'Medio', product5: 'Alto', product6: 'Medio-Alto' },
    { name: 'Personalizable', product1: false, product2: true, product3: false, product4: true, product5: false, product6: false },
    { name: 'Disponibilidad', product1: 'Mercado Libre', product2: 'Mercado Libre', product3: 'Mercado Libre', product4: 'Mercado Libre', product5: 'Mercado Libre', product6: 'Uline' }
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
      title: 'Monitores de Gases: La Protección Invisible Vital',
      excerpt: 'Tecnología, normativas y comparativa de los mejores detectores multigás.',
      description: 'Tecnología, normativas y comparativa de los mejores detectores multigás.',
      category: 'Seguridad',
      publishDate: '1 Oct 2025',
      readTime: '18 min',
      image: '/images/monitores-gases.jpg',
      slug: 'monitores-gases-proteccion-invisible-vitales'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Existe un botiquín "certificado" que garantice el cumplimiento de todas las normas mexicanas?',
      answer: 'No. En la práctica, no existe una certificación unificada de botiquines en México. La responsabilidad final de un cumplimiento adecuado recae en el empleador, quien debe ensamblar un sistema de respuesta a emergencias basado en el análisis de sus propios riesgos. La NOM-005-STPS-1998 ofrece una guía de referencia que es "No obligatoria" pero sirve como excelente punto de partida. La verdadera obligación emana de la NOM-030-STPS-2009 y NOM-006-STPS-2014, que exigen que cada empresa realice un diagnóstico de seguridad y salud para identificar riesgos particulares.'
    },
    {
      question: '¿Qué diferencia hay entre un botiquín de oficina y uno para construcción?',
      answer: 'La diferencia es crítica. Un botiquín de oficina (bajo riesgo) está diseñado para cortes menores, raspones y malestares generales, con vendas adhesivas y material básico. En construcción (alto riesgo), se necesita estar preparado para emergencias de trauma que amenazan la vida: hemorragias severas, fracturas expuestas o shock hipovolémico. Además del botiquín general, es altamente recomendable contar con un Kit de Control de Hemorragias (IFAK) que incluye torniquetes de combate, vendajes de compresión israelí y agentes hemostáticos.'
    },
    {
      question: '¿Debo comprar un gabinete metálico vacío o uno ya equipado?',
      answer: 'Depende de tu nivel de conocimiento y necesidades específicas. Un gabinete vacío (como el Surtek) es ideal para empresas que han realizado un análisis de riesgo detallado y quieren personalizar completamente el contenido según sus necesidades exactas. Un botiquín equipado es mejor para quien necesita una solución rápida y confiable sin tener que investigar cada insumo. La mayoría de los equipados cubre necesidades básicas pero puede requerir suplementos para riesgos específicos.'
    },
    {
      question: '¿Con qué frecuencia debo revisar y reabastecer el botiquín?',
      answer: 'Se recomienda una inspección mensual para verificar fechas de caducidad, integridad de empaques y cantidad de insumos. Los materiales consumibles como gasas, vendas y antisépticos deben reponerse inmediatamente después de usarse. Los medicamentos y soluciones tienen fechas de vencimiento que deben respetarse estrictamente. Además, después de cualquier uso significativo del botiquín, debe realizarse un reabastecimiento completo. Es importante llevar un registro escrito de estas inspecciones.'
    },
    {
      question: '¿Necesito capacitación para usar el contenido del botiquín?',
      answer: 'Sí, absolutamente. Un botiquín bien surtido sin personal capacitado es inútil e incluso peligroso. La NOM-030-STPS-2009 exige que las empresas proporcionen capacitación en primeros auxilios. Como mínimo, debe haber trabajadores designados con certificación básica en RCP y primeros auxilios. Para entornos de alto riesgo, se recomienda capacitación avanzada que incluya control de hemorragias y manejo de trauma. La capacitación debe actualizarse cada 2 años.'
    },
    {
      question: '¿Qué es un kit IFAK y cuándo lo necesito?',
      answer: 'IFAK significa "Individual First Aid Kit" (Kit Individual de Primeros Auxilios) y es un kit táctico especializado en control de hemorragias severas y trauma. Incluye torniquetes de combate CAT o SOFTT, vendajes de compresión israelí, agentes hemostáticos, mantas térmicas y material de inmovilización. Es esencial para entornos de alto riesgo como construcción, industria pesada, minería y seguridad privada, donde las lesiones pueden ser mortales si no se controlan en los primeros minutos. No reemplaza al botiquín general, sino que lo complementa.'
    }
  ];

  return (
    <BlogLayout>
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-700 via-rose-600 to-pink-600 text-white py-24 overflow-hidden">
          {/* Fondo animado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Pulsos de emergencia (18 pulsos) */}
            {Array.from({ length: 18 }, (_, i) => (
              <motion.div
                key={\`pulse-\${i}\`}
                className="absolute text-white/20"
                style={{
                  left: \`\${(i * 14) % 100}%\`,
                  top: \`\${(i * 19) % 100}%\`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0, 0.4],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                {i % 4 === 0 ? <HeartPulse className="w-8 h-8" /> : 
                 i % 4 === 1 ? <Shield className="w-8 h-8" /> : 
                 i % 4 === 2 ? <Activity className="w-8 h-8" /> :
                 <Heart className="w-8 h-8" />}
              </motion.div>
            ))}

            {/* Ondas de socorro (35 ondas) */}
            {Array.from({ length: 35 }, (_, i) => (
              <motion.div
                key={\`wave-\${i}\`}
                className="absolute border-2 border-red-300 rounded-full opacity-20"
                style={{
                  width: 80,
                  height: 80,
                  left: \`\${(i * 6) % 100}%\`,
                  top: \`\${(i * 8) % 100}%\`,
                }}
                animate={{
                  scale: [0, 4, 0],
                  opacity: [0.5, 0, 0.3]
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
                <HeartPulse className="h-4 w-4" />
                🏥 Seguridad Laboral
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
                🩹 Guía completa de normativas mexicanas, productos y mejores prácticas para cada entorno laboral
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
        <div className="bg-gradient-to-br from-slate-50 via-red-50 to-rose-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado para el contenido */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas de fondo médicas */}
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 7)}px`,
                  height: `${3 + (i % 7)}px`,
                  background: `hsl(${350 + (i * 10) % 60}, 65%, ${50 + (i % 25)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 40, -20, 0],
                  opacity: [0.2, 0.7, 0.2],
                  scale: [0.6, 1.3, 0.6],
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

          <div className="container mx-auto px-6 py-16 relative z-20">
            <div className="max-w-6xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50"
              >
                {/* Introducción */}
                <section id="introduccion" className="mb-16">
                  <motion.div 
                    className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border-l-4 border-red-500 shadow-lg mb-8"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-red-900 mb-4 flex items-center gap-3">
                      <HeartPulse className="h-8 w-8" />
                      La Diferencia Entre un Susto y una Emergencia Grave
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      En cualquier lugar de trabajo, desde una tranquila oficina hasta una ajetreada obra de construcción, 
                      <strong className="text-red-700"> el riesgo de un accidente es una realidad inevitable</strong>. Los segundos 
                      que siguen a un incidente son críticos, y la diferencia entre un susto menor y una emergencia grave a menudo 
                      reside en una sola cosa: <strong className="text-red-700">la preparación</strong>.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Contar con el botiquín de primeros auxilios adecuado no es solo una obligación legal en México, 
                      es <strong className="bg-red-200 px-2 py-1 rounded">la herramienta fundamental que demuestra el compromiso 
                      de una empresa con la seguridad y el bienestar de su equipo</strong>.
                    </p>
                  </motion.div>

                  {/* Estadística impactante */}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-6 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white p-6 rounded-xl shadow-xl text-center">
                      <div className="text-4xl font-bold mb-2">NOM-005</div>
                      <div className="text-sm opacity-90">Guía de Referencia</div>
                      <div className="text-xs mt-2 opacity-75">STPS-1998 (No obligatoria)</div>
                    </div>
                    <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-6 rounded-xl shadow-xl text-center">
                      <div className="text-4xl font-bold mb-2">NOM-030</div>
                      <div className="text-sm opacity-90">Diagnóstico de Seguridad</div>
                      <div className="text-xs mt-2 opacity-75">STPS-2009 (Obligatorio)</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white p-6 rounded-xl shadow-xl text-center">
                      <div className="text-4xl font-bold mb-2">NOM-006</div>
                      <div className="text-sm opacity-90">Análisis de Riesgos</div>
                      <div className="text-xs mt-2 opacity-75">STPS-2014 (Obligatorio)</div>
                    </div>
                  </motion.div>
                </section>

                {/* Sección: Cumplimiento Normativo */}
                <section id="normativa" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <FileText className="h-10 w-10 text-red-600" />
                      Cumplimiento Normativo en México: Más Allá de una Sola Norma
                    </h2>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-yellow-900 mb-2">⚠️ Error Común: Buscar un Botiquín "Certificado"</h3>
                          <p className="text-yellow-800">
                            Un error común es buscar un botiquín "certificado" que garantice el cumplimiento total de la ley por sí solo. 
                            <strong> En la práctica, no existe tal certificación unificada</strong>. La responsabilidad final de un cumplimiento 
                            adecuado recae en el empleador, quien debe ensamblar un sistema de respuesta a emergencias basado en un 
                            análisis de sus propios riesgos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {/* NOM-005-STPS-1998 */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-500 rounded-lg p-3">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-blue-900">NOM-005-STPS-1998</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>Sustancias Químicas Peligrosas</strong>
                        </p>
                        <div className="bg-white p-3 rounded-lg mb-3">
                          <p className="text-xs font-bold text-blue-900 mb-1">Contenido:</p>
                          <p className="text-xs text-gray-600">Guía de referencia sobre el contenido de un botiquín</p>
                        </div>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                          No Obligatoria
                        </Badge>
                      </motion.div>

                      {/* NOM-030-STPS-2009 */}
                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-green-500 rounded-lg p-3">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-green-900">NOM-030-STPS-2009</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>Servicios Preventivos</strong>
                        </p>
                        <div className="bg-white p-3 rounded-lg mb-3">
                          <p className="text-xs font-bold text-green-900 mb-1">Exige:</p>
                          <p className="text-xs text-gray-600">Diagnóstico de seguridad y salud para identificar riesgos</p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                          Obligatoria ⚖️
                        </Badge>
                      </motion.div>

                      {/* NOM-006-STPS-2014 */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-500 rounded-lg p-3">
                            <Package className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-purple-900">NOM-006-STPS-2014</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>Manejo de Materiales</strong>
                        </p>
                        <div className="bg-white p-3 rounded-lg mb-3">
                          <p className="text-xs font-bold text-purple-900 mb-1">Requiere:</p>
                          <p className="text-xs text-gray-600">Botiquín conforme a riesgos identificados y número de trabajadores</p>
                        </div>
                        <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
                          Obligatoria ⚖️
                        </Badge>
                      </motion.div>
                    </div>

                    {/* Categorías NOM-005 */}
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border-2 border-indigo-300 shadow-lg">
                      <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                        <Info className="h-7 w-7" />
                        Categorías de Material según NOM-005-STPS-1998
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-xl border-2 border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <span className="text-2xl">📦</span>
                            Material Seco
                          </h4>
                          <p className="text-sm text-gray-700">
                            Gasas de diversas medidas, vendas elásticas y de gasa, tela adhesiva, apósitos y abatelenguas.
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border-2 border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <span className="text-2xl">💧</span>
                            Material Líquido
                          </h4>
                          <p className="text-sm text-gray-700">
                            Benzal, tintura de yodo (isodine), jabón neutro líquido, alcohol y agua estéril.
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border-2 border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <span className="text-2xl">✂️</span>
                            Instrumental
                          </h4>
                          <p className="text-sm text-gray-700">
                            Tijeras (rectas y de botón), pinzas, termómetro y ligaduras de hule.
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border-2 border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <span className="text-2xl">🎒</span>
                            Material Complementario
                          </h4>
                          <p className="text-sm text-gray-700">
                            Guantes de cirujano, tablillas para inmovilizar (férulas), manta térmica y linterna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Sección: Niveles de Riesgo */}
                <section id="niveles-riesgo" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <Shield className="h-10 w-10 text-red-600" />
                      Adecuación al Nivel de Riesgo del Centro de Trabajo
                    </h2>

                    <p className="text-lg text-gray-700 mb-8">
                      El contenido del botiquín debe ser un <strong className="text-red-700">reflejo directo de los peligros potenciales</strong> en el lugar de trabajo. 
                      Un enfoque segmentado es la manera más eficaz de garantizar una cobertura adecuada.
                    </p>

                    {/* Tabs de niveles de riesgo */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-4 mb-6">
                        <motion.button
                          onClick={() => setSelectedRiesgo('bajo')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                            selectedRiesgo === 'bajo'
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          <span className="text-2xl">🏢</span>
                          Bajo Riesgo
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedRiesgo('medio')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                            selectedRiesgo === 'medio'
                              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-300 hover:bg-yellow-50'
                          }`}
                        >
                          <span className="text-2xl">🔧</span>
                          Riesgo Medio
                        </motion.button>
                        <motion.button
                          onClick={() => setSelectedRiesgo('alto')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                            selectedRiesgo === 'alto'
                              ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-xl'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300 hover:bg-red-50'
                          }`}
                        >
                          <span className="text-2xl">��️</span>
                          Alto Riesgo
                        </motion.button>
                      </div>

                      {/* Contenido de Tabs */}
                      <AnimatePresence mode="wait">
                        {selectedRiesgo === 'bajo' && (
                          <motion.div
                            key="bajo"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300"
                          >
                            <h3 className="text-2xl font-bold text-green-900 mb-4">
                              🏢 Entornos de Bajo Riesgo
                            </h3>
                            <p className="text-gray-700 mb-4">
                              <strong>Ejemplos:</strong> Oficinas, Comercios, Servicios Profesionales
                            </p>
                            <div className="bg-white p-6 rounded-xl mb-4">
                              <h4 className="font-bold text-green-900 mb-3">Incidentes Más Comunes:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Cortes con papel o elementos de oficina</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Pequeños raspones y golpes menores</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Caídas menores en superficies planas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Malestares generales (dolor de cabeza, mareos)</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-green-100 p-6 rounded-xl">
                              <h4 className="font-bold text-green-900 mb-3">Contenido Recomendado:</h4>
                              <p className="text-gray-700">
                                Vendas adhesivas de varios tamaños, gasas pequeñas, toallitas antisépticas, material básico de curación. 
                                <strong className="text-green-800"> Productos como el Botiquín Jaloma</strong> están diseñados específicamente para este tipo de entorno.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {selectedRiesgo === 'medio' && (
                          <motion.div
                            key="medio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-400"
                          >
                            <h3 className="text-2xl font-bold text-orange-900 mb-4">
                              🔧 Entornos de Riesgo Medio
                            </h3>
                            <p className="text-gray-700 mb-4">
                              <strong>Ejemplos:</strong> Restaurantes, Talleres Mecánicos, Manufactura Ligera
                            </p>
                            <div className="bg-white p-6 rounded-xl mb-4">
                              <h4 className="font-bold text-orange-900 mb-3">Riesgos Incrementados:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span>Cortes más profundos con herramientas o maquinaria</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span>Quemaduras por calor o químicos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span>Lesiones oculares por partículas o salpicaduras</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span>Esguinces y torceduras moderadas</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-orange-100 p-6 rounded-xl">
                              <h4 className="font-bold text-orange-900 mb-3">Contenido Reforzado:</h4>
                              <p className="text-gray-700 mb-3">
                                Apósitos de mayor tamaño, más rollos de gasa estéril, vendas elásticas para esguinces y, 
                                de manera indispensable:
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span><strong>Insumos para quemaduras:</strong> Geles o apósitos especiales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span><strong>Lavado ocular:</strong> Estaciones o botellas de lavado de ojos</span>
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}

                        {selectedRiesgo === 'alto' && (
                          <motion.div
                            key="alto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl border-2 border-red-400"
                          >
                            <h3 className="text-2xl font-bold text-red-900 mb-4">
                              🏗️ Entornos de Alto Riesgo
                            </h3>
                            <p className="text-gray-700 mb-4">
                              <strong>Ejemplos:</strong> Construcción, Industria Pesada, Minería, Seguridad Privada
                            </p>
                            <div className="bg-white p-6 rounded-xl mb-4">
                              <h4 className="font-bold text-red-900 mb-3">Emergencias de Trauma que Amenazan la Vida:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <Siren className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span><strong>Hemorragias severas</strong> que requieren control inmediato</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Siren className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span><strong>Fracturas expuestas</strong> con riesgo de infección</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Siren className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span><strong>Shock hipovolémico</strong> por pérdida de sangre</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Siren className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span><strong>Trauma craneal o de columna</strong></span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-red-100 p-6 rounded-xl">
                              <h4 className="font-bold text-red-900 mb-3">⚠️ Un Botiquín Estándar es Insuficiente</h4>
                              <p className="text-gray-700 mb-4">
                                Además del botiquín general, es <strong className="bg-red-200 px-2 py-1 rounded">altamente recomendable 
                                contar con un Kit de Control de Hemorragias o Kit de Trauma (IFAK)</strong>. Estos kits especializados incluyen:
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                                  <span><strong>Torniquetes de combate</strong> (CAT o SOFTT)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                                  <span><strong>Vendajes de compresión</strong> tipo israelí</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                                  <span><strong>Agentes hemostáticos</strong> (QuikClot, Celox)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                                  <span><strong>Mantas térmicas</strong> para shock</span>
                                </li>
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </section>

                {/* Sección: Otros Factores */}
                <section id="otros-factores" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <Info className="h-10 w-10 text-red-600" />
                      Otros Factores Clave en la Selección
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Capacidad */}
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-500 rounded-lg p-3">
                            <span className="text-white text-2xl">👥</span>
                          </div>
                          <h3 className="text-xl font-bold text-purple-900">Capacidad y Escalabilidad</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Los fabricantes etiquetan sus kits para un cierto número de personas (10, 25 o 100). 
                          Esta es una métrica útil como punto de partida.
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <strong className="text-purple-900">Ejemplo práctico:</strong> Una planta con 100 trabajadores distribuidos 
                            en tres naves necesitará <strong>mínimo tres botiquines estratégicamente ubicados</strong>, no uno solo centralizado.
                          </p>
                        </div>
                      </motion.div>

                      {/* Portabilidad */}
                      <motion.div 
                        className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-cyan-500 rounded-lg p-3">
                            <Package className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-cyan-900">Portabilidad y Material</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          El contenedor determina durabilidad, protección y accesibilidad.
                        </p>
                        <div className="space-y-2">
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm font-bold text-cyan-900 mb-1">🗄️ Gabinetes Metálicos Fijos:</p>
                            <p className="text-xs text-gray-600">
                              Durables, para montar en pared. Ideales para talleres, fábricas y oficinas.
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm font-bold text-cyan-900 mb-1">📦 Cajas de Plástico Rígido:</p>
                            <p className="text-xs text-gray-600">
                              Equilibrio entre protección y portabilidad. Perfectos para oficinas y vehículos.
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm font-bold text-cyan-900 mb-1">🎒 Bolsas Textiles:</p>
                            <p className="text-xs text-gray-600">
                              Máxima portabilidad. Ideales para trabajos en campo y equipos móviles.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </section>

                {/* Comparación de Productos */}
                <section id="productos" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                      <Star className="h-10 w-10 text-red-600" />
                      Los 6 Mejores Botiquines en México 2025
                    </h2>
                    <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-lg">
                      Análisis del mercado en Amazon México y Mercado Libre. Productos con altas calificaciones que cubren 
                      las distintas necesidades de los centros de trabajo.
                    </p>
                    <ProductComparison
                      title="Comparativa de Botiquines de Emergencia"
                      products={comparisonProducts}
                      features={comparisonFeatures}
                    />
                  </motion.div>
                </section>

                {/* Sección: Llamado a la Acción */}
                <section id="decision" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-rose-600 text-white p-8 rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <HeartPulse className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">La Preparación No es un Gasto, es una Inversión</h3>
                      </div>
                      <p className="text-lg leading-relaxed mb-4">
                        Elegir el botiquín correcto va más allá de cumplir con una norma. Es demostrar que la seguridad 
                        y el bienestar de tu equipo son una <strong className="bg-white/20 px-2 py-1 rounded">prioridad absoluta</strong>. 
                        Los segundos cuentan en una emergencia, y un botiquín bien equipado puede marcar la diferencia 
                        entre un incidente menor y una tragedia.
                      </p>
                      <p className="text-lg leading-relaxed">
                        <strong>Recuerda:</strong> Analiza tus riesgos específicos, elige el equipo adecuado, capacita a tu personal 
                        y mantén el botiquín en perfecto estado. La vida de tu equipo puede depender de ello.
                      </p>
                    </motion.div>
                  </motion.div>
                </section>

                {/* Preguntas Frecuentes */}
                <section id="faqs" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 flex items-center justify-center gap-3">
                      <span className="text-5xl">❓</span>
                      Preguntas Frecuentes
                    </h2>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                          className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-300 transition-all"
                        >
                          <button
                            onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                            className="w-full text-left p-6 bg-gradient-to-r from-white to-red-50 hover:from-red-50 hover:to-rose-100 transition-all flex justify-between items-center gap-4"
                          >
                            <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-6 w-6 text-red-600 flex-shrink-0" />
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
                                <div className="p-6 bg-white border-t-2 border-gray-100">
                                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Artículos Relacionados */}
                <section id="relacionados" className="mb-8">
                  <RelatedArticles articles={relatedArticles} />
                </section>
              </motion.article>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}
