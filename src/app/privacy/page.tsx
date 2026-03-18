import { Shield, Lock, Eye, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-[#FFD10C]" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
                At Super Petroleum, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our locations, 
                use our services, or interact with our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFD10C] rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Personal Information</h3>
                  <p className="mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Mailing address and billing information</li>
                    <li>Employment information (for job applications)</li>
                    <li>Fuel card account information</li>
                    <li>Payment card information</li>
                    <li>Vehicle information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Automatically Collected Information</h3>
                  <p className="mb-2">When you visit our website or use our services, we may automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Location data (with your permission)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFD10C] rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process your transactions and provide services</li>
                  <li>Manage your fuel card account</li>
                  <li>Respond to your inquiries and customer service requests</li>
                  <li>Process employment applications</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our services and customer experience</li>
                  <li>Detect and prevent fraud or unauthorized activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Information Sharing and Disclosure</h2>
              <div className="space-y-3 text-gray-700">
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business</li>
                  <li><strong>Payment Processors:</strong> To process your fuel and service purchases</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Security</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Limited access to personal information</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Privacy Rights</h2>
              <div className="space-y-3 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookies and Tracking Technologies</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie settings through your browser preferences. Note that disabling cookies 
                  may affect the functionality of our website.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Children's Privacy</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                  personal information from children. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to This Privacy Policy</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review 
                  this Privacy Policy periodically.
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
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
