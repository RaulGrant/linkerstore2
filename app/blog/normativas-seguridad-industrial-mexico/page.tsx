'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, AlertTriangle, CheckCircle, Eye, Star, Info, Download, Scale, FileText, Users, Building, Gavel } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBlogView, trackInteraction, generateTrackingId } from '@/lib/meta-pixel';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function GuiaNormativasSeguridadMexico() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Enable scroll and engagement tracking
  useScrollTracking({ 
    pageTitle: 'Normativas de Seguridad Industrial en México: Marco Legal NOM-STPS Completo',
    trackTimeOnPage: true 
  });

  // Track guide view on component mount
  useEffect(() => {
    const guideId = generateTrackingId('guide', 'normativas-seguridad-industrial-mexico');
    trackBlogView(guideId, 'Normativas de Seguridad Industrial en México: Marco Legal NOM-STPS Completo', 'guia_legal');
  }, []);

  // Handle tab interactions
  const handleTabChange = (tabIndex: number, tabName: string) => {
    setActiveTab(tabIndex);
    trackInteraction('guide_tab_click', `tab_${tabIndex}_${tabName}`, 'normativas_guide_mexico');
  };

  const tabs = [
    { id: 0, title: 'Marco Legal Mexicano', icon: '🇲🇽' },
    { id: 1, title: 'Normas NOM-STPS', icon: '📋' },
    { id: 2, title: 'Obligaciones Patronales', icon: '🏢' },
    { id: 3, title: 'Inspecciones y Sanciones', icon: '⚖️' }
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
            <Badge className="bg-green-100 text-green-800">Marco Legal México</Badge>
            <Badge className="bg-red-100 text-red-800">STPS</Badge>
            <Badge className="bg-blue-100 text-blue-800">NOM-STPS</Badge>
            <Badge className="bg-purple-100 text-purple-800">Cumplimiento Obligatorio</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Normativas de Seguridad Industrial en México: Marco Legal NOM-STPS Completo
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>21 Nov 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>28 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>8,950 visualizaciones</span>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <Gavel className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">Marco Legal de Obligatorio Cumplimiento</h4>
                <p className="text-green-700 text-sm">
                  El incumplimiento de las NOM-STPS puede conllevar multas de hasta $2,106,750 pesos mexicanos 
                  y clausura temporal o definitiva. El conocimiento del marco legal es fundamental para patrones y técnicos.
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
            La seguridad y salud en el trabajo en México se regula a través de la Secretaría del Trabajo y Previsión Social (STPS) 
            mediante las Normas Oficiales Mexicanas (NOM-STPS). Esta guía proporciona una visión integral del marco 
            legal vigente, obligaciones patronales, procedimientos de cumplimiento y régimen sancionador aplicable en territorio mexicano.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">¿Por qué es crucial conocer las NOM-STPS?</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Cumplimiento legal obligatorio para todos los centros de trabajo</li>
                  <li>• Prevención de accidentes y enfermedades de trabajo</li>
                  <li>• Evitar sanciones económicas y clausuras</li>
                  <li>• Protección de la integridad física de los trabajadores</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id, tab.title)}
                className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {activeTab === 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Marco Legal Mexicano de Seguridad y Salud en el Trabajo</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fundamentos Constitucionales y Legales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">🇲🇽 Constitución Política</h4>
                    <p className="text-sm text-gray-700">
                      Artículo 123: Establece el derecho al trabajo digno y socialmente útil, 
                      incluyendo condiciones de higiene y seguridad en los centros laborales.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">📚 Ley Federal del Trabajo</h4>
                    <p className="text-sm text-gray-700">
                      Título Cuarto: Derechos y obligaciones de los trabajadores y patrones en materia 
                      de prevención de riesgos de trabajo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Estructura Normativa STPS</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border border-green-200 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <Building className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-800">STPS</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Secretaría del Trabajo y Previsión Social - Autoridad reguladora 
                      en materia laboral y de seguridad en el trabajo.
                    </p>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-blue-800">NOM-STPS</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Normas Oficiales Mexicanas que establecen las condiciones mínimas 
                      de seguridad e higiene en los centros de trabajo.
                    </p>
                  </div>

                  <div className="bg-white border border-red-200 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <Scale className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-red-800">Inspecciones</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sistema de verificación del cumplimiento normativo a través 
                      de inspectores federales del trabajo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Principio de Responsabilidad Patronal</h4>
                    <p className="text-yellow-700 text-sm">
                      El patrón es responsable de proporcionar un ambiente de trabajo seguro y saludable. 
                      Esta responsabilidad es intransferible y abarca tanto la prevención como la reparación del daño.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 1 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Principales Normas Oficiales Mexicanas (NOM-STPS)</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                    <h3 className="text-white font-bold text-lg">NOM-001-STPS-2008</h3>
                    <p className="text-blue-100 text-sm">Edificios, locales e instalaciones</p>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Objetivo</h4>
                        <p className="text-sm text-gray-600">
                          Establecer las condiciones de seguridad de los edificios, locales, 
                          instalaciones y áreas en los centros de trabajo para su funcionamiento y conservación.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Aplicación</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Todos los centros de trabajo</li>
                          <li>• Edificaciones permanentes y temporales</li>
                          <li>• Instalaciones eléctricas y sanitarias</li>
                          <li>• Áreas de tránsito y evacuación</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                    <h3 className="text-white font-bold text-lg">NOM-002-STPS-2010</h3>
                    <p className="text-red-100 text-sm">Prevención y protección contra incendios</p>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Objetivo</h4>
                        <p className="text-sm text-gray-600">
                          Establecer los requerimientos para la prevención y protección contra incendios 
                          en los centros de trabajo.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Elementos Clave</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Brigadas de emergencia</li>
                          <li>• Plan de atención a emergencias</li>
                          <li>• Sistemas de detección y extinción</li>
                          <li>• Rutas de evacuación</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                    <h3 className="text-white font-bold text-lg">NOM-017-STPS-2008</h3>
                    <p className="text-green-100 text-sm">Equipo de protección personal</p>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Objetivo</h4>
                        <p className="text-sm text-gray-600">
                          Establecer los requerimientos mínimos para que el patrón seleccione, 
                          adquiera y proporcione equipo de protección personal.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tipos de EPP</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Protección para la cabeza</li>
                          <li>• Protección auditiva y visual</li>
                          <li>• Protección respiratoria</li>
                          <li>• Protección de extremidades</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                    <h3 className="text-white font-bold text-lg">NOM-030-STPS-2009</h3>
                    <p className="text-purple-100 text-sm">Servicios preventivos de seguridad y salud</p>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Objetivo</h4>
                        <p className="text-sm text-gray-600">
                          Establecer las funciones y actividades que deberán realizar los servicios 
                          preventivos de seguridad y salud en el trabajo.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Servicios Preventivos</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Identificación de riesgos</li>
                          <li>• Evaluación de factores de riesgo</li>
                          <li>• Vigilancia del medio ambiente laboral</li>
                          <li>• Vigilancia de la salud de los trabajadores</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Otras NOM-STPS Importantes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-sm text-gray-900">NOM-004-STPS-1999</h4>
                    <p className="text-xs text-gray-600">Sistemas y dispositivos de seguridad en maquinaria</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-sm text-gray-900">NOM-005-STPS-1998</h4>
                    <p className="text-xs text-gray-600">Manejo, transporte y almacenamiento de sustancias químicas peligrosas</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-sm text-gray-900">NOM-009-STPS-2011</h4>
                    <p className="text-xs text-gray-600">Condiciones de seguridad para realizar trabajos en altura</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-sm text-gray-900">NOM-011-STPS-2001</h4>
                    <p className="text-xs text-gray-600">Condiciones de seguridad e higiene en los centros de trabajo donde se genere ruido</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-sm text-gray-900">NOM-025-STPS-2008</h4>
                    <p className="text-xs text-gray-600">Condiciones de iluminación en los centros de trabajo</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold text-sm text-gray-900">NOM-036-1-STPS-2018</h4>
                    <p className="text-xs text-gray-600">Factores de riesgo ergonómico en el trabajo</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 2 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Obligaciones Patronales en Seguridad y Salud</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsabilidades Fundamentales del Patrón</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Obligaciones Inmediatas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Proporcionar condiciones seguras de trabajo</li>
                      <li>• Suministrar EPP sin costo al trabajador</li>
                      <li>• Capacitar en seguridad e higiene</li>
                      <li>• Informar sobre los riesgos de trabajo</li>
                      <li>• Realizar exámenes médicos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">📋 Obligaciones de Gestión</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Elaborar programa de seguridad e higiene</li>
                      <li>• Integrar comisiones de seguridad e higiene</li>
                      <li>• Llevar registros de accidentes y enfermedades</li>
                      <li>• Realizar análisis de riesgos</li>
                      <li>• Implementar medidas preventivas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Estructura Organizacional de Seguridad</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-blue-800">Comisión de Seguridad e Higiene</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Integración</h5>
                        <p className="text-xs text-gray-600">
                          Igual número de representantes del patrón y de los trabajadores
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Funciones</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Investigar accidentes y enfermedades</li>
                          <li>• Vigilar el cumplimiento normativo</li>
                          <li>• Proponer medidas preventivas</li>
                          <li>• Promover la capacitación</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-green-200 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <Shield className="h-12 w-12 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-800">Servicios Preventivos</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Modalidades</h5>
                        <p className="text-xs text-gray-600">
                          Internos, externos o mixtos según el tamaño de la empresa
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Actividades</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Evaluación de riesgos</li>
                          <li>• Vigilancia de la salud</li>
                          <li>• Asesoría técnica</li>
                          <li>• Formación e información</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Documentación Obligatoria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border border-yellow-200">
                    <FileText className="h-6 w-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900">Programa de Seguridad e Higiene</h4>
                    <p className="text-xs text-gray-600 mt-1">Diagnóstico, objetivos, metas y actividades preventivas</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-yellow-200">
                    <CheckCircle className="h-6 w-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900">Registros de Capacitación</h4>
                    <p className="text-xs text-gray-600 mt-1">Evidencia de entrenamiento en seguridad e higiene</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-yellow-200">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900">Análisis de Riesgos</h4>
                    <p className="text-xs text-gray-600 mt-1">Identificación, evaluación y control de riesgos</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 3 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspecciones y Régimen Sancionador</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Proceso de Inspección Laboral</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border border-red-100">
                    <div className="text-center mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-red-600 font-bold text-sm">1</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-red-800 text-sm mb-2">Inicio de Inspección</h4>
                    <p className="text-xs text-gray-600">
                      Programada, por denuncia o por accidente de trabajo. 
                      El inspector presenta credencial y orden de inspección.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-red-100">
                    <div className="text-center mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-red-600 font-bold text-sm">2</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-red-800 text-sm mb-2">Desarrollo</h4>
                    <p className="text-xs text-gray-600">
                      Recorrido por las instalaciones, revisión de documentos, 
                      entrevistas con trabajadores y representantes.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-red-100">
                    <div className="text-center mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-red-600 font-bold text-sm">3</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-red-800 text-sm mb-2">Conclusión</h4>
                    <p className="text-xs text-gray-600">
                      Elaboración del acta de inspección y, en su caso, 
                      emplazamiento o inicio del procedimiento sancionador.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Tipos de Sanciones</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-orange-200 rounded-lg overflow-hidden">
                    <div className="bg-orange-100 p-4">
                      <h4 className="font-semibold text-orange-800">💰 Multas Económicas</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Infracciones Leves</h5>
                        <p className="text-sm text-gray-600">15 a 155 veces la Unidad de Medida y Actualización (UMA)</p>
                        <p className="text-xs text-green-600">$1,543.50 - $15,953.50 pesos</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Infracciones Graves</h5>
                        <p className="text-sm text-gray-600">156 a 770 veces la UMA</p>
                        <p className="text-xs text-orange-600">$16,056.60 - $79,289.00 pesos</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Infracciones Muy Graves</h5>
                        <p className="text-sm text-gray-600">771 a 20,450 veces la UMA</p>
                        <p className="text-xs text-red-600">$79,391.90 - $2,106,355.00 pesos</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-red-200 rounded-lg overflow-hidden">
                    <div className="bg-red-100 p-4">
                      <h4 className="font-semibold text-red-800">🏢 Medidas de Seguridad</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Clausura Parcial</h5>
                        <p className="text-xs text-gray-600">
                          Suspensión de actividades en áreas específicas donde existe riesgo inminente
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Clausura Total</h5>
                        <p className="text-xs text-gray-600">
                          Suspensión completa de actividades cuando el riesgo afecta todo el centro de trabajo
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">Clausura Definitiva</h5>
                        <p className="text-xs text-gray-600">
                          En casos de reincidencia grave o cuando no se corrigen las condiciones de riesgo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Factores Agravantes y Atenuantes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Agravantes (Aumentan la sanción)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reincidencia en el incumplimiento</li>
                      <li>• Ocultación de información al inspector</li>
                      <li>• Riesgo grave e inminente para los trabajadores</li>
                      <li>• Falta de cooperación con la autoridad</li>
                      <li>• Número elevado de trabajadores afectados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Atenuantes (Reducen la sanción)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Colaboración con el inspector</li>
                      <li>• Adopción voluntaria de medidas correctivas</li>
                      <li>• Falta de intencionalidad en el incumplimiento</li>
                      <li>• Medidas preventivas implementadas previamente</li>
                      <li>• Tamaño reducido de la empresa</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Recursos y Procedimientos de Defensa</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <h5 className="font-medium text-green-800 text-sm">Recurso de Revocación</h5>
                        <p className="text-xs text-gray-600">
                          Ante la misma autoridad que dictó la resolución. 
                          Plazo: 15 días hábiles.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800 text-sm">Juicio de Amparo</h5>
                        <p className="text-xs text-gray-600">
                          Ante el Poder Judicial Federal. 
                          Plazo: 15 días hábiles.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800 text-sm">Recurso de Revisión</h5>
                        <p className="text-xs text-gray-600">
                          Ante el Tribunal Federal de Justicia Fiscal y Administrativa. 
                          Plazo: 45 días hábiles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </motion.div>

        {/* Recursos adicionales */}
        <motion.section 
          className="mb-8 bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recursos y Enlaces Oficiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">📚 Documentos Oficiales</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Catálogo de NOM-STPS vigentes (PDF)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Ley Federal del Trabajo actualizada
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Reglamento Federal de Seguridad y Salud
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🌐 Sitios Web Oficiales</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.gob.mx/stps" className="text-blue-600 hover:underline text-sm">
                    🏛️ Secretaría del Trabajo y Previsión Social
                  </a>
                </li>
                <li>
                  <a href="https://www.gob.mx/imss" className="text-blue-600 hover:underline text-sm">
                    🏥 Instituto Mexicano del Seguro Social
                  </a>
                </li>
                <li>
                  <a href="https://www.dof.gob.mx/" className="text-blue-600 hover:underline text-sm">
                    📄 Diario Oficial de la Federación
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA final */}
        <motion.section 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">¿Necesitas Asesoría Especializada en NOM-STPS?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos certificados puede ayudarte a implementar un programa 
            de cumplimiento normativo efectivo y adaptado a tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Consulta Gratuita
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Ver Más Guías
            </button>
          </div>
        </motion.section>
      </article>
    </BlogLayout>
  );
}