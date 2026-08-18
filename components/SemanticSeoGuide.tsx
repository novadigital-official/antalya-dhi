'use client';

import Link from 'next/link';
import { useSiteContext } from '@/lib/context';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function SemanticSeoGuide() {
  const { lang } = useSiteContext();

  const guides = [
    {
      slug: 'antalya-dhi-sac-ekimi-fiyatlari-2026',
      title: lang === 'tr' ? 'Antalya DHI Saç Ekimi Fiyatları 2026 Rehberi' : 'Antalya DHI Hair Transplant Pricing Guide 2026',
      desc: lang === 'tr' ? '2026 güncel Standart ve VIP Her Şey Dahil paket fiyatları ve detaylı maliyet analizi.' : 'Transparent 2026 Standard vs VIP All-Inclusive pricing and cost comparison.',
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
    <section id="seo-guides" className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'tr' ? 'Klinik Rehberler' : 'Clinical Guides'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            {lang === 'tr' ? "Hasta Bilgilendirme & Klinik Rehberler" : "Patient Guides & Clinical Information"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            {lang === 'tr' ? "DHI tekniği, greft hesaplama ve seyahat planlaması hakkında detaylı uzman makaleleri." : "In-depth articles on Choi Pen DHI techniques, graft estimation, and medical travel coordination."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-3 card-hover-soft"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {g.tag}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">Clinical Article</span>
                </div>

                <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 mb-1 leading-snug">
                  {g.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {g.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/blog/${g.slug}`}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors"
                >
                  <span>{lang === 'tr' ? 'Rehberi Oku' : 'Read Full Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
