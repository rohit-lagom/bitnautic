'use client';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl"
          >
            <img
              src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Blockchain technology"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
            <div className="absolute bottom-4 right-4 bg-white/10 text-white backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-md flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-400" />
              <div>
                <div className="text-lg font-bold text-blue-300">Mission Driven</div>
                <div className="text-sm text-white/80">Our Core Focus</div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                At BitNautic, we're committed to making sustainability and traceability a priority for businesses of all sizes, empowering them to make a positive impact on the environment and society.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-md">
                <h3 className="text-xl font-bold text-white mb-2">Blockchain in Shipping</h3>
                <p className="text-blue-100">
                  Blockchain technology appeals to the shipping industry because of its capacity to decrease trade documentation, processing costs, delays, data manipulation, fraud, and human error through unbreakable "smart contracts."
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-md">
                <h3 className="text-xl font-bold text-white mb-2">Digital Solutions</h3>
                <p className="text-blue-100">
                  BitNautic provides start-to-end digital solutions for the shipping industry — from cargo booking to blockchain-based Bills of Lading and real-time shipment tracking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
