'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import Link from 'next/link';
import { MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { lang } = useSiteContext();

  const rights = t(lang as Lang, 'footer.rights') || 'All rights reserved.';
  const privacy = t(lang as Lang, 'footer.privacy') || 'Privacy Policy';
  const terms = t(lang as Lang, 'footer.terms') || 'Terms of Use';

  return (
    <footer className="bg-[#050811] border-t border-white/[0.08] text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-heading font-extrabold text-lg text-white">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/25">
              DHI
            </div>
            <span>ANTALYA <span className="text-blue-400">DHI</span> CLINIC</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-300">
            <a href="#comparison" className="hover:text-blue-400 transition-colors">Comparison</a>
            <a href="#results" className="hover:text-blue-400 transition-colors">Patient Journey</a>
            <a href="#packages" className="hover:text-blue-400 transition-colors">Packages</a>
            <a href="#recovery-roadmap" className="hover:text-blue-400 transition-colors">Recovery Timeline</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
          </div>

          {/* Contact Direct */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/905070871789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 font-bold text-xs hover:bg-emerald-900/80 transition-colors"
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
