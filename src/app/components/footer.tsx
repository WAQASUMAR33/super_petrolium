import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/splogo.png"
                alt="Super Petroleum Logo"
                width={200}
                height={70}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner on the road since 1995. Serving professional drivers nationwide.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD10C] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD10C] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD10C] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD10C] transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/fuel/" className="hover:text-[#FFD10C] transition-colors">Fuel Services</Link></li>
              <li><Link href="/services" className="hover:text-[#FFD10C] transition-colors">All Services</Link></li>
              <li><Link href="/truck-care" className="hover:text-[#FFD10C] transition-colors">Truck Care Shop</Link></li>
              <li><Link href="/locations" className="hover:text-[#FFD10C] transition-colors">Locations</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/locations" className="hover:text-[#FFD10C] transition-colors">Find a Location</Link></li>
              <li><Link href="/fuel/" className="hover:text-[#FFD10C] transition-colors">Fuel Card Program</Link></li>
              <li><Link href="/faq" className="hover:text-[#FFD10C] transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFD10C] transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#FFD10C] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/locations" className="hover:text-[#FFD10C] transition-colors">
                  1503 West 4th St<br />
                  Adel, GA 31620
                </Link>
              </li>
              <li className="mt-4">Phone:</li>
              <li>
                <a href="tel:1-800-762-3435" className="text-[#FFD10C] hover:text-yellow-400 transition-colors">
                  1-800-ROAD-HELP
                </a>
              </li>
              <li className="mt-4">Email:</li>
              <li>
                <a href="mailto:superpetroleum2021@gmail.com" className="text-[#FFD10C] hover:text-yellow-400 hover:underline transition-colors">
                  superpetroleum2021@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Super Petroleum. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400">
              <Link href="/privacy" className="hover:text-[#FFD10C] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#FFD10C] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

