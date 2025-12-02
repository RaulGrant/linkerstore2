'use client';

import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertTriangle, Shield, Wrench, Eye, Info, ExternalLink, Star, Hand, Zap, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { motion } from 'framer-motion';

const gloveTypes = [
  {
    name: 'Guantes de Látex',
    protection: 'Protección química ligera',
    resistance: 'Ácidos diluidos, álcalis',
    applications: 'Laboratorio, limpieza, manipulación alimentos',
    price: '$50 - $150 MXN/par',
    certification: 'NOM-017 / ANSI 105',
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
    certification: 'NOM-017 / ANSI 105',
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
    certification: 'NOM-017 / ANSI 105',
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
    certification: 'NOM-017 / ANSI 105',
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
    certification: 'ANSI/ISEA 105',
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
    certification: 'ANSI/ISEA 105',
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
    testMethod: 'ANSI/ISEA 105 - Permeación química',
    levelRequired: 'Tiempo de ruptura > 30 min'
  },
  {
    risk: 'Mecánico',
    symptoms: 'Cortes, abrasiones, punciones',
    gloveTypes: ['Cuero', 'Kevlar', 'Dyneema', 'Malla metálica'],
    testMethod: 'ANSI/ISEA 105 - Corte A1-A9',
    levelRequired: 'Nivel A2-A5 según exposición'
  },
  {
    risk: 'Térmico',
    symptoms: 'Quemaduras, congelación',
    gloveTypes: ['Kevlar', 'Nomex', 'Aluminizado', 'Criogénicos'],
    testMethod: 'EN 407 - Calor y fuego',
    levelRequired: 'Nivel 1-4 según temperatura'
  },
  {
    risk: 'Biológico',
    symptoms: 'Infecciones, alergias',
    gloveTypes: ['Nitrilo', 'Vinilo', 'Polietileno'],
    testMethod: 'EN 374-5 - Microorganismos',
    levelRequired: 'VIRUS/BACTERIA según norma'
  }
];

