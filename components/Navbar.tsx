'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

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
    tr: 'Ücretsiz Analiz Al',
    en: 'Free Scalp Analysis',
    fr: 'Analyse Gratuite',
  }[lang as Lang] || 'Free Scalp Analysis';

  const languages: { code: Lang; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'tr', label: 'TR', name: 'Türkçe' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-heading font-extrabold text-xl tracking-tight text-slate-900 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center text-white text-xs font-black shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            DHI
          </div>
          <span className="text-slate-900 font-extrabold tracking-tight">ANTALYA <span className="text-emerald-600">DHI</span></span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-600">
          <a href="#comparison" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Karşılaştırma' : lang === 'fr' ? 'Comparatif' : 'Comparison'}
          </a>
          <a href="#results" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Hasta Yolculuğu' : lang === 'fr' ? 'Parcours Patient' : 'Patient Journey'}
          </a>
          <a href="#packages" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? 'Şeffaf Paketler' : lang === 'fr' ? 'Forfaits' : 'Packages'}
          </a>
          <a href="#recovery-roadmap" className="hover:text-emerald-600 transition-colors">
            {lang === 'tr' ? '12 Ay Takvim' : lang === 'fr' ? 'Suivi 12 Mois' : '12-Mo Timeline'}
          </a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
        </nav>

        {/* Right Controls: Modern Circular Flag Selector & Primary CTA */}
        <div className="flex items-center gap-3">
          
          {/* Circular Flags Language Selector */}
          <div className="flex items-center bg-slate-100/90 border border-slate-200/90 rounded-full p-1 gap-1 shadow-2xs">
            {languages.map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  title={item.name}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all cursor-pointer text-xs font-bold ${
                    isActive
                      ? 'bg-white text-emerald-800 shadow-xs ring-1 ring-emerald-500/30'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {/* Round Flag Icon */}
                  <span className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-2xs border border-black/10">
                    {item.code === 'en' && (
                      <svg className="w-full h-full object-cover" viewBox="0 0 60 30">
                        <clipPath id="s">
                          <path d="M0,0 v30 h60 v-30 z"/>
                        </clipPath>
                        <clipPath id="t">
                          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                        </clipPath>
                        <g clipPath="url(#s)">
                          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
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
                  <span className="text-[11px] font-extrabold uppercase">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Primary Consultation CTA Button */}
          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:scale-102 active:scale-98 cursor-pointer hidden sm:flex items-center gap-1.5"
          >
            <span>{ctaText}</span>
          </a>

        </div>

      </div>
    </header>
  );
}
