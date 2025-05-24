import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Blog yazıları veritabanı
const blogPosts = {
  "2024-erkek-sac-modelleri": {
    title: "2024 Erkek Saç Modelleri Trendleri",
    description: "Bu yılın en popüler erkek saç modelleri ve kimlere yakışacağı hakkında detaylı rehber.",
    image: "https://ext.same-assets.com/3464918301/3582934371.jpeg",
    date: "15 Mart 2024",
    readTime: "5 dk",
    content: `
      <h2>2024'ün En Trend Erkek Saç Modelleri</h2>
      <p>2024 yılında erkek saç modellerinde doğallık ve minimal bakım gerektiren stiller ön plana çıkıyor. İşte bu yılın öne çıkan trendleri:</p>
      
      <h3>1. Tekstürlü Crop Cut</h3>
      <p>Üst kısımda hafif tekstür ve yanların kısa olduğu bu stil, modern ve bakımı kolay bir görünüm sunuyor. Özellikle ofis ortamı için ideal.</p>
      
      <h3>2. Modern Pompadour</h3>
      <p>Klasik pompadour'un modern yorumu, daha az hacimli ve daha doğal bir görünümle karşımıza çıkıyor. Her yüz şekline uyum sağlayabilen çok yönlü bir stil.</p>
      
      <h3>3. Orta Uzunlukta Dağınık Stiller</h3>
      <p>Doğal ve rahat görünümlü orta uzunlukta saçlar, minimal şekillendirme ile şık bir görünüm sağlıyor.</p>
      
      <h3>Kimlere Yakışır?</h3>
      <p>Her saç modeli her yüz tipine aynı şekilde yakışmayabilir. Yüz şeklinize ve saç tipinize göre en uygun modeli seçmek önemlidir.</p>
      
      <h3>Bakım Önerileri</h3>
      <p>Seçtiğiniz saç modelinin uzun süre şık görünmesi için düzenli bakım ve doğru ürün kullanımı şarttır. Profesyonel bakım için salonumuzu ziyaret edebilirsiniz.</p>
    `
  },
  "dogal-sac-sakal-bakimi": {
    title: "Saç ve Sakal Bakımında Doğal Yöntemler",
    description: "Evde uygulayabileceğiniz doğal saç ve sakal bakım önerileri, maskeler ve bakım rutinleri.",
    image: "https://ext.same-assets.com/149234666/2666641620.jpeg",
    date: "10 Mart 2024",
    readTime: "4 dk",
    content: `
      <h2>Doğal Bakım Yöntemleri</h2>
      <p>Kimyasal içermeyen, doğal malzemelerle evde uygulayabileceğiniz etkili bakım yöntemleri:</p>
      
      <h3>Saç Bakımı için Doğal Maskeler</h3>
      <p>Zeytinyağı, yumurta ve bal karışımından oluşan maske saçları besler ve parlaklık katar. Haftada bir uygulayabilirsiniz.</p>
      
      <h3>Sakal Bakımı için Doğal Yağlar</h3>
      <p>Argan yağı ve hindistan cevizi yağı karışımı sakalları yumuşatır ve bakımlı gösterir. Her gün az miktarda kullanılabilir.</p>
      
      <h3>Günlük Bakım Rutini</h3>
      <p>Doğal bakımın etkili olması için düzenli uygulama önemlidir. Size uygun bir rutin oluşturmak için önerilerimiz.</p>
    `
  },
  "sac-dokulmesine-karsi-cozumler": {
    title: "Saç Dökülmesine Karşı Etkili Çözümler",
    description: "Saç dökülmesinin nedenleri ve önlenmesi için uzman önerileri ve tedavi yöntemleri.",
    image: "https://ext.same-assets.com/1701950190/502358705.jpeg",
    date: "5 Mart 2024",
    readTime: "6 dk",
    content: `
      <h2>Saç Dökülmesi ile Mücadele</h2>
      <p>Saç dökülmesi birçok faktöre bağlı olabilir. İşte etkili çözüm yöntemleri:</p>
      
      <h3>Saç Dökülmesinin Nedenleri</h3>
      <p>Stres, beslenme eksikliği, hormonal değişimler ve genetik faktörler saç dökülmesinin başlıca nedenleridir.</p>
      
      <h3>Önleyici Tedbirler</h3>
      <p>Dengeli beslenme, stres yönetimi ve düzenli bakım ile saç dökülmesini minimize edebilirsiniz.</p>
      
      <h3>Profesyonel Çözümler</h3>
      <p>İleri düzey saç dökülmelerinde uzman kontrolünde tedavi önemlidir. Salonumuzda saç analizi yaparak size özel çözümler sunuyoruz.</p>
    `
  },
  "yuz-sekline-gore-sakal": {
    title: "Yüz Şekline Göre Sakal Modelleri",
    description: "Farklı yüz şekillerine uygun sakal stilleri ve bakım önerileri.",
    image: "https://ext.same-assets.com/3380216555/3981322809.jpeg",
    date: "1 Mart 2024",
    readTime: "4 dk",
    content: `
      <h2>Yüz Şeklinize Uygun Sakal Modelleri</h2>
      <p>Her yüz şekli için ideal sakal modelleri farklıdır. İşte detaylı rehberimiz:</p>
      
      <h3>Yuvarlak Yüz</h3>
      <p>Köşeli ve uzun sakal modelleri yüzü daha ince gösterir. Çene hattını belirginleştiren stiller tercih edilebilir.</p>
      
      <h3>Kare Yüz</h3>
      <p>Yumuşak hatları olan sakal modelleri sert yüz hatlarını dengeler. Oval formlu kesimler önerilir.</p>
      
      <h3>Oval Yüz</h3>
      <p>Hemen her sakal modeli uyum sağlar. Kişisel tarz ve yaşam tarzına göre seçim yapılabilir.</p>
    `
  },
  "profesyonel-sac-bakim-urunleri": {
    title: "Profesyonel Saç Bakım Ürünleri Rehberi",
    description: "Saç tipinize uygun profesyonel bakım ürünleri ve doğru kullanım önerileri.",
    image: "https://ext.same-assets.com/3808762242/1775579771.png",
    date: "25 Şubat 2024",
    readTime: "7 dk",
    content: `
      <h2>Doğru Ürün Seçimi</h2>
      <p>Saç tipinize ve ihtiyaçlarınıza uygun profesyonel ürünler hakkında detaylı bilgiler:</p>
      
      <h3>Şampuan Seçimi</h3>
      <p>Saç tipinize uygun şampuan seçimi bakımın ilk ve en önemli adımıdır. Yağlı, kuru veya karma saçlar için farklı formüller kullanılmalıdır.</p>
      
      <h3>Saç Kremleri ve Maskeler</h3>
      <p>Düzenli bakım için nemlendirici ve onarıcı ürünlerin kullanımı önemlidir. Size uygun ürünleri salonumuzda bulabilirsiniz.</p>
      
      <h3>Şekillendirici Ürünler</h3>
      <p>Wax, pomad ve spreyler gibi şekillendirici ürünlerin doğru kullanımı ve saç tipine göre seçimi.</p>
    `
  },
  "saglikli-saclar-beslenme": {
    title: "Sağlıklı Saçlar İçin Beslenme Önerileri",
    description: "Saç sağlığını destekleyen besinler ve beslenme alışkanlıkları hakkında bilgiler.",
    image: "https://ext.same-assets.com/3902145908/2014903948.png",
    date: "20 Şubat 2024",
    readTime: "5 dk",
    content: `
      <h2>Saç Sağlığı için Beslenme</h2>
      <p>Sağlıklı ve güçlü saçlar için beslenmenin önemi ve öneriler:</p>
      
      <h3>Protein Kaynakları</h3>
      <p>Saçlar protein yapıdadır. Yeterli protein alımı saç sağlığı için temeldir. Et, balık, yumurta ve baklagiller önemli protein kaynaklarıdır.</p>
      
      <h3>Vitaminler ve Mineraller</h3>
      <p>Biotin, B vitaminleri, demir ve çinko saç sağlığı için önemli besin öğeleridir. Hangi besinlerden alınabileceğini öğrenin.</p>
      
      <h3>Sağlıklı Yağlar</h3>
      <p>Omega-3 yağ asitleri ve zeytinyağı gibi sağlıklı yağlar saç sağlığını destekler. Günlük beslenmenize nasıl ekleyebileceğinizi öğrenin.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "Yazı Bulunamadı | Mehmet KIZILOGLU Hair Studio Blog",
    };
  }

  return {
    title: `${post.title} | Mehmet KIZILOGLU Hair Studio Blog`,
    description: post.description,
    keywords: `${post.title.toLowerCase()}, bolu kuaför blog, mehmet kızıloğlu blog, ${post.title.toLowerCase()} bolu`,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <article className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-custom px-4 md:px-6 text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center text-sm md:text-base gap-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container-custom px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-gray-50 py-8 md:py-12">
          <div className="container-custom px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Bu Yazıyı Paylaşın</h2>
              <div className="flex justify-center gap-4">
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://mehmetkiziloglu.com/blog/${params.slug}`
                  )}`}
                  target="_blank"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                  </svg>
                </Link>
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `${post.title} - Mehmet KIZILOGLU Hair Studio Blog`
                  )}&url=${encodeURIComponent(
                    `https://mehmetkiziloglu.com/blog/${params.slug}`
                  )}`}
                  target="_blank"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${post.title} - Mehmet KIZILOGLU Hair Studio Blog\nhttps://mehmetkiziloglu.com/blog/${params.slug}`
                  )}`}
                  target="_blank"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.24C16.4 15.84 15.52 16.32 14.84 16.44C14.32 16.52 13.68 16.6 11.24 15.52C8.24 14.2 6.36 11.16 6.24 11C6.12 10.84 5.12 9.48 5.12 8.08C5.12 6.68 5.84 6 6.12 5.72C6.36 5.48 6.64 5.4 6.8 5.4C6.96 5.4 7.12 5.4 7.28 5.4C7.44 5.4 7.68 5.32 7.92 6.04C8.16 6.8 8.92 8.2 9 8.36C9.08 8.52 9.12 8.72 9 8.92C8.88 9.12 8.84 9.24 8.68 9.44C8.52 9.64 8.32 9.88 8.16 10.04C8 10.2 7.84 10.36 8 10.64C8.16 10.92 8.92 12.08 10.04 13.08C11.44 14.36 12.56 14.72 12.88 14.88C13.2 15.04 13.4 15 13.6 14.76C13.8 14.52 14.52 13.68 14.76 13.36C15 13.04 15.24 13.08 15.56 13.2C15.88 13.32 17.28 14 17.64 14.16C18 14.32 18.24 14.4 18.32 14.52C18.4 14.68 18.4 15.24 16.64 15.24Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
} 