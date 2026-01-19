'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Flame } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

const oferta2x1 = {
  titulo: 'PROMOCIÓN ESPECIAL 2x1',
  subtitulo: 'Llévate 2 Cursos al Precio de 1',
  badge: '⚡ OFERTA LIMITADA - SOLO 48 HORAS',
  tituloCombo: 'Corte y Soldadura + Uso y Manejo de Extintores',
  lugaresDisponibles: 12,
  incluye: [
    'Curso de Corte y Soldadura (16 horas)',
    'Curso de Uso y Manejo de Extintores (8 horas)',
    '2 Certificados oficiales STPS',
    'Equipo de práctica incluido',
    'Material didáctico de ambos cursos',
    'Instructor certificado',
    'Garantía de satisfacción 100%'
  ],
  whatsappCTA: 'https://wa.me/522464932347?text=Quiero%20aprovechar%20la%20oferta%202x1'
};

export default function OfertaUrgencia2x1() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Fondo con gradiente rojo */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)'
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-10" />

      {/* Partículas flotantes rojas */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge pulsante superior */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <Badge className="bg-yellow-400 text-black font-black text-base sm:text-lg px-6 py-3 shadow-2xl">
              {oferta2x1.badge}
            </Badge>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <CountdownTimer targetHours={48} size="large" color="red" />
        </motion.div>

        {/* Título blanco sobre rojo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            🎁 {oferta2x1.titulo}
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white">
            {oferta2x1.subtitulo}
          </p>
        </motion.div>

        {/* Card blanca con la oferta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-4" style={{ borderColor: '#FFD700' }}>
            <CardContent className="p-8 md:p-12">
              {/* Título del combo */}
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#1A1A1A' }}>
                {oferta2x1.tituloCombo}
              </h3>

              {/* Lista de lo que incluye */}
              <div className="space-y-4 mb-8">
                {oferta2x1.incluye.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: '#00A651' }} />
                    <span className="text-base md:text-lg text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Botón CTA ENORME */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center mb-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Button
                    size="lg"
                    className="w-full text-white font-black text-xl md:text-2xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all"
                    style={{ backgroundColor: '#FF0000' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CC0000'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF0000'}
                    onClick={() => window.open(oferta2x1.whatsappCTA, '_blank')}
                  >
                    <Flame className="mr-3 h-8 w-8" />
                    APROVECHAR OFERTA AHORA
                  </Button>
                </motion.div>
              </motion.div>

              {/* Texto de urgencia */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-center space-y-2"
              >
                <p className="text-lg font-bold" style={{ color: '#FF0000' }}>
                  ⚠️ Solo quedan {oferta2x1.lugaresDisponibles} lugares disponibles
                </p>
                <p className="text-base font-semibold flex items-center justify-center gap-2" style={{ color: '#00A651' }}>
                  <CheckCircle className="h-5 w-5" />
                  100% Satisfacción Garantizada o tu dinero de vuelta
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
