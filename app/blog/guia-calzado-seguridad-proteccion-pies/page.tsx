"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import HeroCalzado from "@/components/blog/ManualCalzado/HeroCalzado";
import TopProducts from "@/components/blog/ManualCalzado/TopProducts";
import SectionBlock from "@/components/blog/ManualCascos/SectionBlock";
import RelatedGuidesBanner from "@/components/blog/ManualCalzado/RelatedGuidesBanner";
import SideBanners from "@/components/blog/ManualCalzado/SideBanners";

export default function GuiaCalzadoSeguridadArticle() {
  // Control de visibilidad de banners
  const [showSideBanners, setShowSideBanners] = useState(true);
  const [showHeroCTAs, setShowHeroCTAs] = useState(true);
  
  // SEO dinámico
  useEffect(() => {
    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaTitle) {
      metaTitle.setAttribute('content', 'Calzado de Seguridad: Guía NOM-113 2024 | Protección Pies');
    }
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía técnica completa sobre calzado de seguridad. Cumplimiento NOM-113-STPS-2009, selección correcta, mantenimiento y top productos certificados en México.');
    }
  }, []);

  // Control de scroll para banners
  useEffect(() => {
    // Crear observer para detectar cuando TopProducts entra en viewport
    const topProductsSection = document.getElementById('productos-recomendados');
    
    if (!topProductsSection) {
      console.warn('TopProducts section not found');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si TopProducts está visible, ocultar banners
          if (entry.isIntersecting) {
            setShowSideBanners(false);
          } else if (entry.boundingClientRect.top > 0) {
            // Si TopProducts está arriba de la pantalla (no scrolleado aún), mostrar banners
            setShowSideBanners(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger cuando 10% del elemento es visible
    );

    observer.observe(topProductsSection);

    // Fallback scroll listener para Hero CTAs
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.6) {
        setShowHeroCTAs(false);
      } else {
        setShowHeroCTAs(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Data de secciones basada en contenido técnico
  const sectionsData = [
    {
      sectionNumber: 1,
      title: "Introducción y Marco Legal",
      subtitle: "Fundamentos de la Protección Podal en México",
      content: {
        introduction: "La protección de los pies en el ámbito laboral mexicano ha evolucionado desde prácticas básicas hacia un sistema integral regulado por la NOM-113-STPS-2009. Esta normativa establece los requisitos mínimos que debe cumplir el calzado de seguridad para proteger contra los riesgos más comunes en el entorno industrial. El calzado representa la base de la seguridad personal, siendo el punto de contacto entre el trabajador y los peligros del suelo, desde objetos punzocortantes hasta riesgos eléctricos. En México, el 25% de los accidentes laborales afectan las extremidades inferiores, lo que convierte a la selección correcta del calzado en una decisión crítica para la prevención de lesiones.",
        expertQuote: {
          text: "El calzado de seguridad no es simplemente un accesorio laboral, sino un equipo de protección personal que puede marcar la diferencia entre una jornada segura y un accidente incapacitante. La NOM-113 establece claramente que el empleador debe proporcionar calzado certificado según los riesgos específicos del puesto.",
          source: "NOM-113-STPS-2009, Artículo 5.1 - Obligaciones del Patrón"
        },
        keyPoints: [
          "La NOM-113-STPS-2009 es obligatoria en todo territorio mexicano",
          "Clasifica el calzado en 7 tipos según la protección específica",
          "El empleador debe proveer calzado certificado sin costo al trabajador",
          "Las lesiones podales representan el 25% de accidentes laborales en México"
        ],
        recommendations: [
          "Identifica los riesgos específicos de tu área de trabajo",
          "Verifica siempre la certificación NOM-113 en la etiqueta",
          "Solicita capacitación sobre el uso correcto del calzado asignado",
          "Reporta inmediatamente cualquier daño o desgaste del calzado"
        ],
        callToAction: {
          text: "Ver Calzado Certificado NOM-113",
          link: "/catalogo?categoria=calzado-seguridad"
        }
      },
      icon: "👞",
      bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      sectionNumber: 2,
      title: "Clasificación Técnica NOM-113",
      subtitle: "Los 7 Tipos de Protección Podal Certificada",
      content: {
        introduction: "La norma NOM-113-STPS-2009 establece una clasificación precisa de 7 tipos de calzado de seguridad, cada uno diseñado para proteger contra riesgos específicos. Esta clasificación no es arbitraria, sino que responde a años de investigación en accidentología laboral y pruebas de resistencia. Cada tipo debe superar pruebas rigurosas de impacto, compresión, penetración y resistencia eléctrica según corresponda. La correcta identificación del tipo requerido para cada actividad es fundamental, ya que utilizar un calzado inadecuado puede ser tan peligroso como no usar protección alguna.",
        expertQuote: {
          text: "Cada tipo de calzado está diseñado para un riesgo específico. El Tipo II protege contra impactos de hasta 101.7 Joules, mientras que el Tipo III además ofrece aislamiento eléctrico hasta 14,000 voltios. No es intercambiable su uso.",
          source: "NOM-113-STPS-2009, Tabla 1 - Especificaciones por Tipo"
        },
        keyPoints: [
          "Tipo I: Uso general sin protección específica (básico)",
          "Tipo II (PP): Puntera protectora contra impactos y compresión",
          "Tipo III (D): Dieléctrico, aísla hasta 14,000 voltios",
          "Tipo IV (C): Conductivo, disipa electricidad estática"
        ],
        recommendations: [
          "Para electricistas: siempre Tipo III (Dieléctrico)",
          "Para construcción: mínimo Tipo II con puntera reforzada",
          "Para industria química: Tipo V resistente a químicos",
          "Para soldadura: Tipo VI resistente al calor",
          " Para áreas con riesgo de perforación: Tipo VII con suela anti-penetración"
        ],
        callToAction: {
          text: "Consulta nuestro catálogo de calzados certificados NOM-113-STPS-2009.",
          link: "/catalogo"
        }

      },
      icon: "📋",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      sectionNumber: 3,
      title: "Materiales y Construcción",
      subtitle: "Tecnología de Protección y Durabilidad",
      content: {
        introduction: "La efectividad del calzado de seguridad depende directamente de los materiales utilizados y el método de construcción. Los casquillos pueden ser de acero tradicional, policarbonato ultraligero o materiales compuestos como fibra de vidrio. Cada material ofrece ventajas específicas: el acero proporciona máxima resistencia al impacto, el policarbonato reduce significativamente el peso y la fibra de vidrio es completamente libre de metal. La suela también juega un papel crucial, con compuestos de poliuretano para antideslizamiento, EVA para absorción de impactos y rubber nitrilo para resistencia química. El método de unión entre suela y corte (inyección directa, vulcanizado o cementado) determina la durabilidad y resistencia al agua.",
        expertQuote: {
          text: "Un casquillo de acero soporta hasta 15,000 newtons de compresión, pero pesa 40% más que uno de policarbonato. La decisión debe basarse en el análisis de riesgos: máxima protección versus comodidad para largas jornadas.",
          source: "Estudio Comparativo de Materiales - Instituto de Seguridad Industrial"
        },
        keyPoints: [
          "Casquillo de acero: máxima resistencia (15,000N), mayor peso",
          "Casquillo policarbonato: 40% más ligero, igual protección",
          "Fibra de vidrio: libre de metal, apto para detectores",
          "Suela PU: antideslizante, resistente a hidrocarburos"
        ],
        recommendations: [
          "Para trabajo estático: prioriza protección (acero)",
          "Para largas caminatas: elige ligereza (policarbonato)",
          "Para áreas con detectores: usa fibra de vidrio",
          "Para pisos mojados: suela con patrón antideslizante profundo",
          ""
        ]
      },
      icon: "🔬",
      bgGradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      sectionNumber: 4,
      title: "Criterios de Selección",
      subtitle: "Cómo Elegir el Calzado Correcto para tu Industria",
      content: {
        introduction: "La selección correcta del calzado de seguridad requiere un análisis detallado del entorno laboral, los riesgos específicos y las condiciones de uso. No existe un calzado universal que proteja contra todos los riesgos; cada industria presenta desafíos únicos. La construcción requiere protección contra caídas de objetos y superficies irregulares, mientras que la industria eléctrica demanda aislamiento dieléctrico. La industria química necesita resistencia a solventes y ácidos, y la soldadura requiere protección térmica. Además de la protección, factores como comodidad, transpirabilidad, peso y durabilidad influyen en la productividad y aceptación por parte del trabajador.",
        expertQuote: {
          text: "Un calzado incómodo no solo afecta el rendimiento laboral, sino que puede llevar al trabajador a evitar su uso, eliminando completamente la protección. La comodidad y la seguridad deben ir de la mano.",
          source: "Manual de Ergonomía Laboral - STPS México"
        },
        keyPoints: [
          "Análisis de riesgos: identifica peligros específicos del puesto",
          "Tiempo de uso: considera jornadas de 8+ horas diarias",
          "Condiciones ambientales: humedad, temperatura, químicos",
          "Movilidad requerida: trabajo estático vs. dinámico"
        ],
        recommendations: [
          "Prueba el calzado al final del día cuando el pie está hinchado",
          "Verifica compatibilidad con calcetines de trabajo",
          "Considera plantillas ortopédicas para mayor comodidad",
          "Evalúa la facilidad de limpieza y mantenimiento",
          "🔍 Encuentra el calzado perfecto para tu industria → /catalogo?categoria=calzado-seguridad"
        ]
      },
      icon: "🎯",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      sectionNumber: 5,
      title: "Uso Correcto y Mantenimiento",
      subtitle: "Maximizando la Vida Útil y Efectividad",
      content: {
        introduction: "El uso correcto del calzado de seguridad va más allá de simplemente ponérselo. Incluye técnicas de ajuste apropiado, rotación entre pares para permitir secado, y reconocimiento de signos de desgaste que comprometan la protección. Un calzado mal ajustado puede causar ampollas, fatiga prematura y rechazo por parte del usuario. El mantenimiento preventivo incluye limpieza diaria, secado adecuado (nunca fuentes de calor directo), hidratación del cuero y inspección regular de la suela y estructura. La vida útil promedio varía entre 6-12 meses dependiendo del uso, pero factores como exposición química, temperatura extrema o impactos frecuentes pueden reducir significativamente este período.",
        expertQuote: {
          text: "Un calzado que ha sufrido un impacto fuerte debe ser reemplazado inmediatamente, aunque no presente daños visibles. La integridad estructural puede estar comprometida y fallar en el próximo impacto.",
          source: "Protocolo de Inspección de EPP - Norma Interna de Seguridad"
        },
        keyPoints: [
          "Ajuste correcto: espacio de 1cm entre dedo más largo y puntera",
          "Rotación: usar al menos 2 pares alternadamente",
          "Secado: temperatura ambiente, nunca calor directo",
          "Inspección: revisar suela, casquillo y costuras semanalmente"
        ],
        recommendations: [
          "Limpia diariamente con paño húmedo y jabón neutro",
          "Usa calcetines de algodón o materiales transpirables",
          "Aplica crema hidratante al cuero mensualmente",
          "Reemplaza inmediatamente después de impactos fuertes",
          "🔄 ¿Necesitas reemplazar tu calzado? Ver opciones → /catalogo?categoria=calzado-seguridad"
        ]
      },
      icon: "🔧",
      bgGradient: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      sectionNumber: 6,
      title: "Inspección y Vida Útil",
      subtitle: "Cuándo y Cómo Evaluar el Estado del Calzado",
      content: {
        introduction: "La inspección sistemática del calzado de seguridad es crucial para mantener su efectividad protectora. A diferencia del calzado convencional, el de seguridad puede parecer en buen estado externamente mientras que sus propiedades protectoras están comprometidas. Las inspecciones deben ser diarias (por el usuario), semanales (supervisión) y mensuales (técnico en seguridad). Los indicadores de reemplazo incluyen desgaste excesivo de suela que exponga la entresuela, deformación del casquillo, grietas en el cuero, desprendimiento de costuras principales y pérdida de propiedades antideslizantes. La vida útil no se mide solo en tiempo, sino en exposición acumulada a riesgos.",
        expertQuote: {
          text: "El desgaste del dibujo de la suela reduce la tracción hasta en 60%, convirtiendo cualquier superficie húmeda en un riesgo de caída. Es el indicador más visible de necesidad de reemplazo.",
          source: "Estudio de Tracción en Calzado Industrial - UNAM"
        },
        keyPoints: [
          "Inspección diaria: verificar estructura general y limpieza",
          "Inspección semanal: revisar desgaste de suela y casquillo",
          "Inspección mensual: evaluar propiedades protectoras",
          "Registro: documentar fecha de entrega y reemplazos"
        ],
        recommendations: [
          "Establece un programa de inspección documentado",
          "Capacita al personal en identificación de desgaste",
          "Mantén stock de reemplazo para diferentes tallas",
          "No uses calzado con daños visibles, aunque mínimos",
          "📋 Planifica tus reemplazos con nuestro catálogo → /catalogo?categoria=calzado-seguridad"
        ]
      },
      icon: "🔍",
      bgGradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      sectionNumber: 7,
      title: "Responsabilidades y Sanciones",
      subtitle: "Marco Legal y Consecuencias del Incumplimiento",
      content: {
        introduction: "La NOM-113-STPS-2009 establece responsabilidades claras tanto para empleadores como trabajadores en materia de calzado de seguridad. El empleador debe proporcionar, sin costo, el calzado apropiado según el análisis de riesgos del puesto, capacitar en su uso correcto y supervisar su utilización. El trabajador tiene la obligación de usar el calzado proporcionado, mantenerlo en buenas condiciones y reportar daños o pérdidas. Las sanciones por incumplimiento van desde amonestaciones hasta multas económicas significativas y, en casos de accidentes, responsabilidad civil y penal. La STPS realiza inspecciones regulares y puede clausurar operaciones que no cumplan con las normativas de seguridad.",
        expertQuote: {
          text: "Las multas por incumplimiento de la NOM-113 pueden alcanzar hasta 5,000 veces el salario mínimo. Sin embargo, el costo real está en las consecuencias humanas y económicas de un accidente que pudo haberse evitado.",
          source: "Ley Federal del Trabajo, Art. 992 - Sanciones en Materia de Seguridad"
        },
        keyPoints: [
          "Empleador: proporcionar calzado certificado sin costo",
          "Empleador: capacitar en uso y mantenimiento correcto",
          "Trabajador: usar obligatoriamente el calzado asignado",
          "Ambos: documentar entregas, capacitaciones y reemplazos"
        ],
        recommendations: [
          "Mantén registro detallado de entrega de calzado",
          "Documenta todas las capacitaciones impartidas",
          "Realiza auditorías internas de cumplimiento",
          "Establece un programa de reemplazo preventivo",
          "⚙️ Cumple la normativa con calzado certificado → /catalogo?categoria=calzado-seguridad"
        ]
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
        <HeroCalzado showHeroCTAs={showHeroCTAs} />
        
        {/* Top 5 Products Section */}
        <TopProducts />
        
        {/* Main Sections */}
        <div className="bg-white">
          {sectionsData.map((section, index) => {
            const getVariant = (sectionNumber: number) => {
              if (sectionNumber === 1 || sectionNumber === 4) return 'featured';
              if (sectionNumber === 2 || sectionNumber === 5) return 'alternate';
              return 'default';
            };
            
            return (
              <SectionBlock
                key={index}
                {...section}
                variant={getVariant(section.sectionNumber)}
              />
            );
          })}
        </div>
        
        {/* References and Technical Sources */}
        <div id="referencias" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                📖 Referencias Técnicas y Fuentes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Normativas Oficiales</h3>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li>• NOM-113-STPS-2009 - Calzado de Protección</li>
                    <li>• Ley Federal del Trabajo - Capítulo de Seguridad</li>
                    <li>• NOM-017-STPS-2008 - Equipo de Protección Personal</li>
                    <li>• ANSI Z41-1999 - Estándares Internacionales</li>
                    <li>• ISO 20345:2011 - Calzado de Seguridad</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Fuentes Técnicas</h3>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li>• Secretaría del Trabajo y Previsión Social (STPS)</li>
                    <li>• Instituto Mexicano del Seguro Social (IMSS)</li>
                    <li>• Asociación Mexicana de Seguridad Industrial</li>
                    <li>• Centro de Investigación en Materiales UNAM</li>
                    <li>• Manual de Ergonomía Laboral México</li>
                  </ul>
                </div>
              </div>
              
              {/* CTA hacia Catálogo */}
              <motion.div 
                className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Esta guía ha sido desarrollada con base en las normativas oficiales mexicanas y mejores prácticas internacionales. 
                  Mantente actualizado con los últimos productos certificados y tendencias en seguridad industrial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a 
                    href="/catalogo?categoria=calzado-seguridad"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>👞</span>
                    Ver Calzado Certificado
                  </motion.a>
                  <motion.a 
                    href="/catalogo"
                    className="inline-flex items-center gap-3 bg-white border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🛒</span>
                    Catálogo Completo
                  </motion.a>
                </div>
              </motion.div>
              
              {/* CTA adicional para asesoría */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 ¿Necesitas Asesoría Personalizada?</h3>
                <p className="text-gray-600 mb-4">
                  Nuestros expertos en seguridad industrial pueden ayudarte a seleccionar el calzado ideal para tu empresa.
                </p>
                <motion.a 
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>📞</span>
                  Solicitar Asesoría
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Related Guides - Movido al final */}
        <RelatedGuidesBanner />
      </article>
    </BlogLayout>
  );
}
