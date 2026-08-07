'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useSiteContext();

  const links = {
    home: t(lang as Lang, 'nav.home') || 'Home',
    packages: t(lang as Lang, 'nav.packages') || 'Packages',
    results: t(lang as Lang, 'nav.results') || 'Results',
    contact: t(lang as Lang, 'nav.contact') || 'Contact',
    rights: t(lang as Lang, 'footer.rights') || 'All Rights Reserved.',
    terms: t(lang as Lang, 'footer.terms') || 'Terms',
    privacy: t(lang as Lang, 'footer.privacy') || 'Privacy Policy'
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <div className="font-black text-2xl text-amber-500 mb-4">ANTALYA DHI</div>
            <p className="text-sm leading-relaxed max-w-sm">
              Premium DHI hair transplant clinic in Antalya, Turkey. Specialized in medical tourism and high-quality hair restoration packages.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition-colors min-h-[48px] inline-block flex items-center">{links.home}</Link></li>
              <li><Link href="/#packages" className="hover:text-amber-500 transition-colors min-h-[48px] inline-block flex items-center">{links.packages}</Link></li>
              <li><Link href="/#results" className="hover:text-amber-500 transition-colors min-h-[48px] inline-block flex items-center">{links.results}</Link></li>
              <li><Link href="/#contact" className="hover:text-amber-500 transition-colors min-h-[48px] inline-block flex items-center">{links.contact}</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>WhatsApp: <a href="https://wa.me/905551234567" className="text-white hover:text-amber-500 min-h-[48px] inline-block flex items-center">+90 555 123 45 67</a></li>
              <li>Email: <a href="mailto:info@antalyadhi.com" className="text-white hover:text-amber-500 min-h-[48px] inline-block flex items-center">info@antalyadhi.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <div className="text-center md:text-left">
            © 2026 Antalya DHI Aesthetic. {links.rights}
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white min-h-[48px] inline-flex items-center">{links.privacy}</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white min-h-[48px] inline-flex items-center">{links.terms}</Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span className="text-center md:text-right">T.C. Sağlık Bakanlığı Yetkili Klinik | Ref: AK-84920</span>
            <Link href="/admin/login" className="text-slate-800 hover:text-slate-600 min-h-[48px] inline-flex items-center ml-2">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
