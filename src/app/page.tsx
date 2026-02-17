// app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden flex-1">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-900 to-accent-blue opacity-20"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover Timeless Elegance
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 text-neutral-300 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Quality products crafted for the modern individual. Experience luxury and sophistication in every detail.
          </motion.p>
          
          <motion.div 
            className="space-x-3 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/products" 
              className="inline-block bg-accent-blue text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-accent-cyan transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
            >
              Explore Collection
            </Link>
            <Link 
              href="/contact" 
              className="inline-block border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 text-base md:text-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3 md:mb-4">Our Mission</h2>
            <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto px-4">
              To provide a reliable bridge between global buyers and manufacturers, ensuring timely and quality delivery.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}