'use client';

import BlogLayout from '@/components/blog/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertTriangle, Shield, Zap, Eye, Info, ExternalLink, Calendar, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const respiratorTypes = [
  {
    name: 'Respirador N95 (NIOSH)',
    protection: 'Partículas no aceitosas',
    efficiency: '95%',
    uses: 'Polvo, polen, partículas de construcción',
    price: '$150 MXN (Pack 3)',
    certification: 'NOM-116 / NIOSH N95',
    color: 'blue',
    link: 'https://mercadolibre.com/sec/1y9ipYB'
  },
  {
    name: 'Respirador N99/P100',
    protection: 'Partículas tóxicas y humos',
    efficiency: '99.97%',
    uses: 'Soldadura, plomo, asbesto',
    price: '$340 MXN (Pack 10)',
    certification: 'NOM-116 / NIOSH P100',
    color: 'yellow',
    link: 'https://mercadolibre.com/sec/1Sy5jEP'
  },
  {
    name: 'Respirador R95',
    protection: 'Partículas con aceite',
    efficiency: '95%',
    uses: 'Pintura, solventes, petroquímica',
    price: '$410 MXN',
    certification: 'NOM-116 / NIOSH R95',
    color: 'red',
    link: 'https://mercadolibre.com/sec/1iUuf9x'
  },
  {
    name: 'Respirador Media Cara',
    protection: 'Gases, vapores y partículas',
    efficiency: '95-99%',
    uses: 'Pinturas, químicos, disolventes',
    price: '$250 - $500 MXN',
    certification: 'NOM-116-STPS',
    color: 'green',
    link: 'https://mercadolibre.com/sec/1zQQGoi'
  },
  {
    name: 'Respirador Cara Completa',
    protection: 'Protección total respiratoria y ocular',
    efficiency: '99.97%',
    uses: 'Químicos peligrosos, emergencias',
    price: '$270 - $800 MXN',
    certification: 'NOM-116-STPS',
    color: 'purple',
    link: 'https://mercadolibre.com/sec/1Pw8Xku'
  }
];

const filterGuide = [
  {
    type: 'Filtro N95',
    color: 'Blanco',
    protection: 'Partículas sólidas sin aceite',
    efficiency: '95%',
    uses: 'Polvo de cemento, madera, textiles'
  },
  {
    type: 'Filtro R95',
    color: 'Blanco',
    protection: 'Partículas con aceite (tiempo limitado)',
    efficiency: '95%',
    uses: 'Humos de soldadura, aerosoles aceitosos'
  },
  {
    type: 'Filtro P100',
    color: 'Magenta',
    protection: 'Partículas altamente tóxicas y aceites',
    efficiency: '99.97%',
    uses: 'Asbesto, plomo, arsénico'
  },
  {
    type: 'Cartucho OV',
    color: 'Negro',
    protection: 'Vapores orgánicos',
    efficiency: 'Variable',
    uses: 'Disolventes, pinturas, barnices'
  },
  {
    type: 'Cartucho AG',
    color: 'Amarillo',
    protection: 'Gases ácidos',
    efficiency: 'Variable',
    uses: 'Cloro, ácido clorhídrico'
  }
];

