'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function DHIAdvantages() {
  const { lang } = useSiteContext();
  
  const advantages = {
    title: t(lang as Lang, 'advantages.title') || 'Why Choose DHI Technique?',
    items: [
      {
        id: 'no-shave',
        title: t(lang as Lang, 'advantages.items.no_shave.title') || 'No-Shave Option',
        description: t(lang as Lang, 'advantages.items.no_shave.description') || 'Perfect for long hair. Implantation can be done without completely shaving the recipient area.'
      },
      {
        id: 'natural-angle',
        title: t(lang as Lang, 'advantages.items.natural_angle.title') || 'Natural Angle Control',
        description: t(lang as Lang, 'advantages.items.natural_angle.description') || 'The Choi Pen allows precise control over depth, angle, and direction of each implanted follicle.'
      },
      {
        id: 'high-density',
        title: t(lang as Lang, 'advantages.items.high_density.title') || 'High-Density Placement',
        description: t(lang as Lang, 'advantages.items.high_density.description') || 'Provides maximum density compared to traditional methods by placing grafts closer together.'
      },
      {
        id: 'fast-recovery',
        title: t(lang as Lang, 'advantages.items.fast_recovery.title') || 'Faster Recovery',
        description: t(lang as Lang, 'advantages.items.fast_recovery.description') || 'Minimal tissue trauma means less bleeding, faster healing, and no scarring.'
      }
    ]
  };

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
    <section className="w-full bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-12">
          {advantages.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.items.map((item: any) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                {icons[item.id as keyof typeof icons]}
              </div>
              <h3 className="font-black text-base text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
