'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
  CheckCircle,
  Award
} from 'lucide-react';

export default function About() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                  WE ARE BitNautic
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Boost Your Productivity and Save Time
                </h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  with Hassle-Free Document Management
                </h3>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                An easy-to-use interface for generating, managing, and sharing various types of documents, including those that are customizable with QR code scanning capabilities.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With BTNT Smart Doc, businesses can rest assured that their documents are always accessible and tamper-proof, ensuring data security and integrity.
              </p>

              <div className="space-y-4">
                {['Blockchain-secured documents', 'QR code integration', 'Real-time collaboration', 'Automated workflows'].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="#documents"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>BTNT-Docs</span>
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
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Document management interface"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-xl shadow-2xl">
                <Award className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">Verified & Secure</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}