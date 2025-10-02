'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  Ear,
  Wind,
  Hand,
  Footprints,
  TrendingUp,
  Brain,
  Zap,
  Info,
  ChevronDown,
  ChevronUp,
  Activity,
  Thermometer,
  Radio,
  Smartphone
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GuiaEPPIndustrialArticle() {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efecto para la barra de progreso de lectura
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Datos para gráfico de accidentes por región anatómica
  const accidentesChartData = {
    labels: ['Manos y Muñecas', 'Ojos', 'Pies', 'Cabeza', 'Torso', 'Otros'],
    datasets: [{
      label: 'Porcentaje de Accidentes',
      data: [38.77, 15, 12, 10, 8, 16.23],
      backgroundColor: [
        '#EF4444',
        '#F59E0B',
        '#10B981',
        '#3B82F6',
        '#8B5CF6',
        '#6B7280'
      ],
      borderColor: '#FDFBF8',
      borderWidth: 3,
      hoverOffset: 12
    }]
  };

  const accidentesChartOptions = {
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
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    }
  };

  // Datos para gráfico de costos de accidentes
  const costosChartData = {
    labels: ['Días Perdidos', 'Tratamiento Médico', 'Compensación', 'Pérdida de Productividad', 'Daño Reputacional'],
    datasets: [{
      label: 'Costo Estimado (miles USD)',
      data: [45, 30, 85, 120, 50],
      backgroundColor: '#F97316',
      borderColor: '#EA580C',
      borderWidth: 2
    }]
  };

  const costosChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return '$' + context.parsed.y + 'k USD';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '$' + value + 'k';
          }
        }
      }
    }
  };

  // Secciones de EPP con iconos
  const eppSections = [
    { id: 'ojos', icon: Eye, title: 'Protección Ocular', color: 'from-blue-500 to-cyan-500' },
    { id: 'auditiva', icon: Ear, title: 'Protección Auditiva', color: 'from-purple-500 to-pink-500' },
    { id: 'respiratoria', icon: Wind, title: 'Protección Respiratoria', color: 'from-green-500 to-emerald-500' },
    { id: 'manos', icon: Hand, title: 'Protección de Manos', color: 'from-orange-500 to-red-500' },
    { id: 'pies', icon: Footprints, title: 'Protección de Pies', color: 'from-indigo-500 to-purple-500' }
  ];

  // Preguntas frecuentes
  const faqs = [
    {
      question: '¿Cuál es la diferencia entre Z87 y Z87+ en gafas de seguridad?',
      answer: 'Z87 indica protección básica contra impactos, mientras que Z87+ certifica que el equipo ha superado pruebas de alto impacto: resistencia a impacto de alta masa (peso de 500g cayendo desde 1.3m) y alta velocidad (bola de acero a 164-273 km/h). Siempre busque Z87+ para ambientes industriales de alto riesgo.'
    },
    {
      question: '¿Por qué 85 dB es el umbral crítico para protección auditiva?',
      answer: 'Los 85 dB representan el punto donde la exposición prolongada (8 horas) comienza a causar daño auditivo permanente e irreversible. Este umbral es reconocido internacionalmente por OSHA, NIOSH, y la NOM-011-STPS-2001 en México. Cada 3-5 dB adicionales duplican el riesgo de daño.'
    },
    {
      question: '¿Qué significan los códigos N95, R95, P100 en respiradores?',
      answer: 'La letra indica resistencia al aceite: N (no resistente), R (resistente hasta 8h), P (a prueba de aceite, >8h). El número indica eficiencia de filtración: 95=95%, 99=99%, 100=99.97% de partículas. Ejemplo: N95 filtra 95% de partículas pero no es resistente al aceite.'
    },
    {
      question: '¿Cómo seleccionar el nivel de corte correcto para guantes?',
      answer: 'Los guantes se clasifican de A1 a A9 según la fuerza necesaria para cortarlos. A1-A3 para tareas ligeras (ensamblaje), A4-A5 para manejo de vidrio y metal, A6-A7 para industria cárnica, A8-A9 para metalurgia pesada. Evalúe los objetos afilados específicos de su tarea.'
    },
    {
      question: '¿Por qué el EPP cómodo es tan importante como el EPP certificado?',
      answer: 'El EPP incómodo no se usa consistentemente, eliminando su protección. Estudios muestran que el 70% del incumplimiento se debe a incomodidad. Un equipo certificado pero nunca usado tiene 0% de efectividad. La comodidad garantiza el cumplimiento, que es la única forma en que el EPP puede proteger.'
    }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
      title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
      excerpt: 'Guía completa de los 7 chalecos mejor calificados en Amazon para trabajo en altura.',
      category: 'Seguridad Industrial',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      slug: 'mejores-chalecos-seguridad-2025',
      isPopular: true
    },
    {
      id: '2',
      title: 'Guía NOM-009-STPS-2011: Trabajos en Alturas',
      excerpt: 'Los 7 puntos clave que todo supervisor debe dominar para garantizar la seguridad en trabajos de altura.',
      category: 'Seguridad Industrial',
      publishDate: '1 Oct 2025',
      readTime: '15 min',
      slug: 'guia-nom-009-stps-2011-trabajos-altura',
      isNew: true
    },
    {
      id: '3',
      title: 'Los Mejores Arneses de Seguridad para Trabajo en Altura',
      excerpt: 'Equipos de protección anticaídas certificados y sistemas de anclaje.',
      category: 'Seguridad',
      publishDate: '14 Ago 2025',
      readTime: '10 min',
      slug: 'mejores-arneses-seguridad-trabajo-altura'
    }
  ];

  return (
    <BlogLayout>
      {/* Barra de progreso de lectura */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-particle-${i}`}
                className="absolute rounded-full opacity-40"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  backgroundColor: `hsl(${20 + (i * 5)}, 80%, ${50 + (i % 30)}%)`,
                  left: `${(i * 1.7) % 100}%`,
                  top: `${(i * 2.3) % 100}%`,
                  boxShadow: `0 0 ${8 + (i % 6)}px hsl(${20 + (i * 5)}, 80%, ${50 + (i % 30)}%, 0.6)`
                }}
                animate={{
                  y: [0, -80, 40, -40, 0],
                  x: [0, 40, -30, 20, 0],
                  scale: [0.5, 1.5, 0.8, 1.2, 0.5],
                  opacity: [0.2, 0.7, 0.3, 0.6, 0.2]
                }}
                transition={{
                  duration: 15 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-6 py-3 text-orange-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="h-5 w-5" />
                ⚡ Guía Completa de Seguridad Industrial
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Más Allá del Casco: La Guía Definitiva de EPP que{' '}
                <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  Salva Vidas
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Descubre la ciencia, las normas y el futuro del Equipo de Protección Personal. 
                Un error en la selección puede tener consecuencias que duran toda la vida.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  2 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  22 min de lectura
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Basado en normativas internacionales
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 relative overflow-hidden min-h-screen">
          {/* Partículas de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 5)}px`,
                  height: `${3 + (i % 5)}px`,
                  background: `hsl(${15 + (i * 8)}, 70%, ${55 + (i % 25)}%)`,
                  left: `${(i * 1.8) % 100}%`,
                  top: `${(i * 2.5) % 100}%`,
                  opacity: 0.3
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, 30, 0],
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 12 + (i % 6),
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Historia de Impacto - Introducción */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-orange-100">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl">
                      <AlertTriangle className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        El Momento que lo Cambia Todo
                      </h2>
                      <p className="text-gray-600 text-sm italic mb-4">
                        Historia basada en casos reales documentados
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                      Un andamio en una concurrida obra de Nueva York. Un técnico resbala sobre una superficie mojada 
                      durante una inspección en altura. La caída es inevitable, un descenso vertiginoso hacia una lesión 
                      grave o algo peor. <b className="text-orange-600">Pero la caída se detiene bruscamente.</b> El sistema de línea de vida 
                      y el arnés de cuerpo completo han hecho su trabajo. El trabajador queda suspendido, conmocionado pero 
                      ileso, un testimonio viviente de cómo el equipo adecuado, usado correctamente, es la diferencia entre 
                      un susto y una tragedia.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                      <motion.div 
                        className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-xl"
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                          <h4 className="font-bold text-green-900">Caso de Éxito</h4>
                        </div>
                        <p className="text-green-800 text-sm">
                          <b>Sistema de línea de vida y arnés:</b> Detuvo una caída de 6 metros. 
                          El trabajador experimentó solo un golpe menor y pudo regresar al trabajo el mismo día.
                        </p>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl"
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                          <h4 className="font-bold text-red-900">Caso de Fallo</h4>
                        </div>
                        <p className="text-red-800 text-sm">
                          <b>Guantes inadecuados:</b> Sean perdió dos dedos al manipular maquinaria porque 
                          sus guantes dejaban descubiertas partes críticas de la mano. Resultado: 2.5 días fuera, 
                          cicatriz permanente de 2.5 cm.
                        </p>
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border-2 border-orange-300">
                      <p className="text-gray-900 text-xl font-semibold mb-4">
                        💡 El EPP es mucho más que una obligación burocrática
                      </p>
                      <p className="text-gray-700">
                        Es una <b>línea de defensa crítica</b>, una herramienta de precisión diseñada para interceptar 
                        el peligro en el instante en que todo sale mal. Este artículo va más allá de la simple orden de 
                        "usar el casco". Explora por qué el EPP es crucial, cómo funciona realmente la ciencia detrás de él 
                        y qué nos depara el futuro de la protección personal.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Los Números No Mienten - Estadísticas */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-red-100">
                  <h2 className="text-4xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      Los Números No Mienten
                    </span>
                  </h2>
                  <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
                    Los accidentes laborales no son eventos aleatorios. Son un patrón estadístico con costos 
                    humanos y económicos devastadores que pueden, en gran medida, <b>prevenirse</b>.
                  </p>

                  {/* Estadísticas de México */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🇲🇽</span>
                      </div>
                      El Panorama en México: Una Realidad Ineludible
                    </h3>
                    
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <motion.div 
                        className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl font-bold text-red-600 mb-2">290,527</div>
                        <div className="text-sm text-gray-700">Riesgos de trabajo (2023)</div>
                        <div className="text-xs text-gray-500 mt-2">STPS</div>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-200"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl font-bold text-orange-600 mb-2">796</div>
                        <div className="text-sm text-gray-700">Defunciones (Q3 2024)</div>
                        <div className="text-xs text-gray-500 mt-2">IMSS</div>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl font-bold text-yellow-600 mb-2">38.77%</div>
                        <div className="text-sm text-gray-700">Lesiones en manos/muñecas</div>
                        <div className="text-xs text-gray-500 mt-2">Región más afectada</div>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl border border-amber-200"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl font-bold text-amber-600 mb-2">550+</div>
                        <div className="text-sm text-gray-700">Accidentes de mano/día</div>
                        <div className="text-xs text-gray-500 mt-2">201,000 al año</div>
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 text-center">
                          Distribución de Accidentes por Región Anatómica
                        </h4>
                        <div className="relative h-80">
                          <Doughnut data={accidentesChartData} options={accidentesChartOptions} />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 text-center">
                          Costo Promedio por Accidente Laboral
                        </h4>
                        <div className="relative h-80">
                          <Bar data={costosChartData} options={costosChartOptions} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Estadísticas Globales */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🌍</span>
                      </div>
                      Perspectiva Global: Riesgos Sin Fronteras
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Eye className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-gray-800">Lesiones Oculares (EE.UU.)</p>
                            <p className="text-sm text-gray-600">20,000 lesiones/año • $300M en costos • OSHA</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Ear className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-gray-800">Pérdida Auditiva (EE.UU.)</p>
                            <p className="text-sm text-gray-600">22M trabajadores expuestos • 33% con daño • CDC</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Hand className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-gray-800">Lesiones en Extremidades (EE.UU.)</p>
                            <p className="text-sm text-gray-600">30.6% de casos DART • >$100k por fractura</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Wind className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-gray-800">Enfermedades Respiratorias</p>
                            <p className="text-sm text-gray-600">1 de cada 7 accidentes en manufactura • NIOSH</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-white rounded-xl">
                      <p className="text-gray-700 text-center italic">
                        <b>2.93 millones</b> de muertes relacionadas con el trabajo a nivel mundial en 2024. 
                        La seguridad no es un gasto que se opone a la producción, es un <b>prerrequisito para la productividad sostenible</b>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Navegación de Secciones EPP */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-orange-100">
                  <h2 className="text-4xl font-bold text-center mb-6">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      El Arsenal de Protección
                    </span>
                  </h2>
                  <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
                    Decodificando el EPP de pies a cabeza. Cada pieza es una herramienta de alta ingeniería 
                    diseñada para contrarrestar peligros específicos.
                  </p>

                  <div className="grid md:grid-cols-5 gap-4 mb-10">
                    {eppSections.map((section) => (
                      <motion.button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-6 rounded-2xl transition-all ${
                          activeSection === section.id
                            ? `bg-gradient-to-br ${section.color} text-white shadow-2xl`
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <section.icon className="h-12 w-12 mx-auto mb-3" />
                        <div className="text-sm font-bold text-center">{section.title}</div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Contenido de Protección Ocular */}
                  <AnimatePresence mode="wait">
                    {activeSection === 'ojos' && (
                      <motion.div
                        key="ojos"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                            <Eye className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              Protección Ocular y Facial
                            </h3>
                            <p className="text-gray-600">Más que un simple plástico: Ciencia de impactos</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Norma ANSI Z87.1: La Diferencia Crítica entre Z87 y Z87+
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl">
                              <div className="text-blue-600 font-bold text-2xl mb-2">Z87</div>
                              <p className="text-sm text-gray-700 mb-4">Protección básica contra impactos</p>
                              <ul className="space-y-2 text-sm text-gray-600">
                                <li>✓ Uso general en almacenes</li>
                                <li>✓ Tareas de ensamblaje ligero</li>
                                <li>✓ Riesgo bajo de proyecciones</li>
                              </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-xl border-2 border-blue-400">
                              <div className="text-blue-900 font-bold text-2xl mb-2 flex items-center gap-2">
                                Z87+ <Badge className="bg-blue-600">RECOMENDADO</Badge>
                              </div>
                              <p className="text-sm text-gray-800 mb-4 font-semibold">Protección de alto impacto certificada</p>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <b>Alta masa:</b> Resiste 500g desde 1.3m</li>
                                <li>• <b>Alta velocidad:</b> Bola de acero a 164-273 km/h</li>
                                <li>• <b>Ideal para:</b> Esmerilado, mecanizado, construcción</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <div className="font-bold text-blue-900 mb-2">D3 - Gotas/Salpicaduras</div>
                            <p className="text-xs text-gray-600">Químicos, fluidos de corte</p>
                          </div>
                          <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                            <div className="font-bold text-cyan-900 mb-2">D4 - Polvo Grueso</div>
                            <p className="text-xs text-gray-600">Partículas de madera, metal</p>
                          </div>
                          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                            <div className="font-bold text-teal-900 mb-2">D5 - Polvo Fino</div>
                            <p className="text-xs text-gray-600">Sílice, cemento, fibras</p>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                          <p className="text-yellow-900 font-semibold flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            Novedad ANSI/ISEA Z87.1-2020
                          </p>
                          <p className="text-yellow-800 text-sm mt-2">
                            Nuevos criterios para propiedades <b>antivaho</b>. La visión obstruida es un peligro en sí misma.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Contenido de Protección Auditiva */}
                    {activeSection === 'auditiva' && (
                      <motion.div
                        key="auditiva"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                            <Ear className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              Protección Auditiva
                            </h3>
                            <p className="text-gray-600">El silencio es oro: 85 dB es el umbral crítico</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300">
                          <h4 className="font-bold text-red-900 mb-4 text-xl flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6" />
                            ¿Por Qué 85 dB es el Punto Crítico?
                          </h4>
                          <p className="text-gray-700 mb-6">
                            Los 85 decibeles ponderados A (dB(A)) representan el umbral donde la exposición 
                            prolongada (8 horas) comienza a causar <b className="text-red-600">daño auditivo permanente e irreversible</b>. 
                            Este no es un número arbitrario.
                          </p>

                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-xl text-center">
                              <div className="text-3xl font-bold text-purple-600 mb-2">85 dB</div>
                              <div className="text-xs text-gray-600">NOM-011-STPS-2001 (México)</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-2">85 dB</div>
                              <div className="text-xs text-gray-600">OSHA 1910.95 (EE.UU.)</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl text-center">
                              <div className="text-3xl font-bold text-green-600 mb-2">85 dB</div>
                              <div className="text-xs text-gray-600">Directiva 2003/10/EC (UE)</div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-xl">
                            <p className="font-semibold text-gray-800 mb-3">Tasa de Intercambio: El Factor Crítico</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="p-4 bg-orange-50 rounded-lg">
                                <p className="font-bold text-orange-900 mb-1">OSHA: 5 dB</p>
                                <p className="text-sm text-gray-700">Tiempo se reduce a la mitad cada +5 dB</p>
                              </div>
                              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-400">
                                <p className="font-bold text-green-900 mb-1">NIOSH: 3 dB ⭐</p>
                                <p className="text-sm text-gray-700">Más preciso científicamente (duplica energía)</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                          <h4 className="font-bold text-purple-900 mb-4">Escala de Ruido en el Trabajo</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-4">
                              <div className="w-20 text-center font-bold text-green-600">60 dB</div>
                              <div className="flex-1 h-3 bg-green-200 rounded-full"></div>
                              <div className="text-sm text-gray-600">Conversación normal</div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-20 text-center font-bold text-yellow-600">85 dB</div>
                              <div className="flex-1 h-3 bg-yellow-300 rounded-full"></div>
                              <div className="text-sm text-gray-600">Tráfico pesado - ⚠️ UMBRAL</div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-20 text-center font-bold text-orange-600">100 dB</div>
                              <div className="flex-1 h-3 bg-orange-400 rounded-full"></div>
                              <div className="text-sm text-gray-600">Motosierra, esmeriladora</div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-20 text-center font-bold text-red-600">120 dB</div>
                              <div className="flex-1 h-3 bg-red-500 rounded-full"></div>
                              <div className="text-sm text-gray-600">Motor a reacción - 🔴 PELIGRO</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Contenido de Protección Respiratoria */}
                    {activeSection === 'respiratoria' && (
                      <motion.div
                        key="respiratoria"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl">
                            <Wind className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              Protección Respiratoria
                            </h3>
                            <p className="text-gray-600">Lo que no ves puede lastimarte</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                          <h4 className="font-bold text-green-900 mb-4 text-lg">
                            Código de Colores NIOSH para Cartuchos
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-gray-900 text-white p-4 rounded-xl">
                              <div className="font-bold mb-2">⚫ NEGRO</div>
                              <div className="text-sm opacity-90">Vapores Orgánicos</div>
                              <div className="text-xs opacity-75 mt-2">Solventes, pinturas, combustibles</div>
                            </div>
                            
                            <div className="bg-white border-2 border-gray-300 p-4 rounded-xl">
                              <div className="font-bold mb-2 text-gray-800">⚪ BLANCO</div>
                              <div className="text-sm text-gray-700">Gases Ácidos</div>
                              <div className="text-xs text-gray-600 mt-2">Cloro, dióxido de azufre, HCl</div>
                            </div>

                            <div className="bg-yellow-300 p-4 rounded-xl">
                              <div className="font-bold mb-2 text-yellow-900">🟡 AMARILLO</div>
                              <div className="text-sm text-yellow-800">Combinación</div>
                              <div className="text-xs text-yellow-700 mt-2">Orgánicos + Ácidos</div>
                            </div>

                            <div className="bg-green-400 p-4 rounded-xl">
                              <div className="font-bold mb-2 text-green-900">🟢 VERDE</div>
                              <div className="text-sm text-green-800">Amoníaco</div>
                              <div className="text-xs text-green-700 mt-2">NH₃, Metilamina</div>
                            </div>

                            <div className="bg-purple-400 text-white p-4 rounded-xl">
                              <div className="font-bold mb-2">🟣 MAGENTA</div>
                              <div className="text-sm opacity-90">P100 - Partículas</div>
                              <div className="text-xs opacity-75 mt-2">99.97% eficiencia, incluye aceites</div>
                            </div>

                            <div className="bg-orange-400 p-4 rounded-xl">
                              <div className="font-bold mb-2 text-orange-900">🟠 NARANJA</div>
                              <div className="text-sm text-orange-800">Multi-Gas</div>
                              <div className="text-xs text-orange-700 mt-2">Protección de amplio espectro</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                          <h4 className="font-bold text-gray-800 mb-4 text-lg">
                            Clasificación de Filtros de Partículas NIOSH
                          </h4>
                          <p className="text-gray-600 mb-6 text-sm">
                            La clasificación tiene dos componentes: <b>Letra</b> (resistencia al aceite) y <b>Número</b> (eficiencia).
                          </p>

                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-300">
                              <div className="text-2xl font-bold text-blue-600 mb-2">N</div>
                              <div className="text-sm font-semibold text-blue-800 mb-1">No resistente al aceite</div>
                              <div className="text-xs text-gray-600">Para partículas no basadas en aceite (polvo, neblinas acuosas)</div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-xl border-2 border-orange-300">
                              <div className="text-2xl font-bold text-orange-600 mb-2">R</div>
                              <div className="text-sm font-semibold text-orange-800 mb-1">Resistente al aceite</div>
                              <div className="text-xs text-gray-600">Hasta 8 horas con aerosoles de aceite</div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-xl border-2 border-green-300">
                              <div className="text-2xl font-bold text-green-600 mb-2">P</div>
                              <div className="text-sm font-semibold text-green-800 mb-1">A prueba de aceite</div>
                              <div className="text-xs text-gray-600">Uso prolongado (&gt;8h) con aerosoles de aceite</div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-100 rounded-xl text-center">
                              <div className="text-3xl font-bold text-gray-700 mb-2">95</div>
                              <div className="text-sm text-gray-600">Filtra el 95% de partículas</div>
                            </div>
                            <div className="p-4 bg-gray-200 rounded-xl text-center">
                              <div className="text-3xl font-bold text-gray-700 mb-2">99</div>
                              <div className="text-sm text-gray-600">Filtra el 99% de partículas</div>
                            </div>
                            <div className="p-4 bg-purple-100 rounded-xl text-center border-2 border-purple-400">
                              <div className="text-3xl font-bold text-purple-700 mb-2">100</div>
                              <div className="text-sm text-purple-800 font-semibold">Filtra el 99.97% ⭐</div>
                            </div>
                          </div>

                          <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                            <p className="text-sm text-gray-700">
                              <b>Ejemplo:</b> Un respirador <b className="text-purple-700">N95</b> significa: 
                              <b className="text-blue-700"> N</b> (no resistente al aceite) + <b className="text-blue-700">95</b> (filtra 95% de partículas).
                              Ideal para polvo de construcción, polen, pero NO para pintura en aerosol con solventes.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Contenido de Protección de Manos */}
                    {activeSection === 'manos' && (
                      <motion.div
                        key="manos"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl">
                            <Hand className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              Protección de Manos
                            </h3>
                            <p className="text-gray-600">Tu herramienta más valiosa: 38.77% de todos los accidentes</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300">
                          <h4 className="font-bold text-red-900 mb-4 text-xl flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6" />
                            El Punto Más Vulnerable del Sistema
                          </h4>
                          <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-xl text-center">
                              <div className="text-4xl font-bold text-red-600 mb-2">201,000</div>
                              <div className="text-sm text-gray-700">Bajas por accidentes de mano (2023)</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                              <div className="text-4xl font-bold text-orange-600 mb-2">3.9M</div>
                              <div className="text-sm text-gray-700">Días de trabajo perdidos</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                              <div className="text-4xl font-bold text-amber-600 mb-2">550+</div>
                              <div className="text-sm text-gray-700">Accidentes de mano por día</div>
                            </div>
                          </div>
                          <p className="text-gray-700 text-center">
                            Las manos son la <b>interfaz principal</b> entre el trabajador y su tarea. 
                            Un programa de seguridad que no priorice su protección está ignorando el punto más vulnerable.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                          <h4 className="font-bold text-gray-800 mb-6 text-lg">
                            Niveles de Resistencia al Corte ANSI/ISEA 105
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                              <div className="w-24 text-center">
                                <div className="font-bold text-green-700 text-xl">A1</div>
                                <div className="text-xs text-gray-600">200-499g</div>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-green-900 mb-1">Nulo/Muy Bajo</div>
                                <div className="text-sm text-gray-700">Ensamblaje, electrónica, almacén ligero</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                              <div className="w-24 text-center">
                                <div className="font-bold text-yellow-700 text-xl">A2-A3</div>
                                <div className="text-xs text-gray-600">500-1,499g</div>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-yellow-900 mb-1">Ligero/Medio</div>
                                <div className="text-sm text-gray-700">Construcción, cartón, automotriz ligero, logística</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                              <div className="w-24 text-center">
                                <div className="font-bold text-orange-700 text-xl">A4-A5</div>
                                <div className="text-xs text-gray-600">1,500-2,999g</div>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-orange-900 mb-1">Medio/Alto</div>
                                <div className="text-sm text-gray-700">Vidrio, estampado de metal, HVAC, reciclaje</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                              <div className="w-24 text-center">
                                <div className="font-bold text-red-700 text-xl">A6-A7</div>
                                <div className="text-xs text-gray-600">3,000-4,999g</div>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-red-900 mb-1">Alto/Extremo</div>
                                <div className="text-sm text-gray-700">Cuchillas, extrusión, industria cárnica, procesamiento</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                              <div className="w-24 text-center">
                                <div className="font-bold text-purple-700 text-xl">A8-A9</div>
                                <div className="text-xs text-gray-600">5,000-6,000+g</div>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-purple-900 mb-1">Extremo</div>
                                <div className="text-sm text-gray-700">Láminas metálicas pesadas, vidrio plano, acerera</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                            <h5 className="font-bold text-blue-900 mb-3">Materiales de Alta Resistencia</h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Kevlar®:</b> Resistente al corte y al calor, flexible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Dyneema®:</b> UHMWPE, muy resistente y ligero</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span><b>Malla de acero inoxidable:</b> Máxima protección contra cortes</span>
                              </li>
                            </ul>
                          </div>

                          <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                            <h5 className="font-bold text-green-900 mb-3">Recubrimientos Especiales</h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>Nitrilo:</b> Resistente a aceites, químicos y abrasión</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>Látex:</b> Mejor agarre en seco, flexible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span><b>PU:</b> Máxima destreza y sensibilidad táctil</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                          <p className="text-yellow-900 font-semibold flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            Protección Química: No Existe un Guante Universal
                          </p>
                          <p className="text-yellow-800 text-sm mt-2">
                            Para protección química, consulte siempre las <b>tablas de compatibilidad específicas</b> que detallan 
                            la resistencia de cada material (nitrilo, neopreno, butilo, PVC) a productos químicos concretos. 
                            La resistencia varía significativamente según el compuesto.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Contenido de Protección de Pies */}
                    {activeSection === 'pies' && (
                      <motion.div
                        key="pies"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
                            <Footprints className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              Protección de Pies
                            </h3>
                            <p className="text-gray-600">La base de tu seguridad: 60,000 lesiones anuales</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                          <h4 className="font-bold text-indigo-900 mb-4 text-lg">
                            Requisitos OSHA 1910.136 para Calzado de Seguridad
                          </h4>
                          <p className="text-gray-700 mb-6">
                            La protección debe seleccionarse según los <b>peligros específicos</b> del entorno de trabajo.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border-2 border-indigo-300">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                  <Shield className="h-6 w-6 text-indigo-600" />
                                </div>
                                <h5 className="font-bold text-indigo-900">Puntera de Protección</h5>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">
                                Protege contra impactos y compresión por caída o rodadura de objetos.
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                  <span><b>Acero:</b> Máxima resistencia, pesado</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                  <span><b>Composite:</b> No metálico, ligero</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                                  <span><b>Aluminio:</b> Equilibrio peso/protección</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                                </div>
                                <h5 className="font-bold text-purple-900">Protección Metatarsal</h5>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">
                                Protege el <b>empeine del pie</b> contra impactos de objetos que caen verticalmente.
                              </p>
                              <div className="p-3 bg-purple-50 rounded-lg text-sm text-gray-700">
                                Ideal para: Manejo de cargas pesadas, trabajo con maquinaria elevada
                              </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-2 border-green-300">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                  <Zap className="h-6 w-6 text-green-600" />
                                </div>
                                <h5 className="font-bold text-green-900">Suela Resistente a Perforaciones</h5>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">
                                Placa interna que previene lesiones por clavos u objetos afilados en el suelo.
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span><b>Metálica:</b> Acero o acero inoxidable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span><b>Tejido compuesto:</b> Kevlar, no metálico</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-2 border-blue-300">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                  <Activity className="h-6 w-6 text-blue-600" />
                                </div>
                                <h5 className="font-bold text-blue-900">Suelas Antideslizantes</h5>
                              </div>
                              <p className="text-sm text-gray-700 mb-3">
                                Cruciales para superficies mojadas, aceitosas o resbaladizas.
                              </p>
                              <div className="p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
                                Busque: Patrones profundos, materiales de alta fricción (goma natural)
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-400">
                            <h5 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                              <Zap className="h-5 w-5" />
                              Calzado Dieléctrico (EH)
                            </h5>
                            <p className="text-sm text-gray-700 mb-3">
                              Diseñado con <b>suelas y tacones aislantes</b> para proteger contra choques eléctricos.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• Protección: Hasta <b>600 voltios</b></li>
                              <li>• Condición: Superficie seca</li>
                              <li>• Aplicación: Trabajo eléctrico, plantas de energía</li>
                            </ul>
                          </div>

                          <div className="p-6 bg-orange-50 rounded-xl border-2 border-orange-400">
                            <h5 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                              <Radio className="h-5 w-5" />
                              Calzado Conductivo (CD)
                            </h5>
                            <p className="text-sm text-gray-700 mb-3">
                              <b>Disipa la electricidad estática</b> del cuerpo al suelo, previniendo chispas.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• Previene: Chispas en atmósferas explosivas</li>
                              <li>• Aplicación: Refinerías, plantas químicas</li>
                              <li>• ⚠️ NO usar cerca de electricidad activa</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                          <p className="text-red-900 font-semibold flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-5 w-5" />
                            El EPP Funciona Como un Sistema Integrado
                          </p>
                          <p className="text-red-800 text-sm">
                            La selección de un componente puede afectar el rendimiento de otro. Ejemplo: unas gafas voluminosas 
                            pueden comprometer el sello de un respirador. <b>La evaluación de riesgos debe adoptar un enfoque holístico</b>, 
                            considerando al trabajador como un sistema completo y asegurando la compatibilidad entre todos los equipos.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>

              {/* El Factor Humano */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        El Factor Humano
                      </h2>
                      <p className="text-gray-600 text-lg">¿Por qué no usamos el EPP y cómo solucionarlo?</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300 mb-8">
                    <h3 className="text-2xl font-bold text-red-900 mb-4">
                      La Raíz del Problema: Cuando la Incomodidad Supera al Miedo
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      El incumplimiento <b className="text-red-600">rara vez se debe a intención maliciosa</b>. 
                      Las razones son casi siempre prácticas y profundamente humanas.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Thermometer className="h-5 w-5 text-red-600" />
                          Barreras Físicas
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Estrés térmico:</b> Demasiado caliente, no transpirable</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Mal ajuste:</b> Demasiado grande/pequeño, pesado, rígido</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Interferencia sensorial:</b> Reduce destreza, visión, audición</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Percepción de ineficiencia:</b> "Me hace más lento"</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Brain className="h-5 w-5 text-purple-600" />
                          Barreras Psicológicas
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Exceso de confianza:</b> "Llevo 20 años, no me pasará"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Falta de percepción del riesgo:</b> Normalización del peligro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Olvido/fatiga:</b> "Me olvidé al apurarme"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span><b>Presión de compañeros:</b> Cultura que desincentiva el uso</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-400">
                      <p className="text-gray-900 font-semibold text-lg">
                        💡 El Problema Fundamental
                      </p>
                      <p className="text-gray-700 mt-2">
                        No es principalmente un <b>fallo de disciplina</b> del trabajador, sino un <b>fallo de diseño</b> en la 
                        interfaz entre el ser humano y su equipo. Intentar resolverlo solo con más reglas o castigos es 
                        tratar el síntoma en lugar de la enfermedad.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Estrategias para el Éxito: Construyendo una Cultura de Seguridad
                    </h3>

                    <div className="space-y-6">
                      <motion.div 
                        className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500"
                        whileHover={{ x: 4 }}
                      >
                        <h4 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                          <CheckCircle className="h-6 w-6" />
                          1. Priorizar el Confort y el Ajuste
                        </h4>
                        <p className="text-gray-700 mb-3">
                          El EPP que no se usa, no protege. La comodidad no es un lujo, es una <b>característica de rendimiento crítica</b>.
                        </p>
                        <div className="bg-white p-4 rounded-lg text-sm text-gray-600">
                          <b>Acción:</b> Involucrar a los trabajadores en la selección del equipo. Permitir pruebas en condiciones reales.
                        </div>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500"
                        whileHover={{ x: 4 }}
                      >
                        <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                          <Info className="h-6 w-6" />
                          2. Capacitación que Responda al "Porqué"
                        </h4>
                        <p className="text-gray-700 mb-3">
                          La formación eficaz va más allá del "cómo". Debe centrarse en el <b>"porqué"</b>: explicar los riesgos 
                          específicos y las limitaciones de cada equipo.
                        </p>
                        <div className="bg-white p-4 rounded-lg text-sm text-gray-600">
                          <b>Acción:</b> Capacitación continua, reforzada con recordatorios visuales, práctica y relevante.
                        </div>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500"
                        whileHover={{ x: 4 }}
                      >
                        <h4 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                          <Shield className="h-6 w-6" />
                          3. Liderazgo Visible y Comprometido
                        </h4>
                        <p className="text-gray-700 mb-3">
                          La cultura de seguridad se define desde la cima. Cuando los gerentes y ejecutivos usan el EPP 
                          requerido, envían un mensaje inequívoco: <b>las reglas se aplican a todos</b>.
                        </p>
                        <div className="bg-white p-4 rounded-lg text-sm text-gray-600">
                          <b>Acción:</b> Liderazgo por el ejemplo. Cero excepciones para niveles superiores.
                        </div>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500"
                        whileHover={{ x: 4 }}
                      >
                        <h4 className="font-bold text-orange-900 mb-3 text-lg flex items-center gap-2">
                          <Activity className="h-6 w-6" />
                          4. Seguridad Basada en el Comportamiento (BBS)
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Enfoque en observación, feedback y refuerzo positivo. Modelo ABC: 
                          <b> Antecedente-Comportamiento-Consecuencia</b>.
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-sm text-gray-700 mb-3">
                            <b>⚠️ Precaución:</b> El BBS mal implementado puede derivar en culpar al trabajador mientras se 
                            ignoran las condiciones inseguras que son responsabilidad de la gerencia.
                          </div>
                          <div className="text-sm text-gray-600">
                            <b>Acción:</b> Usar BBS como pulido final, no como base. Primero eliminar/controlar peligros 
                            mediante la jerarquía de controles.
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* El Futuro: EPP Inteligente */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-purple-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        El Futuro es Ahora
                      </h2>
                      <p className="text-gray-600 text-lg">EPP Inteligente y Materiales de Próxima Generación</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-8 text-center max-w-4xl mx-auto">
                    Impulsado por avances en microelectrónica, ciencia de materiales y conectividad, 
                    el EPP está evolucionando de una <b>armadura pasiva</b> a un <b>sistema de seguridad activo e inteligente</b>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Smartphone className="h-8 w-8 text-purple-600" />
                        El EPP se Vuelve Inteligente
                      </h3>
                      
                      <div className="space-y-4">
                        <motion.div 
                          className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <h4 className="font-bold text-blue-900 mb-2">🪖 Cascos Inteligentes</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Acelerómetros para detectar caídas</li>
                            <li>• Sensores de gases tóxicos y O₂</li>
                            <li>• Comunicación integrada</li>
                          </ul>
                        </motion.div>

                        <motion.div 
                          className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <h4 className="font-bold text-green-900 mb-2">👕 Ropa y Chalecos Inteligentes</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Sensores biométricos (FC, temperatura)</li>
                            <li>• Alertas de estrés por calor/fatiga</li>
                            <li>• Intervención preventiva en tiempo real</li>
                          </ul>
                        </motion.div>

                        <motion.div 
                          className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200"
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <h4 className="font-bold text-purple-900 mb-2">👟 Calzado y Guantes con Sensores</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Detección de proximidad a vehículos</li>
                            <li>• Alerta de superficies peligrosas</li>
                            <li>• Contacto con voltajes o químicos</li>
                          </ul>
                        </motion.div>

                        <motion.div 
                          className="p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200"
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <h4 className="font-bold text-orange-900 mb-2">🎧 Protección Auditiva Conectada</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Bloquea ruido dañino selectivamente</li>
                            <li>• Permite escuchar alarmas y conversaciones</li>
                            <li>• Mejora conciencia situacional</li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Activity className="h-8 w-8 text-green-600" />
                        La Ciencia de los Materiales
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                          <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Fibras Avanzadas
                          </h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Materiales como <b>Kevlar®</b> y <b>Dyneema®</b> ofrecen resistencia superior al acero 
                            con una fracción de su peso y mayor flexibilidad.
                          </p>
                          <div className="p-3 bg-white rounded-lg text-xs text-gray-600">
                            <b>Resultado:</b> Guantes y ropa más seguros Y más cómodos
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
                          <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Diseño Ergonómico y Sostenibilidad
                          </h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Equipos más ligeros, transpirables y ergonómicos minimizan la fatiga. 
                            Creciente enfoque en materiales <b>reciclables</b> y procesos de bajo impacto.
                          </p>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-400">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5" />
                            Personalización con Impresión 3D
                          </h4>
                          <p className="text-sm text-gray-700 mb-3">
                            La fabricación aditiva permite crear EPP <b>a medida</b>, adaptado a la anatomía única de cada trabajador.
                          </p>
                          <ul className="space-y-1 text-xs text-gray-600">
                            <li>• Plantillas para calzado personalizadas</li>
                            <li>• Protectores auditivos moldeados</li>
                            <li>• Armazones de gafas a medida</li>
                          </ul>
                          <div className="mt-3 p-3 bg-blue-100 rounded-lg text-xs font-semibold text-blue-900">
                            ⭐ Elimina el problema del mal ajuste completamente
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl border-2 border-purple-300">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
                      El Verdadero Poder: De Reactivo a Predictivo
                    </h3>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4">
                      La capacidad de <b>recopilar y analizar datos en tiempo real</b> permite pasar de un modelo de 
                      seguridad basado en análisis de accidentes pasados a uno <b>predictivo</b>, que identifica patrones 
                      de riesgo y permite corregirlos antes de que se materialice un incidente.
                    </p>
                    <div className="bg-white p-6 rounded-xl">
                      <p className="text-sm text-gray-700 text-center">
                        <b>Consideración Importante:</b> La recopilación de datos biométricos y de ubicación plantea 
                        cuestiones sobre la <b>privacidad del trabajador</b>. Se requieren políticas claras y transparentes 
                        para asegurar confianza y adopción.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Preguntas Frecuentes */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-blue-100">
                  <h2 className="text-4xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Preguntas Frecuentes
                    </span>
                  </h2>

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
                </div>
              </motion.section>

              {/* Conclusión y CTA */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-16"
              >
                <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                  {/* Partículas decorativas */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 30 }, (_, i) => (
                      <motion.div
                        key={`conclusion-particle-${i}`}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${3 + (i % 4)}px`,
                          height: `${3 + (i % 4)}px`,
                          left: `${(i * 3.33) % 100}%`,
                          top: `${(i * 4.44) % 100}%`,
                          opacity: 0.2
                        }}
                        animate={{
                          y: [0, -30, 0],
                          x: [0, 20, 0],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 8 + (i % 4),
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                      Su Seguridad, Su Responsabilidad, Su Futuro
                    </h2>
                    
                    <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed mb-10">
                      <p>
                        El viaje a través del mundo del EPP revela una verdad fundamental: 
                        <b className="text-yellow-300"> la seguridad no es un producto que se compra, es un sistema que se construye</b>.
                      </p>
                      
                      <p>
                        Hemos visto que el riesgo es real y sus costos son inmensos. Hemos decodificado el arsenal de protección, 
                        demostrando que cada pieza de EPP es una herramienta de ingeniería respaldada por ciencia y estándares rigurosos.
                      </p>

                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                        <p className="font-semibold mb-2">💡 La Lección Más Importante:</p>
                        <p>
                          El éxito de cualquier programa de seguridad depende de un <b>enfoque profundamente centrado en el ser humano</b>. 
                          El mejor equipo del mundo fracasa si es incómodo, si interfiere con la tarea, o si la cultura de la empresa 
                          no respalda su uso.
                        </p>
                      </div>

                      <p>
                        El EPP no es una armadura que nos hace invencibles. Es una <b>herramienta crítica</b>, la última línea de 
                        defensa dentro de un sistema de seguridad integral que debe priorizar la eliminación de peligros en su origen.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <motion.div 
                        className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl mb-3">👔</div>
                        <h3 className="font-bold text-xl mb-2">Para Gerentes</h3>
                        <p className="text-sm text-white/90">
                          Revisen programas de EPP como oportunidad de mejora. Involucren equipos en selección e inviertan en capacitación de calidad.
                        </p>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl mb-3">👷</div>
                        <h3 className="font-bold text-xl mb-2">Para Trabajadores</h3>
                        <p className="text-sm text-white/90">
                          Sean guardianes proactivos de su seguridad. Inspeccionen su equipo. Si algo no se ajusta bien, levanten la voz.
                        </p>
                      </motion.div>

                      <motion.div 
                        className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="font-bold text-xl mb-2">Para Líderes</h3>
                        <p className="text-sm text-white/90">
                          Lideren con el ejemplo. Las reglas de seguridad se aplican a todos. Cero excepciones para niveles superiores.
                        </p>
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold mb-6">
                        🛡️ Invertir en seguridad es invertir en el activo más valioso: su gente
                      </p>
                      <motion.a
                        href="/productos"
                        className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Shield className="h-6 w-6" />
                        Explorar Soluciones de EPP
                        <ChevronDown className="h-5 w-5 rotate-[-90deg]" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Artículos Relacionados */}
              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}