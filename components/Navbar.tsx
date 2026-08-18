'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';
import { MessageSquare, PhoneCall, Globe } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, currency, setCurrency } = useSiteContext();

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaText = {
    tr: 'Ücretsiz Analiz Al',
    en: 'Get Free Analysis',
    fr: 'Analyse Gratuite',
  }[lang as Lang] || 'Get Free Analysis';

  return (
    <header className="sticky top-0 z-50 bg-[#070B14]/85 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-xl tracking-tight text-white group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            DHI
          </div>
          <span>ANTALYA <span className="text-blue-400">DHI</span></span>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
          <a href="#comparison" className="hover:text-blue-400 transition-colors">
            {lang === 'tr' ? 'Karşılaştırma' : lang === 'fr' ? 'Comparatif' : 'Comparison'}
          </a>
          <a href="#results" className="hover:text-blue-400 transition-colors">
            {lang === 'tr' ? 'Hasta Yolculuğu' : lang === 'fr' ? 'Parcours Patient' : 'Patient Journey'}
          </a>
          <a href="#packages" className="hover:text-blue-400 transition-colors">
            {lang === 'tr' ? 'Şeffaf Paketler' : lang === 'fr' ? 'Forfaits' : 'Packages'}
          </a>
          <a href="#recovery-roadmap" className="hover:text-blue-400 transition-colors">
            {lang === 'tr' ? '12 Ay Takvim' : lang === 'fr' ? 'Suivi 12 Mois' : '12-Mo Timeline'}
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </nav>

        {/* Right Controls: Currency, Language & Primary CTA */}
        <div className="flex items-center gap-3">
          
          {/* Currency Toggle */}
          <div className="hidden sm:flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 text-[11px] font-bold text-slate-400">
            {(['GBP', 'EUR', 'USD', 'TRY'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  currency === c
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'hover:text-white'
                }`}
              >
                {c === 'GBP' ? '£' : c === 'EUR' ? '€' : c === 'USD' ? '$' : '₺'}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 text-[11px] font-bold text-slate-400">
            {(['en', 'fr', 'tr'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer uppercase ${
                  lang === l
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Consultation CTA */}
          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-102 active:scale-98 cursor-pointer hidden sm:flex items-center gap-1.5"
          >
            <span>{ctaText}</span>
          </a>

        </div>

      </div>
    </header>
  );
}
