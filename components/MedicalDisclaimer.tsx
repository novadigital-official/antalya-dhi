'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function MedicalDisclaimer() {
  const { lang } = useSiteContext();

  const text = {
    tr: 'YASAL İKAZ (DISCLAIMER): Bu web sitesinde yer alan tüm içerikler bilgilendirme amacıyla hazırlanmış olup HİÇBİR ŞEKİLDE TIBBİ TEŞHİS, TANI VEYA TEDAVİ NİTELİĞİ TAŞIMAMAKTADIR. Sitemizdeki tüm operasyonlar T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış anlaşmalı yetkili sağlık kuruluşlarında uzman hekimler tarafından gerçekleştirilmektedir.',
    en: 'LEGAL DISCLAIMER: All content provided on this website is for general informational purposes only and DOES NOT CONSTITUTE MEDICAL DIAGNOSIS OR TREATMENT. All procedures are performed by specialized physicians in healthcare facilities licensed by the Ministry of Health of the Republic of Turkey.',
    fr: 'MENTIONS LÉGALES: Tous les contenus fournis sur ce site sont uniquement à des fins d\'information générale et NE CONSTITUENT PAS UN DIAGNOSTIC OU UN TRAITEMENT MÉDICAL. Toutes les interventions sont effectuées par des médecins spécialistes dans des établissements agréés par le Ministère de la Santé de Turquie.',
  }[lang as Lang] || 'LEGAL DISCLAIMER: All content provided on this website is for general informational purposes only and DOES NOT CONSTITUTE MEDICAL DIAGNOSIS OR TREATMENT.';

  return (
    <div className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 py-8 px-4">
      <div className="text-xs leading-relaxed text-center max-w-5xl mx-auto space-y-2">
        <p>{text}</p>
        <p className="font-semibold text-slate-300">
          T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi Ref: AK-84920 | TÜRSAB A Grubu Acente Lisansı
        </p>
      </div>
    </div>
  );
}
