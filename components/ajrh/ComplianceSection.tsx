'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield } from 'lucide-react';

const normativas = [
  { code: 'NOM-001-STPS', description: 'Edificios, locales e instalaciones' },
  { code: 'NOM-002-STPS', description: 'Prevención de incendios' },
  { code: 'NOM-019-STPS', description: 'Comisiones de seguridad' },
  { code: 'NOM-029-STPS', description: 'Mantenimiento de instalaciones eléctricas' },
  { code: 'NOM-031-STPS', description: 'Trabajos en altura' },
];

export default function ComplianceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="border-4 border-green-600 rounded-2xl p-8 md:p-12 bg-white shadow-2xl shadow-green-100">
            {/* Icon and Title */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  📢 ¡Cumple con las normas y evita riesgos en tu empresa!
                </h2>
                <p className="text-lg text-gray-600">
                  Nuestros servicios garantizan el cumplimiento de todas las normativas aplicables
                </p>
              </div>
            </div>

            {/* Normativas Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Normativas que garantizamos:
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {normativas.map((norm, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300"
                  >
                    <Badge className="bg-green-600 hover:bg-green-700 text-white flex-shrink-0">
                      {norm.code}
                    </Badge>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {norm.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-green-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-300"
                onClick={() => {
                  const ctaSection = document.getElementById('contacto');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Solicita Auditoría Gratuita
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
