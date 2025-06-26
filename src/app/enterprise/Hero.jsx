'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Lock, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Pattern and Blobs */}
      <div className="absolute inset-0 shipping-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-24 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-16 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-float delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-36 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
                BTNT Enterprise
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Enterprise-Grade
                <span className="block text-blue-300">Supply Chain Solutions</span>
              </h1>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed">
              Elevate your business with blockchain-powered solutions for supply chain management, enabling streamlined operations across all industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-lg backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-md"
              >
                View All Services
              </Link>
            </div>
          </motion.div>

          {/* Right Image + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Enterprise dashboard"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl" />
            </div>

            {/* Floating: Cost Reduction - Top Right */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-4 rounded-xl shadow-xl">
              <TrendingUp className="h-6 w-6 text-green-400 mb-1" />
              <div className="text-xl font-bold">40%</div>
              <div className="text-xs text-white/80">Cost Reduction</div>
            </div>

            {/* Floating: Security - Bottom Left */}
            <div className="absolute bottom-6 left-6 bg-blue-600/90 text-white px-5 py-4 rounded-xl shadow-xl border border-white/10 pulse-glow">
              <Lock className="h-6 w-6 mb-1" />
              <div className="text-xs font-semibold">Bank-Level Security</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
