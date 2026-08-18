'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function SocialProof() {
  const { lang } = useSiteContext();

  const eyebrow = {
    tr: 'Uluslararası Hasta Deneyimleri',
    en: 'International Patient Experiences',
    fr: 'Témoignages de Patients Internationaux',
  }[lang as Lang] || 'International Patient Experiences';

  const heading = {
    tr: 'Doğrulanmış sonuçlar, doğrulanmış rotalar',
    en: 'Verified Results, Verified Travel Routes',
    fr: 'Résultats Vérifiés, Itinéraires Reconnus',
  }[lang as Lang] || 'Verified Results, Verified Travel Routes';

  const reviews = [
    {
      route: 'LONDRA (LHR) → ANTALYA (AYT)',
      name: { tr: 'James Wilson · İngiltere', en: 'James Wilson · United Kingdom', fr: 'James Wilson · Royaume-Uni' },
      quote: {
        tr: 'Uçuş öncesi endişeliydim ama VIP transfer ve otel konforu beklentilerimi çok aştı. 8. ayda saç çizgim tamamen doğal.',
        en: 'I was anxious before travelling, but the VIP transfer and luxury hotel stay exceeded all expectations. Density looks 100% natural.',
        fr: 'J\'étais hésitant avant le départ, mais la prise en charge VIP et le confort de l\'hôtel ont dépassé mes attentes.',
      },
      graft: '3.800 GREFT — VIP EXPERIENCE'
    },
    {
      route: 'PARİS (CDG) → ANTALYA (AYT)',
      name: { tr: 'Antoine Dubois · Fransa', en: 'Antoine Dubois · France', fr: 'Antoine Dubois · France' },
      quote: {
        tr: 'Fransa\'daki fiyatların %70 altında, kalite ve medikal standartlar konusunda hiçbir ödün vermedim.',
        en: 'Compared to French clinic rates I saved over 70%, with uncompromising clinical precision and sterile care.',
        fr: 'À des tarifs 70% inférieurs à ceux pratiqués en France, sans aucun compromis sur l\'exigence clinique.',
      },
      graft: '4.200 GREFT — DHI VIP EXPERIENCE'
    },
    {
      route: 'FRANKFURT (FRA) → ANTALYA (AYT)',
      name: { tr: 'Markus Weber · Almanya', en: 'Markus Weber · Germany', fr: 'Markus Weber · Allemagne' },
      quote: {
        tr: 'Anestezisiz süreç ve Choi kalem teknolojisi konusunda son derece net bilgilendirme yapıldı. 4 günde işime döndüm.',
        en: 'Transparent guidance on painless needle-free anesthesia and Choi pen technology. Returned to work in 4 days.',
        fr: 'Informations limpides sur l\'anesthésie sans aiguille et le protocole Choi Pen. Reprise du travail en 4 jours.',
      },
      graft: '3.200 GREFT — STANDART PAKET'
    }
  ];

  return (
    <section id="hastalar" className="py-20 bg-[#EFE7D8]">
      <div className="wrap">
        
        {/* Section Head */}
        <div className="max-w-xl mb-12">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#17231C] mt-3.5 tracking-tight leading-snug">
            {heading}
          </h2>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] rounded-[4px] p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="font-mono text-xs text-[#A9662F] uppercase tracking-wider">
                  {r.route}
                </div>
                <div className="font-semibold text-base text-[#17231C] mt-2.5">
                  {r.name[lang as Lang] || r.name['en']}
                </div>
                <p className="text-sm text-[#4A5A4D] mt-2.5 leading-relaxed">
                  &ldquo;{r.quote[lang as Lang] || r.quote['en']}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(23,35,28,0.12)] font-mono text-xs text-[#6E7F63] font-semibold">
                {r.graft}
              </div>
            </div>
          ))}
        </div>

        {/* Trustband Strip */}
        <div className="mt-14 bg-[#17231C] text-[#EFE7D8] rounded-[4px] p-8 sm:p-11 flex flex-wrap justify-between items-center gap-6 shadow-xl border border-[#332E2A]">
          <div className="space-y-1">
            <div className="font-serif font-semibold text-3xl sm:text-4xl text-[#D89A5D]">
              4.9 / 5.0
            </div>
            <div className="text-xs text-[#EFE7D8]/60 font-mono uppercase tracking-wider">
              {lang === 'tr' ? 'Trustpilot Ortalama Puan' : 'Verified Average Rating'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif font-semibold text-3xl sm:text-4xl text-[#D89A5D]">
              5.000+
            </div>
            <div className="text-xs text-[#EFE7D8]/60 font-mono uppercase tracking-wider">
              {lang === 'tr' ? 'Tamamlanan DHI Operasyonu' : 'Completed DHI Procedures'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif font-semibold text-3xl sm:text-4xl text-[#D89A5D]">
              35+
            </div>
            <div className="text-xs text-[#EFE7D8]/60 font-mono uppercase tracking-wider">
              {lang === 'tr' ? 'Ülkeden Hasta Portföyü' : 'International Countries'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
