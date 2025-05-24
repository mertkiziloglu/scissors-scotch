import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoImage from "@/components/SeoImage";

export const metadata: Metadata = {
  title: "Bolu'da En İyi Erkek Kuaförü & Hair Studio | Mehmet KIZILOGLU",
  description: "Mehmet KIZILOGLU Hair Studio Bolu'da profesyonel saç kesimi, sakal tıraşı ve erkek bakım hizmetleri. Modern ekipman ve uzman ekibimizle kaliteli hizmet garantisi. Hemen randevu alın!",
  keywords: "mehmet kızıloğlu bolu, hair studio bolu, erkek kuaförü bolu, saç kesimi bolu, sakal tıraşı bolu, cilt bakımı bolu",
};

const services = [
  {
    title: "Profesyonel Saç Kesimi",
    description: "Modern tekniklerle yapılan, yüz şeklinize ve tarzınıza uygun profesyonel saç kesimi. Deneyimli berberlerimiz size en uygun modeli önerecektir.",
    image: "https://ext.same-assets.com/3464918301/3582934371.jpeg",
    price: "150₺'den başlayan fiyatlarla",
  },
  {
    title: "Sakal Şekillendirme & Tıraş",
    description: "Geleneksel ustura ile tıraş, sakal şekillendirme ve bakım. Sıcak havlu uygulaması ve masaj ile keyifli bir deneyim.",
    image: "https://ext.same-assets.com/149234666/2666641620.jpeg",
    price: "100₺'den başlayan fiyatlarla",
  },
  {
    title: "Saç & Sakal Boyama",
    description: "Profesyonel boyama işlemi ile doğal ve kalıcı sonuçlar. Ak düşmüş saçlar ve sakallar için özel çözümler.",
    image: "https://ext.same-assets.com/1701950190/502358705.jpeg",
    price: "200₺'den başlayan fiyatlarla",
  },
  {
    title: "Cilt Bakımı & Masaj",
    description: "Yüz bakımı, peeling ve masaj uygulamaları. Cildinizi canlandıran ve ferahlatan özel bakım seansları.",
    image: "https://ext.same-assets.com/3380216555/3981322809.jpeg",
    price: "180₺'den başlayan fiyatlarla",
  },
  {
    title: "Çocuk Saç Kesimi",
    description: "Çocuklara özel nazik ve dikkatli saç kesimi. Eğlenceli ve rahat bir kuaför deneyimi.",
    image: "https://ext.same-assets.com/3808762242/1775579771.png",
    price: "80₺'den başlayan fiyatlarla",
  },
  {
    title: "Özel Bakım Paketi",
    description: "Saç kesimi, sakal tıraşı, cilt bakımı ve masajı içeren komple bakım paketi. Tam bir yenilenme deneyimi.",
    image: "https://ext.same-assets.com/3902145908/2014903948.png",
    price: "400₺'den başlayan fiyatlarla",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Bolu'nun En İyi Hair Studio Hizmetleri
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Mehmet KIZILOGLU Hair Studio'da profesyonel ekibimiz ve son teknoloji ekipmanlarımızla size en iyi hizmeti sunuyoruz.
            </p>
            <Link
              href="tel:+905330986724"
              className="btn-primary text-base md:text-lg px-8 py-4"
            >
              Hemen Randevu Al
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                  <Link
                    href="tel:+905330986724"
                    className="mt-4 inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Neden Mehmet KIZILOGLU Hair Studio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Yıllık Deneyim</h3>
              <p className="text-gray-600">Uzman kadromuz ile yıllardır Bolu'da kaliteli hizmet veriyoruz.</p>
            </div>
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Ekipman</h3>
              <p className="text-gray-600">En son teknoloji ekipmanlar ile profesyonel hizmet.</p>
            </div>
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">1000+ mutlu müşteri ve 4.9/5 Google değerlendirmesi.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 