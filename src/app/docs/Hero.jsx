'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background textures */}
      <div className="absolute inset-0 shipping-pattern opacity-10 pointer-events-none" />

      {/* Floating blurred circles */}
      <div className="absolute top-24 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-24 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl animate-float delay-1000" />
      <div className="absolute bottom-16 left-1/5 w-16 h-16 bg-white/15 rounded-full blur-md animate-float delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 sm:pt-32 lg:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">
                BTNT Docs
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionize Document
                <span className="block text-blue-300">Management with Blockchain</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              A user-friendly interface to generate, manage, and share blockchain-verified documents with QR-based validation.
            </p>
            <p className="text-blue-200 leading-relaxed">
              BTNT Smart Docs ensures documents are always accessible, secure, and tamper-proof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#documents"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <FileText className="h-5 w-5" />
                <span>Explore Documents</span>
              </Link>

              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition duration-300 text-center transform hover:scale-105"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Document management dashboard"
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl" />
            </div>

            {/* Floating Card - Documents */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-xl text-white px-5 py-4 rounded-xl shadow-xl border border-white/10">
              <FileText className="h-6 w-6 text-blue-400 mb-1" />
              <div className="text-xl font-bold">1M+</div>
              <div className="text-xs text-white/80">Documents</div>
            </div>

            {/* Floating Card - Secure */}
            <div className="absolute bottom-4 right-4 bg-green-600 text-white px-5 py-4 rounded-xl shadow-xl pulse-glow">
              <Shield className="h-6 w-6 mb-1" />
              <div className="text-xs font-semibold">100% Secure</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
