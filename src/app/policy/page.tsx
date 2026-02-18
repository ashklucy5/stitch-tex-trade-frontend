'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section - Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-1 mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <div className="text-2xl font-bold text-white">S</div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Business Policy
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our commitment to quality, transparency, and excellence
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Concise Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="inline-flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <div className="text-blue-600 font-bold">1</div>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Our Approach</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                STITCH TEX TRADING is a buying house proficient in negotiating specific orders with buyers. We always strive to ensure buyers get the best quality products at competitive prices.
              </p>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Order Process</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Confirm order and transfer to our manufacturing unit</li>
                  <li>Detailed discussion with manufacturing unit</li>
                  <li>Guarantee shipment before deadline without compromising quality</li>
                  <li>Execute order by communicating with manufacturing unit</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="inline-flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <div className="text-blue-600 font-bold">2</div>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quality Assurance</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We ensure quality and safety through our multi-step inspection process. Our skilled Quality Control team evaluates each step from sourcing to shipment.
              </p>
              
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-1">QC Team</h3>
                  <p className="text-gray-700 text-sm">Highly experienced managers and inspectors</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-1">Manufacturing</h3>
                  <p className="text-gray-700 text-sm">Top 30 compliant manufacturing units</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="inline-flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <div className="text-blue-600 font-bold">3</div>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Our Commitment</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  We have a skilled team of experienced Quality Managers and Inspectors who ensure the best quality standards. Our QC team maintains constant communication between manufacturing units and buyers to confirm smooth progression.
                </p>
              </div>
              
              <div className="mt-5 p-4 bg-white rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">We never execute orders from non-compliant factories</p>
                </div>
                <div className="flex items-start mt-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Our policy to never execute from non-compliant factories</p>
                </div>
                <div className="flex items-start mt-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">We extend our service to build long-term professional relationships</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="inline-flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <div className="text-blue-600 font-bold">4</div>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Our Promise</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">
                  "Try us once, even with a small test order, and we will prove ourselves with the quality you desire."
                </p>
                <p className="text-gray-600 text-sm mt-2">- Stitch Tex Trading Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-1 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <div className="text-2xl font-bold text-white">S</div>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Ready to Build a Long-Term Partnership?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6">
            Join the growing list of satisfied global partners who trust Stitch Tex Trading for quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}