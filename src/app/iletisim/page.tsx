import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim - Mehmet KIZILOGLU Hair Studio Bolu | Adres ve Yol Tarifi",
  description: "Mehmet KIZILOGLU Hair Studio Bolu Terakki Caddesi'nde hizmet vermektedir. Kolayca ulaşım için yol tarifi alın, sosyal medyadan bizi takip edin veya hemen randevu için arayın!",
  keywords: "mehmet kızıloğlu bolu, hair studio bolu, erkek kuaförü bolu, bolu merkez kuaför, terakki caddesi kuaför, bolu kuaför telefon",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Bize Ulaşın
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Mehmet KIZILOGLU Hair Studio olarak sizlere daha iyi hizmet verebilmek için buradayız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <Link href="tel:+905330986724" className="text-gray-600 hover:text-primary">
                      +90 533 098 67 24
                    </Link>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adres</h3>
                    <p className="text-gray-600">
                      Terakki Caddesi, No: 123<br />
                      Merkez/Bolu
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cumartesi: 09:00 - 20:00<br />
                      Pazar: 10:00 - 18:00
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Sosyal Medya</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com/mehmetkizilogluhairstudio"
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://instagram.com/mehmetkizilogluhairstudio"
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://wa.me/905330986724"
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.24C16.4 15.84 15.52 16.32 14.84 16.44C14.32 16.52 13.68 16.6 11.24 15.52C8.24 14.2 6.36 11.16 6.24 11C6.12 10.84 5.12 9.48 5.12 8.08C5.12 6.68 5.84 6 6.12 5.72C6.36 5.48 6.64 5.4 6.8 5.4C6.96 5.4 7.12 5.4 7.28 5.4C7.44 5.4 7.68 5.32 7.92 6.04C8.16 6.8 8.92 8.2 9 8.36C9.08 8.52 9.12 8.72 9 8.92C8.88 9.12 8.84 9.24 8.68 9.44C8.52 9.64 8.32 9.88 8.16 10.04C8 10.2 7.84 10.36 8 10.64C8.16 10.92 8.92 12.08 10.04 13.08C11.44 14.36 12.56 14.72 12.88 14.88C13.2 15.04 13.4 15 13.6 14.76C13.8 14.52 14.52 13.68 14.76 13.36C15 13.04 15.24 13.08 15.56 13.2C15.88 13.32 17.28 14 17.64 14.16C18 14.32 18.24 14.4 18.32 14.52C18.4 14.68 18.4 15.24 16.64 15.24Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.1895075754373!2d31.60106037215991!3d40.73399199476714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3fd2b9e8e1ef%3A0x6c2f3f2460b1fae1!2sTerakki%20Cd.%2C%20Bolu%20Merkez%2FBolu!5e0!3m2!1str!2str!4v1701950190000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 