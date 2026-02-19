// components/ui/Header.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Refs for dropdown and trigger
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLLIElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Fetch categories from Laravel API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // ⚠️ CRITICAL FIX: Removed trailing spaces from URL
        const response = await fetch('https://api.stitchtextrading.com/api/categories')
        if (!response.ok) throw new Error('Failed to fetch categories')
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('Error fetching categories:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  // Handle dropdown visibility with proper delay and persistence
  useEffect(() => {
    const handleMouseEnter = () => {
      // Clear any pending close timers
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsDropdownOpen(true)
    }

    const handleMouseLeave = () => {
      // Set a timer to close after delay (allows cursor movement)
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false)
      }, 300) // 300ms delay - Apple uses ~200-300ms
    }

    // Add event listeners to both trigger and dropdown
    const triggerElement = triggerRef.current
    const dropdownElement = dropdownRef.current

    if (triggerElement) {
      triggerElement.addEventListener('mouseenter', handleMouseEnter)
      triggerElement.addEventListener('mouseleave', handleMouseLeave)
    }

    if (dropdownElement) {
      dropdownElement.addEventListener('mouseenter', handleMouseEnter)
      dropdownElement.addEventListener('mouseleave', handleMouseLeave)
    }

    // Cleanup
    return () => {
      if (triggerElement) {
        triggerElement.removeEventListener('mouseenter', handleMouseEnter)
        triggerElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (dropdownElement) {
        dropdownElement.removeEventListener('mouseenter', handleMouseEnter)
        dropdownElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo - Elegant cursive gradient */}
            <Link href="/" className="flex items-center">
              <span 
                className="text-3xl md:text-5xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 tracking-tight"
                style={{ 
                  fontFamily: "'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                StitchTex
              </span>
              <span 
                className="ml-1.5 text-2xl md:text-3xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 tracking-tight"
                style={{ 
                  fontFamily: "'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Trading
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {/* Home */}
                <li>
                  <Link 
                    href="/" 
                    className="font-medium text-gray-900 hover:text-blue-600 transition-colors relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </li>
                
                {/* Categories - Persistent Hover Dropdown */}
                <li 
                  ref={triggerRef}
                  className="relative group"
                >
                  <Link 
                    href="/categories" 
                    className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Categories
                  </Link>
                  
                  {/* Multi-column Dropdown (Apple-style) */}
                  {isDropdownOpen && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-[320px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
                    >
                      {/* Dropdown Header */}
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900">Explore Categories</h3>
                      </div>
                      
                      {/* Dropdown Content - Grid Layout */}
                      <div className="grid grid-cols-2 gap-4 p-4">
                        {loading ? (
                          Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="h-10 bg-gray-100 rounded animate-pulse"></div>
                          ))
                        ) : error ? (
                          <div className="col-span-2 py-4 text-center text-red-500 text-sm">
                            Failed to load categories
                          </div>
                        ) : categories.length === 0 ? (
                          <div className="col-span-2 py-4 text-center text-gray-500 text-sm">
                            No categories available
                          </div>
                        ) : (
                          categories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/category/${category.id}`}
                              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded transition-colors"
                            >
                              {category.name}
                            </Link>
                          ))
                        )}
                      </div>
                      
                      {/* View All Button */}
                      <div className="px-4 py-3 border-t border-gray-100">
                        <Link
                          href="/categories"
                          className="block text-sm font-medium text-blue-600 hover:text-cyan-500 transition-colors"
                        >
                          View all categories →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </li>
                
                {/* Static Pages */}
                <li>
                  <Link 
                    href="/about" 
                    className="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </li>
                
                <li>
                  <Link 
                    href="/contact" 
                    className="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={toggleSidebar}
              className="md:hidden text-gray-900 focus:outline-none menu-button"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              <div className="space-y-1.5">
                <motion.span
                  className="block w-6 h-0.5 bg-gray-900 rounded"
                  animate={{ 
                    rotate: isSidebarOpen ? -45 : 0,
                    y: isSidebarOpen ? 2 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-gray-900 rounded"
                  animate={{ 
                    opacity: isSidebarOpen ? 0 : 1,
                    x: isSidebarOpen ? -10 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-gray-900 rounded"
                  animate={{ 
                    rotate: isSidebarOpen ? 45 : 0,
                    y: isSidebarOpen ? -2 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
              className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 sidebar-menu"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <Link 
                    href="/" 
                    onClick={closeSidebar}
                    className="flex items-center"
                  >
                    <span 
                      className="text-2xl md:text-3xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 tracking-tight"
                      style={{ 
                        fontFamily: "'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      StitchTex
                    </span>
                    <span 
                      className="ml-1 text-xl md:text-2xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 tracking-tight"
                      style={{ 
                        fontFamily: "'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      Trading
                    </span>
                  </Link>
                  <button
                    onClick={closeSidebar}
                    className="text-gray-900 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Sidebar Navigation */}
              <nav className="p-6">
                <ul className="space-y-1">
                  {/* Home */}
                  <li>
                    <Link 
                      href="/" 
                      onClick={closeSidebar}
                      className="block w-full text-lg font-medium text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  
                  {/* Categories - Single Link */}
                  <li>
                    <Link 
                      href="/categories"
                      onClick={closeSidebar}
                      className="block w-full text-lg font-medium text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Categories
                    </Link>
                  </li>
                  
                  {/* Static Pages */}
                  <li>
                    <Link 
                      href="/about"
                      onClick={closeSidebar}
                      className="block w-full text-lg font-medium text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  
                  <li>
                    <Link 
                      href="/contact"
                      onClick={closeSidebar}
                      className="block w-full text-lg font-medium text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  
                  {/* Footer Links */}
                  
                </ul>
              </nav>

              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  © {new Date().getFullYear()} StitchTex Trading
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}