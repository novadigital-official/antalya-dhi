'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparativeMatrix from '@/components/ComparativeMatrix';
import PatientJourney from '@/components/PatientJourney';
import PricingPackages from '@/components/PricingPackages';
import GraftCalculatorGuide from '@/components/GraftCalculatorGuide';
import CompetitorBenchmarkFeatures from '@/components/CompetitorBenchmarkFeatures';
import FaqSection from '@/components/FaqSection';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] text-slate-900 font-sans relative selection:bg-emerald-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. STICKY HEADER */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. CLINICAL BENCHMARK (UK/EU VS ANTALYA DHI) */}
      <ComparativeMatrix />

      {/* 4. PHOTOGRAPHIC 4-STEP PATIENT JOURNEY */}
      <PatientJourney />

      {/* 5. TRANSPARENT PRICING & ALL-INCLUSIVE PACKAGES */}
      <PricingPackages />

      {/* 6. GRAFT DENSITY & NORWOOD ESTIMATION GUIDE */}
      <GraftCalculatorGuide />

      {/* 7. CLINICAL STANDARDS & TECHNOLOGY (CHOI PEN & ATP PRESERVATION) */}
      <CompetitorBenchmarkFeatures />

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* 9. LEGAL MEDICAL FACILITATOR DISCLAIMER */}
      <MedicalDisclaimer />

      {/* 10. INSTITUTIONAL FOOTER */}
      <Footer />

      {/* 11. PERSISTENT WHATSAPP ASSISTANCE WIDGET */}
      <WhatsAppWidget />
    </main>
  );
}
