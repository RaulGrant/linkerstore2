'use client';

import HeroSection from '@/components/cenacap/HeroSection';
import StickyNavbar from '@/components/cenacap/StickyNavbar';
import CoursesSection from '@/components/cenacap/CoursesSection';
import WhyChooseUsSection from '@/components/cenacap/WhyChooseUsSection';
import TrustedBrandsBanner from '@/components/home/TrustedBrandsBanner';
import TestimonialsSection from '@/components/cenacap/TestimonialsSection';
import CTASection from '@/components/cenacap/CTASection';
import Footer from '@/components/cenacap/Footer';

export default function CenacapLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <StickyNavbar />
      <HeroSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <TrustedBrandsBanner />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
