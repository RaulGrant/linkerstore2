'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface TrustedBrand {
  id: string;
  name: string;
  logo: string;
  url: string;
  description?: string;
  isInternal?: boolean;
}

const trustedBrands: TrustedBrand[] = [
  {
    id: '1',
    name: 'CENACAP',
    logo: '/images/brands/cenacap-logo.svg',
    url: '/cenacap',
    description: 'Centro de Capacitación Industrial',
    isInternal: true
  },
  {
    id: '2',
    name: 'AJRH Industrial',
    logo: '/images/brands/ajrh.jpg',
    url: '/ajrh-industrial',
    description: 'Servicios Industriales Especializados',
    isInternal: true
  },
  {
    id: '3',
    name: 'Interiores Grevel',
    logo: '/images/brands/grevel.jpg',
    url: '/interiores-grevel',
    description: 'Remodelación y Construcción',
    isInternal: true
  },
  {
    id: '4',
    name: 'AASI',
    logo: '/images/brands/asi.png',
    url: '/aasi',
    description: 'Capacitación en Seguridad Industrial',
    isInternal: true
  }
];

interface TrustedBrandsBannerProps {
  variant?: 'grid' | 'carousel';
}

export default function TrustedBrandsBanner({ variant = 'carousel' }: TrustedBrandsBannerProps) {
  // Duplicar las marcas para crear un efecto de loop infinito
  const duplicatedBrands = [...trustedBrands, ...trustedBrands, ...trustedBrands];

  const handleBrandClick = (brand: TrustedBrand) => {
    if (brand.isInternal) {
      window.location.href = brand.url;
    } else {
      window.open(brand.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          >
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 text-sm font-semibold">
              Marcas de Confianza
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marcas que Confían en Nosotros
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Trabajamos con las marcas líderes en seguridad industrial y herramientas profesionales
          </p>
        </motion.div>

        {/* Carrusel Infinito de Marcas */}
        <div className="relative overflow-hidden">
          {/* Gradientes de fade en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * trustedBrands.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-64"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`group relative bg-white/95 hover:bg-white backdrop-blur-sm border-2 transition-all duration-300 cursor-pointer h-full shadow-lg hover:shadow-2xl ${
                    brand.isInternal 
                      ? 'border-orange-300 hover:border-orange-500' 
                      : 'border-transparent hover:border-blue-400'
                  }`}
                  onClick={() => handleBrandClick(brand)}
                  role="button"
                  aria-label={`Visitar ${brand.isInternal ? 'página' : 'sitio web'} de ${brand.name}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleBrandClick(brand);
                    }
                  }}
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[180px]">
                    {/* Logo Container */}
                    <div className="relative w-full h-24 mb-4 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Placeholder/Fallback */}
                        <div className={`absolute inset-0 flex items-center justify-center rounded-lg ${
                          brand.isInternal 
                            ? 'bg-gradient-to-br from-blue-900 to-orange-500' 
                            : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}>
                          <span className={`text-3xl font-bold ${
                            brand.isInternal ? 'text-white' : 'text-gray-400'
                          }`}>
                            {brand.name.charAt(0)}
                          </span>
                        </div>
                        
                        {/* Actual Image */}
                        <Image
                          src={brand.logo}
                          alt={`Logo de ${brand.name}`}
                          fill
                          className="object-contain p-2 transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Brand Name */}
                    <h3 className={`text-base font-semibold text-center mb-2 transition-colors ${
                      brand.isInternal 
                        ? 'text-gray-800 group-hover:text-orange-600' 
                        : 'text-gray-800 group-hover:text-blue-600'
                    }`}>
                      {brand.name}
                    </h3>

                    {/* Description */}
                    {brand.description && (
                      <p className="text-xs text-gray-500 text-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {brand.description}
                      </p>
                    )}

                    {/* Link Icon */}
                    <motion.div
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {brand.isInternal ? (
                        <span className="text-orange-500 text-xs font-bold">Ver más</span>
                      ) : (
                        <ExternalLink className="w-4 h-4 text-blue-500" />
                      )}
                    </motion.div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      brand.isInternal
                        ? 'bg-gradient-to-r from-orange-400/0 via-orange-400/0 to-orange-400/0 group-hover:from-orange-400/10 group-hover:via-orange-400/5 group-hover:to-orange-400/10'
                        : 'bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/10 group-hover:via-blue-400/5 group-hover:to-blue-400/10'
                    }`}></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-blue-200 text-lg mb-6">
            ¿Quieres ser parte de nuestra red de marcas asociadas?
          </p>
          <motion.a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </motion.section>
  );
}
