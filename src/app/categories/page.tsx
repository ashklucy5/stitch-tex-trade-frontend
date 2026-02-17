'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, productsRes] = await Promise.all([
          fetch('https://stitchtextrading.com/api/categories'),
          fetch('https://stitchtextrading.com/api/products')
        ])

        if (!categoriesRes.ok) throw new Error('Failed to fetch categories')
        if (!productsRes.ok) throw new Error('Failed to fetch products')

        const categoriesData = await categoriesRes.json()
        const productsData = await productsRes.json()

        // Map first product image to each category
        const categoriesWithImages = categoriesData.map((category: any) => {
          const firstProduct = productsData.find((p: any) => p.category_id === category.id)
          return {
            ...category,
            firstProductImage: firstProduct?.image 
              ? `https://stitchtextrading.com//storage/products/${firstProduct.image}` // Update with correct domain
              : null
          }
        })

        setCategories(categoriesWithImages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Loading Categories</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden">
                  <div className="h-40 bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-16 bg-secondary flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-primary-900 mb-2">Error Loading Categories</h2>
          <p className="text-neutral-600 mb-4">{error}</p>
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
    <div className="min-h-screen py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Product Categories
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Discover our premium collection of textile products, carefully curated for quality and style
          </p>
        </div>

        {/* Categories Grid */}
        {categories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-neutral-600">No categories available at the moment</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Product Image */}
                <div className="h-48 bg-neutral-100 overflow-hidden">
                  {category.firstProductImage ? (
                    <img
                      src={category.firstProductImage}
                      alt={`${category.name} collection`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image'
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                      <span className="text-4xl font-bold text-neutral-300">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Category Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-blue transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-3">
                    Premium {category.name.toLowerCase()} collection
                  </p>
                  <span className="text-xs font-medium text-accent-blue">
                    View Products
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
