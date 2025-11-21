"use client"

import React, { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import BlogLayout from '@/components/blog/BlogLayout'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  BookOpen, 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Gavel, 
  Flame, 
  Activity, 
  Stethoscope, 
  Users, 
  Factory, 
  Search, 
  Download, 
  HelpCircle, 
  Calendar, 
  Clock, 
  MapPin,
  Briefcase,
  FileCheck,
  Siren,
  HardHat
} from 'lucide-react'

// --- DATA STRUCTURES ---

const categories = [
  {
    id: "seguridad",
    title: "Normas de Seguridad",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    description: "Buscan reducir o eliminar los accidentes de trabajo cuidando los aspectos materiales y condiciones físicas.",
    noms: [
      { code: "NOM-001-STPS-2008", title: "Edificios, locales e instalaciones", desc: "Condiciones de seguridad e higiene en los centros de trabajo." },
      { code: "NOM-002-STPS-2010", title: "Prevención y protección contra incendios", desc: "Clasificación de riesgo de incendio y medidas preventivas." },
      { code: "NOM-004-STPS-1999", title: "Sistemas de protección en maquinaria", desc: "Dispositivos de seguridad en maquinaria y equipo." },
      { code: "NOM-005-STPS-1998", title: "Manejo de sustancias químicas peligrosas", desc: "Condiciones de seguridad e higiene para el manejo de sustancias." },
      { code: "NOM-006-STPS-2014", title: "Manejo y almacenamiento de materiales", desc: "Seguridad en la estiba y desestiba, uso de montacargas." },
      { code: "NOM-009-STPS-2011", title: "Trabajos en altura", desc: "Requerimientos para trabajos a más de 1.8m de altura." },
      { code: "NOM-020-STPS-2011", title: "Recipientes sujetos a presión", desc: "Funcionamiento y condiciones de seguridad de calderas y recipientes." },
      { code: "NOM-022-STPS-2015", title: "Electricidad estática", desc: "Condiciones de seguridad en los centros de trabajo." },
      { code: "NOM-027-STPS-2008", title: "Soldadura y corte", desc: "Actividades de soldadura y corte." },
      { code: "NOM-029-STPS-2011", title: "Mantenimiento de instalaciones eléctricas", desc: "Seguridad en el mantenimiento de instalaciones eléctricas." },
      { code: "NOM-033-STPS-2015", title: "Trabajos en espacios confinados", desc: "Seguridad para el acceso y trabajo en espacios confinados." },
      { code: "NOM-034-STPS-2016", title: "Acceso y desarrollo de actividades de trabajadores con discapacidad", desc: "Condiciones de seguridad." },
    ]
  },
  {
    id: "salud",
    title: "Normas de Salud",
    icon: Stethoscope,
    color: "text-green-600",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
    description: "Enfocadas en prevenir enfermedades de trabajo, monitoreando contaminantes y factores de riesgo.",
    noms: [
      { code: "NOM-010-STPS-2014", title: "Agentes químicos contaminantes", desc: "Evaluación y control de agentes químicos." },
      { code: "NOM-011-STPS-2001", title: "Ruido", desc: "Condiciones de seguridad e higiene en centros con ruido." },
      { code: "NOM-012-STPS-2012", title: "Radiaciones ionizantes", desc: "Seguridad y salud en fuentes de radiación." },
      { code: "NOM-013-STPS-1993", title: "Radiaciones no ionizantes", desc: "Control de radiaciones electromagnéticas." },
      { code: "NOM-014-STPS-2000", title: "Presiones ambientales anormales", desc: "Trabajos de buceo o en altitudes extremas." },
      { code: "NOM-015-STPS-2001", title: "Condiciones térmicas elevadas o abatidas", desc: "Exposición a temperaturas extremas." },
      { code: "NOM-024-STPS-2001", title: "Vibraciones", desc: "Exposición laboral a vibraciones." },
      { code: "NOM-025-STPS-2008", title: "Iluminación", desc: "Requerimientos de iluminación en áreas de trabajo." },
      { code: "NOM-035-STPS-2018", title: "Factores de riesgo psicosocial", desc: "Identificación, análisis y prevención." },
      { code: "NOM-036-1-STPS-2018", title: "Factores de riesgo ergonómico", desc: "Manejo manual de cargas." },
      { code: "NOM-037-STPS-2023", title: "Teletrabajo", desc: "Condiciones de seguridad y salud en el trabajo remoto." },
    ]
  },
  {
    id: "organizacion",
    title: "Normas de Organización",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    description: "Regulan la administración de recursos humanos y materiales para la seguridad.",
    noms: [
      { code: "NOM-017-STPS-2008", title: "Equipo de protección personal (EPP)", desc: "Selección, uso y manejo en los centros de trabajo." },
      { code: "NOM-018-STPS-2015", title: "Identificación de peligros y riesgos por sustancias químicas", desc: "Sistema armonizado (GHS)." },
      { code: "NOM-019-STPS-2011", title: "Comisiones de seguridad e higiene", desc: "Constitución, integración, organización y funcionamiento." },
      { code: "NOM-026-STPS-2008", title: "Colores y señales de seguridad", desc: "Identificación de riesgos por fluidos en tuberías." },
      { code: "NOM-028-STPS-2012", title: "Seguridad en procesos y equipos con sustancias químicas", desc: "Administración de la seguridad en procesos críticos." },
      { code: "NOM-030-STPS-2009", title: "Servicios preventivos de seguridad y salud", desc: "Funciones y actividades de los servicios preventivos." },
    ]
  },
  {
    id: "especificas",
    title: "Normas Específicas",
    icon: Factory,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
    description: "Aplicables a ramas de actividad específicas como ferrocarriles, minas, construcción, etc.",
    noms: [
      { code: "NOM-003-STPS-1999", title: "Plaguicidas y fertilizantes", desc: "Actividades agrícolas." },
      { code: "NOM-007-STPS-2000", title: "Instalaciones, maquinaria y herramientas agrícolas", desc: "Seguridad en el campo." },
      { code: "NOM-008-STPS-2013", title: "Aprovechamiento forestal", desc: "Seguridad en aserraderos y manejo de madera." },
      { code: "NOM-016-STPS-2001", title: "Operación y mantenimiento de ferrocarriles", desc: "Seguridad en el sector ferroviario." },
      { code: "NOM-023-STPS-2012", title: "Minas subterráneas y a cielo abierto", desc: "Seguridad en la minería." },
      { code: "NOM-031-STPS-2011", title: "Construcción", desc: "Condiciones de seguridad y salud en obras de construcción." },
      { code: "NOM-032-STPS-2008", title: "Minas subterráneas de carbón", desc: "Seguridad específica para minas de carbón." },
    ]
  },
  {
    id: "producto",
    title: "Normas de Producto",
    icon: FireExtinguisherIcon,
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
    description: "Regulan las especificaciones que deben cumplir los equipos de protección y seguridad.",
    noms: [
      { code: "NOM-113-STPS-2009", title: "Calzado de protección", desc: "Clasificación, especificaciones y métodos de prueba." },
      { code: "NOM-115-STPS-2009", title: "Cascos de protección", desc: "Especificaciones para protección craneal." },
      { code: "NOM-116-STPS-2009", title: "Respiradores purificadores de aire", desc: "Protección contra partículas nocivas." },
    ]
  }
]

