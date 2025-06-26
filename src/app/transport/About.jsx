'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Ship, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
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
                Transforming the Shipping Industry
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Aiming to serve humanity by providing effective solutions, we came up with an idea which transforms one of the biggest industries in the world – The shipping industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of high-tech enthusiasts believe in change and that's why we have developed the BitNautic platform by integrating the most disruptive technology of this era – The blockchain technology.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Blockchain in the Shipping World</h3>
                <p className="text-gray-600">
                  Blockchain technology appeals to the shipping industry because of its capacity to decrease trade documentation, processing costs, delays, data manipulation, fraud, and human error.
                </p>
                <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mt-3">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Offering Digital Solutions</h3>
                <p className="text-gray-600">
                  BitNautic provides start to end digital solution for shipping industry. Right from booking of cargos to creating and storing Bill of Lading on the blockchain.
                </p>
                <Link href="/services" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold mt-3">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Container shipping"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-2xl pulse-glow">
              <Ship className="h-8 w-8 mb-2" />
              <div className="text-sm font-semibold">Blockchain Secured</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}