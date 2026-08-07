'use client';

import { useSiteContext } from '@/lib/context';

export default function DHIVsFueComparison() {
  const { lang } = useSiteContext();

  const comparisonData = [
    {
      feature: lang === 'tr' ? 'İmplantasyon Aracı' : 'Implantation Tool',
      dhi: 'Choi Implanter Pen (0.6mm - 0.8mm)',
      fue: 'Scalpel / Forceps (Classic Punch)'
    },
    {
      feature: lang === 'tr' ? 'Kanal Açma İşlemi' : 'Channel Incisions',
      dhi: lang === 'tr' ? 'Gerekmiyor (Doğrudan Ekim)' : 'Not Required (Direct Placement)',
      fue: lang === 'tr' ? 'Önceden Kesili Kanallar Açılır' : 'Pre-cut Channel Incisions Required'
    },
    {
      feature: lang === 'tr' ? 'Tıraşsız Ekim Seçeneği' : 'No-Shave Recipient Area',
      dhi: lang === 'tr' ? '✓ Evet (Tıraşsız Ekim İmkânı)' : '✓ Yes (No Shaving Needed)',
      fue: lang === 'tr' ? '✕ Hayır (Tüm Baş Tıraş Edilir)' : '✕ No (Full Head Shaved)'
    },
    {
      feature: lang === 'tr' ? 'Graft Yoğunluğu (cm²)' : 'Graft Density per cm²',
      dhi: '60 - 80 Grafts / cm²',
      fue: '40 - 50 Grafts / cm²'
    },
    {
      feature: lang === 'tr' ? 'Doğal Açı Kontrolü' : 'Angle & Direction Precision',
      dhi: lang === 'tr' ? '100% Tam Doğal Açı Kontrolü' : '100% Precise Angle Control',
      fue: lang === 'tr' ? 'Kısıtlı Yön Açısı' : 'Limited Angle Customization'
    },
    {
      feature: lang === 'tr' ? 'İyileşme Süreci' : 'Recovery Time',
      dhi: '3 - 5 Days',
      fue: '10 - 14 Days'
    }
  ];

  return (
    <div id="dhi-vs-fue" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          MEDICAL COMPARISON
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {lang === 'tr' ? "DHI ile Klasik FUE Arasındaki Farklar" : "DHI vs Traditional FUE Hair Transplant"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {lang === 'tr' ? "Neden Choi Pen DHI teknolojisinin daha doğal ve hızlı sonuçlar verdiğini görün." : "Compare why Choi Implanter Pen DHI yields higher graft density and natural angles."}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-3 bg-slate-950 text-white p-4 sm:p-5 text-xs sm:text-sm font-black border-b border-slate-800">
          <div>{lang === 'tr' ? 'Parametre' : 'Medical Parameter'}</div>
          <div className="text-blue-400 text-center">DHI Technique</div>
          <div className="text-slate-400 text-center">Classic FUE</div>
        </div>

        <div className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 p-4 sm:p-5 items-center hover:bg-slate-50">
              <div className="text-slate-900 font-bold">{row.feature}</div>
              <div className="text-center text-blue-700 font-black bg-blue-50/80 p-2 rounded-xl border border-blue-100">{row.dhi}</div>
              <div className="text-center text-slate-500 font-medium">{row.fue}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
