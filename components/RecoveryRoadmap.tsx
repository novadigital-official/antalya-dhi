'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Activity, Sparkles, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function RecoveryRoadmap() {
  const { lang } = useSiteContext();

  const title = {
    en: '12-Month Post-Op Recovery Roadmap',
    fr: 'Calendrier de Récupération sur 12 Mois',
    tr: '12 Aylık İyileşme ve Saç Uzama Takvimi',
  }[lang as Lang] || '12-Month Post-Op Recovery Roadmap';

  const subtitle = {
    en: 'What to expect at every milestone from your procedure day to full density results.',
    fr: 'Les étapes clés de votre évolution, du jour de l\'intervention jusqu\'au résultat final.',
    tr: 'Operasyon gününden nihai saç yoğunluğuna kadar aşama aşama tüm iyileşme süreci.',
  }[lang as Lang] || 'What to expect at every milestone from your procedure day to full density results.';

  const phases = [
    {
      step: '01',
      time: { en: 'Day 1–3', fr: 'Jours 1–3', tr: '1–3. Gün' },
      title: { en: 'Implantation & First Wash', fr: 'Implantation & 1er Lavage', tr: 'Ekim & İlk Medikal Yıkama' },
      desc: {
        en: 'DHI placement completed. First clinical wash performed by specialists with medical aftercare shampoo.',
        fr: 'Intervention terminée. Premier lavage clinique réalisé par l\'équipe avec shampoing spécialisé.',
        tr: 'DHI operasyonu tamamlanır. İlk saç yıkaması klinikte uzmanlar eşliğinde uygulamalı olarak yapılır.'
      },
      icon: Activity,
      status: { en: 'Clinical Phase', fr: 'Phase Clinique', tr: 'Klinik Aşaması' }
    },
    {
      step: '02',
      time: { en: 'Day 7–10', fr: 'Jours 7–10', tr: '7–10. Gün' },
      title: { en: 'Micro-Scab Shedding', fr: 'Chute des Micro-Croûtes', tr: 'Kabuk Dökme Süreci' },
      desc: {
        en: 'Micro-scabs detach naturally during daily gentle washing. Scalp redness begins to subside rapidly.',
        fr: 'Les micro-croûtes se détachent naturellement avec les lavages doux. Les rougeurs s\'estompent.',
        tr: 'Düzenli yıkama ile mikro kabuklar tamamen dökülür. Saç derisi hızla doğal görünümüne kavuşur.'
      },
      icon: Clock,
      status: { en: 'Scalp Healing', fr: 'Cicatrisation', tr: 'Deri İyileşmesi' }
    },
    {
      step: '03',
      time: { en: 'Month 1–2', fr: 'Mois 1–2', tr: '1–2. Ay' },
      title: { en: 'Shock Loss (Normal Phase)', fr: 'Perte Transitoire (Normal)', tr: 'Şok Dökülme (Doğal Evre)' },
      desc: {
        en: 'Transplanted hair shafts shed while follicles stay securely rooted beneath the scalp. Completely expected.',
        fr: 'Les tiges des greffons tombent temporairement, mais les racines restent fermement ancrées.',
        tr: 'Ekilen saç telleri geçici olarak dökülür; kökler deri altında sağlam kalarak güçlenmeye devam eder.'
      },
      icon: ShieldAlert,
      status: { en: 'Root Consolidation', fr: 'Ancrage Folliculaire', tr: 'Kök Güçlenmesi' }
    },
    {
      step: '04',
      time: { en: 'Month 4–6', fr: 'Mois 4–6', tr: '4–6. Ay' },
      title: { en: 'Active Regrowth (60%+)', fr: 'Repousse Active (60%+)', tr: 'Aktif Uzama (%60+ Yoğunluk)' },
      desc: {
        en: 'New permanent hairs emerge and thicken noticeably. 60–70% of final cosmetic density is achieved.',
        fr: 'Les nouveaux cheveux permanents poussent et s\'épaississent. 60 à 70% de la densité est visible.',
        tr: 'Kalıcı yeni saçlar çıkmaya ve kalınlaşmaya başlar. Nihai sonucun yaklaşık %60-70\'i belirginleşir.'
      },
      icon: Sparkles,
      status: { en: 'Visible Density', fr: 'Densité Visible', tr: 'Gözle Görülür Çıkış' }
    },
    {
      step: '05',
      time: { en: 'Month 12', fr: 'Mois 12', tr: '12. Ay' },
      title: { en: 'Final Result (100%)', fr: 'Résultat Final (100%)', tr: 'Nihai Sonuç (%100 Yoğunluk)' },
      desc: {
        en: 'Full maturity, natural direction, and maximum graft density achieved for lifelong natural growth.',
        fr: 'Maturité complète, direction naturelle et densité maximale pour un résultat durable à vie.',
        tr: 'Saçlar maksimum kalınlık ve doğal çıkış açısına ulaşır; %100 nihai ve kalıcı sonuç tamamlanır.'
      },
      icon: CheckCircle2,
      status: { en: 'Full Maturity', fr: 'Maturité Finale', tr: 'Tam Kalıcı Sonuç' }
    }
  ];

  return (
    <section id="recovery-roadmap" className="py-20 bg-slate-950 text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? '12 Aylık İyileşme Takvimi' : '12-Month Care Protocol'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 5-Phase Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const isLast = idx === phases.length - 1;

            return (
              <div
                key={idx}
                className={`bg-slate-900 border rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-5 card-hover backdrop-blur-md ${
                  isLast
                    ? 'border-blue-500 bg-gradient-to-b from-slate-900 to-blue-950/40 ring-1 ring-blue-500/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Header: Time Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-xl ${
                      isLast 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {phase.time[lang as Lang] || phase.time['en']}
                    </span>
                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center ${
                      isLast ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-sm text-white mb-1.5 leading-snug">
                    {phase.title[lang as Lang] || phase.title['en']}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {phase.desc[lang as Lang] || phase.desc['en']}
                  </p>
                </div>

                {/* Status Footer Tag */}
                <div className="pt-3.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-500">Phase {phase.step}</span>
                  <span className={isLast ? 'text-blue-400 font-extrabold' : 'text-slate-300'}>
                    {phase.status[lang as Lang] || phase.status['en']}
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
