'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonios = [
  {
    nombre: 'Juan Pérez',
    puesto: 'Supervisor de Obra',
    empresa: 'Constructora XYZ',
    curso: 'Seguridad en Construcción',
    rating: 5,
    testimonio: 'Excelente curso, muy práctico y profesional. Los instructores dominan el tema y las prácticas son reales. Totalmente recomendado.',
    foto: '/images/testimonios/placeholder-1.jpg'
  },
  {
    nombre: 'María López',
    puesto: 'Coordinadora HSE',
    empresa: 'Industrias del Golfo',
    curso: 'Uso y Manejo de Extintores',
    rating: 5,
    testimonio: 'Instructores muy preparados, certificación sin problemas. Material de calidad y atención personalizada. Volveré para otros cursos.',
    foto: '/images/testimonios/placeholder-2.jpg'
  },
  {
    nombre: 'Carlos Gómez',
    puesto: 'Ingeniero Civil',
    empresa: 'Proyectos Veracruz',
    curso: 'Seguridad en Alturas',
    rating: 5,
    testimonio: 'Material de primera y prácticas reales con equipo certificado. Aprendí técnicas que aplico diariamente en mi trabajo. Lo recomiendo 100%.',
    foto: '/images/testimonios/placeholder-3.jpg'
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonio = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'rgba(0, 166, 81, 0.05)' }}
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
            Lo que Dicen Nuestros Alumnos
          </h2>
        </motion.div>

        {/* Carrusel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Desktop: 3 testimonios visibles */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TestimonialCard testimonio={testimonio} />
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: 1 testimonio con navegación */}
          <div className="lg:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonio={testimonios[currentIndex]} />
            </motion.div>

            {/* Controles de navegación */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonio}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white"
                style={{ backgroundColor: '#00A651' }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              <div className="flex gap-2">
                {testimonios.map((_, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full transition-all"
                    style={{ 
                      backgroundColor: index === currentIndex ? '#00A651' : '#D1D5DB'
                    }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonio}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white"
                style={{ backgroundColor: '#00A651' }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonio }: { testimonio: typeof testimonios[0] }) {
  return (
    <Card 
      className="h-full shadow-lg hover:shadow-xl transition-shadow"
      style={{ boxShadow: '0 4px 20px rgba(0, 166, 81, 0.15)' }}
    >
      <CardContent className="p-6">
        {/* Foto de perfil */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 text-white text-2xl font-bold">
          {testimonio.nombre.split(' ').map(n => n[0]).join('')}
        </div>

        {/* Nombre y puesto */}
        <h4 className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>
          {testimonio.nombre}
        </h4>
        <p className="text-sm text-gray-600 mb-1">
          {testimonio.puesto}
        </p>
        <p className="text-sm font-semibold mb-4" style={{ color: '#00A651' }}>
          {testimonio.empresa}
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonio.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5" style={{ color: '#FFD700', fill: '#FFD700' }} />
          ))}
        </div>

        {/* Testimonio */}
        <p className="text-base text-gray-700 mb-4 italic">
          "{testimonio.testimonio}"
        </p>

        {/* Badge del curso */}
        <Badge 
          className="text-white font-semibold"
          style={{ backgroundColor: '#00A651' }}
        >
          {testimonio.curso}
        </Badge>
      </CardContent>
    </Card>
  );
}
