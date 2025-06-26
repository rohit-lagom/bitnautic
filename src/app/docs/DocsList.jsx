'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Truck,
  ClipboardList,
  Receipt,
  CheckCircle,
  Award,
} from 'lucide-react';

export default function DocsList() {
  const documents = [
    {
      id: 'bill-of-lading',
      name: 'Bill Of Lading',
      icon: Truck,
      description: 'Digital bill of lading with blockchain security',
      color: 'bg-blue-500',
      features: ['Blockchain secured', 'QR code enabled', 'Real-time tracking'],
    },
    {
      id: 'proforma-invoice',
      name: 'Proforma Invoice',
      icon: FileText,
      description: 'Professional proforma invoices with smart contracts',
      color: 'bg-green-500',
      features: ['Smart contracts', 'Auto calculations', 'Multi-currency'],
    },
    {
      id: 'commercial-invoice',
      name: 'Commercial Invoice',
      icon: Receipt,
      description: 'Comprehensive commercial invoicing solution',
      color: 'bg-purple-500',
      features: ['Tax compliance', 'Digital signatures', 'Audit trail'],
    },
    {
      id: 'quotation',
      name: 'Quotation',
      icon: ClipboardList,
      description: 'Dynamic quotation system with real-time pricing',
      color: 'bg-orange-500',
      features: ['Dynamic pricing', 'Instant delivery', 'Version control'],
    },
    {
      id: 'purchase-order',
      name: 'Purchase Order',
      icon: FileText,
      description: 'Streamlined purchase order management',
      color: 'bg-red-500',
      features: ['Approval workflow', 'Vendor integration', 'Status tracking'],
    },
    {
      id: 'certificate-origin',
      name: 'Certificate of Origin',
      icon: Award,
      description: 'Verified certificates for international trade',
      color: 'bg-indigo-500',
      features: ['Government verified', 'Trade compliance', 'Printable format'],
    },
  ];

  return (
    <section id="documents" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">List of Documents</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive document management for all your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white"
            >
              <div className={`w-16 h-16 ${doc.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <doc.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{doc.name}</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">{doc.description}</p>

              <div className="space-y-2 mb-6">
                {doc.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-blue-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]">
                Generate Document
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
