'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';
import { MessageSquare, ArrowRight, ShieldCheck, Star, Sparkles, Check } from 'lucide-react';

export default function HeroSection() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const priceFormatted = mounted ? formatPrice(PRICES.standard[currency], currency) : '£1,550';

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/905070871789?text=${encodeURIComponent(
    lang === 'tr'
      ? 'Merhaba, Antalya DHI klinik web siteniz üzerinden ulaştım. Ücretsiz saç analizi ve doktor değerlendirmesi almak istiyorum.'
      : lang === 'fr'
      ? 'Bonjour, je vous contacte via le site web officiel de la clinique Antalya DHI. Je souhaite obtenir une analyse gratuite du cuir chevelu.'
      : 'Hello, I am contacting you via your official Antalya DHI Clinic website. I would like to get a free scalp analysis and doctor evaluation.'
  )}`;

  return (
    <section className="relative w-full bg-[#070B14] text-white pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Lighting Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Value Proposition & High-Impact Conversion Headline (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Otorite Rozeti */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-300 text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>{lang === 'tr' ? 'T.C. Sağlık Bakanlığı Ruhsatlı Klinikler · 12+ Yıl Deneyim' : 'T.C. Ministry of Health Licensed Partner Clinics'}</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1]">
            {lang === 'fr' ? (
              <>Greffe DHI Premium <span className="gradient-text-blue">sous Contrôle Médical</span> à Antalya</>
            ) : lang === 'tr' ? (
              <>Antalya&apos;da <span className="gradient-text-blue">Doktor Kontrollü</span> Lüks DHI Saç Restorasyonu</>
            ) : (
              <>Surgeon-Guided <span className="gradient-text-blue">Premium DHI Hair Restoration</span> in Antalya</>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
            {t(lang as Lang, 'hero.subtitle')}
          </p>

          {/* Price Anchor */}
          {mounted && (
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-md">
                <span className="text-xs text-slate-400 font-medium">{lang === 'tr' ? 'Şeffaf Paket Başlangıcı:' : 'All-Inclusive Packages from:'}</span>
                <span className="text-blue-400 font-extrabold text-base">{priceFormatted}</span>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-md font-bold">
                  {lang === 'tr' ? 'Otel & VIP Transfer Dahil' : 'Hotel & VIP Transfer Included'}
                </span>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 max-w-lg mx-auto lg:mx-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-900/30 transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t(lang as Lang, 'hero.cta_whatsapp')}</span>
            </a>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full sm:w-auto min-h-[54px] px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </a>
          </div>

          {/* Micro Trust Proof */}
          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9 / 5.0 (1,200+ Verified Patient Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'tr' ? '12 Ay Medikal Takip' : '12-Month Medical Follow-up'}</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-Resolution Photographic Card with Floating Badges (5 cols) */}
        <div className="lg:col-span-5 relative space-y-4">
          
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Clinic Consultation"
              className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                {lang === 'tr' ? 'Birebir Hekim Muayenesi & Ön Çizgi Tasarımı' : 'In-Person Surgeon Consultation & Hairline Design'}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-normal">
                {lang === 'tr' ? 'Antalya Sağlık Turizmi yetkili kliniğinde steril ve konforlu süreç.' : 'Certified Health Tourism partner healthcare facilities in Antalya.'}
              </p>
            </div>
          </div>

          {/* 3 Floating Bento Tags */}
          <div className="grid grid-cols-3 gap-2.5 text-[11px] font-bold">
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-blue-400 block font-extrabold text-sm">100%</span>
              <span className="text-[10px] text-slate-400 font-medium">Single-Use Choi</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-emerald-400 block font-extrabold text-sm">VIP</span>
              <span className="text-[10px] text-slate-400 font-medium">Mercedes Transfer</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-amber-400 block font-extrabold text-sm">12 Mo.</span>
              <span className="text-[10px] text-slate-400 font-medium">Post-Op Care</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
