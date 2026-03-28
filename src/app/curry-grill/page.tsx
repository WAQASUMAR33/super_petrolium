import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { MapPin, Clock, CheckCircle, ChevronDown, Flame } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Curry & Grill at Super Petroleum - Indian Food Adel Georgia Travel Center',
  description: 'Curry & Grill restaurant at Super Petroleum travel center in Adel, GA. Authentic Indian food, spicy curries, grilled meats, and rice dishes right on I-75 in South Georgia.',
  path: '/curry-grill/',
});

const menuItems = [
  { item: "Butter Chicken", desc: "Tender chicken in a rich, mildly spiced tomato cream sauce — one of the most popular Indian dishes and a great starting point for first-timers." },
  { item: "Lamb Curry", desc: "Slow-cooked lamb in aromatic spices with a deep, complex sauce. A hearty option for drivers who want something substantial." },
  { item: "Chicken Tikka Masala", desc: "Grilled chicken pieces in a smoky, spiced masala sauce. One of the most recognized Indian dishes in the world — for good reason." },
  { item: "Grilled Meats", desc: "Tandoor-style grilled chicken, lamb, and vegetable skewers with char flavor and fresh spice marinades." },
  { item: "Biryani", desc: "Fragrant basmati rice slow-cooked with spiced meat or vegetables — a complete one-dish meal that's filling and flavorful." },
  { item: "Vegetarian Dishes", desc: "Dal, chana masala, paneer dishes, and vegetable curries for drivers who want a meat-free, high-protein meal." },
  { item: "Naan & Roti", desc: "Freshly made Indian flatbreads baked in a tandoor oven — the right way to scoop up curry and sauces." },
  { item: "Rice Dishes", desc: "Steamed basmati, jeera rice, and flavored rice options to accompany curries and grilled items." },
];

export default function CurryGrillPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/curyy_and_grill.png"
            alt="Curry and Grill Indian restaurant at Super Petroleum travel center Adel Georgia"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Indian & Grilled — Super Petroleum Travel Center</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Curry & Grill at <span className="text-[#FFD10C]">Super Petroleum</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Authentic Indian curries, tandoor-grilled meats, fresh naan, and aromatic rice dishes — right inside our Adel, GA travel center on I-75.
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
              { value: 'Indian', label: 'Authentic Cuisine' },
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
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Curry & Grill at Adel Truck Stop</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Indian Food on the Road — No Compromise
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Finding authentic Indian food on a long-haul route through South Georgia isn't easy. Most truck stops offer the same rotation of burgers and fried chicken. Curry & Grill at our Super Petroleum travel center in Adel, GA is a genuinely different option — real curries, grilled meats marinated in proper spice blends, and rice dishes made with care, not shortcuts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Whether you're a driver who grew up eating this food or someone looking to try something different after too many miles of the same menu, Curry & Grill gives you a full Indian dining experience inside a travel center. Butter chicken, biryani, tikka masala, fresh naan — made to order and served hot.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It's one of four restaurant options inside our Adel travel center. Park your truck in our free lot, walk in, and sit down for a meal that actually tastes different from the last ten truck stops you hit.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[460px]">
              <ImageWithFallback
                src="/curyy_and_grill.png"
                alt="Authentic Indian curry and grilled food at Georgia truck stop"
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
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Menu Highlights</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curry & Grill — What We Serve</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 hover:border-[#FFD10C] p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <Flame className="w-6 h-6 text-[#FFD10C] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.item}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it stands out */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Drivers Choose <span className="text-[#FFD10C]">Curry & Grill</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Something Different", body: "After days of fast food on the road, real Indian food is a genuine change. Spices, flavors, and textures you don't find at any other truck stop on I-75." },
              { title: "Filling and Satisfying", body: "Biryani, curry with naan, grilled protein over rice — these are proper meals that keep you full for hours. Not a snack, not a side — a full dinner." },
              { title: "Made Fresh, Not Microwaved", body: "Curry & Grill prepares food to order using real spice blends and fresh ingredients. The difference between that and pre-packaged food is immediately noticeable." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-gray-800 hover:border-[#FFD10C] p-7 rounded-2xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#FFD10C] mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Curry & Grill at <span className="text-[#FFD10C]">Super Petroleum</span></h2>
            <p className="text-gray-600">Inside our Adel Truck Stop — right off I-75</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "1503 West 4th St, Adel, GA 31620" },
              { icon: Clock, label: "Hours", value: "Open Daily — Check in-store for current hours" },
              { icon: CheckCircle, label: "Parking", value: "Free truck parking — pull-through spaces available" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-gray-50 border border-gray-200 hover:border-[#FFD10C] p-6 rounded-xl text-center transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#FFD10C] mx-auto mb-3" />
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-gray-900 text-sm font-medium">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Curry & Grill — Questions</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is there an Indian restaurant at the Super Petroleum truck stop in Adel, GA?", a: "Yes. Curry & Grill is an Indian and grilled food restaurant located inside our Adel, GA travel center at 1503 West 4th St. It's one of four dining options available inside our facility." },
              { q: "What kind of food does Curry & Grill serve?", a: "Curry & Grill serves authentic Indian cuisine including butter chicken, lamb curry, chicken tikka masala, biryani, tandoor-grilled meats, fresh naan, and vegetarian dishes like dal and paneer." },
              { q: "Is the food spicy?", a: "Indian cuisine ranges from mild to very spicy. Most dishes can be prepared to your heat preference — just let the staff know when you order. Butter chicken and biryani are generally milder; vindaloo-style dishes are hotter." },
              { q: "Is this a good option for vegetarians?", a: "Yes. Curry & Grill offers a solid vegetarian selection including dal, chana masala, paneer curry, vegetable biryani, and vegetable sides. It's one of the better vegetarian options at any truck stop on I-75." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">More Dining at Super Petroleum</h2>
          <p className="text-gray-600 mb-8">Curry & Grill is one of four dining options inside our travel center</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "KFC", desc: "Fried chicken & hot meals", href: "/kfc/" },
              { name: "Starbucks", desc: "Coffee & beverages", href: "/starbucks/" },
              { name: "Sbarro", desc: "New York-style pizza", href: "/sbarro/" },
            ].map((r, i) => (
              <Link key={i} href={r.href} className="group bg-gray-50 border border-gray-200 hover:border-[#FFD10C] p-6 rounded-xl transition-all duration-300 hover:shadow-md text-center">
                <p className="font-bold text-gray-900 group-hover:text-[#FFD10C] transition-colors mb-1">{r.name}</p>
                <p className="text-gray-500 text-sm">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-3">Ready for Something Different?</h2>
          <p className="text-gray-800 text-lg mb-6">Pull into Super Petroleum in Adel, GA — Curry & Grill is right inside.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Get Directions</Link>
            <Link href="/food-amenities/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">All Food & Amenities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
