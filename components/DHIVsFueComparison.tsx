'use client';

import { useSiteContext } from '@/lib/context';
import { Sparkles, Check } from 'lucide-react';

export default function DHIVsFueComparison() {
  const { lang } = useSiteContext();

  const comparisonData = [
    {
      feature: lang === 'tr' ? 'İmplantasyon Aracı' : 'Implantation Tool',
      dhi: 'Choi Implanter Pen (0.6mm - 0.8mm)',
      fue: 'Micro-blade Incision & Forceps'
    },
    {
      feature: lang === 'tr' ? 'Kanal Açma İşlemi' : 'Channel Incisions',
      dhi: lang === 'tr' ? 'Doğrudan Tek Adımda Ekim' : 'Direct Single-Step Placement',
      fue: lang === 'tr' ? 'Önceden Neşterle Kanal Açımı' : 'Pre-Cut Scalp Incisions'
    },
    {
      feature: lang === 'tr' ? 'Tıraşsız Ekim Seçeneği' : 'No-Shave Recipient Area',
      dhi: lang === 'tr' ? 'Tam Uyumlu (Tıraşsız Protokol)' : '100% Available (No-Shave Protocol)',
      fue: lang === 'tr' ? 'Genellikle Tüm Baş Tıraşı' : 'Full Scalp Shave Typically Required'
    },
    {
      feature: lang === 'tr' ? 'Maksimum Yoğunluk (cm²)' : 'Maximum Density per cm²',
      dhi: '55–75 Grafts / cm²',
      fue: '35–45 Grafts / cm²'
    },
    {
      feature: lang === 'tr' ? 'Açı ve Yön Kontrolü' : 'Angle & Direction Precision',
      dhi: lang === 'tr' ? 'Mikroskobik Açı Kontrolü (40-45°)' : 'Microscopic Natural Angle (40-45°)',
      fue: lang === 'tr' ? 'Standart Manuel Açı' : 'Manual Slit Approximation'
    },
    {
      feature: lang === 'tr' ? 'İlk İyileşme Süresi' : 'Initial Recovery Window',
      dhi: '3–5 Days',
      fue: '8–14 Days'
    }
  ];

  return (
    <section id="dhi-vs-fue" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Teknik Karşılaştırma' : 'Technical Comparison'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {lang === 'tr' ? "DHI Choi Pen ile Klasik FUE Karşılaştırması" : "Choi Pen DHI vs Traditional FUE Technique"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {lang === 'tr' ? "Choi Pen DHI teknolojisi ile klasik kesili teknikler arasındaki temel klinik farklar." : "Clinical differences between direct Choi Implanter DHI and standard slit FUE procedures."}
          </p>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-3 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-extrabold border-b border-slate-800">
            <div>{lang === 'tr' ? 'Klinik Parametre' : 'Clinical Parameter'}</div>
            <div className="text-emerald-400 text-center font-bold">DHI Choi Pen Protocol</div>
            <div className="text-slate-300 text-center font-medium">Traditional FUE</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="text-slate-900 font-bold">{row.feature}</div>
                <div className="text-center text-emerald-900 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-200 flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{row.dhi}</span>
                </div>
                <div className="text-center text-slate-500 font-medium">{row.fue}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
