'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function DHIAdvantages() {
  const { lang } = useSiteContext();
  
  const advantages = [
    {
      id: 'no-shave',
      title: t(lang as Lang, 'advantages.items.no_shave.title'),
      desc: t(lang as Lang, 'advantages.items.no_shave.description')
    },
    {
      id: 'natural-angle',
      title: t(lang as Lang, 'advantages.items.natural_angle.title'),
      desc: t(lang as Lang, 'advantages.items.natural_angle.description')
    },
    {
      id: 'high-density',
      title: t(lang as Lang, 'advantages.items.high_density.title'),
      desc: t(lang as Lang, 'advantages.items.high_density.description')
    },
    {
      id: 'fast-recovery',
      title: t(lang as Lang, 'advantages.items.fast_recovery.title'),
      desc: t(lang as Lang, 'advantages.items.fast_recovery.description')
    }
  ];

  const icons = {
    'no-shave': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    'natural-angle': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    'high-density': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    'fast-recovery': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div id="advantages" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          CHOI PEN ADVANTAGES
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {t(lang as Lang, 'advantages.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t(lang as Lang, 'advantages.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100 shadow-xs">
                {icons[item.id as keyof typeof icons]}
              </div>
              <h3 className="font-black text-base text-slate-900 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-blue-600">
              <span>DHI Choi Standard</span>
              <span>✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
