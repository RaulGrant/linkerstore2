'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MessageCircle, FileText, Star } from 'lucide-react';

const productoGanador = {
  titulo: 'Curso de Uso y Manejo de Extintores',
  badge: '🔥 CURSO MÁS VENDIDO',
  certificacion: 'NOM-002-STPS-2010',
  duracion: '8 horas teórico-prácticas',
  imagen: '/images/cursos/extintor-curso.jpg',
  beneficios: [
    'Certificado oficial con validez STPS',
    'Prácticas con extintores reales (PQS, CO2, Agua)',
    'Instructor certificado por la STPS',
    'Material didáctico incluido',
    '8 horas de capacitación teórico-práctica',
    'Reconocimiento de tipos de fuego',
    'Técnicas de extinción seguras'
  ],
  whatsappCTA: 'https://wa.me/522464932347?text=Hola,%20quiero%20información%20del%20curso%20de%20Extintores'
};

export default function HeroProductoGanador() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden py-16 lg:py-24">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300A651' fill-opacity='1'%3E%3Cpath d='M30 5l5 10h10l-8 7 3 10-10-6-10 6 3-10-8-7h10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Logo AASI */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Image
                src="/images/brands/asi.png"
                alt="AASI - Asesoría y Adiestramiento en Seguridad Industrial"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </motion.div>

            {/* Badge pulsante */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-6 inline-block"
            >
              <Badge 
                className="text-white font-bold text-sm px-4 py-2 shadow-lg"
                style={{ backgroundColor: '#FF0000' }}
              >
                {productoGanador.badge}
              </Badge>
            </motion.div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{ color: '#1A1A1A' }}>
              {productoGanador.titulo}
            </h1>

            {/* Subtítulo verde */}
            <p className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#00A651' }}>
              Certifícate y cumple con la {productoGanador.certificacion}
            </p>

            {/* Lista de beneficios */}
            <div className="space-y-3 mb-8">
              {productoGanador.beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: '#00A651' }} />
                  <span className="text-base md:text-lg text-gray-700">{beneficio}</span>
                </motion.div>
              ))}
            </div>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#FF0000' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CC0000'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF0000'}
                  onClick={() => window.open(productoGanador.whatsappCTA, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Inscribirme por WhatsApp
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-bold text-lg px-8 py-6 border-2 transition-all"
                  style={{ 
                    borderColor: '#00A651',
                    color: '#00A651'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00A651';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#00A651';
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Ver Detalles del Curso
                </Button>
              </motion.div>
            </motion.div>

            {/* Badge de confianza */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-2 text-gray-600"
            >
              <Star className="h-5 w-5" style={{ color: '#FFD700', fill: '#FFD700' }} />
              <span className="font-semibold">+500 profesionales capacitados</span>
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A651' }}>
                    <FileText className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-xl font-bold text-gray-700">Curso de Extintores</p>
                  <p className="text-gray-600 mt-2">Capacitación Certificada STPS</p>
                </div>
              </div>

              {/* Badges flotantes */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-4 right-4"
              >
                <Badge className="text-white font-bold px-4 py-2 shadow-lg" style={{ backgroundColor: '#00A651' }}>
                  {productoGanador.duracion}
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-4 left-4"
              >
                <Badge className="text-white font-bold px-4 py-2 shadow-lg" style={{ backgroundColor: '#00A651' }}>
                  {productoGanador.certificacion}
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
