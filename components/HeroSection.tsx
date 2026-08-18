'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';
import DensityField from './DensityField';

export default function HeroSection() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const priceFormatted = mounted ? formatPrice(PRICES.standard[currency], currency) : '₺90.000';

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

  const eyebrowText = {
    tr: 'T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Klinikler · 12+ Yıl Cerrahi Deneyim',
    en: 'T.C. Ministry of Health Licensed Facilities · 12+ Years Surgical Practice',
    fr: 'Établissements Agréés par le Ministère de la Santé · 12+ Ans de Pratique',
  }[lang as Lang] || 'T.C. Ministry of Health Licensed Facilities · 12+ Years Experience';

  const priceLabel = {
    tr: 'Şeffaf paket fiyatı — gizli maliyet yok',
    en: 'Transparent all-inclusive rate — zero hidden costs',
    fr: 'Tarif forfaitaire transparent — aucun frais caché',
  }[lang as Lang] || 'Transparent all-inclusive rate — zero hidden costs';

  const ctaPrimary = {
    tr: 'Saç Analizini Başlat →',
    en: 'Start Hair Analysis →',
    fr: 'Démarrer l\'Analyse →',
  }[lang as Lang] || 'Start Hair Analysis →';

  const ctaSecondary = {
    tr: 'WhatsApp ile Ön Değerlendirme',
    en: 'WhatsApp Evaluation',
    fr: 'Évaluation via WhatsApp',
  }[lang as Lang] || 'WhatsApp Evaluation';

  const cred1 = { tr: 'Uluslararası hasta koordinasyonu', en: 'International patient coordination', fr: 'Coordination patient internationale' }[lang as Lang] || 'International coordination';
  const cred2 = { tr: 'İngilizce & Fransızca destek', en: 'Native English & French support', fr: 'Support en Français & Anglais' }[lang as Lang] || 'English & French support';
  const cred3 = { tr: 'Sertifikalı DHI cerrahi ekibi', en: 'Certified DHI surgical team', fr: 'Équipe chirurgicale DHI certifiée' }[lang as Lang] || 'Certified surgical team';

  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 relative overflow-hidden bg-[#EFE7D8] border-b border-[rgba(23,35,28,0.12)]">
      <div className="wrap">
        
        {/* Eyebrow with leading rule */}
        <div className="eyebrow mb-6">
          {eyebrowText}
        </div>

        {/* 2-Column Hero: Left Headline/Actions + Right Clinic Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main H1 Headline with Fraunces & Italic Bronze */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#17231C] leading-[1.06] tracking-tight">
              {lang === 'fr' ? (
                <>Restaurez la densité de vos cheveux de manière <em className="italic text-[#A9662F]">mesurable</em>.</>
              ) : lang === 'tr' ? (
                <>Saçının yoğunluğunu<br /><em className="italic text-[#A9662F]">ölçülebilir</em> şekilde geri kazan.</>
              ) : (
                <>Restore your hair density with <em className="italic text-[#A9662F]">measurable</em> precision.</>
              )}
            </h1>

            {/* Lead Subtitle */}
            <p className="text-base sm:text-lg text-[#4A5A4D] max-w-xl leading-relaxed">
              {t(lang as Lang, 'hero.subtitle')}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#analysis-wizard"
                onClick={scrollToWizard}
                className="btn-stone-primary text-sm sm:text-base font-semibold px-7 py-4"
              >
                <span>{ctaPrimary}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-stone-ghost text-sm sm:text-base font-semibold px-7 py-4"
              >
                <span>{ctaSecondary}</span>
              </a>
            </div>

            {/* Monospace Price Tag */}
            {mounted && (
              <div className="pt-1 flex items-baseline gap-2.5 font-mono">
                <span className="text-xl sm:text-2xl font-semibold text-[#17231C]">{priceFormatted}&apos;den</span>
                <span className="text-xs text-[#4A5A4D] uppercase tracking-wider">{priceLabel}</span>
              </div>
            )}

          </div>

          {/* Right Column: Real Photographic Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-[4px] overflow-hidden border border-[rgba(23,35,28,0.18)] shadow-2xl bg-[#17231C] group">
              <img
                src="/images/clinic-consultation.jpg"
                alt="Antalya DHI Clinic Consultation"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-103 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17231C] via-[#17231C]/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-serif text-lg sm:text-xl text-[#EFE7D8] leading-tight font-semibold">
                  {lang === 'tr' ? 'Birebir Hekim Muayenesi & Ön Çizgi Tasarımı' : 'Surgeon Consultation & Hairline Artistry'}
                </h3>
                <p className="text-xs text-[#EFE7D8]/75 font-normal mt-1">
                  {lang === 'tr' ? 'T.C. Sağlık Bakanlığı ruhsatlı anlaşmalı sağlık kuruluşlarında steril operasyon.' : 'Procedures performed in licensed healthcare facilities in Antalya.'}
                </p>
              </div>
            </div>

            {/* 3 Minimalist Credential Tags */}
            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#17231C]">
              <div className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] p-2.5 rounded-[2px] text-center">
                <span className="text-[#A9662F] block font-bold">100%</span>
                <span className="text-[10px] text-[#4A5A4D]">Choi Pen DHI</span>
              </div>
              <div className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] p-2.5 rounded-[2px] text-center">
                <span className="text-[#A9662F] block font-bold">VIP</span>
                <span className="text-[10px] text-[#4A5A4D]">Mercedes Vito</span>
              </div>
              <div className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] p-2.5 rounded-[2px] text-center">
                <span className="text-[#A9662F] block font-bold">12 Ay</span>
                <span className="text-[10px] text-[#4A5A4D]">Medikal Takip</span>
              </div>
            </div>
          </div>

        </div>

        {/* 48x16 Follicle Density Field (Signature Visual Motif) */}
        <DensityField />

        {/* Credential Strip with Sage Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#4A5A4D] font-medium border-t border-[rgba(23,35,28,0.1)] pt-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7F63]" />
            <span>{cred1}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7F63]" />
            <span>{cred2}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7F63]" />
            <span>{cred3}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
