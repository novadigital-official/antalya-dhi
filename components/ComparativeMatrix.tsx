'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function ComparativeMatrix() {
  const { lang } = useSiteContext();

  const eyebrow = {
    tr: 'Karşılaştırma',
    en: 'Comparative Analysis',
    fr: 'Analyse Comparative',
  }[lang as Lang] || 'Comparative Analysis';

  const heading = {
    tr: 'Londra ya da Berlin\'e göre neden Antalya',
    en: 'Why Choose Antalya Over London or Berlin',
    fr: 'Pourquoi Choisir Antalya Plutôt Que Londres ou Berlin',
  }[lang as Lang] || 'Why Choose Antalya Over London or Berlin';

  const subtitle = {
    tr: 'Aynı klinik standardı, çok daha şeffaf bir maliyet ve süreç yapısı içinde.',
    en: 'The same clinical gold standard, delivered with complete cost transparency and luxury coordination.',
    fr: 'La même exigence clinique, avec une transparence totale sur les coûts et les prestations.',
  }[lang as Lang] || 'The same clinical gold standard with full transparency.';

  const rows = [
    {
      param: { tr: 'Toplam paket maliyeti', en: 'All-inclusive package cost', fr: 'Coût total du forfait' },
      london: '£6.500+',
      paris: '€9.900+',
      berlin: '€7.500+',
      antalya: { tr: '₺110.000 (~£1,900 / €2.200)', en: '£1,900 (~€2,200 / ₺110k)', fr: '2 200€ (~£1,900)' }
    },
    {
      param: { tr: 'Randevu bekleme süresi', en: 'Scheduling wait time', fr: 'Délai d\'attente' },
      london: { tr: '5-8 hafta', en: '5-8 weeks', fr: '5-8 semaines' },
      paris: { tr: '6 hafta', en: '6 weeks', fr: '6 semaines' },
      berlin: { tr: '4 hafta', en: '4 weeks', fr: '4 semaines' },
      antalya: { tr: '48 saat içinde plan', en: '48-hour priority slot', fr: 'Prise en charge en 48h' }
    },
    {
      param: { tr: 'İmplantasyon yöntemi', en: 'Implantation method', fr: 'Méthode d\'implantation' },
      london: 'Standart FUE',
      paris: 'FUE Classique',
      berlin: 'Neşter FUE',
      antalya: { tr: 'Choi Pen ile %100 kalemli DHI', en: '100% Direct Choi Implanter Pen', fr: '100% Stylo Choi Pen (DHI)' }
    },
    {
      param: { tr: 'Takip süreci', en: 'Post-op aftercare protocol', fr: 'Protocole de suivi' },
      london: { tr: 'Kısa süreli', en: 'Short term', fr: 'Court terme' },
      paris: { tr: 'Kısıtlı', en: 'Limited', fr: 'Restreint' },
      berlin: { tr: 'Kısa süreli', en: 'Short term', fr: 'Court terme' },
      antalya: { tr: '12 ay tıbbi takip protokolü', en: '12-month medical follow-up', fr: 'Suivi médical sur 12 mois' }
    },
    {
      param: { tr: 'Konaklama & VIP transfer', en: 'Luxury hotel & VIP transfer', fr: 'Hôtel 5★ & Transfert VIP' },
      london: { tr: 'Dahil değil', en: 'Not included', fr: 'Non inclus' },
      paris: { tr: 'Dahil değil', en: 'Not included', fr: 'Non inclus' },
      berlin: { tr: 'Kısmen', en: 'Partial', fr: 'Partiel' },
      antalya: { tr: '5★ otel + VIP Mercedes Vito dahil', en: '5★ hotel + VIP Mercedes Vito included', fr: 'Hôtel 5★ + Mercedes Vito inclus' }
    }
  ];

  return (
    <section id="neden" className="py-20 bg-[#EFE7D8]">
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

        {/* Compare Strip Table */}
        <div className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] rounded-[4px] overflow-hidden shadow-xs">
          
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 border-b border-[rgba(23,35,28,0.12)] font-mono text-[11px] uppercase tracking-wider text-[#4A5A4D]">
            <div className="col-span-4 p-5 bg-[#E4D9C4]">
              {lang === 'tr' ? 'Parametre' : 'Parameter'}
            </div>
            <div className="col-span-2 p-5 bg-[#E4D9C4] text-center">Londra</div>
            <div className="col-span-2 p-5 bg-[#E4D9C4] text-center">Paris</div>
            <div className="col-span-2 p-5 bg-[#E4D9C4] text-center">Berlin</div>
            <div className="col-span-2 p-5 bg-[#17231C] text-[#A9662F] text-center font-bold">
              Antalya VIP DHI
            </div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-[rgba(23,35,28,0.12)] text-sm">
            {rows.map((r, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 items-stretch hover:bg-[#F3EFEA]/40 transition-colors">
                
                {/* Parameter Name */}
                <div className="md:col-span-4 p-4 md:p-5 font-semibold text-[#17231C] flex items-center">
                  <span>{r.param[lang as Lang] || r.param['en']}</span>
                </div>

                {/* London */}
                <div className="md:col-span-2 p-3 md:p-5 text-[#4A5A4D] flex md:justify-center items-center border-t md:border-t-0 border-[rgba(23,35,28,0.08)]">
                  <span className="md:hidden font-mono text-[10px] uppercase text-[#4A5A4D]/70 w-24">Londra:</span>
                  <span>{typeof r.london === 'string' ? r.london : r.london[lang as Lang] || r.london['en']}</span>
                </div>

                {/* Paris */}
                <div className="md:col-span-2 p-3 md:p-5 text-[#4A5A4D] flex md:justify-center items-center border-t md:border-t-0 border-[rgba(23,35,28,0.08)]">
                  <span className="md:hidden font-mono text-[10px] uppercase text-[#4A5A4D]/70 w-24">Paris:</span>
                  <span>{typeof r.paris === 'string' ? r.paris : r.paris[lang as Lang] || r.paris['en']}</span>
                </div>

                {/* Berlin */}
                <div className="md:col-span-2 p-3 md:p-5 text-[#4A5A4D] flex md:justify-center items-center border-t md:border-t-0 border-[rgba(23,35,28,0.08)]">
                  <span className="md:hidden font-mono text-[10px] uppercase text-[#4A5A4D]/70 w-24">Berlin:</span>
                  <span>{typeof r.berlin === 'string' ? r.berlin : r.berlin[lang as Lang] || r.berlin['en']}</span>
                </div>

                {/* Antalya VIP DHI (Highlighted) */}
                <div className="md:col-span-2 p-4 md:p-5 bg-[rgba(169,102,47,0.06)] font-semibold text-[#A9662F] flex md:justify-center items-center border-l-0 md:border-l-2 border-[#A9662F] border-t md:border-t-0">
                  <span className="md:hidden font-mono text-[10px] uppercase text-[#A9662F] w-24">Antalya DHI:</span>
                  <span>{typeof r.antalya === 'string' ? r.antalya : r.antalya[lang as Lang] || r.antalya['en']}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
