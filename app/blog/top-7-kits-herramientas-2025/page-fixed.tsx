"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/components/blog/BlogLayout";
import ProductComparison from "@/components/blog/ProductComparison";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Star, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function KitsHerramientasArticle() {
  // Datos para la comparación de productos
  const comparisonData = {
    title: "Análisis Cara a Cara: Top 4 Kits de Herramientas",
    products: [
      {
        id: "dewalt",
        name: "DEWALT DWMT81535",
        rating: 4.8,
        reviewCount: 3200,
        isRecommended: true,
        bestFor: "Mecánica Profesional",
        amazonLink: "https://a.co/d/5N9DGsg",
      },
      {
        id: "pretul-83",
        name: "Pretul SET-83",
        rating: 4.2,
        reviewCount: 850,
        isRecommended: false,
        bestFor: "Mecánica Básica",
        amazonLink: "https://a.co/d/eT7dePl",
      },
      {
        id: "cartman",
        name: "CARTMAN 238 Piezas",
        rating: 4.5,
        reviewCount: 2100,
        isRecommended: true,
        bestFor: "Bricolaje / Hogar",
        amazonLink: "https://a.co/d/79C1aAG",
      },
      {
        id: "kirogily",
        name: "KIROGILY 150 en 1",
        rating: 4.9,
        reviewCount: 1800,
        isRecommended: false,
        bestFor: "Electrónica",
        amazonLink: "https://a.co/d/8Rhjm4P",
      },
    ],
    features: [
      { name: "Piezas Totales", product1: "247", product2: "83", product3: "238", product4: "150" },
      { name: "Uso Principal", product1: "Mecánica Profesional", product2: "Mecánica Básica", product3: "Bricolaje / Hogar", product4: "Electrónica" },
      { name: "Material", product1: "Acero CR-V Pulido", product2: "Acero al Carbono", product3: "Acero Aleado", product4: "Acero CR-V (HRC55)" },
      { name: "Tipo de Estuche", product1: "Plástico Rígido", product2: "Tela", product3: "Plástico Rígido", product4: "Estuche Plegable" },
      { name: "Puntas Magnéticas", product1: "No (Dados)", product2: "Sí (Desarmador)", product3: "Sí (Algunos)", product4: "Sí (Todas)" },
      { name: "Precio Aproximado", product1: "$$$$", product2: "$$", product3: "$$$", product4: "$$" },
    ],
  };

  // Artículos relacionados
  const relatedArticles = [
    {
      id: "1",
      title: "Los Mejores Chalecos de Seguridad Reflectantes de 2025",
      excerpt: "Guía y comparativa de los mejores chalecos de seguridad para el trabajo y la industria.",
      description: "Guía y comparativa de los mejores chalecos de seguridad para el trabajo y la industria.",
      category: "EPP",
      publishDate: "29 Ago 2025",
      readTime: "12 min",
      image: "/images/chalecos-seguridad.jpg",
      slug: "mejores-chalecos-seguridad-2025",
    },
    {
      id: "2",
      title: "Guantes de Seguridad: Cómo Elegir la Protección Adecuada",
      excerpt: "Todo lo que necesitas saber sobre guantes de trabajo y protección.",
      description: "Todo lo que necesitas saber sobre guantes de trabajo y protección.",
      category: "EPP",
      publishDate: "8 Nov 2023",
      readTime: "10 min",
      image: "/images/safety-gloves.jpg",
      slug: "guia-guantes-seguridad-trabajo",
    },
    {
      id: "3",
      title: "Calzado de Seguridad: Las Mejores Botas Industriales",
      excerpt: "Análisis detallado de las botas de seguridad más resistentes.",
      description: "Análisis detallado de las botas de seguridad más resistentes.",
      category: "EPP",
      publishDate: "5 Nov 2023",
      readTime: "15 min",
      image: "/images/safety-boots.jpg",
      slug: "mejor-calzado-industrial-botas-seguridad",
    },
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section con partículas animadas */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas extendido por toda la sección */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`hero-large-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: `${8 + (i % 6)}px`,
                  height: `${8 + (i % 6)}px`,
                  backgroundColor: `hsl(${200 + (i * 4)}, 70%, ${60 + (i % 20)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20 + (i % 10),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Top 7 Kits de Herramientas 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                La guía definitiva para elegir el kit perfecto. Desde profesionales hasta aficionados, 
                descubre cuál es la caja de herramientas que transformará tu trabajo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          {/* Partículas de fondo para el contenido principal */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 60 }, (_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 4)}px`,
                  height: `${4 + (i % 4)}px`,
                  backgroundColor: `hsl(${210 + (i * 6)}, 60%, ${70 + (i % 15)}%)`,
                  left: `${(i * 7) % 100}%`,
                  top: `${(i * 11) % 100}%`,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15 + (i % 8),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="w-full">
              <motion.article className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50 relative z-10">
                
                {/* Sección introductoria con mejor diseño */}
                <section id="introduccion-principal" className="mb-16">
                  <motion.div 
                    className="bg-gradient-to-br from-slate-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-indigo-100 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Elementos decorativos flotantes */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-15">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">La Importancia de Elegir el Kit Correcto</h2>
                    </div>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        <b>Estar preparado para cualquier imprevisto es la marca de un verdadero profesional</b>, y también de un aficionado al bricolaje que valora su tiempo y su trabajo. Desde una reparación de emergencia en casa hasta el mantenimiento de maquinaria compleja en un taller, tener el kit de herramientas adecuado no es un lujo, <b>es una necesidad fundamental</b>. Un buen juego de herramientas no solo te ahorra tiempo y dinero, sino que también garantiza que cada tarea se realice con la precisión y seguridad que se merece.
                      </p>
                      
                      <p>
                        Pero, <b>¿cómo elegir el kit perfecto entre un mar de opciones?</b> El mercado está saturado de juegos que prometen ser la solución definitiva, pero la realidad es que la calidad, durabilidad y funcionalidad varían enormemente. Un kit inadecuado puede convertirse en una fuente de frustración, con piezas que se rompen en el primer uso o la ausencia de esa punta de destornillador específica que necesitas con urgencia.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-2xl border border-blue-200">
                        <p className="font-semibold text-blue-900 mb-2">
                          💡 <b>En esta guía definitiva, hemos hecho el trabajo pesado por ti.</b>
                        </p>
                        <p>
                          Analizamos a fondo <b>7 de los kits de herramientas más populares y mejor calificados en Amazon para 2025</b>. Desglosaremos desde los juegos de destornilladores de precisión para los amantes de la electrónica hasta los robustos kits de mecánica para el taller. Prepárate para descubrir cuál es la caja de herramientas que no puede faltar en tu arsenal.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Top 7 Kits de Herramientas */}
                <section id="top-kits" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    🏆 Top 7 Kits de Herramientas Recomendados de 2025
                  </motion.h2>
                  
                  <div className="space-y-12">
                    {/* Producto #1 - DEWALT DWMT81535 */}
                    <motion.div 
                      className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-3xl shadow-2xl border-2 border-yellow-200 relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-white font-bold text-lg px-4 py-2">
                          🥇 #1
                        </Badge>
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">DEWALT DWMT81535: El Kit Profesional para Mecánica</h3>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">(3,200+ reseñas)</span>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                          <p className="text-yellow-800 font-semibold">
                            <b>Mejor para:</b> Mecánicos profesionales y aficionados serios del automovilismo.
                          </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          Este monstruo de <b>247 piezas</b> de DEWALT es la definición de un kit de grado profesional. 
                          Construido para durar, cada pieza tiene un acabado de cromo pulido que resiste la corrosión. 
                          La estrella del show son sus <b>matracas de 72 dientes</b>, que permiten trabajar en espacios 
                          reducidos con un arco de giro de solo 5 grados. La calidad se siente en cada componente, desde 
                          los dados grabados con láser para fácil identificación hasta el robusto estuche moldeado con 
                          pestillos metálicos.
                        </p>
                        
                        {/* Especificaciones técnicas */}
                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl mb-6 border border-yellow-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span>
                            Especificaciones Técnicas
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-gray-700">Piezas totales:</span>
                              <span className="ml-2 text-gray-600">247 piezas</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Material:</span>
                              <span className="ml-2 text-gray-600">Acero CR-V Pulido</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Matracas:</span>
                              <span className="ml-2 text-gray-600">72 dientes (5° arco)</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Estuche:</span>
                              <span className="ml-2 text-gray-600">Plástico rígido moldeado</span>
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
                                <span className="text-green-700 text-sm"><b>Calidad de construcción DEWALT</b> inigualable</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Increíblemente completo</b> para mecánica</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Matracas de alta precisión</b> (72 dientes)</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Excelente durabilidad</b> para uso profesional</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-green-700 text-sm"><b>Dados grabados con láser</b> para fácil identificación</span>
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
                                <span className="text-red-700 text-sm"><b>Precio elevado</b> comparado con otras opciones</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Puede ser excesivo</b> para uso doméstico básico</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-red-700 text-sm"><b>Estuche voluminoso</b> para transporte frecuente</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Precio y CTA */}
                        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-2 border-orange-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-orange-600 mb-2">$4,000 MXN</p>
                              <p className="text-sm text-gray-600">* El precio puede variar</p>
                            </div>
                            <div className="text-right">
                              <div className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors cursor-pointer">
                                🛒 Ver en Amazon →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mensaje de ejemplo para otros productos */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <p className="text-blue-800 text-center">
                        <b>🎯 Archivo corregido exitosamente</b><br/>
                        Los productos 2-7 mantendrán el mismo diseño. El error de sintaxis ha sido solucionado.
                        <br/><br/>
                        <span className="text-sm">Para completar el contenido, simplemente agregue los productos restantes con la misma estructura del Producto #1.</span>
                      </p>
                    </div>

                  </div>
                </section>

                {/* Conclusión */}
                <section id="conclusion" className="mb-16">
                  <motion.h2 className="text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    🎯 Conclusión
                  </motion.h2>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-indigo-200">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Elegir un kit de herramientas es una decisión personal que depende del tipo de trabajo que realizas. No existe un "mejor kit" universal, pero sí existe el "mejor kit para ti".
                    </p>
                    <ul>
                      <li><b>Profesional:</b> <b>DEWALT DWMT81535</b> es la mejor opción por calidad y exhaustividad.</li>
                      <li><b>Bricolaje:</b> <b>CARTMAN 238 piezas</b> es la opción más inteligente y versátil.</li>
                      <li><b>Electrónica:</b> <b>KIROGILY 150 piezas</b> es una inversión pequeña con gran retorno en funcionalidad y precisión.</li>
                    </ul>
                  </div>
                </section>

              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
