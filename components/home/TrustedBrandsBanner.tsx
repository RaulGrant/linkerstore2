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
      window.open(brand.url, '_blank');
    }
  };

  return (
    <motion.section
      className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con animación mejorada */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <Badge className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white px-6 py-3 text-base md:text-lg font-bold shadow-2xl animate-pulse">
              ✨ Nuestras Marcas Asociadas ✨
            </Badge>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explora Nuestros Servicios
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Haz clic en cualquier logo para descubrir más sobre nuestros servicios especializados
          </motion.p>
        </motion.div>

        {/* Carrusel Infinito de Marcas - MEJORADO */}
        <div className="relative overflow-hidden py-8">
          {/* Gradientes de fade más pronunciados */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Desktop - Carrusel horizontal más grande */}
          <div className="hidden md:block">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * trustedBrands.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 w-80"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`group relative bg-white/98 hover:bg-white backdrop-blur-sm border-4 transition-all duration-500 cursor-pointer h-full shadow-2xl hover:shadow-[0_20px_60px_rgba(255,165,0,0.5)] ${
                      brand.isInternal 
                        ? 'border-orange-400 hover:border-orange-600 hover:shadow-orange-500/50' 
                        : 'border-blue-400 hover:border-blue-600 hover:shadow-blue-500/50'
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
                    <CardContent className="p-8 flex flex-col items-center justify-center h-full min-h-[260px]">
                      {/* Pulse effect en el borde */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(255, 165, 0, 0)',
                            '0 0 30px rgba(255, 165, 0, 0.5)',
                            '0 0 0px rgba(255, 165, 0, 0)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      
                      {/* Logo Container - MÁS GRANDE */}
                      <div className="relative w-full h-32 mb-6 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Placeholder/Fallback animado */}
                          <motion.div 
                            className={`absolute inset-0 flex items-center justify-center rounded-lg ${
                              brand.isInternal 
                                ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                                : 'bg-gradient-to-br from-blue-500 to-blue-600'
                            }`}
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            <span className={`text-5xl font-black text-white drop-shadow-lg`}>
                              {brand.name.charAt(0)}
                            </span>
                          </motion.div>
                          
                          {/* Actual Image */}
                          <Image
                            src={brand.logo}
                            alt={`Logo de ${brand.name}`}
                            fill
                            className="object-contain p-3 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-2xl"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Brand Name - MÁS GRANDE */}
                      <h3 className={`text-xl md:text-2xl font-black text-center mb-3 transition-colors ${
                        brand.isInternal 
                          ? 'text-gray-800 group-hover:text-orange-600' 
                          : 'text-gray-800 group-hover:text-blue-600'
                      }`}>
                        {brand.name}
                      </h3>

                      {/* Description - SIEMPRE VISIBLE */}
                      {brand.description && (
                        <p className="text-sm md:text-base text-gray-600 text-center font-medium line-clamp-2 mb-4">
                          {brand.description}
                        </p>
                      )}

                      {/* CTA Button */}
                      <motion.div
                        className={`w-full text-center py-3 px-4 rounded-lg font-bold text-base ${
                          brand.isInternal
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {brand.isInternal ? '👉 Ver Servicios' : '🔗 Visitar Sitio'}
                      </motion.div>

                      {/* Hover Glow Effect MEJORADO */}
                      <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                        brand.isInternal
                          ? 'bg-gradient-to-r from-orange-400/0 via-orange-400/0 to-orange-400/0 group-hover:from-orange-400/30 group-hover:via-orange-400/20 group-hover:to-orange-400/30'
                          : 'bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/30 group-hover:via-blue-400/20 group-hover:to-blue-400/30'
                      }`}></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile - Carousel con drag habilitado */}
          <div className="md:hidden relative overflow-hidden">
            <motion.div
              className="flex gap-6 px-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -340 * (trustedBrands.length - 1), right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
              animate={{
                x: [0, -340 * trustedBrands.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.id}-mobile-${index}`}
                  className="min-w-[320px] flex-shrink-0"
                  whileTap={{ scale: 0.95 }}
                >
                <Card
                  className={`group relative bg-white/98 backdrop-blur-sm border-4 transition-all duration-500 cursor-pointer shadow-2xl active:shadow-[0_10px_40px_rgba(255,165,0,0.6)] ${
                    brand.isInternal 
                      ? 'border-orange-400 active:border-orange-600' 
                      : 'border-blue-400 active:border-blue-600'
                  }`}
                  onClick={() => handleBrandClick(brand)}
                  role="button"
                  aria-label={`Visitar ${brand.isInternal ? 'página' : 'sitio web'} de ${brand.name}`}
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    {/* Animated border pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(255, 165, 0, 0)',
                          '0 0 20px rgba(255, 165, 0, 0.6)',
                          '0 0 0px rgba(255, 165, 0, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    
                    {/* Logo Container - GRANDE en mobile */}
                    <div className="relative w-full h-32 mb-5 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Placeholder/Fallback */}
                        <motion.div 
                          className={`absolute inset-0 flex items-center justify-center rounded-lg ${
                            brand.isInternal 
                              ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                              : 'bg-gradient-to-br from-blue-500 to-blue-600'
                          }`}
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <span className="text-5xl font-black text-white drop-shadow-lg">
                            {brand.name.charAt(0)}
                          </span>
                        </motion.div>
                        
                        {/* Actual Image */}
                        <Image
                          src={brand.logo}
                          alt={`Logo de ${brand.name}`}
                          fill
                          className="object-contain p-3 transition-all duration-500 drop-shadow-2xl"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Brand Name - GRANDE */}
                    <h3 className={`text-2xl font-black text-center mb-3 ${
                      brand.isInternal 
                        ? 'text-gray-800' 
                        : 'text-gray-800'
                    }`}>
                      {brand.name}
                    </h3>

                    {/* Description - VISIBLE */}
                    {brand.description && (
                      <p className="text-base text-gray-600 text-center font-medium mb-5">
                        {brand.description}
                      </p>
                    )}

                    {/* CTA Button - MÁS GRANDE */}
                    <motion.div
                      className={`w-full text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg ${
                        brand.isInternal
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          '0 4px 20px rgba(255, 165, 0, 0.3)',
                          '0 8px 30px rgba(255, 165, 0, 0.5)',
                          '0 4px 20px rgba(255, 165, 0, 0.3)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {brand.isInternal ? '👉 Ver Servicios' : '🔗 Visitar Sitio'}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </motion.div>
          </div>
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
