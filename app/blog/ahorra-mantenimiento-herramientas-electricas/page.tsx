'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Wrench, Zap, DollarSign, TrendingUp, Info } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function MantenimientoHerramientasArticle() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAmperage, setSelectedAmperage] = useState<number | null>(null);
  const [isClean, setIsClean] = useState(false);
  const [toolChoice, setToolChoice] = useState<boolean | null>(null);
  const [brushLife, setBrushLife] = useState(100);
  const [toolCount, setToolCount] = useState(10);
  const [toolCost, setToolCost] = useState(3500);

  // Datos para la tabla de extensiones
  const extensionData: { [key: number]: Array<{ gauge: number; length: string }> } = {
    10: [
      { gauge: 16, length: '15 metros (50 pies)' },
      { gauge: 14, length: '30 metros (100 pies)' },
      { gauge: 12, length: '45 metros (150 pies)' }
    ],
    15: [
      { gauge: 14, length: '15 metros (50 pies)' },
      { gauge: 12, length: '30 metros (100 pies)' },
      { gauge: 10, length: '45 metros (150 pies)' }
    ],
    20: [
      { gauge: 12, length: '15 metros (50 pies)' },
      { gauge: 10, length: '30 metros (100 pies)' },
      { gauge: 10, length: '45 metros (150 pies)' }
    ]
  };

  // Datos para el gráfico de accesorios
  const accessoryChartData = {
    labels: ['Accesorio Correcto/Afilado', 'Accesorio Incorrecto/Desafilado'],
    datasets: [
      {
        label: 'Esfuerzo del Motor (%)',
        data: [40, 95],
        backgroundColor: ['rgba(16, 185, 129, 0.8)', 'rgba(239, 68, 68, 0.8)'],
        borderColor: ['rgb(5, 150, 105)', 'rgb(220, 38, 38)'],
        borderWidth: 2
      },
      {
        label: 'Eficiencia del Trabajo (%)',
        data: [100, 30],
        backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)'],
        borderColor: ['rgb(37, 99, 235)', 'rgb(234, 88, 12)'],
        borderWidth: 2
      }
    ]
  };

  const accessoryChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: { family: "'Inter', sans-serif", size: 12 },
          padding: 15
        }
      },
      title: {
        display: true,
        text: 'Comparativa de Rendimiento: Accesorios Correctos vs. Incorrectos',
        font: { family: "'Inter', sans-serif", size: 16, weight: 'bold' as const }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 110,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    }
  };

  // Datos para el gráfico de costos
  const costsChartData = {
    labels: ['Multas STPS', 'Prima IMSS', 'Costos Legales'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#FB923C', '#F97316', '#EA580C'],
      borderColor: '#FFFFFF',
      borderWidth: 4
    }]
  };

  const costsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          font: { family: "'Inter', sans-serif", size: 12 }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}% del impacto`;
          }
        }
      }
    },
    cutout: '65%'
  };

  const calculateSavings = () => {
    const failureRate = 0.20;
    return (toolCount * toolCost * failureRate).toLocaleString('es-MX', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    });
  };

  const simulateWear = () => {
    if (brushLife > 0) {
      setBrushLife(Math.max(0, brushLife - 20));
    }
  };

  const replaceBrushes = () => {
    setBrushLife(100);
  };

  // Artículos relacionados
  const relatedArticles = [
    {
      id: 1,
      title: 'Top 7 Kits de Herramientas 2025',
      excerpt: 'La guía definitiva para elegir el kit perfecto según tu profesión.',
      category: 'Herramientas',
      publishDate: '30 Ago 2025',
      readTime: '15 min',
      slug: 'top-7-kits-herramientas-2025'
    },
    {
      id: 2,
      title: 'Los Mejores Chalecos de Seguridad 2025',
      excerpt: 'Guía completa de chalecos reflectantes para trabajo en altura.',
      category: 'Seguridad',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      slug: 'mejores-chalecos-seguridad-2025'
    },
    {
      id: 3,
      title: 'Guía NOM-009-STPS-2011',
      excerpt: '7 puntos clave para trabajos en altura que todo supervisor debe dominar.',
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
        <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${30 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
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
                className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-2 text-orange-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Wrench className="h-4 w-4" />
                💰 Guía de Ahorro Profesional
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Los 5 Errores que Están Destruyendo tus Herramientas Eléctricas
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Y cómo evitarlos para ahorrar miles de pesos en reemplazos innecesarios
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  1 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  18 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${30 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
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
              
              {/* Introducción con Estadísticas */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      La Verdadera Amenaza para tu Inversión
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Un rotomartillo de <strong className="text-red-600">$5,000 MXN</strong> que falla a los seis meses no es mala suerte. 
                      Es un golpe directo a tu <strong className="text-green-600">rentabilidad</strong>.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 items-center mt-8">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-4">El Costo Real del Downtime</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-red-900">Pérdida de Productividad</p>
                            <p className="text-gray-700 text-sm">Una hora de inactividad puede costar miles de pesos en mano de obra pagada sin producción</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                          <DollarSign className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-orange-900">Retrasos en Proyectos</p>
                            <p className="text-gray-700 text-sm">Penalizaciones y pérdida de confianza del cliente</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                          <TrendingUp className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-purple-900">Gasto Anual en Reemplazos</p>
                            <p className="text-gray-700 text-sm">Entre $10,000 y $15,000 USD por contratista al año</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative w-full max-w-md mx-auto" style={{ height: '300px' }}>
                        <Doughnut data={costsChartData} options={costsChartOptions} />
                      </div>
                      <p className="text-center mt-4 text-gray-600 text-sm">
                        Distribución del impacto financiero por incumplimiento y fallas
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                    <p className="text-center text-lg text-gray-800">
                      <strong className="text-blue-900">La buena noticia:</strong> La gran mayoría de estas fallas son 
                      <strong className="bg-blue-200 px-2 py-1 rounded mx-1">completamente prevenibles</strong> 
                      con hábitos correctos y mantenimiento básico.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Los 5 Errores - Sistema de Tabs */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                  Los 5 Errores Más Destructivos
                </h2>

                {/* Navegación de tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-4 sm:mb-6 md:mb-8">
                  {[
                    { id: 0, icon: '⚡', title: 'Extensiones' },
                    { id: 1, icon: '🧹', title: 'Limpieza' },
                    { id: 2, icon: '💪', title: 'Sobrecarga' },
                    { id: 3, icon: '🔩', title: 'Accesorios' },
                    { id: 4, icon: '🔧', title: 'Mantenimiento' }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-all flex items-center gap-2 ${
                        activeTab === tab.id
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white text-orange-600 border-2 border-orange-200 hover:bg-orange-100'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span className="hidden md:inline">{tab.title}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Contenido de los tabs */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50"
                >
                  {/* ERROR 1: EXTENSIONES */}
                  {activeTab === 0 && (
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Matar el Motor con la Extensión Eléctrica Equivocada
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Una extensión muy larga o de calibre delgado provoca una <strong className="text-red-600">caída de voltaje</strong>. 
                            Esto obliga al motor a consumir más amperaje para compensar, generando un sobrecalentamiento extremo que derrite el 
                            esmalte aislante de los devanados de cobre. El resultado: <strong>motor quemado irreversible</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6">
                        <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                          <Info className="h-5 w-5" />
                          La Física de la Falla
                        </h4>
                        <p className="text-gray-700 mb-3">
                          La potencia de un motor se calcula con la fórmula: <strong>P = V × I</strong> (Potencia = Voltaje × Corriente)
                        </p>
                        <p className="text-gray-700">
                          Si el voltaje <strong>(V)</strong> disminuye por una extensión inadecuada, pero la herramienta necesita mantener la misma potencia 
                          <strong>(P)</strong> para trabajar, el motor debe aumentar la corriente <strong>(I)</strong>. Este exceso de amperaje genera calor mortal.
                        </p>
                      </div>

                      {/* Selector interactivo de amperaje */}
                      <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">
                          🔍 Calculadora de Calibre de Extensión
                        </h4>
                        <p className="text-gray-600 mb-4">Selecciona el amperaje de tu herramienta:</p>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {[10, 15, 20].map((amp) => (
                            <button
                              key={amp}
                              onClick={() => setSelectedAmperage(amp)}
                              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                selectedAmperage === amp
                                  ? 'bg-orange-500 text-white shadow-lg'
                                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-300'
                              }`}
                            >
                              Hasta {amp}A
                            </button>
                          ))}
                        </div>

                        {selectedAmperage && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-inner"
                          >
                            <h5 className="font-bold text-green-900 mb-3 text-lg">
                              ✅ Recomendación de Calibre (AWG):
                            </h5>
                            <ul className="space-y-2">
                              {extensionData[selectedAmperage].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-700">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span><strong>Calibre {item.gauge} AWG</strong> para hasta {item.length}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>

                      <div className="mt-6 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500">
                        <p className="text-gray-800">
                          <strong className="text-yellow-800">💡 Tip Pro:</strong> Si la extensión está caliente al tacto después del uso, 
                          es de un calibre insuficiente. Usa un número AWG más bajo (cable más grueso) para esa aplicación.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ERROR 2: LIMPIEZA */}
                  {activeTab === 1 && (
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            El Cáncer del Polvo: Ignorar la Limpieza Diaria
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            El polvo de construcción (especialmente de concreto y paneles de yeso) actúa como un <strong className="text-red-600">aislante térmico</strong> 
                            que obstruye las rejillas de ventilación. Esto impide que el sistema de enfriamiento funcione, cocinando literalmente la herramienta desde adentro.
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6">
                        <h4 className="font-bold text-red-900 mb-3 text-lg flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          El Enemigo Invisible: Polvo de Sílice
                        </h4>
                        <p className="text-gray-700">
                          El polvo de concreto y mampostería contiene <strong>partículas de sílice extremadamente finas y abrasivas</strong>. 
                          Estas no solo aíslan, sino que actúan como un compuesto de pulido que desgasta activamente los rodamientos y raya 
                          la superficie del conmutador del motor, acelerando la destrucción.
                        </p>
                      </div>

                      {/* Simulador visual de limpieza */}
                      <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg text-center">
                          🔍 Simulador Visual: Ventilas del Motor
                        </h4>
                        <div className="flex flex-col items-center">
                          <div 
                            className={`w-64 h-32 rounded-lg relative overflow-hidden transition-all duration-500 ${
                              isClean ? 'bg-gray-700' : 'bg-yellow-100 border-4 border-orange-500'
                            }`}
                          >
                            {/* Rejillas */}
                            <div className="absolute inset-0 grid grid-cols-5 gap-2 p-3">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="bg-gray-800 rounded-sm"></div>
                              ))}
                            </div>
                            {/* Capa de polvo */}
                            {!isClean && (
                              <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/70 to-orange-300/70 backdrop-blur-sm"></div>
                            )}
                          </div>
                          <p className={`mt-4 text-lg font-bold ${isClean ? 'text-green-600' : 'text-red-600'}`}>
                            {isClean ? '✅ Ventilas Limpias - Motor Refrigerando Correctamente' : '❌ Ventilas Obstruidas - Sobrecalentamiento Inminente'}
                          </p>
                          <button
                            onClick={() => setIsClean(!isClean)}
                            className="mt-4 px-4 sm:px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                          >
                            {isClean ? '🔄 Simular Uso Diario' : '🧹 Limpiar Herramienta'}
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                        <h4 className="font-bold text-green-900 mb-3 text-lg">✅ El Ritual de 60 Segundos</h4>
                        <ol className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="font-bold">1.</span>
                            <span><strong>Desconectar:</strong> Retire la batería o desenchufe la herramienta</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold">2.</span>
                            <span><strong>Sopletear:</strong> Use aire comprimido en todas las rejillas de ventilación</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold">3.</span>
                            <span><strong>Cepillar:</strong> Limpie las ranuras con un cepillo de cerdas suaves</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold">4.</span>
                            <span><strong>Inspeccionar:</strong> Revise el cable de alimentación por cortes o abrasiones</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* ERROR 3: SOBRECARGA */}
                  {activeTab === 2 && (
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            "Más Fuerza Bruta": Forzar la Herramienta Más Allá de sus Límites
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Aplicar presión física excesiva sobre una herramienta eléctrica reduce drásticamente sus RPM, forzando al motor a consumir 
                            corriente extrema y transfiriendo cargas masivas a la caja de engranajes. Resultado: <strong className="text-red-600">motor quemado 
                            y engranajes astillados</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-500 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6">
                        <h4 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                          <Info className="h-5 w-5" />
                          El Baile del Torque y las RPM
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold text-purple-800 mb-2">🐢 Torque (Par Motor)</p>
                            <p className="text-gray-700 text-sm">
                              Fuerza de rotación. Como un tractor: lento pero puede arrastrar cargas inmensas. 
                              Alto torque a bajas RPM para trabajos pesados.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold text-purple-800 mb-2">🏎️ RPM (Revoluciones por Minuto)</p>
                            <p className="text-gray-700 text-sm">
                              Velocidad de rotación. Como un auto de carreras: rápido pero sin fuerza de arrastre. 
                              Altas RPM a bajo torque para trabajos ligeros.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mini-juego interactivo */}
                      <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg text-center">
                          🎯 Prueba de Conocimiento: ¿Qué herramienta usarías?
                        </h4>
                        <p className="text-center text-gray-600 mb-6">
                          Necesitas perforar una viga de concreto de alta resistencia. ¿Cuál es la herramienta correcta?
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <button
                            onClick={() => setToolChoice(false)}
                            className={`p-6 rounded-xl border-2 transition-all ${
                              toolChoice === false
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-300 bg-white hover:border-orange-300'
                            }`}
                          >
                            <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">🔩</p>
                            <p className="font-bold text-gray-900">Taladro Ligero (600W)</p>
                          </button>
                          <button
                            onClick={() => setToolChoice(true)}
                            className={`p-6 rounded-xl border-2 transition-all ${
                              toolChoice === true
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-300 bg-white hover:border-orange-300'
                            }`}
                          >
                            <p className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">🛠️</p>
                            <p className="font-bold text-gray-900">Rotomartillo SDS (1500W)</p>
                          </button>
                        </div>
                        {toolChoice !== null && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-lg ${
                              toolChoice ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'
                            }`}
                          >
                            <p className={`font-bold mb-2 ${toolChoice ? 'text-green-900' : 'text-red-900'}`}>
                              {toolChoice ? '✅ ¡Correcto!' : '❌ ¡Cuidado!'}
                            </p>
                            <p className="text-gray-700">
                              {toolChoice 
                                ? 'Usar la herramienta adecuada protege el motor, hace el trabajo más rápido y es más seguro.'
                                : 'Forzar esta herramienta causará sobrecalentamiento extremo y destruirá los engranajes del motor.'}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      <div className="mt-6 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500">
                        <p className="text-gray-800">
                          <strong className="text-yellow-800">💡 Regla de Oro:</strong> "Deja que la herramienta haga el trabajo". 
                          Si el motor baja de tono o se vuelve más grave, reduce la presión inmediatamente. La velocidad viene de las RPM y 
                          del filo del accesorio, no de la fuerza bruta.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ERROR 4: ACCESORIOS */}
                  {activeTab === 3 && (
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Ahorro que Sale Caro: Accesorios Incorrectos o de Baja Calidad
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Una broca desafilada, un disco inadecuado o de baja calidad obliga al motor a trabajar exponencialmente más duro. 
                            Esto genera fricción masiva, consumo extremo de corriente y un <strong className="text-red-600">desgaste acelerado</strong> 
                            de todos los componentes internos.
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6">
                        <h4 className="font-bold text-red-900 mb-3 text-lg flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          El Peligro Mortal: Discos Dentados en Amoladoras
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Montar un disco de sierra dentado para madera en una amoladora angular es <strong>extremadamente peligroso</strong> 
                          y garantiza la destrucción de la herramienta. Las amoladoras operan a RPM altísimas diseñadas para corte abrasivo, 
                          no para dientes.
                        </p>
                        <p className="text-gray-700">
                          El riesgo de <strong className="text-red-800">contragolpe (kickback)</strong> es altísimo: cuando un diente se engancha, 
                          lanza violentamente la herramienta hacia el operador, pudiendo causar lesiones graves o muerte, y destruye la caja de 
                          engranajes instantáneamente.
                        </p>
                      </div>

                      {/* Gráfico de comparación */}
                      <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg text-center">
                          📊 Impacto del Accesorio en el Rendimiento y Desgaste del Motor
                        </h4>
                        <div className="relative w-full" style={{ height: '400px' }}>
                          <Bar data={accessoryChartData} options={accessoryChartOptions} />
                        </div>
                        <p className="text-center text-gray-600 text-sm mt-4">
                          Un accesorio de baja calidad o desafilado incrementa el esfuerzo del motor hasta en un <strong>138%</strong> 
                          mientras reduce la eficiencia del trabajo en un <strong>70%</strong>.
                        </p>
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-3">
                        <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                          <h5 className="font-bold text-green-900 mb-3">✅ Invierte en Calidad</h5>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Compra brocas y discos de marcas reconocidas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Mantén las hojas afiladas profesionalmente</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Reemplaza inmediatamente accesorios agrietados o doblados</span>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500">
                          <h5 className="font-bold text-yellow-900 mb-3">💡 Tip Pro</h5>
                          <p className="text-gray-700 text-sm">
                            El sobreprecio pagado por un accesorio de calidad es una <strong>póliza de seguro barata</strong> contra 
                            una costosa reparación de la herramienta o, peor aún, un accidente grave.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ERROR 5: MANTENIMIENTO */}
                  {activeTab === 4 && (
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            La Falla Anunciada: Olvidar el Mantenimiento Preventivo
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            No revisar y cambiar las <strong className="text-orange-600">escobillas de carbón</strong> a tiempo es uno de los 
                            errores más costosos. Cuando se desgastan por completo, el resorte metálico entra en contacto directo con el conmutador 
                            giratorio, <strong className="text-red-600">destruyendo el motor de forma irreparable</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 md:p-6 rounded-r-lg mb-6">
                        <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                          <Info className="h-5 w-5" />
                          ¿Qué son las Escobillas de Carbón?
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Las escobillas son bloques de grafito de carbón que conducen la electricidad desde la parte estática de la herramienta 
                          hasta el rotor en movimiento. El contacto y fricción constantes hacen que se desgasten gradualmente, lo cual es 
                          <strong> completamente normal y esperado</strong>.
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-blue-800 mb-2">🚨 Señales de Advertencia:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Pérdida de potencia repentina o intermitente</li>
                            <li>• Chispas excesivas visibles a través de las rejillas</li>
                            <li>• Ruido de rechinido anormal del motor</li>
                            <li>• La herramienta no arranca o se detiene inesperadamente</li>
                          </ul>
                        </div>
                      </div>

                      {/* Simulador de desgaste de escobillas */}
                      <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg text-center">
                          🔧 Simulador de Desgaste de Escobillas
                        </h4>
                        <div className="max-w-2xl mx-auto">
                          <div className="relative w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                            <motion.div
                              className={`h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 ${
                                brushLife <= 20 ? 'bg-red-600' : 'bg-orange-500'
                              }`}
                              style={{ width: `${brushLife}%` }}
                              animate={{ width: `${brushLife}%` }}
                            >
                              {brushLife}% Vida Útil
                            </motion.div>
                          </div>
                          {brushLife <= 20 && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 p-4 bg-red-100 border-l-4 border-red-500 rounded-r-lg"
                            >
                              <p className="text-red-900 font-bold text-center">
                                🚨 ¡ALERTA CRÍTICA! Reemplazar escobillas INMEDIATAMENTE para evitar daño catastrófico al motor
                              </p>
                            </motion.div>
                          )}
                          <div className="mt-6 flex justify-center gap-4">
                            <button
                              onClick={simulateWear}
                              className="px-4 sm:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                            >
                              ⚙️ Simular Uso Diario
                            </button>
                            <button
                              onClick={replaceBrushes}
                              className="px-4 sm:px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                            >
                              🔧 Reemplazar Escobillas
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-3">
                        <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-l-4 border-purple-500">
                          <h5 className="font-bold text-purple-900 mb-3">📅 Frecuencia de Inspección</h5>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li><strong>Uso profesional intensivo:</strong> Cada 3-6 meses</li>
                            <li><strong>Uso moderado:</strong> Cada 6-12 meses</li>
                            <li><strong>Criterio de reemplazo:</strong> Menos de 5-6 mm de longitud</li>
                          </ul>
                        </div>
                        <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
                          <h5 className="font-bold text-red-900 mb-3">⚠️ El Mito Brushless</h5>
                          <p className="text-gray-700 text-sm">
                            Las herramientas brushless (sin escobillas) no requieren cambio de carbones, pero NO son "libres de mantenimiento". 
                            Aún necesitan limpieza de ventilas, lubricación de engranajes e inspección de rodamientos.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.section>

              {/* Calculadora de Ahorro */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl text-white">
                  <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-center mb-4">
                    💰 Calcula tu Ahorro Potencial Anual
                  </h2>
                  <p className="text-center text-orange-100 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
                    Descubre cuánto dinero podrías estar perdiendo anualmente por fallas prematuras evitables
                  </p>

                  <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 items-center">
                    <div className="space-y-6">
                      <div>
                        <label className="block font-semibold mb-2 text-orange-100">
                          Número de herramientas eléctricas
                        </label>
                        <input
                          type="number"
                          value={toolCount}
                          onChange={(e) => setToolCount(Number(e.target.value))}
                          className="w-full px-4 py-3 rounded-lg text-gray-900 font-semibold text-lg"
                          min="1"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2 text-orange-100">
                          Costo promedio por herramienta ($MXN)
                        </label>
                        <input
                          type="number"
                          value={toolCost}
                          onChange={(e) => setToolCost(Number(e.target.value))}
                          className="w-full px-4 py-3 rounded-lg text-gray-900 font-semibold text-lg"
                          min="100"
                          step="500"
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-xl">
                      <p className="text-orange-600 font-semibold mb-2">Ahorro Anual Estimado</p>
                      <motion.p 
                        key={calculateSavings()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-4"
                      >
                        ${calculateSavings()}
                      </motion.p>
                      <p className="text-gray-600 text-sm">
                        Basado en una tasa de falla evitable del <strong>20%</strong> con mantenimiento preventivo adecuado
                      </p>
                      <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                        <p className="text-green-800 font-semibold text-sm">
                          💡 Este cálculo no incluye el costo del tiempo de inactividad, que puede multiplicar estas cifras por 5-10x
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Conclusión */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 text-center"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    Tu Profesionalismo se Refleja en tus Herramientas
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
                    Cuidar tus herramientas no es solo una tarea de mantenimiento; es una <strong className="text-orange-600">inversión 
                    inteligente en tu negocio</strong> y una marca de tu profesionalismo. Una herramienta bien cuidada no solo te ahorra 
                    miles de pesos en reemplazos, sino que garantiza un trabajo de mayor calidad, más seguro y más eficiente.
                  </p>

                  <div className="grid md:grid-cols-3 gap-3 mt-8">
                    <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">💰</div>
                      <h3 className="font-bold text-blue-900 mb-2">Ahorro Real</h3>
                      <p className="text-gray-700 text-sm">Reduce costos de reemplazo hasta un 80% con mantenimiento preventivo</p>
                    </div>
                    <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">⚡</div>
                      <h3 className="font-bold text-green-900 mb-2">Mayor Productividad</h3>
                      <p className="text-gray-700 text-sm">Elimina el tiempo de inactividad por fallas inesperadas</p>
                    </div>
                    <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">🏆</div>
                      <h3 className="font-bold text-purple-900 mb-2">Imagen Profesional</h3>
                      <p className="text-gray-700 text-sm">Herramientas bien cuidadas demuestran seriedad y compromiso</p>
                    </div>
                  </div>

                  <div className="mt-8 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl border-2 border-orange-300">
                    <p className="text-xl font-bold text-orange-900">
                      🎯 El poder de evitar fallas, reducir costos y maximizar la vida útil de tu equipo no está en manos del servicio técnico... 
                      <span className="text-orange-600"> está en TUS manos</span>.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Artículos Relacionados */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
              >
                <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                  📚 Artículos Relacionados
                </h2>
                <div className="grid md:grid-cols-3 gap-3">
                  {relatedArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                    >
                      <Badge className={`mb-3 ${
                        index === 0 ? 'bg-blue-100 text-blue-800' :
                        index === 1 ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.publishDate}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <a
                        href={`/blog/${article.slug}`}
                        className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-semibold"
                      >
                        Leer más →
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