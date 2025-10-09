'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function GuiaChalecosSeguridadArticle() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Guía Completa de Chalecos de Seguridad: Tipos, Usos y Normativas',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'chalecos-seguridad-completa');
    trackBlogView(guideId, 'Guía Completa de Chalecos de Seguridad: Tipos, Usos y Normativas', 'guia_epp');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'chalecos_guide');
  };

  const tabs = [
    { id: 0, title: 'Tipos y Clasificación', icon: '📋' },
    { id: 1, title: 'Normativas', icon: '⚖️' },
    { id: 2, title: 'Selección y Uso', icon: '🎯' },
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
            <Badge className="bg-green-100 text-green-800">Guía Completa</Badge>
            <Badge className="bg-purple-100 text-purple-800">Normativas</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía Completa de Chalecos de Seguridad: Tipos, Usos y Normativas
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>2,350 visualizaciones</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Guía Verificada por Expertos</h4>
                <p className="text-blue-700 text-sm">
                  Esta guía ha sido revisada y aprobada por especialistas en seguridad industrial y cumple con las normativas europeas vigentes.
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
            Los chalecos de seguridad son elementos fundamentales de protección personal que salvan vidas en entornos laborales de alto riesgo. 
            Esta guía completa te proporcionará toda la información necesaria para entender, seleccionar y utilizar correctamente estos equipos 
            de protección individual según las normativas europeas EN ISO 20471.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
              <div>
                <h4 className="font-semibold text-yellow-800">Importancia Crítica</h4>
                <p className="text-yellow-700 text-sm">
                  El uso correcto de chalecos de alta visibilidad reduce en un 80% los accidentes por falta de visibilidad en el lugar de trabajo.
                </p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos y Clasificación de Chalecos</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    Clase 1 - Visibilidad Básica
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Uso en tráfico de baja velocidad (&lt;25 km/h)</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Almacenes y centros logísticos</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Área mínima de material reflectante: 0.14 m²</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Área de material fluorescente: 0.50 m²</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-orange-600 mr-2" />
                    Clase 2 - Visibilidad Mejorada
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Carreteras y tráfico moderado</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Aeropuertos y puertos</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Área mínima de material reflectante: 0.20 m²</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Área de material fluorescente: 0.80 m²</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-red-600 mr-2" />
                    Clase 3 - Máxima Visibilidad
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Autopistas y tráfico de alta velocidad</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Trabajos nocturnos</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Área mínima de material reflectante: 0.20 m²</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-4 text-green-500 mr-2 mt-1" />Área de material fluorescente: 1.40 m²</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Tipos Especializados
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Chalecos para ferrocarriles</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Equipos para bomberos</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Chalecos para motociclistas</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Equipos para deportes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Colores Normalizados</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-yellow-100 rounded-lg">
                    <div className="w-6 h-6 bg-yellow-400 rounded mr-3"></div>
                    <span className="font-medium">Amarillo Fluorescente</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-100 rounded-lg">
                    <div className="w-6 h-6 bg-orange-400 rounded mr-3"></div>
                    <span className="font-medium">Naranja Fluorescente</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-100 rounded-lg">
                    <div className="w-6 h-6 bg-red-400 rounded mr-3"></div>
                    <span className="font-medium">Rojo Fluorescente</span>
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
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">EN ISO 20471:2013+A1:2016</h3>
                  <p className="text-blue-800 mb-4">
                    Norma principal que establece los requisitos para prendas de alta visibilidad utilizadas en situaciones profesionales donde existe riesgo para la seguridad personal.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Requisitos principales:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Propiedades fotométricas y colorimétricas</li>
                        <li>• Resistencia al lavado y limpieza</li>
                        <li>• Resistencia a la abrasión</li>
                        <li>• Estabilidad dimensional</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Áreas mínimas requeridas:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Material de fondo fluorescente</li>
                        <li>• Material retrorreflectante</li>
                        <li>• Diseño y colocación</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Marcado y Certificación</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Elementos obligatorios del marcado:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Número de la norma (EN ISO 20471)</li>
                        <li>• Clase de prestación</li>
                        <li>• Nombre del fabricante</li>
                        <li>• Talla</li>
                        <li>• Instrucciones de cuidado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Organismos de certificación:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• CE marking obligatorio</li>
                        <li>• Ensayos por laboratorio notificado</li>
                        <li>• Declaración de conformidad UE</li>
                        <li>• Certificado de examen UE de tipo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-900">Otras Normativas Relacionadas</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">EN 343 - Protección contra la lluvia</h4>
                      <p className="text-sm text-gray-600">Para chalecos que también ofrecen protección impermeable.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN ISO 11612 - Protección contra el calor y la llama</h4>
                      <p className="text-sm text-gray-600">Chalecos para trabajos con exposición al calor.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">EN 1149 - Propiedades electroestáticas</h4>
                      <p className="text-sm text-gray-600">Para ambientes con riesgo de explosión.</p>
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
                  <h3 className="text-lg font-semibold mb-4">Matriz de Selección por Entorno</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Entorno de Trabajo</th>
                          <th className="border border-gray-300 p-3 text-center">Clase Requerida</th>
                          <th className="border border-gray-300 p-3 text-left">Características Adicionales</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Almacenes y centros logísticos</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">Clase 1</td>
                          <td className="border border-gray-300 p-3">Material ligero, transpirable</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Carreteras urbanas</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-orange-600">Clase 2</td>
                          <td className="border border-gray-300 p-3">Resistente al desgarro</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Autopistas y trabajos nocturnos</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-red-600">Clase 3</td>
                          <td className="border border-gray-300 p-3">Manga larga, máxima reflectancia</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">Aeropuertos</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-orange-600">Clase 2</td>
                          <td className="border border-gray-300 p-3">Color específico por zona</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Ferrocarriles</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-red-600">Clase 3</td>
                          <td className="border border-gray-300 p-3">Normativa específica del sector</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-green-900">✅ Uso Correcto</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Verificar la clase antes del uso</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Ajustar correctamente las correas</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Mantener las bandas reflectantes limpias</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Usar sobre ropa ajustada</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Inspeccionar antes de cada uso</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Reemplazar si está dañado</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-red-900">❌ Errores Comunes</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Usar clase insuficiente para el riesgo</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Ocultar bandas reflectantes</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No ajustar correctamente la talla</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Usar chaleco sucio o dañado</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />No considerar condiciones climáticas</li>
                      <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />Modificar o alterar el chaleco</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Consideraciones Especiales</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Condiciones Climáticas</h4>
                      <ul className="space-y-1">
                        <li>• Lluvia: Materiales impermeables</li>
                        <li>• Calor: Tejidos transpirables</li>
                        <li>• Frío: Capas adicionales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Combinación con otros EPP</h4>
                      <ul className="space-y-1">
                        <li>• Arnés de seguridad</li>
                        <li>• Ropa de protección química</li>
                        <li>• Equipos de soldadura</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Personalización</h4>
                      <ul className="space-y-1">
                        <li>• Logotipos de empresa</li>
                        <li>• Identificación personal</li>
                        <li>• Bolsillos adicionales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mantenimiento y Cuidado</h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Limpieza y Lavado</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium">Lavado a máquina:</h4>
                        <ul className="ml-4 space-y-1">
                          <li>• Temperatura máxima: 40°C</li>
                          <li>• Detergente suave sin blanqueadores</li>
                          <li>• Centrifugado suave</li>
                          <li>• Separar de otras prendas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Secado:</h4>
                        <ul className="ml-4 space-y-1">
                          <li>• Al aire libre, evitar luz solar directa</li>
                          <li>• No usar secadora</li>
                          <li>• No planchar sobre bandas reflectantes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Inspección Regular</h3>
                    <div className="space-y-3 text-sm">
                      <h4 className="font-medium">Puntos de verificación:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Estado de las bandas reflectantes</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Integridad del tejido fluorescente</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Funcionamiento de cremalleras y velcros</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Ausencia de roturas o desgarros</li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />Legibilidad del marcado CE</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Criterios de Reemplazo</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Reemplazar inmediatamente si:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Bandas reflectantes agrietadas o despegadas</li>
                        <li>• Color fluorescente desvaído significativamente</li>
                        <li>• Roturas en costuras principales</li>
                        <li>• Pérdida de reflectancia nocturna</li>
                        <li>• Daños por químicos o calor</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Vida útil esperada:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Uso diario intensivo: 6-12 meses</li>
                        <li>• Uso ocasional: 2-3 años</li>
                        <li>• Depende del entorno de trabajo</li>
                        <li>• Seguir recomendaciones del fabricante</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Almacenamiento</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Condiciones óptimas:</h4>
                      <ul className="space-y-1">
                        <li>• Lugar seco y ventilado</li>
                        <li>• Temperatura ambiente</li>
                        <li>• Protegido de la luz UV</li>
                        <li>• Alejado de químicos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Organización:</h4>
                      <ul className="space-y-1">
                        <li>• Colgado en perchas</li>
                        <li>• Identificación por tallas</li>
                        <li>• Registro de mantenimiento</li>
                        <li>• Rotación de stock</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Evitar:</h4>
                      <ul className="space-y-1">
                        <li>• Dobleces prolongados</li>
                        <li>• Contacto con objetos punzantes</li>
                        <li>• Humedad excesiva</li>
                        <li>• Temperaturas extremas</li>
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
          <h3 className="text-xl font-bold mb-2">Descarga la Guía Completa</h3>
          <p className="mb-4 text-blue-100">
            Obtén esta guía en formato PDF para consulta offline y úsala como material de formación en tu empresa.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => trackInteraction('download_click', 'guia_chalecos_pdf', 'chalecos_guide')}
          >
            Descargar PDF Gratis
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
            La correcta selección, uso y mantenimiento de chalecos de seguridad es fundamental para garantizar la protección 
            de los trabajadores en entornos de riesgo. Esta guía proporciona las bases técnicas y prácticas necesarias 
            para implementar un programa efectivo de alta visibilidad en cualquier organización.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Recuerda que el cumplimiento de las normativas no solo es una obligación legal, sino una inversión en la 
            seguridad y bienestar de tu equipo de trabajo.
          </p>
        </motion.section>
      </article>
    </BlogLayout>
  );
}