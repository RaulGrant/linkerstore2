'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, MessageCircle, Phone, Mail, CheckCircle, Clock } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

const contactInfo = {
  whatsapp: '522464932347',
  whatsappLink: 'https://wa.me/522464932347',
  email: 'contacto@aasi.com.mx',
  horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM'
};

export default function MegaCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Fondo con imagen y overlay rojo */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)'
        }}
      />
      <div className="absolute inset-0 bg-black opacity-15" />

      {/* Partículas flotantes */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Card central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-4" style={{ borderColor: '#FFD700' }}>
            <div className="p-8 md:p-12 text-center">
              {/* Icono grande */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                style={{ backgroundColor: '#00A651' }}
              >
                <Shield className="h-12 w-12 text-white" />
              </motion.div>

              {/* Título blanco sobre rojo (fuera del card) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{ color: '#1A1A1A' }}>
                  ¿Listo para Certificarte en Seguridad Industrial?
                </h2>
                <p className="text-xl md:text-2xl font-bold text-gray-700">
                  Únete a cientos de profesionales certificados
                </p>
              </motion.div>

              {/* Destacado de urgencia */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6"
              >
                <p className="text-2xl font-bold mb-4" style={{ color: '#FF0000' }}>
                  ⏰ La oferta 2x1 termina en:
                </p>
                <CountdownTimer targetHours={48} size="medium" color="red" />
              </motion.div>

              {/* Botón ENORME pulsante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-8"
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
                    onClick={() => window.open(contactInfo.whatsappLink, '_blank')}
                  >
                    <MessageCircle className="mr-3 h-8 w-8" />
                    📲 INSCRIBIRME AHORA POR WHATSAPP
                  </Button>
                </motion.div>
              </motion.div>

              {/* Información de contacto */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="space-y-4 mb-6"
              >
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <MessageCircle className="h-6 w-6" style={{ color: '#00A651' }} />
                  <span className="font-semibold text-lg">WhatsApp: {contactInfo.whatsapp}</span>
                </div>

                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Mail className="h-6 w-6" style={{ color: '#00A651' }} />
                  <span className="font-semibold text-lg">{contactInfo.email}</span>
                </div>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <Clock className="h-6 w-6" style={{ color: '#00A651' }} />
                  <span className="text-base">{contactInfo.horario}</span>
                </div>
              </motion.div>

              {/* Garantía repetida */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="pt-6 border-t-2 border-gray-200"
              >
                <p className="text-lg font-bold flex items-center justify-center gap-2" style={{ color: '#00A651' }}>
                  <CheckCircle className="h-6 w-6" />
                  100% Satisfacción Garantizada o tu dinero de vuelta
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
