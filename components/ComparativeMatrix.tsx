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
      uk: { en: '£6,500 – £9,500 (€7,500+)', fr: '7 500€ – 10 500€', tr: '£6.500 – £9.500 (€7.500+)' },
      antalya: { en: '£1,550 – £1,900 (€1,800 – €2,200)', fr: '1 800€ – 2 200€ (£1,550 – £1,900)', tr: '90.000 ₺ – 110.000 ₺ (£1,550 – £1,900)' },
      note: { en: 'Save up to 70% with zero compromise on medical standards', fr: 'Économisez jusqu\'à 70% sans compromis médical', tr: '%70 maliyet avantajı ile dünya standartlarında cerrahi kalite' },
      icon: Award
    },
    {
      label: { en: 'Consultation & Scheduling Wait Time', fr: 'Délai d\'Attente et Prise de RDV', tr: 'Randevu ve Bekleme Süresi' },
      uk: { en: '3 to 6 Months Waiting List', fr: '3 à 6 Mois d\'Attente', tr: '3 ile 6 Ay Bekleme Sırası' },
      antalya: { en: '48-Hour Priority Direct Scheduling', fr: 'Prise en Charge Prioritaire en 48h', tr: '48 Saatte Ön Analiz & Hızlı Planlama' },
      note: { en: 'Direct surgical slots reserved for your travel dates', fr: 'Organisation immédiate selon vos disponibilités', tr: 'Size özel tahsis edilen cerrahi ameliyathane takvimi' },
      icon: Clock
    },
    {
      label: { en: 'Implantation Technology', fr: 'Technologie d\'Implantation', tr: 'İmplantasyon Teknolojisi' },
      uk: { en: 'Standard Strip FUE / Manual Slits', fr: 'FUE Classique avec Fentes', tr: 'Standart Kesili FUE / Manuel Neşter' },
      antalya: { en: '100% Single-Use Choi Implanter Pen (DHI)', fr: '100% Stylo Choi Pen à Usage Unique (DHI)', tr: '%100 Tek Kullanımlık Choi Pen (DHI)' },
      note: { en: 'Direct follicle placement with microscopic angle precision', fr: 'Implantation directe sans incision préalable', tr: 'Kanal açmadan mikroskobik açıyla doğrudan ekim' },
      icon: Stethoscope
    },
    {
      label: { en: 'Surgeon Direct Involvement', fr: 'Implication Directe du Chirurgien', tr: 'Hekim Doğrudan Kontrolü' },
      uk: { en: 'Brief Doctor Visit, Handed to Techs', fr: 'Passage Éphémère du Médecin', tr: 'Kısa Hekim Ziyareti, Personele Devir' },
      antalya: { en: 'In-Person Surgeon Hairline Design & Supervised Surgery', fr: 'Dessin de la Ligne et Suivi Médical Complet', tr: 'Birebir Hekim Çizimi & Cerrahi Denetim' },
      note: { en: 'Performed in licensed hospitals by certified specialist teams', fr: 'Réalisé dans des hôpitaux agréés par l\'État', tr: 'T.C. Sağlık Bakanlığı ruhsatlı hastanelerde cerrahi süreç' },
      icon: Shield
    },
    {
      label: { en: 'VIP Logistics & 5-Star Hotel Stay', fr: 'Logistique VIP & Hôtel 5 Étoiles', tr: 'VIP Transfer & 5 Yıldızlı Konaklama' },
      uk: { en: 'None (Patient Arranges Separately)', fr: 'Non Inclus (À la Charge du Patient)', tr: 'Dahil Değil (Hasta Kendisi Karşılar)' },
      antalya: { en: 'Private Mercedes Vito + Luxury Hotel Stay Included', fr: 'Transfert Mercedes Vito + Hôtel de Luxe Inclus', tr: 'Özel Mercedes Vito + Otel Konaklaması Pakete Dahil' },
      note: { en: 'Complete door-to-door concierge from airport to hotel & clinic', fr: 'Prise en charge intégrale dès l\'arrivée à l\'aéroport', tr: 'Havalimanından otele ve kliniğe VIP karşılama' },
      icon: BedDouble
    }
  ];

  const colTitle1 = { tr: 'Karşılaştırma Kriteri', en: 'Clinical Metric', fr: 'Critère Médical' }[lang as Lang] || 'Clinical Metric';
  const colTitle2 = { tr: 'Londra / Paris / Berlin', en: 'UK & European Clinics', fr: 'Cliniques Européennes' }[lang as Lang] || 'UK & European Clinics';
  const colTitle3 = { tr: 'Antalya VIP DHI', en: 'Antalya VIP DHI', fr: 'Antalya VIP DHI' }[lang as Lang] || 'Antalya VIP DHI';
  const vipBadge = { tr: 'VIP Standart', en: 'VIP Standard', fr: 'Standard VIP' }[lang as Lang] || 'VIP Standard';

  return (
    <section id="comparison" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Şeffaf Karşılaştırma' : 'Transparent Benchmark'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on Mobile) */}
        <div className="hidden md:block max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
          
          {/* Header Strip */}
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold border-b border-slate-800">
            <div className="col-span-4 text-slate-300">{colTitle1}</div>
            <div className="col-span-4 text-center text-slate-300 font-medium">{colTitle2}</div>
            <div className="col-span-4 text-center text-emerald-400 font-extrabold flex items-center justify-center gap-1.5">
              <span>{colTitle3}</span>
              <span className="text-[10px] bg-emerald-950 border border-emerald-600 px-2 py-0.5 rounded-full text-emerald-300">
                {vipBadge}
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {metrics.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors gap-4">
                  
                  {/* Parameter Name & Note */}
                  <div className="col-span-4 space-y-0.5">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-900">
                      <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.label[lang as Lang] || row.label['en']}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal">
                      {row.note[lang as Lang] || row.note['en']}
                    </p>
                  </div>

                  {/* UK/EU Value */}
                  <div className="col-span-4 text-center">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{row.uk[lang as Lang] || row.uk['en']}</span>
                    </div>
                  </div>

                  {/* Antalya DHI Value */}
                  <div className="col-span-4 text-center">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-xl shadow-2xs">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                      <span>{row.antalya[lang as Lang] || row.antalya['en']}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile-Perfect Stacked Cards (Visible only on Mobile) */}
        <div className="md:hidden space-y-3.5">
          {metrics.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-900 border-b border-slate-100 pb-2">
                  <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{row.label[lang as Lang] || row.label['en']}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* Competitor */}
                  <div className="bg-slate-50 p-2.5 rounded-xl space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block">{colTitle2}</span>
                    <div className="flex items-start gap-1 text-slate-600 font-medium text-[11px] leading-tight">
                      <X className="w-3 h-3 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.uk[lang as Lang] || row.uk['en']}</span>
                    </div>
                  </div>

                  {/* Antalya DHI */}
                  <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl space-y-1">
                    <span className="text-[10px] text-emerald-800 font-extrabold block">{colTitle3}</span>
                    <div className="flex items-start gap-1 text-emerald-900 font-bold text-[11px] leading-tight">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.antalya[lang as Lang] || row.antalya['en']}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 font-normal pt-1">
                  {row.note[lang as Lang] || row.note['en']}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
