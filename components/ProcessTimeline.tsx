'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function ProcessTimeline() {
  const { lang } = useSiteContext();

  const steps = [
    {
      num: t(lang as Lang, 'process.step1.num'),
      title: t(lang as Lang, 'process.step1.title'),
      desc: t(lang as Lang, 'process.step1.desc'),
    },
    {
      num: t(lang as Lang, 'process.step2.num'),
      title: t(lang as Lang, 'process.step2.title'),
      desc: t(lang as Lang, 'process.step2.desc'),
    },
    {
      num: t(lang as Lang, 'process.step3.num'),
      title: t(lang as Lang, 'process.step3.title'),
      desc: t(lang as Lang, 'process.step3.desc'),
    },
    {
      num: t(lang as Lang, 'process.step4.num'),
      title: t(lang as Lang, 'process.step4.title'),
      desc: t(lang as Lang, 'process.step4.desc'),
    },
  ];

  return (
    <div id="process" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'process.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'process.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white font-black text-sm flex items-center justify-center mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <span>Step {idx + 1} of 4</span>
              <span className="text-blue-600 font-bold">&#10003;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
