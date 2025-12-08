"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import HeroGuantes from "@/components/blog/GuantesTrabajo/HeroGuantes";
import TopProducts from "@/components/blog/GuantesTrabajo/TopProducts";
import SectionBlock from "@/components/blog/GuantesTrabajo/SectionBlock";
import RelatedGuidesBanner from "@/components/blog/GuantesTrabajo/RelatedGuidesBanner";
import SideBanners from "@/components/blog/GuantesTrabajo/SideBanners";

export default function GuantesTrabajoArticle() {
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
      const introSection = document.getElementById('introduccion-proteccion-manual');
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
      metaTitle.setAttribute('content', 'Manual Técnico de Guantes de Trabajo: Guía Integral NOM-017 | Protección Manual Industrial 2024');
    }
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía exhaustiva sobre guantes de protección personal bajo normatividad mexicana NOM-017. Selección técnica, materiales, resistencias y mantenimiento profesional.');
    }
  }, []);

  // Data de secciones basada en análisis de PDF
  const sectionsData = [
    {
      id: "introduccion-proteccion-manual",
      title: "Introducción a la Protección Manual Industrial",
      subtitle: "La anatomía del riesgo y el imperativo legal en México",
      content: [
        "La protección de las extremidades superiores en el entorno industrial mexicano trasciende la simple adquisición de insumos; representa una convergencia crítica entre la ingeniería de materiales, la toxicología laboral, la ergonomía física y el estricto cumplimiento del marco jurídico federal.",
        "En el contexto de la salud ocupacional en México, las lesiones de mano continúan representando una estadística alarmante, constituyendo aproximadamente el 25% de los accidentes de trabajo registrados ante el Instituto Mexicano del Seguro Social (IMSS). Estas lesiones no solo generan un costo humano incalculable, sino que impactan directamente en la prima de riesgo de las empresas.",
        "Este manual técnico desglose exhaustivamente los mecanismos de selección, uso, mantenimiento y disposición de guantes de seguridad, alineándose rigurosamente con la legislación vigente en los Estados Unidos Mexicanos y las normativas internacionalmente reconocidas."
      ],
      highlights: [
        "25% de accidentes laborales afectan las manos",
        "Reducción del 70% en lesiones con EPP adecuado",
        "Cumplimiento obligatorio de NOM-017-STPS-2008",
        "$15,000 MXN costo promedio por lesión evitada"
      ],
      badges: [
        { text: "NOM-017-STPS-2008", variant: "default" as const, color: "bg-orange-100 text-orange-800" },
        { text: "Protección Manual", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Explora nuestra selección de guantes de protección certificados para cada tipo de riesgo.",
        link: "/catalogo"
      }
    },
    {
      id: "regulaciones-mexicanas-aplicables",
      title: "Regulaciones Mexicanas Aplicables (Normas NOM)",
      subtitle: "Marco normativo federal y técnico para protección manual",
      content: [
        "La NOM-017-STPS-2008 establece los requisitos mínimos para la selección, uso y manejo de equipo de protección personal en los centros de trabajo, definiendo obligaciones específicas tanto para empleadores como trabajadores en materia de protección de extremidades superiores.",
        "La normativa mexicana integra referencias técnicas de estándares internacionales, particularmente las normas EN 388 (riesgos mecánicos), EN 374 (riesgos químicos) y EN 407 (riesgos térmicos), adaptándolas a las condiciones específicas del entorno industrial nacional.",
        "El incumplimiento de estas disposiciones genera responsabilidades administrativas, civiles y penales para los empleadores, con sanciones que pueden oscilar entre multas económicas significativas hasta la suspensión temporal de actividades productivas."
      ],
      subsections: [
        {
          title: "NOM-017-STPS-2008: Disposiciones Fundamentales",
          content: [
            "Establece la obligación patronal de proporcionar EPP sin costo para el trabajador, incluyendo evaluación de riesgos específicos y selección técnica apropiada."
          ],
          items: [
            "Evaluación técnica de riesgos por puesto de trabajo específico",
            "Selección basada en análisis de exposición y concentración",
            "Capacitación obligatoria sobre uso correcto y limitaciones",
            "Supervisión continua y registros documentales de cumplimiento"
          ]
        },
        {
          title: "NOM-029-STPS-2011: Mantenimiento de EPP",
          content: [
            "Define los procedimientos para mantenimiento, almacenamiento y reposición de equipos de protección personal, incluyendo guantes industriales."
          ],
          items: [
            "Programas de inspección periódica documentados",
            "Criterios técnicos para reemplazo y vida útil",
            "Procedimientos de limpieza y descontaminación",
            "Almacenamiento en condiciones controladas específicas"
          ]
        }
      ],
      warnings: [
        "Multas de $325,000 a $3,250,000 MXN por incumplimiento normativo",
        "Responsabilidad civil por daños a la salud del trabajador",
        "Suspensión de actividades hasta corrección de deficiencias críticas"
      ],
      badges: [
        { text: "NOM-017", variant: "default" as const, color: "bg-blue-100 text-blue-800" },
        { text: "NOM-029", variant: "default" as const, color: "bg-purple-100 text-purple-800" },
        { text: "Obligatorio", variant: "destructive" as const }
      ],
      callToAction: {
        text: "Consulta nuestro catálogo de guantes certificados NOM-017-STPS-2008.",
        link: "/catalogo"
      }
    },
    {
      id: "tipos-guantes-clasificacion-tecnica",
      title: "Tipos de Guantes y Clasificación Técnica",
      subtitle: "Análisis exhaustivo según material, resistencia y aplicación industrial",
      content: [
        "La clasificación técnica de guantes de protección se basa en tres criterios fundamentales: el tipo de riesgo que mitigan (mecánico, químico, térmico, biológico), el material de construcción que determina sus propiedades protectivas, y el nivel de rendimiento certificado según normas internacionales.",
        "Los materiales sintéticos modernos han revolucionado la protección manual, ofreciendo alternativas específicas para cada tipo de exposición: desde polímeros de nitrilo para resistencia química hasta fibras de polietileno de ultra alto peso molecular (UHMWPE) para protección contra cortes.",
        "La selección correcta requiere una evaluación técnica integral que considere no solo el peligro primario, sino también factores secundarios como destreza manual requerida, duración de exposición, condiciones ambientales y compatibilidad con otros elementos del sistema de protección personal."
      ],
      subsections: [
        {
          title: "Guantes para Riesgos Químicos",
          content: [
            "Diseñados específicamente para protección contra sustancias químicas líquidas, sólidas o gaseosas, con diferentes grados de resistencia según el tiempo de permeación."
          ],
          items: [
            "Nitrilo: Resistencia superior a hidrocarburos y aceites industriales",
            "PVC: Excelente para ácidos, álcalis y soluciones acuosas",
            "Neopreno: Resistencia balanceada a múltiples familias químicas",
            "Butilo: Protección especializada contra gases y vapores"
          ]
        },
        {
          title: "Guantes para Riesgos Mecánicos",
          content: [
            "Protección contra abrasión, cortes, perforación y rasgaduras, con niveles certificados según estándares EN 388 y ANSI/ISEA 105."
          ],
          items: [
            "Cuero natural: Durabilidad y resistencia mecánica tradicional",
            "Fibras HPPE: Protección anti-corte de nivel A2 a A9",
            "Kevlar®: Resistencia térmica y mecánica combinadas",
            "Malla metálica: Protección extrema contra cortes en alimentaria"
          ]
        }
      ],
      highlights: [
        "12 categorías principales de materiales certificados",
        "Factores de protección de nivel 1 hasta A9 en cortes",
        "Compatibilidad con más de 200 sustancias químicas catalogadas",
        "Vida útil variable de 8 horas hasta 2 años según aplicación"
      ],
      badges: [
        { text: "EN 388/374 Certificado", variant: "default" as const, color: "bg-green-100 text-green-800" },
        { text: "12 Categorías", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Encuentra el tipo de guante ideal para tu industria específica.",
        link: "/catalogo"
      }
    },
    {
      id: "materiales-resistencia-identificadores",
      title: "Materiales, Resistencia e Identificadores Técnicos",
      subtitle: "Propiedades físico-químicas y especificaciones técnicas de materiales",
      content: [
        "Los materiales utilizados en la fabricación de guantes de protección deben cumplir especificaciones técnicas rigurosas que garanticen no solo la resistencia específica al riesgo identificado, sino también propiedades ergonómicas, durabilidad y biocompatibilidad durante exposiciones prolongadas.",
        "Las pruebas de certificación incluyen evaluaciones de permeación química, resistencia mecánica, propiedades térmicas y biocompatibilidad, siguiendo protocolos estandarizados que permiten comparación objetiva entre diferentes productos y fabricantes.",
        "La identificación correcta de especificaciones técnicas es crucial para la selección apropiada: cada guante debe mostrar claramente su certificación, nivel de protección, limitaciones de uso y fecha de fabricación para garantizar trazabilidad completa."
      ],
      subsections: [
        {
          title: "Propiedades de Materiales Sintéticos",
          content: [
            "Los polímeros modernos ofrecen características específicas optimizadas para diferentes tipos de exposición industrial."
          ],
          items: [
            "Nitrilo: Resistencia química superior, libre de proteínas naturales",
            "PVC: Impermeabilidad total, resistencia a ácidos concentrados",
            "Neopreno: Flexibilidad a bajas temperaturas, resistencia UV",
            "Poliuretano: Sensibilidad táctil preservada, resistencia abrasiva"
          ]
        },
        {
          title: "Sistemas de Identificación Internacional",
          content: [
            "Los códigos de identificación permiten verificación inmediata de capacidades protectivas según estándares reconocidos."
          ],
          items: [
            "Pictogramas EN: Identificación visual inmediata de protección",
            "Códigos numéricos: Niveles específicos de resistencia certificada",
            "Letras de clasificación: Categorías de sustancias químicas resistentes",
            "Fechas de caducidad: Vigencia de propiedades protectivas garantizadas"
          ]
        }
      ],
      tips: [
        "Verificar fecha de fabricación antes de cada uso operativo",
        "Almacenar en condiciones de temperatura y humedad controladas",
        "Inspeccionar integridad visual antes de exposición a riesgos",
        "Reemplazar según criterios técnicos del fabricante"
      ],
      badges: [
        { text: "Materiales Certificados", variant: "default" as const, color: "bg-blue-100 text-blue-800" },
        { text: "ISO 9001", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Compara especificaciones técnicas de materiales disponibles.",
        link: "/catalogo"
      }
    },
    {
      id: "uso-correcto-compatibilidad-epp",
      title: "Uso Correcto y Compatibilidad con otros EPP",
      subtitle: "Procedimientos técnicos y sistemas integrados de protección",
      content: [
        "El uso correcto de guantes de protección requiere protocolos específicos que incluyen inspección previa, técnicas de colocación apropiadas, verificación de integridad durante el uso y procedimientos de retiro que eviten contaminación cruzada.",
        "La compatibilidad con otros elementos del sistema de protección personal representa un aspecto crítico frecuentemente subestimado: la interacción entre guantes, mangas protectivas, equipos de protección respiratoria y visual debe evaluarse sistemáticamente para evitar comprometer la efectividad global del sistema.",
        "Los procedimientos de descontaminación y disposición final constituyen elementos críticos del protocolo de uso, especialmente en aplicaciones que involucran sustancias tóxicas, carcinogénicas o biológicamente activas que pueden generar riesgos residuales."
      ],
      subsections: [
        {
          title: "Protocolos de Colocación y Retiro",
          content: [
            "La secuencia correcta de colocación y retiro es fundamental para mantener la integridad de la protección y evitar exposiciones accidentales."
          ],
          items: [
            "Inspección visual completa antes de cada uso",
            "Técnica de colocación evitando contaminación externa",
            "Verificación de sellado en puños y áreas críticas",
            "Protocolo de retiro que minimice contacto con superficies externas"
          ]
        },
        {
          title: "Integración con otros Sistemas EPP",
          content: [
            "El diseño del sistema de protección debe considerar interacciones específicas entre diferentes elementos protectivos."
          ],
          items: [
            "Mangas protectivas: Superposición adecuada sin comprometer sellado",
            "Equipos respiratorios: Evitar interferencia con válvulas y conexiones",
            "Protección visual: Compatibilidad con actividades de precisión",
            "Ropa protectiva: Integración térmica y química coherente"
          ]
        }
      ],
      warnings: [
        "Reutilización inapropiada puede comprometer protección certificada",
        "Modificaciones al producto invalidan certificaciones de seguridad",
        "Exposición a temperaturas extremas degrada propiedades protectivas",
        "Contacto con sustancias incompatibles puede generar reacciones peligrosas"
      ],
      badges: [
        { text: "Protocolos Certificados", variant: "default" as const, color: "bg-yellow-100 text-yellow-800" },
        { text: "Compatibilidad EPP", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Accede a videos instructivos sobre uso correcto de guantes de protección.",
        link: "/guias"
      }
    },
    {
      id: "inspeccion-mantenimiento-vida-util",
      title: "Inspección, Mantenimiento y Determinación de Vida Útil",
      subtitle: "Programas técnicos para preservación de propiedades protectivas",
      content: [
        "Los programas sistemáticos de inspección y mantenimiento son fundamentales para garantizar que los guantes de protección mantengan sus propiedades certificadas a lo largo de su vida útil operativa, requiriendo procedimientos específicos desde inspecciones diarias hasta evaluaciones técnicas especializadas.",
        "La vida útil de guantes de protección varía significativamente según factores múltiples: tipo de exposición, concentración de contaminantes, condiciones ambientales, frecuencia de uso y almacenamiento. Los guantes desechables tienen vida útil de turno único, mientras equipos reutilizables pueden mantener efectividad por períodos extendidos con mantenimiento apropiado.",
        "El mantenimiento debe incluir limpieza especializada, descontaminación cuando aplicable, inspección de integridad estructural y almacenamiento en condiciones controladas, siguiendo estrictamente protocolos del fabricante y mejores prácticas reconocidas internacionalmente."
      ],
      subsections: [
        {
          title: "Inspecciones Sistemáticas del Usuario",
          content: [
            "Todo trabajador debe realizar inspecciones específicas antes, durante y después del uso para detectar defectos que comprometan la protección."
          ],
          items: [
            "Verificación de integridad sin perforaciones, cortes o adelgazamiento",
            "Inspección de flexibilidad y elasticidad en áreas críticas",
            "Evaluación de decoloración o cambios texturales anómalos",
            "Comprobación de fechas de caducidad y condiciones de almacenamiento previo"
          ]
        },
        {
          title: "Mantenimiento Técnico Especializado",
          content: [
            "Personal capacitado debe realizar evaluaciones técnicas según programas establecidos para equipos reutilizables de alto valor."
          ],
          items: [
            "Limpieza con soluciones compatibles según especificaciones técnicas",
            "Descontaminación especializada para exposiciones químicas críticas",
            "Pruebas de integridad con equipos de detección especializada",
            "Documentación exhaustiva de todas las actividades de mantenimiento realizadas"
          ]
        }
      ],
      highlights: [
        "Inspección obligatoria antes de cada uso operativo",
        "Mantenimiento técnico cada 30 días para equipos reutilizables",
        "Reemplazo inmediato ante cualquier signo de degradación",
        "Registros documentales obligatorios por 5 años mínimo"
      ],
      tips: [
        "Establecer códigos de identificación individual para equipos reutilizables",
        "Implementar indicadores visuales para control de vida útil",
        "Capacitar supervisores en técnicas de evaluación técnica",
        "Mantener inventarios de reemplazo según rotación establecida"
      ],
      badges: [
        { text: "Mantenimiento Preventivo", variant: "default" as const, color: "bg-green-100 text-green-800" },
        { text: "Inspección Diaria", variant: "secondary" as const }
      ],
      callToAction: {
        text: "Visita nuestro amplio catálogo de EPP y guantes de protección certificados.",
        link: "/catalogo"
      }
    },
    {
      id: "sanciones-responsabilidades-buenas-practicas",
      title: "Sanciones, Responsabilidades y Buenas Prácticas Empresariales",
      subtitle: "Marco legal y estrategias para implementación efectiva",
      content: [
        "El incumplimiento de las obligaciones legales en materia de protección manual conlleva responsabilidades administrativas, civiles y penales significativas para los empleadores, con sanciones que pueden oscilar desde multas económicas sustanciales hasta responsabilidades por daños permanentes a la salud de trabajadores.",
        "Las responsabilidades patronales incluyen no solo la provisión de equipos certificados apropiados, sino también garantizar capacitación continua, supervisión efectiva, mantenimiento de registros documentales y evaluación periódica de la efectividad de los programas de protección implementados.",
        "Las mejores prácticas empresariales trascienden el cumplimiento mínimo legal, incorporando sistemas de gestión integral que consideren aspectos técnicos, humanos y organizacionales para crear culturas de seguridad sólidas, sostenibles y continuamente mejoradas."
      ],
      subsections: [
        {
          title: "Responsabilidades Legales Empresariales",
          content: [
            "La legislación mexicana establece obligaciones específicas no delegables que requieren atención directa de la dirección empresarial."
          ],
          items: [
            "Evaluación técnica exhaustiva de riesgos en todos los puestos de trabajo",
            "Selección y provisión de guantes certificados apropiados sin costo",
            "Capacitación especializada sobre uso correcto y limitaciones técnicas",
            "Supervisión continua del cumplimiento y uso efectivo de equipos",
            "Mantenimiento de registros detallados de entrega, capacitación y reemplazo",
            "Establecimiento de procedimientos de emergencia y primeros auxilios"
          ]
        },
        {
          title: "Sistemas de Gestión Integral",
          content: [
            "La implementación exitosa requiere compromiso organizacional y recursos técnicos adecuados para sostenibilidad a largo plazo."
          ],
          items: [
            "Comités de seguridad con participación activa de trabajadores",
            "Sistemas de incentivos y reconocimiento por cumplimiento ejemplar",
            "Auditorías internas periódicas de efectividad programática",
            "Comunicación continua sobre importancia y beneficios de protección",
            "Procedimientos estructurados para reporte e investigación de incidentes",
            "Asesoría legal especializada en normativas de seguridad laboral"
          ]
        }
      ],
      warnings: [
        "Sanciones administrativas de $325,000 a $3,250,000 MXN por incumplimiento grave",
        "Responsabilidad civil por daños permanentes a la salud de trabajadores",
        "Posible responsabilidad penal en casos de negligencia grave comprobada",
        "Clausura temporal de operaciones hasta corrección de deficiencias críticas"
      ],
      highlights: [
        "Auditorías de cumplimiento obligatorias cada 2 años mínimo",
        "Capacitación técnica obligatoria cada 12 meses por trabajador",
        "Registros de mantenimiento documentados por 5 años mínimo",
        "Comités mixtos de seguridad con representación paritaria obligatoria"
      ],
      badges: [
        { text: "Cumplimiento Legal", variant: "destructive" as const },
        { text: "Mejores Prácticas", variant: "default" as const, color: "bg-green-100 text-green-800" }
      ]
    }
  ];

  const callToAction = {
    title: "Implementa un Programa Integral de Protección Manual",
    subtitle: "Protege a tu equipo y cumple con la normatividad mexicana",
    content: "La protección manual adecuada no es solo un requisito legal, es una inversión estratégica en la salud y productividad de tu organización. Nuestros especialistas te ayudan a implementar programas efectivos que garanticen el cumplimiento normativo y la máxima protección para tus trabajadores.",
    features: [
      "Evaluación integral de riesgos manuales en tu centro de trabajo",
      "Selección técnica de guantes certificados según normativas mexicanas",
      "Programas de capacitación especializados para supervisores y trabajadores",
      "Sistemas de mantenimiento y gestión de inventarios de EPP",
      "Auditorías de cumplimiento y mejora continua programática",
      "Asesoría legal especializada en normativas de seguridad laboral"
    ],
    stats: [
      { number: "89%", label: "Reducción de lesiones manuales" },
      { number: "92%", label: "Mejora en cumplimiento normativo" },
      { number: "78%", label: "Reducción en costos por ausentismo" },
      { number: "245", label: "Empresas asesoradas exitosamente" }
    ],
    buttons: [
      {
        text: "Solicitar Evaluación Gratuita",
        href: "/contacto",
        variant: "primary" as const
      },
      {
        text: "Ver Catálogo de Guantes",
        href: "/catalogo",
        variant: "secondary" as const
      }
    ]
  };

  return (
    <BlogLayout
      title="Manual Técnico de Guantes de Trabajo Industriales"
      description="Guía exhaustiva sobre guantes de protección personal bajo normatividad mexicana NOM-017"
      keywords="guantes de trabajo, NOM-017, protección manual, guantes industriales, seguridad laboral"
      publishDate="2024-03-15"
      readTime="16 min"
      category="Guías Técnicas"
      author={{
        name: "Ing. María González",
        avatar: "/images/authors/maria-gonzalez.jpg",
        bio: "Especialista en Protección Personal y Ergonomía Industrial"
      }}
    >
      {/* Hero Section */}
      <HeroGuantes showHeroCTAs={showHeroCTAs} showSideCTAs={isLargeScreen} />
      
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-700">
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
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
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
                <span className="text-orange-100 text-sm leading-relaxed">{feature}</span>
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
                <div className="text-orange-200 text-sm">{stat.label}</div>
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
                    ? 'bg-white text-orange-700 hover:bg-orange-50 shadow-lg hover:shadow-xl'
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-700'
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
                  <p>• NOM-029-STPS-2011: Mantenimiento de EPP</p>
                  <p>• EN 388: Guantes de protección contra riesgos mecánicos</p>
                  <p>• EN 374: Guantes de protección contra químicos</p>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• ANSI/ISEA 105: Selección de guantes</p>
                  <p>• EN 407: Protección contra riesgos térmicos</p>
                  <p>• ISO 21420: Requisitos generales para guantes</p>
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
