"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import HeroRespiratoria from "@/components/blog/ProteccionRespiratoria/HeroRespiratoria";
import TopProducts from "@/components/blog/ProteccionRespiratoria/TopProducts";
import SectionBlock from "@/components/blog/ProteccionRespiratoria/SectionBlock";
import RelatedGuidesBanner from "@/components/blog/ProteccionRespiratoria/RelatedGuidesBanner";
import SideBanners from "@/components/blog/ProteccionRespiratoria/SideBanners";

export default function ProteccionRespiratoriaArticle() {
  const [showSideBanners, setShowSideBanners] = useState(true);
  const [showHeroCTAs, setShowHeroCTAs] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  // Control side banners and hero CTAs visibility
  useEffect(() => {
    // Screen size detection for banner visibility (24" = 1920px+)
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1920;
      setIsLargeScreen(isLarge);
      if (!isLarge) {
        setShowSideBanners(false);
        setShowHeroCTAs(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    if (!isLargeScreen) return; // Skip scroll logic on small screens

    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const introSection = document.getElementById('introduccion-proteccion-respiratoria');
      const referencesSection = document.getElementById('referencias');
      
      // Control Hero CTAs visibility
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Hide hero CTAs when hero section is completely out of view
        const heroVisible = heroRect.bottom > 100;
        setShowHeroCTAs(isLargeScreen && heroVisible);
      }
      
      // Control Side Banners visibility  
      if (introSection && referencesSection) {
        const introRect = introSection.getBoundingClientRect();
        const referencesRect = referencesSection.getBoundingClientRect();
        
        // Show banners when intro section starts being visible (top of intro reaches viewport)
        const introStarted = introRect.top <= window.innerHeight * 0.8;
        
        // Hide banners when references section completely exits the viewport
        const referencesEnded = referencesRect.bottom <= 0;
        
        setShowSideBanners(isLargeScreen && introStarted && !referencesEnded);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLargeScreen]);
  
  // SEO and meta data
  useEffect(() => {
    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaTitle) {
      metaTitle.setAttribute('content', 'Protección Respiratoria Industrial: Guía Técnica Completa NOM-116 | Máscaras y Respiradores 2024');
    }
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía exhaustiva sobre equipos de protección respiratoria bajo normatividad mexicana NOM-116. Tipos de respiradores, factores de protección, selección y mantenimiento.');
    }
  }, []);

  // Data de secciones basada en análisis de PDF
  const sectionsData = [
    {
      id: "introduccion-proteccion-respiratoria",
      title: "Introducción a la Protección Respiratoria Industrial",
      subtitle: "La importancia estratégica de la protección respiratoria en el entorno laboral mexicano",
      content: [
        "La protección respiratoria representa uno de los pilares fundamentales de la seguridad industrial, especialmente bajo el marco normativo mexicano que establece estrictos requisitos para la prevención de enfermedades ocupacionales relacionadas con la inhalación de contaminantes.",
        "En México, las estadísticas revelan que aproximadamente 95,000 trabajadores sufren anualmente lesiones respiratorias relacionadas con la exposición a partículas, gases y vapores nocivos en sus centros de trabajo, lo que convierte a la selección adecuada del equipo de protección respiratoria en una prioridad crítica.",
        "La implementación efectiva de programas de protección respiratoria no solo cumple con las obligaciones legales establecidas por la normatividad mexicana, sino que también genera beneficios económicos significativos al reducir costos por ausentismo, compensaciones laborales y pérdida de productividad."
      ],
      highlights: [
        "95,000+ lesiones respiratorias anuales en México",
        "Reducción del 99% en riesgo de enfermedades ocupacionales",
        "Cumplimiento obligatorio de NOM-116-STPS-2009",
        "ROI positivo en programas de protección respiratoria"
      ],
      badges: [
        { text: "NOM-116-STPS-2009", variant: "default" as const, color: "bg-green-100 text-green-800" },
        { text: "Seguridad Industrial", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Explora nuestra selección de equipos de protección respiratoria certificados.",
        link: "/catalogo"
      }
    },
    {
      id: "normativas-mexicanas-aplicables",
      title: "Regulaciones Mexicanas Aplicables (Normas NOM)",
      subtitle: "Marco jurídico y técnico que regula el uso de equipos de protección respiratoria",
      content: [
        "La NOM-017-STPS-2008 establece los requisitos mínimos para la selección, uso y manejo de equipo de protección personal en los centros de trabajo, incluyendo disposiciones específicas para equipos de protección respiratoria que deben cumplir con estándares internacionales reconocidos.",
        "Por su parte, la NOM-116-STPS-2009 específicamente regula los requisitos de seguridad y salud en el trabajo donde se manejen sustancias químicas contaminantes del medio ambiente laboral, estableciendo factores de protección mínimos y criterios de selección para diferentes tipos de respiradores.",
        "El cumplimiento de estas normativas no es opcional: las empresas que no implementen adecuadamente programas de protección respiratoria pueden enfrentar sanciones que van desde amonestaciones hasta la suspensión temporal de actividades, además de responsabilidades civiles y penales en caso de accidentes."
      ],
      subsections: [
        {
          title: "NOM-017-STPS-2008: Requisitos Generales",
          content: [
            "Establece la obligación del patrón de proporcionar EPP adecuado y gratuito a los trabajadores expuestos a riesgos que no puedan evitarse o limitarse por otros medios."
          ],
          items: [
            "Selección basada en análisis de riesgos específicos del puesto de trabajo",
            "Capacitación obligatoria sobre uso correcto y mantenimiento",
            "Supervisión continua del uso adecuado del equipo",
            "Registro y control de entrega y reposición de equipos"
          ]
        },
        {
          title: "NOM-116-STPS-2009: Protección Respiratoria Específica",
          content: [
            "Define los factores de protección asignados para diferentes tipos de respiradores y establece criterios técnicos para su selección según el tipo de contaminante y concentración presente."
          ],
          items: [
            "Factores de protección: N95 (10), N99 (50), P100 (1000)",
            "Pruebas de ajuste obligatorias cada 12 meses",
            "Programas médicos de vigilancia respiratoria",
            "Mantenimiento y almacenamiento según especificaciones del fabricante"
          ]
        }
      ],
      warnings: [
        "Multas de $431,000 a $4,310,000 MXN por incumplimiento",
        "Responsabilidad penal en caso de accidentes mortales",
        "Suspensión de actividades hasta corrección de deficiencias"
      ],
      badges: [
        { text: "NOM-017", variant: "default" as const, color: "bg-blue-100 text-blue-800" },
        { text: "NOM-116", variant: "default" as const, color: "bg-purple-100 text-purple-800" },
        { text: "Obligatorio", variant: "destructive" as const }
      ],
      callToAction: {
        text: "Consulta nuestro catálogo de respiradores certificados NOM-116-STPS-2009.",
        link: "/catalogo"
      }
    },
    {
      id: "tipos-mascarillas-usos",
      title: "Tipos de Mascarillas y Respiradores: Clasificación Técnica",
      subtitle: "Análisis detallado de diferentes equipos según su aplicación industrial",
      content: [
        "Los equipos de protección respiratoria se clasifican en dos categorías principales: respiradores purificadores de aire (que filtran contaminantes del aire ambiente) y equipos de suministro de aire (que proporcionan aire limpio desde una fuente externa independiente).",
        "Dentro de los purificadores de aire, encontramos desde mascarillas desechables N95 hasta respiradores de cara completa con cartuchos específicos, cada uno diseñado para proteger contra diferentes tipos de contaminantes con factores de protección variables.",
        "La selección correcta debe basarse en una evaluación técnica que considere el tipo de contaminante (partículas, gases, vapores), su concentración, las condiciones ambientales y las características fisiológicas del usuario."
      ],
      subsections: [
        {
          title: "Respiradores Desechables (Filtering Facepiece)",
          content: [
            "Diseñados para protección contra partículas sólidas y líquidas suspendidas en el aire. No protegen contra gases ni vapores."
          ],
          items: [
            "N95: 95% eficiencia contra partículas no aceitosas (polvo, polen)",
            "N99: 99% eficiencia, uso en construcción y minería",
            "N100: 99.97% eficiencia, para partículas altamente tóxicas",
            "R95/P95: Resistentes a aceites, uso en petroquímica",
            "P100: Máxima protección contra partículas y aceites"
          ]
        },
        {
          title: "Respiradores Reutilizables",
          content: [
            "Equipos con cartuchos o filtros intercambiables que ofrecen protección especializada según el tipo de cartucho utilizado."
          ],
          items: [
            "Media cara: Protege nariz y boca, factor de protección 10",
            "Cara completa: Incluye protección ocular, factor de protección 50",
            "Cartuchos combinados: Partículas + gases/vapores específicos",
            "Filtros HEPA: Para partículas ultrafinas y agentes biológicos"
          ]
        }
      ],
      highlights: [
        "6 tipos principales de filtros certificados",
        "Factores de protección de 10 hasta 1,000",
        "Compatibilidad con otros EPP esencial",
        "Vida útil variable según uso y almacenamiento"
      ],
      badges: [
        { text: "NIOSH Certificado", variant: "default" as const, color: "bg-green-100 text-green-800" },
        { text: "6 Tipos", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Encuentra el tipo de respirador ideal para tu industria específica.",
        link: "/catalogo"
      }
    },
    {
      id: "materiales-resistencia-identificadores",
      title: "Materiales, Resistencia e Identificadores Técnicos",
      subtitle: "Especificaciones técnicas y criterios de calidad para equipos certificados",
      content: [
        "Los materiales utilizados en la fabricación de equipos de protección respiratoria deben cumplir con especificaciones técnicas rigurosas que garanticen no solo la eficiencia de filtración, sino también la durabilidad, comodidad y biocompatibilidad durante el uso prolongado.",
        "Los medios filtrantes modernos utilizan tecnologías avanzadas como fibras electrostáticas, carbón activado tratado y materiales compuestos que permiten alta eficiencia de filtración con mínima resistencia respiratoria, mejorando significativamente la comodidad del usuario.",
        "La identificación correcta de especificaciones técnicas es crucial para la selección adecuada: cada respirador debe mostrar claramente su certificación, factor de protección, tipo de contaminantes para los cuales es efectivo y fecha de fabricación."
      ],
      subsections: [
        {
          title: "Materiales de Construcción",
          content: [
            "Los componentes principales incluyen medios filtrantes, sellos faciales, válvulas y arneses, cada uno fabricado con materiales específicos para optimizar rendimiento y durabilidad."
          ],
          items: [
            "Medios filtrantes: Polipropileno electrostático, fibra de vidrio HEPA",
            "Sellos faciales: Silicona médica, termoplástico hipoalergénico",
            "Válvulas: Polímeros resistentes a químicos y temperatura",
            "Arneses: Materiales textiles con elasticidad controlada"
          ]
        },
        {
          title: "Resistencia y Durabilidad",
          content: [
            "Las pruebas de resistencia incluyen exposición a condiciones extremas de temperatura, humedad y deformación mecánica para garantizar rendimiento constante."
          ],
          items: [
            "Resistencia térmica: -20°C a +85°C según NIOSH",
            "Resistencia a humedad: 95% HR sin degradación",
            "Resistencia mecánica: 50 Newton-metros de torsión",
            "Vida útil certificada: 5 años desde fabricación si no se usa"
          ]
        }
      ],
      tips: [
        "Verificar siempre fecha de fabricación antes del uso",
        "Almacenar en ambiente seco y temperatura controlada",
        "Inspeccionar visualmente antes de cada uso",
        "Reemplazar según indicaciones del fabricante"
      ],
      badges: [
        { text: "Materiales Certificados", variant: "default" as const, color: "bg-blue-100 text-blue-800" },
        { text: "5 Años Vida Útil", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Compara especificaciones técnicas de materiales disponibles.",
        link: "/catalogo"
      }
    },
    {
      id: "uso-correcto-compatibilidad-epp",
      title: "Uso Correcto y Compatibilidad con otros EPP",
      subtitle: "Procedimientos técnicos para maximizar la eficacia de la protección respiratoria",
      content: [
        "El uso correcto de equipos de protección respiratoria requiere seguir procedimientos específicos que incluyen inspección previa, colocación adecuada, verificación de sello facial y compatibilidad con otros elementos de protección personal que pueda requerir el trabajador.",
        "La compatibilidad con otros EPP representa un desafío técnico significativo: el uso simultáneo de cascos de seguridad, protección auditiva y visual debe ser cuidadosamente evaluado para evitar comprometer la efectividad de cualquier elemento del sistema de protección.",
        "Las pruebas de ajuste son obligatorias según la normatividad mexicana y deben realizarse inicialmente y repetirse anualmente, o cuando el trabajador experimente cambios significativos de peso, cirugías faciales o dentales que puedan afectar el sello facial."
      ],
      subsections: [
        {
          title: "Procedimiento de Colocación",
          content: [
            "La secuencia correcta de colocación es crítica para garantizar el factor de protección nominal del equipo."
          ],
          items: [
            "Inspeccionar visualmente el equipo antes de cada uso",
            "Lavar y secar las manos antes de manipular el respirador",
            "Posicionar el respirador bajo el mentón cubriendo nariz y boca",
            "Ajustar las bandas elásticas sin sobre-tensionar",
            "Realizar prueba de presión positiva y negativa",
            "Verificar ausencia de fugas alrededor del sello facial"
          ]
        },
        {
          title: "Compatibilidad con otros EPP",
          content: [
            "El diseño del sistema de protección debe considerar las interacciones entre diferentes elementos para mantener la efectividad global."
          ],
          items: [
            "Cascos: Verificar que las bandas no interfieran con el arnés",
            "Protección auditiva: Preferir tapones sobre orejeras",
            "Protección visual: Usar lentes de seguridad compatibles",
            "Ropa de protección: Evitar interferencia con sellado facial"
          ]
        }
      ],
      warnings: [
        "Barba o bigote impiden sello facial efectivo",
        "No modificar nunca los componentes originales",
        "Temperaturas extremas pueden afectar el rendimiento",
        "Uso con otros químicos puede degradar materiales"
      ],
      badges: [
        { text: "Pruebas de Ajuste", variant: "default" as const, color: "bg-yellow-100 text-yellow-800" },
        { text: "Compatibilidad EPP", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Accede a videos instructivos sobre uso correcto de respiradores.",
        link: "/guias"
      }
    },
    {
      id: "inspeccion-mantenimiento-vida-util",
      title: "Inspección, Mantenimiento y Vida Útil",
      subtitle: "Programas técnicos para garantizar el rendimiento óptimo continuo",
      content: [
        "Los programas de inspección y mantenimiento son fundamentales para garantizar que los equipos de protección respiratoria mantengan su efectividad a lo largo de su vida útil, requiriendo procedimientos específicos que van desde inspecciones diarias del usuario hasta mantenimiento especializado periódico.",
        "La vida útil de los equipos varía significativamente según el tipo: mientras que los respiradores desechables tienen una vida útil de un turno de trabajo o hasta que se saturen, los equipos reutilizables pueden durar varios años con mantenimiento adecuado y reemplazo oportuno de componentes.",
        "El mantenimiento debe incluir limpieza, desinfección, inspección de componentes, pruebas de funcionamiento y almacenamiento apropiado, siguiendo estrictamente las recomendaciones del fabricante y las mejores prácticas industriales reconocidas."
      ],
      subsections: [
        {
          title: "Inspecciones Diarias del Usuario",
          content: [
            "Cada trabajador debe realizar inspecciones básicas antes, durante y después del uso para detectar defectos que puedan comprometer la protección."
          ],
          items: [
            "Verificar integridad de medios filtrantes (sin rasgaduras o deformaciones)",
            "Comprobar funcionamiento de válvulas de inhalación y exhalación",
            "Inspeccionar bandas elásticas por pérdida de elasticidad o rotura",
            "Verificar sello facial por grietas, deformaciones o endurecimiento",
            "Comprobar fecha de vencimiento y condiciones de almacenamiento"
          ]
        },
        {
          title: "Mantenimiento Especializado",
          content: [
            "El personal capacitado debe realizar mantenimiento técnico según programas establecidos para equipos reutilizables."
          ],
          items: [
            "Desmontaje completo y limpieza con soluciones aprobadas",
            "Inspección detallada con instrumentos de medición",
            "Reemplazo de componentes según criterios técnicos",
            "Pruebas de funcionamiento y calibración",
            "Documentación completa de todas las actividades realizadas"
          ]
        }
      ],
      highlights: [
        "Inspección diaria obligatoria por el usuario",
        "Mantenimiento especializado cada 6 meses",
        "Reemplazo de filtros según saturación o tiempo",
        "Documentación completa de mantenimiento requerida"
      ],
      tips: [
        "Mantener registro detallado de uso por equipo individual",
        "Establecer indicadores visuales para reemplazo de componentes",
        "Capacitar usuarios en procedimientos básicos de inspección",
        "Tener stock suficiente de repuestos críticos"
      ],
      badges: [
        { text: "Mantenimiento Preventivo", variant: "default" as const, color: "bg-green-100 text-green-800" },
        { text: "Inspección Diaria", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Visita nuestro amplio catálogo de EPP y equipos de protección respiratoria.",
        link: "/catalogo"
      }
    },
    {
      id: "sanciones-responsabilidades-buenas-practicas",
      title: "Sanciones, Responsabilidades y Buenas Prácticas",
      subtitle: "Marco legal y mejores estrategias para la implementación efectiva",
      content: [
        "El incumplimiento de las obligaciones en materia de protección respiratoria conlleva sanciones administrativas, civiles y penales significativas, que van desde multas económicas hasta responsabilidades por daños a la salud de los trabajadores, haciendo imperativo el cumplimiento estricto de la normatividad.",
        "Las responsabilidades del empleador incluyen no solo proporcionar el equipo adecuado, sino también garantizar capacitación continua, supervisión efectiva, mantenimiento de registros y evaluación periódica de la efectividad del programa de protección respiratoria implementado.",
        "Las buenas prácticas van más allá del cumplimiento mínimo legal e incluyen la implementación de sistemas de gestión integral que consideren aspectos técnicos, humanos y organizacionales para crear una cultura de seguridad sólida y sostenible."
      ],
      subsections: [
        {
          title: "Responsabilidades del Empleador",
          content: [
            "La ley establece responsabilidades específicas que no pueden ser delegadas y requieren atención directa de la dirección empresarial."
          ],
          items: [
            "Evaluar riesgos respiratorios en todos los puestos de trabajo",
            "Seleccionar y proporcionar equipos certificados apropiados",
            "Capacitar trabajadores en uso correcto y mantenimiento básico",
            "Supervisar cumplimiento y uso efectivo de los equipos",
            "Mantener registros detallados de entrega, capacitación y mantenimiento",
            "Establecer procedimientos de emergencia respiratoria"
          ]
        },
        {
          title: "Buenas Prácticas Organizacionales",
          content: [
            "La implementación exitosa requiere compromiso organizacional y recursos adecuados para sostenibilidad a largo plazo."
          ],
          items: [
            "Establecer comités de seguridad con participación de trabajadores",
            "Implementar sistemas de incentivos por cumplimiento de seguridad",
            "Realizar auditorías internas periódicas de efectividad del programa",
            "Mantener comunicación continua sobre importancia de protección respiratoria",
            "Establecer procedimientos para reporte y investigación de incidentes",
            "Contar con asesoría legal especializada en seguridad laboral"
          ]
        }
      ],
      warnings: [
        "Sanciones de $431,000 a $4,310,000 MXN por incumplimiento grave",
        "Responsabilidad civil por daños a la salud de trabajadores",
        "Posible responsabilidad penal en caso de negligencia grave",
        "Clausura temporal hasta corregir deficiencias críticas"
      ],
      highlights: [
        "Auditorías de cumplimiento cada 2 años mínimo",
        "Capacitación obligatoria cada 12 meses",
        "Registros de mantenimiento por 5 años mínimo",
        "Comités de seguridad con representación trabajador-patrón"
      ],
      badges: [
        { text: "Cumplimiento Legal", variant: "destructive" as const },
        { text: "Buenas Prácticas", variant: "default" as const, color: "bg-green-100 text-green-800" }
      ]
    }
  ];

  const callToAction = {
    title: "Implementa un Programa de Protección Respiratoria Efectivo",
    subtitle: "Protege a tu equipo y cumple con la normatividad mexicana",
    content: "La protección respiratoria adecuada no es solo un requisito legal, es una inversión en la salud y productividad de tu organización. Nuestros especialistas te ayudan a implementar programas efectivos que garanticen el cumplimiento normativo y la máxima protección para tus trabajadores.",
    features: [
      "Evaluación integral de riesgos respiratorios en tu centro de trabajo",
      "Selección técnica de equipos certificados según normativas mexicanas",
      "Programas de capacitación especializados para supervisores y trabajadores",
      "Sistemas de mantenimiento y gestión de inventarios de EPP",
      "Auditorías de cumplimiento y mejora continua",
      "Asesoría legal especializada en normativas de seguridad laboral"
    ],
    stats: [
      { number: "95%", label: "Reducción de incidentes respiratorios" },
      { number: "89%", label: "Mejora en cumplimiento normativo" },
      { number: "67%", label: "Reducción en costos por ausentismo" },
      { number: "156", label: "Empresas asesoradas exitosamente" }
    ],
    buttons: [
      {
        text: "Solicitar Evaluación Gratuita",
        href: "/contacto",
        variant: "primary" as const
      },
      {
        text: "Ver Catálogo de Productos",
        href: "/catalogo",
        variant: "secondary" as const
      }
    ]
  };

  return (
    <BlogLayout
      title="Manual Técnico de Protección Respiratoria Industrial"
      description="Guía exhaustiva sobre equipos de protección respiratoria bajo normatividad mexicana NOM-116"
      keywords="protección respiratoria, NOM-116, respiradores, máscaras industriales, seguridad laboral"
      publishDate="2024-03-15"
      readTime="18 min"
      category="Guías Técnicas"
      author={{
        name: "Ing. Carlos Mendoza",
        avatar: "/images/authors/carlos-mendoza.jpg",
        bio: "Especialista en Higiene Industrial y Protección Respiratoria"
      }}
    >
      {/* Hero Section */}
      <HeroRespiratoria showHeroCTAs={showHeroCTAs} showSideCTAs={isLargeScreen} />
      
      {/* Top Products Section */}
      <TopProducts />

      {/* Side Banners */}
      <SideBanners showBanners={showSideBanners} />

      {/* Article Sections */}
      {sectionsData.map((section, index) => (
        <SectionBlock
          key={section.id}
          section={section}
          index={index}
        />
      ))}

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <Badge className="bg-white/20 text-white border-0 px-4 py-2 mb-4">
              Consultoría Especializada
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {callToAction.title}
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              {callToAction.content}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {callToAction.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-green-100 text-sm leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {callToAction.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {callToAction.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  button.variant === 'primary'
                    ? 'bg-white text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl'
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section id="referencias" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Referencias Normativas y Técnicas
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• NOM-017-STPS-2008: Equipo de protección personal</p>
                  <p>• NOM-116-STPS-2009: Seguridad e higiene en sustancias químicas</p>
                  <p>• NIOSH 42 CFR Part 84: Certificación de respiradores</p>
                  <p>• OSHA 29 CFR 1910.134: Estándar de protección respiratoria</p>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• ANSI/ISEA Z88.10: Clasificación de factores de protección</p>
                  <p>• ISO 16975: Guías de selección respiratoria</p>
                  <p>• ACGIH TLVs: Valores límite de exposición ocupacional</p>
                  <p>• Secretaría del Trabajo y Previsión Social México</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Guides Banner */}
      <RelatedGuidesBanner />
    </BlogLayout>
  );
}
