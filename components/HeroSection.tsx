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
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-7">
        
        {/* T.C. Sağlık Bakanlığı Onaylı Rozet */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-700 backdrop-blur-md text-xs font-extrabold text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t(lang as Lang, 'hero.ministryBadge')}</span>
        </div>

        {/* %100 Dil İzolasyonlu Dev Başlık */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.12]">
          {lang === 'fr' ? (
            <>Greffe de Cheveux <span className="text-amber-500">DHI Premium</span> à Antalya</>
          ) : lang === 'tr' ? (
            <>Antalya'da <span className="text-amber-500">Premium DHI</span> Saç Ekimi</>
          ) : (
            <>Premium <span className="text-amber-500">DHI Hair Transplant</span> in Antalya</>
          )}
        </h1>

        {/* %100 Dil İzolasyonlu Alt Açıklama */}
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
          {lang === 'fr'
            ? "Les patients européens choisissent Antalya pour la technologie DHI, une planification personnalisée et une expérience médicale haut de gamme."
            : lang === 'tr'
            ? "Avrupa standartlarında DHI teknolojisi ile kişiye özel saç ekimi planlaması ve konforlu Antalya sağlık turizmi deneyimi."
            : "UK & European patients choose Antalya for advanced DHI technology, personalized hairline design, and all-inclusive medical care."}
        </p>

        {/* 3 Temel Güven Rozeti */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto pt-1 text-xs font-black text-slate-200">
          <div className="bg-slate-800/80 border border-slate-700/80 px-4 py-3 rounded-2xl flex items-center gap-2 min-h-[48px]">
            <span>{t(lang as Lang, 'hero.badge1')}</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/80 px-4 py-3 rounded-2xl flex items-center gap-2 min-h-[48px]">
            <span>🏥 {t(lang as Lang, 'hero.badge2')}</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/80 px-4 py-3 rounded-2xl flex items-center gap-2 min-h-[48px]">
            <span>✈ {t(lang as Lang, 'hero.badge3')}</span>
          </div>
        </div>

        {/* Dynamic Transparent Price Pill */}
        {mounted && (
          <div className="pt-1">
            <span className="inline-block bg-blue-950/90 border border-blue-800/60 text-blue-300 text-xs font-extrabold px-4 py-2 rounded-full shadow-sm">
              {lang === 'tr' ? 'Şeffaf Paketler ' : lang === 'fr' ? 'Forfaits Transparents ' : 'Transparent Packages '} 
              <span className="text-white font-black">{priceFormatted}</span>
              {lang === 'tr' ? "'den başlayan fiyatlarla" : lang === 'fr' ? ' à partir de' : ' starting rate'}
            </span>
          </div>
        )}

        {/* CTA Buton Hiyerarşisi: Üstteki Outline, Alttaki Dev Yeşil WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 max-w-md mx-auto">
          {/* Secondary Outline Button */}
          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 border-2 border-slate-600 hover:border-white/60 text-white font-extrabold text-xs rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
          >
            <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
          </a>

          {/* Primary High-Conversion WhatsApp Button */}
          <a
            href="https://wa.me/905551234567?text=Hello%20Antalya%20DHI,%20I%20would%20like%20to%20get%20a%20free%20hair%20analysis."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-xl hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>💬 {lang === 'fr' ? 'Consultation WhatsApp' : lang === 'tr' ? 'WhatsApp\'tan Fotoğraf Gönder' : 'Get Free Analysis via WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
