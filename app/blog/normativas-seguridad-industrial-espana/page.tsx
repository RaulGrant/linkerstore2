'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download, Scale, FileText, Users, Building, Gavel } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function GuiaNormativasSeguridad() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Normativas de Seguridad Industrial en España: Marco Legal Completo',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'normativas-seguridad-industrial-espana');
    trackBlogView(guideId, 'Normativas de Seguridad Industrial en España: Marco Legal Completo', 'guia_legal');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'normativas_guide');
  };

  const tabs = [
    { id: 0, title: 'Marco Legal Español', icon: '⚖️' },
    { id: 1, title: 'Normativas EU', icon: '🇪🇺' },
    { id: 2, title: 'Obligaciones Empresariales', icon: '🏢' },
    { id: 3, title: 'Sanciones y Cumplimiento', icon: '📋' }
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
            <Badge className="bg-red-100 text-red-800">Marco Legal</Badge>
            <Badge className="bg-blue-100 text-blue-800">Ley 31/1995</Badge>
            <Badge className="bg-green-100 text-green-800">RD 39/1997</Badge>
            <Badge className="bg-purple-100 text-purple-800">Cumplimiento Obligatorio</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Normativas de Seguridad Industrial en España: Marco Legal Completo
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>25 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>6,750 visualizaciones</span>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <Gavel className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800">Marco Legal de Obligatorio Cumplimiento</h4>
                <p className="text-red-700 text-sm">
                  El incumplimiento de las normativas de seguridad industrial puede conllevar sanciones de hasta 819.780€ 
                  y responsabilidad penal. El conocimiento del marco legal es imprescindible para empresarios y técnicos.
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
            La seguridad industrial en España se rige por un complejo marco normativo que combina directivas europeas, 
            legislación nacional y normativas técnicas específicas. Esta guía proporciona una visión integral del marco 
            legal vigente, obligaciones empresariales, procedimientos de cumplimiento y régimen sancionador aplicable.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Datos del Marco Regulatorio</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-blue-700">normativas específicas de seguridad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">€820K</div>
                <div className="text-blue-700">sanción máxima por infracciones muy graves</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-blue-700">para comunicar accidentes graves</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Marco Legal Español de Seguridad Industrial</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legislación Fundamental</h3>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
                        <Scale className="h-5 w-5 text-blue-600 mr-2" />
                        Ley 31/1995 de Prevención de Riesgos Laborales
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium mb-2">Objeto y Ámbito:</h5>
                          <ul className="space-y-1">
                            <li>• Protección de trabajadores frente a riesgos laborales</li>
                            <li>• Aplicación universal salvo excepciones específicas</li>
                            <li>• Transposición Directiva Marco 89/391/CEE</li>
                            <li>• Base de todo el sistema preventivo español</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Principios Fundamentales:</h5>
                          <ul className="space-y-1">
                            <li>• Deber empresarial de protección</li>
                            <li>• Evaluación y planificación preventiva</li>
                            <li>• Integración de la prevención</li>
                            <li>• Participación y consulta de trabajadores</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-green-800">
                        <FileText className="h-5 w-5 text-green-600 mr-2" />
                        RD 39/1997 - Reglamento de los Servicios de Prevención
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium mb-2">Modalidades Preventivas:</h5>
                          <ul className="space-y-1">
                            <li>• Asunción personal por el empresario</li>
                            <li>• Designación de trabajadores</li>
                            <li>• Servicio de prevención propio</li>
                            <li>• Servicio de prevención ajeno</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Disciplinas Preventivas:</h5>
                          <ul className="space-y-1">
                            <li>• Seguridad en el Trabajo</li>
                            <li>• Higiene Industrial</li>
                            <li>• Ergonomía y Psicosociología</li>
                            <li>• Medicina del Trabajo</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Normativas Específicas Principales</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Real Decreto</th>
                          <th className="border border-gray-300 p-3 text-left">Objeto</th>
                          <th className="border border-gray-300 p-3 text-left">Ámbito de Aplicación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">RD 773/1997</td>
                          <td className="border border-gray-300 p-3">Equipos de Protección Individual</td>
                          <td className="border border-gray-300 p-3">Utilización de EPP por trabajadores</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">RD 1215/1997</td>
                          <td className="border border-gray-300 p-3">Equipos de Trabajo</td>
                          <td className="border border-gray-300 p-3">Utilización de equipos de trabajo</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">RD 486/1997</td>
                          <td className="border border-gray-300 p-3">Lugares de Trabajo</td>
                          <td className="border border-gray-300 p-3">Condiciones de lugares de trabajo</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">RD 487/1997</td>
                          <td className="border border-gray-300 p-3">Manipulación Manual de Cargas</td>
                          <td className="border border-gray-300 p-3">Riesgos dorsolumbares</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">RD 488/1997</td>
                          <td className="border border-gray-300 p-3">Pantallas de Visualización</td>
                          <td className="border border-gray-300 p-3">Trabajo con PVD</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">RD 664/1997</td>
                          <td className="border border-gray-300 p-3">Agentes Biológicos</td>
                          <td className="border border-gray-300 p-3">Exposición a agentes biológicos</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Normativas de Construcción</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">RD 1627/1997</h4>
                      <p className="text-sm text-orange-700 mb-3">
                        Disposiciones mínimas de seguridad y salud en obras de construcción
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Coordinación de Seguridad y Salud</li>
                        <li>• Estudio/Estudio Básico de Seguridad</li>
                        <li>• Plan de Seguridad y Salud</li>
                        <li>• Libro de Incidencias</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">RD 2177/2004</h4>
                      <p className="text-sm text-purple-700 mb-3">
                        Disposiciones mínimas de seguridad y salud para la utilización de equipos de trabajo temporales en altura
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Andamios y plataformas elevadoras</li>
                        <li>• Formación específica obligatoria</li>
                        <li>• Plan de montaje, utilización y desmontaje</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Normativas Sectoriales Específicas</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Industria:</h4>
                      <ul className="space-y-1">
                        <li>• RD 681/2003 (ATEX)</li>
                        <li>• RD 379/2001 (Almacenamiento)</li>
                        <li>• RD 1196/2003 (ADR)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Minería:</h4>
                      <ul className="space-y-1">
                        <li>• RD 863/1985</li>
                        <li>• Orden 16-12-1986</li>
                        <li>• ITC específicas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Marítimo-Portuario:</h4>
                      <ul className="space-y-1">
                        <li>• RD 1216/1997</li>
                        <li>• Convenio OIT 152</li>
                        <li>• Código PBIP</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ferroviario:</h4>
                      <ul className="space-y-1">
                        <li>• Ley 38/2015</li>
                        <li>• RD 929/2020</li>
                        <li>• Especificaciones técnicas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Marco Normativo Europeo</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Directivas Marco de la Unión Europea</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Directiva 89/391/CEE - Directiva Marco</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Establece las medidas para promover la mejora de la seguridad y salud en el trabajo
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Obligaciones generales del empresario</li>
                        <li>• Evaluación de riesgos y medidas de prevención</li>
                        <li>• Información, consulta y participación</li>
                        <li>• Formación de los trabajadores</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Directivas Específicas (Directivas Hijas)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">Directiva UE</th>
                          <th className="border border-gray-300 p-2 text-left">Objeto</th>
                          <th className="border border-gray-300 p-2 text-left">Transposición España</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">89/654/CEE</td>
                          <td className="border border-gray-300 p-2">Lugares de trabajo</td>
                          <td className="border border-gray-300 p-2">RD 486/1997</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">89/656/CEE</td>
                          <td className="border border-gray-300 p-2">Equipos de protección individual</td>
                          <td className="border border-gray-300 p-2">RD 773/1997</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">90/269/CEE</td>
                          <td className="border border-gray-300 p-2">Manipulación manual de cargas</td>
                          <td className="border border-gray-300 p-2">RD 487/1997</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">90/270/CEE</td>
                          <td className="border border-gray-300 p-2">Pantallas de visualización</td>
                          <td className="border border-gray-300 p-2">RD 488/1997</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">2009/104/CE</td>
                          <td className="border border-gray-300 p-2">Equipos de trabajo</td>
                          <td className="border border-gray-300 p-2">RD 1215/1997</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Reglamentos de Productos (New Legislative Framework)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Reglamento (UE) 2016/425 - EPP:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Requisitos esenciales de salud y seguridad</li>
                        <li>• Procedimientos de evaluación conformidad</li>
                        <li>• Marcado CE y declaración UE</li>
                        <li>• Vigilancia del mercado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Directiva 2006/42/CE - Máquinas:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Requisitos esenciales de seguridad</li>
                        <li>• Evaluación de riesgos</li>
                        <li>• Manual de instrucciones</li>
                        <li>• Declaración CE de conformidad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">Normativas Técnicas Europeas (EN)</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Clasificación por Área Técnica:</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm mt-2">
                        <div>
                          <h5 className="font-medium">EPP (EN):</h5>
                          <ul className="space-y-1">
                            <li>• EN 149 - Mascarillas FFP</li>
                            <li>• EN 388 - Guantes mecánicos</li>
                            <li>• EN 397 - Cascos seguridad</li>
                            <li>• EN ISO 20345 - Calzado</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Máquinas (EN ISO):</h5>
                          <ul className="space-y-1">
                            <li>• EN ISO 12100 - Principios</li>
                            <li>• EN ISO 13849 - Sistemas control</li>
                            <li>• EN ISO 14120 - Resguardos</li>
                            <li>• EN 60204-1 - Equipamiento eléctrico</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Atmosferas Explosivas:</h5>
                          <ul className="space-y-1">
                            <li>• EN 60079 serie - ATEX</li>
                            <li>• EN ISO/IEC 80079-34 - Aplicación</li>
                            <li>• EN 50281 - Polvos combustibles</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Organismos Europeos de Normalización</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">CEN:</h4>
                      <p className="text-gray-600 mb-2">Comité Europeo de Normalización</p>
                      <ul className="space-y-1">
                        <li>• Normas EN generales</li>
                        <li>• Productos de construcción</li>
                        <li>• Equipos de protección</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">CENELEC:</h4>
                      <p className="text-gray-600 mb-2">Comité Europeo de Normalización Electrotécnica</p>
                      <ul className="space-y-1">
                        <li>• Normas EN eléctricas</li>
                        <li>• Equipos eléctricos</li>
                        <li>• ATEX eléctrico</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">ETSI:</h4>
                      <p className="text-gray-600 mb-2">Instituto Europeo de Normas de Telecomunicaciones</p>
                      <ul className="space-y-1">
                        <li>• Sistemas comunicación</li>
                        <li>• Equipos radioeléctricos</li>
                        <li>• Compatibilidad electromagnética</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Obligaciones Empresariales</h2>
              
              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Obligaciones Generales del Empresario</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Deber de Protección (Art. 14 Ley 31/1995):</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Garantizar seguridad y salud</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />En todos los aspectos relacionados con el trabajo</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Mediante adopción de medidas necesarias</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Incluye prevención, información y formación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Principios de Acción Preventiva (Art. 15):</h4>
                      <ol className="text-sm space-y-1">
                        <li>1. Evitar los riesgos</li>
                        <li>2. Evaluar los riesgos que no se puedan evitar</li>
                        <li>3. Combatir los riesgos en su origen</li>
                        <li>4. Adaptar el trabajo a la persona</li>
                        <li>5. Tener en cuenta evolución técnica</li>
                        <li>6. Sustituir lo peligroso por lo que entrañe poco o ningún peligro</li>
                        <li>7. Planificar la prevención</li>
                        <li>8. Adoptar medidas que antepongan la protección colectiva a la individual</li>
                        <li>9. Dar las debidas instrucciones a los trabajadores</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Evaluación de Riesgos y Planificación</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Evaluación de Riesgos (Art. 16)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Obligatoria</strong> para todos los puestos de trabajo</li>
                        <li>• <strong>Inicial:</strong> Antes del inicio de las actividades</li>
                        <li>• <strong>Revisión:</strong> Cuando cambien las condiciones</li>
                        <li>• <strong>Metodología:</strong> Según naturaleza de la actividad</li>
                        <li>• <strong>Documentación:</strong> Registro y archivo obligatorio</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Planificación Preventiva (Art. 9 RD 39/1997)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Medidas:</strong> Preventivas y de protección</li>
                        <li>• <strong>Plazos:</strong> Para la ejecución</li>
                        <li>• <strong>Responsables:</strong> Designación clara</li>
                        <li>• <strong>Recursos:</strong> Humanos y materiales necesarios</li>
                        <li>• <strong>Seguimiento:</strong> Control de eficacia</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Organización de la Prevención</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Modalidad</th>
                          <th className="border border-gray-300 p-3 text-left">Requisitos</th>
                          <th className="border border-gray-300 p-3 text-left">Limitaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">Asunción personal</td>
                          <td className="border border-gray-300 p-3">
                            • &lt;25 trabajadores<br/>
                            • Empresario en centro habitual<br/>
                            • Capacitación adecuada<br/>
                            • Actividades no alto riesgo
                          </td>
                          <td className="border border-gray-300 p-3">Medicina del trabajo siempre externa</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">Trabajador designado</td>
                          <td className="border border-gray-300 p-3">
                            • Capacitación según Anexo VI RD 39/1997<br/>
                            • Dedicación necesaria<br/>
                            • Medios adecuados
                          </td>
                          <td className="border border-gray-300 p-3">No puede asumir medicina del trabajo</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">Servicio propio</td>
                          <td className="border border-gray-300 p-3">
                            • &gt;500 trabajadores o<br/>
                            • 250-500 con actividades alto riesgo<br/>
                            • Constitución como unidad organizativa
                          </td>
                          <td className="border border-gray-300 p-3">Dedicación exclusiva del personal</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">Servicio ajeno</td>
                          <td className="border border-gray-300 p-3">
                            • Acreditación de la autoridad laboral<br/>
                            • Auditorías obligatorias<br/>
                            • Concierto actividades no asumidas
                          </td>
                          <td className="border border-gray-300 p-3">Renovación acreditación cada 4 años</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Obligaciones de Información, Consulta y Participación</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Información (Art. 18)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Riesgos del puesto y medidas preventivas</li>
                        <li>• Riesgos generales del centro</li>
                        <li>• Medidas de emergencia</li>
                        <li>• Resultado vigilancia de la salud</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Consulta (Art. 33)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Planificación y organización del trabajo</li>
                        <li>• Introducción nuevas tecnologías</li>
                        <li>• Organización y desarrollo actividades PRL</li>
                        <li>• Designación trabajadores prevención</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Participación (Art. 34)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Delegados de prevención</li>
                        <li>• Comité de seguridad y salud</li>
                        <li>• Derecho a formular propuestas</li>
                        <li>• Derecho a paralizar la actividad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">Obligaciones Documentales</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Documentación Obligatoria (Art. 23):</h4>
                      <ul className="space-y-1">
                        <li>• Plan de prevención de riesgos laborales</li>
                        <li>• Evaluación de riesgos y planificación</li>
                        <li>• Medidas de protección y prevención</li>
                        <li>• Resultado controles periódicos condiciones de trabajo</li>
                        <li>• Práctica de controles del estado de salud</li>
                        <li>• Relación accidentes y enfermedades profesionales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Conservación y Disponibilidad:</h4>
                      <ul className="space-y-1">
                        <li>• Disposición autoridad laboral</li>
                        <li>• Representantes de los trabajadores</li>
                        <li>• Actualización permanente</li>
                        <li>• Conservación durante toda la vida laboral</li>
                        <li>• Vigilancia de la salud: 40 años tras finalización</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Régimen Sancionador y Cumplimiento</h2>
              
              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Clasificación de Infracciones (Ley 42/1997)</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">LEVES</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Falta de limpieza del centro</li>
                          <li>• No comunicar apertura del centro</li>
                          <li>• Incumplimientos menores sin riesgo</li>
                        </ul>
                        <div className="mt-2 p-2 bg-yellow-100 rounded text-center">
                          <strong>€40 - €2.045</strong>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded p-4">
                        <h4 className="font-semibold text-orange-800 mb-2">GRAVES</h4>
                        <ul className="text-xs space-y-1">
                          <li>• No realizar evaluación de riesgos</li>
                          <li>• No planificar actividad preventiva</li>
                          <li>• No informar a los trabajadores</li>
                          <li>• Incumplir órdenes específicas</li>
                        </ul>
                        <div className="mt-2 p-2 bg-orange-100 rounded text-center">
                          <strong>€2.046 - €40.985</strong>
                        </div>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded p-4">
                        <h4 className="font-semibold text-red-800 mb-2">MUY GRAVES</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Adscribir trabajadores sin reconocimiento</li>
                          <li>• No paralizar trabajos con riesgo grave</li>
                          <li>• Superar valores límite agentes nocivos</li>
                          <li>• No adoptar medidas correctoras</li>
                        </ul>
                        <div className="mt-2 p-2 bg-red-100 rounded text-center">
                          <strong>€40.986 - €819.780</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Graduación de Sanciones</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Criterios de Agravación:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Negligencia e intencionalidad</li>
                        <li>• Número de trabajadores afectados</li>
                        <li>• Medidas adoptadas por el empresario</li>
                        <li>• Incumplimiento de advertencias previas</li>
                        <li>• Beneficio obtenido por el incumplimiento</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Criterios de Atenuación:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Adopción espontánea de medidas correctoras</li>
                        <li>• Colaboración con la inspección</li>
                        <li>• Carencia antecedentes en materia preventiva</li>
                        <li>• Reconocimiento de responsabilidad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Responsabilidades Adicionales</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Responsabilidad Penal:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium">Delitos contra los derechos de los trabajadores (Art. 316 CP):</h5>
                          <ul className="space-y-1">
                            <li>• No facilitar medios seguridad necesarios</li>
                            <li>• Poner en grave peligro vida, salud o integridad física</li>
                            <li>• <strong>Pena:</strong> 6 meses - 3 años prisión</li>
                            <li>• Multa de 6-12 meses</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Homicidio/Lesiones por imprudencia grave:</h5>
                          <ul className="space-y-1">
                            <li>• Art. 142 CP: Homicidio imprudente (1-4 años)</li>
                            <li>• Art. 152 CP: Lesiones imprudentes (3-18 meses)</li>
                            <li>• Inhabilitación especial</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">Responsabilidad Civil:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reparación del daño causado (Art. 1902 CC)</li>
                        <li>• Recargo de prestaciones (30-50% SS)</li>
                        <li>• Responsabilidad empresario por hechos de empleados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Sistema de Inspección y Control</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Inspección de Trabajo y Seguridad Social:</h4>
                      <ul className="space-y-1">
                        <li>• Función de vigilancia y control</li>
                        <li>• Asesoramiento técnico a empresas y trabajadores</li>
                        <li>• Mediación, arbitraje y conciliación</li>
                        <li>• Información a centros directivos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Facultades de los Inspectores:</h4>
                      <ul className="space-y-1">
                        <li>• Entrada libre en centros de trabajo</li>
                        <li>• Adoptar medidas cautelares</li>
                        <li>• Ordenar paralización inmediata</li>
                        <li>• Proponer sanciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Mejores Prácticas para el Cumplimiento</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Organización:</h4>
                        <ul className="space-y-1">
                          <li>• Plan de prevención actualizado</li>
                          <li>• Modalidad preventiva adecuada</li>
                          <li>• Coordinación actividades empresariales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Documentación:</h4>
                        <ul className="space-y-1">
                          <li>• Evaluación riesgos actualizada</li>
                          <li>• Planificación preventiva</li>
                          <li>• Registros formación e información</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Medidas Técnicas:</h4>
                        <ul className="space-y-1">
                          <li>• Equipos de trabajo conformes</li>
                          <li>• EPP certificados y adecuados</li>
                          <li>• Instalaciones seguras</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Control y Seguimiento:</h4>
                        <ul className="space-y-1">
                          <li>• Auditorías internas regulares</li>
                          <li>• Investigación accidentes</li>
                          <li>• Revisiones periódicas</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Recomendaciones Clave:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Implementar sistemas de gestión certificados (ISO 45001)</li>
                        <li>• Mantener comunicación fluida con representantes trabajadores</li>
                        <li>• Establecer procedimientos claros de actuación</li>
                        <li>• Formar y sensibilizar a todo el personal</li>
                        <li>• Realizar controles periódicos de eficacia</li>
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
          <h3 className="text-xl font-bold mb-2">Compendio Legal Completo</h3>
          <p className="mb-4 text-blue-100">
            Descarga esta guía legal con el marco normativo completo, tablas de sanciones y checklist de cumplimiento.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => trackInteraction('download_click', 'normativas_seguridad_industrial_pdf', 'normativas_guide')}
          >
            Descargar Compendio Legal PDF
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
            El cumplimiento del marco normativo de seguridad industrial requiere un conocimiento profundo y actualizado 
            de la legislación aplicable. La complejidad del sistema normativo español, derivado de la transposición de 
            directivas europeas y la especificidad sectorial, exige una aproximación sistemática y profesionalizada.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La inversión en cumplimiento normativo no debe entenderse como un coste, sino como una garantía de 
            sostenibilidad empresarial que protege tanto a los trabajadores como a la organización frente a 
            responsabilidades legales, económicas y reputacionales derivadas del incumplimiento.
          </p>
        </motion.section>
      </article>
    </BlogLayout>
  );
}