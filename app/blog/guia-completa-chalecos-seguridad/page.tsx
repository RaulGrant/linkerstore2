"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Eye, ExternalLink, Star, Zap } from "lucide-react";
import { useEffect, useState } from 'react';
import Link from "next/link";

// Sections data for content
const sectionsData = [
  {
    sectionNumber: 1,
    title: "¿Qué son los Chalecos de Seguridad?",
    subtitle: "Fundamentos y características técnicas de los chalecos de protección personal",
    content: {
      introduction: "Los chalecos de seguridad son equipos de protección personal (EPP) diseñados específicamente para hacer visible al trabajador en entornos laborales de bajo contraste visual o condiciones de poca luz. Según la norma ANSI/ISEA 107, estos equipos son fundamentales para la prevención de accidentes por atropellamiento y colisión en zonas de tráfico vehicular.",
      keyPoints: [
        "Aumentan la visibilidad del trabajador hasta 500 metros",
        "Reducen accidentes por atropellamiento en 92%",
        "Obligatorios en trabajos cerca del tráfico vehicular",
        "Deben cumplir normativas ANSI/ISEA 107"
      ],
      expertQuote: {
        text: "Un chaleco de alta visibilidad puede ser la diferencia entre la vida y la muerte en entornos de alto riesgo vehicular.",
        source: "Instituto Nacional de Seguridad y Salud Ocupacional (NIOSH)"
      },
      warningBox: {
        type: "warning",
        title: "⚠️ Importante",
        content: "Los chalecos dañados, sucios o desteñidos pierden su efectividad protectora y deben ser reemplazados inmediatamente."
      }
    }
  },
  {
    sectionNumber: 2,
    title: "Clases de Chalecos según ANSI/ISEA 107",
    subtitle: "Clasificación técnica y aplicaciones específicas por tipo de riesgo",
    content: {
      introduction: "La norma ANSI/ISEA 107 establece tres clases principales de chalecos de alta visibilidad, cada una diseñada para niveles específicos de riesgo y velocidades vehiculares. Esta clasificación es fundamental para seleccionar el equipo adecuado según el entorno laboral.",
      technicalDetails: {
        title: "Especificaciones por Clase",
        items: [
          "Clase 1: Trabajos con tráfico que no excede 40 km/h, mínimo 0.14 m² de material fluorescente",
          "Clase 2: Tráfico entre 40-80 km/h, mínimo 0.50 m² de material fluorescente y cintas retrorreflectantes",
          "Clase 3: Tráfico superior a 80 km/h, mínimo 0.80 m² de material fluorescente, manga larga obligatoria"
        ]
      },
      keyPoints: [
        "Clase 1: Aeropuertos, almacenes, estacionamientos",
        "Clase 2: Construcción vial, trabajo en carreteras",
        "Clase 3: Autopistas, trabajos nocturnos de alto riesgo",
        "Cada clase tiene requisitos específicos de área reflectante"
      ],
      warningBox: {
        type: "danger",
        title: "🚨 Peligro",
        content: "Usar una clase inferior a la requerida puede resultar en accidentes fatales. Siempre verifique los requisitos específicos de su sitio de trabajo."
      }
    }
  },
  {
    sectionNumber: 3,
    title: "Materiales y Tecnologías de Visibilidad",
    subtitle: "Materiales fluorescentes, retrorreflectantes y tecnologías avanzadas",
    content: {
      introduction: "Los chalecos de seguridad utilizan dos tecnologías principales para maximizar la visibilidad: materiales fluorescentes para visibilidad diurna y cintas retrorreflectantes para condiciones nocturnas. La combinación efectiva de ambas tecnologías es crucial para la protección integral.",
      keyPoints: [
        "Materiales fluorescentes: amarillo lima, naranja, rojo",
        "Cintas retrorreflectantes 3M Scotchlite de alto rendimiento",
        "Resistencia a lavados industriales mínimo 25 ciclos",
        "Protección UV para mantener colores fluorescentes"
      ],
      technicalDetails: {
        title: "Especificaciones Técnicas de Materiales",
        items: [
          "Material base: Poliéster 100% con tratamiento anti-UV",
          "Cintas retrorreflectantes: Cumplimiento ASTM D4956 Tipo XI",
          "Coeficiente de retrorreflexión mínimo: 330 cd/lx/m²",
          "Factor de luminancia β ≥ 0.2 para materiales fluorescentes"
        ]
      },
      tips: [
        "Inspeccione regularmente el estado de las cintas reflectantes",
        "Lave con agua fría para preservar propiedades fluorescentes",
        "Reemplace si hay grietas o desprendimientos en material reflectante"
      ]
    }
  }
];

