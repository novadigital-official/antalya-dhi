'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';
import { Check, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function PricingPackages() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const standardPrice = mounted ? formatPrice(PRICES.standard[currency], currency) : (lang === 'tr' ? '90.000 TL' : '£1,550');
  const vipPrice = mounted ? formatPrice(PRICES.vip[currency], currency) : (lang === 'tr' ? '110.000 TL' : '£1,900');

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const title = {
    tr: 'Şeffaf Paketler & 3 Günlük Cerrahi Yolculuk',
    en: 'Transparent Packages & 3-Day Medical Journey',
    fr: 'Forfaits Transparents & Séjour Médical de 3 Jours',
  }[lang as Lang] || 'Transparent Packages & 3-Day Medical Journey';

  const subtitle = {
    tr: 'Havalimanı VIP karşılamasından taburcu gününe kadar her detayın dahil olduğu şeffaf fiyatlandırma.',
    en: 'From your airport VIP pickup to your final clinical wash, every step is fully coordinated with zero hidden costs.',
    fr: 'De votre arrivée VIP à l\'aéroport jusqu\'aux soins finaux, chaque étape est incluse sans aucun frais caché.',
  }[lang as Lang] || 'Fully coordinated with zero hidden costs.';

  const fixedRateText = {
    tr: 'Sabit Paket Ücreti',
    en: 'Total Fixed Rate',
    fr: 'Tarif Forfaitaire Fixe',
  }[lang as Lang] || 'Total Fixed Rate';

  const standardSubtext = {
    tr: '(€1.800 / £1.550 / 90.000 ₺)',
    en: '(€1,800 / £1,550 / ₺90k)',
    fr: '(1 800€ / £1,550 / 90 000 ₺)',
  }[lang as Lang] || '(€1,800 / £1,550 / ₺90k)';

  const vipSubtext = {
    tr: '(€2.200 / £1.900 / 110.000 ₺)',
    en: '(€2,200 / £1,900 / ₺110k)',
    fr: '(2 200€ / £1,900 / 110 000 ₺)',
  }[lang as Lang] || '(€2,200 / £1,900 / ₺110k)';

  return (
    <section id="packages" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Şeffaf Fiyatlandırma' : 'Transparent Rates'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 2 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* PACKAGE 1: STANDARD DHI (5 cols — Clean White Card) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5 card-hover-soft">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {lang === 'tr' ? 'Standart Operasyon' : lang === 'fr' ? 'Intervention Seule' : 'Procedure-Focused Package'}
                </span>
                <h3 className="text-xl font-heading font-bold text-slate-900 mt-1">
                  Standard DHI
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                  {lang === 'tr' ? 'Kendi konaklama ve transferini ayarlayan hastalar için cerrahi paket.' : lang === 'fr' ? 'Forfait chirurgical pour les patients organisant eux-mêmes leur séjour.' : 'Surgery-focused clinical package for self-arranging patients.'}
                </p>
              </div>

              {/* Price Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <span className="text-[11px] text-slate-500 font-medium block">{fixedRateText}</span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl font-extrabold text-slate-900 font-heading">{standardPrice}</span>
                  <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-lg">
                    {standardSubtext}
                  </span>
                </div>
              </div>

              {/* Inclusions List */}
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Ruhsatlı Hastanede Maksimum Greft DHI' : 'Maximum Graft DHI Operation in Licensed Hospital'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'İğnesiz Konforlu Anestezi Altyapısı' : 'Needle-Free Comfort Anesthesia System'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Operasyon Sonrası İlaç ve Özel Şampuan' : 'Post-Op Medication & Special Shampoo Kit'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? '12 Ay Uzaktan Medikal Takip' : '12-Month Remote Follow-Up Protocol'}</span>
                </li>
              </ul>
            </div>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full min-h-[46px] bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <span>{t(lang as Lang, 'packages.book_cta')}</span>
            </a>
          </div>

          {/* PACKAGE 2: VIP ANTALYA EXPERIENCE (7 cols — Deep Emerald Luxury Gradient) */}
          <div className="lg:col-span-7 bg-emerald-card text-white rounded-3xl p-6 sm:p-8 shadow-xl relative flex flex-col justify-between space-y-5 card-hover-soft border border-emerald-500/40">
            {/* VIP Popular Badge */}
            <div className="absolute -top-3.5 left-7 bg-amber-400 text-slate-950 font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-slate-950" />
              <span>{lang === 'tr' ? 'En Çok Tercih Edilen VIP Paket' : lang === 'fr' ? 'Forfait VIP le Plus Demandé' : 'Most Requested VIP All-Inclusive'}</span>
            </div>

            <div className="space-y-5 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-emerald-600/30 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    {lang === 'tr' ? 'Tam Kapsamlı Sağlık Turizmi Deneyimi' : lang === 'fr' ? 'Expérience Médicale Complète Tout Inclus' : 'Complete Luxury Medical Experience'}
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-white mt-0.5">
                    VIP Antalya Experience
                  </h3>
                </div>

                {/* Price */}
                <div className="text-left sm:text-right">
                  <span className="text-3xl font-extrabold font-heading text-emerald-300">{vipPrice}</span>
                  <span className="text-[11px] text-emerald-200/80 block font-semibold">{vipSubtext}</span>
                </div>
              </div>

              {/* 3-Day Itinerary Steps */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                  {lang === 'tr' ? '3 Günlük Cerrahi Seyahat Planı:' : lang === 'fr' ? 'Votre Programme Médical de 3 Jours:' : 'Your 3-Day Medical Itinerary:'}
                </div>

                <div className="space-y-2">
                  {/* Day 1 */}
                  <div className="flex items-start gap-3 bg-emerald-950/60 p-3 rounded-2xl border border-emerald-600/30">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {lang === 'tr' ? '1. Gün: Havalimanı Karşılama & 5★ Otele Yerleşme' : lang === 'fr' ? 'Jour 1: Arrivée VIP & Installation Hôtel 5★' : 'Day 1: VIP Airport Arrival & 5★ Hotel Stay'}
                      </h4>
                      <p className="text-[11px] text-emerald-200/80 font-normal">
                        {lang === 'tr' ? 'Mercedes Vito ile özel transfer ve 5 yıldızlı otelde dinlenme.' : lang === 'fr' ? 'Transfert privé Mercedes Vito directement à votre hôtel.' : 'Private Mercedes Vito transfer directly to your luxury hotel.'}
                      </p>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="flex items-start gap-3 bg-emerald-950/60 p-3 rounded-2xl border border-emerald-600/30">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {lang === 'tr' ? '2. Gün: Ameliyathane, Choi Pen DHI & PRP Seansı' : lang === 'fr' ? 'Jour 2: Intervention DHI Choi Pen & Séance PRP' : 'Day 2: Surgery Day, Choi Pen DHI & PRP Therapy'}
                      </h4>
                      <p className="text-[11px] text-emerald-200/80 font-normal">
                        {lang === 'tr' ? 'Hekim ön çizgi planlaması, iğnesiz anestezi, maksimum greft DHI ve PRP.' : lang === 'fr' ? 'Dessin de ligne, anesthésie sans aiguille, greffe DHI et PRP.' : 'Surgeon hairline design, needle-free anesthesia, Choi Pen DHI & PRP.'}
                      </p>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="flex items-start gap-3 bg-emerald-950/60 p-3 rounded-2xl border border-emerald-600/30">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {lang === 'tr' ? '3. Gün: Medikal Yıkama Eğitimi & VIP Uğurlama' : lang === 'fr' ? 'Jour 3: Formation au Lavage & Départ VIP' : 'Day 3: Clinical Wash Training & VIP Departure'}
                      </h4>
                      <p className="text-[11px] text-emerald-200/80 font-normal">
                        {lang === 'tr' ? 'Uzman kontrolünde ilk yıkama, 12 aylık bakım kiti teslimi ve dönüş transferi.' : lang === 'fr' ? 'Premier lavage, remise du kit 12 mois et transfert retour.' : 'First hair wash, handover of 12-month aftercare kit, and return transfer.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full min-h-[48px] bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-emerald-950/50 hover:scale-101 active:scale-98 gap-2"
            >
              <span>{t(lang as Lang, 'packages.book_cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
