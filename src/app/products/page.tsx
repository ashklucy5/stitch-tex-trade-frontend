//C:\Users\Administrator\Desktop\app  dev\stitch tex trade\stitch-tex-trade-frontend\src\app\products\page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProductsPage() {
  // Products based on the company profile (pages 9-18)
  const products = [
    {
      id: 1,
      slug: "t-shirts",
      title: "T-Shirts",
      description: "Premium cotton and blended t-shirts for men, women, and children. Available in various styles, fits, and customization options.",
      category: "Casual Wear",
      features: [
        "100% cotton and blends available",
        "Custom prints and designs",
        "Sizes S-XXL",
        "Various necklines and sleeve lengths"
      ],
      image: "/images/tshirts-placeholder.jpg"
    },
    {
      id: 2,
      slug: "polo-shirts",
      title: "Polo Shirts",
      description: "Classic piqué polo shirts with professional finishes. Ideal for corporate wear and casual occasions.",
      category: "Corporate/Casual",
      features: [
        "Premium piqué fabric",
        "Embroidery ready",
        "Multiple color options",
        "Ribbed collars and cuffs"
      ],
      image: "/images/polo-placeholder.jpg"
    },
    {
      id: 3,
      slug: "sweatshirts-pullovers",
      title: "Sweatshirts & Pullovers",
      description: "Comfortable and warm sweatshirts and pullovers for all seasons. Perfect for casual and athletic wear.",
      category: "Activewear/Casual",
      features: [
        "Soft fleece and jersey materials",
        "Customizable designs",
        "Multiple color options",
        "Durable construction"
      ],
      image: "/images/sweatshirts-placeholder.jpg"
    },
    {
      id: 4,
      slug: "trousers",
      title: "Trousers",
      description: "Professional and casual trousers for men and women. Available in various fabrics and fits.",
      category: "Formal/Casual",
      features: [
        "Wool, cotton, and blend options",
        "Tailored and relaxed fits",
        "Multiple length options",
        "Professional finishing"
      ],
      image: "/images/trousers-placeholder.jpg"
    },
    {
      id: 5,
      slug: "shorts",
      title: "Shorts",
      description: "Stylish and comfortable shorts for summer wear. Available in various lengths and styles.",
      category: "Casual/Summer",
      features: [
        "Lightweight fabrics",
        "Multiple length options",
        "Durable stitching",
        "Fashionable designs"
      ],
      image: "/images/shorts-placeholder.jpg"
    },
    {
      id: 6,
      slug: "jackets",
      title: "Jackets",
      description: "Versatile jackets for all seasons. From light windbreakers to heavy winter coats.",
      category: "Outerwear",
      features: [
        "Water-resistant options",
        "Various insulation levels",
        "Customizable branding",
        "Multiple styles available"
      ],
      image: "/images/jackets-placeholder.jpg"
    },
    {
      id: 7,
      slug: "woven-pants",
      title: "Woven Pants",
      description: "Professional woven pants for formal and business casual settings.",
      category: "Formal Wear",
      features: [
        "Premium woven fabrics",
        "Tailored fits",
        "Durable construction",
        "Professional appearance"
      ],
      image: "/images/woven-pants-placeholder.jpg"
    },
    {
      id: 8,
      slug: "shirts",
      title: "Shirts",
      description: "Dress shirts and casual shirts for men and women. Perfect for formal and informal occasions.",
      category: "Formal/Casual",
      features: [
        "Various collar styles",
        "Multiple fabric options",
        "Tailored fits",
        "Professional finishing"
      ],
      image: "/images/shirts-placeholder.jpg"
    },
    {
      id: 9,
      slug: "sweaters",
      title: "Sweaters",
      description: "Cozy and stylish sweaters for colder months. Available in various knits and styles.",
      category: "Winter Wear",
      features: [
        "Premium yarns",
        "Various knitting patterns",
        "Warm and comfortable",
        "Fashionable designs"
      ],
      image: "/images/sweaters-placeholder.jpg"
    },
    {
      id: 10,
      slug: "lingerie-gear",
      title: "Lingerie & Undergarments",
      description: "Comfortable and well-fitted lingerie and undergarments. Focus on comfort and quality.",
      category: "Intimate Apparel",
      features: [
        "Soft, breathable fabrics",
        "Multiple size ranges",
        "Comfortable fits",
        "Quality construction"
      ],
      image: "/images/lingerie-placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Product Collection
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium quality garments crafted with precision and attention to detail. Specializing in T-Shirts, Polo-Shirts, Sweatshirts, Pullover, Trousers, Shorts, Jackets and Casual Wear & Formal Wear for Men, Women & Children.
          </motion.p>
        </div>
      </section>

      {/* Product Categories Intro */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Specialized Product Lines</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We offer comprehensive garment solutions for men, women, and children across multiple categories, 
              ensuring competitive prices, right quality, and maintained lead-times as per buyer requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-64 bg-neutral-100 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                        {product.title.split(' ')[0]}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <span className="text-sm text-accent-blue font-medium">{product.category}</span>
                      <h3 className="text-xl font-bold text-primary-900 mt-2 mb-2 group-hover:text-accent-blue transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 flex-grow">
                        {product.description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex justify-between items-center">
                          <span className="text-accent-gold font-semibold">View Details</span>
                          <svg 
                            className="w-5 h-5 text-accent-blue group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {/* Quick Features Preview */}
                        <div className="mt-3 pt-3 border-t border-neutral-200">
                          <h4 className="text-sm font-medium text-neutral-700 mb-1">Key Features:</h4>
                          <ul className="text-xs text-neutral-600 space-y-1">
                            {product.features.slice(0, 2).map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <svg className="w-3 h-3 text-accent-blue mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-xl max-w-3xl mx-auto text-neutral-300">
              We maintain consistent high standards of business conduct, ethics and social responsibilities. 
              All our affiliated manufacturing units comply with international standards.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent-blue">Competitive Pricing</h3>
                <p>We ensure the best quality product at competitive prices for all our products.</p>
              </div>
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent-blue">Right Quality</h3>
                <p>Rigorous quality control ensures every product meets buyer specifications.</p>
              </div>
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-accent-blue">On-Time Delivery</h3>
                <p>We guarantee shipment before deadlines without compromising quality.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}