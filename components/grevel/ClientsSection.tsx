'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Home, 
  Hospital, 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  Utensils, 
  MoreHorizontal 
} from 'lucide-react';

const iconMap = {
  Home,
  Hospital,
  Building2,
  ShoppingBag,
  Briefcase,
  Utensils,
  MoreHorizontal
};

const clientTypes = [
  {
    id: '1',
    title: 'Casas Residenciales y Departamentos',
    icon: 'Home',
    description: 'Remodelaciones y acabados para tu hogar'
  },
  {
    id: '2',
    title: 'Hospitales',
    icon: 'Hospital',
    description: 'Acabados sanitarios y especializados'
  },
  {
    id: '3',
    title: 'Instituciones de Gobierno',
    icon: 'Building2',
    description: 'Proyectos para sector público'
  },
  {
    id: '4',
    title: 'Tiendas Retail',
    icon: 'ShoppingBag',
    description: 'Diseño y construcción de espacios comerciales'
  },
  {
    id: '5',
    title: 'Oficinas',
    icon: 'Briefcase',
    description: 'Espacios corporativos modernos'
  },
  {
    id: '6',
    title: 'Hoteles, Restaurantes, Bares',
    icon: 'Utensils',
    description: 'Ambientes únicos para hostelería'
  },
  {
    id: '7',
    title: 'Otros Sectores',
    icon: 'MoreHorizontal',
    description: 'Soluciones personalizadas'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Wave Patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M0 100 Q 50 50, 100 100 T 200 100 V 200 H 0 Z" fill="#C8B29E"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M0 100 Q 50 150, 100 100 T 200 100 V 0 H 0 Z" fill="#C8B29E"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            ¿A Quién Atendemos?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencia en diversos sectores y necesidades
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {clientTypes.map((client) => {
            const IconComponent = iconMap[client.icon as keyof typeof iconMap];
            return (
              <motion.div key={client.id} variants={itemVariants}>
                <div 
                  className="p-6 rounded-xl text-center transition-all duration-300 cursor-pointer group"
                  style={{ 
                    backgroundColor: 'rgba(200, 178, 158, 0.1)',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 140, 255, 0.2)';
                    e.currentTarget.style.borderColor = '#2D8CFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'white' }}
                    >
                      <IconComponent className="h-8 w-8" style={{ color: '#2D8CFF' }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold mb-2" style={{ color: '#1A1A1A' }}>
                    {client.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600">
                    {client.description}
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
