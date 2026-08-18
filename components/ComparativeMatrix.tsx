'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Check, X, Shield, Clock, Award, BedDouble, Stethoscope, Sparkles } from 'lucide-react';

export default function ComparativeMatrix() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Why Discerning European Patients Choose Antalya DHI',
    fr: 'Pourquoi les Patients Européens Choisissent Antalya DHI',
    tr: 'Avrupalı Hastaların Antalya DHI\'ı Tercih Etme Sebepleri',
  }[lang as Lang] || 'Why Discerning European Patients Choose Antalya DHI';

  const subtitle = {
    en: 'A transparent clinical & financial comparison between UK/European private clinics and our Antalya VIP coordination.',
    fr: 'Une comparaison médicale et financière transparente entre les cliniques privées européennes et notre prise en charge VIP.',
    tr: 'Londra ve Avrupa özel klinikleri ile Antalya VIP DHI koordinasyonumuz arasındaki şeffaf karşılaştırma tablosu.',
  }[lang as Lang] || 'A transparent comparison between European clinics and Antalya VIP DHI.';

  const metrics = [
    {
      label: { en: 'All-Inclusive Procedure Cost', fr: 'Coût Total Tout Compris', tr: 'Toplam Paket Maliyeti' },
      uk: '£6,500 – £9,500 (€7,500+)',
      paris: '€8,500 – €11,000',
      antalya: '£1,550 – £1,900 (€1,800 – €2,200)',
      note: { en: 'Save up to 70% with zero compromise on medical standards', fr: 'Économisez jusqu\'à 70% sans compromis médical', tr: '%70 maliyet avantajı ile dünya standartlarında cerrahi kalite' },
      icon: Award
    },
    {
      label: { en: 'Consultation & Scheduling Wait Time', fr: 'Délai d\'Attente et Prise de RDV', tr: 'Randevu ve Bekleme Süresi' },
      uk: '3 to 6 Months Waiting List',
      paris: '2 à 4 Mois',
      antalya: '48-Hour Priority Direct Scheduling',
      note: { en: 'Direct surgical slots reserved for your travel dates', fr: 'Organisation immédiate selon vos disponibilités', tr: 'Size özel tahsis edilen cerrahi ameliyathane takvimi' },
      icon: Clock
    },
    {
      label: { en: 'Implantation Technology', fr: 'Technologie d\'Implantation', tr: 'İmplantasyon Teknolojisi' },
      uk: 'Standard Strip FUE / Manual Slits',
      paris: 'FUE Classique / Fentes',
      antalya: '100% Single-Use Choi Implanter Pen (DHI)',
      note: { en: 'Direct follicle placement with microscopic angle precision', fr: 'Implantation directe sans incision préalable', tr: 'Kanal açmadan mikroskobik açıyla doğrudan ekim' },
      icon: Stethoscope
    },
    {
      label: { en: 'Surgeon Direct Involvement', fr: 'Implication Directe du Chirurgien', tr: 'Hekim Doğrudan Kontrolü' },
      uk: 'Brief Doctor Visit, Handed to Techs',
      paris: 'Passage Éphémère du Médecin',
      antalya: 'In-Person Surgeon Hairline Design & Supervised Surgery',
      note: { en: 'Performed in licensed hospitals by certified specialist teams', fr: 'Réalisé dans des hôpitaux agréés par l\'État', tr: 'T.C. Sağlık Bakanlığı ruhsatlı hastanelerde cerrahi süreç' },
      icon: Shield
    },
    {
      label: { en: 'VIP Logistics & 5-Star Hotel Stay', fr: 'Logistique VIP & Hôtel 5 Étoiles', tr: 'VIP Transfer & 5 Yıldızlı Konaklama' },
      uk: 'None (Patient Arranges Separately)',
      paris: 'Non Inclus (À votre charge)',
      antalya: 'Private Mercedes Vito + Luxury Hotel Stay Included',
      note: { en: 'Complete door-to-door concierge from airport to hotel & clinic', fr: 'Prise en charge intégrale dès l\'arrivée à l\'aéroport', tr: 'Havalimanından otele ve kliniğe VIP karşılama' },
      icon: BedDouble
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-slate-950 text-white border-b border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'Şeffaf Karşılaştırma' : 'Transparent Benchmark'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Header Strip */}
          <div className="grid grid-cols-12 bg-slate-950/90 text-white p-4 sm:p-6 text-xs sm:text-sm font-bold border-b border-slate-800">
            <div className="col-span-4 text-slate-400">
              {lang === 'tr' ? 'Karşılaştırma Kriteri' : 'Clinical & Financial Metric'}
            </div>
            <div className="col-span-4 text-center text-slate-400 font-medium">
              {lang === 'tr' ? 'Londra / Paris / Berlin' : 'UK & European Clinics'}
            </div>
            <div className="col-span-4 text-center text-blue-400 font-extrabold flex items-center justify-center gap-1.5">
              <span>Antalya VIP DHI</span>
              <span className="text-[10px] bg-blue-900/60 border border-blue-700/60 px-2 py-0.5 rounded-full text-blue-200">
                Gold Standard
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/80">
            {metrics.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-800/40 transition-colors gap-2 sm:gap-4">
                  
                  {/* Parameter Name & Note */}
                  <div className="col-span-4 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
                      <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{row.label[lang as Lang] || row.label['en']}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal hidden sm:block">
                      {row.note[lang as Lang] || row.note['en']}
                    </p>
                  </div>

                  {/* UK/EU Value */}
                  <div className="col-span-4 text-center">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 bg-slate-950/70 border border-slate-800/80 px-3 py-1.5 rounded-xl">
                      <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{row.uk}</span>
                    </div>
                  </div>

                  {/* Antalya DHI Value */}
                  <div className="col-span-4 text-center">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-200 bg-blue-950/80 border border-blue-700/70 px-3.5 py-1.5 rounded-xl shadow-md">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                      <span>{row.antalya}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
