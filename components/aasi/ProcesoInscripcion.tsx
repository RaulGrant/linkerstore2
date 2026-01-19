'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, ClipboardCheck, CheckCircle } from 'lucide-react';

const pasos = [
  {
    numero: 1,
    icono: MessageSquare,
    iconColor: '#00A651',
    titulo: 'Contáctanos por WhatsApp',
    descripcion: 'Envíanos un mensaje con el curso de tu interés'
  },
  {
    numero: 2,
    icono: ClipboardCheck,
    iconColor: '#00A651',
    titulo: 'Recibe Información Detallada',
    descripcion: 'Te enviamos fechas, precios y forma de pago'
  },
  {
    numero: 3,
    icono: CheckCircle,
    iconColor: '#00A651',
    titulo: 'Asiste y Certifícate',
    descripcion: 'Acude a tu curso y recibe tu certificado'
  }
];

export default function ProcesoInscripcion() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#1A1A1A' }}>
            3 Simples Pasos para Inscribirte
          </h2>
        </motion.div>

        {/* Timeline horizontal desktop / vertical mobile */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop: horizontal */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
            {/* Línea conectora verde */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-12 left-0 right-0 h-1 origin-left"
              style={{ 
                backgroundColor: '#00A651',
                transform: 'translateY(-50%)',
                marginLeft: '16.66%',
                marginRight: '16.66%'
              }}
            />

            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                {/* Número grande en círculo rojo */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-white"
                  style={{ backgroundColor: '#FF0000' }}
                >
                  <span className="text-4xl font-black text-white">{paso.numero}</span>
                </motion.div>

                {/* Icono verde */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: paso.iconColor }}
                >
                  <paso.icono className="h-8 w-8 text-white" />
                </div>

                {/* Título */}
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  {paso.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-base md:text-lg text-gray-600">
                  {paso.descripcion}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-12 relative">
            {/* Línea conectora vertical verde */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-12 top-0 bottom-0 w-1 origin-top"
              style={{ backgroundColor: '#00A651' }}
            />

            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex gap-6"
              >
                <div className="flex-shrink-0">
                  {/* Número grande en círculo rojo */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                    style={{ backgroundColor: '#FF0000' }}
                  >
                    <span className="text-4xl font-black text-white">{paso.numero}</span>
                  </motion.div>
                </div>

                <div className="flex-1 pt-4">
                  {/* Icono verde */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg inline-flex"
                    style={{ backgroundColor: paso.iconColor }}
                  >
                    <paso.icono className="h-6 w-6 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                    {paso.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-base text-gray-600">
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
