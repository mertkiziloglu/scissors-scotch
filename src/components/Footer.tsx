import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://ext.same-assets.com/3834002725/2929940995.png"
                alt="Scissors & Scotch Logo"
                width={140}
                height={50}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-6">
              Scissors & Scotch is the grooming experience every man deserves - where traditional barbering and modern spa services meet your favorite watering hole. Sit back, relax, get groomed, then enjoy a cocktail, coffee, or cold one in our private lounge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="text-gray-300 hover:text-white transition-colors">
                  Membership Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="text-gray-300 hover:text-white transition-colors">
                  Memberships
                </Link>
              </li>
              <li>
                <Link href="https://careers.scissorsscotch.com/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://franchise.scissorsscotch.com/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Franchising
                </Link>
              </li>
              <li>
                <Link href="https://www.scissorsscotch.com/groups-and-events" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Groups & Events
                </Link>
              </li>
              <li>
                <Link href="https://scissorsscotch.com/suits-suck" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://facebook.com/scissorsscotch" target="_blank" aria-label="Facebook" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </Link>
            <Link href="https://instagram.com/scissorsscotch" target="_blank" aria-label="Instagram" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
              </svg>
            </Link>
            <Link href="https://twitter.com/scissorsscotch" target="_blank" aria-label="Twitter" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22 5.55C21.232 5.883 20.422 6.106 19.592 6.211C20.4587 5.68225 21.1029 4.85691 21.42 3.89C20.5979 4.36862 19.6951 4.71679 18.758 4.92C18.066 4.17851 17.1581 3.69733 16.1729 3.55813C15.1877 3.41894 14.1822 3.62768 13.323 4.1477C12.4639 4.66772 11.7992 5.46909 11.448 6.42145C11.0967 7.37382 11.0777 8.42176 11.394 9.39C9.86344 9.31395 8.36563 8.91342 6.99013 8.21062C5.61463 7.50782 4.39334 6.5216 3.392 5.31C3.02 5.99 2.839 6.763 2.839 7.579C2.83853 8.31912 3.03825 9.04389 3.41482 9.6769C3.79139 10.3099 4.32841 10.8299 4.969 11.178C4.25661 11.158 3.55997 10.958 2.938 10.598V10.648C2.93794 11.7486 3.30354 12.8155 3.97885 13.6794C4.65416 14.5432 5.59635 15.1506 6.661 15.396C5.99711 15.5817 5.29668 15.6049 4.622 15.464C4.90308 16.4034 5.44618 17.2306 6.17983 17.8398C6.91348 18.449 7.80323 18.8148 8.728 18.892C7.02466 20.2348 4.91358 20.9604 2.742 20.958C2.42382 20.9583 2.10595 20.9399 1.79 20.903C3.99332 22.3094 6.5761 23.0582 9.215 23.056C15.913 23.056 19.612 17.617 19.612 12.892C19.612 12.719 19.608 12.547 19.6 12.376C20.4158 11.7731 21.1193 11.021 21.675 10.156C20.9348 10.4782 20.1482 10.6873 19.346 10.776C20.2006 10.2629 20.845 9.46078 21.143 8.526C20.3425 8.99775 19.4689 9.33539 18.56 9.526C17.8513 8.76764 16.9092 8.31605 15.8969 8.26529C14.8847 8.21453 13.8957 8.56877 13.117 9.26C12.3384 9.95124 11.828 10.9259 11.6867 11.9886C11.5455 13.0512 11.7833 14.1294 12.357 15.016C9.76088 14.8833 7.26559 13.9751 5.17718 12.441C3.08876 10.907 1.48386 8.8126 0.525 6.394C-0.0509429 7.45656 -0.143662 8.67907 0.270074 9.81201C0.68381 10.945 1.57219 11.8817 2.708 12.422C2.05449 12.4025 1.41677 12.2268 0.851 11.91V11.961C0.850637 13.161 1.28027 14.3212 2.06286 15.2424C2.84545 16.1636 3.93351 16.7831 5.122 16.985C4.51875 17.1442 3.88851 17.1676 3.274 17.054C3.60117 18.0762 4.24641 18.9671 5.11397 19.5896C5.98154 20.2121 7.02752 20.5364 8.102 20.519C6.38732 21.8778 4.28456 22.6122 2.113 22.609C1.81404 22.609 1.51523 22.5915 1.218 22.557C3.42275 23.9778 5.9788 24.7304 8.588 24.728C18.32 24.728 23.642 16.618 23.642 9.645C23.642 9.466 23.638 9.289 23.629 9.113C24.4359 8.43217 25.1347 7.608 25.695 6.677C24.9127 7.03845 24.0786 7.27468 23.222 7.377C24.1249 6.78055 24.8118 5.86982 25.143 4.81C24.2998 5.33572 23.3695 5.71312 22.394 5.924C21.6296 5.10639 20.6183 4.57684 19.5182 4.42226C18.4182 4.26768 17.2969 4.49804 16.3307 5.07525C15.3645 5.65246 14.6118 6.54467 14.1967 7.60959C13.7816 8.6745 13.7255 9.84807 14.038 10.95C11.7546 10.834 9.51984 10.21 7.5012 9.12648C5.48255 8.04295 3.73134 6.52339 2.368 4.679C1.64325 5.93093 1.45267 7.41282 1.84508 8.79367C2.23749 10.1745 3.17769 11.3228 4.444 11.96C3.7404 11.9378 3.0513 11.7553 2.429 11.427V11.448C2.42866 12.675 2.8461 13.8656 3.61849 14.8372C4.39088 15.8088 5.45895 16.4961 6.656 16.78C5.99879 16.961 5.31 17.0046 4.636 16.908C4.99982 17.9678 5.66646 18.8952 6.55105 19.5656C7.43563 20.236 8.49391 20.6185 9.587 20.662C7.31104 22.4339 4.50359 23.3737 1.608 23.371C1.07 23.3686 0.532387 23.3362 0 23.274C2.95383 25.1554 6.39036 26.1321 9.9 26.129C21.78 26.129 28.272 16.333 28.272 7.878C28.272 7.668 28.268 7.457 28.26 7.247C29.5254 6.46421 30.6512 5.46484 31.579 4.30107C30.358 4.85633 29.057 5.22557 27.722 5.394L22 5.55Z" />
              </svg>
            </Link>
          </div>
          <div className="text-sm text-gray-300">
            © 2024 Scissors & Scotch. All rights reserved. <Link href="https://scissorsscotch.com/suits-suck" className="hover:underline">Terms.</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
