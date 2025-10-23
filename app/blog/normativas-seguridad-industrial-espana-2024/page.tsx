'use client';

import BlogLayout from '@/components/blog/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertTriangle, FileText, Scale, Info, ExternalLink, Gavel } from 'lucide-react';
import Link from 'next/link';

// Moved metadata to layout.tsx since this is now a client component
const pageMetadata = {
  title: 'Normativas de Seguridad Industrial en España: Marco Legal 2024 | Guía Actualizada',
  description: 'Guía actualizada sobre legislación española en prevención de riesgos laborales, Real Decreto 773/1997 y normativas europeas aplicables. Todo lo que necesitas saber para cumplir con la ley.',
  keywords: 'normativas seguridad industrial España, Real Decreto 773/1997, prevención riesgos laborales, legislación EPP, cumplimiento normativo',
};

const mainLaws = [
  {
    name: 'Ley 31/1995',
    title: 'Ley de Prevención de Riesgos Laborales',
    scope: 'Marco general de PRL',
    keyPoints: [
      'Obligaciones generales del empresario',
      'Derechos de los trabajadores',
      'Evaluación de riesgos obligatoria',
      'Formación e información'
    ],
    penalties: 'Hasta €819,780 (infracciones muy graves)',
    lastUpdate: '2022 - Adaptación a normativa europea'
  },
  {
    name: 'Real Decreto 773/1997',
    title: 'Utilización de Equipos de Protección Individual',
    scope: 'Uso de EPP en el trabajo',
    keyPoints: [
      'Evaluación previa de EPP necesarios',
      'Formación específica en uso de EPP',
      'Mantenimiento y reemplazo',
      'Compatibilidad entre EPP'
    ],
    penalties: 'Hasta €40,985 (infracciones graves)',
    lastUpdate: '2023 - Inclusión de nuevos EPP digitales'
  },
  {
    name: 'Real Decreto 486/1997',
    title: 'Lugares de Trabajo',
    scope: 'Condiciones mínimas de seguridad',
    keyPoints: [
      'Diseño y características de locales',
      'Instalaciones de servicio',
      'Condiciones ambientales',
      'Señalización de seguridad'
    ],
    penalties: 'Hasta €163,956 (infracciones graves)',
    lastUpdate: '2024 - Adaptación post-COVID'
  },
  {
    name: 'Real Decreto 664/1997',
    title: 'Protección contra Agentes Biológicos',
    scope: 'Riesgos biológicos laborales',
    keyPoints: [
      'Clasificación de agentes biológicos',
      'Medidas de contención',
      'Vigilancia sanitaria específica',
      'Registro de exposiciones'
    ],
    penalties: 'Hasta €819,780 (exposición a agentes del grupo 4)',
    lastUpdate: '2022 - Actualización post-pandemia'
  }
];

const europeanNorms = [
  {
    norm: 'EN 149',
    title: 'Equipos de protección respiratoria',
    description: 'Mascarillas autofiltrantes contra partículas',
    categories: ['FFP1', 'FFP2', 'FFP3'],
    application: 'Industria, construcción, sanidad'
  },
  {
    norm: 'EN 388',
    title: 'Guantes de protección contra riesgos mecánicos',
    description: 'Resistencia a abrasión, corte, rasgadura y perforación',
    categories: ['Nivel 0-4 según riesgo', 'Pictograma obligatorio'],
    application: 'Manipulación, construcción, industria'
  },
  {
    norm: 'EN 397',
    title: 'Cascos de protección para la industria',
    description: 'Protección craneal contra impactos y penetración',
    categories: ['Clase G', 'Clase E', 'Accesorios opcionales'],
    application: 'Construcción, industria, trabajos en altura'
  },
  {
    norm: 'EN ISO 20345',
    title: 'Calzado de seguridad',
    description: 'Protección de pies con puntera de seguridad',
    categories: ['SB', 'S1', 'S2', 'S3', 'S4', 'S5'],
    application: 'Industria, construcción, logística'
  },
  {
    norm: 'EN ISO 20471',
    title: 'Ropa de alta visibilidad',
    description: 'Prendas para señalización visual',
    categories: ['Clase 1', 'Clase 2', 'Clase 3'],
    application: 'Vialidad, aeropuertos, construcción'
  }
];

