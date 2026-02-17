// app/category/[id]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function CategoryDetailPage() {
  const params = useParams()
  const categoryId = params?.id as string
  const [products, setProducts] = useState<any[]>([])
  const [categoryName, setCategoryName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all products (only 1 API call needed)
        const productsRes = await fetch('https://stitchtextrading.com/api/products')
        
        if (!productsRes.ok) throw new Error(`Products API error: ${productsRes.status}`)
        
        const productsData = await productsRes.json()
        
        // Filter products by category_id
        const filteredProducts = productsData.filter(
          (product: any) => product.category_id === Number(categoryId)
        )

        if (filteredProducts.length === 0) {
          throw new Error('No products found for this category')
        }

        // Get category name from first product's embedded category object
        setCategoryName(filteredProducts[0].category?.name || 'Products')
        setProducts(filteredProducts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (categoryId) {
      fetchData()
    }
  }, [categoryId])

  // Bubble background component
  const BubbleBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
      
      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 animate-float"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM11 81c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM11 49c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM11 65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm27 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z' fill='%2393c5fd' fill-opacity='0.1' fill-width='1'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )

  // Skeleton loader
  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 animate-pulse">
      <div className="h-64 bg-gray-100"></div>
      <div className="p-4">
        <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <BubbleBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <BubbleBackground />
        <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-6 text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Products</h2>
          <p className="text-gray-600 mb-4 break-words">{error}</p>
          <Link 
            href="/categories"
            className="bg-accent-blue text-white px-4 py-2 rounded-lg hover:bg-accent-cyan transition-colors inline-block"
          >
            ← Back to Categories
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 relative">
      <BubbleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto relative z-10">
          <Link 
            href="/categories" 
            className="inline-flex items-center text-accent-blue hover:text-accent-cyan font-medium transition-colors mb-4 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Categories
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {categoryName}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of {categoryName.toLowerCase()} – crafted with quality and attention to detail.
          </p>
          
          <div className="mt-6 inline-block bg-accent-blue/10 text-accent-blue font-medium px-4 py-1.5 rounded-full">
            {products.length} Products
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent-blue/30 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                {product.image ? (
                  <img
                    src={`https://stitchtextrading.com/storage/${product.image}`}
                    alt={`${categoryName} product ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjYzhjOGM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5ObyBpbWFnZTwvdGV4dD48L3N2Zz4='
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-5xl font-bold text-gray-300">
                      {categoryName.charAt(0)}
                    </span>
                  </div>
                )}
                
                {/* Product Number Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-gray-200">
                    <span className="text-sm font-bold text-accent-blue">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                    <span className="inline-block bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {categoryName}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent-blue transition-colors mb-1">
                  {categoryName}
                </h3>
                <div className="mt-2">
                  <span className="inline-block bg-accent-blue text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {categoryName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Categories Button */}
        <div className="mt-12 text-center relative z-10">
          <Link
            href="/categories"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Browse All Categories
          </Link>
        </div>
      </div>
    </div>
  )
}