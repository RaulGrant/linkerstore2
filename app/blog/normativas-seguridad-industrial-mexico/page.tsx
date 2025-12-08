'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Info, Download, ExternalLink, CheckCircle, FileText, Building } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { trackBlogView, trackInteraction } from '@/lib/meta-pixel';

// Import components
import HeroNormativas from '@/components/blog/NormativasMexico/HeroNormativas';
import TopProducts from '@/components/blog/NormativasMexico/TopProducts';
import SectionBlock from '@/components/blog/ManualCascos/SectionBlock';
import SideBanners from '@/components/blog/NormativasMexico/SideBanners';
import RelatedGuidesBanner from '@/components/blog/NormativasMexico/RelatedGuidesBanner';

export default function GuiaNormativasSeguridadMexico() {
  const [showSideBanners, setShowSideBanners] = useState(true);
  const [showHeroCTAs, setShowHeroCTAs] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);

  // Track page view
  useEffect(() => {
    trackBlogView('normativas-seguridad-industrial-mexico', 'Normativas de Seguridad Industrial en México | Guía Completa 2024', 'guia_legal');
  }, []);

  // Screen size detection
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1920; // 24"+ monitors
      setIsLargeScreen(isLarge);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      // Hide hero CTAs when hero is out of view
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        setShowHeroCTAs(heroRect.bottom > 0 && heroRect.top < window.innerHeight);
      }

      // Show side banners from section 1 start to section 6 end
      if (section1Ref.current && section6Ref.current) {
        const section1Rect = section1Ref.current.getBoundingClientRect();
        const section6Rect = section6Ref.current.getBoundingClientRect();
        
        const section1Started = section1Rect.top < window.innerHeight;
        const section6Ended = section6Rect.bottom < 0;
        
        setShowSideBanners(section1Started && !section6Ended);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 7 Sections Data
  const sectionsData = [
    {
      sectionNumber: 1,
      title: "Marco Legal de Seguridad Industrial en México",
      subtitle: "Fundamentos constitucionales y legislativos que regulan la seguridad y salud en el trabajo",
      content: {
        introduction: "El marco legal mexicano en materia de seguridad y salud en el trabajo se sustenta en la Constitución Política de los Estados Unidos Mexicanos, específicamente en el Artículo 123, que establece el derecho fundamental de los trabajadores a laborar en condiciones seguras. Este marco se complementa con la Ley Federal del Trabajo (LFT) y un extenso catálogo de Normas Oficiales Mexicanas (NOM-STPS) que regulan aspectos específicos de la prevención de riesgos laborales. La Secretaría del Trabajo y Previsión Social (STPS), en coordinación con el Instituto Mexicano del Seguro Social (IMSS), es la autoridad competente para vigilar el cumplimiento de estas disposiciones y sancionar las infracciones correspondientes.",
        expertQuote: {
          text: "El cumplimiento de las NOM-STPS no solo es una obligación legal, sino una inversión en capital humano que reduce costos por accidentes, aumenta la productividad y mejora el clima laboral. Las empresas que priorizan la seguridad industrial experimentan hasta 40% menos rotación de personal.",
          source: "Dr. Roberto Sánchez, Especialista en Seguridad Industrial y Salud Ocupacional"
        },
        keyPoints: [
          "Artículo 123 Constitucional: Base del derecho laboral mexicano, garantiza condiciones seguras de trabajo",
          "Ley Federal del Trabajo: Capítulos específicos sobre seguridad, higiene y medio ambiente laboral",
          "NOM-STPS: 41 normas oficiales vigentes que regulan aspectos técnicos de prevención",
          "Autoridades: STPS e IMSS coordinan inspecciones y aplicación de sanciones",
          "Ámbito de aplicación: Obligatorio para todos los centros de trabajo en territorio nacional"
        ],
        recommendations: [
          "Designar un responsable interno de seguridad industrial que conozca profundamente el marco normativo",
          "Realizar una auditoría inicial de cumplimiento para identificar brechas normativas prioritarias",
          "Establecer un calendario de actualización normativa trimestral consultando el DOF",
          "Implementar un sistema documental robusto que evidencie el cumplimiento ante inspecciones",
          "Capacitar a todo el personal sobre sus derechos laborales y obligaciones en materia de seguridad"
        ],
        callToAction: {
          text: "Descubre equipos de protección certificados que cumplen con las NOM-STPS vigentes",
          link: "/catalogo"
        }
      },
      icon: "⚖️",
      bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      variant: "featured" as const
    },
    {
      sectionNumber: 2,
      title: "Panorama General de las NOM-STPS",
      subtitle: "Estructura y clasificación del sistema normativo de seguridad y salud en el trabajo",
      content: {
        introduction: "Las Normas Oficiales Mexicanas de la Secretaría del Trabajo y Previsión Social (NOM-STPS) constituyen el marco regulatorio técnico que establece las condiciones mínimas de seguridad e higiene que deben cumplir los centros de trabajo. Actualmente existen 41 NOM-STPS vigentes, organizadas en cinco grandes categorías: seguridad, salud, organización, específicas y de producto. Estas normas son de observancia obligatoria en todo el territorio nacional y su incumplimiento puede derivar en sanciones económicas, clausuras y responsabilidades legales. Cada norma define su campo de aplicación, especificaciones técnicas, métodos de evaluación y evidencias documentales requeridas.",
        expertQuote: {
          text: "Las NOM-STPS evolucionan constantemente para adaptarse a nuevas tecnologías y riesgos emergentes. Las empresas deben mantener un sistema de vigilancia normativa para identificar modificaciones, nuevas publicaciones y periodos de transición que impacten sus operaciones.",
          source: "Ing. María Fernanda López, Consultora en Cumplimiento Normativo STPS"
        },
        keyPoints: [
          "5 categorías principales: Seguridad (prevención), Salud (higiene), Organización (gestión), Específicas (sectores) y Producto (EPP)",
          "NOM-030-STPS: Marco general de servicios preventivos de seguridad y salud en el trabajo",
          "Actualización constante: Publicaciones en el Diario Oficial de la Federación (DOF)",
          "Aplicabilidad diferenciada: Según tamaño de empresa, número de trabajadores y giro industrial",
          "Evidencia documental: Cada norma especifica registros, programas y constancias obligatorias"
        ],
        recommendations: [
          "Realizar una matriz de aplicabilidad normativa específica para el giro y tamaño de tu empresa",
          "Suscribirse a las actualizaciones del DOF para identificar modificaciones normativas oportunamente",
          "Priorizar implementación por nivel de riesgo: primero normas de seguridad crítica, luego salud y organización",
          "Contratar asesoría especializada para normas técnicas complejas (ergonomía, ruido, químicos)",
          "Documentar todas las acciones de cumplimiento con fechas, responsables y evidencias fotográficas"
        ],
        callToAction: {
          text: "Encuentra EPP certificado según las NOM-STPS aplicables a tu industria",
          link: "/catalogo"
        }
      },
      icon: "📋",
      bgGradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      variant: "alternate" as const
    },
    {
      sectionNumber: 3,
      title: "Clasificación y Categorías de las Normas",
      subtitle: "Organización temática del catálogo normativo NOM-STPS para facilitar su comprensión e implementación",
      content: {
        introduction: "El catálogo de NOM-STPS se organiza en categorías temáticas que permiten a las empresas identificar rápidamente las normas aplicables a su actividad. Las normas de SEGURIDAD previenen accidentes (maquinaria, electricidad, alturas, espacios confinados); las de SALUD protegen contra enfermedades ocupacionales (ruido, químicos, ergonomía); las de ORGANIZACIÓN establecen sistemas de gestión (comisiones de seguridad, capacitación); las ESPECÍFICAS regulan sectores particulares (minería, construcción, agrícola); y las de PRODUCTO certifican EPP. Esta clasificación facilita la implementación progresiva según prioridades de riesgo.",
        expertQuote: {
          text: "Una estrategia efectiva de cumplimiento normativo comienza identificando las 5-7 normas críticas aplicables al giro de la empresa, implementándolas completamente, y luego expandiendo gradualmente hacia normas complementarias. Intentar cumplir todas simultáneamente genera parálisis por análisis.",
          source: "Lic. Carlos Ramírez, Auditor Certificado en Sistemas de Gestión de SST"
        },
        keyPoints: [
          "Normas de Seguridad (NOM-001 a NOM-034): Prevención de accidentes por riesgos físicos y mecánicos",
          "Normas de Salud (NOM-010, 011, 013, 014, 015, 024, 025): Protección contra agentes nocivos",
          "Normas de Organización (NOM-019, 030): Comisiones de seguridad, servicios preventivos",
          "Normas Específicas (NOM-003, 004, 023, 031, 032): Sectores minería, construcción, forestal, minas subterráneas",
          "Normas de Producto (NOM-115, 116, 113): Especificaciones técnicas de EPP certificado"
        ],
        recommendations: [
          "Desarrollar una matriz de riesgos que correlacione peligros identificados con normas aplicables",
          "Priorizar normas según la jerarquía: primero seguridad crítica, luego salud, después organización",
          "Para empresas nuevas: iniciar con NOM-001 (Edificios), NOM-002 (Incendios), NOM-017 (EPP)",
          "Verificar tablas de aplicabilidad en cada norma (número de trabajadores, giro, tipo de riesgo)",
          "Consultar al Instituto Mexicano del Seguro Social para validar normas aplicables a tu clase de riesgo"
        ],
        callToAction: {
          text: "Adquiere EPP que cumple con las normas de producto NOM-115 y NOM-116",
          link: "/catalogo"
        }
      },
      icon: "🗂️",
      bgGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      variant: "default" as const
    },
    {
      sectionNumber: 4,
      title: "Obligaciones Patronales Fundamentales",
      subtitle: "Responsabilidades legales ineludibles del empleador en materia de seguridad y salud laboral",
      content: {
        introduction: "La Ley Federal del Trabajo establece obligaciones patronales específicas en los artículos 132, 504 y 512-D. El patrón debe proporcionar EPP sin costo, capacitar en su uso correcto, mantener condiciones seguras en instalaciones, realizar análisis de riesgos, formar comisiones de seguridad e higiene, elaborar programas de prevención, registrar accidentes y enfermedades laborales ante el IMSS, y permitir inspecciones de autoridades. El incumplimiento genera responsabilidad civil, penal y administrativa, incluyendo multas económicas que van desde 15 hasta 20,450 UMAs ($1,543 a $2,106,355 pesos), clausuras parciales o totales, e incluso prisión en casos de muerte o incapacidad permanente de trabajadores.",
        expertQuote: {
          text: "La capacitación es la obligación patronal más frecuentemente incumplida y fiscalizada. No basta con impartir cursos; se requiere evidencia documental con lista de asistencia, constancias DC-3, evaluaciones de aprendizaje y seguimiento de efectividad en campo. Las autoridades solicitan esta documentación en el 95% de las inspecciones.",
          source: "Mtra. Ana Patricia Gutiérrez, Especialista en Derecho Laboral y Seguridad Social"
        },
        keyPoints: [
          "Proporcionar EPP gratuito, apropiado al riesgo, certificado y en buen estado (Art. 132 fracción XVI LFT)",
          "Capacitación obligatoria: Inducción, anual de riesgos específicos, uso de EPP y equipo (NOM-019)",
          "Comisiones de Seguridad e Higiene: Constitución, registro STPS, reuniones mensuales con actas (NOM-019)",
          "Programas de prevención: Específicos según normas aplicables (incendios, químicos, ergonomía)",
          "Notificación de riesgos: Análisis de puestos, señalización, hojas de seguridad de sustancias químicas",
          "Exámenes médicos: Ingreso, periódicos, cambio de puesto, egreso según exposición a riesgos (NOM-030)"
        ],
        recommendations: [
          "Crear expedientes individuales de trabajadores con constancias de capacitación, entrega de EPP y exámenes médicos",
          "Documentar con fotografías fechadas las condiciones de seguridad de instalaciones y EPP entregado",
          "Elaborar procedimientos escritos de trabajo seguro para tareas de alto riesgo",
          "Mantener registros de mantenimiento preventivo de maquinaria, equipos y sistemas de protección",
          "Realizar simulacros de emergencia trimestrales con evidencia de participación y mejoras identificadas",
          "Contratar un seguro de responsabilidad civil patronal que cubra accidentes laborales graves"
        ],
        callToAction: {
          text: "Cumple con tu obligación de proporcionar EPP certificado a tus trabajadores",
          link: "/catalogo"
        }
      },
      icon: "🏭",
      bgGradient: "bg-gradient-to-br from-orange-500 to-red-600",
      variant: "featured" as const
    },
    {
      sectionNumber: 5,
      title: "Comisiones de Seguridad e Higiene",
      subtitle: "Integración, funciones y operación del órgano colegiado de prevención de riesgos laborales",
      content: {
        introduction: "La NOM-019-STPS-2011 establece la obligatoriedad de constituir Comisiones de Seguridad e Higiene en centros de trabajo con más de 15 trabajadores. Estas comisiones son órganos colegiados integrados paritariamente por representantes del patrón y de los trabajadores, con funciones de investigar accidentes, vigilar condiciones de seguridad, promover capacitación y proponer medidas correctivas. Deben realizar reuniones mensuales documentadas con actas firmadas, recorridos de verificación, investigaciones de accidentes e incidentes, y dar seguimiento a recomendaciones. Su correcta operación reduce hasta un 50% la incidencia de accidentes laborales.",
        expertQuote: {
          text: "La comisión de seguridad no es un requisito burocrático, es el motor del sistema de gestión de SST. Cuando opera efectivamente con participación genuina de trabajadores, se convierte en el mejor sensor de riesgos emergentes y generador de soluciones prácticas adaptadas a la realidad operativa de la empresa.",
          source: "Ing. Jorge Mendoza, Coordinador de Seguridad Industrial en sector manufacturero"
        },
        keyPoints: [
          "Integración paritaria: Igual número de representantes patronales y de trabajadores (NOM-019)",
          "Coordinador: Preferentemente con experiencia en seguridad, capacitado en la norma",
          "Reuniones mensuales: Mínimo 1 por mes, actas con agenda, acuerdos, responsables y fechas compromiso",
          "Recorridos de verificación: Inspecciones programadas de instalaciones con reporte de condiciones inseguras",
          "Investigación de accidentes: Análisis de causas raíz, medidas correctivas y preventivas documentadas",
          "Registro ante STPS: Acta constitutiva con firmas de integrantes y constancia de registro estatal"
        ],
        recommendations: [
          "Seleccionar coordinadores con liderazgo, conocimiento del proceso productivo y respaldo de la dirección",
          "Capacitar a todos los integrantes en identificación de peligros, análisis de causas raíz y normatividad",
          "Utilizar formatos estandarizados para actas, recorridos e investigaciones que faciliten documentación",
          "Establecer indicadores de desempeño: actos/condiciones inseguras detectados, medidas implementadas, plazo promedio de cierre",
          "Asignar presupuesto específico para que la comisión pueda implementar mejoras sin depender de autorizaciones",
          "Realizar capacitación anual de actualización normativa para mantener vigencia del conocimiento"
        ],
        callToAction: {
          text: "Equipa a tu comisión de seguridad con instrumentos de medición y EPP para recorridos",
          link: "/catalogo"
        }
      },
      icon: "👥",
      bgGradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
      variant: "default" as const
    },
    {
      sectionNumber: 6,
      title: "Inspecciones y Régimen Sancionador",
      subtitle: "Proceso de fiscalización, tipos de sanciones y recursos de defensa legal disponibles",
      content: {
        introduction: "La STPS realiza inspecciones ordinarias (programadas) y extraordinarias (por denuncia o accidente grave) para verificar el cumplimiento de la normatividad laboral. El proceso consta de tres etapas: notificación de visita (orden de inspección), desarrollo (recorrido de instalaciones, revisión documental, entrevistas), y conclusión (acta de inspección y emplazamiento). Las sanciones van desde amonestaciones hasta multas económicas de $1,543 a $2,106,355 pesos según gravedad, clausuras parciales/totales y hasta definitivas en casos de reincidencia. Los patrones tienen derecho a recursos de defensa: revocación ante la STPS (15 días), amparo ante juzgados federales (15 días) o revisión ante el TFJA (45 días).",
        expertQuote: {
          text: "El 80% de las sanciones en inspecciones provienen de deficiencias documentales, no de condiciones físicas de seguridad. Las empresas deben entender que el cumplimiento normativo requiere evidencia escrita: programas vigentes, actas de comisión firmadas, constancias de capacitación DC-3, y registros de mantenimiento.",
          source: "Lic. Fernando Castillo, Ex Inspector Federal del Trabajo STPS"
        },
        keyPoints: [
          "Tipos de inspección: Ordinaria (programada), extraordinaria (denuncia/accidente), comprobatoria (verificar correcciones)",
          "Derechos del patrón: Exigir identificación del inspector, tener testigos de asistencia, recibir copia del acta",
          "Infracciones leves: 15-155 UMAs ($1,543-$15,953) - Falta de señalización, registros incompletos",
          "Infracciones graves: 156-770 UMAs ($16,056-$79,289) - Ausencia de comisión, falta de capacitación",
          "Infracciones muy graves: 771-20,450 UMAs ($79,391-$2,106,355) - Riesgo inminente, reincidencia, ocultar accidentes",
          "Medidas de seguridad: Clausura parcial/total inmediata si existe riesgo grave e inminente para trabajadores"
        ],
        recommendations: [
          "Preparar un 'Kit de Inspección' con todos los documentos relevantes organizados por norma aplicable",
          "Designar un responsable de atención a inspecciones capacitado en procedimientos y derechos patronales",
          "En caso de emplazamiento: contratar abogado laboralista especializado para análisis y estrategia de defensa",
          "Documentar fotográficamente con fecha todas las condiciones de seguridad actuales como evidencia",
          "Atender emplazamientos dentro de los plazos establecidos para acceder a descuentos por pronto pago (hasta 20%)",
          "Implementar mejoras inmediatamente tras inspección para demostrar buena fe en inspección comprobatoria"
        ],
        callToAction: {
          text: "Evita sanciones: asegura que tu personal cuente con EPP certificado y en buenas condiciones",
          link: "/catalogo"
        }
      },
      icon: "🔍",
      bgGradient: "bg-gradient-to-br from-red-500 to-rose-600",
      variant: "alternate" as const
    },
    {
      sectionNumber: 7,
      title: "Estrategia de Implementación Práctica",
      subtitle: "Metodología paso a paso para establecer un sistema de cumplimiento normativo efectivo y sostenible",
      content: {
        introduction: "Implementar un sistema de cumplimiento normativo NOM-STPS requiere un enfoque estructurado en fases: (1) Diagnóstico inicial mediante auditoría de brechas normativas, (2) Priorización según nivel de riesgo y probabilidad de inspección, (3) Desarrollo de documentación (políticas, programas, procedimientos), (4) Implementación física (señalización, EPP, controles ingenieriles), (5) Capacitación del personal, (6) Monitoreo y mejora continua. Este proceso puede tomar de 6 a 18 meses dependiendo del tamaño de la organización, pero genera retornos inmediatos: reducción de accidentalidad (30-50%), menor ausentismo (15-25%), incremento de productividad (10-20%) y protección legal ante contingencias.",
        expertQuote: {
          text: "La sostenibilidad del cumplimiento normativo depende de integrar la seguridad en la cultura organizacional, no solo en procedimientos documentados. Cuando cada trabajador entiende que la normatividad existe para protegerlo a él y a sus compañeros, el cumplimiento deja de ser una imposición y se convierte en un valor compartido.",
          source: "Dr. Alejandro Torres, Consultor en Cultura de Seguridad y Comportamiento Organizacional"
        },
        keyPoints: [
          "Fase 1 - Diagnóstico (mes 1-2): Auditoría de cumplimiento, identificación de brechas, estimación de inversión requerida",
          "Fase 2 - Planificación (mes 2-3): Priorización de normas, asignación de responsabilidades, presupuestación",
          "Fase 3 - Documentación (mes 3-6): Elaboración de programas, políticas, procedimientos y formatos requeridos",
          "Fase 4 - Implementación física (mes 4-9): Adquisición de EPP, señalización, controles, adecuaciones en instalaciones",
          "Fase 5 - Capacitación (mes 6-12): Programas de formación, evaluaciones, certificación interna",
          "Fase 6 - Mejora continua (mes 12+): Auditorías internas, actualización normativa, indicadores de desempeño"
        ],
        recommendations: [
          "Contratar consultoría externa para diagnóstico inicial y validación de documentación clave",
          "Asignar un Gerente de Seguridad y Salud con dedicación exclusiva y reporte directo a dirección general",
          "Implementar software de gestión de SST para centralizar documentación, capacitaciones y seguimiento de acciones",
          "Establecer KPIs claros: índice de frecuencia, gravedad, capacitación completada, auditorías internas realizadas",
          "Crear un programa de incentivos por cumplimiento de metas de seguridad (individual y por área)",
          "Renovar certificación de cumplimiento anual mediante auditoría externa para validar sistema de gestión"
        ],
        callToAction: {
          text: "Inicia tu implementación adquiriendo el EPP certificado que tu empresa necesita",
          link: "/catalogo"
        }
      },
      icon: "🎯",
      bgGradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      variant: "default" as const
    }
  ];

  return (
    <BlogLayout>
      <article className="relative">
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroNormativas showHeroCTAs={showHeroCTAs} />
        </div>

        {/* Side Banners - ONLY on 24"+ screens, visible from section 1 to section 6 */}
        {isLargeScreen && <SideBanners showBanners={showSideBanners} />}

        {/* Top Products Section */}
        <TopProducts />

        {/* 7 Section Blocks */}
        <div id="marco-legal" ref={section1Ref}>
          <SectionBlock
            sectionNumber={sectionsData[0].sectionNumber}
            title={sectionsData[0].title}
            subtitle={sectionsData[0].subtitle}
            content={sectionsData[0].content}
            icon={sectionsData[0].icon}
            bgGradient={sectionsData[0].bgGradient}
            variant={sectionsData[0].variant}
          />
        </div>

        <SectionBlock
          sectionNumber={sectionsData[1].sectionNumber}
          title={sectionsData[1].title}
          subtitle={sectionsData[1].subtitle}
          content={sectionsData[1].content}
          icon={sectionsData[1].icon}
          bgGradient={sectionsData[1].bgGradient}
          variant={sectionsData[1].variant}
        />

        <SectionBlock
          sectionNumber={sectionsData[2].sectionNumber}
          title={sectionsData[2].title}
          subtitle={sectionsData[2].subtitle}
          content={sectionsData[2].content}
          icon={sectionsData[2].icon}
          bgGradient={sectionsData[2].bgGradient}
          variant={sectionsData[2].variant}
        />

        <SectionBlock
          sectionNumber={sectionsData[3].sectionNumber}
          title={sectionsData[3].title}
          subtitle={sectionsData[3].subtitle}
          content={sectionsData[3].content}
          icon={sectionsData[3].icon}
          bgGradient={sectionsData[3].bgGradient}
          variant={sectionsData[3].variant}
        />

        <SectionBlock
          sectionNumber={sectionsData[4].sectionNumber}
          title={sectionsData[4].title}
          subtitle={sectionsData[4].subtitle}
          content={sectionsData[4].content}
          icon={sectionsData[4].icon}
          bgGradient={sectionsData[4].bgGradient}
          variant={sectionsData[4].variant}
        />

        <div ref={section6Ref}>
          <SectionBlock
            sectionNumber={sectionsData[5].sectionNumber}
            title={sectionsData[5].title}
            subtitle={sectionsData[5].subtitle}
            content={sectionsData[5].content}
            icon={sectionsData[5].icon}
            bgGradient={sectionsData[5].bgGradient}
            variant={sectionsData[5].variant}
          />
        </div>

        <SectionBlock
          sectionNumber={sectionsData[6].sectionNumber}
          title={sectionsData[6].title}
          subtitle={sectionsData[6].subtitle}
          content={sectionsData[6].content}
          icon={sectionsData[6].icon}
          bgGradient={sectionsData[6].bgGradient}
          variant={sectionsData[6].variant}
        />

        {/* Recursos y Enlaces Oficiales - PRESERVED AS IS */}
        <motion.section 
          id="recursos-oficiales"
          className="mb-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              📋 Recursos y Enlaces Oficiales
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Accede directamente a las fuentes oficiales del gobierno mexicano para consultar normativas, 
              descargar documentos actualizados y mantenerte al día con las regulaciones de seguridad laboral.
            </motion.p>
          </div>

          {/* Documentos Oficiales */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="w-8 h-8 text-blue-700" />
              </div>
              Documentos Oficiales para Descarga
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Catálogo NOM-STPS Vigentes",
                  description: "Consulta todas las normas oficiales mexicanas de seguridad y salud en el trabajo actualizadas.",
                  url: "https://asinom.stps.gob.mx/centro/centromarconormativo.aspx",
                  icon: "📚",
                  color: "from-blue-500 to-indigo-600",
                  bgGradient: "from-blue-50 to-indigo-50",
                  hoverColor: "group-hover:from-blue-600 group-hover:to-indigo-700"
                },
                {
                  title: "Ley Federal del Trabajo",
                  description: "Descarga la versión más actualizada de la LFT con las últimas reformas en materia laboral.",
                  url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
                  icon: "⚖️",
                  color: "from-green-500 to-emerald-600",
                  bgGradient: "from-green-50 to-emerald-50",
                  hoverColor: "group-hover:from-green-600 group-hover:to-emerald-700"
                },
                {
                  title: "Reglamento Federal SST",
                  description: "Reglamento completo de Seguridad y Salud en el Trabajo con procedimientos detallados.",
                  url: "https://www.diputados.gob.mx/LeyesBiblio/regla/n152.pdf",
                  icon: "🛡️",
                  color: "from-red-500 to-rose-600",
                  bgGradient: "from-red-50 to-rose-50",
                  hoverColor: "group-hover:from-red-600 group-hover:to-rose-700"
                }
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    onClick={() => trackInteraction('document_download', doc.title, 'normativas_resources')}
                  >
                    <div className={`bg-gradient-to-br ${doc.bgGradient} border-2 border-transparent group-hover:border-gray-200 rounded-2xl p-6 h-full transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                      <div className="text-center">
                        <div className={`inline-flex p-4 bg-gradient-to-r ${doc.color} ${doc.hoverColor} rounded-xl transition-all duration-300 group-hover:scale-110 mb-4`}>
                          <span className="text-4xl">{doc.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                          {doc.description}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                          <Download className="w-5 h-5 group-hover:animate-bounce" />
                          <span className="text-base">Descargar PDF</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sitios Web Oficiales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <div className="p-3 bg-green-100 rounded-full">
                <Building className="w-8 h-8 text-green-700" />
              </div>
              Portales Gubernamentales Oficiales
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Secretaría del Trabajo y Previsión Social",
                  description: "Portal oficial de la STPS con información, trámites y servicios relacionados con normatividad laboral.",
                  url: "https://www.gob.mx/stps",
                  icon: "🏛️",
                  color: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 to-cyan-50",
                  hoverColor: "group-hover:from-blue-700 group-hover:to-cyan-700"
                },
                {
                  title: "Instituto Mexicano del Seguro Social",
                  description: "Accede a información sobre prevención de riesgos de trabajo y servicios de salud ocupacional.",
                  url: "https://www.gob.mx/imss",
                  icon: "🏥",
                  color: "from-green-600 to-teal-600",
                  bgGradient: "from-green-50 to-teal-50",
                  hoverColor: "group-hover:from-green-700 group-hover:to-teal-700"
                },
                {
                  title: "Diario Oficial de la Federación",
                  description: "Consulta las publicaciones oficiales, nuevas normativas y modificaciones a la legislación vigente.",
                  url: "https://www.dof.gob.mx/",
                  icon: "📄",
                  color: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 to-indigo-50",
                  hoverColor: "group-hover:from-purple-700 group-hover:to-indigo-700"
                }
              ].map((site, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    onClick={() => trackInteraction('official_site_visit', site.title, 'normativas_resources')}
                  >
                    <div className={`bg-gradient-to-br ${site.bgGradient} border-2 border-transparent group-hover:border-gray-200 rounded-2xl p-6 h-full transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                      <div className="text-center">
                        <div className={`inline-flex p-4 bg-gradient-to-r ${site.color} ${site.hoverColor} rounded-xl transition-all duration-300 group-hover:scale-110 mb-4`}>
                          <span className="text-4xl">{site.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                          {site.title}
                        </h4>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                          {site.description}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          <span className="text-base">Visitar Sitio</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Nota informativa */}
          <motion.div 
            className="mt-10 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 p-6 rounded-r-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-amber-800 text-lg mb-2">💡 Recomendación Profesional</h4>
                <p className="text-amber-700 leading-relaxed">
                  <strong>Mantén estos recursos en favoritos.</strong> Las normativas de seguridad se actualizan frecuentemente, 
                  y tener acceso directo a las fuentes oficiales te garantiza trabajar siempre con la información más actual. 
                  Te recomendamos revisar estos sitios al menos una vez al trimestre para estar al día con cualquier cambio normativo.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Related Guides Banner - Moved to end */}
        <RelatedGuidesBanner />

        {/* CTA final */}
        <motion.section 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">¿Necesitas Asesoría Especializada en NOM-STPS?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos certificados puede ayudarte a implementar un programa 
            de cumplimiento normativo efectivo y adaptado a tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center">
              Consulta Gratuita
            </a>
            <a href="/catalogo" className="bg-blue-700 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block text-center">
              Ver Catálogo de EPP
            </a>
          </div>
        </motion.section>
      </article>
    </BlogLayout>
  );
}

