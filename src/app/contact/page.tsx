'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  // Company contact information based on the profile
  const companyInfo = {
    address: "Dhaka, Bangladesh",
    phone: "+880 XXXX-XXXXXX",
    email: "info@stitch-tex.com",
    website: "www.stitchtextrading.com"
  };

  const teamMembers = [
    {
      name: "Chairman",
      role: "Chairman",
      email: "chairman@stitch-tex.com",
      phone: "+880 XXXX-XXXXXX",
      department: "Executive"
    },
    {
      name: "Managing Director",
      role: "Managing Director",
      email: "md@stitch-tex.com",
      phone: "+880 XXXX-XXXXXX",
      department: "Operations"
    },
    {
      name: "Director",
      role: "Director",
      email: "director@stitch-tex.com",
      phone: "+880 XXXX-XXXXXX",
      department: "Business Development"
    },
    {
      name: "Sales Team",
      role: "Sales Department",
      email: "sales@stitch-tex.com",
      phone: "+880 XXXX-XXXXXX",
      department: "Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-neutral-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our team to discuss your garment sourcing needs
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">Product Inquiry</option>
                  <option value="quotation">Quotation Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="Tell us about your project, requirements, or inquiry..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-accent-blue focus:ring-accent-blue border-neutral-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-neutral-700">
                  I agree to the <a href="/policy" className="text-accent-blue hover:text-accent-cyan transition-colors">Privacy Policy</a>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-blue text-white py-3 px-6 rounded-lg hover:bg-accent-cyan transition-colors duration-300 font-semibold transform hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Get in Touch</h2>
            
            {/* Company Info Card */}
            <div className="bg-secondary p-6 rounded-lg border border-neutral-200 mb-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Company Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-neutral-700">{companyInfo.address}</span>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-neutral-700">{companyInfo.phone}</span>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-neutral-700">{companyInfo.email}</span>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="text-neutral-700">{companyInfo.website}</span>
                </div>
              </div>
            </div>

            {/* Team Contacts */}
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Team Contacts</h3>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.name}
                    className="bg-white p-4 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-primary-900">{member.name}</h4>
                        <p className="text-sm text-accent-blue">{member.role}</p>
                        <p className="text-xs text-neutral-500">{member.department}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-neutral-700">📧 {member.email}</p>
                        <p className="text-sm text-neutral-700">📞 {member.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-neutral-200">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Monday - Friday</span>
                  <span className="text-neutral-700">9:00 AM - 6:00 PM (BST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Saturday</span>
                  <span className="text-neutral-700">10:00 AM - 2:00 PM (BST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sunday</span>
                  <span className="text-neutral-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}