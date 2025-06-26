'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 opacity-95 z-0"></div>
      <div className="absolute inset-0 shipping-pattern opacity-10 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <h2 className="text-3xl lg:text-5xl font-bold drop-shadow-xl">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Choose the service that best fits your needs and start transforming your business today.
          </p>

          {/* CTA Buttons with Glass Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enterprise"
              className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Enterprise Solutions
            </Link>
            <Link
              href="/transport"
              className="backdrop-blur-md bg-white/5 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Shipping
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
