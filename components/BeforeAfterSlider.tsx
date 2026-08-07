'use client';

import React from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

const PATIENTS = [
  { location: 'London, UK', grafts: '3,500', time: '8 Months' },
  { location: 'Paris, France', grafts: '4,200', time: '12 Months' },
  { location: 'Istanbul, Turkey', grafts: '3,000', time: '6 Months' },
];

export default function BeforeAfterSlider() {
  const { lang } = useSiteContext();


  return (
    <section className="py-24 bg-white" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            {t(lang as Lang, 'results.title') || 'Real Patient Results'}
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
          {PATIENTS.map((patient, idx) => (
            <div key={idx} className="min-w-[320px] md:min-w-[400px] flex-none snap-center flex flex-col gap-4">
              <div className="h-48 rounded-2xl overflow-hidden flex w-full relative">
                {/* Before Side */}
                <div className="w-1/2 bg-gradient-to-br from-slate-300 to-slate-400 relative border-r border-white/20">
                  <div className="absolute top-3 left-3 bg-slate-900/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-bold tracking-wider">BEFORE</span>
                  </div>
                </div>
                {/* After Side */}
                <div className="w-1/2 bg-gradient-to-br from-amber-100 to-amber-200 relative">
                  <div className="absolute top-3 right-3 bg-amber-500 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-slate-900 text-xs font-black tracking-wider">AFTER</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <p className="text-slate-900 font-semibold">Patient from {patient.location}</p>
                <p className="text-slate-500 text-sm">{patient.grafts} Grafts, {patient.time} Post-Op</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
