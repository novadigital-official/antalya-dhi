'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
  const { lang } = useSiteContext();

  const rights = t(lang as Lang, 'footer.rights') || 'All rights reserved.';
  const privacy = t(lang as Lang, 'footer.privacy') || 'Privacy Policy';
  const terms = t(lang as Lang, 'footer.terms') || 'Terms of Use';

  const link1 = { tr: 'Karşılaştırma', en: 'Comparison', fr: 'Comparatif' }[lang as Lang] || 'Comparison';
  const link2 = { tr: 'Hasta Yolculuğu', en: 'Patient Journey', fr: 'Parcours Patient' }[lang as Lang] || 'Patient Journey';
  const link3 = { tr: 'Paketler', en: 'Packages', fr: 'Forfaits' }[lang as Lang] || 'Packages';
  const link4 = { tr: 'İyileşme Takvimi', en: 'Recovery Timeline', fr: 'Suivi 12 Mois' }[lang as Lang] || 'Recovery Timeline';
  const link5 = { tr: 'Greft Rehberi', en: 'Graft Guide', fr: 'Guide Greffons' }[lang as Lang] || 'Graft Guide';
  const link6 = { tr: 'SSS', en: 'FAQ', fr: 'FAQ' }[lang as Lang] || 'FAQ';

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-heading font-extrabold text-base text-white">
            <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white text-[10px] font-black">
              DHI
            </div>
            <span>ANTALYA <span className="text-emerald-400">DHI</span> CLINIC</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-300 text-xs">
            <a href="#comparison" className="hover:text-emerald-400 transition-colors">{link1}</a>
            <a href="#results" className="hover:text-emerald-400 transition-colors">{link2}</a>
            <a href="#packages" className="hover:text-emerald-400 transition-colors">{link3}</a>
            <a href="#graft-guide" className="hover:text-emerald-400 transition-colors">{link5}</a>
            <a href="#recovery-roadmap" className="hover:text-emerald-400 transition-colors">{link4}</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">{link6}</a>
          </div>

          {/* Contact Direct */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/905070871789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950 border border-emerald-700/60 text-emerald-400 font-bold text-xs hover:bg-emerald-900 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>+90 507 087 17 89</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Antalya DHI Clinic — Partnered with T.C. Ministry of Health Licensed Facilities. {rights}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">{privacy}</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">{terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
