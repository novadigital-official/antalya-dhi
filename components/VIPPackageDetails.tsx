'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function VIPPackageDetails() {
  const { lang } = useSiteContext();

  const title = {
    en: 'Your VIP Journey — From Airport to Recovery',
    fr: 'Votre Parcours VIP — De l\'Aéroport à la Récupération',
    tr: 'VIP Yolculuğunuz — Havaalanından İyileşmeye',
  }[lang as Lang] || 'Your VIP Journey — From Airport to Recovery';

  const steps = {
    en: [
      { title: 'Airport VIP Pickup', desc: 'Mercedes Vito private transfer from Antalya Airport' },
      { title: 'Luxury Hotel Check-In', desc: '4/5-Star hotel with breakfast included' },
      { title: 'Clinic Consultation', desc: 'Detailed hair analysis and custom DHI plan with your surgeon' },
      { title: 'DHI Procedure Day', desc: 'Full DHI operation with personal translator present' },
      { title: 'Recovery & City Tour', desc: 'Post-op care instructions, medications, and complimentary Antalya city tour' },
    ],
    fr: [
      { title: 'Accueil VIP à l\'Aéroport', desc: 'Transfert privé en Mercedes Vito depuis l\'aéroport d\'Antalya' },
      { title: 'Arrivée à l\'Hôtel de Luxe', desc: 'Hôtel 4/5 étoiles avec petit-déjeuner inclus' },
      { title: 'Consultation à la Clinique', desc: 'Analyse capillaire détaillée et plan DHI personnalisé avec votre chirurgien' },
      { title: 'Jour de l\'Intervention DHI', desc: 'Opération DHI complète avec un traducteur personnel présent' },
      { title: 'Récupération et Visite de la Ville', desc: 'Instructions post-opératoires, médicaments et visite guidée offerte d\'Antalya' },
    ],
    tr: [
      { title: 'Havaalanı VIP Karşılama', desc: 'Antalya Havaalanı\'ndan Mercedes Vito ile özel transfer' },
      { title: 'Lüks Otel Girişi', desc: 'Kahvaltı dahil 4/5 Yıldızlı otel konaklaması' },
      { title: 'Klinik Muayenesi', desc: 'Doktorunuzla detaylı saç analizi ve özel DHI planlaması' },
      { title: 'DHI Operasyon Günü', desc: 'Kişisel tercüman eşliğinde tam DHI operasyonu' },
      { title: 'İyileşme ve Şehir Turu', desc: 'Operasyon sonrası bakım talimatları, ilaçlar ve ücretsiz Antalya şehir turu' },
    ],
  }[lang as Lang] || [
    { title: 'Airport VIP Pickup', desc: 'Mercedes Vito private transfer from Antalya Airport' },
    { title: 'Luxury Hotel Check-In', desc: '4/5-Star hotel with breakfast included' },
    { title: 'Clinic Consultation', desc: 'Detailed hair analysis and custom DHI plan with your surgeon' },
    { title: 'DHI Procedure Day', desc: 'Full DHI operation with personal translator present' },
    { title: 'Recovery & City Tour', desc: 'Post-op care instructions, medications, and complimentary Antalya city tour' },
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
                  <p className="text-xs text-slate-600 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
