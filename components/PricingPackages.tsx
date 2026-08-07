'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';

export default function PricingPackages() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const standardMain = mounted ? formatPrice(PRICES.standard[currency], currency) : '£1,550';
  const vipMain = mounted ? formatPrice(PRICES.vip[currency], currency) : '£1,900';

  const standardIncludes = t(lang as Lang, 'packages.standard_includes').split('|');
  const vipIncludes = t(lang as Lang, 'packages.vip_includes').split('|');

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="packages" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'packages.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'packages.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        
        {/* PACKAGE 1: STANDARD DHI */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                BASIC OPTION
              </span>
              <span className="text-xs font-bold text-slate-400">Surgery Only</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
              {t(lang as Lang, 'packages.standard_name')}
            </h3>
            <p className="text-xs text-slate-500 mb-4 font-medium">
              {t(lang as Lang, 'packages.standard_desc')}
            </p>

            <div className="mb-6 pb-6 border-b border-slate-100 space-y-1">
              <span className="text-xs text-slate-400 font-bold block">Total Package Rate</span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">{standardMain}</span>
                <span className="text-xs font-extrabold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  (€1,800 / £1,550 / ₺90.000)
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-700 font-semibold">
              {standardIncludes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="w-full min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl flex items-center justify-center transition-all cursor-pointer"
          >
            <span>{t(lang as Lang, 'packages.book_cta')}</span>
          </a>
        </div>

        {/* PACKAGE 2: VIP ANTALYA EXPERIENCE (MOST RECOMMENDED) */}
        <div className="bg-slate-950 text-white border-2 border-blue-600 rounded-3xl p-6 sm:p-8 shadow-xl relative flex flex-col justify-between space-y-6 transform md:-translate-y-2">
          {/* MOST RECOMMENDED BADGE */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
            {t(lang as Lang, 'packages.vip_popular')}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider">
                ALL-INCLUSIVE MEDICAL TOURISM
              </span>
              <span className="text-xs font-bold text-slate-400">Hotel & Transfer Included</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              {t(lang as Lang, 'packages.vip_name')}
            </h3>
            <p className="text-xs text-slate-300 mb-4 font-medium">
              {t(lang as Lang, 'packages.vip_desc')}
            </p>

            <div className="mb-6 pb-6 border-b border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-bold block">Total All-Inclusive Rate</span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-black text-blue-400">{vipMain}</span>
                <span className="text-xs font-extrabold text-blue-200 bg-blue-900/60 border border-blue-700/60 px-2.5 py-1 rounded-md">
                  (€2,200 / £1,900 / ₺110.000)
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-200 font-semibold">
              {vipIncludes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="w-full min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-98"
          >
            <span>{t(lang as Lang, 'packages.book_cta')}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
