"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ExternalLink, Star, Zap } from "lucide-react";

interface SideBannersProps {
  showBanners: boolean;
}

export default function SideBanners({ showBanners }: SideBannersProps) {
  return (
    <AnimatePresence>
      {showBanners && (
        <>
          {/* Left Banner - Catálogo Premium */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
            style={{ width: '280px' }}
          >
            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-white">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <Badge className="bg-white/20 text-white border-0 mb-2">
                    Catálogo Premium
                  </Badge>
                  <h3 className="font-bold text-lg mb-2">Protección Respiratoria</h3>
                  <p className="text-sm text-green-100 opacity-90">
                    Equipos certificados NOM-116 para máxima seguridad
                  </p>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 p-2 bg-white/10 rounded-lg">
                    <span className="text-sm">😷</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium">120+ Respiradores</div>
                      <div className="text-xs text-green-200 opacity-80">N95, P100, Media Cara</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/10 rounded-lg">
                    <span className="text-sm">⭐</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Marcas Líderes</div>
                      <div className="text-xs text-green-200 opacity-80">3M, MSA, Honeywell</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/10 rounded-lg">
                    <span className="text-sm">🚚</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Envío Rápido</div>
                      <div className="text-xs text-green-200 opacity-80">Entrega en 24-48hrs</div>
                    </div>
                  </div>
                </div>

                <Button 
                  asChild 
                  className="w-full bg-white text-green-700 hover:bg-green-50 font-bold"
                >
                  <a href="/catalogo">
                    Ver Catálogo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Banner - Guías Técnicas */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
            style={{ width: '260px' }}
          >
            <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
              <CardContent className="p-5 text-white">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <Badge className="bg-white/20 text-white border-0 mb-2 text-xs">
                    Guías Técnicas
                  </Badge>
                  <h3 className="font-bold text-base mb-2">Normativas y Uso</h3>
                  <p className="text-xs text-emerald-100 opacity-90">
                    Aprende sobre selección y mantenimiento correctos
                  </p>
                </div>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <span className="text-xs">✓</span> Factores de protección
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <span className="text-xs">✓</span> Pruebas de ajuste
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <span className="text-xs">✓</span> Mantenimiento preventivo
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <span className="text-xs">✓</span> Normativas mexicanas
                  </div>
                </div>

                <Button 
                  asChild 
                  size="sm"
                  className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-xs"
                >
                  <a href="/guias">
                    Ver Guías
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}