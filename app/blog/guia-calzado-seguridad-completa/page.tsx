'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download, Zap, Thermometer, Droplets, Hammer } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function GuiaCalzadoSeguridad() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Guía Definitiva del Calzado de Seguridad: Protección y Confort',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'guia-calzado-seguridad-completa');
    trackBlogView(guideId, 'Guía Definitiva del Calzado de Seguridad: Protección y Confort', 'guia_epp');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'calzado_guide');
  };

  const tabs = [
    { id: 0, title: 'Tipos y Clasificación', icon: '👢' },
    { id: 1, title: 'Normativas EN ISO', icon: '📋' },
    { id: 2, title: 'Selección Técnica', icon: '🔧' },
    { id: 3, title: 'Cuidado y Vida Útil', icon: '🧽' }
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
            <Badge className="bg-blue-100 text-blue-800">Calzado EPP</Badge>
            <Badge className="bg-green-100 text-green-800">EN ISO 20345</Badge>
            <Badge className="bg-purple-100 text-purple-800">Guía Técnica</Badge>
            <Badge className="bg-orange-100 text-orange-800">S1-S5</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía Definitiva del Calzado de Seguridad: Protección y Confort
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>18 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>4,280 visualizaciones</span>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <Hammer className="h-5 w-5 text-orange-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-800">Protección Integral del Pie</h4>
                <p className="text-orange-700 text-sm">
                  El calzado de seguridad adecuado previene el 60% de las lesiones en extremidades inferiores. 
                  Una selección correcta es esencial para la productividad y salud laboral.
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
            El calzado de seguridad representa uno de los elementos más críticos del equipo de protección personal. 
            Esta guía comprensiva abarca desde la clasificación técnica según EN ISO 20345 hasta criterios de selección 
            específicos para cada entorno laboral, garantizando máxima protección sin comprometer el confort.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Impacto en Seguridad Laboral</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25%</div>
                <div className="text-blue-700">de accidentes laborales afectan pies/piernas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">60%</div>
                <div className="text-blue-700">de lesiones prevenibles con calzado correcto</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">€15K</div>
                <div className="text-blue-700">coste medio por lesión podal grave</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos y Clasificación del Calzado de Seguridad</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Clasificación Básica por Nivel de Protección</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-green-800">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        Zapatos de Seguridad
                      </h4>
                      <div className="mb-4">
                        <Badge className="bg-green-100 text-green-800">S1 - S5</Badge>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Puntera de seguridad: 200J</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Resistencia a aplastamiento: 15 kN</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Máxima protección</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Industria pesada, construcción</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        Zapatos de Protección
                      </h4>
                      <div className="mb-4">
                        <Badge className="bg-blue-100 text-blue-800">P1 - P5</Badge>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Puntera de protección: 100J</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Resistencia a aplastamiento: 10 kN</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Protección intermedia</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />Logística, almacenes</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-yellow-800">
                        <Shield className="h-5 w-5 text-yellow-600 mr-2" />
                        Zapatos de Trabajo
                      </h4>
                      <div className="mb-4">
                        <Badge className="bg-yellow-100 text-yellow-800">O1 - O5</Badge>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />Sin puntera de protección</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />Propiedades básicas</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />Confort y ergonomía</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />Oficinas, servicios ligeros</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Categorías Específicas S1-S5</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Categoría</th>
                          <th className="border border-gray-300 p-3 text-left">Características Básicas</th>
                          <th className="border border-gray-300 p-3 text-left">Propiedades Adicionales</th>
                          <th className="border border-gray-300 p-3 text-left">Uso Recomendado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold text-blue-600">S1</td>
                          <td className="border border-gray-300 p-3">Puntera + talón cerrado + antiestático + absorción energía talón</td>
                          <td className="border border-gray-300 p-3">-</td>
                          <td className="border border-gray-300 p-3">Ambientes secos, industria ligera</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold text-green-600">S1P</td>
                          <td className="border border-gray-300 p-3">S1 + plantilla antiperforación</td>
                          <td className="border border-gray-300 p-3">Protección contra clavos</td>
                          <td className="border border-gray-300 p-3">Construcción, obra</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold text-orange-600">S2</td>
                          <td className="border border-gray-300 p-3">S1 + repelencia al agua</td>
                          <td className="border border-gray-300 p-3">Resistencia humedad 60 min</td>
                          <td className="border border-gray-300 p-3">Exteriores, ambientes húmedos</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold text-purple-600">S3</td>
                          <td className="border border-gray-300 p-3">S2 + plantilla antiperforación</td>
                          <td className="border border-gray-300 p-3">Agua + perforación</td>
                          <td className="border border-gray-300 p-3">Construcción húmeda</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold text-red-600">S4</td>
                          <td className="border border-gray-300 p-3">S1 + calzado completo de caucho/polímero</td>
                          <td className="border border-gray-300 p-3">Totalmente impermeable</td>
                          <td className="border border-gray-300 p-3">Industria química, alimentaria</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold text-red-800">S5</td>
                          <td className="border border-gray-300 p-3">S4 + plantilla antiperforación</td>
                          <td className="border border-gray-300 p-3">Máxima protección</td>
                          <td className="border border-gray-300 p-3">Minería, petroquímica</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Tipos por Diseño y Aplicación</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Botas Altas</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Protección hasta tobillo</li>
                        <li>• Estabilidad mejorada</li>
                        <li>• Trabajos en terrenos irregulares</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Zapatos Bajos</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Mayor flexibilidad</li>
                        <li>• Mejor transpirabilidad</li>
                        <li>• Uso en interiores</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Botas Wellington</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Totalmente impermeables</li>
                        <li>• Fácil limpieza</li>
                        <li>• Industria alimentaria</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Calzado Especializado</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Soldadores (resistencia chispas)</li>
                        <li>• Frigorífico (aislamiento frío)</li>
                        <li>• Fundición (calor extremo)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Normativas y Certificaciones EN ISO</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">EN ISO 20345:2022 - Normativa Principal</h3>
                  <p className="text-blue-800 mb-4">
                    Especifica los requisitos básicos y adicionales para calzado de seguridad de uso profesional, 
                    incluyendo ensayos de resistencia y métodos de evaluación.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Ensayos Obligatorios Básicos:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Resistencia al impacto (200J)</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Resistencia a la compresión (15 kN)</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Resistencia al deslizamiento</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Propiedades del material superior</li>
                        <li className="flex items-start"><CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1" />Resistencia de costuras y uniones</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Propiedades Adicionales:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-green-100 text-green-800">A</Badge>Propiedades antiestáticas</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-blue-100 text-blue-800">E</Badge>Absorción de energía en el talón</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-yellow-100 text-yellow-800">P</Badge>Resistencia a la perforación</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-purple-100 text-purple-800">WR</Badge>Resistencia al agua</li>
                        <li className="flex items-start"><Badge className="text-xs mr-2 mt-0.5 bg-red-100 text-red-800">HRO</Badge>Resistencia al calor de contacto</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Símbolos y Marcado Técnico</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Marcado Obligatorio:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• EN ISO 20345</li>
                        <li>• Categoría (S1, S2, etc.)</li>
                        <li>• Talla EU</li>
                        <li>• Año y trimestre fabricación</li>
                        <li>• CE + número organismo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Símbolos de Propiedades:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ⚡ Conductividad</li>
                        <li>• 🔥 Resistencia calor</li>
                        <li>• ❄️ Aislamiento frío</li>
                        <li>• 💧 Impermeabilidad</li>
                        <li>• 🔺 Puntera metálica/compuesta</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Información Técnica:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Rango temperaturas uso</li>
                        <li>• Material puntera</li>
                        <li>• Tipo de plantilla</li>
                        <li>• Nivel deslizamiento SRA/SRB</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">Ensayos de Deslizamiento</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">SRA - Baldosa Cerámica:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Superficie: baldosa + solución jabonosa</li>
                        <li>• Coeficiente μ ≥ 0.32 (talón)</li>
                        <li>• Coeficiente μ ≥ 0.28 (planta)</li>
                        <li>• Simula suelos de oficinas/comercios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">SRB - Suelo de Acero:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Superficie: acero + glicerina</li>
                        <li>• Coeficiente μ ≥ 0.18 (talón)</li>
                        <li>• Coeficiente μ ≥ 0.13 (planta)</li>
                        <li>• Simula superficies industriales</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded">
                    <strong>SRC = SRA + SRB:</strong> Máximo nivel antideslizante en ambas superficies
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Normativas Complementarias</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">EN ISO 20346 - Zapatos de Protección (P1-P5)</h4>
                      <p className="text-sm text-gray-600">Menor nivel de protección (100J) para riesgos moderados.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN ISO 20347 - Zapatos de Trabajo (O1-O5)</h4>
                      <p className="text-sm text-gray-600">Sin puntera protectora, enfoque en confort y propiedades especiales.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN ISO 17249 - Calzado Conductivo</h4>
                      <p className="text-sm text-gray-600">Para ambientes con electricidad estática controlada.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 15090 - Calzado para Bomberos</h4>
                      <p className="text-sm text-gray-600">Resistencia específica a calor, llama y penetración de agua.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selección Técnica por Entorno</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Matriz de Selección Industrial</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Sector / Riesgo</th>
                          <th className="border border-gray-300 p-3 text-center">Categoría</th>
                          <th className="border border-gray-300 p-3 text-left">Propiedades Clave</th>
                          <th className="border border-gray-300 p-3 text-left">Material Suela</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Construcción seca</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">S1P</td>
                          <td className="border border-gray-300 p-3">Antiperforación + antiestático</td>
                          <td className="border border-gray-300 p-3">PU doble densidad</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Construcción húmeda</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-green-600">S3</td>
                          <td className="border border-gray-300 p-3">Antiperforación + WR + SRC</td>
                          <td className="border border-gray-300 p-3">PU/Caucho nitrilo</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Industria química</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-red-600">S4/S5</td>
                          <td className="border border-gray-300 p-3">Resistencia química + impermeables</td>
                          <td className="border border-gray-300 p-3">PVC/Caucho nitrilo</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Alimentaria</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-red-600">S4/S5</td>
                          <td className="border border-gray-300 p-3">Fácil limpieza + SRC + WR</td>
                          <td className="border border-gray-300 p-3">PU/PVC blanco</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Soldadura</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-orange-600">S1P + HRO</td>
                          <td className="border border-gray-300 p-3">Resistencia chispas + HRO</td>
                          <td className="border border-gray-300 p-3">Caucho HRO</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Logística</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">S1</td>
                          <td className="border border-gray-300 p-3">Ligereza + confort + SRC</td>
                          <td className="border border-gray-300 p-3">EVA + Caucho</td>
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
                        <h4 className="font-medium">1. Análisis de Riesgos:</h4>
                        <ul className="ml-4 space-y-1 mt-1">
                          <li>• Caída de objetos (peso, altura)</li>
                          <li>• Perforación (clavos, objetos punzantes)</li>
                          <li>• Superficies resbaladizas</li>
                          <li>• Contacto con químicos</li>
                          <li>• Temperaturas extremas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">2. Condiciones Ambientales:</h4>
                        <ul className="ml-4 space-y-1 mt-1">
                          <li>• Interior/exterior</li>
                          <li>• Húmedo/seco</li>
                          <li>• Temperatura operativa</li>
                          <li>• Presencia de aceites/grasas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-red-900">❌ Errores Comunes de Selección</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Subestimar el nivel de riesgo</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Priorizar precio sobre protección</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No considerar la talla correcta</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Ignorar propiedades antideslizantes</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No verificar la fecha de fabricación</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Usar calzado personal inadecuado</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Consideraciones de Confort y Ergonomía</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Ajuste y Talla:</h4>
                      <ul className="space-y-1">
                        <li>• Medir pies al final del día</li>
                        <li>• Espacio libre 12-15mm</li>
                        <li>• Considerar calcetines de trabajo</li>
                        <li>• Ancho adecuado (narrow, wide, EE)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Materiales y Construcción:</h4>
                      <ul className="space-y-1">
                        <li>• Transpirabilidad del upper</li>
                        <li>• Flexibilidad de la suela</li>
                        <li>• Amortiguación del talón</li>
                        <li>• Soporte del arco plantar</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Factores Específicos:</h4>
                      <ul className="space-y-1">
                        <li>• Duración de uso diario</li>
                        <li>• Posición de trabajo (de pie/caminando)</li>
                        <li>• Superficie de trabajo</li>
                        <li>• Necesidades ortopédicas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-900">Tecnologías Avanzadas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Materiales Innovadores:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Punteras de materiales compuestos</li>
                        <li>• Plantillas antiperforación textiles</li>
                        <li>• Sistemas de amortiguación avanzada</li>
                        <li>• Membranas impermeables transpirables</li>
                        <li>• Suelas antifatiga con retorno de energía</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Características Especiales:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Sistemas de ventilación activa</li>
                        <li>• Plantillas extraíbles anatómicas</li>
                        <li>• Tecnología antibacteriana</li>
                        <li>• Sistemas de cierre rápido</li>
                        <li>• Elementos reflectantes integrados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cuidado y Maximización de la Vida Útil</h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Cuidado Diario</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Rutina post-uso:</h4>
                      <ol className="ml-4 space-y-1 mt-2">
                        <li>1. Retirar suciedad gruesa con cepillo</li>
                        <li>2. Limpiar con paño húmedo</li>
                        <li>3. Extraer plantillas si es posible</li>
                        <li>4. Airear y secar naturalmente</li>
                        <li>5. Inspección visual de daños</li>
                        <li>6. Almacenar en lugar ventilado</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Limpieza Profunda</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Procedimiento semanal:</h4>
                      <ul className="space-y-1 mt-2">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Lavado con agua tibia y jabón neutro</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Desinfección de plantillas</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Limpieza específica según material</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Secado completo (24-48h)</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Aplicación de productos de cuidado</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Inspección y Mantenimiento Preventivo</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Inspección Diaria:</h4>
                      <ul className="space-y-1">
                        <li>• Estado general del upper</li>
                        <li>• Integridad de costuras</li>
                        <li>• Desgaste de la suela</li>
                        <li>• Funcionamiento de cordones</li>
                        <li>• Limpieza de banda de rodadura</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Inspección Semanal:</h4>
                      <ul className="space-y-1">
                        <li>• Estado de plantillas internas</li>
                        <li>• Flexibilidad de materiales</li>
                        <li>• Adherencia de elementos pegados</li>
                        <li>• Deformación de la horma</li>
                        <li>• Funcionalidad de cierres</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Inspección Mensual:</h4>
                      <ul className="space-y-1">
                        <li>• Medición del desgaste</li>
                        <li>• Estado de la puntera</li>
                        <li>• Impermeabilidad (si aplicable)</li>
                        <li>• Propiedades antideslizantes</li>
                        <li>• Fecha de caducidad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900">Criterios de Reemplazo</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-red-800">Reemplazo Inmediato Obligatorio:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Grietas o roturas en puntera</li>
                        <li>• Perforación de la suela</li>
                        <li>• Separación de suela del upper</li>
                        <li>• Desgaste excesivo (&gt;50% grosor)</li>
                        <li>• Pérdida de impermeabilidad crítica</li>
                        <li>• Deformación permanente grave</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-orange-800">Planificar Reemplazo:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Desgaste visible del dibujo (25-40%)</li>
                        <li>• Pérdida de comodidad notable</li>
                        <li>• Aparición de primera grieta superficial</li>
                        <li>• Reducción de propiedades antideslizantes</li>
                        <li>• Antigüedad superior a 2 años uso intensivo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Maximización de la Vida Útil</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Buenas Prácticas:</h4>
                        <ul className="space-y-1">
                          <li>• Rotación entre 2-3 pares</li>
                          <li>• Uso de calcetines técnicos adecuados</li>
                          <li>• Evitar exposición innecesaria a químicos</li>
                          <li>• Secar completamente entre usos</li>
                          <li>• Almacenamiento correcto</li>
                          <li>• No modificar el calzado original</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Productos de Mantenimiento:</h4>
                        <ul className="space-y-1">
                          <li>• Spray impermeabilizante específico</li>
                          <li>• Cremas nutritivas para cuero</li>
                          <li>• Desodorantes antibacterianos</li>
                          <li>• Plantillas de recambio</li>
                          <li>• Cordones de repuesto</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Vida Útil Esperada por Uso:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <strong>Uso Intensivo Diario:</strong><br />
                          6-12 meses
                        </div>
                        <div>
                          <strong>Uso Regular:</strong><br />
                          12-18 meses
                        </div>
                        <div>
                          <strong>Uso Ocasional:</strong><br />
                          18-24 meses
                        </div>
                        <div>
                          <strong>Uso Ligero:</strong><br />
                          24-36 meses
                        </div>
                      </div>
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
          <h3 className="text-xl font-bold mb-2">Guía Técnica Completa PDF</h3>
          <p className="mb-4 text-blue-100">
            Descarga esta guía técnica con matrices de selección, tablas de normativas y programas de mantenimiento específicos.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => trackInteraction('download_click', 'guia_calzado_pdf', 'calzado_guide')}
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
            La selección adecuada del calzado de seguridad requiere un análisis técnico riguroso que considere tanto los 
            riesgos específicos del entorno laboral como las necesidades de confort del usuario. El cumplimiento de las 
            normativas EN ISO 20345 garantiza un nivel mínimo de protección, pero la optimización viene de entender las 
            propiedades adicionales y su aplicación correcta.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Un programa integral de selección, uso y mantenimiento no solo maximiza la protección del trabajador, sino que 
            también optimiza la inversión empresarial mediante la extensión de la vida útil del equipo y la reducción de 
            accidentes laborales.
          </p>
        </motion.section>
      </article>
    </BlogLayout>
  );
}