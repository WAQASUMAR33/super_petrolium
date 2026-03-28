import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { CreditCard, Fuel, CheckCircle, MapPin, Clock, Shield, Droplets, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'High Speed Diesel & Fuel Cards - Super Petroleum Travel Center Georgia',
  description: 'High speed diesel and gasoline at competitive prices in Adel and Cordele, GA. We accept Comdata, Fleetone, EFS, TCH, T-Chek, and all major fleet fuel cards. DEF available 24/7.',
  path: '/fuel/',
});

const acceptedCards = [
  { name: 'Comdata', detail: 'Accepted at both locations' },
  { name: 'Fleetone', detail: 'Accepted at both locations' },
  { name: 'EFS', detail: 'Accepted at both locations' },
  { name: 'TCH', detail: 'Accepted at both locations' },
  { name: 'T-Chek', detail: 'Accepted at both locations' },
  { name: 'Voyager', detail: 'Accepted at both locations' },
];

const fuelFeatures = [
  {
    icon: Fuel,
    title: 'High Speed Diesel & Gasoline',
    description: 'We stock high speed diesel and regular unleaded gasoline from trusted suppliers. High-flow pump lanes mean you\'re in and out fast — no waiting behind a line of rigs. Our fuel is fresh, our pumps are calibrated regularly, and our prices stay competitive along the I-75 corridor.',
  },
  {
    icon: Droplets,
    title: 'DEF Available at All Pumps',
    description: 'Diesel Exhaust Fluid (DEF) is available at every location. No separate lane, no extra trip — grab it right at the pump while you fill your tanks.',
  },
  {
    icon: CreditCard,
    title: 'All Major Fuel Cards Accepted',
    description: 'We work with every major commercial fleet card program. Comdata, Fleetone, EFS, TCH, and more — swipe and go without any hassle.',
  },
  {
    icon: Clock,
    title: '24/7 Fueling — No Exceptions',
    description: 'Our pumps never close. Whether you\'re rolling through at 2 AM or midday on a holiday, fuel is always available. Pull in, fuel up, and get back on the road.',
  },
];

const whyChooseUs = [
  'High speed diesel at competitive prices on I-75',
  'High-flow diesel lanes for fast fueling',
  'DEF available at all pump islands',
  'All major fleet fuel cards accepted',
  'Clean, well-lit fuel bays 24/7',
  'On-site staff to assist when needed',
  'Reefer fuel available',
  'Scale and weigh stations nearby',
];

export default function FuelPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[540px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/gas_astation.jpg"
            alt="Diesel fuel and fuel card services at Super Petroleum Georgia"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Diesel Fuel — Adel & Cordele, Georgia</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            High Speed Diesel at <br /><span className="text-[#FFD10C]">Competitive Prices</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            High speed diesel, DEF, and gasoline at two Georgia travel centers. All major fleet fuel cards accepted — 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-[#FFD10C] text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">
              Find a Location
            </Link>
            <a href="tel:229-896-7453" className="border-2 border-[#FFD10C] text-[#FFD10C] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-colors shadow-lg">
              Call (229) 896-7453
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Always Open' },
              { value: '6+', label: 'Fuel Cards Accepted' },
              { value: '2', label: 'Georgia Locations' },
              { value: 'DEF', label: 'At Every Pump' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-[#FFD10C]">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuel Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Why Drivers Fuel With Us</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Diesel You Can Count On
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've been fueling Georgia's professional drivers since 1995. The same commitment to quality and competitive pricing — every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fuelFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#FFD10C] hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFD10C] rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accepted Fuel Cards */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Fleet Fuel Card Program</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Fuel Cards We <span className="text-[#FFD10C]">Accept</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We accept all major commercial fleet fuel cards at both Georgia locations. Seamless transactions — no delays, no workarounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {acceptedCards.map((card, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#FFD10C] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD10C]/20 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FFD10C]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#FFD10C]/30 transition-colors">
                    <CreditCard className="w-8 h-8 text-[#FFD10C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD10C] transition-colors">
                    {card.name}
                  </h3>
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Accepted</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-2">Don't see your card listed?</p>
            <p className="text-gray-400 mb-4">Call us before you arrive — we accept most commercial fleet cards and can confirm yours on the spot.</p>
            <a href="tel:229-896-7453" className="text-[#FFD10C] font-semibold hover:underline text-lg">(229) 896-7453</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[480px]">
              <ImageWithFallback
                src="/gas_astation2.jpg"
                alt="Super Petroleum fuel station Adel Georgia I-75"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Trusted Since 1995</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Georgia's Truck Drivers Know Where to Fuel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For over 30 years, professional drivers running I-75 have made Super Petroleum their go-to fuel stop. It's not just the price — it's the reliability. Our pumps are always running, our DEF is always stocked, and our lanes are wide enough to get in and out without losing time on your schedule.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We built this business around the working driver. That means no gimmicks, no price surprises, and no hassle with your fuel card. Pull in, fill up, and get back to work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD10C] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Two Locations on Your Route</h2>
            <p className="text-gray-600">Both locations offer diesel, DEF, gasoline, and full fleet card support — 24/7</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Adel Travel Center', address: '1503 West 4th St, Adel, GA 31620', phone: '(229) 896-7453', maps: 'https://www.google.com/maps/search/?api=1&query=1503+West+4th+St,+Adel,+GA+31620' },
              { name: 'Petro-Stopping Center', address: '393 Rock House Rd East, Cordele, GA 31015', phone: '(229) XXX-XXXX', maps: 'https://www.google.com/maps/search/?api=1&query=393+Rock+house+RD+East,+Cordele,+GA+31015' },
            ].map((loc, i) => (
              <div key={i} className="bg-white border border-gray-200 hover:border-[#FFD10C] p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFD10C] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                    <p className="text-gray-500 text-sm">{loc.address}</p>
                  </div>
                </div>
                <p className="text-sm text-[#FFD10C] font-semibold mb-4">Open 24/7 · Diesel · DEF · Fleet Cards</p>
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Star className="w-10 h-10 text-[#FFD10C] mx-auto mb-6 fill-current" />
          <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
            "Best fuel prices I've found on I-75 in Georgia. They take my Comdata without any issues and the pumps are always working. This is my regular stop every run through the state."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFD10C] flex items-center justify-center text-black font-bold">MS</div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Mike Stevens</p>
              <p className="text-sm text-gray-500">Owner Operator</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Fuel Up?</h2>
          <p className="text-gray-800 text-xl mb-8">
            Both locations are open 24/7 with diesel, DEF, and all major fleet cards. No surprises — just reliable fuel at a fair price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Find a Location
            </Link>
            <Link href="/truck-care/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Truck Care Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
