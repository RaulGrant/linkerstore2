'use client';

import HeroSection from '@/components/ajrh/HeroSection';
import SupervisionSection from '@/components/ajrh/SupervisionSection';
import ServicesSection from '@/components/ajrh/ServicesSection';
import WhyChooseUsSection from '@/components/ajrh/WhyChooseUsSection';
import ComplianceSection from '@/components/ajrh/ComplianceSection';
import ProcessSection from '@/components/ajrh/ProcessSection';
import CTASection from '@/components/ajrh/CTASection';
import Footer from '@/components/ajrh/Footer';

export default function AJRHIndustrialLanding() {
  return (
    <div className="bg-white">
      <HeroSection />
      <SupervisionSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ComplianceSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
