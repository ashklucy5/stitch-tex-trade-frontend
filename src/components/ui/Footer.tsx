import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Stitch Tex Trading</h3>
            <p className="text-neutral-300 text-sm">
              Connecting global buyers with quality manufacturers in Bangladesh since 2008.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-accent-blue transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-accent-blue transition-colors">About</Link></li>
              <li><Link href="/products" className="text-neutral-300 hover:text-accent-blue transition-colors">Products</Link></li>
              <li><Link href="/policy" className="text-neutral-300 hover:text-accent-blue transition-colors">Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-neutral-300">Garment Sourcing</li>
              <li className="text-neutral-300">Quality Control</li>
              <li className="text-neutral-300">Production Management</li>
              <li className="text-neutral-300">Logistics Coordination</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li>www.stitchtextrading.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-700 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; 2026 Stitch Tex Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}