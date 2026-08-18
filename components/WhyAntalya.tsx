'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

// SVG icons — minimal, single-color, no emojis
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);
const HospitalIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
);
const PlaneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);
const HotelIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export default function WhyAntalya() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Why Choose Antalya for Your DHI Hair Transplant?',
    fr: 'Pourquoi Choisir Antalya pour Votre Greffe DHI ?',
    tr: 'Neden Saç Ekimi İçin Antalya\'yı Tercih Etmelisiniz?',
  }[lang as Lang] || 'Why Choose Antalya for Your DHI Hair Transplant?';

  const subtitle = {
    en: 'Discover why thousands of European patients choose Antalya over other destinations.',
    fr: 'Découvrez pourquoi des milliers de patients européens choisissent Antalya.',
    tr: 'Binlerce Avrupalı hastanın neden saç ekiminde Antalya\'yı tercih ettiğini keşfedin.',
  }[lang as Lang] || 'Discover why thousands of European patients choose Antalya over other destinations.';

  const reasons = [
    {
      Icon: SunIcon,
      title: { en: 'Mediterranean Recovery Climate', fr: 'Climat Méditerranéen Doux', tr: 'Akdeniz İyileşme İklimi' },
      desc: { en: 'Warm coastal air and relaxed resort environment accelerate post-operative healing and reduce recovery stress.', fr: 'Climat idéal et environnement apaisant favorisant la guérison post-opératoire.', tr: 'Ilıman Akdeniz iklimi ve huzurlu ortam operasyon sonrası iyileşme sürecinizi hızlandırır.' }
    },
    {
      Icon: HospitalIcon,
      title: { en: 'Licensed Partner Hospitals', fr: 'Hôpitaux Partenaires Agréés', tr: 'Ruhsatlı Partner Hastaneler' },
      desc: { en: 'Procedures performed in T.C. Ministry of Health licensed facilities meeting international clinical standards.', fr: 'Interventions réalisées dans des hôpitaux agréés par le Ministère de la Santé turc.', tr: 'T.C. Sağlık Bakanlığı ruhsatlı, uluslararası medikal standartlara uygun hastane ortamında operasyon.' }
    },
    {
      Icon: PlaneIcon,
      title: { en: 'Direct Flights Across Europe', fr: 'Vols Directs Depuis l\'Europe', tr: 'Avrupa\'dan Direkt Uçuş Kolaylığı' },
      desc: { en: 'Direct 3–4 hour flights from London, Paris, Berlin, Frankfurt and major European hubs.', fr: 'Vols directs en 3-4h depuis Paris, Lyon, Londres et les grandes métropoles.', tr: 'Londra, Paris, Berlin ve tüm büyük Avrupa şehirlerinden 3–4 saatlik direkt uçuş kolaylığı.' }
    },
    {
      Icon: HotelIcon,
      title: { en: '5-Star Resort & Competitive Rates', fr: 'Hébergement 5 Étoiles & Tarifs Compétitifs', tr: '5 Yıldızlı Otel & Avantajlı Fiyatlar' },
      desc: { en: 'Combine your procedure with a premium resort stay at significantly lower cost than UK or EU clinics.', fr: 'Combinez votre soin médical avec un séjour de luxe à coût bien inférieur à l\'Europe.', tr: 'Tedavinizi İngiltere ve Avrupa\'ya kıyasla önemli ölçüde avantajlı fiyatlarla lüks otel konaklamasıyla birleştirin.' }
    }
  ];

  const tagLeft = { en: 'Antalya Health Tourism', fr: 'Tourisme Médical Antalya', tr: 'Antalya Sağlık Turizmi' }[lang as Lang] || 'Antalya Health Tourism';

  return (
    <div id="why-antalya" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((r, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-3 hover:border-blue-500 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                <r.Icon />
              </div>
              <h3 className="font-black text-base text-slate-900 mb-2 leading-tight">
                {r.title[lang as Lang] || r.title['en']}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {r.desc[lang as Lang] || r.desc['en']}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-blue-600">
              <span>{tagLeft}</span>
              <span>&#10003;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
