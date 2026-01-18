'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Wrench, CheckCircle } from 'lucide-react';

const whyChooseUs = [
  {
    icon: Award,
    title: 'Personal Certificado',
    description: 'Técnicos e ingenieros con certificaciones vigentes y experiencia comprobada'
  },
  {
    icon: Shield,
    title: 'Cumplimiento Normativo',
    description: '100% apego a normativas mexicanas (NOM-STPS, NOM-ASEA, NOM-PROFEPA)'
  },
  {
    icon: Wrench,
    title: 'Equipo de Primera',
    description: 'Herramientas y maquinaria de última generación para trabajos especializados'
  },
  {
    icon: CheckCircle,
    title: 'Garantía de Calidad',
    description: 'Certificados de calidad en cada proyecto y garantía de satisfacción'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ¿Por qué confiar en AJRH Industrial?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencia, seguridad y cumplimiento garantizado
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whyChooseUs.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="text-center group">
                  {/* Icon Circle */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
                      <IconComponent className="h-12 w-12 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
