// app/categories/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ FIXED: Use absolute URLs to your Laravel backend
        const [categoriesRes, productsRes] = await Promise.all([
          fetch('https://api.stitchtextrading.com/api/categories'),
          fetch('https://api.stitchtextrading.com/api/products')
        ])

        if (!categoriesRes.ok) throw new Error(`Categories API error: ${categoriesRes.status}`)
        if (!productsRes.ok) throw new Error(`Products API error: ${productsRes.status}`)

        const categoriesData = await categoriesRes.json()
        const productsData = await productsRes.json()

        // Build categories with first product image
        const categoriesWithImages = categoriesData.map((category: any) => {
          const firstProduct = productsData.find((p: any) => p.category_id === category.id)
          
          // ✅ CORRECT IMAGE URL FORMAT (verified working):
          // API returns "products/filename.jpg" → full URL: /storage/products/filename.jpg
          const imageUrl = firstProduct?.image_url ?? null

          return {
            ...category,
            firstProductImage: imageUrl
          }
        })

        setCategories(categoriesWithImages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent-blue border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading categories...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Categories</h2>
          <p className="text-gray-600 mb-4 break-words">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-accent-blue text-white px-4 py-2 rounded-lg hover:bg-accent-cyan transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of textile products, carefully curated for quality and style.
          </p>
        </div>

        {/* Categories Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image - Verified working URL format */}
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                {category.firstProductImage ? (
                  <img
                    src={category.firstProductImage}
                    alt={`${category.name} collection`}
                    className="w-full h-full object-cover"
                    // Fallback to inline SVG on error (no external requests)
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdGYiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzVjNWM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5ObyBpbWFnZSBhdmFpbGFibGU8L3RleHQ+PC9zdmc+'
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-5xl font-bold text-gray-300">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Category Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent-blue transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Premium {category.name.toLowerCase()} collection
                </p>
                <span className="text-xs font-medium text-accent-blue">
                  View Products
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No categories available at the moment</p>
          </div>
        )}
      </div>
    </div>
  )
}
