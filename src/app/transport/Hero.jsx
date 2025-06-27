'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package } from 'lucide-react';

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 shipping-pattern opacity-10"></div>
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px]" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
            BTNT Transport
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Your Reliable Partner for
            <span className="block text-blue-300">Logistics & Shipping</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-4">
            Reduce logistics costs, track shipments in real-time, and move cargo securely with blockchain technology.
          </p>
          <p className="text-lg text-blue-200">Wherever you go, we’re ready to assist.</p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pickup */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Enter Pickup Location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Enter Destination Location"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="flex items-end">
                <button className="w-full px-6 py-3 rounded-xl font-semibold text-lg bg-white/10 text-white backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Package className="h-5 w-5" />
                  <span>Book Parcel</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
