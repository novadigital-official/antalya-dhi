'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';
import { Check, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function PricingPackages() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const standardPrice = mounted ? formatPrice(PRICES.standard[currency], currency) : '£1,550';
  const vipPrice = mounted ? formatPrice(PRICES.vip[currency], currency) : '£1,900';

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

  return (
    <section id="packages" className="py-20 bg-slate-950 text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'Şeffaf Fiyatlandırma' : 'Transparent Rates'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 2 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* PACKAGE 1: STANDARD DHI (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 card-hover backdrop-blur-md">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {lang === 'tr' ? 'Standart Operasyon' : 'Clinical Procedure Package'}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                  Standard DHI
                </h3>
                <p className="text-xs text-slate-400 font-normal mt-1 leading-relaxed">
                  {lang === 'tr' ? 'Kendi konaklama ve transferini ayarlayan hastalar için cerrahi odaklı paket.' : 'Surgery-focused clinical package for self-arranging international patients.'}
                </p>
              </div>

              {/* Price Box */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                <span className="text-[11px] text-slate-400 font-medium block">Total Fixed Procedure Rate</span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{standardPrice}</span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg">
                    (€1,800 / £1,550 / ₺90.000)
                  </span>
                </div>
              </div>

              {/* Inclusions List */}
              <ul className="space-y-3 text-xs text-slate-200 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Ruhsatlı Hastanede Maksimum Greft DHI Operasyonu' : 'Maximum Graft DHI Operation in Licensed Hospital'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'İğnesiz Konforlu Anestezi Altyapısı' : 'Needle-Free Comfort Anesthesia System'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Operasyon Sonrası İlaç ve Özel Şampuan Kiti' : 'Post-Op Medication & Special Shampoo Kit'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? '12 Ay Uzaktan Medikal Takip Protokolü' : '12-Month Remote Post-Op Follow-Up Protocol'}</span>
                </li>
              </ul>
            </div>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full min-h-[48px] bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <span>{t(lang as Lang, 'packages.book_cta')}</span>
            </a>
          </div>

          {/* PACKAGE 2: VIP ANTALYA EXPERIENCE (7 cols — Highlighted Featured) */}
          <div className="lg:col-span-7 bg-slate-900 border-2 border-blue-500/80 rounded-3xl p-7 sm:p-9 shadow-2xl relative flex flex-col justify-between space-y-6 card-hover glow-blue">
            {/* VIP Popular Badge */}
            <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-blue-400/40">
              <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
              <span>{lang === 'tr' ? 'En Çok Tercih Edilen VIP Paket' : 'Most Requested VIP All-Inclusive'}</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                    {lang === 'tr' ? 'Tam Kapsamlı Sağlık Turizmi Deneyimi' : 'Complete Luxury Medical Experience'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
                    VIP Antalya Experience
                  </h3>
                </div>

                {/* Price */}
                <div className="text-left sm:text-right">
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">{vipPrice}</span>
                  <span className="text-[11px] text-slate-400 block font-semibold">(€2,200 / £1,900 / ₺110.000)</span>
                </div>
              </div>

              {/* 3-Day Itinerary Steps */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {lang === 'tr' ? '3 Günlük Cerrahi Seyahat Planı:' : 'Your 3-Day Medical Itinerary:'}
                </div>

                <div className="space-y-2.5">
                  {/* Day 1 */}
                  <div className="flex items-start gap-3 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {lang === 'tr' ? '1. Gün: Havalimanı Karşılama & Otele Yerleşme' : 'Day 1: VIP Airport Arrival & 5★ Hotel Stay'}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {lang === 'tr' ? 'Antalya Havalimanı\'ndan Mercedes Vito ile özel transfer ve 5 yıldızlı otelde dinlenme.' : 'Private Mercedes Vito transfer from Antalya Airport directly to your luxury hotel.'}
                      </p>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="flex items-start gap-3 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {lang === 'tr' ? '2. Gün: Ameliyathane, Choi Pen DHI & PRP Seansı' : 'Day 2: Surgery Day, Choi Pen DHI & PRP Therapy'}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {lang === 'tr' ? 'Hekim ön çizgi planlaması, iğnesiz anestezi, maksimum greft DHI ekimi ve kök güçlendirici PRP.' : 'Surgeon hairline design, needle-free anesthesia, full Choi Pen DHI placement & PRP.'}
                      </p>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="flex items-start gap-3 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
                    <div className="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {lang === 'tr' ? '3. Gün: Medikal Yıkama Eğitimi & VIP Uğurlama' : 'Day 3: Clinical Wash Training & VIP Departure'}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {lang === 'tr' ? 'Uzman kontrolünde ilk saç yıkaması, 12 aylık bakım kiti teslimi ve havalimanına dönüş transferi.' : 'First clinical hair wash, handover of 12-month aftercare kit, and return transfer.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="w-full min-h-[52px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-xl shadow-blue-600/40 hover:scale-101 active:scale-98 gap-2"
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
