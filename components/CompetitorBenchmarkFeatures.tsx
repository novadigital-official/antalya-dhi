'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function CompetitorBenchmarkFeatures() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Gold Medical Standards & Technology',
    fr: 'Normes Médicales et Technologie de Pointe',
    tr: 'Gold Medikal Standartlarımız ve Teknolojimiz',
  }[lang as Lang] || 'Gold Medical Standards & Technology';

  const subtitle = {
    en: 'Why DHI Choi Implanter technology delivers 3x natural density and zero scarring.',
    fr: 'Pourquoi la technologie DHI Choi offre une densité 3x supérieure sans cicatrice.',
    tr: 'Neden Choi Pen DHI tekniği 3 kat fazla doğal yoğunluk ve dikişsiz hızlı iyileşme sağlar.',
  }[lang as Lang] || 'Why DHI Choi Implanter technology delivers 3x natural density and zero scarring.';

  const bento1Title = { en: 'Needle-Free & Painless Comfort Anesthesia', fr: 'Anesthésie Sans Aiguille et Sans Douleur', tr: 'İğnesiz ve Ağrısız Anestezi Altyapısı' }[lang as Lang] || 'Needle-Free & Painless Comfort Anesthesia';
  const bento1Desc = {
    en: 'Advanced pressure-spray jet injection delivers local anesthetic without traditional needles, eliminating discomfort completely.',
    fr: 'Technologie d\'injection sous pression sans aiguille traditionnelle, éliminant totalement l\'inconfort.',
    tr: 'Basınçlı püskürtme teknolojisi ile iğne kullanılmadan kafa derisine anestezi sıvıları enjekte edilir. Tüm acı hissi sıfırlanır.'
  }[lang as Lang] || 'Advanced pressure-spray jet injection delivers local anesthetic without traditional needles, eliminating discomfort completely.';

  const bento2Title = { en: 'ATP HypoThermosol Preservation', fr: 'Conservation ATP HypoThermosol', tr: 'ATP Canlılık Solüsyonu' }[lang as Lang] || 'ATP HypoThermosol Preservation';
  const bento2Desc = {
    en: 'Extracted follicles are stored in chilled ATP nutrient solution to maintain 98%+ graft survival.',
    fr: 'Les greffons sont conservés dans une solution ATP réfrigérée pour maintenir 98%+ de survie.',
    tr: 'Toplanan saç kökleri özel soğutulmuş ATP solüsyonunda bekletilerek %98+ canlılık oranı korunur.'
  }[lang as Lang] || 'Extracted follicles are stored in chilled ATP nutrient solution to maintain 98%+ graft survival.';

  const bento3Title = { en: 'Single-Use Choi Implanter Pens', fr: 'Stylos d\'Implantation Choi à Usage Unique', tr: 'Tek Kullanımlık Choi Pen Kit' }[lang as Lang] || 'Single-Use Choi Implanter Pens';
  const bento3Desc = {
    en: '100% sterile, individually sealed Choi pen cartridges for maximum hygienic precision.',
    fr: 'Cartouches Choi 100% stériles et scellées individuellement pour une précision hygiénique maximale.',
    tr: 'Her hastaya özel sıfır paketinden açılan Choi implanter kalemleri ile mikroskobik hassasiyet.'
  }[lang as Lang] || '100% sterile, individually sealed Choi pen cartridges for maximum hygienic precision.';

  const bento4Title = { en: 'Hyperbaric Oxygen & PRP Tissue Regeneration', fr: 'Régénération Tissulaire Oxygène et PRP', tr: 'Oksijenli PRP & Saç Derisi Hücre Yenileme' }[lang as Lang] || 'Hyperbaric Oxygen & PRP Tissue Regeneration';
  const bento4Desc = {
    en: 'Concentrated autologous PRP combined with hyperbaric oxygen session doubles cell repair velocity post-surgery.',
    fr: 'PRP autologue concentré associé à une séance d\'oxygène hyperbare doublant la vitesse de réparation.',
    tr: 'Operasyon sonrasında uygulanan konsantre PRP ve medikal oksijen tedavisi ile saç köklerinin hücresel iyileşmesi 2 katına çıkarılır.'
  }[lang as Lang] || 'Concentrated autologous PRP combined with hyperbaric oxygen session doubles cell repair velocity post-surgery.';

  return (
    <div id="medical-standards" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">{subtitle}</p>
      </div>

      {/* 2026 BENTO-GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* BENTO CARD 1 (LARGE SPAN 2): PAINLESS NEEDLE-FREE ANESTHESIA */}
        <div className="md:col-span-2 bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-black">
              <span>💉 Painless Comfort Infiltration</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {bento1Title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              {bento1Desc}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-extrabold text-slate-300 relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              {lang === 'tr' ? '%100 Konfor Garantisi' : lang === 'fr' ? 'Garantie Confort 100%' : '100% Comfort Guarantee'}
            </span>
            <span className="text-blue-400 font-black">
              {lang === 'tr' ? '0 İğne Acısı →' : lang === 'fr' ? '0 Douleur Aiguille →' : '0 Needle Pain →'}
            </span>
          </div>
        </div>

        {/* BENTO CARD 2: ATP HYPOTHERMOSOL GRAFT PRESERVATION */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-500 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 font-black text-xl flex items-center justify-center border border-emerald-100">
              🧪
            </div>
            <h3 className="text-lg font-black text-slate-900 leading-tight">
              {bento2Title}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {bento2Desc}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-black text-emerald-700">
            <span>{lang === 'tr' ? 'Tutunma Oranı' : lang === 'fr' ? 'Taux de Prise' : 'Retention Rate'}</span>
            <span>%98+ Active</span>
          </div>
        </div>

        {/* BENTO CARD 3: SINGLE-USE SAPPHIRE & CHOI PEN KIT */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-500 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 font-black text-xl flex items-center justify-center border border-blue-100">
              🖊️
            </div>
            <h3 className="text-lg font-black text-slate-900 leading-tight">
              {bento3Title}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {bento3Desc}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-black text-blue-700">
            <span>{lang === 'tr' ? 'Sterilite Standardı' : lang === 'fr' ? 'Norme de Stérilité' : 'Sterility Standard'}</span>
            <span>100% Single-Use</span>
          </div>
        </div>

        {/* BENTO CARD 4 (SPAN 2): HYPERBARIC OXYGEN & PRP AFTERCARE */}
        <div className="md:col-span-2 bg-gradient-to-r from-blue-900 to-slate-950 text-white rounded-3xl p-8 border border-blue-800/80 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/60 border border-blue-600/60 text-blue-200 text-xs font-black">
              <span>🩸 Hyperbaric PRP Therapy</span>
            </div>

            <h3 className="text-2xl font-black text-white leading-tight">
              {bento4Title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              {bento4Desc}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-blue-800/60 flex items-center justify-between text-xs font-extrabold text-slate-300">
            <span>{lang === 'tr' ? 'Hızlı İyileşme Protokolü' : lang === 'fr' ? 'Protocole Récupération Rapide' : 'Fast Recovery Protocol'}</span>
            <span className="text-emerald-400 font-black">
              {lang === 'tr' ? '✓ 12 Ay Takip Dahil' : lang === 'fr' ? '✓ Suivi 12 Mois Inclus' : '✓ 12-Month Support Included'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
