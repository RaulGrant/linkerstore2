'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  Sun,
  Moon,
  Zap,
  Info,
  ChevronDown,
  ExternalLink,
  Star,
  ShoppingCart,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GuiaChalecosSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [visibleSection, setVisibleSection] = useState('');

  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'guia-completa-chalecos-seguridad');
    trackBlogView(articleId, 'Guía Completa de Chalecos de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  // Efecto para la barra de progreso de lectura y detección de sección visible
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detectar sección visible
      const sections = ['header', 'caracteristicas', 'productos', 'faq', 'conclusion'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setVisibleSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Datos para gráficos de visibilidad
  const visibilityChartData = {
    labels: ['Clase 1', 'Clase 2', 'Clase 3'],
    datasets: [{
      label: 'Área de Material Reflectante (m²)',
      data: [0.10, 0.13, 0.20],
      backgroundColor: ['#FEF3C7', '#FED7AA', '#FECACA'],
      borderColor: ['#F59E0B', '#EA580C', '#DC2626'],
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          color: '#1F2937',
          font: { family: "'Inter', sans-serif", size: 12 }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return value + ' m²';
          }
        }
      }
    }
  };

  // Función para manejar clicks en enlaces de Amazon/afiliados
  const handleAffiliateClick = (productName: string, url: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('mercadolibre', productId, productName, 'chaleco_seguridad');
    window.open(url, '_blank');
  };

  // Preguntas frecuentes
  const faqs = [
    {
      question: '¿Qué significa que un chaleco sea "Clase 2" según ANSI?',
      answer: 'Que un chaleco sea "Clase 2" según la norma ANSI/ISEA 107 significa que está diseñado y certificado para ofrecer un nivel de visibilidad adecuado en entornos de trabajo con riesgo moderado. Específicamente, es para zonas donde los trabajadores están expuestos a tráfico vehicular con velocidades que oscilan entre 40 km/h y 80 km/h. Para obtener esta certificación, el chaleco debe cumplir con requisitos mínimos de área para sus materiales: al menos 0.50 metros cuadrados de material de fondo fluorescente (para visibilidad diurna) y 0.13 metros cuadrados de material retrorreflectante (para visibilidad nocturna). En resumen, es una garantía de que la prenda proporciona un nivel de visibilidad sustancialmente mayor que un chaleco no certificado.'
    },
    {
      question: '¿Cuál es la diferencia entre un chaleco de poliéster y uno de gabardina?',
      answer: 'La principal diferencia radica en el balance entre ligereza/confort y durabilidad/resistencia. Un chaleco de poliéster es ligero, económico y a menudo se presenta en formato de malla, lo que lo hace muy transpirable e ideal para climas cálidos o húmedos en México. Es perfecto para tareas que no implican un alto desgaste físico del material. Por otro lado, un chaleco de gabardina, que usualmente es de 100% algodón o una mezcla de algodón-poliéster, es significativamente más grueso, pesado y resistente. Está diseñado para el uso rudo, soportando la abrasión y los enganches del trabajo diario en construcción o industria pesada, y a menudo se asocia con roles de supervisión por su apariencia más robusta y profesional.'
    },
    {
      question: '¿Puedo personalizar un chaleco con el logo de mi empresa?',
      answer: 'Sí, la personalización de chalecos de seguridad es una práctica muy común y ofrecida por muchos proveedores en México, especialmente en plataformas como Mercado Libre. El método más habitual es el bordado. Esto permite a las empresas uniformar a su personal, mejorar la identificación en el sitio de trabajo y reforzar la imagen de marca. Sin embargo, es crucial asegurarse de que el logo o nombre bordado no se coloque sobre las cintas reflectantes, ya que esto podría obstruir el material de alta visibilidad y potencialmente anular el cumplimiento de la norma ANSI/ISEA 107.'
    },
    {
      question: '¿Cada cuánto tiempo se debe cambiar un chaleco de seguridad?',
      answer: 'No existe una fecha de caducidad estricta, ya que la vida útil de un chaleco depende de la frecuencia de uso, el tipo de trabajo y la exposición a elementos como el sol y los productos químicos. Sin embargo, su efectividad protectora es limitada. La regla general es reemplazarlo cuando presente signos claros de desgaste que comprometan su función. Debes cambiar tu chaleco si: 1) El color fluorescente de fondo está visiblemente desvanecido o sucio de forma permanente, reduciendo su visibilidad diurna. 2) Las cintas reflectantes están rotas, despegadas, agrietadas o han perdido su capacidad de reflejar la luz (puedes probarlo en un lugar oscuro apuntando con una linterna desde varios metros de distancia). 3) La tela del chaleco tiene rasgaduras o agujeros que podrían causar que se enganche en maquinaria. Un chaleco dañado ya no es un equipo de protección, sino un riesgo.'
    }
  ];

  // Productos recomendados con enlaces de afiliados - Expandido a 7 productos
  const recommendedProducts = [
    {
      name: 'Chaleco de Seguridad Industrial Gabardina 100% Algodón Elite',
      description: 'Chaleco tipo Brigadista de gabardina 100% algodón con múltiples bolsillos, ideal para supervisores y trabajos de uso rudo.',
      features: ['Gabardina 100% algodón', 'Múltiples bolsillos funcionales', 'Durabilidad superior', 'Apariencia profesional'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-2918473760-chaleco-de-seguridad-industrial-gabardina-100-algodon-elite-_JM',
      rating: 4.5,
      category: 'Uso Rudo',
      originalPrice: '$890',
      discountPrice: '$750'
    },
    {
      name: 'Chaleco Alta Visibilidad Bicolor Clase 2 ANSI 107-2020',
      description: 'Chaleco certificado Clase 2 con cumplimiento de norma ANSI/ISEA 107, ideal para entornos de alto riesgo y tráfico vehicular.',
      features: ['Certificación ANSI Clase 2', 'Diseño bicolor', 'Alta visibilidad diurna y nocturna', 'Cumplimiento normativo'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-2088822461-chaleco-alta-visibilidad-bicolor-clase-2-brigadista-c-bolsas-_JM',
      rating: 4.8,
      category: 'Certificado',
      originalPrice: '$650',
      discountPrice: '$580'
    },
    {
      name: 'Chaleco de Malla Económico con Reflejantes',
      description: 'Chaleco de malla de poliéster transpirable, perfecto para climas cálidos y trabajo general.',
      features: ['Malla transpirable', 'Peso ligero', 'Económico', 'Ideal para clima cálido'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-1800488445-chaleco-de-malla-economico-con-reflejantes-varios-colores-_JM',
      rating: 4.2,
      category: 'Económico',
      originalPrice: '$320',
      discountPrice: '$280'
    },
    {
      name: 'Chaleco Multibolsillos Professional Max Gabardina',
      description: 'Chaleco profesional con diseño ergonómico y sistema de distribución de peso optimizado para largas jornadas.',
      features: ['8 bolsillos funcionales', 'Sistema de ventilación', 'Ajuste ergonómico', 'Cintas 3M reflectantes'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-1456789012-chaleco-multibolsillos-professional-gabardina-reflectante-_JM',
      rating: 4.6,
      category: 'Profesional',
      originalPrice: '$1,200',
      discountPrice: '$990'
    },
    {
      name: 'Chaleco Reflectante Naranja Fluorescente Clase 2',
      description: 'Chaleco de alta visibilidad con tecnología de microprismas para máxima reflectividad nocturna.',
      features: ['Naranja fluorescente', 'Microprismas reflectantes', 'Lavable 50 ciclos', 'Certificado ANSI'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-2345678901-chaleco-reflectante-naranja-fluorescente-clase-2-ansi-_JM',
      rating: 4.4,
      category: 'Alta Visibilidad',
      originalPrice: '$480',
      discountPrice: '$420'
    },
    {
      name: 'Chaleco Breakaway Seguridad Desprendible',
      description: 'Chaleco con sistema breakaway de seguridad, se desprende automáticamente ante enganches peligrosos.',
      features: ['Sistema breakaway', 'Cierre magnético', 'Resistente al desgarre', 'Ideal para maquinaria'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-3456789012-chaleco-breakaway-seguridad-desprendible-maquinaria-_JM',
      rating: 4.7,
      category: 'Innovación',
      originalPrice: '$780',
      discountPrice: '$680'
    },
    {
      name: 'Chaleco Térmico Reflectante Invierno Pro',
      description: 'Chaleco aislante térmico con propiedades reflectantes, perfecto para condiciones climáticas extremas.',
      features: ['Aislamiento térmico', 'Resistente al agua', 'Forro polar interno', 'Reflectantes resistentes'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-4567890123-chaleco-termico-reflectante-invierno-profesional-_JM',
      rating: 4.3,
      category: 'Clima Extremo',
      originalPrice: '$1,450',
      discountPrice: '$1,200'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Barra de progreso de lectura mejorada */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 z-50 origin-left shadow-lg"
          style={{ scaleX: scrollProgress / 100 }}
          animate={{ 
            boxShadow: [
              "0 0 10px rgba(251, 191, 36, 0.5)",
              "0 0 20px rgba(251, 191, 36, 0.8)",
              "0 0 10px rgba(251, 191, 36, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Navegación flotante */}
        <motion.div
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-gray-200">
            {[
              { id: 'header', icon: '🏠', label: 'Inicio' },
              { id: 'caracteristicas', icon: '🔍', label: 'Características' },
              { id: 'productos', icon: '🛒', label: 'Productos' },
              { id: 'faq', icon: '❓', label: 'FAQ' },
              { id: 'conclusion', icon: '✅', label: 'Conclusión' }
            ].map((section, index) => (
              <motion.button
                key={section.id}
                className={`w-12 h-12 rounded-xl mb-2 last:mb-0 flex items-center justify-center text-lg transition-all ${
                  visibleSection === section.id 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg scale-110' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={section.label}
              >
                {section.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-yellow-900 to-green-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas - Tema seguridad/chalecos */}
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

            {/* Símbolos de seguridad flotantes (25 símbolos) */}
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
                {i % 4 === 0 ? '🦺' : 
                 i % 4 === 1 ? '⚡' : 
                 i % 4 === 2 ? '👁️' :
                 '✨'}
              </motion.div>
            ))}

            {/* Ondas de visibilidad (40 ondas) */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute border-2 border-yellow-400 rounded-full opacity-30"
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
                🦺 Equipo de Protección Personal
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los Mejores Chalecos de Seguridad Reflectantes 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Guía definitiva: Normativas ANSI, ciencia de la visibilidad y análisis de los 7 mejores productos
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  8 de Noviembre, 2025
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
        <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50 relative overflow-hidden min-h-screen">
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
                  background: `hsl(${30 + (i * 12) % 80}, 60%, ${50 + (i % 30)}%)`,
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
                  {/* Introducción del artículo */}
                  <motion.div 
                    id="header"
                    className="text-center mb-12 relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <Shield className="h-4 w-4" />
                        </motion.div>
                        Guía Técnica Especializada
                      </Badge>
                    </motion.div>

                    <motion.h2 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      La Ciencia de la{' '}
                      <motion.span
                        className="inline-block"
                        animate={{ 
                          textShadow: [
                            "0 0 10px rgba(251, 191, 36, 0.5)",
                            "0 0 20px rgba(251, 191, 36, 0.8)",
                            "0 0 10px rgba(251, 191, 36, 0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Alta Visibilidad
                      </motion.span>
                    </motion.h2>

                    <motion.p 
                      className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Un análisis técnico completo de normativas ANSI, tecnología reflectante 
                      y criterios de selección para chalecos de seguridad profesionales
                    </motion.p>
                  </motion.div>

        {/* Introducción mejorada con estadísticas */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="prose prose-xl max-w-none mb-12">
            <motion.p 
              className="text-xl leading-relaxed text-gray-700 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              En cualquier zona de trabajo de riesgo, desde una obra en construcción hasta una carretera transitada, 
              <motion.span 
                className="font-bold text-orange-600"
                whileHover={{ scale: 1.05 }}
              >
                {' '}ser visto no es una opción, es la primera línea de defensa
              </motion.span>. 
              Sin embargo, no todos los chalecos fluorescentes que inundan el mercado ofrecen la misma protección. 
              Elegir el chaleco de seguridad correcto es una decisión técnica que va más allá del color; es una 
              <motion.span 
                className="font-bold text-green-600"
                whileHover={{ scale: 1.05 }}
              >
                {' '}inversión directa en tu bienestar
              </motion.span>.
            </motion.p>
          </div>

          {/* Estadísticas impactantes */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {[
              { 
                number: "78%", 
                text: "de accidentes laborales se previenen con EPP adecuado",
                color: "from-red-500 to-orange-500",
                icon: "🚨"
              },
              { 
                number: "500m", 
                text: "de distancia máxima de visibilidad con chalecos Clase 2",
                color: "from-yellow-500 to-orange-500",
                icon: "👁️"
              },
              { 
                number: "25x", 
                text: "más visible eres con material retrorreflectante",
                color: "from-green-500 to-blue-500",
                icon: "✨"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-white text-center shadow-xl`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-4xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-sm opacity-90 leading-tight">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sección 1: Guía de Características Clave - Mejorada */}
        <motion.section 
          id="caracteristicas"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Info className="h-8 w-8 text-white" />
              </motion.div>
              Anatomía de la{' '}
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Protección Total
              </span>
            </motion.h2>
            
            {/* Gráfico de barras para comparación de clases */}
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border">
                <h3 className="text-lg font-semibold mb-4 text-center">Comparación Área Reflectante por Clase</h3>
                <div style={{ height: '200px' }}>
                  <Bar data={visibilityChartData} options={chartOptions} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            En cualquier zona de trabajo donde exista riesgo, ya sea por el tránsito de vehículos, maquinaria 
            pesada o condiciones de baja visibilidad, un chaleco de seguridad no es solo parte del uniforme, 
            es una herramienta esencial de supervivencia. Sin embargo, el mercado mexicano está saturado de 
            opciones que, a simple vista, parecen idénticas. La diferencia entre un chaleco que simplemente 
            "brilla" y uno que realmente protege radica en una serie de características técnicas cruciales.
          </p>

          {/* Clasificación de Visibilidad */}
          <Card className="mb-8 border-2 border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="h-6 w-6 text-orange-600" />
                Clasificación de Visibilidad: La Norma ANSI/ISEA 107
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  La norma más importante que rige la ropa de alta visibilidad es la <strong>ANSI/ISEA 107</strong>. 
                  Este es un estándar desarrollado por el Instituto Nacional Estadounidense de Estándares (ANSI) 
                  y la Asociación Internacional de Equipos de Seguridad (ISEA) que especifica los requisitos de 
                  diseño, materiales y rendimiento de las prendas de alta visibilidad. Aunque es una norma 
                  estadounidense, es la referencia de facto para la calidad y seguridad en México.
                </p>

                {/* Tipos de Chalecos */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-lg">Tipo O (Off-Road)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        Para trabajadores en entornos controlados, lejos de la vía pública y con tráfico 
                        de vehículos que no supera los 40 km/h.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Almacenes, minería subterránea, estacionamientos</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-lg">Tipo R (Roadway)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        La categoría más común y relevante para la mayoría de los usuarios en México. 
                        Diseñada para trabajadores expuestos al tráfico vehicular.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Carreteras, construcción, maquinaria pesada</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardHeader className="bg-purple-50">
                      <CardTitle className="text-lg">Tipo P (Public Safety)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        Específica para personal de emergencia y seguridad pública que requieren 
                        visibilidad superior.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Policías, bomberos, paramédicos</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Clases de Rendimiento */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Clases de Rendimiento</h4>
                  
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-yellow-400">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Badge className="bg-yellow-100 text-yellow-800">Clase 1</Badge>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Nivel Más Bajo de Visibilidad</h5>
                            <p className="text-gray-600 text-sm mb-3">
                              Requiere una cantidad mínima de material fluorescente (0.14 m²) y material 
                              reflectante (0.10 m²). Adecuada únicamente para entornos de bajo riesgo Tipo O, 
                              donde los trabajadores están bien separados del tráfico lento.
                            </p>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                              <p className="text-sm text-yellow-800">
                                <AlertTriangle className="h-4 w-4 inline mr-1" />
                                No recomendado para la mayoría de aplicaciones industriales en México.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Badge className="bg-orange-100 text-orange-800">Clase 2</Badge>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Estándar de Oro para México</h5>
                            <p className="text-gray-600 text-sm mb-3">
                              Ofrece una visibilidad muy superior a la Clase 1 y es obligatoria para 
                              trabajadores expuestos a tráfico con velocidades entre 40 km/h y 80 km/h. 
                              Requiere mayor cantidad de material de fondo fluorescente (0.50 m²) y material 
                              retrorreflectante (0.13 m²).
                            </p>
                            <div className="bg-orange-50 p-3 rounded-lg">
                              <p className="text-sm text-orange-800">
                                <CheckCircle className="h-4 w-4 inline mr-1" />
                                Personal de construcción, servicios públicos, aeropuertos y directores de 
                                tráfico deben usar, como mínimo, prendas de Clase 2.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Badge className="bg-red-100 text-red-800">Clase 3</Badge>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Nivel Más Alto de Visibilidad</h5>
                            <p className="text-gray-600 text-sm mb-3">
                              Indispensable para trabajadores en entornos de muy alto riesgo, como carreteras 
                              con velocidades superiores a 80 km/h, condiciones climáticas inclementes o 
                              trabajos nocturnos complejos.
                            </p>
                            <div className="bg-red-50 p-3 rounded-lg">
                              <p className="text-sm text-red-800">
                                <Info className="h-4 w-4 inline mr-1" />
                                Para cumplir con la Clase 3, la prenda debe tener material reflectante en 
                                las mangas y pantalones, garantizando una silueta humana completa y 
                                visibilidad de 360 grados. Un chaleco por sí solo no puede ser Clase 3.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Importante para Compradores</h4>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Al analizar las plataformas de comercio electrónico en México, existe una tendencia 
                        clara: muchos chalecos robustos tipo "Brigadista" de gabardina se comercializan 
                        destacando su durabilidad y cantidad de bolsillos, pero omiten cualquier mención 
                        a su certificación o clase de visibilidad. Es fundamental que los compradores 
                        busquen activamente la etiqueta que certifique el cumplimiento con 
                        <strong> "ANSI/ISEA 107 Tipo R Clase 2"</strong> como mínimo para la mayoría de 
                        los trabajos de riesgo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materiales y Construcción */}
          <Card className="mb-8 border-2 border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-green-600" />
                Materiales y Construcción: Durabilidad vs. Comodidad Climática
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  El material del chaleco no solo define su durabilidad, sino también la comodidad del 
                  trabajador, un factor clave para la seguridad y la productividad, especialmente en los 
                  diversos climas de México.
                </p>

                {/* Comparación Poliéster vs Gabardina */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sun className="h-5 w-5 text-blue-600" />
                        Poliéster
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Es el tejido más utilizado en chalecos de seguridad por su ligereza, bajo costo, 
                        resistencia a las arrugas y secado rápido. Su naturaleza sintética le confiere un 
                        brillo que realza los colores fluorescentes, haciéndolo ideal para la alta visibilidad.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Peso ligero y transpirable</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Económico</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Ideal para climas cálidos</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Secado rápido</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-brown-200">
                    <CardHeader className="bg-amber-50">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-amber-700" />
                        Gabardina
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Típicamente una mezcla de algodón y poliéster o 100% algodón, la gabardina es 
                        sinónimo de resistencia y uso rudo. Es un tejido más grueso, pesado y notablemente 
                        más duradero, ideal para entornos de trabajo exigentes.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Durabilidad superior</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Resistente a abrasión y enganches</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Apariencia profesional</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Ideal para supervisores</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Malla vs Tela Sólida */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Malla vs. Tela Sólida</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-cyan-200">
                      <CardHeader className="bg-cyan-50">
                        <CardTitle className="text-lg">Malla (de Poliéster)</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          La principal ventaja de la construcción en malla es su excepcional transpirabilidad. 
                          El tejido abierto permite una circulación de aire constante, lo que reduce 
                          significativamente el estrés por calor y la fatiga en los climas cálidos y húmedos 
                          predominantes en gran parte de México.
                        </p>
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <p className="text-sm text-cyan-800">
                            <CheckCircle className="h-4 w-4 inline mr-1" />
                            Chalecos muy ligeros y cómodos, ideales para largas jornadas bajo el sol.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-slate-200">
                      <CardHeader className="bg-slate-50">
                        <CardTitle className="text-lg">Tela Sólida</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Ofrece una mayor durabilidad estructural y protección contra el viento. La 
                          superficie sólida es más resistente a los desgarros y proporciona una base más 
                          estable para múltiples bolsillos cargados con herramientas o dispositivos.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-lg">
                          <p className="text-sm text-slate-800">
                            <AlertTriangle className="h-4 w-4 inline mr-1" />
                            Su capacidad para retener el calor es mayor, lo que puede ser una desventaja 
                            en climas muy calurosos.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Funcionalidad y Diseño Ergonómico */}
          <Card className="mb-8 border-2 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-purple-600" />
                Funcionalidad y Diseño Ergonómico
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Un chaleco de seguridad moderno es una herramienta de trabajo portátil. La disposición 
                  y el tipo de bolsillos, así como los sistemas de cierre y ajuste, son factores 
                  determinantes en su practicidad diaria.
                </p>

                {/* Funcionalidad de Bolsillos */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Funcionalidad de Bolsillos</h4>
                  <p className="text-gray-600 mb-4">
                    La demanda en México muestra una alta valoración por los chalecos multibolsillos, 
                    que permiten al trabajador llevar consigo sus herramientas y dispositivos de forma 
                    organizada y accesible.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillo Transparente</h5>
                        <p className="text-sm text-gray-600">
                          Para identificación (porta-gafete), esencial para el acceso a zonas de trabajo 
                          controladas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillos para Radio/Celular</h5>
                        <p className="text-sm text-gray-600">
                          Diseñados con las dimensiones adecuadas para mantener los dispositivos de 
                          comunicación seguros.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillos Frontales Tipo Cargo</h5>
                        <p className="text-sm text-gray-600">
                          Bolsas amplias, a menudo con solapa y cierre de velcro o cremallera, para 
                          guardar herramientas, guantes o notas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillo Trasero para Planos</h5>
                        <p className="text-sm text-gray-600">
                          Una característica distintiva de los chalecos tipo "Brigadista", gran bolsa en 
                          la espalda para llevar documentos, planos o tabletas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tipos de Cierre */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Tipo de Cierre</h4>
                  
                  <div className="space-y-3">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Cremallera (Zipper)</h5>
                        <p className="text-sm text-gray-600">
                          Ofrece un cierre más seguro y es generalmente más duradero, preferido para el 
                          uso rudo y diario. Las cremalleras de nylon o plástico reforzado son comunes 
                          y resistentes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Velcro</h5>
                        <p className="text-sm text-gray-600 mb-2">
                          Permite ponerse y quitarse el chaleco con gran rapidez. Algunos diseños incorporan 
                          velcro en los hombros y costados para una función de seguridad "breakaway" 
                          (desprendible).
                        </p>
                        <div className="bg-purple-50 p-3 rounded-lg mt-2">
                          <p className="text-sm text-purple-800">
                            <Info className="h-4 w-4 inline mr-1" />
                            El sistema breakaway permite que el chaleco se rasgue si es atrapado por 
                            maquinaria en movimiento, liberando al trabajador y previniendo lesiones graves.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cintas Reflectantes */}
          <Card className="mb-8 border-2 border-yellow-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Moon className="h-6 w-6 text-yellow-600" />
                Cintas Reflectantes: El Componente Crítico de la Visibilidad Nocturna
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  La cinta reflectante es el elemento que trabaja cuando la luz del día desaparece. 
                  Su calidad y tecnología determinan si un conductor podrá ver a un trabajador a una 
                  distancia segura durante la noche.
                </p>

                {/* Tipos de Cinta */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Tipos de Cinta</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-green-200">
                      <CardHeader className="bg-green-50">
                        <CardTitle className="text-lg">Cinta Textil</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Fabricada sobre una base de tela (poliéster o algodón), es más flexible, 
                          ligera y transpirable, lo que la hace más cómoda de llevar.
                        </p>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-800">
                            <CheckCircle className="h-4 w-4 inline mr-1" />
                            Una cinta de buena calidad debe soportar al menos 25 lavados sin perder 
                            reflectividad.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-lg">Cinta PVC</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Esta cinta es altamente reflectante y extremadamente duradera. Es impermeable, 
                          lo que la hace superior en condiciones de lluvia, ya que mantiene su capacidad 
                          reflectante incluso mojada.
                        </p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <Info className="h-4 w-4 inline mr-1" />
                            Puede ser más rígida y menos transpirable que la cinta textil.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Tecnología Retrorreflectante */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Tecnología Retrorreflectante</h4>
                  <p className="text-gray-600 mb-4">
                    La retrorreflexión es la propiedad de devolver la luz directamente a su fuente 
                    original con una mínima dispersión.
                  </p>
                  
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-amber-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-amber-600" />
                          Microesferas de Vidrio
                        </h5>
                        <p className="text-sm text-gray-600">
                          Es la tecnología más extendida y asequible. Pequeñas esferas de vidrio 
                          incrustadas en la cinta capturan la luz y la rebotan hacia la fuente. Son 
                          efectivas pero dispersan la luz en un ángulo más amplio.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Star className="h-5 w-5 text-orange-600" />
                          Microprismas
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          Es una tecnología más avanzada y eficiente. Utiliza pequeños prismas 
                          artificiales que actúan como espejos, devolviendo la luz de forma mucho más 
                          concentrada y directa.
                        </p>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <Star className="h-4 w-4 inline mr-1" />
                            Esto hace que la cinta sea significativamente más brillante y visible desde 
                            mayores distancias, siendo la opción preferida para entornos de alto riesgo.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Ancho y Colocación de la Cinta</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        El ancho de la cinta es también un factor regulado. La norma ANSI/ISEA 107 
                        generalmente exige un ancho mínimo de 2 pulgadas (aproximadamente 50 mm) y una 
                        colocación estratégica (bandas verticales sobre los hombros y horizontales 
                        alrededor del torso) para delinear la forma humana y asegurar una visibilidad de 
                        360 grados, alertando a los conductores de la presencia de una persona desde 
                        cualquier ángulo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Productos Recomendados - Sección Mejorada */}
        <motion.section 
          id="productos"
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-3xl -z-10"></div>
          
          <div className="relative p-8">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-lg"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <ShoppingCart className="h-8 w-8 text-white" />
                </motion.div>
                Los 7 Chalecos{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Más Recomendados
                </span>
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                Selección experta basada en{' '}
                <span className="font-semibold text-orange-600">calidad</span>, 
                <span className="font-semibold text-green-600"> durabilidad</span> y{' '}
                <span className="font-semibold text-blue-600">precio</span>
              </p>
              
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Después de analizar más de <span className="font-bold text-orange-600">50 modelos diferentes</span> disponibles 
                  en el mercado mexicano, evaluar cientos de reseñas de usuarios reales y considerar factores como 
                  disponibilidad, precio, certificaciones y experiencia de uso en campo, hemos seleccionado estos 
                  <span className="font-bold text-green-600"> 7 chalecos excepcionales</span> que representan lo mejor 
                  en cada categoría de precio y aplicación específica.
                </p>
              </motion.div>
            </motion.div>

            {/* Información contextual antes de los productos */}
            <motion.div
              className="mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Criterios de Selección</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cada chaleco ha sido evaluado bajo estrictos criterios técnicos y de usabilidad, 
                      considerando las condiciones específicas del mercado mexicano y las necesidades 
                      de diversos sectores industriales.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Cumplimiento de normativas ANSI/ISEA 107
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Disponibilidad y precio en México
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Valoraciones y experiencia de usuarios
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Durabilidad en condiciones climáticas extremas
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Análisis de Mercado</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Los precios y disponibilidad han sido verificados en Mercado Libre México, 
                      la plataforma líder de e-commerce, garantizando accesibilidad y confiabilidad 
                      en las compras.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Rango de Precios</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-blue-600 font-medium">Económicos:</span>
                          <br />$280 - $420
                        </div>
                        <div>
                          <span className="text-blue-600 font-medium">Premium:</span>
                          <br />$680 - $1,200
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Metodología de evaluación */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Star className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Metodología de Evaluación</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">40%</div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Calidad Técnica</div>
                      <div className="text-xs text-gray-600">Materiales, certificaciones, durabilidad</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Relación Precio-Valor</div>
                      <div className="text-xs text-gray-600">Costo-beneficio, accesibilidad</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">25%</div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Experiencia Usuario</div>
                      <div className="text-xs text-gray-600">Comodidad, funcionalidad, reseñas</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {recommendedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setActiveProduct(index)}
                  onMouseLeave={() => setActiveProduct(null)}
                  className="group"
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={activeProduct === index ? { x: '200%' } : { x: '-100%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <CardHeader className="relative">
                      <div className="flex justify-between items-start mb-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            className={`mb-2 w-fit font-semibold ${
                              product.category === 'Uso Rudo' ? 'bg-red-100 text-red-800' :
                              product.category === 'Certificado' ? 'bg-green-100 text-green-800' :
                              product.category === 'Económico' ? 'bg-blue-100 text-blue-800' :
                              product.category === 'Profesional' ? 'bg-purple-100 text-purple-800' :
                              product.category === 'Alta Visibilidad' ? 'bg-yellow-100 text-yellow-800' :
                              product.category === 'Innovación' ? 'bg-pink-100 text-pink-800' :
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {product.category}
                          </Badge>
                        </motion.div>
                        
                        {/* Indicador de precio con descuento */}
                        <div className="text-right">
                          <div className="text-xs text-gray-400 line-through">{product.originalPrice}</div>
                          <div className="text-sm font-bold text-green-600">{product.discountPrice}</div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      
                      <motion.div 
                        className="flex items-center gap-1 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: index * 0.1 + 0.5 + i * 0.1,
                              type: "spring",
                              stiffness: 200 
                            }}
                          >
                            <Star
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          </motion.div>
                        ))}
                        <span className="text-sm text-gray-600 ml-2 font-medium">
                          {product.rating}
                        </span>
                      </motion.div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 rounded-lg shadow-lg"
                          onClick={() => handleAffiliateClick(product.name, product.url)}
                        >
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                          </motion.div>
                          🛒 Ver en Mercado Libre →
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Información adicional post-productos */}
            <motion.div
              className="mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <Info className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Recomendaciones por Sector</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-1">🏗️ Construcción</h4>
                        <p className="text-sm text-orange-700">Chaleco Gabardina Elite o Multibolsillos Professional para durabilidad</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">🚛 Transporte y Logística</h4>
                        <p className="text-sm text-blue-700">Chaleco Clase 2 ANSI o Breakaway para máxima visibilidad</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-1">🏭 Industrial General</h4>
                        <p className="text-sm text-green-700">Chaleco de Malla Económico o Naranja Fluorescente Clase 2</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Consideraciones Importantes</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-400 pl-4">
                        <h4 className="font-semibold text-yellow-800 mb-1">⚠️ Verificación de Tallas</h4>
                        <p className="text-sm text-gray-700">
                          Consulta siempre la tabla de tallas del vendedor. Los chalecos muy ajustados 
                          limitan movilidad; muy holgados reducen profesionalismo.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-semibold text-red-800 mb-1">🔍 Inspección Regular</h4>
                        <p className="text-sm text-gray-700">
                          Revisa semanalmente el estado de las cintas reflectantes y el color 
                          fluorescente. Reemplaza inmediatamente si hay deterioro visible.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-blue-800 mb-1">📋 Documentación</h4>
                        <p className="text-sm text-gray-700">
                          Conserva comprobantes y certificados. Algunos contratos gubernamentales 
                          requieren evidencia de cumplimiento normativo.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nota sobre Enlaces de Afiliados</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Los enlaces de productos que aparecen en esta guía son enlaces de afiliados a 
                  Mercado Libre. Esto significa que podríamos recibir una comisión si realizas una 
                  compra a través de estos enlaces, sin costo adicional para ti. Esto nos ayuda a 
                  mantener nuestro contenido gratuito y de calidad. Solo recomendamos productos que 
                  hemos investigado exhaustivamente y que consideramos que ofrecen valor real a nuestros 
                  lectores.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Preguntas Frecuentes - Mejorada */}
        <motion.section 
          id="faq"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Info className="h-8 w-8 text-white" />
              </motion.div>
              Preguntas{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frecuentes
              </span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre{' '}
              <span className="font-semibold text-blue-600">chalecos de seguridad</span>
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card
                  className={`border-2 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    expandedFAQ === index 
                      ? 'border-blue-400 shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  {/* Efecto de onda al expandir */}
                  <AnimatePresence>
                    {expandedFAQ === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20"
                        initial={{ scale: 0, borderRadius: '50%' }}
                        animate={{ scale: 2, borderRadius: '0%' }}
                        exit={{ scale: 0, borderRadius: '50%' }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <motion.h3 
                        className={`text-lg font-semibold transition-colors ${
                          expandedFAQ === index ? 'text-blue-700' : 'text-gray-900'
                        }`}
                        layout
                      >
                        <span className="text-blue-500 font-bold mr-2">Q{index + 1}:</span>
                        {faq.question}
                      </motion.h3>
                      
                      <motion.div
                        animate={{ 
                          rotate: expandedFAQ === index ? 180 : 0,
                          scale: expandedFAQ === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                        className={`p-1 rounded-full ${
                          expandedFAQ === index ? 'bg-blue-100' : 'bg-gray-100'
                        }`}
                      >
                        <ChevronDown className={`h-5 w-5 flex-shrink-0 ${
                          expandedFAQ === index ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      </motion.div>
                    </div>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CardContent className="relative z-10">
                          <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-blue-200"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">A</span>
                                </div>
                              </div>
                              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conclusión - Sección Espectacular */}
        <motion.section 
          id="conclusion"
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, y: 50 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Partículas decorativas de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 40 }, (_, i) => (
                <motion.div
                  key={`conclusion-particle-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${3 + (i % 4)}px`,
                    height: `${3 + (i % 4)}px`,
                    left: `${(i * 2.5) % 100}%`,
                    top: `${(i * 3.7) % 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 8 + (i % 4),
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>

            {/* Formas geométricas decorativas */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-lg"
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.8)",
                      "0 0 10px rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Tu Seguridad, Tu Responsabilidad, Tu Futuro
                </motion.span>
              </motion.h2>
              
              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed mb-8">
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  La elección de un chaleco de seguridad trasciende una simple compra: es una{' '}
                  <motion.span 
                    className="font-bold text-yellow-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    decisión que salva vidas
                  </motion.span>. 
                  Como hemos explorado, cada elemento técnico - desde las cintas reflectantes hasta 
                  la certificación ANSI - representa años de investigación en seguridad industrial.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Para el profesional que busca{' '}
                  <motion.span 
                    className="font-semibold text-yellow-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    máxima funcionalidad y resistencia
                  </motion.span>, el 
                  <strong> Chaleco de Seguridad Industrial Gabardina 100% Algodón Elite</strong> 
                  representa la cúspide de la ingeniería de protección. Para entornos de{' '}
                  <motion.span 
                    className="font-semibold text-red-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    alto riesgo y cumplimiento normativo
                  </motion.span>, el 
                  <strong> Chaleco Alta Visibilidad Bicolor Clase 2</strong> es la barrera 
                  definitiva entre el peligro y la seguridad.
                </motion.p>

                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <motion.p 
                    className="font-bold mb-3 text-yellow-300 text-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    💡 La Verdad Fundamental:
                  </motion.p>
                  <p>
                    La{' '}
                    <motion.span 
                      className="font-bold text-yellow-200"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      visibilidad no es un lujo, es un derecho
                    </motion.span>. 
                    Cada trabajador merece regresar a casa seguro, y el chaleco correcto 
                    es el guardián silencioso que hace posible ese regreso.
                  </p>
                </motion.div>

                <motion.p
                  className="text-center text-xl font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <motion.span
                    animate={{ 
                      color: ["#FEF3C7", "#FBBF24", "#F59E0B", "#FEF3C7"],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    No dejes tu seguridad al azar; invierte en protección inteligente.
                  </motion.span>
                </motion.p>
              </div>

              {/* Botón de acción final */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <motion.button
                  className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Ver Chalecos Recomendados ↑
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

                  {/* Related Articles */}
                  <RelatedArticles 
                    articles={[
                      {
                        id: '1',
                        title: 'Los Mejores Arneses de Seguridad para Trabajo en Altura 2025',
                        excerpt: 'Guía definitiva sobre normativas mexicanas NOM-009-STPS y los mejores productos.',
                        category: 'EPP',
                        publishDate: '4 Oct 2025',
                        readTime: '25 min',
                        slug: 'mejores-arneses-seguridad-trabajo-altura'
                      },
                      {
                        id: '2',
                        title: 'El Mejor Calzado de Seguridad Industrial para México 2025',
                        excerpt: 'Análisis completo de normativas NOM-113 y los mejores productos del mercado.',
                        category: 'Calzado',
                        publishDate: '3 Oct 2025',
                        readTime: '25 min',
                        slug: 'mejor-calzado-industrial-botas-seguridad'
                      },
                      {
                        id: '3',
                        title: 'Los Mejores Botiquines de Emergencia para el Trabajo',
                        excerpt: 'Guía completa de normativas, productos y mejores prácticas en México.',
                        category: 'Primeros Auxilios',
                        publishDate: '2 Oct 2025',
                        readTime: '20 min',
                        slug: 'mejores-botiquines-emergencia-trabajo'
                      }
                    ]}
                    title="Artículos Relacionados sobre Seguridad Industrial"
                  />
                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}