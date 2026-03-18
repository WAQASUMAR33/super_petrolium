import { ImageWithFallback } from '../images/ImageWithFallBack';
import { Wrench, Settings, Clock, CheckCircle, Phone, MapPin, ShieldCheck, Zap, Users, Truck, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    image: '/oil_change.jpg',
    title: 'Oil Changes & Lubrication',
    description: 'Complete oil change service with quality lubricants for optimal engine performance',
    price: 'Starting at $150'
  },
  {
    image: '/brake_system.jpg',
    title: 'Brake Service & Repair',
    description: 'Complete brake inspection, pad replacement, and air brake system maintenance',
    price: 'Starting at $250'
  },
  {
    image: '/tire_service.jpg',
    title: 'Tire Service',
    description: 'Tire repair, replacement, rotation, and balancing for all truck types',
    price: 'Starting at $180'
  },
  {
    image: '/engine_diagnostics.jpg',
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve engine issues',
    price: 'Starting at $120'
  },
  {
    image: '/truck_electrical.jpg',
    title: 'Electrical Systems',
    description: 'Battery testing, alternator service, and electrical system repairs',
    price: 'Starting at $100'
  },
  {
    image: '/dot_inspection.jpg',
    title: 'DOT Inspections',
    description: 'Complete DOT safety inspections to keep your fleet compliant',
    price: 'Starting at $80'
  },
  {
    image: '/trailer_repair.png',
    title: 'Trailer Repair',
    description: 'Trailer maintenance including door repairs, floor replacement, and more',
    price: 'Starting at $200'
  },
  {
    image: '/cooling_system.png',
    title: 'Cooling System Service',
    description: 'Radiator repair, coolant flush, and complete cooling system maintenance',
    price: 'Starting at $140'
  }
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: 'ASE Certified Technicians',
    body: "Every technician holds ASE certification — nationally recognized credentials for commercial truck service."
  },
  {
    icon: Zap,
    title: 'Fast Turnaround Times',
    body: "We stock high-demand parts so most routine service is done in hours, not days. Time off the road is money."
  },
  {
    icon: Clock,
    title: '24/7 Emergency Roadside',
    body: "Our emergency team runs around the clock. If you're stranded near I-75 in South Georgia, we can reach you."
  },
  {
    icon: Truck,
    title: 'All Makes & Models',
    body: "Freightliner, Kenworth, Peterbilt, Volvo, International, Mack — all major commercial truck brands serviced."
  },
  {
    icon: Users,
    title: 'Fleet Service Programs',
    body: "Scheduled service, priority lanes, and consolidated billing for fleets running through Georgia."
  },
  {
    icon: Settings,
    title: 'Full-Service Bays',
    body: "Full-height bays, diagnostic computers, and a stocked parts room for heavy repairs on the spot."
  },
];

const tireServices = [
  'New tire sales & installation',
  'Flat tire repair & patch',
  'Tire rotation & balancing',
  'Blowout replacement',
  'Inner tube service',
  'Rim repair & replacement',
  'Drive tire & steer tire service',
  'Emergency roadside tire service',
];

const fleetBenefits = [
  'Priority scheduling — less waiting in the service lane',
  'Consolidated monthly invoicing for your accounting team',
  'Service history records kept on file per unit',
  'Preferred pricing on recurring maintenance services',
  'Dedicated point of contact for fleet managers',
  'DOT compliance tracking and inspection reminders',
];

