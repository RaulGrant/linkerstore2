'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download, Hand, Zap, Thermometer, Droplets, Scissors } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function GuiaGuantesTrabajo() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Guía Completa de Guantes de Trabajo: Selección y Protección',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'guia-guantes-trabajo-completa');
    trackBlogView(guideId, 'Guía Completa de Guantes de Trabajo: Selección y Protección', 'guia_epp');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'guantes_guide');
  };

  const tabs = [
    { id: 0, title: 'Tipos y Materiales', icon: '🧤' },
    { id: 1, title: 'Normativas EN', icon: '📋' },
    { id: 2, title: 'Selección por Riesgo', icon: '⚠️' },
    { id: 3, title: 'Cuidado y Vida Útil', icon: '🔄' }
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
            <Badge className="bg-purple-100 text-purple-800">Protección Manual</Badge>
            <Badge className="bg-blue-100 text-blue-800">EN 388/374/407</Badge>
            <Badge className="bg-green-100 text-green-800">EPP Categoría II-III</Badge>
            <Badge className="bg-orange-100 text-orange-800">Guía Técnica</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía Completa de Guantes de Trabajo: Selección y Protección
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>22 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>3,890 visualizaciones</span>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <Hand className="h-5 w-5 text-purple-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-purple-800">Protección Esencial de las Manos</h4>
                <p className="text-purple-700 text-sm">
                  Las manos sufren el 70% de los accidentes laborales. La selección correcta de guantes según el riesgo 
                  específico puede prevenir lesiones graves y enfermedades profesionales.
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
            Los guantes de protección constituyen la barrera más directa contra los riesgos que afectan a las manos en el entorno laboral. 
            Esta guía técnica abarca la selección, uso y mantenimiento de guantes según las normativas europeas EN 388 (riesgos mecánicos), 
            EN 374 (químicos) y EN 407 (térmicos), proporcionando criterios científicos para una protección efectiva.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-orange-800 mb-2">Estadísticas de Accidentalidad Manual</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">70%</div>
                <div className="text-orange-700">de accidentes laborales afectan las manos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">30%</div>
                <div className="text-orange-700">de incapacidades permanentes son en manos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">€8K</div>
                <div className="text-orange-700">coste medio por lesión manual grave</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Guantes y Materiales</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Clasificación por Material Base</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        Cauchos y Elastómeros
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-medium">Látex Natural:</h5>
                          <ul className="ml-4 space-y-1">
                            <li>• Excelente elasticidad y tacto</li>
                            <li>• Biodegradable</li>
                            <li>• Riesgo alergias (proteínas)</li>
                            <li>• Uso: Médico, alimentario</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Nitrilo (NBR):</h5>
                          <ul className="ml-4 space-y-1">
                            <li>• Resistencia química superior</li>
                            <li>• Libre de proteínas alergénicas</li>
                            <li>• Resistencia a hidrocarburos</li>
                            <li>• Uso: Industria, laboratorios</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-green-800">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        Materiales Sintéticos
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-medium">PVC (Policloruro de vinilo):</h5>
                          <ul className="ml-4 space-y-1">
                            <li>• Excelente resistencia química</li>
                            <li>• Impermeable a líquidos</li>
                            <li>• Rigidez a bajas temperaturas</li>
                            <li>• Uso: Limpieza, químicos</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Neopreno:</h5>
                          <ul className="ml-4 space-y-1">
                            <li>• Resistencia a ozono y UV</li>
                            <li>• Buena flexibilidad</li>
                            <li>• Resistencia térmica moderada</li>
                            <li>• Uso: Exterior, petroquímica</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Materiales para Aplicaciones Específicas</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Thermometer className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-red-800">Alta Temperatura</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>Kevlar®:</strong> Hasta 250°C</li>
                        <li><strong>Nomex®:</strong> Hasta 200°C</li>
                        <li><strong>Aluminizado:</strong> Radiación</li>
                        <li><strong>Cuero cromado:</strong> Soldadura</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Zap className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-blue-800">Eléctrico</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>Clase 00:</strong> 500V AC</li>
                        <li><strong>Clase 0:</strong> 1000V AC</li>
                        <li><strong>Clase 1:</strong> 7500V AC</li>
                        <li><strong>Material:</strong> Caucho dieléctrico</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Scissors className="h-5 w-5 text-gray-600 mr-2" />
                        <h4 className="font-semibold text-gray-800">Anticorte</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>HPPE:</strong> Fibra polietileno</li>
                        <li><strong>Acero inox:</strong> Malla metálica</li>
                        <li><strong>Dyneema®:</strong> Ultra resistente</li>
                        <li><strong>Kevlar®:</strong> Aramida</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Droplets className="h-5 w-5 text-yellow-600 mr-2" />
                        <h4 className="font-semibold text-yellow-800">Químico</h4>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li><strong>Butilo:</strong> Gases/vapores</li>
                        <li><strong>Viton®:</strong> Ácidos fuertes</li>
                        <li><strong>PVA:</strong> Hidrocarburos</li>
                        <li><strong>Barrera multicapa:</strong> Universal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Construcción y Recubrimientos</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Tipo de Recubrimiento</th>
                          <th className="border border-gray-300 p-3 text-left">Características</th>
                          <th className="border border-gray-300 p-3 text-left">Ventajas</th>
                          <th className="border border-gray-300 p-3 text-left">Aplicaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">Palma</td>
                          <td className="border border-gray-300 p-3">Recubrimiento solo en palma y dedos</td>
                          <td className="border border-gray-300 p-3">Transpirabilidad, tactilidad</td>
                          <td className="border border-gray-300 p-3">Montaje, manipulación general</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">3/4</td>
                          <td className="border border-gray-300 p-3">Hasta nudillos, dorso libre</td>
                          <td className="border border-gray-300 p-3">Protección amplia, ventilación</td>
                          <td className="border border-gray-300 p-3">Construcción, jardinería</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">Completo</td>
                          <td className="border border-gray-300 p-3">Recubrimiento total de la mano</td>
                          <td className="border border-gray-300 p-3">Impermeabilidad total</td>
                          <td className="border border-gray-300 p-3">Químicos, limpieza</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">Rugoso/Liso</td>
                          <td className="border border-gray-300 p-3">Textura superficial variable</td>
                          <td className="border border-gray-300 p-3">Agarre mejorado/Tacto fino</td>
                          <td className="border border-gray-300 p-3">Húmedo/Precisión</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Diseños Especializados</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Guantes Desechables:</h4>
                      <ul className="space-y-1">
                        <li>• <strong>Vinilo:</strong> Económicos, uso general</li>
                        <li>• <strong>Látex:</strong> Elasticidad, sensibilidad</li>
                        <li>• <strong>Nitrilo:</strong> Resistencia química</li>
                        <li>• <strong>Polietileno:</strong> Alimentario básico</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Características Especiales:</h4>
                      <ul className="space-y-1">
                        <li>• <strong>Puño extendido:</strong> Protección antebrazo</li>
                        <li>• <strong>Sin costuras:</strong> Comfort superior</li>
                        <li>• <strong>Tactilidad mejorada:</strong> Electrónica</li>
                        <li>• <strong>Antiestático:</strong> ESD protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Normativas y Certificaciones EN</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">EN 388:2016+A1:2018 - Riesgos Mecánicos</h3>
                  <p className="text-blue-800 mb-4">
                    Especifica los requisitos para guantes que protegen contra riesgos mecánicos: abrasión, 
                    corte por cuchilla, desgarro, perforación y corte por impacto.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Pictograma EN 388:</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-center mb-3">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                            <Shield className="h-8 w-8 text-blue-600" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div><strong>A</strong> Abrasión (0-4)</div>
                          <div><strong>B</strong> Corte cuchilla (0-5)</div>
                          <div><strong>C</strong> Desgarro (0-4)</div>
                          <div><strong>D</strong> Perforación (0-4)</div>
                          <div><strong>E</strong> Corte TDM (A-F)</div>
                          <div><strong>F</strong> Impacto (P/X)</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Niveles de Protección:</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Nivel 0:</strong> No supera el mínimo</div>
                        <div><strong>Nivel 1:</strong> Protección mínima</div>
                        <div><strong>Nivel 2:</strong> Protección baja</div>
                        <div><strong>Nivel 3:</strong> Protección media</div>
                        <div><strong>Nivel 4:</strong> Protección alta</div>
                        <div><strong>Nivel 5:</strong> Protección máxima (solo corte)</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-white rounded">
                    <h5 className="font-medium mb-2">Novedad EN 388:2016 - Ensayo TDM:</h5>
                    <p className="text-sm">
                      El ensayo de corte TDM (Test De Machine) es obligatorio cuando el ensayo de cuchilla resulta embotado. 
                      Clasifica de A (2.5 N) hasta F (30 N) la resistencia al corte por impacto.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">EN 374:2016 - Protección Química</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Tipos de Protección:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Badge className="bg-red-100 text-red-800 mr-2">Tipo A</Badge>
                          <span>Permeación ≥ 30 min (6 químicos)</span>
                        </div>
                        <div className="flex items-center">
                          <Badge className="bg-orange-100 text-orange-800 mr-2">Tipo B</Badge>
                          <span>Permeación ≥ 30 min (3 químicos)</span>
                        </div>
                        <div className="flex items-center">
                          <Badge className="bg-yellow-100 text-yellow-800 mr-2">Tipo C</Badge>
                          <span>Permeación ≥ 10 min (1 químico)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Químicos de Referencia:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>A:</strong> Metanol</li>
                        <li><strong>B:</strong> Acetona</li>
                        <li><strong>C:</strong> Acetonitrilo</li>
                        <li><strong>D:</strong> Diclorometano</li>
                        <li><strong>E:</strong> Disulfuro de carbono</li>
                        <li><strong>F:</strong> Tolueno</li>
                        <li><strong>G:</strong> Dietilamina</li>
                        <li><strong>H:</strong> Tetrahidrofurano</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white rounded">
                    <h5 className="font-medium mb-2">Niveles de Permeación:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-xs text-center">
                      <div className="bg-red-100 p-2 rounded"><strong>1</strong><br/>&gt;10 min</div>
                      <div className="bg-orange-100 p-2 rounded"><strong>2</strong><br/>&gt;30 min</div>
                      <div className="bg-yellow-100 p-2 rounded"><strong>3</strong><br/>&gt;60 min</div>
                      <div className="bg-green-100 p-2 rounded"><strong>4</strong><br/>&gt;120 min</div>
                      <div className="bg-blue-100 p-2 rounded"><strong>5</strong><br/>&gt;240 min</div>
                      <div className="bg-purple-100 p-2 rounded"><strong>6</strong><br/>&gt;480 min</div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">EN 407:2020 - Protección Térmica</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Pictograma Térmico:</h4>
                        <div className="bg-white p-4 rounded border">
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div><strong>A</strong> Inflamabilidad (0-4)</div>
                            <div><strong>B</strong> Calor contacto (0-4)</div>
                            <div><strong>C</strong> Calor convectivo (0-4)</div>
                            <div><strong>D</strong> Calor radiante (0-4)</div>
                            <div><strong>E</strong> Salpicaduras pequeñas (0-4)</div>
                            <div><strong>F</strong> Salpicaduras grandes (0-4)</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Rangos de Temperatura:</h4>
                        <ul className="text-sm space-y-1">
                          <li><strong>Nivel 1:</strong> Protección básica</li>
                          <li><strong>Nivel 2:</strong> Hasta 250°C (contacto)</li>
                          <li><strong>Nivel 3:</strong> Hasta 350°C</li>
                          <li><strong>Nivel 4:</strong> Hasta 500°C</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded">
                      <h5 className="font-medium mb-2">Requisito de Prestación Mínima:</h5>
                      <p className="text-sm">
                        Para llevar el pictograma térmico, el guante debe alcanzar al menos nivel 1 en inflamabilidad 
                        y nivel 1 en al menos una de las otras propiedades térmicas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Normativas Especializadas</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">EN 60903 - Trabajos Eléctricos</h4>
                      <p className="text-sm text-gray-600 mb-2">Guantes aislantes para trabajos en tensión.</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                        <div className="bg-white p-2 rounded border text-center">
                          <strong>Clase 00</strong><br/>500V AC
                        </div>
                        <div className="bg-white p-2 rounded border text-center">
                          <strong>Clase 0</strong><br/>1000V AC
                        </div>
                        <div className="bg-white p-2 rounded border text-center">
                          <strong>Clase 1</strong><br/>7500V AC
                        </div>
                        <div className="bg-white p-2 rounded border text-center">
                          <strong>Clase 2</strong><br/>17000V AC
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">EN 421 - Protección contra Radiaciones Ionizantes</h4>
                      <p className="text-sm text-gray-600">Guantes para manipulación de materiales radiactivos.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">EN 511 - Protección contra el Frío</h4>
                      <p className="text-sm text-gray-600">Resistencia al frío convectivo, contacto y penetración de agua.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">EN 16350 - Propiedades Electrostáticas</h4>
                      <p className="text-sm text-gray-600">Guantes antiestáticos para ambientes con riesgo ESD.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selección por Tipo de Riesgo</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Matriz de Selección Industrial</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Sector/Aplicación</th>
                          <th className="border border-gray-300 p-3 text-left">Riesgos Principales</th>
                          <th className="border border-gray-300 p-3 text-left">Material Recomendado</th>
                          <th className="border border-gray-300 p-3 text-left">Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Manipulación general</td>
                          <td className="border border-gray-300 p-3">Abrasión, cortes menores</td>
                          <td className="border border-gray-300 p-3">Poliuretano/Nitrilo palma</td>
                          <td className="border border-gray-300 p-3">EN 388: 2121X</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Montaje automotriz</td>
                          <td className="border border-gray-300 p-3">Aceites, cortes, precisión</td>
                          <td className="border border-gray-300 p-3">Nitrilo microespuma</td>
                          <td className="border border-gray-300 p-3">EN 388: 4131X + EN 374</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Vidrio/chapa metálica</td>
                          <td className="border border-gray-300 p-3">Corte severo, perforación</td>
                          <td className="border border-gray-300 p-3">HPPE + recubrimiento</td>
                          <td className="border border-gray-300 p-3">EN 388: 4543F</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Soldadura</td>
                          <td className="border border-gray-300 p-3">Calor, chispas, radiación</td>
                          <td className="border border-gray-300 p-3">Cuero cromado</td>
                          <td className="border border-gray-300 p-3">EN 407: 413342</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Industria química</td>
                          <td className="border border-gray-300 p-3">Permeación química</td>
                          <td className="border border-gray-300 p-3">Butilo/Viton según químico</td>
                          <td className="border border-gray-300 p-3">EN 374 Tipo A/B</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Trabajo eléctrico</td>
                          <td className="border border-gray-300 p-3">Electrocución</td>
                          <td className="border border-gray-300 p-3">Caucho dieléctrico</td>
                          <td className="border border-gray-300 p-3">EN 60903 Clase 0-2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-green-900">✅ Proceso de Evaluación</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium">1. Identificación de Riesgos:</h4>
                        <ul className="ml-4 space-y-1 mt-1">
                          <li>• Mecánicos (corte, abrasión, impacto)</li>
                          <li>• Químicos (ácidos, bases, disolventes)</li>
                          <li>• Térmicos (calor, frío, chispas)</li>
                          <li>• Biológicos (virus, bacterias)</li>
                          <li>• Eléctricos (tensión, estática)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">2. Evaluación de Severidad:</h4>
                        <ul className="ml-4 space-y-1 mt-1">
                          <li>• Probabilidad de exposición</li>
                          <li>• Consecuencias potenciales</li>
                          <li>• Duración de la exposición</li>
                          <li>• Concentración del agente</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-red-900">❌ Errores Críticos de Selección</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Seleccionar solo por precio</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No considerar la destreza requerida</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Ignorar la compatibilidad química</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Usar talla incorrecta</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No verificar fecha de caducidad</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Mezclar tipos incompatibles</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Factores de Selección Complementarios</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Ergonomía:</h4>
                      <ul className="space-y-1">
                        <li>• Flexibilidad y ajuste</li>
                        <li>• Transpirabilidad</li>
                        <li>• Peso del guante</li>
                        <li>• Longitud del puño</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Destreza:</h4>
                      <ul className="space-y-1">
                        <li>• Grosor del recubrimiento</li>
                        <li>• Textura de superficie</li>
                        <li>• Flexibilidad de dedos</li>
                        <li>• Sensibilidad táctil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Agarre:</h4>
                      <ul className="space-y-1">
                        <li>• Condiciones húmedas/secas</li>
                        <li>• Superficie rugosa/lisa</li>
                        <li>• Resistencia al deslizamiento</li>
                        <li>• Fuerza de prensión</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Durabilidad:</h4>
                      <ul className="space-y-1">
                        <li>• Resistencia al lavado</li>
                        <li>• Vida útil esperada</li>
                        <li>• Resistencia UV</li>
                        <li>• Degradación química</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Compatibilidad Química Crítica</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">Material</th>
                          <th className="border border-gray-300 p-2 text-left">Excelente</th>
                          <th className="border border-gray-300 p-2 text-left">Bueno</th>
                          <th className="border border-gray-300 p-2 text-left">Inadecuado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-bold">Nitrilo</td>
                          <td className="border border-gray-300 p-2">Hidrocarburos, aceites</td>
                          <td className="border border-gray-300 p-2">Alcoholes, bases débiles</td>
                          <td className="border border-gray-300 p-2">Cetonas, esteres</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2 font-bold">Látex</td>
                          <td className="border border-gray-300 p-2">Ácidos, bases, alcoholes</td>
                          <td className="border border-gray-300 p-2">Detergentes</td>
                          <td className="border border-gray-300 p-2">Hidrocarburos, grasas</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-bold">PVC</td>
                          <td className="border border-gray-300 p-2">Ácidos, bases, sales</td>
                          <td className="border border-gray-300 p-2">Alcoholes</td>
                          <td className="border border-gray-300 p-2">Disolventes orgánicos</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2 font-bold">Neopreno</td>
                          <td className="border border-gray-300 p-2">Ozono, intemperie</td>
                          <td className="border border-gray-300 p-2">Ácidos diluidos</td>
                          <td className="border border-gray-300 p-2">Hidrocarburos aromáticos</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cuidado y Maximización de Vida Útil</h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Inspección Previa al Uso</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Checklist diario:</h4>
                      <ul className="space-y-1 mt-2">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Ausencia de agujeros o grietas</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Integridad de costuras</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Flexibilidad del material</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Adherencia del recubrimiento</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Limpieza general</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Fecha de caducidad</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Prueba de Inflado (Químicos)</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Procedimiento estándar:</h4>
                      <ol className="ml-4 space-y-1 mt-2">
                        <li>1. Cerrar el puño herméticamente</li>
                        <li>2. Inflar el guante con aire</li>
                        <li>3. Sumergir en agua jabonosa</li>
                        <li>4. Observar burbujas (fugas)</li>
                        <li>5. Desechar si hay micro-perforaciones</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Procedimientos de Limpieza</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Guantes Reutilizables:</h4>
                      <ol className="space-y-1">
                        <li>1. Enjuagar con agua tibia</li>
                        <li>2. Lavar con detergente neutro</li>
                        <li>3. Aclarado abundante</li>
                        <li>4. Desinfección si necesario</li>
                        <li>5. Secado al aire libre</li>
                        <li>6. Inspección post-limpieza</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Productos Permitidos:</h4>
                      <ul className="space-y-1">
                        <li>• Agua tibia (40-60°C)</li>
                        <li>• Jabón neutro pH 7</li>
                        <li>• Alcohol isopropílico 70%</li>
                        <li>• Hipoclorito 200 ppm</li>
                        <li>• Desengrasantes suaves</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Productos Prohibidos:</h4>
                      <ul className="space-y-1">
                        <li>• Disolventes orgánicos</li>
                        <li>• Agua muy caliente (&gt;80°C)</li>
                        <li>• Lejía concentrada</li>
                        <li>• Detergentes abrasivos</li>
                        <li>• Secado con calor directo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Criterios de Descarte Inmediato</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-red-800">Defectos Críticos:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Perforación visible o detectable</li>
                        <li>• Grietas en zona de flexión</li>
                        <li>• Desprendimiento del recubrimiento</li>
                        <li>• Rotura de costuras principales</li>
                        <li>• Pérdida de elasticidad</li>
                        <li>• Hinchazón por absorción química</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-orange-800">Deterioro Progresivo:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Decoloración severa</li>
                        <li>• Endurecimiento del material</li>
                        <li>• Pérdida de textura antideslizante</li>
                        <li>• Olor persistente tras limpieza</li>
                        <li>• Deformación permanente</li>
                        <li>• Fecha de caducidad vencida</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Almacenamiento y Conservación</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Condiciones Ambientales:</h4>
                        <ul className="space-y-1">
                          <li>• Temperatura: 15-25°C</li>
                          <li>• Humedad: 45-75%</li>
                          <li>• Protección luz UV directa</li>
                          <li>• Ventilación natural</li>
                          <li>• Alejado de fuentes ozono</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Organización:</h4>
                        <ul className="space-y-1">
                          <li>• Separación por tallas</li>
                          <li>• Rotación FIFO</li>
                          <li>• Etiquetado fecha apertura</li>
                          <li>• Inventario actualizado</li>
                          <li>• Registro temperaturas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Protección:</h4>
                        <ul className="space-y-1">
                          <li>• Contenedores limpios y secos</li>
                          <li>• Evitar contacto metales</li>
                          <li>• No doblar o aplastar</li>
                          <li>• Separar tipos químicos</li>
                          <li>• Acceso controlado</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Vida Útil por Tipo de Guante:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <strong>Desechables:</strong><br />
                          Uso único (4-8h max)
                        </div>
                        <div>
                          <strong>Nitrilo reutilizable:</strong><br />
                          1-3 meses uso regular
                        </div>
                        <div>
                          <strong>Cuero:</strong><br />
                          6-12 meses
                        </div>
                        <div>
                          <strong>Químico especializado:</strong><br />
                          Según exposición
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Programa de Mantenimiento Preventivo</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">Frecuencia</th>
                          <th className="border border-gray-300 p-2 text-left">Actividad</th>
                          <th className="border border-gray-300 p-2 text-left">Responsable</th>
                          <th className="border border-gray-300 p-2 text-left">Documentación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">Antes de cada uso</td>
                          <td className="border border-gray-300 p-2">Inspección visual + prueba inflado</td>
                          <td className="border border-gray-300 p-2">Usuario</td>
                          <td className="border border-gray-300 p-2">Check-list personal</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">Tras cada turno</td>
                          <td className="border border-gray-300 p-2">Limpieza y secado</td>
                          <td className="border border-gray-300 p-2">Usuario</td>
                          <td className="border border-gray-300 p-2">Registro limpieza</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Semanal</td>
                          <td className="border border-gray-300 p-2">Inspección técnica detallada</td>
                          <td className="border border-gray-300 p-2">Supervisor EPP</td>
                          <td className="border border-gray-300 p-2">Ficha inspección</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2">Mensual</td>
                          <td className="border border-gray-300 p-2">Control stock y caducidades</td>
                          <td className="border border-gray-300 p-2">Almacenero</td>
                          <td className="border border-gray-300 p-2">Inventario EPP</td>
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
          <h3 className="text-xl font-bold mb-2">Guía Técnica de Selección PDF</h3>
          <p className="mb-4 text-blue-100">
            Descarga esta guía con matrices de compatibilidad química, tablas de normativas y protocolos de mantenimiento específicos.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => trackInteraction('download_click', 'guia_guantes_trabajo_pdf', 'guantes_guide')}
          >
            Descargar Guía Técnica PDF
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
            La selección adecuada de guantes de protección requiere un análisis sistemático que equilibre protección, 
            funcionalidad y coste. El cumplimiento de las normativas EN 388, EN 374 y EN 407 garantiza niveles mínimos 
            de prestación, pero la optimización proviene del conocimiento profundo de los materiales y su compatibilidad 
            con los riesgos específicos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Un programa integral de selección, formación y mantenimiento no solo protege la salud de los trabajadores, 
            sino que también maximiza la productividad al mantener la destreza manual necesaria para cada tarea específica.
          </p>
        </motion.section>
      </article>
    </BlogLayout>
  );
}