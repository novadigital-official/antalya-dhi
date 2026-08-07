'use client';

import { SiteProvider } from '@/lib/context';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import PricingPackages from '@/components/PricingPackages';
import PatientJourney from '@/components/PatientJourney';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import LiveUrgencyBadge from '@/components/LiveUrgencyBadge';
import SocialProof from '@/components/SocialProof';
import MedicalTeam from '@/components/MedicalTeam';
import CompetitorBenchmarkFeatures from '@/components/CompetitorBenchmarkFeatures';
import ProcessTimeline from '@/components/ProcessTimeline';
import DHIAdvantages from '@/components/DHIAdvantages';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import SemanticSeoGuide from '@/components/SemanticSeoGuide';
import VIPPackageDetails from '@/components/VIPPackageDetails';
import FaqSection from '@/components/FaqSection';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import MobileStickyBar from '@/components/MobileStickyBar';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative pb-16 md:pb-0">
        {/* 1. NAVBAR WITH SVG FLAGS */}
        <Navbar />

        {/* 2. HERO — VIP TARGETED TITLE & HIGH-CONVERSION CTA */}
        <HeroSection />

        {/* 3. LEGAL MINISTRY OF HEALTH TRUST BAND */}
        <LegalTrustBand />

        {/* 4. TRANSPARENT PRICING PACKAGES (10-SECOND CONVERSION RULE) */}
        <section id="packages" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingPackages />
        </section>

        {/* 5. ANTALYA DHI PATIENT EXPERIENCE (MOVED UP FOR IMMEDIATE VISUAL IMPACT) */}
        <section id="results" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PatientJourney />
        </section>

        {/* 6. INTERACTIVE HAIR ANALYSIS WIZARD & LEAD GENERATION */}
        <section id="analysis-wizard" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="flex justify-center mb-6">
            <LiveUrgencyBadge />
          </div>
          <HairAnalysisWizard />
        </section>

        {/* 7. TRUSTPILOT & GOOGLE VERIFIED SOCIAL PROOF */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SocialProof />
        </section>

        {/* 8. MEDICAL & SURGICAL COORDINATION TEAM */}
        <section id="team" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <MedicalTeam />
        </section>

        {/* 9. COMPETITOR BENCHMARK MEDICAL STANDARDS */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <CompetitorBenchmarkFeatures />
        </section>

        {/* 10. DHI CHOI PEN ADVANTAGES */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIAdvantages />
        </section>

        {/* 11. 4-STEP TRANSPARENT PROCESS TIMELINE */}
        <section id="process" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <ProcessTimeline />
        </section>

        {/* 12. DHI VS FUE COMPARISON TABLE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIVsFueComparison />
        </section>

        {/* 13. SEMANTIC SEO AI KNOWLEDGE BASE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SemanticSeoGuide />
        </section>

        {/* 14. VIP PACKAGE TIMELINE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <VIPPackageDetails />
        </section>

        {/* 15. FAQ & GEO AI SEARCH Q&A (MOVED TO VERY BOTTOM) */}
        <section id="faq-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <FaqSection />
        </section>

        {/* 16. LEGAL DISCLAIMER */}
        <MedicalDisclaimer />

        {/* 17. FOOTER */}
        <Footer />

        {/* 18. FIXED FLOATING WHATSAPP SPHERE WIDGET */}
        <WhatsAppWidget />

        {/* 19. MOBILE STICKY BOTTOM BAR */}
        <MobileStickyBar />
      </main>
    </SiteProvider>
  );
}
