import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';
import { ImageWithFallback } from '../images/ImageWithFallBack';
import { Shield, Clock, MapPin, CheckCircle, Truck, Phone, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Truck Parking in Adel & Cordele GA - Reserve Truck Parking Available',
  description: 'Free truck parking and reserve truck parking at Super Petroleum — part of the Travel Centers of America (TA) network. Safe, well-lit lots monitored 24/7 in Adel and Cordele, Georgia, off I-75.',
  path: '/truck-parking/',
});

const features = [
  {
    icon: Shield,
    title: '24/7 Security Monitoring',
    description: 'Our lots are watched around the clock with cameras and on-site staff so you can rest without worry.'
  },
  {
    icon: Clock,
    title: 'No Time Limits',
    description: 'Park for a quick break or stay overnight. No rush — take the rest your logbook requires.'
  },
  {
    icon: Truck,
    title: 'All Rig Sizes Welcome',
    description: 'Wide-lane pull-through spaces handle 18-wheelers, tankers, flatbeds, and RVs without the squeeze.'
  },
  {
    icon: MapPin,
    title: 'Easy I-75 Access',
    description: 'Both locations sit right off major Georgia interstates, so you\'re never fighting traffic to get back on route.'
  },
];

const highlights = [
  'Paved, well-lit parking lots',
  'Pull-through spaces for all truck lengths',
  'Overnight parking available',
  'On-site security staff',
  'Close to showers, food, and high speed diesel',
  'Free truck parking — no fees ever',
  'Reserve truck parking available by phone',
  'Easy access from I-75',
];

