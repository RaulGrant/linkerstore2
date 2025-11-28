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
  Clock,
  Filter,
  TrendingUp,
  Star,
  History,
  X,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function AyudaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

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

  // Preguntas populares y sugerencias
  const popularQuestions = [
    'chalecos de seguridad',
    'normativas mexicanas',
    'EPP obligatorio',
    'precios en México',
    'certificaciones ISO'
  ];

  const searchSynonyms = {
    'epp': ['equipo', 'protección', 'personal', 'seguridad'],
    'chaleco': ['vest', 'alta visibilidad', 'reflectante'],
    'norma': ['normativa', 'regulación', 'estándar', 'certificación'],
    'méxico': ['mexicano', 'nacional', 'nom'],
    'precio': ['costo', 'valor', 'económico', 'barato']
  };

  const categoryColors = {
    'General': 'bg-blue-100 text-blue-800',
    'Contenido': 'bg-green-100 text-green-800',
    'Productos': 'bg-purple-100 text-purple-800',
    'Normativas': 'bg-orange-100 text-orange-800',
    'Técnico': 'bg-red-100 text-red-800',
    'Cuenta': 'bg-gray-100 text-gray-800'
  };

  const faqs = [
    {
      category: 'General',
      question: '¿Es gratuito el acceso al blog y las guías?',
      answer: 'Sí, todo nuestro contenido sobre seguridad industrial es completamente gratuito. Nuestro objetivo es promover ambientes de trabajo más seguros mediante el acceso libre a información de calidad especializada para el mercado mexicano.',
      keywords: ['gratis', 'costo', 'precio', 'acceso', 'contenido'],
      popular: true
    },
    {
      category: 'Contenido',
      question: '¿Quién escribe los artículos y guías?',
      answer: 'Nuestro contenido es creado por un equipo de expertos certificados en seguridad industrial, con más de 15 años de experiencia en el sector mexicano y certificaciones internacionales como OHSAS 18001, ISO 45001 e ISO 14001.',
      keywords: ['autores', 'expertos', 'certificados', 'experiencia', 'ohsas', 'iso'],
      popular: false
    },
    {
      category: 'Contenido',
      question: '¿Con qué frecuencia se actualiza el contenido?',
      answer: 'Publicamos nuevo contenido semanalmente y revisamos nuestras guías técnicas trimestralmente para asegurar que estén actualizadas con las últimas normativas oficiales mexicanas (NOM-STPS) e internacionales (ISO/OHSAS).',
      keywords: ['actualización', 'frecuencia', 'semanal', 'trimestral', 'nuevo'],
      popular: true
    },
    {
      category: 'Productos',
      question: '¿Las recomendaciones de productos son imparciales?',
      answer: 'Sí. Aunque participamos en programas de afiliados, nuestras reseñas se basan únicamente en criterios técnicos objetivos y disponibilidad en México. Siempre indicamos cuando un enlace es de afiliado de forma transparente.',
      keywords: ['imparcial', 'afiliados', 'reseñas', 'técnico', 'transparente'],
      popular: false
    },
    {
      category: 'Normativas',
      question: '¿El contenido está actualizado con la legislación mexicana?',
      answer: 'Absolutamente. Todas nuestras guías incluyen referencias a la legislación mexicana vigente (Ley Federal del Trabajo, NOM-STPS), normativas internacionales ISO aplicables y estándares OHSAS reconocidos en México.',
      keywords: ['legislación', 'mexicana', 'nom-stps', 'iso', 'ohsas', 'vigente'],
      popular: true
    },
    {
      category: 'Productos',
      question: '¿Los productos recomendados están disponibles en México?',
      answer: 'Sí, todos los productos que recomendamos están disponibles para compra en México a través de plataformas confiables como Mercado Libre.'
    },
    {
      category: 'Normativas',
      question: '¿Qué normativas oficiales mexicanas cubren en sus artículos?',
      answer: 'Cubrimos todas las NOM-STPS vigentes incluyendo NOM-017-STPS (EPP), NOM-009-STPS (Trabajos en altura), NOM-020-STPS (Recipientes sometidos a presión), NOM-113-STPS (Calzado de seguridad), entre otras, complementadas con estándares ISO y OHSAS.'
    },
    {
      category: 'Contenido',
      question: '¿Tienen guías específicas sobre chalecos de seguridad y EPP?',
      answer: 'Sí, tenemos guías completas sobre chalecos de seguridad (incluyendo normativa ANSI/ISEA 107), arneses para trabajo en altura, calzado industrial, cascos, y todo tipo de EPP. Cada guía incluye recomendaciones de productos disponibles en México.'
    },
    {
      category: 'Técnico',
      question: '¿Cómo eligen los productos que analizan en sus reseñas?',
      answer: 'Seleccionamos productos basándonos en: 1) Disponibilidad confirmada en México, 2) Cumplimiento de normativas oficiales (NOM-STPS, ISO, OHSAS), 3) Relación calidad-precio, 4) Reputación del fabricante, y 5) Feedback de usuarios mexicanos verificados.'
    },
    {
      category: 'Normativas',
      question: '¿Cubren las diferencias entre normativas internacionales y mexicanas?',
      answer: 'Definitivamente. Explicamos claramente las diferencias entre estándares internacionales (ISO, OHSAS, ANSI) y su aplicación en México, así como qué normativas NOM-STPS son obligatorias y cuáles son recomendaciones complementarias.'
    },
    {
      category: 'Contenido',
      question: '¿Tienen contenido sobre industrias específicas de México?',
      answer: 'Sí, creamos contenido especializado para las principales industrias mexicanas: petrolera, minería, construcción, manufactura automotriz, agroindustria, y servicios. Cada sector tiene consideraciones específicas de seguridad que abordamos detalladamente.'
    }
  ];

  const quickLinks = [
    { title: 'Guías de Seguridad Industrial', href: '/guias', icon: Shield },
    { title: 'Artículos del Blog', href: '/blog', icon: FileText },
    { title: 'Contactar Expertos', href: '/contacto', icon: MessageCircle },
    { title: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Users }
  ];

  // Función de búsqueda inteligente
  const smartSearch = (query: string, faq: any) => {
    if (!query.trim()) return true;
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const searchableText = `${faq.question} ${faq.answer} ${faq.category} ${faq.keywords?.join(' ') || ''}`.toLowerCase();
    
    // Búsqueda directa
    const directMatch = searchTerms.every(term => searchableText.includes(term));
    
    // Búsqueda con sinónimos
    const synonymMatch = searchTerms.some(term => {
      const synonyms = searchSynonyms[term] || [];
      return synonyms.some(synonym => searchableText.includes(synonym));
    });
    
    return directMatch || synonymMatch;
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = smartSearch(searchQuery, faq);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(faq.category);
    return matchesSearch && matchesCategory;
  });

  // Ordenar por relevancia (preguntas populares primero si no hay búsqueda)
  const sortedFaqs = filteredFaqs.sort((a, b) => {
    if (!searchQuery) {
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    }
    return 0;
  });

  // Obtener categorías únicas
  const availableCategories = [...new Set(faqs.map(faq => faq.category))];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && !searchHistory.includes(query.trim())) {
      setSearchHistory(prev => [query.trim(), ...prev.slice(0, 4)]);
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    let highlightedText = text;
    
    searchTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
    });
    
    return highlightedText;
  };

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

        {/* Preguntas Frecuentes con Buscador Avanzado */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
          
          {/* Buscador inteligente mejorado */}
          <div className="max-w-4xl mx-auto mb-8 space-y-6">
            {/* Barra de búsqueda principal */}
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => {setSearchFocus(true); setShowSuggestions(true)}}
                  onBlur={() => setTimeout(() => {setSearchFocus(false); setShowSuggestions(false)}, 200)}
                  placeholder="Buscar en preguntas frecuentes... (ej: chalecos, normativas, precios)"
                  className="pl-12 pr-12 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl shadow-sm transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => {setSearchQuery(''); setSelectedCategories([]);}}
                    className="absolute right-4 top-4 h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Sugerencias de búsqueda */}
              {showSuggestions && (searchQuery.length > 0 || searchHistory.length > 0) && (
                <div className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-xl border border-gray-100 mt-2 z-10 max-h-80 overflow-y-auto">
                  {/* Historial de búsqueda */}
                  {searchHistory.length > 0 && searchQuery.length === 0 && (
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <History className="h-4 w-4" />
                        <span>Búsquedas recientes</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearch(item)}
                            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Preguntas populares */}
                  {searchQuery.length === 0 && (
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>Búsquedas populares</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {popularQuestions.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearch(item)}
                            className="px-3 py-1 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors flex items-center gap-1"
                          >
                            <Lightbulb className="h-3 w-3" />
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Filtros por categoría */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                <Filter className="h-4 w-4" />
                <span>Filtrar por:</span>
              </div>
              <div className="flex gap-2">
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                    {selectedCategories.includes(category) && (
                      <X className="h-3 w-3 ml-1 inline" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Estadísticas de resultados */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  {sortedFaqs.length} resultado{sortedFaqs.length !== 1 ? 's' : ''}
                  {searchQuery && ` para "${searchQuery}"`}
                </span>
                {selectedCategories.length > 0 && (
                  <span className="flex items-center gap-1 text-blue-600">
                    <Filter className="h-3 w-3" />
                    {selectedCategories.length} categoría{selectedCategories.length !== 1 ? 's' : ''} seleccionada{selectedCategories.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              {(searchQuery || selectedCategories.length > 0) && (
                <button
                  onClick={() => {setSearchQuery(''); setSelectedCategories([]);}}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <X className="h-3 w-3" />
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {/* Resultados de preguntas */}
          <div className="max-w-4xl mx-auto space-y-4">
            {sortedFaqs.map((faq, index) => {
              const originalIndex = faqs.findIndex(f => f.question === faq.question);
              return (
                <Card key={originalIndex} className={`border-l-4 transition-all duration-300 hover:shadow-lg ${
                  faq.popular && !searchQuery ? 'border-l-orange-400 bg-gradient-to-r from-orange-50 to-transparent' : 'border-l-blue-500'
                }`}>
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(originalIndex)}
                      className="w-full p-6 text-left hover:bg-gray-50/50 transition-colors flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs font-medium ${categoryColors[faq.category] || 'bg-gray-100 text-gray-800'}`}
                          >
                            {faq.category}
                          </Badge>
                          {faq.popular && !searchQuery && (
                            <Badge className="bg-orange-100 text-orange-700 text-xs flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <h3 
                          className="font-semibold text-gray-900 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: highlightText(faq.question, searchQuery) }}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        {expandedFaq === originalIndex ? 
                          <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        }
                      </div>
                    </button>
                    {expandedFaq === originalIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-6 pb-6"
                      >
                        <div className="bg-gray-50 rounded-lg p-4 border-l-2 border-l-blue-200">
                          <p 
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: highlightText(faq.answer, searchQuery) }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Estado vacío mejorado */}
          {sortedFaqs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {searchQuery 
                  ? `No pudimos encontrar preguntas relacionadas con "${searchQuery}". Prueba con términos diferentes o más generales.`
                  : 'No hay preguntas que coincidan con los filtros seleccionados.'
                }
              </p>
              
              {/* Sugerencias cuando no hay resultados */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Prueba buscando:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularQuestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(suggestion)}
                      className="px-4 py-2 text-sm bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center gap-1"
                    >
                      <Zap className="h-3 w-3" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-blue-100">linkerpro.notifications@gmail.com</p>
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

       
      </div>
    </BlogLayout>
  );
}