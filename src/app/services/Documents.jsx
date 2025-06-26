'use client';
import { motion } from 'framer-motion';
import {
  FileText,
  BarChart3,
  ClipboardList,
  BookOpen,
  FileCheck2,
  Receipt,
} from 'lucide-react';

export default function Documents() {
  const documentTypes = [
    { name: 'Bill Of Lading', icon: FileText },
    { name: 'Proforma Invoice', icon: BarChart3 },
    { name: 'Commercial Invoice', icon: ClipboardList },
    { name: 'Quotation', icon: BookOpen },
    { name: 'Purchase Order', icon: FileCheck2 },
    { name: 'Certificate of Origin', icon: Receipt },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Supported Document Types</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Comprehensive blockchain documentation for secure and efficient shipping operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {documentTypes.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]"
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl z-0 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icon container */}
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <doc.icon className="h-8 w-8 text-white group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  {doc.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
