import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import ArticleCard from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Shield, HardHat, Users, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guías de Seguridad Industrial | LinkerPro',
  description: 'Guías completas y detalladas sobre seguridad industrial, equipos de protección personal y normativas laborales.',
  keywords: 'guías seguridad industrial, manuales EPP, normativas seguridad, protocolos trabajo',
};

const guideCategories = [
  {
    icon: Shield,
    title: 'Equipos de Protección Personal',
    description: 'Guías completas sobre EPP, selección, uso y mantenimiento',
    count: 12,
    color: 'blue'
  },
  {
    icon: HardHat,
    title: 'Seguridad en Construcción',
    description: 'Protocolos y equipos específicos para la industria de la construcción',
    count: 8,
    color: 'orange'
  },
  {
    icon: Users,
    title: 'Capacitación y Formación',
    description: 'Materiales para entrenamientos y certificaciones en seguridad',
    count: 6,
    color: 'green'
  },
  {
    icon: Award,
    title: 'Normativas y Certificaciones',
    description: 'Guías sobre estándares internacionales y certificaciones',
    count: 4,
    color: 'purple'
  }
];

const featuredGuides = [
  {
    title: 'Guía Completa de Chalecos de Seguridad: Tipos, Usos y Normativas',
    excerpt: 'Todo lo que necesitas saber sobre chalecos de alta visibilidad: clasificaciones, materiales, normativas EN ISO 20471 y cómo elegir el adecuado para cada trabajo.',
    category: 'EPP',
    readTime: '12 min',
    publishDate: '15 Nov 2024',
    slug: 'guia-completa-chalecos-seguridad',
    featuredImage: '/images/products/chaleco.webp',
    views: 2350,
    isPopular: true,
    isNew: true
  },
  {
    title: 'Manual de Cascos de Seguridad: Protección Craneal en el Trabajo',
    excerpt: 'Guía detallada sobre cascos de protección: tipos de impactos, materiales, sistemas de sujeción, normativas EN 397 y mantenimiento preventivo.',
    category: 'EPP',
    readTime: '10 min',
    publishDate: '12 Nov 2024',
    slug: 'manual-cascos-seguridad-proteccion-craneal',
    featuredImage: '/images/products/casco.webp',
    views: 1890,
    isPopular: true
  },
  {
    title: 'Guía de Calzado de Seguridad: Protección Completa para tus Pies',
    excerpt: 'Aprende sobre los diferentes tipos de calzado de seguridad, características técnicas, normativas EN ISO 20345 y cómo elegir según el riesgo laboral.',
    category: 'EPP',
    readTime: '9 min',
    publishDate: '10 Nov 2024',
    slug: 'guia-calzado-seguridad-proteccion-pies',
    featuredImage: '/images/products/botas.webp',
    views: 1567
  },
  {
    title: 'Protección Respiratoria: Máscaras y Respiradores Industriales',
    excerpt: 'Guía completa sobre equipos de protección respiratoria: tipos de filtros, factores de protección, normativas EN 149 y EN 140.',
    category: 'EPP',
    readTime: '11 min',
    publishDate: '8 Nov 2024',
    slug: 'proteccion-respiratoria-mascaras-respiradores',
    featuredImage: '/images/blog/proteccion-respiratoria.jpg',
    views: 1245,
    isNew: true
  },
  {
    title: 'Guantes de Trabajo: Selección por Tipo de Riesgo y Aplicación',
    excerpt: 'Manual detallado sobre guantes de protección: resistencia química, mecánica, térmica, normativas EN 388 y EN 374.',
    category: 'EPP',
    readTime: '8 min',
    publishDate: '5 Nov 2024',
    slug: 'guantes-trabajo-seleccion-riesgo-aplicacion',
    featuredImage: '/images/products/guantes.webp',
    views: 987
  },
  {
    title: 'Normativas de Seguridad Industrial en España: Marco Legal 2024',
    excerpt: 'Guía actualizada sobre legislación española en prevención de riesgos laborales, Real Decreto 773/1997 y normativas europeas aplicables.',
    category: 'Normativas',
    readTime: '15 min',
    publishDate: '3 Nov 2024',
    slug: 'normativas-seguridad-industrial-espana-2024',
    featuredImage: '/images/blog/normativas-espana.jpg',
    views: 2156,
    isPopular: true
  }
];

const benefits = [
  'Guías verificadas por expertos en seguridad industrial',
  'Información actualizada según normativas vigentes',
  'Ejemplos prácticos y casos de uso reales',
  'Descargables en PDF para uso offline',
  'Actualizaciones constantes de contenido'
];

export default function GuiasPage() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Guías de 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {' '}Seguridad Industrial
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Manuales completos, actualizados y verificados por expertos para 
              profesionales de la seguridad industrial
            </p>

            {/* Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-8 py-4"
            >
              Explorar Guías
            </Button>
          </div>
        </div>
      </div>

      {/* Categorías de guías */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorías de Guías</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organizado por áreas de especialización para facilitar tu búsqueda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guideCategories.map((category, index) => {
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600',
              orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600',
              green: 'from-green-500 to-green-600 bg-green-50 text-green-600',
              purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600'
            };

            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-0 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[1]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <Badge className={`${colorClasses[category.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')}`}>
                    {category.count} guías
                  </Badge>
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    Ver todas →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guías destacadas */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Guías Destacadas</h2>
              <p className="text-gray-600">Las guías más completas y consultadas por profesionales</p>
            </div>
            <Button variant="outline">
              Ver Todas las Guías
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <ArticleCard
                key={guide.slug}
                {...guide}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas una guía específica?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Nuestro equipo de expertos puede crear contenido personalizado para tu empresa. 
            Contacta con nosotros para desarrollar guías específicas para tu sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-gray-100 font-bold"
            >
              Solicitar Guía Personalizada
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Contactar Expertos
            </Button>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
