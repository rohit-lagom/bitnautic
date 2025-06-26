'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    'Multiple quotations and fair prices',
    'Real time tracking',
    'Digital blockchain secured documents',
    'Crypto payments',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Supply chain management"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-green-600 text-white p-4 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold">↑ 40%</div>
              <div className="text-sm">Efficiency</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Supercharge Your Supply Chain
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                If you're looking for a platform to provide you best cargo booking services for Freight Forwarding, then you are at right place! BitNautic provides the user complete control over the transportation of his cargo.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              BitNautic works with a diverse range of commercial retailers and clients, including small, medium, and massive corporations, as well as carriers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}