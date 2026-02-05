'use client'

import { motion } from 'framer-motion'

export default function PolicyPage() {
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
            Business Policy
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our commitment to quality, transparency, and excellence
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Approach</h2>
            <p className="text-lg text-neutral-600 mb-6">
              STITCH TEX TRADING is a buying house which is proficient in negotiating specific orders with buyers. In these cases, we always strive to ensure that a buyer gets the best quality product at a competitive price.
            </p>
            
            <div className="bg-secondary p-8 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Order Process</h3>
              <ol className="list-decimal pl-6 space-y-3 text-neutral-700">
                <li>After confirming the order, we transfer the order to our affiliate company's manufacturing unit for execution</li>
                <li>We take the necessary steps to execute that particular order after a detailed discussion with the manufacturing unit</li>
                <li>Our main concern is to guarantee the shipment of the order before the expiration of the deadline without compromising the quality of the products</li>
                <li>STITCH TEX TRADING endeavors to execute the order by communicating and leading the manufacturing unit on behalf of the buyer</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Quality Assurance</h2>
            <p className="text-lg text-neutral-600 mb-6">
              It is not always convenient for a buyer to manage the order from a different country. In these circumstances, there is always a chance that the manufacturer might miss the deadline and not be able to maintain the required quality of the product as well. This is where we come in to the picture, if you place the order through us we ensure your safety.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Quality Control Team</h3>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                  <li>Evaluates each and every step from sourcing to shipment</li>
                  <li>Carries out multi-step inspection of the products before shipment</li>
                  <li>Consists of highly experienced Quality Managers and Quality Inspectors</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Manufacturing Standards</h3>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                  <li>Top 30 manufacturing units affiliated with us</li>
                  <li>All factories are compliant with international standards</li>
                  <li>We never execute an order from a non-compliant factory</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Commitment</h2>
            <p className="text-lg text-neutral-600 mb-6">
              We have a skilled team which consists of highly experienced Quality Managers and Quality Inspectors who are not only the best at what they do but also possess technically sound knowledge. There is another major team to organize the QC team. They help in sourcing all the raw materials as well as accelerates the production.
            </p>
            <p className="text-lg text-neutral-600">
              Our QC team maintains and synchronizes a constant channel of communication between the manufacturing unit and the buyer to confirm a smooth progression.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}