import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertTriangle, Shield, Wrench, Eye, Info, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Guantes de Trabajo: Selección por Tipo de Riesgo y Aplicación | Guía Completa 2024',
  description: 'Manual detallado sobre guantes de protección: resistencia química, mecánica, térmica, normativas EN 388 y EN 374. Aprende a elegir los guantes correctos para cada trabajo.',
  keywords: 'guantes de trabajo, protección de manos, EN 388, EN 374, guantes químicos, guantes mecánicos, seguridad industrial',
};

const gloveTypes = [
  {
    name: 'Guantes de Látex',
    protection: 'Protección química ligera',
    resistance: 'Ácidos diluidos, álcalis',
    applications: 'Laboratorio, limpieza, manipulación alimentos',
    price: '$50 - $150 MXN/par',
    certification: 'EN 374',
    color: 'yellow',
    pros: ['Excelente sensibilidad táctil', 'Flexibilidad', 'Resistencia a punciones'],
    cons: ['Alergia al látex', 'Poca resistencia a disolventes', 'Deterioro con ozono']
  },
  {
    name: 'Guantes de Nitrilo',
    protection: 'Protección química amplia',
    resistance: 'Hidrocarburos, aceites, disolventes',
    applications: 'Mecánica automotriz, industria química',
    price: '$80 - $250 MXN/par',
    certification: 'EN 374-3',
    color: 'blue',
    pros: ['Sin alergia al látex', 'Resistencia química superior', 'Durabilidad'],
    cons: ['Menor flexibilidad que látex', 'Costo superior', 'Sensibilidad a objetos punzantes']
  },
  {
    name: 'Guantes de Cuero',
    protection: 'Protección mecánica',
    resistance: 'Abrasión, cortes, rasgaduras',
    applications: 'Construcción, soldadura, manipulación materiales',
    price: '$200 - $600 MXN/par',
    certification: 'EN 388',
    color: 'brown',
    pros: ['Excelente durabilidad', 'Resistencia mecánica', 'Comodidad'],
    cons: ['No resistente a químicos', 'Absorbe líquidos', 'Requiere mantenimiento']
  },
  {
    name: 'Guantes de PVC',
    protection: 'Protección química y agua',
    resistance: 'Ácidos, álcalis, agua',
    applications: 'Industria pesquera, limpieza industrial',
    price: '$150 - $400 MXN/par',
    certification: 'EN 374',
    color: 'green',
    pros: ['Excelente impermeabilidad', 'Económico', 'Fácil limpieza'],
    cons: ['Rigidez en frío', 'Poca resistencia a perforaciones', 'Menor durabilidad']
  },
  {
    name: 'Guantes Anti-Corte',
    protection: 'Cortes y laceración',
    resistance: 'Nivel de corte A1-A9',
    applications: 'Manipulación vidrio, metal, herramientas cortantes',
    price: '$300 - $1,200 MXN/par',
    certification: 'EN 388',
    color: 'red',
    pros: ['Máxima protección contra cortes', 'Durabilidad', 'Lavable'],
    cons: ['Menor sensibilidad táctil', 'Costo elevado', 'Volumen adicional']
  },
  {
    name: 'Guantes Térmicos',
    protection: 'Temperaturas extremas',
    resistance: '-40°C a +250°C',
    applications: 'Soldadura, hornos, criogenia',
    price: '$400 - $1,500 MXN/par',
    certification: 'EN 407',
    color: 'orange',
    pros: ['Protección térmica extrema', 'Aislamiento', 'Duraderos'],
    cons: ['Volumen considerable', 'Menor destreza', 'Costo elevado']
  }
];

const riskMatrix = [
  {
    risk: 'Químico',
    symptoms: 'Irritación, quemaduras, dermatitis',
    gloveTypes: ['Nitrilo', 'PVC', 'Neopreno', 'Butilo'],
    testMethod: 'EN 374 - Penetración y permeación',
    levelRequired: 'Clase 1-6 según químico'
  },
  {
    risk: 'Mecánico',
    symptoms: 'Cortes, abrasiones, punciones',
    gloveTypes: ['Cuero', 'Kevlar', 'Dyneema', 'Malla metálica'],
    testMethod: 'EN 388 - Abrasión, corte, rasgadura',
    levelRequired: 'Nivel 1-5 según exposición'
  },
  {
    risk: 'Térmico',
    symptoms: 'Quemaduras, congelación',
    gloveTypes: ['Kevlar', 'Nomex', 'Aluminizados', 'Criogénicos'],
    testMethod: 'EN 407 - Resistencia al calor',
    levelRequired: 'Nivel 1-4 según temperatura'
  },
  {
    risk: 'Biológico',
    symptoms: 'Infecciones, contaminación',
    gloveTypes: ['Látex', 'Nitrilo', 'Vinilo', 'Polietileno'],
    testMethod: 'EN 374-5 - Protección contra virus',
    levelRequired: 'AQL 1.5 o inferior'
  },
  {
    risk: 'Eléctrico',
    symptoms: 'Descargas, quemaduras eléctricas',
    gloveTypes: ['Clase 0-4 dieléctricos', 'Caucho natural'],
    testMethod: 'IEC 60903 - Resistencia dieléctrica',
    levelRequired: 'Según voltaje de trabajo'
  }
];

