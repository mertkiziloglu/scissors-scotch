import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoImage from "@/components/SeoImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mehmet KIZILOGLU Hair Studio | Bolu'nun En İyi Erkek Kuaförü",
  description: "Bolu'da profesyonel erkek saç kesimi ve bakımı için Mehmet KIZILOGLU Hair Studio. Modern ekipman, uzman ekip ve şık atmosfer ile hizmetinizdeyiz.",
  keywords: "mehmet kızıloğlu, hair studio bolu, erkek kuaförü, saç kesimi, sakal tıraşı, cilt bakımı, bolu kuaför",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative" aria-labelledby="hero-heading">
        <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
          <SeoImage
            src="https://ext.same-assets.com/1701950190/502358705.jpeg"
            alt="Modern Berber Salonu Bolu - Profesyonel erkek saç kesimi ve bakım hizmetleri"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
              Bolu'nun En İyi<br />Hair Studio'su
            </h1>
            <p className="text-xl md:text-2xl text-white text-center mb-8">
              Profesyonel ekip ve modern ekipmanlarla<br />en iyi hizmeti sunuyoruz
            </p>
            <Link href="tel:+905330986724" className="btn-primary text-base md:text-lg w-full md:w-auto px-6 py-3 justify-center" aria-label="Hemen randevu alın">
              Randevu Al
            </Link>
            <p className="text-xs md:text-sm mt-4 md:mt-6 italic max-w-lg text-center">*Bolu'nun en iyi berber deneyimi için doğru yerdesiniz.</p>
          </div>
        </div>
      </section>

      {/* Do Yourself a Favor Section */}
      <section className="py-8 md:py-16 bg-white" aria-labelledby="favor-heading">
        <div className="container-custom px-4 md:px-6">
          <h2 id="favor-heading" className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Kendinize İyi Bakın</h2>
          <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
            Modern Berber Salonu, her erkeğin hak ettiği bakım deneyimini sunar. Geleneksel berberlik ile modern spa hizmetlerini bir araya getiriyoruz. Arkanıza yaslanın, rahatlayın ve profesyonel bakımın keyfini çıkarın.
          </p>
        </div>
      </section>

      {/* Come for the grooming Section */}
      <section className="py-8 md:py-12 bg-gray-100" aria-labelledby="grooming-heading">
        <div className="container-custom px-4 md:px-6">
          <h2 id="grooming-heading" className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Kaliteli Hizmet, Modern Atmosfer</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-center max-w-3xl mx-auto">
            Modern Berber Salonu'nda, güler yüzlü personel, etkileyici bakım hizmetleri ve modern bir atmosfer bulacaksınız. Biz buna kısaca: günün en iyi deneyimi diyoruz.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">4.9 / 5 | 1,000+ Google Değerlendirmesi</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Şimdiye kadar yaşadığım en iyi saç kesimi deneyimi."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/3902145908/2014903948.png"
                  alt="Ahmet Yılmaz - Modern Berber Müşterisi"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Ahmet Yılmaz</h4>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Harika bir yer! Yeni bir berber arayanlar için kesinlikle tavsiye ederim."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/3808762242/1775579771.png"
                  alt="Mehmet Kaya - Modern Berber Müşterisi"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Mehmet Kaya</h4>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Mükemmel saç kesimi. Harika atmosfer. Profesyonel hizmet."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/3380216555/3981322809.jpeg"
                  alt="Mustafa Demir - Modern Berber Müşterisi"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Mustafa Demir</h4>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Çok samimi ve yardımsever ekip. Hizmet kalitesi her zaman A+."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/146233034/3865889983.jpeg"
                  alt="Ali Yıldız - Modern Berber Müşterisi"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Ali Yıldız</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <SeoImage
            src="https://ext.same-assets.com/149234666/2666641620.jpeg"
            alt="Modern Berber Salonu Ekipmanları"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-center">Farkı Hemen Keşfedin</h2>
            <Link href="tel:+905330986724" className="btn-primary text-base md:text-lg w-full md:w-auto px-6 py-3 justify-center">
              Randevu Al
            </Link>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SeoImage
                src="https://ext.same-assets.com/3464918301/3582934371.jpeg"
                alt="Scissors & Scotch Careers"
                width={500}
                height={400}
                className="rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Calling all</h2>
              <p className="text-lg mb-6">
                We've built a business and a culture that prioritizes people, because solid relationships with our customers and employees will always be what matters most.
              </p>
              <Link href="https://careers.scissorsscotch.com/" target="_blank" className="btn-primary">
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="section-title">Look Good, Feel Great, Kick Ass</h2>
          <Link href="/services" className="btn-primary">
            View Our Services
          </Link>
        </div>
      </section>

      {/* Partners/Press Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">We're Getting Buzz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-12">
            {/* Logos */}
            {[
              "https://ext.same-assets.com/2919704370/4246386714.png",
              "https://ext.same-assets.com/2239177678/2823944177.png",
              "https://ext.same-assets.com/1143240669/1427935980.jpeg",
              "https://ext.same-assets.com/3529087500/3327766163.png",
              "https://ext.same-assets.com/1514726522/1882593589.png",
              "https://ext.same-assets.com/19708020/1756690088.png",
              "https://ext.same-assets.com/2023003071/2616912440.png",
            ].map((src, index) => (
              <div key={index} className="flex items-center justify-center">
                <SeoImage
                  src={src}
                  alt="Partner Logo"
                  width={100}
                  height={60}
                  className="h-auto max-h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
