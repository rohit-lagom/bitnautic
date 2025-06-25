'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-24 bg-gradient-to-br from-[#0f172a] via-[#174fa8] to-[#24487a] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[length:20px_20px] opacity-30 z-0" />

      <motion.div
        className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 left-1/4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Digital Transformation for</span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-2">
              Supply Chain Management
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed"
          >
            The BitNautic Platform enables producers, retailers, shippers, and carriers to manage their worldwide supply chain in a simplified and secure way.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <span className="absolute animate-ping-slow w-full h-full rounded-full bg-blue-400/10 border border-blue-400/20" />
            <span className="absolute animate-ping-slower w-4/5 h-4/5 rounded-full bg-blue-300/10 border border-blue-300/20" />
            <span className="absolute animate-ping-slowest w-3/5 h-3/5 rounded-full bg-blue-200/10 border border-blue-200/20" />
          </div>

          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-3 shadow-2xl bg-white/20 backdrop-blur-3xl border-2 border-white/40 animate-wave z-10">
            <Image
              src="/assets/logo/Logo.png"
              alt="BitNautic Logo"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
