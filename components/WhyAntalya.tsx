'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

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
      icon: '☀',
      title: { en: 'Mediterranean Recovery Climate', fr: 'Climat Méditerranéen Doux', tr: 'Akdeniz İyileşme İklimi' },
      desc: { en: 'Warm coastal air and relaxed resort environment accelerate post-operative healing and stress reduction.', fr: 'Climat idéal et environnement apaisant favorisant la guérison post-opératoire.', tr: 'Ilıman Akdeniz iklimi ve huzurlu ortam operasyon sonrası iyileşme sürecinizi hızlandırır.' }
    },
    {
      icon: '🏥',
      title: { en: 'JCI Accredited Hospitals', fr: 'Hôpitaux Certifiés JCI', tr: 'Uluslararası Onaylı Hastaneler' },
      desc: { en: 'Operated in state-of-the-art sterile hospital facilities matching top European medical standards.', fr: 'Interventions réalisées dans des hôpitaux stériles certifiés aux normes européennes.', tr: 'Avrupa medikal standartlarına uygun, tam teşekküllü ve steril hastane ortamında operasyon.' }
    },
    {
      icon: '✈',
      title: { en: 'Direct Flights Across Europe', fr: 'Vols Directs Depuis l\'Europe', tr: 'Avrupa\'dan Direkt Uçuş Kolaylığı' },
      desc: { en: 'Direct 3-4 hour flights from London, Paris, Berlin, Frankfurt, and major European hubs.', fr: 'Vols directs en 3-4h depuis Paris, Lyon, Londres et les grandes métropoles.', tr: 'Londra, Paris, Berlin ve tüm büyük Avrupa şehirlerinden 3-4 saatlik direkt uçuş kolaylığı.' }
    },
    {
      icon: '🏨',
      title: { en: '5-Star Resort Hospitality', fr: 'Hébergement 5 Étoiles', tr: '5 Yıldızlı Otel & Tatil Konforu' },
      desc: { en: 'Combine your medical procedure with a relaxing luxury resort stay at up to 70% lower cost than UK/EU.', fr: 'Combinez votre soin médical avec un séjour de luxe jusqu\'à 70% moins cher qu\'en Europe.', tr: 'İngiltere ve Avrupa\'ya göre %70\'e varan maliyet avantajı ile lüks otel konaklaması.' }
    }
  ];

  const tagLeft = { en: 'Antalya Health Tourism', fr: 'Tourisme Médical Antalya', tr: 'Antalya Sağlık Turizmi' }[lang as Lang] || 'Antalya Health Tourism';
  const tagRight = { en: '✓ Advantage', fr: '✓ Avantage', tr: '✓ Avantaj' }[lang as Lang] || '✓ Advantage';

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
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 font-black text-2xl flex items-center justify-center mb-4 border border-blue-100 shadow-xs">
                {r.icon}
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
              <span>{tagRight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
