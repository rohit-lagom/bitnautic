'use client';
import { motion } from 'framer-motion';
import { Shield, Globe, Zap, Clock, Users, CheckCircle } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: 'SAFE & SECURE',
      description: 'Shipping info and data cannot be stolen, intercepted, lost, counterfeited, hacked or damaged.',
    },
    {
      icon: Globe,
      title: 'DECENTRALIZED',
      description: 'Encrypted storage is 100% resilient to hackers.',
    },
    {
      icon: Zap,
      title: 'AUTOMATED',
      description: 'Fully API-supported document & data transfer, so no data re-entry is needed.',
    },
    {
      icon: Clock,
      title: 'FAST',
      description: 'Transfer documents of title with blockchain in seconds, instead of weeks for paper delivery.',
    },
    {
      icon: Users,
      title: 'FLEXIBLE',
      description: 'Access through a web interface or mobile app.',
    },
    {
      icon: CheckCircle,
      title: 'TRUSTABLE',
      description: 'Access a complete information\'s audit trail anytime and anywhere.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Ambient glass lighting */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10" />
      <div className="absolute top-16 right-16 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[100px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
            Why BitNautic
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">
            Advantages of Working With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-600">
                <advantage.icon className="h-10 w-10 text-white group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-blue-100 text-base leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
