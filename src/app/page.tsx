import { Fuel, Truck, Coffee, Wrench, CreditCard, MapPin, Clock, Shield, Star, Quote, ChevronDown, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from './images/ImageWithFallBack';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Truck Shop Background Image */}
      <section 
        className="relative text-white py-20 md:py-32 min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/truckshop.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Subtle Grey Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/45"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Drivers Deserve <span className="text-[#FFD10C]">Professional Service</span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 md:mb-12 leading-relaxed pb-10">
              Quality fuel, food, and facilities at our Georgia travel centers. Your trusted partner on the road since 1995.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/locations" 
                className="bg-[#FFD10C] text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center shadow-lg"
              >
                Find a Location
              </Link>
              <Link 
                href="/fuel/" 
                className="border-2 border-[#FFD10C] text-[#FFD10C] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-colors text-center shadow-lg"
              >
                Fuel Card Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#FFD10C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '30+', label: 'Years Serving Drivers' },
              { value: '2', label: 'I-75 Georgia Locations' },
              { value: '24/7', label: 'Always Open' },
              { value: '6+', label: 'Fuel Cards Accepted' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-black">{s.value}</p>
                <p className="text-gray-800 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Locations
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find us along your route</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Location 1 */}
            <div className="group bg-white p-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-2 overflow-hidden">
              <div className="w-full h-64 overflow-hidden bg-gray-200 relative">
                <ImageWithFallback
                  src="/gas_astation2.jpg"
                  alt="Adel Location"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#FFD10C] p-2 rounded-lg inline-block">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#FFD10C] transition-colors duration-300">Adel Travel Center</h3>
                <p className="text-gray-600 mb-4 text-sm italic">Full-service travel center with dining and fuel services</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <span className="block font-medium">1503 West 4th St</span>
                  <span className="block">Adel, GA 31620</span>
                </p>
                <div className="mb-2">
                  <span className="text-gray-600 text-sm">Phone:</span>
                  <a 
                    href="tel:229-896-7453" 
                    className="text-[#FFD10C] font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2 ml-2"
                  >
                    <span>(229) 896-7453</span>
                  </a>
                </div>
                <div className="mb-4">
                  <span className="text-gray-600 text-sm">Hours: </span>
                  <span className="text-[#FFD10C] font-semibold">Open 24/7</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=1503+West+4th+St,+Adel,+GA+31620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Location 2 - Petro-Stopping Center */}
            <div className="group bg-white p-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-2 overflow-hidden">
              <div className="w-full h-64 overflow-hidden bg-gray-200 relative">
                <ImageWithFallback
                  src="/gas_astation2.jpg"
                  alt="Petro-Stopping Center"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#FFD10C] p-2 rounded-lg inline-block">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#FFD10C] transition-colors duration-300">Petro-Cordele</h3>
                <p className="text-gray-600 mb-4 text-sm italic">Complete truck stop with all essential services</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <span className="block font-medium">373 RockHouse Rd. East</span>
                  <span className="block">Cordele, GA 31015</span>
                </p>
                <div className="mb-2">
                  <span className="text-gray-600 text-sm">Phone:</span>
                  <a 
                    href="tel:229-XXX-XXXX" 
                    className="text-[#FFD10C] font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2 ml-2"
                  >
                    <span>(229) XXX-XXXX</span>
                  </a>
                </div>
                <div className="mb-4">
                  <span className="text-gray-600 text-sm">Hours: </span>
                  <span className="text-[#FFD10C] font-semibold">Open 24/7</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=373+RockHouse+Rd+East,+Cordele,+GA+31015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to keep moving</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            {/* Service 1 — Quality Fuel */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3 relative flex flex-col">
              <div className="w-full h-48 overflow-hidden bg-gray-200 relative flex-shrink-0">
                <ImageWithFallback
                  src="/gas_astation.jpg"
                  alt="Diesel fuel and gasoline at Super Petroleum Georgia travel center"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-[#FFD10C] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Fuel className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">Quality Fuel</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  Premium <strong>#2 diesel</strong> and unleaded gasoline at competitive prices along I-75 Georgia. DEF available at every pump island — no extra stops needed.
                </p>
                <ul className="space-y-1.5 mb-4">
                  {['Comdata · Fleetone · EFS · TCH', 'DEF at Every Pump', 'Reefer Fuel Available', 'Open 24/7 — No Exceptions'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD10C] flex-shrink-0 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <Link href="/fuel/" className="text-[#FFD10C] font-semibold text-sm inline-flex items-center gap-1 hover:text-yellow-500 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 — Truck Parking */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3 relative flex flex-col">
              <div className="w-full h-48 overflow-hidden bg-gray-200 relative flex-shrink-0">
                <ImageWithFallback
                  src="/truck_parking.jpg"
                  alt="Safe overnight truck parking near I-75 Georgia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-[#FFD10C] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">Truck Parking</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  Safe <strong>overnight truck parking</strong> in Adel and Cordele, GA. Wide paved lots with pull-through spaces for 18-wheelers, tankers, and flatbeds — monitored around the clock.
                </p>
                <ul className="space-y-1.5 mb-4">
                  {['24/7 Camera Surveillance', 'Pull-Through Spaces', 'Free — No Reservation Needed', 'Well-Lit Lots All Night'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD10C] flex-shrink-0 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <Link href="/truck-parking/" className="text-[#FFD10C] font-semibold text-sm inline-flex items-center gap-1 hover:text-yellow-500 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 — Food & Amenities */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3 relative flex flex-col">
              <div className="w-full h-48 overflow-hidden bg-gray-200 relative flex-shrink-0">
                <ImageWithFallback
                  src="/kfc_image.jpg"
                  alt="Hot food dining and shower facilities at Georgia truck stop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-[#FFD10C] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Coffee className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">Food & Amenities</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  <strong>KFC, Starbucks, Sbarro, and Curry & Grill</strong> on-site. Plus private showers, clean restrooms, and free WiFi — everything a driver needs without leaving the property.
                </p>
                <ul className="space-y-1.5 mb-4">
                  {['4 Restaurant Options On-Site', 'Private Showers 24/7', 'Free High-Speed WiFi', 'Clean Restrooms · Fresh Towels'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD10C] flex-shrink-0 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <Link href="/food-amenities/" className="text-[#FFD10C] font-semibold text-sm inline-flex items-center gap-1 hover:text-yellow-500 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 — Truck Care Shop */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3 relative flex flex-col">
              <div className="w-full h-48 overflow-hidden bg-gray-200 relative flex-shrink-0">
                <ImageWithFallback
                  src="/truck_care.jpg"
                  alt="Truck repair maintenance and DOT inspection Adel Georgia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-[#FFD10C] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">Truck Care Shop</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  <strong>ASE-certified technicians</strong> handling oil changes, tire service, brake repair, DOT inspections, and 24/7 emergency roadside assistance for all commercial truck brands.
                </p>
                <ul className="space-y-1.5 mb-4">
                  {['Oil Changes & Lube Service', 'Tire Repair & Replacement', 'DOT Safety Inspections', '24/7 Emergency Roadside'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD10C] flex-shrink-0 mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <Link href="/truck-care/" className="text-[#FFD10C] font-semibold text-sm inline-flex items-center gap-1 hover:text-yellow-500 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-[#FFD10C]">Super Petroleum</span></h2>
            <p className="text-xl text-gray-400">Trusted by professional drivers across the nation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#FFD10C] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-400">Always open when you need us</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFD10C] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Fuel Cards</h3>
              <p className="text-gray-400">We accept all major fuel card programs</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFD10C] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-400">Conveniently located on major routes</p>
            </div>

            <div className="text-center">
              <div className="bg-[#FFD10C] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">30+ Years</h3>
              <p className="text-gray-400">Trusted service since 1995</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / I-75 Long-Form SEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Truck Stop on I-75 Georgia</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Travel Center I-75 Drivers Actually Count On
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Running freight on I-75 through South Georgia means you pass through a lot of truck stops. Most of them offer the same thing — overpriced diesel, a fast food counter, and a parking lot you're not sure about leaving your rig in overnight. Super Petroleum was built to be something different. Two locations — one in Adel, one in Cordele — positioned right on your route so you're not adding miles to get to us.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We've been at this since 1995. That's three decades of fueling trucks, fixing rigs roadside at 2 AM, serving hot meals to drivers who haven't eaten since morning, and keeping our lots clean and well-lit. The drivers who stop here the first time tend to make it a regular stop — not because we ask them to, but because the experience is consistent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a company driver on a tight schedule, an owner-operator managing every expense, or a family traveler needing a real meal and a clean restroom — we're set up for all of it. Diesel, DEF, parking, food, showers, and a full-service truck care shop. One stop, no detour.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: "Competitive Diesel Prices", body: "Real-time competitive pricing on #2 diesel and premium fuel — with fleet card discounts that make a real difference on a long run." },
                { icon: Shield, title: "Safe, Monitored Lots", body: "24/7 camera coverage across both locations. Well-lit pull-through spaces big enough for doubles and oversized loads." },
                { icon: Wrench, title: "On-Site Truck Repair", body: "ASE-certified shop handles oil changes, tire blowouts, brake work, and DOT inspections. If you break down near us, we've got you." },
                { icon: Coffee, title: "Real Food, Not Vending Machines", body: "KFC, Starbucks, Sbarro, and Curry & Grill inside. Hot food made to order — not something sitting under a heat lamp since noon." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-gray-50 border border-gray-200 hover:border-[#FFD10C] p-5 rounded-xl transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#FFD10C] mb-3" />
                    <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* I-75 Corridor Info */}
          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Strategically Located on <span className="text-[#FFD10C]">I-75 in South Georgia</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Two travel centers covering the stretch of I-75 between Valdosta and Macon — the backbone of Southeast freight traffic.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Adel, GA — Exit 39", body: "Right off I-75 at Exit 39. Our largest location with all four restaurants, a full truck care shop, driver showers, and wide paved lots for all rig types. Adel sits between Valdosta and Tifton — a natural stopping point for northbound and southbound freight." },
                { title: "Cordele, GA — US-280 Junction", body: "Located at the I-75/US-280 interchange in Cordele. A key stop for drivers heading toward the Georgia coast, Florida, or cutting across to Alabama. Full fuel service, parking, and amenities available." },
                { title: "Who Uses Our Stops", body: "Long-haul OTR drivers. Regional carriers running the I-75 corridor. Owner-operators running their own loads. Family travelers on road trips. Reefer haulers, flatbeds, tankers — we see every rig type through our gates." },
              ].map((item, i) => (
                <div key={i} className="border border-gray-700 hover:border-[#FFD10C] p-6 rounded-xl transition-all duration-300">
                  <h3 className="font-bold text-[#FFD10C] text-base mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food & Beverages Services Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Food & Beverages Services
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Satisfy your cravings with our premium dining options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* KFC */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3">
              <div className="w-full h-56 overflow-hidden bg-gray-200 relative">
                <ImageWithFallback
                  src="/kfc_image.jpg"
                  alt="KFC"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">KFC</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">Enjoy crispy, flavorful fried chicken and delicious sides. KFC brings you the classic Colonel's recipe for a satisfying meal on the go.</p>
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/kfc/" className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:text-gray-700 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* STARBUCKS */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3">
              <div className="w-full h-56 overflow-hidden bg-gray-200 relative">
                <ImageWithFallback
                  src="/starbucks.jpg"
                  alt="Starbucks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">STARBUCKS</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">Premium coffee, espresso drinks, and handcrafted beverages. Perfect for your morning start or afternoon pick-me-up.</p>
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/starbucks/" className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:text-gray-700 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SBARRO */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3">
              <div className="w-full h-56 overflow-hidden bg-gray-200 relative">
                <ImageWithFallback
                  src="/sbaro.jpg"
                  alt="Sbarro"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">SBARRO</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">Authentic New York-style pizza by the slice. Fresh ingredients, classic Italian flavors, and hearty portions for a satisfying meal.</p>
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/sbarro/" className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:text-gray-700 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* CURRY & GRILL */}
            <div className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3">
              <div className="w-full h-56 overflow-hidden bg-gray-200 relative">
                <ImageWithFallback
                  src="/curyy_and_grill.png"
                  alt="Curry & Grill"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">CURRY & GRILL</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">Flavorful Indian and grilled specialties. Spicy curries, tender grilled meats, and aromatic rice dishes for an authentic taste experience.</p>
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/curry-grill/" className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:text-gray-700 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by professional drivers across the nation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-1 mb-4 text-[#FFD10C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#FFD10C] mb-4 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Best travel center I've been to in Georgia. Clean facilities, great fuel prices, and the staff is always friendly. This is my regular stop on I-75."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD10C] flex items-center justify-center text-black font-bold text-lg">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Davis</h4>
                  <p className="text-sm text-gray-500">Professional Truck Driver</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-1 mb-4 text-[#FFD10C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#FFD10C] mb-4 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Super Petroleum has been my go-to stop for over 10 years. Reliable fuel, safe parking, and the truck care shop has saved me multiple times. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD10C] flex items-center justify-center text-black font-bold text-lg">
                  MS
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mike Stevens</h4>
                  <p className="text-sm text-gray-500">Owner Operator</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-1 mb-4 text-[#FFD10C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#FFD10C] mb-4 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Great food, clean restrooms, and they accept all my fuel cards. The parking lot is well-lit and I always feel safe here. This is how all travel centers should be!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD10C] flex items-center justify-center text-black font-bold text-lg">
                  RW
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Robert Wilson</h4>
                  <p className="text-sm text-gray-500">Fleet Driver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Driver-First Facilities</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need, Nothing You Don't</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't try to be everything to everyone. We focus on what drivers actually need — and we do those things well.</p>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Diesel & DEF at Every Island", body: "No hunting for a DEF pump on the far end of the lot. Diesel exhaust fluid is available at every pump island at our Adel location. Fill your truck and top off DEF in one stop." },
              { title: "Fuel Cards — All Major Programs", body: "Comdata, Fleetone, EFS, TCH, T-Chek, and Voyager are all accepted. If your company runs on a fuel card program, we're in network. No cash-only surprises." },
              { title: "Private Showers, Not an Afterthought", body: "Clean private shower rooms with fresh towels. Not a gym locker room situation — actual private rooms that get cleaned between every use. Available 24 hours." },
              { title: "Truck Shop That's Actually Open", body: "Our truck care shop handles walk-ins and emergency breakdowns. Oil changes, tires, brakes, and roadside calls. DOT inspections available for drivers who need to stay compliant." },
              { title: "Free Parking, No Time Limit", body: "Park your rig and stay as long as your HOS requires. No ticket, no tow, no hassle. We know a 10-hour break isn't negotiable — we've made the lot accordingly." },
              { title: "Free WiFi That Actually Works", body: "High-speed WiFi throughout the facility. Check your load board, do your ELD logs, call dispatch, stream something in your cab. The connection holds up." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 border border-gray-200 hover:border-[#FFD10C] rounded-xl transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Common Questions from Drivers</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="space-y-3">
            {[
              { q: "Where is Super Petroleum located on I-75 in Georgia?", a: "We have two locations on I-75 in South Georgia. The Adel Travel Center is at 1503 West 4th St, Adel, GA 31620 — right off Exit 39. The Cordele location is at 373 RockHouse Rd. East, Cordele, GA 31015 near the US-280 junction. Both are open 24 hours, 7 days a week." },
              { q: "What fuel cards do you accept?", a: "We accept all major commercial fuel cards including Comdata, Fleetone, EFS, TCH, T-Chek, and Voyager. If your fleet runs on a standard fuel card program, you're covered at both of our locations." },
              { q: "Is there free truck parking at Super Petroleum?", a: "Yes. Parking is completely free with no time limits at both locations. Our lots have pull-through spaces sized for 18-wheelers, doubles, and oversized loads. We know HOS breaks are mandatory, so there's no pressure to move." },
              { q: "Do you have DEF (diesel exhaust fluid) available?", a: "Yes. DEF is available at every pump island at our Adel travel center. You don't need to make a separate stop or find a specific island — it's available wherever you fuel up." },
              { q: "Is there a truck repair shop at the travel center?", a: "Yes. Our full-service truck care shop at the Adel location handles oil changes, tire repair and replacement, brake service, DOT safety inspections, and 24/7 emergency roadside assistance. Walk-ins are welcome." },
              { q: "What restaurants are inside the Adel travel center?", a: "The Adel location has four restaurants inside: KFC for fried chicken and meals, Starbucks for coffee and beverages, Sbarro for New York-style pizza, and Curry & Grill for Indian and grilled food. All four are inside the building — no driving to a separate food court." },
              { q: "Are showers available at the truck stop?", a: "Yes. Private shower rooms are available 24 hours at both locations. Each is a fully private room cleaned between uses — not a shared locker room setup. Fresh towels are provided." },
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

      {/* CTA Section */}
      <section className="py-20 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 text-gray-800">
            Stop by one of our locations or contact us for more information about our services and fuel card programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1-800-ROAD-HELP" 
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Call Us: 1-800-ROAD-HELP
          </a>
          <a
              href="mailto:superpetroleum2021@gmail.com" 
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
