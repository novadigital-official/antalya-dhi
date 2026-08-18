'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { Sparkles, Scissors, Eye, Layers, Zap, Check } from 'lucide-react';

export default function DHIAdvantages() {
  const { lang } = useSiteContext();
  
  const advantages = [
    {
      id: 'no-shave',
      title: t(lang as Lang, 'advantages.items.no_shave.title') || 'No-Shave DHI Option',
      desc: t(lang as Lang, 'advantages.items.no_shave.description') || 'Direct implantation between existing hairs without shaving the recipient area.',
      icon: Scissors
    },
    {
      id: 'natural-angle',
      title: t(lang as Lang, 'advantages.items.natural_angle.title') || 'Microscopic Angle Control',
      desc: t(lang as Lang, 'advantages.items.natural_angle.description') || 'Direct placement with 40-45 degree natural orientation for seamless hairline density.',
      icon: Eye
    },
    {
      id: 'high-density',
      title: t(lang as Lang, 'advantages.items.high_density.title') || 'Maximum Density per cm²',
      desc: t(lang as Lang, 'advantages.items.high_density.description') || 'Placement of up to 55-65 grafts/cm² compared to traditional manual slit methods.',
      icon: Layers
    },
    {
      id: 'fast-recovery',
      title: t(lang as Lang, 'advantages.items.fast_recovery.title') || 'Rapid Scalp Recovery',
      desc: t(lang as Lang, 'advantages.items.fast_recovery.description') || 'No scalp incisions mean minimal tissue trauma, zero linear scarring, and fast healing.',
      icon: Zap
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-slate-950 text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'Choi Pen Avantajları' : 'Choi Pen Advantages'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {t(lang as Lang, 'advantages.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">
            {t(lang as Lang, 'advantages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-xl flex flex-col justify-between card-hover">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5 border border-blue-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Choi Implanter Protocol</span>
                  <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
