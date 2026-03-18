import { ImageWithFallback } from '../images/ImageWithFallBack';
import { MapPin, Clock } from 'lucide-react';

const locations = [
  {
    name: 'Adel Travel Center',
    address: '1503 West 4th St, Adel, GA 31620',
    hours: 'Open 24/7',
    features: ['Huddle House Restaurant', 'Full Service Dining', 'Dine-In & Pickup Available'],
    image: 'https://images.unsplash.com/photo-1638425637198-f4ebe6ef341a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWVzZWwlMjBmdWVsJTIwcHVtcHxlbnwxfHx8fDE3NjQwMjE0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Petro-Stopping Center',
    address: '393 Rock house RD East, Cordele, GA 31015',
    hours: 'Open 24/7',
    features: ['Full Service Station', 'Truck Parking', 'Fuel Services'],
    image: 'https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRpbmluZ3xlbnwxfHx8fDE3NjQwMjE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function FeaturedLocations() {
  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Locations</h2>
          <p className="max-w-2xl mx-auto">
            Conveniently located along major highways and interstates across the country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-3">{location.name}</h4>
                <div className="flex items-start gap-2 mb-2 text-gray-600">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p>{location.address}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <p>{location.hours}</p>
                </div>
                <ul className="list-disc list-inside mb-4">
                  {location.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-[#FFD10C] text-black py-2 rounded hover:bg-[#FFD10C]/90 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}