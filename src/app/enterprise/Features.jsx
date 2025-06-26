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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Enterprise Features
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Tools for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}