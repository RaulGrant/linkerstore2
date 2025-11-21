import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertTriangle, Shield, Zap, Eye, Info, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Protección Respiratoria: Máscaras y Respiradores Industriales | Guía Completa 2024',
  description: 'Guía completa sobre equipos de protección respiratoria: tipos de filtros, factores de protección, normativas EN 149 y EN 140. Todo lo que necesitas saber para elegir el respirador correcto.',
  keywords: 'protección respiratoria, máscaras industriales, respiradores, filtros, EN 149, EN 140, seguridad industrial',
};

const respiratorTypes = [
  {
    name: 'Mascarilla Autofiltrante FFP1',
    protection: 'Partículas no tóxicas',
    efficiency: '80%',
    uses: 'Polvo, polen, partículas gruesas',
    price: '$50 - $150 MXN',
    certification: 'EN 149',
    color: 'blue'
  },
  {
    name: 'Mascarilla Autofiltrante FFP2',
    protection: 'Partículas tóxicas y no tóxicas',
    efficiency: '94%',
    uses: 'Soldadura, cemento, madera',
    price: '$80 - $250 MXN',
    certification: 'EN 149',
    color: 'yellow'
  },
  {
    name: 'Mascarilla Autofiltrante FFP3',
    protection: 'Partículas altamente tóxicas',
    efficiency: '99%',
    uses: 'Asbesto, fibra de vidrio, radiactivos',
    price: '$150 - $400 MXN',
    certification: 'EN 149',
    color: 'red'
  },
  {
    name: 'Respirador Media Cara',
    protection: 'Gases, vapores y partículas',
    efficiency: '95-99%',
    uses: 'Pinturas, químicos, disolventes',
    price: '$800 - $2,500 MXN',
    certification: 'EN 140',
    color: 'green'
  },
  {
    name: 'Respirador Cara Completa',
    protection: 'Protección total respiratoria y ocular',
    efficiency: '99.95%',
    uses: 'Químicos peligrosos, emergencias',
    price: '$2,000 - $8,000 MXN',
    certification: 'EN 136',
    color: 'purple'
  }
];

const filterGuide = [
  {
    type: 'Filtro P1',
    color: 'Blanco',
    protection: 'Partículas sólidas de baja toxicidad',
    efficiency: '80%',
    uses: 'Polvo de cemento, madera, textiles'
  },
  {
    type: 'Filtro P2',
    color: 'Blanco',
    protection: 'Partículas sólidas y líquidas tóxicas',
    efficiency: '94%',
    uses: 'Humos de soldadura, aerosoles'
  },
  {
    type: 'Filtro P3',
    color: 'Blanco',
    protection: 'Partículas altamente tóxicas',
    efficiency: '99.95%',
    uses: 'Asbesto, radiactivos, bacterias'
  },
  {
    type: 'Filtro A',
    color: 'Marrón',
    protection: 'Vapores orgánicos',
    efficiency: 'Variable',
    uses: 'Disolventes, hidrocarburos'
  },
  {
    type: 'Filtro B',
    color: 'Gris',
    protection: 'Gases inorgánicos',
    efficiency: 'Variable',
    uses: 'Cloro, sulfuro de hidrógeno'
  },
  {
    type: 'Filtro E',
    color: 'Amarillo',
    protection: 'Dióxido de azufre',
    efficiency: 'Variable',
    uses: 'Industria química, fundiciones'
  }
];

const selectionFactors = [
  {
    factor: 'Concentración del Contaminante',
    description: 'Medir la concentración en el ambiente para determinar el factor de protección requerido',
    importance: 'Crítico'
  },
  {
    factor: 'Tipo de Contaminante',
    description: 'Identificar si son partículas, gases, vapores o combinaciones',
    importance: 'Crítico'
  },
  {
    factor: 'Tiempo de Exposición',
    description: 'Duración del trabajo que determinará la comodidad necesaria',
    importance: 'Alto'
  },
  {
    factor: 'Esfuerzo Físico',
    description: 'Trabajo ligero, moderado o pesado afecta la respiración',
    importance: 'Alto'
  },
  {
    factor: 'Compatibilidad con EPP',
    description: 'Verificar compatibilidad con lentes, cascos, audífonos',
    importance: 'Medio'
  }
];

