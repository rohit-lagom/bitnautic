'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  Globe,
  Shield,
  BarChart3,
} from 'lucide-react';

const stats = [
  { number: '10K+', label: 'Shipments Processed', icon: Truck },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { number: '24/7', label: 'Customer Support', icon: BarChart3 },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30 bg-blue-400/10 backdrop-blur-[20px] shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
