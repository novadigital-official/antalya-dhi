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

  const priceFormatted = mounted ? formatPrice(PRICES.standard[currency], currency) : (lang === 'tr' ? '90.000 TL' : '£1,550');

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

  const reviewsText = {
    tr: '4.9 / 5.0 (1.200+ Doğrulanmış Hasta Değerlendirmesi)',
    en: '4.9 / 5.0 (1,200+ Verified Patient Reviews)',
    fr: '4.9 / 5.0 (1 200+ Avis de Patients Vérifiés)',
  }[lang as Lang] || '4.9 / 5.0 (1,200+ Verified Patient Reviews)';

  const followUpText = {
    tr: '12 Ay Medikal Takip',
    en: '12-Month Medical Follow-Up',
    fr: 'Suivi Médical sur 12 Mois',
  }[lang as Lang] || '12-Month Medical Follow-Up';

  const pkgStartText = {
    tr: 'Şeffaf Paket Başlangıcı:',
    en: 'All-Inclusive Packages from:',
    fr: 'Forfaits Tout Compris dès:',
  }[lang as Lang] || 'All-Inclusive Packages from:';

  const transferTagText = {
    tr: 'VIP Mercedes Transfer Dahil',
    en: 'VIP Mercedes Transfer Included',
    fr: 'Transfert VIP Mercedes Inclus',
  }[lang as Lang] || 'VIP Mercedes Transfer Included';

  const tag1Text = { tr: 'Tek Kullanımlık Choi', en: 'Single-Use Choi', fr: 'Stylo Choi Unique' }[lang as Lang] || 'Single-Use Choi';
  const tag2Text = { tr: 'VIP Mercedes Vito', en: 'VIP Mercedes Vito', fr: 'Transfert Mercedes' }[lang as Lang] || 'VIP Mercedes Vito';
  const tag3Text = { tr: '12 Ay Takip', en: '12-Mo. Care', fr: 'Suivi 12 Mois' }[lang as Lang] || '12-Mo. Care';

  return (
    <section className="relative w-full bg-gradient-to-br from-[#022C22] via-[#064E3B] to-[#043E30] text-white pt-16 pb-14 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-emerald-800/40">
      
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[400px] bg-emerald-400/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-4 w-60 md:w-[350px] h-60 md:h-[350px] bg-teal-300/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Value Proposition & Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
          
          {/* Authority Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-md shadow-sm max-w-full">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{lang === 'tr' ? 'T.C. Sağlık Bakanlığı Ruhsatlı Klinikler · 12+ Yıl Deneyim' : 'T.C. Ministry of Health Licensed Partner Clinics'}</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.12]">
            {lang === 'fr' ? (
              <>Greffe DHI Premium <span className="text-emerald-300">sous Contrôle Médical</span> à Antalya</>
            ) : lang === 'tr' ? (
              <>Antalya&apos;da <span className="text-emerald-300">Doktor Kontrollü</span> Lüks DHI Saç Restorasyonu</>
            ) : (
              <>Surgeon-Guided <span className="text-emerald-300">DHI Hair Restoration</span> in Antalya</>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-emerald-100/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
            {t(lang as Lang, 'hero.subtitle')}
          </p>

          {/* Transparent Price Anchor Pill */}
          {mounted && (
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="bg-emerald-950/90 border border-emerald-500/40 px-3.5 py-2 rounded-2xl flex flex-wrap items-center gap-2.5 shadow-lg backdrop-blur-md">
                <span className="text-xs text-emerald-200/80 font-medium">{pkgStartText}</span>
                <span className="text-emerald-300 font-black text-base sm:text-lg">{priceFormatted}</span>
                <span className="text-[11px] text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-lg font-extrabold">
                  {transferTagText}
                </span>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 max-w-lg mx-auto lg:mx-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[50px] px-7 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t(lang as Lang, 'hero.cta_whatsapp')}</span>
            </a>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full sm:w-auto min-h-[50px] px-6 py-3 bg-emerald-950/70 hover:bg-emerald-900/90 text-white border border-emerald-400/40 font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </a>
          </div>

          {/* Social Proof Line */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-200/80 font-semibold">
            <div className="flex items-center gap-1.5 text-amber-300 font-extrabold">
              <Star className="w-4 h-4 fill-current shrink-0" />
              <span>{reviewsText}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{followUpText}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Photo Card (5 cols) */}
        <div className="lg:col-span-5 relative space-y-3 w-full max-w-md mx-auto lg:max-w-none">
          
          <div className="relative rounded-3xl overflow-hidden border border-emerald-400/30 shadow-2xl bg-emerald-950 group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Clinic Consultation"
              className="w-full h-72 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#022C22]/30 to-transparent flex flex-col justify-end p-5 sm:p-6">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-tight">
                {lang === 'tr' ? 'Birebir Hekim Muayenesi & Ön Çizgi Tasarımı' : lang === 'fr' ? 'Consultation Chirurgicale & Dessin de la Ligne' : 'Surgeon Consultation & Hairline Artistry'}
              </h3>
              <p className="text-xs text-emerald-200/90 mt-1 font-normal">
                {lang === 'tr' ? 'T.C. Sağlık Bakanlığı ruhsatlı anlaşmalı sağlık kuruluşlarında steril operasyon.' : 'Procedures performed in licensed partner healthcare facilities in Antalya.'}
              </p>
            </div>
          </div>

          {/* 3 Floating Glass Tags */}
          <div className="grid grid-cols-3 gap-2 text-[10px] sm:text-[11px] font-bold">
            <div className="bg-emerald-950/90 border border-emerald-500/30 p-2 sm:p-2.5 rounded-2xl text-center backdrop-blur-md">
              <span className="text-emerald-300 block font-extrabold text-xs sm:text-sm">100%</span>
              <span className="text-emerald-200/80 font-medium">{tag1Text}</span>
            </div>
            <div className="bg-emerald-950/90 border border-emerald-500/30 p-2 sm:p-2.5 rounded-2xl text-center backdrop-blur-md">
              <span className="text-amber-300 block font-extrabold text-xs sm:text-sm">VIP</span>
              <span className="text-emerald-200/80 font-medium">{tag2Text}</span>
            </div>
            <div className="bg-emerald-950/90 border border-emerald-500/30 p-2 sm:p-2.5 rounded-2xl text-center backdrop-blur-md">
              <span className="text-white block font-extrabold text-xs sm:text-sm">12 Mo.</span>
              <span className="text-emerald-200/80 font-medium">{tag3Text}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
