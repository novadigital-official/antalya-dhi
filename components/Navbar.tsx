'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';

export default function Navbar() {
  const { lang, setLang } = useSiteContext();

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const btnText = {
    tr: 'Fotoğrafını Gönder',
    en: 'Send Photos',
    fr: 'Envoyer Photos',
  }[lang as Lang] || 'Send Photos';

  return (
    <header className="sticky top-0 z-50 bg-[#EFE7D8]/90 backdrop-blur-md border-b border-[rgba(23,35,28,0.12)]">
      <div className="max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-serif font-semibold text-xl tracking-tight text-[#17231C] flex items-center gap-1.5">
          <span>ANTALYA</span>
          <span className="text-[#A9662F]">DHI</span>
        </Link>

        {/* Right Actions: Lang Switcher + Consultation CTA */}
        <div className="flex items-center gap-4">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-1 font-mono text-xs text-[#4A5A4D]">
            {(['tr', 'en', 'fr'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-[2px] transition-colors cursor-pointer uppercase ${
                  lang === l
                    ? 'bg-[#17231C] text-[#EFE7D8] font-semibold'
                    : 'hover:text-[#17231C] hover:bg-[#E4D9C4]/60'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary Navbar CTA */}
          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="btn-stone-ghost !py-2.5 !px-4 !text-xs !font-semibold hidden sm:inline-flex"
          >
            <span>{btnText}</span>
          </a>

        </div>

      </div>
    </header>
  );
}
