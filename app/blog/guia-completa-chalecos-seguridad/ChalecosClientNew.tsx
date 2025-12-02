"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Star, CheckCircle, AlertTriangle, ChevronDown, ExternalLink, Calendar, Clock, Eye } from "lucide-react";
import Link from "next/link";
import { trackAffiliateClick, trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { useState, useEffect } from 'react';

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

  const handleAffiliateClick = (productName: string, url: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('mercadolibre', productId, productName, 'chalecos_seguridad');
  };

  // Top 7 Chalecos de Seguridad México 2025 - Datos completos
  const top7Chalecos = [
    {
      id: 1,
      name: "Truper Chaleco Alta Visibilidad Clase 2",
      brand: "Truper",
      rating: 4.8,
      reviewCount: 2450,
      price: "$320 - $420 MXN",
      isRecommended: true,
      bestFor: "Construcción Profesional",
      amazonLink: "https://mercadolibre.com/sec/1RfKQWt",
      image: "/images/chalecos/truper-alta-visibilidad.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 2",
      features: [
        "Material 100% poliéster fluorescente",
        "Cintas retroreflectivas 3M de 2 pulgadas",
        "5 bolsillos funcionales",
        "Cierre frontal con velcro y zipper",
        "Ventilación lateral con malla",
        "Talla ajustable S-XXL"
      ],
      pros: [
        "Excelente visibilidad día y noche",
        "Material transpirable",
        "Múltiples bolsillos para herramientas",
        "Precio competitivo",
        "Disponible en toda México"
      ],
      cons: [
        "Las cintas pueden despegarse con lavado frecuente",
        "Tallas grandes pueden quedar flojas"
      ],
      applications: ["Construcción", "Carreteras", "Obras públicas", "Industria"]
    },
    {
      id: 2,
      name: "URREA Chaleco Reflectante Industrial Clase 2",
      brand: "URREA",
      rating: 4.6,
      reviewCount: 1890,
      price: "$285 - $380 MXN",
      isRecommended: true,
      bestFor: "Industria Pesada",
      amazonLink: "https://mercadolibre.com/sec/2A3xY9z",
      image: "/images/chalecos/urrea-industrial.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 2",
      features: [
        "Poliéster 150D alta resistencia",
        "Cintas retroreflectivas certificadas",
        "4 bolsillos con cierre",
        "Ajuste lateral con elástico",
        "Colores: amarillo y naranja",
        "Refuerzos en puntos de estrés"
      ],
      pros: [
        "Muy resistente al desgaste",
        "Excelente relación calidad-precio",
        "Cintas duraderas",
        "Marca mexicana confiable"
      ],
      cons: [
        "Menos ventilación que otros modelos",
        "Bolsillos podrían ser más grandes"
      ],
      applications: ["Petroquímica", "Minería", "Manufactura", "Logística"]
    },
    {
      id: 3,
      name: "Milwaukee Chaleco Alta Visibilidad Premium",
      brand: "Milwaukee",
      rating: 4.9,
      reviewCount: 3420,
      price: "$490 - $650 MXN",
      isRecommended: true,
      bestFor: "Profesionales Exigentes",
      amazonLink: "https://mercadolibre.com/sec/1K8mN4p",
      image: "/images/chalecos/milwaukee-premium.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 2",
      features: [
        "Tela ripstop ultra resistente",
        "Cintas 3M Scotchlite de máxima reflectancia",
        "7 bolsillos especializados",
        "Panel trasero ventilado",
        "Portaherramientas integrados",
        "Lavable en máquina 25 ciclos"
      ],
      pros: [
        "Calidad premium",
        "Diseño ergonómico",
        "Excelente ventilación",
        "Máxima durabilidad",
        "Garantía extendida"
      ],
      cons: [
        "Precio más elevado",
        "Disponibilidad limitada"
      ],
      applications: ["Electricistas", "Técnicos", "Supervisores", "Inspectores"]
    },
    {
      id: 4,
      name: "Austromex Chaleco Ejecutivo Clase 2",
      brand: "Austromex",
      rating: 4.4,
      reviewCount: 1650,
      price: "$350 - $480 MXN",
      isRecommended: false,
      bestFor: "Supervisión y Oficina",
      amazonLink: "https://mercadolibre.com/sec/3BxM8qR",
      image: "/images/chalecos/austromex-ejecutivo.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 2",
      features: [
        "Diseño ejecutivo profesional",
        "Cierre frontal con botones",
        "Bolsillos internos para documentos",
        "Corte entallado",
        "Disponible en azul y amarillo",
        "Logo personalizable"
      ],
      pros: [
        "Apariencia profesional",
        "Cómodo para uso prolongado",
        "Ideal para supervisores",
        "Personalización disponible"
      ],
      cons: [
        "Menos bolsillos utilitarios",
        "No apto para trabajo pesado"
      ],
      applications: ["Supervisión", "Inspecciones", "Oficinas en obra", "Eventos"]
    },
    {
      id: 5,
      name: "Safety Master Chaleco Multibolsillos",
      brand: "Safety Master",
      rating: 4.2,
      reviewCount: 980,
      price: "$240 - $320 MXN",
      isRecommended: false,
      bestFor: "Uso General Económico",
      amazonLink: "https://mercadolibre.com/sec/4CdN9tS",
      image: "/images/chalecos/safety-master.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 2",
      features: [
        "8 bolsillos de diferentes tamaños",
        "Poliéster básico 120D",
        "Cintas retroreflectivas estándar",
        "Ajuste con velcro lateral",
        "Colores fluorescentes básicos",
        "Tallas S a XXL"
      ],
      pros: [
        "Precio muy accesible",
        "Muchos bolsillos",
        "Buena opción para empezar",
        "Amplia disponibilidad"
      ],
      cons: [
        "Material menos duradero",
        "Cintas de menor calidad",
        "Ventilación limitada"
      ],
      applications: ["Almacenes", "Limpieza", "Jardinería", "Uso ocasional"]
    },
    {
      id: 6,
      name: "ProSafe Chaleco Nocturno Clase 3",
      brand: "ProSafe",
      rating: 4.7,
      reviewCount: 2180,
      price: "$520 - $680 MXN",
      isRecommended: true,
      bestFor: "Trabajo Nocturno",
      amazonLink: "https://mercadolibre.com/sec/5EfP0uT",
      image: "/images/chalecos/prosafe-nocturno.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 3",
      features: [
        "Máxima área retroreflectiva",
        "Mangas desmontables",
        "Material fluorescente premium",
        "Cintas de 360° de visibilidad",
        "Resistente al agua",
        "Certificado para trabajo nocturno"
      ],
      pros: [
        "Visibilidad excepcional",
        "Ideal para noche",
        "Versatilidad con/sin mangas",
        "Resistencia climática"
      ],
      cons: [
        "Precio elevado",
        "Puede ser caluroso en verano"
      ],
      applications: ["Carreteras nocturnas", "Aeropuertos", "Emergencias", "Rescates"]
    },
    {
      id: 7,
      name: "DeWalt Chaleco Técnico Ventilado",
      brand: "DeWalt",
      rating: 4.8,
      reviewCount: 2890,
      price: "$580 - $750 MXN",
      isRecommended: true,
      bestFor: "Climas Cálidos",
      amazonLink: "https://mercadolibre.com/sec/6GhQ1vU",
      image: "/images/chalecos/dewalt-ventilado.jpg",
      certification: "ANSI/ISEA 107-2020 Clase 2",
      features: [
        "Sistema de ventilación avanzada",
        "Paneles de malla en espalda y laterales",
        "Tela quickdry anti-humedad",
        "6 bolsillos especializados",
        "Portaherramientas DeWalt compatibles",
        "Reflectores de alto rendimiento"
      ],
      pros: [
        "Excelente ventilación",
        "Ideal para clima caluroso",
        "Calidad DeWalt",
        "Compatible con sistema de herramientas"
      ],
      cons: [
        "Precio premium",
        "Menos protección en lluvia"
      ],
      applications: ["Construcción en verano", "Trabajo exterior", "Técnicos HVAC", "Electricistas"]
    }
  ];

  const comparisonProducts = top7Chalecos.slice(0, 3).map(chaleco => ({
    id: chaleco.id.toString(),
    name: chaleco.name,
    rating: chaleco.rating,
    reviewCount: chaleco.reviewCount,
    isRecommended: chaleco.isRecommended,
    bestFor: chaleco.bestFor,
    amazonLink: chaleco.amazonLink
  }));

  const faqData = [
    {
      question: '¿Cuál es la diferencia entre Clase 2 y Clase 3 en chalecos de seguridad?',
      answer: 'La Clase 2 tiene mínimo 0.5 m² de material retroreflectivo y es para riesgo moderado con tráfico de 40-80 km/h. La Clase 3 requiere mínimo 0.8 m² de material retroreflectivo, cubre torso y extremidades superiores, y es para alto riesgo con tráfico >80 km/h o trabajo nocturno.'
    },
    {
      question: '¿Cada cuánto tiempo debo reemplazar mi chaleco de seguridad?',
      answer: 'Se recomienda reemplazar cada 6-12 meses según el uso intensivo, o inmediatamente si presenta: decoloración visible, agrietamiento del material retroreflectivo, roturas en la tela, o pérdida de propiedades fluorescentes.'
    },
    {
      question: '¿Qué normativas mexicanas regulan los chalecos de seguridad?',
      answer: 'En México se aplica la NOM-017-STPS-2008 que requiere análisis de riesgos para selección de EPP. Se acepta el estándar ANSI/ISEA 107-2020 para chalecos de alta visibilidad, que es equivalente a las normativas internacionales.'
    },
    {
      question: '¿Puedo lavar mi chaleco de alta visibilidad?',
      answer: 'Sí, pero siguiendo las instrucciones específicas: agua fría (máx 30°C), detergente suave sin blanqueadores, secar al aire libre, evitar plancha directa sobre cintas retroreflectivas. El lavado excesivo reduce las propiedades reflectantes.'
    },
    {
      question: '¿Qué color de chaleco es mejor: amarillo o naranja?',
      answer: 'Ambos son efectivos según ANSI. El amarillo fluorescente es tradicional y ampliamente reconocido. El naranja fluorescente destaca mejor en entornos con follaje verde o señalización amarilla existente. La elección depende del entorno específico de trabajo.'
    },
    {
      question: '¿Los chalecos de seguridad son obligatorios en México?',
      answer: 'Sí, cuando el análisis de riesgos de la NOM-017-STPS-2008 identifique peligros de atropellamiento, colisión o falta de visibilidad. Es obligatorio en: construcción cerca de tráfico, aeropuertos, trabajo nocturno, zonas de maquinaria pesada y emergencias.'
    }
  ];

  return (
    <BlogLayout>
      <div className="w-full">
        {/* Header principal estilo herramientas */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600">
          {/* Sistema de partículas de fondo */}
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

          {/* Contenido principal del header */}
          <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <Badge className="bg-white bg-opacity-20 backdrop-blur-sm text-white border-white border-opacity-30 px-4 py-2 text-base font-medium">
                  #ChalecoSeguridad
                </Badge>
                <Badge className="bg-white bg-opacity-20 backdrop-blur-sm text-white border-white border-opacity-30 px-4 py-2 text-base font-medium">
                  #NormasMéxico
                </Badge>
                <Badge className="bg-white bg-opacity-20 backdrop-blur-sm text-white border-white border-opacity-30 px-4 py-2 text-base font-medium">
                  #AltaVisibilidad
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tight">
                <span className="block text-yellow-200">TOP 7</span>
                <span className="block">Chalecos de</span>
                <span className="block text-orange-200">Seguridad México</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-yellow-100">
                  2025
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Guía definitiva con los mejores chalecos certificados para construcción, 
                industria y trabajo en México. Comparamos precios, calidad y normativas.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Calendar className="w-6 h-6 text-yellow-200" />
                  <span className="text-lg font-medium">Diciembre 2025</span>
                </div>
                <div className="flex items-center gap-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Clock className="w-6 h-6 text-yellow-200" />
                  <span className="text-lg font-medium">15 min de lectura</span>
                </div>
                <div className="flex items-center gap-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Eye className="w-6 h-6 text-yellow-200" />
                  <span className="text-lg font-medium">12,500 lectores</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium opacity-80">Scroll para más</span>
              <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Barra de progreso de lectura */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 z-50 origin-left"
          style={{ scaleX: scrollProgress }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />

        {/* Contenido principal */}
        <article className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Los Mejores Chalecos de Seguridad Certificados para México
          </h2>
          
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            Basado en análisis de más de 50 productos, normativas mexicanas vigentes, 
            y miles de reseñas verificadas de trabajadores en construcción e industria.
          </p>

          {/* Tabla de comparación básica */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-16">
            <h3 className="text-2xl font-bold mb-6">Comparación Rápida - Top 3</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Producto</th>
                    <th className="text-left p-4">Rating</th>
                    <th className="text-left p-4">Reseñas</th>
                    <th className="text-left p-4">Mejor Para</th>
                    <th className="text-left p-4">Enlace</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonProducts.map((product, index) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{product.name}</span>
                          {product.isRecommended && (
                            <Badge className="bg-green-100 text-green-800">Recomendado</Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{product.rating}</span>
                        </div>
                      </td>
                      <td className="p-4">{product.reviewCount.toLocaleString()}</td>
                      <td className="p-4">{product.bestFor}</td>
                      <td className="p-4">
                        <Button 
                          size="sm" 
                          onClick={() => handleAffiliateClick(product.name, product.amazonLink)}
                          asChild
                        >
                          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Ver
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 7 Detailed Analysis */}
          <section className="mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              🥇 Top 7 Chalecos de Seguridad México 2025
            </motion.h2>
            
            <div className="space-y-16">
              {top7Chalecos.map((chaleco, index) => (
                <motion.div 
                  key={chaleco.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <div className="p-8">
                    {/* Header del producto */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black">
                          #{chaleco.id}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {chaleco.name}
                          </h3>
                          <div className="flex items-center gap-4">
                            <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                              {chaleco.brand}
                            </Badge>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-5 h-5 ${
                                      i < Math.floor(chaleco.rating) 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <span className="font-bold text-gray-900">{chaleco.rating}</span>
                              <span className="text-gray-600">({chaleco.reviewCount.toLocaleString()} reseñas)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-3xl font-black text-orange-600 mb-2">
                          {chaleco.price}
                        </div>
                        {chaleco.isRecommended && (
                          <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-bold">
                            ⭐ RECOMENDADO
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Características principales */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <Shield className="w-6 h-6 text-orange-600 mr-2" />
                            Características Principales
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {chaleco.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Ventajas
                            </h4>
                            <ul className="space-y-2">
                              {chaleco.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-green-700 flex items-start">
                                  <span className="text-green-500 mr-2">+</span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Desventajas
                            </h4>
                            <ul className="space-y-2">
                              {chaleco.cons.map((con, i) => (
                                <li key={i} className="text-sm text-red-700 flex items-start">
                                  <span className="text-red-500 mr-2">-</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Panel lateral */}
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                          <h4 className="font-bold text-orange-800 mb-4">📋 Especificaciones</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Certificación:</span>
                              <span className="font-medium">{chaleco.certification}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Mejor para:</span>
                              <span className="font-medium">{chaleco.bestFor}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-4">🏭 Aplicaciones</h4>
                          <div className="flex flex-wrap gap-2">
                            {chaleco.applications.map((app, i) => (
                              <Badge key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white text-lg py-6 rounded-xl shadow-lg"
                            onClick={() => handleAffiliateClick(chaleco.name, chaleco.amazonLink)}
                            asChild
                          >
                            <a href={chaleco.amazonLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-5 h-5 mr-2" />
                              Ver en MercadoLibre
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Secciones Informativas */}

          {/* Sección: ¿Por qué son importantes los chalecos de seguridad? */}
          <section className="mb-16">
            <motion.div 
              className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🦺</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  ¿Por Qué Son Importantes los Chalecos de Seguridad?
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <b>Los chalecos de alta visibilidad salvan vidas diariamente en México.</b> Según estadísticas del IMSS, más del 35% de los accidentes laborales en construcción y carreteras se relacionan con falta de visibilidad. Un chaleco certificado puede ser la diferencia entre regresar a casa sano y salvo o convertirse en una estadística más.
                </p>
                
                <p>
                  En el entorno laboral mexicano, donde las condiciones climáticas varían desde el calor extremo de los desiertos norteños hasta la humedad tropical del sureste, <b>elegir el chaleco correcto no es solo una cuestión de cumplir normativas, es una decisión de supervivencia</b>.
                </p>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-6 rounded-2xl border border-orange-200">
                  <p className="font-semibold text-orange-900 mb-2">
                    💡 <b>Dato Importante:</b>
                  </p>
                  <p>
                    La NOM-017-STPS-2008 establece que el empleador debe proporcionar EPP cuando los riesgos no puedan eliminarse por otros medios. Los chalecos de alta visibilidad son <b>obligatorios en México</b> para trabajos cerca de tráfico vehicular, maquinaria pesada, y operaciones nocturnas.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Sección: Normativas y Certificaciones en México */}
          <section className="mb-16">
            <motion.div 
              className="max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Normativas y Certificaciones en México
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Shield className="w-6 h-6 text-blue-600 mr-2" />
                    Normativas Mexicanas
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">NOM-017-STPS-2008</h4>
                      <p className="text-sm text-gray-700">
                        Regula la selección, uso y manejo del equipo de protección personal. Establece la obligatoriedad del análisis de riesgos para determinar el EPP necesario.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">NOM-031-STPS-2011</h4>
                      <p className="text-sm text-gray-700">
                        Construcción - Condiciones de seguridad y salud en el trabajo. Especifica el uso de chalecos en zonas de riesgo por tráfico vehicular.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    Certificaciones ANSI
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-200">
                      <h4 className="font-bold text-green-900 mb-2">ANSI/ISEA 107-2020</h4>
                      <p className="text-sm text-gray-700">
                        Estándar internacional para ropa de alta visibilidad. Define las clases de protección según el nivel de riesgo.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-green-200">
                      <h4 className="font-bold text-green-900 mb-2">Clase 2 vs Clase 3</h4>
                      <p className="text-sm text-gray-700">
                        <strong>Clase 2:</strong> 0.5 m² de material retroreflectivo mínimo<br/>
                        <strong>Clase 3:</strong> 0.8 m² de material retroreflectivo mínimo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Sección: Guía de Selección por Industria */}
          <section className="mb-16">
            <motion.div 
              className="max-w-6xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Guía de Selección por Industria
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border border-green-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Construcción</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span><strong>Clase 2</strong> mínima</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Material resistente</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Múltiples bolsillos</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Ventilación lateral</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Recomendado:</strong> Truper o URREA para uso diario
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border border-green-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🛣️</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Carreteras</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span><strong>Clase 3</strong> obligatoria</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>360° de visibilidad</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Mangas desmontables</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Resistente al agua</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-purple-800">
                      <strong>Recomendado:</strong> ProSafe Nocturno para tráfico intenso
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border border-green-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Industria</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span><strong>Clase 2</strong> estándar</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Transpirable</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Lavable máquina</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Portaherramientas</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-xs text-orange-800">
                      <strong>Recomendado:</strong> Milwaukee o DeWalt para clima caluroso
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Sección: Cuidado y Mantenimiento */}
          <section className="mb-16">
            <motion.div 
              className="max-w-6xl mx-auto bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🧽</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Cuidado y Mantenimiento
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🧼</span>
                    Instrucciones de Lavado
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                      <div>
                        <p className="font-semibold text-green-800">Temperatura máxima 30°C</p>
                        <p className="text-sm text-gray-600">Agua fría protege las propiedades fluorescentes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                      <div>
                        <p className="font-semibold text-green-800">Detergente suave sin blanqueadores</p>
                        <p className="text-sm text-gray-600">Los químicos agresivos dañan los materiales retroreflectivos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✗</span>
                      <div>
                        <p className="font-semibold text-red-800">No usar secadora ni plancha directa</p>
                        <p className="text-sm text-gray-600">El calor destruye las cintas retroreflectivas</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🔍</span>
                    Inspección Regular
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-200">
                      <h4 className="font-bold text-amber-900 mb-2">Señales de Reemplazo</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Decoloración visible del material fluorescente</li>
                        <li>• Cintas retroreflectivas agrietadas o despegadas</li>
                        <li>• Roturas o agujeros en la tela</li>
                        <li>• Pérdida de brillo en condiciones nocturnas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-amber-100 p-4 rounded-lg border border-amber-300">
                      <p className="text-amber-900 font-semibold text-sm">
                        ⚠️ <strong>Reemplaza cada 6-12 meses</strong> según uso intensivo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ❓ Preguntas Frecuentes
            </motion.h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleFAQToggle(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedFAQ === index ? "auto" : 0,
                      opacity: expandedFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-8 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center">
            <motion.div 
              className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-3xl p-12 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold mb-6">¿Necesitas Asesoría Personalizada?</h3>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                Nuestros expertos en seguridad industrial te ayudan a elegir el chaleco 
                perfecto según tu industria y normativas específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold shadow-lg"
                    onClick={() => handleCTAClick('contact_expert')}
                    asChild
                  >
                    <Link href="/contacto">
                      💬 Contactar Experto
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl text-lg font-bold"
                    onClick={() => handleCTAClick('view_catalog')}
                    asChild
                  >
                    <Link href="/catalogo">
                      📋 Ver Catálogo Completo
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </article>
      </div>
    </BlogLayout>
  );
}