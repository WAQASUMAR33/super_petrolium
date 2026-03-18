import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { Coffee, Utensils, ShowerHead, Wifi, CheckCircle, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Food, Showers & Amenities - Super Petroleum Travel Center Georgia',
  description: 'Hot meals, KFC, Starbucks, Sbarro, clean showers, free WiFi, and restroom facilities at Super Petroleum travel centers in Adel and Cordele, GA. Everything a driver needs.',
  path: '/food-amenities/',
});

const amenities = [
  {
    icon: Utensils,
    title: 'Hot Meals & Restaurants',
    description: 'Sit down to a hot meal any time of day or night. We host KFC, Sbarro, and Curry & Grill so you always have real food waiting when you pull in.',
  },
  {
    icon: Coffee,
    title: 'Starbucks Coffee',
    description: 'Start your shift right with a Starbucks. Hot espresso, cold brew, and seasonal drinks — grab one on your way back to the cab.',
  },
  {
    icon: ShowerHead,
    title: 'Private Shower Facilities',
    description: 'Clean, private shower rooms available 24/7. Fresh towels, quality soap, and a private changing area — because a clean driver is a safer driver.',
  },
  {
    icon: Wifi,
    title: 'Free High-Speed WiFi',
    description: 'Strong WiFi throughout the facility — in the dining area, lounge, and parking lot. Enough to video call home, handle dispatch, or stream your favorite show.',
  },
];

const restaurants = [
  {
    image: '/kfc_image.jpg',
    name: 'KFC',
    description: "Classic fried chicken, sides, and value meals. Whether you want a quick bucket or a sit-down combo, the Colonel's got you covered.",
    tag: 'American Favorites',
  },
  {
    image: '/starbucks.jpg',
    name: 'Starbucks',
    description: "Brewed coffee, espresso drinks, frappuccinos, and pastries. The morning pick-me-up every long-haul driver knows by heart.",
    tag: 'Coffee & Beverages',
  },
  {
    image: '/sbaro.jpg',
    name: 'Sbarro',
    description: 'Real New York-style pizza by the slice. Big portions, fresh ingredients, and hot-from-the-oven every time — exactly what a long shift calls for.',
    tag: 'Pizza & Italian',
  },
  {
    image: '/curyy_and_grill.png',
    name: 'Curry & Grill',
    description: 'Authentic Indian and grilled dishes made with real spices and slow-cooked care. A flavorful change from the usual road food.',
    tag: 'Indian & Grilled',
  },
];

const showerHighlights = [
  'Private rooms with lockable doors',
  'Fresh towels provided every visit',
  'Quality shampoo, conditioner & soap',
  'Clean, inspected before every use',
  'Available 24 hours, 7 days a week',
  'No waiting list — walk right in',
];

export default function FoodAmenitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[520px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/kfc_image.jpg"
            alt="Hot food and dining at Super Petroleum travel center Georgia"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Food & Amenities — Georgia</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Real Food.<br /><span className="text-[#FFD10C]">Real Comfort.</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Hot meals, fresh coffee, clean showers, and free WiFi — everything you need to recharge before your next run.
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

      {/* Amenities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Everything Under One Roof</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Driver Amenities Built Around You
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We built our travel centers to give professional drivers a real break — not just a parking spot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#FFD10C] hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFD10C] rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{a.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Dining Options</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Great Food, Right at the Truck Stop
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four restaurant options under one roof means you'll never have to settle for vending machine food again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((r, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                <div className="w-full h-52 overflow-hidden bg-gray-200 relative">
                  <ImageWithFallback
                    src={r.image}
                    alt={`${r.name} at Super Petroleum travel center`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#FFD10C] text-black text-xs font-semibold px-3 py-1 rounded-full">{r.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{r.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showers Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Shower Facilities</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Clean Showers, <span className="text-[#FFD10C]">Always Ready</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                After hundreds of miles behind the wheel, a hot shower isn't a luxury — it's a necessity. Our shower rooms are private, spotlessly clean, and stocked with everything you need. No token system, no waiting in line. Walk in and freshen up.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {showerHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD10C] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[440px]">
              <ImageWithFallback
                src="/truck_parking.jpg"
                alt="Clean driver facilities at Super Petroleum Georgia travel center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Star className="w-10 h-10 text-[#FFD10C] mx-auto mb-6 fill-current" />
          <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
            "Great food, clean restrooms, and the shower facilities are spotless. This is how all travel centers should be run. I stop here every time I'm on I-75 through Georgia."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFD10C] flex items-center justify-center text-black font-bold">JD</div>
            <div className="text-left">
              <p className="font-bold text-gray-900">John Davis</p>
              <p className="text-sm text-gray-500">Professional Truck Driver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Us in Georgia</h2>
            <p className="text-gray-600">All amenities available at both locations, 24 hours a day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Adel Travel Center', address: '1503 West 4th St, Adel, GA 31620', phone: '(229) 896-7453' },
              { name: 'Petro-Stopping Center', address: '393 Rock House Rd East, Cordele, GA 31015', phone: '(229) XXX-XXXX' },
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
                <p className="text-sm text-[#FFD10C] font-semibold">Open 24/7 · Food & Showers Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready for a Real Break?</h2>
          <p className="text-gray-800 text-xl mb-8">Pull in at either location — hot food, coffee, showers, and free WiFi are waiting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Directions
            </Link>
            <Link href="/truck-parking/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Truck Parking Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
