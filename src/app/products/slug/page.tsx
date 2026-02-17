//C:\Users\Administrator\Desktop\app  dev\stitch tex trade\stitch-tex-trade-frontend\src\app\products\slug\page.tsx
'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ProductDetailPage() {
  const { slug } = useParams()
  
  // Updated product data based on company profile
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
        "Various necklines and sleeve lengths",
        "OEKO-TEX certified materials"
      ],
      image: "/images/tshirts-placeholder.jpg",
      specs: {
        "Materials": "Cotton, Polyester blends",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "Over 20 standard colors",
        "MOQ": "500 pieces"
      }
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
        "Ribbed collars and cuffs",
        "Reinforced seams"
      ],
      image: "/images/polo-placeholder.jpg",
      specs: {
        "Fabric": "Piqué cotton",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "Solid and striped options",
        "MOQ": "300 pieces"
      }
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
        "Durable construction",
        "Fashionable fits"
      ],
      image: "/images/sweatshirts-placeholder.jpg",
      specs: {
        "Materials": "Fleece, French Terry",
        "Sizes": "XS, S, M, L, XL, XXL",
        "Colors": "Over 15 options",
        "MOQ": "400 pieces"
      }
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
        "Professional finishing",
        "Quality zippers and buttons"
      ],
      image: "/images/trousers-placeholder.jpg",
      specs: {
        "Materials": "Wool, Cotton, Blends",
        "Sizes": "UK 24-42 / US 28-46",
        "Colors": "Solid and patterned",
        "MOQ": "200 pieces"
      }
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
        "Fashionable designs",
        "Breathable materials"
      ],
      image: "/images/shorts-placeholder.jpg",
      specs: {
        "Materials": "Cotton, Linen, Blends",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "Seasonal collections",
        "MOQ": "300 pieces"
      }
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
        "Multiple styles available",
        "Professional tailoring"
      ],
      image: "/images/jackets-placeholder.jpg",
      specs: {
        "Materials": "Polyester, Nylon, Wool",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "Custom options",
        "MOQ": "250 pieces"
      }
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
        "Professional appearance",
        "Easy-care fabrics"
      ],
      image: "/images/woven-pants-placeholder.jpg",
      specs: {
        "Materials": "Wool, Cotton, Polyester",
        "Sizes": "UK 24-42 / US 28-46",
        "Colors": "Corporate colors",
        "MOQ": "200 pieces"
      }
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
        "Professional finishing",
        "Button-down options"
      ],
      image: "/images/shirts-placeholder.jpg",
      specs: {
        "Materials": "Cotton, Cotton blends",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "White, Blue, Patterns",
        "MOQ": "300 pieces"
      }
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
        "Fashionable designs",
        "Easy care instructions"
      ],
      image: "/images/sweaters-placeholder.jpg",
      specs: {
        "Materials": "Wool, Acrylic, Cotton",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "Seasonal palettes",
        "MOQ": "250 pieces"
      }
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
        "Quality construction",
        "Skin-friendly materials"
      ],
      image: "/images/lingerie-placeholder.jpg",
      specs: {
        "Materials": "Cotton, Modal, Lace",
        "Sizes": "XS, S, M, L, XL",
        "Colors": "Nude, White, Black",
        "MOQ": "500 pieces"
      }
    }
  ];
  
  // Find product by slug
  const product = products.find(p => p.slug === slug)
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-900 mb-4">Product Not Found</h1>
          <p className="text-neutral-600">The requested product could not be found.</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-4 bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-accent-cyan transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-white hover:text-accent-gold">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <a href="/products" className="ml-1 text-white hover:text-accent-gold md:ml-2">Products</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-white md:ml-2">{product.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-100 rounded-xl p-8 flex items-center justify-center h-96"
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center text-gray-500">
              {product.title} Image
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-sm text-accent-blue font-medium">{product.category}</span>
            <h1 className="text-4xl font-bold text-primary-900 mt-2 mb-4">{product.title}</h1>
            <p className="text-lg text-neutral-600 mb-6">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-neutral-700">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Specifications:</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="border-b border-neutral-200 pb-2">
                    <span className="font-medium text-neutral-700">{key}:</span>
                    <span className="text-neutral-600 ml-2">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-accent-cyan transition-colors duration-300 font-semibold">
                Request Quote
              </button>
              <button className="border-2 border-accent-blue text-accent-blue px-8 py-3 rounded-lg hover:bg-accent-blue hover:text-white transition-colors duration-300 font-semibold">
                Download Spec Sheet
              </button>
              <button className="border-2 border-primary-900 text-primary-900 px-8 py-3 rounded-lg hover:bg-primary-900 hover:text-white transition-colors duration-300 font-semibold">
                Sample Request
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Quality Standards</h3>
            <p className="text-neutral-600">All our products meet international quality standards with rigorous testing at every stage of production.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-secondary p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Lead Time</h3>
            <p className="text-neutral-600">We guarantee on-time delivery with flexible lead times tailored to your specific requirements.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Global Reach</h3>
            <p className="text-neutral-600">Shipping to Germany, Spain, Italy, UK, USA, Canada & Australia with full logistics support.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}