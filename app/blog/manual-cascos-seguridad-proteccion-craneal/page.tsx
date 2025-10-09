'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download, Zap, Thermometer, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function ManualCascosSeguridad() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Manual Completo de Cascos de Seguridad: Protección Craneal Efectiva',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'manual-cascos-seguridad-proteccion-craneal');
    trackBlogView(guideId, 'Manual Completo de Cascos de Seguridad: Protección Craneal Efectiva', 'guia_epp');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'cascos_guide');
  };

  const tabs = [
    { id: 0, title: 'Tipos de Cascos', icon: '🛡️' },
    { id: 1, title: 'Normativas', icon: '📋' },
    { id: 2, title: 'Selección Correcta', icon: '🎯' },
    { id: 3, title: 'Mantenimiento', icon: '🔧' }
  ];

  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-100 text-blue-800">EPP</Badge>
            <Badge className="bg-green-100 text-green-800">Protección Craneal</Badge>
            <Badge className="bg-purple-100 text-purple-800">Manual Técnico</Badge>
            <Badge className="bg-red-100 text-red-800">EN 397</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Manual Completo de Cascos de Seguridad: Protección Craneal Efectiva
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>3,120 visualizaciones</span>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800">Protección Vital</h4>
                <p className="text-red-700 text-sm">
                  Los cascos de seguridad pueden prevenir hasta el 85% de las lesiones craneales graves en el lugar de trabajo. 
                  Su uso correcto es literalmente una cuestión de vida o muerte.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introducción */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Los cascos de seguridad constituyen la primera línea de defensa contra lesiones craneales en entornos industriales. 
            Este manual técnico proporciona información completa sobre selección, uso y mantenimiento de cascos de protección 
            según las normativas europeas EN 397, EN 50365 y EN 12492.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Estadísticas de Seguridad</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15%</div>
                <div className="text-blue-700">de accidentes laborales afectan la cabeza</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-blue-700">de lesiones prevenibles con cascos adecuados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">€50K</div>
                <div className="text-blue-700">coste medio por accidente craneal</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id, tab.title)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {activeTab === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Cascos de Seguridad</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Clasificación por Material del Casquete</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        Cascos de Termoplástico
                      </h4>
                      <ul className="space-y-2 text-gray-700 mb-4">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Polietileno de alta densidad (HDPE)</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />ABS (Acrilonitrilo Butadieno Estireno)</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Policarbonato</li>
                      </ul>
                      <div className="bg-blue-50 p-3 rounded text-sm">
                        <strong>Ventajas:</strong> Ligeros, económicos, resistentes a químicos
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        Cascos de Materiales Termoestables
                      </h4>
                      <ul className="space-y-2 text-gray-700 mb-4">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Fibra de vidrio</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Resinas fenólicas</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Materiales compuestos</li>
                      </ul>
                      <div className="bg-green-50 p-3 rounded text-sm">
                        <strong>Ventajas:</strong> Mayor resistencia dieléctrica, mejor resistencia al calor
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Cascos Especializados por Riesgo</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                        <h4 className="font-semibold text-yellow-800">Riesgo Eléctrico</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• EN 50365: Hasta 1000V AC o 1500V DC</li>
                        <li>• Materiales aislantes certificados</li>
                        <li>• Sin partes metálicas expuestas</li>
                        <li>• Barboquejo no conductor</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Thermometer className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-red-800">Alta Temperatura</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Resistencia hasta 150°C continuos</li>
                        <li>• Materiales termoestables</li>
                        <li>• Protección radiación infrarroja</li>
                        <li>• Ventilación específica</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-blue-800">Químicos</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Resistencia a ácidos y bases</li>
                        <li>• Superficie lisa para limpieza</li>
                        <li>• Materiales no porosos</li>
                        <li>• Certificación química específica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Sistemas de Suspensión</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Suspensión de 4 Puntos</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Distribución básica del peso</li>
                        <li>• Más económica</li>
                        <li>• Adecuada para uso ocasional</li>
                        <li>• Menor estabilidad lateral</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Suspensión de 6-8 Puntos</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Mayor distribución del impacto</li>
                        <li>• Mejor comodidad prolongada</li>
                        <li>• Mayor estabilidad</li>
                        <li>• Recomendada para uso continuo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Normativas y Certificaciones</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">EN 397:2012+A1:2012 - Norma Básica</h3>
                  <p className="text-blue-800 mb-4">
                    Norma fundamental que establece los requisitos generales para cascos de protección industrial.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Ensayos Obligatorios:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1" />Absorción de choque</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1" />Resistencia a la penetración</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1" />Retención del arnés</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1" />Resistencia a la llama</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Ensayos Opcionales:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-orange-100 text-orange-800">MM</Badge>Salpicaduras de metal fundido</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-red-100 text-red-800">440V</Badge>Aislamiento eléctrico</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-purple-100 text-purple-800">LD</Badge>Deformación lateral</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-blue-100 text-blue-800">-30°C</Badge>Muy bajas temperaturas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">EN 50365:2002 - Riesgo Eléctrico</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Clases de Protección:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white rounded">
                          <span className="font-medium">Clase 0</span>
                          <span className="text-sm">Hasta 1000V AC</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-white rounded">
                          <span className="font-medium">Clase 00</span>
                          <span className="text-sm">Hasta 500V AC</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requisitos Específicos:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Rigidez dieléctrica certificada</li>
                        <li>• Resistencia de aislamiento</li>
                        <li>• Ausencia de partes conductoras</li>
                        <li>• Ensayos en condiciones húmedas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">Marcado y Etiquetado</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Información Obligatoria:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Número de norma (EN 397)</li>
                        <li>• Nombre y logo del fabricante</li>
                        <li>• Año y trimestre de fabricación</li>
                        <li>• Talla del casco</li>
                        <li>• Rango de temperatura de uso</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Marcas de Conformidad:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• CE seguido del número del organismo</li>
                        <li>• Símbolos de ensayos opcionales</li>
                        <li>• Instrucciones de uso y cuidado</li>
                        <li>• Fecha de caducidad recomendada</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Normativas Complementarias</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">EN 12492 - Cascos de Alpinismo Industrial</h4>
                      <p className="text-sm text-gray-600">Para trabajos en altura con riesgo de caída de objetos y del propio trabajador.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 443 - Cascos para Bomberos</h4>
                      <p className="text-sm text-gray-600">Protección específica contra impactos, penetración y calor radiante.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 14052 - Cascos de Alta Prestación</h4>
                      <p className="text-sm text-gray-600">Mayor absorción de energía para industrias de alto riesgo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selección y Uso Correcto</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Matriz de Selección por Industria</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Sector Industrial</th>
                          <th className="border border-gray-300 p-3 text-center">Tipo Recomendado</th>
                          <th className="border border-gray-300 p-3 text-left">Características Especiales</th>
                          <th className="border border-gray-300 p-3 text-left">Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Construcción General</td>
                          <td className="border border-gray-300 p-3 text-center">HDPE/ABS</td>
                          <td className="border border-gray-300 p-3">Ventilación, porta-lámparas</td>
                          <td className="border border-gray-300 p-3">EN 397</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Trabajo Eléctrico</td>
                          <td className="border border-gray-300 p-3 text-center">Termoestable</td>
                          <td className="border border-gray-300 p-3">Aislamiento 1000V</td>
                          <td className="border border-gray-300 p-3">EN 50365</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Soldadura</td>
                          <td className="border border-gray-300 p-3 text-center">Fibra de vidrio</td>
                          <td className="border border-gray-300 p-3">Resistencia salpicaduras MM</td>
                          <td className="border border-gray-300 p-3">EN 397 + MM</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Industria Química</td>
                          <td className="border border-gray-300 p-3 text-center">Policarbonato</td>
                          <td className="border border-gray-300 p-3">Resistencia química</td>
                          <td className="border border-gray-300 p-3">EN 397</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Trabajos en Altura</td>
                          <td className="border border-gray-300 p-3 text-center">Alpinismo</td>
                          <td className="border border-gray-300 p-3">Puntos de anclaje</td>
                          <td className="border border-gray-300 p-3">EN 12492</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-green-900">✅ Ajuste Correcto</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium">Pasos para ajuste óptimo:</h4>
                        <ol className="ml-4 space-y-1 mt-2">
                          <li>1. Ajustar la banda de cabeza (53-62 cm)</li>
                          <li>2. Posicionar la banda frontal 2-3 cm sobre las cejas</li>
                          <li>3. Ajustar distancia casquete-cabeza (20-30 mm)</li>
                          <li>4. Verificar estabilidad lateral</li>
                          <li>5. Comprobar comodidad durante 15 minutos</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-red-900">❌ Errores Críticos</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Usar casco dañado o caducado</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Modificar el casco original</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Llevar gorra debajo del casco</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Ajuste demasiado flojo o apretado</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No usar barboquejo cuando sea necesario</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Almacenar en lugares con calor excesivo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Accesorios y Complementos</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Protección Auditiva</h4>
                      <ul className="space-y-1">
                        <li>• Cascos adaptables</li>
                        <li>• SNR hasta 30 dB</li>
                        <li>• Comunicación integrada</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Protección Facial</h4>
                      <ul className="space-y-1">
                        <li>• Pantallas de policarbonato</li>
                        <li>• Mallas metálicas</li>
                        <li>• Visores para soldadura</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Iluminación</h4>
                      <ul className="space-y-1">
                        <li>• Lámparas LED frontales</li>
                        <li>• Baterías recargables</li>
                        <li>• Certificación ATEX</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Climatización</h4>
                      <ul className="space-y-1">
                        <li>• Sistemas de ventilación</li>
                        <li>• Sudaderas absorbentes</li>
                        <li>• Almohadillas de confort</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mantenimiento y Vida Útil</h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Inspección Diaria</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Checklist pre-uso:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Grietas en casquete</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Estado del sistema de suspensión</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Funcionamiento del arnés</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Legibilidad del marcado</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Limpieza general</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Fecha de fabricación</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Limpieza y Desinfección</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Procedimiento estándar:</h4>
                      <ol className="ml-4 space-y-1 mt-2">
                        <li>1. Desmontaje del sistema de suspensión</li>
                        <li>2. Lavado con agua tibia y jabón neutro</li>
                        <li>3. Desinfección con alcohol isopropílico</li>
                        <li>4. Secado completo al aire libre</li>
                        <li>5. Montaje verificando el estado</li>
                        <li>6. Registro de mantenimiento</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Vida Útil y Reemplazo</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Casquete Principal</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong>Termoplástico:</strong> 3-5 años</li>
                        <li><strong>Termoestable:</strong> 5-10 años</li>
                        <li><strong>Con exposición UV:</strong> -50% vida</li>
                        <li><strong>Uso intensivo:</strong> Inspección trimestral</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Sistema de Suspensión</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong>Uso normal:</strong> 12 meses</li>
                        <li><strong>Uso intensivo:</strong> 6 meses</li>
                        <li><strong>Ambiente corrosivo:</strong> 3 meses</li>
                        <li><strong>Después de impacto:</strong> Inmediato</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Indicadores de Reemplazo</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Decoloración severa</li>
                        <li>• Grietas o fisuras</li>
                        <li>• Deformación permanente</li>
                        <li>• Pérdida de flexibilidad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Criterios de Descarte Inmediato</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Daños Estructurales:</h4>
                      <ul className="space-y-1">
                        <li>• Grietas en cualquier zona del casquete</li>
                        <li>• Perforación o penetración</li>
                        <li>• Deformación por impacto</li>
                        <li>• Separación de capas en materiales laminados</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Deterioro del Sistema:</h4>
                      <ul className="space-y-1">
                        <li>• Rotura de banda o arnés</li>
                        <li>• Pérdida de elasticidad de suspensión</li>
                        <li>• Corrosión en elementos metálicos</li>
                        <li>• Exposición a productos químicos agresivos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Programa de Mantenimiento</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">Frecuencia</th>
                          <th className="border border-gray-300 p-2 text-left">Actividad</th>
                          <th className="border border-gray-300 p-2 text-left">Responsable</th>
                          <th className="border border-gray-300 p-2 text-left">Registro</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">Diaria</td>
                          <td className="border border-gray-300 p-2">Inspección visual pre-uso</td>
                          <td className="border border-gray-300 p-2">Usuario</td>
                          <td className="border border-gray-300 p-2">Check-list personal</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">Semanal</td>
                          <td className="border border-gray-300 p-2">Limpieza profunda</td>
                          <td className="border border-gray-300 p-2">Usuario</td>
                          <td className="border border-gray-300 p-2">Registro de limpieza</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Mensual</td>
                          <td className="border border-gray-300 p-2">Inspección técnica detallada</td>
                          <td className="border border-gray-300 p-2">Supervisor seguridad</td>
                          <td className="border border-gray-300 p-2">Ficha técnica</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">Anual</td>
                          <td className="border border-gray-300 p-2">Revisión completa y decisión de reemplazo</td>
                          <td className="border border-gray-300 p-2">Técnico especialista</td>
                          <td className="border border-gray-300 p-2">Certificado técnico</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Descarga PDF */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Download className="h-8 w-8 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Manual Completo en PDF</h3>
          <p className="mb-4 text-blue-100">
            Descarga este manual técnico completo con checklist de inspección, tablas de selección y programas de mantenimiento.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => trackInteraction('download_click', 'manual_cascos_pdf', 'cascos_guide')}
          >
            Descargar Manual Técnico PDF
          </button>
        </motion.div>

        {/* Conclusión */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La protección craneal efectiva requiere una comprensión profunda de los riesgos, normativas y tecnologías disponibles. 
            La selección correcta del casco, su ajuste adecuado y mantenimiento regular son elementos críticos para garantizar 
            la máxima protección del trabajador.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Este manual proporciona las herramientas necesarias para implementar un programa robusto de protección craneal 
            que cumpla con las más exigentes normativas de seguridad europeas.
          </p>
        </motion.section>
      </article>
    </BlogLayout>
  );
}