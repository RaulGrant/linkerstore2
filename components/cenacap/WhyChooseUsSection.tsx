'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Wrench, Clock, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Instructores Certificados',
    description: 'Personal capacitador con amplia experiencia en seguridad industrial y certificaciones vigentes.',
    stat: '15+ años',
  },
  {
    icon: Award,
    title: 'Certificaciones Oficiales',
    description: 'Reconocimiento STPS, CONOCER y organismos internacionales que validan tu preparación.',
    stat: 'STPS/CONOCER',
  },
  {
    icon: Wrench,
    title: 'Equipo de Práctica Incluido',
    description: 'Herramientas y equipos profesionales para prácticas realistas durante la capacitación.',
    stat: '100% práctico',
  },
  {
    icon: Clock,
    title: 'Flexibilidad de Horarios',
    description: 'Cursos presenciales, online e híbridos adaptados a tu disponibilidad laboral.',
    stat: '24/7 disponible',
  },
];

const additionalBenefits = [
  'Material didáctico digital incluido',
  'Seguimiento post-capacitación',
  'Bolsa de trabajo exclusiva',
  'Descuentos por grupo',
  'Certificado digital inmediato',
  'Asesoría personalizada',
];

export default function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
            ¿Por Qué Elegir
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              CENACAP?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 15 años formando profesionales en seguridad industrial con los más altos estándares de calidad
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="bg-slate-800/50 backdrop-blur-lg border-2 border-slate-700 hover:border-orange-500/50 transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  {/* Icon with Gradient */}
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Stat Badge */}
                  <div className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {feature.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-orange-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-orange-400 mr-4" />
            <h3 className="text-3xl font-bold text-white">
              Beneficios Adicionales
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: Users, value: '500+', label: 'Alumnos Certificados' },
            { icon: Award, value: '25+', label: 'Cursos Disponibles' },
            { icon: TrendingUp, value: '98%', label: 'Tasa de Aprobación' },
            { icon: Shield, value: '100%', label: 'Satisfacción' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
