'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Sparkles, Palmtree, Building2, UserCheck, Users, Shield, Heart } from 'lucide-react';

export default function WhyAntalyaVsIstanbul() {
  const { lang } = useSiteContext();

  const title = {
    tr: 'Neden Antalya Butik DHI? (İstanbul ile Karşılaştırma)',
    en: 'Why Boutique DHI in Antalya vs Mass Clinics in Istanbul?',
    fr: 'Pourquoi Choisir Antalya plutôt qu\'une Clinique de Masse à Istanbul ?',
  }[lang as Lang] || 'Why Boutique DHI in Antalya vs Istanbul?';

  const subtitle = {
    tr: 'Günde 20-30 hastanın alındığı sanayi tipi fabrikasyon klinikler yerine, günde yalnızca 1-2 hastaya odaklanan butik cerrahi ilgi.',
    en: 'Rather than high-volume conveyor-belt clinics treating dozens of patients daily, we focus on boutique surgeon-guided care.',
    fr: 'Privilégiez une prise en charge médicale exclusive limitée à 1-2 patients par jour plutôt qu\'un centre de masse.',
  }[lang as Lang] || 'Boutique surgeon-guided care vs high-volume clinics.';

  const points = [
    {
      title: { tr: 'Günde Yalnızca 1–2 Seçkin Hasta', en: 'Strict Limit: 1–2 Patients Daily', fr: 'Limite Stricte: 1–2 Patients par Jour' },
      desc: {
        tr: 'Cerrahi ekibimiz tüm gününü ve enerjisini sadece sizin operasyonunuza ayırır. Aceleye getirilmiş ekim yapılmaz.',
        en: 'Our surgical team dedicates their full focus to your procedure with zero rush or parallel surgeries.',
        fr: 'L\'équipe chirurgicale consacre toute sa journée à votre intervention sans aucune précipitation.'
      },
      icon: UserCheck
    },
    {
      title: { tr: 'Birebir Hekim Ön Çizgi Tasarımı', en: 'In-Person Surgeon Hairline Design', fr: 'Dessin Médical de la Ligne Frontale' },
      desc: {
        tr: 'Ön çizginiz ve greft yön planlamanız doğrudan uzman hekim tarafından yüz anatomisine göre çizilir.',
        en: 'Your facial proportions and growth angles are mapped directly by experienced medical surgeons.',
        fr: 'Votre ligne frontale est dessinée et validée directement par le médecin selon votre morphologie.'
      },
      icon: Shield
    },
    {
      title: { tr: 'Akdeniz İyileşme Atmosferi', en: 'Mediterranean Recovery Environment', fr: 'Cadre Méditerranéen Agréable' },
      desc: {
        tr: 'İstanbul’un yoğun şehir trafiği ve stresi yerine, Antalya’nın sahil otellerinde huzurlu ve konforlu bir iyileşme süreci.',
        en: 'Heal in calm Mediterranean comfort with 5-star coastal hotels instead of congested metropolitan traffic.',
        fr: 'Profitez d\'un séjour serein au bord de la Méditerranée dans un hôtel 5 étoiles pour votre convalescence.'
      },
      icon: Palmtree
    }
  ];

  const antalyaTag = { tr: 'Antalya Butik Standart', en: 'Antalya Boutique Model', fr: 'Modèle Boutique Antalya' }[lang as Lang] || 'Antalya Boutique Model';
  const istanbulTag = { tr: 'İstanbul Fabrikasyon Model', en: 'Istanbul Mass-Volume Model', fr: 'Modèle de Masse Istanbul' }[lang as Lang] || 'Istanbul Mass-Volume Model';

  return (
    <section id="why-antalya" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Butik Yaklaşım' : 'Boutique Approach'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4 card-hover-soft"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/80">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {p.title[lang as Lang] || p.title['en']}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc[lang as Lang] || p.desc['en']}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-800">
                  <span>{antalyaTag}</span>
                  <span className="text-emerald-600 font-extrabold">✓ VIP</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
