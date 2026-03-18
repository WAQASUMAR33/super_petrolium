'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'Fuel Services',
    question: 'What fuel cards do you accept?',
    answer: 'We accept all major fuel cards including Comdata, T-Check, TCH, Fleet One, EFS, and more. Our fuel pumps are compatible with virtually all fuel card programs, making it convenient for professional drivers to fuel up without hassle.'
  },
  {
    id: 2,
    category: 'Fuel Services',
    question: 'Do you offer DEF (Diesel Exhaust Fluid)?',
    answer: 'Yes, we provide DEF at all our locations. DEF is essential for modern diesel engines with SCR (Selective Catalytic Reduction) systems to reduce emissions. You can purchase DEF at our fuel islands alongside our premium diesel.'
  },
  {
    id: 3,
    category: 'Truck Repair Services',
    question: 'Do you offer 24/7 emergency repair services?',
    answer: 'Yes! Our truck care shop provides 24/7 emergency roadside assistance for professional drivers. If you experience a breakdown or need urgent repairs, call our emergency line at 1-800-ROAD-HELP, and our certified technicians will assist you immediately.'
  },
  {
    id: 4,
    category: 'Truck Repair Services',
    question: 'What types of truck repairs do you perform?',
    answer: 'We provide comprehensive truck maintenance and repair services including oil changes, brake service, tire repair and replacement, engine diagnostics, electrical system repairs, DOT inspections, trailer repair, and cooling system service. Our ASE certified technicians can handle repairs for all major truck brands.'
  },
  {
    id: 5,
    category: 'Gas Station',
    question: 'What are your operating hours?',
    answer: 'Our fuel stations are open 24/7, providing round-the-clock service for professional drivers. Our truck care shop operates Monday-Friday 6:00 AM - 10:00 PM, Saturday 7:00 AM - 9:00 PM, and Sunday 8:00 AM - 8:00 PM, with 24/7 emergency service available.'
  },
  {
    id: 6,
    category: 'Gas Station',
    question: 'Is truck parking available?',
    answer: 'Yes, we offer secure, spacious truck parking with 24/7 security monitoring. Our well-lit parking areas can accommodate vehicles of all sizes, from pickup trucks to 18-wheelers. All parking spaces are paved and level for easy maneuvering.'
  },
  {
    id: 7,
    category: 'Food Points',
    question: 'What dining options are available?',
    answer: 'We offer full-service restaurants with freshly prepared meals, breakfast served all day, and quick-service counters for grab-and-go options. Our facilities include hot meals, snacks, beverages, fresh coffee, and healthy meal options to keep you fueled on the road.'
  },
  {
    id: 8,
    category: 'Food Points',
    question: 'Do you have clean restroom and shower facilities?',
    answer: 'Absolutely! We maintain clean, private shower facilities available 24/7 with fresh towels and premium toiletries. Our restrooms are regularly cleaned and well-maintained for your comfort and hygiene during your rest stops.'
  },
  {
    id: 9,
    category: 'Fuel Services',
    question: 'What is your fuel pricing policy?',
    answer: 'We offer competitive fuel pricing with premium diesel and gasoline. Our prices are updated regularly to reflect market conditions. We accept cash and all major fuel cards. For fleet customers, we offer volume discounts and fuel card programs tailored to your business needs.'
  },
  {
    id: 10,
    category: 'Gas Station',
    question: 'Do you have WiFi available?',
    answer: 'Yes! We provide free high-speed WiFi throughout our facilities, including parking areas, restrooms, and dining areas. There are no time limits or login requirements - simply connect to stay in touch, work, or stream entertainment during your stop.'
  }
];

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const categories = ['All', 'Fuel Services', 'Truck Repair Services', 'Gas Station', 'Food Points'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-[#FFD10C]">Questions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our fuel services, truck repairs, and facilities
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#FFD10C] text-black'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#FFD10C] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <span className="inline-block bg-[#FFD10C]/10 text-[#FFD10C] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-[#FFD10C]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mt-4">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-[#FFD10C] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our friendly team is here to help. Contact us anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1-800-ROAD-HELP"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Call: 1-800-ROAD-HELP
              </a>
              <a
                href="/contact"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

