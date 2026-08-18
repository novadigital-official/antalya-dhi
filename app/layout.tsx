import type { Metadata } from "next";
import JsonLd from '@/components/JsonLd';
import { SiteProvider } from '@/lib/context';
import "./globals.css";

export const metadata: Metadata = {
  title: "Antalya DHI Hair Transplant | VIP Patient Coordination Turkey",
  description: "All-inclusive DHI hair transplant coordination in Antalya. Licensed partner clinics, board-certified surgeons, VIP Mercedes transfer, and transparent packages.",
  keywords: "Antalya DHI hair transplant, DHI hair transplant Turkey, Antalya hair transplant consultation, DHI vs FUE, hair restoration Turkey",
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
    title: 'Antalya DHI Hair Transplant | VIP Patient Coordination Turkey',
    description: 'All-inclusive DHI hair transplant packages from £1,550. T.C. Ministry of Health licensed partner facilities. VIP Mercedes transfers, luxury hotel stay, lifetime warranty.',
    url: 'https://antalyadhi.com',
    siteName: 'Antalya DHI Patient Coordination',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://antalyadhi.com/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Antalya DHI Hair Transplant Coordination Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya DHI Hair Transplant | VIP Patient Coordination Turkey',
    description: 'Personalized DHI hair transplantation in Antalya. Licensed partner clinics, transparent rates, VIP health tourism.',
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteProvider>
          <JsonLd />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
