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
    <section className="relative w-full bg-slate-950 text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Primary High-Conversion CTA (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* T.C. Sağlık Bakanlığı Onaylı Rozet */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs font-extrabold text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t(lang as Lang, 'hero.ministryBadge')}</span>
          </div>

          {/* H1 Title: Surgeon-Guided Premium Positioning */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            {lang === 'fr' ? (
              <>Greffe DHI Premium <span className="text-blue-500">sous Contrôle Médical</span> à Antalya</>
            ) : lang === 'tr' ? (
              <>Antalya'da <span className="text-blue-500">Doktor Kontrollü</span> Premium DHI Saç Ekimi</>
            ) : (
              <><span className="text-blue-500">Surgeon-Guided</span> Premium DHI Hair Transplant in Antalya</>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            {t(lang as Lang, 'hero.subtitle')}
          </p>

          {/* Verified Rating & Trust Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-black text-slate-200">
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span className="text-blue-400">★ ★ ★ ★ ★</span>
              <span>4.9/5 Rating on Trustpilot & Google</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span>✈ All-Inclusive VIP Package</span>
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

          {/* Single High-Conversion WhatsApp Action */}
          <div className="pt-2 max-w-lg mx-auto lg:mx-0">
            <a
              href="https://wa.me/905551234567?text=Hello%20Antalya%20DHI,%20I%20would%20like%20to%20send%20my%20scalp%20photos%20for%20a%2024-hour%20doctor%20evaluation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[56px] px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
            >
              <span>💬 {t(lang as Lang, 'hero.cta_whatsapp')}</span>
            </a>
          </div>

        </div>

        {/* Right Column: Visual Trust Hero Image + Lead Surgeon Badge Overlay (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Medical Consultation"
              className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Surgeon Badge Overlay */}
            <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-blue-500/40 p-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm border border-blue-400 shrink-0">
                👨‍⚕️
              </div>
              <div>
                <div className="text-xs font-black text-white">Dr. C. Yılmaz</div>
                <div className="text-[10px] text-blue-400 font-extrabold">Lead DHI Surgeon</div>
                <div className="text-[9px] text-slate-400 font-medium">12+ Yıl Cerrahi Pratik</div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                {lang === 'tr' ? 'Uzman Hekim Muayenesi & Ön Saç Çizgisi Planlaması' : 'In-Person Surgeon Consultation & Hairline Design'}
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-1">
                {lang === 'tr' ? 'Antalya Sağlık Turizmi Yetkili Kliniğinde steril ve konforlu tedavi süreci.' : 'Certified Health Tourism Partner Clinic in Antalya.'}
              </p>
            </div>
          </div>

          {/* 4 Visual Trust Tags Under Image */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-extrabold text-slate-300">
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span>
              <span>{t(lang as Lang, 'hero.vtag1')}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span>
              <span>{t(lang as Lang, 'hero.vtag2')}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span>
              <span>{t(lang as Lang, 'hero.vtag3')}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span>
              <span>{t(lang as Lang, 'hero.vtag4')}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
