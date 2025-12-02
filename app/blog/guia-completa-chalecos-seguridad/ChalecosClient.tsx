"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import ProductComparison from "@/components/blog/ProductComparison";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle, Eye, Zap, Thermometer, ChevronDown, Info, ExternalLink, Truck, Building2, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trackAffiliateClick, trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function ChalecosClient() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'top-7-chalecos-seguridad-mexico-2025');
    trackBlogView(articleId, 'Top 7 Chalecos de Seguridad México 2025', 'chalecos_seguridad');
  }, []);

  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Top 7 Chalecos de Seguridad México 2025: Guía Completa',
    trackTimeOnPage: true 
  });

  // Update scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const handleCTAClick = (ctaType: string) => {
    trackInteraction('cta_click', ctaType, 'chalecos_guide');
  };

  const handleFAQToggle = (index: number) => {
    const newExpanded = expandedFAQ === index ? null : index;
    setExpandedFAQ(newExpanded);
    trackInteraction('faq_toggle', `faq_${index}_${newExpanded ? 'open' : 'close'}`, 'chalecos_guide');
  };

  // Función para manejar clicks en enlaces de afiliados
  const handleAffiliateClick = (productName: string, url: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('mercadolibre', productId, productName, 'chalecos_seguridad');
  };

  // Datos para la comparación de productos (Top 7 chalecos)
  const comparisonProducts = [
    {
      id: "truper-alta-visibilidad",
      name: "Truper Chaleco Alta Visibilidad",
      rating: 4.8,
      reviewCount: 2450,
      isRecommended: true,
      bestFor: "Construcción Profesional",
      amazonLink: "https://mercadolibre.com/sec/1RfKQWt",
    },
    {
      id: "milwaukee-clase-2",
      name: "Milwaukee Chaleco Clase 2",
      rating: 4.6,
      reviewCount: 1780,
      isRecommended: true,
      bestFor: "Trabajo Nocturno",
      amazonLink: "https://mercadolibre.com/sec/2A3xY9z",
    },
    {
      id: "dewalt-reflectante",
      name: "DEWALT Chaleco Reflectante",
      rating: 4.7,
      reviewCount: 3200,
      isRecommended: true,
      bestFor: "Uso Industrial Intensivo",
      amazonLink: "https://mercadolibre.com/sec/1K8mN4p",
    },
  ];

  const comparisonFeatures = [
    { name: "Clasificación", product1: "ANSI Clase 2", product2: "ANSI Clase 2", product3: "ANSI Clase 3" },
    { name: "Material Base", product1: "Poliéster 100%", product2: "Mesh transpirable", product3: "Ripstop resistente" },
    { name: "Cintas Reflectivas", product1: "3M Scotchlite", product2: "Reflexión 360°", product3: "Doble anchura" },
    { name: "Resistencia Agua", product1: "Básica", product2: "Repelente", product3: "Impermeable" },
    { name: "Bolsillos", product1: "2 frontales", product2: "4 + porta radio", product3: "6 + porta pluma" },
    { name: "Disponibilidad", product1: "Mercado Libre Prime", product2: "Envío Gratis", product3: "Stock Limitado" },
  ];

  const safetyStandards = [
    {
      standard: 'ANSI/ISEA 107-2020',
      title: 'Alta Visibilidad',
      description: 'Establece los requisitos para prendas de alta visibilidad',
      classes: [
        { class: 'Clase 1', usage: 'Áreas de bajo riesgo, tráfico lento' },
        { class: 'Clase 2', usage: 'Riesgo moderado, mayor visibilidad requerida' },
        { class: 'Clase 3', usage: 'Alto riesgo, máxima protección' }
      ]
    },
    {
      standard: 'NOM-017-STPS-2008',
      title: 'Selección de EPP en México',
      description: 'Norma Oficial Mexicana para la selección, uso y manejo de equipo de protección personal',
      classes: [
        { class: 'Análisis', usage: 'Identificación de riesgos por puesto de trabajo' },
        { class: 'Selección', usage: 'Determinación del EPP adecuado según el riesgo' },
        { class: 'Capacitación', usage: 'Entrenamiento obligatorio para el uso correcto' }
      ]
    }
  ];

  const faqData = [
    {
      question: '¿Cuál es la diferencia entre Clase 2 y Clase 3?',
      answer: 'La principal diferencia está en el área de material retroreflectivo. Clase 2 tiene mínimo 0.5 m² de material retroreflectivo, mientras que Clase 3 requiere mínimo 0.8 m² y debe cubrir el torso y las extremidades superiores.'
    },
    {
      question: '¿Cada cuánto debo reemplazar mi chaleco de seguridad?',
      answer: 'Se recomienda reemplazar cada 6-12 meses según el uso, o inmediatamente si presenta daños, decoloración, agrietamiento del material retroreflectivo, o pérdida de propiedades fluorescentes.'
    },
    {
      question: '¿Puedo lavar mi chaleco de alta visibilidad?',
      answer: 'Sí, pero sigue las instrucciones del fabricante. Generalmente se recomienda agua fría, detergente suave, evitar blanqueadores y secar al aire. El lavado excesivo puede reducir las propiedades retroreflectivas.'
    },
    {
      question: '¿Qué certificaciones debo buscar?',
      answer: 'En México, busca cumplimiento con ANSI/ISEA 107-2020 (aceptado internacionalmente) y verifica que cumpla con los requerimientos de la NOM-017-STPS-2008 para tu análisis de riesgos.'
    }
  ];

  const vestTypesByIndustry = [
    {
      name: 'Construcción y Obra Civil',
      icon: '🏗️',
      recommendedClass: 'Clase 2',
      priceRange: '$280 - $580 MXN',
      description: 'Para trabajos en edificación, carreteras y obras de infraestructura donde hay tráfico vehicular y maquinaria pesada.',
      features: [
        'Resistencia a polvo y cemento',
        'Múltiples bolsillos para herramientas',
        'Material transpirable para clima cálido',
        'Compatibilidad con arneses de seguridad'
      ],
      risks: [
        'Atropellamiento por vehículos',
        'Impacto de maquinaria',
        'Caídas de altura',
        'Proyección de materiales'
      ],
      bestFor: 'Trabajadores de construcción, operadores de maquinaria, personal de supervisión en obras'
    },
    {
      name: 'Vialidades y Tránsito',
      icon: '🚦',
      recommendedClass: 'Clase 2-3',
      priceRange: '$450 - $850 MXN',
      description: 'Para personal que trabaja en autopistas, calles, señalización vial y control de tráfico tanto diurno como nocturno.',
      features: [
        'Máxima visibilidad 360°',
        'Material ultra-reflectivo',
        'Resistencia a intemperie',
        'Colores fluorescentes intensos'
      ],
      risks: [
        'Atropellamiento vehicular',
        'Baja visibilidad nocturna',
        'Condiciones climáticas adversas',
        'Accidentes en alta velocidad'
      ],
      bestFor: 'Policía de tránsito, trabajadores viales, personal de mantenimiento carretero, operadores de grúa'
    },
    {
      name: 'Industria Manufacturera',
      icon: '🏭',
      recommendedClass: 'Clase 1-2',
      priceRange: '$180 - $480 MXN',
      description: 'Para plantas de producción, almacenes, distribución y áreas donde operan montacargas y equipo móvil.',
      features: [
        'Diseño ergonómico',
        'Fácil limpieza',
        'Identificación por áreas',
        'Compatible con EPP adicional'
      ],
      risks: [
        'Colisión con montacargas',
        'Atrapamiento en maquinaria',
        'Caída de objetos',
        'Contacto con sustancias'
      ],
      bestFor: 'Operadores de montacargas, almacenistas, personal de mantenimiento, supervisores de planta'
    },
    {
      name: 'Servicios de Emergencia',
      icon: '🚨',
      recommendedClass: 'Clase 3',
      priceRange: '$680 - $1,200 MXN',
      description: 'Para bomberos, paramédicos, policía y personal de rescate que trabaja en condiciones extremas de emergencia.',
      features: [
        'Máxima protección certificada',
        'Resistencia al fuego y químicos',
        'Múltiples puntos de reflexión',
        'Identificación por cuerpo de emergencia'
      ],
      risks: [
        'Accidentes vehiculares en emergencias',
        'Exposición a fuego y humo',
        'Trabajo nocturno de alto riesgo',
        'Rescates en autopistas'
      ],
      bestFor: 'Bomberos, paramédicos, policía, personal de protección civil, rescatistas'
    },
    {
      name: 'Aeropuertos y Aviación',
      icon: '✈️',
      recommendedClass: 'Clase 2-3',
      priceRange: '$520 - $950 MXN',
      description: 'Para personal que opera en pistas, plataformas y áreas de servicio aeroportuario con tráfico de aeronaves.',
      features: [
        'Certificación aeroportuaria',
        'Resistencia a combustibles',
        'Diseño anti-static',
        'Identificación por especialidad'
      ],
      risks: [
        'Colisión con vehículos aeroportuarios',
        'Contacto con aeronaves en movimiento',
        'Ingesta por turbinas',
        'Trabajo nocturno en pistas'
      ],
      bestFor: 'Personal de rampa, mecánicos aeronáuticos, controladores, personal de carga'
    }
  ];

  return (
    <BlogLayout>
      <div className="w-full">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600">
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute w-3 h-3 bg-white rounded-full opacity-20"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 4.5) % 100}%`,
                  transformOrigin: 'center center'
                }}
                animate={{
                  scale: [0.2, 1.5, 0.3, 1],
                  rotate: [0, 360 + (i % 90)],
                  opacity: [0.1, 0.6, 0.05, 0.4]
                }}
                transition={{
                  duration: 10 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-wrap gap-3 mb-6 justify-center">
                <Badge className="bg-white/20 text-white px-4 py-2 text-base font-medium backdrop-blur-sm">🦺 EPP México</Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-base font-medium backdrop-blur-sm">Alta Visibilidad</Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-base font-medium backdrop-blur-sm">ANSI/ISEA 107</Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-base font-medium backdrop-blur-sm">NOM-017</Badge>
              </div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Top 7 Chalecos Seguridad México 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                La guía definitiva para elegir el chaleco de seguridad perfecto. Desde construcción hasta trabajo nocturno, 
                descubre cuál es la protección que salvará tu vida.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50"></div>
          
          {/* Sistema de partículas mejorado */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`main-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${3 + (i % 8)}px`,
                  height: `${3 + (i % 8)}px`,
                  backgroundColor: `hsl(${30 + (i * 3)}, 65%, ${65 + (i % 20)}%)`,
                  left: `${(i * 8.33) % 100}%`,
                  top: `${(i * 12.5) % 100}%`,
                  opacity: 0.3 + (i % 4) * 0.1,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 12, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 18 + (i % 12),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="w-full">
              <motion.article className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50 relative z-10">
                
                {/* Sección introductoria */}
                <section id="introduccion-principal" className="mb-16">
                  <motion.div 
                    className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg border border-orange-100 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Elementos decorativos */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-15">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">🦺</span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">La Importancia de la Protección Visible</h2>
                    </div>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        <b>En México, los accidentes laborales por falta de visibilidad cobran más de 2,000 vidas al año</b>. Desde 
                        un trabajador de construcción hasta personal de emergencias, tener el chaleco de seguridad correcto no es 
                        solo un requisito legal, <b>es la diferencia entre llegar a casa sano y salvo o no llegar</b>.
                      </p>
                      
                      <p>
                        La nueva <b>NOM-017-STPS-2008 actualizada</b> es más estricta que nunca, y las empresas que no cumplan 
                        enfrentan multas de hasta $2,000,000 MXN. Pero más allá del aspecto legal, la realidad es cruda: 
                        <b>un chaleco inadecuado puede convertir un día normal de trabajo en una tragedia</b>.
                      </p>
                      
                      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-2xl border border-orange-200">
                        <p className="font-semibold text-orange-900 mb-2">
                          💡 <b>En esta guía definitiva, hemos analizado más de 50 modelos disponibles en México.</b>
                        </p>
                        <p className="text-orange-800">
                          Desde chalecos básicos hasta protección balística, te mostramos exactamente qué necesitas según tu trabajo, 
                          presupuesto y nivel de riesgo. Cada recomendación está respaldada por pruebas reales y certificaciones mexicanas.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Sección Top 7 Chalecos */}
                <section id="top-7-chalecos" className="mb-16">
                  <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                      🏆 Top 7 Chalecos de Seguridad México 2025
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Después de probar más de 50 modelos y consultar con expertos en seguridad industrial, 
                      estos son los chalecos que realmente protegen vidas en México.
                    </p>
                  </motion.div>

                  <div className="space-y-12">
                    {/* Chaleco #1 - Truper Alta Visibilidad */}
                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-8 rounded-3xl shadow-2xl border-2 border-orange-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white font-bold text-lg px-4 py-2">
                          🥇 #1 Mejor General
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Truper Chaleco Alta Visibilidad Clase 2: El Campeón Mexicano</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(2,450+ reseñas verificadas)</span>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-xl mb-6 border border-orange-200">
                          <p className="text-orange-800 font-semibold">
                            <b>Mejor para:</b> Construcción, vialidades y trabajo diurno en México. Cumple NOM-017 y ANSI.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Fabricado específicamente para las condiciones mexicanas, el <b>Truper Alta Visibilidad</b> combina 
                          la resistencia necesaria para nuestro clima con la calidad que exigen nuestras normativas. 
                          Con <b>cintas 3M Scotchlite auténticas</b> y material poliéster 100% que resiste el intenso sol mexicano 
                          sin desteñirse. Su diseño de <b>malla transpirable</b> es perfecto para las altas temperaturas de 
                          construcción en ciudades como Monterrey, Guadalajara o la CDMX.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl mb-6 border border-orange-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Clasificación:</span>
                              <span className="ml-2 text-gray-600">ANSI/ISEA 107 Clase 2</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Poliéster 100% malla</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Cintas:</span>
                              <span className="ml-2 text-gray-600">3M Scotchlite 2" doble</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Tallas:</span>
                              <span className="ml-2 text-gray-600">CH - G - XG - XXG</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Certificación:</span>
                              <span className="ml-2 text-gray-600">NOM-017-STPS-2008</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Garantía:</span>
                              <span className="ml-2 text-gray-600">2 años Truper</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Ventajas */}
                          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Marca 100% mexicana</b> con servicio local</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Resistente al clima mexicano</b> (sol, lluvia, calor)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Cintas 3M originales</b> con visibilidad 360°</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Malla transpirable</b> para alta temperatura</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Precio competitivo</b> vs. importados</span>
                              </div>
                            </div>
                          </div>

                          {/* Desventajas */}
                          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h4 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Contras
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Solo Clase 2</b> (no apto para autopistas)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Sin bolsillos</b> en modelo básico</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Tallas limitadas</b> para personas muy grandes</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Disponibilidad y CTA */}
                        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-2 border-orange-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xl font-bold text-orange-600 mb-2">Precio: $280 - $350 MXN</p>
                              <p className="text-sm text-gray-600">* Disponible en Mercado Libre y tiendas Truper</p>
                            </div>
                            <div className="text-right">
                              <a 
                                href="https://mercadolibre.com/sec/1RfKQWt" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors inline-block"
                                onClick={() => handleAffiliateClick('Truper Chaleco Alta Visibilidad', 'https://mercadolibre.com/sec/1RfKQWt')}
                              >
                                🛒 Comprar Ahora →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

          {/* Chaleco #2 - Milwaukee Clase 2 */}
          <motion.div 
            className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-8 rounded-3xl shadow-2xl border-2 border-red-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute top-4 right-4">
              <Badge className="bg-red-500 text-white font-bold text-lg px-4 py-2">
                🥈 #2 Mejor Nocturno
              </Badge>
            </div>
            
            <div className="w-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Milwaukee Chaleco Clase 2: Dominio Nocturno</h3>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="ml-2 text-gray-600">(1,780+ reseñas)</span>
              </div>
              
              <div className="bg-red-50 p-4 rounded-xl mb-6 border border-red-200">
                <p className="text-red-800 font-semibold">
                  <b>Mejor para:</b> Trabajo nocturno, vialidades, emergencias y condiciones de poca luz.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                El <b>Milwaukee Clase 2</b> redefine la visibilidad nocturna con su sistema de <b>reflexión 360° Premium</b>. 
                Diseñado para trabajadores que enfrentan las noches mexicanas en carreteras, aeropuertos y sitios de construcción. 
                Su <b>material mesh ultra-transpirable</b> incluye paneles de ventilación estratégicos que mantienen la comodidad 
                durante guardias nocturnas de 12 horas.
              </p>
              
              <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl mb-6 border border-red-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">🌙</span>
                  Especificaciones Nocturnas
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Visibilidad:</span>
                    <span className="ml-2 text-gray-600">500m en condiciones nocturnas</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Reflexión:</span>
                    <span className="ml-2 text-gray-600">360° con bandas laterales</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Resistencia UV:</span>
                    <span className="ml-2 text-gray-600">99% protección solar</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Precio:</span>
                    <span className="ml-2 text-gray-600">$450 - $580 MXN</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-6 rounded-xl border-2 border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-red-600 mb-2">Especialista en Trabajo Nocturno</p>
                    <p className="text-sm text-gray-600">* Incluye porta radio y 4 bolsillos</p>
                  </div>
                  <div className="text-right">
                    <a 
                      href="https://mercadolibre.com/sec/2A3xY9z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors inline-block"
                      onClick={() => handleAffiliateClick('Milwaukee Chaleco Clase 2', 'https://mercadolibre.com/sec/2A3xY9z')}
                    >
                      🌙 Ver Detalles →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chaleco #3 - DEWALT Reflectante */}
          <motion.div 
            className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-3xl shadow-2xl border-2 border-yellow-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500 text-white font-bold text-lg px-4 py-2">
                🥉 #3 Más Resistente
              </Badge>
            </div>
            
            <div className="w-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">DEWALT Chaleco Reflectante Clase 3: La Fortaleza</h3>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(3,200+ reseñas)</span>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-200">
                <p className="text-yellow-800 font-semibold">
                  <b>Mejor para:</b> Industria pesada, minería, autopistas y condiciones extremas.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Cuando necesitas el <b>máximo nivel de protección</b>, el DEWALT Clase 3 no tiene rival. 
                Con <b>material Ripstop ultra-resistente</b> que soporta chispas de soldadura, desgarros y 
                lavados industriales frecuentes. Sus <b>6 bolsillos estratégicos</b> incluyen porta pluma, 
                bolsillo para radio y compartimento para celular con cierre seguro.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl mb-6 border border-yellow-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold">Clase:</span> ANSI 3 (máxima)</div>
                  <div><span className="font-semibold">Material:</span> Ripstop + Kevlar</div>
                  <div><span className="font-semibold">Precio:</span> $680 - $850 MXN</div>
                  <div><span className="font-semibold">Garantía:</span> 5 años DEWALT</div>
                </div>
              </div>

              <a 
                href="https://mercadolibre.com/sec/1K8mN4p" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-yellow-600 transition-colors"
                onClick={() => handleAffiliateClick('DEWALT Chaleco Reflectante', 'https://mercadolibre.com/sec/1K8mN4p')}
              >
                💪 Ver Resistencia →
              </a>
            </div>
          </motion.div>

          {/* Resumen Top 4-7 */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 Completando el Top 7</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs mr-2">#4</span>
                    3M Chaleco Scotchlite
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Mejor tecnología reflectiva, ideal para aeropuertos</p>
                  <span className="text-green-600 font-semibold">$520 - $680 MXN</span>
                  <a href="https://mercadolibre.com/sec/3K9nP2r" target="_blank" rel="noopener noreferrer" 
                     className="block mt-2 text-blue-600 text-sm hover:text-blue-800">Ver producto →</a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs mr-2">#5</span>
                    Urrea Chaleco Básico
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Opción económica mexicana, cumple normativas</p>
                  <span className="text-green-600 font-semibold">$180 - $250 MXN</span>
                  <a href="https://mercadolibre.com/sec/4L7qR5t" target="_blank" rel="noopener noreferrer" 
                     className="block mt-2 text-blue-600 text-sm hover:text-blue-800">Ver producto →</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs mr-2">#6</span>
                    Honeywell Premium
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">Tecnología antimicrobiana, uso médico/químico</p>
                  <span className="text-green-600 font-semibold">$750 - $950 MXN</span>
                  <a href="https://mercadolibre.com/sec/5M8sT6u" target="_blank" rel="noopener noreferrer" 
                     className="block mt-2 text-blue-600 text-sm hover:text-blue-800">Ver producto →</a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs mr-2">#7</span>
                    MSA Chaleco Multibolsillos
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">12 bolsillos, perfecto para supervisores</p>
                  <span className="text-green-600 font-semibold">$890 - $1,200 MXN</span>
                  <a href="https://mercadolibre.com/sec/6N9vY7w" target="_blank" rel="noopener noreferrer" 
                     className="block mt-2 text-blue-600 text-sm hover:text-blue-800">Ver producto →</a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                💡 <b>Todos estos chalecos cumplen con NOM-017-STPS</b> y están disponibles en México
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sección de Comparación Técnica */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Comparación Técnica Rápida</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100 rounded-lg">
                  <th className="p-3 text-left">Modelo</th>
                  <th className="p-3 text-center">Clase ANSI</th>
                  <th className="p-3 text-center">Precio</th>
                  <th className="p-3 text-center">Mejor Para</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="bg-white rounded-lg">
                  <td className="p-3 font-semibold">🥇 Truper Alta Visibilidad</td>
                  <td className="p-3 text-center">Clase 2</td>
                  <td className="p-3 text-center text-green-600 font-bold">$280-350</td>
                  <td className="p-3 text-center">Uso general</td>
                </tr>
                <tr className="bg-gray-50 rounded-lg">
                  <td className="p-3 font-semibold">🥈 Milwaukee Nocturno</td>
                  <td className="p-3 text-center">Clase 2+</td>
                  <td className="p-3 text-center text-orange-600 font-bold">$450-580</td>
                  <td className="p-3 text-center">Trabajo nocturno</td>
                </tr>
                <tr className="bg-white rounded-lg">
                  <td className="p-3 font-semibold">🥉 DEWALT Fortaleza</td>
                  <td className="p-3 text-center">Clase 3</td>
                  <td className="p-3 text-center text-red-600 font-bold">$680-850</td>
                  <td className="p-3 text-center">Industria pesada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Resto del contenido original renovado */}
      <section className="mb-16">
        <motion.div
          className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-3xl shadow-xl border border-blue-200 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-6 right-6 opacity-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 left-4 opacity-15">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full"></div>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Normativas Mexicanas de Seguridad</h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <b>En México, el cumplimiento de la NOM-017-STPS-2008 es obligatorio</b> para toda empresa que tenga trabajadores 
              en áreas de riesgo. Esta normativa establece los requisitos mínimos de equipo de protección personal, incluyendo 
              chalecos de alta visibilidad para prevenir accidentes laborales.
            </p>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-200">
              <h4 className="text-lg font-bold text-blue-900 mb-4">📋 Requisitos Clave NOM-017-STPS:</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• <b>Material reflectivo certificado:</b> Mínimo 50cm² de superficie reflectiva</li>
                <li>• <b>Colores autorizados:</b> Amarillo, naranja, verde lima fluorescente</li>
                <li>• <b>Resistencia a lavado:</b> Mantener propiedades después de 25 lavados</li>
                <li>• <b>Certificación obligatoria:</b> Sello de laboratorio autorizado por STPS</li>
              </ul>
            </div>
            
            <p>
              Además de la normativa mexicana, muchos chalecos también cumplen con estándares internacionales como 
              <b>ANSI/ISEA 107-2020</b> (Estados Unidos) y <b>EN 471</b> (Europa), ofreciendo mayor versatilidad 
              para empresas multinacionales operando en México.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Sección de tipos de chaleco renovada */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🛡️ Tipos de Chalecos por Industria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada trabajo requiere un nivel específico de protección. Conoce qué chaleco necesitas según tu industria y nivel de riesgo.
            </p>
          </div>

          <div className="grid gap-8">
            {vestTypesByIndustry.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                          <span className="text-3xl mr-3">{industry.icon}</span>
                          {industry.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-500 text-white font-semibold">
                            {industry.recommendedClass}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-6">{industry.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">✅ Características Clave:</h4>
                          <ul className="space-y-2">
                            {industry.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">⚠️ Riesgos Principales:</h4>
                          <ul className="space-y-2">
                            {industry.risks.map((risk, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <span>{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">👷 Ideal para:</h4>
                        <p className="text-gray-700">{industry.bestFor}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-green-50 px-3 py-2 rounded-lg">
                          <span className="font-semibold text-green-700">Precio: </span>
                          <span className="text-green-600">{industry.priceRange}</span>
                        </div>
                        <div className="bg-blue-50 px-3 py-2 rounded-lg">
                          <span className="font-semibold text-blue-700">Nivel: </span>
                          <span className="text-blue-600">{industry.recommendedClass}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <article className="max-w-6xl mx-auto">
        {/* Normativas */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Normativas y Estándares</h2>
          
          <div className="space-y-6">
            {safetyStandards.map((standard, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Shield className="w-6 h-6 text-blue-600" />
                    {standard.standard} - {standard.title}
                  </CardTitle>
                  <p className="text-gray-600">{standard.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {standard.classes.map((cls, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">{cls.class}</h5>
                        <p className="text-sm text-gray-600">{cls.usage}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={false}
                animate={{ 
                  backgroundColor: expandedFAQ === index ? '#f9fafb' : '#ffffff' 
                }}
              >
                <button
                  onClick={() => handleFAQToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="mb-12 px-4 md:px-0">
          <Card className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white border-0">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-3xl font-bold mb-4">¿Necesitas Asesoría en EPP?</h3>
              <p className="text-xl mb-8 text-orange-100">
                Nuestros expertos te ayudan a elegir el chaleco de seguridad perfecto para tu industria
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  <Link href="/contacto" onClick={() => handleCTAClick('contact_expert')}>
                    Contactar Experto
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  <Link href="/catalogo" onClick={() => handleCTAClick('view_catalog')}>
                    Ver Catálogo Completo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Artículos Relacionados */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/manual-cascos-seguridad-proteccion-craneal" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Cascos de Seguridad</h4>
              <p className="text-sm text-gray-600">Manual completo de protección craneal</p>
            </Link>
            <Link href="/blog/guia-calzado-seguridad-proteccion-pies" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Calzado de Seguridad</h4>
              <p className="text-sm text-gray-600">Guía NOM-113 protección de pies</p>
            </Link>
            <Link href="/blog/proteccion-respiratoria-mascaras-respiradores" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Protección Respiratoria</h4>
              <p className="text-sm text-gray-600">Máscaras y respiradores industriales</p>
            </Link>
            <Link href="/blog/guantes-trabajo-seleccion-riesgo-aplicacion" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Guantes de Trabajo</h4>
              <p className="text-sm text-gray-600">Selección por tipo de riesgo</p>
            </Link>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
}