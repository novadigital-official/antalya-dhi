'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Plane, Star, MapPin } from 'lucide-react';

export default function SocialProof() {
  const { lang } = useSiteContext();

  const title = {
    en: 'International Patient Experiences',
    fr: 'Témoignages de Patients Internationaux',
    tr: 'Uluslararası Hasta Deneyimleri',
  }[lang as Lang] || 'International Patient Experiences';

  const subtitle = {
    en: 'Verified testimonials from European patients who travelled to Antalya for surgeon-guided DHI restoration.',
    fr: 'Témoignages vérifiés de patients européens venus à Antalya pour leur greffe DHI.',
    tr: 'Antalya\'daki anlaşmalı sağlık kuruluşlarımızda DHI tedavisi olan Avrupalı hastalarımızın deneyimleri.',
  }[lang as Lang] || 'Verified testimonials from European patients.';

  const reviews = [
    {
      origin: 'London Heathrow (LHR)',
      dest: 'Antalya (AYT)',
      flightTime: '4h 10m direct',
      country: { en: 'United Kingdom', fr: 'Royaume-Uni', tr: 'Birleşik Krallık' },
      patient: { en: 'Patient, 41 · Tech Consultant', fr: 'Patient, 41 ans · Consultant', tr: 'Hasta, 41 · Danışman' },
      rating: 5,
      text: {
        en: '"I was apprehensive about travelling abroad for a medical procedure, but the coordination from first contact to hotel check-in was seamless. The clinic was sterile, modern and the surgical team was professional throughout. Eight months post-op the density and angle look 100% natural."',
        fr: '"J\'étais réticent à voyager à l\'étranger pour cette intervention, mais la coordination de la prise de contact jusqu\'à l\'hôtel était irréprochable. Huit mois après l\'opération, la densité et la ligne frontale sont impeccables."',
        tr: '"Yurt dışında böyle bir işlem için seyahat etmek konusunda endişeliydim, ancak ilk temastan otele yerleşime kadar koordinasyon kusursuzdu. Sekizinci ayda saç çizgim ve yoğunluk tamamen doğal görünüyor."',
      },
      grafts: { en: '3,800 Grafts · VIP All-Inclusive', fr: '3 800 Greffons · Forfait VIP', tr: '3.800 Greft · VIP Deneyim' },
    },
    {
      origin: 'Paris Charles de Gaulle (CDG)',
      dest: 'Antalya (AYT)',
      flightTime: '3h 45m direct',
      country: { en: 'France', fr: 'France', tr: 'Fransa' },
      patient: { en: 'Patient, 36 · Architect', fr: 'Patient, 36 ans · Architecte', tr: 'Hasta, 36 · Mimar' },
      rating: 5,
      text: {
        en: '"I compared clinics across Europe for months. The price difference for DHI in Antalya is significant, but what convinced me was the clinical quality — single-use Choi pens, pre-op blood tests, and a 12-month follow-up protocol. Very satisfied."',
        fr: '"J\'ai comparé des cliniques à travers l\'Europe pendant des mois. La différence de prix pour le DHI à Antalya est significative, mais ce qui m\'a convaincu c\'est la qualité clinique — stylos Choi à usage unique, analyses pré-op, et suivi de 12 mois."',
        tr: '"Aylarca Avrupa\'daki klinikleri karşılaştırdım. Antalya\'da DHI için fiyat avantajı çok büyük, ancak beni ikna eden klinik kaliteydi — tek kullanımlık Choi kalemleri ve 12 aylık takip protokolü."',
      },
      grafts: { en: '4,200 Grafts · VIP All-Inclusive', fr: '4 200 Greffons · Forfait VIP', tr: '4.200 Greft · VIP Deneyim' },
    },
    {
      origin: 'Frankfurt Airport (FRA)',
      dest: 'Antalya (AYT)',
      flightTime: '3h 25m direct',
      country: { en: 'Germany', fr: 'Allemagne', tr: 'Almanya' },
      patient: { en: 'Patient, 44 · Executive', fr: 'Patient, 44 ans · Cadre', tr: 'Hasta, 44 · Yönetici' },
      rating: 5,
      text: {
        en: '"The no-shave DHI option was important to me professionally. The jet-injection anaesthesia was genuinely painless and I was back at work in Frankfurt within four days. Certified hospital facility and top-tier patient care."',
        fr: '"L\'option DHI sans rasage était essentielle professionnellement. L\'anesthésie par jet-injection était indolore et j\'ai repris le travail à Francfort en quatre jours. Établissement agréé et soins de premier ordre."',
        tr: '"Traşsız DHI seçeneği benim için iş hayatım açısından önemliydi. Basınçlı anestezi gerçekten konforluydu ve 4 gün sonra işimin başındaydım. Tertemiz hastane ve üst düzey ilgi."',
      },
      grafts: { en: '3,200 Grafts · Standard Clinical', fr: '3 200 Greffons · Forfait Standard', tr: '3.200 Greft · Standart Paket' },
    }
  ];

  return (
    <div id="reviews" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-normal text-[#1C1917] tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Reviews Grid with Flight Provenance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-white border border-[#E6DFD5] rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4 card-hover-lift">
            <div className="space-y-3.5">
              {/* Flight Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE6] text-[11px] font-semibold text-stone-500">
                <div className="flex items-center gap-1.5 text-[#A36538]">
                  <Plane className="w-3.5 h-3.5" />
                  <span>{r.origin} ➔ {r.dest}</span>
                </div>
                <span className="text-stone-400 font-normal">{r.flightTime}</span>
              </div>

              {/* Patient Info & Stars */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-[#1C1917]">{r.country[lang as Lang] || r.country['en']}</div>
                  <div className="text-[11px] text-stone-500">{r.patient[lang as Lang] || r.patient['en']}</div>
                </div>
                <div className="flex items-center gap-0.5 text-[#C28251]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              {/* Story */}
              <p className="text-xs text-stone-700 italic leading-relaxed font-normal">
                {r.text[lang as Lang] || r.text['en']}
              </p>
            </div>

            {/* Grafts tag */}
            <div className="pt-3 border-t border-[#F0ECE6]">
              <div className="text-[11px] font-bold text-[#8A4F23] bg-[#FBF3EB] border border-[#E8C5A8]/50 px-3 py-1.5 rounded-xl text-center">
                {r.grafts[lang as Lang] || r.grafts['en']}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Metrics Footer Bar */}
      <div className="bg-[#161412] text-white rounded-3xl p-6 max-w-5xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-4 shadow-xl border border-[#332E2A]">
        <div>
          <div className="text-[#E8C5A8] font-bold font-editorial text-xl">4.9 / 5.0</div>
          <span className="text-xs text-stone-400 font-medium">
            {lang === 'tr' ? 'Ortalama Hasta Memnuniyeti' : 'Average Verified Patient Rating'}
          </span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-[#332E2A]"></div>
        <div>
          <div className="text-white font-bold font-editorial text-xl">5,000+</div>
          <span className="text-xs text-stone-400 font-medium">
            {lang === 'tr' ? 'Tamamlanan DHI Operasyonu' : 'Completed DHI Procedures'}
          </span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-[#332E2A]"></div>
        <div>
          <div className="text-[#D49A70] font-bold font-editorial text-xl">35+ Countries</div>
          <span className="text-xs text-stone-400 font-medium">
            {lang === 'tr' ? 'Uluslararası Hasta Portföyü' : 'International Patient Base'}
          </span>
        </div>
      </div>
    </div>
  );
}
