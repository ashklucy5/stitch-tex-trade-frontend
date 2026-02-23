// components/ui/footer.tsx
'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center mb-4">
  {/* Logo */}
  <img 
    src="/logo.png" // Ensure logo.png is in your public directory
    alt="STITCH TEX TRADING Logo"
    className="h-12 sm:h-16" // Adjusted logo size to be bigger
  />
  <span className="font-bold text-xl sm:text-2xl meddon-regular mx-3">
    STITCH T<span className="needle-e">E</span>X TRADING
  </span>
</div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base meddon-regular">
              Quality products crafted for the modern individual. Experience luxury and sophistication in every detail.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-xs meddon-regular">{i}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 meddon-regular">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 meddon-regular">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  Denim
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  Jackets
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm meddon-regular">
                  Polo Shirts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 meddon-regular">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                <span className="text-gray-400 text-sm meddon-regular">
                  +8801713 271735, +8801711 657285
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                <span className="text-gray-400 text-sm meddon-regular">
                  info@stitchtextrading.com
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                <span className="text-gray-400 text-sm meddon-regular">
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p className="meddon-regular">
            &copy; {new Date().getFullYear()} STITCH T<span className="needle-e">E</span>X TRADING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}