"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full z-50">
      {/* Main navigation */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/3834002725/2929940995.png"
              alt="Modern Berber Salonu Logo"
              width={100}
              height={35}
              className="h-auto w-auto md:w-[120px]"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-secondary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

  

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-secondary font-medium hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/hizmetler" className="text-secondary font-medium hover:text-primary transition-colors">
              Hizmetler
            </Link>
            <Link href="/iletisim" className="text-secondary font-medium hover:text-primary transition-colors">
              İletişim
            </Link>
            <Link href="tel:+905330986724" className="btn-primary">
              Randevu Al
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-secondary font-medium hover:text-primary transition-colors py-2">
                Ana Sayfa
              </Link>
              <Link href="/hizmetler" className="text-secondary font-medium hover:text-primary transition-colors py-2">
                Hizmetler
              </Link>
              <Link href="/iletisim" className="text-secondary font-medium hover:text-primary transition-colors py-2">
                İletişim
              </Link>
              <Link href="tel:+905330986724" className="btn-primary text-center">
                Randevu Al
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
