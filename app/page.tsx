'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import WhyAntalya from '@/components/WhyAntalya';
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
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO — SURGEON-GUIDED TITLE & HIGH-CONVERSION CTA */}
      <HeroSection />

      {/* 3. LEGAL MINISTRY OF HEALTH TRUST BAND */}
      <LegalTrustBand />

      {/* 4. WHY ANTALYA FOR HAIR TRANSPLANT? */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyAntalya />
        <CountUpStats />
      </section>

      {/* 5. TRANSPARENT PRICING PACKAGES */}
      <section id="packages" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <PricingPackages />
      </section>

      {/* 6. PATIENT EXPERIENCES */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <SocialProof />
      </section>

      {/* 7. INTERACTIVE HAIR ANALYSIS WIZARD */}
      <section id="analysis-wizard" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <HairAnalysisWizard />
      </section>

      {/* 8. PATIENT EXPERIENCE & CLINICAL ATMOSPHERE */}
      <section id="results" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <PatientJourney />
      </section>

      {/* 9. 12-MONTH POST-OP RECOVERY & GROWTH ROADMAP (NEW COMPONENT) */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <RecoveryRoadmap />
      </section>

      {/* 10. CLINICAL STANDARDS & TECHNOLOGY */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <CompetitorBenchmarkFeatures />
      </section>

      {/* 11. MEDICAL & PATIENT COORDINATION TEAM */}
      <section id="team" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <MedicalTeam />
      </section>

      {/* 12. DHI CHOI PEN ADVANTAGES */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <DHIAdvantages />
      </section>

      {/* 13. 4-STEP TRANSPARENT PROCESS TIMELINE */}
      <section id="process" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <ProcessTimeline />
      </section>

      {/* 14. DHI VS FUE COMPARISON TABLE */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <DHIVsFueComparison />
      </section>

      {/* 15. PATIENT GUIDES & ARTICLES */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <SemanticSeoGuide />
      </section>

      {/* 16. FAQ SECTION */}
      <section id="faq-section" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
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
