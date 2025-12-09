"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface SideBannersProps {
  showBanners: boolean;
}

export default function SideBanners({ showBanners }: SideBannersProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [leftBannerVisible, setLeftBannerVisible] = useState(true);
  const [rightBannerVisible, setRightBannerVisible] = useState(true);
  const [isLargeMonitor, setIsLargeMonitor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxHeight, 1);
      setScrollProgress(progress);
    };

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
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Solo mostrar banners si están habilitados y es un monitor grande
  if (!showBanners || !isLargeMonitor) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Left Side Banner - Guías Técnicas */}
      <AnimatePresence>
        {leftBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="absolute left-4 pointer-events-auto"
            style={{ top: 'calc(50% - 100px)', transform: 'translateY(-50%)' }}
          >
            <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl w-80 hover:scale-105 transition-transform duration-300">
              {/* Close Button */}
              <button
                onClick={() => setLeftBannerVisible(false)}
                className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Cerrar banner"
              >
                <X size={14} className="text-white group-hover:text-blue-100" />
              </button>
              
              <div className="text-center mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Guías Técnicas</h4>
                <p className="text-sm text-blue-100 mb-4">Accede a todas nuestras guías especializadas de seguridad</p>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">⛑️</span>
                  <div>
                    <div className="text-sm font-medium">Cascos de Seguridad</div>
                    <div className="text-xs text-blue-200 opacity-80">Guía completa de protección</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">🥽</span>
                  <div>
                    <div className="text-sm font-medium">Protección Visual</div>
                    <div className="text-xs text-blue-200 opacity-80">Lentes y equipos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-lg">🦺</span>
                  <div>
                    <div className="text-sm font-medium">EPP Completo</div>
                    <div className="text-xs text-blue-200 opacity-80">Todas las categorías</div>
                  </div>
                </div>
              </div>
              
              <motion.a
                href="/guias"
                className="w-full bg-white text-blue-700 py-3 px-4 rounded-xl font-bold text-center block hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Todas las Guías
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Side Banner - Productos Top */}
      <AnimatePresence>
        {rightBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="absolute right-4 pointer-events-auto"
            style={{ top: 'calc(50% - 50px)', transform: 'translateY(-50%)' }}
          >
            <div className="relative bg-gradient-to-b from-green-600 to-green-800 text-white p-6 rounded-2xl shadow-2xl w-72 hover:scale-105 transition-transform duration-300">
              {/* Close Button */}
              <button
                onClick={() => setRightBannerVisible(false)}
                className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Cerrar banner"
              >
                <X size={14} className="text-white group-hover:text-green-100" />
              </button>
              
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⭐</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Visita nuestra tienda</h4>
                <p className="text-xs text-green-100 mb-4">Los productos más recomendados por expertos</p>
              </div>
              
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex items-center gap-2 text-green-100">
                  <span>✓</span> Certificados NOM
                </div>
                <div className="flex items-center gap-2 text-green-100">
                  <span>✓</span> Marcas reconocidas
                </div>
                <div className="flex items-center gap-2 text-green-100">
                  <span>✓</span> Mejores precios
                </div>
                <div className="flex items-center gap-2 text-green-100">
                  <span>✓</span> Envío rápido
                </div>
              </div>
              
              <motion.a
                href="/catalogo"
                className="w-full bg-white text-green-700 py-2.5 px-4 rounded-xl font-bold text-sm text-center block hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Tienda
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar - Bottom Right */}
      {(leftBannerVisible || rightBannerVisible) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="absolute bottom-8 right-4 pointer-events-auto"
        >
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>Progreso</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  style={{ width: `${scrollProgress * 100}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="text-xs font-medium">{Math.round(scrollProgress * 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}