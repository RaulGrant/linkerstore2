'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, XCircle, Play, Pause, Volume2, Info } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function NOM009Article() {
  const [activeKey, setActiveKey] = useState(1);
  const [activeHierarchyLevel, setActiveHierarchyLevel] = useState<number | null>(null);
  const [isAudioLoading, setIsAudioLoading] = useState(true);
  const [audioError, setAudioError] = useState(false);

  // Datos para el gráfico de costos
  const costsChartData = {
    labels: ['Multas STPS', 'Aumento Prima IMSS', 'Costos Legales y Otros'],
    datasets: [{
      label: 'Costos del Incumplimiento',
      data: [50, 30, 20],
      backgroundColor: ['#FB923C', '#F97316', '#EA580C'],
      borderColor: '#FDFBF8',
      borderWidth: 4,
      hoverOffset: 8
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
          color: '#3D3D3D',
          font: { family: "'Inter', sans-serif" }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.label || '';
            if (label) label += ': ';
            if (context.parsed !== null) {
              label += context.parsed + '% del impacto financiero';
            }
            return label;
          }
        }
      }
    },
    cutout: '60%'
  };

  // Detalles de la jerarquía de controles
  const hierarchyDetails: { [key: number]: { title: string; description: string; example: string } } = {
    1: {
      title: 'Eliminación',
      description: 'Modificar el proceso o diseño para eliminar por completo la necesidad de trabajar en altura. Es la solución más efectiva.',
      example: 'Ejemplo: ensamblar componentes a nivel del suelo y luego izarlos con una grúa.'
    },
    2: {
      title: 'Sustitución',
      description: 'Reemplazar el peligro por uno menor.',
      example: 'Ejemplo: usar una plataforma elevadora móvil en lugar de un andamio complejo.'
    },
    3: {
      title: 'Controles de Ingeniería',
      description: 'Instalar protecciones físicas colectivas que protejan a todos los trabajadores.',
      example: 'Ejemplo: instalar barandales permanentes o redes de seguridad.'
    },
    4: {
      title: 'Señalización y Controles Administrativos',
      description: 'Cambiar la forma en que la gente trabaja mediante procedimientos y supervisión.',
      example: 'Ejemplo: señalizar áreas de riesgo, implementar permisos de trabajo y rotar al personal.'
    },
    5: {
      title: 'Equipo de Protección Personal (EPP)',
      description: 'Proteger al trabajador con equipo como arneses y líneas de vida. Es la última línea de defensa.',
      example: 'Ejemplo: arnés de cuerpo completo con línea de vida y absorbedor de energía.'
    }
  };

  // Contenido de los 7 puntos clave
  const keysData = [
    {
      id: 1,
      title: "Análisis de Riesgos",
      navTitle: "1. Análisis de Riesgos",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 1: El Análisis de Condiciones Prevalecientes</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Antes de que un solo trabajador se eleve, la norma exige un análisis de riesgos exhaustivo. No se trata solo de ver hacia arriba; 
            se trata de entender todo el entorno. Este paso previo es fundamental para prevenir incidentes antes de que ocurran.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Info className="h-5 w-5" />
              Mini-Checklist de Verificación Previa
            </h4>
            <div className="space-y-3">
              <ChecklistItem label="Verificar estado y estabilidad de la superficie de trabajo" />
              <ChecklistItem label="Evaluar condiciones climáticas (viento, lluvia, tormentas eléctricas)" />
              <ChecklistItem label="Identificar y señalizar líneas eléctricas cercanas" />
              <ChecklistItem label="Asegurar y delimitar la zona de trabajo para evitar el paso de personal no autorizado" />
              <ChecklistItem label="Planificar la ruta de acceso y salida segura del área de altura" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Jerarquía de Controles",
      navTitle: "2. Jerarquía de Controles",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 2: La Jerarquía de Controles</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            La norma te obliga a pensar en soluciones de seguridad en un orden específico, desde la más efectiva hasta la menos efectiva. 
            El Equipo de Protección Personal (EPP) es siempre la última barrera de defensa, no la primera opción.
          </p>
          <p className="text-gray-600 font-semibold mb-4">Haz clic en cada nivel para ver los detalles:</p>
          
          <div className="max-w-md mx-auto space-y-2">
            <HierarchyItem 
              level={1} 
              label="Eliminación" 
              color="bg-red-200 text-red-800 hover:bg-red-300"
              width="w-full"
              onClick={() => setActiveHierarchyLevel(1)}
              isActive={activeHierarchyLevel === 1}
            />
            <HierarchyItem 
              level={2} 
              label="Sustitución" 
              color="bg-orange-200 text-orange-800 hover:bg-orange-300"
              width="w-11/12"
              onClick={() => setActiveHierarchyLevel(2)}
              isActive={activeHierarchyLevel === 2}
            />
            <HierarchyItem 
              level={3} 
              label="Controles de Ingeniería" 
              color="bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
              width="w-10/12"
              onClick={() => setActiveHierarchyLevel(3)}
              isActive={activeHierarchyLevel === 3}
            />
            <HierarchyItem 
              level={4} 
              label="Señalización y Controles Administrativos" 
              color="bg-blue-200 text-blue-800 hover:bg-blue-300"
              width="w-9/12"
              onClick={() => setActiveHierarchyLevel(4)}
              isActive={activeHierarchyLevel === 4}
            />
            <HierarchyItem 
              level={5} 
              label="Equipo de Protección Personal (EPP)" 
              color="bg-purple-200 text-purple-800 hover:bg-purple-300"
              width="w-8/12"
              onClick={() => setActiveHierarchyLevel(5)}
              isActive={activeHierarchyLevel === 5}
            />
          </div>

          {activeHierarchyLevel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-gray-100 rounded-lg border-2 border-gray-300"
            >
              <h4 className="font-bold text-xl mb-2 text-gray-800">{hierarchyDetails[activeHierarchyLevel].title}</h4>
              <p className="text-gray-700 mb-3">{hierarchyDetails[activeHierarchyLevel].description}</p>
              <p className="text-gray-600 italic">{hierarchyDetails[activeHierarchyLevel].example}</p>
            </motion.div>
          )}
        </div>
      )
    },
    {
      id: 3,
      title: "Selección de EPP",
      navTitle: "3. Selección de EPP",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 3: Selección y Uso Correcto de EPP</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Cuando los controles superiores no son suficientes, la selección correcta del EPP es vital. No todos los arneses o conectores son iguales. 
            Elegir el equipo adecuado para la tarea específica es una responsabilidad crítica del supervisor.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 border-2 border-green-200 rounded-xl bg-green-50"
            >
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Arnés de Cuerpo Completo para Detención de Caídas
              </h4>
              <p className="text-gray-700">
                Diseñado para distribuir las fuerzas de una caída en todo el cuerpo. Obligatorio para tareas donde existe riesgo de caída libre. 
                El punto de anclaje debe estar en la espalda (anillo dorsal).
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 border-2 border-blue-200 rounded-xl bg-blue-50"
            >
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Info className="h-5 w-5" />
                Arnés de Posicionamiento
              </h4>
              <p className="text-gray-700">
                Permite al trabajador posicionarse y trabajar con ambas manos libres. NO es para detención de caídas. 
                Generalmente tiene anillos en la cadera. Debe usarse en conjunto con un sistema de detención.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 border-2 border-red-200 rounded-xl bg-red-50 md:col-span-2"
            >
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Puntos de Anclaje - El Eslabón Más Crítico
              </h4>
              <p className="text-gray-700">
                Deben ser capaces de resistir <strong>5,000 libras (2,267 kg)</strong> por trabajador conectado. 
                Nunca improvises un punto de anclaje. Deben ser verificados por una persona calificada.
              </p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Andamios Seguros",
      navTitle: "4. Andamios Seguros",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 4: Sistemas de Andamios Seguros</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Los andamios son plataformas de trabajo temporales, pero deben ofrecer la misma seguridad que una permanente. 
            La norma establece requisitos mínimos para su montaje y uso, sin importar si son tubulares, colgantes o de otro tipo.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-800">Plataformas Completas:</span>
                <p className="text-gray-700">La superficie de trabajo debe estar completamente cubierta, sin huecos por donde puedan caer objetos o personas.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-800">Barandales:</span>
                <p className="text-gray-700">Se requiere un sistema de barandales en todos los lados abiertos, incluyendo barandal superior, intermedio y rodapié.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
              <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-800">Estabilización:</span>
                <p className="text-gray-700">El andamio debe estar nivelado, sobre una base firme, y debidamente arriostrado o anclado a la estructura para prevenir su colapso.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
              <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-800">Acceso Seguro:</span>
                <p className="text-gray-700">Debe contar con una escalera u otro medio de acceso seguro a la plataforma de trabajo.</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: "Plan de Emergencia",
      navTitle: "5. Plan de Emergencia",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 5: El Plan de Atención a Emergencias</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Tener el equipo de protección es solo la mitad de la batalla. La norma exige que tengas un plan de rescate documentado y practicado. 
            ¿Qué harás si un trabajador queda suspendido de su arnés? El tiempo es crítico.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-red-100 border-l-4 border-red-500 rounded-r-lg"
          >
            <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-lg">
              <AlertTriangle className="h-6 w-6" />
              ¡Alerta de Experto! Trauma por Suspensión
            </h4>
            <p className="text-red-800 leading-relaxed">
              Un trabajador suspendido e inmóvil puede sufrir graves lesiones internas o incluso la muerte en cuestión de minutos debido a la 
              interrupción del flujo sanguíneo. El plan de rescate debe ser rápido y eficiente para bajar a la persona de forma segura.
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="font-semibold text-red-900 mb-2">Datos Críticos del Trauma por Suspensión:</p>
              <ul className="space-y-2 text-red-800">
                <li>• Pérdida de conciencia: <strong>3-5 minutos</strong></li>
                <li>• Muerte por fallo multiorgánico: <strong>menos de 30 minutos</strong></li>
                <li>• El rescate debe ocurrir en menos de <strong>10 minutos</strong></li>
              </ul>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 6,
      title: "Capacitación",
      navTitle: "6. Capacitación",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 6: La Capacitación y Adiestramiento (DC-3)</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            La norma es clara: ningún trabajador debe realizar labores en alturas sin haber recibido la capacitación teórica y práctica adecuada. 
            Esta capacitación no es opcional y debe ser demostrable ante una inspección.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-blue-100 border-l-4 border-blue-500 rounded-r-lg"
          >
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2 text-lg">
              <Shield className="h-6 w-6" />
              Requisito Indispensable: DC-3
            </h4>
            <p className="text-blue-800 leading-relaxed mb-4">
              Los trabajadores deben contar con su Constancia de Competencias o de Habilidades Laborales (formato DC-3) que acredite su capacitación 
              en trabajos en alturas. Esta debe ser emitida por un agente capacitador registrado ante la STPS.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-blue-900 mb-2">Responsabilidades del Supervisor:</p>
              <ul className="space-y-2 text-blue-800">
                <li>✓ Verificar que todo el personal tenga DC-3 vigente</li>
                <li>✓ Renovar capacitaciones al menos anualmente</li>
                <li>✓ Documentar todas las capacitaciones realizadas</li>
                <li>✓ Garantizar que el contenido incluye teoría y práctica</li>
              </ul>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 7,
      title: "Registro y Supervisión",
      navTitle: "7. Registro y Supervisión",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Punto Clave 7: El Registro y Supervisión Continua</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            La seguridad no es un evento único, es un proceso continuo. Documentar y supervisar son las herramientas que garantizan 
            que los procedimientos se sigan todos los días, en cada turno.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <Info className="h-5 w-5" />
              Documentación Esencial
            </h4>
            <div className="space-y-3">
              <ChecklistItem label="Permisos de trabajo en alturas autorizados antes de cada jornada" />
              <ChecklistItem label="Registros de revisión periódica del EPP y sistemas de anclaje" />
              <ChecklistItem label="Bitácoras de inspección de andamios y plataformas" />
              <ChecklistItem label="Nombramiento y supervisión constante por parte de una persona competente y calificada" />
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300">
            <p className="text-gray-800 font-semibold text-lg mb-2">
              💡 Regla de Oro de la Documentación:
            </p>
            <p className="text-gray-700 italic text-xl">
              "Lo que no está escrito, no se hizo"
            </p>
          </div>
        </div>
      )
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
      title: 'Los Mejores Arneses de Seguridad para Trabajo en Altura',
      excerpt: 'Equipos de protección anticaídas certificados y sistemas de anclaje.',
      category: 'Seguridad',
      publishDate: '14 Ago 2025',
      readTime: '10 min',
      slug: 'mejores-arneses-seguridad-trabajo-altura',
      isPopular: true
    },
    {
      id: '3',
      title: 'Los Mejores Cascos de Seguridad Industrial 2025',
      excerpt: 'Guía completa de cascos de protección para trabajo y construcción.',
      category: 'EPP',
      publishDate: '10 Nov 2023',
      readTime: '8 min',
      slug: 'mejores-cascos-seguridad-industrial'
    }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
          {/* Partículas animadas - Sistema masivo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`large-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${45 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
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

          <div className="container mx-auto px-6 relative z-10">
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
                <Shield className="h-4 w-4" />
                ⚡ Seguridad en Trabajos de Altura
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Guía Definitiva NOM-009-STPS-2011
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                7 Puntos Clave para Trabajos en Alturas que Todo Supervisor Debe Dominar
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-sm text-blue-200"
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
                  15 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
          {/* Fondo animado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${200 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
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

          <div className="container mx-auto px-6 py-12 relative z-20">
            <div className="max-w-6xl mx-auto">
              
              {/* Reproductor de Audio */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 max-w-2xl mx-auto">
                  <h2 className="text-lg font-semibold text-center text-gray-700 mb-4 flex items-center justify-center gap-2">
                    <Volume2 className="h-5 w-5 text-orange-600" />
                    Escucha el Resumen de la Guía
                  </h2>
                  <div className="text-center text-gray-500">
                    <div className="flex items-center justify-center gap-2">
                      <Info className="h-5 w-5 text-blue-500" />
                      <span>Audio de resumen disponible próximamente</span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Introducción con Gráfico */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50"
              >
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                  ¿Por qué es Crítico Dominar esta Norma?
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
                  Cada año, las caídas de altura representan el <strong className="text-orange-600">27% de todos los accidentes de trabajo en México</strong>. 
                  Más allá de la tragedia humana, el incumplimiento tiene costos ocultos que impactan directamente en la rentabilidad de tus proyectos.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Los Costos Ocultos del Incumplimiento</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-orange-600">Multas STPS</p>
                          <p className="text-gray-600 text-sm">Sanciones hasta $535,350 pesos por cada incumplimiento detectado</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-red-600">Primas de Riesgo IMSS</p>
                          <p className="text-gray-600 text-sm">Un accidente incrementa la prima, afectando las finanzas a largo plazo</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-purple-600">Responsabilidad Legal</p>
                          <p className="text-gray-600 text-sm">Implicaciones civiles y penales sobre supervisores y directivos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="relative w-full max-w-md mx-auto" style={{ height: '350px' }}>
                      <Doughnut data={costsChartData} options={costsChartOptions} />
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Navegación de los 7 Puntos Clave */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                  Explora los 7 Puntos Clave
                </h2>
                
                {/* Botones de navegación */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {keysData.map((key) => (
                    <motion.button
                      key={key.id}
                      onClick={() => setActiveKey(key.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all ${
                        activeKey === key.id
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-white text-orange-600 border border-orange-200 hover:bg-orange-100'
                      }`}
                    >
                      {key.navTitle}
                    </motion.button>
                  ))}
                </div>

                {/* Área de contenido */}
                <motion.div
                  key={activeKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50 min-h-[400px]"
                >
                  {keysData.find(k => k.id === activeKey)?.content}
                </motion.div>
              </motion.section>

              {/* Conclusión */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center bg-orange-500 text-white p-10 rounded-3xl shadow-2xl"
              >
                <h2 className="text-3xl font-bold mb-4">
                  La Seguridad No es un Gasto, es una Inversión
                </h2>
                <p className="text-orange-100 text-lg max-w-3xl mx-auto leading-relaxed">
                  Aplicar correctamente la NOM-009-STPS-2011 no solo salva vidas, sino que protege la productividad, 
                  la reputación y la viabilidad de tus proyectos. Un entorno de trabajo seguro es un entorno de trabajo eficiente.
                </p>
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

// Componente auxiliar para items de checklist
function ChecklistItem({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <motion.label 
      className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-yellow-100 transition-colors"
      whileHover={{ x: 4 }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="appearance-none w-5 h-5 border-2 border-orange-500 rounded cursor-pointer relative flex-shrink-0 mr-3
                   checked:bg-orange-500 checked:border-orange-500
                   after:content-['✔'] after:absolute after:text-white after:top-1/2 after:left-1/2 
                   after:-translate-x-1/2 after:-translate-y-1/2 after:text-xs after:opacity-0 
                   checked:after:opacity-100 transition-all"
      />
      <span className="text-gray-700">{label}</span>
    </motion.label>
  );
}

// Componente auxiliar para items de jerarquía
function HierarchyItem({ 
  level, 
  label, 
  color, 
  width, 
  onClick, 
  isActive 
}: { 
  level: number; 
  label: string; 
  color: string; 
  width: string; 
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`${color} ${width} mx-auto p-3 text-center font-bold cursor-pointer 
                  rounded-md transition-all ${isActive ? 'ring-4 ring-offset-2 ring-orange-400' : ''}`}
    >
      {label}
    </motion.div>
  );
}