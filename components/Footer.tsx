'use client';

import { useSiteContext } from '@/lib/context';
import { t, Lang } from '@/lib/i18n';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useSiteContext();

  const rights = t(lang as Lang, 'footer.rights') || 'Tüm Hakları Saklıdır';
  const privacy = t(lang as Lang, 'footer.privacy') || 'Gizlilik Politikası';
  const terms = t(lang as Lang, 'footer.terms') || 'Kullanım Şartları';

  return (
    <footer className="py-12 bg-[#E4D9C4]/60 border-t border-[rgba(23,35,28,0.12)] text-[#4A5A4D] text-xs font-medium">
      <div className="wrap flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <div className="font-serif font-semibold text-sm text-[#17231C] mb-1">
            ANTALYA <span className="text-[#A9662F]">DHI</span> CLINIC
          </div>
          <div>
            © 2026 Antalya DHI Clinic — T.C. Sağlık Bakanlığı Ruhsatlı Klinik Ortaklıkları. {rights}
          </div>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px]">
          <Link href="/privacy" className="hover:text-[#17231C] transition-colors">{privacy}</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-[#17231C] transition-colors">{terms}</Link>
          <span>·</span>
          <a href="https://wa.me/905070871789" target="_blank" rel="noopener noreferrer" className="text-[#A9662F] font-semibold hover:underline">
            +90 507 087 17 89
          </a>
        </div>
      </div>
    </footer>
  );
}
