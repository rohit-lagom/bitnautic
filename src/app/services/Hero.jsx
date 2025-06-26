'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero  ()  {
  return (
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 shipping-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-34 lg:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
                Our Solutions
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Comprehensive Blockchain
                <span className="block text-blue-300">Services Portfolio</span>
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From enterprise solutions to document management and transport logistics, we provide end-to-end blockchain-powered services for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/transport"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Try Transport
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

  )
}



