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

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md p-2.5 border-t border-slate-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Left: WhatsApp Consultant */}
        <a
          href="https://wa.me/905551234567?text=Hello%20Antalya%20DHI,%20I%20would%20like%20to%20consult%20via%20WhatsApp."
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
