'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Award, ArrowRight } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  duration: string;
  modality: string;
  price: string;
  icon: string;
  certification: string;
  description: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Uso y Manejo de Extintores',
    duration: '8 horas',
    modality: 'Presencial',
    price: 'Consultar',
    icon: '🧯',
    certification: 'STPS',
    description: 'Capacitación teórico-práctica en identificación, uso y mantenimiento de extintores.',
  },
  {
    id: '2',
    title: 'Trabajo en Alturas',
    duration: '16 horas',
    modality: 'Presencial',
    price: 'Consultar',
    icon: '🪜',
    certification: 'STPS + CONOCER',
    description: 'Curso certificado con prácticas en sistemas anticaídas y rescate en alturas.',
  },
  {
    id: '3',
    title: 'Primeros Auxilios',
    duration: '12 horas',
    modality: 'Híbrido',
    price: 'Consultar',
    icon: '🩹',
    certification: 'Cruz Roja',
    description: 'Atención de emergencias médicas en el lugar de trabajo.',
  },
  {
    id: '4',
    title: 'Manejo de Sustancias Peligrosas',
    duration: '10 horas',
    modality: 'Online',
    price: 'Consultar',
    icon: '☣️',
    certification: 'STPS',
    description: 'Identificación y manejo seguro de materiales peligrosos según NOM-018.',
  },
  {
    id: '5',
    title: 'Prevención de Incendios',
    duration: '6 horas',
    modality: 'Presencial',
    price: 'Consultar',
    icon: '🚒',
    certification: 'Bomberos',
    description: 'Estrategias de prevención y combate de incendios en instalaciones industriales.',
  },
  {
    id: '6',
    title: 'Espacios Confinados',
    duration: '12 horas',
    modality: 'Presencial',
    price: 'Consultar',
    icon: '🔒',
    certification: 'STPS + OSHA',
    description: 'Procedimientos de entrada, trabajo y rescate en espacios confinados.',
  },
];

export default function CoursesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="cursos" className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
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
          <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/50 mb-4">
            Certificaciones Oficiales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Cursos de
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Seguridad Industrial
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Programas de capacitación certificados que cumplen con las normativas mexicanas e internacionales
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 hover:border-orange-500/50 transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <Badge className="bg-orange-500 text-white font-semibold">
                      {course.certification}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-orange-400" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                      <span className="text-sm">{course.modality}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="w-4 h-4 mr-2 text-orange-400" />
                      <span className="text-sm">Certificación Incluida</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">
                      {course.price}
                    </span>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-orange-500 hover:to-orange-600 text-white group/btn"
                    >
                      Más Info
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-300 mb-6">
            ¿No encuentras el curso que buscas?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/50"
          >
            Ver Catálogo Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
