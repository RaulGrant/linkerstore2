'use client';

import { useState, useEffect } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  Sun,
  Moon,
  Zap,
  Info,
  ChevronDown,
  ExternalLink,
  Star,
  ShoppingCart,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GuiaChalecosSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSection, setVisibleSection] = useState('');

  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'guia-completa-chalecos-seguridad');
    trackBlogView(articleId, 'Guía Completa de Chalecos de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  // Efecto para la barra de progreso de lectura y detección de sección visible
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detectar sección visible para navegación
      const sections = ['header', 'caracteristicas', 'productos', 'comparacion', 'faq', 'conclusion'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Datos para gráficos de visibilidad
  const visibilityChartData = {
    labels: ['Clase 1', 'Clase 2', 'Clase 3'],
    datasets: [{
      label: 'Área de Material Reflectante (m²)',
      data: [0.10, 0.13, 0.20],
      backgroundColor: ['#FEF3C7', '#FED7AA', '#FECACA'],
      borderColor: ['#F59E0B', '#EA580C', '#DC2626'],
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          color: '#1F2937',
          font: { family: "'Inter', sans-serif", size: 12 }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return value + ' m²';
          }
        }
      }
    }
  };

  // Preguntas frecuentes
  const faqs = [
    {
      question: '¿Qué significa que un chaleco sea "Clase 2" según ANSI?',
      answer: 'Que un chaleco sea "Clase 2" según la norma ANSI/ISEA 107 significa que está diseñado y certificado para ofrecer un nivel de visibilidad adecuado en entornos de trabajo con riesgo moderado. Específicamente, es para zonas donde los trabajadores están expuestos a tráfico vehicular con velocidades que oscilan entre 40 km/h y 80 km/h. Para obtener esta certificación, el chaleco debe cumplir con requisitos mínimos de área para sus materiales: al menos 0.50 metros cuadrados de material de fondo fluorescente (para visibilidad diurna) y 0.13 metros cuadrados de material retrorreflectante (para visibilidad nocturna). En resumen, es una garantía de que la prenda proporciona un nivel de visibilidad sustancialmente mayor que un chaleco no certificado.'
    },
    {
      question: '¿Cuál es la diferencia entre un chaleco de poliéster y uno de gabardina?',
      answer: 'La principal diferencia radica en el balance entre ligereza/confort y durabilidad/resistencia. Un chaleco de poliéster es ligero, económico y a menudo se presenta en formato de malla, lo que lo hace muy transpirable e ideal para climas cálidos o húmedos en México. Es perfecto para tareas que no implican un alto desgaste físico del material. Por otro lado, un chaleco de gabardina, que usualmente es de 100% algodón o una mezcla de algodón-poliéster, es significativamente más grueso, pesado y resistente. Está diseñado para el uso rudo, soportando la abrasión y los enganches del trabajo diario en construcción o industria pesada, y a menudo se asocia con roles de supervisión por su apariencia más robusta y profesional.'
    },
    {
      question: '¿Puedo personalizar un chaleco con el logo de mi empresa?',
      answer: 'Sí, la personalización de chalecos de seguridad es una práctica muy común y ofrecida por muchos proveedores en México, especialmente en plataformas como Mercado Libre. El método más habitual es el bordado. Esto permite a las empresas uniformar a su personal, mejorar la identificación en el sitio de trabajo y reforzar la imagen de marca. Sin embargo, es crucial asegurarse de que el logo o nombre bordado no se coloque sobre las cintas reflectantes, ya que esto podría obstruir el material de alta visibilidad y potencialmente anular el cumplimiento de la norma ANSI/ISEA 107.'
    },
    {
      question: '¿Cada cuánto tiempo se debe cambiar un chaleco de seguridad?',
      answer: 'No existe una fecha de caducidad estricta, ya que la vida útil de un chaleco depende de la frecuencia de uso, el tipo de trabajo y la exposición a elementos como el sol y los productos químicos. Sin embargo, su efectividad protectora es limitada. La regla general es reemplazarlo cuando presente signos claros de desgaste que comprometan su función. Debes cambiar tu chaleco si: 1) El color fluorescente de fondo está visiblemente desvanecido o sucio de forma permanente, reduciendo su visibilidad diurna. 2) Las cintas reflectantes están rotas, despegadas, agrietadas o han perdido su capacidad de reflejar la luz (puedes probarlo en un lugar oscuro apuntando con una linterna desde varios metros de distancia). 3) La tela del chaleco tiene rasgaduras o agujeros que podrían causar que se enganche en maquinaria. Un chaleco dañado ya no es un equipo de protección, sino un riesgo.'
    }
  ];

  // Productos recomendados - Lista completa y optimizada para móvil
  const recommendedProducts = [
    {
      id: 'gabardina-elite',
      rank: 1,
      emoji: '🥇',
      category: 'Alta Visibilidad',
      name: 'Chaleco De Seguridad Radians Sv46oxl Clase 2 Extra, Naranja Fluorescente',
      tagline: 'Visibilidad máxima con doble banda reflectante para turnos nocturnos.',
      rating: 4.5,
      reviewCount: '500+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/2RznHsW',
      bestFor: 'Supervisores de obra civil, brigadas de protección civil, cuadrillas eléctricas con jornadas superiores a 10 horas, Guardias de seguridad, personal de almacén nocturno y control de tráfico.',
      summary: [
        'A diferencia de los chalecos básicos, este modelo "Superbrillante" incorpora 4 bandas reflectantes (2 en pecho y 2 en abdomen) sobre un tejido de punto de poliéster de alta visibilidad.',
        'Es un chaleco ligero y funcional con cierre frontal, diseñado para cumplir con la función principal: ser visto a larga distancia bajo la luz de los faros.'
      ],
      highlights: [
        '4 líneas de cinta reflectante de alta ganancia.',
        'Tejido de punto 100% poliéster (más duradero que la malla simple).',
        'Bolsillo frontal para identificación o celular.'
      ],
      specs: [
        { label: 'Material', value: 'Poliéster tejido de punto (Tricot)' },
        { label: 'Cintas', value: '4 Cintas horizontales plateadas' },
        { label: 'Cierre', value: 'Cremallera central reforzada' },
        { label: 'Bolsillos', value: '1 bolsillo superior básico' }
      ],
      pros: [
        'Mayor área reflectante que el promedio gracias a sus 4 cintas.',
        'Secado rápido y fácil lavado.',
        'Precio accesible para la cantidad de material reflectante que ofrece.'
      ],
      cons: [
        'No es de gabardina, por lo que no se recomienda para soldadura.',
        'Bolsillos limitados en comparación con modelos brigadista.'
      ],
      availabilityNote: 'Alta disponibilidad en colores neón (Naranja/Amarillo).',
      theme: {
        gradient: 'from-amber-50 via-orange-50 to-yellow-50',
        border: 'border-amber-200',
        badge: 'bg-orange-500',
        button: 'from-orange-500 to-amber-500'
      }
    },
    {
      id: 'bicolor-ansi',
      rank: 2,
      emoji: '🥈',
      category: 'Certificado',
      name: 'Chaleco Alta Visibilidad Bicolor Clase 2 Brigadista C Bolsas',
      tagline: 'Cumplimiento normativo impecable con diseño bicolor pensado para tráfico vehicular intenso.',
      rating: 4.7,
      reviewCount: '10+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/26Kem4U',
      bestFor: 'Contratistas de obra pública, cuadrillas de señalización vial y personal aeroportuario expuesto a tráfico constante.',
      summary: [
        'Este modelo destaca por su diseño "Two-Tone" (Bicolor), que utiliza un contraste entre el color neón de fondo y las cintas para mejorar la definición de la silueta humana a distancia.',
        'Fabricado bajo estándares Clase 2, ofrece bolsillos multifuncionales y una apariencia mucho más ejecutiva y profesional que los chalecos estándar.'
      ],
      highlights: [
        'Diseño Bicolor para máximo contraste diurno.',
        'Bolsa porta radio y bolsas cargo inferiores.',
        'Soporte para micrófono en hombros.'
      ],
      specs: [
        { label: 'Norma', value: 'Cumple especificaciones Clase 2' },
        { label: 'Material', value: 'Malla de poliéster respirable Heavy Duty' },
        { label: 'Visibilidad', value: 'Cinta reflectante sobre base de contraste' },
        { label: 'Extras', value: 'Porta radio y bolsillos con solapa' }
      ],
      pros: [
        'Excelente ventilación gracias a su construcción en malla premium.',
        'Apariencia jerárquica superior para mandos.',
        'Cierre reforzado de alta durabilidad.'
      ],
      cons: [
        'Al ser de malla, permite el paso de viento frío en invierno.',
        'Tallas suelen venir amplias para usar sobre ropa.'
      ],
      availabilityNote: 'Revisar guía de tallas antes de comprar.',
      theme: {
        gradient: 'from-emerald-50 via-green-50 to-teal-50',
        border: 'border-emerald-200',
        badge: 'bg-emerald-500',
        button: 'from-emerald-500 to-teal-500'
      }
    },
    {
      id: 'malla-economica',
      rank: 3,
      emoji: '🥉',
      category: 'Económico',
      name: 'Chaleco de Malla Económico con Reflejantes',
      tagline: 'La opción ligera para cuadrillas temporales, promotores y tareas urbanas en clima cálido.',
      rating: 4.7,
      reviewCount: '720+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/23uTvh2',
      bestFor: 'Programas temporales, voluntariado, brigadas escolares, personal de apoyo en eventos masivos, eventos, visitas a obra, brigadas escolares y uso temporal.',
      summary: [
        'Un chaleco de batalla. Simple, extremadamente ligero y muy ventilado. Es la prenda ideal para tener en stock para visitas o para trabajadores temporales donde la inversión debe ser mínima.',
        'Fabricado en malla abierta de poliéster con cintas reflectantes básicas cosidas.'
      ],
      highlights: [
        'El precio más bajo del mercado.',
        'Máxima frescura, es básicamente pura ventilación.',
        'Elásticos laterales para ajuste universal.'
      ],
      specs: [
        { label: 'Material', value: 'Malla abierta de poliéster' },
        { label: 'Ajuste', value: 'Elásticos laterales o velcro frontal' },
        { label: 'Peso', value: 'Ultra ligero (< 100g)' },
        { label: 'Talla', value: 'Unitalla adaptable' }
      ],
      pros: [
        'Excelente ventilación para climas húmedos o tareas de verano.',
        'Costo unitario accesible para compras masivas o programas de voluntariado.',
        'Velcros laterales que permiten compartir tallas entre diferentes usuarios.',
        'Entrega rápida gracias a stock constante en Ciudad de México.'
      ],
      cons: [
        'No sustituye a una prenda Clase 2 cuando existe tráfico vehicular veloz.',
        'Las cintas textiles pierden brillo más rápido que las microprismáticas, exige reemplazo anual.',
        'Poca durabilidad ante rasgaduras.'
      ],
      availabilityNote: 'Ideal para mantener inventario de emergencia o rotar cada temporada a bajo costo.',
      theme: {
        gradient: 'from-teal-50 via-cyan-50 to-sky-50',
        border: 'border-teal-200',
        badge: 'bg-teal-500',
        button: 'from-teal-500 to-cyan-500'
      }
    },
    {
      id: 'professional-max',
      rank: 4,
      emoji: '🔧',
      category: 'Profesional',
      name: 'Chaleco Brigadista Reflejante Gabardina',
      tagline: 'Organización ergonómica con distribución de peso inteligente para jornadas extensas.',
      rating: 4.6,
      reviewCount: '900+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/26CEJyr',
      bestFor: 'Residentes de obra, topógrafos, ingenieros de campo, jefes de mantenimiento en planta, jefes de brigada, almacén industrial y construcción.',
      summary: [
        'El Profesional toma la robustez de la gabardina y la mezcla con ergonomía moderna. Los bolsillos están escalonados para distribuir mejor el peso y evitar que todo recaiga en la parte frontal.',
        'Fabricado en tela de Gabardina (mezcla algodón/poliéster), este chaleco ofrece una resistencia muy superior a las mallas plásticas.'
      ],
      highlights: [
        'Sistema de distribución de peso con paneles acolchados internos.',
        'Bolsillos inferiores tipo cargo con fuelle expandible.',
        'Tela Gabardina resistente y lavable.'
      ],
      specs: [
        { label: 'Material', value: 'Gabardina poliéster-algodón 65/35' },
        { label: 'Bolsillos', value: '5 bolsillos funcionales' },
        { label: 'Reflejante', value: 'Cinta textil 2 pulgadas' },
        { label: 'Cierre', value: 'Cremallera completa' }
      ],
      pros: [
        'Sensación de equilibrio incluso con herramientas pesadas.',
        'Ventilación ajustable según temperatura ambiente.',
        'Compatibilidad con arnés de seguridad.',
        'Acabado profesional.'
      ],
      cons: [
        'Más caluroso que la malla en verano.',
        'Requiere planchado para verse impecable.'
      ],
      availabilityNote: 'Modelo con alta disponibilidad, disponible en tallas CH a XL.',
      theme: {
        gradient: 'from-purple-50 via-violet-50 to-indigo-50',
        border: 'border-purple-200',
        badge: 'bg-purple-500',
        button: 'from-purple-500 to-indigo-500'
      }
    },
    {
      id: 'microprismas-naranja',
      rank: 5,
      emoji: '✨',
      category: 'Alta Visibilidad',
      name: 'Chaleco Seguridad Trabajo Industrial Brigadista Reflectante',
      tagline: 'Visibilidad nocturna sobresaliente que resaltan bajo niebla o lluvia ligera.',
      rating: 4.7,
      reviewCount: '350+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/1GK5aRk',
      bestFor: 'Ingenieros, topógrafos, ideal para uso diario en aeropuertos, cuadrillas nocturnas de mantenimiento urbano y seguridad vial en carreteras.',
      summary: [
        'Similar al modelo anterior pero enfocado en la funcionalidad operativa diaria. Ofrece una configuración clásica de brigadista con cintas reflejantes textiles sobre tela resistente.',
        'Su punto fuerte es la cinta de alto rendimiento que rebota la luz incluso cuando está sucia o húmeda.'
      ],
      highlights: [
        'Cinta segmentada que se adapta al movimiento sin romperse.',
        'Bolsillo porta tablet en la espalda con cierre velcro.',
        'Colores sólidos y resistentes al deslavado.'
      ],
      specs: [
        { label: 'Material', value: 'Tela Poliéster/Algodón' },
        { label: 'Tecnología reflectiva', value: 'Scotchlite plateados' },
        { label: 'Extras', value: 'Porta radio y bolsillos cargo' }
      ],
      pros: [
        'Desempeño nocturno sobresaliente incluso con lluvia ligera.',
        'Muy resistente al uso diario.',
        'Bolsillos funcionales.'
      ],
      cons: [
        'Rigidez inicial de la tela.',
        'Peso medio.'
      ],
      availabilityNote: 'Verificar colores disponibles en la publicación.',
      theme: {
        gradient: 'from-orange-50 via-amber-50 to-red-50',
        border: 'border-orange-200',
        badge: 'bg-orange-600',
        button: 'from-orange-600 to-red-500'
      }
    },
    {
      id: 'breakaway-pro',
      rank: 6,
      emoji: '⚙️',
      category: 'Innovación',
      name: 'Chaleco Radians SV46 Heavy Duty Surveyor',
      tagline: 'Calidad americana importada para topógrafos y exigencia máxima.',
      rating: 4.7,
      reviewCount: '10+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/2Xzhw76',
      bestFor: 'Operadores de centros de distribución, líneas de ensamble automotriz, cuadrillas con maquinaria de arrastre, ingenieros topógrafos.',
      summary: [
        'El Radians SV46 no es un chaleco común; es un chaleco tipo "Surveyor" (Topógrafo) de grado industrial importado.',
        'Incorpora un cierre "Heavy Duty" #8, bolsillos grandes para planos o tablets.'
      ],
      highlights: [
        'Marca Radians (Líder en EPP en USA).',
        'Frente sólido / Espalda de malla.',
        'Bolsillo trasero pasante para planos.'
      ],
      specs: [
        { label: 'Modelo', value: 'Radians SV46-2ZOD' },
        { label: 'Material', value: 'Frente Poliéster / Espalda Malla' },
        { label: 'Bolsillos', value: 'iPad/Tablet pocket' }
      ],
      pros: [
        'Calidad de construcción muy superior.',
        'Bolsillo trasero enorme ideal para planos.',
        'Cierre resistente.'
      ],
      cons: [
        'Precio elevado por ser importado.',
        'Tallas americanas (más grandes).'
      ],
      availabilityNote: 'Producto importado, stock limitado.',
      theme: {
        gradient: 'from-slate-50 via-blue-50 to-sky-50',
        border: 'border-blue-200',
        badge: 'bg-blue-500',
        button: 'from-blue-500 to-sky-500'
      }
    },
    {
      id: 'termico-invierno',
      rank: 7,
      emoji: '❄️',
      category: 'Uso Rudo / Ejecutivo',
      name: 'Chaleco Reflejante Seguridad Industrial Ejecutivo Gabardina',
      tagline: 'Durabilidad superior y presentación profesional con tela de gabardina 100% algodón.',
      rating: 4.8,
      reviewCount: '700+ reseñas verificadas',
      url: 'https://mercadolibre.com/sec/16xjRYw',
      bestFor: 'Supervisores, arquitectos, ingenieros de campo y brigadistas que requieren resistencia y bolsillos funcionales.',
      summary: [
        'Confeccionado en gabardina 100% algodón, este chaleco ofrece una resistencia superior a rasgaduras comparado con los de malla.',
        'Diseño tipo brigadista con cintas reflejantes textiles de alta visibilidad.'
      ],
      highlights: [
        'Tela Gabardina 100% Algodón de alta resistencia.',
        'Múltiples bolsillos frontales con cierre y velcro.',
        'Cintas reflejantes textiles de 2 pulgadas.'
      ],
      specs: [
        { label: 'Material', value: 'Gabardina 100% Algodón' },
        { label: 'Visibilidad', value: 'Cintas reflejantes textiles' },
        { label: 'Cierre', value: 'Cierre central reforzado' },
        { label: 'Tallas', value: 'Unitalla o por tallas' }
      ],
      pros: [
        'Material más duradero que la malla.',
        'El algodón permite respirar.',
        'Bolsas funcionales.',
        'Acabado profesional.'
      ],
      cons: [
        'No es impermeable.',
        'Más pesado que malla.'
      ],
      availabilityNote: 'Stock constante, varios colores disponibles.',
      theme: {
        gradient: 'from-blue-50 via-indigo-50 to-slate-100',
        border: 'border-indigo-200',
        badge: 'bg-indigo-500',
        button: 'from-indigo-500 to-slate-500'
      }
    }
  ];

  // Función para trackear clicks de afiliados optimizada
  const handleAffiliateClick = (productName: string, amazonUrl: string) => {
    const trackingId = generateTrackingId('product', productName);
    trackAffiliateClick(trackingId, productName, 'chaleco_seguridad', amazonUrl);
    window.open(amazonUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <BlogLayout>
      <div className="min-h-screen">
        {/* Barra de progreso de lectura optimizada */}
        <div 
          className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 z-50 origin-left shadow-lg transition-transform"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* Navegación flotante optimizada */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-gray-200">
            {[
              { id: 'header', icon: '🏠', label: 'Inicio' },
              { id: 'caracteristicas', icon: '🔍', label: 'Características' },
              { id: 'productos', icon: '🛒', label: 'Productos' },
              { id: 'faq', icon: '❓', label: 'FAQ' },
              { id: 'conclusion', icon: '✅', label: 'Conclusión' }
            ].map((section, index) => (
              <button
                key={section.id}
                className={`w-12 h-12 rounded-xl mb-2 last:mb-0 flex items-center justify-center text-lg transition-all hover:scale-105 ${
                  visibleSection === section.id 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg scale-110' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                onClick={() => scrollToSection(section.id)}
                title={section.label}
              >
                {section.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section - Optimizado sin partículas */}
        <section id="header" className="bg-gradient-to-br from-orange-900 via-yellow-900 to-green-900 text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-yellow-600/10 to-red-600/20"></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-yellow-300">Los 7 Mejores</span>
                <span className="block text-white">Chalecos de Seguridad</span>
                <span className="block text-orange-300">para 2025</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto">
                Guía completa y actualizada para elegir el chaleco de alta visibilidad perfecto según tu trabajo, 
                presupuesto y necesidades específicas en México.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium">Actualizado: Enero 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Lectura: 15-20 min</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Shield className="w-5 h-5 text-orange-300" />
                  <span className="text-sm font-medium">Normativa ANSI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Características - Sin animaciones pesadas */}
        <section id="caracteristicas" className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué Hace a un Chaleco Realmente Seguro?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No todos los chalecos son iguales. Conoce los factores clave que determinan 
                la efectividad de un equipo de protección personal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Clasificación ANSI/ISEA 107</h3>
                <div className="h-64 w-full">
                  <Doughnut data={visibilityChartData} options={chartOptions} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-xl">
                      <Sun className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Clase 1</h4>
                      <p className="text-gray-600">Para tráfico bajo o ambientes controlados (< 40 km/h)</p>
                      <Badge className="mt-2 bg-yellow-100 text-yellow-800">0.10 m² reflectante</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Clase 2</h4>
                      <p className="text-gray-600">Para tráfico moderado y construcción (40-80 km/h)</p>
                      <Badge className="mt-2 bg-orange-100 text-orange-800">0.13 m² reflectante</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Clase 3</h4>
                      <p className="text-gray-600">Para tráfico alto y trabajo nocturno (> 80 km/h)</p>
                      <Badge className="mt-2 bg-red-100 text-red-800">0.20 m² reflectante</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>