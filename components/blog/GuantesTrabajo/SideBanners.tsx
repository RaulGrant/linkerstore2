"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from 'lucide-react';

interface SideBannersProps {
  showBanners: boolean;
}

export default function SideBanners({ showBanners }: SideBannersProps) {
  const [leftBannerVisible, setLeftBannerVisible] = useState(true);
  const [rightBannerVisible, setRightBannerVisible] = useState(true);
  const [isLargeMonitor, setIsLargeMonitor] = useState(false);

  useEffect(() => {
    // Detectar monitores de 24+ pulgadas (aproximadamente 1920px+ en width)
    const checkScreenSize = () => {
      // Para monitores de 24", consideramos resoluciones de 1920px+ en ancho
      // y también verificamos la densidad de píxeles
      const width = window.screen.width;
      const height = window.screen.height;
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Calculamos el tamaño físico aproximado
      const physicalWidth = width / pixelRatio;
      const physicalHeight = height / pixelRatio;
      
      // Monitores de 24"+ generalmente tienen al menos 1920px de ancho
      // y una relación de aspecto común
      const isLarge = physicalWidth >= 1920 && physicalHeight >= 1080;
      setIsLargeMonitor(isLarge);
    };

    const handleResize = () => {
      checkScreenSize();
    };

    checkScreenSize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Solo mostrar banners si están habilitados y es un monitor grande
  if (!showBanners || !isLargeMonitor) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Left Side CTA - Catálogo */}
      <AnimatePresence>
        {leftBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-6 pointer-events-auto"
            style={{ top: 'calc(50% - 200px)', transform: 'translateY(-50%)' }}
          >
            <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl w-64 hover:scale-105 transition-transform duration-300">
              {/* Close Button */}
              <button
                onClick={() => setLeftBannerVisible(false)}
                className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Cerrar banner"
              >
                <X size={14} className="text-white group-hover:text-blue-100" />
              </button>
              
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🛒</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Explora Nuestro Catálogo</h4>
                <p className="text-xs text-blue-100 mb-4">Encuentra cascos certificados y equipos de protección profesional</p>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <span className="text-sm">🛡️</span>
                  <div>
                    <div className="text-xs font-medium">Cascos NOM</div>
                    <div className="text-xs text-blue-200 opacity-80">Certificados oficiales</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <span className="text-sm">⭐</span>
                  <div>
                    <div className="text-xs font-medium">Top Calidad</div>
                    <div className="text-xs text-blue-200 opacity-80">Productos premium</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <span className="text-sm">🚚</span>
                  <div>
                    <div className="text-xs font-medium">Envío Rápido</div>
                    <div className="text-xs text-blue-200 opacity-80">A todo México</div>
                  </div>
                </div>
              </div>
              
              <a 
                href="/tienda" 
                className="block w-full bg-white text-blue-600 px-3 py-2 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors text-center"
              >
                Ver Catálogo →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Side CTA - Más Guías */}
      <AnimatePresence>
        {rightBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute right-6 pointer-events-auto"
            style={{ top: 'calc(50% - 200px)', transform: 'translateY(-50%)' }}
          >
            <div className="relative bg-gradient-to-b from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl w-64 hover:scale-105 transition-transform duration-300">
              {/* Close Button */}
              <button
                onClick={() => setRightBannerVisible(false)}
                className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Cerrar banner"
              >
                <X size={14} className="text-white group-hover:text-orange-100" />
              </button>
              
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Más Guías Técnicas</h4>
                <p className="text-xs text-orange-100 mb-4">Descubre otros manuales de seguridad industrial</p>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <span className="text-sm">🧤</span>
                  <div>
                    <div className="text-xs font-medium">Guantes</div>
                    <div className="text-xs text-orange-200 opacity-80">Protección de manos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <span className="text-sm">👢</span>
                  <div>
                    <div className="text-xs font-medium">Calzado</div>
                    <div className="text-xs text-orange-200 opacity-80">Seguridad podal</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <span className="text-sm">🥽</span>
                  <div>
                    <div className="text-xs font-medium">Protección Visual</div>
                    <div className="text-xs text-orange-200 opacity-80">Lentes y caretas</div>
                  </div>
                </div>
              </div>
              
              <a 
                href="/blog" 
                className="block w-full bg-white text-orange-600 px-3 py-2 rounded-full text-xs font-bold hover:bg-orange-50 transition-colors text-center"
              >
                Ver Artículos →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}