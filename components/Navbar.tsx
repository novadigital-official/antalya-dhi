'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const { lang, setLang } = useSiteContext();

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaText = {
    tr: 'Ücretsiz Analiz',
    en: 'Free Analysis',
    fr: 'Analyse Gratuite',
  }[lang as Lang] || 'Free Analysis';

  const languages: { code: Lang; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'tr', label: 'TR', name: 'Türkçe' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-2xs w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        
        {/* Brand Logo with Custom Vector SVG Crest */}
        <Link href="/" className="shrink-0">
          <BrandLogo variant="dark" size="md" />
        </Link>

        {/* Center Nav Links (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-600">
          <a href="#comparison" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Karşılaştırma' : lang === 'fr' ? 'Comparatif' : 'Comparison'}
          </a>
          <a href="#results" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Hasta Yolculuğu' : lang === 'fr' ? 'Parcours Patient' : 'Patient Journey'}
          </a>
          <a href="#packages" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Şeffaf Paketler' : lang === 'fr' ? 'Forfaits' : 'Packages'}
          </a>
          <a href="#graft-guide" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Greft Rehberi' : lang === 'fr' ? 'Guide Greffons' : 'Graft Guide'}
          </a>
          <a href="#care-guide" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Bakım Rehberi' : lang === 'fr' ? 'Guide Soins' : 'Care Guide'}
          </a>
          <a href="#location-protocol" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Lokasyon' : lang === 'fr' ? 'Localisation' : 'Location'}
          </a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
        </nav>

        {/* Right Controls: Circular Flag Selector & Primary CTA */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Circular Flags Language Selector */}
          <div className="flex items-center bg-slate-100 border border-slate-200/90 rounded-full p-0.5 sm:p-1 gap-0.5 sm:gap-1 shadow-2xs">
            {languages.map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  title={item.name}
                  className={`flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all cursor-pointer text-[10px] sm:text-xs font-bold ${
                    isActive
                      ? 'bg-white text-emerald-800 shadow-xs ring-1 ring-emerald-500/30'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {/* Round Flag Icon */}
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-black/10">
                    {item.code === 'en' && (
                      <svg className="w-full h-full object-cover" viewBox="0 0 60 30">
                        <clipPath id="s_nav">
                          <path d="M0,0 v30 h60 v-30 z"/>
                        </clipPath>
                        <clipPath id="t_nav">
                          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                        </clipPath>
                        <g clipPath="url(#s_nav)">
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t_nav)" stroke="#C8102E" strokeWidth="4"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                        </g>
                      </svg>
                    )}
                    {item.code === 'fr' && (
                      <svg className="w-full h-full object-cover" viewBox="0 0 3 2">
                        <rect width="1" height="2" fill="#002654"/>
                        <rect x="1" width="1" height="2" fill="#FFFFFF"/>
                        <rect x="2" width="1" height="2" fill="#CE1126"/>
                      </svg>
                    )}
                    {item.code === 'tr' && (
                      <svg className="w-full h-full object-cover" viewBox="0 0 1200 800">
                        <rect width="1200" height="800" fill="#E30A17"/>
                        <circle cx="425" cy="400" r="200" fill="#FFFFFF"/>
                        <circle cx="475" cy="400" r="160" fill="#E30A17"/>
                        <polygon points="583.3,400 706.7,440.1 630.5,335.3 630.5,464.7 706.7,359.9" fill="#FFFFFF"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Primary Consultation CTA Button */}
          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-3.5 py-2 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:scale-102 active:scale-98 cursor-pointer hidden md:flex items-center gap-1.5"
          >
            <span>{ctaText}</span>
          </a>

        </div>

      </div>
    </header>
  );
}
