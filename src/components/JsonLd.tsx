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
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: 'Scissors & Scotch',
    description: 'Scissors & Scotch is the grooming experience every man deserves - where traditional barbering and modern spa services meet your favorite watering hole.',
    url: 'https://scissorsandscotch.com',
    logo: 'https://ext.same-assets.com/1701950190/502358705.jpeg',
    image: 'https://ext.same-assets.com/1701950190/502358705.jpeg',
    priceRange: '$$',
    telephone: '+1-555-123-4567', // Replace with actual phone number
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street', // Replace with actual address
      addressLocality: 'City', // Replace with actual city
      addressRegion: 'State', // Replace with actual state
      postalCode: '12345', // Replace with actual postal code
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128', // Replace with actual coordinates
      longitude: '-74.0060' // Replace with actual coordinates
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '11:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/scissorsandscotch',
      'https://www.instagram.com/scissorsandscotch',
      'https://twitter.com/scissorsscotch'
    ],
    offers: {
      '@type': 'Offer',
      description: 'Premium men\'s haircuts and grooming services',
      price: '30.00', // Replace with actual starting price
      priceCurrency: 'USD'
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://scissorsandscotch.com/booking'
      },
      result: {
        '@type': 'Reservation',
        name: 'Book an appointment'
      }
    }
  };

  return <JsonLd data={localBusinessData} />;
}

export function ServiceJsonLd() {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Men\'s Haircuts and Grooming',
    provider: {
      '@type': 'BarberShop',
      name: 'Scissors & Scotch'
    },
    description: 'Premium men\'s haircuts, beard trims, and grooming services in a luxury environment with complimentary drinks.',
    offers: {
      '@type': 'Offer',
      price: '30.00', // Replace with actual starting price
      priceCurrency: 'USD'
    }
  };

  return <JsonLd data={serviceData} />;
}

export function BreadcrumbJsonLd() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://scissorsandscotch.com'
      }
    ]
  };

  return <JsonLd data={breadcrumbData} />;
} 