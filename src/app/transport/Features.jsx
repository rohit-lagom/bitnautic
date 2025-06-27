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
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Ambient blur glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10" />
      <div className="absolute top-16 right-16 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[100px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE WITH FLOATING ELEMENT INSIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Supply chain management"
                className="w-full h-96 object-cover"
              />

              {/* Floating stat inside image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-5 py-3 rounded-xl shadow-xl"
              >
                <div className="text-xl font-bold">↑ 40%</div>
                <div className="text-sm text-white/80">Efficiency</div>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Supercharge Your Supply Chain
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
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
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100 text-lg font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-blue-100 opacity-90 leading-relaxed">
              BitNautic works with a diverse range of commercial retailers and clients, including small, medium, and massive corporations, as well as carriers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
