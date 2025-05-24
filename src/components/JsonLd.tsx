import React from 'react';

// Define a more specific type for JSON-LD data instead of using 'any'
type JsonLdData = {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
};

interface JsonLdProps {
  data: JsonLdData;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          "name": "Modern Berber Salonu Bolu",
          "image": "/images/salon.jpg",
          "description": "Bolu'da profesyonel erkek saç kesimi ve bakım hizmetleri sunan modern berber salonu.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "[ADRES]",
            "addressLocality": "Bolu",
            "addressRegion": "Bolu",
            "postalCode": "14XXX",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7339",
            "longitude": "31.6082"
          },
          "url": "https://your-domain.com",
          "telephone": "+90XXXXXXXXXX",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "21:00"
            }
          ],
          "priceRange": "₺₺",
          "servesCuisine": "Turkish"
        })
      }}
    />
  );
}

export function ServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Berber Hizmetleri",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Modern Berber Salonu Bolu"
          },
          "areaServed": {
            "@type": "City",
            "name": "Bolu"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Berber Hizmetleri",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Erkek Saç Kesimi",
                  "description": "Profesyonel erkek saç kesimi hizmeti"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sakal Tıraşı",
                  "description": "Profesyonel sakal tıraşı ve şekillendirme"
                }
              }
            ]
          }
        })
      }}
    />
  );
}

export function BreadcrumbJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Ana Sayfa",
              "item": "https://your-domain.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Bolu Berber",
              "item": "https://your-domain.com/bolu-berber"
            }
          ]
        })
      }}
    />
  );
} 