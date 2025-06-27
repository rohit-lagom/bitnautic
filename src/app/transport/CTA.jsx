'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Truck, Package, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Ambient glass effect circles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[100px] opacity-10" />
      <div className="absolute inset-0 shipping-pattern opacity-10 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <Truck className="h-16 w-16 mx-auto text-blue-300 mb-4" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Start Shipping Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using BitNautic for global logistics and secure blockchain-powered shipping.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 text-white border border-white/10 backdrop-blur-lg shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Package className="h-5 w-5" />
              <span>Book Shipment</span>
            </button>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/10 text-white bg-white/5 backdrop-blur-lg shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <ArrowRight className="h-5 w-5" />
              <span>Contact Support</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
