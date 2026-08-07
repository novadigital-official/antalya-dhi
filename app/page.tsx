'use client';

import { SiteProvider } from '@/lib/context';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import ProcessTimeline from '@/components/ProcessTimeline';
import DHIAdvantages from '@/components/DHIAdvantages';
import PricingPackages from '@/components/PricingPackages';
import PatientJourney from '@/components/PatientJourney';
import LiveUrgencyBadge from '@/components/LiveUrgencyBadge';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import SocialProof from '@/components/SocialProof';
import VIPPackageDetails from '@/components/VIPPackageDetails';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import MobileStickyBar from '@/components/MobileStickyBar';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative pb-16 md:pb-0">
        {/* 1. PREMIUM NAVBAR */}
        <Navbar />

        {/* 2. HERO — SALES CONVERSION SECTION */}
        <HeroSection />

        {/* 3. SAĞLIK BAKANLIĞI GÜVEN BANDI */}
        <LegalTrustBand />

        {/* 4. SİZE ÖZEL DHI SÜRECİ (4 ADIM TIMELINE) */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <ProcessTimeline />
        </section>

        {/* 5. DHI TEKNİK AVANTAJLARI */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DHIAdvantages />
        </section>

        {/* 6. ŞEFFAF FİYAT PAKETLERİ (STANDARD 90K + VIP 110K) */}
        <section id="packages" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PricingPackages />
        </section>

        {/* 7. HASTA DENEYİMİ (GERÇEK ANTALYA DHI YOLCULUĞU) */}
        <section id="results" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PatientJourney />
        </section>

        {/* 8. CANLI ACİLİYET ROZETİ + ÜCRETSİZ SAÇ ANALİZİ SİHİRBAZI */}
        <section id="analysis-wizard" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="flex justify-center mb-6">
            <LiveUrgencyBadge />
          </div>
          <HairAnalysisWizard />
        </section>

        {/* 9. VIP HİZMET TIMELINE DİYAGRAMI */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <VIPPackageDetails />
        </section>

        {/* 10. SOSYAL KANIT & HASTA GÖRÜŞLERİ */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SocialProof />
        </section>

        {/* 11. TIBBİ DISCLAIMER (ZORUNLU 3 DİLDE) */}
        <MedicalDisclaimer />

        {/* 12. FOOTER */}
        <Footer />

        {/* 13. FLOATING WHATSAPP BOT (DESKTOP) */}
        <WhatsAppWidget />

        {/* 14. MOBİL YAPIŞKAN CTA BARI */}
        <MobileStickyBar />
      </main>
    </SiteProvider>
  );
}
