'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
} from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      {/* Floating glassy background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-xl"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Get in Touch with BitNautic Experts
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Please fill out the form below, and we will get back to you as soon as possible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 backdrop-blur-md"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>

            <Link
              href="tel:+1234567890"
              className="bg-white/5 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 backdrop-blur-md"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
