'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';

export default function HeroSection() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const priceFormatted = mounted ? formatPrice(PRICES.standard[currency], currency) : '';

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-slate-900 text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-6">
        
        {/* T.C. Sağlık Bakanlığı Onaylı Rozet */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs font-bold text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t(lang as Lang, 'hero.ministryBadge')}</span>
        </div>

        {/* Ana Başlık */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
          {lang === 'tr' ? (
            <>Antalya'da <span className="text-amber-500">Premium DHI</span> Saç Ekimi</>
          ) : lang === 'fr' ? (
            <>Greffe de Cheveux <span className="text-amber-500">DHI Premium</span> à Antalya</>
          ) : (
            <>Premium <span className="text-amber-500">DHI Hair Transplant</span> in Antalya</>
          )}
        </h1>

        {/* Alt Açıklama */}
        <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
          {t(lang as Lang, 'hero.subtitle')}
        </p>

        {/* 4 Güven Rozeti */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto pt-2 text-xs font-bold text-slate-200">
          <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center justify-center gap-1.5 text-center min-h-[48px]">
            <span className="text-emerald-400 font-black">✓</span>
            <span>{t(lang as Lang, 'hero.trust1')}</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center justify-center gap-1.5 text-center min-h-[48px]">
            <span className="text-emerald-400 font-black">✓</span>
            <span>{t(lang as Lang, 'hero.trust2')}</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center justify-center gap-1.5 text-center min-h-[48px]">
            <span className="text-emerald-400 font-black">✓</span>
            <span>{t(lang as Lang, 'hero.trust3')}</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl flex items-center justify-center gap-1.5 text-center min-h-[48px]">
            <span className="text-emerald-400 font-black">✓</span>
            <span>{t(lang as Lang, 'hero.trust4')}</span>
          </div>
        </div>

        {/* Subtle Price Badge */}
        {mounted && (
          <div className="pt-1">
            <span className="inline-block bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full">
              {lang === 'tr' ? 'Şeffaf Paketler ' : 'Transparent Packages '} 
              <span className="text-white font-black">{priceFormatted}</span>
              {lang === 'tr' ? "'den başlayan fiyatlarla" : ' starting rate'}
            </span>
          </div>
        )}

        {/* CTA Butonları: 1. Ana (Ücretsiz Saç Analizi Al) + 2. WhatsApp İletişim */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 max-w-lg mx-auto">
          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
          </a>

          <a
            href="https://wa.me/905551234567?text=Hello%20Antalya%20DHI,%20I%20would%20like%20to%20get%20a%20free%20hair%20analysis."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{t(lang as Lang, 'hero.cta_whatsapp')}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
