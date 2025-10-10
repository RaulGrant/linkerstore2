'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Users, 
  FileText,
  Search,
  Building,
  Target,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Download,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function ServiciosPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'consultoria',
      icon: Shield,
      title: 'Consultoría en Seguridad Industrial',
      price: 'Desde €299/día',
      description: 'Evaluación de riesgos laborales y diseño de planes de seguridad personalizados para tu empresa.',
      features: [
        'Evaluación completa de riesgos laborales',
        'Diseño de planes de prevención personalizados',
        'Análisis de cumplimiento normativo',
        'Recomendaciones de EPP específicos',
        'Informe detallado con plan de acción',
        'Seguimiento post-implementación'
      ],
      duration: '1-5 días',
      deliverables: [
        'Informe de evaluación de riesgos',
        'Plan de prevención personalizado', 
        'Lista de EPP recomendados',
        'Cronograma de implementación'
      ]
    },
    {
      id: 'auditoria',
      icon: Award,
      title: 'Auditoría de Cumplimiento Normativo',
      price: 'Desde €199/día',
      description: 'Verificación del cumplimiento de normativas ISO 45001, legislación española y europea de seguridad.',
      features: [
        'Auditoría ISO 45001 y OHSAS 18001',
        'Verificación legislación española (Ley 31/1995)',
        'Revisión normativas europeas EN/CE',
        'Análisis de documentación preventiva',
        'Evaluación de equipos y instalaciones',
        'Certificado de cumplimiento'
      ],
      duration: '1-3 días',
      deliverables: [
        'Informe de auditoría completo',
        'Lista de no conformidades',
        'Plan de acciones correctivas',
        'Certificado de cumplimiento'
      ]
    },
    {
      id: 'formacion',
      icon: Users,
      title: 'Formación Especializada',
      price: 'Desde €150/sesión',
      description: 'Cursos y talleres prácticos sobre uso correcto de EPP, normativas y mejores prácticas de seguridad.',
      features: [
        'Formación presencial y online',
        'Cursos personalizados por sector',
        'Talleres prácticos con EPP',
        'Material didáctico incluido',
        'Certificados de participación',
        'Seguimiento y evaluación'
      ],
      duration: '2-8 horas',
      deliverables: [
        'Material formativo personalizado',
        'Certificados de participación',
        'Manual de buenas prácticas',
        'Evaluación de competencias'
      ]
    },
    {
      id: 'contenido',
      icon: FileText,
      title: 'Contenido Técnico Personalizado',
      price: 'Desde €99/artículo',
      description: 'Creación de guías técnicas, manuales y contenido especializado para tu empresa o sector específico.',
      features: [
        'Artículos técnicos especializados',
        'Manuales de procedimientos',
        'Guías de selección de EPP',
        'Infografías y material visual',
        'Contenido web optimizado',
        'Revisión por expertos certificados'
      ],
      duration: '3-7 días',
      deliverables: [
        'Contenido en formato digital',
        'Material gráfico incluido',
        'Versión para web y PDF',
        'Derechos de uso comercial'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consulta Inicial',
      description: 'Contacta con nosotros describiendo tus necesidades específicas',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Evaluación y Propuesta',
      description: 'Analizamos tu caso y te enviamos una propuesta personalizada',
      icon: Search
    },
    {
      step: 3,
      title: 'Ejecución',
      description: 'Nuestros expertos certificados realizan el trabajo acordado',
      icon: Target
    },
    {
      step: 4,
      title: 'Entrega y Seguimiento',
      description: 'Recibe los entregables y seguimiento post-proyecto',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Ruiz',
      position: 'Director de RRHH',
      company: 'MetalCorp Industrias',
      text: 'La auditoría de LinkerPro nos ayudó a identificar 15 puntos de mejora críticos. Su enfoque profesional y conocimiento técnico son excepcionales.',
      rating: 5
    },
    {
      name: 'Ana López',
      position: 'Responsable de Prevención',
      company: 'ConstructTech S.L.',
      text: 'Los cursos de formación han mejorado significativamente la conciencia sobre seguridad de nuestro equipo. Muy recomendable.',
      rating: 5
    },
    {
      name: 'Miguel Torres',
      position: 'Gerente de Operaciones',
      company: 'Química Avanzada',
      text: 'El contenido técnico que crearon para nosotros es de la más alta calidad. Superó nuestras expectativas.',
      rating: 5
    }
  ];

  return (
    <BlogLayout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Building className="h-12 w-12" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Servicios
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {' '}Profesionales
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Consultoría especializada en seguridad industrial por expertos certificados
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-blue-200">Satisfacción del Cliente</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Servicios Principales */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios especializados en seguridad industrial, 
              adaptados a las necesidades específicas de cada empresa y sector.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <Card className={`border-2 transition-all duration-300 ${
                  selectedService === service.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-blue-300'
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <service.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <Badge className="mt-2 bg-green-100 text-green-800">
                            {service.price}
                          </Badge>
                        </div>
                      </div>
                      <ArrowRight className={`h-5 w-5 text-gray-400 transition-transform ${
                        selectedService === service.id ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                    </div>

                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t pt-4 space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold mb-2">Incluye:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Entregables:</h4>
                          <ul className="space-y-1">
                            {service.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <Download className="h-4 w-4 text-blue-500" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full" asChild>
                          <Link href="/contacto">
                            Solicitar Información
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Proceso de Trabajo */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un enfoque sistemático y profesional garantiza los mejores resultados en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonios */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-gray-600">Testimonios reales de empresas que han confiado en nuestros servicios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para Mejorar tu Seguridad Industrial?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Contacta con nuestros expertos certificados para una consulta gratuita y descubre 
            cómo podemos ayudar a tu empresa a crear ambientes de trabajo más seguros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contacto" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Solicitar Consulta Gratuita
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="tel:+34900123456" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Llamar Ahora: +34 900 123 456
              </a>
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            📧 info@linkerpro.com | 🕒 Lunes a Viernes, 9:00 - 18:00 CET
          </div>
        </motion.section>

        {/* Aviso sobre estado del proyecto */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <Card className="border-l-4 border-l-yellow-500 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Estado de los Servicios</h3>
                  <p className="text-yellow-700 text-sm">
                    Los servicios de consultoría están siendo preparados como parte del lanzamiento completo de LinkerPro. 
                    Actualmente puedes contactar con nuestro equipo para consultas informales y orientación gratuita 
                    sobre seguridad industrial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </BlogLayout>
  );
}