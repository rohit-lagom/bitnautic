'use client';
import { motion } from 'framer-motion';

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Streamline production-to-delivery processes',
      image:
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Retail & E-commerce',
      description: 'Optimize inventory and fulfillment operations',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Logistics & 3PL',
      description: 'Enhance carrier and warehouse management',
      image:
        'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Food & Beverage',
      description: 'Ensure cold chain compliance and traceability',
      image:
        'https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Tailored blockchain solutions for traceability, transparency, and compliance across global industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-blue-400/30"
            >
              {/* Top Image */}
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-5 transition-colors duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-white mb-1 transition-opacity duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-blue-100">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
