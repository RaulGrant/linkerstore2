import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  Mail, 
  Phone,
  MapPin,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Expertos en Seguridad Industrial | LinkerStore',
  description: 'Conoce a LinkerStore, tu fuente confiable de información sobre seguridad industrial y equipos de protección personal. Expertos comprometidos con tu seguridad.',
  keywords: 'sobre linkerstore, equipo seguridad industrial, expertos EPP, misión seguridad laboral',
};

const teamMembers = [
  {
    name: 'Carlos Rodríguez',
    role: 'Director de Seguridad Industrial',
    experience: '15+ años',
    image: '/images/team/carlos.jpg',
    certifications: ['CSP', 'OHST', 'ISO 45001'],
    bio: 'Especialista en prevención de riesgos laborales con más de 15 años de experiencia en la industria.'
  },
  {
    name: 'Ana María López',
    role: 'Especialista en EPP',
    experience: '12+ años',
    image: '/images/team/ana.jpg',
    certifications: ['CIH', 'CSP', 'NEBOSH'],
    bio: 'Experta en equipos de protección personal y normativas internacionales de seguridad.'
  },
  {
    name: 'Miguel Torres',
    role: 'Ingeniero de Seguridad',
    experience: '10+ años',
    image: '/images/team/miguel.jpg',
    certifications: ['PE', 'CSP', 'STS'],
    bio: 'Ingeniero especializado en análisis de riesgos y diseño de sistemas de seguridad industrial.'
  }
];

const values = [
  {
    icon: Shield,
    title: 'Seguridad Primero',
    description: 'La seguridad de los trabajadores es nuestra máxima prioridad en todo lo que hacemos.'
  },
  {
    icon: Award,
    title: 'Excelencia Técnica',
    description: 'Proporcionamos información precisa y actualizada basada en las mejores prácticas.'
  },
  {
    icon: Users,
    title: 'Compromiso Social',
    description: 'Trabajamos para crear ambientes laborales más seguros para todos.'
  },
  {
    icon: Target,
    title: 'Innovación Continua',
    description: 'Buscamos constantemente nuevas formas de mejorar la seguridad industrial.'
  }
];

const achievements = [
  { number: '50,000+', label: 'Profesionales Alcanzados' },
  { number: '500+', label: 'Artículos Publicados' },
  { number: '15+', label: 'Años de Experiencia' },
  { number: '98%', label: 'Satisfacción de Usuarios' }
];

const certifications = [
  'ISO 45001 - Sistemas de Gestión de Seguridad',
  'OHSAS 18001 - Seguridad y Salud Ocupacional',
  'NEBOSH - Certificación Internacional',
  'IOSH - Institution of Occupational Safety',
  'CSP - Certified Safety Professional'
];

export default function SobreNosotrosPage() {
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
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Users className="h-12 w-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre 
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {' '}LinkerStore
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Tu fuente confiable de información sobre seguridad industrial 
              y equipos de protección personal
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              En LinkerStore, nos dedicamos a proporcionar información confiable, 
              actualizada y práctica sobre seguridad industrial. Nuestro objetivo 
              es ayudar a profesionales y empresas a crear ambientes de trabajo 
              más seguros a través del conocimiento especializado.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creemos que la información de calidad es la base de la prevención 
              de accidentes laborales y que cada trabajador merece regresar 
              seguro a casa al final del día.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Visión</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Aspiramos a ser la plataforma líder en educación sobre seguridad 
              industrial en el mundo hispanohablante, reconocida por la calidad 
              y precisión de nuestro contenido.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Visualizamos un futuro donde cada profesional tenga acceso a 
              información actualizada sobre seguridad industrial, contribuyendo 
              así a la reducción significativa de accidentes laborales.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y compromiso con la seguridad industrial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Nuestro Impacto</h2>
            <p className="text-blue-100">Números que reflejan nuestro compromiso con la seguridad</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

      

        {/* Certificaciones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones y Acreditaciones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo mantiene las certificaciones más importantes del sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes preguntas?</h2>
              <p className="text-gray-600">
                Estamos aquí para ayudarte con cualquier consulta sobre seguridad industrial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">linkerpro.notifications@gmail.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600">+52 246 793 4968</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Horario</h3>
                <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contactar con Nuestro Equipo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
