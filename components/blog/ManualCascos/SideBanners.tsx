"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SideBannersProps {
  showBanners: boolean;
}

export default function SideBanners({ showBanners }: SideBannersProps) {
  return (
    <>
      {showBanners && (
        <>
          {/* Left Side CTA */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden xl:block fixed left-6 z-20"
            style={{ top: 'calc(50% - 200px)', transform: 'translateY(-50%)' }}
          >
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl w-64 hover:scale-105 transition-transform duration-300">
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

          {/* Right Side CTA */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden xl:block fixed right-6 z-20"
            style={{ top: 'calc(50% - 200px)', transform: 'translateY(-50%)' }}
          >
            <div className="bg-gradient-to-b from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl w-64 hover:scale-105 transition-transform duration-300">
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
        </>
      )}
    </>
  );
}