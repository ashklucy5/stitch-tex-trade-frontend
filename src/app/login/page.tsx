'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-neutral-200"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-900 mb-2">Welcome Back</h1>
          <p className="text-neutral-600">Access your Stitch Tex Trading account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <Link 
                href="#" 
                className="text-sm text-accent-blue hover:text-accent-cyan transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-accent-blue focus:ring-accent-blue border-neutral-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-accent-blue text-white py-3 px-4 rounded-lg hover:bg-accent-cyan transition-colors duration-300 font-semibold"
          >
            Sign in to your account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link href="#" className="text-accent-blue hover:text-accent-cyan font-medium transition-colors">
              Request access
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 text-center">
            © 2026 Stitch Tex Trading. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  )
}