'use client';

import dynamic from 'next/dynamic';
import WhyChooseUsSection from '@/components/cenacap/WhyChooseUsSection';
import TestimonialsSection from '@/components/cenacap/TestimonialsSection';

// Estas secciones usan interacción y animación en el navegador. Evitamos que
// Next las evalúe durante la exportación estática de Vercel.
const OfferBanner = dynamic(() => import('@/components/cenacap/OfferBanner'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/cenacap/HeroSection'), { ssr: false });
const CoursesSection = dynamic(() => import('@/components/cenacap/CoursesSection'), { ssr: false });
const CTASection = dynamic(() => import('@/components/cenacap/CTASection'), { ssr: false });
const Footer = dynamic(() => import('@/components/cenacap/Footer'), { ssr: false });

export default function CenacapLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <HeroSection />
      <OfferBanner />
      <CoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
