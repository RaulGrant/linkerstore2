'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Shield, MessageCircle, DollarSign } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    iconColor: '#FFC107',
    title: 'Experiencia Comprobada',
    description: '+10 años transformando espacios en Veracruz'
  },
  {
    icon: Shield,
    iconColor: '#2D8CFF',
    title: 'Calidad Garantizada',
    description: 'Garantía escrita en todos nuestros servicios'
  },
  {
    icon: MessageCircle,
    iconColor: '#2D8CFF',
    title: 'Asesoría Personalizada',
    description: 'Te acompañamos desde el diseño hasta la entrega'
  },
  {
    icon: DollarSign,
    iconColor: '#FFC107',
    title: 'Mejores Precios',
    description: 'Cotizaciones competitivas sin comprometer calidad'
  }
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: '#1A1A1A' }}
          >
            ¿Por qué Interiores Grevel?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tu mejor elección para proyectos de remodelación y construcción
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: feature.iconColor === '#FFC107' 
                        ? 'rgba(255, 193, 7, 0.2)' 
                        : 'rgba(45, 140, 255, 0.2)'
                    }}
                  >
                    <IconComponent className="h-12 w-12" style={{ color: feature.iconColor }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
