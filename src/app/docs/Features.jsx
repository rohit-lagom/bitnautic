'use client';

import { motion } from 'framer-motion';
import { QrCode, Shield, BarChart3 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: QrCode,
      title: 'QR Code Integration',
      description: 'Every document comes with secure QR codes for instant verification and access.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Immutable document storage with cryptographic security ensuring data integrity.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: BarChart3,
      title: 'Smart Dashboard',
      description: 'Comprehensive dashboard for managing all your documents in one place.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-lg -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-cyan-400/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Advanced Features
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Elevate document management with intelligent tools and secure interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col justify-between h-[500px] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-300/20 rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-200" />
                </div>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              </div>

              {/* Image Inside Card */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>

              {/* Description */}
              <p className="text-blue-100 text-base leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Button */}
              <button className="mt-auto w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl font-medium transition duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
