'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Ship, Anchor } from 'lucide-react';


export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#174fa8] to-[#24487a] text-white overflow-hidden lg:min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[length:20px_20px] opacity-30 z-0" />

      {[
        { top: 'top-[5%]', left: 'left-[5%]', delay: 0 },
        { top: 'top-[15%]', right: 'right-[5%]', delay: 1 },
        { bottom: 'bottom-[20%]', left: 'left-1/4', delay: 2 },
      ].map((pos, idx) => (
        <motion.div
          key={idx}
          className={`absolute w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-lg ${pos.top || ''} ${pos.bottom || ''} ${pos.left || ''} ${pos.right || ''} pointer-events-none z-[1]`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: pos.delay, ease: 'easeInOut' }}
        />
      ))}

      {[
      { className: 'sm:top-[16%] top-[26%] left-[6%] sm:left-[10%] md:left-[4%] lg:left-32', delay: 0, y: -30, x: 15, rotate: 5 },
{ className: 'sm:top-[20%] top-[36%] right-[4%] sm:right-[10%] md:right-[4%] lg:right-28', delay: 2, y: -25, x: -12, rotate: -3 },
{ className: 'bottom-[22%] left-[8%] sm:left-[10%] md:left-[14%] lg:left-24', delay: 4, y: -20, x: 10, rotate: 4 },
{ className: 'bottom-[18%] right-[6%] sm:right-[10%] md:right-[14%] lg:right-32', delay: 1, y: -35, x: -8, rotate: -2 },
{ className: 'bottom-[4%] right-[48%] sm:right-[48%] md:right-[48%] lg:right-[48%] md:block hidden lg:hidden', delay: 1, y: -35, x: -8, rotate: -2 },
   ].map((icon, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, icon.y, 0],
            x: [0, icon.x, 0],
            rotate: [0, icon.rotate, 0],
          }}
          transition={{ duration: 6 + idx, repeat: Infinity, ease: 'easeInOut', delay: icon.delay }}
          className={`absolute ${icon.className} pointer-events-none z-[1]`}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 glass-white rounded-2xl flex items-center justify-center shadow-2xl">
            <Ship className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
        </motion.div>
      ))}

      {/* Anchors */}
      {[
        { className: 'top-[28%] md:top-[30%] right-4 sm:right-10 md:right-4 lg:right-30', delay: 5, rotate: -8 },
       { className: 'top-[58%] md:top-[68%] lg:top-[50%] left-4 sm:left-10 md:left-14 lg:left-16', delay: 3, rotate: 10 },
 ].map((icon, idx) => (
        <motion.div
          key={idx}
          animate={{ y: [0, -18, 0], rotate: [0, icon.rotate, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: icon.delay }}
          className={`absolute ${icon.className} pointer-events-none z-[1]`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 glass-blue rounded-xl flex items-center justify-center shadow-lg">
            <Anchor className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          </div>
        </motion.div>
      ))}

      {/* Small Ships */}
      {[
      { className: 'top-[26%] hidden md:block left-[22%] sm:left-[25%] md:left-[28%]', delay: 1.5, x: 8 },
{ className: 'top-[32%] hidden md:block right-[22%] sm:right-[25%] md:right-[28%]', delay: 3.5, x: -6 },
{ className: 'bottom-[32%] hidden md:block left-[25%] sm:left-[28%] md:left-[30%]', delay: 2.5, x: 5 },
{ className: 'bottom-[24%] hidden md:block right-[25%] sm:right-[28%] md:right-[30%]', delay: 4.5, x: -4 },
].map((icon, idx) => (
        <motion.div
          key={idx}
          animate={{ y: [0, -12, 0], x: [0, icon.x, 0] }}
          transition={{ duration: 5 + idx, repeat: Infinity, ease: 'easeInOut', delay: icon.delay }}
          className={`absolute ${icon.className} pointer-events-none z-[1]`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 glass-subtle rounded-lg flex items-center justify-center">
            <Ship className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div id="hero-content" className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24 lg:py-36 sm:py-32 md:py-34 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 sm:space-y-8 mb-12"
        >
          <h1 className="text-3xl sm:text-5xl lg:pt-4 md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block">Digital Transformation for</span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-2">
              Supply Chain Management
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            The BitNautic Platform enables producers, retailers, shippers, and carriers to manage their global supply chain in a simplified and secure way.
          </motion.p>
        </motion.div>

        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 flex items-center justify-center rounded-full"
        >
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <span className="absolute animate-ping-slow w-full h-full rounded-full bg-blue-400/10 border border-blue-400/20" />
            <span className="absolute animate-ping-slower w-4/5 h-4/5 rounded-full bg-blue-300/10 border border-blue-300/20" />
            <span className="absolute animate-ping-slowest w-3/5 h-3/5 rounded-full bg-blue-200/10 border border-blue-200/20" />
          </div>

          <div className="relative w-48 h-48 sm:w-44 sm:h-44 md:w-72 md:h-72 rounded-full p-3 shadow-2xl bg-white/20 backdrop-blur-3xl border-2 border-white/40 animate-wave z-10">
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
