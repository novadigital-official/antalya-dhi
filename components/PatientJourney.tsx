'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { Sparkles, Check } from 'lucide-react';

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
    <section id="results" className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 4 Photographic Journey Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journeySteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-emerald-500/50 rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between card-hover-soft group"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-700/90 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg shadow-sm">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-1.5">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-5 pb-5 pt-3 flex items-center justify-between text-[11px] font-bold text-emerald-700 border-t border-slate-100">
                <span>{item.spec}</span>
                <span className="text-emerald-600 font-extrabold flex items-center gap-1">
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
