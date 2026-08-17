'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function MedicalDisclaimer() {
  const { lang } = useSiteContext();

  const text = {
    tr: 'YASAL BİLGİLENDİRME (DISCLAIMER): Bu web sitesi bağımsız bir hasta bilgilendirme, danışmanlık ve koordinasyon portalıdır. Sitede yer alan tüm içerikler genel bilgilendirme amacıyla hazırlanmış olup TIBBİ TEŞHİS, TANI VEYA TEDAVİ NİTELİĞİ TAŞIMAMAKTADIR. Sitemiz aracılığıyla organize edilen tüm cerrahi ve tıbbi operasyonlar T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış ve Uluslararası Sağlık Turizmi Yetki Belgesine sahip anlaşmalı A++ sağlık kuruluşlarında uzman hekim ve cerrahlar tarafından gerçekleştirilmektedir.',
    en: 'LEGAL DISCLAIMER: This website is an independent international patient consultation and coordination portal. All content is provided for general informational purposes only and DOES NOT CONSTITUTE MEDICAL DIAGNOSIS OR TREATMENT. All surgical and medical procedures are performed by specialized physicians and surgeons in partner healthcare facilities licensed by the Ministry of Health of the Republic of Turkey.',
    fr: 'MENTIONS LÉGALES: Ce site Web est un portail indépendant d\'information et de coordination pour les patients internationaux. Tous les contenus sont fournis uniquement à des fins d\'information générale et NE CONSTITUENT PAS UN DIAGNOSTIC OU UN TRAITEMENT MÉDICAL. Toutes les interventions chirurgicales sont réalisées par des médecins spécialistes dans des établissements de santé partenaires agréés par le Ministère de la Santé de Turquie.',
  }[lang as Lang] || 'LEGAL DISCLAIMER: This website is an independent international patient consultation and coordination portal. All procedures are performed in licensed partner healthcare facilities.';

  return (
    <div className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 py-8 px-4">
      <div className="text-xs leading-relaxed text-center max-w-5xl mx-auto space-y-2">
        <p>{text}</p>
        <p className="font-semibold text-slate-300">
          T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Sağlık Kuruluşları &amp; Uluslararası Hasta Koordinasyonu
        </p>
      </div>
    </div>
  );
}
