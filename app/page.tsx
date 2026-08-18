'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparativeMatrix from '@/components/ComparativeMatrix';
import CountUpStats from '@/components/CountUpStats';
import PricingPackages from '@/components/PricingPackages';
import SocialProof from '@/components/SocialProof';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import PatientJourney from '@/components/PatientJourney';
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

      {/* 2. HERO — SIGNATURE 48x16 DENSITY FIELD & FRAUNCES HEADLINE */}
      <HeroSection />

      {/* 3. COMPARATIVE STRIP (LONDON/PARIS/BERLIN VS ANTALYA DHI) */}
      <ComparativeMatrix />

      {/* 4. STATS BAND (INK BACKGROUND WITH BRONZE STATS) */}
      <CountUpStats />

      {/* 5. 3-DAY ITINERARY & TRANSPARENT PRICING PLANS */}
      <PricingPackages />

      {/* 6. INTERNATIONAL PATIENT TESTIMONIALS & TRUSTBAND */}
      <SocialProof />

      {/* 7. 3-STEP HAIR ANALYSIS WIZARD */}
      <HairAnalysisWizard />

      {/* 8. 12-MONTH POST-OP RECOVERY ROADMAP */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <RecoveryRoadmap />
      </section>

      {/* 9. CLINICAL STANDARDS & TECHNOLOGY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <CompetitorBenchmarkFeatures />
      </section>

      {/* 10. DHI CHOI PEN ADVANTAGES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <DHIAdvantages />
      </section>

      {/* 11. DHI VS FUE COMPARISON TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <DHIVsFueComparison />
      </section>

      {/* 12. CLINICAL GUIDES & ARTICLES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <SemanticSeoGuide />
      </section>

      {/* 13. FAQ SECTION */}
      <section id="faq-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(23,35,28,0.12)]">
        <FaqSection />
      </section>

      {/* 14. LEGAL DISCLAIMER */}
      <MedicalDisclaimer />

      {/* 15. FOOTER */}
      <Footer />

      {/* 16. FIXED WHATSAPP BUTTON */}
      <WhatsAppWidget />
    </main>
  );
}
