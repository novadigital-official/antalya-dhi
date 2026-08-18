'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function CountUpStats() {
  const { lang } = useSiteContext();

  const stats = [
    {
      num: '3.600+',
      lbl: {
        tr: 'Ortalama Greft Kapasitesi',
        en: 'Average Graft Capacity',
        fr: 'Capacité Moyenne de Greffons',
      }[lang as Lang] || 'Average Graft Capacity'
    },
    {
      num: '%98',
      lbl: {
        tr: 'Greft Tutunma Oranı',
        en: 'Graft Retention Rate',
        fr: 'Taux de Prise des Greffons',
      }[lang as Lang] || 'Graft Retention Rate'
    },
    {
      num: '12 Ay',
      lbl: {
        tr: 'Tıbbi Takip Protokolü',
        en: '12-Month Care Protocol',
        fr: 'Suivi Médical 12 Mois',
      }[lang as Lang] || '12-Month Care Protocol'
    },
    {
      num: '5.000+',
      lbl: {
        tr: 'Uluslararası Hasta',
        en: 'International Patients',
        fr: 'Patients Internationaux',
      }[lang as Lang] || 'International Patients'
    }
  ];

  return (
    <div className="bg-[#17231C] text-[#EFE7D8] py-16 sm:py-20 border-y border-[#332E2A]">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-2">
              <div className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-[#D89A5D] tracking-tight">
                {s.num}
              </div>
              <div className="text-xs text-[#EFE7D8]/60 uppercase font-mono tracking-wider">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
