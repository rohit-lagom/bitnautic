'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="relative z-10 py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[160px]" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 p-10 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl"
          >
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">
              We Are BitNautic
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Elevate Your Productivity
            </h2>
            <h3 className="text-xl text-blue-300 font-medium mb-6">
              with Secure, Smart Documentation
            </h3>

            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              BTNT Docs enables enterprises to create, manage, and verify tamper-proof documents with embedded QR codes and blockchain trust — instantly.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Blockchain-secured documents',
                'QR code enabled access',
                'Real-time collaboration',
                'Automated smart workflows',
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="#documents"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-lg transition hover:scale-105 shadow-lg"
            >
              Explore BTNT Docs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="BTNT dashboard"
                className="w-full h-[400px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-blue-600/80 text-white px-6 py-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/10">
              <Award className="h-8 w-8 mb-1" />
              <p className="text-sm font-semibold">Verified & Compliant</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
