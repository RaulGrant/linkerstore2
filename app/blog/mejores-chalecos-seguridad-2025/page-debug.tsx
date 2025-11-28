'use client';

import { useState, useEffect } from 'react';
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
  Sun,
  Info,
  ChevronDown,
  ExternalLink,
  Star,
  ShoppingCart,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GuiaChalecosSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSection, setVisibleSection] = useState('');

  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'guia-completa-chalecos-seguridad');
    trackBlogView(articleId, 'Guía Completa de Chalecos de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  // Efecto para la barra de progreso de lectura
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detectar sección visible
      const sections = ['header', 'caracteristicas', 'productos', 'faq', 'conclusion'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Datos para gráficos
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
        position: 'bottom',
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
          callback: function(value) {
            return value + ' m²';
          }
        }
      }
    }
  };

  // Preguntas frecuentes
  const faqs = [
    {
      question: '¿Qué significa que un chaleco sea "Clase 2" según ANSI?',
      answer: 'Que un chaleco sea "Clase 2" según la norma ANSI/ISEA 107 significa que está diseñado y certificado para ofrecer un nivel de visibilidad adecuado en entornos de trabajo con riesgo moderado. Específicamente, es para zonas donde los trabajadores están expuestos a tráfico vehicular con velocidades que oscilan entre 40 km/h y 80 km/h.'
    },
    {
      question: '¿Cuál es la diferencia entre un chaleco de poliéster y uno de gabardina?',
      answer: 'La principal diferencia radica en el balance entre ligereza/confort y durabilidad/resistencia. Un chaleco de poliéster es ligero, económico y a menudo se presenta en formato de malla, ideal para climas cálidos. Un chaleco de gabardina es más grueso, pesado y resistente, diseñado para uso rudo en construcción.'
    },
    {
      question: '¿Puedo personalizar un chaleco con el logo de mi empresa?',
      answer: 'Sí, la personalización de chalecos de seguridad es muy común en México, especialmente en plataformas como Mercado Libre. El método más habitual es el bordado. Es crucial asegurarse de que el logo no se coloque sobre las cintas reflectantes.'
    },
    {
      question: '¿Cada cuánto tiempo se debe cambiar un chaleco de seguridad?',
      answer: 'No existe una fecha de caducidad estricta, pero debes cambiar tu chaleco si: 1) El color fluorescente está desvanecido, 2) Las cintas reflectantes están rotas o han perdido capacidad de reflejar, 3) La tela tiene rasgaduras. Un chaleco dañado ya no es protección.'
    }
  ];

  // Función para manejar clicks de afiliados
  const handleAffiliateClick = (productName, url) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('mercadolibre', productId, productName, 'chaleco_seguridad');
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="min-h-screen">
        {/* Barra de progreso */}
        <div 
          className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 z-50 origin-left shadow-lg transition-transform"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* Navegación flotante */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-gray-200">
            {[
              { id: 'header', icon: '🏠', label: 'Inicio' },
              { id: 'caracteristicas', icon: '🔍', label: 'Características' },
              { id: 'productos', icon: '🛒', label: 'Productos' },
              { id: 'faq', icon: '❓', label: 'FAQ' },
              { id: 'conclusion', icon: '✅', label: 'Conclusión' }
            ].map((section) => (
              <button
                key={section.id}
                className={`w-12 h-12 rounded-xl mb-2 last:mb-0 flex items-center justify-center text-lg transition-all hover:scale-105 ${
                  visibleSection === section.id 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg scale-110' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                title={section.label}
              >
                {section.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section id="header" className="bg-gradient-to-br from-orange-900 via-yellow-900 to-green-900 text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-yellow-600/10 to-red-600/20"></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-yellow-300">Los 7 Mejores</span>
                <span className="block text-white">Chalecos de Seguridad</span>
                <span className="block text-orange-300">para 2025</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto">
                Guía completa para elegir el chaleco de alta visibilidad perfecto según tu trabajo y presupuesto en México.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium">Actualizado: Enero 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Lectura: 15-20 min</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Shield className="w-5 h-5 text-orange-300" />
                  <span className="text-sm font-medium">Normativa ANSI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section id="caracteristicas" className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué Hace a un Chaleco Realmente Seguro?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No todos los chalecos son iguales. Conoce los factores clave que determinan la efectividad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Clasificación ANSI/ISEA 107</h3>
                <div className="h-64 w-full">
                  <Doughnut data={visibilityChartData} options={chartOptions} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-xl">
                      <Sun className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Clase 1</h4>
                      <p className="text-gray-600">Para tráfico bajo o ambientes controlados (< 40 km/h)</p>
                      <Badge className="mt-2 bg-yellow-100 text-yellow-800">0.10 m² reflectante</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Clase 2</h4>
                      <p className="text-gray-600">Para tráfico moderado y construcción (40-80 km/h)</p>
                      <Badge className="mt-2 bg-orange-100 text-orange-800">0.13 m² reflectante</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Clase 3</h4>
                      <p className="text-gray-600">Para tráfico alto y trabajo nocturno (> 80 km/h)</p>
                      <Badge className="mt-2 bg-red-100 text-red-800">0.20 m² reflectante</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Productos - Sección simplificada para evitar errores */}
        <section id="productos" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🏆 Los 7 Mejores Chalecos de 2025
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Selección basada en calidad, precio y disponibilidad en México.
              </p>
            </div>

            {/* Producto 1 */}
            <article className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 mb-8">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🥇</span>
                        <Badge className="bg-orange-500 text-white px-3 py-1">
                          #1 • Alta Visibilidad
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Chaleco De Seguridad Radians Sv46oxl Clase 2 Extra, Naranja Fluorescente
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Visibilidad máxima con doble banda reflectante para turnos nocturnos.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm font-medium text-gray-600 ml-1">
                          4.5
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">500+ reseñas verificadas</span>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Ideal para:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">Supervisores de obra civil, brigadas de protección civil, cuadrillas eléctricas.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Disponibilidad y CTA
                    </h5>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      📦 <strong>Disponibilidad:</strong> Alta disponibilidad en colores neón.
                    </p>
                    
                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleAffiliateClick('Chaleco De Seguridad Radians Sv46oxl', 'https://mercadolibre.com/sec/2RznHsW')}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-105 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Ver en Mercado Libre
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        🛡️ Compra segura • 🚚 Envío gratis • 💳 Meses sin intereses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Producto 2 */}
            <article className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-emerald-200 hover:shadow-2xl transition-all duration-300 mb-8">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🥈</span>
                        <Badge className="bg-emerald-500 text-white px-3 py-1">
                          #2 • Certificado
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Chaleco Alta Visibilidad Bicolor Clase 2 Brigadista C Bolsas
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Cumplimiento normativo con diseño bicolor para tráfico vehicular intenso.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm font-medium text-gray-600 ml-1">
                          4.7
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">10+ reseñas verificadas</span>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Ideal para:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">Contratistas de obra pública, cuadrillas de señalización vial.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Disponibilidad y CTA
                    </h5>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      📦 <strong>Disponibilidad:</strong> Revisar guía de tallas.
                    </p>
                    
                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleAffiliateClick('Chaleco Alta Visibilidad Bicolor', 'https://mercadolibre.com/sec/26Kem4U')}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Ver en Mercado Libre
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        🛡️ Compra segura • 🚚 Envío gratis • 💳 Meses sin intereses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Productos 3-7 con estructura similar pero simplificada */}
            <div className="grid gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">🥉</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chaleco de Malla Económico</h3>
                    <Badge className="bg-teal-500 text-white">#3 • Económico</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Opción ligera para tareas urbanas y temporales.</p>
                  <Button 
                    onClick={() => handleAffiliateClick('Chaleco de Malla Económico', 'https://mercadolibre.com/sec/23uTvh2')}
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ver Producto
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chaleco Brigadista Reflejante Gabardina</h3>
                    <Badge className="bg-purple-500 text-white">#4 • Profesional</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Organización ergonómica para jornadas extensas.</p>
                  <Button 
                    onClick={() => handleAffiliateClick('Chaleco Brigadista Reflejante', 'https://mercadolibre.com/sec/26CEJyr')}
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ver Producto
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chaleco Seguridad Trabajo Industrial</h3>
                    <Badge className="bg-orange-600 text-white">#5 • Alta Visibilidad</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Visibilidad nocturna sobresaliente bajo niebla.</p>
                  <Button 
                    onClick={() => handleAffiliateClick('Chaleco Seguridad Trabajo Industrial', 'https://mercadolibre.com/sec/1GK5aRk')}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ver Producto
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chaleco Radians SV46 Heavy Duty</h3>
                    <Badge className="bg-blue-500 text-white">#6 • Innovación</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Calidad americana importada para máxima exigencia.</p>
                  <Button 
                    onClick={() => handleAffiliateClick('Chaleco Radians SV46 Heavy Duty', 'https://mercadolibre.com/sec/2Xzhw76')}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ver Producto
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">❄️</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chaleco Reflejante Ejecutivo Gabardina</h3>
                    <Badge className="bg-indigo-500 text-white">#7 • Ejecutivo</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Durabilidad superior y presentación profesional.</p>
                  <Button 
                    onClick={() => handleAffiliateClick('Chaleco Reflejante Ejecutivo', 'https://mercadolibre.com/sec/16xjRYw')}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ver Producto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ❓ Preguntas Frecuentes
              </h2>
              <p className="text-lg text-gray-600">
                Resolvemos las dudas más comunes sobre chalecos de seguridad.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <Card
                    className={`border-2 transition-all duration-300 cursor-pointer ${
                      expandedFAQ === index 
                        ? 'border-blue-400 shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50' 
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                    }`}
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={`text-lg font-semibold transition-colors ${
                          expandedFAQ === index ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          <span className="text-blue-500 font-bold mr-2">Q{index + 1}:</span>
                          {faq.question}
                        </h3>
                        
                        <div className={`p-1 rounded-full transition-all duration-300 ${
                          expandedFAQ === index 
                            ? 'bg-blue-100 text-blue-600 rotate-180 scale-110' 
                            : 'bg-gray-100'
                        }`}>
                          <ChevronDown className={`h-5 w-5 flex-shrink-0 ${
                            expandedFAQ === index ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                    </CardHeader>
                    
                    {expandedFAQ === index && (
                      <CardContent>
                        <div className="border-t border-blue-100 pt-4">
                          <div className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold text-lg">A:</span>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section id="conclusion" className="py-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl relative">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Tu Seguridad, Tu Responsabilidad, Tu Futuro
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed mb-8">
                <p>
                  En el mundo laboral mexicano, donde la construcción, la industria y los servicios crecen cada día, 
                  <span className="font-semibold text-yellow-300"> un chaleco de seguridad no es solo un accesorio</span>, sino 
                  <span className="font-semibold text-orange-300"> una herramienta vital</span> que puede salvar tu vida.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 my-8">
                  <p className="text-xl font-semibold mb-4">
                    <span className="text-yellow-300">💡 Recuerda:</span> No compras un chaleco, 
                    <span className="text-green-300"> inviertes en tu protección</span>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><strong>✅ Elige Clase 2</strong> para tráfico vehicular</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><strong>✅ Prioriza</strong> marcas con garantía</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><strong>✅ Verifica</strong> cintas reflectantes de calidad</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p><strong>✅ Considera</strong> tu tipo de trabajo diario</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-4">
                  🛡️ <span className="text-yellow-300">Protégete hoy</span>, 
                  <span className="text-green-300"> trabaja seguro mañana</span> 🛡️
                </p>
                <p className="text-lg opacity-90">
                  Tu familia te espera en casa. Haz que cada día laboral termine con tu regreso seguro.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RelatedArticles 
          currentArticleId="mejores-chalecos-seguridad-2025"
          category="seguridad-industrial"
        />
      </div>
    </div>
  );
}
