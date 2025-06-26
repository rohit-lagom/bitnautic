'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background shipping pattern */}
      <div className="absolute inset-0 shipping-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-36 lg:py-44 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Header & Title */}
          <div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest block mb-2">
              Our Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Comprehensive Blockchain
              <span className="block text-blue-300">Services Portfolio</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            From enterprise-grade traceability to digital documentation and streamlined transport logistics, BitNautic delivers secure and scalable blockchain-powered infrastructure for global trade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {/* Glass Button 1 */}
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* Glass Button 2 */}
            <Link
              href="/transport"
              className="px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-md bg-white/5 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:text-blue-200 hover:border-blue-400 hover:scale-105"
            >
              Try Transport
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
