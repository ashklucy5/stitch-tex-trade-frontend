// app/catalog/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AllProductsCatalog() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await fetch('https://api.stitchtextrading.com/api/products')
        
        if (!productsRes.ok) throw new Error(`Products API error: ${productsRes.status}`)
        
        const productsData = await productsRes.json()
        
        // Sort by category then by ID for logical catalog flow
        const sortedProducts = [...productsData].sort((a, b) => {
          if (a.category_id === b.category_id) return a.id - b.id
          return a.category_id - b.category_id
        })
        
        setProducts(sortedProducts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Bubble background with gentle animation
  const BubbleBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/40 animate-float"
            style={{
              width: `${Math.random() * 120 + 30}px`,
              height: `${Math.random() * 120 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 40 + 30}s`,
              animationDelay: `${Math.random() * 10}s`,
              filter: 'blur(10px)'
            }}
          />
        ))}
      </div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.03) 0%, rgba(99, 102, 241, 0) 25%), radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.03) 0%, rgba(59, 130, 246, 0) 25%)`
        }}
      />
    </div>
  )

  // Elegant skeleton loader
  const SkeletonCard = () => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 animate-pulse">
      <div className="aspect-square bg-gray-100/50"></div>
      <div className="p-4">
        <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen py-16">
        <BubbleBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="h-10 bg-white/30 rounded-full w-1/4 mx-auto mb-6 animate-pulse"></div>
            <div className="h-12 bg-white/30 rounded-full w-1/2 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(16)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <BubbleBackground />
        <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-100">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Catalog</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Catalog.
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 relative overflow-x-hidden">
      <BubbleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan mb-8 mx-auto shadow-lg">
            <span className="text-4xl font-bold text-white">S</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
            Premium Textile Catalog
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our meticulously curated collection of premium textile products. 
            Each piece represents exceptional craftsmanship and quality manufacturing.
          </p>
          
          <div className="mt-10 inline-flex items-center justify-center bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 text-accent-blue font-bold px-6 py-3 rounded-full text-lg shadow-md">
            <span className="mr-3">✨</span>
            <span>{products.length} Exquisite Products</span>
          </div>
        </div>

        {/* Products Grid - Generous Spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/60 hover:border-accent-blue/30 transition-all duration-400 shadow-md hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 overflow-hidden relative">
                {product.image ? (
                  <img
                    src={`product.image_url}`}
                    alt={`Product ${index + 1} - ${product.category?.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjYzhjOGM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4='
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-6xl font-bold text-gray-300">
                      {product.category?.name?.charAt(0) || '?'}
                    </span>
                  </div>
                )}
                
                {/* Product Number Badge - Elegant */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center border border-gray-200 shadow-md">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent-blue to-accent-cyan">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Category Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                    <span className="inline-block bg-white/90 text-gray-900 text-lg font-bold px-5 py-2 rounded-xl backdrop-blur-sm shadow-lg">
                      {product.category?.name}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Product Info - Minimal & Elegant */}
              <div className="p-6 text-center border-t border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 mb-4 mx-auto">
                  <span className="text-accent-blue font-bold text-lg">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.category?.name}
                </h3>
                <div className="mt-3">
                  <span className="inline-block bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    Premium Collection
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Footer - Elegant Summary */}
        <div className="mt-24 text-center max-w-4xl mx-auto relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-cyan/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-indigo-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan to-cyan-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                StitchText Trading Collection
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our catalog showcases premium textile products crafted with exceptional attention to detail. 
                Each item represents the finest quality in garment manufacturing, designed for global buyers 
                seeking excellence in textile sourcing.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan mb-2"></div>
                  <span className="font-bold text-gray-900 text-xl">{products.length}</span>
                  <span className="text-gray-500 mt-1">Products</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-2"></div>
                  <span className="font-bold text-gray-900 text-xl">10</span>
                  <span className="text-gray-500 mt-1">Categories</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mb-2"></div>
                  <span className="font-bold text-gray-900 text-xl">Premium</span>
                  <span className="text-gray-500 mt-1">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Categories CTA */}
        <div className="mt-16 text-center relative z-10">
          <Link
            href="/categories"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Explore Category Collections</span>
          </Link>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
    </div>
  )
}
