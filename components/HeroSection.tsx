'use client';

import { useState, useEffect } from 'react';
import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import { PRICES, formatPrice } from '@/lib/currency';

export default function HeroSection() {
  const { lang, currency } = useSiteContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const priceFormatted = mounted ? formatPrice(PRICES.standard[currency], currency) : '';

  const scrollToWizard = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('analysis-wizard') || document.getElementById('calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/905070871789?text=${encodeURIComponent(
    lang === 'tr'
      ? 'Merhaba, Antalya DHI klinik web siteniz üzerinden ulaştım. Ücretsiz saç analizi ve doktor değerlendirmesi almak istiyorum.'
      : lang === 'fr'
      ? 'Bonjour, je vous contacte via le site web officiel de la clinique Antalya DHI. Je souhaite obtenir une analyse gratuite du cuir chevelu.'
      : 'Hello, I am contacting you via your official Antalya DHI Clinic website. I would like to get a free scalp analysis and doctor evaluation.'
  )}`;

  return (
    <section className="relative w-full bg-slate-950 text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800/80">
      {/* Subtle Background Gradient — no aggressive glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Ministry Badge — static, no pulse */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs font-extrabold text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{t(lang as Lang, 'hero.ministryBadge')}</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            {lang === 'fr' ? (
              <>Greffe DHI Premium <span className="text-blue-500">sous Contrôle Médical</span> à Antalya</>
            ) : lang === 'tr' ? (
              <>Antalya&apos;da <span className="text-blue-500">Doktor Kontrollü</span> Premium DHI Saç Ekimi</>
            ) : (
              <><span className="text-blue-500">Surgeon-Guided</span> Premium DHI Hair Transplant in Antalya</>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            {t(lang as Lang, 'hero.subtitle')}
          </p>

          {/* Trust Pills — no unverified star rating */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-black text-slate-200">
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span className="text-blue-400 text-[10px]">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
              <span>4.9 / 5 · Trustpilot &amp; Google</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2">
              <span>VIP All-Inclusive Package</span>
            </div>
          </div>

          {/* Transparent Price */}
          {mounted && (
            <div className="pt-1">
              <span className="inline-block bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-extrabold px-4 py-2 rounded-full shadow-sm">
                {lang === 'tr' ? 'Şeffaf Paketler ' : lang === 'fr' ? 'Forfaits Transparents ' : 'Transparent Rates '}
                <span className="text-white font-black">{priceFormatted}</span>
                {lang === 'tr' ? "'den başlayan fiyatlarla" : lang === 'fr' ? ' à partir de' : ' starting rate'}
              </span>
            </div>
          )}

          {/* CTA — clean, no emoji */}
          <div className="pt-2 max-w-lg mx-auto lg:mx-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[56px] px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.22 4.299-1.127zm10.742-5.666c-.328-.164-1.944-.96-2.247-1.07-.303-.11-.523-.164-.743.164-.22.328-.852 1.07-1.043 1.289-.191.22-.383.247-.712.082-2.016-1.006-3.336-1.785-4.667-4.068-.352-.604.352-.561 1.007-1.87.11-.22.055-.412-.027-.577-.082-.164-.743-1.791-1.018-2.454-.268-.646-.541-.558-.743-.568l-.632-.011c-.22 0-.577.082-.879.412-.303.328-1.155 1.128-1.155 2.75 0 1.623 1.182 3.189 1.347 3.409.165.22 2.327 3.555 5.639 4.985 2.308.998 2.802.8 3.324.747.88-.09 1.944-.796 2.218-1.564.275-.769.275-1.428.192-1.564-.083-.137-.303-.22-.631-.384z"/>
              </svg>
              <span>{t(lang as Lang, 'hero.cta_whatsapp')}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clinic Photo */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
            <img
              src="/images/clinic-consultation.jpg"
              alt="Antalya DHI Medical Consultation"
              className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                {lang === 'tr' ? 'Uzman Hekim Muayenesi & Ön Saç Çizgisi Planlaması' : 'In-Person Surgeon Consultation & Hairline Design'}
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-1">
                {lang === 'tr' ? 'Antalya Sağlık Turizmi Yetkili Kliniğinde steril ve konforlu tedavi süreci.' : 'Certified Health Tourism Partner Clinic in Antalya.'}
              </p>
            </div>
          </div>

          {/* 4 Trust Tags */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-extrabold text-slate-300">
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">&#10003;</span>
              <span>{t(lang as Lang, 'hero.vtag1')}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">&#10003;</span>
              <span>{t(lang as Lang, 'hero.vtag2')}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">&#10003;</span>
              <span>{t(lang as Lang, 'hero.vtag3')}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">&#10003;</span>
              <span>{t(lang as Lang, 'hero.vtag4')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
