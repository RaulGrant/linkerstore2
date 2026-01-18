'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, ClipboardCheck, CheckCircle } from 'lucide-react';

const supervisionServices = [
  {
    id: '1',
    title: 'Seguridad en obras y proyectos',
    icon: Shield,
    description: 'Implementación de protocolos de seguridad industrial y supervisión de cumplimiento normativo.',
    certifications: ['NOM-019-STPS', 'NOM-030-STPS'],
    features: [
      'Elaboración de análisis de riesgos',
      'Implementación de medidas de seguridad',
      'Capacitación de personal',
      'Supervisión continua en obra'
    ]
  },
  {
    id: '2',
    title: 'Inspección y cumplimiento normativo',
    icon: ClipboardCheck,
    description: 'Auditorías y verificación de cumplimiento con normativas mexicanas (STPS, ASEA, PROFEPA).',
    certifications: ['Certificado ISO 45001'],
    features: [
      'Auditorías internas de seguridad',
      'Verificación de cumplimiento normativo',
      'Elaboración de reportes técnicos',
      'Asesoría en inspecciones oficiales'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function SupervisionSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ✅ SUPERVISIÓN INDUSTRIAL
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Control y seguridad en cada etapa de tu proyecto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {supervisionServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full border-2 border-gray-200 hover:border-green-600 hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 group">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-green-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.certifications.map((cert) => (
                        <Badge
                          key={cert}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        const ctaSection = document.getElementById('contacto');
                        if (ctaSection) {
                          ctaSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Solicitar Información
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
