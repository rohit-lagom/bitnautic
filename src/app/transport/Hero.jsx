'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { MapPin, Package } from 'lucide-react';

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 shipping-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-34 lg:py-40 text-center">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
              BTNT Transport
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Reliable Partner for
              <span className="block text-blue-300">Logistics & Shipping</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Reduce your logistics costs, keep track of your shipments, and rely on logistics services from professionals with decades of experience in moving cargo with the security of blockchain.
            </p>
            <p className="text-lg text-blue-200">
              Wherever you go, we are glad to assist.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Pickup Location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Destination Location"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
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