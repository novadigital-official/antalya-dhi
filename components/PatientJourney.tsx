'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function PatientJourney() {
  const { lang } = useSiteContext();

  const journeySteps = [
    {
      step: '01',
      title: t(lang as Lang, 'journey.step1.title'),
      desc: t(lang as Lang, 'journey.step1.desc'),
      tag: 'VIP Transfer'
    },
    {
      step: '02',
      title: t(lang as Lang, 'journey.step2.title'),
      desc: t(lang as Lang, 'journey.step2.desc'),
      tag: 'Medical Evaluation'
    },
    {
      step: '03',
      title: t(lang as Lang, 'journey.step3.title'),
      desc: t(lang as Lang, 'journey.step3.desc'),
      tag: 'Choi Pen DHI'
    },
    {
      step: '04',
      title: t(lang as Lang, 'journey.step4.title'),
      desc: t(lang as Lang, 'journey.step4.desc'),
      tag: '12-Month Follow-up'
    }
  ];

  return (
    <div id="results" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          REAL PATIENT EXPERIENCE
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'journey.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'journey.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journeySteps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                  {item.step}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-base font-black text-slate-900 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span>Stage {idx + 1}</span>
              <span className="text-emerald-600 font-bold">Verified Procedure</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
