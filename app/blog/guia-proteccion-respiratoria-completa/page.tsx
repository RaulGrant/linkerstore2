'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download, Wind, Skull, Activity, Gauge } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function GuiaProteccionRespiratoria() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Guía Completa de Protección Respiratoria: Equipos y Normativas',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'guia-proteccion-respiratoria-completa');
    trackBlogView(guideId, 'Guía Completa de Protección Respiratoria: Equipos y Normativas', 'guia_epp');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'respiratoria_guide');
  };

  const tabs = [
    { id: 0, title: 'Tipos de EPR', icon: '😷' },
    { id: 1, title: 'Normativas', icon: '📋' },
    { id: 2, title: 'Selección Técnica', icon: '🔬' },
    { id: 3, title: 'Uso y Mantenimiento', icon: '🔧' }
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
            <Badge className="bg-red-100 text-red-800">Protección Respiratoria</Badge>
            <Badge className="bg-blue-100 text-blue-800">EN 149</Badge>
            <Badge className="bg-green-100 text-green-800">FFP1-FFP3</Badge>
            <Badge className="bg-purple-100 text-purple-800">Equipos Filtrantes</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía Completa de Protección Respiratoria: Equipos y Normativas
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>20 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>5,420 visualizaciones</span>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <Skull className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800">Protección Vital de las Vías Respiratorias</h4>
                <p className="text-red-700 text-sm">
                  Las enfermedades respiratorias ocupacionales causan más del 40% de las muertes relacionadas con el trabajo. 
                  La selección y uso correcto de equipos de protección respiratoria puede salvar vidas.
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
            La protección respiratoria es fundamental para prevenir la inhalación de contaminantes peligrosos en el lugar de trabajo. 
            Esta guía técnica cubre los aspectos esenciales de los equipos de protección respiratoria (EPR), desde mascarillas 
            desechables FFP hasta equipos de suministro de aire, siguiendo las normativas europeas EN 149, EN 140 y EN 136.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Datos Críticos de Exposición</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2.3M</div>
                <div className="text-blue-700">trabajadores expuestos a agentes respiratorios en España</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">30%</div>
                <div className="text-blue-700">de cánceres ocupacionales son pulmonares</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-blue-700">de efectividad con equipos correctamente seleccionados</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Equipos de Protección Respiratoria</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Clasificación General de EPR</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
                        <Wind className="h-5 w-5 text-blue-600 mr-2" />
                        Equipos Filtrantes
                      </h4>
                      <p className="text-blue-700 text-sm mb-4">
                        Purifican el aire ambiente eliminando contaminantes mediante filtración.
                      </p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Mascarillas autofiltrantes (FFP1, FFP2, FFP3)</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Medias máscaras con filtros</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Máscaras completas con filtros</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Equipos motorizados (TM1P, TM2P, TM3P)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-green-800">
                        <Activity className="h-5 w-5 text-green-600 mr-2" />
                        Equipos Aislantes
                      </h4>
                      <p className="text-green-700 text-sm mb-4">
                        Suministran aire respirable independiente del ambiente contaminado.
                      </p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Equipos autónomos (ERA) con botella</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Equipos semiautónomos con manguera</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Equipos de línea de aire comprimido</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Trajes de protección química total</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Mascarillas Autofiltrantes (EN 149)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="font-semibold text-green-800">FFP1</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>Eficacia filtrado:</strong> ≥80%</li>
                        <li><strong>Fuga hacia interior:</strong> ≤22%</li>
                        <li><strong>Factor protección:</strong> 4x</li>
                        <li><strong>Uso típico:</strong> Polvo no tóxico</li>
                        <li><strong>Concentración max:</strong> 4 x VLA</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Shield className="h-5 w-5 text-orange-600 mr-2" />
                        <h4 className="font-semibold text-orange-800">FFP2</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>Eficacia filtrado:</strong> ≥94%</li>
                        <li><strong>Fuga hacia interior:</strong> ≤8%</li>
                        <li><strong>Factor protección:</strong> 12x</li>
                        <li><strong>Uso típico:</strong> Polvo, humo, aerosoles</li>
                        <li><strong>Concentración max:</strong> 12 x VLA</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Shield className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-red-800">FFP3</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>Eficacia filtrado:</strong> ≥99%</li>
                        <li><strong>Fuga hacia interior:</strong> ≤2%</li>
                        <li><strong>Factor protección:</strong> 50x</li>
                        <li><strong>Uso típico:</strong> Sustancias tóxicas, radiactivas</li>
                        <li><strong>Concentración max:</strong> 50 x VLA</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Tipos de Filtros para Máscaras</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Tipo</th>
                          <th className="border border-gray-300 p-3 text-center">Color</th>
                          <th className="border border-gray-300 p-3 text-left">Protección Contra</th>
                          <th className="border border-gray-300 p-3 text-left">Aplicaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">A</td>
                          <td className="border border-gray-300 p-3 text-center">
                            <div className="w-6 h-6 bg-amber-600 rounded mx-auto"></div>
                          </td>
                          <td className="border border-gray-300 p-3">Gases y vapores orgánicos (P.e. &gt;65°C)</td>
                          <td className="border border-gray-300 p-3">Disolventes, hidrocarburos</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">B</td>
                          <td className="border border-gray-300 p-3 text-center">
                            <div className="w-6 h-6 bg-gray-500 rounded mx-auto"></div>
                          </td>
                          <td className="border border-gray-300 p-3">Gases y vapores inorgánicos</td>
                          <td className="border border-gray-300 p-3">Cloro, sulfuro de hidrógeno</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">E</td>
                          <td className="border border-gray-300 p-3 text-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded mx-auto"></div>
                          </td>
                          <td className="border border-gray-300 p-3">Dióxido de azufre y vapores ácidos</td>
                          <td className="border border-gray-300 p-3">Industria química, galvanotecnia</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">K</td>
                          <td className="border border-gray-300 p-3 text-center">
                            <div className="w-6 h-6 bg-green-500 rounded mx-auto"></div>
                          </td>
                          <td className="border border-gray-300 p-3">Amoníaco y derivados orgánicos del amoníaco</td>
                          <td className="border border-gray-300 p-3">Industria alimentaria, refrigeración</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">P3</td>
                          <td className="border border-gray-300 p-3 text-center">
                            <div className="w-6 h-6 bg-white border rounded mx-auto"></div>
                          </td>
                          <td className="border border-gray-300 p-3">Partículas sólidas y líquidas</td>
                          <td className="border border-gray-300 p-3">Polvo, humo, aerosoles tóxicos</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Equipos Motorizados (TM)</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">TM1P (Factor 10):</h4>
                      <ul className="space-y-1">
                        <li>• Cascos y capuchas ventilados</li>
                        <li>• Caudal mínimo 120 L/min</li>
                        <li>• Protección contra partículas P1</li>
                        <li>• Ambientes de baja contaminación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">TM2P (Factor 20):</h4>
                      <ul className="space-y-1">
                        <li>• Cascos con filtros P2</li>
                        <li>• Caudal mínimo 160 L/min</li>
                        <li>• Soldadura, corte plasma</li>
                        <li>• Amianto, sílice cristalina</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">TM3P (Factor 100):</h4>
                      <ul className="space-y-1">
                        <li>• Máscaras completas motorizadas</li>
                        <li>• Caudal mínimo 200 L/min</li>
                        <li>• Sustancias altamente tóxicas</li>
                        <li>• Espacios confinados</li>
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
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">EN 149:2001+A1:2009 - Mascarillas Autofiltrantes</h3>
                  <p className="text-blue-800 mb-4">
                    Especifica los requisitos mínimos para mascarillas autofiltrantes contra partículas, 
                    incluyendo métodos de ensayo y marcado.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Ensayos de Eficacia Filtrante:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Penetración inicial con NaCl y aceite de parafina</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Ensayo de colmatación (carga de polvo dolomita)</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Resistencia respiratoria inicial y final</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Fuga hacia el interior (ensayo con personas)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Requisitos Adicionales:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-green-100 text-green-800">NR</Badge>No reutilizable (turno único)</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-blue-100 text-blue-800">R</Badge>Reutilizable (múltiples turnos)</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-orange-100 text-orange-800">D</Badge>Supera ensayo adicional de dolomita</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-purple-100 text-purple-800">V</Badge>Con válvula de exhalación</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">EN 140:1998 - Medias Máscaras Filtrantes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Requisitos de Construcción:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Materiales biocompatibles</li>
                        <li>• Resistencia a la deformación</li>
                        <li>• Conexión estándar para filtros</li>
                        <li>• Campo de visión mínimo</li>
                        <li>• Válvulas de exhalación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ensayos de Estanqueidad:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Fuga hacia el interior &lt;2%</li>
                        <li>• Ensayo con gas trazador</li>
                        <li>• Pruebas con 10 personas mínimo</li>
                        <li>• Diferentes tallas faciales</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">EN 136:1998 - Máscaras Completas</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium">Clase 1:</h4>
                        <ul className="space-y-1">
                          <li>• Uso hasta 8 horas</li>
                          <li>• Trabajo ligero a moderado</li>
                          <li>• Fuga &lt;0.05%</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Clase 2:</h4>
                        <ul className="space-y-1">
                          <li>• Uso hasta 4 horas</li>
                          <li>• Trabajo moderado a pesado</li>
                          <li>• Fuga &lt;0.05%</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Clase 3:</h4>
                        <ul className="space-y-1">
                          <li>• Uso hasta 2 horas</li>
                          <li>• Trabajo muy pesado</li>
                          <li>• Fuga &lt;0.05%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Marcado CE y Información Obligatoria</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">En el Producto:</h4>
                      <ul className="space-y-1">
                        <li>• Marcado CE + número organismo notificado</li>
                        <li>• Número de norma aplicable</li>
                        <li>• Clase de protección (FFP1/2/3)</li>
                        <li>• Marcas adicionales (NR/R, D, V)</li>
                        <li>• Fecha de fabricación</li>
                        <li>• Fecha de caducidad</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">En el Embalaje/Folleto:</h4>
                      <ul className="space-y-1">
                        <li>• Instrucciones de uso en idioma local</li>
                        <li>• Limitaciones y advertencias</li>
                        <li>• Condiciones de almacenamiento</li>
                        <li>• Información sobre mantenimiento</li>
                        <li>• Declaración de conformidad UE</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Normativas Complementarias</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">EN 143 - Filtros de Partículas P1, P2, P3</h4>
                      <p className="text-sm text-gray-600">Especifica requisitos para filtros contra partículas sólidas y líquidas.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 14387 - Filtros de Gas y Combinados</h4>
                      <p className="text-sm text-gray-600">Clasifica filtros tipo A, B, E, K y combinaciones AX, SX.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 12941 - Equipos Motorizados TM</h4>
                      <p className="text-sm text-gray-600">Requisitos para equipos con ventilador incorporado.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 137 - Equipos Respiratorios Autónomos</h4>
                      <p className="text-sm text-gray-600">Especificaciones para equipos de circuito abierto con aire comprimido.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selección Técnica de Equipos</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Proceso de Evaluación y Selección</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Gauge className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-sm">1. Identificación</h4>
                        <p className="text-xs text-gray-600 mt-1">Contaminantes presentes</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Activity className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-sm">2. Cuantificación</h4>
                        <p className="text-xs text-gray-600 mt-1">Concentración vs VLA</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Shield className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-sm">3. Factor Protección</h4>
                        <p className="text-xs text-gray-600 mt-1">FP requerido</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-sm">4. Selección</h4>
                        <p className="text-xs text-gray-600 mt-1">Equipo adecuado</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Matriz de Selección por Contaminante</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Tipo de Contaminante</th>
                          <th className="border border-gray-300 p-3 text-center">Concentración</th>
                          <th className="border border-gray-300 p-3 text-left">EPR Recomendado</th>
                          <th className="border border-gray-300 p-3 text-left">Filtro/Sistema</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Polvo inerte (yeso, cemento)</td>
                          <td className="border border-gray-300 p-3 text-center">&lt;4 x VLA</td>
                          <td className="border border-gray-300 p-3">FFP1</td>
                          <td className="border border-gray-300 p-3">Filtro partículas P1</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Polvo nocivo (madera, fibras)</td>
                          <td className="border border-gray-300 p-3 text-center">&lt;12 x VLA</td>
                          <td className="border border-gray-300 p-3">FFP2</td>
                          <td className="border border-gray-300 p-3">Filtro partículas P2</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Polvo tóxico (sílice, amianto)</td>
                          <td className="border border-gray-300 p-3 text-center">&lt;50 x VLA</td>
                          <td className="border border-gray-300 p-3">FFP3</td>
                          <td className="border border-gray-300 p-3">Filtro partículas P3</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Vapores orgánicos (disolventes)</td>
                          <td className="border border-gray-300 p-3 text-center">&lt;1000 ppm</td>
                          <td className="border border-gray-300 p-3">Media máscara + A1</td>
                          <td className="border border-gray-300 p-3">Filtro A1 (marrón)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Gases inorgánicos (cloro, H₂S)</td>
                          <td className="border border-gray-300 p-3 text-center">&lt;5000 ppm</td>
                          <td className="border border-gray-300 p-3">Máscara completa + B2</td>
                          <td className="border border-gray-300 p-3">Filtro B2 (gris)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Ambiente IDLH o &gt;50 x VLA</td>
                          <td className="border border-gray-300 p-3 text-center">Peligro inmediato</td>
                          <td className="border border-gray-300 p-3">Equipo autónomo (ERA)</td>
                          <td className="border border-gray-300 p-3">Aire comprimido</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-green-900">✅ Criterios de Selección Correcta</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium">Factores Técnicos:</h4>
                        <ul className="ml-4 space-y-1 mt-1">
                          <li>• Naturaleza química del contaminante</li>
                          <li>• Concentración ambiental medida</li>
                          <li>• Valor Límite Ambiental (VLA)</li>
                          <li>• Factor de Protección requerido</li>
                          <li>• Presencia de múltiples contaminantes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Factores Ambientales:</h4>
                        <ul className="ml-4 space-y-1 mt-1">
                          <li>• Deficiencia de oxígeno (&lt;19.5%)</li>
                          <li>• Temperatura y humedad</li>
                          <li>• Espacio confinado</li>
                          <li>• Duración de la exposición</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-red-900">❌ Limitaciones Críticas</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Los filtros NO protegen contra CO</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Uso prohibido si O₂ &lt; 17%</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No usar en espacios confinados sin análisis</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Factores de protección son nominales</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Barba impide sellado efectivo</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Vida útil limitada por saturación</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Cálculo del Factor de Protección Requerido</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Fórmula:</h4>
                      <div className="bg-white p-4 rounded border text-center">
                        <strong>FP requerido = Concentración medida / VLA-ED</strong>
                      </div>
                      <p className="text-sm mt-2">
                        Donde VLA-ED es el Valor Límite Ambiental de Exposición Diaria
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ejemplo práctico:</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>Sílice cristalina:</strong></p>
                        <p>• Concentración: 0.5 mg/m³</p>
                        <p>• VLA-ED: 0.05 mg/m³</p>
                        <p>• FP requerido: 0.5/0.05 = 10</p>
                        <p><strong>Solución:</strong> FFP2 (FP=12) ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Uso Correcto y Mantenimiento</h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Protocolo de Colocación</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Pasos obligatorios:</h4>
                      <ol className="ml-4 space-y-1 mt-2">
                        <li>1. Lavado de manos</li>
                        <li>2. Inspección visual del equipo</li>
                        <li>3. Colocación según instrucciones</li>
                        <li>4. Ajuste de correas y sellado</li>
                        <li>5. Prueba de estanqueidad</li>
                        <li>6. Verificación de respiración normal</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Pruebas de Estanqueidad</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Prueba de presión positiva:</h4>
                      <p className="text-gray-600 mb-2">Exhalar suavemente tapando la válvula. Debe inflarse ligeramente sin fugas.</p>
                      
                      <h4 className="font-medium">Prueba de presión negativa:</h4>
                      <p className="text-gray-600">Inhalar tapando filtros. La mascarilla debe contraerse y mantenerse así.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Cambio de Filtros - Criterios Críticos</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Filtros de Partículas:</h4>
                      <ul className="space-y-1">
                        <li>• Aumento resistencia respiratoria</li>
                        <li>• Saturación visual</li>
                        <li>• Rotura o deformación</li>
                        <li>• Final del turno (NR)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Filtros de Gases:</h4>
                      <ul className="space-y-1">
                        <li>• Detección de olor o sabor</li>
                        <li>• Irritación de mucosas</li>
                        <li>• Tiempo de servicio calculado</li>
                        <li>• Indicador de saturación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ambos Tipos:</h4>
                      <ul className="space-y-1">
                        <li>• Daño físico visible</li>
                        <li>• Fecha de caducidad</li>
                        <li>• 6 meses desde apertura</li>
                        <li>• Cambio de contaminante</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Programa de Mantenimiento</h3>
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
                          <td className="border border-gray-300 p-2">Antes de cada uso</td>
                          <td className="border border-gray-300 p-2">Inspección visual + prueba estanqueidad</td>
                          <td className="border border-gray-300 p-2">Usuario</td>
                          <td className="border border-gray-300 p-2">Check-list personal</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">Después de cada uso</td>
                          <td className="border border-gray-300 p-2">Limpieza y desinfección</td>
                          <td className="border border-gray-300 p-2">Usuario</td>
                          <td className="border border-gray-300 p-2">Hoja limpieza</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Semanal</td>
                          <td className="border border-gray-300 p-2">Inspección técnica detallada</td>
                          <td className="border border-gray-300 p-2">Supervisor</td>
                          <td className="border border-gray-300 p-2">Ficha técnica</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">Mensual</td>
                          <td className="border border-gray-300 p-2">Prueba cuantitativa ajuste</td>
                          <td className="border border-gray-300 p-2">Técnico especialista</td>
                          <td className="border border-gray-300 p-2">Certificado</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Limpieza y Desinfección</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Procedimiento Estándar:</h4>
                      <ol className="space-y-1">
                        <li>1. Retirar filtros y válvulas</li>
                        <li>2. Lavar con agua tibia (40°C) y detergente neutro</li>
                        <li>3. Aclarar abundantemente</li>
                        <li>4. Desinfectar con solución apropiada</li>
                        <li>5. Aclarar nuevamente</li>
                        <li>6. Secar al aire libre</li>
                        <li>7. Inspeccionar antes de guardar</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Productos Permitidos:</h4>
                      <ul className="space-y-1">
                        <li>• Hipoclorito sódico 50-100 ppm</li>
                        <li>• Alcohol isopropílico 70%</li>
                        <li>• Compuestos de amonio cuaternario</li>
                        <li>• Peróxido de hidrógeno 0.5%</li>
                      </ul>
                      <h4 className="font-medium mb-2 mt-3">Productos Prohibidos:</h4>
                      <ul className="space-y-1">
                        <li>• Disolventes orgánicos</li>
                        <li>• Lejía concentrada</li>
                        <li>• Agua muy caliente (&gt;60°C)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Almacenamiento y Vida Útil</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Condiciones Óptimas:</h4>
                      <ul className="space-y-1">
                        <li>• Temperatura: 5-40°C</li>
                        <li>• Humedad relativa: &lt;80%</li>
                        <li>• Protegido de luz UV</li>
                        <li>• Alejado de ozono</li>
                        <li>• Envase original cerrado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Vida Útil Típica:</h4>
                      <ul className="space-y-1">
                        <li>• Mascarillas FFP: 3-5 años</li>
                        <li>• Máscaras de goma: 5-10 años</li>
                        <li>• Filtros P: 3-5 años cerrados</li>
                        <li>• Filtros gas: 3-5 años cerrados</li>
                        <li>• Filtros abiertos: 6 meses max</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Control de Stock:</h4>
                      <ul className="space-y-1">
                        <li>• Sistema FIFO (primero en entrar)</li>
                        <li>• Etiquetado fecha apertura</li>
                        <li>• Inventario mensual</li>
                        <li>• Registro temperaturas</li>
                        <li>• Plan reposición automática</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Formación y Fit Test</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Programa Formativo Obligatorio:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Riesgos respiratorios específicos</li>
                        <li>• Limitaciones del equipo seleccionado</li>
                        <li>• Instrucciones de uso correcto</li>
                        <li>• Mantenimiento y almacenamiento</li>
                        <li>• Pruebas de ajuste periódicas</li>
                        <li>• Procedimientos de emergencia</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Pruebas de Ajuste (Fit Test):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Inicial antes del primer uso</li>
                        <li>• Anual para usuarios regulares</li>
                        <li>• Tras cambios faciales significativos</li>
                        <li>• Cambio de modelo/marca</li>
                        <li>• Métodos cualitativos (sabor/olor)</li>
                        <li>• Métodos cuantitativos (PortaCount)</li>
                      </ul>
                    </div>
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
          <h3 className="text-xl font-bold mb-2">Manual Técnico Completo</h3>
          <p className="mb-4 text-blue-100">
            Descarga esta guía técnica con matrices de selección, cálculos de factor de protección y protocolos de mantenimiento.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => trackInteraction('download_click', 'guia_proteccion_respiratoria_pdf', 'respiratoria_guide')}
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
            La protección respiratoria efectiva requiere un enfoque sistemático que combine la evaluación técnica rigurosa, 
            la selección apropiada del equipo, la formación adecuada del personal y el mantenimiento preventivo continuo. 
            El cumplimiento de las normativas EN 149, EN 140 y EN 136 garantiza estándares mínimos de protección.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La inversión en un programa integral de protección respiratoria no solo cumple con las obligaciones legales, 
            sino que representa un compromiso fundamental con la salud y seguridad de los trabajadores, previniendo 
            enfermedades ocupacionales que pueden manifestarse años después de la exposición.
          </p>
        </motion.section>
      </article>
    </BlogLayout>
  );
}