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
    <section className="relative w-full bg-gradient-to-br from-[#022C22] via-[#064E3B] to-[#043E30] text-white pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-emerald-800/40">
      
      {/* Dynamic Multi-layered Ambient Glows & Mesh Lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-emerald-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-teal-300/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Grid Lines Overlay for Tech Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Value Proposition & High-Converting Headline (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Authority Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{lang === 'tr' ? 'T.C. Sağlık Bakanlığı Ruhsatlı Klinikler · 12+ Yıl Deneyim' : 'T.C. Ministry of Health Licensed Partner Clinics'}</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.12]">
            {lang === 'fr' ? (
              <>Greffe DHI Premium <span className="text-emerald-300 bg-clip-text">sous Contrôle Médical</span> à Antalya</>
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="bg-emerald-950/90 border border-emerald-500/40 px-4 py-2 rounded-2xl flex items-center gap-3 shadow-lg backdrop-blur-md">
                <span className="text-xs text-emerald-200/80 font-medium">{lang === 'tr' ? 'Şeffaf Paket Başlangıcı:' : 'All-Inclusive Packages from:'}</span>
                <span className="text-emerald-300 font-black text-lg">{priceFormatted}</span>
                <span className="text-[11px] text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-lg font-extrabold">
                  {lang === 'tr' ? '5★ Otel & VIP Transfer Dahil' : '5★ Hotel & VIP Transfer Included'}
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
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-950/50 transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t(lang as Lang, 'hero.cta_whatsapp')}</span>
            </a>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 bg-emerald-950/70 hover:bg-emerald-900/90 text-white border border-emerald-400/40 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </a>
          </div>

          {/* Social Proof Line */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-emerald-200/80 font-semibold">
            <div className="flex items-center gap-1.5 text-amber-300 font-extrabold">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9 / 5.0 (1,200+ Verified Patient Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'tr' ? '12 Ay Medikal Takip' : '12-Month Medical Care'}</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-Resolution Photographic Frame with Floating Bento Badges (5 cols) */}
        <div className="lg:col-span-5 relative space-y-3.5">
          
          <div className="relative rounded-3xl overflow-hidden border border-emerald-400/30 shadow-2xl bg-emerald-950 group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Clinic Consultation"
              className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-103 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#022C22]/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                {lang === 'tr' ? 'Birebir Hekim Muayenesi & Ön Çizgi Tasarımı' : 'Surgeon Consultation & Hairline Artistry'}
              </h3>
              <p className="text-xs text-emerald-200/90 mt-1 font-normal">
                {lang === 'tr' ? 'T.C. Sağlık Bakanlığı ruhsatlı anlaşmalı sağlık kuruluşlarında steril operasyon.' : 'Procedures performed in licensed healthcare facilities in Antalya.'}
              </p>
            </div>
          </div>

          {/* 3 Floating Glass Tags */}
          <div className="grid grid-cols-3 gap-2.5 text-[11px] font-bold">
            <div className="bg-emerald-950/90 border border-emerald-500/30 p-2.5 rounded-2xl text-center backdrop-blur-md">
              <span className="text-emerald-300 block font-extrabold text-sm">100%</span>
              <span className="text-[10px] text-emerald-200/80 font-medium">Single-Use Choi</span>
            </div>
            <div className="bg-emerald-950/90 border border-emerald-500/30 p-2.5 rounded-2xl text-center backdrop-blur-md">
              <span className="text-amber-300 block font-extrabold text-sm">VIP</span>
              <span className="text-[10px] text-emerald-200/80 font-medium">Mercedes Vito</span>
            </div>
            <div className="bg-emerald-950/90 border border-emerald-500/30 p-2.5 rounded-2xl text-center backdrop-blur-md">
              <span className="text-white block font-extrabold text-sm">12 Mo.</span>
              <span className="text-[10px] text-emerald-200/80 font-medium">Post-Op Care</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
