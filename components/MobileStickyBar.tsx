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
          className="w-[42%] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs min-h-[48px] px-2 rounded-xl flex items-center justify-center text-center shadow-md active:scale-98 transition-transform gap-1.5"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.22 4.299-1.127zm10.742-5.666c-.328-.164-1.944-.96-2.247-1.07-.303-.11-.523-.164-.743.164-.22.328-.852 1.07-1.043 1.289-.191.22-.383.247-.712.082-2.016-1.006-3.336-1.785-4.667-4.068-.352-.604.352-.561 1.007-1.87.11-.22.055-.412-.027-.577-.082-.164-.743-1.791-1.018-2.454-.268-.646-.541-.558-.743-.568l-.632-.011c-.22 0-.577.082-.879.412-.303.328-1.155 1.128-1.155 2.75 0 1.623 1.182 3.189 1.347 3.409.165.22 2.327 3.555 5.639 4.985 2.308.998 2.802.8 3.324.747.88-.09 1.944-.796 2.218-1.564.275-.769.275-1.428.192-1.564-.083-.137-.303-.22-.631-.384z"/>
          </svg>
          <span>{t(lang as Lang, 'mobile_cta.whatsapp')}</span>
        </a>

        {/* Right: Free Hair Analysis */}
        <a
          href="#analysis-wizard"
          onClick={scrollToWizard}
          aria-label="Free DHI Hair Analysis"
          className="w-[58%] bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs min-h-[48px] px-2 rounded-xl flex items-center justify-center text-center shadow-md active:scale-98 transition-transform"
        >
          <span>{t(lang as Lang, 'mobile_cta.analysis')}</span>
        </a>
      </div>
    </div>
  );
}