export default function ProteccionRespiratoriaClient() {
  return (
    <BlogLayout>
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
            <span className="text-gray-900 font-medium">Protección Respiratoria</span>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-base font-medium">EPP</Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-base font-medium">Normativas EN 149/140</Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-base font-medium">Guía Técnica</Badge>
            <Badge className="bg-red-100 text-red-800 px-4 py-2 text-base font-medium">Respiradores</Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Protección Respiratoria: Máscaras y Respiradores Industriales
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-base text-gray-600 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>8 Nov 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>11 min de lectura</span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5" />
              <span>1,920 visualizaciones</span>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-medium"
          >
            Guía completa sobre equipos de protección respiratoria: tipos de filtros, factores de protección, 
            normativas EN 149 y EN 140, y cómo elegir el respirador correcto según el riesgo laboral.
          </motion.p>

          <motion.div 
            className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-400 p-6 rounded-r-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-start">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="h-6 w-6 text-green-500 mr-4 mt-1" />
              </motion.div>
              <div>
                <h4 className="font-bold text-green-800 text-lg mb-2">Protección Vital</h4>
                <p className="text-green-700 text-base leading-relaxed">
                  Las enfermedades respiratorias ocupacionales afectan a millones de trabajadores. Un respirador certificado es tu primera defensa contra contaminantes aéreos.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La <strong>protección respiratoria</strong> es fundamental en ambientes laborales donde existe exposición 
            a partículas, gases, vapores o aerosoles nocivos. La elección correcta del respirador puede marcar 
            la diferencia entre la salud y la enfermedad ocupacional.
          </p>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Datos Importantes</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Las enfermedades respiratorias ocupacionales causan más de 2.6 millones de muertes anuales</li>
                    <li>• El 15% de los cánceres ocupacionales están relacionados con exposición a sustancias inhalables</li>
                    <li>• Un respirador mal seleccionado puede ofrecer menos del 10% de la protección esperada</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tipos de Respiradores */}
        <section id="tipos-respiradores" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Respiradores</h2>
          
          <div className="grid gap-6">
            {respiratorTypes.map((respirator, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-4 h-4 rounded-full bg-${respirator.color}-500`}></div>
                        <h3 className="text-xl font-bold text-gray-900">{respirator.name}</h3>
                        <Badge variant="secondary">{respirator.certification}</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{respirator.protection}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700">Eficiencia: </span>
                          <span className="text-green-600 font-bold">{respirator.efficiency}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Precio: </span>
                          <span className="text-blue-600 font-bold">{respirator.price}</span>
                        </div>
                        <div className="md:col-span-2">
                          <span className="font-semibold text-gray-700">Aplicaciones: </span>
                          <span className="text-gray-600">{respirator.uses}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-48">
                      <Button asChild className="w-full">
                        <Link href={respirator.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Producto
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guía de Filtros */}
        <section id="guia-filtros" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guía de Filtros para Respiradores</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {filterGuide.map((filter, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded border-2 border-gray-300 ${
                      filter.color === 'Blanco' ? 'bg-gray-100' :
                      filter.color === 'Marrón' ? 'bg-amber-700' : 'bg-gray-400'
                    }`}></div>
                    <CardTitle className="text-lg">{filter.type}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{filter.protection}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Eficiencia: </span>
                      <span className="text-green-600">{filter.efficiency}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Uso típico: </span>
                      <span className="text-gray-600">{filter.uses}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Factores de Selección */}
        <section id="factores-seleccion" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Factores de Selección</h2>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Matriz de Selección de Respiradores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Contaminante</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Concentración</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Respirador Recomendado</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-900">Factor Protección</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Polvo no tóxico</td>
                      <td className="py-3 px-4">Baja</td>
                      <td className="py-3 px-4">Mascarilla FFP1</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">4x</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Humos de soldadura</td>
                      <td className="py-3 px-4">Media</td>
                      <td className="py-3 px-4">Mascarilla FFP2</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">12x</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Asbesto, radiactivos</td>
                      <td className="py-3 px-4">Alta</td>
                      <td className="py-3 px-4">Mascarilla FFP3</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">50x</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Gases, vapores</td>
                      <td className="py-3 px-4">Variable</td>
                      <td className="py-3 px-4">Media cara + Filtros</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">10-50x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Normativas */}
        <section id="normativas" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Normativas y Certificaciones</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  EN 149 - Mascarillas Autofiltrantes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-green-800 text-sm">
                  Especifica los requisitos mínimos para mascarillas filtrantes contra partículas.
                </p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li><strong>FFP1:</strong> Hasta 4 x TLV (80% eficiencia mínima)</li>
                  <li><strong>FFP2:</strong> Hasta 12 x TLV (94% eficiencia mínima)</li>
                  <li><strong>FFP3:</strong> Hasta 50 x TLV (99% eficiencia mínima)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  EN 140 - Respiradores Media Cara
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-blue-800 text-sm">
                  Define requisitos para respiradores reutilizables de media cara con filtros intercambiables.
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li><strong>Clase 1:</strong> Filtros para partículas</li>
                  <li><strong>Clase 2:</strong> Filtros para gases y vapores</li>
                  <li><strong>Clase 3:</strong> Filtros combinados</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mantenimiento */}
        <section id="mantenimiento" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mantenimiento y Cuidado</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Buenas Prácticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Inspeccionar visualmente antes de cada uso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Realizar prueba de sello facial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Limpiar y desinfectar después del uso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Almacenar en lugar limpio y seco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cambiar filtros según fabricante</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Señales de Reemplazo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• Mayor esfuerzo respiratorio</li>
                  <li>• Detección de olores o sabores</li>
                  <li>• Daños visibles en el respirador</li>
                  <li>• Deformación de la pieza facial</li>
                  <li>• Válvulas dañadas o sucias</li>
                  <li>• Tiempo de uso recomendado superado</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Productos Recomendados */}
        <section id="recomendaciones" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Productos Recomendados</h2>
          
          <div className="grid gap-4">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-yellow-900">
                    <Star className="w-5 h-5 fill-current" />
                    Mejor Relación Calidad-Precio
                  </CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">Recomendado</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">Mascarilla 3M 9502+ FFP2</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Mascarilla autofiltrante con válvula de exhalación, diseño plegable y certificación EN 149:2001+A1:2009.
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div><strong>Precio:</strong> $28 MXN/unidad</div>
                      <div><strong>Eficiencia:</strong> 94% mínimo</div>
                      <div><strong>Resistencia:</strong> &lt; 2.4 mbar</div>
                      <div><strong>Válvula:</strong> Sí (CoolFlow)</div>
                    </div>
                  </div>
                  <div className="lg:w-48">
                    <Link href="https://mercadolibre.com/sec/1Sy5jEP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver en MercadoLibre
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Uso Profesional Intensivo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">Respirador MSA Advantage 900 + Filtros P100</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Respirador reutilizable de media cara con filtros intercambiables P100 para máxima protección.
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div><strong>Precio:</strong> $450 MXN (respirador)</div>
                      <div><strong>Filtros P100:</strong> $85 MXN/par</div>
                      <div><strong>Certificación:</strong> NIOSH/EN 140</div>
                      <div><strong>Factor protección:</strong> 10x</div>
                    </div>
                  </div>
                  <div className="lg:w-48">
                    <Link href="https://mercadolibre.com/sec/1zQQGoi" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Producto
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Artículos Relacionados */}
        <section className="mb-12">
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
            <Link href="/blog/guantes-trabajo-seleccion-riesgo-aplicacion" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Guantes de Trabajo</h4>
              <p className="text-sm text-gray-600">Selección por tipo de riesgo</p>
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