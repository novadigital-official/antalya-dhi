import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Inter } from "next/font/google";
import JsonLd from '@/components/JsonLd';
import { SiteProvider } from '@/lib/context';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
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
  title: "Antalya DHI Hair Restoration | Luxury Patient Concierge & Coordination",
  description: "Surgeon-guided DHI hair restoration in Antalya, Turkey. Bespoke Mediterranean medical concierge, licensed partner surgical facilities, and all-inclusive transparent packages.",
  keywords: "Antalya DHI hair transplant, Luxury hair restoration Turkey, Choi pen hair transplant Antalya, Harley street alternative hair transplant",
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
    title: 'Antalya DHI Hair Restoration | Luxury Patient Concierge',
    description: 'Surgeon-guided DHI hair transplant in Antalya. All-inclusive luxury stay, VIP Mercedes transfers, and 12-month post-op care.',
    url: 'https://antalyadhi.com',
    siteName: 'Antalya DHI Luxury Concierge',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://antalyadhi.com/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Antalya DHI Hair Restoration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya DHI Hair Restoration | Luxury Patient Concierge',
    description: 'Bespoke DHI hair restoration in Antalya. Licensed partner surgical facilities, transparent rates, VIP concierge.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FBF9F5] text-[#1C1917]" suppressHydrationWarning>
        <SiteProvider>
          <JsonLd />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
