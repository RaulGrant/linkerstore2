'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Cookie, Settings, X, Check, Shield, BarChart3, Target } from 'lucide-react';
import Link from 'next/link';
import { CookiesManager, type CookieConsent } from '@/lib/cookies-manager';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Siempre requeridas
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    setMounted(true);
    
    // Verificar si ya existe consentimiento
    const hasConsent = CookiesManager.hasConsent();
    if (!hasConsent) {
      // Mostrar banner después de un pequeño delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    CookiesManager.setConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    CookiesManager.setConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true, // Las necesarias no se pueden rechazar
      analytics: false,
      marketing: false
    };
    
    CookiesManager.setConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!mounted || !showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <Card className="mx-auto max-w-4xl bg-white/95 backdrop-blur-sm border shadow-2xl">
          {!showSettings ? (
            // Banner principal
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Cookie className="h-8 w-8 text-blue-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        🍪 Usamos cookies para mejorar tu experiencia
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para 
                        análisis y marketing. Puedes personalizar tus preferencias o aceptar todas para una mejor experiencia.
                      </p>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBanner(false)}
                      className="ml-4 flex-shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        onClick={handleAcceptAll}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Aceptar todas
                      </Button>
                      
                      <Button 
                        onClick={() => setShowSettings(true)}
                        variant="outline"
                        size="sm"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Personalizar
                      </Button>
                      
                      <Button 
                        onClick={handleRejectAll}
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Solo necesarias
                      </Button>
                    </div>

                    <Link 
                      href="/legal/cookies" 
                      className="text-xs text-blue-600 hover:text-blue-800 underline whitespace-nowrap"
                    >
                      Política de Cookies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Panel de configuración detallada
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Configuración de Cookies
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Cookies necesarias */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 flex-1">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Cookies Necesarias</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.
                      </p>
                    </div>
                  </div>
                  <Switch checked={true} disabled className="ml-4" />
                </div>

                {/* Cookies de análisis */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 flex-1">
                    <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Cookies de Análisis</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Google Analytics nos ayuda a entender cómo los usuarios interactúan con nuestro sitio 
                        para mejorar la experiencia.
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={preferences.analytics} 
                    onCheckedChange={() => togglePreference('analytics')}
                    className="ml-4"
                  />
                </div>

                {/* Cookies de marketing */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 flex-1">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Cookies de Marketing</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Meta Pixel nos permite medir la efectividad de nuestros anuncios y 
                        mejorar nuestras campañas publicitarias.
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={preferences.marketing} 
                    onCheckedChange={() => togglePreference('marketing')}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAcceptSelected}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Guardar Preferencias
                </Button>
                
                <Button 
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="flex-1"
                >
                  Aceptar Todas
                </Button>
                
                <Link 
                  href="/legal/cookies"
                  className="text-sm text-blue-600 hover:text-blue-800 underline self-center"
                >
                  Más información
                </Link>
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}