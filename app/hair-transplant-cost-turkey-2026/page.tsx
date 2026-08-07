'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import PricingPackages from '@/components/PricingPackages';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import { SiteProvider } from '@/lib/context';

export default function HairTransplantCostPage() {
  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
        <Navbar />

        <section className="pt-32 pb-16 bg-slate-900 text-white px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              2026 TRANSPARENT COST GUIDE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white">
              Hair Transplant Cost in Turkey 2026
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Transparent DHI all-inclusive pricing in Antalya. Compare Standard vs VIP Experience rates in £ GBP, € EUR, and $ USD with zero hidden fees.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingPackages />
        </section>

        <section id="analysis-wizard" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <HairAnalysisWizard />
        </section>

        <MedicalDisclaimer />
        <Footer />
      </main>
    </SiteProvider>
  );
}
