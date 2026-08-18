'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import ComparativeMatrix from '@/components/ComparativeMatrix';
import CountUpStats from '@/components/CountUpStats';
import PricingPackages from '@/components/PricingPackages';
import SocialProof from '@/components/SocialProof';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import PatientJourney from '@/components/PatientJourney';
import RecoveryRoadmap from '@/components/RecoveryRoadmap';
import MedicalTeam from '@/components/MedicalTeam';
import CompetitorBenchmarkFeatures from '@/components/CompetitorBenchmarkFeatures';
import ProcessTimeline from '@/components/ProcessTimeline';
import DHIAdvantages from '@/components/DHIAdvantages';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import SemanticSeoGuide from '@/components/SemanticSeoGuide';
import FaqSection from '@/components/FaqSection';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#1C1917] font-sans relative">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO — EDITORIAL SERIF & UNDERSTATED LUXURY */}
      <HeroSection />

      {/* 3. LEGAL MINISTRY OF HEALTH TRUST BAND */}
      <LegalTrustBand />

      {/* 4. COMPARATIVE MATRIX (LONDON/PARIS VS ANTALYA DHI) */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparativeMatrix />
        <CountUpStats />
      </section>

      {/* 5. 3-DAY ITINERARY & TRANSPARENT PRICING PACKAGES */}
      <section id="packages" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <PricingPackages />
      </section>

      {/* 6. INTERNATIONAL PATIENT EXPERIENCES (GEOGRAPHIC FLIGHT PROVENANCE) */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <SocialProof />
      </section>

      {/* 7. INTERACTIVE HAIR ANALYSIS WIZARD */}
      <section id="analysis-wizard" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <HairAnalysisWizard />
      </section>

      {/* 8. PATIENT JOURNEY & CLINICAL ATMOSPHERE */}
      <section id="results" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <PatientJourney />
      </section>

      {/* 9. 12-MONTH POST-OP RECOVERY ROADMAP */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <RecoveryRoadmap />
      </section>

      {/* 10. CLINICAL STANDARDS & TECHNOLOGY */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <CompetitorBenchmarkFeatures />
      </section>

      {/* 11. MEDICAL & PATIENT COORDINATION TEAM */}
      <section id="team" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <MedicalTeam />
      </section>

      {/* 12. DHI CHOI PEN ADVANTAGES */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <DHIAdvantages />
      </section>

      {/* 13. 4-STEP PROCESS TIMELINE */}
      <section id="process" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <ProcessTimeline />
      </section>

      {/* 14. DHI VS FUE COMPARISON TABLE */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <DHIVsFueComparison />
      </section>

      {/* 15. PATIENT GUIDES & ARTICLES */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <SemanticSeoGuide />
      </section>

      {/* 16. FAQ SECTION */}
      <section id="faq-section" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <FaqSection />
      </section>

      {/* 17. LEGAL DISCLAIMER */}
      <MedicalDisclaimer />

      {/* 18. FOOTER */}
      <Footer />

      {/* 19. FIXED FLOATING WHATSAPP BUTTON */}
      <WhatsAppWidget />
    </main>
  );
}
