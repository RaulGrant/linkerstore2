'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { trackAffiliateClick, trackBlogView, generateTrackingId } from '@/lib/meta-pixel';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GuiaChalecosSeguridadArticle() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track article view on component mount
  useEffect(() => {
    const articleId = generateTrackingId('article', 'guia-completa-chalecos-seguridad');
    trackBlogView(articleId, 'Guía Completa de Chalecos de Seguridad 2025', 'chaleco_seguridad');
  }, []);

  // Efecto para la barra de progreso de lectura
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar clicks en enlaces de Amazon/afiliados
  const handleAffiliateClick = (productName: string, url: string) => {
    const productId = generateTrackingId('product', productName);
    trackAffiliateClick('mercadolibre', productId, productName, 'chaleco_seguridad');
    window.open(url, '_blank');
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

  // Productos recomendados con enlaces de afiliados
  const recommendedProducts = [
    {
      name: 'Chaleco de Seguridad Industrial Gabardina 100% Algodón Elite',
      description: 'Chaleco tipo Brigadista de gabardina 100% algodón con múltiples bolsillos, ideal para supervisores y trabajos de uso rudo.',
      features: ['Gabardina 100% algodón', 'Múltiples bolsillos funcionales', 'Durabilidad superior', 'Apariencia profesional'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-2918473760-chaleco-de-seguridad-industrial-gabardina-100-algodon-elite-_JM',
      rating: 4.5,
      category: 'Uso Rudo'
    },
    {
      name: 'Chaleco Alta Visibilidad Bicolor Clase 2 ANSI 107-2020',
      description: 'Chaleco certificado Clase 2 con cumplimiento de norma ANSI/ISEA 107, ideal para entornos de alto riesgo y tráfico vehicular.',
      features: ['Certificación ANSI Clase 2', 'Diseño bicolor', 'Alta visibilidad diurna y nocturna', 'Cumplimiento normativo'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-2088822461-chaleco-alta-visibilidad-bicolor-clase-2-brigadista-c-bolsas-_JM',
      rating: 4.8,
      category: 'Certificado'
    },
    {
      name: 'Chaleco de Malla Económico con Reflejantes',
      description: 'Chaleco de malla de poliéster transpirable, perfecto para climas cálidos y trabajo general.',
      features: ['Malla transpirable', 'Peso ligero', 'Económico', 'Ideal para clima cálido'],
      price: 'Ver precio',
      url: 'https://articulo.mercadolibre.com.mx/MLM-1800488445-chaleco-de-malla-economico-con-reflejantes-varios-colores-_JM',
      rating: 4.2,
      category: 'Económico'
    }
  ];

  return (
    <BlogLayout>
      {/* Barra de progreso de lectura */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <article className="max-w-4xl mx-auto">
        {/* Header del artículo */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
            <Shield className="h-3 w-3 mr-1" />
            Guía Completa 2025
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Los Mejores Chalecos de Seguridad Reflectantes en 2025
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Guía completa de características clave, normativas y selección del chaleco de seguridad perfecto para tu trabajo
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>9 de noviembre, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>15 min de lectura</span>
            </div>
          </div>
        </div>

        {/* Introducción */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            En cualquier zona de trabajo de riesgo, desde una obra en construcción hasta una carretera transitada, 
            ser visto no es una opción, es la primera línea de defensa. Sin embargo, no todos los chalecos 
            fluorescentes que inundan el mercado ofrecen la misma protección. Elegir el chaleco de seguridad 
            correcto es una decisión técnica que va más allá del color; es una inversión directa en tu bienestar. 
            Esta guía te convertirá en un experto para navegar el mercado mexicano y seleccionar el chaleco que 
            realmente te mantendrá seguro en 2025.
          </p>
        </div>

        {/* Sección 1: Guía de Características Clave */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Info className="h-6 w-6 text-orange-600" />
            </div>
            Guía de Características Clave
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            En cualquier zona de trabajo donde exista riesgo, ya sea por el tránsito de vehículos, maquinaria 
            pesada o condiciones de baja visibilidad, un chaleco de seguridad no es solo parte del uniforme, 
            es una herramienta esencial de supervivencia. Sin embargo, el mercado mexicano está saturado de 
            opciones que, a simple vista, parecen idénticas. La diferencia entre un chaleco que simplemente 
            "brilla" y uno que realmente protege radica en una serie de características técnicas cruciales.
          </p>

          {/* Clasificación de Visibilidad */}
          <Card className="mb-8 border-2 border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="h-6 w-6 text-orange-600" />
                Clasificación de Visibilidad: La Norma ANSI/ISEA 107
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  La norma más importante que rige la ropa de alta visibilidad es la <strong>ANSI/ISEA 107</strong>. 
                  Este es un estándar desarrollado por el Instituto Nacional Estadounidense de Estándares (ANSI) 
                  y la Asociación Internacional de Equipos de Seguridad (ISEA) que especifica los requisitos de 
                  diseño, materiales y rendimiento de las prendas de alta visibilidad. Aunque es una norma 
                  estadounidense, es la referencia de facto para la calidad y seguridad en México.
                </p>

                {/* Tipos de Chalecos */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-lg">Tipo O (Off-Road)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        Para trabajadores en entornos controlados, lejos de la vía pública y con tráfico 
                        de vehículos que no supera los 40 km/h.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Almacenes, minería subterránea, estacionamientos</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-lg">Tipo R (Roadway)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        La categoría más común y relevante para la mayoría de los usuarios en México. 
                        Diseñada para trabajadores expuestos al tráfico vehicular.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Carreteras, construcción, maquinaria pesada</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardHeader className="bg-purple-50">
                      <CardTitle className="text-lg">Tipo P (Public Safety)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        Específica para personal de emergencia y seguridad pública que requieren 
                        visibilidad superior.
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Policías, bomberos, paramédicos</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Clases de Rendimiento */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Clases de Rendimiento</h4>
                  
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-yellow-400">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Badge className="bg-yellow-100 text-yellow-800">Clase 1</Badge>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Nivel Más Bajo de Visibilidad</h5>
                            <p className="text-gray-600 text-sm mb-3">
                              Requiere una cantidad mínima de material fluorescente (0.14 m²) y material 
                              reflectante (0.10 m²). Adecuada únicamente para entornos de bajo riesgo Tipo O, 
                              donde los trabajadores están bien separados del tráfico lento.
                            </p>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                              <p className="text-sm text-yellow-800">
                                <AlertTriangle className="h-4 w-4 inline mr-1" />
                                No recomendado para la mayoría de aplicaciones industriales en México.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Badge className="bg-orange-100 text-orange-800">Clase 2</Badge>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Estándar de Oro para México</h5>
                            <p className="text-gray-600 text-sm mb-3">
                              Ofrece una visibilidad muy superior a la Clase 1 y es obligatoria para 
                              trabajadores expuestos a tráfico con velocidades entre 40 km/h y 80 km/h. 
                              Requiere mayor cantidad de material de fondo fluorescente (0.50 m²) y material 
                              retrorreflectante (0.13 m²).
                            </p>
                            <div className="bg-orange-50 p-3 rounded-lg">
                              <p className="text-sm text-orange-800">
                                <CheckCircle className="h-4 w-4 inline mr-1" />
                                Personal de construcción, servicios públicos, aeropuertos y directores de 
                                tráfico deben usar, como mínimo, prendas de Clase 2.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Badge className="bg-red-100 text-red-800">Clase 3</Badge>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Nivel Más Alto de Visibilidad</h5>
                            <p className="text-gray-600 text-sm mb-3">
                              Indispensable para trabajadores en entornos de muy alto riesgo, como carreteras 
                              con velocidades superiores a 80 km/h, condiciones climáticas inclementes o 
                              trabajos nocturnos complejos.
                            </p>
                            <div className="bg-red-50 p-3 rounded-lg">
                              <p className="text-sm text-red-800">
                                <Info className="h-4 w-4 inline mr-1" />
                                Para cumplir con la Clase 3, la prenda debe tener material reflectante en 
                                las mangas y pantalones, garantizando una silueta humana completa y 
                                visibilidad de 360 grados. Un chaleco por sí solo no puede ser Clase 3.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Importante para Compradores</h4>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Al analizar las plataformas de comercio electrónico en México, existe una tendencia 
                        clara: muchos chalecos robustos tipo "Brigadista" de gabardina se comercializan 
                        destacando su durabilidad y cantidad de bolsillos, pero omiten cualquier mención 
                        a su certificación o clase de visibilidad. Es fundamental que los compradores 
                        busquen activamente la etiqueta que certifique el cumplimiento con 
                        <strong> "ANSI/ISEA 107 Tipo R Clase 2"</strong> como mínimo para la mayoría de 
                        los trabajos de riesgo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materiales y Construcción */}
          <Card className="mb-8 border-2 border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-green-600" />
                Materiales y Construcción: Durabilidad vs. Comodidad Climática
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  El material del chaleco no solo define su durabilidad, sino también la comodidad del 
                  trabajador, un factor clave para la seguridad y la productividad, especialmente en los 
                  diversos climas de México.
                </p>

                {/* Comparación Poliéster vs Gabardina */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sun className="h-5 w-5 text-blue-600" />
                        Poliéster
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Es el tejido más utilizado en chalecos de seguridad por su ligereza, bajo costo, 
                        resistencia a las arrugas y secado rápido. Su naturaleza sintética le confiere un 
                        brillo que realza los colores fluorescentes, haciéndolo ideal para la alta visibilidad.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Peso ligero y transpirable</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Económico</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Ideal para climas cálidos</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Secado rápido</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-brown-200">
                    <CardHeader className="bg-amber-50">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-amber-700" />
                        Gabardina
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Típicamente una mezcla de algodón y poliéster o 100% algodón, la gabardina es 
                        sinónimo de resistencia y uso rudo. Es un tejido más grueso, pesado y notablemente 
                        más duradero, ideal para entornos de trabajo exigentes.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Durabilidad superior</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Resistente a abrasión y enganches</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Apariencia profesional</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Ideal para supervisores</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Malla vs Tela Sólida */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Malla vs. Tela Sólida</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-cyan-200">
                      <CardHeader className="bg-cyan-50">
                        <CardTitle className="text-lg">Malla (de Poliéster)</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          La principal ventaja de la construcción en malla es su excepcional transpirabilidad. 
                          El tejido abierto permite una circulación de aire constante, lo que reduce 
                          significativamente el estrés por calor y la fatiga en los climas cálidos y húmedos 
                          predominantes en gran parte de México.
                        </p>
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <p className="text-sm text-cyan-800">
                            <CheckCircle className="h-4 w-4 inline mr-1" />
                            Chalecos muy ligeros y cómodos, ideales para largas jornadas bajo el sol.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-slate-200">
                      <CardHeader className="bg-slate-50">
                        <CardTitle className="text-lg">Tela Sólida</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Ofrece una mayor durabilidad estructural y protección contra el viento. La 
                          superficie sólida es más resistente a los desgarros y proporciona una base más 
                          estable para múltiples bolsillos cargados con herramientas o dispositivos.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-lg">
                          <p className="text-sm text-slate-800">
                            <AlertTriangle className="h-4 w-4 inline mr-1" />
                            Su capacidad para retener el calor es mayor, lo que puede ser una desventaja 
                            en climas muy calurosos.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Funcionalidad y Diseño Ergonómico */}
          <Card className="mb-8 border-2 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-purple-600" />
                Funcionalidad y Diseño Ergonómico
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Un chaleco de seguridad moderno es una herramienta de trabajo portátil. La disposición 
                  y el tipo de bolsillos, así como los sistemas de cierre y ajuste, son factores 
                  determinantes en su practicidad diaria.
                </p>

                {/* Funcionalidad de Bolsillos */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Funcionalidad de Bolsillos</h4>
                  <p className="text-gray-600 mb-4">
                    La demanda en México muestra una alta valoración por los chalecos multibolsillos, 
                    que permiten al trabajador llevar consigo sus herramientas y dispositivos de forma 
                    organizada y accesible.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillo Transparente</h5>
                        <p className="text-sm text-gray-600">
                          Para identificación (porta-gafete), esencial para el acceso a zonas de trabajo 
                          controladas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillos para Radio/Celular</h5>
                        <p className="text-sm text-gray-600">
                          Diseñados con las dimensiones adecuadas para mantener los dispositivos de 
                          comunicación seguros.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillos Frontales Tipo Cargo</h5>
                        <p className="text-sm text-gray-600">
                          Bolsas amplias, a menudo con solapa y cierre de velcro o cremallera, para 
                          guardar herramientas, guantes o notas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Bolsillo Trasero para Planos</h5>
                        <p className="text-sm text-gray-600">
                          Una característica distintiva de los chalecos tipo "Brigadista", gran bolsa en 
                          la espalda para llevar documentos, planos o tabletas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tipos de Cierre */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Tipo de Cierre</h4>
                  
                  <div className="space-y-3">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Cremallera (Zipper)</h5>
                        <p className="text-sm text-gray-600">
                          Ofrece un cierre más seguro y es generalmente más duradero, preferido para el 
                          uso rudo y diario. Las cremalleras de nylon o plástico reforzado son comunes 
                          y resistentes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Velcro</h5>
                        <p className="text-sm text-gray-600 mb-2">
                          Permite ponerse y quitarse el chaleco con gran rapidez. Algunos diseños incorporan 
                          velcro en los hombros y costados para una función de seguridad "breakaway" 
                          (desprendible).
                        </p>
                        <div className="bg-purple-50 p-3 rounded-lg mt-2">
                          <p className="text-sm text-purple-800">
                            <Info className="h-4 w-4 inline mr-1" />
                            El sistema breakaway permite que el chaleco se rasgue si es atrapado por 
                            maquinaria en movimiento, liberando al trabajador y previniendo lesiones graves.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cintas Reflectantes */}
          <Card className="mb-8 border-2 border-yellow-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Moon className="h-6 w-6 text-yellow-600" />
                Cintas Reflectantes: El Componente Crítico de la Visibilidad Nocturna
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  La cinta reflectante es el elemento que trabaja cuando la luz del día desaparece. 
                  Su calidad y tecnología determinan si un conductor podrá ver a un trabajador a una 
                  distancia segura durante la noche.
                </p>

                {/* Tipos de Cinta */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Tipos de Cinta</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-green-200">
                      <CardHeader className="bg-green-50">
                        <CardTitle className="text-lg">Cinta Textil</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Fabricada sobre una base de tela (poliéster o algodón), es más flexible, 
                          ligera y transpirable, lo que la hace más cómoda de llevar.
                        </p>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-800">
                            <CheckCircle className="h-4 w-4 inline mr-1" />
                            Una cinta de buena calidad debe soportar al menos 25 lavados sin perder 
                            reflectividad.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-200">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-lg">Cinta PVC</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Esta cinta es altamente reflectante y extremadamente duradera. Es impermeable, 
                          lo que la hace superior en condiciones de lluvia, ya que mantiene su capacidad 
                          reflectante incluso mojada.
                        </p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <Info className="h-4 w-4 inline mr-1" />
                            Puede ser más rígida y menos transpirable que la cinta textil.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Tecnología Retrorreflectante */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Tecnología Retrorreflectante</h4>
                  <p className="text-gray-600 mb-4">
                    La retrorreflexión es la propiedad de devolver la luz directamente a su fuente 
                    original con una mínima dispersión.
                  </p>
                  
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-amber-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-amber-600" />
                          Microesferas de Vidrio
                        </h5>
                        <p className="text-sm text-gray-600">
                          Es la tecnología más extendida y asequible. Pequeñas esferas de vidrio 
                          incrustadas en la cinta capturan la luz y la rebotan hacia la fuente. Son 
                          efectivas pero dispersan la luz en un ángulo más amplio.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Star className="h-5 w-5 text-orange-600" />
                          Microprismas
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          Es una tecnología más avanzada y eficiente. Utiliza pequeños prismas 
                          artificiales que actúan como espejos, devolviendo la luz de forma mucho más 
                          concentrada y directa.
                        </p>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <Star className="h-4 w-4 inline mr-1" />
                            Esto hace que la cinta sea significativamente más brillante y visible desde 
                            mayores distancias, siendo la opción preferida para entornos de alto riesgo.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Ancho y Colocación de la Cinta</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        El ancho de la cinta es también un factor regulado. La norma ANSI/ISEA 107 
                        generalmente exige un ancho mínimo de 2 pulgadas (aproximadamente 50 mm) y una 
                        colocación estratégica (bandas verticales sobre los hombros y horizontales 
                        alrededor del torso) para delinear la forma humana y asegurar una visibilidad de 
                        360 grados, alertando a los conductores de la presencia de una persona desde 
                        cualquier ángulo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Productos Recomendados */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-green-600" />
            </div>
            Productos Recomendados
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recommendedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-orange-300 transition-all hover:shadow-xl">
                  <CardHeader>
                    <Badge className="mb-2 bg-orange-100 text-orange-800 w-fit">
                      {product.category}
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => handleAffiliateClick(product.name, product.url)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {product.price}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nota sobre Enlaces de Afiliados</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Los enlaces de productos que aparecen en esta guía son enlaces de afiliados a 
                  Mercado Libre. Esto significa que podríamos recibir una comisión si realizas una 
                  compra a través de estos enlaces, sin costo adicional para ti. Esto nos ayuda a 
                  mantener nuestro contenido gratuito y de calidad. Solo recomendamos productos que 
                  hemos investigado exhaustivamente y que consideramos que ofrecen valor real a nuestros 
                  lectores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            Preguntas Frecuentes (FAQ)
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-2 hover:border-orange-300 transition-colors cursor-pointer"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    </motion.div>
                  </div>
                </CardHeader>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-8 border-2 border-orange-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusión</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                La elección de un chaleco de seguridad es una de las inversiones más simples y efectivas 
                en protección personal. Como hemos visto, la decisión correcta depende de un balance entre 
                cumplimiento normativo, la durabilidad del material y la funcionalidad que tu día a día exige.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para el profesional que busca la máxima funcionalidad y resistencia a un precio justo, el 
                <strong> Chaleco de Seguridad Industrial Gabardina 100% Algodón Elite</strong> es una 
                herramienta de trabajo insuperable por su robustez y capacidad de carga. Para aquellos en 
                entornos de alto riesgo donde el cumplimiento normativo es la máxima prioridad, el 
                <strong> Chaleco Alta Visibilidad Bicolor Clase 2</strong> es la elección indispensable 
                que garantiza ser visto y estar seguro.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                No dejes tu seguridad al azar; invierte en el chaleco adecuado para tu labor.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles currentArticle="guia-completa-chalecos-seguridad" />
      </article>
    </BlogLayout>
  );
}
