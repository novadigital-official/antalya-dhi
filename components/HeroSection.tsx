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
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-14 relative overflow-hidden bg-[#EFE7D8]">
      <div className="wrap">
        
        {/* Eyebrow with leading rule */}
        <div className="eyebrow mb-6">
          {eyebrowText}
        </div>

        {/* Main H1 Headline with Fraunces & Italic Bronze */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-[#17231C] leading-[1.06] max-w-3xl tracking-tight">
          {lang === 'fr' ? (
            <>Restaurez la densité de vos cheveux de manière <em className="italic text-[#A9662F]">mesurable</em>.</>
          ) : lang === 'tr' ? (
            <>Saçının yoğunluğunu<br /><em className="italic text-[#A9662F]">ölçülebilir</em> şekilde geri kazan.</>
          ) : (
            <>Restore your hair density with <em className="italic text-[#A9662F]">measurable</em> precision.</>
          )}
        </h1>

        {/* Lead Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#4A5A4D] max-w-xl leading-relaxed">
          {t(lang as Lang, 'hero.subtitle')}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
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
          <div className="mt-7 flex items-baseline gap-2.5 font-mono">
            <span className="text-xl sm:text-2xl font-semibold text-[#17231C]">{priceFormatted}&apos;den</span>
            <span className="text-xs text-[#4A5A4D] uppercase tracking-wider">{priceLabel}</span>
          </div>
        )}

        {/* 48x16 Follicle Density Field */}
        <DensityField />

        {/* Credential Strip with Sage Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#4A5A4D] font-medium">
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