const complianceSteps = [
  {
    step: 1,
    title: 'Evaluación Inicial de Riesgos',
    description: 'Identificar y evaluar todos los riesgos presentes en el lugar de trabajo',
    requirements: [
      'Documentación escrita obligatoria',
      'Revisión cuando cambien las condiciones',
      'Participación de trabajadores',
      'Métodos de evaluación apropiados'
    ],
    deadline: '30 días desde inicio de actividad'
  },
  {
    step: 2,
    title: 'Planificación Preventiva',
    description: 'Establecer medidas preventivas y de protección necesarias',
    requirements: [
      'Plan de prevención documentado',
      'Asignación de responsabilidades',
      'Recursos humanos y materiales',
      'Cronograma de implementación'
    ],
    deadline: '60 días desde evaluación'
  },
  {
    step: 3,
    title: 'Formación e Información',
    description: 'Capacitar a trabajadores en prevención de riesgos',
    requirements: [
      'Formación inicial obligatoria',
      'Información sobre riesgos específicos',
      'Instrucciones de uso de EPP',
      'Actualizaciones periódicas'
    ],
    deadline: 'Antes del inicio del trabajo'
  },
  {
    step: 4,
    title: 'Vigilancia de la Salud',
    description: 'Control médico de trabajadores expuestos a riesgos',
    requirements: [
      'Reconocimientos médicos específicos',
      'Protocolos según riesgos',
      'Confidencialidad médica',
      'Registros sanitarios'
    ],
    deadline: 'Según protocolos específicos'
  }
];

const penalties2024 = [
  {
    type: 'Infracciones Leves',
    range: '€125 - €2,045',
    examples: [
      'Falta de orden y limpieza',
      'Deficiencias menores en equipos',
      'Incumplimientos administrativos menores'
    ]
  },
  {
    type: 'Infracciones Graves',
    range: '€2,046 - €40,985',
    examples: [
      'No proporcionar EPP necesarios',
      'Falta de formación en PRL',
      'Evaluación de riesgos deficiente',
      'Incumplimiento medidas preventivas'
    ]
  },
  {
    type: 'Infracciones Muy Graves',
    range: '€40,986 - €819,780',
    examples: [
      'Riesgo grave inmediato no corregido',
      'Falta total de evaluación de riesgos',
      'Obstaculizar labores de inspección',
      'Adscripción incorrecta de menores'
    ]
  }
];