const faqs = [
  {
    q: "Do you work on all commercial truck brands?",
    a: "Yes. We service Freightliner, Kenworth, Peterbilt, Volvo, International, Mack, Western Star, and other major commercial truck brands. If it's a commercial truck, our technicians can work on it."
  },
  {
    q: "Do you offer DOT inspections?",
    a: "Yes. We perform complete DOT safety inspections at our Adel, GA location. Our technicians go through the full inspection checklist and can flag or repair any violations on the spot so you're not scrambling to find another shop."
  },
  {
    q: "Can I get emergency roadside assistance near I-75 in Georgia?",
    a: "Yes. We offer 24/7 emergency roadside service for drivers in the South Georgia area. If you're broken down near Adel or Cordele, call us and we'll get someone out to you."
  },
  {
    q: "How long does a typical oil change take?",
    a: "For most commercial trucks, a standard oil and filter change takes 45 minutes to an hour in our shop. We keep common oil grades and filters in stock so we're not holding up your service waiting on parts."
  },
  {
    q: "Do you offer tire service for commercial trucks?",
    a: "Yes — full tire service including new tire installation, flat repairs, blowout replacement, rotation, and balancing. We carry multiple tire sizes for steer, drive, and trailer positions."
  },
  {
    q: "Do you have fleet programs for companies running multiple trucks?",
    a: "Yes. We work with fleet operators to set up scheduled maintenance programs, priority service lanes, and consolidated billing. Contact us to talk about what your fleet needs and we'll put something together."
  },
  {
    q: "What are your shop hours?",
    a: "Our shop is open Monday through Friday 6 AM to 10 PM, Saturday 7 AM to 9 PM, and Sunday 8 AM to 8 PM. Emergency roadside service is available 24/7."
  },
];

