"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Shield, Eye, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroManualProps {
  showHeroCTAs?: boolean;
}

export default function HeroManual({ showHeroCTAs = true }: HeroManualProps) {
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
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
      <div className="hidden xl:block">
        {/* Left Side CTA */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: showHeroCTAs ? 1 : 0, x: showHeroCTAs ? 0 : -100 }}
          transition={{ duration: showHeroCTAs ? 1.2 : 0.6, delay: showHeroCTAs ? 1.5 : 0 }}
          className="fixed left-4 z-30"
          style={{ top: 'calc(50% - 100px)', transform: 'translateY(-50%)', pointerEvents: showHeroCTAs ? 'auto' : 'none' }}
        >
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl w-80 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-bold text-xl mb-2">Catálogo Premium</h4>
              <p className="text-sm text-blue-100 mb-4">Descubre nuestra colección completa de cascos certificados</p>
            </div>
            
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">🛡️</span>
                <div>
                  <div className="text-sm font-medium">100+ Productos</div>
                  <div className="text-xs text-blue-200 opacity-80">Cascos certificados NOM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">⭐</span>
                <div>
                  <div className="text-sm font-medium">Marcas Líderes</div>
                  <div className="text-xs text-blue-200 opacity-80">3M, MSA, Honeywell, Brady</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">🚚</span>
                <div>
                  <div className="text-sm font-medium">La mejor opción</div>
                  <div className="text-xs text-blue-200 opacity-80">pensada para ti</div>
                </div>
              </div>
            </div>
            
            <a 
              href="/catalogo" 
              className="block w-full bg-white text-blue-600 px-4 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors text-center"
            >
              Explorar Tienda →
            </a>
          </div>
        </motion.div>

        {/* Right Side CTA */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: showHeroCTAs ? 1 : 0, x: showHeroCTAs ? 0 : 100 }}
          transition={{ duration: showHeroCTAs ? 1.2 : 0.6, delay: showHeroCTAs ? 1.7 : 0 }}
          className="fixed right-4 z-30"
          style={{ top: 'calc(50% - 100px)', transform: 'translateY(-50%)', pointerEvents: showHeroCTAs ? 'auto' : 'none' }}
        >
          <div className="bg-gradient-to-b from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl w-80 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-bold text-xl mb-2">Guías Técnicas</h4>
              <p className="text-sm text-orange-100 mb-4">Accede a nuestra biblioteca de manuales especializados</p>
            </div>
            
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">📝</span>
                <div>
                  <div className="text-sm font-medium">Manuales y guías</div>
                  <div className="text-xs text-orange-200 opacity-80">Innovadores y actualizados</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">🎯</span>
                <div>
                  <div className="text-sm font-medium">Especializados</div>
                  <div className="text-xs text-orange-200 opacity-80">Por industria y equipo</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <span className="text-lg">✅</span>
                <div>
                  <div className="text-sm font-medium">Gratuitos</div>
                  <div className="text-xs text-orange-200 opacity-80">Acceso libre y completo</div>
                </div>
              </div>
            </div>
            
            <a 
              href="/guias" 
              className="block w-full bg-white text-orange-600 px-4 py-3 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors text-center"
            >
              Ver Todas las Guías →
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Category badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              <Shield className="w-4 h-4 mr-2" />
              Seguridad Industrial
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              <Star className="w-4 h-4 mr-2" />
              Manual Técnico
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              📋 NOM-115-STPS-2009
            </Badge>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          >
            Manual Completo de{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Cascos de Seguridad
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto"
          >
            Protección craneal efectiva y cumplimiento normativo en México. 
            Guía técnica completa basada en{" "}
            <span className="font-bold text-yellow-300">normativa oficial mexicana</span> 
            {" "}y mejores prácticas de la industria.
          </motion.p>

          {/* Meta information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-10 text-blue-200"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Diciembre 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">18 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span className="text-sm font-medium">Guía Técnica Oficial</span>
            </div>
          </motion.div>

          {/* Action button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.a
              href="#top-productos"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-6 h-6 mr-2 inline" />
              Ver Cascos Recomendados
            </motion.a>
          </motion.div>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {[
              {
                icon: "📋",
                title: "Normativa NOM",
                description: "Basado en NOM-115-STPS-2009 y legislación vigente mexicana"
              },
              {
                icon: "⭐",
                title: "Top 5 Productos",
                description: "Cascos certificados recomendados por expertos en seguridad"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}