'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function MobileStickyBar() {
  const { lang } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const waMsg = encodeURIComponent(
    lang === 'tr'
      ? 'Merhaba, Antalya DHI klinik web siteniz üzerinden ulaştım. Ücretsiz saç analizi ve doktor değerlendirmesi almak istiyorum.'
      : lang === 'fr'
      ? 'Bonjour, je vous contacte via le site web officiel de la clinique Antalya DHI. Je souhaite obtenir une analyse gratuite du cuir chevelu.'
      : 'Hello, I am contacting you via your official Antalya DHI Clinic website. I would like to get a free scalp analysis and doctor evaluation.'
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md p-2.5 border-t border-slate-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Left: WhatsApp Consultant */}
        <a
          href={`https://wa.me/905070871789?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Consultant"
          className="w-[42%] bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs min-h-[48px] px-2 rounded-xl flex items-center justify-center text-center shadow-md active:scale-95 transition-transform"
        >
          <span>💬 {t(lang as Lang, 'mobile_cta.whatsapp')}</span>
        </a>

        {/* Right: Free Hair Analysis */}
        <a
          href="#analysis-wizard"
          onClick={scrollToWizard}
          aria-label="Free DHI Hair Analysis"
          className="w-[58%] bg-blue-600 hover:bg-blue-500 text-white font-black text-xs min-h-[48px] px-2 rounded-xl flex items-center justify-center text-center shadow-md active:scale-95 transition-transform"
        >
          <span>⚡ {t(lang as Lang, 'mobile_cta.analysis')}</span>
        </a>
      </div>
    </div>
  );
}
