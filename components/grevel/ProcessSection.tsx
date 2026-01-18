'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Hammer, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Phone,
  MapPin,
  Hammer,
  CheckCircle2
};

const processSteps = [
  {
    step: 1,
    title: 'Contacto Inicial',
    icon: 'Phone',
    description: 'Platícanos tu proyecto por WhatsApp o teléfono'
  },
  {
    step: 2,
    title: 'Visita y Cotización',
    icon: 'MapPin',
    description: 'Visitamos el sitio y elaboramos presupuesto detallado'
  },
  {
    step: 3,
    title: 'Ejecución del Proyecto',
    icon: 'Hammer',
    description: 'Iniciamos trabajos con seguimiento diario'
  },
  {
    step: 4,
    title: 'Entrega y Garantía',
    icon: 'CheckCircle2',
    description: 'Entrega formal con garantía por escrito'
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Beige Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: '#1A1A1A' }}
          >
            Nuestro Proceso
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un método simple y efectivo para transformar tu espacio
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute top-16 left-0 right-0 h-1 origin-left"
              style={{ backgroundColor: '#2D8CFF', top: '4rem' }}
            />

            <div className="grid grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                const iconColor = step.step === 4 ? '#FFC107' : '#2D8CFF';
                
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Step Circle */}
                    <div className="flex flex-col items-center mb-6">
                      <div 
                        className="w-32 h-32 rounded-full flex items-center justify-center mb-4 shadow-xl relative z-10"
                        style={{ 
                          backgroundColor: iconColor,
                          boxShadow: `0 10px 30px ${iconColor}40`
                        }}
                      >
                        <IconComponent className="h-16 w-16 text-white" />
                      </div>
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl -mt-6 relative z-20"
                        style={{ 
                          backgroundColor: 'white',
                          border: `4px solid ${iconColor}`,
                          color: iconColor
                        }}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Connection Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute left-16 top-0 bottom-0 w-1 origin-top"
              style={{ backgroundColor: '#2D8CFF' }}
            />

            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                const iconColor = step.step === 4 ? '#FFC107' : '#2D8CFF';
                
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="relative flex gap-6"
                  >
                    {/* Step Circle */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-32 h-32 rounded-full flex items-center justify-center shadow-xl relative"
                        style={{ 
                          backgroundColor: iconColor,
                          boxShadow: `0 10px 30px ${iconColor}40`
                        }}
                      >
                        <IconComponent className="h-12 w-12 text-white" />
                        <div 
                          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-black"
                          style={{ 
                            backgroundColor: 'white',
                            border: `4px solid ${iconColor}`,
                            color: iconColor
                          }}
                        >
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-4">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
