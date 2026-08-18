'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Sparkles, Check, X } from 'lucide-react';

export default function DHIVsFueComparison() {
  const { lang } = useSiteContext();

  const comparisonData = [
    {
      feature: { tr: 'İmplantasyon Aracı', en: 'Implantation Tool', fr: 'Outil d\'Implantation' },
      dhi: { tr: 'Choi Implanter Pen (0.6mm - 0.8mm)', en: 'Choi Implanter Pen (0.6mm - 0.8mm)', fr: 'Stylo Choi Implanter (0.6mm - 0.8mm)' },
      fue: { tr: 'Manuel Neşter Kesi & Penset', en: 'Micro-blade Incision & Forceps', fr: 'Incision Micro-lame & Pince' }
    },
    {
      feature: { tr: 'Kanal Açma İşlemi', en: 'Channel Incisions', fr: 'Incision Préalable des Canaux' },
      dhi: { tr: 'Doğrudan Tek Adımda Ekim (Kanal Yok)', en: 'Direct Single-Step Placement (No Incisions)', fr: 'Implantation Directe (Sans Fente)' },
      fue: { tr: 'Önceden Neşterle Kanal Açımı', en: 'Pre-Cut Scalp Incisions Required', fr: 'Ouverture Préalable de Canaux' }
    },
    {
      feature: { tr: 'Tıraşsız Ekim Seçeneği', en: 'No-Shave Recipient Area', fr: 'Option Sans Rasage' },
      dhi: { tr: '%100 Uygun (Tıraşsız Protokol)', en: '100% Available (No-Shave Protocol)', fr: '100% Disponible (Protocole Sans Rasage)' },
      fue: { tr: 'Genellikle Tüm Baş Tıraşı Gerekir', en: 'Full Scalp Shave Typically Required', fr: 'Rasage Intégral Généralement Requis' }
    },
    {
      feature: { tr: 'Maksimum Yoğunluk (cm²)', en: 'Maximum Density per cm²', fr: 'Densité Maximale par cm²' },
      dhi: { tr: '55–75 Greft / cm²', en: '55–75 Grafts / cm²', fr: '55–75 Greffons / cm²' },
      fue: { tr: '35–45 Greft / cm²', en: '35–45 Grafts / cm²', fr: '35–45 Greffons / cm²' }
    },
    {
      feature: { tr: 'Açı ve Yön Hassasiyeti', en: 'Angle & Direction Precision', fr: 'Précision de l\'Angle & Direction' },
      dhi: { tr: 'Mikroskobik Açı Kontrolü (40-45°)', en: 'Microscopic Natural Angle (40-45°)', fr: 'Orientation Naturelle Microscopique (40-45°)' },
      fue: { tr: 'Manuel Tahmini Kanal Açısı', en: 'Manual Slit Approximation', fr: 'Orientation Manuelle Approximative' }
    },
    {
      feature: { tr: 'İlk İyileşme Süresi', en: 'Initial Recovery Window', fr: 'Délai de Récupération Initial' },
      dhi: { tr: '3–5 Gün', en: '3–5 Days', fr: '3–5 Jours' },
      fue: { tr: '8–14 Gün', en: '8–14 Days', fr: '8–14 Jours' }
    }
  ];

  const col1 = { tr: 'Klinik Parametre', en: 'Clinical Parameter', fr: 'Paramètre Clinique' }[lang as Lang] || 'Clinical Parameter';
  const col2 = { tr: 'DHI Choi Pen Protokolü', en: 'DHI Choi Pen Protocol', fr: 'Protocole DHI Choi Pen' }[lang as Lang] || 'DHI Choi Pen Protocol';
  const col3 = { tr: 'Geleneksel FUE', en: 'Traditional FUE', fr: 'FUE Traditionnelle' }[lang as Lang] || 'Traditional FUE';

  return (
    <section id="dhi-vs-fue" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
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

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-3 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-extrabold border-b border-slate-800">
            <div>{col1}</div>
            <div className="text-emerald-400 text-center font-bold">{col2}</div>
            <div className="text-slate-300 text-center font-medium">{col3}</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="text-slate-900 font-bold">{row.feature[lang as Lang] || row.feature['en']}</div>
                <div className="text-center text-emerald-900 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 flex items-center justify-center gap-1.5 mx-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{row.dhi[lang as Lang] || row.dhi['en']}</span>
                </div>
                <div className="text-center text-slate-500 font-medium">{row.fue[lang as Lang] || row.fue['en']}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Responsive Cards */}
        <div className="md:hidden space-y-3.5 max-w-lg mx-auto">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-2.5">
              <div className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 border-b border-slate-100 pb-2">
                {row.feature[lang as Lang] || row.feature['en']}
              </div>

              <div className="space-y-2 text-xs">
                {/* DHI */}
                <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                  <span className="text-[10px] text-emerald-800 font-bold block mb-1">{col2}</span>
                  <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{row.dhi[lang as Lang] || row.dhi['en']}</span>
                  </div>
                </div>

                {/* FUE */}
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                  <span className="text-[10px] text-slate-500 font-bold block mb-1">{col3}</span>
                  <span className="text-slate-600 font-medium">{row.fue[lang as Lang] || row.fue['en']}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
