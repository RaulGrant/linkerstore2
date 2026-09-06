'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function OfferBanner() {
  const openWhatsApp = () => window.open('https://wa.me/522461341074?text=Hola,%20quiero%20aprovechar%20la%20oferta%20especial%202x1%20en%20la%20Formaci%C3%B3n%20de%20supervisor%20de%20seguridad.', '_blank');

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 px-4 py-10 sm:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,220,80,0.24),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl rounded-2xl border-2 border-yellow-200/80 bg-black/20 p-5 text-center shadow-[0_0_55px_rgba(255,190,30,0.55)] backdrop-blur-sm sm:rounded-3xl sm:p-10">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-yellow-200 sm:text-sm sm:tracking-[0.25em]">✦ Oferta especial ✦</div>
        <h2 className="text-4xl font-black uppercase leading-tight text-white drop-shadow-lg sm:text-6xl">2X1</h2>
        <h3 className="mt-1 text-xl font-black leading-tight text-yellow-100 sm:text-4xl">Formación de supervisor de seguridad</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-white/90 sm:text-lg">Elige crecer en seguridad industrial. Pregunta hoy por la disponibilidad de esta promoción exclusiva.</p>
        <Button type="button" onClick={openWhatsApp} size="lg" className="mt-6 w-full rounded-xl border-2 border-yellow-200 bg-white px-4 text-sm font-black text-red-700 shadow-xl transition-all hover:-translate-y-1 hover:bg-yellow-100 hover:shadow-2xl sm:w-auto sm:px-8 sm:text-lg">Quiero aprovechar la promoción <ArrowRight className="ml-2 shrink-0" /></Button>
      </div>
    </section>
  );
}
