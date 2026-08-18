'use client';

import { useSiteContext } from '@/lib/context';

export default function DHIVsFueComparison() {
  const { lang } = useSiteContext();

  const comparisonData = [
    {
      feature: lang === 'tr' ? 'İmplantasyon Aracı' : 'Implantation Tool',
      dhi: 'Choi Implanter Pen (0.6mm - 0.8mm)',
      fue: 'Micro-blade / Forceps'
    },
    {
      feature: lang === 'tr' ? 'Kanal Açma İşlemi' : 'Channel Incisions',
      dhi: lang === 'tr' ? 'Doğrudan İmplantasyon' : 'Direct Implantation',
      fue: lang === 'tr' ? 'Önceden Kanal Açımı Gerekir' : 'Pre-cut Channel Incisions'
    },
    {
      feature: lang === 'tr' ? 'Tıraşsız Ekim Seçeneği' : 'No-Shave Recipient Area',
      dhi: lang === 'tr' ? 'Uygun (Tıraşsız Seçenek Mevcut)' : 'Available (No-Shave Protocol)',
      fue: lang === 'tr' ? 'Genellikle Tüm Saç Tıraş Edilir' : 'Full Shave Typically Required'
    },
    {
      feature: lang === 'tr' ? 'Maksimum Yoğunluk (cm²)' : 'Maximum Density per cm²',
      dhi: 'Up to 60–80 Grafts / cm²',
      fue: '40–50 Grafts / cm²'
    },
    {
      feature: lang === 'tr' ? 'Açı ve Yön Kontrolü' : 'Angle & Direction Precision',
      dhi: lang === 'tr' ? 'Yüksek Hassasiyetli Doğal Açı' : 'High Precision Natural Alignment',
      fue: lang === 'tr' ? 'Standart Açı Kontrolü' : 'Standard Alignment'
    },
    {
      feature: lang === 'tr' ? 'İlk İyileşme Süresi' : 'Initial Recovery Window',
      dhi: '3–5 Days',
      fue: '7–10 Days'
    }
  ];

  return (
    <div id="dhi-vs-fue" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {lang === 'tr' ? "DHI ile Klasik FUE Karşılaştırması" : "DHI vs Traditional FUE Comparison"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {lang === 'tr' ? "Choi Pen DHI teknolojisi ile klasik teknikler arasındaki klinik farklar." : "Clinical comparison between Choi Implanter DHI and standard FUE procedures."}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-3 bg-slate-950 text-white p-4 sm:p-5 text-xs sm:text-sm font-black border-b border-slate-800">
          <div>{lang === 'tr' ? 'Klinik Parametre' : 'Clinical Parameter'}</div>
          <div className="text-blue-400 text-center">DHI Technique</div>
          <div className="text-slate-400 text-center">Classic FUE</div>
        </div>

        <div className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 p-4 sm:p-5 items-center hover:bg-slate-50">
              <div className="text-slate-900 font-bold">{row.feature}</div>
              <div className="text-center text-blue-700 font-bold bg-blue-50/80 p-2 rounded-xl border border-blue-100">{row.dhi}</div>
              <div className="text-center text-slate-500 font-medium">{row.fue}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
