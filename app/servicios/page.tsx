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
      price: 'Desde $5,999 MXN/día',
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
      price: 'Desde $3,999 MXN/día',
      description: 'Verificación del cumplimiento de normativas ISO 45001, Normas Oficiales Mexicanas (NOM) y legislación mexicana de seguridad.',
      features: [
        'Auditoría ISO 45001 y OHSAS 18001',
        'Verificación cumplimiento NOM-STPS mexicanas',
        'Revisión normativas internacionales aplicables',
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
      price: 'Desde $2,999 MXN/sesión',
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
      price: 'Desde $1,999 MXN/artículo',
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
      name: 'Carlos Ruiz Hernández',
      position: 'Director de Seguridad',
      company: 'Industrias Monterrey SA de CV',
      text: 'LinkerPro nos ayudó a cumplir con todas las NOM mexicanas de seguridad. Su consultoría identificó 18 puntos críticos de mejora y ahora tenemos cero accidentes laborales.',
      rating: 5
    },
    {
      name: 'Ana Patricia López',
      position: 'Responsable de Prevención',
      company: 'Construcciones del Bajío',
      text: 'Los cursos de capacitación sobre uso correcto de EPP han transformado la cultura de seguridad de nuestra empresa. Excelente inversión.',
      rating: 5
    },
    {
      name: 'Miguel Torres García',
      position: 'Gerente de Operaciones',
      company: 'Petroquímica Mexicana',
      text: 'El contenido técnico personalizado que desarrollaron para nuestros procesos químicos superó todas nuestras expectativas. Muy profesionales.',
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
                Consultoría especializada en seguridad industrial por expertos certificados en México
              </p>
              
              {/* Botones de CTA mejorados */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consulta Gratuita
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Catálogo
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
                >
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-blue-200">Años en México</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                >
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm text-blue-200">Empresas Atendidas</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
                >
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-blue-200">Cumplimiento NOM</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
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

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                            asChild
                          >
                            <Link href="/contacto" className="flex items-center justify-center gap-2">
                              <MessageCircle className="h-5 w-5" />
                              Solicitar Cotización Gratuita
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contacto" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Consulta Gratuita Inmediata
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Link href="tel:+525512345678" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar Ahora
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              linkerpro.notifications@gmail.com
            </div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Lunes a Viernes, 9:00 - 18:00 (Horario de México)
            </div>
          </div>
        </motion.section>

  
      </div>
    </BlogLayout>
  );
}