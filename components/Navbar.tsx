'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

const LANG_OPTIONS: { lang: Lang; label: string; flag: string; symbol: string }[] = [
  { lang: 'en', label: 'EN', flag: '🇬🇧', symbol: '£' },
  { lang: 'fr', label: 'FR', flag: '🇫🇷', symbol: '€' },
  { lang: 'tr', label: 'TR', flag: '🇹🇷', symbol: '₺' },
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
            <Link href="#process" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.process}</Link>
            <Link href="#packages" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.packages}</Link>
            <Link href="#results" className="text-slate-300 hover:text-white font-semibold transition-colors">{nav.results}</Link>
          </div>

          {/* Right Section: Desktop Language/Currency Pill & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Minimalist Combined Language + Currency Selector */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.lang}
                  onClick={() => setLang(opt.lang)}
                  className={`min-h-[38px] px-3 text-xs font-black rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    lang === opt.lang
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.label}</span>
                  <span className="text-[10px] opacity-75 font-semibold">({opt.symbol})</span>
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

          {/* Mobile Right Section: DIRECT MINIMAL LANGUAGE TOGGLE + Hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Direct Minimal Mobile Language Toggle (ALWAYS VISIBLE OUTSIDE HAMBURGER) */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.lang}
                  onClick={() => setLang(opt.lang)}
                  className={`px-2 py-1 text-[11px] font-black rounded-lg transition-all flex items-center gap-0.5 ${
                    lang === opt.lang
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.symbol}</span>
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
            <Link href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900">{nav.process}</Link>
            <Link href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900">{nav.packages}</Link>
            <Link href="#results" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900">{nav.results}</Link>
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
