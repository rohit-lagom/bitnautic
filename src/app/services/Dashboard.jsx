'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  CheckCircle,
  BarChart3,ArrowRight ,
  ClipboardList,
  BookOpen,
  FileCheck2,
  Receipt,
  FileSearch,
} from 'lucide-react';

export default function Dashboard() {


  return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Decision Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-6 rounded-xl shadow-2xl pulse-glow">
                <BarChart3 className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">Real-time Analytics</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                  Decision Dashboard
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Complete Operations Overview
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the big picture of your operations and documents with BitNautic's easy-to-use dashboard. Monitor, analyze, and optimize your supply chain performance in real-time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Real-time performance metrics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Customizable reporting tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Predictive analytics insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Multi-platform accessibility</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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