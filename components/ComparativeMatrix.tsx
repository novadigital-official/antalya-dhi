'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { Check, X, Shield, Clock, Award, BedDouble, Stethoscope } from 'lucide-react';

export default function ComparativeMatrix() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Why Discerning European Patients Choose Antalya',
    fr: 'Pourquoi les Patients Européens Choisissent Antalya',
    tr: 'Avrupalı Hastaların Antalya\'yı Tercih Etme Sebepleri',
  }[lang as Lang] || 'Why Discerning European Patients Choose Antalya';

  const subtitle = {
    en: 'A transparent comparison between Harley Street / European clinics and our Antalya VIP DHI coordination.',
    fr: 'Une comparaison transparente entre les cliniques européennes et notre coordination VIP DHI à Antalya.',
    tr: 'Londra ve Avrupa klinikleri ile Antalya VIP DHI koordinasyonumuz arasındaki şeffaf karşılaştırma.',
  }[lang as Lang] || 'A transparent comparison between European clinics and Antalya VIP DHI.';

  const metrics = [
    {
      label: { en: 'All-Inclusive Procedure Cost', fr: 'Coût Total de l\'Intervention', tr: 'Toplam Paket Maliyeti' },
      uk: { en: '£6,500 – £9,500 (€7,500+)', fr: '7 500€ – 10 500€', tr: '£6,500 – £9,500 (€7,500+)' },
      antalya: { en: '£1,550 – £1,900 (€1,800 – €2,200)', fr: '1 800€ – 2 200€ (£1,550 – £1,900)', tr: '90.000 ₺ – 110.000 ₺ (£1,550 – £1,900)' },
      note: { en: 'Save up to 70% with zero compromise on medical standards', fr: 'Économisez jusqu\'à 70% sans compromis sur la qualité', tr: '%70 maliyet avantajı ile dünya standartlarında cerrahi kalite' },
      icon: Award
    },
    {
      label: { en: 'Consultation & Scheduling Wait Time', fr: 'Délai d\'Attente et Prise de RDV', tr: 'Randevu ve Bekleme Süresi' },
      uk: { en: '3 to 6 Months Waiting List', fr: '3 à 6 Mois d\'Attente', tr: '3 ile 6 Ay Bekleme Sırası' },
      antalya: { en: '48-Hour Priority Direct Scheduling', fr: 'Prise en Charge Prioritaire en 48h', tr: '48 Saatte Ön Analiz ve Hızlı Planlama' },
      note: { en: 'Direct coordination with dedicated surgical slots', fr: 'Organisation immédiate selon vos disponibilités', tr: 'Size özel tahsis edilen ameliyathane takvimi' },
      icon: Clock
    },
    {
      label: { en: 'Implantation Technology', fr: 'Technologie d\'Implantation', tr: 'İmplantasyon Teknolojisi' },
      uk: { en: 'Often Standard FUE / Manual Slits', fr: 'Souvent FUE Classique avec Incisions', tr: 'Genellikle Standart FUE / Neşter Kesi' },
      antalya: { en: '100% Single-Use Choi Implanter Pen (DHI)', fr: '100% Stylo Choi à Usage Unique (DHI)', tr: '%100 Tek Kullanımlık Choi Pen (DHI)' },
      note: { en: 'Direct follicle placement with natural angle precision', fr: 'Implantation directe sans incision préalable', tr: 'Kanal açmadan mikroskobik açıyla doğrudan ekim' },
      icon: Stethoscope
    },
    {
      label: { en: 'Surgeon Direct Involvement', fr: 'Implication Directe du Chirurgien', tr: 'Hekim ve Uzman Doğrudan Kontrolü' },
      uk: { en: 'Brief Doctor Visit, Handed to Techs', fr: 'Passage Éphémère du Médecin', tr: 'Kısa Hekim Ziyareti, Personele Devir' },
      antalya: { en: 'In-Person Surgeon Hairline Design & Supervised Surgery', fr: 'Dessin de la Ligne et Suivi Médical Complet', tr: 'Birebir Hekim Muayenesi ve Cerrahi Denetim' },
      note: { en: 'Performed in licensed hospitals by certified teams', fr: 'Réalisé dans des hôpitaux agréés par l\'État', tr: 'T.C. Sağlık Bakanlığı ruhsatlı hastanelerde cerrahi süreç' },
      icon: Shield
    },
    {
      label: { en: 'VIP Logistics & 5-Star Hotel Stay', fr: 'Logistique VIP & Hôtel 5 Étoiles', tr: 'VIP Transfer & 5 Yıldızlı Konaklama' },
      uk: { en: 'None (Patient Arranges Separately)', fr: 'Non Inclus (À la Charge du Patient)', tr: 'Dahil Değil (Hasta Kendisi Karşılar)' },
      antalya: { en: 'Private Mercedes Vito + Luxury Hotel Stay Included', fr: 'Transfert Mercedes Vito + Hôtel de Luxe Inclus', tr: 'Özel Mercedes Vito + Otel Konaklaması Pakete Dahil' },
      note: { en: 'Door-to-door concierge from airport to hotel & clinic', fr: 'Prise en charge intégrale dès l\'arrivée à l\'aéroport', tr: 'Havalimanından otele ve kliniğe VIP karşılama' },
      icon: BedDouble
    }
  ];

  return (
    <div id="comparative-matrix" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-normal text-[#1C1917] tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Comparative Data Matrix Table */}
      <div className="max-w-5xl mx-auto bg-white border border-[#E6DFD5] rounded-3xl overflow-hidden shadow-xs">
        
        {/* Header Strip */}
        <div className="grid grid-cols-12 bg-[#161412] text-white p-4 sm:p-6 text-xs sm:text-sm font-semibold border-b border-[#332E2A]">
          <div className="col-span-4 text-stone-400">
            {lang === 'tr' ? 'Karşılaştırma Parametresi' : 'Clinical & Financial Metric'}
          </div>
          <div className="col-span-4 text-center text-stone-400 font-medium">
            {lang === 'tr' ? 'Londra / Paris / Berlin' : 'London / Paris / Berlin'}
          </div>
          <div className="col-span-4 text-center text-[#D49A70] font-bold">
            {lang === 'tr' ? 'Antalya VIP DHI' : 'Antalya VIP DHI'}
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#F0ECE6]">
          {metrics.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FAF8F5] transition-colors gap-2 sm:gap-4">
                
                {/* Metric Label & Note */}
                <div className="col-span-4 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#1C1917]">
                    <Icon className="w-4 h-4 text-[#C28251] shrink-0" />
                    <span>{row.label[lang as Lang] || row.label['en']}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-normal hidden sm:block">
                    {row.note[lang as Lang] || row.note['en']}
                  </p>
                </div>

                {/* UK/EU Value */}
                <div className="col-span-4 text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-500 bg-stone-100/80 px-3 py-1.5 rounded-xl">
                    <X className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{row.uk[lang as Lang] || row.uk['en']}</span>
                  </div>
                </div>

                {/* Antalya DHI Value */}
                <div className="col-span-4 text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8A4F23] bg-[#FBF3EB] border border-[#E8C5A8]/60 px-3 py-1.5 rounded-xl shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-[#C28251] shrink-0 stroke-[2.5]" />
                    <span>{row.antalya[lang as Lang] || row.antalya['en']}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
