'use client';
import { motion } from 'framer-motion';

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Streamline production-to-delivery processes',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Retail & E-commerce',
      description: 'Optimize inventory and fulfillment operations',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Logistics & 3PL',
      description: 'Enhance carrier and warehouse management',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Food & Beverage',
      description: 'Ensure cold chain compliance and traceability',
      image: 'https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for diverse industry requirements and compliance standards
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-200 text-sm">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}