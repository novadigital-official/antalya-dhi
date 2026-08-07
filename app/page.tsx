'use client';

import { SiteProvider } from '@/lib/context';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import MedicalTeam from '@/components/MedicalTeam';
import ProcessTimeline from '@/components/ProcessTimeline';
import DHIAdvantages from '@/components/DHIAdvantages';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import PatientJourney from '@/components/PatientJourney';
import PricingPackages from '@/components/PricingPackages';
import LiveUrgencyBadge from '@/components/LiveUrgencyBadge';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import FaqSection from '@/components/FaqSection';
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

        {/* 2. HERO — SATIŞ VE GÜVEN YÜKSEK İLK EKRAN */}
        <HeroSection />

        {/* 3. SAĞLIK BAKANLIĞI GÜVEN BANDI */}
        <LegalTrustBand />

        {/* 4. DOKTOR VE MEDİKAL EKİP GÜVEN ALANI (KİM YAPACAK?) */}
        <section id="team" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalTeam />
        </section>

        {/* 5. SİZE ÖZEL DHI SÜRECİ (4 ADIM TIMELINE) */}
        <section id="process" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <ProcessTimeline />
        </section>

        {/* 6. DHI TEKNİK AVANTAJLARI */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIAdvantages />
        </section>

        {/* 7. DHI VE FUE KARŞILAŞTIRMASI (SEMANTIC COMPARISON) */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIVsFueComparison />
        </section>

        {/* 8. ANTALYA DHI DENEYİMİ VE HASTA YOLCULUĞU */}
        <section id="results" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PatientJourney />
        </section>

        {/* 9. ŞEFFAF FİYAT PAKETLERİ (STANDARD 90K + VIP ANTALYA EXPERIENCE 110K) */}
        <section id="packages" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PricingPackages />
        </section>

        {/* 10. CANLI ACİLİYET ROZETİ + ÜCRETSİZ SAÇ ANALİZİ SİHİRBAZI */}
        <section id="analysis-wizard" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="flex justify-center mb-6">
            <LiveUrgencyBadge />
          </div>
          <HairAnalysisWizard />
        </section>

        {/* 11. SIKÇA SORULAN SORULAR & AI SEARCH (GEO) Q&A */}
        <section id="faq-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <FaqSection />
        </section>

        {/* 12. VIP HİZMET TIMELINE DİYAGRAMI */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <VIPPackageDetails />
        </section>

        {/* 13. SOSYAL KANIT & HASTA GÖRÜŞLERİ */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SocialProof />
        </section>

        {/* 14. TIBBİ DISCLAIMER (ZORUNLU 3 DİLDE) */}
        <MedicalDisclaimer />

        {/* 15. FOOTER */}
        <Footer />

        {/* 16. FLOATING WHATSAPP BOT (DESKTOP) */}
        <WhatsAppWidget />

        {/* 17. MOBİL YAPIŞKAN CTA BARI */}
        <MobileStickyBar />
      </main>
    </SiteProvider>
  );
}
