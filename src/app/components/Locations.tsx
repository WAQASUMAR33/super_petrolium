'use client';

import { ImageWithFallback } from '../images/ImageWithFallBack';
import { MapPin, Clock, Phone, Navigation, Utensils, Fuel, Truck, Wifi } from 'lucide-react';
import { useState } from 'react';

const locations = [
  {
    name: 'Adel Travel Center',
    address: '1503 West 4th St',
    city: 'Adel, GA 31620',
    phone: '(229) 896-7453',
    hours: 'Open 24/7',
    description: 'Full-service travel center with dining and fuel services',
    image: 'https://images.unsplash.com/photo-1638425637198-f4ebe6ef341a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWVzZWwlMjBmdWVsJTIwcHVtcHxlbnwxfHx8fDE3NjQwMjE0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: [
      { icon: Utensils, label: 'Huddle House Restaurant' },
      { icon: Fuel, label: 'Diesel & Gas' },
      { icon: Truck, label: 'Truck Parking' },
      { icon: Wifi, label: 'Free WiFi' }
    ],
    features: [
      'Huddle House Restaurant',
      'Full Service Dining',
      'Dine-In & Pickup Available',
      'Truck Care Shop',
      'Clean Restrooms',
      'ATM Available'
    ]
  },
  {
    name: 'Petro-Stopping Center',
    address: '393 Rock house RD East',
    city: 'Cordele, GA 31015',
    phone: '(229) XXX-XXXX',
    hours: 'Open 24/7',
    description: 'Complete truck stop with all essential services',
    image: 'https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRpbmluZ3xlbnwxfHx8fDE3NjQwMjE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: [
      { icon: Fuel, label: 'Full Service Fuel' },
      { icon: Truck, label: 'Large Truck Parking' },
      { icon: Wifi, label: 'Free WiFi' }
    ],
    features: [
      'Full Service Station',
      'Truck Parking',
      'Fuel Services',
      'Clean Facilities',
      'ATM Available',
      'Convenience Store'
    ]
  }
];

export function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD10C]/20 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold">Our Locations</h1>
            <p className="text-xl">
              Find Super Petroleum locations near you. We're strategically positioned along major routes to serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Location Finder */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="mb-4 text-gray-900">Find a Location Near You</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter City, State, or ZIP Code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                />
                <button className="bg-[#FFD10C] text-black px-8 py-3 rounded-lg hover:bg-[#FFD10C]/90 transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  <Navigation className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Location Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#FFD10C] text-black px-4 py-2 rounded-full">
                      {location.hours}
                    </span>
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-8">
                  <h3 className="mb-2 text-gray-900">{location.name}</h3>
                  <p className="text-gray-700 mb-6">{location.description}</p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FFD10C] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-900">{location.address}</p>
                        <p className="text-gray-900">{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#FFD10C] flex-shrink-0" />
                      <p className="text-gray-900">{location.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#FFD10C] flex-shrink-0" />
                      <p className="text-gray-900">{location.hours}</p>
                    </div>
                  </div>

                  {/* Amenities Icons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 pb-6 border-b border-gray-200">
                    {location.amenities.map((amenity, idx) => {
                      const Icon = amenity.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-[#FFD10C] rounded-full flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-black" />
                          </div>
                          <p className="text-xs text-gray-800">{amenity.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm uppercase tracking-wide text-gray-700 font-semibold">Features & Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#FFD10C] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-900">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#FFD10C] text-black py-3 rounded-lg hover:bg-[#FFD10C]/90 transition-all hover:shadow-md flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </button>
                    <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-6 text-white">Can't Find What You're Looking For?</h2>
          <p className="mb-8 text-gray-300">
            Contact our customer service team for assistance in finding the nearest Super Petroleum location or to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1-800-ROAD-HELP" 
              className="bg-[#FFD10C] text-black px-8 py-4 rounded-lg hover:bg-[#FFD10C]/90 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>1-800-ROAD-HELP</span>
            </a>
            <a 
              href="mailto:superpetroleum2021@gmail.com" 
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
