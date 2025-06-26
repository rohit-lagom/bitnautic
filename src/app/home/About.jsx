'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle diagonal background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[20px_20px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                About Company
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Revolutionizing Global Business
              </h2>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed">
              At BitNautic, we're committed to making sustainability and traceability a priority for businesses of all sizes, empowering them to make a positive impact on the environment and society.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Our mission is to drive efficiency and transparency with blockchain-based logistics. With tailored solutions like <strong>BTNT Enterprise</strong>, <strong>BTNT Docs</strong>, and <strong>BTNT Transport</strong>, we’re creating a frictionless global trade ecosystem.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-[rgba(59,130,246,0.2)] backdrop-blur-md border border-[rgba(59,130,246,0.3)] shadow-[0_4px_16px_rgba(59,130,246,0.1)] hover:bg-[rgba(59,130,246,0.3)] hover:border-[rgba(59,130,246,0.5)]"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>

          {/* Image Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Container shipping"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
