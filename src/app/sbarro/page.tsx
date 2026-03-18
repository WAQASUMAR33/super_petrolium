import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { MapPin, Clock, CheckCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sbarro Pizza at Super Petroleum - Adel Georgia Travel Center I-75',
  description: 'Sbarro New York-style pizza at Super Petroleum travel center in Adel, GA. Fresh pizza by the slice, pasta, and Italian food right on I-75. Hot meals for truck drivers and travelers.',
  path: '/sbarro/',
});

const menuItems = [
  { item: "New York-Style Pizza by the Slice", desc: "Big, foldable slices with crispy crust and generous toppings — the real deal, not frozen pizza reheated." },
  { item: "Whole Pizzas", desc: "Cheese, pepperoni, meat lovers, veggie, and specialty pizzas available whole for groups or big appetites." },
  { item: "Stromboli & Stuffed Pizza", desc: "Cheese and toppings folded inside thick dough and baked — a hearty option when you need something filling." },
  { item: "Pasta Dishes", desc: "Baked ziti, penne alla vodka, and other Italian pasta dishes made fresh and served hot." },
  { item: "Calzones", desc: "Folded pizza dough stuffed with ricotta, mozzarella, and your choice of fillings. A full meal in one piece." },
  { item: "Salads", desc: "Fresh salads for a lighter option when you want something balanced before getting back behind the wheel." },
  { item: "Garlic Bread & Sides", desc: "Classic Italian sides to go along with your pizza or pasta — perfect for rounding out a full meal." },
  { item: "Fountain Drinks", desc: "Full beverage selection to go with your meal — sodas, juice, water, and more." },
];

export default function SbarroPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/sbaro.jpg"
            alt="Sbarro New York style pizza at Super Petroleum travel center Adel Georgia"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Pizza & Italian — Super Petroleum Travel Center</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sbarro at <span className="text-[#FFD10C]">Super Petroleum</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Authentic New York-style pizza by the slice, pasta, and Italian favorites — hot and fresh inside our Adel, GA travel center on I-75.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-[#FFD10C] text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">
              Get Directions
            </Link>
            <a href="tel:229-896-7453" className="border-2 border-[#FFD10C] text-[#FFD10C] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-colors shadow-lg">
              Call (229) 896-7453
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 'Adel, GA', label: 'Location' },
              { value: 'Daily', label: 'Open Every Day' },
              { value: 'NY Style', label: 'Pizza by the Slice' },
              { value: 'I-75', label: 'Easy Access' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-[#FFD10C]">{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Sbarro at Adel Travel Center</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                New York Pizza Without the Detour
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sbarro has been serving authentic New York-style pizza since 1956. The same oversized, foldable slices with real mozzarella, fresh sauce, and properly made dough — available right inside our Super Petroleum travel center in Adel, Georgia. No fast food shortcuts, no reheated freezer pizza.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                For drivers on I-75 who want a real meal — something with actual substance — a couple of Sbarro slices hit differently than a bag of snacks from a shelf. Hot pasta, fresh-baked stromboli, and a proper calzone are also on the menu for when you've got time to sit down and eat right.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Park your rig in our free lot, walk in, grab a slice or a full meal, and get back on the road. Sbarro is one of four restaurant options inside the travel center — all under one roof.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[460px]">
              <ImageWithFallback
                src="/sbaro.jpg"
                alt="Sbarro pizza at truck stop Georgia travel center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What We Serve</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sbarro Menu Highlights</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#FFD10C] p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <CheckCircle className="w-6 h-6 text-[#FFD10C] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.item}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Find Sbarro at <span className="text-[#FFD10C]">Super Petroleum</span></h2>
            <p className="text-gray-400">Inside our Adel Travel Center — right off I-75</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "1503 West 4th St, Adel, GA 31620" },
              { icon: Clock, label: "Hours", value: "Open Daily — Check in-store for current hours" },
              { icon: CheckCircle, label: "Parking", value: "Free truck parking — pull-through spaces available" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/5 border border-gray-800 hover:border-[#FFD10C] p-6 rounded-xl text-center transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#FFD10C] mx-auto mb-3" />
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sbarro at Super Petroleum — Questions</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is there a Sbarro at the Super Petroleum in Adel, Georgia?", a: "Yes. Sbarro operates inside our Adel, GA travel center at 1503 West 4th St, right off I-75. Park your truck in our free lot and walk straight in." },
              { q: "What kind of pizza does Sbarro serve here?", a: "Sbarro serves authentic New York-style pizza by the slice and whole pies. Classic cheese, pepperoni, meat lovers, veggie, and specialty options are typically available, along with stuffed pizza, stromboli, and calzones." },
              { q: "Can truck drivers eat at Sbarro at this location?", a: "Absolutely. Our travel center is designed for professional drivers. Pull into one of our pull-through spaces, park for free, and Sbarro is steps away inside." },
              { q: "Do they serve food other than pizza?", a: "Yes. Sbarro's menu includes pasta dishes, calzones, stromboli, salads, garlic bread, and sides — a full Italian-style menu, not just pizza." },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4 text-sm">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#FFD10C] flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Dining */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">More Dining at Super Petroleum</h2>
          <p className="text-gray-600 mb-8">Sbarro is one of four dining options inside our travel center</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "KFC", desc: "Fried chicken & hot meals", href: "/kfc/" },
              { name: "Starbucks", desc: "Coffee & beverages", href: "/starbucks/" },
              { name: "Curry & Grill", desc: "Indian & grilled specialties", href: "/curry-grill/" },
            ].map((r, i) => (
              <Link key={i} href={r.href} className="group bg-white border border-gray-200 hover:border-[#FFD10C] p-6 rounded-xl transition-all duration-300 hover:shadow-md text-center">
                <p className="font-bold text-gray-900 group-hover:text-[#FFD10C] transition-colors mb-1">{r.name}</p>
                <p className="text-gray-500 text-sm">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-3">Craving Pizza?</h2>
          <p className="text-gray-800 text-lg mb-6">Pull into Super Petroleum in Adel, GA — Sbarro is right inside.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Get Directions</Link>
            <Link href="/food-amenities/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">All Food & Amenities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