const sizingGuide = [
  { size: '6 (XS)', circumference: '152mm', length: '160mm', applications: 'Trabajo de precisión femenino' },
  { size: '7 (S)', circumference: '178mm', length: '171mm', applications: 'Trabajo general femenino/masculino pequeño' },
  { size: '8 (M)', circumference: '203mm', length: '182mm', applications: 'Trabajo general masculino' },
  { size: '9 (L)', circumference: '229mm', length: '192mm', applications: 'Trabajo pesado masculino' },
  { size: '10 (XL)', circumference: '254mm', length: '204mm', applications: 'Trabajo pesado, manos grandes' },
  { size: '11 (XXL)', circumference: '279mm', length: '215mm', applications: 'Trabajo muy pesado' }
];

export default function GuantesTrabajoPage() {
  const articleData = {
    title: 'Guantes de Trabajo: Selección por Riesgo y Aplicación',
    description: 'Guía completa para seleccionar guantes de protección según el tipo de riesgo. Normativas EN 388 y EN 374, materiales y aplicaciones.',
    category: 'Equipos de Protección Personal',
    publishDate: '2024-10-10',
    keywords: 'guantes de trabajo, protección manos, EN 388, EN 374, guantes industriales, EPP',
    tags: ['guantes de trabajo', 'protección manos', 'EPP', 'seguridad industrial', 'guantes industriales']
  };

  const breadcrumbs = [
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Guantes de Trabajo', url: '/blog/guantes-trabajo-seleccion-riesgo-aplicacion' }
  ];

  return (
    <BlogLayout>
      {/* Schema Markup */}
      <SchemaMarkup type="BlogPosting" data={articleData} />
      <SchemaMarkup type="BreadcrumbList" data={{ breadcrumbs }} />
      
      <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>→</span>
            <span className="text-gray-900">Guantes de Trabajo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Guantes de Trabajo: Selección por Tipo de Riesgo y Aplicación
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Protección de Manos
            </Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              Normativas EN 388/374
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Guía de Selección
            </Badge>
            <div className="text-sm text-gray-500">
              Actualizado: 5 Nov 2024 • Lectura: 8 min
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Manual detallado sobre guantes de protección: resistencia química, mecánica, térmica, 
            normativas EN 388 y EN 374. Aprende a elegir los guantes correctos según el tipo de riesgo laboral.
          </p>
        </div>

        {/* Estadísticas de lesiones */}
        <Card className="mb-8 bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-red-900 mb-2">Estadísticas de Lesiones en Manos</h4>
                <div className="grid md:grid-cols-3 gap-4 text-red-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold">25%</div>
                    <div className="text-sm">de todas las lesiones laborales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">70%</div>
                    <div className="text-sm">se pudieron prevenir con EPP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$15,000</div>
                    <div className="text-sm">costo promedio por lesión</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
              <Link href="#tipos-guantes" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Tipos de Guantes por Material
              </Link>
              <Link href="#matriz-riesgos" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Matriz de Riesgos
              </Link>
              <Link href="#normativas" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Normativas y Certificaciones
              </Link>
              <Link href="#sizing" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Guía de Tallas
              </Link>
              <Link href="#seleccion" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Proceso de Selección
              </Link>
              <Link href="#mantenimiento" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
                <CheckCircle className="w-4 h-4" />
                Cuidado y Mantenimiento
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Tipos de Guantes */}
        <section id="tipos-guantes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Guantes por Material y Aplicación</h2>
          
          <div className="space-y-6 mb-8">
            {gloveTypes.map((glove, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Hand className={`w-5 h-5 text-${glove.color}-600`} />
                      {glove.name}
                    </CardTitle>
                    <Badge className={`bg-${glove.color}-100 text-${glove.color}-800`}>
                      {glove.certification}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Protección</h4>
                        <p className="text-sm text-gray-600">{glove.protection}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Resistencia</h4>
                        <p className="text-sm text-gray-600">{glove.resistance}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Aplicaciones</h4>
                        <p className="text-sm text-gray-600">{glove.applications}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Precio Estimado</h4>
                        <p className="text-sm text-gray-600">{glove.price}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">✅ Ventajas</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {glove.pros.map((pro, i) => (
                            <li key={i}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">⚠️ Limitaciones</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {glove.cons.map((con, i) => (
                            <li key={i}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Matriz de Riesgos */}
        <section id="matriz-riesgos" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Matriz de Riesgos y Selección de Guantes</h2>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              La selección correcta de guantes debe basarse en una evaluación sistemática de los riesgos presentes. 
              Esta matriz te ayudará a identificar el tipo de protección necesaria según el riesgo específico.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {riskMatrix.map((risk, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-900">
                    Riesgo {risk.risk}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Síntomas de Exposición</h4>
                      <p className="text-sm text-gray-600">{risk.symptoms}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Tipos Recomendados</h4>
                      <div className="text-sm text-gray-600">
                        {risk.gloveTypes.map((type, i) => (
                          <div key={i}>• {type}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Método de Prueba</h4>
                      <p className="text-sm text-gray-600">{risk.testMethod}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Nivel Requerido</h4>
                      <p className="text-sm text-gray-600">{risk.levelRequired}</p>
                    </div>
                  </div>
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
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  EN 388 - Riesgos Mecánicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Pictograma: 4 Números</h4>
                    <div className="space-y-1 text-green-800 text-sm">
                      <div>• <strong>1er dígito:</strong> Resistencia a abrasión (0-4)</div>
                      <div>• <strong>2do dígito:</strong> Resistencia a corte (0-5)</div>
                      <div>• <strong>3er dígito:</strong> Resistencia a rasgadura (0-4)</div>
                      <div>• <strong>4to dígito:</strong> Resistencia a punción (0-4)</div>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-green-800 text-sm">
                      <strong>Ejemplo:</strong> EN 388:2016 - 4543<br/>
                      Máxima abrasión, alta resistencia al corte, buena rasgadura, máxima punción
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  EN 374 - Protección Química
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">Niveles de Protección</h4>
                    <div className="space-y-1 text-blue-800 text-sm">
                      <div>• <strong>Tipo A:</strong> Resistencia a 6+ químicos (&gt;30 min)</div>
                      <div>• <strong>Tipo B:</strong> Resistencia a 3+ químicos (&gt;30 min)</div>
                      <div>• <strong>Tipo C:</strong> Resistencia a 1+ químico (&gt;10 min)</div>
                      <div>• <strong>JKL:</strong> Códigos de químicos específicos</div>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Químicos estándar:</strong><br/>
                      J=Metanol, K=Hidróxido de sodio, L=Ácido sulfúrico
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guía de Tallas */}
        <section id="sizing" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Guía de Tallas y Medición</h2>
          
          <div className="mb-6">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">Cómo Medir Correctamente</h4>
                    <div className="text-amber-800 text-sm space-y-2">
                      <p>1. <strong>Circunferencia:</strong> Mide alrededor de la mano en los nudillos, sin incluir el pulgar</p>
                      <p>2. <strong>Longitud:</strong> Desde la punta del dedo medio hasta la muñeca</p>
                      <p>3. <strong>Usa la mano dominante</strong> para la medición (generalmente ligeramente más grande)</p>
                      <p>4. <strong>Mide sin compresión</strong> - la cinta debe estar ajustada pero no apretada</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tabla de Tallas Estándar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Talla</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Circunferencia</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Longitud</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Aplicaciones Típicas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizingGuide.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">{size.size}</td>
                        <td className="border border-gray-300 px-4 py-2">{size.circumference}</td>
                        <td className="border border-gray-300 px-4 py-2">{size.length}</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">{size.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Proceso de Selección */}
        <section id="seleccion" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de Selección Paso a Paso</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Evaluación de Riesgos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Identifica todos los peligros para las manos en el área de trabajo</li>
                  <li>• Evalúa la probabilidad y severidad de cada riesgo</li>
                  <li>• Considera riesgos combinados (ejemplo: químico + térmico)</li>
                  <li>• Documenta los hallazgos para referencia futura</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Selección del Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Consulta las tablas de resistencia química específicas</li>
                  <li>• Verifica las certificaciones necesarias (EN 388, EN 374, etc.)</li>
                  <li>• Considera el tiempo de exposición y temperatura</li>
                  <li>• Evalúa la necesidad de destreza táctil</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Prueba y Validación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Realiza pruebas con muestras antes de la compra masiva</li>
                  <li>• Evalúa comodidad durante uso prolongado</li>
                  <li>• Verifica compatibilidad con otros EPP</li>
                  <li>• Solicita retroalimentación del personal usuario</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Implementación y Seguimiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Capacita al personal en uso correcto y limitaciones</li>
                  <li>• Establece programas de inspección y reemplazo</li>
                  <li>• Monitorea la efectividad y ajusta según necesidad</li>
                  <li>• Mantén registros de incidentes y mejoras</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mantenimiento */}
        <section id="mantenimiento" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuidado y Mantenimiento de Guantes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">✅ Buenas Prácticas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Inspecciona antes de cada uso</li>
                  <li>• Lava con agua tibia y jabón neutro</li>
                  <li>• Seca completamente antes de almacenar</li>
                  <li>• Almacena alejado de luz solar directa</li>
                  <li>• Rota el uso entre varios pares</li>
                  <li>• Reemplaza según calendario o desgaste</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">❌ Errores Comunes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Usar guantes con perforaciones o grietas</li>
                  <li>• Lavar con solventes o químicos agresivos</li>
                  <li>• Secar con calor excesivo</li>
                  <li>• Guardar húmedos o contaminados</li>
                  <li>• Reutilizar guantes de un solo uso</li>
                  <li>• Ignorar fechas de vencimiento</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Productos Recomendados */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Productos Recomendados</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Ansell HyFlex 11-544</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 w-fit">Anti-Corte A4</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Excelente combinación de protección contra cortes y sensibilidad táctil. 
                  Ideal para manipulación de objetos cortantes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificación:</span>
                    <span className="font-medium">EN 388: 4544</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio estimado:</span>
                    <span className="font-medium">$450-650 MXN</span>
                  </div>
                </div>
                {/* TEMPORALMENTE COMENTADO - TIENDA EN DESARROLLO
                <Button className="w-full mt-4" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Tienda
                </Button>
                */}
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Showa 874R Nitrile</CardTitle>
                <Badge className="bg-green-100 text-green-800 w-fit">Químico Resistente</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Protección química superior con excelente resistencia a hidrocarburos y aceites. 
                  Para industria automotriz.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificación:</span>
                    <span className="font-medium">EN 374-3 Tipo A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio estimado:</span>
                    <span className="font-medium">$180-280 MXN</span>
                  </div>
                </div>
                {/* TEMPORALMENTE COMENTADO - TIENDA EN DESARROLLO
                <Button className="w-full mt-4" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Tienda
                </Button>
                */}
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Honeywell Rig Dog CR</CardTitle>
                <Badge className="bg-orange-100 text-orange-800 w-fit">Trabajo Pesado</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Guantes de cuero reforzado para trabajo pesado en construcción. 
                  Máxima durabilidad y protección mecánica.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificación:</span>
                    <span className="font-medium">EN 388: 4144</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio estimado:</span>
                    <span className="font-medium">$350-500 MXN</span>
                  </div>
                </div>
                {/* TEMPORALMENTE COMENTADO - TIENDA EN DESARROLLO
                <Button className="w-full mt-4" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en Tienda
                </Button>
                */}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Asesoría Especializada en Protección de Manos?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Nuestros expertos pueden ayudarte a desarrollar un programa completo de protección de manos, 
                desde la evaluación de riesgos hasta la selección del EPP más apropiado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" variant="secondary">
                    Consulta Gratuita
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Ver Servicios
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Enlaces relacionados */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/guia-guantes-trabajo-completa" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Guía Completa de Guantes</h4>
              <p className="text-sm text-gray-600">Guía detallada sobre todos los tipos de guantes</p>
            </Link>
            <Link href="/blog/proteccion-respiratoria-mascaras-respiradores" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Protección Respiratoria</h4>
              <p className="text-sm text-gray-600">Máscaras y respiradores industriales</p>
            </Link>
            <Link href="/blog/guia-completa-epp-seguridad-industrial" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">EPP Completo</h4>
              <p className="text-sm text-gray-600">Guía integral de equipos de protección</p>
            </Link>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
}