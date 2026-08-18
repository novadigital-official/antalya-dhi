'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function PatientJourney() {
  const { lang } = useSiteContext();

  const eyebrow = {
    tr: 'Hasta Deneyimi & Klinik Atmosferi',
    en: 'Patient Experience & Clinical Setting',
    fr: 'Expérience Patient & Cadre Clinique',
  }[lang as Lang] || 'Patient Experience';

  const heading = {
    tr: 'Antalya\'daki 3 Günlük Tedavi Yolculuğunuz',
    en: 'Your 3-Day Clinical Journey in Antalya',
    fr: 'Votre Séjour Clinique de 3 Jours à Antalya',
  }[lang as Lang] || 'Your 3-Day Clinical Journey in Antalya';

  const subtitle = {
    tr: 'Havalimanı VIP karşılamasından steril ameliyathaneye ve medikal yıkamaya kadar gerçek fotoğraflarla sürecimiz.',
    en: 'Real photographic documentation of our door-to-door medical coordination in Antalya.',
    fr: 'Documentation photographique réelle de votre prise en charge médicale à Antalya.',
  }[lang as Lang] || 'Real photographic documentation of our medical coordination.';

  const journeySteps = [
    {
      step: '01',
      title: t(lang as Lang, 'journey.step1.title') || 'VIP Havalimanı Karşılama',
      desc: t(lang as Lang, 'journey.step1.desc') || 'Özel şoförünüz Antalya Havalimanı\'nda sizi Mercedes Vito ile karşılar ve otelinize transfer eder.',
      img: '/images/vip-transfer.jpg',
      spec: lang === 'tr' ? 'Mercedes Vito VIP Transfer' : 'Private Mercedes Transfer'
    },
    {
      step: '02',
      title: t(lang as Lang, 'journey.step2.title') || 'Birebir Hekim Muayenesi',
      desc: t(lang as Lang, 'journey.step2.desc') || 'Anlaşmalı kliniğimizde doktor muayenesi, ön saç çizgisi çizimi ve kan tahlilleri.',
      img: '/images/clinic-consultation.jpg',
      spec: lang === 'tr' ? 'Ön Çizgi Planlama' : 'Surgeon Hairline Design'
    },
    {
      step: '03',
      title: t(lang as Lang, 'journey.step3.title') || 'Choi Pen DHI Ameliyathanesi',
      desc: t(lang as Lang, 'journey.step3.desc') || 'Steril hastane ortamında ağrısız Choi Pen teknolojisi ile konforlu DHI ekim operasyonu.',
      img: '/images/operation-room.jpg',
      spec: lang === 'tr' ? 'Steril Ameliyathane' : 'Sterile Surgical Suite'
    },
    {
      step: '04',
      title: t(lang as Lang, 'journey.step4.title') || 'Medikal Yıkama & Uğurlama',
      desc: t(lang as Lang, 'journey.step4.desc') || 'Klinikte medikal saç yıkama eğitimi, bakım kiti teslimi ve havalimanına dönüş transferi.',
      img: '/images/aftercare-wash.jpg',
      spec: lang === 'tr' ? 'Medikal Bakım Kiti' : 'Aftercare Kit & Training'
    }
  ];

  return (
    <section id="results" className="py-20 bg-[#EFE7D8]">
      <div className="wrap">
        
        {/* Section Head */}
        <div className="max-w-xl mb-12">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#17231C] mt-3.5 tracking-tight leading-snug">
            {heading}
          </h2>
          <p className="text-[#4A5A4D] text-base mt-3.5 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Photographic Journey Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] rounded-[4px] overflow-hidden shadow-xs flex flex-col justify-between card-hover-lift group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-[#17231C]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute top-3 left-3 bg-[#17231C]/85 backdrop-blur-md text-[#EFE7D8] font-mono text-xs px-2.5 py-1 rounded-[2px] border border-[rgba(239,231,216,0.2)]">
                    {item.step}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-semibold text-base text-[#17231C] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A5A4D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 flex items-center justify-between text-[11px] font-mono font-medium text-[#A9662F] border-t border-[rgba(23,35,28,0.1)]">
                <span>{item.spec}</span>
                <span className="text-[#6E7F63] font-semibold">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