// Helper component for icon since FireExtinguisher is not in the initial import list
function FireExtinguisherIcon(props: any) {
  return <Flame {...props} />
}

const detailedNoms = [
  {
    id: "nom-035",
    code: "NOM-035-STPS-2018",
    title: "Factores de Riesgo Psicosocial",
    icon: Activity,
    summary: "Obliga a las empresas a identificar, analizar y prevenir factores de riesgo psicosocial, así como a promover un entorno organizacional favorable.",
    keyPoints: [
      "Aplica a TODOS los centros de trabajo en territorio nacional.",
      "Las obligaciones dependen del número de empleados (0-15, 16-50, >50).",
      "No mide el estrés, sino las condiciones que lo provocan.",
      "Requiere política de prevención por escrito.",
      "Multas de hasta 5,000 UMA por incumplimiento."
    ],
    complianceSteps: [
      "Implementar y difundir una Política de Prevención de Riesgos Psicosociales.",
      "Identificar a los trabajadores que fueron sujetos a acontecimientos traumáticos severos.",
      "Aplicar cuestionarios para identificar factores de riesgo (Guías de Referencia II y III).",
      "Adoptar medidas preventivas y correctivas.",
      "Practicar exámenes médicos y evaluaciones psicológicas a trabajadores expuestos."
    ]
  },
  {
    id: "nom-017",
    code: "NOM-017-STPS-2008",
    title: "Equipo de Protección Personal (EPP)",
    icon: HardHat,
    summary: "Establece los requisitos para la selección, uso y manejo de equipo de protección personal, para proteger a los trabajadores de agentes del medio ambiente de trabajo.",
    keyPoints: [
      "El patrón debe proporcionar el EPP de forma gratuita.",
      "El EPP debe ser seleccionado basado en un análisis de riesgos.",
      "Debe contar con certificación (NOM de producto o internacional).",
      "Los trabajadores están obligados a usarlo y cuidarlo.",
      "Se debe capacitar sobre su uso, revisión, reposición, limpieza y limitaciones."
    ],
    complianceSteps: [
      "Realizar el análisis de riesgos por puesto de trabajo.",
      "Determinar el EPP necesario para cada región anatómica.",
      "Proporcionar el EPP a los trabajadores y registrar la entrega.",
      "Comunicar los riesgos a los que están expuestos.",
      "Supervisar que los trabajadores utilicen el EPP durante su jornada."
    ]
  },
  {
    id: "nom-002",
    code: "NOM-002-STPS-2010",
    title: "Prevención y Protección contra Incendios",
    icon: Flame,
    summary: "Establece los requerimientos para la prevención y protección contra incendios en los centros de trabajo.",
    keyPoints: [
      "Clasificación del riesgo de incendio (Ordinario o Alto).",
      "Requiere un plan de atención a emergencias de incendio.",
      "Obligatoriedad de simulacros (al menos uno al año).",
      "Mantenimiento a extintores y sistemas contra incendio.",
      "Brigadas contra incendio capacitadas."
    ],
    complianceSteps: [
      "Clasificar el grado de riesgo de incendio del centro de trabajo.",
      "Contar con el croquis, plano o mapa general del centro de trabajo.",
      "Instalar y mantener extintores adecuados al tipo de fuego (Clase A, B, C, D, K).",
      "Integrar y capacitar a la brigada contra incendio.",
      "Realizar simulacros de emergencia de incendio."
    ]
  },
  {
    id: "nom-030",
    code: "NOM-030-STPS-2009",
    title: "Servicios Preventivos de Seguridad y Salud",
    icon: Stethoscope,
    summary: "Establece las funciones y actividades que deben realizar los servicios preventivos de seguridad y salud en el trabajo para prevenir accidentes y enfermedades.",
    keyPoints: [
      "Designar a un responsable de seguridad y salud.",
      "Realizar el diagnóstico integral de seguridad y salud.",
      "Elaborar el programa de seguridad y salud en el trabajo.",
      "Es la norma 'madre' para la gestión de la seguridad.",
      "Promueve la mejora continua."
    ],
    complianceSteps: [
      "Designar al responsable de seguridad y salud (interno o externo).",
      "Elaborar el diagnóstico de seguridad y salud en el trabajo.",
      "Establecer el programa de seguridad y salud (o relación de acciones preventivas).",
      "Comunicar el diagnóstico y programa a la comisión de seguridad e higiene.",
      "Dar seguimiento a los avances del programa."
    ]
  },
  {
    id: "nom-019",
    code: "NOM-019-STPS-2011",
    title: "Comisiones de Seguridad e Higiene",
    icon: Users,
    summary: "Establece los lineamientos para la constitución, integración, organización y funcionamiento de las comisiones de seguridad e higiene.",
    keyPoints: [
      "Organismo bipartito (patrón y trabajadores).",
      "Obligatoria en centros con 15 o más trabajadores.",
      "Realizan recorridos de verificación (trimestrales).",
      "Investigan las causas de los accidentes y enfermedades.",
      "Proponen medidas para prevenir riesgos."
    ],
    complianceSteps: [
      "Constituir la comisión mediante acta.",
      "Elaborar el programa anual de recorridos de verificación.",
      "Realizar los recorridos y levantar actas de verificación.",
      "Capacitar a los integrantes de la comisión (al menos una vez al año).",
      "Dar seguimiento a las medidas propuestas."
    ]
  }
]

