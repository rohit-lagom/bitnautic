'use client';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  Globe,
  Zap
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description:
      'We prioritize the security of your data and transactions with advanced blockchain technology.',
  },
  {
    icon: Users,
    title: 'Customer Centric',
    description:
      'Our solutions are designed with our customers’ needs and success at the forefront.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Connecting businesses worldwide with seamless logistics and shipping solutions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'Continuously pushing the boundaries of what’s possible in supply chain management.',
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative">
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-md -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            The principles that guide everything we do and drive our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-500/20 rounded-2xl mb-4">
                <value.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
