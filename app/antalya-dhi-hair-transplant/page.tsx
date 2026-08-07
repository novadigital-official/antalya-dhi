'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import HairAnalysisWizard from '@/components/HairAnalysisWizard';
import PricingPackages from '@/components/PricingPackages';
import DHIVsFueComparison from '@/components/DHIVsFueComparison';
import { SiteProvider } from '@/lib/context';

export default function AntalyaDhiPage() {
  return (
    <SiteProvider>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
        <Navbar />

        <section className="pt-32 pb-16 bg-slate-900 text-white px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block bg-amber-500 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              HIGH-INTENSITY DHI RESTORATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white">
              Antalya DHI Hair Transplant in Turkey
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              World-class Direct Hair Implantation with Choi Implanter Pen. All-inclusive VIP health tourism packages for international patients.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingPackages />
        </section>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <DHIVsFueComparison />
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
