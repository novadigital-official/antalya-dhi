'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';

export default function MedicalDisclaimer() {
  const { lang } = useSiteContext();

  // Fallbacks if not in translations
  const text = {
    en: 'The information provided on this website is for educational purposes only and does not substitute for professional medical advice. Individual results may vary.',
    fr: 'Les informations fournies sur ce site web sont uniquement à des fins éducatives et ne remplacent pas l\'avis médical professionnel. Les résultats individuels peuvent varier.',
    tr: 'Bu web sitesinde verilen bilgiler sadece eğitim amaçlıdır ve profesyonel tıbbi tavsiyenin yerini tutmaz. Bireysel sonuçlar değişebilir.',
  }[lang as Lang] || 'The information provided on this website is for educational purposes only and does not substitute for professional medical advice. Individual results may vary.';
  
  const disclaimerText = t(lang as Lang, 'disclaimer.text') || text;

  return (
    <div className="w-full bg-slate-100 border-t border-slate-200 py-6 px-4">
      <div className="text-xs text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
        <p className="mb-2">{disclaimerText}</p>
        <p className="font-medium text-slate-600">T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi Ref: AK-84920</p>
      </div>
    </div>
  );
}
