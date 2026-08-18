import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import JsonLd from '@/components/JsonLd';
import { SiteProvider } from '@/lib/context';
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Antalya DHI Clinic — Surgeon-Guided DHI Hair Restoration Turkey",
  description: "All-inclusive VIP DHI hair transplant in Antalya. T.C. Ministry of Health licensed partner facilities, private Mercedes Vito transfer, 5-star hotel stay, and transparent packages.",
  keywords: "Antalya DHI hair transplant, DHI hair restoration Turkey, Choi pen hair transplant Antalya, VIP hair transplant Antalya",
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
    title: 'Antalya DHI Clinic — Surgeon-Guided DHI Hair Restoration',
    description: 'All-inclusive VIP DHI hair transplant in Antalya. Licensed partner surgical facilities, 5-star hotel stay, and transparent pricing.',
    url: 'https://antalyadhi.com',
    siteName: 'Antalya DHI Clinic',
    locale: 'en_GB',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FAFBFC] text-slate-900 selection:bg-emerald-600 selection:text-white" suppressHydrationWarning>
        <SiteProvider>
          <JsonLd />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
