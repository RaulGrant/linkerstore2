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
  Wind,
  Flame,
  Skull,
  Activity,
  Radio,
  Database,
  Wifi,
  ChevronDown,
  Info,
  X,
  Eye,
  TrendingUp,
  Zap,
  TestTube
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function MonitoresGasesArticle() {
  const [activeGas, setActiveGas] = useState<string>('o2');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedDetector, setSelectedDetector] = useState<'monogas' | 'multigas'>('multigas');

  // Datos de los "4 Grandes" gases
  const gasesData = {
    o2: {
      id: 'o2',
      title: 'Oxígeno (O₂)',
      icon: <Wind className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      description: 'El aire que respiramos puede ser tan peligroso por deficiencia como por exceso. Los niveles normales de oxígeno son del 20.9%.',
      normalLevel: '20.9%',
      dangerLevels: [
        { level: '<19.5%', danger: 'Deficiencia', description: 'Causa asfixia, mareos, pérdida de consciencia y la muerte.', color: 'bg-yellow-400' },
        { level: '>23.5%', danger: 'Enriquecimiento', description: 'Aumenta drásticamente el riesgo de incendio y explosión. Los materiales se vuelven extremadamente inflamables.', color: 'bg-red-500' }
      ],
      effects: [
        { percentage: '19.5%', effect: 'Mínimo seguro - umbral legal' },
        { percentage: '16%', effect: 'Ritmo cardíaco aumentado, coordinación afectada' },
        { percentage: '14%', effect: 'Fatiga anormal, mal juicio' },
        { percentage: '<10%', effect: 'Incapacidad de moverse, pérdida de conciencia, muerte' }
      ],
      chartData: {
        labels: ['Deficiencia (<19.5%)', 'Seguro (19.5-23.5%)', 'Enriquecimiento (>23.5%)'],
        datasets: [{
          data: [19.5, 4, 2.5],
          backgroundColor: ['#facc15', '#22c55e', '#ef4444'],
          borderColor: '#ffffff',
          borderWidth: 3
        }]
      }
    },
    lel: {
      id: 'lel',
      title: 'Gases Explosivos (% LEL)',
      icon: <Flame className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      description: 'LEL significa "Límite Inferior de Explosividad". Es la concentración mínima de un gas en el aire necesaria para que pueda explotar.',
      normalLevel: '0% LEL',
      dangerLevels: [
        { level: '10% LEL', danger: 'Alarma Temprana', description: 'Estás al 10% de la concentración mínima para una explosión. Evacuación inmediata.', color: 'bg-orange-400' },
        { level: '100% LEL', danger: 'Punto de No Retorno', description: 'La atmósfera es explosiva. Cualquier fuente de ignición causará una deflagración.', color: 'bg-red-600' }
      ],
      examples: [
        { gas: 'Metano (CH₄)', lel: '5% vol', use: 'Gas natural' },
        { gas: 'Propano (C₃H₈)', lel: '2.1% vol', use: 'Gas LP' },
        { gas: 'Gasolina', lel: '1.4% vol', use: 'Combustible' }
      ],
      chartData: {
        labels: ['0-10% LEL (Seguro)', '10-25% LEL (Alarma)', '25-100% LEL (Peligro)', '>100% LEL (Explosivo)'],
        datasets: [{
          label: 'Nivel de Riesgo',
          data: [10, 15, 75, 100],
          backgroundColor: ['#22c55e', '#f97316', '#ef4444', '#7f1d1d'],
          borderWidth: 0
        }]
      }
    },
    co: {
      id: 'co',
      title: 'Monóxido de Carbono (CO)',
      icon: <Skull className="h-8 w-8" />,
      color: 'from-gray-600 to-slate-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      description: 'Conocido como "el asesino silencioso", es un gas incoloro e inodoro, subproducto de la combustión incompleta. Es extremadamente tóxico.',
      normalLevel: '0 ppm',
      dangerLevels: [
        { level: '35 ppm', danger: 'Límite NIOSH (8h)', description: 'Exposición máxima recomendada para jornada laboral completa.', color: 'bg-yellow-400' },
        { level: '200 ppm', danger: 'Dolor de Cabeza', description: 'Dolor de cabeza leve en 2-3 horas.', color: 'bg-orange-400' },
        { level: '1,200 ppm', danger: 'IDLH', description: 'Inmediatamente Peligroso para la Vida o la Salud. Pérdida de conciencia.', color: 'bg-red-600' }
      ],
      mechanism: {
        title: 'Mecanismo de Acción',
        description: 'Se adhiere a la hemoglobina de la sangre 220 veces más fácilmente que el oxígeno, formando carboxihemoglobina (COHb) e impidiendo el transporte de oxígeno.',
        symptoms: ['Dolor de cabeza', 'Náuseas', 'Mareos', 'Confusión', 'Pérdida de conciencia']
      },
      sources: ['Motores de combustión', 'Calderas y hornos', 'Carretillas elevadoras', 'Generadores', 'Calentadores']
    },
    h2s: {
      id: 'h2s',
      title: 'Ácido Sulfhídrico (H₂S)',
      icon: <AlertTriangle className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      description: 'Famoso por su olor a "huevo podrido", este gas es común en la industria petrolera. Su mayor peligro es que anula el sentido del olfato.',
      normalLevel: '0 ppm',
      dangerLevels: [
        { level: '1 ppm', danger: 'TLV ACGIH', description: 'Límite recomendado para exposición de 8 horas.', color: 'bg-yellow-400' },
        { level: '10 ppm', danger: 'Límite NIOSH', description: 'Irritación de ojos y vías respiratorias.', color: 'bg-orange-400' },
        { level: '100 ppm', danger: 'IDLH + Fatiga Olfativa', description: 'Paraliza el nervio olfativo. Ya no hueles el gas pero es letal.', color: 'bg-red-600' }
      ],
      mechanism: {
        title: 'El Engaño Mortal: Fatiga Olfativa',
        description: 'A concentraciones superiores a 100-150 ppm, el H₂S paraliza el nervio olfativo, eliminando la capacidad de olerlo. El trabajador cree que el peligro ha pasado cuando en realidad está en niveles letales.',
        symptoms: ['Irritación ocular', 'Irritación respiratoria', 'Colapso súbito ("knockdown")', 'Parálisis respiratoria', 'Convulsiones']
      },
      sources: ['Industria petrolera ("gas agrio")', 'Plantas de pulpa y papel', 'Alcantarillado', 'Tratamiento de aguas residuales', 'Fosas de estiércol']
    }
  };

  // Datos para gráfico de fatalidades
  const fatalidadesChartData = {
    labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    datasets: [{
      label: 'Muertes en Espacios Confinados (EE.UU.)',
      data: [94, 123, 112, 143, 136, 156, 166, 100],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4
    }]
  };

  const fatalidadesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y} fatalidades`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Número de Muertes'
        }
      }
    }
  };

  // FAQs
  const faqs = [
    {
      question: '¿Por qué es tan crítico hacer el "bump test" diariamente?',
      answer: 'Un monitor sin verificar es más peligroso que no tener monitor. Crea una falsa sensación de seguridad que puede llevar a un trabajador a asumir riesgos que de otro modo evitaría. Si el sensor está obstruido o ha fallado, el trabajador avanza hacia una atmósfera peligrosa creyendo que está protegido. El bump test diario transforma el dispositivo de un posible placebo en una herramienta de salvamento verificada.'
    },
    {
      question: '¿Cuál es la diferencia entre bump test y calibración?',
      answer: 'El bump test es una verificación cualitativa de "pasa/falla" que confirma que el gas puede llegar a los sensores y que las alarmas funcionan. Se hace ANTES DE CADA USO. La calibración es un ajuste de precisión que asegura que las lecturas sean exactas, comparándolas con un gas de referencia certificado. Se hace periódicamente (cada 3-6 meses) o si el dispositivo falla el bump test.'
    },
    {
      question: '¿Qué significa "60% de las muertes son rescatistas"?',
      answer: 'Es la estadística más devastadora: más del 60% de las fatalidades en espacios confinados corresponden a personas que intentaron rescatar a un compañero caído, sin equipo de protección adecuado. El impulso heroico de salvar una vida anula el entrenamiento. Un monitor de gases con alarma audible y visible podría haber sido la barrera que detuviera la entrada inicial, salvando ambas vidas.'
    },
    {
      question: '¿Detector monogás o multigás: cuál necesito?',
      answer: 'Monogás: ideal si el riesgo es conocido, aislado y constante (ej: H₂S en refinería). Son más simples y económicos. Multigás: obligatorio para espacios confinados con riesgos desconocidos o múltiples. Mide los "4 Grandes" simultáneamente (O₂, LEL, CO, H₂S). Es el estándar en construcción, rescate y mantenimiento industrial.'
    },
    {
      question: '¿Qué es el sistema SDS y por qué importa en detección?',
      answer: 'No confundir con SDS de hojas de seguridad. En sensores, se refiere a tecnologías especializadas. En contexto de gases, lo más relevante es la tecnología de sensor: electroquímicos (para gases tóxicos específicos), perla catalítica o pellistor (para combustibles, requiere O₂), e infrarrojos (para hidrocarburos, no requiere O₂, inmune a envenenamiento).'
    },
    {
      question: '¿Cómo funciona la conectividad P2P en monitores modernos?',
      answer: 'Los monitores forman una red de malla inalámbrica entre sí. Si el monitor de un trabajador entra en alarma (gas, hombre caído, pánico), transmite instantáneamente la alerta a todos los compañeros del equipo. Sus dispositivos suenan mostrando quién está en peligro y cuál es la amenaza. Esto previene las fatalidades de rescatistas improvisados al proporcionar conciencia situacional en tiempo real para todo el equipo.'
    }
  ];

  // Artículos relacionados
  const relatedArticles = [
    {
      id: '1',
      title: 'EPP: La Inversión que Salva Vidas (y Millones en Multas)',
      excerpt: 'Guía completa sobre Equipo de Protección Personal y su impacto en la seguridad industrial.',
      category: 'Seguridad Industrial',
      publishDate: '2 Oct 2025',
      readTime: '22 min',
      slug: 'guia-completa-epp-seguridad-industrial',
      isPopular: true
    },
    {
      id: '2',
      title: 'Guía NOM-009-STPS-2011: Trabajos en Alturas',
      excerpt: 'Los 7 puntos clave que todo supervisor debe dominar para garantizar la seguridad en trabajos de altura.',
      category: 'Normatividad',
      publishDate: '1 Oct 2025',
      readTime: '15 min',
      slug: 'guia-nom-009-stps-2011-trabajos-altura',
      isNew: true
    },
    {
      id: '3',
      title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
      excerpt: 'Analizamos 7 de los chalecos mejor calificados para ayudarte a elegir la protección ideal.',
      category: 'EPP',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      slug: 'mejores-chalecos-seguridad-2025',
      isPopular: true
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }, (_, i) => (
              <motion.div
                key={`hero-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  backgroundColor: `hsl(${200 + (i * 5)}, 70%, ${50 + (i % 30)}%)`,
                  left: `${(i * 1.7) % 100}%`,
                  top: `${(i * 2.3) % 100}%`,
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

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-sky-600/20 border border-sky-400/30 rounded-full px-4 sm:px-6 py-3 text-sky-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="h-5 w-5" />
                ⚠️ Guía Esencial de Seguridad Atmosférica
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Monitores de Gases:{' '}
                <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
                  Protección Invisible Pero Vital
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-lg sm:text-xl md:text-2xl text-sky-100 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Los peligros que no puedes ver son los que te matan. En espacios confinados, 
                el aire que respiras podría ser una trampa mortal. Esta guía desmitifica la detección de gases, 
                una herramienta esencial que todo profesional debe entender.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-3 text-sm text-sky-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  21 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  25 min de lectura
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Basado en normas OSHA/NIOSH
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 relative overflow-hidden min-h-screen">
          {/* Partículas de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 5)}px`,
                  height: `${3 + (i % 5)}px`,
                  background: `hsl(${200 + (i * 8)}, 65%, ${55 + (i % 25)}%)`,
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

          <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-8 sm:py-10 md:py-12 md:py-16 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* El Silencio Mortal - Introducción */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-sky-100">
                  <div className="flex items-start gap-3 mb-4 sm:mb-6 md:mb-8">
                    <div className="p-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl">
                      <Skull className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        El Silencio Mortal de los Espacios Confinados
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-4 sm:mb-6 md:mb-8">
                    <p>
                      En el complejo panorama de la seguridad industrial, existen peligros que{' '}
                      <b className="text-red-600">no anuncian su llegada</b>. No hay estruendos, ni llamas visibles, 
                      ni señales de advertencia evidentes. Son amenazas silenciosas, invisibles y letales que se ocultan 
                      en el aire que respiramos.
                    </p>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6" />
                        Las Estadísticas No Mienten
                      </h3>
                      <div className="grid md:grid-cols-3 gap-3 mb-6">
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">1,030</div>
                          <div className="text-sm text-gray-700">Muertes en espacios confinados (2011-2018, EE.UU.)</div>
                        </div>
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">166</div>
                          <div className="text-sm text-gray-700">Pico de fatalidades en 2017</div>
                        </div>
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">60%+</div>
                          <div className="text-sm text-gray-700">Son rescatistas improvisados</div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-center">
                        <b>Casi 2 fatalidades por semana.</b> La estadística más reveladora: más del 60% no son 
                        trabajadores iniciales, sino rescatistas que entraron sin protección.
                      </p>
                    </div>

                    <div className="relative h-80 mb-6">
                      <Line data={fatalidadesChartData} options={fatalidadesChartOptions} />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-yellow-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-900 mb-4">
                      💡 El Caso Real que lo Ejemplifica
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Dos hermanos, 16 y 22 años, trabajan en una instalación de reciclaje orgánico. Mientras limpian 
                      un sistema de drenaje, el menor es vencido por <b className="text-red-600">sulfuro de hidrógeno (H₂S)</b> dentro 
                      de un pozo de 3 metros. Se desploma en silencio.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Su hermano mayor, al verlo caer, desciende por la escalera en un intento desesperado de rescate, 
                      solo para ser superado por el mismo gas venenoso y morir dos días después. <b>No hubo gritos de advertencia, 
                      solo un colapso súbito.</b>
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Los "4 Grandes" Gases - Sección Interactiva */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-sky-100">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      Entendiendo los "Cuatro Grandes"
                    </span>
                  </h2>
                  <p className="text-center text-gray-600 text-lg mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto">
                    Estos asesinos invisibles son los riesgos atmosféricos más comunes en entornos industriales. 
                    Selecciona cada gas para comprender su peligro y cómo los monitores lo detectan.
                  </p>

                  {/* Tabs de Gases */}
                  <div className="flex flex-wrap justify-center gap-3 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                    {Object.values(gasesData).map((gas) => (
                      <motion.button
                        key={gas.id}
                        onClick={() => setActiveGas(gas.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                          activeGas === gas.id
                            ? `bg-gradient-to-r ${gas.color} text-white shadow-2xl`
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-sky-300 hover:bg-sky-50'
                        }`}
                      >
                        {gas.icon}
                        {gas.title}
                      </motion.button>
                    ))}
                  </div>

                  {/* Contenido del Gas Seleccionado */}
                  <AnimatePresence mode="wait">
                    {(() => {
                      const gas = gasesData[activeGas as keyof typeof gasesData];
                      return (
                        <motion.div
                          key={activeGas}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className={`p-8 ${gas.bgColor} rounded-2xl border-2 ${gas.borderColor}`}>
                            <div className="flex items-start gap-4 mb-6">
                              <div className={`p-4 bg-gradient-to-br ${gas.color} rounded-2xl text-white`}>
                                {gas.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{gas.title}</h3>
                                <p className="text-gray-700">{gas.description}</p>
                                <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                                  <Activity className="h-5 w-5 text-green-600" />
                                  <span className="font-semibold">Nivel Normal:</span>
                                  <span className="text-green-600 font-bold">{gas.normalLevel}</span>
                                </div>
                              </div>
                            </div>

                            {/* Niveles de Peligro */}
                            <div className="space-y-4">
                              {gas.dangerLevels.map((level, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl">
                                  <div className={`w-6 h-6 rounded-full ${level.color} flex-shrink-0 mt-1`}></div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <span className="font-bold text-gray-900">{level.level}</span>
                                      <Badge className="bg-red-600">{level.danger}</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">{level.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Información Adicional según el Gas */}
                          {gas.id === 'o2' && gas.effects && (
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200">
                              <h4 className="font-bold text-gray-900 mb-4 text-xl">
                                Efectos Fisiológicos de la Hipoxia
                              </h4>
                              <div className="space-y-3">
                                {gas.effects.map((effect, idx) => (
                                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="font-bold text-blue-600 min-w-[60px]">{effect.percentage}</div>
                                    <div className="text-gray-700 text-sm">{effect.effect}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {gas.id === 'lel' && gas.examples && (
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200">
                              <h4 className="font-bold text-gray-900 mb-4 text-xl">
                                Ejemplos de LEL para Gases Comunes
                              </h4>
                              <div className="grid md:grid-cols-3 gap-4">
                                {gas.examples.map((example, idx) => (
                                  <div key={idx} className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <div className="font-bold text-orange-900 mb-1">{example.gas}</div>
                                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-1">{example.lel}</div>
                                    <div className="text-sm text-gray-600">{example.use}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {(gas.id === 'co' || gas.id === 'h2s') && gas.mechanism && (
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl border border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <TestTube className="h-5 w-5" />
                                  {gas.mechanism.title}
                                </h4>
                                <p className="text-gray-700 text-sm mb-4">{gas.mechanism.description}</p>
                                {gas.mechanism.symptoms && (
                                  <div>
                                    <p className="font-semibold text-gray-800 mb-2 text-sm">Síntomas:</p>
                                    <ul className="space-y-1">
                                      {gas.mechanism.symptoms.map((symptom, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                          {symptom}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              {gas.sources && (
                                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl border border-gray-200">
                                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Flame className="h-5 w-5" />
                                    Fuentes Comunes
                                  </h4>
                                  <ul className="space-y-2">
                                    {gas.sources.map((source, idx) => (
                                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        {source}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Gráfico */}
                          {gas.chartData && (
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200">
                              <h4 className="font-bold text-gray-900 mb-6 text-xl text-center">
                                Visualización de Niveles de Peligro
                              </h4>
                              <div className="relative h-80 max-w-2xl mx-auto">
                                {gas.id === 'o2' ? (
                                  <Doughnut
                                    data={gas.chartData}
                                    options={{
                                      responsive: true,
                                      maintainAspectRatio: false,
                                      cutout: '60%',
                                      plugins: {
                                        legend: {
                                          position: 'bottom',
                                          labels: { padding: 20 }
                                        }
                                      }
                                    }}
                                  />
                                ) : (
                                  <Bar
                                    data={gas.chartData}
                                    options={{
                                      responsive: true,
                                      maintainAspectRatio: false,
                                      indexAxis: 'y',
                                      plugins: {
                                        legend: { display: false }
                                      },
                                      scales: {
                                        x: { display: false, stacked: true },
                                        y: { stacked: true }
                                      }
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              </motion.section>
              {/* Tipos de Detectores - Monogás vs Multigás */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-blue-100">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      La Herramienta Correcta para el Trabajo
                    </span>
                  </h2>
                  <p className="text-center text-gray-600 text-lg mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto">
                    La elección entre un detector monogás y uno multigás depende del riesgo específico de tu entorno de trabajo. 
                    Comprender sus diferencias es clave para una protección adecuada.
                  </p>

                  {/* Selector de Tipo */}
                  <div className="flex justify-center gap-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                    <motion.button
                      onClick={() => setSelectedDetector('monogas')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                        selectedDetector === 'monogas'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-300'
                      }`}
                    >
                      Detectores Monogás
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedDetector('multigas')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                        selectedDetector === 'multigas'
                          ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-2xl'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-sky-300'
                      }`}
                    >
                      Detectores Multigás
                    </motion.button>
                  </div>

                  {/* Contenido según selección */}
                  <AnimatePresence mode="wait">
                    {selectedDetector === 'monogas' ? (
                      <motion.div
                        key="monogas"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-amber-300"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-4 bg-amber-500 rounded-xl">
                            <Radio className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 mb-2">Detectores Monogás</h3>
                            <p className="text-gray-700">
                              Dispositivos personales, a menudo desechables, diseñados para proteger contra un peligro 
                              <b> conocido y constante</b>.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ideal Para:
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Trabajadores expuestos a un solo tipo de gas de forma recurrente (ej. H₂S en la industria petrolera)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Riesgo conocido, aislado y predecible</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Monitoreo de CO en salas de calderas o garajes</span>
                              </li>
                            </ul>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-green-500">
                              <h4 className="font-bold text-green-900 mb-3">Ventajas</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Menor costo inicial</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Simplicidad de operación</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Tamaño compacto y ligero</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Fácil mantenimiento</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-red-500">
                              <h4 className="font-bold text-red-900 mb-3">Limitaciones</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2">
                                  <X className="h-4 w-4 text-red-600 flex-shrink-0" />
                                  <span>No protege contra amenazas imprevistas</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <X className="h-4 w-4 text-red-600 flex-shrink-0" />
                                  <span>Especificidad es su mayor debilidad</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <X className="h-4 w-4 text-red-600 flex-shrink-0" />
                                  <span>No apto para riesgos múltiples</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="multigas"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-sky-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-sky-300"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-4 bg-sky-600 rounded-xl">
                            <Shield className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-900 mb-2">Detectores Multigás</h3>
                            <p className="text-gray-700">
                              El estándar para entrada a espacios confinados, capaces de medir los <b>"Cuatro Grandes"</b> simultáneamente.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                            <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              Ideal Para:
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Equipos de rescate y respuesta a emergencias</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mantenimiento en espacios confinados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Supervisores de seguridad y entornos de riesgo desconocido</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-sky-300">
                            <h4 className="font-bold text-sky-900 mb-4">Monitoreo Estándar de los "4 Grandes"</h4>
                            <div className="grid md:grid-cols-4 gap-4">
                              <div className="p-4 bg-blue-50 rounded-lg text-center">
                                <Wind className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                                <div className="font-bold text-blue-900">O₂</div>
                                <div className="text-xs text-gray-600">Oxígeno</div>
                              </div>
                              <div className="p-4 bg-orange-50 rounded-lg text-center">
                                <Flame className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                                <div className="font-bold text-orange-900">LEL</div>
                                <div className="text-xs text-gray-600">Combustibles</div>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg text-center">
                                <Skull className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                                <div className="font-bold text-gray-900">CO</div>
                                <div className="text-xs text-gray-600">Monóxido</div>
                              </div>
                              <div className="p-4 bg-purple-50 rounded-lg text-center">
                                <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                                <div className="font-bold text-purple-900">H₂S</div>
                                <div className="text-xs text-gray-600">Sulfhídrico</div>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-green-500">
                              <h4 className="font-bold text-green-900 mb-3">Ventajas</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Protección completa y versátil</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>La "navaja suiza" de detección de gases</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Obligatorio para espacios confinados</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span>Modelos avanzados detectan 5-6+ gases</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
                              <h4 className="font-bold text-yellow-900 mb-3">Consideraciones</h4>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2">
                                  <Info className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                                  <span>Mayor inversión inicial</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <Info className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                                  <span>Requiere calibración rigurosa</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <Info className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                                  <span>Mantenimiento de múltiples sensores</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tabla Comparativa */}
                  <div className="mt-10 overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                          <th className="p-4 text-left font-bold border">Criterio</th>
                          <th className="p-4 text-center font-bold border bg-amber-600">Detector Monogás</th>
                          <th className="p-4 text-center font-bold border bg-sky-600">Detector Multigás</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { criterio: 'Gases Detectados', monogas: '1 gas específico', multigas: '4-6 gases simultáneamente' },
                          { criterio: 'Escenario Ideal', monogas: 'Riesgo conocido y aislado', multigas: 'Riesgo desconocido o múltiple' },
                          { criterio: 'Costo Inicial', monogas: 'Menor inversión', multigas: 'Mayor inversión' },
                          { criterio: 'Complejidad', monogas: 'Simple de operar', multigas: 'Requiere más mantenimiento' },
                          { criterio: 'Portabilidad', monogas: 'Muy ligero y compacto', multigas: 'Más pesado pero portable' },
                          { criterio: 'Uso Principal', monogas: 'Monitoreo continuo de 1 peligro', multigas: 'Entrada a espacios confinados' }
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="p-4 font-semibold text-gray-900 border">{row.criterio}</td>
                            <td className="p-4 text-center text-gray-700 border bg-amber-50">{row.monogas}</td>
                            <td className="p-4 text-center text-gray-700 border bg-sky-50">{row.multigas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.section>

              {/* Bump Test vs Calibración */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-red-100">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      La Diferencia Entre la Vida y la Muerte
                    </span>
                  </h2>
                  <p className="text-center text-gray-600 text-lg mb-4 max-w-3xl mx-auto">
                    <b className="text-red-600">"No hacer el bump test a tu detector de gases es como subirte a un coche sin saber si los frenos funcionan."</b>
                  </p>
                  <p className="text-center text-gray-600 text-lg mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10 max-w-3xl mx-auto">
                    Un monitor sin verificar es solo una <b>falsa sensación de seguridad</b>. Puede que funcione... o puede que no.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                    <motion.div 
                      className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-600 rounded-xl">
                          <TestTube className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900">"Bump Test"</h3>
                          <Badge className="bg-red-600 mt-1">ANTES DE CADA USO</Badge>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">
                        Es la <b>verificación funcional diaria</b>. Se expone brevemente el detector a un gas de prueba 
                        para asegurar que los sensores reaccionan y las alarmas funcionan correctamente.
                      </p>

                      <div className="bg-white p-5 rounded-xl mb-4">
                        <h4 className="font-bold text-red-900 mb-3">¿Qué Verifica?</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>Que el gas puede llegar físicamente a los sensores</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>Que los sensores reaccionan al gas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>Que TODAS las alarmas funcionan (audible, visual, vibratoria)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-100 p-4 rounded-xl">
                        <p className="text-red-900 font-semibold text-sm">
                          ⚠️ Resultado: PASA / FALLA (cualitativo, no mide precisión)
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-600 rounded-xl">
                          <Activity className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Calibración</h3>
                          <Badge className="bg-blue-600 mt-1">PERIÓDICAMENTE</Badge>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">
                        Es el <b>ajuste de precisión</b> del sensor a una concentración de gas conocida, realizado por 
                        personal calificado. Es como "afinar un instrumento musical" para que sus lecturas sean exactas.
                      </p>

                      <div className="bg-white p-5 rounded-xl mb-4">
                        <h4 className="font-bold text-blue-900 mb-3">¿Qué Verifica y Corrige?</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Asegura la <b>precisión cuantitativa</b> del monitor</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Corrige la "deriva de calibración" por envejecimiento</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Ajusta el sensor para que coincida con el estándar</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-100 p-4 rounded-xl">
                        <p className="text-blue-900 font-semibold text-sm">
                          ℹ️ Frecuencia: Cada 3-6 meses o si falla bump test
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-yellow-400">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-900 mb-4 text-center flex items-center justify-center gap-2">
                      <AlertTriangle className="h-8 w-8" />
                      El Peligro del "Placebo de Seguridad"
                    </h3>
                    <p className="text-gray-800 text-center text-lg leading-relaxed mb-4">
                      Un monitor sin verificar es más peligroso que no tener monitor. Crea una <b className="text-red-600">falsa 
                      sensación de seguridad</b> que puede llevar a un trabajador a asumir riesgos que de otro modo evitaría.
                    </p>
                    <p className="text-gray-700 text-center">
                      Si el sensor está obstruido, envenenado o ha fallado, <b>no emitirá alarma</b>. El trabajador, 
                      creyendo que está protegido, avanza hacia una atmósfera peligrosa. El bump test diario transforma 
                      el dispositivo de un posible placebo en una <b className="text-green-600">herramienta de salvamento verificada</b>.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* El Futuro: Tecnología Conectada */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-purple-100">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-8">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                      <Wifi className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        El Futuro de la Detección
                      </h2>
                      <p className="text-gray-600 text-lg">Innovaciones que Salvan Vidas</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-4 sm:mb-6 md:mb-8 text-center max-w-4xl mx-auto">
                    La tecnología de detección de gases está evolucionando rápidamente, pasando de dispositivos aislados 
                    a componentes de un <b className="text-purple-600">ecosistema de seguridad conectado e inteligente</b>. 
                    Este cambio representa una transición de la seguridad personal a la seguridad en red.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 sm:mb-6 md:mb-8">
                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-600 rounded-xl">
                          <Radio className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-blue-900 text-lg">Conectividad P2P</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Los monitores forman una <b>red de malla inalámbrica</b> entre sí. Cuando un trabajador entra 
                        en alarma, todos los compañeros son notificados instantáneamente.
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-600">
                        <b>Resultado:</b> Previene fatalidades de rescatistas improvisados
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-600 rounded-xl">
                          <Wifi className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-green-900 text-lg">Monitoreo en la Nube (IIoT)</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Datos transmitidos en tiempo real a una plataforma centralizada. Supervisores ven ubicación GPS, 
                        estado y lecturas de <b>cada trabajador en el campo</b>.
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-600">
                        <b>Resultado:</b> Supervisión proactiva y respuesta rápida
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-purple-600 rounded-xl">
                          <Database className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-purple-900 text-lg">Análisis de Datos Avanzado</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Los sistemas agregan automáticamente datos de toda la flota. Los <b>mapas de calor</b> muestran 
                        áreas con alarmas frecuentes.
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-600">
                        <b>Resultado:</b> Identificación de puntos calientes y prevención proactiva
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-600 rounded-xl">
                          <Eye className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-orange-900 text-lg">Seguimiento de Exposición</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Registro de <b>exposición acumulada</b> a gases tóxicos de cada trabajador a lo largo del tiempo, 
                        ayudando a gestionar la salud a largo plazo.
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-600">
                        <b>Resultado:</b> Gestión de salud ocupacional predictiva
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border-2 border-yellow-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-yellow-600 rounded-xl">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-yellow-900 text-lg">Automatización de Cumplimiento</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Informes de bump tests, calibraciones y eventos de alarma se generan automáticamente, 
                        simplificando enormemente la <b>auditoría y cumplimiento</b>.
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-600">
                        <b>Resultado:</b> Trazabilidad completa para OSHA/NIOSH
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-indigo-600 rounded-xl">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-indigo-900 text-lg">Docking Stations Automatizadas</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Al final del turno, el trabajador coloca su detector en la estación. El sistema carga, 
                        hace bump test/calibración y descarga datos <b>automáticamente</b>.
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-600">
                        <b>Resultado:</b> Gestión de flota sin error humano
                      </div>
                    </motion.div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4 text-center">
                      De Reactivo a Predictivo: El Verdadero Poder
                    </h3>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto">
                      La capacidad de <b className="text-purple-700">recopilar y analizar datos en tiempo real</b> permite 
                      pasar de un modelo de seguridad basado en análisis de accidentes pasados a uno <b>predictivo</b>, 
                      que identifica patrones de riesgo y permite corregirlos antes de que se materialice un incidente.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* FAQs */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-blue-100">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
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
                          className="w-full p-3 sm:p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all flex items-center justify-between gap-4"
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
                              <div className="p-3 sm:p-4 md:p-6 bg-white text-gray-700 leading-relaxed">
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
                transition={{ delay: 1.2 }}
                className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16"
              >
                <div className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
                      Un Instrumento Científico, No un Amuleto
                    </h2>
                    
                    <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-10">
                      <p className="text-center">
                        Un monitor de gases requiere <b className="text-yellow-300">conocimiento para su uso correcto</b>. 
                        Entender los riesgos, elegir el detector adecuado y, sobre todo, verificarlo antes de cada uso, 
                        son pilares de una cultura de seguridad profesional.
                      </p>

                      <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-2xl border border-white/20">
                        <p className="font-semibold mb-2">💡 El Mensaje Clave:</p>
                        <p>
                          En estos entornos, la tecnología no es un complemento a la seguridad; es el <b>único sentido fiable</b> que 
                          un trabajador posee. Un monitor de gases personal no es simplemente un dispositivo; es una extensión de los sentidos, 
                          una protección invisible pero vital que proporciona la única advertencia objetiva contra una muerte predecible.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-white/20 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">🔍</div>
                          <h3 className="font-bold text-xl mb-2">Entender</h3>
                          <p className="text-sm">Los riesgos atmosféricos específicos de tu entorno</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">✅</div>
                          <h3 className="font-bold text-xl mb-2">Verificar</h3>
                          <p className="text-sm">Bump test diario antes de cada uso sin excepciones</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">🛡️</div>
                          <h3 className="font-bold text-xl mb-2">Proteger</h3>
                          <p className="text-sm">Tu vida y la de tus compañeros con tecnología confiable</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
                        🎯 La seguridad atmosférica no es negociable. La detección de gases es tu sentido extra.
                      </p>
                      <motion.a
                        href="/productos"
                        className="inline-flex items-center gap-3 bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Shield className="h-6 w-6" />
                        Explorar Detectores de Gases
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
            
