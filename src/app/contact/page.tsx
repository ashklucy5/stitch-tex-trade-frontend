'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Google Maps loader with proper cleanup prevention
const loadGoogleMaps = (apiKey: string): Promise<typeof google.maps> => {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (typeof window !== 'undefined' && window.google?.maps) {
      resolve(window.google.maps)
      return
    }

    // Check if script is already being loaded
    const existingScript = document.getElementById('google-maps-script')
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (window.google?.maps) resolve(window.google.maps)
        else reject(new Error('Google Maps failed to load'))
      })
      existingScript.addEventListener('error', () => {
        reject(new Error('Google Maps script failed to load'))
      })
      return
    }

    // Create and load new script
    const script = document.createElement('script')
    script.id = 'google-maps-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (window.google?.maps) resolve(window.google.maps)
      else reject(new Error('Google Maps API not available after script load'))
    }
    
    script.onerror = () => {
      reject(new Error('Failed to load Google Maps script'))
    }
    
    document.head.appendChild(script)
  })
}

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false,
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)

  // Company contact information
  const companyInfo = {
    address: "Ref Tower, Gawair, Kazibari Mor, Dakshinkhan, Uttara 1230, Dhaka, Bangladesh",
    phone: "+8801713 271735, +8801611 723485",
    email: "info@stitchtextrading.com",
    website: "www.stitchtextrading.com",
    coordinates: { lat: 23.8658, lng: 90.3742 } // Precise coordinates for Ref Tower, Uttara
  };

  const teamMembers = [
    {
      name: "Md. Rafiul Islam",
      role: "Chairman & CEO",
      email: "rafiul@stitchtextrading.com",
      phone: "+8801713 271735, +8801611 723485",
      department: "Strategic Leadership & Client Relations"
    },
    {
      name: "Md. Kabir Hossain",
      role: "Managing Director",
      email: "kabir@stitchtextrading.com",
      phone: "+8801711 657285, +8801751 900025",
      department: "Operations & Production Management"
    },
    {
      name: "Muhammad Toufiq Saleheen",
      role: "Director",
      email: "toufiq@stitchtextrading.com",
      phone: "+8801730 325889",
      department: "Finance & Business Development"
    },
  ];

  // Initialize Google Maps - SAFE IMPLEMENTATION (no DOM removal errors)
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey) {
      setMapError('Google Maps API key not configured')
      console.error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is missing in environment variables')
      return
    }

    if (!mapRef.current) return

    // Load Google Maps API
    loadGoogleMaps(apiKey)
      .then(() => {
        // Safety check - component might be unmounted
        if (!mapRef.current) return

        try {
          // Clean up existing map instance if any
          if (mapInstanceRef.current) {
            mapInstanceRef.current = null
          }
          if (markerRef.current) {
            markerRef.current.setMap(null)
            markerRef.current = null
          }

          // Create new map
          const map = new google.maps.Map(mapRef.current, {
            center: companyInfo.coordinates,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER
            },
            styles: [
              {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#444444" }]
              },
              {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{ "color": "#f2f2f2" }]
              },
              {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
              },
              {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                  { "saturation": -100 },
                  { "lightness": 45 }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{ "visibility": "simplified" }]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
              },
              {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
              },
              {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                  { "color": "#46bcec" },
                  { "visibility": "on" }
                ]
              }
            ]
          })

          mapInstanceRef.current = map

          // Add custom marker
          const marker = new google.maps.Marker({
            position: companyInfo.coordinates,
            map: map,
            title: "STITCH TEX TRADING",
            animation: google.maps.Animation.DROP,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: "#1e40af",
              fillOpacity: 1,
              strokeColor: "#0ea5e9",
              strokeWeight: 3
            }
          })

          markerRef.current = marker

          // Add info window
          const infoWindow = new google.maps.InfoWindow({
            content: ` 
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 12px; max-width: 250px;">
                <div style="font-weight: 700; color: #1e40af; font-size: 16px; margin-bottom: 4px;">STITCH TEX TRADING</div>
                <div style="color: #4b5563; font-size: 13px;">Ref Tower, Uttara</div>
              </div>
            `,
            pixelOffset: new google.maps.Size(0, -5)
          })

          marker.addListener("click", () => {
            infoWindow.open(map, marker)
          })

          // Open by default
          infoWindow.open(map, marker)
          
          setMapLoaded(true)
          setMapError(null)
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown map error'
          setMapError(`Map initialization failed: ${errorMessage}`)
          console.error('Map initialization error:', err)
        }
      })
      .catch((err) => {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load Google Maps'
        setMapError(errorMessage)
        console.error('Google Maps loading error:', err)
      })

    // CLEANUP - SAFE APPROACH
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null) // Remove the marker
        markerRef.current = null // Clear the marker reference
      }
      mapInstanceRef.current = null // Clear the map reference
      // DO NOT remove script tag - this will cause issues in React's SPA rendering
    }
  }, [])

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Form validation
  const validateForm = () => {
    if (!formData.first_name.trim()) {
      setError('First name is required')
      return false
    }
    if (!formData.last_name.trim()) {
      setError('Last name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      setError('Subject is required')
      return false
    }
    if (!formData.message.trim()) {
      setError('Message is required')
      return false
    }
    if (!formData.terms) {
      setError('You must agree to the Privacy Policy')
      return false
    }
    return true
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset previous messages
    setError(null)
    setSuccess(false)
    
    // Validate form
    if (!validateForm()) return
    
    setSubmitting(true)
    
    try {
      const response = await fetch('https://api.stitchtextrading.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      })
      
      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`)
      }
      
      // Success!
      setSuccess(true)
      setError(null)
      
      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        terms: false,
      })
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
      console.error('Submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Responsive */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 L80,80 M80,20 L20,80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect with our leadership team to discuss your garment sourcing requirements and partnership opportunities
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Responsive Grid: 1 column on mobile, 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Send us a message
              </h2>
              
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully! Our team will contact you within 24 business hours.</span>
                </div>
              )}
              
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base"
                      placeholder="+880 XXXX-XXXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base"
                    placeholder="Partnership inquiry, Product catalog, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-base resize-none"
                    placeholder="Please provide details about your requirements, order volume, target markets, and timeline..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                    I agree to the <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Privacy Policy</a> and consent to being contacted regarding my inquiry
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3.5 px-6 rounded-xl font-semibold transform transition-all duration-300 shadow-md ${
                    submitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:opacity-90 hover:scale-[1.02] hover:shadow-lg'
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending your message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  We respect your privacy. Your information will only be used to respond to your inquiry and will not be shared with third parties.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Company Information - Full width on mobile, half on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {/* Company Info Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  Company Headquarters
                </h2>
                
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">Corporate Office</p>
                        <p className="text-gray-700 mt-1">{companyInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-700 mt-1">{companyInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">Email</p>
                        <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:text-blue-800 transition-colors mt-1 block">
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">Website</p>
                        <a href="https://www.stitchtextrading.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors mt-1 block">
                          www.stitchtextrading.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section - FIXED IMPLEMENTATION */}
                {/* Map Section - FIXED */}
<div className="mt-8">
  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
    {/* ... icon ... */}
    Our Location
  </h3>

  {/* Error state - OUTSIDE the map div */}
  {mapError && (
    <div className="w-full h-64 rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center">
      <div className="text-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <p className="text-gray-600 font-medium">Map unavailable</p>
        <p className="text-gray-500 text-sm mt-1">{mapError}</p>
      </div>
    </div>
  )}

  {/* Loading state - OUTSIDE the map div */}
  {!mapLoaded && !mapError && (
    <div className="w-full h-64 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-3"></div>
        <p className="text-gray-600 text-sm">Loading map...</p>
      </div>
    </div>
  )}

  {/* Map container - ALWAYS in DOM, ALWAYS EMPTY, hidden until loaded */}
  <div
    ref={mapRef}
    id="contact-map"
    className="w-full rounded-xl overflow-hidden border border-gray-200"
    style={{ 
      height: '16rem',
      display: mapLoaded && !mapError ? 'block' : 'none'
    }}
  />
</div>
              </div>

              {/* Team Contacts */}
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Leadership Team
                </h2>
                
                <div className="space-y-5">
  {teamMembers.map((member, index) => (
    <div 
      key={member.name}
      className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 bg-gray-50"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
          <p className="text-blue-700 font-medium mt-1">{member.role}</p>
          <p className="text-sm text-gray-600 mt-0.5">{member.department}</p>
        </div>
        <div className="flex flex-col sm:items-end space-y-2">
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {member.email}
          </a>
          
          {/* Handle multiple phone numbers */}
          <div className="flex flex-col items-end space-y-1">
            {member.phone.split(',').map((phone, index) => (
              <a 
                key={index}
                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
                
                {/* <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">For urgent matters:</span> Please contact our Chairman directly at +8801713 271735 during business hours (9:00 AM - 6:00 PM BST, Sunday-Thursday).
                  </p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Business Hours Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {[ 
              { day: "Sunday - Thursday", hours: "9:00 AM - 6:00 PM (BST)" },
              { day: "Friday", hours: "9:00 AM - 2:00 PM (BST)" },
              { day: "Saturday", hours: "Closed (Emergency support available)" }
            ].map((item, index) => (
              <div key={index} className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">{item.day}</h3>
                <p className="text-blue-600 font-medium mt-2 text-lg">{item.hours}</p>
                {index === 2 && (
                  <p className="text-xs text-gray-500 mt-2 max-w-xs mx-auto">
                    Emergency orders can be placed via email at any time
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 px-6 py-4 border-t border-blue-100">
            <p className="text-center text-sm text-blue-800 max-w-3xl mx-auto">
              <span className="font-medium">Note:</span> We observe public holidays in Bangladesh. Please check our website or contact us before visiting during holiday seasons.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
