"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, BookOpen, Building } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroNormativasProps {
  showHeroCTAs?: boolean;
}

export default function HeroNormativas({ showHeroCTAs = true }: HeroNormativasProps) {
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([]);
  const [isLargeMonitor, setIsLargeMonitor] = useState(false);

  useEffect(() => {
    // Check screen size for 24"+ monitors (1920px+)
    const checkScreenSize = () => {
      setIsLargeMonitor(window.innerWidth >= 1920);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Generate particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
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

      {/* Hero Side CTAs - SOLO en monitores 24"+ */}
      {isLargeMonitor && showHeroCTAs && (
        <>
          {/* Left Side CTA - Catálogo Premium */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="fixed left-4 top-1/3 transform -translate-y-1/2 z-30"
          >
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl w-80 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🛒</span>
                </div>
                <h4 className="font-bold text-xl mb-2">EPP Certificado</h4>
                <p className="text-sm text-blue-100 mb-4">Equipo de protección personal que cumple con NOM-STPS</p>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">📋</span>
                  <div>
                    <div className="text-sm font-medium">100% Certificados</div>
                    <div className="text-xs text-blue-200 opacity-80">Cumplimiento normativo garantizado</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">🏭</span>
                  <div>
                    <div className="text-sm font-medium">Para Tu Industria</div>
                    <div className="text-xs text-blue-200 opacity-80">Soluciones especializadas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">✅</span>
                  <div>
                    <div className="text-sm font-medium">Nuestra mejor selección</div>
                    <div className="text-xs text-blue-200 opacity-80">Para tu centro de trabajo</div>
                  </div>
                </div>
              </div>
              
              <a 
                href="/catalogo" 
                className="block w-full bg-white text-blue-600 px-4 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors text-center"
              >
                Explorar Catálogo →
              </a>
            </div>
          </motion.div>

          {/* Right Side CTA - Guías Técnicas */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.7 }}
            className="fixed right-4 top-1/3 transform -translate-y-1/2 z-30"
          >
            <div className="bg-gradient-to-b from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl w-80 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Guías Técnicas</h4>
                <p className="text-sm text-orange-100 mb-4">Manuales especializados de seguridad industrial</p>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">📋</span>
                  <div>
                    <div className="text-sm font-medium">Enlaces Oficiales</div>
                    <div className="text-xs text-orange-200 opacity-80">Descarga los recursos oficiales</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">🎯</span>
                  <div>
                    <div className="text-sm font-medium">Por Normativa</div>
                    <div className="text-xs text-orange-200 opacity-80">Guías específicas NOM-STPS</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">✅</span>
                  <div>
                    <div className="text-sm font-medium">Acceso Gratuito</div>
                    <div className="text-xs text-orange-200 opacity-80">Consulta libre de guías</div>
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
        </>
      )}

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
              Normatividad NOM-STPS
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              <Building className="w-4 h-4 mr-2" />
              Seguridad Industrial
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors">
              <BookOpen className="w-4 h-4 mr-2" />
              Guía Completa 2025
            </Badge>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              Normativas de Seguridad Industrial en México
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
          >
            Guía completa de las NOM-STPS: Marco legal, obligaciones patronales y cumplimiento normativo para la protección de tus trabajadores
          </motion.p>

          {/* Key statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">41+</div>
              <div className="text-sm text-blue-200">Normas NOM-STPS</div>
              <div className="text-xs text-blue-300 mt-1">Actualizadas 2025</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-blue-200">Cumplimiento Legal</div>
              <div className="text-xs text-blue-300 mt-1">Evita sanciones y clausuras</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">$2M+</div>
              <div className="text-sm text-blue-200">Multa Máxima</div>
              <div className="text-xs text-blue-300 mt-1">Por incumplimiento grave</div>
            </div>
          </motion.div>

          {/* Reading time & meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200 mb-8"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>15 min lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Actualizado 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Obligatorio para empresas</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/guias"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Ver Guías 
            </a>
            <a
              href="/catalogo"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Ver Catálogo 
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
