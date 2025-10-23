'use client';

import { motion } from 'framer-motion';
import BlogLayout from '@/components/blog/BlogLayout';
import { Cookie, Settings, Shield, Info, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CookiesManager, type CookieConsent } from '@/lib/cookies-manager';
import { initializeGA } from '@/lib/google-analytics';

export default function PoliticaCookies() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentConsent = CookiesManager.getConsent();
    setConsent(currentConsent);
  }, []);

  const handleSavePreferences = () => {
    if (consent) {
      CookiesManager.setConsent({
        necessary: true,
        analytics: consent.analytics,
        marketing: consent.marketing
      });

      // Inicializar Google Analytics si se acepta
      if (consent.analytics) {
        initializeGA();
      }

      alert('Preferencias guardadas correctamente');
    }
  };

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    CookiesManager.setConsent(newConsent);
    setConsent({ ...newConsent, timestamp: Date.now() });
    initializeGA();
    alert('Todas las cookies han sido aceptadas');
  };

  const toggleAnalytics = () => {
    if (consent) {
      setConsent({
        ...consent,
        analytics: !consent.analytics
      });
    }
  };

  const toggleMarketing = () => {
    if (consent) {
      setConsent({
        ...consent,
        marketing: !consent.marketing
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <BlogLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 rounded-full px-4 py-2 text-orange-100 text-sm font-medium mb-6">
                <Cookie className="h-4 w-4" />
                Gestión de Cookies
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de Cookies
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Información sobre el uso de cookies y tecnologías similares en LinkerStore
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* ¿Qué son las cookies? */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  ¿Qué son las cookies?
                </h2>
                <p className="text-blue-800">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Nos ayudan a mejorar su experiencia de navegación, recordar sus preferencias y proporcionar contenido personalizado.
                </p>
              </div>

              {/* Configuración de Cookies */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Settings className="h-6 w-6" />
                  Configuración de Cookies
                </h2>
                
                <div className="space-y-6">
                  {/* Cookies Técnicas */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies Técnicas</h3>
                      <p className="text-sm text-gray-600 mt-1">Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.</p>
                    </div>
                    <div className="ml-4">
                      <ToggleRight className="h-6 w-6 text-green-600" />
                      <span className="sr-only">Activado</span>
                    </div>
                  </div>

                  {/* Cookies Analíticas */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies Analíticas</h3>
                      <p className="text-sm text-gray-600 mt-1">Nos ayudan a entender cómo los visitantes interactúan con el sitio web.</p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={toggleAnalytics}
                        className="focus:outline-none"
                      >
                        {consent?.analytics ? (
                          <ToggleRight className="h-6 w-6 text-green-600" />
                        ) : (
                          <ToggleLeft className="h-6 w-6 text-gray-400" />
                        )}
                        <span className="sr-only">
                          {consent?.analytics ? 'Activado' : 'Desactivado'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Cookies de Marketing */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies de Marketing</h3>
                      <p className="text-sm text-gray-600 mt-1">Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas.</p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={toggleMarketing}
                        className="focus:outline-none"
                      >
                        {consent?.marketing ? (
                          <ToggleRight className="h-6 w-6 text-green-600" />
                        ) : (
                          <ToggleLeft className="h-6 w-6 text-gray-400" />
                        )}
                        <span className="sr-only">
                          {consent?.marketing ? 'Activado' : 'Desactivado'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button onClick={handleSavePreferences} className="bg-blue-600 hover:bg-blue-700">
                    Guardar Preferencias
                  </Button>
                  <Button onClick={handleAcceptAll} variant="outline">
                    Aceptar Todas
                  </Button>
                </div>
              </div>

              {/* Tipos de Cookies Detallados */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Cookies Técnicas (Obligatorias)</h3>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-green-800 mb-2"><strong>Finalidad:</strong> Funcionamiento básico del sitio web</p>
                  <p className="text-green-800 mb-2"><strong>Duración:</strong> Sesión / 1 año</p>
                  <p className="text-green-800"><strong>Información almacenada:</strong> Preferencias de idioma, estado de sesión, configuraciones básicas</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Cookies Analíticas (Google Analytics)</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 mb-2"><strong>Proveedor:</strong> Google Analytics (G-405TQL3C9G)</p>
                  <p className="text-blue-800 mb-2"><strong>Finalidad:</strong> Análisis de tráfico, comportamiento de usuarios y mejora de la experiencia</p>
                  <p className="text-blue-800 mb-2"><strong>Duración:</strong> 2 años</p>
                  <p className="text-blue-800"><strong>Datos recopilados:</strong> Páginas visitadas, tiempo de permanencia, dispositivo utilizado, ubicación aproximada, fuente de tráfico</p>
                  <p className="text-blue-800"><strong>Base legal:</strong> Consentimiento del usuario</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Cookies de Afiliación</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-orange-800 mb-2"><strong>Proveedor:</strong> Amazon Associates, Mercado Libre Afiliados</p>
                  <p className="text-orange-800 mb-2"><strong>Finalidad:</strong> Rastreo de conversiones y comisiones de afiliación</p>
                  <p className="text-orange-800 mb-2"><strong>Duración:</strong> 24 horas (Amazon) - 30 días (Mercado Libre)</p>
                  <p className="text-orange-800"><strong>Información:</strong> Productos visitados, clics en enlaces de afiliación, referencias de ventas</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Cookies de Marketing (Meta Pixel)</h3>
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <p className="text-purple-800 mb-2"><strong>Proveedor:</strong> Meta (Facebook) - Pixel ID: 2002160850545438</p>
                  <p className="text-purple-800 mb-2"><strong>Finalidad:</strong> Medición de conversiones, optimización de anuncios y remarketing</p>
                  <p className="text-purple-800 mb-2"><strong>Duración:</strong> 90 días</p>
                  <p className="text-purple-800 mb-2"><strong>Datos recopilados:</strong> Eventos de navegación, interacciones con productos, conversiones</p>
                  <p className="text-purple-800"><strong>Base legal:</strong> Consentimiento del usuario</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Cookies</h2>
                <p className="mb-4">Puede gestionar las cookies de las siguientes maneras:</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">En su Navegador:</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong>Chrome:</strong> Configuración {'>'}  Privacidad y seguridad {'>'} Cookies</li>
                  <li><strong>Firefox:</strong> Opciones {'>'} Privacidad y seguridad {'>'} Cookies</li>
                  <li><strong>Safari:</strong> Preferencias {'>'} Privacidad {'>'} Cookies</li>
                  <li><strong>Edge:</strong> Configuración {'>'} Cookies y permisos del sitio</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Herramientas de Terceros:</h3>
                <ul className="list-disc list-inside mb-6 space-y-1">
                  <li><strong>Google Analytics Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Desactivar Google Analytics</a></li>
                  <li><strong>Your Online Choices:</strong> <a href="http://www.youronlinechoices.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Gestión de cookies publicitarias</a></li>
                  <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Opt-out de publicidad</a></li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de Terceros</h2>
                <p className="mb-4">Algunos de nuestros socios pueden colocar cookies en su dispositivo:</p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finalidad</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Política</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Google Analytics</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Google</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Análisis web</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver política</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Meta Pixel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Meta (Facebook)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Marketing y conversiones</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                          <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver política</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amazon Associates</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Amazon</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Afiliación</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                          <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver política</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mercado Libre Afiliados</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mercado Libre</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Afiliación</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                          <a href="https://www.mercadolibre.com.mx/privacidad" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver política</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Actualizaciones de esta Política</h2>
                <p className="mb-6">
                  Esta Política de Cookies puede actualizarse periódicamente para reflejar cambios en nuestras prácticas o en la legislación aplicable. La fecha de la última actualización se indica al inicio de esta página.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <p className="mb-3">Para preguntas sobre nuestra Política de Cookies:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> linkerpro.notifications@gmail.com</p>
                    <p><strong>Asunto:</strong> "Consulta sobre Cookies"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}
