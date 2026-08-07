'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { currencySymbols, Currency } from '@/lib/currency';

export default function Navbar() {
  const { lang, setLang, currency, setCurrency } = useSiteContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Safe fallback if translations are not fully defined in a real app yet
  const nav = { home: t(lang as Lang, 'nav.home'), packages: t(lang as Lang, 'nav.packages'), results: t(lang as Lang, 'nav.results'), contact: t(lang as Lang, 'nav.contact'), freeConsultation: t(lang as Lang, 'nav.freeConsultation') };

  if (!mounted) {
    return <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 h-[73px]"></nav>;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-black text-white tracking-tight">
              ANTALYA <span className="text-amber-500">DHI</span>
            </Link>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white font-medium transition-colors">{nav.home}</Link>
            <Link href="#packages" className="text-slate-300 hover:text-white font-medium transition-colors">{nav.packages}</Link>
            <Link href="#results" className="text-slate-300 hover:text-white font-medium transition-colors">{nav.results}</Link>
            <Link href="#contact" className="text-slate-300 hover:text-white font-medium transition-colors">{nav.contact}</Link>
          </div>

          {/* Right Section: Selectors & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Lang Selector */}
            <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
              {(['en', 'fr', 'tr'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`min-h-[48px] px-3 py-1 text-sm font-bold rounded-md transition-colors uppercase ${
                    lang === l ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Currency Selector */}
            <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
              {(['GBP', 'EUR', 'USD', 'TRY'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`min-h-[48px] px-3 py-1 text-sm font-bold rounded-md transition-colors ${
                    currency === c ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {currencySymbols[c]}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link 
              href="#calculator"
              className="min-h-[48px] inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              {nav.freeConsultation}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[48px] inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-slate-800">{nav.home}</Link>
            <Link href="#packages" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">{nav.packages}</Link>
            <Link href="#results" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">{nav.results}</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">{nav.contact}</Link>
          </div>
          
          <div className="pt-4 border-t border-slate-800">
            <div className="flex space-x-2 mb-4">
              {(['en', 'fr', 'tr'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                  className={`min-h-[48px] flex-1 py-2 text-sm font-bold rounded-md uppercase ${
                    lang === l ? 'bg-slate-700 text-white' : 'text-slate-400 bg-slate-800'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-2 mb-4">
              {(['GBP', 'EUR', 'USD', 'TRY'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => { setCurrency(c); setIsMobileMenuOpen(false); }}
                  className={`min-h-[48px] flex-1 py-2 text-sm font-bold rounded-md ${
                    currency === c ? 'bg-slate-700 text-white' : 'text-slate-400 bg-slate-800'
                  }`}
                >
                  {currencySymbols[c]}
                </button>
              ))}
            </div>

            <Link 
              href="#calculator"
              className="min-h-[48px] w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700"
            >
              {nav.freeConsultation}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
