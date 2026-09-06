'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Award, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  duration: string;
  modality: string;
  icon: string;
  image: string;
  certification: string;
  description: string;
  cta: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Seguridad en el mantenimiento de las instalaciones eléctricas',
    duration: '8 horas',
    modality: 'Online',
    icon: '⚡',
    image: '/images/cenacap/courses/seguridad-electrica.png',
    certification: 'STPS',
    description: 'Prevención de riesgos y prácticas seguras para el mantenimiento de instalaciones eléctricas.',
    cta: 'Reserva tu lugar',
  },
  {
    id: '2',
    title: 'Operación de equipos de elevación personal',
    duration: '8 horas',
    modality: 'Online',
    icon: '🏗️',
    image: '/images/cenacap/courses/elevacion-personal.png',
    certification: 'STPS',
    description: 'Operación segura, inspección y prevención de riesgos en equipos de elevación personal.',
    cta: 'Tomar este curso',
  },
  {
    id: '3',
    title: 'Trabajos en espacios confinados',
    duration: '8 horas',
    modality: 'Online',
    icon: '🚧',
    image: '/images/cenacap/courses/espacios-confinados.jpg',
    certification: 'STPS',
    description: 'Procedimientos de entrada, trabajo y rescate en espacios confinados.',
    cta: 'Quiero más información',
  },
  {
    id: '4',
    title: 'Corte y Soldadura',
    duration: '8 horas',
    modality: 'Online',
    icon: '🔥',
    image: '/images/cenacap/courses/corte-y-soldadura.jpg',
    certification: 'STPS',
    description: 'Prácticas seguras para trabajos en caliente, corte y soldadura.',
    cta: 'Me apunto',
  },
  {
    id: '5',
    title: 'Mantenimiento, uso y manejo de extintores',
    duration: '8 horas',
    modality: 'Online',
    icon: '🧯',
    image: '/images/cenacap/courses/extintores.jpg',
    certification: 'STPS',
    description: 'Identificación, mantenimiento y uso correcto de extintores.',
    cta: 'Apartar mi lugar',
  },
  {
    id: '6',
    title: 'Trabajos en alturas',
    duration: '8 horas',
    modality: 'Online',
    icon: '🪜',
    image: '/images/cenacap/courses/trabajos-en-alturas.jpg',
    certification: 'STPS',
    description: 'Sistemas anticaídas, prevención y rescate para trabajos en alturas.',
    cta: 'Quiero inscribirme',
  },
  {
    id: '7', title: 'LOTO: Bloqueo y etiquetado de energías peligrosas', duration: '8 horas', modality: 'Online', icon: '🔒', image: '/images/cenacap/courses/loto.jpg', certification: 'STPS', description: 'Control seguro de energías peligrosas durante mantenimiento.', cta: 'Ver el programa'
  },
];

function CourseVisual({ course }: { course: Course }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!imageFailed) {
    return <img src={course.image} alt="" onError={() => setImageFailed(true)} className="h-full w-full object-cover" />;
  }

  return <span aria-label={course.title} className="text-6xl">{course.icon}</span>;
}

export default function CoursesSection() {
  const openWhatsApp = (course: string) => window.open(`https://wa.me/522461341074?text=${encodeURIComponent(`Hola, quiero saber más sobre el curso de ${course}.`)}`, '_blank');
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
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="relative h-full overflow-hidden border-2 border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 backdrop-blur-lg transition-all duration-300 group hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/30">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500" />
                <CardHeader className="pt-7">
                  <div className="relative mb-5 flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-orange-300/30 bg-orange-500/10 shadow-lg shadow-orange-950/30 transition-transform group-hover:scale-[1.02] sm:h-48">
                      <CourseVisual course={course} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    <Badge className="absolute right-3 top-3 border border-yellow-200/40 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-md">
                      {course.certification}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-yellow-200 sm:min-h-14">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 line-clamp-2 text-gray-300">
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

                  <div>
                    <Button
                      onClick={() => openWhatsApp(course.title)}
                      className="w-full rounded-xl border border-orange-200/50 bg-gradient-to-r from-orange-500 via-orange-500 to-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:-translate-y-1 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 hover:shadow-orange-500/50 sm:px-5 sm:text-base group/btn"
                    >
                      {course.cta}
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
          <Button size="lg" onClick={() => openWhatsApp('información general')} className="rounded-xl border border-orange-300/40 bg-gradient-to-r from-orange-500 to-red-600 px-8 font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 hover:from-orange-400 hover:to-red-500">Explorar opciones</Button>
        </motion.div>
      </div>
    </section>
  );
}
