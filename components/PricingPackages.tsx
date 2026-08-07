'use client';

import React from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice, currencySymbols, Currency } from '@/lib/currency';

export default function PricingPackages() {
  const { lang, currency } = useSiteContext();


  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {t(lang as Lang, 'packages.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t(lang as Lang, 'packages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard DHI Package */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col h-full shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {t(lang as Lang, 'packages.standard_title')}
            </h3>
            <div className="my-6">
              <span className="text-4xl font-black text-slate-900">
                {formatPrice(PRICES.standard[currency as Currency], currency as Currency)}
              </span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {(t(lang as Lang, 'packages.standard_includes') || '').split('|').map((item: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <svg className="h-6 w-6 text-emerald-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">{item.trim()}</span>
                </li>
              ))}
            </ul>

            <button className="w-full min-h-[48px] border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center">
              Book Free Consultation
            </button>
          </div>

          {/* VIP All-Inclusive DHI Package */}
          <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8 flex flex-col h-full shadow-xl relative text-white">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="bg-amber-500 text-slate-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {t(lang as Lang, 'packages.vip_title')}
            </h3>
            <div className="my-6">
              <span className="text-4xl font-black text-amber-400">
                {formatPrice(PRICES.vip[currency as Currency], currency as Currency)}
              </span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {(t(lang as Lang, 'packages.vip_includes') || '').split('|').map((item: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">{item.trim()}</span>
                </li>
              ))}
            </ul>

            <button className="w-full min-h-[48px] bg-amber-500 text-slate-900 font-black rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
