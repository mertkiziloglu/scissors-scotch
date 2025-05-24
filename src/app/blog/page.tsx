import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog - Saç ve Bakım Rehberi | Mehmet KIZILOGLU Hair Studio Bolu",
  description: "Bolu'nun önde gelen erkek kuaförü Mehmet KIZILOGLU'ndan saç bakımı, saç modelleri ve erkek bakımı hakkında profesyonel öneriler ve trend bilgileri.",
  keywords: "bolu berber blog, erkek saç modelleri bolu, saç bakımı bolu, mehmet kızıloğlu blog, hair studio bolu blog, erkek bakım önerileri",
};

const blogPosts = [
  {
    title: "2024 Erkek Saç Modelleri Trendleri",
    description: "Bu yılın en popüler erkek saç modelleri ve kimlere yakışacağı hakkında detaylı rehber.",
    image: "https://ext.same-assets.com/3464918301/3582934371.jpeg",
    date: "15 Mart 2024",
    readTime: "5 dk",
    slug: "2024-erkek-sac-modelleri",
  },
  {
    title: "Saç ve Sakal Bakımında Doğal Yöntemler",
    description: "Evde uygulayabileceğiniz doğal saç ve sakal bakım önerileri, maskeler ve bakım rutinleri.",
    image: "https://ext.same-assets.com/149234666/2666641620.jpeg",
    date: "10 Mart 2024",
    readTime: "4 dk",
    slug: "dogal-sac-sakal-bakimi",
  },
  {
    title: "Saç Dökülmesine Karşı Etkili Çözümler",
    description: "Saç dökülmesinin nedenleri ve önlenmesi için uzman önerileri ve tedavi yöntemleri.",
    image: "https://ext.same-assets.com/1701950190/502358705.jpeg",
    date: "5 Mart 2024",
    readTime: "6 dk",
    slug: "sac-dokulmesine-karsi-cozumler",
  },
  {
    title: "Yüz Şekline Göre Sakal Modelleri",
    description: "Farklı yüz şekillerine uygun sakal stilleri ve bakım önerileri.",
    image: "https://ext.same-assets.com/3380216555/3981322809.jpeg",
    date: "1 Mart 2024",
    readTime: "4 dk",
    slug: "yuz-sekline-gore-sakal",
  },
  {
    title: "Profesyonel Saç Bakım Ürünleri Rehberi",
    description: "Saç tipinize uygun profesyonel bakım ürünleri ve doğru kullanım önerileri.",
    image: "https://ext.same-assets.com/3808762242/1775579771.png",
    date: "25 Şubat 2024",
    readTime: "7 dk",
    slug: "profesyonel-sac-bakim-urunleri",
  },
  {
    title: "Sağlıklı Saçlar İçin Beslenme Önerileri",
    description: "Saç sağlığını destekleyen besinler ve beslenme alışkanlıkları hakkında bilgiler.",
    image: "https://ext.same-assets.com/3902145908/2014903948.png",
    date: "20 Şubat 2024",
    readTime: "5 dk",
    slug: "saglikli-saclar-beslenme",
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="relative w-full md:w-1/3 aspect-square">
              <Image
                src="/trophy.jpg"
                alt="Türkiye Erkek Kuaförleri Yarışması Birincisi"
                fill
                className="object-contain"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Türkiye'nin En İyi Erkek Kuaförü
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                2023 Türkiye Erkek Kuaförleri Yarışması'nda gösterdiğimiz üstün başarı ve yaratıcı tekniklerle birincilik ödülüne layık görüldük. Bu başarı, müşterilerimize sunduğumuz kaliteli hizmetin ve yenilikçi yaklaşımımızın bir kanıtıdır.
              </p>
              <p className="text-primary font-semibold">
                Mehmet KIZILOGLU - Türkiye Şampiyonu 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bizi Instagram'da Takip Edin
            </h2>
            <p className="text-gray-600 mb-6">
              En yeni saç modelleri ve çalışmalarımızdan haberdar olmak için Instagram hesabımızı takip edin.
            </p>
            <Link
              href="https://instagram.com/mehmetkizilogluhairstudio"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
              </svg>
              Instagram'da Takip Et
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 