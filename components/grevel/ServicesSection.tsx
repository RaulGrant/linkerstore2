'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Paintbrush, 
  Palette, 
  Square, 
  Droplet, 
  Sparkles, 
  Home, 
  Umbrella,
  CheckCircle 
} from 'lucide-react';

const iconMap = {
  Paintbrush,
  Palette,
  Square,
  Droplet,
  Sparkles,
  Home,
  Umbrella
};

const services = [
  {
    id: '1',
    title: 'Yeso',
    icon: 'Paintbrush',
    description: 'Aplicación profesional de yeso para acabados lisos y duraderos',
    features: [
      'Yeso en muros y plafones',
      'Acabados finos y rústicos',
      'Nivelación perfecta'
    ]
  },
  {
    id: '2',
    title: 'Pintura',
    icon: 'Palette',
    description: 'Pinturas de alta calidad para interiores y exteriores',
    features: [
      'Pintura residencial y comercial',
      'Acabados mate, satinado y brillante',
      'Preparación de superficies'
    ]
  },
  {
    id: '3',
    title: 'Tablaroca',
    icon: 'Square',
    description: 'Instalación de sistemas de tablaroca para divisiones y plafones',
    features: [
      'Muros divisorios',
      'Plafones registrables',
      'Diseños personalizados'
    ]
  },
  {
    id: '4',
    title: 'Pasta',
    icon: 'Droplet',
    description: 'Aplicación de pasta para acabados perfectos',
    features: [
      'Resane de grietas y fisuras',
      'Nivelación de superficies',
      'Acabado liso'
    ]
  },
  {
    id: '5',
    title: 'Estuco',
    icon: 'Sparkles',
    description: 'Estucos decorativos y texturizados de alta gama',
    features: [
      'Estuco veneciano',
      'Texturas personalizadas',
      'Acabados brillantes'
    ]
  },
  {
    id: '6',
    title: 'Aplanados de Exterior e Interior',
    icon: 'Home',
    description: 'Aplanados profesionales para protección y estética',
    features: [
      'Aplanados de mortero',
      'Acabados rústicos y lisos',
      'Impermeabilizantes integrados'
    ]
  },
  {
    id: '7',
    title: 'Impermeabilización',
    icon: 'Umbrella',
    description: 'Sistemas de impermeabilización garantizados',
    features: [
      'Azoteas y terrazas',
      'Baños y cocinas',
      'Garantía de 5 años'
    ]
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
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white" ref={ref}>
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
            Nuestros Servicios Especializados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Aplicaciones profesionales con materiales de primera calidad
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className="h-full border-2 transition-all duration-300 group bg-white hover:-translate-y-2"
                  style={{ 
                    borderColor: '#C8B29E',
                    boxShadow: '0 2px 10px rgba(200, 178, 158, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2D8CFF';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 140, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#C8B29E';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(200, 178, 158, 0.1)';
                  }}
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="mb-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: 'rgba(200, 178, 158, 0.2)' }}
                      >
                        <IconComponent className="h-8 w-8" style={{ color: '#2D8CFF' }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
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
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#2D8CFF' }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      className="w-full text-white font-semibold transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#2D8CFF' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A6FD9'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D8CFF'}
                      onClick={() => window.open('https://wa.me/522291234567', '_blank')}
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
