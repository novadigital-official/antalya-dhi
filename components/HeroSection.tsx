'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
    <section className="relative w-full bg-slate-950 text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800/80">
      {/* Background Soft Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* T.C. Sağlık Bakanlığı Onaylı Rozet */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs font-extrabold text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t(lang as Lang, 'hero.ministryBadge')}</span>
          </div>

          {/* Dev Başlık (%100 Dil İzolasyonlu) */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            {lang === 'fr' ? (
              <>Greffe de Cheveux <span className="text-blue-500">DHI Premium</span> à Antalya</>
            ) : lang === 'tr' ? (
              <>Antalya'da <span className="text-blue-500">Premium DHI</span> Saç Ekimi</>
            ) : (
              <>Premium <span className="text-blue-500">DHI Hair Transplant</span> in Antalya</>
            )}
          </h1>

          {/* Alt Açıklama */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            {lang === 'fr'
              ? "Les patients européens choisissent Antalya pour la technologie DHI, une planification personnalisée et une expérience médicale haut de gamme."
              : lang === 'tr'
              ? "Avrupa standartlarında DHI teknolojisi ile kişiye özel saç ekimi planlaması ve konforlu Antalya sağlık turizmi deneyimi."
              : "UK & European patients choose Antalya for advanced DHI technology, personalized hairline design, and all-inclusive medical care."}
          </p>

          {/* 3 Güven Rozeti */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-black text-slate-200">
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span className="text-blue-400">★ ★ ★ ★ ★</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span>🏥 Certified Surgeons</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span>✈ VIP Transfer</span>
            </div>
          </div>

          {/* Transparent Price Pill */}
          {mounted && (
            <div className="pt-1">
              <span className="inline-block bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-extrabold px-4 py-2 rounded-full shadow-sm">
                {lang === 'tr' ? 'Şeffaf Paketler ' : lang === 'fr' ? 'Forfaits Transparents ' : 'Transparent Rates '} 
                <span className="text-white font-black">{priceFormatted}</span>
                {lang === 'tr' ? "'den başlayan fiyatlarla" : lang === 'fr' ? ' à partir de' : ' starting rate'}
              </span>
            </div>
          )}

          {/* CTA Buton Hiyerarşisi */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            {/* Primary High-Conversion WhatsApp Action */}
            <a
              href="https://wa.me/905551234567?text=Hello%20Antalya%20DHI,%20I%20would%20like%20to%20get%20a%20free%20hair%20analysis."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-xl hover:shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>💬 {lang === 'fr' ? 'Consultation WhatsApp' : lang === 'tr' ? 'WhatsApp\'tan Fotoğraf Gönder' : 'Get Free Analysis via WhatsApp'}</span>
            </a>

            {/* Secondary Outline Button */}
            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 border-2 border-slate-700 hover:border-slate-500 text-slate-200 font-extrabold text-xs rounded-xl backdrop-blur-sm hover:bg-slate-900 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
            </a>
          </div>

        </div>

        {/* Right Column: Visual Trust Hero Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Medical Consultation"
              className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                AUTHENTIC CLINIC EXPERIENCE
              </span>
              <h3 className="text-lg font-black text-white leading-tight">
                {lang === 'tr' ? 'Uzman Hekim Muayenesi & Ön Saç Çizgisi Planlaması' : 'In-Person Surgeon Consultation & Hairline Design'}
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-1">
                {lang === 'tr' ? 'Antalya Sağlık Turizmi Yetkili Kliniğinde steril ve konforlu tedavi süreci.' : 'T.C. Ministry of Health Certified Clinic in Antalya.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
