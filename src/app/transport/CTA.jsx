'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Truck, Package, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className="absolute inset-0 shipping-pattern opacity-20"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <Truck className="h-16 w-16 mx-auto text-blue-300 mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold">
            Start Shipping Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using BitNautic for their logistics and shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <Package className="h-5 w-5" />
              <span>Book Shipment</span>
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}