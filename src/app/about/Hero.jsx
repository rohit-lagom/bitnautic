'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background pattern layer */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">
              About BitNautic
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transforming Global{' '}
              <span className="block text-blue-300">Supply Chains</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              Aiming to serve humanity by providing effective solutions, we envisioned a platform that transforms one of the world’s largest industries – shipping.
            </p>

            <p className="text-blue-200 leading-relaxed max-w-xl">
              BitNautic integrates blockchain to deliver transparency, traceability, and security across global logistics — built by technologists who believe in real change.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/20 backdrop-blur-md bg-white/5">
              <img
                src="https://images.pexels.com/photos/2144905/pexels-photo-2144905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern shipping port"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