export default function GuantesTrabajoClient() {
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
        <motion.div 
          className="mb-16 px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-base text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">Guantes de Trabajo</span>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-base font-medium">EPP</Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-base font-medium">Protección Manos</Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-base font-medium">EN 388/374</Badge>
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-base font-medium">Guía Selección</Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Guantes de Trabajo: Selección por Tipo de Riesgo y Aplicación
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-base text-gray-600 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>5 Nov 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>8 min de lectura</span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5" />
              <span>2,430 visualizaciones</span>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-medium"
          >
            Manual detallado sobre guantes de protección: resistencia química, mecánica, térmica, 
            normativas EN 388 y EN 374. Aprende a elegir los guantes correctos según el tipo de riesgo laboral.
          </motion.p>

          <motion.div 
            className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-6 rounded-r-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-start">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Hand className="h-6 w-6 text-purple-500 mr-4 mt-1" />
              </motion.div>
              <div>
                <h4 className="font-bold text-purple-800 text-lg mb-2">Protección de Manos Crítica</h4>
                <p className="text-purple-700 text-base leading-relaxed">
                  El 25% de todas las lesiones laborales afectan las manos. El uso correcto de guantes certificados puede prevenir el 70% de estas lesiones.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Estadísticas de lesiones */}
        <motion.div 
          className="mb-12 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 shadow-lg">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <AlertTriangle className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-bold text-red-900 mb-4 text-xl">📊 Estadísticas de Lesiones en Manos</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                      className="text-center bg-white p-4 rounded-xl shadow-sm"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">25%</div>
                      <div className="text-base text-red-700 font-medium">de todas las lesiones laborales</div>
                    </motion.div>
                    <motion.div 
                      className="text-center bg-white p-4 rounded-xl shadow-sm"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">70%</div>
                      <div className="text-base text-red-700 font-medium">se pudieron prevenir con EPP</div>
                    </motion.div>
                    <motion.div 
                      className="text-center bg-white p-4 rounded-xl shadow-sm"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">$15,000</div>
                      <div className="text-base text-red-700 font-medium">costo promedio por lesión</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Introducción */}
        <section className="mb-12 px-4 md:px-0">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Los <strong>guantes de protección</strong> son fundamentales para prevenir lesiones en las manos, 
            que representan la cuarta parte de todos los accidentes laborales. La selección correcta requiere 
            evaluar el tipo de riesgo, material del guante y normativas aplicables.
          </p>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Factores Clave para la Selección</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Identificación del riesgo específico (químico, mecánico, térmico, biológico)</li>
                    <li>• Evaluación de la concentración y tiempo de exposición</li>
                    <li>• Verificación de certificaciones EN 388, EN 374 o EN 407</li>
                    <li>• Consideración de la destreza manual requerida</li>
                    <li>• Compatibilidad con otros equipos de protección</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tipos de Guantes */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Guantes por Material</h2>
          
          <div className="grid gap-6">
            {gloveTypes.map((glove, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-4 h-4 rounded-full bg-${glove.color}-500`}></div>
                        <h3 className="text-xl font-bold text-gray-900">{glove.name}</h3>
                        <Badge variant="secondary">{glove.certification}</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{glove.protection}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="font-semibold text-gray-700">Resistencia: </span>
                          <span className="text-green-600">{glove.resistance}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Precio: </span>
                          <span className="text-blue-600 font-bold">{glove.price}</span>
                        </div>
                        <div className="md:col-span-2">
                          <span className="font-semibold text-gray-700">Aplicaciones: </span>
                          <span className="text-gray-600">{glove.applications}</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-2 text-sm">Ventajas:</h5>
                          <ul className="text-xs text-green-600 space-y-1">
                            {glove.pros.map((pro, i) => (
                              <li key={i}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-700 mb-2 text-sm">Desventajas:</h5>
                          <ul className="text-xs text-red-600 space-y-1">
                            {glove.cons.map((con, i) => (
                              <li key={i}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Matriz de Riesgo */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Matriz de Selección por Tipo de Riesgo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {riskMatrix.map((risk, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Riesgo {risk.risk}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Síntomas: </span>
                      <span className="text-red-600">{risk.symptoms}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Guantes recomendados: </span>
                      <span className="text-green-600">{risk.gloveTypes.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Método de prueba: </span>
                      <span className="text-blue-600">{risk.testMethod}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Nivel requerido: </span>
                      <span className="text-purple-600">{risk.levelRequired}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Normativas */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Normativas Europeas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  EN 388 - Riesgos Mecánicos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-green-800 text-sm">
                  Define los niveles de protección contra abrasión, corte por cuchilla, rasgadura y perforación.
                </p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li><strong>Abrasión:</strong> Niveles 1-4 (ciclos hasta rotura)</li>
                  <li><strong>Corte:</strong> Niveles 1-5 (fuerza en Newtons)</li>
                  <li><strong>Rasgadura:</strong> Niveles 1-4 (fuerza en Newtons)</li>
                  <li><strong>Perforación:</strong> Niveles 1-4 (fuerza en Newtons)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  EN 374 - Riesgos Químicos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-blue-800 text-sm">
                  Especifica los requisitos para guantes que protegen contra productos químicos y microorganismos.
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>Tipo A:</strong> Resistencia a 6+ químicos (30 min)</li>
                  <li><strong>Tipo B:</strong> Resistencia a 3+ químicos (30 min)</li>
                  <li><strong>Tipo C:</strong> Resistencia a 1+ químico (10 min)</li>
                  <li><strong>Microorganismos:</strong> Virus y bacterias</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Artículos Relacionados */}
        <section className="mb-12 px-4 md:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/guia-completa-chalecos-seguridad" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Chalecos de Seguridad</h4>
              <p className="text-sm text-gray-600">Guía completa de protección corporal</p>
            </Link>
            <Link href="/blog/manual-cascos-seguridad-proteccion-craneal" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Cascos de Protección</h4>
              <p className="text-sm text-gray-600">Todo sobre protección craneal</p>
            </Link>
            <Link href="/blog/guia-calzado-seguridad-proteccion-pies" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Calzado de Seguridad</h4>
              <p className="text-sm text-gray-600">Protección de pies NOM-113</p>
            </Link>
            <Link href="/blog/proteccion-respiratoria-mascaras-respiradores" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Protección Respiratoria</h4>
              <p className="text-sm text-gray-600">Máscaras y respiradores</p>
            </Link>
          </div>
        </section>
      </article>
    </BlogLayout>
  );
}