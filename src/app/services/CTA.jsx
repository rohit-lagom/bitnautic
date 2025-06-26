'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-20 bg-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <div className="absolute inset-0 shipping-pattern opacity-20"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white space-y-8"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Ready to Modernize Your Operations?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Choose the service that best fits your needs and start transforming your business today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link
                            href="/enterprise"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Enterprise Solutions
                        </Link>
                        <Link
                            href="/transport"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Start Shipping
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}