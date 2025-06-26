'use client';
import { motion } from 'framer-motion';
import { Shield, Globe, Zap, Clock, Users, CheckCircle } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    { icon: Shield, title: 'SAFE & SECURE', description: 'Shipping info and data cannot be stolen, intercepted, lost, counterfeited, hacked or damaged.' },
    { icon: Globe, title: 'DECENTRALIZED', description: 'Encrypted storage is 100% resilient to hackers.' },
    { icon: Zap, title: 'AUTOMATED', description: 'Fully API-supported document & data transfer, so no data re-entry is needed.' },
    { icon: Clock, title: 'FAST', description: 'Transfer documents of title with blockchain in seconds, instead of weeks for paper delivery.' },
    { icon: Users, title: 'FLEXIBLE', description: 'Access through a web interface or mobile app.' },
    { icon: CheckCircle, title: 'TRUSTABLE', description: 'Access a complete information\'s audit trail anytime and anywhere.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Why BitNautic
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advantages of Working With Us
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110">
                <advantage.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}