'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Ambient Effects */}
      <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay z-0" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 shipping-pattern opacity-10 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Floating Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 mx-auto shadow-xl animate-float">
            <Building2 className="h-10 w-10 text-blue-300" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your Enterprise?
          </h2>

          {/* Description */}
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join leading enterprises worldwide who trust BitNautic for blockchain-powered supply chain transformation.
          </p>

          {/* Glassmorphic Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Schedule Demo <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore Services <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
