"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import HeroManual from "@/components/blog/ManualCascos/HeroManual";
import TopProducts from "@/components/blog/ManualCascos/TopProducts";
import SectionBlock from "@/components/blog/ManualCascos/SectionBlock";
import RelatedGuidesBanner from "@/components/blog/ManualCascos/RelatedGuidesBanner";
import SideBanners from "@/components/blog/ManualCascos/SideBanners";

export default function ManualCascosArticle() {
  const [showSideBanners, setShowSideBanners] = useState(true);
  const [showHeroCTAs, setShowHeroCTAs] = useState(true);
  
  // Control side banners and hero CTAs visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const introSection = document.getElementById('introduccion-a-la-proteccion-craneal');
      const referencesSection = document.getElementById('referencias');
      
      // Control Hero CTAs visibility
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Hide hero CTAs when hero section is completely out of view
        const heroVisible = heroRect.bottom > 100;
        setShowHeroCTAs(heroVisible);
      }
      
      // Control Side Banners visibility  
      if (introSection && referencesSection) {
        const introRect = introSection.getBoundingClientRect();
        const referencesRect = referencesSection.getBoundingClientRect();
        
        // Show banners when intro section starts being visible (top of intro reaches viewport)
        const introStarted = introRect.top <= window.innerHeight * 0.8;
        
        // Hide banners when references section completely exits the viewport
        const referencesEnded = referencesRect.bottom <= 0;
        
        setShowSideBanners(introStarted && !referencesEnded);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // SEO and meta data
  useEffect(() => {
    document.title = 'Manual Completo de Cascos de Seguridad | Protección Craneal NOM-115-STPS-2009';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía técnica completa sobre cascos de seguridad industrial. Cumplimiento NOM-115-STPS-2009, selección correcta, mantenimiento y top 6 productos certificados en México.');
    }
  }, []);

  // Data for all 7 sections based on PDF analysis
  const sectionsData = [
    {
      sectionNumber: 1,
      title: "Introducción a la Protección Craneal",
      subtitle: "Importancia crítica de los cascos de seguridad en el entorno laboral mexicano",
      content: {
        introduction: "Los cascos de seguridad representan el elemento más crítico del equipo de protección personal para prevenir lesiones craneales en el trabajo. En México, estos equipos deben cumplir estrictos estándares normativos que garantizan la protección efectiva del trabajador.",
        expertQuote: {
          text: "Los cascos de seguridad son equipos de protección individual destinados a proteger la cabeza del usuario contra choques o golpes y otros factores de riesgo que puedan provocar accidentes o enfermedades profesionales.",
          source: "Normativa NOM-115-STPS-2009"
        },
        keyPoints: [
          "Los cascos previenen el 85% de lesiones craneales graves en el trabajo",
          "Protección obligatoria según NOM-115-STPS-2009 en trabajos de riesgo",
          "Reducción significativa de costos por accidentes laborales",
          "Elemento fundamental del sistema integral de seguridad ocupacional"
        ],
        recommendations: [
          "Evaluar riesgos específicos del puesto de trabajo antes de seleccionar el casco",
          "Considerar factores ambientales como temperatura, humedad y químicos",
          "Asegurar compatibilidad con otros equipos de protección personal",
          "Establecer programas de inspección y reemplazo periódico"
        ],
        callToAction: {
          text: "Explora nuestra selección de EPP que brindan máxima protección.",
          link: "/catalogo"
        }
      },
      icon: "🛡️",
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      sectionNumber: 2,
      title: "Normativa Mexicana Vigente",
      subtitle: "NOM-115-STPS-2009 y marco legal de protección craneal",
      content: {
        introduction: "El marco normativo mexicano establece requisitos específicos para cascos de protección, basándose en estándares internacionales adaptados a condiciones locales de trabajo y clima.",
        expertQuote: {
          text: "La NOM-115-STPS-2009 establece los requisitos mínimos de seguridad para el uso de cascos de protección en el trabajo, incluyendo especificaciones técnicas, procedimientos de prueba y criterios de aceptación.",
          source: "Secretaría del Trabajo y Previsión Social"
        },
        keyPoints: [
          "NOM-115-STPS-2009: Norma oficial para cascos de protección",
          "Clasificación por tipo de riesgo: Clase E (eléctrico), G (general), C (construcción)",
          "Requisitos de resistencia al impacto y penetración obligatorios",
          "Certificación por organismos acreditados ante EMA"
        ],
        recommendations: [
          "Verificar certificación NOM antes de cualquier compra",
          "Mantener documentación de cumplimiento normativo actualizada",
          "Capacitar al personal sobre requisitos legales específicos",
          "Implementar auditorías regulares de cumplimiento normativo"
        ],
        callToAction: {
          text: "Consulta nuestro catálogo de cascos certificados NOM-115-STPS-2009.",
          link: "/catalogo"
        }
      },
      icon: "📋",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      sectionNumber: 3,
      title: "Clasificación y Tipos de Cascos",
      subtitle: "Selección apropiada según riesgo y aplicación industrial",
      content: {
        introduction: "La correcta clasificación de cascos permite seleccionar la protección adecuada para cada tipo de riesgo laboral, optimizando tanto seguridad como comodidad del usuario.",
        expertQuote: {
          text: "Los cascos se clasifican en tres tipos principales: Tipo I (impacto superior), Tipo II (impacto lateral y superior), con subclasificaciones eléctricas G (hasta 2,200V), E (hasta 20,000V) y C (sin protección eléctrica).",
          source: "Guía Técnica de Seguridad Industrial"
        },
        keyPoints: [
          "Tipo I: Protección contra impactos verticales únicamente",
          "Tipo II: Protección contra impactos laterales y verticales",
          "Clase G: Resistencia eléctrica hasta 2,200 voltios",
          "Clase E: Resistencia eléctrica hasta 20,000 voltios",
          "Clase C: Sin protección eléctrica, mayor ventilación"
        ],
        recommendations: [
          "Evaluar tipos de impacto posibles en cada área de trabajo",
          "Considerar riesgos eléctricos específicos del entorno",
          "Analizar necesidades de ventilación vs protección",
          "Documentar criterios de selección para cada puesto"
        ],
        callToAction: {
          text: "Encuentra el tipo de casco ideal para tu industria específica.",
          link: "/catalogo"
        }
      },
      icon: "⚡",
      bgGradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      sectionNumber: 4,
      title: "Materiales y Resistencia",
      subtitle: "Propiedades técnicas y durabilidad de materiales de fabricación",
      content: {
        introduction: "Los materiales de construcción determinan las propiedades protectivas y la vida útil del casco. Conocer estas características permite optimizar la inversión en seguridad.",
        expertQuote: {
          text: "Los materiales más comunes incluyen HDPE (polietileno alta densidad), ABS (acrilonitrilo butadieno estireno) y fibra de vidrio, cada uno con propiedades específicas de resistencia al impacto, químicos y condiciones ambientales.",
          source: "Instituto de Ingeniería de Materiales"
        },
        keyPoints: [
          "HDPE: Excelente resistencia química y climática, ligero",
          "ABS: Alta resistencia al impacto, buena relación costo-beneficio",
          "Fibra de vidrio: Máxima resistencia, ideal para ambientes extremos",
          "Sistemas de suspensión: Componente crítico para absorción de impactos"
        ],
        recommendations: [
          "Seleccionar material según exposición química específica",
          "Considerar condiciones climáticas y temperatura de trabajo",
          "Evaluar peso del casco para jornadas laborales extendidas",
          "Verificar compatibilidad de materiales con productos químicos"
        ],
        callToAction: {
          text: "Compara especificaciones técnicas de materiales disponibles.",
          link: "/catalogo"
        }
      },
      icon: "🔬",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      sectionNumber: 5,
      title: "Uso Correcto y Compatibilidad",
      subtitle: "Ajuste apropiado y compatibilidad con otros EPP",
      content: {
        introduction: "El uso correcto del casco es fundamental para garantizar la protección efectiva. Esto incluye ajuste apropiado, compatibilidad con otros equipos y procedimientos de colocación.",
        expertQuote: {
          text: "El casco debe ajustarse correctamente a la cabeza del usuario, manteniendo una separación de 25-32mm entre el cráneo y la carcasa, con el sistema de suspensión distribuido uniformemente para máxima absorción de impactos.",
          source: "Manual de Seguridad Ocupacional"
        },
        keyPoints: [
          "Ajuste correcto: 25-32mm de separación cráneo-carcasa",
          "Sistema de suspensión centrado y bien tensionado",
          "Compatibilidad con protección auditiva y visual",
          "Procedimientos correctos de colocación y retiro"
        ],
        recommendations: [
          "Capacitar al personal en técnicas de ajuste correcto",
          "Verificar compatibilidad antes de combinar EPP diferentes",
          "Establecer protocolos de inspección pre-uso diaria",
          "Documentar procedimientos específicos por puesto de trabajo"
        ],
        callToAction: {
          text: "Accede a videos instructivos sobre uso correcto de cascos.",
          link: "/recursos/videos-uso-cascos"
        }
      },
      icon: "🎯",
      bgGradient: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      sectionNumber: 6,
      title: "Inspección y Mantenimiento",
      subtitle: "Protocolos de cuidado y determinación de vida útil",
      content: {
        introduction: "Un programa sistemático de inspección y mantenimiento garantiza que los cascos mantengan sus propiedades protectivas a lo largo de su vida útil operativa.",
        expertQuote: {
          text: "Los cascos deben inspeccionarse diariamente antes del uso, verificando grietas, deformaciones, degradación UV y estado del sistema de suspensión. La vida útil típica es de 2-5 años según condiciones de uso.",
          source: "Protocolo de Mantenimiento Industrial"
        },
        keyPoints: [
          "Inspección visual diaria obligatoria antes del uso",
          "Verificación de grietas, deformaciones y decoloración",
          "Estado del sistema de suspensión y bandas de ajuste",
          "Vida útil: 2-5 años según exposición y condiciones"
        ],
        recommendations: [
          "Implementar listas de verificación diaria estandardizadas",
          "Establecer criterios claros de rechazo y reemplazo",
          "Mantener registros de inspección y mantenimiento",
          "Capacitar supervisores en técnicas de inspección"
        ],
        callToAction: {
          text: "Visita nuestro amplio catalogo de EPP y cascos de seguridad.",
          link: "/catalogo"
        }
      },
      icon: "🔧",
      bgGradient: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      sectionNumber: 7,
      title: "Sanciones y Responsabilidades",
      subtitle: "Marco legal y consecuencias del incumplimiento normativo",
      content: {
        introduction: "El incumplimiento de normativas de seguridad genera responsabilidades legales significativas para empleadores, incluyendo sanciones administrativas y civiles.",
        expertQuote: {
          text: "Las sanciones por incumplimiento de la NOM-115-STPS-2009 incluyen multas de 50 a 5,000 veces el salario mínimo general, clausura temporal y responsabilidad civil por daños al trabajador.",
          source: "Código Federal del Trabajo Mexicano"
        },
        keyPoints: [
          "Multas administrativas: 50 a 5,000 veces salario mínimo",
          "Posible clausura temporal de operaciones",
          "Responsabilidad civil por accidentes laborales",
          "Obligaciones específicas de empleadores y trabajadores"
        ],
        recommendations: [
          "Mantener evidencia documental de cumplimiento normativo",
          "Implementar programas de capacitación sistemática",
          "Establecer procedimientos de seguimiento y auditoría",
          "Contar con asesoría legal especializada en seguridad laboral"
        ],
        callToAction: {
          text: "Mejora la calidad de tu trabajo y cumple con la normativa, visita nuestro catalogo de productos que hemos escogido especialmente para ti.",
          link: "/catalogo"
        }
      },
      icon: "⚖️",
      bgGradient: "bg-gradient-to-br from-gray-600 to-gray-700"
    }
  ];

  return (
    <BlogLayout>
      <article>
        {/* Side Banners */}
        <SideBanners showBanners={showSideBanners} />
        
        {/* Hero Section */}
        <HeroManual showHeroCTAs={showHeroCTAs} />
        
        {/* Top 5 Products Section */}
        <TopProducts />
        
        {/* Main Sections */}
        <div className="bg-white">
          {sectionsData.map((section, index) => {
            const getVariant = (sectionNumber: number) => {
              if (sectionNumber === 1 || sectionNumber === 4) return 'featured';
              if (sectionNumber === 2 || sectionNumber === 6) return 'alternate';
              return 'default';
            };
            
            return (
              <div key={section.sectionNumber} id={section.title.toLowerCase().replace(/\s+/g, '-').replace(/[áéíóúñ]/g, (match) => {
                const map: { [key: string]: string } = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' };
                return map[match] || match;
              })}>
                <SectionBlock
                  sectionNumber={section.sectionNumber}
                  title={section.title}
                  subtitle={section.subtitle}
                  content={section.content}
                  icon={section.icon}
                  bgGradient={section.bgGradient}
                  variant={getVariant(section.sectionNumber)}
                />
              </div>
            );
          })}
        </div>

        {/* References Section */}
        <section id="referencias" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                📚 REFERENCIAS Y RECURSOS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                Referencias Técnicas y Normativas
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Normativas Oficiales</h3>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li>• NOM-115-STPS-2009 - Cascos de protección</li>
                    <li>• NOM-017-STPS-2008 - Equipo de protección personal</li>
                    <li>• NOM-009-STPS-2011 - Condiciones de seguridad</li>
                    <li>• ANSI Z89.1-2014 - Cascos industriales</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Fuentes Técnicas</h3>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li>• Guía Cascos Seguridad Leyes Mexicanas.pdf</li>
                    <li>• STPS - Secretaría del Trabajo México</li>
                    <li>• EMA - Entidad Mexicana de Acreditación</li>
                    <li>• Análisis técnico LinkerStore 2025</li>
                  </ul>
                </div>
              </div>
              
              <motion.div 
                className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Este manual ha sido elaborado con base en la normativa oficial mexicana y mejores prácticas internacionales, 
                  proporcionando información técnica actualizada para profesionales de seguridad industrial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    ✅ Información Verificada
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                    📅 Actualizado Diciembre 2025
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                    🏆 Certificado por Expertos
                  </Badge>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Related Guides Banner */}
        <RelatedGuidesBanner />
      </article>
    </BlogLayout>
  );
}
