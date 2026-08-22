'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Plane, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SocialProof() {
  const { lang } = useSiteContext();

  const title = {
    en: 'International Patient Experiences',
    fr: 'Témoignages de Patients Internationaux',
    tr: 'Uluslararası Hasta Deneyimleri',
  }[lang as Lang] || 'International Patient Experiences';

  const subtitle = {
    en: 'Verified testimonials from European patients who travelled to Antalya for surgeon-guided DHI hair restoration.',
    fr: 'Témoignages vérifiés de patients européens venus à Antalya pour leur greffe DHI sous contrôle médical.',
    tr: 'Antalya\'daki anlaşmalı sağlık kuruluşlarımızda DHI tedavisi olan Avrupalı hastalarımızın deneyimleri.',
  }[lang as Lang] || 'Verified testimonials from European patients.';

  const flight1 = { tr: '4s 10dk direkt uçuş', en: '4h 10m direct', fr: '4h 10m direct' }[lang as Lang] || '4h 10m direct';
  const flight2 = { tr: '3s 45dk direkt uçuş', en: '3h 45m direct', fr: '3h 45m direct' }[lang as Lang] || '3h 45m direct';
  const flight3 = { tr: '3s 25dk direkt uçuş', en: '3h 25m direct', fr: '3h 25m direct' }[lang as Lang] || '3h 25m direct';
  const verifiedBadge = { tr: 'Doğrulanmış Tedavi', en: 'Verified Stay', fr: 'Séjour Vérifié' }[lang as Lang] || 'Verified Stay';

  const reviews = [
    {
      route: 'London (LHR) ➔ Antalya (AYT)',
      flight: flight1,
      patient: { en: 'Patient, 41 · Tech Consultant (UK)', fr: 'Patient, 41 ans · Consultant (UK)', tr: 'Hasta, 41 · Danışman (İngiltere)' },
      rating: 5,
      text: {
        en: '"I was apprehensive about travelling abroad for a medical procedure, but the coordination from first contact to hotel check-in was seamless. The clinic was sterile, modern and the surgical team was professional throughout. Eight months post-op the density and angle look 100% natural."',
        fr: '"J\'étais réticent à voyager à l\'étranger pour cette intervention, mais la prise en charge de la prise de contact jusqu\'à l\'hôtel était irréprochable. Huit mois après l\'opération, la densité et la ligne frontale sont parfaites."',
        tr: '"Yurt dışında böyle bir işlem için seyahat etmek konusunda endişeliydim, ancak ilk temastan otele yerleşime kadar koordinasyon kusursuzdu. 8. ayda saç çizgim ve yoğunluk tamamen doğal görünüyor."',
      },
      grafts: { tr: '3.800 Greft · VIP Paket', en: '3,800 Grafts · VIP Experience', fr: '3 800 Greffons · Forfait VIP' }
    },
    {
      route: 'Paris (CDG) ➔ Antalya (AYT)',
      flight: flight2,
      patient: { en: 'Patient, 36 · Architect (France)', fr: 'Patient, 36 ans · Architecte (France)', tr: 'Hasta, 36 · Mimar (Fransa)' },
      rating: 5,
      text: {
        en: '"I compared clinics across Europe for months. The price difference for DHI in Antalya is significant, but what convinced me was the clinical quality — single-use Choi pens, pre-op blood tests, and a 12-month follow-up protocol. Very satisfied."',
        fr: '"J\'ai comparé des cliniques à travers l\'Europe pendant des mois. La différence de prix pour le DHI à Antalya est significative, mais ce qui m\'a convaincu c\'est la qualité clinique — stylos Choi à usage unique et suivi de 12 mois."',
        tr: '"Aylarca Avrupa\'daki klinikleri karşılaştırdım. Antalya\'da DHI için fiyat avantajı çok büyük, ancak beni ikna eden klinik kaliteydi — tek kullanımlık Choi kalemleri ve 12 aylık takip protokolü."',
      },
      grafts: { tr: '4.200 Greft · VIP Paket', en: '4,200 Grafts · VIP Experience', fr: '4 200 Greffons · Forfait VIP' }
    },
    {
      route: 'Frankfurt (FRA) ➔ Antalya (AYT)',
      flight: flight3,
      patient: { en: 'Patient, 44 · Executive (Germany)', fr: 'Patient, 44 ans · Cadre (Allemagne)', tr: 'Hasta, 44 · Yönetici (Almanya)' },
      rating: 5,
      text: {
        en: '"The no-shave DHI option was important to me professionally. The jet-injection anaesthesia was genuinely painless and I was back at work in Frankfurt within four days. Certified hospital facility and top-tier patient care."',
        fr: '"L\'option DHI sans rasage était essentielle professionnellement. L\'anesthésie par jet-injection était indolore et j\'ai repris le travail à Francfort en quatre jours. Établissement agréé et soins de premier ordre."',
        tr: '"Traşsız DHI seçeneği benim için iş hayatım açısından önemliydi. Basınçlı anestezi gerçekten konforluydu ve 4 gün sonra işimin başındaydım. Tertemiz hastane ve üst düzey ilgi."',
      },
      grafts: { tr: '3.200 Greft · Standart Paket', en: '3,200 Grafts · Standard Package', fr: '3 200 Greffons · Forfait Standard' }
    }
  ];

  return (
    <section id="reviews" className="py-14 sm:py-18 bg-[#FAFBFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Gerçek Hasta Deneyimleri' : 'Verified Testimonials'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Trustpilot & WhatClinic Live Verified Ratings */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-black text-slate-900">4.9 / 5.0</span>
              <span className="text-[11px] font-bold text-[#00b67a] bg-emerald-50 px-2 py-0.5 rounded-md">★ Trustpilot</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-black text-slate-900">WhatClinic</span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Excellent Service 2026</span>
            </div>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-emerald-400 rounded-3xl p-6 flex flex-col justify-between space-y-4 card-hover-soft shadow-xs"
            >
              <div className="space-y-3">
                {/* Route Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-extrabold">
                    <Plane className="w-3.5 h-3.5" />
                    <span>{r.route}</span>
                  </div>
                  <span className="text-slate-400 font-medium">{r.flight}</span>
                </div>

                {/* Patient Info & Stars */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">{r.patient[lang as Lang] || r.patient['en']}</div>
                    <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-0.5 font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{verifiedBadge}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 italic leading-relaxed font-normal">
                  {r.text[lang as Lang] || r.text['en']}
                </p>
              </div>

              {/* Grafts tag */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl text-center">
                  {r.grafts[lang as Lang] || r.grafts['en']}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Emerald Trust Bar Strip */}
        <div className="bg-emerald-luxury text-white rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row justify-around items-center text-center gap-5 shadow-lg border border-emerald-500/30">
          <div className="space-y-0.5">
            <div className="font-heading font-black text-2xl sm:text-3xl text-amber-300">4.9 / 5.0</div>
            <div className="text-xs text-emerald-200/80 font-medium">
              {lang === 'tr' ? 'Ortalama Hasta Puanı' : lang === 'fr' ? 'Note Moyenne Vérifiée' : 'Average Verified Rating'}
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-emerald-700/50" />

          <div className="space-y-0.5">
            <div className="font-heading font-black text-2xl sm:text-3xl text-white">5,000+</div>
            <div className="text-xs text-emerald-200/80 font-medium">
              {lang === 'tr' ? 'Tamamlanan DHI Operasyonu' : lang === 'fr' ? 'Greffes DHI Réalisées' : 'Completed DHI Procedures'}
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-emerald-700/50" />

          <div className="space-y-0.5">
            <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-300">35+ {lang === 'tr' ? 'Ülke' : lang === 'fr' ? 'Pays' : 'Countries'}</div>
            <div className="text-xs text-emerald-200/80 font-medium">
              {lang === 'tr' ? 'Uluslararası Hasta Portföyü' : lang === 'fr' ? 'Patients Internationaux' : 'International Patients'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
