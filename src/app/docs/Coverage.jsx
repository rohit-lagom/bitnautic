'use client';
import { motion } from 'framer-motion';

import { 
  Truck,
  Globe,
  Zap,
  Users,
} from 'lucide-react';

export default function Coverage() {
    return (
         <section className="py-20  bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800"></div>
        <div className="absolute inset-0 shipping-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Global Shipping Coverage
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Supporting all major shipping methods worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, label: 'Ocean Shipping', description: 'Global sea freight' },
              { icon: Zap, label: 'Air Freight', description: 'Express delivery' },
              { icon: Users, label: 'Road Freight', description: 'Land transportation' },
              { icon: Globe, label: 'Rail Freight', description: 'Railway logistics' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                <p className="text-blue-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}



