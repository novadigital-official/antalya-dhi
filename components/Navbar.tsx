'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

// Clean SVG Flags for 100% Cross-Platform Display (Windows, Mac, iOS, Android)
const FLAGS: { lang: Lang; label: string; symbol: string; flagSvg: React.ReactNode }[] = [
  {
    lang: 'en',
    label: 'EN',
    symbol: '£',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs shadow-xs object-cover" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="uk-clip"><rect width="60" height="30" rx="2"/></clipPath>
        <g clipPath="url(#uk-clip)">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0 0L60 30M60 0L0 30" stroke="#FFFFFF" strokeWidth="6"/>
          <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30 0V30M0 15H60" stroke="#FFFFFF" strokeWidth="10"/>
          <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    )
  },
  {
    lang: 'fr',
    label: 'FR',
    symbol: '€',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs shadow-xs object-cover" viewBox="0 0 3 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height="2" fill="#002395"/>
        <rect x="1" width="1" height="2" fill="#FFFFFF"/>
        <rect x="2" width="1" height="2" fill="#ED2939"/>
      </svg>
    )
  },
  {
    lang: 'tr',
    label: 'TR',
    symbol: '₺',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs shadow-xs object-cover" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#E30A17"/>
        <circle cx="425" cy="400" r="200" fill="#FFFFFF"/>
        <circle cx="475" cy="400" r="160" fill="#E30A17"/>
        <polygon points="587.5,400 706.7,438.7 633 337.3 633,462.7 706.7,361.3" fill="#FFFFFF"/>
      </svg>
    )
  }
];

export default function Navbar() {
  const { lang, setLang } = useSiteContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nav = {
    home: t(lang as Lang, 'nav.home'),
    packages: t(lang as Lang, 'nav.packages'),
    process: t(lang as Lang, 'nav.process'),
    results: t(lang as Lang, 'nav.results'),
    freeConsultation: t(lang as Lang, 'nav.freeConsultation'),
  };

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 h-[73px]"></nav>;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                DHI
              </span>
              <span>ANTALYA <span className="text-blue-500 font-extrabold">CLINIC</span></span>
            </Link>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.home}</Link>
            <Link href="#results" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.results}</Link>
            <Link href="#packages" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.packages}</Link>
            <Link href="#process" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.process}</Link>
          </div>

          {/* Right Section: Desktop Minimal Flag SVG Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Minimalist Flag SVG Selector */}
            <div className="flex bg-slate-900 border border-slate-800 p-1.5 rounded-2xl gap-1">
              {FLAGS.map((f) => (
                <button
                  key={f.lang}
                  onClick={() => setLang(f.lang)}
                  title={`${f.label} (${f.symbol})`}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                    lang === f.lang
                      ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {f.flagSvg}
                  <span>{f.label}</span>
                  <span className="text-[10px] opacity-75">({f.symbol})</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {nav.freeConsultation}
            </a>
          </div>

          {/* Mobile Right Section: DIRECT MINIMAL FLAG SVG SELECTOR + Hamburger */}
          <div className="flex items-center space-x-2.5 md:hidden">
            {/* Minimal Mobile Flag SVG Selector */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl gap-1">
              {FLAGS.map((f) => (
                <button
                  key={f.lang}
                  onClick={() => setLang(f.lang)}
                  title={f.label}
                  className={`px-2 py-1 text-xs font-black rounded-lg transition-all flex items-center gap-1 ${
                    lang === f.lang
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f.flagSvg}
                  <span className="text-[10px]">{f.symbol}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[44px] p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800/80 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-2 text-sm font-semibold">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-white bg-slate-900">{nav.home}</Link>
            <Link href="#results" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900">{nav.results}</Link>
            <Link href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900">{nav.packages}</Link>
            <Link href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900">{nav.process}</Link>
          </div>
          
          <div className="pt-4 border-t border-slate-800">
            <a
              href="#analysis-wizard"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                scrollToWizard(e);
              }}
              className="min-h-[48px] w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
            >
              {nav.freeConsultation}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
