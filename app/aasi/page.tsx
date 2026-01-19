'use client';

import HeroProductoGanador from '@/components/aasi/HeroProductoGanador';
import OfertaUrgencia2x1 from '@/components/aasi/OfertaUrgencia2x1';
import ProductosAlternativos from '@/components/aasi/ProductosAlternativos';
import WhyChooseSection from '@/components/aasi/WhyChooseSection';
import ProcesoInscripcion from '@/components/aasi/ProcesoInscripcion';
import TestimonialsSection from '@/components/aasi/TestimonialsSection';
import MegaCTA from '@/components/aasi/MegaCTA';
import FAQSection from '@/components/aasi/FAQSection';

export default function AASILanding() {
  return (
    <div className="bg-white">
      <HeroProductoGanador />
      <OfertaUrgencia2x1 />
      <ProductosAlternativos />
      <WhyChooseSection />
      <ProcesoInscripcion />
      <TestimonialsSection />
      <MegaCTA />
      <FAQSection />
    </div>
  );
}
