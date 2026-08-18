'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { ShieldCheck, FlaskConical, Sparkles, HeartHandshake, Check } from 'lucide-react';

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
    <section id="medical-standards" className="py-20 bg-slate-900/60 text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'Cerrahi Standartlar' : 'Clinical Standards'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">{title}</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* CARD 1: NEEDLE-FREE ANESTHESIA */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden card-hover">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{lang === 'tr' ? 'Konfor Protokolü' : 'Comfort Protocol'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                {bento1Title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl">
                {bento1Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300 relative z-10">
              <span>{lang === 'tr' ? 'Lokal Anestezi Standardı' : 'Local Anesthesia Standard'}</span>
              <span className="text-blue-400 font-extrabold">
                {lang === 'tr' ? 'Basınçlı Konfor Uygulaması' : 'Pressure-Spray Protocol'}
              </span>
            </div>
          </div>

          {/* CARD 2: ATP HYPOTHERMOSOL */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-xl flex flex-col justify-between space-y-4 card-hover">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white leading-tight">
                {bento2Title}
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                {bento2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-300">
              <span>{lang === 'tr' ? 'Greft Canlılığı' : 'Graft Viability'}</span>
              <span className="text-blue-400 font-extrabold">ATP Preservation</span>
            </div>
          </div>

          {/* CARD 3: SINGLE-USE CHOI PEN KIT */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-xl flex flex-col justify-between space-y-4 card-hover">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white leading-tight">
                {bento3Title}
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                {bento3Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-300">
              <span>{lang === 'tr' ? 'Sterilite Standardı' : 'Sterility Standard'}</span>
              <span className="text-blue-400 font-extrabold">100% Single-Use</span>
            </div>
          </div>

          {/* CARD 4: PRP AFTERCARE */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden card-hover">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-300 text-xs font-bold">
                <HeartHandshake className="w-4 h-4 text-blue-400" />
                <span>PRP &amp; Mesotherapy</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                {bento4Title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl">
                {bento4Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300">
              <span>{lang === 'tr' ? 'Ameliyat Sonrası Bakım' : 'Post-Op Follow-up'}</span>
              <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>{lang === 'tr' ? '12 Ay Medikal Takip' : '12-Month Medical Follow-up'}</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
