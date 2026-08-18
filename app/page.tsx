'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparativeMatrix from '@/components/ComparativeMatrix';
import PatientJourney from '@/components/PatientJourney';
import PricingPackages from '@/components/PricingPackages';
import GraftCalculatorGuide from '@/components/GraftCalculatorGuide';
import PrePostCareGuide from '@/components/PrePostCareGuide';
import WhyAntalyaVsIstanbul from '@/components/WhyAntalyaVsIstanbul';
import SocialProof from '@/components/SocialProof';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import CompetitorBenchmarkFeatures from '@/components/CompetitorBenchmarkFeatures';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import SemanticSeoGuide from '@/components/SemanticSeoGuide';
import FaqSection from '@/components/FaqSection';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] text-slate-900 font-sans relative selection:bg-emerald-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. STICKY LUMINOUS WHITE NAVBAR WITH COMPACT FLAGS */}
      <Navbar />

      {/* 2. HERO — MULTI-LAYER MESH EMERALD GRADIENT WITH REAL CLINIC PHOTO */}
      <HeroSection />

      {/* 3. COMPARATIVE BENCHMARK (LONDON/PARIS/BERLIN VS ANTALYA DHI) */}
      <ComparativeMatrix />

      {/* 4. 4 HIGH-RESOLUTION PHOTOGRAPHIC PATIENT JOURNEY CARDS */}
      <PatientJourney />

      {/* 5. 3-DAY ITINERARY & TRANSPARENT PRICING PLANS */}
      <PricingPackages />

      {/* 6. GRAFT & HAIR DENSITY ESTIMATION GUIDE */}
      <GraftCalculatorGuide />

      {/* 7. PRE-OP & POST-OP PATIENT CARE PROTOCOL */}
      <PrePostCareGuide />

      {/* 8. WHY BOUTIQUE ANTALYA VS MASS CLINICS IN ISTANBUL */}
      <WhyAntalyaVsIstanbul />

      {/* 9. INTERNATIONAL PATIENT EXPERIENCES & EMERALD TRUST BAR */}
      <SocialProof />

      {/* 10. 3-STEP INTERACTIVE HAIR ANALYSIS WIZARD */}
      <HairAnalysisWizard />

      {/* 11. CLINICAL STANDARDS & TECHNOLOGY (BENTO GRID) */}
      <CompetitorBenchmarkFeatures />

      {/* 12. DHI VS CLASSIC FUE COMPARISON */}
      <DHIVsFueComparison />

      {/* 13. CLINICAL GUIDES & ARTICLES */}
      <SemanticSeoGuide />

      {/* 14. EXPANDED FAQ SECTION (8 COMPREHENSIVE QUESTIONS) */}
      <FaqSection />

      {/* 15. LEGAL DISCLAIMER */}
      <MedicalDisclaimer />

      {/* 16. FOOTER */}
      <Footer />

      {/* 17. FIXED WHATSAPP BUTTON */}
      <WhatsAppWidget />
    </main>
  );
}
