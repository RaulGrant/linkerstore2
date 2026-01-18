'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, Wrench, CheckCircle } from 'lucide-react';

const iconMap = {
  Search,
  FileText,
  Wrench,
  CheckCircle
};

const workProcess = [
  {
    step: 1,
    title: 'Diagnóstico',
    icon: 'Search',
    description: 'Evaluación inicial y análisis detallado de requerimientos del proyecto'
  },
  {
    step: 2,
    title: 'Propuesta',
    icon: 'FileText',
    description: 'Cotización detallada, plan de trabajo y cronograma de actividades'
  },
  {
    step: 3,
    title: 'Ejecución',
    icon: 'Wrench',
    description: 'Implementación del proyecto con supervisión continua y control de calidad'
  },
  {
    step: 4,
    title: 'Entrega',
    icon: 'CheckCircle',
    description: 'Entrega formal con certificación de calidad y garantía de servicio'
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un método probado para garantizar el éxito de tu proyecto
          </p>
        </motion.div>

        {/* Timeline for Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute top-16 left-0 right-0 h-1 bg-green-600 origin-left"
              style={{ top: '4rem' }}
            />

            <div className="grid grid-cols-4 gap-8 relative">
              {workProcess.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
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
                      <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-green-200 relative z-10">
                        <IconComponent className="h-16 w-16 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-white border-4 border-green-600 rounded-full flex items-center justify-center font-black text-green-600 text-xl -mt-6 relative z-20">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
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

        {/* Timeline for Mobile/Tablet */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Connection Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute left-16 top-0 bottom-0 w-1 bg-green-600 origin-top"
            />

            <div className="space-y-12">
              {workProcess.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
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
                      <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-200 relative">
                        <IconComponent className="h-12 w-12 text-white" />
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-green-600 rounded-full flex items-center justify-center font-black text-green-600">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
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
