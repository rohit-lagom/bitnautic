'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  FileText,
  Truck,
  ArrowRight,
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'BTNT Enterprise',
      description:
        'Elevate your business with blockchain-powered solutions for supply chain management, enabling streamlined operations across all industries.',
      link: '/enterprise',
      color: 'bg-blue-500',
      image:
        'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: FileText,
      title: 'BTNT Docs',
      description:
        'Blockchain-based digital documents solution provides secure and transparent documentation for the shipping industry.',
      link: '/docs',
      color: 'bg-green-500',
      image:
        'https://images.pexels.com/photos/590044/pexels-photo-590044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Truck,
      title: 'BTNT Transport',
      description:
        'Shipment booking platform streamlines the logistics process, increasing efficiency and reducing costs for all parties involved.',
      link: '/transport',
      color: 'bg-purple-500',
      image:
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Our Solutions
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Blockchain Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeInOut',
              }}
              viewport={{ once: true }}
              className="relative group bg-white/80 border border-white/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)] hover:backdrop-blur-xl hover:bg-white/90 hover:border-blue-400 hover:-translate-y-2"
            >
              {/* Image with smooth zoom */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.05] will-change-transform"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div
                  className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-[700ms] ease-in-out group-hover:scale-110 shadow-md will-change-transform`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
