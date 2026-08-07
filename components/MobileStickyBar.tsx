'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const { lang } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getWhatsappMsg = () => {
    return {
      en: 'Hello, I would like to get information about DHI hair transplant packages in Antalya.',
      fr: 'Bonjour, je souhaite obtenir des informations sur les forfaits de greffe DHI à Antalya.',
      tr: 'Merhaba, Antalya DHI saç ekimi paketleri hakkında bilgi almak istiyorum.',
    }[lang as Lang] || 'Hello, I would like to get information about DHI hair transplant packages in Antalya.';
  };

  const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(getWhatsappMsg())}`;

  const ctaTranslations = {
    en: { freeAnalysis: 'Free DHI Analysis' },
    fr: { freeAnalysis: 'Analyse DHI Gratuite' },
    tr: { freeAnalysis: 'Ücretsiz DHI Analizi' },
  };

  const freeAnalysisText = t(lang as Lang, 'mobile_cta.free_analysis') || ctaTranslations[lang as Lang]?.freeAnalysis || 'Free DHI Analysis';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md p-2.5 border-t border-slate-800">
      <div className="flex gap-2">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[35%] bg-emerald-600 text-white font-black text-center py-3 rounded-xl text-sm min-h-[48px] flex items-center justify-center"
        >
          WhatsApp
        </a>
        <a 
          href="#calculator"
          className="w-[65%] bg-blue-600 text-white font-black text-center py-3 rounded-xl text-sm min-h-[48px] flex items-center justify-center"
        >
          {freeAnalysisText}
        </a>
      </div>
    </div>
  );
}
