import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { MapPin, Clock, CheckCircle, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'KFC at Super Petroleum - Adel & Cordele Georgia Travel Center',
  description: 'KFC restaurant at Super Petroleum travel center in Adel and Cordele, GA. Hot fried chicken, sides, and meals available at our I-75 truck stop. Open daily for dine-in and carry-out.',
  path: '/kfc/',
});

const menuHighlights = [
  { item: "Original Recipe Chicken", desc: "The classic Colonel's 11 herbs and spices recipe — crispy on the outside, juicy on the inside." },
  { item: "Extra Crispy Chicken", desc: "Double-breaded for maximum crunch. A favorite for drivers who want something satisfying after a long haul." },
  { item: "Chicken Tenders & Strips", desc: "All white meat strips, perfect for eating on the go or at the table." },
  { item: "Famous Bowls", desc: "Mashed potatoes, corn, gravy, and chicken all in one — a full meal in a single bowl." },
  { item: "Family Buckets", desc: "Feeding a crew? Our bucket meals give you the most chicken for your money." },
  { item: "Sides & Combos", desc: "Mac & cheese, coleslaw, biscuits, mashed potatoes — classic comfort sides with every meal." },
  { item: "Breakfast Options", desc: "Starting early? We offer morning items to get you fueled before you hit the road." },
  { item: "Value Meals", desc: "Full meals at prices that make sense when you're watching your per diem on a long run." },
];

export default function KFCPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/kfc_image.jpg"
            alt="KFC restaurant at Super Petroleum travel center Adel Georgia I-75"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Dining — Super Petroleum Travel Center</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            KFC at <span className="text-[#FFD10C]">Super Petroleum</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Hot fried chicken, fresh sides, and satisfying meals right inside our Adel, GA travel center — no detour, no extra miles.
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
              { value: 'Dine-In', label: '& Carry-Out' },
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

      {/* About KFC Here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">KFC at Adel Travel Center</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Real Meal Without Leaving the Truck Stop
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                When you're running freight on I-75 through South Georgia, stopping for a proper meal usually means losing time — finding parking, navigating into town, then fighting your way back to the interstate. Our KFC is built right into the Super Petroleum travel center in Adel, GA so you can park your rig once and walk straight to a hot meal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                KFC's menu gives you options whether you've got 15 minutes or an hour. Grab a quick box of tenders on your way back to the cab, or sit down for a full bucket meal when you're taking your 30-minute break. The same Original Recipe that's been around since 1952 — hot, fresh, and available right on your route.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Professional drivers know that eating well on the road keeps you sharper and more alert. A proper hot meal at KFC beats a bag of chips from a vending machine every time — and it doesn't require you to go out of your way to get it.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[460px]">
              <ImageWithFallback
                src="/kfc_image.jpg"
                alt="KFC fried chicken meal at truck stop travel center Georgia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What We Serve</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">KFC Menu Highlights</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#FFD10C] p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <CheckCircle className="w-6 h-6 text-[#FFD10C] mb-3" />
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
            <h2 className="text-3xl font-bold mb-2">Find KFC at <span className="text-[#FFD10C]">Super Petroleum</span></h2>
            <p className="text-gray-400">Located inside our Adel Travel Center — right off I-75</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "1503 West 4th St, Adel, GA 31620" },
              { icon: Clock, label: "Hours", value: "Open Daily — Check in-store for current hours" },
              { icon: Star, label: "Parking", value: "Free truck parking on-site — pull-through spaces" },
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">KFC at Super Petroleum — Questions</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is there a KFC inside the Super Petroleum travel center?", a: "Yes. KFC operates inside our Adel, GA travel center at 1503 West 4th St. You can park your truck in our lot and walk directly to KFC without leaving the property." },
              { q: "Can truck drivers eat at KFC here?", a: "Absolutely. Our travel center is designed for professional drivers. Pull into one of our pull-through parking spaces and KFC is steps away. Dine-in and carry-out available." },
              { q: "What are the KFC hours at this location?", a: "KFC operates daily inside our travel center. Hours may vary — call us at (229) 896-7453 or check in-store for the current schedule." },
              { q: "Is parking free when eating at KFC?", a: "Yes. Parking at our Adel travel center is completely free with no time limits. Park, eat, fuel up, and get back on the road at your own pace." },
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

      {/* Other Dining Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">More Dining at Super Petroleum</h2>
          <p className="text-gray-600 mb-8">KFC is just one of four restaurant options inside our travel center</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Starbucks", desc: "Premium coffee & beverages", href: "/starbucks/" },
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
          <h2 className="text-3xl font-bold text-black mb-3">Ready to Eat?</h2>
          <p className="text-gray-800 text-lg mb-6">Pull into Super Petroleum in Adel, GA — KFC is right inside.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Get Directions</Link>
            <Link href="/food-amenities/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">All Food & Amenities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
