import { ImageWithFallback } from '../images/ImageWithFallBack';
import Link from 'next/link';

const services = [
  {
    image: '/gas_astation.jpg',
    title: 'Fuel Services',
    href: '/fuel/',
    description: 'High speed diesel and gasoline at competitive prices along I-75 Georgia. As part of the Travel Centers of America (TA) network, we deliver the same reliable fueling experience TA drivers count on — high-flow pumps, fresh fuel, and DEF at every island. All major fleet cards accepted including Comdata, T-Check, TCH, EFS, and more.',
    features: ['High Speed Diesel 24/7', 'All Major Fuel Cards Accepted', 'DEF at Every Pump', 'Competitive Pricing']
  },
  {
    image: '/kfc_image.jpg',
    title: 'Dining Options',
    href: '/food-amenities/',
    description: 'Enjoy delicious hot meals and quick-service dining options to satisfy your appetite. Our full-service restaurants feature freshly prepared meals, breakfast served all day, and a variety of options for every taste. Quick-service counters offer grab-and-go snacks, beverages, and fresh sandwiches. We also have a selection of healthy options and fresh coffee to keep you energized on the road.',
    features: ['Full-Service Restaurants', 'Breakfast All Day', 'Grab & Go Options', 'Fresh Coffee & Beverages']
  },
  {
    image: '/truck_parking.jpg',
    title: 'Free WiFi',
    href: '/food-amenities/',
    description: 'Stay connected with high-speed internet access throughout our facilities. Our complimentary WiFi network covers all parking areas, restrooms, and dining areas. Perfect for checking emails, streaming entertainment, video calls with family, or handling business on the road. Fast and reliable connection to keep you productive and entertained during your rest stops.',
    features: ['High-Speed Connection', 'Coverage Throughout Facility', 'No Time Limits', 'Completely Free']
  },
  {
    image: '/truck_care.jpg',
    title: 'Truck Maintenance & Repair',
    href: '/truck-care/',
    description: 'Professional truck maintenance and repair services to keep your rig running smoothly. Our certified technicians provide expert service for all truck makes and models. We offer routine maintenance, oil changes, tire services, brake repairs, electrical diagnostics, and emergency roadside assistance. Our fully equipped service bays are available for major repairs, and we stock commonly needed parts for quick turnaround times.',
    features: ['Certified Technicians', 'All Makes & Models', 'Emergency Repairs', 'Parts Inventory']
  },
  {
    image: '/truck_parking.jpg',
    title: 'Clean Shower Facilities',
    href: '/food-amenities/',
    description: 'Private, clean shower facilities available 24/7 for your comfort and hygiene. Our well-maintained shower rooms feature premium amenities including fresh towels, quality toiletries, and private changing areas. Clean facilities are our priority, with regular cleaning schedules ensuring a fresh experience every time. Perfect for refreshing after a long day on the road.',
    features: ['24/7 Availability', 'Private Rooms', 'Fresh Towels Provided', 'Premium Toiletries']
  },
  {
    image: '/truck_parking.jpg',
    title: 'Free & Reserve Truck Parking',
    href: '/truck-parking/',
    description: 'Free truck parking at both our Adel and Cordele locations — no fees, no apps, no hassle. Walk in anytime or call ahead to reserve truck parking if you need a guaranteed spot for a long restart. Well-lit, paved pull-through spaces monitored 24/7, sized for 18-wheelers, tankers, flatbeds, and doubles. High speed diesel is steps away when you\'re ready to roll.',
    features: ['Free Truck Parking', 'Reserve Truck Parking Available', '24/7 Security Monitoring', 'All Rig Sizes Welcome']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
            <p className="text-[#FFD10C] uppercase tracking-wide font-semibold">What We Offer</p>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#FFD10C] mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Part of the Travel Centers of America (TA) network — everything you need to keep moving, all in one stop in Adel and Cordele, Georgia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="group bg-white p-0 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#FFD10C] hover:-translate-y-3"
              >
                <div className="w-full h-56 overflow-hidden bg-gray-200 relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FFD10C] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <Link href={service.href} className="text-[#FFD10C] font-semibold text-sm inline-flex items-center gap-1 hover:text-yellow-500 transition-colors">
                      Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}