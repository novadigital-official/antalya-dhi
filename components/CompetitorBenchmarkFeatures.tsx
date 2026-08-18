'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

// Clean SVG clinical icons
const ShieldCheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693l-1.57-.393m15.6 0A2.25 2.25 0 0 1 21 17.25v2.25a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 19.5v-2.25a2.25 2.25 0 0 1 1.2-1.95" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

export default function CompetitorBenchmarkFeatures() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Clinical Standards & Technology',
    fr: 'Normes Médicales et Technologie de Pointe',
    tr: 'Klinik Standartlarımız ve Teknolojimiz',
  }[lang as Lang] || 'Clinical Standards & Technology';

  const subtitle = {
    en: 'Precision Choi Implanter protocols ensuring natural hair density and minimal scalp trauma.',
    fr: 'Protocoles Choi Implanter de précision garantissant une densité naturelle et un traumatisme minimal.',
    tr: 'Choi Pen DHI tekniği ile yüksek greft tutunma oranı ve hızlı iyileşme süreci.',
  }[lang as Lang] || 'Precision Choi Implanter protocols ensuring natural hair density and minimal scalp trauma.';

  const bento1Title = { en: 'Needle-Free Comfort Anesthesia', fr: 'Anesthésie Sans Aiguille', tr: 'İğnesiz Konforlu Anestezi Altyapısı' }[lang as Lang] || 'Needle-Free Comfort Anesthesia';
  const bento1Desc = {
    en: 'Advanced pressure-spray jet injection administers local anesthesia without standard needles, significantly enhancing patient comfort before surgery.',
    fr: 'Technologie d\'injection sous pression sans aiguille traditionnelle, réduisant significativement l\'inconfort pré-opératoire.',
    tr: 'Basınçlı püskürtme teknolojisi ile geleneksel iğneler kullanılmadan lokal anestezi uygulanır, operasyon öncesi konfor maksimum seviyeye çıkarılır.'
  }[lang as Lang] || 'Advanced pressure-spray jet injection administers local anesthesia without standard needles, significantly enhancing patient comfort before surgery.';

  const bento2Title = { en: 'ATP HypoThermosol Preservation', fr: 'Conservation ATP HypoThermosol', tr: 'ATP Canlılık Solüsyonu' }[lang as Lang] || 'ATP HypoThermosol Preservation';
  const bento2Desc = {
    en: 'Harvested follicular units are kept in temperature-controlled ATP nutrient preservation solution to protect viability prior to implantation.',
    fr: 'Les greffons prélevés sont conservés dans une solution nutritive ATP thermorégulée.',
    tr: 'Toplanan saç kökleri özel soğutulmuş ATP solüsyonunda bekletilerek canlılıkları korunur.'
  }[lang as Lang] || 'Harvested follicular units are kept in temperature-controlled ATP nutrient preservation solution to protect viability prior to implantation.';

  const bento3Title = { en: 'Single-Use Choi Implanter Pens', fr: 'Stylos d\'Implantation Choi à Usage Unique', tr: 'Tek Kullanımlık Choi Pen Kit' }[lang as Lang] || 'Single-Use Choi Implanter Pens';
  const bento3Desc = {
    en: 'Individually packaged, sterile Choi implanter cartridges ensuring microscopic angle alignment.',
    fr: 'Cartouches Choi stériles et scellées individuellement pour un alignement précis.',
    tr: 'Her hastaya özel steril paketinden açılan Choi implanter kalemleri ile mikroskobik açı kontrolü.'
  }[lang as Lang] || 'Individually packaged, sterile Choi implanter cartridges ensuring microscopic angle alignment.';

  const bento4Title = { en: 'PRP & Mesotherapy Protocol', fr: 'Protocole PRP & Mésothérapie', tr: 'PRP ve Mezoterapi Protokolü' }[lang as Lang] || 'PRP & Mesotherapy Protocol';
  const bento4Desc = {
    en: 'Autologous PRP application combined with targeted mesotherapy to support tissue recovery and early graft nourishment.',
    fr: 'Application de PRP autologue associée à une mésothérapie ciblée pour soutenir la régénération.',
    tr: 'Operasyon sonrasında uygulanan konsantre PRP ve mezoterapi seansı ile saç köklerinin iyileşme süreci desteklenir.'
  }[lang as Lang] || 'Autologous PRP application combined with targeted mesotherapy to support tissue recovery and early graft nourishment.';

  return (
    <div id="medical-standards" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* CARD 1: NEEDLE-FREE ANESTHESIA */}
        <div className="md:col-span-2 bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-300 text-xs font-bold">
              <ShieldCheckIcon />
              <span>{lang === 'tr' ? 'Konfor Protokolü' : 'Comfort Protocol'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {bento1Title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              {bento1Desc}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300 relative z-10">
            <span>{lang === 'tr' ? 'Lokal Anestezi Standartı' : 'Local Anesthesia Standard'}</span>
            <span className="text-blue-400 font-bold">
              {lang === 'tr' ? 'Konforlu Uygulama' : 'Pressure-Spray Protocol'}
            </span>
          </div>
        </div>

        {/* CARD 2: ATP HYPOTHERMOSOL */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <BeakerIcon />
            </div>
            <h3 className="text-lg font-black text-slate-900 leading-tight">
              {bento2Title}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {bento2Desc}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
            <span>{lang === 'tr' ? 'Greft Canlılığı' : 'Graft Viability'}</span>
            <span className="text-blue-600">ATP Preservation</span>
          </div>
        </div>

        {/* CARD 3: SINGLE-USE CHOI PEN KIT */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <SparklesIcon />
            </div>
            <h3 className="text-lg font-black text-slate-900 leading-tight">
              {bento3Title}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {bento3Desc}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
            <span>{lang === 'tr' ? 'Sterilite Standardı' : 'Sterility Standard'}</span>
            <span className="text-blue-600">100% Single-Use</span>
          </div>
        </div>

        {/* CARD 4: PRP AFTERCARE */}
        <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-bold">
              <HeartPulseIcon />
              <span>PRP &amp; Mesotherapy</span>
            </div>

            <h3 className="text-2xl font-black text-white leading-tight">
              {bento4Title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              {bento4Desc}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300">
            <span>{lang === 'tr' ? 'Ameliyat Sonrası Bakım' : 'Post-Op Follow-up'}</span>
            <span className="text-emerald-400 font-bold">
              {lang === 'tr' ? '12 Ay Medikal Takip' : '12-Month Medical Follow-up'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
