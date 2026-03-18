import { FileText, AlertCircle, Scale, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-12 h-12 text-[#FFD10C]" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
            </div>
            <p className="text-xl text-gray-300">
              Last Updated: November 27, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Super Petroleum. These Terms and Conditions ("Terms") govern your use of our services, 
                facilities, and website. By using our services or visiting our locations, you agree to comply with 
                and be bound by these Terms. Please read them carefully.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  By accessing our facilities, using our services, or visiting our website, you acknowledge that you 
                  have read, understood, and agree to be bound by these Terms and all applicable laws and regulations. 
                  If you do not agree with these Terms, please do not use our services.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Services</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>2.1 Fuel Services</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All fuel sales are final upon delivery to your vehicle</li>
                  <li>Fuel prices are subject to change without notice</li>
                  <li>We reserve the right to limit fuel quantities during shortages</li>
                  <li>Customers must follow all safety protocols at fuel pumps</li>
                </ul>

                <p className="mt-4"><strong>2.2 Fuel Card Program</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fuel card applications are subject to approval</li>
                  <li>Card usage is subject to credit limits and account standing</li>
                  <li>Lost or stolen cards must be reported immediately</li>
                  <li>Unauthorized use of fuel cards may result in account termination</li>
                </ul>

                <p className="mt-4"><strong>2.3 Truck Care Shop</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All repair estimates are approximate and subject to change</li>
                  <li>We are not liable for delays due to parts availability</li>
                  <li>Abandoned vehicles may be subject to storage fees</li>
                  <li>Warranty terms apply only to parts and labor we provide</li>
                </ul>

                <p className="mt-4"><strong>2.4 Parking Services</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Parking is available on a first-come, first-served basis</li>
                  <li>We are not responsible for theft, damage, or loss to parked vehicles</li>
                  <li>Maximum parking time limits may apply</li>
                  <li>Improperly parked vehicles may be towed at owner's expense</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Payment Terms</h2>
              <div className="space-y-3 text-gray-700">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment is due at the time of service unless credit terms have been established</li>
                  <li>We accept major credit cards, debit cards, cash, and approved fuel cards</li>
                  <li>A service fee may apply for returned checks or declined payments</li>
                  <li>Accounts past due may be subject to late fees and collection actions</li>
                  <li>All prices are in U.S. Dollars and subject to applicable taxes</li>
                </ul>
              </div>
            </div>

            {/* User Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. User Conduct</h2>
              <div className="space-y-3 text-gray-700">
                <p>When using our facilities and services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Comply with all posted rules and regulations</li>
                  <li>Respect other customers and our staff</li>
                  <li>Not engage in illegal activities on our property</li>
                  <li>Follow all safety protocols and procedures</li>
                  <li>Not damage or misuse our facilities or equipment</li>
                  <li>Report any accidents or incidents immediately to staff</li>
                </ul>
              </div>
            </div>

            {/* Liability Limitation */}
            <div className="mb-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFD10C] rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Limitation of Liability</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPER PETROLEUM SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
                  WHETHER INCURRED DIRECTLY OR INDIRECTLY.
                </p>
                <p>
                  Our total liability to you for any claim arising from or relating to these Terms or our services 
                  shall not exceed the amount you paid for the specific service giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Intellectual Property</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  All content on our website and in our materials, including but not limited to text, graphics, 
                  logos, images, and software, is the property of Super Petroleum and is protected by copyright 
                  and trademark laws. You may not reproduce, distribute, or create derivative works without our 
                  express written permission.
                </p>
              </div>
            </div>

            {/* Website Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Website Use</h2>
              <div className="space-y-3 text-gray-700">
                <p>When using our website, you agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Introduce viruses, malware, or other harmful code</li>
                  <li>Collect or harvest information about other users</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
              </div>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Privacy</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Your use of our services is also governed by our Privacy Policy. Please review our{' '}
                  <Link href="/privacy" className="text-[#FFD10C] hover:underline font-semibold">
                    Privacy Policy
                  </Link>{' '}
                  to understand how we collect, use, and protect your personal information.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFD10C] rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">9. Indemnification</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  You agree to indemnify, defend, and hold harmless Super Petroleum and its officers, directors, 
                  employees, and agents from any claims, damages, losses, liabilities, and expenses (including 
                  reasonable attorney's fees) arising from your use of our services or violation of these Terms.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Modifications to Terms</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting to our website. Your continued use of our services after changes are posted 
                  constitutes your acceptance of the modified Terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Governing Law</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, 
                  without regard to its conflict of law provisions. Any legal action or proceeding arising under these 
                  Terms shall be brought exclusively in the courts located in Cook County, Georgia.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Severability</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
                  shall continue in full force and effect.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#FFD10C]/10 border-l-4 border-[#FFD10C] p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <Mail className="w-6 h-6 text-[#FFD10C] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Super Petroleum</strong></p>
                    <p>1503 West 4th St</p>
                    <p>Adel, GA 31620</p>
                    <p>Phone: <a href="tel:1-800-ROAD-HELP" className="text-[#FFD10C] hover:underline">1-800-ROAD-HELP</a></p>
                    <p>Email: <a href="mailto:superpetroleum2021@gmail.com" className="text-[#FFD10C] hover:underline">superpetroleum2021@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
              <p className="text-gray-700 font-semibold">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms and Conditions.
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link 
                href="/" 
                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

