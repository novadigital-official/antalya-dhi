'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Sparkles, Calendar, HeartPulse, CheckCircle2, ShieldCheck, Sun, Scissors } from 'lucide-react';

export default function PrePostCareGuide() {
  const { lang } = useSiteContext();

  const title = {
    tr: 'Operasyon Öncesi & Sonrası Eksiksiz Hasta Rehberi',
    en: 'Comprehensive Pre-Op & Post-Op Care Guide',
    fr: 'Guide Complet Avant et Après l\'Intervention',
  }[lang as Lang] || 'Comprehensive Pre-Op & Post-Op Care Guide';

  const subtitle = {
    tr: 'Tedavinizin her aşamasında en yüksek greft tutunması ve hızlı iyileşme için uygulamanız gereken klinik adımlar.',
    en: 'Essential clinical instructions to maximize graft retention and speed up healing at every stage.',
    fr: 'Instructions cliniques essentielles pour maximiser la prise des greffons et accélérer la cicatrisation.',
  }[lang as Lang] || 'Essential clinical instructions for fast healing.';

  const preSteps = [
    {
      timing: { tr: '7 Gün Önce', en: '7 Days Before', fr: '7 Jours Avant' },
      title: { tr: 'İlaç & Alkol Kısıtlaması', en: 'Medication & Alcohol Pause', fr: 'Pause Médicaments & Alcool' },
      desc: {
        tr: 'Aspirin ve kan sulandırıcı ilaçlar, alkol ve aşırı kafein tüketimi durdurulmalıdır.',
        en: 'Discontinue aspirin, blood thinners, alcohol, and excessive caffeine.',
        fr: 'Arrêtez l\'aspirine, les anticoagulants, l\'alcool et l\'excès de caféine.'
      }
    },
    {
      timing: { tr: '3 Gün Önce', en: '3 Days Before', fr: '3 Jours Avant' },
      title: { tr: 'Sigara Azaltımı & Dinlenme', en: 'Smoking Reduction & Rest', fr: 'Réduction du Tabac' },
      desc: {
        tr: 'Kandaki oksijen seviyesini artırmak için sigara tüketimi minimuma indirilmelidir.',
        en: 'Minimize nicotine to enhance micro-circulation and blood oxygen levels.',
        fr: 'Réduisez la nicotine pour optimiser l\'oxygénation sanguine des tissus.'
      }
    },
    {
      timing: { tr: 'Operasyon Günü', en: 'Surgery Morning', fr: 'Matin de l\'Opération' },
      title: { tr: 'Rahat Kıyafet & Kahvaltı', en: 'Comfortable Attire & Breakfast', fr: 'Vêtements Confortables' },
      desc: {
        tr: 'Hafif bir kahvaltı yapın; başınızdan kolay geçen düğmeli veya fermuarlı bir gömlek giyin.',
        en: 'Have a light breakfast and wear a button-up shirt to avoid touching the scalp.',
        fr: 'Prenez un petit-déjeuner léger et portez une chemise boutonnée facile à retirer.'
      }
    }
  ];

  const postSteps = [
    {
      timing: { tr: 'İlk 3 Gün', en: 'Days 1–3', fr: 'Jours 1–3' },
      title: { tr: 'Sırtüstü 45° Uyku Pozisyonu', en: '45° Elevated Sleep Position', fr: 'Sommeil Incliné à 45°' },
      desc: {
        tr: 'Özel boyun yastığıyla sırtüstü uyuyun; ekim alanına kesinlikle dokunmayın veya su değdirmeyin.',
        en: 'Sleep on your back using a neck pillow at 45 degrees. Do not touch or wet the grafts.',
        fr: 'Dormez sur le dos avec coussin cervical à 45°. Ne touchez pas la zone greffée.'
      }
    },
    {
      timing: { tr: '10. Gün', en: 'Day 10', fr: '10ème Jour' },
      title: { tr: 'Mikro Kabukların Dökülmesi', en: 'Gentle Micro-Scab Shedding', fr: 'Chute Douce des Croûtes' },
      desc: {
        tr: 'Klinikçe verilen özel losyon ve köpük şampuan ile kabuklar nazik dairesel hareketlerle dökülür.',
        en: 'Wash with supplied clinical foam shampoo to naturally clear micro-scabs.',
        fr: 'Lavez avec le shampoing moussant fourni pour éliminer délicatement les croûtes.'
      }
    },
    {
      timing: { tr: '1–3. Ay', en: 'Months 1–3', fr: 'Mois 1–3' },
      title: { tr: 'Şok Dökülme & Kök Yerleşimi', en: 'Shock Loss & Root Anchoring', fr: 'Perte Temporaire (Normale)' },
      desc: {
        tr: 'Ekilen saç telleri geçici olarak dökülür; deri altındaki canlı kökler güçlenerek tutunur.',
        en: 'Transplanted hair shafts shed naturally while living roots anchor firmly beneath scalp.',
        fr: 'Les tiges capillaires tombent temporairement; les follicules s\'enracinent solidement.'
      }
    },
    {
      timing: { tr: '6–12. Ay', en: 'Months 6–12', fr: 'Mois 6–12' },
      title: { tr: 'Kalıcı Yoğunluk & Nihai Sonuç', en: 'Permanent Density & Maturity', fr: 'Densité Finale & Maturité' },
      desc: {
        tr: 'Kalıcı yeni saçlar uzar ve kalınlaşır; 12. ayda ömür boyu kalıcı doğal saç çizgisi tamamlanır.',
        en: 'Permanent hair thickens and achieves 100% natural direction and lifelong density.',
        fr: 'Les nouveaux cheveux permanents s\'épaississent pour un résultat dense et durable à vie.'
      }
    }
  ];

  const preHeading = { tr: 'Operasyon Öncesi Hazırlık', en: 'Pre-Op Preparation', fr: 'Préparation Avant l\'Opération' }[lang as Lang] || 'Pre-Op Preparation';
  const postHeading = { tr: 'Operasyon Sonrası İyileşme Adımları', en: 'Post-Op Healing Timeline', fr: 'Étapes de Convalescence' }[lang as Lang] || 'Post-Op Healing Timeline';

  return (
    <section id="care-guide" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Hasta Bilgilendirme' : 'Patient Care Guide'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 2 Column Layout: Pre-Op & Post-Op */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* PRE-OP COLUMN (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xs">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                {preHeading}
              </h3>
            </div>

            <div className="space-y-4">
              {preSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/70 space-y-1.5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 inline-block">
                    {step.timing[lang as Lang] || step.timing['en']}
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    {step.title[lang as Lang] || step.title['en']}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed">
                    {step.desc[lang as Lang] || step.desc['en']}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* POST-OP COLUMN (7 cols) */}
          <div className="lg:col-span-7 bg-emerald-50/50 border border-emerald-200/80 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xs">
            <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-200/60">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-emerald-950">
                {postHeading}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {postSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-emerald-200/60 space-y-1.5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block">
                    {step.timing[lang as Lang] || step.timing['en']}
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    {step.title[lang as Lang] || step.title['en']}
                  </h4>
                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                    {step.desc[lang as Lang] || step.desc['en']}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
