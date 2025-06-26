'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    'Reduce operational costs by up to 40%',
    'Eliminate manual paperwork and errors',
    'Real-time tracking and transparency',
    'Automated compliance reporting',
    'Integrated payment processing',
    'Scalable infrastructure for growth',
    '24/7 enterprise support',
    'Custom integrations available',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose BTNT Enterprise?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our enterprise solution delivers measurable results and ROI for businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Enterprise analytics dashboard"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-green-600 text-white p-4 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold">↑ 65%</div>
              <div className="text-sm">Efficiency</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-2xl">
              <Clock className="h-6 w-6 mb-1" />
              <div className="text-sm font-semibold">Real-time Updates</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}