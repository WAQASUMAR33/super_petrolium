'use client';

import { useState } from 'react';
import { Briefcase, Users, TrendingUp, Award } from 'lucide-react';

export function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    ssn: '',
    previousExperience: '',
    maritalStatus: ''
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('zipCode', formData.zipCode);
      formDataToSend.append('ssn', formData.ssn);
      formDataToSend.append('previousExperience', formData.previousExperience);
      formDataToSend.append('maritalStatus', formData.maritalStatus);

      if (selectedFile) {
        formDataToSend.append('resume', selectedFile);
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            ssn: '',
            previousExperience: '',
            maritalStatus: ''
          });
          setSelectedFile(null);
        }, 5000);
      } else {
        setError(result.message || 'Submission failed. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again or email us at hr@superpetroleums.com');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    // Reset the file input
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD10C] to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-[#FFD10C]/20 px-4 py-2 rounded-full mb-6">
              <p className="text-[#FFD10C] uppercase tracking-wide">Join Our Team</p>
            </div>
            <h1 className="mb-6">Build Your Career With Super Petroleum</h1>
            <p className="text-xl text-gray-300">
              Be part of a growing company that values hard work, dedication, and professional excellence. We're always looking for talented individuals to join our team.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#FFD10C] uppercase tracking-wide">Benefits</p>
            </div>
            <h2 className="mb-4">Why Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD10C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h4 className="mb-2">Competitive Pay</h4>
              <p className="text-gray-600">Industry-leading wages and benefits</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD10C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h4 className="mb-2">Great Team</h4>
              <p className="text-gray-600">Work with supportive colleagues</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD10C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h4 className="mb-2">Career Growth</h4>
              <p className="text-gray-600">Advancement opportunities</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFD10C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h4 className="mb-2">Health Benefits</h4>
              <p className="text-gray-600">Comprehensive insurance packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#FFD10C]/10 px-4 py-2 rounded-full mb-4">
                <p className="text-[#FFD10C] uppercase tracking-wide">Apply Now</p>
              </div>
              <h2 className="mb-4">Employment Application</h2>
              <p className="text-gray-600">Fill out the form below to start your career with Super Petroleum</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-[#FFD10C] p-4 mb-8 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong>Privacy Notice:</strong> Your personal information will be kept confidential and used only for employment purposes. This is a demo form - in production, data would be securely encrypted and transmitted.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-green-800 mb-2">Application Submitted Successfully!</h3>
                <p className="text-green-700">Thank you for your interest. We will review your application and contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block mb-2 text-gray-900 font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block mb-2 text-gray-900 font-semibold">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                    placeholder="Enter your street address"
                  />
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block mb-2 text-gray-900 font-semibold">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block mb-2 text-gray-900 font-semibold">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block mb-2 text-gray-900 font-semibold">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                      placeholder="ZIP"
                    />
                  </div>
                </div>

                {/* Social Security Number */}
                <div>
                  <label htmlFor="ssn" className="block mb-2 text-gray-900 font-semibold">
                    Social Security Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="ssn"
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{3}-?[0-9]{2}-?[0-9]{4}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                    placeholder="XXX-XX-XXXX"
                  />
                  <p className="text-sm text-gray-500 mt-1">Format: XXX-XX-XXXX</p>
                </div>

                {/* Marital Status */}
                <div>
                  <label htmlFor="maritalStatus" className="block mb-2 text-gray-900 font-semibold">
                    Marital Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900"
                  >
                    <option value="">Select marital status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                {/* Previous Experience */}
                <div>
                  <label htmlFor="previousExperience" className="block mb-2 text-gray-900 font-semibold">
                    Previous Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD10C] focus:border-transparent text-gray-900 placeholder:text-gray-600"
                    placeholder="Please describe your previous work experience, including job titles, companies, and dates of employment..."
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block mb-2 text-gray-900 font-semibold">
                    Upload Resume/CV
                  </label>
                  <div className="mt-1">
                    {!selectedFile ? (
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="resume"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                          </div>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-8 h-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{selectedFile.name}</p>
                            <p className="text-xs text-gray-600">
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Optional: Upload your resume to help us better understand your qualifications
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#FFD10C] text-black py-4 rounded-lg font-semibold hover:bg-[#FFD10C]/90 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending Application...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

