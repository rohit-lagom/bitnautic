'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    'Reduce operational costs by up to 40%',
    'Eliminate manual paperwork and errors',
    'Real-time tracking and transparency',
    'Automated compliance reporting',
    'Integrated payment processing',
    'Scalable infrastructure for growth',
    '24/7 enterprise support',
    'Custom integrations available',
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Ambient blurred blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[160px] opacity-30" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">
                Why Choose BTNT
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                Enterprise Benefits That Scale With You
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
                From automation to compliance, BTNT Enterprise empowers your operations with unmatched transparency and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold text-lg hover:bg-white/20 transition hover:scale-105 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right: Image with floating cards inside */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Enterprise Dashboard"
                className="w-full h-96 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent rounded-3xl" />

              {/* Floating card top-left (inside image) */}
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-4 rounded-xl shadow-xl">
                <div className="text-green-400 text-xl font-bold">↑ 65%</div>
                <p className="text-xs text-white/80">Efficiency Boost</p>
              </div>

              {/* Floating card bottom-right (inside image) */}
              <div className="absolute bottom-4 right-4  bg-white/30 backdrop-blur-md border border-white/10  px-5 py-4 rounded-xl shadow-xl pulse-glow">
                <Clock className="h-6 w-6 mb-1" />
                <p className="text-xs font-semibold">Real-Time Updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
