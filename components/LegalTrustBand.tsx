'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';

export default function LegalTrustBand() {
  const { lang } = useSiteContext();

  const text = {
    en: 'T.C. Ministry of Health Licensed Partner Facilities & Certified Surgical Teams',
    fr: 'Établissements Partenaires Agréés par le Ministère de la Santé T.C. & Équipes Certifiées',
    tr: 'T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Sağlık Kuruluşları & Sertifikalı Cerrahi Kadro',
  }[lang as Lang] || 'T.C. Ministry of Health Licensed Partner Facilities';

  return (
    <div className="w-full bg-white border-y border-slate-200 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex items-center text-xs font-semibold text-slate-700">
          <svg className="w-4 h-4 mr-2 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
