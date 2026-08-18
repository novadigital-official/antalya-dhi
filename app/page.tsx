'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparativeMatrix from '@/components/ComparativeMatrix';
import CountUpStats from '@/components/CountUpStats';
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
    <main className="min-h-screen bg-[#EFE7D8] text-[#17231C] font-sans relative">
      {/* 1. STICKY TRAVERTINE NAVBAR */}
      <Navbar />

      {/* 2. HERO — 2-COLUMN CLINIC PHOTO + DENSITY FIELD & FRAUNCES HEADLINE */}
      <HeroSection />

      {/* 3. COMPARATIVE STRIP (LONDON/PARIS/BERLIN VS ANTALYA DHI) */}
      <ComparativeMatrix />

      {/* 4. STATS BAND (INK BACKGROUND WITH BRONZE STATS) */}
      <CountUpStats />

      {/* 5. 4 PHOTOGRAPHIC PATIENT JOURNEY CARDS */}
      <PatientJourney />

      {/* 6. 3-DAY ITINERARY & TRANSPARENT PRICING PLANS */}
      <PricingPackages />

      {/* 7. INTERNATIONAL PATIENT TESTIMONIALS & TRUSTBAND */}
      <SocialProof />

      {/* 8. 3-STEP HAIR ANALYSIS WIZARD */}
      <HairAnalysisWizard />

      {/* 9. 12-MONTH POST-OP RECOVERY ROADMAP */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <RecoveryRoadmap />
      </section>

      {/* 10. CLINICAL STANDARDS & TECHNOLOGY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <CompetitorBenchmarkFeatures />
      </section>

      {/* 11. DHI CHOI PEN ADVANTAGES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <DHIAdvantages />
      </section>

      {/* 12. DHI VS FUE COMPARISON TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <DHIVsFueComparison />
      </section>

      {/* 13. CLINICAL GUIDES & ARTICLES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <SemanticSeoGuide />
      </section>

      {/* 14. FAQ SECTION */}
      <section id="faq-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <FaqSection />
      </section>

      {/* 15. LEGAL DISCLAIMER */}
      <MedicalDisclaimer />

      {/* 16. FOOTER */}
      <Footer />

      {/* 17. FIXED WHATSAPP BUTTON */}
      <WhatsAppWidget />
    </main>
  );
}
