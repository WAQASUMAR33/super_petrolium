import { CreditCard, CheckCircle } from 'lucide-react';

const acceptedCards = [
  'Fleetone',
  'Comdata',
  'EFS',
  'TCH',
  'TV'
];

export function CallToAction() {
  return (
    <section id="fuel" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD10C] to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
            <p className="text-[#FFD10C] uppercase tracking-wide">Fuel Card Program</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cards We Accept</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We accept the following fuel cards at both locations. Convenient and secure payment options for professional drivers.
          </p>
        </div>

        {/* Fuel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {acceptedCards.map((card, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#FFD10C] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD10C]/20 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#FFD10C]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFD10C]/30 transition-colors">
                  <CreditCard className="w-10 h-10 text-[#FFD10C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD10C] transition-colors">
                  {card}
                </h3>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Accepted</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Accepted at Both Locations</h3>
            <p className="text-gray-300 mb-6">
              All fuel cards listed above are accepted at our Adel Truck Stop and Petro-Stopping Center locations. 
              Enjoy seamless payment experiences at any of our travel centers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD10C]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD10C]" />
                </div>
                <p className="text-gray-300 text-sm">Adel Truck Stop</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD10C]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD10C]" />
                </div>
                <p className="text-gray-300 text-sm">Petro-Stopping Center</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD10C]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD10C]" />
                </div>
                <p className="text-gray-300 text-sm">24/7 Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}