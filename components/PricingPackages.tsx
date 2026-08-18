'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';

export default function PricingPackages() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const standardPrice = mounted ? formatPrice(PRICES.standard[currency], currency) : '₺90.000';
  const vipPrice = mounted ? formatPrice(PRICES.vip[currency], currency) : '₺110.000';

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const eyebrow = { tr: 'Şeffaf Paketler', en: 'Transparent Packages', fr: 'Forfaits Transparents' }[lang as Lang] || 'Transparent Packages';
  const title = {
    tr: 'Gizli maliyet olmadan, günü gününe yolculuk planı',
    en: 'Clear Day-by-Day Journey with Zero Hidden Costs',
    fr: 'Un Itinéraire Jour par Jour sans Aucun Frais Caché',
  }[lang as Lang] || 'Clear Day-by-Day Journey with Zero Hidden Costs';

  const subtitle = {
    tr: 'Havaalanı karşılamadan taburcu gününe kadar her adım paketin içinde.',
    en: 'From your airport VIP pickup to your final clinical wash, every step is fully coordinated.',
    fr: 'De l\'accueil à l\'aéroport jusqu\'au dernier lavage clinique, chaque étape est intégrée.',
  }[lang as Lang] || 'Every step is fully coordinated.';

  return (
    <section id="paketler" className="py-20 bg-[#EFE7D8]">
      <div className="wrap">
        
        {/* Section Head */}
        <div className="max-w-xl mb-12">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#17231C] mt-3.5 tracking-tight leading-snug">
            {title}
          </h2>
          <p className="text-[#4A5A4D] text-base mt-3.5 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Plan 1: Standard DHI */}
          <div className="bg-[#FBF8F1] border border-[rgba(23,35,28,0.12)] rounded-[4px] p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#A9662F]">
                {lang === 'tr' ? 'Standart' : 'Standard'}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#17231C] mt-2.5">
                Standard DHI
              </h3>
              
              <div className="mt-4 font-mono text-3xl font-semibold text-[#17231C]">
                {standardPrice}
                <span className="block text-xs font-normal text-[#4A5A4D] font-sans mt-1">
                  {lang === 'tr' ? 'Yalnızca cerrahi operasyon — konaklama hariç' : 'Surgery-only procedure — hotel not included'}
                </span>
              </div>

              {/* Day-by-Day Timeline */}
              <div className="mt-7 space-y-0">
                <div className="flex gap-4 py-3.5 border-t border-[rgba(23,35,28,0.12)]">
                  <div className="font-mono text-xs text-[#A9662F] shrink-0 pt-0.5 font-semibold">01</div>
                  <div>
                    <div className="text-sm font-semibold text-[#17231C]">
                      {lang === 'tr' ? 'Muayene & ekim çizgisi tasarımı' : 'Consultation & Hairline Design'}
                    </div>
                    <div className="text-xs text-[#4A5A4D] mt-0.5">
                      {lang === 'tr' ? 'Uzman hekim ile birebir planlama' : 'In-person surgeon consultation & mapping'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 py-3.5 border-t border-[rgba(23,35,28,0.12)]">
                  <div className="font-mono text-xs text-[#A9662F] shrink-0 pt-0.5 font-semibold">02</div>
                  <div>
                    <div className="text-sm font-semibold text-[#17231C]">
                      {lang === 'tr' ? 'DHI operasyonu' : 'Choi Pen DHI Operation'}
                    </div>
                    <div className="text-xs text-[#4A5A4D] mt-0.5">
                      {lang === 'tr' ? 'Ruhsatlı hastanede, maksimum greft kapasitesiyle' : 'Licensed hospital with maximum graft capacity'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 py-3.5 border-t border-[rgba(23,35,28,0.12)]">
                  <div className="font-mono text-xs text-[#A9662F] shrink-0 pt-0.5 font-semibold">03</div>
                  <div>
                    <div className="text-sm font-semibold text-[#17231C]">
                      {lang === 'tr' ? 'Bakım kiti & taburcu' : 'Medical Care Kit & Discharge'}
                    </div>
                    <div className="text-xs text-[#4A5A4D] mt-0.5">
                      {lang === 'tr' ? '12 aylık uzaktan medikal takip protokolü ile' : 'With 12-month remote clinical follow-up protocol'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="btn-stone-ghost w-full justify-center mt-7 text-sm font-semibold"
            >
              <span>{lang === 'tr' ? 'Bu paketle devam et' : 'Select Standard Package'}</span>
            </a>
          </div>

          {/* Plan 2: VIP Antalya Experience (Featured Dark Card) */}
          <div className="bg-[#17231C] text-[#EFE7D8] border border-[#17231C] rounded-[4px] p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#D89A5D] font-medium">
                {lang === 'tr' ? 'En çok tercih edilen' : 'Most Requested Experience'}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#EFE7D8] mt-2.5">
                VIP Antalya Experience
              </h3>
              
              <div className="mt-4 font-mono text-3xl font-semibold text-[#D89A5D]">
                {vipPrice}
                <span className="block text-xs font-normal text-[#EFE7D8]/60 font-sans mt-1">
                  {lang === 'tr' ? 'Tam kapsamlı — VIP transfer & 5★ otel dahil' : 'Full all-inclusive stay — 5★ hotel & VIP transfer included'}
                </span>
              </div>

              {/* Day-by-Day Timeline */}
              <div className="mt-7 space-y-0">
                <div className="flex gap-4 py-3.5 border-t border-[#EFE7D8]/15">
                  <div className="font-mono text-xs text-[#D89A5D] shrink-0 pt-0.5 font-semibold">01</div>
                  <div>
                    <div className="text-sm font-semibold text-[#EFE7D8]">
                      {lang === 'tr' ? 'Havaalanı karşılama & otel yerleşimi' : 'VIP Airport Pickup & 5★ Hotel Check-in'}
                    </div>
                    <div className="text-xs text-[#EFE7D8]/60 mt-0.5">
                      {lang === 'tr' ? 'Mercedes Vito ile VIP transfer' : 'Private Mercedes Vito transfer to your room'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 py-3.5 border-t border-[#EFE7D8]/15">
                  <div className="font-mono text-xs text-[#D89A5D] shrink-0 pt-0.5 font-semibold">02</div>
                  <div>
                    <div className="text-sm font-semibold text-[#EFE7D8]">
                      {lang === 'tr' ? 'Ameliyathane günü' : 'Surgery Day & PRP Session'}
                    </div>
                    <div className="text-xs text-[#EFE7D8]/60 mt-0.5">
                      {lang === 'tr' ? 'Choi Pen DHI + PRP mezoterapi seansı' : 'Choi Pen DHI + autologous PRP mesotherapy'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 py-3.5 border-t border-[#EFE7D8]/15">
                  <div className="font-mono text-xs text-[#D89A5D] shrink-0 pt-0.5 font-semibold">03</div>
                  <div>
                    <div className="text-sm font-semibold text-[#EFE7D8]">
                      {lang === 'tr' ? 'Yıkama eğitimi & uğurlama' : 'Clinical Wash & VIP Departure'}
                    </div>
                    <div className="text-xs text-[#EFE7D8]/60 mt-0.5">
                      {lang === 'tr' ? '12 aylık uzaktan takip protokolü başlar' : '12-month post-op care starts + return transfer'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#analysis-wizard"
              onClick={scrollToWizard}
              className="btn-bronze w-full justify-center mt-7 text-sm font-semibold !text-[#17231C]"
            >
              <span>{lang === 'tr' ? 'Klinik değerlendirmesi talep et' : 'Request Clinical Consultation'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
