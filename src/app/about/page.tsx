'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Fully Responsive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Beautiful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/bg.png")', // Specify your PNG image path here
            filter: 'blur(30px)', // Apply blur to the background image
          }}
        ></div>

        <div 
          className="absolute inset-0 bg-white opacity-50" 
        ></div>
        {/* Decorative elements - pure CSS */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl"></div>
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-1 mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
              <img 
                src="/logo.png" // Provide your image source here
                alt="Logo"
                className="w-16 h-16 object-contain" // Adjust size based on your image
              />
            </div>
          </div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Stitch Tex Trading
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl mb-8 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Connecting global buyers with quality manufacturers in Bangladesh
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Company Introduction - Fully Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Decorative Brand Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-white border border-gray-100 shadow-xl flex items-center justify-center overflow-hidden">
                {/* Elegant circular frame */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
                
                {/* Central brand emblem */}
                <div className="relative z-10 text-center p-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
  <img 
    src="/logo.png" 
    alt="Stitch Tex Logo" 
    className="w-16 h-16 sm:w-20 sm:h-20 object-contain transform hover:scale-110 transition-transform duration-300" 
  />
</div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-2">
                    COMPANY PROFILE
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-gray-700 mt-1">
                    Every stitch tells a story
                  </p>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-100 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-100 rounded-full opacity-50"></div>
              </div>
            </motion.div>
            
            {/* Company Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Subtle decorative border */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-6">
                    <div className="text-blue-600 text-2xl font-bold">S</div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">STITCH TEX TRADING</span>
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 leading-relaxed mb-5">
                      We would like to introduce ourselves: "STITCH TEX TRADING," as Buying House which is 100% export oriented garment trading Company Set-up located in Dhaka, Bangladesh. We are specialized in T-shirts, Polo-Shirts, Sweatshirts, Pullover, Trousers, Shirts, Jackets and Casual Wear & Formal Wear for Men, Women & Children and offer these products to our customers in GERMANY, SPAIN, ITALY, UK, USA, CANADA & AUSTRALIA with in Competitive Price, Right Quality and maintain Lead-time as per buyer's requirements.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed mb-5">
                      We are entitled to maintain a consistent high standard of business conduct, ethics and social responsibilities. We take pride in the efficiency of what we do and always try to adopt the most effective and latest technology available. We also have numbers of good Factories associated with us and we do all sorts of Woven and Knit Outer. We have our own QA and Merchandising team with a nice set up and our existing Buyers are happy with our performance.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed font-medium">
                      We strive to serve our valued buyers by working with the best manufactures of the Industry who are able to offer their best prices in the market. All we can say is, "Try us once, even with a small test order, and we will prove ourselves with the quality you desire."
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                    <div className="inline-block">
                      <div className="text-lg font-bold text-gray-900">Stitch Tex Trading</div>
                      <div className="text-blue-600 font-medium">Your Trusted Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission - Fully Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Subtle decorative border */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-6">
                    <div className="text-blue-600 text-2xl font-bold">M</div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Mission</span>
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 leading-relaxed mb-5">
                      STITCH TEX TRADING - where we take pride in being the go-between that global apparel buyers trust to get them connected with the best garment makers in Bangladesh. We don't just link buyers and suppliers, we manage the whole process for them - that is, from an idea for a product first sees the light of day, through production, making sure that every item meets the high standards that importers expect, and getting it delivered on time.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed mb-5">
                      At Stitch Tex Trading, we think that the secret to our long-term success has to be making sure that our buyers are happy. That's what drives us to be upfront and clear about what we do, what we can do better, and we're always pushing the boundaries of what we do - whether that's staying on top of the latest fashion trends, or spotting which markets are set to be the next big thing. The result is we can offer not just cost-effective solutions, but ones that are genuinely innovative.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed mb-5">
                      Doing business with us isn't just about getting a good deal - it's about all the knowledge we can offer, expanding who we trade with and strengthening our relationships in the Industry, we're hoping we can play some small part in Bangladesh's economic growth and help put the country firmly on the map as a major player in the global fashion world.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed font-medium">
                      Our success is not just what we achieve, but what we achieve together - with the buyers we serve, the suppliers we work with, and the nation we proudly call home.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                    <div className="inline-block">
                      <div className="text-lg font-bold text-gray-900">Stitch Tex Trading</div>
                      <div className="text-blue-600 font-medium">Your Trusted Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Mission Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-64 sm:h-80 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                      <div className="text-3xl font-bold text-blue-600">M</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">OUR MISSION</h3>
                    <p className="text-gray-700">Every stitch tells a story</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision - Fully Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Vision Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-64 sm:h-80 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                      <div className="text-3xl font-bold text-blue-600">V</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">OUR VISION</h3>
                    <p className="text-gray-700">Every stitch tells a story</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Subtle decorative border */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-6">
                    <div className="text-blue-600 text-2xl font-bold">V</div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Vision</span>
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 leading-relaxed mb-5">
                      Our vision is to become the go to global apparel sourcing partner, respected for our dedication to quality, transparency, innovation and doing business the right way. We want to be able to build strong long-term relationships with international buyers by providing them with reliable, one-stop-shop sourcing solutions that keep up with the fast-paced world of fashion. We picture a future where our clients don't just see us as a supplier, but as trusted partners that really understand what makes their brand tick, their values and what they're looking for in a sourcing partner. As we grow, we're committed not just to growing as a business, but also to helping the Bangladesh apparel industry become a more sustainable place by promoting responsible manufacturing practices and making sure workers are treated fairly. We're also committed to being good for the planet. By doing what we do we hope to not only improve Bangladesh's reputation on the global stage, but also make a real contribution to the country's economy by helping drive exports and increase GDP. We see ourselves as more than just a buying house – we're a force for good in the industry and beyond.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                    <div className="inline-block">
                      <div className="text-lg font-bold text-gray-900">Stitch Tex Trading</div>
                      <div className="text-blue-600 font-medium">Your Trusted Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Fully Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              The principles that guide our business and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Quality First",
                description: "We maintain the highest quality standards in all our products and processes",
                icon: "Q"
              },
              {
                title: "Transparency",
                description: "Open communication and honest business practices with all partners",
                icon: "T"
              },
              {
                title: "Innovation",
                description: "Continuously improving and adapting to industry changes and trends",
                icon: "I"
              },
              {
                title: "Sustainability",
                description: "Responsible manufacturing practices that benefit people and planet",
                icon: "S"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-3">
                  <div className="text-white text-xl font-bold">{value.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Fully Responsive */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Ready to Build a Long-Term Partnership?
          </h2>
          <p className="text-base text-blue-50 max-w-2xl mx-auto mb-6">
            Join the growing list of satisfied global partners who trust Stitch Tex Trading for quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}