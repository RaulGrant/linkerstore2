'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface TrustedBrand {
  id: string;
  name: string;
  logo: string;
  url: string;
  description: string;
}

const trustedBrands: TrustedBrand[] = [
  { id: 'cenacap', name: 'CENACAP', logo: '/images/brands/cenacap-logo.webp', url: '/cenacap', description: 'Centro Nacional de Capacitación Profesional' },
  { id: 'ajrh', name: 'AJRH Industrial', logo: '/images/brands/ajrh.jpg', url: '/ajrh-industrial', description: 'Servicios Industriales Especializados' },
  { id: 'grevel', name: 'Interiores Grevel', logo: '/images/brands/grevel.jpg', url: '/interiores-grevel', description: 'Remodelación y Construcción' },
  { id: 'aasi', name: 'AASI', logo: '/images/brands/asi.png', url: '/aasi', description: 'Capacitación en Seguridad Industrial' },
];

export default function TrustedBrandsBanner() {
  const openBrand = (brand: TrustedBrand) => {
    window.location.href = brand.url;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-10 text-center sm:mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Badge className="mb-5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 px-5 py-2 text-sm font-bold text-white shadow-xl">✨ Nuestras Marcas Asociadas ✨</Badge>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">Explora Nuestros Servicios</h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">Conoce nuestras marcas asociadas y descubre sus servicios especializados.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {trustedBrands.map((brand, index) => (
            <motion.div key={brand.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
              <Card className="group h-full cursor-pointer border-2 border-orange-300/70 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-orange-500/25" onClick={() => openBrand(brand)} role="link" tabIndex={0} aria-label={`Visitar ${brand.name}`} onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openBrand(brand);
                }
              }}>
                <CardContent className="flex h-full flex-col items-center p-6 text-center sm:p-8">
                  <div className="relative mb-5 h-36 w-full overflow-hidden rounded-xl bg-slate-50 sm:h-40">
                    <Image src={brand.logo} alt={`Logo de ${brand.name}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 sm:text-2xl">{brand.name}</h3>
                  <p className="mt-2 min-h-12 text-sm text-slate-600 sm:text-base">{brand.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-bold text-white transition-transform group-hover:scale-105">Ver servicios <ArrowUpRight className="h-4 w-4" /></span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-5 text-base text-blue-100">¿Quieres ser parte de nuestra red de marcas asociadas?</p>
          <a href="/contacto" className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}
