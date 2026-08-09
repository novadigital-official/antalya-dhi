'use client';

import React from 'react';
import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

const PATIENTS = {
  tr: [
    { location: 'Londra, İngiltere', grafts: '3.500 Greft', time: 'Choi Pen DHI', desc: 'VIP Transfer & 5 Yıldızlı Konaklama' },
    { location: 'Paris, Fransa', grafts: '4.200 Greft', time: 'Tıraşsız DHI', desc: 'Tam Oksijen Terapisi' },
    { location: 'Frankfurt, Almanya', grafts: '3.800 Greft', time: 'Safir DHI', desc: 'İğnesiz Anestezi' },
  ],
  en: [
    { location: 'London, UK', grafts: '3,500 Grafts', time: 'Choi Pen DHI', desc: 'VIP Transfer & 5-Star Stay' },
    { location: 'Paris, France', grafts: '4,200 Grafts', time: 'No-Shave DHI', desc: 'Oxygenation Therapy Included' },
    { location: 'Frankfurt, Germany', grafts: '3,800 Grafts', time: 'Sapphire DHI', desc: 'Needle-Free Anesthesia' },
  ],
  fr: [
    { location: 'Londres, Royaume-Uni', grafts: '3 500 Greffons', time: 'Choi Pen DHI', desc: 'Transfert VIP & Hôtel 5 Étoiles' },
    { location: 'Paris, France', grafts: '4 200 Greffons', time: 'DHI Sans Raser', desc: 'Thérapie à l\'Oxygène' },
    { location: 'Francfort, Allemagne', grafts: '3 800 Greffons', time: 'DHI Saphir', desc: 'Anesthésie Sans Aiguille' },
  ]
};

export default function BeforeAfterSlider() {
  const { lang } = useSiteContext();
  const list = PATIENTS[lang as Lang] || PATIENTS.en;
  
  const title = {
    tr: 'VIP Hasta Deneyimi ve Saç Yoğunluk Portföyü',
    en: 'VIP Patient Journey & Density Portfolio',
    fr: 'Parcours Patients VIP & Portefeuille de Densité',
  }[lang as Lang] || 'VIP Patient Journey & Density Portfolio';

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col justify-between text-white mb-5">
                <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full w-fit">
                  {item.time}
                </span>
                <div>
                  <p className="text-2xl font-black text-white">{item.grafts}</p>
                  <p className="text-xs text-slate-300 font-medium">{item.desc}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-900 font-bold text-base">{item.location}</p>
                <p className="text-slate-500 text-xs mt-1">✓ T.C. Sağlık Bakanlığı Onaylı Anlaşmalı Klinik</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
