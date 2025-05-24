import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { LocalBusinessJsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { BarberFaqSchema } from "@/components/FaqSchema";

// We'll use Inter as base font, similar to the original site which uses Adobe fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Bolu'nun En İyi Erkek Berberi & Kuaförü | Modern Berber Salonu",
  description: "Bolu'da profesyonel erkek saç kesimi, sakal tıraşı ve bakım hizmetleri. Modern ekipman ve uzman berberlerimizle kaliteli hizmet sunuyoruz. Bolu'nun merkezinde yer alan salonumuzda randevu alın.",
  keywords: "bolu berber, bolu kuaför, erkek berberi bolu, saç kesimi bolu, sakal tıraşı, erkek bakım, bolu merkez berber, modern berber salonu, profesyonel berber, bolu erkek kuaförü",
  authors: [{ name: "Modern Berber Salonu" }],
  category: "Berber Salonu",
  creator: "Modern Berber Salonu",
  publisher: "Modern Berber Salonu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://your-domain.com',
    title: "Bolu'nun En İyi Erkek Berberi & Kuaförü | Modern Berber Salonu",
    description: "Bolu'da profesyonel erkek saç kesimi, sakal tıraşı ve bakım hizmetleri. Modern ekipman ve uzman berberlerimizle kaliteli hizmet sunuyoruz.",
    siteName: 'Modern Berber Salonu Bolu',
    images: [
      {
        url: '/images/salon.jpg',
        width: 1200,
        height: 630,
        alt: 'Bolu Modern Berber Salonu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bolu'nun En İyi Erkek Berberi",
    description: "Bolu'da profesyonel erkek saç kesimi ve bakım hizmetleri. Modern ve konforlu salonumuzda sizleri bekliyoruz.",
    images: ['/images/salon.jpg'],
    creator: '@modernberber',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="language" content="Turkish" />
        <LocalBusinessJsonLd />
        <ServiceJsonLd />
        <BreadcrumbJsonLd />
        <BarberFaqSchema />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
