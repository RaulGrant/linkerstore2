"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Hand, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroGuantesProps {
  showHeroCTAs: boolean;
  showSideCTAs: boolean;
}

export default function HeroGuantes({ showHeroCTAs, showSideCTAs }: HeroGuantesProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-500 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Side CTAs for large screens */}
      {showSideCTAs && (
        <>
          {/* Left CTA */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: showHeroCTAs ? 1 : 0, x: showHeroCTAs ? 0 : -100 }}
            transition={{ duration: 0.6 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
            style={{ minWidth: '280px' }}
          >
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-amber-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hand className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Protección Manual</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Encuentra guantes certificados para cada tipo de riesgo industrial
                  </p>
                  <motion.a
                    href="/catalogo"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Catálogo
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: showHeroCTAs ? 1 : 0, x: showHeroCTAs ? 0 : 100 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
            style={{ minWidth: '280px' }}
          >
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-amber-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Guías Técnicas</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Accede a manuales especializados de protección personal
                  </p>
                  <motion.a
                    href="/guias"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Guías
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm font-semibold">
              NOM-017-STPS-2008
            </Badge>
            <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm font-semibold">
              Protección Manual
            </Badge>
            <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm font-semibold">
              EN 388/374
            </Badge>
            <Badge className="bg-white/20 text-white border-0 px-4 py-2 text-sm font-semibold">
              Guía Técnica
            </Badge>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            Manual Técnico de
            <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Guantes de Trabajo
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Guía exhaustiva para la selección, uso y mantenimiento de guantes de protección personal 
            según normatividad mexicana y estándares internacionales
          </motion.p>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <AlertTriangle className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-orange-200 text-sm">de lesiones laborales afectan las manos</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">70%</div>
              <div className="text-orange-200 text-sm">se previenen con guantes certificados</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">$15K</div>
              <div className="text-orange-200 text-sm">costo promedio por lesión evitada</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/catalogo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl shadow-lg hover:bg-orange-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Hand className="w-6 h-6 mr-2" />
              Ver Guantes Certificados
            </motion.a>
            
            <motion.a
              href="/guias"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-6 h-6 mr-2" />
              Explorar Guías Técnicas
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 text-orange-200 text-sm"
          >
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Normativa NOM-017</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Estándares EN 388/374</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Información Actualizada 2024</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}