export default function ProteccionRespiratoriaPage() {
  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>→</span>
            <span className="text-gray-900">Protección Respiratoria</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Protección Respiratoria: Máscaras y Respiradores Industriales
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Equipos de Protección
            </Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              Normativas EN 149/140
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Guía Técnica
            </Badge>
            <div className="text-sm text-gray-500">
              Actualizado: 8 Nov 2024 • Lectura: 11 min
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Guía completa sobre equipos de protección respiratoria: tipos de filtros, factores de protección, 
            normativas EN 149 y EN 140, y cómo elegir el respirador correcto según el riesgo laboral.
          </p>
        </div>

        {/* Índice */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Info className="w-5 h-5" />
              Contenido de la Guía
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <Link href="#tipos-respiradores" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Tipos de Respiradores
              </Link>
              <Link href="#guia-filtros" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Guía de Filtros
              </Link>
              <Link href="#factores-seleccion" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Factores de Selección
              </Link>
              <Link href="#normativas" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Normativas y Certificaciones
              </Link>
              <Link href="#mantenimiento" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Mantenimiento y Cuidado
              </Link>
              <Link href="#recomendaciones" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 w-4" />
                Productos Recomendados
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Introducción */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué es Crítica la Protección Respiratoria?</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Los pulmones son uno de los órganos más vulnerables en el ambiente laboral. A diferencia de otros EPP, 
              los equipos de protección respiratoria no solo previenen lesiones inmediatas, sino que protegen contra 
              enfermedades profesionales que pueden desarrollarse a largo plazo como silicosis, asbestosis o cáncer ocupacional.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Según la Organización Mundial de la Salud, las enfermedades respiratorias ocupacionales causan más de 
              386,000 muertes anuales a nivel mundial. La selección correcta del equipo de protección respiratoria 
              puede prevenir el 95% de estas enfermedades.
            </p>
          </div>

          <Card className="bg-amber-50 border-amber-200 mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Factores de Riesgo Respiratorio</h4>
                  <ul className="space-y-1 text-amber-800">
                    <li>• <strong>Partículas:</strong> Polvo, humos, aerosoles, fibras</li>
                    <li>• <strong>Gases:</strong> Monóxido de carbono, sulfuro de hidrógeno, cloro</li>
                    <li>• <strong>Vapores:</strong> Disolventes orgánicos, pinturas, adhesivos</li>
                    <li>• <strong>Deficiencia de oxígeno:</strong> Espacios confinados (&lt;19.5%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tipos de Respiradores */}
        <section id="tipos-respiradores" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Respiradores y Sus Aplicaciones</h2>
          
          <div className="grid gap-6 mb-8">
            {respiratorTypes.map((respirator, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{respirator.name}</span>
                    <Badge className={`bg-${respirator.color}-100 text-${respirator.color}-800`}>
                      {respirator.certification}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Protección</h4>
                      <p className="text-sm text-gray-600">{respirator.protection}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Eficiencia</h4>
                      <p className="text-sm text-gray-600">{respirator.efficiency}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Aplicaciones</h4>
                      <p className="text-sm text-gray-600">{respirator.uses}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Precio Estimado</h4>
                      <p className="text-sm text-gray-600">{respirator.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guía de Filtros */}
        <section id="guia-filtros" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Guía Completa de Filtros y Cartuchos</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sistema de Codificación por Colores</h3>
            <p className="text-gray-700 mb-6">
              Los filtros siguen un sistema de codificación internacional por colores que permite identificar 
              rápidamente el tipo de protección. Es fundamental conocer este sistema para seleccionar el filtro correcto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filterGuide.map((filter, index) => (
              <Card key={index} className="border-l-4 border-l-gray-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {filter.type}
                    <div className={`w-4 h-4 rounded-full ${filter.color === 'Blanco' ? 'bg-gray-100 border-2 border-gray-300' : 
                      filter.color === 'Marrón' ? 'bg-amber-700' :
                      filter.color === 'Gris' ? 'bg-gray-500' :
                      filter.color === 'Amarillo' ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Protege contra:</h4>
                      <p className="text-sm text-gray-600">{filter.protection}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Eficiencia:</h4>
                      <p className="text-sm text-gray-600">{filter.efficiency}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Aplicaciones:</h4>
                      <p className="text-sm text-gray-600">{filter.uses}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Factores de Selección */}
        <section id="factores-seleccion" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Factores Clave para la Selección</h2>
          
          <div className="space-y-6 mb-8">
            {selectionFactors.map((factor, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{factor.factor}</h3>
                    <Badge variant={factor.importance === 'Crítico' ? 'destructive' : factor.importance === 'Alto' ? 'default' : 'secondary'}>
                      {factor.importance}
                    </Badge>
                  </div>
                  <p className="text-gray-700">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Normativas */}
        <section id="normativas" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Normativas y Certificaciones</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">EN 149 - Mascarillas Autofiltrantes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>FFP1:</strong> Filtración mínima 80% - Partículas no tóxicas</li>
                  <li>• <strong>FFP2:</strong> Filtración mínima 94% - Partículas tóxicas</li>
                  <li>• <strong>FFP3:</strong> Filtración mínima 99% - Partículas muy tóxicas</li>
                  <li>• <strong>Marcado NR:</strong> No reutilizable (un solo turno)</li>
                  <li>• <strong>Marcado R:</strong> Reutilizable (hasta 8 horas)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">EN 140 - Respiradores Media Cara</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Clase 1:</strong> Resistencia respiratoria baja</li>
                  <li>• <strong>Clase 2:</strong> Resistencia respiratoria media</li>
                  <li>• <strong>Clase 3:</strong> Resistencia respiratoria alta</li>
                  <li>• Compatible con filtros intercambiables</li>
                  <li>• Requiere prueba de ajuste personalizada</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mantenimiento */}
        <section id="mantenimiento" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mantenimiento y Cuidado</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Programa de Mantenimiento Recomendado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🔄 Antes de Cada Uso (Diario)</h4>
                  <ul className="ml-4 space-y-1 text-gray-700">
                    <li>• Inspección visual del respirador y filtros</li>
                    <li>• Verificar integridad de sellos y válvulas</li>
                    <li>• Comprobar fechas de vencimiento</li>
                    <li>• Realizar prueba de ajuste positiva y negativa</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🧽 Después de Cada Uso</h4>
                  <ul className="ml-4 space-y-1 text-gray-700">
                    <li>• Limpiar con toallitas desinfectantes</li>
                    <li>• Almacenar en lugar limpio y seco</li>
                    <li>• Proteger de luz solar directa</li>
                    <li>• Registrar tiempo de uso acumulado</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">📅 Semanal</h4>
                  <ul className="ml-4 space-y-1 text-gray-700">
                    <li>• Limpieza profunda con agua tibia y jabón neutro</li>
                    <li>• Verificar elasticidad de bandas de sujeción</li>
                    <li>• Inspeccionar desgaste de materiales</li>
                    <li>• Evaluar necesidad de reemplazo de filtros</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recomendaciones */}
        <section id="recomendaciones" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Productos Recomendados</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">3M Aura 9332+ FFP3</CardTitle>
                <Badge className="bg-red-100 text-red-800 w-fit">Máxima Protección</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Mascarilla autofiltrante plegable con válvula de exhalación. Ideal para ambientes con 
                  partículas altamente tóxicas.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eficiencia:</span>
                    <span className="font-medium">99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio estimado:</span>
                    <span className="font-medium">$250-400 MXN</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Tienda
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Honeywell N100 P100</CardTitle>
                <Badge className="bg-purple-100 text-purple-800 w-fit">Respirador Reutilizable</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Respirador de media cara con filtros P100. Excelente para trabajos prolongados 
                  con exposición a partículas.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eficiencia:</span>
                    <span className="font-medium">99.97%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio estimado:</span>
                    <span className="font-medium">$1,200-2,000 MXN</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Tienda
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">MSA Advantage 900</CardTitle>
                <Badge className="bg-green-100 text-green-800 w-fit">Cara Completa</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Respirador de cara completa con protección ocular integrada. Para ambientes 
                  con múltiples contaminantes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protección:</span>
                    <span className="font-medium">Respiratoria + Ocular</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio estimado:</span>
                    <span className="font-medium">$4,000-8,000 MXN</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Tienda
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final 
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Asesoría Personalizada?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Nuestros expertos en seguridad industrial pueden ayudarte a seleccionar el equipo 
                de protección respiratoria más adecuado para tu aplicación específica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" variant="secondary">
                    Contactar Especialista
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Ver Servicios de Consultoría
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>*/}

        <Separator className="my-12" />

        {/* Enlaces relacionados */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/guia-completa-epp-seguridad-industrial" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Guía Completa de EPP</h4>
              <p className="text-sm text-gray-600">Todo sobre equipos de protección personal</p>
            </Link>
            <Link href="/blog/guia-nom-009-stps-2011-trabajos-altura" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">NOM-009-STPS-2011</h4>
              <p className="text-sm text-gray-600">Normativa para trabajos en espacios confinados</p>
            </Link>
            <Link href="/blog/monitores-gases-proteccion-invisible-vital" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Monitores de Gases</h4>
              <p className="text-sm text-gray-600">Detección de gases peligrosos</p>
            </Link>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
}