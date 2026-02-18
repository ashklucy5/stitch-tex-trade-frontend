// app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section - Clean Gradient Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Background - Pure CSS Gradient (No SVG) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50"></div>
        
        {/* Decorative Elements - Pure CSS (No SVG) */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-indigo-200/20 rounded-full blur-2xl"></div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-2 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
          </div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Every Stitch Tells a Story
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Quality products crafted for the modern individual. Experience luxury and sophistication in every detail.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/products" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              Explore Collection
            </Link>
            <Link 
              href="/contact" 
              className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 text-base md:text-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Profile Section - Clean Gradient */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Brand Element - Pure CSS (No SVG) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-100 shadow-xl flex items-center justify-center overflow-hidden">
                {/* Subtle pattern using CSS gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_40%)]"></div>
                
                {/* Central brand emblem */}
                <div className="relative z-10 text-center p-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-white text-3xl sm:text-4xl font-bold tracking-tight">S</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-1">
                    COMPANY PROFILE
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-gray-700 mt-1">
                    Every stitch tells a story
                  </p>
                </div>
                
                {/* Decorative corner accents - Pure CSS */}
                <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-14 h-14 sm:w-16 sm:h-16 bg-cyan-100 rounded-full opacity-60"></div>
              </div>
            </motion.div>
            
            {/* Company Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Subtle decorative border */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl opacity-40"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 mb-5 sm:mb-6">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600 mr-1"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600 mr-1"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
                    Warm Greetings from <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">STITCH TEX TRADING</span>
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-5">
                    <p className="text-gray-800 leading-relaxed">
                      In a world where everything is constantly evolving, fashion is no exception. At STITCH TEX TRADING, we stay aligned with the ever-changing trends of global fashion to meet our buyers' dynamic needs.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed">
                      We specialize in supplying all types of ready-made garments based on buyer requirements—ensuring top quality at the most competitive prices. Every order we receive is a responsibility we take seriously, from production to on-time delivery.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed">
                      We believe success lies in delivering the right product, at the right time, with the right quality. That is our commitment.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed font-medium">
                      We warmly welcome you to experience the professionalism and reliability of STITCH TEX TRADING.
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-gray-100 text-right">
                    <div className="inline-block">
                      <div className="text-base sm:text-lg font-bold text-gray-900">Md. Rafiul Islam</div>
                      <div className="text-blue-600 font-medium text-sm sm:text-base">Chairman & CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section - Fully Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Our Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Insights from our experienced leadership team who guide our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Chairman's Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">C</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">CHAIRMAN'S MESSAGE</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Warm Greetings from STITCH TEX TRADING
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p className="text-gray-700 leading-relaxed">
                  In a world where everything is constantly evolving, fashion is no exception. At STITCH TEX TRADING, we stay aligned with the ever-changing trends of global fashion to meet our buyers' dynamic needs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in supplying all types of ready-made garments based on buyer requirements—ensuring top quality at the most competitive prices. Every order we receive is a responsibility we take seriously, from production to on-time delivery.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe success lies in delivering the right product, at the right time, with the right quality. That is our commitment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We warmly welcome you to experience the professionalism and reliability of STITCH TEX TRADING.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 text-right">
                <span className="font-bold text-gray-900 text-sm sm:text-base">- Md. Rafiul Islam</span>
              </div>
            </motion.div>
            
            {/* Managing Director's Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">MD</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">MANAGING DIRECTOR'S MESSAGE</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  I have had the privilege of serving as the Managing Director of STITCH TEX TRADING since 2008. Over the years, Bangladesh has emerged as a key player in the global apparel industry, and we are proud to contribute to that growth.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p className="text-gray-700 leading-relaxed">
                  At STITCH TEX TRADING, our priority is to meet and exceed the expectations of our global buyers. Their satisfaction is our greatest reward. We are committed to delivering high-quality garments, on-time production, and professional service—always respecting the trust placed in us.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  It is my firm belief that consistent buyer satisfaction builds lasting partnerships. That is our promise.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 text-right">
                <span className="font-bold text-gray-900 text-sm sm:text-base">- Md Kabir Hossain</span>
              </div>
            </motion.div>
            
            {/* Director's Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">D</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">DIRECTOR'S MESSAGE</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Since 2008, I have proudly led STITCH TEX TRADING with a clear mission: to deliver quality, reliability, and complete satisfaction to our global partners. As Bangladesh continues to rise as a powerhouse in the world clothing industry, we stand committed to excellence in every stitch we produce.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p className="text-gray-700 leading-relaxed">
                  Our buyers are not just clients—they are our partners. Their trust drives our performance, and their satisfaction defines our success. We listen, we adapt, and we always go the extra mile to meet and exceed expectations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At STITCH TEX TRADING, we don't just make garments—we build lasting relationships through integrity, quality, and dedication.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 text-right">
                <span className="font-bold text-gray-900 text-sm sm:text-base">- Muhammad Toufiq Saleheen</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Discover what makes us the preferred partner for global buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Quality Assurance",
                description: "Rigorous quality control processes to ensure every product meets international standards",
                color: "from-blue-600 to-cyan-500"
              },
              {
                title: "Timely Delivery",
                description: "Reliable production schedules and on-time delivery for every order",
                color: "from-blue-600 to-cyan-500"
              },
              {
                title: "Competitive Pricing",
                description: "Cost-effective solutions without compromising on quality",
                color: "from-blue-600 to-cyan-500"
              },
              {
                title: "Global Experience",
                description: "Proven track record serving international clients across multiple continents",
                color: "from-blue-600 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mx-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Elevate Your Textile Experience?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join the growing list of satisfied global partners who trust STITCH TEX TRADING for quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link 
                href="/products" 
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
              >
                Explore Our Products
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-blue-600 text-blue-600 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Fully Responsive */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                  <span className="text-blue-400 font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl sm:text-2xl">STITCH TEX TRADING</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Quality products crafted for the modern individual. Experience luxury and sophistication in every detail.
              </p>
              <div className="flex space-x-4">
                {[1,2,3].map((i) => (
                  <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-xs">{i}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">T-Shirts</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Denim</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Jackets</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Polo Shirts</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">+8801713 271735, +8801611 723485</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">info@stitchtextrading.com</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} STITCH TEX TRADING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}