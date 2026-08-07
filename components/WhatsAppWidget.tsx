'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
  const { lang } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const msg = {
    en: 'Hello Antalya DHI Clinic, I would like to get a free scalp analysis and doctor evaluation.',
    fr: 'Bonjour Antalya DHI Clinic, je souhaite obtenir une analyse gratuite et une évaluation médicale.',
    tr: 'Merhaba Antalya DHI Klinik, ücretsiz saç analizi ve doktor değerlendirmesi almak istiyorum.',
  }[lang as Lang] || 'Hello Antalya DHI Clinic, I would like to get a free scalp analysis and doctor evaluation.';

  const label = {
    en: 'Doctor Online — Chat on WhatsApp',
    fr: 'Médecin en Ligne — WhatsApp',
    tr: 'Doktor Online — WhatsApp İletişim',
  }[lang as Lang] || 'Doctor Online — Chat on WhatsApp';

  const url = `https://wa.me/905551234567?text=${encodeURIComponent(msg)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/30 hover:scale-105 transition-all flex items-center gap-2.5 border-2 border-emerald-400/40 cursor-pointer active:scale-95 group"
    >
      <span className="relative flex h-3 w-3 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <span className="text-xl">💬</span>
      <span className="text-xs font-black tracking-tight hidden sm:inline">{label}</span>
    </a>
  );
}