export function TruckCareShop() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1645846693704-7c00a527c09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHJlcGFpciUyMG1lY2hhbmljfGVufDF8fHx8MTc2NDAyMTg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="ASE certified truck mechanic performing repairs at Super Petroleum Georgia"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Truck Care Shop — Adel, Georgia</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Truck Repair<br /><span className="text-[#FFD10C]">& Maintenance</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
            ASE-certified technicians, full-service bays, and 24/7 emergency roadside — all at our travel center in Adel, GA on I-75.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:229-896-7453" className="bg-[#FFD10C] text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:shadow-xl">
              Call (229) 896-7453
            </a>
            <a href="tel:229-896-7453" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-xl">
              24/7 Emergency Service
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Emergency Roadside' },
              { value: 'ASE', label: 'Certified Technicians' },
              { value: '8+', label: 'Service Types' },
              { value: 'All', label: 'Truck Makes & Models' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-[#FFD10C]">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Shop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Why Choose Our Shop</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Truck Service You Can Count On in Georgia
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional drivers don't have time for a shop that can't deliver. Here's what we bring to the bay every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-5 p-7 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#FFD10C] hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFD10C] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What We Do</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Comprehensive truck maintenance and repair at our Adel, GA shop — all makes, all models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-0 rounded-2xl border border-gray-100 hover:border-[#FFD10C] hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="w-full h-56 overflow-hidden bg-gray-200 relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.title} for commercial trucks — Super Petroleum Adel Georgia`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white drop-shadow-lg">{service.title}</h4>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <p className="text-gray-700 mb-3 leading-relaxed text-sm">{service.description}</p>
                  <p className="text-black font-bold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tire Service Spotlight */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
                <p className="text-[#FFD10C] uppercase tracking-widest text-sm font-semibold">Tire Service — Adel, GA</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Full Commercial Tire Service<br /><span className="text-[#FFD10C]">On-Site in Adel</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                A blown tire on I-75 doesn't have to mean a long wait. We carry commercial tires in steer, drive, and trailer sizes and get you back rolling fast — from blowout replacements to scheduled rotation and balancing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tireServices.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FFD10C] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-[460px] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760971706737-339c5ead5cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwc2VydmljZSUyMHRydWNrfGVufDF8fHx8MTc2NDAyMTg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Commercial truck tire service at Super Petroleum Georgia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Long-form Content — Truck Maintenance in Georgia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Truck Maintenance on I-75 Georgia</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Right Shop at the Right Spot on Your Route
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Running I-75 through South Georgia and something goes wrong? Our truck care shop in Adel, GA is built into the travel center — your rig gets looked at while you eat, shower, or rest.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We handle oil changes, brake repairs, DOT inspections, engine diagnostics, and trailer work. Certified techs, honest pricing, no two-day backlog.
              </p>
            </div>
            <div className="space-y-5">
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-2">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Preventive Maintenance Matters</p>
              </div>
              {[
                {
                  title: "Stay Ahead of DOT Violations",
                  body: "Routine DOT inspections catch violations before an officer does — brakes, lights, tires, fluids."
                },
                {
                  title: "Oil Changes Keep Engines Alive",
                  body: "Skipping oil changes on a diesel engine is deferred damage. We make it fast and affordable."
                },
                {
                  title: "Tire Health is Safety",
                  body: "Tire failure causes accidents. We check tread, sidewalls, and pressure and flag problems early."
                },
                {
                  title: "Catch Small Issues Early",
                  body: "A loose brake chamber or leaking coolant hose is a cheap fix now — a big problem on the road later."
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-[#FFD10C] pl-6 py-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Roadside Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">24/7 Emergency Roadside — South Georgia</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Broken Down Near I-75?<br /><span className="text-[#FFD10C]">We Can Get to You.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Broken down on I-75 near Adel or Cordele? Our roadside team runs 24/7. One call gets you a tech with tools and parts — blown tires, dead batteries, brake issues, fuel problems, minor mechanical failures. If we can fix it roadside, we will.
              </p>
              <a href="tel:229-896-7453" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                <Phone className="w-5 h-5 text-[#FFD10C]" />
                Emergency: (229) 896-7453
              </a>
            </div>
            <div className="space-y-4">
              {[
                { service: "Tire Blowout & Replacement", detail: "Steer, drive, and trailer tire stock on hand — back rolling fast." },
                { service: "Dead Battery & Jump Start", detail: "Battery testing, jump start, and on-site replacement for commercial trucks." },
                { service: "Brake System Emergencies", detail: "Air brake issues, chamber failures, and slack adjuster problems handled roadside." },
                { service: "Fuel System Issues", detail: "Bad fuel, air in lines, and fuel filter failures diagnosed and addressed." },
                { service: "Minor Mechanical Failures", detail: "Belts, hoses, sensors, lighting — fixed where you're sitting if parts allow." },
                { service: "Tow Coordination", detail: "If the truck needs to come in, we coordinate the tow and have the bay ready." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-gray-200 hover:border-[#FFD10C] rounded-xl transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.service}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Truck Brands We Service</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Major Commercial Truck <span className="text-[#FFD10C]">Makes & Models</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our ASE-certified technicians are trained across the full range of commercial truck manufacturers. If you drive it, we can work on it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-10">
            {["Freightliner", "Kenworth", "Peterbilt", "Volvo Trucks", "International", "Mack Trucks", "Western Star", "Ford F-Series", "Hino", "Isuzu", "UD Trucks", "Sterling"].map((brand, i) => (
              <div key={i} className="bg-white/5 border border-gray-800 hover:border-[#FFD10C] px-4 py-3 rounded-xl text-center transition-all duration-300">
                <p className="text-white text-sm font-medium">{brand}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">Don't see your brand? Call us — if it's a commercial truck, we most likely service it.</p>
        </div>
      </section>

      {/* Preventive Maintenance Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Keep Your Truck on the Road</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Truck Preventive Maintenance Schedule
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Staying on top of your maintenance intervals keeps your truck compliant, safe, and out of the breakdown lane. Here's a general guide — always check your OEM manual for your specific model.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm rounded-tl-xl">Service</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Interval</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Why It Matters</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm rounded-tr-xl">Available at Our Shop</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Engine Oil & Filter", interval: "Every 15,000–25,000 miles", why: "Prevents engine wear and overheating", available: true },
                  { service: "Tire Inspection & Rotation", interval: "Every 25,000 miles", why: "Reduces blowout risk and extends tire life", available: true },
                  { service: "Brake System Inspection", interval: "Every 25,000–50,000 miles", why: "Worn linings are a leading cause of accidents", available: true },
                  { service: "DOT Safety Inspection", interval: "Annually (required)", why: "Violations can put your truck out of service", available: true },
                  { service: "Coolant System Service", interval: "Every 2 years or 300,000 miles", why: "Prevents corrosion and cooling failure", available: true },
                  { service: "Transmission Service", interval: "Every 50,000–100,000 miles", why: "Fluid degradation damages expensive gears", available: true },
                  { service: "Fuel Filter Replacement", interval: "Every 25,000 miles", why: "Clogged filters cause hard starts and power loss", available: true },
                  { service: "Electrical System Check", interval: "Annually", why: "Battery and lighting failures cause DOT violations", available: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors`}>
                    <td className="px-6 py-4 font-semibold text-gray-900 text-sm">{row.service}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.interval}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.why}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full text-xs font-semibold">
                        <CheckCircle className="w-3 h-3" /> Yes
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Intervals are general guidelines for Class 7–8 commercial trucks. Consult your OEM manual or ask our technicians for model-specific recommendations.
          </p>
        </div>
      </section>

      {/* Driver Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">What Drivers Say</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Georgia's Professional Drivers</h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Super Petroleum has been my go-to stop for over 10 years. Reliable fuel, safe parking, and the truck care shop has saved me multiple times. Highly recommend!",
                name: "Mike Stevens", role: "Owner Operator", initials: "MS"
              },
              {
                quote: "Had a brake issue pull up on my diagnostics just south of Tifton. Called the shop, they had the part in stock, and I was back on the road in two hours. That kind of turnaround is rare.",
                name: "Derek Owens", role: "Long-Haul Driver", initials: "DO"
              },
              {
                quote: "I manage a small fleet of 8 trucks. We set up an account with Super Petroleum for the I-75 corridor and it's been the best maintenance decision we made. Records on file, fair pricing, no surprises.",
                name: "Sandra Reyes", role: "Fleet Manager", initials: "SR"
              },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl hover:border-[#FFD10C] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Wrench key={s} className="w-4 h-4 text-[#FFD10C]" />)}
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

      {/* Fleet Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl">
              <ImageWithFallback
                src="/truck_care.jpg"
                alt="Fleet truck maintenance program Super Petroleum Georgia"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Fleet Service Programs</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Running a Fleet Through Georgia?<br /><span className="text-[#FFD10C]">We Can Help.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Five trucks or fifty running through South Georgia — talk to us about a fleet account. We handle scheduling, track service history per unit, and keep your fleet DOT compliant without the back-and-forth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {fleetBenefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:229-896-7453"
                className="inline-flex items-center gap-2 bg-[#FFD10C] text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Talk to Us About Fleet Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Hours & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFD10C] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Shop Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday – Friday', hours: '6:00 AM – 10:00 PM' },
                  { day: 'Saturday', hours: '7:00 AM – 9:00 PM' },
                  { day: 'Sunday', hours: '8:00 AM – 8:00 PM' },
                  { day: 'Emergency Service', hours: '24/7', highlight: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{row.day}</span>
                    <span className={row.highlight ? 'text-[#FFD10C] font-semibold' : 'text-gray-900 font-medium'}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFD10C] rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Contact Our Shop</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">1503 West 4th St</p>
                    <p className="text-gray-400 text-sm">Adel, GA 31620</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">(229) 896-7453</p>
                    <p className="text-gray-400 text-sm">Emergency: 1-800-ROAD-HELP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-sm">superpetroleum2021@gmail.com</p>
                </div>
                <a
                  href="tel:229-896-7453"
                  className="block w-full text-center bg-[#FFD10C] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors mt-4"
                >
                  Schedule an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide text-sm font-semibold">Common Questions</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Truck Care — Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#FFD10C] mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-16 bg-[#FFD10C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Need Service? We're Ready.</h2>
          <p className="text-gray-800 text-xl mb-8">
            Pull into our Adel, GA shop — or call ahead and we'll have a bay ready when you arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:229-896-7453" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Call (229) 896-7453
            </a>
            <Link href="/locations/" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
