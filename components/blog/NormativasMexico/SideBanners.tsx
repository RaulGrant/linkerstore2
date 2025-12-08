"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface SideBannersProps {
  showBanners: boolean;
}

export default function SideBanners({ showBanners }: SideBannersProps) {
  const [leftBannerVisible, setLeftBannerVisible] = useState(true);
  const [rightBannerVisible, setRightBannerVisible] = useState(true);
  const [isWideMonitor, setIsWideMonitor] = useState(false);

  useEffect(() => {
    const evaluateScreen = () => {
      const width = window.screen.width / (window.devicePixelRatio || 1);
      const height = window.screen.height / (window.devicePixelRatio || 1);
      setIsWideMonitor(width >= 1920 && height >= 1080);
    };

    evaluateScreen();
    window.addEventListener("resize", evaluateScreen);
    return () => window.removeEventListener("resize", evaluateScreen);
  }, []);

  if (!showBanners || !isWideMonitor) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <AnimatePresence>
        {leftBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-auto absolute left-6"
            style={{ top: "35%", transform: "translateY(-50%)" }}
          >
            <div className="relative w-64 rounded-3xl bg-gradient-to-b from-blue-600 to-indigo-700 p-6 text-white shadow-2xl">
              <button
                type="button"
                aria-label="Cerrar banner"
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                onClick={() => setLeftBannerVisible(false)}
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="text-xl">🛒</span>
                </div>
                <h4 className="text-lg font-semibold">Visita nuestra tienda con productos seleccionados para tí</h4>
                <p className="mt-2 text-xs text-blue-100">
                  Encuentra equipos de herramientas y EPP para cumplir con la NOM
                </p>
              </div>
              <ul className="space-y-3 text-xs text-blue-100">
                <li className="flex items-center gap-2">
                  <span>✔</span>
                  Certificados NOM
                </li>
                <li className="flex items-center gap-2">
                  <span>✔</span>
                  Confiables
                </li>
                <li className="flex items-center gap-2">
                  <span>✔</span>
                  El mejor precio
                </li>
              </ul>
              <a
                href="/catalogo"
                className="mt-5 block rounded-full bg-white py-2 text-center text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                aria-label="Ir a la tienda de productos certificados"
              >
                Ir a la Tienda →
              </a>
              <p className="mt-3 text-center text-[10px] text-blue-200/70">
                Precios y disponibilidad sujetos a cambios por el vendedor
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {rightBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-auto absolute right-6"
            style={{ top: "35%", transform: "translateY(-50%)" }}
          >
            <div className="relative w-64 rounded-3xl bg-gradient-to-b from-orange-500 to-red-600 p-6 text-white shadow-2xl">
              <button
                type="button"
                aria-label="Cerrar banner"
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                onClick={() => setRightBannerVisible(false)}
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="text-xl">📚</span>
                </div>
                <h4 className="text-lg font-semibold">Explora Nuestras Guías Técnicas</h4>
                <p className="mt-2 text-xs text-orange-100">
                  Guías prácticas y normativas para mantener a tu equipo seguro y en cumplimiento.
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <a
                  href="/blog/proteccion-respiratoria-mascaras-respiradores"
                  className="block rounded-lg bg-white/10 px-3 py-2 text-xs text-orange-50 transition-colors hover:bg-white/20"
                >
                  🔗 Protección Respiratoria
                </a>
                <a
                  href="/blog/guantes-trabajo-seleccion-riesgo-aplicacion"
                  className="block rounded-lg bg-white/10 px-3 py-2 text-xs text-orange-50 transition-colors hover:bg-white/20"
                >
                  🔗 Guantes de Trabajo
                </a>
              </div>
              <a
                href="/guias"
                className="mt-3 block rounded-full bg-white py-2 text-center text-xs font-semibold text-orange-700 transition-colors hover:bg-orange-50"
                aria-label="Ver todas las guías técnicas"
              >
                Ver Guías →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
