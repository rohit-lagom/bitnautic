'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How much does it cost to ship a product to another country?',
      answer:
        'Users will find multiple quotes from multiple shipping service providers. They can select the best quote between two countries on their preferred date.',
    },
    {
      question: 'Can I ship a product to anywhere in the world?',
      answer: 'Yes, it depends upon the availability of the cargoes and shipping routes.',
    },
    {
      question: 'What if a ship is not available between my preferred locations?',
      answer:
        'You can raise an enquiry, and merchants will contact you via email with a custom quote.',
    },
    {
      question: '24/7 customer support available?',
      answer: 'Yes, BitNautic provides 24/7 support. Reach us at hello@bitnautic.com.',
    },
    {
      question: 'Can I book FCL/LCL containers?',
      answer:
        'Yes. BitNautic supports standard 20ft, refrigerated 40ft, and more container types.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Ambient glass blur effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10" />
      <div className="absolute top-16 right-16 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[100px] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
            Client FAQ's
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-blue-300 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mt-4 text-blue-100 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
