'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function SocialProof() {
  const { lang } = useSiteContext();

  const title = {
    en: 'What Our Patients Say',
    fr: 'Ce Que Disent Nos Patients',
    tr: 'Hastalarımız Ne Diyor',
  }[lang as Lang] || 'What Our Patients Say';

  const metricsRow = {
    en: { rating: 'Rated 4.9/5 on Trustpilot', procedures: '500+ Successful Procedures', countries: '35+ Countries Served' },
    fr: { rating: 'Noté 4,9/5 sur Trustpilot', procedures: 'Plus de 500 interventions réussies', countries: 'Plus de 35 pays desservis' },
    tr: { rating: 'Trustpilot\'ta 4.9/5 puan', procedures: '500+ Başarılı İşlem', countries: '35+ Ülkeden Hasta' },
  }[lang as Lang] || { rating: 'Rated 4.9/5 on Trustpilot', procedures: '500+ Successful Procedures', countries: '35+ Countries Served' };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm min-h-[48px]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-black text-sm text-slate-900">James W.</div>
                <div className="text-xs text-slate-500">London, United Kingdom</div>
              </div>
              <div className="text-amber-500 text-sm">★★★★★</div>
            </div>
            <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
              "I was nervous about travelling abroad for my procedure, but the VIP package made everything seamless. The Mercedes pickup from the airport, the luxury hotel, and most importantly — the results are incredible. 8 months in and my hair looks completely natural."
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
              3,800 Grafts — VIP Package
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm min-h-[48px]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-black text-sm text-slate-900">Antoine D.</div>
                <div className="text-xs text-slate-500">Lyon, France</div>
              </div>
              <div className="text-amber-500 text-sm">★★★★★</div>
            </div>
            <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
              "J'ai comparé les prix en France et en Turquie. Pour le même résultat, j'ai payé 4 fois moins cher à Antalya. L'équipe parle français, l'hôtel était magnifique. Je recommande à 100%."
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
              4,200 Greffons — Forfait VIP
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm min-h-[48px]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-black text-sm text-slate-900">Emre K.</div>
                <div className="text-xs text-slate-500">İstanbul, Türkiye</div>
              </div>
              <div className="text-amber-500 text-sm">★★★★★</div>
            </div>
            <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
              "DHI tekniğini tercih ettim çünkü tıraşsız uygulama seçeneği vardı. Sonuçlar beklentimin çok üzerinde. Klinik hijyeni ve doktor ilgisi üst düzeydi."
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
              3,000 Greft — Standart Paket
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center text-center gap-4 min-h-[48px]">
          <div className="font-bold">{metricsRow.rating}</div>
          <div className="hidden md:block w-px h-6 bg-slate-700"></div>
          <div className="font-bold">{metricsRow.procedures}</div>
          <div className="hidden md:block w-px h-6 bg-slate-700"></div>
          <div className="font-bold">{metricsRow.countries}</div>
        </div>
      </div>
    </section>
  );
}
