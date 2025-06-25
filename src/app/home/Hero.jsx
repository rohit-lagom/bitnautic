'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20 bg-gradient-to-br from-[#0f172a] via-[#174fa8] to-[#24487a] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[length:20px_20px] opacity-30"></div>

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="block">Digital Transformation for</span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-1 sm:mt-2">
              Supply Chain Management
            </span>
          </h1>
          <motion.p 
               initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            The BitNautic Platform enables producers, retailers, shippers, and carriers to manage their worldwide supply chain in a simplified and secure way.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-3 sm:p-4 shadow-2xl bg-white/25 backdrop-blur-3xl border-2 border-white/40 animate-[wave_4s_ease-in-out_infinite]"
        >
          <div className="absolute inset-0 rounded-full bg-blue-400/50 blur-3xl scale-150"></div>
          <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl scale-125"></div>
          <div className="absolute inset-0 rounded-full bg-blue-300/40 blur-xl scale-110"></div>
          <Image
            src="/assets/logo/Logo.png"
            alt="BitNautic Logo"
            fill
            className="relative object-contain rounded-full z-10"
          />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
