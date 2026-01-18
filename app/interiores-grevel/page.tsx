'use client';

import HeroSection from '@/components/grevel/HeroSection';
import ServicesSection from '@/components/grevel/ServicesSection';
import MaintenanceSection from '@/components/grevel/MaintenanceSection';
import ClientsSection from '@/components/grevel/ClientsSection';
import ValuePropositionSection from '@/components/grevel/ValuePropositionSection';
import WhyChooseUsSection from '@/components/grevel/WhyChooseUsSection';
import ProcessSection from '@/components/grevel/ProcessSection';
import CTASection from '@/components/grevel/CTASection';
import Footer from '@/components/grevel/Footer';

export default function InterioresGrevelLanding() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <MaintenanceSection />
      <ClientsSection />
      <ValuePropositionSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
