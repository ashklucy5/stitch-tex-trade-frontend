'use client'

import { motion } from 'framer-motion'
import { aboutData } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-neutral-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-heading-1 font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Stitch Tex Trading
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connecting global buyers with quality manufacturers in Bangladesh
          </motion.p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Mission</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {aboutData.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {aboutData.values.map((value, index) => (
              <div 
                key={value}
                className="text-center p-6 bg-secondary rounded-lg border border-neutral-200"
              >
                <h3 className="text-xl font-semibold text-accent-blue mb-2">{value}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-primary-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-2">{leader.name}</h3>
                <p className="text-accent-blue mb-4">{leader.role}</p>
                <p className="text-neutral-600 italic">"{leader.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}