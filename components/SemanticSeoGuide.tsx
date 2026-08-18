'use client';

import Link from 'next/link';
import { useSiteContext } from '@/lib/context';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

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
    <section id="seo-guides" className="py-20 bg-slate-950 text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'Klinik Rehberler' : 'Clinical Knowledge Base'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {lang === 'tr' ? "Hasta Bilgilendirme & Klinik Rehberler" : "Patient Guides & Clinical Information"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-2xl mx-auto">
            {lang === 'tr' ? "DHI tekniği, greft hesaplama ve seyahat planlaması hakkında detaylı uzman makaleleri." : "In-depth articles on Choi Pen DHI techniques, graft estimation, and medical travel coordination."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-xl flex flex-col justify-between space-y-4 card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-full">
                    {g.tag}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">Clinical Article</span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
                  {g.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {g.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/blog/${g.slug}`}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
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
