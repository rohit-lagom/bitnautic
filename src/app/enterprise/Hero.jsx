'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Lock, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 shipping-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-34 lg:py-40 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-center transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Enterprise dashboard"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white text-gray-900 p-4 rounded-xl shadow-2xl">
              <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold">40%</div>
              <div className="text-sm">Cost Reduction</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-2xl pulse-glow">
              <Lock className="h-8 w-8 mb-2" />
              <div className="text-sm font-semibold">Bank-Level Security</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}