'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';

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
          <Building2 className="h-16 w-16 mx-auto text-blue-300 mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join leading enterprises worldwide who trust BitNautic for their supply chain management needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-2xl transform hover:scale-105"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}