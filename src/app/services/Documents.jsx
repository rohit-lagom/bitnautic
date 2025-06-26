'use client';
import { motion } from 'framer-motion';
import {
  FileText,
  BarChart3,
  ClipboardList,
  BookOpen,
  FileCheck2,
  Receipt,
  FileSearch,
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
    <section className="py-20 bg-gradient-to-br from-white via-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Supported Document Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive document management for all your shipping and logistics needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {documentTypes.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:border-blue-500 hover:ring-2 hover:ring-blue-400/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  <doc.icon className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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