'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, FileText,
  Building2,
  Truck,
} from 'lucide-react';


export default function Solutions() {
  const mainServices = [
    {
      icon: Building2,
      title: 'BTNT Enterprise',
      subtitle: 'Enterprise Supply Chain Solutions',
      description: 'Elevate your business with blockchain-powered solutions for supply chain management, enabling streamlined operations across all industries.',
      features: [
        'Advanced Analytics Dashboard',
        'Multi-user Access Controls',
        'Global Integration Capabilities',
        'Automated Workflow Management',
        'Enterprise-grade Security',
        '24/7 Premium Support'
      ],
      link: '/enterprise',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'BTNT Docs',
      subtitle: 'Blockchain Document Management',
      description: 'Blockchain-based digital documents solution provides secure and transparent documentation for the shipping industry.',
      features: [
        'Bill of Lading Management',
        'Proforma Invoice Generation',
        'Commercial Invoice Processing',
        'QR Code Integration',
        'Tamper-proof Security',
        'End-to-end Encryption'
      ],
      link: '/docs',
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: Truck,
      title: 'BTNT Transport',
      subtitle: 'Logistics & Shipping Platform',
      description: 'Shipment booking platform streamlines the logistics process, increasing efficiency and reducing costs for all parties involved.',
      features: [
        'Real-time Cargo Tracking',
        'Multi-modal Transportation',
        'Automated Quote Generation',
        'Crypto Payment Integration',
        'Live Shipping Leads',
        'Mobile Access'
      ],
      link: '/transport',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive blockchain solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="space-y-12">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="lg:w-1/2 p-12 lg:p-16">
                  <div className={`w-20 h-20 ${service.bgColor} rounded-3xl flex items-center justify-center mb-8`}>
                    <service.icon className={`h-10 w-10 ${service.textColor}`} />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-2">{service.subtitle}</p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.link}
                    className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                  <div className="absolute inset-0 shipping-pattern opacity-20"></div>
                  <div className="relative h-96 lg:h-full flex items-center justify-center p-12">
                    <div className="text-center text-white">
                      <service.icon className="h-24 w-24 mx-auto mb-6 opacity-80" />
                      <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                      <p className="text-lg opacity-90">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  )
}



