'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Building2,
  Truck,
} from 'lucide-react';

export default function Solutions() {
  const mainServices = [
    {
      icon: Building2,
      title: 'BTNT Enterprise',
      subtitle: 'Enterprise Supply Chain Solutions',
      description:
        'Elevate your business with blockchain-powered solutions for supply chain management, enabling streamlined operations across all industries.',
      features: [
        'Advanced Analytics Dashboard',
        'Multi-user Access Controls',
        'Global Integration Capabilities',
        'Automated Workflow Management',
        'Enterprise-grade Security',
        '24/7 Premium Support',
      ],
      link: '/enterprise',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: FileText,
      title: 'BTNT Docs',
      subtitle: 'Blockchain Document Management',
      description:
        'Blockchain-based digital documents solution provides secure and transparent documentation for the shipping industry.',
      features: [
        'Bill of Lading Management',
        'Proforma Invoice Generation',
        'Commercial Invoice Processing',
        'QR Code Integration',
        'Tamper-proof Security',
        'End-to-end Encryption',
      ],
      link: '/docs',
      color: 'from-green-600 to-green-800',
    },
    {
      icon: Truck,
      title: 'BTNT Transport',
      subtitle: 'Logistics & Shipping Platform',
      description:
        'Shipment booking platform streamlines the logistics process, increasing efficiency and reducing costs for all parties involved.',
      features: [
        'Real-time Cargo Tracking',
        'Multi-modal Transportation',
        'Automated Quote Generation',
        'Crypto Payment Integration',
        'Live Shipping Leads',
        'Mobile Access',
      ],
      link: '/transport',
      color: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Comprehensive blockchain solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(59,130,246,0.1)] overflow-hidden hover:shadow-[0_28px_70px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 text-white">
                  <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg text-blue-100 mb-2">{service.subtitle}</p>
                  <p className="text-blue-200 mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 transition-all duration-300 text-white hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                  <div className="absolute inset-0 shipping-pattern opacity-20"></div>
                  <div className="relative h-96 lg:h-full flex items-center justify-center p-12 text-white">
                    <div className="text-center">
                      <service.icon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                      <h4 className="text-xl font-semibold">{service.title}</h4>
                      <p className="text-sm text-blue-100">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
