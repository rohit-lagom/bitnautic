'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
} from 'lucide-react';
export default function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                        Get in Touch with BitNautic Experts
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Please fill out the form below, and we will get back to you as soon as possible.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link
                            href="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                        >
                            <Mail className="h-5 w-5" />
                            <span>Contact Us</span>
                        </Link>

                        <Link
                            href="tel:+1234567890"
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                        >
                            <Phone className="h-5 w-5" />
                            <span>Call Now</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}



