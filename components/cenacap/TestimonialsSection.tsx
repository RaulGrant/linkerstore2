'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Méndez',
    role: 'Supervisor de Seguridad',
    company: 'Grupo Industrial XYZ',
    text: 'La capacitación en trabajo en alturas cambió completamente mi perspectiva profesional. Los instructores son excelentes y el equipo de primera calidad. Totalmente recomendado.',
    rating: 5,
    image: '👨‍💼',
    course: 'Trabajo en Alturas',
  },
  {
    id: '2',
    name: 'Ana Rodríguez',
    role: 'Técnico en Seguridad',
    company: 'Construcciones ABC',
    text: 'Excelente centro de capacitación. La certificación CONOCER me abrió puertas laborales que no imaginaba. El contenido es actualizado y práctico.',
    rating: 5,
    image: '👩‍💼',
    course: 'Manejo de Extintores',
  },
  {
    id: '3',
    name: 'Roberto García',
    role: 'Jefe de Planta',
    company: 'Industrias del Norte',
    text: 'Capacité a todo mi equipo aquí y los resultados fueron inmediatos. Reducimos incidentes en un 80%. La inversión valió completamente la pena.',
    rating: 5,
    image: '👨‍🏭',
    course: 'Prevención de Incendios',
  },
  {
    id: '4',
    name: 'María Fernández',
    role: 'Coordinadora HSE',
    company: 'Petroquímica del Golfo',
    text: 'El curso de espacios confinados superó mis expectativas. Ejercicios realistas que me prepararon para situaciones reales en campo.',
    rating: 5,
    image: '👩‍🔧',
    course: 'Espacios Confinados',
  },
  {
    id: '5',
    name: 'Jorge Ramírez',
    role: 'Paramédico Industrial',
    company: 'Manufacturas del Bajío',
    text: 'La capacitación en primeros auxilios es la más completa que he tomado. Instructores con experiencia real y casos de estudio muy útiles.',
    rating: 5,
    image: '👨‍⚕️',
    course: 'Primeros Auxilios',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo Que Dicen
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Nuestros Alumnos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Miles de profesionales han transformado su carrera con nuestras capacitaciones
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-orange-400 fill-orange-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl text-gray-300 text-center mb-8 italic leading-relaxed">
                  "{currentTestimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="text-5xl mb-4">{currentTestimonial.image}</div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-orange-400 font-semibold mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {currentTestimonial.company}
                  </p>
                  <div className="inline-block bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-700">
                    Curso: {currentTestimonial.course}
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Small Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <h5 className="text-white font-semibold">{testimonial.name}</h5>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm line-clamp-3">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
