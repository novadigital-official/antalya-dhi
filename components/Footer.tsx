'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useSiteContext();

  const desc = {
    en: 'Premium DHI hair transplant clinic in Antalya, Turkey. Specialized in international patient care, VIP transfers, and high-density hair restoration.',
    fr: 'Clinique de greffe de cheveux DHI premium à Antalya, Turquie. Spécialisée dans les soins internationaux et les forfaits VIP.',
    tr: 'Antalya\'da uzman hekim kontrollü DHI saç ekim ve sağlık turizmi rehberlik portalı. VIP transfer, konaklama ve 12 ay tıbbi takip.',
  }[lang as Lang] || 'Premium DHI hair transplant clinic in Antalya, Turkey.';

  const quickLinksTitle = { en: 'Quick Links', fr: 'Liens Rapides', tr: 'Hızlı Bağlantılar' }[lang as Lang] || 'Quick Links';
  const contactTitle = { en: 'Contact Info', fr: 'Informations de Contact', tr: 'İletişim Bilgileri' }[lang as Lang] || 'Contact Info';

  const links = {
    home: t(lang as Lang, 'nav.home') || 'Home',
    packages: t(lang as Lang, 'nav.packages') || 'Packages',
    results: t(lang as Lang, 'nav.results') || 'Results',
    process: t(lang as Lang, 'nav.process') || 'Process',
    rights: t(lang as Lang, 'footer.rights') || 'All Rights Reserved.',
    terms: t(lang as Lang, 'footer.terms') || 'Terms',
    privacy: t(lang as Lang, 'footer.privacy') || 'Privacy Policy'
  };

  const waUrl = `https://wa.me/905070871789?text=${encodeURIComponent(
    lang === 'tr'
      ? 'Merhaba, Antalya DHI saç ekimi paketleri hakkında bilgi almak istiyorum.'
      : lang === 'fr'
      ? 'Bonjour, je souhaite obtenir des informations sur les forfaits DHI à Antalya.'
      : 'Hello, I would like to get information about DHI packages in Antalya.'
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <div className="font-black text-2xl text-white mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">DHI</span>
              <span>ANTALYA <span className="text-blue-500 font-extrabold">CLINIC</span></span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm font-medium text-slate-300">
              {desc}
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-black text-sm mb-4">{quickLinksTitle}</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link href="/" className="hover:text-blue-400 transition-colors py-1 inline-block">{links.home}</Link></li>
              <li><Link href="/#packages" className="hover:text-blue-400 transition-colors py-1 inline-block">{links.packages}</Link></li>
              <li><Link href="/#results" className="hover:text-blue-400 transition-colors py-1 inline-block">{links.results}</Link></li>
              <li><Link href="/#process" className="hover:text-blue-400 transition-colors py-1 inline-block">{links.process}</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-black text-sm mb-4">{contactTitle}</h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li className="flex items-center gap-2">
                <span>WhatsApp:</span>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-black hover:text-emerald-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5"
                >
                  <span>💬 +90 507 087 17 89</span>
                </a>
              </li>
              <li>
                <span>Email: </span>
                <a href="mailto:info@antalyadhi.com" className="text-slate-200 hover:text-blue-400 transition-colors">
                  info@antalyadhi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center text-xs gap-4 font-medium">
          <div className="text-center md:text-left text-slate-400">
            © 2026 Antalya DHI Clinic. {links.rights}
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">{links.privacy}</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">{links.terms}</Link>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span>T.C. Sağlık Bakanlığı Yetkili Klinik | Ref: AK-84920</span>
            <Link href="/admin/login" className="text-slate-700 hover:text-slate-500 ml-2">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
