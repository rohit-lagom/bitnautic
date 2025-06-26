'use client';
import {motion} from 'framer-motion';
import { Award } from 'lucide-react';

const Team = () => {
  return (
         <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leading Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of high-tech enthusiasts believe in change and innovation, driving the future of supply chain management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white"
          >
            <Award className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Excellence in Innovation
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We're proud to be recognized as industry leaders in blockchain-powered logistics solutions, continuously pushing the boundaries of what's possible in supply chain management.
            </p>
          </motion.div>
        </div>
      </section>
)
}

export default Team