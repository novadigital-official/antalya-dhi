'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function PatientJourney() {
  const { lang } = useSiteContext();

  const eyebrow = {
    tr: 'Hasta Deneyimi & Klinik Atmosferi',
    en: 'Patient Experience & Clinical Atmosphere',
    fr: 'Expérience Patient & Cadre Clinique',
  }[lang as Lang] || 'Patient Experience';

  const heading = {
    tr: 'Antalya\'daki 3 Günlük VIP Tedavi Yolculuğunuz',
    en: 'Your 3-Day VIP Medical Journey in Antalya',
    fr: 'Votre Séjour Médical VIP de 3 Jours à Antalya',
  }[lang as Lang] || 'Your 3-Day VIP Medical Journey in Antalya';

  const subtitle = {
    tr: 'Havalimanı VIP karşılamasından steril ameliyathaneye ve medikal yıkamaya kadar gerçek fotoğraflarla tedavi sürecimiz.',
    en: 'Real photographic documentation of our door-to-door medical coordination and clinical care in Antalya.',
    fr: 'Documentation photographique réelle de votre prise en charge médicale intégrale à Antalya.',
  }[lang as Lang] || 'Real photographic documentation of our medical coordination.';

  const journeySteps = [
    {
      step: '01',
      title: t(lang as Lang, 'journey.step1.title') || 'VIP Airport Arrival',
      desc: t(lang as Lang, 'journey.step1.desc') || 'Private driver meets you at Antalya Airport with Mercedes Vito and takes you directly to your luxury hotel room.',
      img: '/images/vip-transfer.jpg',
      spec: lang === 'tr' ? 'Mercedes Vito VIP Transfer' : 'Private Mercedes Vito Transfer'
    },
    {
      step: '02',
      title: t(lang as Lang, 'journey.step2.title') || 'Surgeon Hairline Design',
      desc: t(lang as Lang, 'journey.step2.desc') || 'In-person consultation, microscopic follicle density mapping, and natural hairline design at our partner clinic.',
      img: '/images/clinic-consultation.jpg',
      spec: lang === 'tr' ? 'Birebir Hekim Muayenesi' : 'Surgeon In-Person Consultation'
    },
    {
      step: '03',
      title: t(lang as Lang, 'journey.step3.title') || 'Sterile Choi Pen DHI Suite',
      desc: t(lang as Lang, 'journey.step3.desc') || 'Comfortable needle-free anesthesia, graft preservation in ATP nutrient solution, and direct Choi Pen implantation.',
      img: '/images/operation-room.jpg',
      spec: lang === 'tr' ? 'Steril Ameliyathane' : 'Sterile Hospital Surgery Suite'
    },
    {
      step: '04',
      title: t(lang as Lang, 'journey.step4.title') || 'Clinical Wash & Departure',
      desc: t(lang as Lang, 'journey.step4.desc') || 'Specialist first hair wash training, handover of 12-month aftercare kit, and VIP return transfer to airport.',
      img: '/images/aftercare-wash.jpg',
      spec: lang === 'tr' ? 'Medikal Bakım Kiti & Uğurlama' : '12-Month Care Kit Handover'
    }
  ];

  return (
    <section id="results" className="py-20 bg-slate-900/60 text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 4 Photographic Journey Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between card-hover group"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  {/* Step Number Tag */}
                  <div className="absolute top-3.5 left-3.5 bg-blue-600/90 backdrop-blur-md text-white font-extrabold text-xs px-3 py-1 rounded-xl shadow-lg border border-blue-400/30">
                    Step {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-heading font-bold text-base text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between text-[11px] font-bold text-blue-400 border-t border-slate-800/80">
                <span>{item.spec}</span>
                <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
