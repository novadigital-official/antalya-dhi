'use client';

import { useSiteContext } from '@/lib/context';
import { Lang } from '@/lib/i18n';
import { ShieldCheck } from 'lucide-react';

export default function LegalTrustBand() {
  const { lang } = useSiteContext();

  const text = {
    en: 'T.C. Ministry of Health Licensed Partner Facilities & Certified Surgical Teams',
    fr: 'Établissements Partenaires Agréés par le Ministère de la Santé T.C. & Équipes Certifiées',
    tr: 'T.C. Sağlık Bakanlığı Ruhsatlı Anlaşmalı Sağlık Kuruluşları & Sertifikalı Cerrahi Kadro',
  }[lang as Lang] || 'T.C. Ministry of Health Licensed Partner Facilities';

  return (
    <div className="w-full bg-white border-y border-slate-200/80 py-3 px-4 shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex items-center text-xs font-semibold text-slate-700">
          <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600 shrink-0" />
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
