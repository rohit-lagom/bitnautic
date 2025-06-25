'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[20px_20px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-2 block">
                About Company
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Revolutionizing Global Business
              </h2>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed">
              At BitNautic, we're committed to making sustainability and traceability a priority for businesses of all sizes, empowering them to make a positive impact on the environment and society.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Welcome to BitNautic, where we're revolutionizing the world of business! Our mission is to make businesses more transparent, traceable, and efficient. With customized solutions like our BTNT Enterprise for logistics management, BTNT Transport for seamless transportation, BTNT Docs for secure document management within the BitNautic network.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-[rgba(59,130,246,0.2)] backdrop-blur-md border border-[rgba(59,130,246,0.3)] shadow-[0_4px_16px_rgba(59,130,246,0.1)] hover:bg-[rgba(59,130,246,0.3)] hover:border-[rgba(59,130,246,0.5)]"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-[rgba(255,255,255,0.9)] backdrop-blur-lg border border-[rgba(255,255,255,0.4)] shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-2xl p-4 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Container shipping"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[rgba(255,255,255,0.9)] backdrop-blur-lg border border-[rgba(255,255,255,0.4)] shadow-[0_12px_40px_rgba(0,0,0,0.08)] text-slate-900 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm font-semibold">Years Experience</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[rgba(30,58,138,0.9)] backdrop-blur-lg border border-[rgba(96,165,250,0.4)] shadow-[0_8px_32px_rgba(30,58,138,0.2)] text-white p-6 rounded-xl animate-[pulseGlow_2s_ease-in-out_infinite]">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm font-semibold">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
