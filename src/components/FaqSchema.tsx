import React from 'react';
import JsonLd from './JsonLd';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
}

export default function FaqSchema({ faqs }: FaqSchemaProps) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={faqData} />;
}

// Example usage:
export function BarberFaqSchema() {
  const barberFaqs = [
    {
      question: 'What services does Scissors & Scotch offer?',
      answer: 'Scissors & Scotch offers premium men\'s haircuts, beard trims, hot towel shaves, and other grooming services. We also have a full-service bar where you can enjoy a complimentary drink with your service.',
    },
    {
      question: 'Do I need to make an appointment?',
      answer: 'While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get the time slot that works best for you. You can book online through our website or by calling your local Scissors & Scotch.',
    },
    {
      question: 'What is included in a membership?',
      answer: 'Our memberships include regular haircuts, discounts on additional services and retail products, priority booking, and complimentary drinks with each service. We offer different membership tiers to suit your needs.',
    },
    {
      question: 'How long does a typical haircut take?',
      answer: 'A standard haircut at Scissors & Scotch takes approximately 30-45 minutes, depending on the style and complexity. We recommend allowing extra time to enjoy your complimentary drink in our lounge area.',
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes, we offer gift cards that can be purchased online or in-store. They make a perfect gift for any occasion and can be used for services or retail products.',
    },
  ];

  return <FaqSchema faqs={barberFaqs} />;
} 