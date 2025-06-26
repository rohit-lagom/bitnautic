'use client';
import { motion } from 'framer-motion';
import { Shield, Globe, Lock, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'End-to-end Encryption',
      description:
        'Ensures that all communications linked to business operations are safe and secured from illegal access or alteration using end-to-end encryption.',
      color: 'text-blue-400',
    },
    {
      icon: Lock,
      title: 'Tamper-proof',
      description:
        'Maintain the authenticity of the communication by preventing any modification or alteration of the emails.',
      color: 'text-green-400',
    },
    {
      icon: Globe,
      title: 'Seamless Connectivity',
      description:
        'Streamline communication by sharing documents with involved parties, without separate channels.',
      color: 'text-purple-400',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description:
        'Transfer documents of title with blockchain in seconds, instead of weeks for paper delivery.',
      color: 'text-yellow-400',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden transition-colors duration-500">
      {/* Blur background layers */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-[26rem] h-[26rem] bg-cyan-400/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-md -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
            BENEFITS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Empower Your Business Operations
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            with BitNautic's Blockchain Email System
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center text-white"
            >
              <div className="w-16 h-16 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
