import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import JsonLd from '@/components/JsonLd';
import { SiteProvider } from '@/lib/context';
import "./globals.css";

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Antalya DHI Clinic — Doktor Kontrollü Saç Restorasyonu",
  description: "Avrupa'dan gelen hastalar için VIP transfer, otel konaklaması ve medikal koordinasyonu tek pakette birleştiren, doktor kontrollü DHI programı.",
  keywords: "Antalya DHI hair transplant, DHI hair restoration Turkey, Choi pen hair transplant Antalya",
  metadataBase: new URL('https://antalyadhi.com'),
  alternates: {
    canonical: 'https://antalyadhi.com',
    languages: {
      'en-GB': 'https://antalyadhi.com',
      'fr-FR': 'https://antalyadhi.com',
      'tr-TR': 'https://antalyadhi.com',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Antalya DHI Clinic — Doktor Kontrollü Saç Restorasyonu',
    description: 'Şeffaf paket fiyatları, 5 yıldızlı otel konaklaması ve VIP transfer ile doktor kontrollü DHI saç ekimi koordinasyonu.',
    url: 'https://antalyadhi.com',
    siteName: 'Antalya DHI Clinic',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://antalyadhi.com/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Antalya DHI Clinic',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-[#EFE7D8] text-[#17231C] font-sans selection:bg-[#A9662F] selection:text-[#EFE7D8]" suppressHydrationWarning>
        <SiteProvider>
          <JsonLd />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
