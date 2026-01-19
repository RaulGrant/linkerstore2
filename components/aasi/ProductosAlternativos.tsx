'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mountain, HardHat, MessageCircle } from 'lucide-react';

const productosAlternativos = [
  {
    id: '2',
    titulo: 'Curso de Seguridad en Alturas',
    icono: 'Mountain',
    certificacion: 'NOM-009-STPS-2011',
    duracion: '16 horas teórico-prácticas',
    descripcion: 'Certificación para trabajo en alturas mayores a 1.80m con sistemas anticaídas',
    incluye: [
      'Certificación oficial STPS',
      'Prácticas con arnés y línea de vida',
      'Instructor certificado',
      'Equipo de protección incluido',
      'Reconocimiento de riesgos en altura',
      'Técnicas de rescate básico'
    ],
    whatsappCTA: 'https://wa.me/522464932347?text=Información%20del%20curso%20de%20Alturas'
  },
  {
    id: '3',
    titulo: 'Curso de Seguridad en Construcción',
    icono: 'HardHat',
    certificacion: 'NOM-031-STPS-2011',
    duracion: '12 horas',
    descripcion: 'Capacitación integral en seguridad para obras y proyectos de construcción',
    incluye: [
      'Certificación oficial',
      'Identificación de riesgos en obra',
      'Uso correcto de EPP',
      'Normatividad aplicable',
      'Prevención de accidentes',
      'Planes de emergencia en obra'
    ],
    whatsappCTA: 'https://wa.me/522464932347?text=Información%20del%20curso%20de%20Construcción'
  }
];

const iconMap = {
  Mountain,
  HardHat
};

export default function ProductosAlternativos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#1A1A1A' }}>
            Otros Cursos Disponibles
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Amplía tu certificación en seguridad industrial
          </p>
        </motion.div>

        {/* Grid de productos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {productosAlternativos.map((producto) => {
            const IconComponent = iconMap[producto.icono as keyof typeof iconMap];

            return (
              <motion.div
                key={producto.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 166, 81, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="h-full border-2 hover:border-4 transition-all duration-300"
                  style={{ borderColor: '#00A651' }}
                >
                  <CardContent className="p-8">
                    {/* Badge certificación */}
                    <Badge 
                      className="mb-4 text-white font-bold px-3 py-1"
                      style={{ backgroundColor: '#00A651' }}
                    >
                      {producto.certificacion}
                    </Badge>

                    {/* Icono grande */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(0, 166, 81, 0.1)' }}
                    >
                      <IconComponent className="h-12 w-12" style={{ color: '#00A651' }} />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                      {producto.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-base md:text-lg text-gray-600 mb-4">
                      {producto.descripcion}
                    </p>

                    {/* Duración */}
                    <p className="text-lg font-semibold mb-6" style={{ color: '#00A651' }}>
                      ⏱️ {producto.duracion}
                    </p>

                    {/* Lista de incluye */}
                    <div className="space-y-3 mb-8">
                      {producto.incluye.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#00A651' }} />
                          <span className="text-sm md:text-base text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botón WhatsApp */}
                    <Button
                      size="lg"
                      className="w-full text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
                      style={{ backgroundColor: '#00A651' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#008A44'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00A651'}
                      onClick={() => window.open(producto.whatsappCTA, '_blank')}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Inscribirme por WhatsApp
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
