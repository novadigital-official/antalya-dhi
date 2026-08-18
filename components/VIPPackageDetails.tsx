'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function VIPPackageDetails() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Your VIP Journey — From Arrival to Recovery',
    fr: 'Votre Parcours VIP — De l\'Arrivée à la Récupération',
    tr: 'VIP Yolculuğunuz — Karşılamadan İyileşmeye',
  }[lang as Lang] || 'Your VIP Journey — From Arrival to Recovery';

  const steps = {
    en: [
      { title: 'Airport VIP Pickup', desc: 'Mercedes Vito private transfer from Antalya Airport directly to your hotel' },
      { title: 'Luxury Hotel Stay', desc: 'Comfortable accommodation with breakfast included' },
      { title: 'Hospital Consultation', desc: 'Detailed scalp analysis, hairline design, and doctor consultation at licensed clinic' },
      { title: 'DHI Procedure Day', desc: 'Full DHI operation by certified surgical team with personal multilingual coordinator' },
      { title: 'Post-Op Care & Recovery', desc: 'First hair wash demonstration, medical aftercare kit, and relaxation in Antalya' },
    ],
    fr: [
      { title: 'Accueil VIP à l\'Aéroport', desc: 'Transfert privé en Mercedes Vito depuis l\'aéroport d\'Antalya jusqu\'à l\'hôtel' },
      { title: 'Séjour en Hôtel de Luxe', desc: 'Hébergement confortable avec petit-déjeuner inclus' },
      { title: 'Consultation Hospitalière', desc: 'Analyse capillaire détaillée et dessin de la ligne frontale avec le médecin' },
      { title: 'Jour de l\'Intervention DHI', desc: 'Opération DHI complète par l\'équipe chirurgicale avec coordinateur dédié' },
      { title: 'Soins Post-Opératoires & Repos', desc: 'Démonstration du premier lavage, kit médical et temps de repos à Antalya' },
    ],
    tr: [
      { title: 'Havaalanı VIP Karşılama', desc: 'Antalya Havalimanı\'ndan Mercedes Vito ile otele konforlu transfer' },
      { title: 'Otel Konaklaması', desc: 'Kahvaltı dahil konforlu otel konaklaması' },
      { title: 'Hastane & Hekim Muayenesi', desc: 'Anlaşmalı hastanede doktorla detaylı saç analizi ve ön çizgi planlaması' },
      { title: 'DHI Operasyon Günü', desc: 'Uzman cerrahi kadro ve çok dilli koordinatör eşliğinde DHI operasyonu' },
      { title: 'Operasyon Sonrası Bakım & Dinlenme', desc: 'İlk medikal yıkama eğitimi, bakım kiti teslimi ve dinlenme süreci' },
    ],
  }[lang as Lang] || [
    { title: 'Airport VIP Pickup', desc: 'Mercedes Vito private transfer from Antalya Airport directly to your hotel' },
    { title: 'Luxury Hotel Stay', desc: 'Comfortable accommodation with breakfast included' },
    { title: 'Hospital Consultation', desc: 'Detailed scalp analysis, hairline design, and doctor consultation at licensed clinic' },
    { title: 'DHI Procedure Day', desc: 'Full DHI operation by certified surgical team with personal multilingual coordinator' },
    { title: 'Post-Op Care & Recovery', desc: 'First hair wash demonstration, medical aftercare kit, and relaxation in Antalya' },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">{title}</h2>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex mb-8 last:mb-0 relative min-h-[48px]">
                {index !== steps.length - 1 && (
                  <div className="absolute left-[15px] top-[30px] bottom-[-20px] border-l-2 border-blue-200"></div>
                )}
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 z-10 mr-4 mt-0.5 border-2 border-white shadow-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-black text-sm text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
