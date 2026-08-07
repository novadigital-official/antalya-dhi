'use client';

import { SiteProvider } from '@/lib/context';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import PricingPackages from '@/components/PricingPackages';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import LiveUrgencyBadge from '@/components/LiveUrgencyBadge';
import SocialProof from '@/components/SocialProof';
import MedicalTeam from '@/components/MedicalTeam';
import CompetitorBenchmarkFeatures from '@/components/CompetitorBenchmarkFeatures';
import ProcessTimeline from '@/components/ProcessTimeline';
import DHIAdvantages from '@/components/DHIAdvantages';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import PatientJourney from '@/components/PatientJourney';
import SemanticSeoGuide from '@/components/SemanticSeoGuide';
import FaqSection from '@/components/FaqSection';
import VIPPackageDetails from '@/components/VIPPackageDetails';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import MobileStickyBar from '@/components/MobileStickyBar';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative pb-16 md:pb-0">
        {/* 1. NAVBAR WITH MINIMAL FLAG SELECTOR */}
        <Navbar />

        {/* 2. HERO — VIP TARGETED TITLE & HIGH-CONVERSION CTA */}
        <HeroSection />

        {/* 3. LEGAL MINISTRY OF HEALTH TRUST BAND */}
        <LegalTrustBand />

        {/* 4. TRANSPARENT PRICING PACKAGES (10-SECOND CONVERSION RULE) */}
        <section id="packages" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingPackages />
        </section>

        {/* 5. INTERACTIVE HAIR ANALYSIS WIZARD & LEAD GENERATION */}
        <section id="analysis-wizard" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="flex justify-center mb-6">
            <LiveUrgencyBadge />
          </div>
          <HairAnalysisWizard />
        </section>

        {/* 6. TRUSTPILOT & GOOGLE VERIFIED SOCIAL PROOF */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SocialProof />
        </section>

        {/* 7. MEDICAL & SURGICAL COORDINATION TEAM */}
        <section id="team" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <MedicalTeam />
        </section>

        {/* 8. COMPETITOR BENCHMARK MEDICAL STANDARDS */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <CompetitorBenchmarkFeatures />
        </section>

        {/* 9. DHI CHOI PEN ADVANTAGES */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIAdvantages />
        </section>

        {/* 10. 4-STEP TRANSPARENT PROCESS TIMELINE */}
        <section id="process" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <ProcessTimeline />
        </section>

        {/* 11. DHI VS FUE COMPARISON TABLE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIVsFueComparison />
        </section>

        {/* 12. PATIENT JOURNEY IN ANTALYA */}
        <section id="results" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PatientJourney />
        </section>

        {/* 13. SEMANTIC SEO AI KNOWLEDGE BASE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SemanticSeoGuide />
        </section>

        {/* 14. FAQ & GEO AI SEARCH Q&A */}
        <section id="faq-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <FaqSection />
        </section>

        {/* 15. VIP PACKAGE TIMELINE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <VIPPackageDetails />
        </section>

        {/* 16. LEGAL DISCLAIMER */}
        <MedicalDisclaimer />

        {/* 17. FOOTER */}
        <Footer />

        {/* 18. FIXED FLOATING WHATSAPP WIDGET */}
        <WhatsAppWidget />

        {/* 19. MOBILE STICKY BOTTOM BAR */}
        <MobileStickyBar />
      </main>
    </SiteProvider>
  );
}
