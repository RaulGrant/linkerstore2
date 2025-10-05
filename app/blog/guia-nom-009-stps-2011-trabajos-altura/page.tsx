'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, XCircle, FileText, Users, Activity, Star, Info } from 'lucide-react';
import { useState } from 'react';

export default function GuiaNOM009Article() {
  const [activeTab, setActiveTab] = useState(0);

  // Datos para artículos relacionados
  const relatedArticles = [
    {
      id: 1,
      title: 'Los Mejores Chalecos de Seguridad Reflectantes de 2025',
      excerpt: 'Guía completa de chalecos de seguridad reflectantes para el trabajo.',
      description: 'Guía completa de chalecos de seguridad reflectantes para el trabajo.',
      category: 'EPP',
      publishDate: '29 Ago 2025',
      readTime: '12 min',
      image: '/images/chalecos-seguridad.jpg',
      slug: 'mejores-chalecos-seguridad-2025'
    },
    {
      id: 2,
      title: 'Los Mejores Arneses de Seguridad para Trabajo en Altura',
      excerpt: 'Equipos de protección anticaídas certificados y seguros.',
      description: 'Equipos de protección anticaídas certificados y seguros.',
      category: 'Seguridad',
      publishDate: '14 Ago 2025',
      readTime: '10 min',
      image: '/images/arneses-seguridad.jpg',
      slug: 'mejores-arneses-seguridad-trabajo-altura'
    },
    {
      id: 3,
      title: 'Top 7 Kits de Herramientas para Profesionales',
      excerpt: 'Herramientas esenciales para trabajos industriales y de construcción.',
      description: 'Herramientas esenciales para trabajos industriales y de construcción.',
      category: 'Herramientas',
      publishDate: '30 Ago 2025',
      readTime: '13 min',
      image: '/images/kits-herramientas.jpg',
      slug: 'top-7-kits-herramientas-2025'
    }
  ];

  const tabs = [
    { id: 0, title: 'Análisis de Riesgos', icon: '🔍' },
    { id: 1, title: 'Jerarquía de Controles', icon: '⚡' },
    { id: 2, title: 'Selección de EPP', icon: '🛡️' },
    { id: 3, title: 'Andamios Seguros', icon: '🏗️' },
    { id: 4, title: 'Plan de Emergencia', icon: '🚨' },
    { id: 5, title: 'Capacitación DC-3', icon: '📋' },
    { id: 6, title: 'Registro y Supervisión', icon: '✅' }
  ];

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-8 sm:py-10 md:py-12 sm:py-10 sm:py-12 md:py-16 md:py-20 relative overflow-hidden">
          {/* Sistema masivo de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas grandes flotantes (80 partículas) */}
            {Array.from({ length: 80 }, (_, i) => (
              <motion.div
                key={`section-large-particle-${i}`}
                className="absolute rounded-full opacity-70"
                style={{
                  width: 4 + (i % 6),
                  height: 4 + (i % 6),
                  backgroundColor: `hsl(${45 + (i * 8)}, 85%, ${65 + (i % 25)}%)`,
                  left: `${(i * 2.5) % 100}%`,
                  top: `${(i * 3.7) % 100}%`,
                }}
                animate={{
                  x: [0, 100 + (i % 50), -80 + (i % 30), 0],
                  y: [0, -120 + (i % 40), 100 + (i % 35), 0],
                  scale: [0.3, 1.2, 0.5, 1],
                  opacity: [0.2, 0.8, 0.3, 0.7],
                  rotate: [0, 180 + (i % 180), 360]
                }}
                transition={{
                  duration: 12 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Partículas medianas (120 partículas) */}
            {Array.from({ length: 120 }, (_, i) => (
              <motion.div
                key={`section-medium-particle-${i}`}
                className="absolute rounded-full opacity-60"
                style={{
                  width: 2 + (i % 4),
                  height: 2 + (i % 4),
                  backgroundColor: `hsl(${200 + (i * 4)}, 75%, ${70 + (i % 20)}%)`,
                  left: `${(i * 1.67) % 100}%`,
                  top: `${(i * 2.33) % 100}%`,
                }}
                animate={{
                  x: [0, 60 + (i % 30), -40 + (i % 20)],
                  y: [0, -80 + (i % 25), 60 + (i % 30)],
                  scale: [0, 1, 0.2, 1, 0],
                  opacity: [0, 0.9, 0.1, 0.6, 0]
                }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "linear"
                }}
              />
            ))}

            {/* Micropartículas (160 partículas) */}
            {Array.from({ length: 160 }, (_, i) => (
              <motion.div
                key={`section-micro-particle-${i}`}
                className="absolute rounded-full opacity-50"
                style={{
                  width: 1 + (i % 2),
                  height: 1 + (i % 2),
                  backgroundColor: `hsl(${280 + (i * 3)}, 80%, ${75 + (i % 15)}%)`,
                  left: `${(i * 1.25) % 100}%`,
                  top: `${(i * 1.75) % 100}%`,
                }}
                animate={{
                  x: [0, 30 + (i % 15), -20 + (i % 10)],
                  y: [0, -40 + (i % 12), 30 + (i % 15)],
                  scale: [0, 0.8, 0.1, 1, 0],
                  opacity: [0, 0.7, 0.05, 0.5, 0],
                  rotate: [0, 360 + (i % 180)]
                }}
                transition={{
                  duration: 3 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 rounded-full px-4 py-2 text-red-100 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="h-4 w-4" />
                ⚠️ Seguridad en Trabajos de Altura
              </motion.div>
              
              <motion.h1 
                className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl md:text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Guía Definitiva NOM-009-STPS-2011: 7 Puntos Clave para Trabajos en Altura
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                📋 Todo lo que todo supervisor debe dominar para garantizar la seguridad en trabajos de altura
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center gap-3 sm:p-4 md:p-6 text-sm text-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  1 de Octubre, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  18 min de lectura
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Imagen Principal del Artículo */}
        <section className="bg-white py-8 sm:py-10 md:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/guia-nom-009-trabajos-altura.png" 
                  alt="Trabajadores realizando trabajos en altura con EPP completo según NOM-009-STPS-2011"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center">
                <div className="text-8xl mb-6">🏗️</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-4">
                  Imagen Principal del Artículo
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Aquí se colocará una imagen representativa de trabajos en altura y seguridad industrial
                </p>
                <div className="bg-slate-200 rounded-xl p-4 text-slate-600">
                  <p className="font-semibold mb-2">📸 Imagen sugerida:</p>
                  <p className="text-sm">
                    Trabajadores con EPP completo realizando trabajos en altura, andamios seguros, 
                    o infografía de los elementos de seguridad según NOM-009-STPS-2011
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
          {/* Partículas de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`content-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${4 + (i % 8)}px`,
                  height: `${4 + (i % 8)}px`,
                  background: `hsl(${200 + (i * 15) % 80}, 60%, ${50 + (i % 30)}%)`,
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 40, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 8),
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-20">
            <div className="max-w-6xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/50"
              >
                {/* Introducción con Estadísticas */}
                <section id="introduccion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.div 
                    className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-500 p-4 sm:p-6 md:p-8 rounded-r-2xl mb-4 sm:mb-6 md:mb-8 shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-red-500 rounded-full p-3 flex-shrink-0">
                        <AlertTriangle className="text-white h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-3">El Costo Real de una Caída</h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                          Las estadísticas son contundentes: en México, <strong className="bg-red-200 px-2 py-1 rounded">las caídas representan el 27% de todos los accidentes de trabajo</strong>. 
                          Esto se traduce en una realidad trágica de casi <strong className="text-red-700">cuatro muertes diarias</strong> por riesgos laborales en el país.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Grid de Costos */}
                  <div className="grid md:grid-cols-3 gap-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-purple-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-2">💰</div>
                        <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-purple-700 mb-2">$535,350</div>
                        <p className="text-sm text-gray-700">Multa máxima STPS por incumplimiento</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-blue-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-2">📈</div>
                        <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-blue-700 mb-2">+$$$$</div>
                        <p className="text-sm text-gray-700">Incremento en Prima de Riesgo IMSS</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 to-red-50 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-orange-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl mb-2">⚖️</div>
                        <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-orange-700 mb-2">Legal</div>
                        <p className="text-sm text-gray-700">Responsabilidad Civil y Penal</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Gráfico de Estadísticas de Accidentes */}
                  <motion.div 
                    className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-4 sm:p-6 md:p-8 mt-8 mb-4 sm:mb-6 md:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-6 text-center">📊 Estadísticas de Accidentes en México</h3>
                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200 text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-red-600 mb-2">27%</div>
                        <p className="text-sm text-gray-700">Accidentes por caídas</p>
                      </div>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200 text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-orange-600 mb-2">~4</div>
                        <p className="text-sm text-gray-700">Muertes laborales diarias</p>
                      </div>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-yellow-200 text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-yellow-600 mb-2">1.8m</div>
                        <p className="text-sm text-gray-700">Altura mínima NOM-009</p>
                      </div>
                      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200 text-center">
                        <div className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-purple-600 mb-2">100%</div>
                        <p className="text-sm text-gray-700">Accidentes prevenibles</p>
                      </div>
                    </div>
                    
                    {/* Gráfico Visual Simple */}
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-4 text-center">Distribución de Accidentes Laborales</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                            <div className="bg-red-500 h-4 rounded-full" style={{ width: '27%' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-red-700 w-16">27% Caídas</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                            <div className="bg-orange-500 h-4 rounded-full" style={{ width: '23%' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-orange-700 w-16">23% Golpes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '18%' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-blue-700 w-16">18% Cortes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-gray-500 rounded"></div>
                          <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                            <div className="bg-gray-500 h-4 rounded-full" style={{ width: '32%' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-700 w-16">32% Otros</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-4 sm:p-6 md:p-8 mt-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-500 rounded-full p-3">
                        <Shield className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">La NOM-009-STPS-2011 es su Herramienta de Gestión</h3>
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Aplica a toda actividad realizada a <strong className="bg-blue-200 px-2 py-1 rounded">más de 1.8 metros de altura</strong> sobre un nivel de referencia. 
                      El supervisor moderno es un gestor de riesgos de primera línea, y dominar esta norma es una competencia gerencial indispensable.
                    </p>
                  </motion.div>
                </section>

                {/* Nota Importante sobre Calificaciones */}
                <motion.div 
                  className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
                      <Info className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-3">📝 Nota Importante sobre Referencias de Productos</h3>
                      <p className="text-gray-800 leading-relaxed">
                        Las calificaciones y valoraciones de productos de seguridad mencionados en este artículo corresponden a la información 
                        disponible en Amazon al momento de la publicación (<strong className="bg-amber-200 px-2 py-1 rounded">1 de Octubre, 2025</strong>). 
                        Las valoraciones de los clientes en Amazon pueden variar con el tiempo. Te recomendamos consultar la página oficial 
                        del producto en Amazon para ver la calificación y reseñas más recientes.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Sistema de Tabs para los 7 Puntos Clave */}
                <section id="puntos-clave" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    🎯 Los 7 Puntos Clave que Debes Dominar
                  </motion.h2>

                  {/* Tabs Navigation */}
                  <div className="flex flex-wrap gap-3 mb-4 sm:mb-6 md:mb-8 justify-center">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.title}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-gray-200"
                  >
                    {activeTab === 0 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">🔍</span>
                          Punto Clave 1: Análisis de Condiciones Prevalecientes
                        </h3>
                        
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-6">
                          <p className="text-gray-800 text-lg">
                            <strong>La improvisación es el enemigo mortal de la seguridad en alturas.</strong> El numeral 5.1 de la norma obliga a contar con un análisis previo 
                            de las condiciones prevalecientes para identificar los factores de riesgo existentes.
                          </p>
                        </div>

                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Factores Críticos a Revisar:</h4>
                        
                        <div className="space-y-4 mb-4 sm:mb-6 md:mb-8">
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200">
                            <h5 className="font-bold text-green-900 mb-2 text-lg">🏗️ Superficie de Trabajo y Estructura</h5>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                              <li>Evaluar estabilidad y compactación del suelo</li>
                              <li>Identificar aberturas desprotegidas, perforaciones o pozos</li>
                              <li>Verificar resistencia de la estructura</li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                            <h5 className="font-bold text-blue-900 mb-2 text-lg">🌤️ Condiciones Climáticas</h5>
                            <p className="text-gray-700">
                              La norma es inequívoca: <strong className="bg-blue-200 px-2 py-1 rounded">suspender actividades cuando hay lluvia intensa, 
                              vientos fuertes o tormentas eléctricas</strong>. El supervisor debe tener autoridad para detener la operación sin vacilación.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200">
                            <h5 className="font-bold text-red-900 mb-2 text-lg">⚡ Proximidad a Líneas Eléctricas</h5>
                            <p className="text-gray-700 mb-3">
                              Identificar líneas eléctricas energizadas. Medidas de control:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              <li>Desenergización y bloqueo de la línea</li>
                              <li>Reubicación temporal de líneas</li>
                              <li>Instalación de protecciones aislantes</li>
                              <li><strong>Prohibido:</strong> Cables de acero metálicos en zonas con líneas eléctricas</li>
                            </ul>
                          </div>
                        </div>

                        {/* Checklist Interactivo Mejorado */}
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-gray-300">
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="bg-green-500 rounded-full p-2">
                              <CheckCircle className="text-white h-5 w-5" />
                            </div>
                            Checklist Diario de Inspección Pre-Trabajo
                          </h4>
                          
                          {/* Instrucciones */}
                          <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-xl mb-6">
                            <p className="text-yellow-900 font-semibold mb-2">📋 Instrucciones:</p>
                            <p className="text-gray-700 text-sm">
                              Este checklist debe completarse ANTES de autorizar cualquier trabajo en altura. 
                              Si cualquier elemento resulta "NO OK", el trabajo NO puede proceder hasta resolver la deficiencia.
                            </p>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="text-left py-3 px-4 font-bold border">Elemento Crítico a Verificar</th>
                                  <th className="text-center py-3 px-3 w-20 font-bold border">✅ OK</th>
                                  <th className="text-center py-3 px-3 w-20 font-bold border">❌ NO</th>
                                  <th className="text-left py-3 px-4 font-bold border">Criterios de Aceptación</th>
                                  <th className="text-left py-3 px-4 font-bold border">Acción Correctiva</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border hover:bg-blue-50">
                                  <td className="py-3 px-4 font-medium border">🌤️ Condiciones Climáticas</td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-green-400 rounded mx-auto cursor-pointer hover:bg-green-100"></div>
                                  </td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-red-400 rounded mx-auto cursor-pointer hover:bg-red-100"></div>
                                  </td>
                                  <td className="py-3 px-4 border text-gray-600">Viento {'<'} 40 km/h, sin lluvia/hielo, visibilidad {'>'} 30m</td>
                                  <td className="py-3 px-4 border text-gray-600">Suspender hasta mejores condiciones</td>
                                </tr>
                                <tr className="border hover:bg-blue-50 bg-gray-50">
                                  <td className="py-3 px-4 font-medium border">🏗️ Superficie de Trabajo</td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-green-400 rounded mx-auto cursor-pointer hover:bg-green-100"></div>
                                  </td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-red-400 rounded mx-auto cursor-pointer hover:bg-red-100"></div>
                                  </td>
                                  <td className="py-3 px-4 border text-gray-600">Sin grietas, corrosión, deformación o inestabilidad</td>
                                  <td className="py-3 px-4 border text-gray-600">Reparar o reforzar antes de proceder</td>
                                </tr>
                                <tr className="border hover:bg-blue-50">
                                  <td className="py-3 px-4 font-medium border">⚓ Puntos de Anclaje</td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-green-400 rounded mx-auto cursor-pointer hover:bg-green-100"></div>
                                  </td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-red-400 rounded mx-auto cursor-pointer hover:bg-red-100"></div>
                                  </td>
                                  <td className="py-3 px-4 border text-gray-600">Certificados para 5000 lbs (22.2 kN) por trabajador</td>
                                  <td className="py-3 px-4 border text-gray-600">Instalar/certificar anclajes adecuados</td>
                                </tr>
                                <tr className="border hover:bg-blue-50 bg-gray-50">
                                  <td className="py-3 px-4 font-medium border">⚡ Riesgos Eléctricos</td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-green-400 rounded mx-auto cursor-pointer hover:bg-green-100"></div>
                                  </td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-red-400 rounded mx-auto cursor-pointer hover:bg-red-100"></div>
                                  </td>
                                  <td className="py-3 px-4 border text-gray-600">Distancias según voltaje: BT=1m, MT=3m, AT=5m</td>
                                  <td className="py-3 px-4 border text-gray-600">Desenergizar o usar método alternativo</td>
                                </tr>
                                <tr className="border hover:bg-blue-50">
                                  <td className="py-3 px-4 font-medium border">🚑 Plan de Rescate</td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-green-400 rounded mx-auto cursor-pointer hover:bg-green-100"></div>
                                  </td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-red-400 rounded mx-auto cursor-pointer hover:bg-red-100"></div>
                                  </td>
                                  <td className="py-3 px-4 border text-gray-600">Equipo y personal capacitado disponible {'<'} 10 min</td>
                                  <td className="py-3 px-4 border text-gray-600">Establecer equipo de rescate antes de iniciar</td>
                                </tr>
                                <tr className="border hover:bg-blue-50 bg-gray-50">
                                  <td className="py-3 px-4 font-medium border">👥 Personal Autorizado</td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-green-400 rounded mx-auto cursor-pointer hover:bg-green-100"></div>
                                  </td>
                                  <td className="text-center py-3 px-3 border">
                                    <div className="w-6 h-6 border-2 border-red-400 rounded mx-auto cursor-pointer hover:bg-red-100"></div>
                                  </td>
                                  <td className="py-3 px-4 border text-gray-600">Todos con DC-3 vigente y autorización escrita</td>
                                  <td className="py-3 px-4 border text-gray-600">Capacitar y autorizar antes de proceder</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          {/* Firmas de Autorización */}
                          <div className="mt-6 bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                            <h5 className="font-bold text-blue-900 mb-4">📝 Firmas de Autorización</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="text-center">
                                <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg mb-2">
                                  <p className="text-sm text-gray-500">Firma del Inspector</p>
                                </div>
                                <p className="text-xs text-gray-600">Quien realizó la inspección</p>
                              </div>
                              <div className="text-center">
                                <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg mb-2">
                                  <p className="text-sm text-gray-500">Firma del Supervisor</p>
                                </div>
                                <p className="text-xs text-gray-600">Quien autoriza el trabajo</p>
                              </div>
                              <div className="text-center">
                                <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg mb-2">
                                  <p className="text-sm text-gray-500">Fecha y Hora</p>
                                </div>
                                <p className="text-xs text-gray-600">Válido solo para la jornada</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">⚡</span>
                          Punto Clave 2: La Jerarquía de Controles
                        </h3>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-6">
                          <p className="text-gray-800 text-lg">
                            <strong>Error común:</strong> Saltar directamente al EPP (arnés). Un enfoque profesional exige una estrategia más robusta. 
                            Aunque la NOM-009 no usa el término explícitamente, se alinea con este principio fundamental reconocido por OSHA e ISO 45001.
                          </p>
                        </div>

                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                          📊 Orden de Prioridad: De Más Efectivo a Menos Efectivo
                        </h4>

                        {/* Pirámide Invertida */}
                        <div className="space-y-4 mb-4 sm:mb-6 md:mb-8">
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-green-400 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                                <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold">1</span>
                              </div>
                              <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">Eliminación</h5>
                            </div>
                            <p className="text-gray-800 text-lg mb-3">
                              <strong>La medida más eficaz:</strong> Eliminar el riesgo por completo.
                            </p>
                            <div className="bg-white/70 p-4 rounded-xl">
                              <p className="text-gray-700">
                                <strong>Ejemplo:</strong> ¿Se pueden pre-ensamblar componentes a nivel del suelo para luego ser izados? 
                                ¿Se puede usar una herramienta de largo alcance desde el piso?
                              </p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-blue-400 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-blue-500 rounded-full p-4 flex-shrink-0">
                                <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold">2</span>
                              </div>
                              <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Sustitución</h5>
                            </div>
                            <p className="text-gray-800 text-lg mb-3">
                              Reemplazar el peligro por algo menos riesgoso.
                            </p>
                            <div className="bg-white/70 p-4 rounded-xl">
                              <p className="text-gray-700">
                                <strong>Ejemplo:</strong> Usar una plataforma de elevación móvil (PEMP) con barandales integrados en lugar de andamio.
                              </p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-purple-400 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-purple-500 rounded-full p-4 flex-shrink-0">
                                <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold">3</span>
                              </div>
                              <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900">Controles de Ingeniería (Protección Colectiva)</h5>
                            </div>
                            <p className="text-gray-800 text-lg mb-3">
                              <strong className="bg-purple-200 px-2 py-1 rounded">Primera línea de defensa física y prioridad explícita en la norma.</strong>
                            </p>
                            <div className="bg-white/70 p-4 rounded-xl">
                              <p className="text-gray-700 mb-2">
                                <strong>Antes del arnés, instalar:</strong>
                              </p>
                              <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Barreras fijas o protecciones perimetrales</li>
                                <li>Redes de seguridad</li>
                                <li>Barandales robustos en andamios y azoteas</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-orange-400 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-orange-500 rounded-full p-4 flex-shrink-0">
                                <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold">4</span>
                              </div>
                              <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900">Controles Administrativos</h5>
                            </div>
                            <p className="text-gray-800 text-lg mb-3">
                              Modifican la manera en que las personas trabajan.
                            </p>
                            <div className="bg-white/70 p-4 rounded-xl">
                              <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Permisos de trabajo en altura</li>
                                <li>Señalización clara de riesgos</li>
                                <li>Rotación de personal para prevenir fatiga</li>
                                <li>Supervisión constante por personal calificado</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-red-400 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-red-500 rounded-full p-4 flex-shrink-0">
                                <span className="text-white text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold">5</span>
                              </div>
                              <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900">Equipo de Protección Personal (EPP)</h5>
                            </div>
                            <p className="text-gray-800 text-lg mb-3">
                              <strong className="text-red-700">Último recurso.</strong> Es fundamental entender que un arnés no previene la caída; 
                              solo la detiene una vez que ha ocurrido.
                            </p>
                            <div className="bg-white/70 p-4 rounded-xl">
                              <p className="text-red-700 font-semibold">
                                ⚠️ Depender exclusivamente del EPP es la estrategia menos fiable: sujeta a errores humanos, fallas del equipo y uso incorrecto.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Comparativa de Mentalidades */}
                        <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6">
                          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3 sm:p-4 md:p-6">
                            <h5 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                              <XCircle className="h-6 w-6" />
                              Supervisor Reactivo
                            </h5>
                            <p className="text-gray-700 text-lg italic">
                              "¿Traes puesto el arnés?"
                            </p>
                          </div>

                          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-3 sm:p-4 md:p-6">
                            <h5 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                              <CheckCircle className="h-6 w-6" />
                              Supervisor Proactivo
                            </h5>
                            <p className="text-gray-700 text-lg italic">
                              "¿Podemos instalar un barandal aquí para que nadie necesite arnés?"
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

{activeTab === 2 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">🛡️</span>
                          Punto Clave 3: Selección y Uso Correcto de EPP
                        </h3>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-6">
                          <p className="text-gray-800 text-lg">
                            Cuando los controles superiores no son factibles, es imperativo que cada componente del 
                            <strong className="bg-blue-200 px-2 py-1 rounded mx-1">Sistema Personal para Detención de Caídas (SPDC)</strong> 
                            sea seleccionado, inspeccionado y utilizado correctamente. No es un solo elemento, sino un <strong>sistema integrado</strong>.
                          </p>
                        </div>

                        {/* Arnés de Cuerpo Completo */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300 mb-6">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">👤</span>
                            Arnés de Cuerpo Completo
                          </h4>
                          <p className="text-gray-800 mb-4">
                            La norma <strong>solo permite arnés de cuerpo completo</strong>, que distribuye fuerzas de impacto a través de piernas, pelvis y hombros.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                              <h5 className="font-bold text-blue-900 mb-3 text-lg">🔴 Detención de Caídas</h5>
                              <p className="text-gray-700 mb-2">
                                <strong>Exclusivamente:</strong> Anillo "D" dorsal (espalda, entre omóplatos)
                              </p>
                              <div className="bg-blue-50 p-3 rounded-lg mt-3">
                                <p className="text-sm text-blue-800">
                                  ✅ Único punto diseñado para soportar fuerzas dinámicas de caída detenida
                                </p>
                              </div>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                              <h5 className="font-bold text-purple-900 mb-3 text-lg">🟣 Posicionamiento y Restricción</h5>
                              <p className="text-gray-700 mb-2">
                                Anillos "D" laterales (altura de cadera)
                              </p>
                              <div className="bg-red-50 p-3 rounded-lg mt-3">
                                <p className="text-sm text-red-800">
                                  ⚠️ <strong>NO</strong> es sistema de detención de caídas. Solo para apoyo vertical con manos libres.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Conectores y Líneas de Vida */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300 mb-6">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🔗</span>
                            Conectores y Líneas de Vida
                          </h4>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-gray-900 mb-3">📏 Líneas de Vida</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span><strong>Verticales:</strong> Para ascender/descender por escaleras marinas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span><strong>Horizontales:</strong> Desplazamiento a lo largo de un plano</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span><strong>Retráctiles:</strong> Minimizan distancia de caída libre manteniendo línea tensa</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-gray-900 mb-3">🔒 Conectores (Ganchos y Mosquetones)</h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                  Acero forjado con mecanismo de doble seguro
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                  Compatibilidad con punto de anclaje (evitar "roll-out")
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-300">
                              <h5 className="font-bold text-orange-900 mb-3">⚡ Absorbedor de Energía - COMPONENTE VITAL</h5>
                              <p className="text-gray-700">
                                En caso de caída, se despliega para <strong className="bg-orange-200 px-2 py-1 rounded">disipar la energía cinética</strong>, 
                                reduciendo la fuerza de impacto a niveles tolerables y previniendo lesiones internas graves.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Punto de Anclaje - EL MÁS CRÍTICO */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-red-500 shadow-xl">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
                            <AlertTriangle className="h-8 w-8" />
                            El Punto de Anclaje: El Eslabón MÁS CRÍTICO
                          </h4>
                          
                          <div className="bg-yellow-50 border-2 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                            <p className="text-xl font-bold text-yellow-900 mb-2">
                              ⚠️ Elemento más subestimado y origen de fallas catastróficas
                            </p>
                            <p className="text-lg text-gray-800">
                              <strong className="bg-yellow-200 px-3 py-1 rounded text-lg sm:text-xl md:text-2xl">Regla de Oro:</strong>
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-700 mt-3">
                              5,000 libras (22.2 kN) por trabajador conectado
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6">
                            <div className="bg-green-50 border-2 border-green-400 p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                                <CheckCircle className="h-6 w-6" />
                                Anclajes VÁLIDOS
                              </h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-green-600 font-bold text-xl">✓</span>
                                  <span>Vigas de acero estructural</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-600 font-bold text-xl">✓</span>
                                  <span>Anclajes de ingeniería diseñados específicamente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-600 font-bold text-xl">✓</span>
                                  <span>Puntos certificados por persona calificada</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-red-50 border-2 border-red-400 p-3 sm:p-4 md:p-6 rounded-xl">
                              <h5 className="font-bold text-red-900 mb-4 text-lg flex items-center gap-2">
                                <XCircle className="h-6 w-6" />
                                Anclajes PROHIBIDOS
                              </h5>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-red-600 font-bold text-xl">✗</span>
                                  <span>Tuberías de proceso</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-red-600 font-bold text-xl">✗</span>
                                  <span>Charolas de cables</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-red-600 font-bold text-xl">✗</span>
                                  <span>Conductos eléctricos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-red-600 font-bold text-xl">✗</span>
                                  <span>Barandales no diseñados para cargas de impacto</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-blue-50 border-2 border-blue-400 p-3 sm:p-4 md:p-6 rounded-xl mt-6">
                            <h5 className="font-bold text-blue-900 mb-3 text-lg">📍 Ubicación Ideal del Anclaje</h5>
                            <p className="text-gray-800">
                              <strong>Siempre que sea posible:</strong> Por encima de la cabeza del trabajador.
                            </p>
                            <div className="bg-white p-4 rounded-lg mt-3">
                              <p className="text-gray-700">
                                <strong className="text-blue-700">Beneficios:</strong>
                              </p>
                              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Minimiza distancia de caída libre</li>
                                <li>Reduce riesgo de efecto péndulo peligroso</li>
                                <li>Evita colisión con estructuras cercanas</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">🏗️</span>
                          Punto Clave 4: Sistemas de Andamios Seguros
                        </h3>
                        
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-6">
                          <p className="text-gray-800 text-lg">
                            Los andamios son plataformas temporales esenciales, pero <strong className="text-orange-700">su montaje incorrecto los convierte en estructuras peligrosas</strong>. 
                            La norma establece requisitos estrictos para garantizar su estabilidad.
                          </p>
                        </div>

                        <div className="bg-yellow-50 border-2 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl mb-4 sm:mb-6 md:mb-8">
                          <h4 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Requisito Universal para Todos los Andamios</h4>
                          <p className="text-lg text-gray-800">
                            La estructura completa debe <strong className="bg-yellow-200 px-2 py-1 rounded text-xl">resistir al menos 4 veces la carga máxima</strong> a la que será sometida 
                            (incluyendo trabajadores, herramientas y materiales).
                          </p>
                        </div>

                        {/* Andamios Tubulares */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300 mb-6">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🏗️</span>
                            Andamios Tubulares (Tipo Torre o Estructura)
                          </h4>

                          <div className="space-y-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200">
                              <h5 className="font-bold text-green-900 mb-4 text-lg">🔧 Estabilización - LA BASE ES FUNDAMENTAL</h5>
                              <div className="space-y-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                  <p className="text-gray-800 mb-2">
                                    <strong>Superficie:</strong> Firme, estable y nivelada
                                  </p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                                  <p className="text-gray-800 font-bold text-lg mb-2">
                                    📐 Relación Altura/Base: Máximo 4:1
                                  </p>
                                  <p className="text-gray-700">
                                    Si se excede: <strong>Sujetar o arriostrar a estructura fija cada 4 metros de altura</strong>
                                  </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                  <p className="text-gray-800">
                                    <strong>Andamio Móvil:</strong> Ruedas con sistema de bloqueo activado durante uso
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                              <h5 className="font-bold text-purple-900 mb-4 text-lg">📏 Plataformas de Trabajo</h5>
                              <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                  <span>Completas, cubriendo toda la superficie (sin huecos)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                  <span>Tablones: <strong>Espesor mínimo 5 cm</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                  <span>Espacios entre tablones: <strong>No exceder 2.5 cm</strong></span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-200">
                              <h5 className="font-bold text-red-900 mb-4 text-lg">🛡️ Protección Colectiva - OBLIGATORIA desde 1.8m</h5>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg">
                                  <p className="font-bold text-red-800 mb-2">Barandales:</p>
                                  <ul className="text-gray-700 space-y-1">
                                    <li>• Todos los lados abiertos</li>
                                    <li>• <strong>Altura mínima: 90 cm</strong></li>
                                  </ul>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                  <p className="font-bold text-red-800 mb-2">Rodapié:</p>
                                  <ul className="text-gray-700 space-y-1">
                                    <li>• <strong>Altura mínima: 15 cm</strong></li>
                                    <li>• Previene caída de objetos y herramientas</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Andamios Colgantes */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300 mb-6">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">⬇️</span>
                            Andamios Colgantes
                          </h4>

                          <div className="space-y-6">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                              <h5 className="font-bold text-blue-900 mb-4 text-lg">🔍 Sistemas de Suspensión y Seguridad</h5>
                              <p className="text-gray-800 mb-3">
                                Inspección exhaustiva obligatoria de:
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">1.</span>
                                  <span><strong>Cables de suspensión</strong> que soportan la carga</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-red-600 font-bold">2.</span>
                                  <span><strong className="text-red-700">Cables de seguridad independientes</strong> (conexión de sistema detención caídas)</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200">
                              <h5 className="font-bold text-orange-900 mb-4 text-lg">⚖️ Contrapesos - Operación de Ingeniería</h5>
                              <div className="space-y-4">
                                <div className="bg-orange-50 p-4 rounded-lg">
                                  <p className="text-gray-800">
                                    <strong>Cálculo:</strong> Garantizar estabilidad con factor de seguridad de 4
                                  </p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                  <p className="text-gray-800">
                                    <strong>Sujeción:</strong> Asegurado a estructura por medios mecánicos
                                  </p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-400">
                                  <p className="text-red-800 font-bold">
                                    ❌ ESTRICTAMENTE PROHIBIDO:
                                  </p>
                                  <p className="text-gray-700 mt-2">
                                    Materiales fluidos o sueltos como contrapeso (sacos de arena, contenedores de agua)
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                              <h5 className="font-bold text-red-900 mb-4 text-lg">🦺 EPP OBLIGATORIO - Sin Excepción</h5>
                              <div className="bg-red-50 p-4 rounded-lg">
                                <p className="text-gray-800 text-lg">
                                  En <strong>cualquier andamio suspendido</strong>, cada trabajador debe utilizar:
                                </p>
                                <ul className="mt-3 space-y-2 text-gray-700">
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                                    <span>Sistema personal de detención de caídas</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                                    <span>Conectado a línea de vida vertical</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                                    <span><strong>Anclada a punto independiente</strong> de estructura de suspensión</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Responsabilidad del Supervisor */}
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-indigo-400 shadow-xl">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-3">
                            <Users className="h-8 w-8" />
                            Rol Intransferible del Supervisor
                          </h4>
                          <p className="text-gray-800 text-lg mb-4">
                            Liderar <strong className="bg-indigo-200 px-2 py-1 rounded">inspección visual documentada antes de cada jornada</strong>, buscando activamente:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                              <ul className="space-y-2 text-gray-700">
                                <li>• Deformaciones</li>
                                <li>• Corrosión</li>
                                <li>• Fisuras</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <ul className="space-y-2 text-gray-700">
                                <li>• Ausencia de pasadores</li>
                                <li>• Falta de abrazaderas</li>
                                <li>• Componentes de seguridad faltantes</li>
                              </ul>
                            </div>
                          </div>
                                           </div>
                      </div>
                    )}

                    {activeTab === 4 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">🚨</span>
                          Punto Clave 5: El Plan de Atención a Emergencias
                        </h3>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-4 sm:mb-6 md:mb-8">
                          <p className="text-gray-800 text-lg">
                            <strong className="text-red-700 text-xl">Un sistema de detención que funciona correctamente no es el final; es el comienzo de una emergencia médica crítica.</strong> 
                            El numeral 5.11 de la NOM-009 exige disponer de un plan de atención a emergencias. La ausencia de este plan no es una falta menor; 
                            <strong className="bg-red-200 px-2 py-1 rounded mx-1">es un incumplimiento grave que deja a los trabajadores en vulnerabilidad extrema</strong>.
                          </p>
                        </div>

                        {/* TRAUMA POR SUSPENSIÓN - SECCIÓN EXPANDIDA */}
                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 sm:p-6 md:p-8 rounded-3xl border-4 border-red-500 shadow-2xl mb-4 sm:mb-6 md:mb-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="bg-red-600 rounded-full p-4">
                              <AlertTriangle className="text-white h-10 w-10" />
                            </div>
                            <div>
                              <h4 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-red-900">El Trauma por Suspensión: El Enemigo Silencioso</h4>
                              <p className="text-red-700 text-lg font-semibold">También conocido como Shock Ortostático</p>
                            </div>
                          </div>

                          {/* Imagen Explicativa del Trauma por Suspensión */}
                          <div className="mb-6">
                            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-3 sm:p-4 md:p-6 border-4 border-dashed border-red-300 shadow-inner">
                              <div className="text-center">
                                <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🩺</div>
                                <h5 className="text-xl font-bold text-red-700 mb-3">
                                  Imagen Médica Explicativa
                                </h5>
                                <p className="text-red-600 mb-4">
                                  Diagrama médico del trauma por suspensión y sus efectos en el sistema circulatorio
                                </p>
                                <div className="bg-red-200 rounded-xl p-4 text-red-700">
                                  <p className="font-semibold mb-2">🔬 Imagen sugerida:</p>
                                  <p className="text-sm">
                                    Diagrama anatómico mostrando el flujo sanguíneo bloqueado por las correas del arnés, 
                                    acumulación de sangre en extremidades y efectos en el cerebro
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fisiopatología */}
                          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-red-300 mb-6">
                            <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                              <Activity className="h-7 w-7" />
                              Fisiopatología: ¿Qué Sucede en el Cuerpo?
                            </h5>
                            <div className="space-y-4">
                              <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl">
                                <p className="text-gray-800 text-lg mb-3">
                                  <strong className="text-red-800">Al quedar suspendido e inmóvil:</strong>
                                </p>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                  <li>Las correas del arnés (especialmente muslos) <strong>comprimen las venas femorales</strong></li>
                                  <li>Se <strong>impide el retorno venoso</strong> (sangre no puede subir al corazón)</li>
                                  <li>Un volumen significativo de sangre se <strong>acumula en extremidades inferiores</strong></li>
                                  <li>El corazón no tiene suficiente sangre para bombear al cerebro</li>
                                  <li>Resultado: <strong className="bg-red-200 px-2 py-1 rounded">Hipoxia cerebral severa</strong></li>
                                </ol>
                              </div>
                            </div>
                          </div>

                          {/* Consecuencias Mortales con Timeline */}
                          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-orange-300 mb-6">
                            <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-6">⏱️ Línea de Tiempo: Consecuencias Mortales</h5>
                            
                            <div className="space-y-4">
                              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-400">
                                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                                  3-5<br/>min
                                </div>
                                <div>
                                  <p className="font-bold text-yellow-900 text-lg mb-2">Pérdida de Conciencia</p>
                                  <p className="text-gray-700">
                                    El trabajador puede perder la conciencia debido a la falta de oxígeno en el cerebro.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-2 border-orange-400">
                                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                                  10-15<br/>min
                                </div>
                                <div>
                                  <p className="font-bold text-orange-900 text-lg mb-2">Sangre Estancada se Vuelve Tóxica</p>
                                  <p className="text-gray-700 mb-2">
                                    La sangre en las piernas se queda sin oxígeno y se satura de:
                                  </p>
                                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Dióxido de carbono (CO₂)</li>
                                    <li>Toxinas metabólicas (acidosis)</li>
                                    <li>Potasio elevado (hiperpotasemia)</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-4 border-red-500">
                                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                                  {'<'}30<br/>min
                                </div>
                                <div>
                                  <p className="font-bold text-red-900 text-xl mb-2">⚠️ MUERTE por Fallo Multiorgánico</p>
                                  <p className="text-red-800 text-lg">
                                    La muerte puede ocurrir en menos de 30 minutos si no hay rescate inmediato.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Procedimientos de Rescate y Primeros Auxilios CRÍTICOS */}
                          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-green-400">
                            <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                              <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🚑</span>
                              Rescate y Primeros Auxilios CRÍTICOS
                            </h5>

                            <div className="space-y-6">
                              {/* Ventana de Tiempo */}
                              <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-400">
                                <h6 className="font-bold text-red-900 text-xl mb-3">⏰ Ventana de Tiempo: Rescate INMEDIATO</h6>
                                <div className="space-y-3 text-gray-800">
                                  <p className="text-lg">
                                    <strong className="bg-red-200 px-2 py-1 rounded">El plan NO puede depender exclusivamente del 911</strong>
                                  </p>
                                  <p>
                                    El tiempo de respuesta de emergencias externas puede exceder la ventana de supervivencia.
                                  </p>
                                  <div className="bg-white p-4 rounded-lg mt-3">
                                    <p className="font-bold text-red-800">
                                      ✅ INDISPENSABLE: Equipo de rescate capacitado y equipado EN EL SITIO
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Auto-ayuda */}
                              <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-400">
                                <h6 className="font-bold text-blue-900 text-xl mb-3">👤 Auto-ayuda: Si el Trabajador Está Consciente</h6>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                  <li className="text-lg">
                                    <strong>Mover las piernas continuamente</strong> - Bombear músculos para forzar retorno sanguíneo
                                  </li>
                                  <li className="text-lg">
                                    <strong>Desplegar cintas anti-trauma del arnés</strong> (si están equipadas)
                                  </li>
                                  <li className="text-lg">
                                    <strong>Crear estribo para ponerse de pie</strong> y aliviar presión en venas femorales
                                  </li>
                                </ol>
                              </div>

                              {/* Manejo Post-Rescate - CRÍTICO */}
                              <div className="bg-purple-50 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-purple-500">
                                <h6 className="font-bold text-purple-900 text-xl mb-4 flex items-center gap-2">
                                  <AlertTriangle className="h-7 w-7 text-red-600" />
                                  Manejo Post-Rescate: ¡VITAL PARA EVITAR LA MUERTE!
                                </h6>
                                
                                <div className="bg-red-100 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-red-600 mb-4">
                                  <p className="text-red-900 font-bold text-lg sm:text-xl md:text-2xl mb-3">
                                    ❌ NUNCA ACOSTAR EN POSICIÓN HORIZONTAL DE INMEDIATO
                                  </p>
                                  <p className="text-red-800 text-lg">
                                    Hacerlo provocaría que el volumen de <strong>sangre tóxica y desoxigenada de las piernas regrese masivamente al corazón</strong>, 
                                    lo que puede inducir un <strong className="bg-red-300 px-2 py-1 rounded">PARO CARDÍACO</strong>
                                  </p>
                                  <div className="bg-red-200 p-4 rounded-lg mt-4">
                                    <p className="text-red-900 font-bold text-xl">
                                      ☠️ Conocido como: "MUERTE DE RESCATE"
                                    </p>
                                  </div>
                                </div>

                                <div className="bg-green-100 p-3 sm:p-4 md:p-6 rounded-xl border-4 border-green-600">
                                  <p className="text-green-900 font-bold text-lg sm:text-xl md:text-2xl mb-4">
                                    ✅ POSICIÓN CORRECTA: "W" (Sentado con rodillas al pecho)
                                  </p>
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg">
                                      <p className="font-bold text-green-800 mb-2">Cómo colocar:</p>
                                      <ul className="text-gray-700 space-y-1">
                                        <li>• Posición sentada</li>
                                        <li>• Rodillas flexionadas hacia pecho</li>
                                        <li>• Forma de "W" con el cuerpo</li>
                                      </ul>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                      <p className="font-bold text-green-800 mb-2">Duración:</p>
                                      <p className="text-gray-700 text-lg">
                                        <strong className="bg-green-200 px-2 py-1 rounded">Mínimo 30 minutos</strong>
                                      </p>
                                      <p className="text-gray-600 text-sm mt-2">
                                        Permitir que el cuerpo se readapte gradualmente a circulación normal
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pregunta Operativa Decisiva */}
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-indigo-500 shadow-xl">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-3">
                            <span className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl">🎯</span>
                            El Plan de Rescate como Filtro Operativo
                          </h4>
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                            <p className="text-xl font-bold text-purple-900 mb-4">
                              Pregunta Fundamental antes de Autorizar CUALQUIER Tarea en Altura:
                            </p>
                            <div className="bg-purple-100 p-3 sm:p-4 md:p-6 rounded-xl">
                              <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 text-center mb-4">
                                "Si un trabajador cae en este punto exacto..."
                              </p>
                              <p className="text-xl text-center text-gray-800">
                                ¿Tenemos la <strong className="bg-yellow-200 px-2 py-1 rounded">capacidad real, equipo y personal</strong> para bajarlo 
                                de forma segura en <strong className="text-red-700">menos de 10 minutos</strong>?
                              </p>
                            </div>
                            <div className="mt-6 grid md:grid-cols-2 gap-4">
                              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-400">
                                <p className="font-bold text-red-900 mb-2">❌ Si la respuesta es NO:</p>
                                <p className="text-gray-700">
                                  La tarea NO puede proceder como está planeada. Regresar a jerarquía de controles para alternativa más segura.
                                </p>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
                                <p className="font-bold text-green-900 mb-2">✅ Si la respuesta es SÍ:</p>
                                <p className="text-gray-700">
                                  El plan define los límites de lo operativamente aceptable. Proceder con equipo y personal listos.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 5 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">📋</span>
                          Punto Clave 6: La Capacitación y Adiestramiento - DC-3
                        </h3>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-4 sm:mb-6 md:mb-8">
                          <p className="text-gray-800 text-lg">
                            <strong className="text-blue-800 text-xl">Un equipo de protección de última generación es inútil en manos de alguien que no sabe cómo usarlo.</strong> 
                            La norma exige que los trabajadores reciban capacitación, adiestramiento e información específica. 
                            Más aún: <strong className="bg-blue-200 px-2 py-1 rounded">solo personal capacitado y autorizado por escrito puede realizar trabajos en altura</strong>.
                          </p>
                        </div>

                        {/* ¿Qué es la DC-3? */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-green-300 mb-4 sm:mb-6 md:mb-8">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                            <FileText className="h-8 w-8" />
                            ¿Qué es la Constancia DC-3?
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200 mb-6">
                            <p className="text-gray-800 text-lg mb-4">
                              La <strong className="bg-green-200 px-2 py-1 rounded">Constancia de Competencias o de Habilidades Laborales (DC-3)</strong> es el 
                              formato oficial reconocido por la STPS que certifica que un trabajador ha completado y aprobado un curso de capacitación sobre una materia específica.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-green-900 font-bold text-lg mb-2">
                                📜 En este caso: Procedimientos de Seguridad para Trabajos en Altura conforme a NOM-009-STPS-2011
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl text-center">
                              <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl mb-2">✅</div>
                              <p className="font-bold text-blue-900 mb-2">Documento Oficial</p>
                              <p className="text-sm text-gray-700">Reconocido por STPS</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl text-center">
                              <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl mb-2">🎓</div>
                              <p className="font-bold text-purple-900 mb-2">Certifica Competencia</p>
                              <p className="text-sm text-gray-700">Aprobó el curso específico</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                              <div className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl mb-2">⚖️</div>
                              <p className="font-bold text-orange-900 mb-2">Requisito Legal</p>
                              <p className="text-sm text-gray-700">Obligatorio para trabajar en altura</p>
                            </div>
                          </div>
                        </div>

                        {/* Responsabilidades del Supervisor */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-purple-300 mb-4 sm:mb-6 md:mb-8">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-6">👔 Responsabilidades del Supervisor</h4>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-200">
                              <h5 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                                <CheckCircle className="h-6 w-6" />
                                1. Validez de la Capacitación
                              </h5>
                              <p className="text-gray-700 mb-3">
                                El curso debe ser impartido por:
                              </p>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span><strong>Agente Capacitador Externo</strong> con registro vigente ante STPS, o</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 font-bold">•</span>
                                  <span><strong>Instructor interno</strong> de la empresa debidamente calificado</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200">
                              <h5 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                                <CheckCircle className="h-6 w-6" />
                                2. Verificación de Competencias
                              </h5>
                              <p className="text-gray-700">
                                Es responsabilidad del supervisor verificar que <strong>cada miembro de su equipo</strong> que vaya a realizar trabajos en altura 
                                posea una <strong className="bg-green-200 px-2 py-1 rounded">constancia DC-3 válida y vigente</strong> antes de autorizar su ascenso.
                              </p>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200">
                              <h5 className="font-bold text-orange-900 mb-3 text-lg flex items-center gap-2">
                                <CheckCircle className="h-6 w-6" />
                                3. Vigencia y Actualización
                              </h5>
                              <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                                <p className="text-gray-800 font-bold mb-2">
                                  ⚠️ La competencia en seguridad NO es permanente
                                </p>
                                <p className="text-gray-700">
                                  Las habilidades se atrofian y los procedimientos cambian.
                                </p>
                              </div>
                              <div className="bg-orange-50 p-4 rounded-lg">
                                <p className="text-gray-800">
                                  <strong>Recomendación:</strong> Renovar capacitación y DC-3 <strong className="bg-orange-200 px-2 py-1 rounded">al menos anualmente</strong>, 
                                  o antes si:
                                </p>
                                <ul className="mt-2 space-y-1 text-gray-700">
                                  <li>• Se introducen nuevos equipos</li>
                                  <li>• Cambian significativamente las condiciones de trabajo</li>
                                  <li>• Hay incidentes que requieren refuerzo</li>
                                </ul>
                              </div>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                              <h5 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                                <CheckCircle className="h-6 w-6" />
                                4. Contenido Integral de la Capacitación
                              </h5>
                              <p className="text-gray-700 mb-4">
                                Una capacitación de calidad debe ir <strong>más allá de la simple colocación de un arnés</strong>. Debe cubrir:
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-lg">
                                  <p className="font-bold text-purple-800 mb-2">📚 Teórico:</p>
                                  <ul className="text-gray-700 space-y-1 text-sm">
                                    <li>• Identificación de riesgos</li>
                                    <li>• Jerarquía de controles</li>
                                    <li>• Normatividad NOM-009</li>
                                    <li>• Trauma por suspensión</li>
                                  </ul>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                  <p className="font-bold text-purple-800 mb-2">🛠️ Práctico:</p>
                                  <ul className="text-gray-700 space-y-1 text-sm">
                                    <li>• Inspección de equipos</li>
                                    <li>• Uso correcto de arnés y líneas</li>
                                    <li>• Procedimientos en andamios</li>
                                    <li>• Técnicas de rescate</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Proceso de Obtención DC-3 */}
                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-indigo-400 shadow-xl">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900 mb-6">🎯 Proceso de Obtención de DC-3</h4>
                          
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center border-2 border-green-300">
                              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl mx-auto mb-3">
                                1
                              </div>
                              <p className="font-bold text-green-900 mb-2">Inscripción</p>
                              <p className="text-sm text-gray-700">Curso con agente capacitador registrado</p>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center border-2 border-blue-300">
                              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl mx-auto mb-3">
                                2
                              </div>
                              <p className="font-bold text-blue-900 mb-2">Capacitación</p>
                              <p className="text-sm text-gray-700">Teoría + Práctica sobre NOM-009</p>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center border-2 border-purple-300">
                              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl mx-auto mb-3">
                                3
                              </div>
                              <p className="font-bold text-purple-900 mb-2">Evaluación</p>
                              <p className="text-sm text-gray-700">Aprobar examen teórico y práctico</p>
                            </div>

                            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl text-center border-2 border-orange-300">
                              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl mx-auto mb-3">
                                4
                              </div>
                              <p className="font-bold text-orange-900 mb-2">Constancia</p>
                              <p className="text-sm text-gray-700">Emisión oficial de DC-3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 6 && (
                      <div>
                        <h3 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl">✅</span>
                          Punto Clave 7: El Registro y la Supervisión Continua
                        </h3>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 md:p-6 rounded-r-xl mb-4 sm:mb-6 md:mb-8">
                          <p className="text-gray-800 text-lg sm:text-xl md:text-2xl font-bold mb-4 text-red-900">
                            "Lo que no está escrito, no se hizo"
                          </p>
                          <p className="text-gray-800 text-lg">
                            La documentación meticulosa es la <strong className="bg-red-200 px-2 py-1 rounded">única prueba tangible</strong> de la debida diligencia 
                            de una empresa y su línea de supervisión. Estos registros son la primera línea de defensa durante una auditoría STPS y componente esencial 
                            en la investigación de cualquier incidente.
                          </p>
                        </div>

                        {/* Evidencia Documental Clave */}
                        <div className="space-y-6 mb-4 sm:mb-6 md:mb-8">
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-300">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6">📄 Evidencia Documental Clave</h4>
                            
                            <div className="space-y-4">
                              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-200">
                                <h5 className="font-bold text-green-900 mb-3 text-lg flex items-center gap-2">
                                  <FileText className="h-6 w-6" />
                                  1. Permisos de Trabajo en Altura
                                </h5>
                                <p className="text-gray-700 mb-3">
                                  Antes de iniciar cualquier tarea no rutinaria en altura, se debe emitir un permiso de trabajo que debe incluir:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="bg-green-50 p-4 rounded-lg">
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                      <li>• Tarea específica a realizar</li>
                                      <li>• Riesgos identificados (análisis previo)</li>
                                      <li>• Equipo de protección requerido</li>
                                    </ul>
                                  </div>
                                  <div className="bg-green-50 p-4 rounded-lg">
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                      <li>• Medidas de seguridad implementadas</li>
                                      <li>• Firmas: Supervisor y personal</li>
                                      <li>• Fecha y hora de inicio/fin</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-200">
                                <h5 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                                  <FileText className="h-6 w-6" />
                                  2. Análisis de Riesgos Documentado
                                </h5>
                                <p className="text-gray-700">
                                  El análisis de condiciones prevalecientes (Punto Clave 1) <strong className="bg-purple-200 px-2 py-1 rounded">no debe ser un ejercicio mental</strong>. 
                                  Debe plasmarse en un formato, ser firmado y archivado.
                                </p>
                              </div>

                              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-200">
                                <h5 className="font-bold text-orange-900 mb-3 text-lg flex items-center gap-2">
                                  <FileText className="h-6 w-6" />
                                  3. Registros de Inspección y Mantenimiento
                                </h5>
                                <p className="text-gray-700 mb-4">
                                  Llevar bitácora o registro formal de inspecciones pre-uso y periódicas de todo equipo crítico:
                                </p>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                      <p className="font-bold text-orange-800 mb-2">Equipos:</p>
                                      <ul className="text-gray-700 space-y-1 text-sm">
                                        <li>• Arneses</li>
                                        <li>• Líneas de vida</li>
                                        <li>• Conectores</li>
                                        <li>• Andamios</li>
                                        <li>• Plataformas de elevación</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p className="font-bold text-orange-800 mb-2">Debe documentar:</p>
                                      <ul className="text-gray-700 space-y-1 text-sm">
                                        <li>• Fecha de inspección</li>
                                        <li>• Nombre del inspector</li>
                                        <li>• Hallazgos específicos</li>
                                        <li>• Acciones correctivas tomadas</li>
                                        <li>• Firma y fecha de corrección</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Supervisión Activa y Competente */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-2xl border-4 border-green-400 shadow-xl mb-4 sm:mb-6 md:mb-8">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                            <Users className="h-8 w-8" />
                            Supervisión Activa y Competente: Cierra el Círculo
                          </h4>
                          
                          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-green-300 mb-6">
                            <p className="text-gray-800 text-lg mb-4">
                              La norma exige <strong className="bg-green-200 px-2 py-1 rounded">supervisión constante</strong> para asegurar que las medidas de seguridad 
                              planificadas se apliquen correctamente en el campo.
                            </p>
                            <p className="text-gray-700 font-bold text-lg text-green-900">
                              Esto implica que el supervisor debe:
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 sm:p-4 md:p-6">
                            <div className="space-y-4">
                              <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                                <div className="flex items-center gap-3 mb-3">
                                  <CheckCircle className="h-7 w-7 text-blue-600" />
                                  <h5 className="font-bold text-blue-900 text-lg">Estar Presente</h5>
                                </div>
                                <p className="text-gray-700">
                                  Físicamente en el área de trabajo, no solo en la oficina revisando papeles
                                </p>
                              </div>

                              <div className="bg-purple-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-purple-300">
                                <div className="flex items-center gap-3 mb-3">
                                  <CheckCircle className="h-7 w-7 text-purple-600" />
                                  <h5 className="font-bold text-purple-900 text-lg">Observar Continuamente</h5>
                                </div>
                                <p className="text-gray-700">
                                  Las prácticas laborales en tiempo real, identificando actos inseguros
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-orange-300">
                                <div className="flex items-center gap-3 mb-3">
                                  <CheckCircle className="h-7 w-7 text-orange-600" />
                                  <h5 className="font-bold text-orange-900 text-lg">Corregir de Inmediato</h5>
                                </div>
                                <p className="text-gray-700">
                                  Cualquier acto o condición insegura detectada, sin demora
                                </p>
                              </div>

                              <div className="bg-red-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-red-300">
                                <div className="flex items-center gap-3 mb-3">
                                  <CheckCircle className="h-7 w-7 text-red-600" />
                                  <h5 className="font-bold text-red-900 text-lg">Autoridad para Detener</h5>
                                </div>
                                <p className="text-gray-700">
                                  El trabajo si las condiciones se vuelven peligrosas, <strong>sin importar las presiones de producción</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Ciclo Completo de Seguridad */}
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-3xl border-4 border-indigo-500 shadow-xl">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900 mb-6 text-center">
                            🔄 El Ciclo Completo de Seguridad
                          </h4>
                          
                          <div className="grid md:grid-cols-7 gap-3">
                            <div className="bg-white p-4 rounded-xl text-center border-2 border-blue-300">
                              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                1
                              </div>
                              <p className="text-sm font-bold text-blue-900">Planificación</p>
                              <p className="text-xs text-gray-600 mt-1">Análisis de Riesgos</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center border-2 border-green-300">
                              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                2
                              </div>
                              <p className="text-sm font-bold text-green-900">Controles</p>
                              <p className="text-xs text-gray-600 mt-1">Jerarquía</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center border-2 border-purple-300">
                              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                3
                              </div>
                              <p className="text-sm font-bold text-purple-900">EPP</p>
                              <p className="text-xs text-gray-600 mt-1">Correcto</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center border-2 border-orange-300">
                              <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                4
                              </div>
                              <p className="text-sm font-bold text-orange-900">Andamios</p>
                              <p className="text-xs text-gray-600 mt-1">Seguros</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center border-2 border-red-300">
                              <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                5
                              </div>
                              <p className="text-sm font-bold text-red-900">Emergencias</p>
                              <p className="text-xs text-gray-600 mt-1">Plan Rescate</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center border-2 border-indigo-300">
                              <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                6
                              </div>
                              <p className="text-sm font-bold text-indigo-900">Capacitación</p>
                              <p className="text-xs text-gray-600 mt-1">DC-3</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center border-2 border-teal-300">
                              <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                                7
                              </div>
                              <p className="text-sm font-bold text-teal-900">Supervisión</p>
                              <p className="text-xs text-gray-600 mt-1">Verificación</p>
                            </div>
                          </div>

                          <div className="mt-6 bg-white p-3 sm:p-4 md:p-6 rounded-xl border-2 border-indigo-300">
                            <p className="text-center text-lg text-gray-800">
                              <strong className="text-indigo-900">Esta supervisión activa cierra el ciclo:</strong> Comienza con la Planificación, 
                              se ejecuta con Controles y EPP adecuados, se respalda con Plan de Emergencia y Personal Competente, 
                              y se valida a través de la <strong className="bg-indigo-200 px-2 py-1 rounded">Verificación y Registro continuos</strong>.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </section>

                {/* Conclusión */}
                <section id="conclusion" className="mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-8 md:mb-12 md:mb-16">
                  <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl sm:text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    🎯 Conclusión: La Seguridad es la Mejor Inversión
                  </motion.h2>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-4 sm:p-6 md:p-8 rounded-r-3xl shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                        <Shield className="text-white h-10 w-10" />
                      </div>
                      <div>
                        <p className="text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                          Dominar la NOM-009-STPS-2011 no es una tarea de memorización de cláusulas, sino la adopción de una 
                          <strong className="bg-green-200 px-2 py-1 rounded mx-1">filosofía de gestión de riesgos</strong>. 
                          Los 7 puntos clave forman un sistema de seguridad robusto y coherente.
                        </p>
                        
                        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl mb-6">
                          <h4 className="font-bold text-green-900 mb-4 text-lg">📊 Sistema de Seguridad Integral:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">1.</span>
                              <span><strong>Planificar</strong> meticulosamente el entorno</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">2.</span>
                              <span><strong>Priorizar</strong> controles colectivos sobre individuales</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">3.</span>
                              <span><strong>Usar el EPP</strong> como un sistema experto</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">4.</span>
                              <span><strong>Asegurar</strong> la integridad de cada andamio</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">5.</span>
                              <span><strong>Tener un plan de rescate viable</strong> antes de la caída</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">6.</span>
                              <span><strong>Capacitar formalmente</strong> para certificar competencia (DC-3)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold text-xl">7.</span>
                              <span><strong>Supervisar y registrar continuamente</strong> para garantizar disciplina</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-xl border-2 border-blue-300">
                          <h4 className="font-bold text-blue-900 mb-3 text-lg">💼 Transformación de Paradigma:</h4>
                          <p className="text-gray-800 leading-relaxed">
                            La implementación rigurosa de estos principios <strong className="text-blue-800">transforma la percepción de la seguridad</strong>. 
                            Deja de ser un centro de costos o un obstáculo para la producción y se convierte en una 
                            <strong className="bg-blue-200 px-2 py-1 rounded mx-1">inversión estratégica con retornos tangibles</strong>:
                          </p>
                          <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✅ Reducción drástica de accidentes evita costosos paros operativos</li>
                            <li>✅ Protege la reputación al demostrar compromiso real con la gente</li>
                            <li>✅ Garantiza el derecho fundamental: regresar a casa sano y salvo</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-orange-300 mt-6">
                      <p className="text-center text-xl font-bold text-orange-900">
                        🏆 Un supervisor que internaliza y aplica estos 7 pilares no solo cumple con una norma; 
                        se erige como un <span className="bg-orange-200 px-2 py-1 rounded">verdadero líder</span>, 
                        protector de su equipo y garante del éxito sostenible del proyecto.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Sección de Artículos Relacionados */}
                <section id="articulos-relacionados" className="mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-lg sm:text-xl md:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      📚 Artículos Relacionados
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-3 sm:p-4 md:p-6">
                      {relatedArticles.map((article, index) => (
                        <motion.div
                          key={article.id}
                          className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold
                              ${index === 0 ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                                index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
                                'bg-gradient-to-r from-blue-500 to-indigo-600'}`}>
                              {index === 0 ? '🦺' : index === 1 ? '🧗' : '🔧'}
                            </div>
                            <Badge className={`${index === 0 ? 'bg-orange-100 text-orange-800' :
                              index === 1 ? 'bg-purple-100 text-purple-800' :
                              'bg-blue-100 text-blue-800'}`}>
                              {article.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <span>📅 {article.publishDate}</span>
                            <span>⏱️ {article.readTime}</span>
                          </div>
                          
                          <a 
                            href={`/blog/${article.slug}`}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm tran sition-colors
                              ${index === 0 ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                                index === 1 ? 'bg-purple-500 hover:bg-purple-600 text-white' :
                                'bg-blue-500 hover:bg-blue-600 text-white'}`}
                          >
                            Leer Artículo →
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
            