import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antalya DHI Hair Transplant | Premium All-Inclusive Packages from £1,550",
  description: "World-class DHI hair transplant in Antalya, Turkey. Ministry of Health certified clinic. VIP airport transfer, luxury hotel, personal translator. Free consultation via WhatsApp.",
  keywords: "DHI hair transplant Antalya, hair transplant Turkey, greffe cheveux Turquie, saç ekimi Antalya, DHI technique, hair restoration",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Premium DHI Hair Transplant in Antalya, Turkey',
    description: 'All-inclusive DHI packages from £1,550. Ministry of Health certified. VIP transfers, luxury hotel, lifetime warranty.',
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['fr_FR', 'tr_TR'],
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
        {children}
      </body>
    </html>
  );
}
