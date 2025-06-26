'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckCircle,
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Image with Floating Tag */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Decision Dashboard"
                className="w-full h-96 object-cover rounded-2xl"
              />

              {/* Floating Glow Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 right-6 bg-white/10 border border-white/20 backdrop-blur-xl text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-pulse hover:scale-105 transition-all duration-300"
              >
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <div className="text-sm font-semibold text-blue-100">
                  Real-time Analytics
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Decision Dashboard
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Complete Operations Overview
              </h2>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed">
              Get the big picture of your operations and documents with BitNautic's easy-to-use dashboard. Monitor, analyze, and optimize your supply chain performance in real-time.
            </p>

            <div className="space-y-4">
              {[
                'Real-time performance metrics',
                'Customizable reporting tools',
                'Predictive analytics insights',
                'Multi-platform accessibility',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span>Request Demo</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
