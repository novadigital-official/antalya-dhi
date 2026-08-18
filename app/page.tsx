'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparativeMatrix from '@/components/ComparativeMatrix';
import PatientJourney from '@/components/PatientJourney';
import PricingPackages from '@/components/PricingPackages';
import SocialProof from '@/components/SocialProof';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import RecoveryRoadmap from '@/components/RecoveryRoadmap';
import CompetitorBenchmarkFeatures from '@/components/CompetitorBenchmarkFeatures';
import DHIAdvantages from '@/components/DHIAdvantages';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import SemanticSeoGuide from '@/components/SemanticSeoGuide';
import FaqSection from '@/components/FaqSection';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] text-slate-900 font-sans relative selection:bg-emerald-600 selection:text-white">
      {/* 1. STICKY LUMINOUS WHITE NAVBAR */}
      <Navbar />

      {/* 2. HERO — DEEP LUXURY EMERALD GRADIENT WITH REAL CLINIC PHOTO */}
      <HeroSection />

      {/* 3. COMPARATIVE BENCHMARK (LONDON/PARIS/BERLIN VS ANTALYA DHI) */}
      <ComparativeMatrix />

      {/* 4. 4 HIGH-RESOLUTION PHOTOGRAPHIC PATIENT JOURNEY CARDS */}
      <PatientJourney />

      {/* 5. 3-DAY ITINERARY & TRANSPARENT PRICING PLANS */}
      <PricingPackages />

      {/* 6. INTERNATIONAL PATIENT EXPERIENCES & EMERALD TRUST BAR */}
      <SocialProof />

      {/* 7. 3-STEP INTERACTIVE HAIR ANALYSIS WIZARD */}
      <HairAnalysisWizard />

      {/* 8. 12-MONTH POST-OP RECOVERY TIMELINE */}
      <RecoveryRoadmap />

      {/* 9. CLINICAL STANDARDS & TECHNOLOGY (BENTO GRID) */}
      <CompetitorBenchmarkFeatures />

      {/* 10. CHOI PEN DHI ADVANTAGES */}
      <DHIAdvantages />

      {/* 11. DHI VS CLASSIC FUE COMPARISON */}
      <DHIVsFueComparison />

      {/* 12. CLINICAL GUIDES & ARTICLES */}
      <SemanticSeoGuide />

      {/* 13. FAQ SECTION */}
      <FaqSection />

      {/* 14. LEGAL DISCLAIMER */}
      <MedicalDisclaimer />

      {/* 15. FOOTER */}
      <Footer />

      {/* 16. FIXED WHATSAPP BUTTON */}
      <WhatsAppWidget />
    </main>
  );
}
