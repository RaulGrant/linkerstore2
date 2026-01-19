'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, Flame, Calendar } from 'lucide-react';

const whyChooseUs = [
  {
    icono: 'Award',
    iconColor: '#FF0000',
    titulo: 'Certificados Válidos STPS',
    descripcion: 'Certificación reconocida oficialmente por la Secretaría del Trabajo'
  },
  {
    icono: 'GraduationCap',
    iconColor: '#00A651',
    titulo: 'Instructores Expertos',
    descripcion: 'Personal certificado con más de 10 años de experiencia'
  },
  {
    icono: 'Flame',
    iconColor: '#FF0000',
    titulo: 'Práctica Garantizada',
    descripcion: 'Ejercicios con equipo real de seguridad industrial'
  },
  {
    icono: 'Calendar',
    iconColor: '#00A651',
    titulo: 'Horarios Flexibles',
    descripcion: 'Cursos entre semana, fines de semana y en tu empresa'
  }
];

const iconMap = {
  Award,
  GraduationCap,
  Flame,
  Calendar
};

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
        ease: [0.43, 0.13, 0.23, 0.96] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF, rgba(0, 166, 81, 0.03))'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#1A1A1A' }}>
            ¿Por qué Capacitarte con AASI?
          </h2>
        </motion.div>

        {/* Grid de beneficios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icono as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                {/* Círculo con icono */}
                <motion.div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ backgroundColor: item.iconColor }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="h-12 w-12 text-white" />
                </motion.div>

                {/* Título */}
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  {item.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-base md:text-lg text-gray-600">
                  {item.descripcion}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
