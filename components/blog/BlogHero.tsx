'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

// Posiciones fijas para las partículas para evitar diferencias SSR/Client
const FIXED_PARTICLE_POSITIONS = [
  { left: 10, top: 20 },
  { left: 25, top: 60 },
  { left: 40, top: 15 },
  { left: 55, top: 75 },
  { left: 70, top: 30 },
  { left: 85, top: 55 },
  { left: 15, top: 80 },
  { left: 30, top: 40 },
  { left: 45, top: 70 },
  { left: 60, top: 25 },
  { left: 75, top: 85 },
  { left: 90, top: 45 },
  { left: 5, top: 50 },
  { left: 20, top: 10 },
  { left: 35, top: 90 },
  { left: 50, top: 35 },
  { left: 65, top: 65 },
  { left: 80, top: 20 },
  { left: 95, top: 75 },
  { left: 12, top: 35 }
];

export default function BlogHero({ title, subtitle, ctaText }: BlogHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && FIXED_PARTICLE_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          />
        ))}
      </div>

      {/* Elementos geométricos decorativos */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge de especialización */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100 text-sm font-medium mb-6"
          >
            <Shield className="h-4 w-4" />
            🛡️ Especialistas en Seguridad Industrial
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Estadísticas rápidas con emojis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="flex items-center gap-2 text-blue-100">
              <span className="text-xl">📚</span>
              <span className="text-lg font-semibold">100+ Artículos</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <span className="text-xl">🎯</span>
              <span className="text-lg font-semibold">Contenido Experto</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <span className="text-xl">👥</span>
              <span className="text-lg font-semibold">Guías Detalladas</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const target = document.getElementById('latest-articles') || 
                              document.getElementById('content') || 
                              document.querySelector('main') ||
                              document.querySelector('.container');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }
              }}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-black bg-white hover:bg-black hover:text-white hover:border-black px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              onClick={() => window.location.href = '/guias'}
            >
              Ver Guías 📖
            </Button>
          </motion.div>

          {/* Próximamente LinkerPro Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-12 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full px-6 py-3 text-orange-100 text-sm font-medium"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-orange-400 rounded-full"
            />
            🚀 Próximamente: LinkerPro - Encuentra lo que necesitas fácil y rápido
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator animado */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
