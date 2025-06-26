'use client';
import {motion} from 'framer-motion';
import {Target} from 'lucide-react';
const Mission = () => {
  return (
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blockchain technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              {/* <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-xl shadow-2xl">
                <Target className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">Mission Driven</div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our Mission & Vision
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  At BitNautic, we're committed to making sustainability and traceability a priority for businesses of all sizes, empowering them to make a positive impact on the environment and society.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Blockchain in Shipping</h3>
                  <p className="text-gray-600">
                    Blockchain technology appeals to the shipping industry because of its capacity to decrease trade documentation, processing costs, delays, data manipulation, fraud, and human error through unbreakable "smart contracts."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Solutions</h3>
                  <p className="text-gray-600">
                    BitNautic provides start to end digital solution for shipping industry. Right from booking of cargos to creating and storing Bill of Lading on the blockchain to real-time tracking of the shipments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


)
}

export default Mission