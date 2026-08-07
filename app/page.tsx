'use client';

import { SiteProvider } from '@/lib/context';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LegalTrustBand from '@/components/LegalTrustBand';
import DHIAdvantages from '@/components/DHIAdvantages';
import PricingPackages from '@/components/PricingPackages';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import LiveUrgencyBadge from '@/components/LiveUrgencyBadge';
import HairCalculator from '@/components/HairCalculator';
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

        {/* 2. HERO — AGRESIF SATIŞ BAŞLIĞI & CTA */}
        <HeroSection />

        {/* 3. SAĞLIK BAKANLIĞI GÜVEN BANDI */}
        <LegalTrustBand />

        {/* 4. DHI TEKNİK AVANTAJLARI */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DHIAdvantages />
        </section>

        {/* 5. FİYAT PAKETLERİ (STANDARD + VIP) */}
        <section id="packages" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <PricingPackages />
        </section>

        {/* 6. BEFORE/AFTER SONUÇLAR */}
        <section id="results" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <BeforeAfterSlider />
        </section>

        {/* 7. CANLI ACILIYET ROZETİ + DHI SİHİRBAZ HESAPLAYICISI */}
        <section id="calculator" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="flex justify-center mb-6">
            <LiveUrgencyBadge />
          </div>
          <HairCalculator />
        </section>

        {/* 8. VIP PAKET DETAYLARI — JOURNEY TIMELINE */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <VIPPackageDetails />
        </section>

        {/* 9. SOSYAL KANIT & TESTİMONİALLER */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <SocialProof />
        </section>

        {/* 10. TIBBİ DISCLAIMER (3 DİLDE ZORUNLU) */}
        <MedicalDisclaimer />

        {/* 11. FOOTER */}
        <Footer />

        {/* 12. FLOATING WHATSAPP WİDGET (DESKTOP) */}
        <WhatsAppWidget />

        {/* 13. MOBİL YAPIŞKAN CTA BARI */}
        <MobileStickyBar />
      </main>
    </SiteProvider>
  );
}
