'use client';

import { useState } from 'react';
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
  Volume2, 
  Ear,
  Brain,
  TrendingDown,
  Info,
  Zap,
  ThermometerSun,
  Wrench,
  Calculator,
  ChevronDown,
  X
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

export default function ProteccionAuditivaArticle() {
  const [activeTab, setActiveTab] = useState('tapones');
  const [selectedAmperage, setSelectedAmperage] = useState<number | null>(null);
  const [nrrValue, setNrrValue] = useState(33);
  const [noiseLevel, setNoiseLevel] = useState(100);
  const [exposureTime, setExposureTime] = useState(8);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedProtector, setSelectedProtector] = useState<'plugs' | 'muffs' | null>(null);

  // Datos para gráfico de efectos del ruido
  const effectsChartData = {
    labels: ['Pérdida Auditiva', 'Estrés Crónico', 'Fatiga Mental', 'Riesgo Accidentes', 'Problemas Sueño'],
    datasets: [{
      label: 'Impacto del Ruido Laboral (%)',
      data: [95, 78, 85, 72, 80],
      backgroundColor: [
        'rgba(239, 68, 68, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(234, 179, 8, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(59, 130, 246, 0.8)'
      ],
      borderColor: [
        'rgb(220, 38, 38)',
        'rgb(234, 88, 12)',
        'rgb(202, 138, 4)',
        'rgb(147, 51, 234)',
        'rgb(37, 99, 235)'
      ],
      borderWidth: 2
    }]
  };

  const effectsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Efectos Sistémicos de la Exposición al Ruido',
        font: { size: 16, weight: 'bold' as const }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    }
  };

  // Datos para gráfico de decibelios
  const decibelChartData = {
    labels: ['Conversación', 'Tráfico', 'Cortacésped', 'Motosierra', 'Sirena', 'Turbina'],
    datasets: [{
      label: 'Nivel de Ruido (dBA)',
      data: [60, 70, 90, 110, 120, 140],
      backgroundColor: function(context: any) {
        const value = context.parsed.y;
        if (value < 85) return 'rgba(34, 197, 94, 0.8)';
        if (value < 100) return 'rgba(234, 179, 8, 0.8)';
        return 'rgba(239, 68, 68, 0.8)';
      },
      borderColor: function(context: any) {
        const value = context.parsed.y;
        if (value < 85) return 'rgb(22, 163, 74)';
        if (value < 100) return 'rgb(202, 138, 4)';
        return 'rgb(220, 38, 38)';
      },
      borderWidth: 2
    }]
  };

  const decibelChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Escala de Decibelios: De lo Seguro a lo Peligroso',
        font: { size: 16, weight: 'bold' as const }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 150,
        ticks: {
          callback: function(value: any) {
            return value + ' dBA';
          }
        }
      }
    }
  };

  // Cálculo de NRR real
  const calculateRealNRR = () => {
    return ((nrrValue - 7) / 2).toFixed(1);
  };

  const calculateProtection = () => {
    const realNRR = parseFloat(calculateRealNRR());
    const protectedLevel = noiseLevel - realNRR;
    return protectedLevel.toFixed(1);
  };

  // Datos de exposición permisible
  const exposureData: { [key: number]: number } = {
    90: 8,
    95: 4,
    100: 2,
    105: 1,
    110: 0.5,
    115: 0.25
  };

  const getMaxExposure = () => {
    const levels = Object.keys(exposureData).map(Number).sort((a, b) => a - b);
    for (let level of levels) {
      if (noiseLevel <= level) {
        return exposureData[level];
      }
    }
    return 0.125;
  };

  // FAQs
  const faqs = [
    {
      question: "¿Por qué el NRR de la etiqueta no refleja la protección real?",
      answer: "El NRR se prueba en laboratorio con condiciones perfectas: ajuste ideal, sin movimiento, sin otros EPP. En el trabajo real, factores como el sudor, movimiento, interferencia con gafas y técnica de colocación reducen la efectividad. Por eso OSHA recomienda usar la fórmula (NRR-7)/2 para obtener una estimación realista de protección."
    },
    {
      question: "¿Puedo usar protección auditiva TODO el día?",
      answer: "Sí, siempre que el protector sea adecuado para el nivel de ruido. El peligro está en la 'sobreprotección': si reduces demasiado el ruido, no podrás oír alarmas, vehículos o advertencias. El objetivo es bajar el ruido a menos de 85 dBA, no el silencio absoluto. Las orejeras electrónicas son ideales para mantener la conciencia situacional."
    },
    {
      question: "¿Qué hago si uso gafas de seguridad y las orejeras no sellan bien?",
      answer: "Este es un conflicto común de EPP. Las patillas de las gafas rompen el sello de las orejeras, reduciendo su efectividad hasta un 70%. Para trabajadores que deben usar gafas constantemente, los tapones auditivos son la mejor solución, ya que no interfieren con otros equipos. Otra opción son las gafas con patillas delgadas diseñadas para minimizar este problema."
    },
    {
      question: "¿Con qué frecuencia debo reemplazar mi protección auditiva?",
      answer: "Los tapones de espuma son de UN SOLO USO y deben desecharse después de cada jornada. Los tapones reutilizables deben inspeccionarse antes de cada uso y reemplazarse si están endurecidos, agrietados o deformados. Las almohadillas de las orejeras deben cambiarse cada 6-12 meses o cuando estén comprimidas, agrietadas o el plástico esté endurecido."
    },
    {
      question: "¿Qué son los químicos ototóxicos y por qué son peligrosos?",
      answer: "Son sustancias que dañan el oído interno. Lo crítico: cuando te expones simultáneamente a ruido Y a químicos ototóxicos (como tolueno, xileno, plomo, monóxido de carbono), el daño auditivo es MUCHO MAYOR que la suma de ambos riesgos. Un trabajador en 85 dBA con exposición a solventes está en mayor riesgo que uno en 90 dBA sin químicos. Revisa las FDS de tus productos."
    },
    {
      question: "¿Funciona usar tapones debajo de orejeras (doble protección)?",
      answer: "Sí, se recomienda para ruidos superiores a 100-105 dBA. PERO NO sumes los NRR. La fórmula correcta de OSHA es: toma el NRR más alto, súmale 5 dB, y aplica la reducción estándar. Ejemplo: tapones NRR 32 + orejeras NRR 25 = usar 32+5=37, entonces (37-7)/2 = 15 dB de protección real estimada."
    }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: 1,
      title: 'Los 5 Errores que Destruyen tus Herramientas Eléctricas',
      excerpt: 'Guía profesional de mantenimiento para ahorrar miles de pesos',
      category: 'Mantenimiento',
      publishDate: '2 Oct 2025',
      readTime: '18 min',
      slug: 'ahorra-mantenimiento-herramientas-electricas'
    },
    {
      id: 2,
      title: 'Guía Definitiva de EPP',
      excerpt: 'Todo sobre Equipos de Protección Personal: selección, uso y normativas',
      category: 'Seguridad',
      publishDate: '2 Oct 2025',
      readTime: '22 min',
      slug: 'guia-completa-epp-seguridad-industrial'
    },
    {
      id: 3,
      title: 'NOM-009-STPS-2011: Trabajos en Altura',
      excerpt: '7 puntos clave que todo supervisor debe dominar',
      category: 'Normatividad',
      publishDate: '1 Oct 2025',
      readTime: '15 min',
      slug: 'guia-nom-009-stps-2011-trabajos-altura'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`hero-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${250 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 3.7) % 100}%`,
                }}
                animate={{
                  x: [0, 100 + (i % 50), -80 + (i % 30), 0],
                  y: [0, -120 + (i % 40), 100 + (i % 35), 0],
                  scale: [0.3, 1.2, 0.5, 1],
                  opacity: [0.2, 0.8, 0.3, 0.7],
                  rotate: [0, 180 + (i % 180), 360]
                }}
                transition={{
                  duration: 12 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
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
                className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-400/30 rounded-full px-4 py-2 text-purple-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Ear className="h-4 w-4" />
                👂 Protección Auditiva Laboral
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Tapones vs. Orejeras: La Guía Definitiva
              </motion.h1>
              
              <motion.p 
                className="text-xl text-purple-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Todo lo que necesitas saber para proteger tu audición en el trabajo: ciencia, cálculos reales y decisiones inteligentes
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-purple-200"
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
        <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${250 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 40, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.4, 0.8],
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

          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-20">
            <div className="max-w-6xl mx-auto">
              
              {/* Sección 1: La Amenaza Invisible */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-8">
                    <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl">
                      <AlertTriangle className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-gray-900">
                        La Amenaza Invisible del Ruido Laboral
                      </h2>
                      <p className="text-gray-600 text-lg">El enemigo silencioso que destruye tu audición</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-400 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8">
                    <p className="text-xl text-gray-800 leading-relaxed mb-4">
                      Imagina el entorno de una fábrica o construcción: el chillido de la sierra cortando metal, 
                      el impacto del martillo neumático, el zumbido constante de la maquinaria. Este sonido, 
                      percibido como una simple molestia o "el sonido del trabajo", es en realidad un 
                      <strong className="text-red-600"> enemigo invisible</strong>.
                    </p>
                    <p className="text-lg text-gray-700">
                      No deja cicatrices visibles ni causa dolor inmediato, pero inflige un 
                      <strong> daño silencioso, progresivo e irreversible</strong> a uno de nuestros sentidos más preciados.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600 mb-6">
                        Efectos Sistémicos del Ruido
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                          <TrendingDown className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-red-900">Pérdida Auditiva Permanente (PAIR)</p>
                            <p className="text-gray-700 text-sm">
                              El daño a las células ciliadas del oído interno es <strong>irreversible</strong>. 
                              No se regeneran. No hay cura médica. Solo prevención.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                          <Volume2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-orange-900">Acúfenos (Tinnitus)</p>
                            <p className="text-gray-700 text-sm">
                              Zumbidos, pitidos o siseos constantes. Un recordatorio persistente y enloquecedor del daño sufrido.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                          <Brain className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-yellow-900">Estrés Crónico y Fatiga</p>
                            <p className="text-gray-700 text-sm">
                              El ruido activa la respuesta de "lucha o huida", generando fatiga, irritabilidad 
                              y dificultades de concentración.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                          <Zap className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-purple-900">Riesgo de Accidentes</p>
                            <p className="text-gray-700 text-sm">
                              Interfiere con la comunicación y la percepción de alarmas. Un trabajador fatigado 
                              que no puede oír advertencias está en peligro mortal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="relative w-full" style={{ height: '400px' }}>
                        <Bar data={effectsChartData} options={effectsChartOptions} />
                      </div>
                      <p className="text-center mt-4 text-gray-600 text-sm">
                        El ruido laboral no solo destruye la audición, afecta la salud integral del trabajador
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200">
                    <div className="flex items-start gap-4">
                      <Info className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-blue-900 mb-3">La Cadena Causal del Peligro</h4>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          El ruido actúa como <strong>estresor crónico</strong> → Genera <strong>deterioro cognitivo</strong> 
                          (fatiga, falta de concentración) → Trabajador fatigado comete <strong>más errores</strong> → 
                          Combinado con <strong>incapacidad de escuchar advertencias</strong> → 
                          <strong className="text-red-600"> RIESGO DE ACCIDENTE EXTREMO</strong>
                        </p>
                        <p className="text-blue-900 font-semibold">
                          Por tanto, la protección auditiva no es solo para prevenir la sordera, 
                          es una estrategia fundamental para la salud y seguridad integral.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección 2: El Lenguaje del Ruido */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    🔊 El Lenguaje del Ruido: Decibelios y Límites
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                    <div>
                      <div className="relative w-full" style={{ height: '400px' }}>
                        <Bar data={decibelChartData} options={decibelChartOptions} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300">
                        <h4 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Zona Segura (&lt; 85 dBA)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Conversaciones normales, oficinas tranquilas. Exposición prolongada sin riesgo significativo.
                        </p>
                      </div>

                      <div className="bg-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                        <h4 className="font-bold text-yellow-900 mb-3 text-lg flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Nivel de Acción (85 dBA)
                        </h4>
                        <p className="text-gray-700 text-sm mb-3">
                          <strong>OSHA exige</strong> implementar un programa de conservación auditiva. 
                          La protección se vuelve obligatoria.
                        </p>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="text-yellow-800 font-semibold text-sm">
                            💡 Cada aumento de 5 dB reduce a la mitad el tiempo de exposición segura
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                        <h4 className="font-bold text-red-900 mb-3 text-lg flex items-center gap-2">
                          <X className="h-5 w-5" />
                          Zona Peligrosa (&gt; 100 dBA)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Motosierras, martillos neumáticos, turbinas. Daño auditivo en minutos. 
                          Requiere doble protección.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6 text-center">
                      La Regla de Oro: Tiempo vs. Intensidad
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { db: '90 dBA', time: '8 horas', color: 'yellow' },
                        { db: '95 dBA', time: '4 horas', color: 'orange' },
                        { db: '100 dBA', time: '2 horas', color: 'red' },
                        { db: '105 dBA', time: '1 hora', color: 'red' },
                        { db: '110 dBA', time: '30 min', color: 'red' },
                        { db: '115 dBA', time: '15 min', color: 'red' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className={`p-6 rounded-xl text-center ${
                            item.color === 'yellow' ? 'bg-yellow-100 border-2 border-yellow-400' :
                            item.color === 'orange' ? 'bg-orange-100 border-2 border-orange-400' :
                            'bg-red-100 border-2 border-red-400'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-2">{item.db}</p>
                          <p className="text-lg font-semibold">↓</p>
                          <p className="text-xl font-bold">{item.time}</p>
                          <p className="text-sm text-gray-600 mt-2">permitidas</p>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-center mt-6 text-purple-800 font-semibold">
                      Cada +5 dB = mitad del tiempo permitido. Esta relación matemática hace tangible el peligro.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Sección 3: Decodificando el NRR */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-8">
                    <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl">
                      <Calculator className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-gray-900">
                        Decodificando el NRR: De la Etiqueta a la Realidad
                      </h2>
                      <p className="text-gray-600 text-lg">La verdad matemática detrás de los números</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-8 border-blue-400 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4">
                      ¿Qué es el NRR?
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      El <strong>Nivel de Reducción de Ruido (NRR)</strong> es el número que ves en la etiqueta: 
                      "29 dB" o "33 dB". Representa la atenuación teórica lograda en un <strong>laboratorio perfecto</strong> 
                      con condiciones ideales que rara vez existen en el trabajo real.
                    </p>
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                      <p className="text-red-800 font-bold text-lg">
                        ⚠️ ALERTA CRÍTICA: El NRR de la etiqueta NO es tu protección real
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-orange-300 mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-6 text-center">
                      La Fórmula del Experto (OSHA)
                    </h3>
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl mb-6">
                      <p className="text-center text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Protección Real = (NRR - 7) ÷ 2
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 mt-6">
                        <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-lg">
                          <p className="font-bold text-blue-900 mb-2">¿Por qué - 7?</p>
                          <p className="text-gray-700 text-sm">
                            Ajuste técnico de la escala C (laboratorio) a la escala A (riesgo real para el oído humano)
                          </p>
                        </div>
                        <div className="bg-purple-50 p-3 sm:p-4 md:p-6 rounded-lg">
                          <p className="font-bold text-purple-900 mb-2">¿Por qué ÷ 2?</p>
                          <p className="text-gray-700 text-sm">
                            Reducción del 50% para compensar uso real: ajuste imperfecto, sudor, movimiento, 
                            interferencia con otros EPP
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-400">
                      <h4 className="font-bold text-red-900 mb-4 text-xl text-center">
                        Ejemplo Revelador: La Brecha de 20 dB
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center">
                          <p className="text-gray-600 mb-2">NRR de Etiqueta</p>
                          <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">33 dB</p>
                          <p className="text-sm text-gray-500">Lo que el trabajador espera</p>
                        </div>
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center">
                          <p className="text-gray-600 mb-2">Protección Real (OSHA)</p>
                          <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2">13 dB</p>
                          <p className="text-sm text-gray-500">(33-7)/2 = 13</p>
                        </div>
                      </div>
                      <p className="text-center mt-4 text-red-800 font-bold">
                        Esta diferencia de 20 dB es por qué comprender esta fórmula es fundamental para tu seguridad
                      </p>
                    </div>
                  </div>

                  {/* Calculadora interactiva */}
                  <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-gray-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                      🧮 Calculadora de Protección Real
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                      <div>
                        <label className="block font-bold text-gray-700 mb-3">
                          NRR de la Etiqueta
                        </label>
                        <input
                          type="range"
                          min="20"
                          max="35"
                          value={nrrValue}
                          onChange={(e) => setNrrValue(Number(e.target.value))}
                          className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-500 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-center text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-purple-600 mt-4">
                          {nrrValue} dB
                        </p>
                      </div>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center">
                        <p className="text-gray-600 mb-2">Tu Protección Real Estimada</p>
                        <motion.p 
                          key={calculateRealNRR()}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600 mb-2"
                        >
                          {calculateRealNRR()} dB
                        </motion.p>
                        <p className="text-sm text-gray-500">
                          Fórmula OSHA: ({nrrValue} - 7) ÷ 2
                        </p>
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                          <p className="text-yellow-900 font-semibold text-sm">
                            💡 Esta es una ESTIMACIÓN. El ajuste correcto es crítico para alcanzar esta protección.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6">
                      Perspectiva Avanzada: El Método NIOSH
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      NIOSH reconoce que no todos los protectores fallan igual. Sus factores de reducción son más matizados:
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                        <p className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-3 text-center">🎧</p>
                        <p className="font-bold text-gray-900 mb-2 text-center">Orejeras</p>
                        <p className="text-gray-700 text-sm text-center">
                          Reducir <strong className="text-green-600">25%</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Más consistentes entre usuarios
                        </p>
                      </div>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                        <p className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-3 text-center">🔌</p>
                        <p className="font-bold text-gray-900 mb-2 text-center">Tapones de Espuma</p>
                        <p className="text-gray-700 text-sm text-center">
                          Reducir <strong className="text-yellow-600">50%</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Alta variabilidad de ajuste
                        </p>
                      </div>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                        <p className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-3 text-center">🎯</p>
                        <p className="font-bold text-gray-900 mb-2 text-center">Otros Tapones</p>
                        <p className="text-gray-700 text-sm text-center">
                          Reducir <strong className="text-red-600">70%</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Premoldeados, con banda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección 4: Tapones vs Orejeras - Sistema de Tabs */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                  ⚔️ La Batalla: Tapones vs. Orejeras
                </h2>

                {/* Navegación de tabs */}
                <div className="flex justify-center gap-4 mb-4 sm:mb-6 md:mb-8">
                  <motion.button
                    onClick={() => setActiveTab('tapones')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                      activeTab === 'tapones'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl'
                        : 'bg-white text-blue-600 border-2 border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl">🔌</span>
                    Tapones Auditivos
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('orejeras')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                      activeTab === 'orejeras'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-xl'
                        : 'bg-white text-purple-600 border-2 border-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl">🎧</span>
                    Orejeras
                  </motion.button>
                </div>

                <AnimatePresence mode="wait">
                  {/* Contenido Tapones */}
                  {activeTab === 'tapones' && (
                    <motion.div
                      key="tapones"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50"
                    >
                      <div className="text-center mb-4 sm:mb-6 md:mb-8">
                        <p className="text-4xl sm:text-5xl md:text-6xl mb-4">🔌</p>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                          Tapones Auditivos (Protectores Intraurales)
                        </h3>
                        <p className="text-gray-600 text-lg">
                          Discretos, compatibles y efectivos cuando se usan correctamente
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                        <div>
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-6">
                            Tipos de Tapones
                          </h4>
                          <div className="space-y-4">
                            <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                              <p className="font-bold text-blue-900 mb-2">🧽 Espuma Desechables</p>
                              <p className="text-gray-700 text-sm mb-2">
                                Los más comunes. Se comprimen ("enrollan") antes de insertar. 
                                Material: PU o PVC de memoria.
                              </p>
                              <p className="text-xs text-blue-600 font-semibold">UN SOLO USO</p>
                            </div>

                            <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200">
                              <p className="font-bold text-green-900 mb-2">♻️ Premoldeados Reutilizables</p>
                              <p className="text-gray-700 text-sm mb-2">
                                Silicona o plástico flexible con "aletas". No se enrollan. 
                                Lavables y reutilizables.
                              </p>
                              <p className="text-xs text-green-600 font-semibold">REUTILIZABLES</p>
                            </div>

                            <div className="bg-purple-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                              <p className="font-bold text-purple-900 mb-2">🎯 Con Banda / Semi-insertados</p>
                              <p className="text-gray-700 text-sm mb-2">
                                Tapones en los extremos de una banda flexible. Ideales para uso intermitente.
                              </p>
                              <p className="text-xs text-purple-600 font-semibold">USO INTERMITENTE</p>
                            </div>

                            <div className="bg-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-200">
                              <p className="font-bold text-yellow-900 mb-2">✨ Moldeados a Medida</p>
                              <p className="text-gray-700 text-sm mb-2">
                                Impresión del canal auditivo. Ajuste perfecto y máxima comodidad.
                              </p>
                              <p className="text-xs text-yellow-600 font-semibold">INVERSIÓN PREMIUM</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-green-500 mb-6">
                            <h4 className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
                              <CheckCircle className="h-6 w-6" />
                              Ventajas Clave
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Comodidad prolongada:</strong> Casi imperceptibles después de inserción correcta</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Ideales en calor:</strong> No provocan sudoración como las orejeras</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Compatibilidad EPP:</strong> No interfieren con cascos, gafas, respiradores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Portabilidad:</strong> Pequeños, ligeros, fáciles de transportar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Económicos:</strong> Los desechables son muy accesibles</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                            <h4 className="font-bold text-red-900 mb-4 text-xl flex items-center gap-2">
                              <AlertTriangle className="h-6 w-6" />
                              Riesgos y Desafíos
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Higiene crítica:</strong> Riesgo de infecciones si se insertan con manos sucias</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Técnica vital:</strong> Mal ajuste = protección nula + falsa sensación de seguridad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Supervisión difícil:</strong> Tamaño pequeño dificulta verificación visual</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Alta variabilidad:</strong> Efectividad depende 100% del usuario</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center">
                          🎯 Método "Enrollar, Tirar, Sostener" (Para Tapones de Espuma)
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          <motion.div 
                            className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-4">1️⃣</p>
                            <p className="font-bold text-blue-900 mb-3">ENROLLAR</p>
                            <p className="text-gray-700 text-sm">
                              Con manos LIMPIAS, enrolla el tapón hasta formar un cilindro delgado sin pliegues
                            </p>
                          </motion.div>
                          <motion.div 
                            className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-4">2️⃣</p>
                            <p className="font-bold text-blue-900 mb-3">TIRAR</p>
                            <p className="text-gray-700 text-sm">
                              Con la mano opuesta, pasa el brazo por encima de la cabeza y tira de la oreja hacia arriba y atrás
                            </p>
                          </motion.div>
                          <motion.div 
                            className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-4">3️⃣</p>
                            <p className="font-bold text-blue-900 mb-3">SOSTENER</p>
                            <p className="text-gray-700 text-sm">
                              Inserta rápidamente y sostén con el dedo durante 20-40 segundos mientras la espuma se expande
                            </p>
                          </motion.div>
                        </div>
                        <div className="mt-6 p-3 sm:p-4 md:p-6 bg-yellow-100 rounded-xl border-2 border-yellow-400">
                          <p className="text-center text-yellow-900 font-bold mb-2">
                            ✅ Verificación del Ajuste Correcto
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              <span>Tu voz suena más profunda y hueca, "como dentro de un barril"</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              <span>Al menos ½ o ¾ del tapón está dentro del canal auditivo (inspección visual)</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 bg-red-100 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                        <p className="text-red-900 font-bold text-lg mb-3">
                          ⚠️ RESPONSABILIDAD LEGAL DEL EMPLEADOR
                        </p>
                        <p className="text-gray-700">
                          Si un trabajador desarrolla pérdida auditiva a pesar de recibir tapones, la empresa puede ser considerada 
                          <strong> negligente</strong> si no puede demostrar que proporcionó <strong>formación práctica, adecuada y recurrente</strong> 
                          sobre la colocación correcta. Entregar una caja de tapones NO es suficiente.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Contenido Orejeras */}
                  {activeTab === 'orejeras' && (
                    <motion.div
                      key="orejeras"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50"
                    >
                      <div className="text-center mb-4 sm:mb-6 md:mb-8">
                        <p className="text-4xl sm:text-5xl md:text-6xl mb-4">🎧</p>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-purple-900 mb-2">
                          Orejeras (Protectores Tipo Copa)
                        </h3>
                        <p className="text-gray-600 text-lg">
                          Robustas, consistentes y fáciles de usar
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                        <div>
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 mb-6">
                            Tipos de Orejeras
                          </h4>
                          <div className="space-y-4">
                            <div className="bg-purple-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                              <p className="font-bold text-purple-900 mb-2">👤 Diadema Estándar</p>
                              <p className="text-gray-700 text-sm">
                                El diseño clásico. Copas rellenas de espuma acústica unidas por diadema ajustable sobre la cabeza.
                              </p>
                            </div>

                            <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                              <p className="font-bold text-blue-900 mb-2">⛑️ Acoplables a Casco</p>
                              <p className="text-gray-700 text-sm">
                                Diseñadas para encajar en ranuras de cascos industriales. Integración perfecta.
                              </p>
                            </div>

                            <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200">
                              <p className="font-bold text-green-900 mb-2">🔄 De Nuca / Tras la Cabeza</p>
                              <p className="text-gray-700 text-sm">
                                Banda detrás del cuello. Permite uso con caretas de soldar o sombreros de ala ancha.
                              </p>
                            </div>

                            <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200">
                              <p className="font-bold text-orange-900 mb-2">⚡ Electrónicas / Dependientes del Nivel</p>
                              <p className="text-gray-700 text-sm mb-2">
                                <strong>LA INNOVACIÓN:</strong> Micrófonos externos + circuito electrónico
                              </p>
                              <ul className="text-xs text-gray-600 space-y-1">
                                <li>✓ Permiten conversación y alarmas</li>
                                <li>✓ Bloquean ruidos de impulso instantáneamente</li>
                                <li>✓ Combaten la sobreprotección</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-green-500 mb-6">
                            <h4 className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
                              <CheckCircle className="h-6 w-6" />
                              Ventajas Clave
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Facilidad extrema:</strong> Rápidas de poner y quitar. Intuitivas.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Protección consistente:</strong> Menos dependiente de la habilidad del usuario</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Durabilidad:</strong> Inversión a largo plazo con mantenimiento adecuado</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Más higiénicas:</strong> No entran en contacto directo con el canal auditivo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Supervisión visual:</strong> Fácil verificar si se están usando</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                            <h4 className="font-bold text-red-900 mb-4 text-xl flex items-center gap-2">
                              <AlertTriangle className="h-6 w-6" />
                              Desafíos y Limitaciones
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Comodidad en calor:</strong> Provocan sudoración y pueden ser agobiantes en climas cálidos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Presión prolongada:</strong> Pueden generar incomodidad en los lados de la cabeza</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>Voluminosas:</strong> Pueden restringir movimiento de cabeza en espacios confinados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold">✗</span>
                                <span><strong>El sello roto:</strong> Patillas de gafas, vello facial o cabello rompen el sello crítico</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-red-400">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-3">
                          <AlertTriangle className="h-8 w-8" />
                          EL TALÓN DE AQUILES: El Sello Comprometido
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="font-bold text-red-800 mb-4 text-lg">
                              Factores que Rompen el Sello:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Patillas de gafas de seguridad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Vello facial (barba, patillas)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Cabello largo bajo las almohadillas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Uso de gorras o bandanas</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <p className="font-bold text-orange-800 mb-4 text-lg">
                              Consecuencia:
                            </p>
                            <div className="bg-red-100 p-4 rounded-lg border-2 border-red-400">
                              <p className="text-red-900 font-bold mb-2">
                                Reducción de hasta 70% en la efectividad
                              </p>
                              <p className="text-gray-700 text-sm">
                                Cualquier pequeño espacio permite que el ruido se filtre, 
                                anulando la mayor parte de la protección.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 p-3 sm:p-4 md:p-6 bg-yellow-100 rounded-xl border-2 border-yellow-400">
                          <p className="text-yellow-900 font-bold text-center text-lg">
                            ⚠️ CONFLICTO DE SISTEMAS EPP
                          </p>
                          <p className="text-gray-700 mt-3 text-center">
                            Una política que exige gafas + orejeras sin abordar la incompatibilidad es 
                            <strong> intrínsecamente defectuosa</strong>. Para trabajadores que deben usar gafas continuamente, 
                            los tapones auditivos suelen ser la opción más segura.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                          <Wrench className="h-6 w-6" />
                          Mantenimiento de Orejeras
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <p className="font-bold text-blue-800 mb-3">Limpieza Regular:</p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>• Limpiar almohadillas con paño húmedo después de cada uso</li>
                              <li>• Usar jabón suave si hay suciedad acumulada</li>
                              <li>• Secar completamente antes de guardar</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold text-blue-800 mb-3">Reemplazo de Almohadillas:</p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>• Cada 6-12 meses o cuando estén desgastadas</li>
                              <li>• Si están agrietadas, endurecidas o comprimidas</li>
                              <li>• Si el plástico pierde flexibilidad</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>

              {/* Sección 5: Matriz de Decisión */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    🎯 La Matriz de Decisión: ¿Cuál Elegir?
                  </h2>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300 mb-4 sm:mb-6 md:mb-8">
                    <p className="text-center text-xl text-gray-800 mb-6">
                      <strong>No hay un "ganador" absoluto.</strong> La elección inteligente se basa en una evaluación 
                      de la situación específica: trabajador, tarea, entorno y perfil del ruido.
                    </p>
                  </div>

                  {/* Tabla comparativa interactiva */}
                  <div className="overflow-x-auto mb-4 sm:mb-6 md:mb-8">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                          <th className="p-4 text-left font-bold border">Factor / Escenario</th>
                          <th className="p-4 text-center font-bold border">🔌 Tapones</th>
                          <th className="p-4 text-center font-bold border">🎧 Orejeras</th>
                          <th className="p-4 text-left font-bold border">Razón / Consideraciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Perfil del Ruido */}
                        <tr className="bg-purple-50">
                          <td colSpan={4} className="p-4 font-bold text-purple-900 border">
                            📊 PERFIL DEL RUIDO
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Ruido Constante (+8 horas)</td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Comodidad superior a largo plazo, evita tentación de quitárselos
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Ruido Intermitente / Fluctuante</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Fáciles y rápidos de poner/quitar según necesidad
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Ruido de Alto Impacto</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Orejeras electrónicas bloquean sonidos repentinos sin aislar
                          </td>
                        </tr>

                        {/* Entorno de Trabajo */}
                        <tr className="bg-green-50">
                          <td colSpan={4} className="p-4 font-bold text-green-900 border">
                            🌡️ ENTORNO DE TRABAJO
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Condiciones de Calor/Humedad</td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Orejeras provocan sudoración y malestar
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Condiciones de Suciedad/Polvo</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Evita introducir contaminantes en el canal auditivo
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Espacios Confinados</td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Menos voluminosos, mejor movimiento de cabeza
                          </td>
                        </tr>

                        {/* Compatibilidad con otros EPP */}
                        <tr className="bg-orange-50">
                          <td colSpan={4} className="p-4 font-bold text-orange-900 border">
                            🛡️ COMPATIBILIDAD CON OTROS EPP
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">
                            <strong>Uso con Casco Y Gafas</strong>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            <strong className="text-red-600">FACTOR DECISIVO:</strong> No interfiere con sello de otros EPP
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Uso con Casco SOLAMENTE</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl">⚖️</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl">⚖️</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Empate. Orejeras acoplables al casco se integran bien; tapones también compatibles
                          </td>
                        </tr>

                        {/* Factores de Tarea */}
                        <tr className="bg-blue-50">
                          <td colSpan={4} className="p-4 font-bold text-blue-900 border">
                            👷 FACTORES DE TAREA Y USUARIO
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Necesidad de Comunicación</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Orejeras electrónicas son superiores. Estándar fáciles de levantar
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Higiene (Manos Sucias)</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            Aplicación sin tocar el oído
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="p-4 border">Afecciones Auditivas Preexistentes</td>
                          <td className="p-4 text-center border">
                            <span className="text-lg sm:text-xl md:text-2xl text-gray-300">-</span>
                          </td>
                          <td className="p-4 text-center border">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏆</span>
                          </td>
                          <td className="p-4 border text-gray-700">
                            No entra ni irrita el canal auditivo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Escenarios Prácticos */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-purple-900">
                      🎬 Escenarios Industriales en Acción
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <p className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-3 text-center">👨‍🏭</p>
                        <h4 className="font-bold text-blue-900 mb-3 text-center">El Soldador</h4>
                        <div className="space-y-2 text-sm text-gray-700 mb-4">
                          <p>• Ruido moderado pero constante</p>
                          <p>• Usa casco, careta y gafas</p>
                          <p>• Necesita libertad de movimiento</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-green-900 text-center">✅ VEREDICTO</p>
                          <p className="text-center text-lg sm:text-xl md:text-2xl my-2">🔌</p>
                          <p className="text-xs text-gray-600 text-center">
                            Tapones auditivos. Cero interferencia con equipo facial crítico.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <p className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-3 text-center">👷‍♂️</p>
                        <h4 className="font-bold text-purple-900 mb-3 text-center">Supervisor de Construcción</h4>
                        <div className="space-y-2 text-sm text-gray-700 mb-4">
                          <p>• Se mueve entre zona ruidosa y oficina</p>
                          <p>• Necesita comunicarse constantemente</p>
                          <p>• Exposición intermitente</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-green-900 text-center">✅ VEREDICTO</p>
                          <p className="text-center text-lg sm:text-xl md:text-2xl my-2">🎧⚡</p>
                          <p className="text-xs text-gray-600 text-center">
                            Orejeras electrónicas. Filtran ruido peligroso sin aislar del entorno.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-br from-orange-50 to-red-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <p className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-3 text-center">🏭</p>
                        <h4 className="font-bold text-orange-900 mb-3 text-center">Operario de Fábrica</h4>
                        <div className="space-y-2 text-sm text-gray-700 mb-4">
                          <p>• Ruido elevado y constante 10 horas</p>
                          <p>• Ambiente caluroso</p>
                          <p>• Necesita comodidad prolongada</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-green-900 text-center">✅ VEREDICTO</p>
                          <p className="text-center text-lg sm:text-xl md:text-2xl my-2">🔌</p>
                          <p className="text-xs text-gray-600 text-center">
                            Tapones de espuma. Máxima protección y comodidad en calor.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección 6: Estrategias Avanzadas */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    🔬 Estrategias Avanzadas y Peligros Ocultos
                  </h2>

                  {/* Doble Protección */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300 mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                      <Shield className="h-8 w-8" />
                      Doble Protección: Cuando Uno No Es Suficiente
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      En entornos de ruido extremo (&gt; 100-105 dBA), un solo protector puede no ser suficiente. 
                      La doble protección (tapones + orejeras) es la solución.
                    </p>

                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                      <h4 className="font-bold text-red-800 mb-4 text-xl">
                        ⚠️ ERROR COMÚN PELIGROSO
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-red-100 p-4 rounded-lg border-2 border-red-400">
                          <p className="font-bold text-red-900 mb-2 text-center">❌ INCORRECTO</p>
                          <p className="text-gray-700 text-center">
                            Tapones NRR 32 + Orejeras NRR 25 = 
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-red-600"> 57 dB</span>
                          </p>
                          <p className="text-xs text-red-600 text-center mt-2">
                            ¡NO SE SUMAN!
                          </p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                          <p className="font-bold text-green-900 mb-2 text-center">✅ CORRECTO (OSHA)</p>
                          <p className="text-gray-700 text-center mb-2">
                            NRR más alto (32) + 5 = 37
                          </p>
                          <p className="text-gray-700 text-center">
                            (37 - 7) ÷ 2 = 
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600"> 15 dB</span>
                          </p>
                          <p className="text-xs text-green-600 text-center mt-2">
                            Protección real
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-400">
                      <p className="font-bold text-yellow-900 mb-3">
                        💡 Fórmula de Doble Protección (OSHA):
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Identifica el NRR más alto de los dos protectores</li>
                        <li>Súmale 5 dB a ese NRR</li>
                        <li>Aplica la fórmula de reducción: (NRR+5-7) ÷ 2</li>
                      </ol>
                    </div>
                  </div>

                  {/* Químicos Ototóxicos */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-purple-400 shadow-xl">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                      <AlertTriangle className="h-8 w-8" />
                      El Peligro Oculto: Químicos Ototóxicos
                    </h3>
                    
                    <div className="bg-red-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-400 mb-6">
                      <p className="text-red-900 font-bold text-xl mb-3">
                        🧪 CONCEPTO CRÍTICO QUE POCOS CONOCEN
                      </p>
                      <p className="text-gray-800 text-lg leading-relaxed">
                        Cuando te expones <strong>simultáneamente</strong> a ruido Y a químicos ototóxicos, 
                        el daño auditivo es <strong className="bg-red-200 px-2 py-1 rounded">MUCHO MAYOR</strong> 
                        que la suma de ambos riesgos. El químico sensibiliza el oído, haciéndolo más vulnerable al ruido.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                        <h4 className="font-bold text-purple-900 mb-4">
                          ☠️ Químicos Ototóxicos Comunes
                        </h4>
                        <div className="space-y-3 text-gray-700 text-sm">
                          <div className="flex items-start gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                            <div>
                              <p className="font-bold">Solventes Orgánicos</p>
                              <p className="text-xs text-gray-600">Tolueno, xileno, estireno, tricloroetileno</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-1 flex-shrink-0"></div>
                            <div>
                              <p className="font-bold">Metales Pesados</p>
                              <p className="text-xs text-gray-600">Plomo, mercurio, compuestos de estaño</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                            <div>
                              <p className="font-bold">Asfixiantes</p>
                              <p className="text-xs text-gray-600">Monóxido de carbono</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                        <h4 className="font-bold text-purple-900 mb-4">
                          🏭 Industrias de Alto Riesgo
                        </h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>Manufactura (pinturas, adhesivos)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>Construcción (solventes, desengrasantes)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>Pintura e impresión</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>Agricultura (pesticidas)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>Minería (metales pesados)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-400">
                      <p className="font-bold text-red-900 text-lg mb-3 text-center">
                        🎯 Cambio de Paradigma Necesario
                      </p>
                      <p className="text-gray-800 leading-relaxed text-center">
                        Un trabajador en <strong>85 dBA</strong> (nivel de acción) que también manipula <strong>tolueno</strong> 
                        está en <strong className="bg-red-200 px-2 py-1 rounded">MAYOR RIESGO</strong> que otro en 
                        <strong> 90 dBA</strong> sin exposición química.
                      </p>
                      <p className="text-red-800 font-bold text-center mt-4">
                        Las disciplinas de seguridad (acústica, química, higiene) NO pueden operar en silos. 
                        Deben integrarse para abordar riesgos sinérgicos.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección 7: Errores Comunes */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    ⚠️ Anatomía del Fracaso: Errores Comunes
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                    <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                      <h3 className="font-bold text-red-900 mb-4 text-xl flex items-center gap-2">
                        <X className="h-6 w-6" />
                        La Falsa Sensación de Seguridad
                      </h3>
                      <p className="text-gray-700 mb-4">
                        El mayor peligro del uso incorrecto no es la incomodidad, sino la 
                        <strong> falsa creencia de estar protegido</strong>. Esta confianza errónea conduce a 
                        exposición prolongada a niveles peligrosos sin saberlo.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="font-bold text-red-800 mb-2">Consecuencia:</p>
                        <p className="text-gray-600 text-sm">
                          Daño auditivo acumulativo que se descubre cuando ya es demasiado tarde para revertirlo.
                        </p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-orange-500">
                      <h3 className="font-bold text-orange-900 mb-4 text-xl flex items-center gap-2">
                        <Clock className="h-6 w-6" />
                        El Peligro del "Solo un Minuto"
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Quitarse la protección "solo por un minuto" en un área ruidosa es un error grave. 
                        El daño auditivo es <strong>acumulativo</strong>.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="font-bold text-orange-800 mb-2">Dato Impactante:</p>
                        <p className="text-gray-600 text-sm">
                          Quitarse un protector durante solo <strong>5 minutos en una hora</strong> puede reducir 
                          su eficacia general en más de un <strong className="text-orange-600">50%</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-400">
                      <h4 className="font-bold text-yellow-900 mb-4 text-lg">
                        🚫 Errores Críticos en el Uso
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">Ajuste Incorrecto</p>
                              <p className="text-gray-700 text-sm">
                                Inserción superficial de tapones o sello roto en orejeras = protección casi nula
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">Uso Inconsistente</p>
                              <p className="text-gray-700 text-sm">
                                Quitarse la protección aunque sea brevemente reduce eficacia total
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">Herramienta Equivocada</p>
                              <p className="text-gray-700 text-sm">
                                Usar protector de bajo NRR en alto ruido, o viceversa
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">Mala Higiene</p>
                              <p className="text-gray-700 text-sm">
                                Reutilizar tapones desechables o manipular con manos sucias
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-900">Ignorar el Desgaste</p>
                              <p className="text-gray-700 text-sm">
                                Usar orejeras con almohadillas endurecidas o agrietadas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-400">
                      <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6" />
                        El Peligro de la Sobreprotección
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Aunque parezca contraintuitivo, <strong>reducir el ruido en exceso</strong> también es un riesgo. 
                        El aislamiento excesivo puede impedir oír:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl mb-2">🚨</p>
                          <p className="font-bold text-gray-900 mb-1">Alarmas</p>
                          <p className="text-xs text-gray-600">De seguridad o emergencia</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl mb-2">🚗</p>
                          <p className="font-bold text-gray-900 mb-1">Vehículos</p>
                          <p className="text-xs text-gray-600">Marcha atrás u operando</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl mb-2">📢</p>
                          <p className="font-bold text-gray-900 mb-1">Advertencias</p>
                          <p className="text-xs text-gray-600">Gritos de compañeros</p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-indigo-100 rounded-lg">
                        <p className="text-indigo-900 font-semibold text-center">
                          🎯 Objetivo: Reducir a nivel seguro (&lt; 85 dBA) manteniendo conciencia situacional
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección 8: FAQ Interactiva */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    ❓ Preguntas Frecuentes (FAQ)
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden border-2 border-blue-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                          className="w-full p-3 sm:p-4 md:p-6 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                        >
                          <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
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
                              <div className="p-3 sm:p-4 md:p-6 pt-0 bg-white">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Conclusión */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 lg:p-10 rounded-r-3xl shadow-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                      <Shield className="text-white h-12 w-12" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-green-900 mb-4">
                        Conclusión: Tu Audición es Irremplazable
                      </h2>
                      <p className="text-xl text-gray-800 leading-relaxed mb-6">
                        La elección entre tapones y orejeras no tiene una respuesta universal. No hay un "ganador" absoluto. 
                        La decisión inteligente se basa en una <strong>evaluación holística</strong> del trabajador, 
                        el trabajo y el lugar de trabajo.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 text-center">
                      Los 3 Pilares de una Conservación Auditiva Eficaz
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold">1</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">La Elección Correcta</h4>
                        <p className="text-gray-700 text-sm">
                          Usar evaluación situacional para seleccionar el protector más apropiado
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold">2</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">El Ajuste Correcto</h4>
                        <p className="text-gray-700 text-sm">
                          Aplicación adecuada y entrenada es clave. Un EPP mal ajustado es un placebo peligroso
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold">3</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">La Actitud Correcta</h4>
                        <p className="text-gray-700 text-sm">
                          Cultura de seguridad donde la protección auditiva es no negociable, 100% del tiempo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                    <p className="text-center text-xl text-gray-900 leading-relaxed">
                      <strong className="text-blue-900">La elección que haces cada día en el trabajo determina tu futuro sonoro.</strong> 
                      Un equipo de protección de última generación es inútil en manos de alguien que no sabe cómo usarlo. 
                      La mejor protección es la que <strong className="bg-blue-200 px-2 py-1 rounded">se usa correctamente, el 100% del tiempo</strong>.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Artículos Relacionados */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                  📚 Artículos Relacionados
                </h2>
                <div className="grid md:grid-cols-3 gap-3">
                  {relatedArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.9 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Badge className={`mb-3 ${
                        index === 0 ? 'bg-orange-100 text-orange-800' :
                        index === 1 ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{article.publishDate}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <a
                        href={`/blog/${article.slug}`}
                        className={`inline-block px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                          index === 0 ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                          index === 1 ? 'bg-green-500 hover:bg-green-600 text-white' :
                          'bg-purple-500 hover:bg-purple-600 text-white'
                        }`}
                      >
                        Leer Artículo →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}