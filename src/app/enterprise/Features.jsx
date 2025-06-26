'use client';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Globe, Users, Zap, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with blockchain encryption for all your business data and transactions.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboards and reporting tools for real-time business intelligence.',
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Seamless integration with international shipping networks and customs systems.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multi-user access controls and collaborative workflow management tools.',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Smart contracts and automated processes to streamline your operations.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Full-featured mobile applications for managing operations on the go.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Optional blur ambient */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Enterprise Features
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Powerful Tools for Modern Business
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive enterprise solutions designed to transform your supply chain operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-white group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
