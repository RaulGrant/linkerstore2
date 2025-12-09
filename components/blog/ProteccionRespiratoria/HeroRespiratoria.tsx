"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Eye, Star, Wind } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroRespiratoriaProps {
  showHeroCTAs?: boolean;
  showSideCTAs?: boolean;
}

export default function HeroRespiratoria({ showHeroCTAs = true, showSideCTAs = false }: HeroRespiratoriaProps) {
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([]);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    // Screen size detection for banner visibility (24" = 1920px+)
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1920);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-green-600/5 to-teal-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 8 + (particle.id % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Side CTAs */}
      {showSideCTAs && isLargeScreen && (
      <div className="hidden xl:block">
        {/* Left Side CTA */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: showHeroCTAs ? 1 : 0, x: showHeroCTAs ? 0 : -100 }}
          transition={{ duration: showHeroCTAs ? 1.2 : 0.6, delay: showHeroCTAs ? 1.5 : 0 }}
          className="fixed left-4 z-30"
          style={{ top: 'calc(50% - 100px)', transform: 'translateY(-50%)', pointerEvents: showHeroCTAs ? 'auto' : 'none' }}
        >
          <div className="bg-gradient-to-b from-green-600 to-emerald-800 text-white p-6 rounded-2xl shadow-2xl w-80 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-bold text-xl mb-2">Catálogo Premium</h4>
              <p className="text-sm text-green-100 mb-4">
                Descubre nuestra colección completa de equipos de protección respiratoria certificados
              </p>
            </div>
            
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">😷</span>
                <div>
                  <div className="text-sm font-medium">120+ Productos</div>
                  <div className="text-xs text-green-200 opacity-80">
                    Respiradores certificados NOM-116
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">⭐</span>
                <div>
                  <div className="text-sm font-medium">Marcas Líderes</div>
                  <div className="text-xs text-green-200 opacity-80">
                    3M, MSA, Honeywell
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">🚚</span>
                <div>
                  <div className="text-sm font-medium">La mejor opción</div>
                  <div className="text-xs text-green-200 opacity-80">pensada para ti</div>
                </div>
              </div>
            </div>
            
            <motion.a
              href="/catalogo"
              className="w-full bg-white text-green-700 py-3 px-4 rounded-xl font-bold text-center block hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Catálogo Completo
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side CTA */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: showHeroCTAs ? 1 : 0, x: showHeroCTAs ? 0 : 100 }}
          transition={{ duration: showHeroCTAs ? 1.2 : 0.6, delay: showHeroCTAs ? 1.8 : 0 }}
          className="fixed right-4 z-30"
          style={{ top: 'calc(50% + 50px)', transform: 'translateY(-50%)', pointerEvents: showHeroCTAs ? 'auto' : 'none' }}
        >
          <div className="bg-gradient-to-b from-emerald-600 to-teal-800 text-white p-6 rounded-2xl shadow-2xl w-72 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-5">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💬</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Asesoría Técnica</h4>
              <p className="text-xs text-emerald-100 mb-4">
                ¿Necesitas ayuda para elegir el respirador ideal para tu industria?
              </p>
            </div>
            
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-center gap-2 text-emerald-100">
                <span>✓</span> Análisis de riesgos laborales
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <span>✓</span> Recomendaciones personalizadas
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <span>✓</span> Verificación de normativas
              </div>
            </div>
            
            <motion.a
              href="/contacto"
              className="w-full bg-white text-emerald-700 py-2.5 px-4 rounded-xl font-bold text-sm text-center block hover:bg-emerald-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Consulta
            </motion.a>
          </div>
        </motion.div>
      </div>
      )}

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badges */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">NOM-116-STPS-2009</Badge>
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-medium">Protección Respiratoria</Badge>
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium">Seguridad Industrial</Badge>
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-sm">Guía Técnica Completa</Badge>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Manual Técnico de{" "}
            <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
              Protección Respiratoria
            </span>
            <br />
            Industrial
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Guía completa sobre normativas mexicanas NOM-116, tipos de respiradores, factores de protección y criterios de selección para maximizar la protección respiratoria en el trabajo.
          </motion.p>

          {/* Meta info */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-green-200 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Actualizado 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>18 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>2,156 lecturas</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Normativas vigentes</span>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
              <div className="text-green-200 text-sm">Tipos de Filtros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95k</div>
              <div className="text-green-200 text-sm">Lesiones Respiratorias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-green-200 text-sm">Eficiencia de Filtrado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">30%</div>
              <div className="text-green-200 text-sm">de Enfermedades</div>
            </div>
          </motion.div>

          {/* Main CTAs */}
          {showHeroCTAs && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="/catalogo"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Wind className="w-6 h-6" />
                Ver Catálogo de Respiradores
              </motion.a>
              <motion.a
                href="#top-respiradores"
                className="inline-flex items-center justify-center gap-3 bg-green-600/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600/40 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-6 h-6" />
                Ver Productos Top
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}