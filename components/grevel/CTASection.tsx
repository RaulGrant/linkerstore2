'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundColor: '#C8B29E' }}>
          {/* Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-900/80" style={{ backgroundColor: 'rgba(45, 140, 255, 0.85)' }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Card Container */}
          <div 
            className="p-8 md:p-12 rounded-3xl"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6"
              style={{ color: '#1A1A1A' }}
            >
              ¿Listo para transformar tu espacio?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-center mb-12 text-gray-600"
            >
              Comunícate con nosotros y recibe una cotización sin compromiso
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {/* WhatsApp Button */}
              <Button
                size="lg"
                className="text-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#2D8CFF',
                  boxShadow: '0 10px 30px rgba(45, 140, 255, 0.4)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A6FD9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D8CFF'}
                onClick={() => window.open('https://wa.me/522472544357?text=Hola, me interesa solicitar una cotización', '_blank')}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp
              </Button>

              {/* Phone Button */}
              <Button
                size="lg"
                className="text-white font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#FFC107',
                  boxShadow: '0 10px 30px rgba(255, 193, 7, 0.4)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFB300'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFC107'}
                onClick={() => window.location.href = 'tel:+522291234567'}
              >
                <Phone className="mr-2 h-6 w-6" />
                Llamar Ahora
              </Button>

              {/* Email Button */}
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-lg px-8 py-6 border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: '#2D8CFF',
                  color: '#2D8CFF'
                }}
                onClick={() => window.location.href = 'mailto:contacto@interioresgrevel.com'}
              >
                <Mail className="mr-2 h-6 w-6" />
                Email
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 pt-8 border-t-2 text-center"
              style={{ borderColor: '#C8B29E' }}
            >
              <p className="text-gray-600 mb-2">
                <strong style={{ color: '#1A1A1A' }}>Teléfono:</strong> +52 (229) 123-4567
              </p>
              <p className="text-gray-600 mb-2">
                <strong style={{ color: '#1A1A1A' }}>Email:</strong> contacto@interioresgrevel.com
              </p>
              <p className="text-gray-600">
                <strong style={{ color: '#1A1A1A' }}>Horario:</strong> Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
