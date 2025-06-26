'use client';
import {motion} from 'framer-motion';

export default function Hero  ()  {
  return (
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
  
       
        <div className="absolute inset-0 shipping-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-34 lg:py-40 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
                  About BitNautic
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Transforming Global
                  <span className="block text-blue-300">Supply Chains</span>
                </h1>
              </div>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Aiming to serve humanity by providing effective solutions, we came up with an idea which transforms one of the biggest industries in the world – The shipping industry.
              </p>
              
              <p className="text-blue-200 leading-relaxed">
                Our team of high-tech enthusiasts believe in change and that's why we have developed the BitNautic platform by integrating the most disruptive technology of this era – The blockchain technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2144905/pexels-photo-2144905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Modern shipping port"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  )
}



