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
      tag: 'VIP Airport Transfer',
      img: '/images/vip-transfer.jpg'
    },
    {
      step: '02',
      title: t(lang as Lang, 'journey.step2.title'),
      desc: t(lang as Lang, 'journey.step2.desc'),
      tag: 'Surgeon Consultation',
      img: '/images/clinic-consultation.jpg'
    },
    {
      step: '03',
      title: t(lang as Lang, 'journey.step3.title'),
      desc: t(lang as Lang, 'journey.step3.desc'),
      tag: 'Choi Pen DHI Suite',
      img: '/images/operation-room.jpg'
    },
    {
      step: '04',
      title: t(lang as Lang, 'journey.step4.title'),
      desc: t(lang as Lang, 'journey.step4.desc'),
      tag: '12-Month Follow-up',
      img: '/images/clinic-consultation.jpg'
    }
  ];

  return (
    <div id="results" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          AUTHENTIC PATIENT EXPERIENCE
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
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <div>
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs border border-slate-700">
                  {item.step}
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-base font-black text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-[11px] font-extrabold text-slate-400 border-t border-slate-100">
              <span>Stage {idx + 1}</span>
              <span className="text-emerald-600 font-black">✓ Verified Experience</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
