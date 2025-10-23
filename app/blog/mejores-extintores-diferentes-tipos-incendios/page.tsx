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
  Flame,
  Zap,
  Droplets,
  Wind,
  Factory,
  ChefHat,
  Info,
  X,
  ChevronDown,
  TrendingUp,
  MapPin,
  Eye
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function ExtintoresArticle() {
  const [selectedFireClass, setSelectedFireClass] = useState<string | null>(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<{ message: string; correct: boolean } | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Datos de clases de fuego
  const fireClasses = [
    { 
      id: 'A', 
      name: 'Clase A', 
      pictogram: 'A', 
      color: 'from-green-500 to-emerald-600', 
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      materials: 'Sólidos Combustibles',
      examples: 'Madera, papel, tela, plásticos, cartón',
      icon: <Flame className="h-8 w-8" />
    },
    { 
      id: 'B', 
      name: 'Clase B', 
      pictogram: 'B', 
      color: 'from-red-500 to-rose-600', 
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      materials: 'Líquidos y Gases Inflamables',
      examples: 'Gasolina, aceite, pintura, propano, alcohol',
      icon: <Droplets className="h-8 w-8" />
    },
    { 
      id: 'C', 
      name: 'Clase C', 
      pictogram: 'C', 
      color: 'from-blue-500 to-indigo-600', 
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      materials: 'Equipos Eléctricos Energizados',
      examples: 'Tableros, computadoras, motores, cables',
      icon: <Zap className="h-8 w-8" />
    },
    { 
      id: 'D', 
      name: 'Clase D', 
      pictogram: 'D', 
      color: 'from-yellow-500 to-amber-600', 
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      materials: 'Metales Combustibles',
      examples: 'Magnesio, titanio, sodio, litio, potasio',
      icon: <Factory className="h-8 w-8" />
    },
    { 
      id: 'K', 
      name: 'Clase K', 
      pictogram: 'K', 
      color: 'from-purple-500 to-fuchsia-600', 
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      materials: 'Aceites y Grasas de Cocina',
      examples: 'Aceites vegetales, mantecas, grasas animales',
      icon: <ChefHat className="h-8 w-8" />
    }
  ];

  // Datos de extintores
  const extinguishers = [
    { 
      id: 'AP', 
      name: 'Agua a Presión', 
      effective: ['A'], 
      ineffective: ['B', 'C', 'D', 'K'],
      description: 'Enfriamiento por absorción de calor. Solo para sólidos combustibles.',
      pros: ['Económico', 'Fácil recarga', 'No tóxico', 'Abundante'],
      cons: ['Conduce electricidad (peligro mortal)', 'Esparce líquidos inflamables', 'Inútil en metales'],
      color: 'blue',
      mechanism: 'Absorbe el calor latente del fuego, enfriando el material por debajo de su punto de ignición'
    },
    { 
      id: 'PQS', 
      name: 'Polvo Químico Seco (ABC)', 
      effective: ['A', 'B', 'C'], 
      ineffective: ['D', 'K'],
      description: 'El más versátil. Sofoca y rompe la reacción en cadena del fuego.',
      pros: ['Multiuso ABC', 'Efectivo rápido', 'No conductor', 'Económico'],
      cons: ['Residuo corrosivo', 'Daña electrónica', 'Reduce visibilidad', 'Requiere limpieza profunda'],
      color: 'red',
      mechanism: 'Fosfato monoamónico que sofoca y crea una barrera química que interrumpe la reacción en cadena'
    },
    { 
      id: 'CO2', 
      name: 'Dióxido de Carbono (CO₂)', 
      effective: ['B', 'C'], 
      ineffective: ['A', 'D', 'K'],
      description: 'Desplaza el oxígeno. Ideal para equipos electrónicos delicados.',
      pros: ['Sin residuo', 'No conductor', 'Perfecto para electrónica', 'No daña equipos'],
      cons: ['Ineficaz en exteriores (viento)', 'Riesgo de asfixia', 'No enfría profundamente', 'Caro'],
      color: 'gray',
      mechanism: 'Gas que desplaza el oxígeno (sofocación) y enfría ligeramente. No deja rastro.'
    },
    { 
      id: 'WET', 
      name: 'Químico Húmedo (Clase K)', 
      effective: ['K', 'A'], 
      ineffective: ['B', 'C', 'D'],
      description: 'Especialista en cocinas. Crea una capa jabonosa que enfría y previene reignición.',
      pros: ['Único para Clase K', 'Enfriamiento efectivo', 'Previene reignición', 'Seguro en cocinas'],
      cons: ['Uso muy específico', 'No multiuso', 'Requiere aplicación continua'],
      color: 'purple',
      mechanism: 'Acetato de potasio que reacciona con grasa caliente (saponificación), creando una capa aislante'
    },
    { 
      id: 'SPEC', 
      name: 'Agentes Especiales (Clase D)', 
      effective: ['D'], 
      ineffective: ['A', 'B', 'C', 'K'],
      description: 'Polvos específicos para cada metal combustible. Muy especializados.',
      pros: ['Único para metales', 'Altamente efectivo', 'Previene reacciones'],
      cons: ['Muy específico', 'Costoso', 'Requiere identificación precisa', 'Poco común'],
      color: 'yellow',
      mechanism: 'Polvos que forman una costra que sofoca y aísla el metal en combustión del oxígeno'
    }
  ];

  // Datos de quiz
  const quizQuestions = [
    { 
      question: "Un cortocircuito inicia un fuego en una sala de servidores. ¿Qué extintor usas?", 
      options: ['Agua a Presión', 'Dióxido de Carbono (CO₂)', 'Químico Húmedo', 'Polvo Químico Seco'], 
      answer: 'Dióxido de Carbono (CO₂)',
      explanation: 'CO₂ es ideal para fuegos eléctricos porque no conduce electricidad y no deja residuo que dañe equipos electrónicos.'
    },
    { 
      question: "Se derrama gasolina en el taller y se enciende. ¿Cuál es tu elección?", 
      options: ['Agua a Presión', 'Polvo Químico Seco (ABC)', 'Químico Húmedo'], 
      answer: 'Polvo Químico Seco (ABC)',
      explanation: 'El PQS ABC es efectivo contra líquidos inflamables (Clase B). NUNCA uses agua, esparcirá el fuego.'
    },
    { 
      question: "Una papelera con documentos está ardiendo. ¿Cuál es la opción más simple?", 
      options: ['Agua a Presión', 'Agentes Especiales', 'CO₂'], 
      answer: 'Agua a Presión',
      explanation: 'Para fuegos Clase A (sólidos combustibles como papel), el agua es la opción más simple, económica y efectiva.'
    },
    { 
      question: "Una freidora industrial está en llamas. ¿Qué extintor buscas?", 
      options: ['Dióxido de Carbono (CO₂)', 'Químico Húmedo', 'Agua a Presión'], 
      answer: 'Químico Húmedo',
      explanation: 'El químico húmedo (Clase K) es el ÚNICO seguro para aceites de cocina. Crea una capa que evita reignición.'
    },
    {
      question: "Virutas de magnesio se incendian en un taller metalúrgico. ¿Qué haces?",
      options: ['Agua a Presión', 'Polvo Químico Seco', 'Agentes Especiales (Clase D)'],
      answer: 'Agentes Especiales (Clase D)',
      explanation: 'Los metales combustibles requieren agentes especiales. Agua o PQS pueden causar reacciones violentas.'
    }
  ];

  // Datos de ubicación estratégica
  const strategicLocations = [
    {
      location: 'Oficinas / Áreas Administrativas',
      risks: ['Clase A (papel, muebles)', 'Clase C (equipos eléctricos)'],
      recommended: 'PQS ABC (10 lb) o CO₂ (10 lb)',
      quantity: '1 cada 25 metros',
      notes: 'Cerca de salidas y pasillos principales'
    },
    {
      location: 'Cocinas Comerciales',
      risks: ['Clase K (aceites)', 'Clase A (madera, tela)'],
      recommended: 'Químico Húmedo (Clase K) obligatorio + PQS ABC',
      quantity: '1 Clase K por cada estación de cocción',
      notes: 'Instalación profesional con sistema fijo recomendado'
    },
    {
      location: 'Talleres / Almacenes',
      risks: ['Clase A (madera, plásticos)', 'Clase B (solventes)', 'Clase C (herramientas)'],
      recommended: 'PQS ABC (20 lb)',
      quantity: '1 cada 15 metros',
      notes: 'Adicional cerca de áreas de soldadura y líquidos inflamables'
    },
    {
      location: 'Salas de Servidores / Centros de Datos',
      risks: ['Clase C (equipos eléctricos)'],
      recommended: 'CO₂ (20 lb) o Agentes Limpios',
      quantity: '1 cada 10 metros',
      notes: 'NUNCA usar PQS (daña equipos). Sistema de supresión automática ideal.'
    },
    {
      location: 'Estacionamientos / Garajes',
      risks: ['Clase A (tapicería)', 'Clase B (gasolina)'],
      recommended: 'PQS ABC (20 lb)',
      quantity: '1 cada 30 metros',
      notes: 'Visible y accesible, protegido de vandalismo'
    }
  ];

  // Datos para el gráfico de versatilidad
  const versatilityChartData = {
    labels: ['PQS (ABC)', 'CO₂', 'Químico Húmedo', 'Agua a Presión', 'Agentes Especiales'],
    datasets: [{
      label: 'Clases de Fuego Cubiertas',
      data: [3, 2, 2, 1, 1],
      backgroundColor: [
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(234, 179, 8, 0.8)'
      ],
      borderColor: [
        'rgb(220, 38, 38)',
        'rgb(75, 85, 99)',
        'rgb(147, 51, 234)',
        'rgb(37, 99, 235)',
        'rgb(202, 138, 4)'
      ],
      borderWidth: 2
    }]
  };

  const versatilityChartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Cubre ${context.parsed.x} tipo(s) de fuego común`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 5,
        ticks: { stepSize: 1 }
      }
    }
  };

  // Datos para gráfico de estadísticas
  const statsChartData = {
    labels: ['Fuegos Clase A', 'Fuegos Clase B', 'Fuegos Clase C', 'Fuegos Clase K', 'Otros'],
    datasets: [{
      data: [45, 25, 20, 8, 2],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(234, 179, 8, 0.8)'
      ],
      borderColor: '#FFFFFF',
      borderWidth: 3
    }]
  };

  const statsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          padding: 15,
          font: { size: 12 }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

  const handleQuizAnswer = (selected: string) => {
    const currentQuestion = quizQuestions[currentQuizIndex];
    const isCorrect = selected === currentQuestion.answer;
    
    setQuizFeedback({
      message: isCorrect ? '¡Correcto! ' + currentQuestion.explanation : `Incorrecto. ${currentQuestion.explanation}`,
      correct: isCorrect
    });

    setTimeout(() => {
      setQuizFeedback(null);
      setCurrentQuizIndex((currentQuizIndex + 1) % quizQuestions.length);
    }, 4000);
  };

  // FAQs
  const faqs = [
    {
      question: "¿Cuándo debo inspeccionar mi extintor?",
      answer: "Mensualmente: verifica presión, pin de seguridad, manguera y sello. Anualmente: inspección profesional con prueba hidrostática cada 5-12 años según el tipo. Un extintor sin mantenimiento puede fallar cuando más lo necesitas."
    },
    {
      question: "¿Puedo usar un extintor ABC en un fuego eléctrico sin riesgo?",
      answer: "Sí, el polvo químico seco ABC no conduce electricidad y es seguro para fuegos Clase C. Sin embargo, dejará residuo corrosivo en equipos electrónicos. Para equipos delicados (servidores, laboratorios), usa CO₂ o agentes limpios."
    },
    {
      question: "¿Por qué NUNCA debo usar agua en un fuego de aceite de cocina?",
      answer: "El agua es más densa que el aceite y se hunde. Al tocar el aceite súper caliente (300°C+), se convierte instantáneamente en vapor, expandiéndose 1,700 veces. Esto expulsa el aceite en llamas hacia arriba en una explosión de bola de fuego. SOLO usa extintores Clase K."
    },
    {
      question: "¿Qué hago si el fuego es demasiado grande para mi extintor?",
      answer: "Evacúa inmediatamente y llama al 911. Un extintor portátil promedio dura 10-20 segundos. Si el fuego es más grande que un bote de basura, está creciendo rápidamente, o el humo te impide ver, NO intentes combatirlo. Tu vida vale más que cualquier propiedad."
    },
    {
      question: "¿Los extintores caducan?",
      answer: "No exactamente, pero pierden efectividad. Los desechables duran 10-12 años. Los recargables pueden durar décadas CON mantenimiento. La presión del manómetro debe estar en la zona verde. Si la aguja está en rojo, el extintor está despresurizado y es inútil."
    },
    {
      question: "¿Puedo recargar mi extintor después de usarlo parcialmente?",
      answer: "Sí y DEBES hacerlo. Incluso si solo lo descargaste 2 segundos, ha perdido presión y el sello está roto. Un extintor parcialmente usado es poco confiable. La recarga profesional cuesta $200-500 MXN, mucho menos que un nuevo extintor."
    }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: 'article-1',
      title: 'Guía Definitiva de EPP',
      excerpt: 'Todo sobre Equipos de Protección Personal para tu seguridad',
      category: 'Seguridad',
      publishDate: '2 Oct 2025',
      readTime: '22 min',
      slug: 'guia-completa-epp-seguridad-industrial'
    },
    {
      id: 'article-2',
      title: 'Protección Auditiva: Tapones vs Orejeras',
      excerpt: 'Análisis completo con ciencia y matriz de decisión',
      category: 'EPP',
      publishDate: '3 Oct 2025',
      readTime: '25 min',
      slug: 'proteccion-auditiva-trabajo-tapones-vs-orejeras'
    },
    {
      id: 'article-3',
      title: 'NOM-009-STPS: Trabajos en Altura',
      excerpt: '7 puntos clave para supervisores de seguridad',
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
        <section className="bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`hero-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${20 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
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
                className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 rounded-full px-4 py-2 text-red-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Flame className="h-4 w-4" />
                🔥 Seguridad contra Incendios
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                La Guía Definitiva de Extintores
              </motion.h1>
              
              <motion.p 
                className="text-xl text-red-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Saber cuál usar es la diferencia entre la seguridad y el desastre. 
                Una guía interactiva para tomar la decisión correcta en segundos.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 text-sm text-red-200"
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
                  28 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${20 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
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
              
              {/* Introducción Dramática */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 p-4 sm:p-6 md:p-8 rounded-r-2xl">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-center font-semibold">
                      🚨 Suena la alarma. El fuego proviene de un panel eléctrico. 
                      Corres hacia el extintor más cercano, pero te detienes...
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed text-center">
                      <strong className="text-red-600">¿El que tienes en las manos te salvará... o te electrocutará?</strong>
                    </p>
                  </div>

                  <div className="mt-8 grid md:grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200 text-center">
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">⏱️</div>
                      <p className="font-bold text-red-900 mb-2">10-20 segundos</p>
                      <p className="text-gray-600 text-sm">Duración promedio de un extintor portátil</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-200 text-center">
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">🔥</div>
                      <p className="font-bold text-yellow-900 mb-2">70% de fuegos</p>
                      <p className="text-gray-600 text-sm">Se pueden controlar con el extintor correcto en los primeros 3 minutos</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200 text-center">
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-3">⚡</div>
                      <p className="font-bold text-purple-900 mb-2">Decisión crítica</p>
                      <p className="text-gray-600 text-sm">Usar el extintor INCORRECTO puede ser letal</p>
                    </div>
                  </div>

                  <div className="mt-8 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                    <p className="text-center text-lg text-gray-800">
                      Esta guía interactiva te dará el <strong className="text-blue-900">conocimiento para actuar con confianza y seguridad</strong>, 
                      eliminando esa duda paralizante para siempre.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Estadísticas de Incendios */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
                    📊 Distribución de Incendios por Clase
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 items-center">
                    <div>
                      <div className="relative w-full" style={{ height: '350px' }}>
                        <Doughnut data={statsChartData} options={statsChartOptions} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                        <p className="font-bold text-green-900 mb-2">Clase A (45%) - Más Común</p>
                        <p className="text-gray-700 text-sm">
                          Los fuegos de sólidos combustibles son los más frecuentes en hogares y oficinas
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                        <p className="font-bold text-red-900 mb-2">Clase B (25%) - Alta Peligrosidad</p>
                        <p className="text-gray-700 text-sm">
                          Líquidos inflamables se propagan rápidamente y requieren acción inmediata
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                        <p className="font-bold text-blue-900 mb-2">Clase C (20%) - Más Letal</p>
                        <p className="text-gray-700 text-sm">
                          Fuegos eléctricos causan más fatalidades por usar extintor incorrecto
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                        <p className="font-bold text-purple-900 mb-2">Clase K (8%) - Especializado</p>
                        <p className="text-gray-700 text-sm">
                          Cocinas comerciales requieren extintores específicos por ley
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Sección Principal: Matriz Interactiva */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🎯 Matriz Interactiva: Fuego vs. Extintor
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    <strong>Primero, selecciona un tipo de fuego</strong> para descubrir qué extintor es el adecuado. 
                    La elección correcta es crucial y puede salvar vidas.
                  </p>

                  {/* Grid de Clases de Fuego */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4 sm:mb-6 md:mb-8">
                    {fireClasses.map((fc) => (
                      <motion.div
                        key={fc.id}
                        onClick={() => setSelectedFireClass(fc.id)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`cursor-pointer bg-white p-6 rounded-xl shadow-lg border-4 transition-all ${
                          selectedFireClass === fc.id
                            ? `${fc.borderColor} shadow-2xl`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${fc.color} rounded-full flex items-center justify-center text-white mb-4 shadow-lg`}>
                          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{fc.pictogram}</span>
                        </div>
                        <h3 className="font-bold text-center text-gray-900 mb-2">{fc.name}</h3>
                        <p className="text-sm text-center text-gray-600 font-semibold mb-1">{fc.materials}</p>
                        <p className="text-xs text-center text-gray-500">{fc.examples}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Info de Fuego Seleccionado */}
                  <AnimatePresence>
                    {selectedFireClass && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 sm:mb-6 md:mb-8"
                      >
                        {(() => {
                          const selected = fireClasses.find(fc => fc.id === selectedFireClass);
                          return selected ? (
                            <div className={`p-6 ${selected.bgColor} border-l-4 ${selected.borderColor} rounded-r-xl`}>
                              <p className="text-center text-lg">
                                <strong className="text-gray-900">Mostrando extintores para Fuego Clase {selected.pictogram}:</strong>
                                <span className="text-gray-700"> {selected.materials}</span>
                              </p>
                            </div>
                          ) : null;
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Grid de Extintores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {extinguishers.map((ex) => {
                      const isEffective = selectedFireClass && ex.effective.includes(selectedFireClass);
                      const isIneffective = selectedFireClass && ex.ineffective.includes(selectedFireClass);
                      
                      return (
                        <motion.div
                          key={ex.id}
                          initial={{ opacity: 0.7 }}
                          animate={{ 
                            opacity: selectedFireClass ? (isEffective || isIneffective ? 1 : 0.4) : 1,
                            scale: isEffective || isIneffective ? 1.02 : 1
                          }}
                          className={`p-6 rounded-xl shadow-lg border-4 transition-all ${
                            isEffective 
                              ? 'bg-green-50 border-green-500' 
                              : isIneffective 
                              ? 'bg-red-50 border-red-500' 
                              : 'bg-white border-gray-200'
                          }`}
                        >
                          {isEffective && (
                            <div className="mb-4 flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg font-bold">
                              <CheckCircle className="h-5 w-5" />
                              EFECTIVO
                            </div>
                          )}
                          {isIneffective && (
                            <div className="mb-4 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg font-bold">
                              <X className="h-5 w-5" />
                              PELIGROSO / INEFECTIVO
                            </div>
                          )}
                          
                          <h3 className="font-bold text-xl text-gray-900 mb-3">{ex.name}</h3>
                          <p className="text-gray-700 mb-4">{ex.description}</p>
                          
                          <div className="mb-4">
                            <p className="font-semibold text-gray-800 mb-2">Mecanismo:</p>
                            <p className="text-sm text-gray-600 bg-white p-3 rounded-lg">{ex.mechanism}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold text-green-800 mb-2 text-sm">✓ Pros:</p>
                              <ul className="space-y-1">
                                {ex.pros.slice(0, 3).map((pro, idx) => (
                                  <li key={idx} className="text-xs text-gray-600">• {pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-red-800 mb-2 text-sm">✗ Contras:</p>
                              <ul className="space-y-1">
                                {ex.cons.slice(0, 3).map((con, idx) => (
                                  <li key={idx} className="text-xs text-gray-600">• {con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.section>
              {/* Gráfico de Versatilidad */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    📈 Versatilidad de los Extintores
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Este gráfico muestra cuántos tipos de fuego comunes (A, B, C) puede combatir cada agente extintor, 
                    destacando al <strong className="text-red-600">PQS (ABC)</strong> como el más polivalente para emergencias generales.
                  </p>
                  
                  <div className="relative w-full max-w-4xl mx-auto" style={{ height: '400px' }}>
                    <Bar data={versatilityChartData} options={versatilityChartOptions} />
                  </div>

                  <div className="mt-8 grid md:grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                      <h3 className="font-bold text-red-900 mb-3 text-lg flex items-center gap-2">
                        <TrendingUp className="h-6 w-6" />
                        Recomendación General
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Para la mayoría de los espacios (oficinas, hogares, talleres), el <strong>PQS ABC</strong> es la elección más práctica. 
                        Cubre el 90% de los incendios comunes y es relativamente económico.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                      <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                        <Info className="h-6 w-6" />
                        Consideración Importante
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        La versatilidad tiene un costo: el residuo del PQS es corrosivo. Para equipos delicados 
                        (servidores, laboratorios), complementa con <strong>CO₂</strong> o agentes limpios.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Técnica P.A.S.O. */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🎯 Cómo Usar un Extintor: La Técnica P.A.S.O.
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Recordar este acrónimo universal puede salvar vidas. Actúa con <strong>rapidez y precisión</strong> bajo presión.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 sm:mb-6 md:mb-8">
                    {[
                      {
                        letter: 'P',
                        title: 'PULL (TIRA)',
                        description: 'Tira del pasador de seguridad. Esto romperá el sello y permitirá activar el extintor.',
                        color: 'from-red-500 to-orange-500',
                        icon: '🔓'
                      },
                      {
                        letter: 'A',
                        title: 'AIM (APUNTA)',
                        description: 'Apunta la boquilla o manguera hacia la BASE del fuego, no a las llamas.',
                        color: 'from-blue-500 to-indigo-500',
                        icon: '🎯'
                      },
                      {
                        letter: 'S',
                        title: 'SQUEEZE (APRIETA)',
                        description: 'Aprieta la palanca de forma suave y uniforme para liberar el agente extintor.',
                        color: 'from-purple-500 to-pink-500',
                        icon: '✊'
                      },
                      {
                        letter: 'O',
                        title: 'OPERATE (OPERA)',
                        description: 'Mueve la boquilla de lado a lado, abanicando la base del fuego hasta extinguirlo.',
                        color: 'from-green-500 to-emerald-500',
                        icon: '↔️'
                      }
                    ].map((paso, index) => (
                      <motion.div
                        key={paso.letter}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all"
                      >
                        <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${paso.color} rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-lg`}>
                          {paso.letter}
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-3">{paso.icon}</div>
                        <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{paso.title}</h3>
                        <p className="text-gray-600 text-center leading-relaxed">{paso.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-yellow-300">
                    <h3 className="font-bold text-yellow-900 mb-4 text-xl text-center flex items-center justify-center gap-2">
                      <AlertTriangle className="h-6 w-6" />
                      Reglas de Oro para Usar un Extintor
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Mantén una Vía de Escape</p>
                            <p className="text-sm text-gray-600">NUNCA te posiciones entre el fuego y la salida</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Distancia de Seguridad</p>
                            <p className="text-sm text-gray-600">Mantente a 1.5-2 metros del fuego</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Apunta a la Base</p>
                            <p className="text-sm text-gray-600">No a las llamas, sino al material que arde</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Fuego Demasiado Grande</p>
                            <p className="text-sm text-gray-600">Si es más grande que un bote de basura, evacúa y llama al 911</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Humo Denso</p>
                            <p className="text-sm text-gray-600">Si no puedes respirar o ver, sal inmediatamente</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Fuego se Extiende Rápido</p>
                            <p className="text-sm text-gray-600">Tu vida vale más que cualquier propiedad</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Ubicación Estratégica */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    📍 Ubicación Estratégica de Extintores
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    La <strong>ubicación correcta</strong> es tan importante como tener el extintor correcto. 
                    Un extintor inaccesible es inútil en una emergencia.
                  </p>

                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                      Selecciona un Tipo de Ubicación
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 mb-4 sm:mb-6 md:mb-8">
                      {strategicLocations.map((loc, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedLocation(loc.location)}
                          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                            selectedLocation === loc.location
                              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300 hover:bg-red-50'
                          }`}
                        >
                          {loc.location}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {selectedLocation && (
                      <motion.div
                        key={selectedLocation}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-orange-300"
                      >
                        {(() => {
                          const loc = strategicLocations.find(l => l.location === selectedLocation);
                          return loc ? (
                            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
                              <div>
                                <div className="flex items-center gap-3 mb-4">
                                  <MapPin className="h-8 w-8 text-red-600" />
                                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{loc.location}</h3>
                                </div>
                                
                                <div className="space-y-4">
                                  <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-red-900 mb-2">🔥 Riesgos Principales:</p>
                                    <ul className="space-y-1">
                                      {loc.risks.map((risk, idx) => (
                                        <li key={idx} className="text-gray-700 text-sm">• {risk}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-green-900 mb-2">✅ Extintor Recomendado:</p>
                                    <p className="text-gray-700 font-semibold">{loc.recommended}</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="space-y-4">
                                  <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-blue-900 mb-2">📊 Cantidad Requerida:</p>
                                    <p className="text-gray-700">{loc.quantity}</p>
                                  </div>

                                  <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-purple-900 mb-2">💡 Notas Importantes:</p>
                                    <p className="text-gray-700">{loc.notes}</p>
                                  </div>

                                  <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-400">
                                    <p className="font-bold text-yellow-900 mb-2">⚠️ Normativa:</p>
                                    <p className="text-yellow-800 text-sm">
                                      Según NFPA 10, ningún punto debe estar a más de 23 metros (75 pies) 
                                      de un extintor Clase A, o 15 metros (50 pies) de un extintor Clase B.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 grid md:grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 text-center">👁️</div>
                      <h4 className="font-bold text-blue-900 mb-2 text-center">Visibilidad</h4>
                      <p className="text-gray-700 text-sm text-center">
                        Señalización clara a 1.2-1.5m del suelo. Iluminación de emergencia si hay cortes de luz.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 text-center">🚪</div>
                      <h4 className="font-bold text-green-900 mb-2 text-center">Accesibilidad</h4>
                      <p className="text-gray-700 text-sm text-center">
                        Sin obstrucciones. Cerca de salidas pero no bloqueando vías de escape.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 text-center">🔒</div>
                      <h4 className="font-bold text-purple-900 mb-2 text-center">Protección</h4>
                      <p className="text-gray-700 text-sm text-center">
                        Protegido de daños físicos, temperaturas extremas y vandalismo.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Mantenimiento y Vida Útil */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🔧 Mantenimiento: La Clave de la Confiabilidad
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    Un extintor sin mantenimiento es un <strong className="text-red-600">peligro disfrazado de seguridad</strong>. 
                    Puede fallar justo cuando más lo necesitas.
                  </p>

                  <div className="grid md:grid-cols-3 gap-3 mb-4 sm:mb-6 md:mb-8">
                    <motion.div 
                      className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-4 text-center">📅</div>
                      <h3 className="font-bold text-green-900 mb-3 text-center text-xl">Inspección Mensual</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Verificar presión (aguja en zona verde)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Pin de seguridad intacto y sello sin romper</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Manguera sin grietas o daños</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Boquilla sin obstrucciones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Etiqueta de inspección visible</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-4 text-center">🔍</div>
                      <h3 className="font-bold text-blue-900 mb-3 text-center text-xl">Inspección Anual</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Revisión profesional completa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Verificación de peso del agente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Prueba de componentes mecánicos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Actualización de etiquetas y registros</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Certificación de cumplimiento NFPA</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 to-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl sm:text-4xl md:text-5xl mb-4 text-center">🔬</div>
                      <h3 className="font-bold text-orange-900 mb-3 text-center text-xl">Prueba Hidrostática</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Cada 5 años</strong> para PQS y CO₂</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Cada 12 años</strong> para agua a presión</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Prueba la integridad del cilindro bajo presión</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Debe realizarse por técnico certificado</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Costo: $500-1,000 MXN</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-red-400">
                    <h3 className="font-bold text-red-900 mb-6 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center gap-2">
                      <AlertTriangle className="h-8 w-8" />
                      Señales de que tu Extintor DEBE Reemplazarse
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-red-200">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Manómetro en Zona Roja</p>
                            <p className="text-sm text-gray-600">Despresurizado = inútil. No intentes usarlo.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-red-200">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Corrosión o Daño Físico</p>
                            <p className="text-sm text-gray-600">Abolladuras, óxido o fugas comprometen la seguridad.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-red-200">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Sello Roto o Pin Faltante</p>
                            <p className="text-sm text-gray-600">Indica uso previo o manipulación. Recarga obligatoria.</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-red-200">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Manguera Agrietada o Dura</p>
                            <p className="text-sm text-gray-600">Puede romperse bajo presión durante uso.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-red-200">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Etiqueta Ilegible o Faltante</p>
                            <p className="text-sm text-gray-600">No puedes verificar tipo, fecha o historial.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-2 border-red-200">
                          <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-900 mb-1">Más de 10-12 Años (Desechables)</p>
                            <p className="text-sm text-gray-600">Incluso sin uso, los componentes se degradan.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Quiz Interactivo */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
                    🧠 Pon a Prueba tu Conocimiento
                  </h2>
                  <p className="text-center text-gray-600 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto text-lg">
                    La teoría es importante, pero <strong>aplicarla a escenarios reales es clave</strong>. 
                    Elige el extintor correcto para cada situación de emergencia.
                  </p>

                  <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-blue-900">
                          Pregunta {currentQuizIndex + 1} de {quizQuestions.length}
                        </span>
                        <div className="flex gap-2">
                          {quizQuestions.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-3 h-3 rounded-full ${
                                idx === currentQuizIndex ? 'bg-blue-600' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xl font-bold text-gray-900 text-center mb-6">
                        {quizQuestions[currentQuizIndex].question}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {quizQuestions[currentQuizIndex].options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => !quizFeedback && handleQuizAnswer(option)}
                          disabled={!!quizFeedback}
                          whileHover={{ scale: quizFeedback ? 1 : 1.05 }}
                          whileTap={{ scale: quizFeedback ? 1 : 0.95 }}
                          className={`p-4 rounded-xl font-semibold transition-all ${
                            quizFeedback
                              ? option === quizQuestions[currentQuizIndex].answer
                                ? 'bg-green-500 text-white border-4 border-green-700'
                                : 'bg-gray-200 text-gray-500'
                              : 'bg-white hover:bg-blue-100 text-gray-800 border-2 border-gray-300 hover:border-blue-400'
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {quizFeedback && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className={`p-6 rounded-xl ${
                            quizFeedback.correct
                              ? 'bg-green-100 border-2 border-green-500'
                              : 'bg-red-100 border-2 border-red-500'
                          }`}
                        >
                          <p className={`font-bold text-xl mb-2 ${
                            quizFeedback.correct ? 'text-green-900' : 'text-red-900'
                          }`}>
                            {quizFeedback.correct ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                          </p>
                          <p className="text-gray-700">{quizFeedback.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
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
                        className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl overflow-hidden border-2 border-orange-200"
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
                transition={{ delay: 1.8 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 p-4 sm:p-6 md:p-8 lg:p-10 rounded-r-3xl shadow-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-red-500 rounded-full p-4 flex-shrink-0">
                      <Flame className="text-white h-12 w-12" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-900 mb-4">
                        Tu Conocimiento es tu Primera Línea de Defensa
                      </h2>
                      <p className="text-xl text-gray-800 leading-relaxed mb-6">
                        La efectividad ante un conato de incendio depende <strong className="text-red-600">90% del conocimiento previo</strong> 
                        y 10% de la acción. Un extintor es inútil en manos de alguien que no sabe cuándo, dónde y cómo usarlo.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                      Las 3 Reglas de Oro para Extintores
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">1</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Conoce tu Fuego</h4>
                        <p className="text-gray-700 text-sm">
                          Identifica la clase antes de actuar. Un error puede ser letal.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">2</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Mantén tus Extintores</h4>
                        <p className="text-gray-700 text-sm">
                          Inspección mensual y mantenimiento anual son obligatorios, no opcionales.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">3</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Tu Vida Primero</h4>
                        <p className="text-gray-700 text-sm">
                          Si el fuego es demasiado grande, evacúa y llama al 911. No seas héroe.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-400">
                    <p className="text-center text-xl text-gray-900 leading-relaxed">
                      <strong className="text-orange-900">Conocer las clases de fuego y la ubicación de los extintores correctos 
                      es una responsabilidad compartida.</strong> No esperes a que sea demasiado tarde para aprender.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Artículos Relacionados */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 }}
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