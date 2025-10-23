'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Shield,
  FileText,
  Users,
  Settings,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function AyudaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: Shield,
      title: 'Seguridad Industrial',
      description: 'Guías sobre EPP, normativas y mejores prácticas',
      articles: 15,
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Uso del Blog',
      description: 'Cómo navegar y aprovechar nuestro contenido',
      articles: 8,
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Cuenta y Perfil',
      description: 'Gestión de tu cuenta y configuración',
      articles: 6,
      color: 'bg-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Contacto y Soporte',
      description: 'Cómo obtener ayuda personalizada',
      articles: 4,
      color: 'bg-orange-500'
    }
  ];

  const faqs = [
    {
      category: 'General',
      question: '¿Es gratuito el acceso al blog y las guías?',
      answer: 'Sí, todo nuestro contenido sobre seguridad industrial es completamente gratuito. Nuestro objetivo es promover ambientes de trabajo más seguros mediante el acceso libre a información de calidad.'
    },
    {
      category: 'Contenido',
      question: '¿Quién escribe los artículos y guías?',
      answer: 'Nuestro contenido es creado por un equipo de expertos certificados en seguridad industrial, con más de 15 años de experiencia en el sector y certificaciones internacionales como NEBOSH, OHSAS 18001 e ISO 45001.'
    },
    {
      category: 'Contenido',
      question: '¿Con qué frecuencia se actualiza el contenido?',
      answer: 'Publicamos nuevo contenido semanalmente y revisamos nuestras guías técnicas trimestralmente para asegurar que estén actualizadas con las últimas normativas y mejores prácticas.'
    },
    {
      category: 'Productos',
      question: '¿Las recomendaciones de productos son imparciales?',
      answer: 'Sí. Aunque participamos en programas de afiliados, nuestras reseñas se basan únicamente en criterios técnicos objetivos. Siempre indicamos cuando un enlace es de afiliado de forma transparente.'
    },
    {
      category: 'Servicios',
      question: '¿Ofrecen consultoría personalizada?',
      answer: 'Sí, ofrecemos servicios de consultoría en seguridad industrial para empresas. Puedes contactarnos a través de nuestra página de contacto para solicitar información sobre nuestros servicios especializados.'
    },
    {
      category: 'Técnico',
      question: '¿Cómo puedo descargar las guías en PDF?',
      answer: 'Muchas de nuestras guías incluyen un botón de descarga en formato PDF. Esta funcionalidad está disponible para facilitar el acceso offline y la impresión para uso en campo.'
    },
    {
      category: 'Cuenta',
      question: '¿Necesito crear una cuenta para acceder al contenido?',
      answer: 'No, todo nuestro contenido es accesible sin crear cuenta. Sin embargo, próximamente ofreceremos funcionalidades premium para usuarios registrados como favoritos y contenido personalizado.'
    },
    {
      category: 'Normativas',
      question: '¿El contenido está actualizado con la legislación española?',
      answer: 'Absolutamente. Todas nuestras guías incluyen referencias a la legislación española vigente (Ley 31/1995 de PRL, RD 39/1997, etc.) y normativas europeas EN/ISO aplicables.'
    }
  ];

  const quickLinks = [
    { title: 'Guías de Seguridad Industrial', href: '/guias', icon: Shield },
    { title: 'Artículos del Blog', href: '/blog', icon: FileText },
    { title: 'Contactar Expertos', href: '/contacto', icon: MessageCircle },
    { title: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Users }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
                  <HelpCircle className="h-12 w-12" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Centro de
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {' '}Ayuda
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Encuentra respuestas rápidas a todas tus preguntas sobre seguridad industrial
              </p>

              {/* Barra de búsqueda */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar en preguntas frecuentes..."
                    className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Enlaces rápidos */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Accesos Rápidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={link.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <link.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{link.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Categorías de ayuda */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Categorías de Ayuda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${category.color} p-3 rounded-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <Badge variant="secondary">
                        {category.articles} artículos
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Preguntas Frecuentes */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {faq.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    {expandedFaq === index ? 
                      <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    }
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-600">
                Prueba con términos diferentes o contacta con nuestro equipo para ayuda personalizada.
              </p>
            </div>
          )}
        </motion.section>

        {/* Contacto para más ayuda */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de expertos en seguridad industrial está aquí para ayudarte. 
              Contacta con nosotros para consultas personalizadas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-blue-100">linkerpro.notifications@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Teléfono</h3>
                <p className="text-sm text-blue-100">+52 246 793 4968</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Horario</h3>
                <p className="text-sm text-blue-100">Lun-Vie 9:00-18:00</p>
              </div>
            </div>

            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contacto" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Contactar con Expertos
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Estado del proyecto */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <Card className="border-l-4 border-l-yellow-500 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Estado del Proyecto LinkerStore</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    Actualmente LinkerStore está en desarrollo. El blog y las guías están completamente funcionales, 
                    pero algunas funcionalidades avanzadas como cuentas de usuario y servicios premium estarán 
                    disponibles próximamente.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Blog Activo
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Guías Disponibles
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Clock className="h-3 w-3 mr-1" />
                      Cuentas de Usuario (Próximamente)
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </BlogLayout>
  );
}