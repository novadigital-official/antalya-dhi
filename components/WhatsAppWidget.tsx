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
    en: 'Hello, I would like to get information about DHI hair transplant packages in Antalya.',
    fr: 'Bonjour, je souhaite obtenir des informations sur les forfaits de greffe DHI à Antalya.',
    tr: 'Merhaba, Antalya DHI saç ekimi paketleri hakkında bilgi almak istiyorum.',
  }[lang as Lang] || 'Hello, I would like to get information about DHI hair transplant packages in Antalya.';

  const url = `https://wa.me/905551234567?text=${encodeURIComponent(msg)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-emerald-600 text-white font-black px-6 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all min-h-[48px] items-center justify-center cursor-pointer"
    >
      WhatsApp
    </a>
  );
}
