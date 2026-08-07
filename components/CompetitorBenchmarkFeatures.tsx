'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function CompetitorBenchmarkFeatures() {
  const { lang } = useSiteContext();

  const features = [
    {
      title: t(lang as Lang, 'competitor.f1.title'),
      desc: t(lang as Lang, 'competitor.f1.desc'),
      icon: '💉',
      badge: 'Pain-Free Anesthesia'
    },
    {
      title: t(lang as Lang, 'competitor.f2.title'),
      desc: t(lang as Lang, 'competitor.f2.desc'),
      icon: '🔬',
      badge: 'ATP Follicle Nutrition'
    },
    {
      title: t(lang as Lang, 'competitor.f3.title'),
      desc: t(lang as Lang, 'competitor.f3.desc'),
      icon: '🩸',
      badge: 'Rapid Tissue Repair'
    },
    {
      title: t(lang as Lang, 'competitor.f4.title'),
      desc: t(lang as Lang, 'competitor.f4.desc'),
      icon: '🔍',
      badge: 'Microscopic Mapping'
    }
  ];

  return (
    <div id="medical-standards" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
          GOLD MEDICAL STANDARDS
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'competitor.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'competitor.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 font-black text-lg flex items-center justify-center border border-emerald-100">
                  {item.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-base font-black text-slate-900 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-slate-400">
              <span>Standard Feature</span>
              <span className="text-emerald-600 font-black">✓ Included</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
