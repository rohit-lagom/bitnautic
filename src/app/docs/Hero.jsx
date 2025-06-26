'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {FileText,Shield,} from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
            <div className="absolute inset-0 shipping-pattern opacity-20"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float-animation"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl float-animation" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg float-animation" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 md:py-34 lg:py-36 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
                                BTNT Docs
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                                Revolutionize Document
                                <span className="block text-blue-300">Management with Blockchain</span>
                            </h1>
                        </div>

                        <p className="text-xl text-blue-100 leading-relaxed">
                            An easy-to-use interface for generating, managing, and sharing various types of documents, including those that are customizable with QR code scanning capabilities.
                        </p>

                        <p className="text-blue-200 leading-relaxed">
                            With BTNT Smart Doc, businesses can rest assured that their documents are always accessible and tamper-proof, ensuring data security and integrity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#documents"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                            >
                                <FileText className="h-5 w-5" />
                                <span>Explore Documents</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-center transform hover:scale-105"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Document management dashboard"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                        </div>

                        <div className="absolute -top-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-2xl">
                            <FileText className="h-8 w-8 text-blue-600 mb-2" />
                            <div className="text-2xl font-bold">1M+</div>
                            <div className="text-sm">Documents</div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-xl shadow-2xl pulse-glow">
                            <Shield className="h-8 w-8 mb-2" />
                            <div className="text-sm font-semibold">100% Secure</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}



