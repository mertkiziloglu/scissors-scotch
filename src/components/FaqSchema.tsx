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
      question: 'Modern Berber Salonu hangi hizmetleri sunuyor?',
      answer: 'Modern Berber Salonu olarak erkek saç kesimi, sakal tıraşı, sıcak havlu ile tıraş ve diğer bakım hizmetlerini sunuyoruz. Modern ve konforlu salonumuzda profesyonel hizmet veriyoruz.',
    },
    {
      question: 'Randevu almak gerekli mi?',
      answer: 'Müsaitlik durumuna göre randevusuz müşteri kabul etsek de, size en uygun saati ayırabilmemiz için önceden randevu almanızı öneriyoruz. Randevunuzu web sitemiz üzerinden veya telefon ile alabilirsiniz.',
    },
    {
      question: 'Üyelik paketleri neleri kapsıyor?',
      answer: 'Üyelik paketlerimiz düzenli saç kesimi, ek hizmetlerde ve ürünlerde indirim, öncelikli randevu hakkı ve özel üye etkinliklerine katılım gibi avantajlar sunuyor. İhtiyaçlarınıza göre farklı üyelik seçeneklerimiz bulunmaktadır.',
    },
    {
      question: 'Saç kesimi ne kadar sürüyor?',
      answer: 'Standart bir saç kesimi, stil ve karmaşıklığına bağlı olarak yaklaşık 30-45 dakika sürüyor. Size en iyi hizmeti sunabilmek için yeterli süreyi ayırıyoruz.',
    },
    {
      question: 'Hediye kartı alabiliyor muyum?',
      answer: 'Evet, online veya salonumuzdan hediye kartı satın alabilirsiniz. Her özel gün için mükemmel bir hediye seçeneği olan kartlarımız, tüm hizmet ve ürünlerimizde kullanılabilir.',
    },
    {
      question: 'Boluda en iyi berber hangisi?',
      answer: 'Modern Berber Salonu olarak Boluda en kaliteli ve profesyonel berberlik hizmetini sunuyoruz. Uzman kadromuz, modern ekipmanlarımız ve müşteri memnuniyetine verdiğimiz önem ile Bolunun tercih edilen berber salonuyuz.',
    },
    {
      question: 'Fiyatlarınız nedir?',
      answer: 'Saç kesimi, sakal tıraşı ve diğer bakım hizmetlerimizin güncel fiyat listesini salonumuzdan veya web sitemizden öğrenebilirsiniz. Üyelerimize özel indirimler sunuyoruz.',
    },
  ];

  return <FaqSchema faqs={barberFaqs} />;
} 