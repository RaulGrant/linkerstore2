'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hammer, Zap, Package, Cable, Construction, CheckCircle } from 'lucide-react';

const iconMap = {
  Hammer,
  Zap,
  Package,
  Cable,
  Construction
};

const industrialServices = [
  {
    id: '1',
    title: 'Pailería y Estructura',
    icon: 'Hammer',
    description: 'Fabricación, montaje y mantenimiento de estructuras metálicas industriales.',
    features: [
      'Fabricación de tanques y recipientes',
      'Estructuras metálicas a medida',
      'Refuerzos estructurales',
      'Mantenimiento preventivo y correctivo'
    ],
    color: '#5FA635'
  },
  {
    id: '2',
    title: 'Instalaciones Eléctricas y Mecánicas',
    icon: 'Zap',
    description: 'Instalación y mantenimiento de sistemas eléctricos y mecánicos industriales.',
    features: [
      'Subestaciones eléctricas',
      'Sistemas de control y automatización',
      'Mantenimiento preventivo y correctivo',
      'Puesta en marcha de equipos'
    ],
    color: '#5FA635'
  },
  {
    id: '3',
    title: 'Montajes Industriales y Laminación',
    icon: 'Package',
    description: 'Montaje de equipos industriales y procesos de laminación especializada.',
    features: [
      'Montaje de maquinaria pesada',
      'Alineación de equipos rotativos',
      'Procesos de laminación',
      'Instalación de sistemas de transmisión'
    ],
    color: '#5FA635'
  },
  {
    id: '4',
    title: 'Tubería y Fibra Óptica',
    icon: 'Cable',
    description: 'Instalación y mantenimiento de sistemas de tubería industrial y redes de fibra óptica.',
    features: [
      'Tubería de proceso (acero, acero inoxidable)',
      'Redes de fibra óptica industrial',
      'Pruebas hidrostáticas y neumáticas',
      'Instalación de válvulas y accesorios'
    ],
    color: '#5FA635'
  },
  {
    id: '5',
    title: 'Obras Civiles',
    icon: 'Construction',
    description: 'Construcción y remodelación de infraestructura industrial.',
    features: [
      'Cimentaciones y bases de concreto',
      'Pisos industriales',
      'Ampliaciones y modificaciones',
      'Excavaciones y terracerías'
    ],
    color: '#5FA635'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ✅ SERVICIOS INDUSTRIALES
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para tu industria
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industrialServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full border-2 border-gray-200 hover:border-green-600 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-2 transition-all duration-300 group bg-white">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-green-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
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
                      Más Información
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
