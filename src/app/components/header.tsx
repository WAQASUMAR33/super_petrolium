'use client';

import { MapPin, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#FFD10C] text-black">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <Link href="#locations" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MapPin className="w-4 h-4" />
              <span className="text-sm md:text-base">Find a Location</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:229-896-7453" className="text-sm md:text-base font-semibold hover:opacity-80 transition-opacity">
              (229) 896-7453
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/splogo.png"
              alt="Super Petroleum Logo"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
            <div className="hidden md:block">
              <div className="text-white text-2xl font-bold leading-tight">
                SUPER <span className="text-[#FFD10C]">PETROLEUM</span>
              </div>
              <div className="text-[#FFD10C] text-xs font-medium tracking-widest uppercase">
                Petro-Stopping Center
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#FFD10C] transition-colors">Home</Link>
            <Link href="/services/" className="hover:text-[#FFD10C] transition-colors">Services</Link>
            <Link href="/locations/" className="hover:text-[#FFD10C] transition-colors">Locations</Link>
            <Link href="/fuel/" className="hover:text-[#FFD10C] transition-colors">Fuel Cards</Link>
            <Link href="/truck-care/" className="hover:text-[#FFD10C] transition-colors">Truck Care</Link>
            <Link href="/faq/" className="hover:text-[#FFD10C] transition-colors">FAQ</Link>
            <Link href="/careers/" className="hover:text-[#FFD10C] transition-colors">Careers</Link>
            <Link href="/blog/" className="hover:text-[#FFD10C] transition-colors">Blog</Link>
            <Link href="/contact/" className="hover:text-[#FFD10C] transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#FFD10C]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/locations/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Locations</Link>
            <Link href="/fuel/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Fuel Cards</Link>
            <Link href="/truck-care/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Truck Care</Link>
            <Link href="/faq/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/careers/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link href="/blog/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact/" className="hover:text-[#FFD10C] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

