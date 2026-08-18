'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function MedicalDisclaimer() {
  const { lang } = useSiteContext();

  const text = {
    tr: 'YASAL BİLGİLENDİRME (DISCLAIMER): Bu web sitesi bağımsız bir uluslararası hasta bilgilendirme, danışmanlık ve teknoloji koordinasyon portalıdır. Portalımız bir sağlık kuruluşu veya seyahat acentesi değildir; sitemiz üzerinden bilet, konaklama veya cerrahi tedavi satışı yapılmamaktadır. Sitemizde yer alan içerikler genel bilgilendirme amaçlıdır ve TIBBİ TEŞHİS VEYA TEDAVİ NİTELİĞİ TAŞIMAZ. Tüm cerrahi ve tıbbi operasyonlar, transfer ve konaklama hizmetleri T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış anlaşmalı A++ sağlık kuruluşları ve yetkili turizm acenteleri tarafından doğrudan sağlanmaktadır.',
    en: 'LEGAL DISCLAIMER: This website is an independent international patient consultation, technology, and coordination portal. It is not a healthcare provider or a travel agency; no flight tickets, hotel packages, or medical surgeries are sold directly via this portal. All content is provided for general informational purposes only and DOES NOT CONSTITUTE MEDICAL DIAGNOSIS OR TREATMENT. All surgical and medical procedures, transfers, and accommodations are provided directly by T.C. Ministry of Health licensed partner healthcare facilities and authorized travel agencies.',
    fr: 'MENTIONS LÉGALES: Ce site Web est un portail indépendant d\'information, de conseil et de coordination technologique pour les patients internationaux. Ce n\'est ni un établissement de santé ni une agence de voyages; aucun billet d\'avion, forfait hôtelier ou intervention chirurgicale n\'est vendu directement via ce portail. Tous les contenus sont fournis uniquement à des fins d\'information générale et NE CONSTITUENT PAS UN DIAGNOSTIC OU UN TRAITEMENT MÉDICAL. Toutes les interventions médicales, transferts et hébergements sont directement assurés par des établissements de santé agréés par le Ministère de la Santé de Turquie et des agences de voyages autorisées.',
  }[lang as Lang] || 'LEGAL DISCLAIMER: This website is an independent international patient consultation and coordination portal. All procedures are performed directly in licensed partner healthcare facilities.';

  return (
    <div className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 py-8 px-4">
      <div className="text-[11px] leading-relaxed text-center max-w-5xl mx-auto space-y-2">
        <p>{text}</p>
        <p className="font-bold text-slate-300">
          T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Sağlık Kuruluşları &amp; Uluslararası Hasta Koordinasyonu
        </p>
      </div>
    </div>
  );
}
