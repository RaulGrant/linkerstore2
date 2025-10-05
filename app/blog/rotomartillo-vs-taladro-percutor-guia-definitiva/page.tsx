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
  Wrench,
  Zap,
  Settings,
  Target,
  TrendingUp,
  Info,
  X,
  ChevronDown,
  Hammer,
  Drill,
  Sparkles,
  DollarSign,
  Battery,
  Gauge
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadarController, RadialLinearScale, PointElement, LineElement } from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, RadarController, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RotomartilloTaladroArticle() {
  const [activeTab, setActiveTab] = useState<'percutor' | 'rotomartillo'>('percutor');
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  // Datos de materiales
  const materials = [
    { 
      id: 'ladrillo', 
      name: 'Ladrillo / Bloque', 
      tool: 'percutor',
      color: 'from-amber-500 to-orange-500',
      icon: '🧱'
    },
    { 
      id: 'concreto', 
      name: 'Concreto / Piedra', 
      tool: 'rotomartillo',
      color: 'from-blue-500 to-cyan-500',
      icon: '🏗️'
    },
    { 
      id: 'mamposteria', 
      name: 'Azulejo / Mampostería', 
      tool: 'percutor',
      color: 'from-purple-500 to-pink-500',
      icon: '🪟'
    },
    { 
      id: 'madera', 
      name: 'Madera / Metal', 
      tool: 'ninguno',
      color: 'from-green-500 to-emerald-500',
      icon: '🪵'
    }
  ];

  // Recomendaciones por material
  const recommendations = {
    percutor: {
      title: 'Recomendación: Taladro Percutor',
      color: 'amber',
      description: 'Para ladrillo, bloque y mampostería, la vibración de alta frecuencia del taladro percutor es perfecta. Perforarás de forma rápida y limpia sin riesgo de dañar el material o sobrecargar la herramienta.',
      pros: [
        'Perfecto para instalaciones ligeras',
        'Económico y versátil',
        'No requiere brocas especiales caras',
        'Ideal para uso doméstico'
      ]
    },
    rotomartillo: {
      title: 'Recomendación: Rotomartillo',
      color: 'blue',
      description: 'No lo dudes. Para concreto o piedra, necesitas la fuerza bruta del pistón neumático. Ahorrarás tiempo y esfuerzo enormes, y evitarás dañar una herramienta menos potente.',
      pros: [
        'Único capaz de perforar concreto eficientemente',
        'Función de cincel para demolición',
        'Sistema SDS para máxima transferencia de energía',
        'Herramienta profesional de construcción'
      ]
    },
    ninguno: {
      title: 'Recomendación: Taladro Estándar',
      color: 'green',
      description: 'Para madera o metal, la función de percusión es innecesaria y contraproducente. Un taladro estándar o cualquiera de estas herramientas en modo "solo rotación" es todo lo que necesitas.',
      pros: [
        'Taladro convencional es suficiente',
        'Mayor precisión sin vibración',
        'Más económico',
        'Perfecto para carpintería'
      ]
    }
  };

  // Datos para gráfico de energía de impacto
  const impactChartData = {
    labels: ['Taladro Percutor', 'Rotomartillo Ligero', 'Rotomartillo Medio', 'Rotomartillo Pesado'],
    datasets: [{
      label: 'Energía de Impacto (Joules)',
      data: [0.8, 2.5, 4.5, 8.0],
      backgroundColor: [
        'rgba(251, 191, 36, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(14, 116, 144, 0.7)',
        'rgba(8, 51, 68, 0.7)'
      ],
      borderColor: [
        'rgb(245, 158, 11)',
        'rgb(37, 99, 235)',
        'rgb(6, 95, 70)',
        'rgb(3, 25, 34)'
      ],
      borderWidth: 2
    }]
  };

  const impactChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Impacto: ${context.parsed.y} Joules`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Joules (J)'
        }
      }
    }
  };

  // Datos para gráfico radar de comparación
  const radarChartData = {
    labels: ['Potencia', 'Velocidad', 'Versatilidad', 'Portabilidad', 'Economía'],
    datasets: [
      {
        label: 'Taladro Percutor',
        data: [4, 8, 9, 8, 9],
        backgroundColor: 'rgba(251, 191, 36, 0.2)',
        borderColor: 'rgb(245, 158, 11)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(245, 158, 11)'
      },
      {
        label: 'Rotomartillo',
        data: [10, 6, 7, 6, 5],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(37, 99, 235)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(37, 99, 235)'
      }
    ]
  };

  const radarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: { stepSize: 2 }
      }
    }
  };

  // Escenarios prácticos
  const scenarios = [
    {
      title: 'Colgar una Televisión en Pared de Ladrillo',
      material: 'Ladrillo hueco',
      recommendation: 'Taladro Percutor',
      reasoning: 'El ladrillo es poroso y relativamente suave. La vibración del percutor perfora limpiamente sin romper el material. Usar un rotomartillo sería excesivo y podría fracturar el ladrillo.',
      tips: ['Usa broca para mampostería', 'Inicia sin percusión para marcar', 'Mantén velocidad media']
    },
    {
      title: 'Instalar Anclajes en Losa de Concreto',
      material: 'Concreto armado',
      recommendation: 'Rotomartillo',
      reasoning: 'El concreto de losas es denso y puede contener varillas de refuerzo. Solo la fuerza de impacto del rotomartillo puede atravesarlo eficientemente. Un taladro percutor se sobrecalentará y dañará.',
      tips: ['Usa broca SDS Plus', 'Enfría la broca con agua', 'Avanza con presión constante']
    },
    {
      title: 'Perforar Azulejos en Baño',
      material: 'Azulejo sobre mampostería',
      recommendation: 'Taladro Percutor (sin percusión inicial)',
      reasoning: 'Los azulejos son frágiles. Comienza SIN percusión con una broca de punta de carburo para atravesar el esmalte. Una vez pasado el azulejo, activa la percusión para la mampostería de soporte.',
      tips: ['Marca con cinta adhesiva', 'Inicia sin percusión', 'Activa percusión después del azulejo']
    },
    {
      title: 'Demoler Muro de Concreto Liviano',
      material: 'Tabique de concreto',
      recommendation: 'Rotomartillo con Función Cincel',
      reasoning: 'Para demolición, necesitas la función de "solo martilleo" (sin rotación) del rotomartillo. Con un cincel plano SDS, romperás el material mucho más rápido y seguro que con cualquier otra herramienta.',
      tips: ['Usa modo cincel (sin rotación)', 'Protección auditiva obligatoria', 'Trabaja en ángulo de 30°']
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "¿Puedo usar un taladro percutor en concreto si tengo paciencia?",
      answer: "Técnicamente sí, pero NO es recomendable. El concreto es mucho más duro que el ladrillo. Forzar un taladro percutor no solo tomará 5-10 veces más tiempo, sino que: (1) Sobrecalentará el motor, reduciendo su vida útil o quemándolo. (2) Desgastará las brocas rápidamente. (3) Te cansarás física más (mucha presión). (4) El resultado será un agujero impreciso. Para un par de perforaciones esporádicas, podrías arriesgarte, pero para cualquier trabajo serio en concreto, un rotomartillo es una inversión que se paga sola en tiempo y frustración ahorrados."
    },
    {
      question: "¿Por qué las brocas SDS son diferentes y cuál es su ventaja?",
      answer: "SDS (Special Direct System o Steck-Dreh-Sitz) es un sistema de encastre diseñado específicamente para rotomartillos. A diferencia del mandril cilíndrico de un taladro normal que sujeta por fricción, las brocas SDS tienen ranuras que encajan en el portabrocas, permitiendo: (1) Movimiento axial: La broca puede moverse hacia adelante y atrás para recibir el golpe del pistón. (2) Sin Resbale: La transmisión del impacto es directa, sin pérdida de energía. (3) Cambio Rápido: Se insertan y liberan con un simple giro, sin llaves. Existen dos tipos principales: SDS Plus (hasta brocas de 30mm, uso general) y SDS Max (para trabajos pesados y demolición)."
    },
    {
      question: "¿Es mejor invertir en un rotomartillo que tenga también función de taladro percutor?",
      answer: "Depende de tu uso principal. Los rotomartillos modernos suelen tener tres modos: (1) Solo rotación, (2) Rotación + martilleo, (3) Solo martilleo (cincel). Esto los hace versátiles. SIN EMBARGO, para trabajos de precisión en materiales blandos o delicados, un rotomartillo puede ser demasiado pesado y potente. La regla práctica: Si el 80% de tu trabajo es en concreto, compra un rotomartillo y úsalo también para lo demás. Si el 80% es instalación ligera y solo ocasionalmente haces concreto, un taladro percutor de calidad + alquiler de rotomartillo cuando lo necesites es más económico."
    },
    {
      question: "¿Cuántos Joules necesito en un rotomartillo?",
      answer: "La energía de impacto se mide en Joules (J) y determina la capacidad de perforación: • 1.5-2.5 J: Rotomartillos ligeros para bricolaje. Concreto de hasta 20mm. • 2.5-4 J: Rango medio. Ideal para la mayoría de trabajos domésticos y profesionales ligeros. Concreto de hasta 30mm. • 4-8 J: Profesional. Construcción seria, concreto armado, perforaciones grandes. • 8+ J: Demolición pesada. Para contratistas especializados. Para un usuario doméstico o semiprofesional, 2.5-4 J es el punto óptimo de potencia y costo."
    },
    {
      question: "¿Debo comprar con cable o batería?",
      answer: "Ambas tecnologías tienen pros y contras: **Con Cable (Alámbrico):** Potencia constante sin interrupciones, más económico, mayor durabilidad para uso intensivo continuo. Desventaja: Limitado por la extensión, menos portátil. **A Batería (Inalámbrico):** Máxima portabilidad, perfecto para trabajos en exteriores o sin toma de corriente. Desventaja: Costo más alto (herramienta + baterías), tiempo de uso limitado (15-45 min según batería), potencia ligeramente menor. Para uso profesional intensivo: Alámbrico. Para flexibilidad y uso moderado: Batería (idealmente sistema de baterías intercambiables entre herramientas de la misma marca)."
    },
    {
      question: "¿Qué medidas de seguridad son críticas con estas herramientas?",
      answer: "Estas herramientas son potentes y requieren respeto: **Siempre Obligatorio:** (1) Gafas de seguridad: Las esquirlas vuelan a alta velocidad. (2) Protección auditiva: Especialmente con rotomartillos (90-110 dB). (3) Guantes: Protegen de vibración y del calor de la broca. (4) Mascarilla: El polvo de concreto/silicio es peligroso para los pulmones. **Buenas Prácticas:** (1) Verifica que no haya cables/tuberías ocultas con un detector de metales. (2) Sujeta firmemente la herramienta con ambas manos. (3) Si la broca se atasca, NO fuerzas. Invierte la rotación o retira la broca. (4) Nunca trabajes en superficies inestables o con escaleras tambaleantes."
    }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: 1,
      title: 'Top 7 Kits de Herramientas 2025',
      excerpt: 'La guía definitiva para elegir el kit perfecto según tu profesión',
      category: 'Herramientas',
      publishDate: '30 Ago 2025',
      readTime: '15 min',
      slug: 'top-7-kits-herramientas-2025'
    },
    {
      id: 2,
      title: 'Los 5 Errores que Destruyen tus Herramientas Eléctricas',
      excerpt: 'Guía de mantenimiento para ahorrar miles de pesos',
      category: 'Mantenimiento',
      publishDate: '1 Oct 2025',
      readTime: '18 min',
      slug: 'ahorra-mantenimiento-herramientas-electricas'
    },
    {
      id: 3,
      title: 'Guía Definitiva de Extintores',
      excerpt: 'Matriz interactiva para elegir el extintor correcto en cada tipo de fuego',
      category: 'Seguridad',
      publishDate: '4 Oct 2025',
      readTime: '28 min',
      slug: 'mejores-extintores-diferentes-tipos-incendios'
    }
  ];

  const getRecommendation = (materialId: string) => {
    const material = materials.find(m => m.id === materialId);
    return material ? recommendations[material.tool as keyof typeof recommendations] : null;
  };

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`hero-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${35 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
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
                <Drill className="h-4 w-4" />
                🔨 Guía de Herramientas Profesionales
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Rotomartillo vs. Taladro Percutor
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                La guía definitiva para elegir la herramienta correcta y evitar errores costosos. 
                No es solo potencia, es usar la herramienta adecuada para cada material.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  5 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  22 min de lectura
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
                  background: `hsl(${35 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
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
              
              {/* Introducción del Problema */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-center font-semibold">
                      🚧 Estás frente a un muro de concreto y tu taladro de siempre solo patina y chilla...
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed text-center">
                      Es una <strong className="text-red-600">frustración común</strong>, pero la solución es más simple de lo que crees. 
                      Esta guía interactiva terminará con la confusión para siempre.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-amber-200 text-center">
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">⚡</div>
                      <p className="font-bold text-amber-900 mb-2">El Problema</p>
                      <p className="text-gray-600 text-sm">No es falta de potencia, es usar la herramienta incorrecta</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200 text-center">
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">💡</div>
                      <p className="font-bold text-blue-900 mb-2">La Solución</p>
                      <p className="text-gray-600 text-sm">Entender qué herramienta usar en qué material</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200 text-center">
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">💰</div>
                      <p className="font-bold text-green-900 mb-2">El Ahorro</p>
                      <p className="text-gray-600 text-sm">Tiempo, esfuerzo y no dañar herramientas costosas</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección de Tabs: Conoce a los Contendientes */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🔧 Conoce a los Contendientes
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Aunque parezcan similares, su <strong>funcionamiento interno y aplicación ideal son mundos aparte</strong>. 
                    Explora cada herramienta para entender su verdadera naturaleza.
                  </p>

                  {/* Tabs */}
                  <div className="flex justify-center gap-4 mb-4 sm:mb-6 md:mb-8">
                    <motion.button
                      onClick={() => setActiveTab('percutor')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                        activeTab === 'percutor'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      <Drill className="h-6 w-6" />
                      Taladro Percutor
                    </motion.button>
                    <motion.button
                      onClick={() => setActiveTab('rotomartillo')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 ${
                        activeTab === 'rotomartillo'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <Hammer className="h-6 w-6" />
                      Rotomartillo
                    </motion.button>
                  </div>

                  {/* Contenido de Tabs */}
                  <AnimatePresence mode="wait">
                    {activeTab === 'percutor' && (
                      <motion.div
                        key="percutor"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 items-center"
                      >
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-amber-600 mb-4 flex items-center gap-3">
                            <Drill className="h-8 w-8" />
                            Taladro Percutor: El "Golpeteo" Rápido
                          </h3>
                          
                          <div className="bg-amber-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-amber-200 mb-6">
                            <p className="font-bold text-amber-900 mb-3 text-lg">¿Cómo Funciona?</p>
                            <p className="text-gray-700 leading-relaxed">
                              Su mecanismo es simple y efectivo: <strong>dos discos estriados</strong> en su interior chocan 
                              entre sí miles de veces por minuto. Esto genera una <strong className="text-amber-700">vibración de alta frecuencia 
                              pero de bajo impacto</strong>, ideal para materiales más blandos.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold text-green-900 mb-1">Ideal Para:</p>
                                <p className="text-gray-700 text-sm">
                                  Ladrillo, bloque hueco, mampostería y azulejos. El rey para trabajos de instalación ligeros.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                              <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold text-red-900 mb-1">Su Límite:</p>
                                <p className="text-gray-700 text-sm">
                                  Concreto armado o de alta resistencia. Forzarlo solo quemará la broca y el motor.
                                </p>
                              </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                              <p className="font-bold text-blue-900 mb-2">Características Técnicas:</p>
                              <ul className="space-y-1 text-sm text-gray-700">
                                <li>• <strong>Golpes por minuto:</strong> 30,000 - 50,000 BPM</li>
                                <li>• <strong>Energía de impacto:</strong> 0.5 - 1.5 Joules</li>
                                <li>• <strong>Mandril:</strong> Estándar cilíndrico (13mm típico)</li>
                                <li>• <strong>Peso:</strong> 1.5 - 2.5 kg</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 sm:p-6 md:p-8 rounded-2xl w-full h-80 flex items-center justify-center relative overflow-hidden">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="text-9xl"
                            >
                              🔩
                            </motion.div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                              <p className="text-center font-bold text-gray-800 text-sm">
                                Mecanismo de Discos Estriados
                              </p>
                              <p className="text-center text-xs text-gray-600 mt-1">
                                Alta frecuencia, bajo impacto
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'rotomartillo' && (
                      <motion.div
                        key="rotomartillo"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 items-center"
                      >
                        <div>
                          <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                            <Hammer className="h-8 w-8" />
                            Rotomartillo: El "Martilleo" Poderoso
                          </h3>
                          
                          <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200 mb-6">
                            <p className="font-bold text-blue-900 mb-3 text-lg">¿Cómo Funciona?</p>
                            <p className="text-gray-700 leading-relaxed">
                              Utiliza un <strong>mecanismo de pistón electroneumático</strong>. Imagina un pequeño martillo 
                              interno golpeando el portabrocas con fuerza inmensa. Genera <strong className="text-blue-700">menos golpes 
                              por minuto pero cada golpe tiene una energía de impacto (Joules) muchísimo mayor</strong>.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold text-green-900 mb-1">Ideal Para:</p>
                                <p className="text-gray-700 text-sm">
                                  Concreto de cualquier tipo, losas, piedra y demolición ligera con función de cincel.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                              <Sparkles className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold text-purple-900 mb-1">El Ecosistema SDS:</p>
                                <p className="text-gray-700 text-sm">
                                  Utiliza brocas especiales (SDS Plus o Max) con sistema de encastre ranurado que soporta 
                                  el martilleo sin resbalar.
                                </p>
                              </div>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                              <p className="font-bold text-orange-900 mb-2">Características Técnicas:</p>
                              <ul className="space-y-1 text-sm text-gray-700">
                                <li>• <strong>Golpes por minuto:</strong> 4,000 - 6,000 BPM</li>
                                <li>• <strong>Energía de impacto:</strong> 2.5 - 8+ Joules</li>
                                <li>• <strong>Portabrocas:</strong> SDS Plus / SDS Max</li>
                                <li>• <strong>Peso:</strong> 3 - 6 kg</li>
                                <li>• <strong>Modos:</strong> Rotación / Rotación+Martilleo / Solo Martilleo</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 sm:p-6 md:p-8 rounded-2xl w-full h-80 flex items-center justify-center relative overflow-hidden">
                            <motion.div
                              animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.15, 1]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="text-9xl"
                            >
                              ⚒️
                            </motion.div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                              <p className="text-center font-bold text-gray-800 text-sm">
                                Mecanismo de Pistón Electroneumático
                              </p>
                              <p className="text-center text-xs text-gray-600 mt-1">
                                Baja frecuencia, alto impacto (Joules)
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
              {/* Asesor de Proyectos - Selector de Material */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🎯 Asesor de Proyectos: ¿Qué Herramienta Necesitas?
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Esta sección es tu <strong>asesor personal</strong>. Responde a una simple pregunta sobre tu proyecto 
                    y te guiaremos directamente a la herramienta que necesitas, eliminando cualquier duda.
                  </p>

                  <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      ¿Sobre qué material vas a trabajar principalmente?
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                    {materials.map((material) => (
                      <motion.button
                        key={material.id}
                        onClick={() => setSelectedMaterial(material.id)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-6 rounded-xl font-bold text-white shadow-lg transition-all ${
                          selectedMaterial === material.id
                            ? `bg-gradient-to-br ${material.color} ring-4 ring-offset-2 ring-gray-400`
                            : `bg-gradient-to-br ${material.color} opacity-90 hover:opacity-100`
                        }`}
                      >
                        <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">{material.icon}</div>
                        <p className="text-sm">{material.name}</p>
                      </motion.button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {selectedMaterial && (() => {
                      const rec = getRecommendation(selectedMaterial);
                      if (!rec) return null;

                      return (
                        <motion.div
                          key={selectedMaterial}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`border-l-4 ${
                            rec.color === 'amber' ? 'border-amber-500 bg-amber-50' :
                            rec.color === 'blue' ? 'border-blue-500 bg-blue-50' :
                            'border-green-500 bg-green-50'
                          } p-8 rounded-r-2xl overflow-hidden`}
                        >
                          <h3 className={`text-2xl font-bold mb-4 ${
                            rec.color === 'amber' ? 'text-amber-900' :
                            rec.color === 'blue' ? 'text-blue-900' :
                            'text-green-900'
                          }`}>
                            {rec.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {rec.description}
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {rec.pros.map((pro, idx) => (
                              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                                <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                  rec.color === 'amber' ? 'text-amber-600' :
                                  rec.color === 'blue' ? 'text-blue-600' :
                                  'text-green-600'
                                }`} />
                                <span className="text-gray-700 text-sm">{pro}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              </motion.section>

              {/* Comparación de Energía de Impacto */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    ⚡ Cara a Cara: La Diferencia en Números
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    La diferencia más importante entre estas herramientas es la <strong className="text-red-600">energía de impacto</strong>, 
                    medida en Joules. Este gráfico muestra la abismal brecha que existe.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">Energía de Impacto (Joules)</h3>
                      <div className="relative w-full" style={{ height: '400px' }}>
                        <Bar data={impactChartData} options={impactChartOptions} />
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                        <p className="text-center text-gray-800 font-semibold">
                          💡 Un rotomartillo medio tiene <strong className="text-red-600">5-6 veces más</strong> energía 
                          de impacto que un taladro percutor. Esta es la diferencia entre perforar concreto en 
                          <strong> 30 segundos vs. 5 minutos</strong> (si es que lo logras).
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">Comparación Multifactor</h3>
                      <div className="relative w-full" style={{ height: '400px' }}>
                        <Radar data={radarChartData} options={radarChartOptions} />
                      </div>
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
                          <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                          <p className="text-sm text-gray-700">
                            <strong className="text-amber-900">Taladro Percutor:</strong> Más versátil y portátil
                          </p>
                        </div>
                        <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <p className="text-sm text-gray-700">
                            <strong className="text-blue-900">Rotomartillo:</strong> Potencia pura para trabajos pesados
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Tabla Comparativa Detallada */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    📊 Tabla Comparativa Completa
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Todas las diferencias clave en un solo lugar para que puedas tomar una decisión informada.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                          <th className="p-4 text-left font-bold border">Característica</th>
                          <th className="p-4 text-center font-bold border bg-amber-600">
                            <div className="flex items-center justify-center gap-2">
                              <Drill className="h-5 w-5" />
                              Taladro Percutor
                            </div>
                          </th>
                          <th className="p-4 text-center font-bold border bg-blue-600">
                            <div className="flex items-center justify-center gap-2">
                              <Hammer className="h-5 w-5" />
                              Rotomartillo
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: 'Mecanismo', percutor: 'Vibración (Discos Estriados)', rotomartillo: 'Pistón Electroneumático' },
                          { label: 'Golpes por Minuto', percutor: '30,000 - 50,000 BPM', rotomartillo: '4,000 - 6,000 BPM' },
                          { label: 'Energía de Impacto', percutor: '0.5 - 1.5 Joules', rotomartillo: '2.5 - 8+ Joules' },
                          { label: 'Material Ideal', percutor: 'Ladrillo / Bloque / Mampostería', rotomartillo: 'Concreto / Piedra / Losa' },
                          { label: 'Tipo de Broca', percutor: 'Cilíndrica Estándar', rotomartillo: 'SDS Plus / SDS Max' },
                          { label: 'Mandril / Portabrocas', percutor: 'Con llave o auto-ajustable', rotomartillo: 'Encastre SDS (sin llave)' },
                          { label: 'Función Cincel', percutor: 'No', rotomartillo: 'Sí (Solo Martilleo)' },
                          { label: 'Modos de Operación', percutor: 'Rotación / Rotación + Percusión', rotomartillo: 'Rotación / Rotación + Martilleo / Solo Martilleo' },
                          { label: 'Peso Típico', percutor: '1.5 - 2.5 kg', rotomartillo: '3 - 6 kg' },
                          { label: 'Rango de Precio', percutor: '$800 - $3,000 MXN', rotomartillo: '$2,000 - $8,000+ MXN' },
                          { label: 'Uso Principal', percutor: 'Instalaciones Ligeras / Hogar', rotomartillo: 'Construcción Pesada / Profesional' },
                          { label: 'Nivel de Ruido', percutor: '85 - 95 dB', rotomartillo: '95 - 110 dB' },
                          { label: 'Vibración', percutor: 'Media - Alta frecuencia', rotomartillo: 'Alta - Golpes intensos' }
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="p-4 font-semibold text-gray-900 border">{row.label}</td>
                            <td className="p-4 text-center text-gray-700 border bg-amber-50">{row.percutor}</td>
                            <td className="p-4 text-center text-gray-700 border bg-blue-50">{row.rotomartillo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.section>

              {/* Escenarios Prácticos */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🎬 Escenarios Prácticos del Mundo Real
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Aprende a través de situaciones reales. Cada escenario te muestra <strong>qué herramienta usar y por qué</strong>.
                  </p>

                  <div className="space-y-6">
                    {scenarios.map((scenario, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all"
                      >
                        <button
                          onClick={() => setSelectedScenario(selectedScenario === index ? null : index)}
                          className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                <strong>Material:</strong> {scenario.material} | <strong>Herramienta:</strong> {scenario.recommendation}
                              </p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: selectedScenario === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-6 w-6 text-orange-600" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {selectedScenario === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 sm:p-4 md:p-6 bg-white space-y-4">
                                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                  <p className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Info className="h-5 w-5" />
                                    ¿Por qué esta herramienta?
                                  </p>
                                  <p className="text-gray-700 leading-relaxed">{scenario.reasoning}</p>
                                </div>

                                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                  <p className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <Target className="h-5 w-5" />
                                    Tips Profesionales:
                                  </p>
                                  <ul className="space-y-2">
                                    {scenario.tips.map((tip, tipIdx) => (
                                      <li key={tipIdx} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{tip}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Consejos de Compra */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    💰 Guía de Compra: ¿Qué Considerar?
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Antes de comprar, evalúa estos factores clave para hacer una inversión inteligente.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                    <div className="space-y-6">
                      <motion.div 
                        className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-amber-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
                            <Battery className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-amber-900 text-xl mb-2">¿Con Cable o Batería?</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                              <div className="bg-white p-3 rounded-lg">
                                <p className="font-semibold text-amber-800 mb-1">✓ Con Cable:</p>
                                <p>Potencia constante, más económico, ideal para uso intensivo en taller.</p>
                              </div>
                              <div className="bg-white p-3 rounded-lg">
                                <p className="font-semibold text-blue-800 mb-1">✓ A Batería:</p>
                                <p>Máxima portabilidad, perfecto para exteriores, requiere baterías de repuesto.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                            <Gauge className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-blue-900 text-xl mb-2">Potencia y Energía de Impacto</h3>
                            <div className="bg-white p-4 rounded-lg">
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li><strong className="text-blue-800">Taladro Percutor:</strong> 600-850W es suficiente</li>
                                <li><strong className="text-blue-800">Rotomartillo Doméstico:</strong> 2.5-4 J es óptimo</li>
                                <li><strong className="text-blue-800">Rotomartillo Pro:</strong> 4-8 J para construcción</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500 rounded-full p-3 flex-shrink-0">
                            <Settings className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-green-900 text-xl mb-2">Características Extra Valiosas</h3>
                            <div className="bg-white p-4 rounded-lg">
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Control de velocidad variable</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Sistema anti-vibración (AVS)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Embrague de seguridad (anti-atascamiento)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>Profundímetro ajustable</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="space-y-6">
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500 rounded-full p-3 flex-shrink-0">
                            <DollarSign className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-purple-900 text-xl mb-3">Rangos de Precio (MXN)</h3>
                            <div className="space-y-3">
                              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                                <p className="font-semibold text-yellow-900 mb-2">Taladro Percutor</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                  <li>• <strong>Básico:</strong> $800 - $1,500</li>
                                  <li>• <strong>Medio:</strong> $1,500 - $3,000</li>
                                  <li>• <strong>Profesional:</strong> $3,000 - $5,000</li>
                                </ul>
                              </div>
                              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-semibold text-blue-900 mb-2">Rotomartillo</p>
                                <ul className="space-y-1 text-sm text-gray-700">
                                  <li>• <strong>Básico:</strong> $2,000 - $3,500</li>
                                  <li>• <strong>Medio:</strong> $3,500 - $6,000</li>
                                  <li>• <strong>Profesional:</strong> $6,000 - $15,000+</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-red-400">
                        <h3 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-6 w-6" />
                          Errores Comunes al Comprar
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">
                              <strong>Comprar por precio bajo:</strong> Una herramienta barata que se quema en 6 meses sale más cara.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">
                              <strong>Ignorar el peso:</strong> Una herramienta pesada te cansará rápido en trabajos largos.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                            <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">
                              <strong>No considerar el ecosistema:</strong> Si ya tienes baterías de una marca, aprovecha la compatibilidad.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                        <h3 className="font-bold text-yellow-900 text-lg mb-3 flex items-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          Marcas Recomendadas
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-bold text-gray-900">Premium</p>
                            <p className="text-gray-600">DeWalt, Milwaukee, Hilti, Makita</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="font-bold text-gray-900">Calidad/Precio</p>
                            <p className="text-gray-600">Bosch, Truper Pro, Black+Decker</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    ❓ Preguntas Frecuentes
                  </h2>

                  <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl overflow-hidden border-2 border-orange-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                          className="w-full p-3 sm:p-4 md:p-6 text-left flex items-center justify-between hover:bg-orange-100 transition-colors"
                        >
                          <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
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
                              <div className="p-3 sm:p-4 md:p-6 pt-0 bg-white">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
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
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">🎯 La Regla de Oro</h2>
                    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl mb-6">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-4">
                        "Si es ladrillo o bloque, un buen taladro percutor es tu aliado."
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">
                        "Si vas a enfrentar concreto, no lo dudes, necesitas la fuerza de un rotomartillo."
                      </p>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      La herramienta correcta no es la más cara, sino la <strong className="text-white">más adecuada para el trabajo</strong>. 
                      Saber la diferencia es la marca de un verdadero profesional (o de un aficionado muy inteligente). 
                      <strong className="text-amber-400"> ¡Ahora estás listo para tu próximo proyecto!</strong>
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
                <RelatedArticles articles={relatedArticles} />
              </motion.section>

            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
              