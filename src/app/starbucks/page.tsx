import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { MapPin, Clock, Coffee, CheckCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Starbucks at Super Petroleum - Coffee & Drinks in Adel Georgia',
  description: 'Starbucks coffee at Super Petroleum travel center in Adel, GA. Hot espresso, cold brew, frappuccinos and more right on I-75. Perfect for truck drivers and travelers passing through South Georgia.',
  path: '/starbucks/',
});

const drinkHighlights = [
  { item: "Hot Brewed Coffee", desc: "Fresh-brewed Pike Place Roast and dark roast options to start your shift right, any time of day." },
  { item: "Espresso Drinks", desc: "Lattes, cappuccinos, americanos, and macchiatos made to order — the same quality you expect anywhere." },
  { item: "Cold Brew & Iced Coffee", desc: "Smooth cold brew steeped for hours, or classic iced coffee for hot Georgia days on the road." },
  { item: "Frappuccinos", desc: "Blended coffee and cream drinks — a reward after a long run, available in coffee and crème versions." },
  { item: "Teas & Refreshers", desc: "Green tea, black tea, herbal tea, and fruit-forward refreshers for when you want something other than coffee." },
  { item: "Hot Chocolate & Steamers", desc: "Non-coffee warm drinks for colder months or passengers who prefer something other than espresso." },
  { item: "Pastries & Food", desc: "Croissants, muffins, protein boxes, sandwiches, and bakery items to go with your drink." },
  { item: "Seasonal Specials", desc: "Starbucks rotates seasonal drinks throughout the year — ask in-store for what's currently available." },
];

export default function StarbucksPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/starbucks.jpg"
            alt="Starbucks coffee at Super Petroleum travel center Adel Georgia I-75"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Coffee — Super Petroleum Travel Center</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Starbucks at <span className="text-[#FFD10C]">Super Petroleum</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Your favorite coffee right inside our Adel, GA travel center. Hot espresso, cold brew, and everything in between — without leaving the truck stop.
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

      {/* Quick Info Bar */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 'Adel, GA', label: 'Location' },
              { value: 'Daily', label: 'Open Every Day' },
              { value: 'Hot & Cold', label: 'Drink Options' },
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
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Starbucks at Adel Truck Stop</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Coffee on a Real Haul
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every driver knows the difference between decent coffee and the stuff that comes out of a machine at a rest stop. Starbucks inside our Adel, GA travel center gives you barista-made espresso drinks, fresh-brewed coffee, and cold brew — the same quality you'd expect from any Starbucks location, right where you're already stopping.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Whether you're starting a shift at 4 AM and need something hot and strong, or you're halfway through a run on a 90-degree Georgia afternoon and a cold brew sounds right, we have what you need. Park once, fuel your truck, then fuel yourself.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Driver alertness is a real safety issue on long hauls. A proper coffee break — sitting down for 15 minutes with a real drink — is one of the simplest things you can do to stay sharp on I-75. We've made it easy by putting Starbucks right inside the travel center.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[460px]">
              <ImageWithFallback
                src="/starbucks.jpg"
                alt="Starbucks coffee drinks at truck stop travel center Georgia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drink Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Menu Options</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Starbucks Drinks & Food</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinkHighlights.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#FFD10C] p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <Coffee className="w-6 h-6 text-[#FFD10C] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.item}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Find Starbucks at <span className="text-[#FFD10C]">Super Petroleum</span></h2>
            <p className="text-gray-400">Inside our Adel Truck Stop — right off I-75</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Starbucks at Super Petroleum — Questions</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is there a Starbucks at the Super Petroleum truck stop in Adel, GA?", a: "Yes. Starbucks operates inside our Adel, GA travel center at 1503 West 4th St. Park your truck and walk straight in — no driving to a separate location." },
              { q: "What Starbucks drinks are available at this location?", a: "Our Starbucks location offers the standard menu including hot coffee, espresso drinks, cold brew, frappuccinos, teas, refreshers, and seasonal specials, along with food items like pastries and sandwiches." },
              { q: "Is this a licensed Starbucks or a full location?", a: "This is a licensed Starbucks location inside the Super Petroleum travel center, operated under Starbucks standards. You can expect the same drink quality and menu you'd find at any Starbucks." },
              { q: "Can I use my Starbucks Rewards here?", a: "Policies on rewards programs at licensed locations vary — check with the in-store team or the Starbucks app for current details on rewards eligibility at this location." },
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
          <p className="text-gray-600 mb-8">Starbucks is one of four dining options inside our travel center</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "KFC", desc: "Fried chicken & hot meals", href: "/kfc/" },
              { name: "Sbarro", desc: "New York-style pizza", href: "/sbarro/" },
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

      {/* CTA */}
      <section className="py-14 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-3">Need Your Coffee Fix?</h2>
          <p className="text-gray-800 text-lg mb-6">Pull into Super Petroleum in Adel, GA — Starbucks is right inside.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Get Directions</Link>
            <Link href="/food-amenities/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">All Food & Amenities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
