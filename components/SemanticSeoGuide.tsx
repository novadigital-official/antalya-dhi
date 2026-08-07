'use client';

import Link from 'next/link';
import { useSiteContext } from '@/lib/context';

export default function SemanticSeoGuide() {
  const { lang } = useSiteContext();

  const guides = [
    {
      slug: 'antalya-dhi-sac-ekimi-fiyatlari-2026',
      title: lang === 'tr' ? 'Antalya DHI Saç Ekimi Fiyatları 2026 Rehberi' : 'Antalya DHI Hair Transplant Pricing Guide 2026',
      desc: lang === 'tr' ? '2026 güncel Standart ve VIP Her Şey Dahil paket fiyatları ve maliyet analizi.' : 'Transparent 2026 Standard vs VIP All-Inclusive pricing and cost comparison.',
      tag: 'Pricing & Cost'
    },
    {
      slug: 'dhi-hair-transplant-turkey-guide',
      title: lang === 'tr' ? 'Türkiye DHI Saç Ekimi Eksiksiz Hasta Rehberi' : 'DHI Hair Transplant Turkey: Complete Medical Tourism Guide',
      desc: lang === 'tr' ? 'Yabancı hastalar için havalimanından operasyon sonrası bakıma kadar tüm süreç.' : 'Everything international patients need to know about DHI hair restoration in Antalya.',
      tag: 'Medical Guide'
    },
    {
      slug: 'uk-patients-guide-antalya-hair-transplant',
      title: lang === 'tr' ? 'İngiltere Hastaları İçin Antalya DHI Rehberi' : 'UK Patients Guide to DHI Hair Transplant in Antalya',
      desc: lang === 'tr' ? 'Londra, Manchester ve Birmingham’dan direkt uçuşlar ve %70 maliyet avantajı.' : 'Direct flights from London, Manchester, and Birmingham with up to 70% cost savings.',
      tag: 'UK Patients'
    },
    {
      slug: 'how-many-grafts-do-i-need',
      title: lang === 'tr' ? 'Kaç Greft Saç Ekimine İhtiyacım Var?' : 'How Many Hair Grafts Do I Need for Full Coverage?',
      desc: lang === 'tr' ? 'Norwood dökülme skalasına göre greft miktarı ve dökülme seviye hesabı.' : 'Understanding the Norwood Scale: Estimate graft counts from Stage 2 to Stage 6.',
      tag: 'Hair Analysis'
    }
  ];

  return (
    <div id="seo-guides" className="w-full space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
          AI SEARCH KNOWLEDGE BASE
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          {lang === 'tr' ? "Antalya DHI Saç Ekimi Rehberi" : "Antalya DHI Hair Transplant Knowledge Base"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {lang === 'tr' ? "Google ve AI arama sistemleri tarafından taranan kapsamlı medikal bilgiler." : "Expert medical articles and patient guides indexed for Google & AI answer engines."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {guides.map((g, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  {g.tag}
                </span>
                <span className="text-xs font-bold text-slate-400">SEO Verified</span>
              </div>

              <h3 className="text-base font-black text-slate-900 mb-2 leading-snug">
                {g.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {g.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/blog/${g.slug}`}
                className="text-xs font-black text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                {lang === 'tr' ? 'Rehberi Oku →' : 'Read Full Guide →'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
