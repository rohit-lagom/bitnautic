'use client';
import { motion } from 'framer-motion';

import {
    Shield,
    Globe,
    Lock,
    Zap,
} from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: Shield,
            title: 'End-to-end Encryption',
            description: 'Ensures that all communications linked to business operations are safe and secured from illegal access or alteration using end-to-end encryption.',
            color: 'text-blue-600'
        },
        {
            icon: Lock,
            title: 'Tamper-proof',
            description: 'Maintain the authenticity of the communication by preventing any modification or alteration of the emails.',
            color: 'text-green-600'
        },
        {
            icon: Globe,
            title: 'Seamless Connectivity',
            description: 'Streamline communication by sharing documents with involved parties, without separate channels.',
            color: 'text-purple-600'
        },
        {
            icon: Zap,
            title: 'Fast Processing',
            description: 'Transfer documents of title with blockchain in seconds, instead of weeks for paper delivery.',
            color: 'text-orange-600'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                        BENEFITS
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Empower Your Business Operations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        with BitNautic's Blockchain Email System
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                        >
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                                <benefit.icon className={`h-8 w-8 ${benefit.color} transition-colors duration-300`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}



