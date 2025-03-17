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
  title: "Men's Haircuts & Stylists | Scissors & Scotch - Best Barber Shop",
  description: "Scissors & Scotch is the grooming experience every man deserves - where traditional barbering and modern spa services meet your favorite watering hole.",
  keywords: "barber shop, men's haircuts, grooming, scotch, haircuts, styling, barber, premium haircuts, men's grooming, luxury barber",
  authors: [{ name: "Scissors & Scotch" }],
  category: "Barber Shop",
  creator: "Scissors & Scotch",
  publisher: "Scissors & Scotch",
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
    canonical: 'https://scissorsandscotch.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scissorsandscotch.com',
    title: "Men's Haircuts & Stylists | Scissors & Scotch - Best Barber Shop",
    description: "Scissors & Scotch is the grooming experience every man deserves - where traditional barbering and modern spa services meet your favorite watering hole.",
    siteName: 'Scissors & Scotch',
    images: [
      {
        url: 'https://ext.same-assets.com/1701950190/502358705.jpeg',
        width: 1200,
        height: 630,
        alt: 'Scissors & Scotch Barber Shop',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Men's Haircuts & Stylists | Scissors & Scotch",
    description: "Scissors & Scotch is the grooming experience every man deserves - where traditional barbering and modern spa services meet your favorite watering hole.",
    images: ['https://ext.same-assets.com/1701950190/502358705.jpeg'],
    creator: '@scissorsscotch',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
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
