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
      img: '/images/vip-transfer.jpg',
      spec: '30 Min Airport Pickup'
    },
    {
      step: '02',
      title: t(lang as Lang, 'journey.step2.title'),
      desc: t(lang as Lang, 'journey.step2.desc'),
      img: '/images/clinic-consultation.jpg',
      spec: 'Sterile Hairline Analysis'
    },
    {
      step: '03',
      title: t(lang as Lang, 'journey.step3.title'),
      desc: t(lang as Lang, 'journey.step3.desc'),
      img: '/images/operation-room.jpg',
      spec: 'Single-Use Choi Pen Kit'
    },
    {
      step: '04',
      title: t(lang as Lang, 'journey.step4.title'),
      desc: t(lang as Lang, 'journey.step4.desc'),
      img: '/images/aftercare-wash.jpg',
      spec: 'Specialist Wash & Care Kit'
    }
  ];

  return (
    <div id="results" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
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
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs border border-slate-700">
                  {item.step}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-black text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 flex items-center justify-between text-[11px] font-extrabold text-slate-500 border-t border-slate-100">
              <span>{item.spec}</span>
              <span className="text-blue-600 font-black">✓ Medical Care</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
