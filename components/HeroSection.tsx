'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';
import { ArrowRight, MessageSquare, ShieldCheck, Check } from 'lucide-react';

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
    <section className="relative w-full bg-[#161412] text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#332E2A]">
      {/* Subtle Travertine & Warm Light Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161412] via-[#161412] to-[#1F1C19] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C28251]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Editorial Luxury Headline & Single High-Authority Signal */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Single Understated Authority Signal — zero badge inflation */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D49A70] tracking-wider uppercase border-b border-[#C28251]/30 pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C28251]" />
            <span>{lang === 'tr' ? '12+ Yıl Cerrahi Uzmanlık · 5.000+ Başarılı DHI Operasyonu' : '12+ Years Surgical Excellence · 5,000+ Completed DHI Procedures'}</span>
          </div>

          {/* H1: Editorial Serif Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-editorial font-normal tracking-tight text-white leading-[1.12]">
            {lang === 'fr' ? (
              <>L&apos;Art de la Greffe DHI <span className="italic text-[#D49A70]">sous Contrôle Médical</span> à Antalya</>
            ) : lang === 'tr' ? (
              <>Antalya&apos;da <span className="italic text-[#D49A70]">Doktor Kontrollü</span> Lüks DHI Saç Restorasyonu</>
            ) : (
              <>The Art of Natural Hair Restoration <span className="italic text-[#D49A70]">in Antalya</span></>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
            {t(lang as Lang, 'hero.subtitle')}
          </p>

          {/* Single Transparent Price Anchor */}
          {mounted && (
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 text-xs text-stone-400 font-medium">
                <span>{lang === 'tr' ? 'Şeffaf Paket Başlangıcı:' : lang === 'fr' ? 'Forfait Tout Compris dès:' : 'All-Inclusive Packages from:'}</span>
                <span className="text-[#E8C5A8] font-bold text-sm tracking-tight">{priceFormatted}</span>
                <span className="text-stone-500">· {lang === 'tr' ? 'Otel ve VIP Transfer Dahil' : 'VIP Transfer & 5-Star Stay Included'}</span>
              </div>
            </div>
          )}

          {/* Primary High-Ticket Consultation Action (Warm Copper CTA) */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 max-w-lg mx-auto lg:mx-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-[#C28251] hover:bg-[#A36538] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t(lang as Lang, 'hero.cta_whatsapp')}</span>
            </a>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full sm:w-auto min-h-[52px] px-6 py-3.5 border border-[#4D453E] hover:border-[#C28251] text-stone-200 hover:text-white font-medium text-xs rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>{t(lang as Lang, 'hero.cta_analysis')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D49A70]" />
            </a>
          </div>

        </div>

        {/* Right Column: Clean Visual Trust Photo */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-[#332E2A] shadow-2xl bg-[#211E1B] group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Medical Consultation"
              className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-103 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-[#161412]/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-editorial text-lg sm:text-xl text-white leading-tight">
                {lang === 'tr' ? 'Birebir Hekim Muayenesi & Ön Saç Çizgisi Tasarımı' : 'In-Person Surgeon Consultation & Hairline Artistry'}
              </h3>
              <p className="text-xs text-stone-300 font-normal mt-1">
                {lang === 'tr' ? 'T.C. Sağlık Bakanlığı ruhsatlı anlaşmalı sağlık kuruluşlarında steril operasyon.' : 'Procedures performed in licensed healthcare facilities in Antalya, Turkey.'}
              </p>
            </div>
          </div>

          {/* 3 Minimalist Provenance Tags */}
          <div className="grid grid-cols-3 gap-2 text-[11px] font-medium text-stone-300">
            <div className="bg-[#211E1B] border border-[#332E2A] p-2.5 rounded-xl text-center">
              <span className="text-[#D49A70] block font-bold">100%</span>
              <span className="text-[10px] text-stone-400">Choi Pen DHI</span>
            </div>
            <div className="bg-[#211E1B] border border-[#332E2A] p-2.5 rounded-xl text-center">
              <span className="text-[#D49A70] block font-bold">VIP</span>
              <span className="text-[10px] text-stone-400">Mercedes Transfer</span>
            </div>
            <div className="bg-[#211E1B] border border-[#332E2A] p-2.5 rounded-xl text-center">
              <span className="text-[#D49A70] block font-bold">12 Mo.</span>
              <span className="text-[10px] text-stone-400">Medical Follow-up</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