// Simple products data
const topProducts = [
  {
    id: 1,
    name: "Chaleco Alta Visibilidad Clase 2",
    description: "Chaleco amarillo fluorescente con cintas 3M Scotchlite",
    rating: 4.8,
    reviews: 156,
    price: "Desde $280 MXN",
    features: ["ANSI/ISEA 107 Clase 2", "Cintas 3M Scotchlite", "5 bolsillos", "Cierre frontal"],
    link: "https://articulo.mercadolibre.com.mx/MLM-1234567890-chaleco-alta-visibilidad-clase-2"
  },
  {
    id: 2,
    name: "Chaleco Malla Transpirable Clase 1",
    description: "Chaleco de malla para climas cálidos con excelente ventilación",
    rating: 4.6,
    reviews: 203,
    price: "Desde $195 MXN", 
    features: ["ANSI/ISEA 107 Clase 1", "Malla transpirable", "Ligero", "Lavable"],
    link: "https://articulo.mercadolibre.com.mx/MLM-2345678901-chaleco-malla-transpirable"
  },
  {
    id: 3,
    name: "Chaleco Clase 3 Carreteras",
    description: "Máxima visibilidad para trabajos en carreteras y autopistas",
    rating: 4.9,
    reviews: 87,
    price: "Desde $420 MXN",
    features: ["ANSI/ISEA 107 Clase 3", "Manga larga", "Máxima protección", "Certificado DOT"],
    link: "https://articulo.mercadolibre.com.mx/MLM-3456789012-chaleco-clase-3-carreteras"
  }
];

