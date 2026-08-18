'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Sparkles, Layers, Check, Calculator, Info } from 'lucide-react';

export default function GraftCalculatorGuide() {
  const { lang } = useSiteContext();

  const title = {
    tr: 'Greft & Saç Teli Hesaplama Tablosu',
    en: 'Graft & Hair Density Estimation Guide',
    fr: 'Guide d\'Estimation des Greffons & Densité',
  }[lang as Lang] || 'Graft & Hair Density Estimation Guide';

  const subtitle = {
    tr: '1 Greft ortalama 2.2 ila 2.4 saç teli içerir. Norwood dökülme evrenize göre tahmini greft ve saç teli ihtiyacınızı inceleyin.',
    en: '1 Graft contains an average of 2.2 to 2.4 hair strands. Review estimated graft and hair counts for your Norwood scale.',
    fr: '1 Greffon contient en moyenne 2,2 à 2,4 cheveux. Consultez les besoins estimés selon votre stade Norwood.',
  }[lang as Lang] || 'Graft and hair count estimation for your Norwood scale.';

  const norwoodRows = [
    {
      stage: 'Stage 1–2',
      area: { tr: 'Ön Çizgi & Şakaklar', en: 'Hairline & Temples', fr: 'Ligne Frontale & Golphes' },
      grafts: '1,500 – 2,000 Greft',
      hairs: '~3,500 – 4,500 Saç Teli',
      hours: '4 – 5 Saat',
      target: { tr: 'Hafif Şakak Düzeltme', en: 'Minor Temple Framing', fr: 'Légère Correction Frontale' }
    },
    {
      stage: 'Stage 3',
      area: { tr: 'Belirgin Şakak Açılması', en: 'Deepening Temples', fr: 'Recul Prononcé des Golphes' },
      grafts: '2,000 – 2,800 Greft',
      hairs: '~4,800 – 6,200 Saç Teli',
      hours: '5 – 6 Saat',
      target: { tr: 'Doğal Ön Çizgi Oluşturma', en: 'Natural Hairline Restoration', fr: 'Reconstruction Ligne Frontale' }
    },
    {
      stage: 'Stage 4',
      area: { tr: 'Ön Bölge & Tepe (Verteks) Başlangıcı', en: 'Frontal Area & Early Vertex', fr: 'Zone Frontale & Début Sommet' },
      grafts: '2,800 – 3,500 Greft',
      hairs: '~6,200 – 8,000 Saç Teli',
      hours: '6 – 7 Saat',
      target: { tr: 'Ön ve Tepe Yoğunluğu', en: 'Frontal & Crown Density', fr: 'Densité Front & Vertex' }
    },
    {
      stage: 'Stage 5',
      area: { tr: 'İleri Ön & Tepe Dökülmesi', en: 'Extensive Frontal & Crown', fr: 'Calvitie Avancée Front & Vertex' },
      grafts: '3,500 – 4,200 Greft',
      hairs: '~8,000 – 9,500 Saç Teli',
      hours: '6 – 8 Saat',
      target: { tr: 'Geniş Alan Homojen Kapama', en: 'Homogeneous Full Coverage', fr: 'Couverture Homogène Globale' }
    },
    {
      stage: 'Stage 6–7',
      area: { tr: 'Şiddetli Tam Saç Kaybı', en: 'Severe Extensive Loss', fr: 'Alopécie Sévère Évoluée' },
      grafts: '4,200 – 5,000+ Greft',
      hairs: '~9,500 – 11,500+ Saç Teli',
      hours: 'Mega Seans (7–8 Saat)',
      target: { tr: 'Maksimum Donör Kapasitesi', en: 'Max Donor Utilization', fr: 'Capacité Maximale Donneur' }
    }
  ];

  const col1 = { tr: 'Norwood Seviyesi', en: 'Norwood Stage', fr: 'Stade Norwood' }[lang as Lang] || 'Norwood Stage';
  const col2 = { tr: 'Ekim Alanı', en: 'Target Area', fr: 'Zone Cible' }[lang as Lang] || 'Target Area';
  const col3 = { tr: 'Gereken Greft', en: 'Required Grafts', fr: 'Greffons Requis' }[lang as Lang] || 'Required Grafts';
  const col4 = { tr: 'Toplam Saç Teli', en: 'Total Hair Strands', fr: 'Total Cheveux' }[lang as Lang] || 'Total Hair Strands';
  const col5 = { tr: 'Operasyon Süresi', en: 'Duration', fr: 'Durée' }[lang as Lang] || 'Duration';

  return (
    <section id="graft-guide" className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Greft Rehberi' : 'Graft Guide'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto bg-emerald-950 text-emerald-100 p-4 rounded-2xl flex items-center gap-3 text-xs border border-emerald-800 shadow-sm">
          <Info className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            {lang === 'tr'
              ? 'Önemli Bilgi: Greft ile Saç Teli aynı şey değildir. 1 Greft, folikül ünitesidir ve kök yapısına bağlı olarak 1 ila 4 arasında saç teli barındırır. 3.500 Greft yaklaşık 8.000 saç teline eşittir.'
              : 'Important Note: Grafts and hair strands are different. 1 Graft is a follicular unit containing 1 to 4 hairs. A 3,500 graft procedure yields approximately 8,000 individual hairs.'}
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold border-b border-slate-800">
            <div className="col-span-2 text-slate-300">{col1}</div>
            <div className="col-span-3 text-slate-300">{col2}</div>
            <div className="col-span-3 text-emerald-400 font-bold text-center">{col3}</div>
            <div className="col-span-2 text-center text-slate-300">{col4}</div>
            <div className="col-span-2 text-right text-slate-300">{col5}</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {norwoodRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50 transition-colors">
                <div className="col-span-2 font-bold text-slate-900">{row.stage}</div>
                <div className="col-span-3 text-slate-600 font-medium">{row.area[lang as Lang] || row.area['en']}</div>
                <div className="col-span-3 text-center font-extrabold text-emerald-900 bg-emerald-50 py-1.5 px-2 rounded-xl border border-emerald-200">
                  {row.grafts}
                </div>
                <div className="col-span-2 text-center text-slate-700 font-bold">{row.hairs}</div>
                <div className="col-span-2 text-right text-slate-500 font-medium">{row.hours}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3 max-w-lg mx-auto">
          {norwoodRows.map((row, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-2.5">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="font-heading font-extrabold text-sm text-slate-900">{row.stage}</span>
                <span className="text-[11px] font-bold text-slate-500">{row.hours}</span>
              </div>
              
              <div className="text-xs text-slate-600 font-medium">
                {row.area[lang as Lang] || row.area['en']}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-xl text-center">
                  <span className="text-[10px] text-emerald-800 font-bold block">{col3}</span>
                  <span className="font-extrabold text-xs text-emerald-950">{row.grafts}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block">{col4}</span>
                  <span className="font-extrabold text-xs text-slate-900">{row.hairs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
