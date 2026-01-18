'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Droplets, Zap, CheckCircle } from 'lucide-react';

const maintenanceServices = [
  {
    id: '1',
    title: 'Plomería',
    icon: Droplets,
    iconColor: '#FFC107',
    description: 'Instalación, reparación y mantenimiento de sistemas hidráulicos',
    features: [
      'Instalación de tuberías',
      'Reparación de fugas',
      'Cambio de muebles sanitarios',
      'Destapado de drenajes',
      'Calentadores y bombas'
    ],
    available247: true
  },
  {
    id: '2',
    title: 'Instalaciones Eléctricas',
    icon: Zap,
    iconColor: '#FFC107',
    description: 'Servicios eléctricos certificados y seguros',
    features: [
      'Instalaciones residenciales y comerciales',
      'Tableros y centros de carga',
      'Iluminación LED',
      'Contactos y apagadores',
      'Mantenimiento preventivo'
    ],
    available247: true
  }
];

export default function MaintenanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
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
            Mantenimiento e Instalaciones
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas para tu hogar o negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {maintenanceServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              >
                <Card 
                  className="h-full border-2 transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    borderColor: '#2D8CFF',
                    boxShadow: '0 4px 20px rgba(45, 140, 255, 0.15)'
                  }}
                >
                  {/* 24/7 Badge */}
                  {service.available247 && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge 
                        className="text-white font-bold"
                        style={{ backgroundColor: '#FFC107' }}
                      >
                        Servicio 24/7
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)' }}
                      >
                        <IconComponent className="h-10 w-10" style={{ color: service.iconColor }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#2D8CFF' }} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      className="w-full text-white font-bold text-lg py-6 transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: '#2D8CFF',
                        boxShadow: '0 4px 15px rgba(45, 140, 255, 0.3)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A6FD9'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D8CFF'}
                      onClick={() => window.open('https://wa.me/522291234567', '_blank')}
                    >
                      Solicitar Servicio
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