const finesData = [
  { range: "15 a 50 empleados", amount: "250 a 5000 UMA", desc: "Incumplimiento de normas de seguridad" },
  { range: "Accidente Fatal", amount: "Hasta 5000 UMA", desc: "Por cada norma incumplida relacionada" },
  { range: "Reincidencia", amount: "Doble de la multa", desc: "Si se repite la omisión" },
  { range: "Negativa a Inspección", amount: "Multa Directa", desc: "Obstrucción a la autoridad laboral" }
]

export default function NormativasMexicoContent() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [activeTab, setActiveTab] = useState("seguridad")

  return (
    <BlogLayout>
      <div className="min-h-screen bg-slate-50">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-1 text-base">
                  Actualizado 2025
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Normativas de Seguridad Industrial en México
                  <span className="block text-blue-400 mt-2">Guía Maestra STPS</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  El compendio definitivo de las Normas Oficiales Mexicanas (NOM), leyes y reglamentos que rigen la seguridad laboral en territorio nacional.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                    <Calendar className="w-4 h-4" />
                    <span>Vigencia 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                    <Clock className="w-4 h-4" />
                    <span>30 min de lectura</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                    <MapPin className="w-4 h-4" />
                    <span>Aplica en todo México</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar Navigation (Desktop) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contenido</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <nav className="flex flex-col">
                      {[
                        { id: "marco-legal", label: "Marco Legal" },
                        { id: "categorias", label: "Las 5 Categorías" },
                        { id: "top-noms", label: "NOMs Críticas" },
                        { id: "multas", label: "Multas y Sanciones" },
                        { id: "implementacion", label: "Guía de Implementación" },
                        { id: "faq", label: "Preguntas Frecuentes" },
                      ].map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="px-6 py-3 text-sm text-gray-600 hover:bg-slate-50 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                <Card className="bg-blue-600 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Siren className="w-5 h-5" />
                      ¿Emergencia?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Si tienes una inspección de la STPS en curso, contáctanos para asesoría inmediata.
                    </p>
                    <Button variant="secondary" className="w-full font-bold">
                      Contactar Experto
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Introduction / Marco Legal */}
              <section id="marco-legal" className="scroll-mt-24">
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <Scale className="w-8 h-8 text-blue-600" />
                    El Marco Legal Mexicano
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    La seguridad industrial en México no es una sugerencia, es un mandato constitucional. 
                    Entender la jerarquía de las leyes es el primer paso para el cumplimiento y la prevención de multas millonarias.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-800">
                        <BookOpen className="w-5 h-5" />
                        1. Constitución Política (CPEUM)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        <strong>Artículo 123, Apartado A:</strong> Establece la responsabilidad de los patrones de observar los preceptos legales sobre higiene y seguridad, y de prevenir accidentes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-indigo-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-indigo-800">
                        <Gavel className="w-5 h-5" />
                        2. Ley Federal del Trabajo (LFT)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Regula las relaciones laborales. Define accidentes y enfermedades de trabajo, y establece las obligaciones patronales específicas (Art. 132 y 472-515).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-purple-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-800">
                        <FileText className="w-5 h-5" />
                        3. Reglamento Federal (RFSST)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        El <strong>Reglamento Federal de Seguridad y Salud en el Trabajo</strong> detalla cómo cumplir con la ley. Es la base operativa para las inspecciones.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-green-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-800">
                        <CheckCircle2 className="w-5 h-5" />
                        4. Normas Oficiales (NOM-STPS)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Son las regulaciones técnicas obligatorias. Actualmente existen <strong>44 normas vigentes</strong> emitidas por la STPS que aplican según el giro y riesgos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Las 5 Categorías */}
              <section id="categorias" className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                    Las 5 Categorías de Normas STPS
                  </h2>
                  <p className="text-gray-600">
                    Para facilitar su aplicación, la STPS agrupa las normas en cinco grandes rubros. Identificar cuáles aplican a tu empresa es vital.
                  </p>
                </div>

                <Tabs defaultValue="seguridad" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1 bg-slate-100 rounded-xl">
                    {categories.map((cat) => (
                      <TabsTrigger 
                        key={cat.id} 
                        value={cat.id}
                        className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all"
                      >
                        <cat.icon className={`w-5 h-5 ${activeTab === cat.id ? cat.color : 'text-gray-500'}`} />
                        <span className="text-xs font-bold">{cat.title.replace("Normas de ", "")}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {categories.map((cat) => (
                    <TabsContent key={cat.id} value={cat.id} className="mt-6">
                      <Card className={`border-t-4 ${cat.borderColor}`}>
                        <CardHeader className={cat.bgColor}>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 bg-white rounded-full shadow-sm ${cat.color}`}>
                              <cat.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{cat.title}</CardTitle>
                              <CardDescription className="text-slate-700 font-medium mt-1">
                                {cat.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            {cat.noms.map((nom) => (
                              <div key={nom.code} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                                <div className="mt-1">
                                  <Badge variant="outline" className="font-mono font-bold text-slate-700 bg-slate-100">
                                    {nom.code.split('-')[1]}
                                  </Badge>
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-900 text-sm">{nom.title}</h4>
                                  <p className="text-xs text-slate-500 mt-1">{nom.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </section>

              {/* Deep Dive - NOMs Críticas */}
              <section id="top-noms" className="scroll-mt-24">
                <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8">
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-yellow-400" />
                    Análisis Profundo: Las NOMs Más Inspeccionadas
                  </h2>
                  <p className="text-slate-300">
                    Estas son las normas que generan el 80% de las multas en México. Si vas a empezar por algún lado, empieza por aquí.
                  </p>
                </div>

                <div className="space-y-6">
                  {detailedNoms.map((nom) => (
                    <Card key={nom.id} className="overflow-hidden border-2 hover:border-blue-400 transition-colors group">
                      <CardHeader className="bg-slate-50 border-b">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm border group-hover:scale-110 transition-transform">
                              <nom.icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                              <Badge className="mb-2 bg-slate-200 text-slate-800 hover:bg-slate-300">
                                {nom.code}
                              </Badge>
                              <CardTitle className="text-xl md:text-2xl">{nom.title}</CardTitle>
                            </div>
                          </div>
                          <Button variant="outline" className="gap-2">
                            <Download className="w-4 h-4" />
                            Descargar PDF Oficial
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-lg text-gray-700 mb-6 font-medium">
                          {nom.summary}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                              <KeyIcon className="w-5 h-5 text-yellow-500" />
                              Puntos Clave
                            </h4>
                            <ul className="space-y-3">
                              {nom.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-5 rounded-xl">
                            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                              <FileCheck className="w-5 h-5 text-blue-600" />
                              Lista de Cumplimiento
                            </h4>
                            <ul className="space-y-3">
                              {nom.complianceSteps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-blue-800">
                                  <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                    {idx + 1}
                                  </div>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Multas y Sanciones */}
              <section id="multas" className="scroll-mt-24">
                <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-3xl">
                  <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <Gavel className="w-8 h-8" />
                    El Costo del Incumplimiento: Multas 2025
                  </h2>
                  
                  <p className="text-red-800 mb-8 text-lg">
                    Las multas de la STPS se calculan en <strong>UMA (Unidad de Medida y Actualización)</strong>. 
                    Para 2024-2025, el valor de la UMA diaria ronda los $108.57 MXN (sujeto a actualización en febrero).
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white border-red-100 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-red-700">Rango de Multas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Situación</TableHead>
                              <TableHead>Multa (UMA)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {finesData.map((fine, idx) => (
                              <TableRow key={idx}>
                                <TableCell className="font-medium">{fine.range}</TableCell>
                                <TableCell className="text-red-600 font-bold">{fine.amount}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>

                    <div className="space-y-4">
                      <Alert variant="destructive" className="bg-red-100 border-red-200">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>¡Cuidado!</AlertTitle>
                        <AlertDescription>
                          Las multas son <strong>acumulativas</strong>. Si te faltan 10 constancias de capacitación, te pueden multar 10 veces por ese concepto.
                        </AlertDescription>
                      </Alert>

                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">¿Qué hacer ante una inspección?</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                          <li>Verificar la identidad del inspector.</li>
                          <li>Revisar la orden de inspección (datos correctos).</li>
                          <li>Atender la diligencia con amabilidad pero firmeza.</li>
                          <li>Firmar el acta (no implica aceptar culpa, solo presencia).</li>
                          <li>Tienes <strong>5 días hábiles</strong> para presentar pruebas iniciales.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Guía de Implementación */}
              <section id="implementacion" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Construction className="w-8 h-8 text-blue-600" />
                  Ruta Crítica de Implementación
                </h2>

                <div className="relative border-l-4 border-blue-200 ml-6 space-y-12">
                  {[
                    { 
                      title: "Diagnóstico Inicial", 
                      desc: "Realiza un recorrido por tu centro de trabajo. Identifica riesgos evidentes (cables sueltos, falta de extintores, ruido excesivo).",
                      icon: Search
                    },
                    { 
                      title: "Marco Legal Aplicable", 
                      desc: "Usa el 'Asistente para la Identificación de las Normas Oficiales Mexicanas' de la STPS para saber qué NOMs te aplican.",
                      icon: BookOpen
                    },
                    { 
                      title: "Comisión de Seguridad", 
                      desc: "Constituye tu Comisión de Seguridad e Higiene (NOM-019). Es tu equipo base para todo lo demás.",
                      icon: Users
                    },
                    { 
                      title: "Documentación Base", 
                      desc: "Elabora tus estudios de riesgo (Incendio, EPP, Maquinaria). Sin estudios, no puedes definir medidas.",
                      icon: FileText
                    },
                    { 
                      title: "Capacitación", 
                      desc: "Capacita a tu personal (DC-3). La capacitación debe ser específica a los riesgos de su puesto.",
                      icon: GraduationCapIcon
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute -left-[2.75rem] bg-blue-600 text-white p-3 rounded-full shadow-lg">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">Paso {idx + 1}: {step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{step.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24 mb-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-blue-600" />
                  Preguntas Frecuentes
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "¿La NOM-035 aplica si tengo solo 2 empleados?",
                      a: "Sí. La NOM-035 aplica a TODOS los centros de trabajo. Sin embargo, para centros con menos de 15 empleados, las obligaciones son menores (básicamente política de prevención y medidas para eventos traumáticos severos), no requieren aplicar todos los cuestionarios."
                    },
                    {
                      q: "¿Es obligatorio contratar una unidad verificadora (UV)?",
                      a: "Depende de la norma. Para la mayoría (como NOM-002, NOM-017), la evaluación de la conformidad puede realizarla el propio patrón o una UV. Sin embargo, para recipientes a presión (NOM-020) o condiciones muy específicas, la UV es altamente recomendada o requerida para obtener dictámenes con validez oficial inmediata."
                    },
                    {
                      q: "¿Qué es el PASST?",
                      a: "Es el Programa de Autogestión en Seguridad y Salud en el Trabajo. Es un programa voluntario de la STPS donde las empresas con bajos índices de siniestralidad pueden inscribirse para obtener el reconocimiento de 'Empresa Segura' y evitar inspecciones periódicas ordinarias."
                    },
                    {
                      q: "¿Cada cuánto se deben renovar los DC-3?",
                      a: "La ley no establece una vigencia única para todas las constancias DC-3, depende del plan de capacitación de la empresa. Sin embargo, normas específicas como Montacargas (NOM-006) o Alturas (NOM-009) sugieren o requieren recertificación anual o bianual para garantizar la competencia técnica vigente."
                    }
                  ].map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-lg font-semibold text-slate-800">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  )
}

// Helper icons
function KeyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  )
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
