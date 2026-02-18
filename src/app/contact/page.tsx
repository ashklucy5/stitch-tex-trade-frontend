// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false,
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Company contact information
  const companyInfo = {
    address: "Dhaka, Bangladesh",
    phone: "+8801713 271735, +8801611 723485", // Chairman's phone number
    email: "info@stitchtextrading.com",
    website: "www.stitchtextrading.com"
  };

  const teamMembers = [
    {
      name: "Md Rafiul Islam",
      role: "Chairman",
      email: "rafiul@stitchtextrading.com",
      phone: "+8801713 271735, +8801611 723485",
      department: "Costing & Merchandising"
    },
    {
      name: "Md Kabir Hossain",
      role: "Managing Director",
      email: "kabir@stitchtextrading.com",
      phone: "+8801711 657285, +8801751 900025",
      department: "Merchandising & Production"
    },
    {
      name: "Muhammad Toufiqu Saleheen",
      role: "Director",
      email: "toufiq@stitchtextrading.com",
      phone: "+8801730 325889",
      department: "Commercial & Accounts"
    },
    {
      name: "Sales Team",
      role: "Sales Department",
      email: "sales@stitchtextrading.com",
      phone: "+8801730 325889",
      department: "Sales"
    }
  ];

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Form validation
  const validateForm = () => {
    if (!formData.first_name.trim()) {
      setError('First name is required')
      return false
    }
    if (!formData.last_name.trim()) {
      setError('Last name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      setError('Subject is required')
      return false
    }
    if (!formData.message.trim()) {
      setError('Message is required')
      return false
    }
    if (!formData.terms) {
      setError('You must agree to the Privacy Policy')
      return false
    }
    return true
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset previous messages
    setError(null)
    setSuccess(false)
    
    // Validate form
    if (!validateForm()) return
    
    setSubmitting(true)
    
    try {
      const response = await fetch('https://stitchtextrading.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      })
      
      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`)
      }
      
      // Success!
      setSuccess(true)
      setError(null)
      
      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        terms: false,
      })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
      console.error('Submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Responsive */}
      <section className="bg-gradient-to-r from-primary-900 to-neutral-800 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our team to discuss your garment sourcing needs
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Responsive Grid: 1 column on mobile, 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Send us a message
              </h2>
              
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully! We'll get back to you shortly.</span>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="+880 XXXX-XXXXXX"
                  />
                </div>
                
                {/* Subject as text box */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="Tell us about your project, requirements, or inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="h-5 w-5 text-accent-blue focus:ring-accent-blue border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                    I agree to the <a href="/privacy-policy" className="text-accent-blue hover:text-accent-cyan transition-colors font-medium">Privacy Policy</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white py-3 px-6 rounded-xl font-semibold transform transition-all duration-300 ${
                    submitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:opacity-90 hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Company Information - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Get in Touch
              </h2>
              
              {/* Company Info Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-100 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Company Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{companyInfo.address}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">{companyInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">{companyInfo.email}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                    <span className="text-gray-700">{companyInfo.website}</span>
                  </div>
                </div>
              </div>

              {/* Team Contacts */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Team Contacts
                </h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div 
                      key={member.name}
                      className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-accent-blue/30"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="mb-3 sm:mb-0">
                          <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
                          <p className="text-sm text-accent-blue font-medium mt-1">{member.role}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{member.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-700 flex items-center justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-blue mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
: 
                            </svg>
                            {member.email}
                          </p>
                          <p className="text-sm text-gray-700 flex items-center justify-end mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-blue mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
: 
                            </svg>
: {member.phone}
    </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 bg-white p-5 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-700 font-medium">9:00 AM - 6:00 PM (BST)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-700 font-medium">10:00 AM - 2:00 PM (BST)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Map Section - Full width on all devices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-48 sm:h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-blue mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700">Our Location</h3>
              <p className="text-gray-500 mt-1">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}