export default function TruckParkingPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative h-[520px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/truck_parking.jpg"
            alt="Secure truck parking at Super Petroleum travel center in Georgia"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Truck Parking — Georgia</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Free & Secure<br /><span className="text-[#FFD10C]">Truck Parking</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Free truck parking at our well-lit, monitored lots in Adel and Cordele, Georgia. Walk in anytime or call ahead to reserve truck parking — we're off I-75 and open 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations/"
              className="bg-[#FFD10C] text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Find a Location
            </Link>
            <a
              href="tel:229-896-7453"
              className="border-2 border-[#FFD10C] text-[#FFD10C] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD10C] hover:text-black transition-colors shadow-lg"
            >
              Call (229) 896-7453
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Open Every Day' },
              { value: '2', label: 'Georgia Locations' },
              { value: '100+', label: 'Parking Spaces' },
              { value: 'Free', label: 'No Parking Fees' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-[#FFD10C]">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Park With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Why Drivers Choose Us</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              More Than Just a Parking Spot
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We know you're not just looking for pavement. You need a safe place to sleep, and quick access to everything else you need to keep rolling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => {
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

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What You Get</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything a Driver Needs in One Stop
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Pulling into Super Petroleum means more than parking. Our travel centers are built around the driver — so once you park, showers, hot food, fresh coffee, and high speed diesel are steps away. No shuttling across town, no wasted time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD10C] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[480px]">
              <ImageWithFallback
                src="/truck_parking.jpg"
                alt="Well-lit truck parking lot at Super Petroleum Georgia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* I-75 Corridor Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Strategic Stops on I-75</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Adel & Cordele — <span className="text-[#FFD10C]">Right on Your Route</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Both Super Petroleum locations sit directly off I-75 in South Georgia — one of the busiest freight corridors in the southeastern United States.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                heading: "Adel, GA — Mile Marker 39",
                body: "Our Adel Travel Center at 1503 West 4th St is a straightforward exit off I-75. Whether you're running north toward Atlanta or south toward Florida, Adel is a natural break point between Valdosta and Tifton. Plenty of room to park, fuel, eat, and get back on the road without losing time."
              },
              {
                heading: "Cordele, GA — Petro-Cordele",
                body: "Cordele sits at the crossroads of I-75 and US-280, making it a key stop for drivers heading east-west across Georgia as well as north-south freight. Our Petro-Cordele location at 373 RockHouse Rd. East gives you easy access without navigating into town."
              },
              {
                heading: "South Georgia Freight Corridor",
                body: "I-75 through South Georgia handles millions of commercial truck trips each year moving goods between the Midwest, Southeast, and Florida. Finding a reliable, secure parking spot along this stretch is harder than it should be. We built our locations to solve that problem."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-gray-800 hover:border-[#FFD10C] p-7 rounded-2xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#FFD10C] mb-3">{item.heading}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOS Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">HOS Compliance & Driver Rest</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Safe Place to Take Your<br /><span className="text-[#FFD10C]">Required Rest Hours</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Federal Hours of Service regulations exist because fatigued driving kills. A 10-hour off-duty period, a 30-minute break after 8 hours of driving — these rules protect you and everyone else on the road. The problem is finding a place to take those breaks safely, especially on a long I-75 run through Georgia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our lots are designed for exactly this. You're not parked on a dark ramp or crammed into a rest area where spaces run out by 8 PM. You're at a staffed travel center with room to breathe, security coverage on your trailer, and everything you need for a real reset — hot food, a shower, and a proper night's sleep.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When your 10 hours are up, fuel is 50 feet away and the pumps accept your fleet card. You can be back on I-75 in under 20 minutes from when you wake up.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { rule: "10-Hour Off-Duty Rule", detail: "Federal law requires a minimum 10 consecutive hours off duty before driving again. Our overnight parking gives you a secure, quiet space to take the full 10 without worrying about your rig." },
                { rule: "11-Hour Driving Limit", detail: "You can drive a maximum of 11 hours after 10 consecutive hours off duty. Plan your I-75 run to stop at Adel or Cordele at the right point in your shift — both locations are spaced to fit natural break windows." },
                { rule: "30-Minute Break Requirement", detail: "Drivers must take a 30-minute break after 8 cumulative hours of driving. Our travel center gives you a real place to stop — not a highway shoulder — with food, restrooms, and WiFi available." },
                { rule: "70-Hour / 8-Day Rule", detail: "Once you hit your weekly hour limit, you need a 34-hour restart. Our free overnight parking makes it practical to take that restart in Adel or Cordele without paying for a hotel or leaving your truck unattended." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 hover:border-[#FFD10C] p-5 rounded-xl transition-all duration-300">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.rule}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Amenities Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Everything On-Site — No Need to Drive Anywhere</h2>
            <p className="text-gray-600">Once you park, everything you need is steps from your cab</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "High Speed Diesel & DEF", sub: "All fleet cards accepted", href: "/fuel/" },
              { label: "Hot Food", sub: "KFC · Starbucks · Sbarro · Curry & Grill", href: "/food-amenities/" },
              { label: "Private Showers", sub: "Clean · 24/7 · No wait list", href: "/food-amenities/" },
              { label: "Truck Care Shop", sub: "Oil · Tires · Brakes · DOT", href: "/truck-care/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group bg-gray-50 border border-gray-200 hover:border-[#FFD10C] p-6 rounded-xl text-center transition-all duration-300 hover:shadow-md">
                <p className="font-bold text-gray-900 group-hover:text-[#FFD10C] transition-colors mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Guide — Long-form SEO content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left column — main body copy */}
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Truck Parking in South Georgia</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Free & Reserve Truck Parking on I-75 in Georgia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Super Petroleum is part of the <strong>Travel Centers of America (TA)</strong> network — and our two Georgia locations in Adel and Cordele are built to the same standard that TA drivers across the country rely on. If you've stopped at a TA travel center before, you know what to expect: a safe, well-run property where your rig is looked after. That's exactly what we deliver here on I-75.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our <strong>free truck parking in Adel, GA</strong> and <strong>Cordele, GA</strong> gives you properly sized pull-through spaces — wide enough for 18-wheelers, doubles, and oversized flatbeds — without the juggling act you get in undersized lots. You pull in straight, you park, and you're done. No tight corners, no backing into traffic.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Both lots are paved, well-drained, and fully lit through the night. We have on-site staff and camera coverage across the property so your cab, trailer, and cargo are looked after while you sleep. This isn't a dark corner of a gas station — it's a proper <strong>travel center</strong> built for working drivers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Walk-in <strong>free truck parking</strong> is available first-come, first-served at both locations. If you need a guaranteed spot — especially for a 34-hour restart or a long layover — call us ahead and <strong>reserve truck parking</strong>. No apps, no fees, just a quick call. When you're ready to roll, high speed diesel is 50 feet from your cab.
              </p>
            </div>

            {/* Right column — what sets us apart */}
            <div className="space-y-6">
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-2">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What Sets Our Lots Apart</p>
              </div>

              {[
                {
                  title: "Purpose-Built for Commercial Trucks",
                  body: "These aren't repurposed car lots. Our parking areas were laid out with commercial rigs in mind — long pull-through lanes, wide turning radii, and enough space between rows so you're not squeezing past another driver's mirrors at 3 AM."
                },
                {
                  title: "Parking Right Next to Everything You Need",
                  body: "Most truck stops make you walk a quarter mile from your rig to get a shower or a meal. At Super Petroleum, the lot, the showers, the restaurant, and the fuel pumps are all in the same place. You park once and you're done."
                },
                {
                  title: "Safe for Your Cargo, Not Just Your Cab",
                  body: "We know you're not just responsible for your truck. Cameras cover the trailer areas specifically, and our staff does regular lot checks. If something seems off, someone will know about it."
                },
                {
                  title: "No Pressure to Move On",
                  body: "Some truck stops will knock on your door or post time limits. We don't. Take the rest you legally need. HOS rules exist for a reason, and we're not going to push you back onto the road before you're ready."
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-[#FFD10C] pl-6 py-1">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Common Questions</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Truck Parking — Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is truck parking free at Super Petroleum?",
                a: "Yes — free truck parking is available at both our Adel and Cordele locations. No daily fees, no membership, and no app required. Just pull in and park. If you want to guarantee a spot in advance, you can also reserve truck parking by calling us before you arrive."
              },
              {
                q: "Can I park overnight at your Georgia truck stop?",
                a: "Absolutely. Both locations are open 24 hours a day, 7 days a week with no time limits. Whether you need a 10-hour break for HOS compliance or just a 30-minute rest stop, you're welcome to stay as long as you need."
              },
              {
                q: "What size trucks can park at your locations?",
                a: "Our lots accommodate everything from pickup trucks to full 18-wheelers, tankers, flatbeds, and doubles. Pull-through spaces are designed for longer combinations so you don't have to worry about tight corners or backing in."
              },
              {
                q: "Is the parking lot monitored and safe?",
                a: "Yes. Both lots have 24/7 camera surveillance and on-site staff. The lots are fully lit through the night. We take the security of your rig and cargo seriously — this isn't a rest area in the dark."
              },
              {
                q: "Where are you located relative to I-75?",
                a: "Our Adel Travel Center is located at 1503 West 4th St, Adel, GA — just off I-75. Our Cordele location (Petro-Cordele) is at 373 RockHouse Rd. East, Cordele, GA. Both are easy on-and-off from the interstate with no complicated routing."
              },
              {
                q: "Are showers and food available at the truck stop?",
                a: "Yes. Private shower rooms, hot food from KFC, Starbucks, Sbarro, and Curry & Grill, free WiFi, and clean restrooms are all available on-site. You're not just getting a parking space — you're getting everything you need to reset properly before your next run."
              },
              {
                q: "Can I reserve truck parking ahead of time?",
                a: "Yes. Call us before you arrive and we'll hold a space for you — especially helpful if you're planning a 34-hour restart or arriving late when lots can fill up. Free truck parking is also available walk-in at both locations on a first-come, first-served basis."
              },
              {
                q: "Do you offer fuel cards for commercial truckers?",
                a: "Yes. We accept Comdata, Fleetone, EFS, TCH, T-Chek, and other major fleet fuel cards at both locations. High speed diesel, DEF, and gasoline are available 24/7 right next to the parking areas."
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#FFD10C] flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#FFD10C]">Georgia Locations</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-gray-400 text-xl">Both locations offer truck parking 24 hours a day, 7 days a week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Adel Travel Center', address: '1503 West 4th St, Adel, GA 31620', phone: '(229) 896-7453' },
              { name: 'Petro-Cordele', address: '373 RockHouse Rd. East, Cordele, GA 31015', phone: '(229) XXX-XXXX' },
            ].map((loc, i) => (
              <div key={i} className="bg-white/5 border border-gray-800 hover:border-[#FFD10C] p-8 rounded-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFD10C] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{loc.name}</h3>
                    <p className="text-gray-400 text-sm">{loc.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-[#FFD10C]" />
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#FFD10C] transition-colors">{loc.phone}</a>
                </div>
                <p className="text-sm text-[#FFD10C] mt-4 font-semibold">Open 24/7 · Truck Parking Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What Drivers Say</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Drivers on I-75</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The parking lot is well-lit and I always feel safe here. I park at Super Petroleum every time I'm running through Georgia — clean, secure, and everything I need is right there.",
                name: "Robert Wilson", role: "Fleet Driver", initials: "RW"
              },
              {
                quote: "I've been using the Adel location for two years. The lot is big enough that I never have trouble finding a pull-through even late at night. Showers are clean and the KFC is right there. Can't ask for more.",
                name: "James Carter", role: "Owner Operator", initials: "JC"
              },
              {
                quote: "Best free truck parking on the I-75 corridor between Atlanta and Florida. No time limits, no hassle. I take my 34-hour restart here when I need one. Safe, quiet, and the fuel prices are competitive.",
                name: "Tony Marsh", role: "Long-Haul Driver", initials: "TM"
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:border-[#FFD10C] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 text-[#FFD10C] fill-current" />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFD10C] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">{t.initials}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Pull In?</h2>
          <p className="text-gray-800 text-xl mb-8">Both locations are open 24/7. No reservation needed — just pull in and rest.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations/" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Directions
            </Link>
            <Link href="/services/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
