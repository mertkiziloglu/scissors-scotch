import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://ext.same-assets.com/3834002725/2929940995.png"
                alt="Modern Berber Salonu Logo"
                width={120}
                height={40}
                className="h-auto w-auto md:w-[140px]"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-8 md:mb-6">
              Modern Berber Salonu, her erkeğin hak ettiği bakım deneyimini sunar. Geleneksel berberlik ile modern spa hizmetlerini bir araya getiriyoruz. Arkanıza yaslanın, rahatlayın ve profesyonel bakımın keyfini çıkarın.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 md:space-y-2">
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="tel:+905330986724" className="text-gray-300 hover:text-white transition-colors">
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-white transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-gray-300 hover:text-white transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="text-gray-300 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="https://facebook.com/modernberber" target="_blank" aria-label="Facebook" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-6 md:h-6">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </Link>
            <Link href="https://instagram.com/modernberber" target="_blank" aria-label="Instagram" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
              </svg>
            </Link>
          </div>
          <div className="text-sm text-gray-300">
            © 2024 Modern Berber Salonu. Tüm hakları saklıdır. <Link href="/gizlilik" className="hover:underline">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
