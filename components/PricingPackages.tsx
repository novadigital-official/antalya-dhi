'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';
import { Check, Plane, Stethoscope, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function PricingPackages() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const standardMain = mounted ? formatPrice(PRICES.standard[currency], currency) : '£1,550';
  const vipMain = mounted ? formatPrice(PRICES.vip[currency], currency) : '£1,900';

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="packages" className="w-full space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-normal text-[#1C1917] tracking-tight">
          {lang === 'tr' ? 'Şeffaf Paketler & 3 Günlük Tedavi Yolculuğu' : 'All-Inclusive Packages & 3-Day Journey'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-2xl mx-auto">
          {lang === 'tr' ? 'Havalimanı karşılamasından 12 aylık takibe kadar her adımın şeffafça planlandığı cerrahi paketlerimiz.' : 'A fully transparent 3-day itinerary from airport arrival to complete 12-month post-operative care.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
        
        {/* PACKAGE 1: STANDARD CLINICAL PACKAGE (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#E6DFD5] rounded-3xl p-7 shadow-xs flex flex-col justify-between space-y-6 card-hover-lift">
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                {lang === 'tr' ? 'Operasyon Odaklı Paket' : 'Clinical Procedure Package'}
              </span>
              <h3 className="text-xl font-editorial font-bold text-[#1C1917] mt-1">
                Standard DHI
              </h3>
              <p className="text-xs text-stone-500 font-normal mt-1 leading-relaxed">
                {lang === 'tr' ? 'Konaklama ve transferini kendi organize eden veya yerel hastalar için saf cerrahi paket.' : 'Surgery-focused clinical package for self-arranging international patients.'}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-[#FAF8F5] border border-[#E6DFD5] rounded-2xl space-y-1">
              <span className="text-[11px] text-stone-500 font-medium block">{lang === 'tr' ? 'Sabit Operasyon Ücreti' : 'Fixed Procedure Rate'}</span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl font-bold text-[#1C1917] font-editorial">{standardMain}</span>
                <span className="text-xs font-semibold text-stone-500">
                  (€1,800 / £1,550 / ₺90.000)
                </span>
              </div>
            </div>

            {/* Inclusions List */}
            <ul className="space-y-3 text-xs text-stone-700 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C28251] shrink-0 mt-0.5" />
                <span>{lang === 'tr' ? 'Ruhsatlı Hastanede Maksimum Greft DHI Operasyonu' : 'Maximum Graft DHI Operation in Licensed Hospital'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C28251] shrink-0 mt-0.5" />
                <span>{lang === 'tr' ? 'İğnesiz Konforlu Anestezi Altyapısı' : 'Needle-Free Comfort Anesthesia System'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C28251] shrink-0 mt-0.5" />
                <span>{lang === 'tr' ? 'Operasyon Sonrası İlaç ve Özel Şampuan Kiti' : 'Post-Op Medication & Special Shampoo Kit'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C28251] shrink-0 mt-0.5" />
                <span>{lang === 'tr' ? '12 Ay Medikal Takip ve Uzman Desteği' : '12-Month Remote Post-Op Follow-Up Protocol'}</span>
              </li>
            </ul>
          </div>

          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="w-full min-h-[48px] bg-[#161412] hover:bg-[#2B2723] text-white font-semibold text-xs rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <span>{t(lang as Lang, 'packages.book_cta')}</span>
          </a>
        </div>

        {/* PACKAGE 2: VIP ALL-INCLUSIVE ITINERARY EXPERIENCE (7 cols) */}
        <div className="lg:col-span-7 bg-[#161412] text-white border border-[#C28251]/40 rounded-3xl p-7 sm:p-8 shadow-xl relative flex flex-col justify-between space-y-6 card-hover-lift">
          {/* Subtle VIP Badge */}
          <div className="absolute -top-3 left-8 bg-[#C28251] text-white font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {lang === 'tr' ? 'En Çok Tercih Edilen All-Inclusive Paket' : 'Most Requested All-Inclusive Experience'}
          </div>

          <div className="space-y-6 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#332E2A] pb-5">
              <div>
                <span className="text-[11px] font-bold text-[#D49A70] uppercase tracking-wider block">
                  {lang === 'tr' ? 'Tam Kapsamlı Sağlık Turizmi Deneyimi' : 'Complete Medical Concierge Experience'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-white mt-0.5">
                  VIP Antalya Experience
                </h3>
              </div>

              {/* Price */}
              <div className="text-left sm:text-right">
                <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#E8C5A8]">{vipMain}</span>
                <span className="text-[11px] text-stone-400 block">(€2,200 / £1,900 / ₺110.000)</span>
              </div>
            </div>

            {/* 3-Day Tangible Itinerary Steps */}
            <div className="space-y-3.5">
              <div className="text-xs font-bold text-[#D49A70] uppercase tracking-wider">
                {lang === 'tr' ? '3 Günlük Cerrahi & Konaklama Seyahat Planı:' : 'Your 3-Day Medical Itinerary:'}
              </div>

              <div className="space-y-3">
                {/* Day 1 */}
                <div className="flex items-start gap-3 bg-[#211E1B] p-3 rounded-2xl border border-[#332E2A]">
                  <div className="w-6 h-6 rounded-lg bg-[#C28251]/20 text-[#D49A70] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {lang === 'tr' ? '1. Gün: Havalimanı Karşılama & Otele Yerleşme' : 'Day 1: VIP Airport Arrival & Hotel Check-in'}
                    </h4>
                    <p className="text-[11px] text-stone-400 font-normal mt-0.5">
                      {lang === 'tr' ? 'Antalya Havalimanı\'ndan Mercedes Vito ile özel transfer ve 5 yıldızlı otelde dinlenme.' : 'Private Mercedes Vito transfer from Antalya Airport directly to your luxury hotel room.'}
                    </p>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="flex items-start gap-3 bg-[#211E1B] p-3 rounded-2xl border border-[#332E2A]">
                  <div className="w-6 h-6 rounded-lg bg-[#C28251]/20 text-[#D49A70] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {lang === 'tr' ? '2. Gün: Ameliyathane, Choi Pen DHI & PRP Seansı' : 'Day 2: Surgery Day, Choi Pen DHI & PRP Therapy'}
                    </h4>
                    <p className="text-[11px] text-stone-400 font-normal mt-0.5">
                      {lang === 'tr' ? 'Hekim ön çizgi planlaması, iğnesiz anestezi, maksimum greft DHI ekimi ve kök güçlendirici PRP.' : 'Surgeon hairline design, needle-free anesthesia, full Choi Pen DHI placement & PRP.'}
                    </p>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="flex items-start gap-3 bg-[#211E1B] p-3 rounded-2xl border border-[#332E2A]">
                  <div className="w-6 h-6 rounded-lg bg-[#C28251]/20 text-[#D49A70] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {lang === 'tr' ? '3. Gün: Medikal Yıkama Eğitimi & VIP Uğurlama' : 'Day 3: Clinical Wash Training & VIP Departure'}
                    </h4>
                    <p className="text-[11px] text-stone-400 font-normal mt-0.5">
                      {lang === 'tr' ? 'Uzman kontrolünde ilk saç yıkaması, 12 aylık bakım kiti teslimi ve havalimanına dönüş transferi.' : 'First clinical hair wash, handover of 12-month aftercare kit, and VIP return transfer.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#analysis-wizard"
            onClick={scrollToWizard}
            className="w-full min-h-[50px] bg-[#C28251] hover:bg-[#A36538] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-98 gap-2"
          >
            <span>{t(lang as Lang, 'packages.book_cta')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