export default function NormativasSeguridadEspanaPage() {
  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>→</span>
            <span className="text-gray-900">Normativas de Seguridad</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Normativas de Seguridad Industrial en España: Marco Legal 2024
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
              Legislación Española
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Actualización 2024
            </Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              Cumplimiento Normativo
            </Badge>
            <div className="text-sm text-gray-500">
              Actualizado: 3 Nov 2024 • Lectura: 15 min
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Guía actualizada sobre legislación española en prevención de riesgos laborales, Real Decreto 773/1997 
            y normativas europeas aplicables. Todo lo que necesitas saber para mantener tu empresa en cumplimiento legal.
          </p>
        </div>

        {/* Alerta Legal */}
        <Card className="mb-8 bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Gavel className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Importante: Actualización Legislativa 2024</h4>
                <p className="text-amber-800 text-sm mb-3">
                  Las sanciones por incumplimiento de normativas de seguridad han sido actualizadas. 
                  Las multas pueden alcanzar hasta €819,780 para infracciones muy graves.
                </p>
                <div className="bg-amber-100 p-3 rounded text-amber-900 text-xs">
                  <strong>Fecha límite:</strong> Las empresas tienen hasta el 31 de diciembre de 2024 
                  para adaptarse a las nuevas exigencias digitales en documentación de PRL.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Índice */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Info className="w-5 h-5" />
              Contenido de la Guía Legal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <Link href="#leyes-principales" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Principales Leyes y Reales Decretos
              </Link>
              <Link href="#normativas-europeas" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Normativas Europeas EN
              </Link>
              <Link href="#proceso-cumplimiento" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Proceso de Cumplimiento
              </Link>
              <Link href="#sanciones" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Régimen Sancionador 2024
              </Link>
              <Link href="#documentacion" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Documentación Obligatoria
              </Link>
              <Link href="#casos-practicos" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Casos Prácticos
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Marco Legal Principal */}
        <section id="leyes-principales" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Principales Leyes y Reales Decretos</h2>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              El marco legal español de prevención de riesgos laborales se basa en la transposición de directivas 
              europeas y su desarrollo mediante reales decretos específicos. Es fundamental conocer esta jerarquía 
              normativa para asegurar el cumplimiento completo.
            </p>
          </div>

          <div className="space-y-6">
            {mainLaws.map((law, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-red-600" />
                      {law.name}
                    </CardTitle>
                    <Badge className="bg-red-100 text-red-800">
                      {law.lastUpdate}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-gray-700">{law.title}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ámbito de Aplicación</h4>
                      <p className="text-gray-700 text-sm mb-4">{law.scope}</p>
                      
                      <h4 className="font-bold text-gray-900 mb-2">Puntos Clave</h4>
                      <ul className="space-y-1">
                        {law.keyPoints.map((point, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Régimen Sancionador</h4>
                      <div className="bg-red-50 p-3 rounded border border-red-200">
                        <p className="text-red-800 text-sm font-medium">{law.penalties}</p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 mb-2 mt-4">Última Actualización</h4>
                      <p className="text-gray-700 text-sm">{law.lastUpdate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Normativas Europeas */}
        <section id="normativas-europeas" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Normativas Europeas EN Aplicables</h2>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Las normativas europeas EN establecen los requisitos técnicos específicos que deben cumplir 
              los equipos de protección individual. Son de aplicación directa y su cumplimiento es obligatorio 
              para la comercialización y uso de EPP en España.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-4 mb-8">
            {europeanNorms.map((norm, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-blue-600" />
                      {norm.norm}
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      Normativa EN
                    </Badge>
                  </CardTitle>
                  <p className="text-lg font-medium text-gray-700">{norm.title}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Descripción</h4>
                      <p className="text-sm text-gray-600">{norm.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Categorías/Clases</h4>
                      <ul className="text-sm text-gray-600">
                        {norm.categories.map((cat, i) => (
                          <li key={i}>• {cat}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Aplicación Típica</h4>
                      <p className="text-sm text-gray-600">{norm.application}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Proceso de Cumplimiento */}
        <section id="proceso-cumplimiento" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de Cumplimiento Normativo</h2>
          
          <div className="space-y-6">
            {complianceSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    {step.title}
                  </CardTitle>
                  <p className="text-gray-600">{step.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Requisitos Específicos</h4>
                      <ul className="space-y-2">
                        {step.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Plazo de Cumplimiento</h4>
                      <div className="bg-green-50 p-4 rounded border border-green-200">
                        <p className="text-green-800 font-medium">{step.deadline}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Régimen Sancionador */}
        <section id="sanciones" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Régimen Sancionador 2024</h2>
          
          <Card className="mb-6 bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Actualización de Sanciones 2024</h4>
                  <p className="text-red-800 text-sm">
                    Las cuantías han sido actualizadas según el IPC. Las empresas reincidentes pueden 
                    enfrentar el grado máximo de cada categoría, además de otras medidas como suspensión 
                    de actividades o cierre temporal del centro de trabajo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-1 gap-6 mb-8">
            {penalties2024.map((penalty, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-900">
                    {penalty.type}
                  </CardTitle>
                  <div className="text-2xl font-bold text-orange-700">
                    {penalty.range}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-gray-900 mb-2">Ejemplos de Infracciones</h4>
                  <ul className="space-y-1">
                    {penalty.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <AlertTriangle className="w-3 h-3 mt-0.5 text-orange-500 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <h4 className="font-bold text-amber-900 mb-3">Medidas Adicionales</h4>
              <div className="grid md:grid-cols-2 gap-4 text-amber-800 text-sm">
                <div>
                  <h5 className="font-medium mb-2">Para Infracciones Graves y Muy Graves:</h5>
                  <ul className="space-y-1">
                    <li>• Suspensión de actividades hasta 90 días</li>
                    <li>• Cierre temporal del centro de trabajo</li>
                    <li>• Limitaciones en contratación pública</li>
                    <li>• Publicación de sanciones</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Agravantes:</h5>
                  <ul className="space-y-1">
                    <li>• Reincidencia en incumplimientos</li>
                    <li>• Resistencia a la inspección</li>
                    <li>• Riesgo grave e inminente</li>
                    <li>• Afectación a menores o colectivos vulnerables</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documentación Obligatoria */}
        <section id="documentacion" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentación Obligatoria</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Lista de Verificación Documental</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">📋 Documentos Básicos</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Plan de Prevención de Riesgos Laborales
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Evaluación de Riesgos actualizada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Planificación de la actividad preventiva
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Modalidad de organización preventiva
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Designación de trabajadores/servicio externo
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">👥 Registros de Personal</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Fichas de entrega de EPP
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Registros de formación en PRL
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Información específica de puesto
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Vigilancia de la salud (si procede)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Investigación de accidentes/incidentes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-900">💻 Digitalización Obligatoria 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 text-sm mb-4">
                Desde 2024, las empresas de más de 50 trabajadores deben mantener cierta documentación 
                en formato digital accesible para la Inspección de Trabajo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-900 mb-2">Documentos Digitales Obligatorios:</h5>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Evaluaciones de riesgo actualizadas</li>
                    <li>• Registros de formación con firma digital</li>
                    <li>• Entrega de EPP con timestamp</li>
                    <li>• Planificación preventiva con seguimiento</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-900 mb-2">Requisitos Técnicos:</h5>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Acceso remoto seguro para inspectores</li>
                    <li>• Backup automático y recuperación</li>
                    <li>• Firma electrónica cualificada</li>
                    <li>• Trazabilidad de modificaciones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Casos Prácticos */}
        <section id="casos-practicos" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Casos Prácticos y Jurisprudencia</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-900">Caso: Construcción sin EPP adecuado</CardTitle>
                <Badge className="bg-red-100 text-red-800 w-fit">Sentencia 2023</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hechos</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Empresa constructora no proporcionó arneses anti-caídas certificados EN 361. 
                    Trabajador sufrió caída desde 4 metros con lesiones graves.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sanción Impuesta</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multa: €163,956 (infraction grave)</li>
                      <li>• Suspensión de actividad: 30 días</li>
                      <li>• Exclusión de contratos públicos: 1 año</li>
                      <li>• Recargo de prestaciones: 50%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Lecciones Aprendidas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Verificar certificaciones EN de EPP</li>
                      <li>• Formación específica obligatoria</li>
                      <li>• Supervisión continua del uso</li>
                      <li>• Documentar todas las entregas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-900">Caso: Industria química - Protección respiratoria</CardTitle>
                <Badge className="bg-orange-100 text-orange-800 w-fit">Sentencia 2024</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hechos</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Empresa química proporcionó mascarillas FFP1 para trabajo con disolventes orgánicos. 
                    Múltiples trabajadores desarrollaron problemas respiratorios.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sanción Impuesta</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multa: €409,890 (infraction muy grave)</li>
                      <li>• Cierre temporal: 15 días</li>
                      <li>• Vigilancia médica especial obligatoria</li>
                      <li>• Plan de mejora con seguimiento</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Medidas Correctivas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Respiradores con filtros A2P3</li>
                      <li>• Evaluación higiénica ambiental</li>
                      <li>• Protocolo médico específico</li>
                      <li>• Sistema de renovación de aire</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recursos y Contactos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recursos Oficiales y Contactos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">INSST</CardTitle>
                <Badge className="bg-red-100 text-red-800 w-fit">Instituto Nacional</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Instituto Nacional de Seguridad y Salud en el Trabajo. 
                  Normativas, guías técnicas y documentación oficial.
                </p>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visitar INSST
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">ITSS</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 w-fit">Inspección Trabajo</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Inspección de Trabajo y Seguridad Social. 
                  Consultas, denuncias y criterios de actuación.
                </p>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Portal ITSS
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">BOE</CardTitle>
                <Badge className="bg-green-100 text-green-800 w-fit">Legislación</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Boletín Oficial del Estado. 
                  Acceso directo a toda la legislación actualizada.
                </p>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Consultar BOE
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Asesoría Legal en Prevención de Riesgos?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Nuestros consultores especializados en derecho laboral y PRL pueden ayudarte a mantener 
                tu empresa en cumplimiento normativo y evitar sanciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" variant="secondary">
                    Consulta Legal Gratuita
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Ver Servicios de Consultoría
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Enlaces relacionados */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/guia-nom-009-stps-2011-trabajos-altura" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">NOM-009-STPS-2011</h4>
              <p className="text-sm text-gray-600">Normativa mexicana para trabajos en altura</p>
            </Link>
            <Link href="/blog/guia-completa-epp-seguridad-industrial" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Guía Completa de EPP</h4>
              <p className="text-sm text-gray-600">Todo sobre equipos de protección personal</p>
            </Link>
            <Link href="/servicios" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Consultoría en PRL</h4>
              <p className="text-sm text-gray-600">Servicios profesionales de prevención</p>
            </Link>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
}