'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { MapPin, Building2, ShieldCheck, Car, Plane, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LocationProtocol() {
  const { lang } = useSiteContext();

  const title = {
    tr: 'Antalya Medikal Lokasyon & VIP Lojistik Protokolü',
    en: 'Antalya Medical Location & VIP Logistics Protocol',
    fr: 'Localisation Médicale à Antalya & Protocole VIP',
  }[lang as Lang] || 'Antalya Medical Location & VIP Logistics Protocol';

  const subtitle = {
    tr: 'Uluslararası hasta konforu, sterilite ve gizlilik standartlarımız gereği tüm süreç kapıdan kapıya özel VIP koordinasyonla yürütülmektedir.',
    en: 'For international patient comfort, sterility, and privacy, every step is coordinated door-to-door with private VIP logistics.',
    fr: 'Pour le confort, la stérilité et la confidentialité des patients, chaque étape est assurée par une logistique VIP privée.',
  }[lang as Lang] || 'Coordinated door-to-door with private VIP logistics.';

  const features = [
    {
      icon: MapPin,
      title: { tr: 'Stratejik Sağlık Bölgesi', en: 'Prime Healthcare District', fr: 'Zone Médicale Stratégique' },
      desc: {
        tr: 'Antalya Uluslararası Havalimanı’na (AYT) 15 dakika mesafede, Lara ve Muratpaşa sahil otelleri bölgesindedir.',
        en: 'Located 15 minutes from Antalya International Airport (AYT) in the premium Lara coastal medical district.',
        fr: 'Situé à 15 minutes de l\'aéroport international d\'Antalya (AYT), dans le quartier balnéaire de Lara.'
      },
      tag: { tr: 'Antalya / AYT Havalimanı 15 Dk', en: '15 Mins from AYT Airport', fr: '15 Min de l\'Aéroport AYT' }
    },
    {
      icon: Building2,
      title: { tr: 'Ruhsatlı A++ Hastane Süitleri', en: 'Licensed A++ Surgical Suites', fr: 'Suites Chirurgicales Agréées' },
      desc: {
        tr: 'Tüm DHI operasyonları T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış tam teşekküllü özel hastane ameliyathanelerinde yapılır.',
        en: 'All DHI procedures are conducted in fully-equipped surgical suites licensed by the T.C. Ministry of Health.',
        fr: 'Toutes les interventions DHI sont réalisées dans des blocs opératoires agréés par le Ministère de la Santé.'
      },
      tag: { tr: 'T.C. Sağlık Bakanlığı Onaylı', en: 'Ministry of Health Licensed', fr: 'Agréé Ministère Santé' }
    },
    {
      icon: Car,
      title: { tr: 'Kapıdan Kapıya VIP Mercedes Transfer', en: 'Door-to-Door Mercedes Transfer', fr: 'Transfert Privé Mercedes Vito' },
      desc: {
        tr: 'Adres arama veya taksi stresi yaşamazsınız; özel şoförünüz sizi havalimanından alır, otele ve hastaneye doğrudan ulaştırır.',
        en: 'Zero navigation hassle. Your private chauffeur meets you at the arrivals gate and provides seamless transfers.',
        fr: 'Aucun stress de transport. Votre chauffeur privé vous accueille à l\'aéroport et assure tous vos trajets.'
      },
      tag: { tr: 'Özel Şoför & Mercedes Vito', en: 'Private Chauffeur Included', fr: 'Chauffeur Privé Inclus' }
    }
  ];

  const noticeTitle = {
    tr: 'Neden Randevulu ve VIP Koordinasyon Sistemi?',
    en: 'Why an Appointment-Only VIP Coordination System?',
    fr: 'Pourquoi un Système sur Rendez-vous et Coordination VIP ?',
  }[lang as Lang] || 'Why an Appointment-Only VIP Coordination System?';

  const noticeDesc = {
    tr: 'Sağlık turizminde uluslararası hasta gizliliği ve steril ameliyathane takvimi esastır. Kliniklerimiz ayaküstü sokak dükkânı formatında değil; steril ameliyathane tahsisi, hekim planlaması ve 5 yıldızlı otel rezervasyonu ile kişiye özel organize edilmektedir. Doğrulanmış rezervasyonunuz sonrasında havalimanı karşılama ekibiniz ve hastane koordinasyon dosyanız size özel olarak atanır.',
    en: 'In international medical restoration, patient privacy and sterile surgical scheduling are paramount. Procedures are not walk-in clinics; they are organized exclusively with reserved surgical suites, specialist surgeon allocation, and 5-star hotel accommodations. Upon confirmed reservation, your dedicated logistics team and clinical itinerary are assigned exclusively to you.',
    fr: 'Dans le cadre du tourisme médical international, la confidentialité des patients et la stérilité des blocs opératoires sont primordiales. Les interventions ne sont pas des consultations sans rendez-vous; elles sont planifiées sur mesure avec réservation de bloc chirurgical et hôtel 5 étoiles. Dès votre réservation confirmée, votre plan de séjour et votre chauffeur dédié vous sont attribués.',
  }[lang as Lang] || 'Procedures are organized exclusively with reserved surgical suites and VIP logistics.';

  return (
    <section id="location-protocol" className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Lokasyon & Güvenlik' : 'Location & Standards'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4 card-hover-soft"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/80">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                    {item.title[lang as Lang] || item.title['en']}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc[lang as Lang] || item.desc['en']}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-800">
                  <span>{item.tag[lang as Lang] || item.tag['en']}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#022C22] to-[#064E3B] text-white p-6 sm:p-7 rounded-3xl border border-emerald-500/30 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-amber-300 font-heading font-bold text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{noticeTitle}</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
            {noticeDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