export default function GuiaCompletaChalecosSeguridad() {
  // SEO and meta data
  useEffect(() => {
    document.title = 'Guía Completa de Chalecos de Seguridad | Alta Visibilidad y Protección Corporal 2025';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía técnica completa sobre chalecos de seguridad y alta visibilidad. Cumplimiento ANSI/ISEA 107-2020, NOM-116-STPS-2009, selección correcta y top productos certificados México.');
    }
  }, []);

  // Data for all 6 sections based on technical analysis
  const sectionsData = [
    {
      sectionNumber: 1,
      title: "Introducción a los Chalecos de Seguridad",
      subtitle: "Importancia crítica de la protección corporal y alta visibilidad en el trabajo",
      content: {
        introduction: "Los chalecos de seguridad constituyen un elemento fundamental del equipo de protección personal, diseñados específicamente para aumentar la visibilidad del trabajador y protegerlo contra riesgos de atropellamiento en entornos industriales y de construcción.",
        expertQuote: {
          text: "Los chalecos de alta visibilidad son obligatorios para todos los trabajadores expuestos a riesgo de atropellamiento por vehículos o maquinaria móvil en el lugar de trabajo.",
          source: "NOM-116-STPS-2009"
        },
        keyPoints: [
          "Los chalecos de alta visibilidad previenen el 92% de accidentes por atropellamiento",
          "Obligatorio según NOM-116-STPS-2009 en áreas con tráfico vehicular",
          "Reducción del 85% en accidentes laborales en carreteras y construcción",
          "Elemento crítico del sistema integral de seguridad ocupacional"
        ],
        technicalDetails: {
          title: "Normativas Aplicables en México",
          items: [
            "NOM-116-STPS-2009: Seguridad e Higiene en Soldadura y Corte",
            "ANSI/ISEA 107-2020: Ropa de Alta Visibilidad",
            "NOM-017-STPS-2008: Equipo de Protección Personal",
            "ISO 20471:2013: Ropa de Alta Visibilidad"
          ]
        },
        warningBox: {
          title: "Cumplimiento Normativo Obligatorio",
          content: "El uso de chalecos de seguridad certificados es obligatorio por ley en trabajos con riesgo de atropellamiento. El incumplimiento puede resultar en multas significativas y responsabilidad civil en caso de accidentes.",
          type: "warning"
        },
        tips: [
          "Verifica siempre la certificación ANSI/ISEA en la etiqueta",
          "Reemplaza chalecos dañados o con cintas desgastadas inmediatamente",
          "Inspecciona diariamente el estado de las cintas retroreflectivas",
          "Capacita a los trabajadores sobre el uso correcto"
        ]
      }
    },
    {
      sectionNumber: 2,
      title: "Clasificación y Tipos de Chalecos",
      subtitle: "Comprende las diferentes clases y aplicaciones según normativa ANSI/ISEA",
      content: {
        introduction: "La normativa ANSI/ISEA 107-2020 establece tres clases principales de chalecos de alta visibilidad, cada una diseñada para diferentes niveles de riesgo y velocidades de tráfico vehicular.",
        expertQuote: {
          text: "La selección de la clase correcta de chaleco puede ser la diferencia entre la vida y la muerte en entornos de alto riesgo.",
          source: "Instituto Nacional de Seguridad y Salud Ocupacional (NIOSH)"
        },
        keyPoints: [
          "Clase 1: Áreas de bajo riesgo, tráfico lento (< 40 km/h)",
          "Clase 2: Riesgo moderado, tráfico medio (40-80 km/h)",
          "Clase 3: Alto riesgo, tráfico rápido (> 80 km/h)",
          "Tipo R: Material retrorreflectivo combinado"
        ],
        technicalDetails: {
          title: "Especificaciones por Clase",
          items: [
            "Clase 1: Mínimo 0.14 m² de material fluorescente",
            "Clase 2: Mínimo 0.50 m² de material fluorescente", 
            "Clase 3: Mínimo 0.80 m² de material fluorescente",
            "Ancho mínimo de cintas: 50mm (Clase 2-3)"
          ]
        },
        warningBox: {
          title: "Selección Incorrecta de Clase",
          content: "Usar una clase inferior a la requerida por la velocidad del tráfico y condiciones de trabajo expone al trabajador a riesgos fatales. Siempre consulta la evaluación de riesgos específica del sitio.",
          type: "danger"
        },
        tips: [
          "Para carreteras siempre usa Clase 3 como mínimo",
          "En almacenes con montacargas usa Clase 2",
          "Para aeropuertos se requiere Clase 3 obligatoriamente",
          "Considera condiciones climáticas al seleccionar"
        ]
      }
    },
    {
      sectionNumber: 3,
      title: "Materiales y Características Técnicas",
      subtitle: "Análisis profundo de materiales, durabilidad y rendimiento de chalecos",
      content: {
        introduction: "La efectividad de un chaleco de seguridad depende críticamente de la calidad de sus materiales, desde el tejido base hasta las cintas retroreflectivas y sistemas de cierre.",
        keyPoints: [
          "Poliéster 100%: Mayor durabilidad y resistencia a lavado",
          "Malla transpirable: Reduce estrés térmico en climas cálidos",
          "Cintas 3M Scotchlite: Máxima retroreflectividad certificada",
          "Cierres YKK: Resistencia superior y mayor vida útil"
        ],
        technicalDetails: {
          title: "Propiedades de Materiales Críticos",
          items: [
            "Retroreflectividad mínima: 500 cd/lx/m² (plata), 330 cd/lx/m² (amarillo)",
            "Resistencia al lavado: Mínimo 25 ciclos industriales",
            "Factor de luminancia: β ≥ 0.22 (amarillo), β ≥ 0.10 (naranja)",
            "Solidez del color: Grado 4 mínimo según ISO 105"
          ]
        },
        warningBox: {
          title: "Degradación de Materiales",
          content: "La exposición prolongada a UV, lavados frecuentes y químicos industriales degrada rápidamente la efectividad del chaleco. Establece programas de reemplazo preventivo.",
          type: "warning"
        },
        tips: [
          "Lava con agua fría para preservar colores fluorescentes",
          "Evita blanqueadores que dañan cintas retroreflectivas",
          "Almacena lejos de luz directa y productos químicos",
          "Inspecciona mensualmente la integridad de costuras"
        ]
      }
    },
    {
      sectionNumber: 4,
      title: "Criterios de Selección Profesional",
      subtitle: "Metodología para elegir el chaleco correcto según aplicación específica",
      content: {
        introduction: "La selección correcta de un chaleco de seguridad requiere un análisis sistemático del entorno de trabajo, riesgos específicos, condiciones climáticas y requerimientos normativos aplicables.",
        keyPoints: [
          "Evaluación de riesgos: Base fundamental para selección",
          "Condiciones climáticas: Impactan en comodidad y cumplimiento",
          "Tipo de trabajo: Determina funcionalidad requerida",
          "Presupuesto vs. seguridad: Balance crítico a largo plazo"
        ],
        technicalDetails: {
          title: "Matriz de Selección por Industria",
          items: [
            "Construcción: Clase 2-3, multibolsillos, resistente",
            "Carreteras: Clase 3 obligatorio, manga larga preferible",
            "Aeropuertos: Clase 3, certificación especial requerida",
            "Almacenes: Clase 1-2, transpirable, cómodo"
          ]
        },
        warningBox: {
          title: "Falsa Economía en Seguridad",
          content: "Comprar chalecos baratos sin certificación adecuada es una falsa economía. Los costos de un accidente superan enormemente el ahorro inicial en equipos de menor calidad.",
          type: "warning"
        },
        tips: [
          "Solicita siempre certificados de conformidad",
          "Prueba diferentes tallas antes de comprar lotes grandes",
          "Considera la facilidad de lavado y mantenimiento",
          "Evalúa la disponibilidad de refacciones"
        ]
      }
    },
    {
      sectionNumber: 5,
      title: "Mantenimiento y Cuidado",
      subtitle: "Procedimientos para maximizar vida útil y efectividad del equipo",
      content: {
        introduction: "Un mantenimiento adecuado no solo extiende la vida útil del chaleco, sino que garantiza que mantenga sus propiedades de seguridad a lo largo del tiempo de uso.",
        keyPoints: [
          "Inspección diaria: Detecta daños antes que comprometan seguridad",
          "Lavado adecuado: Preserva propiedades retroreflectivas",
          "Almacenamiento correcto: Previene degradación prematura",
          "Registro de mantenimiento: Cumplimiento y trazabilidad"
        ],
        technicalDetails: {
          title: "Procedimientos de Inspección",
          items: [
            "Verifica integridad de cintas retroreflectivas",
            "Examina costuras por hilos sueltos o roturas",
            "Revisa cierres y sistemas de ajuste",
            "Comprueba decoloración o manchas permanentes"
          ]
        },
        warningBox: {
          title: "Criterios de Reemplazo Inmediato",
          content: "Reemplaza inmediatamente chalecos con cintas despegadas, roturas en costuras, decoloración severa o contaminación química. Un chaleco dañado es peor que no usar protección.",
          type: "danger"
        },
        tips: [
          "Establece rotación para uso equitativo del lote",
          "Designa responsable de inspección por área",
          "Mantén stock de reemplazo para emergencias",
          "Documenta todas las inspecciones y reemplazos"
        ]
      }
    },
    {
      sectionNumber: 6,
      title: "Referencias y Recursos Adicionales",
      subtitle: "Fuentes oficiales, normativas y recursos para profundizar conocimientos",
      content: {
        introduction: "Esta sección proporciona recursos adicionales para mantenerse actualizado sobre normativas, mejores prácticas y desarrollos en tecnología de chalecos de seguridad.",
        keyPoints: [
          "Fuentes normativas oficiales mexicanas e internacionales",
          "Organismos certificadores reconocidos",
          "Literatura técnica especializada",
          "Recursos de capacitación y actualización profesional"
        ],
        technicalDetails: {
          title: "Organismos Certificadores Reconocidos",
          items: [
            "ANSI (American National Standards Institute)",
            "ISEA (International Safety Equipment Association)",
            "STPS (Secretaría del Trabajo y Previsión Social México)",
            "ISO (International Organization for Standardization)"
          ]
        },
        tips: [
          "Suscríbete a actualizaciones de normativas",
          "Participa en conferencias de seguridad industrial",
          "Mantén biblioteca técnica actualizada",
          "Establece red de contactos profesionales"
        ]
      }
    }
  ];

  return (
    <BlogLayout
      title="Guía Completa de Chalecos de Seguridad"
      description="Manual técnico sobre chalecos de alta visibilidad y protección corporal"
      keywords="chalecos seguridad, alta visibilidad, ANSI ISEA 107, NOM-116"
      publishDate="2024-03-15"
      readTime="12 min"
      category="Guías Técnicas"
      author={{
        name: "Ing. Luis Pérez",
        avatar: "/images/authors/luis-perez.jpg",
        bio: "Especialista en Equipos de Protección Personal"
      }}
    >
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="bg-white/20 text-white border-0 px-4 py-2">ANSI/ISEA 107</Badge>
              <Badge className="bg-white/20 text-white border-0 px-4 py-2">NOM-116-STPS</Badge>
              <Badge className="bg-white/20 text-white border-0 px-4 py-2">Alta Visibilidad</Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chalecos de Seguridad
              <span className="block text-yellow-100">y Alta Visibilidad</span>
            </h1>
            
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Guía técnica completa sobre selección, uso y mantenimiento de chalecos 
              de protección personal certificados
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">92%</div>
                <div className="text-orange-200 text-sm">prevención de accidentes por atropellamiento</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-orange-200 text-sm">clases de protección ANSI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-orange-200 text-sm">reducción en accidentes laborales</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/catalogo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl shadow-lg hover:bg-orange-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-6 h-6 mr-2" />
                Ver Chalecos Certificados
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">
              🦺 TOP PRODUCTOS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chalecos de Seguridad Más Vendidos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-orange-600">{product.price}</span>
                    </div>
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      Ver en MercadoLibre
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      {sectionsData.map((section, index) => (
        <section key={section.sectionNumber} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">
                  SECCIÓN {section.sectionNumber}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {section.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {section.content.introduction}
                      </p>
                      
                      {section.content.expertQuote && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                          <p className="text-blue-800 italic mb-2">"{section.content.expertQuote.text}"</p>
                          <p className="text-blue-600 text-sm font-semibold">- {section.content.expertQuote.source}</p>
                        </div>
                      )}

                      {section.content.technicalDetails && (
                        <div className="mt-6">
                          <h3 className="text-xl font-bold mb-3">{section.content.technicalDetails.title}</h3>
                          <ul className="space-y-2">
                            {section.content.technicalDetails.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  {/* Key Points */}
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Puntos Clave
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-green-800">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Warning Box */}
                  {section.content.warningBox && (
                    <Card className={`border-2 ${
                      section.content.warningBox.type === 'danger' 
                        ? 'bg-red-50 border-red-200' 
                        : 'bg-yellow-50 border-yellow-200'
                    }`}>
                      <CardHeader>
                        <CardTitle className={`flex items-center gap-2 ${
                          section.content.warningBox.type === 'danger' ? 'text-red-800' : 'text-yellow-800'
                        }`}>
                          <AlertTriangle className="w-5 h-5" />
                          {section.content.warningBox.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className={`text-sm ${
                          section.content.warningBox.type === 'danger' ? 'text-red-800' : 'text-yellow-800'
                        }`}>
                          {section.content.warningBox.content}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Tips */}
                  {section.content.tips && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-blue-800 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Consejos Profesionales
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {section.content.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Zap className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-blue-800">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* CTA after certain sections */}
              {(index === 0 || index === 2 || index === 4) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 shadow-2xl text-white text-center">
                    <h4 className="text-2xl font-bold mb-4">¿Necesitas productos relacionados?</h4>
                    <p className="text-orange-100 mb-6 text-lg">
                      Encuentra chalecos de seguridad certificados para tu industria específica.
                    </p>
                    <motion.a
                      href="/catalogo"
                      className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-orange-50 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver Productos Certificados
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Related Articles */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">
              📚 RECURSOS RELACIONADOS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Otras Guías de Protección Personal
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Manual de Cascos de Seguridad",
                description: "Guía completa sobre protección craneal",
                href: "/blog/manual-cascos-seguridad-proteccion-craneal"
              },
              {
                title: "Guantes de Trabajo",
                description: "Selección por tipo de riesgo",
                href: "/blog/guantes-trabajo-seleccion-riesgo-aplicacion"
              },
              {
                title: "Protección Respiratoria",
                description: "Máscaras y respiradores certificados",
                href: "/blog/proteccion-respiratoria-mascaras-respiradores"
              },
              {
                title: "Calzado de Seguridad",
                description: "Protección de pies NOM-113",
                href: "/blog/guia-calzado-seguridad-proteccion-pies"
              }
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={guide.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                      <div className="flex items-center gap-1 text-orange-600 text-sm font-semibold">
                        Leer más <ExternalLink className="w-3 h-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
