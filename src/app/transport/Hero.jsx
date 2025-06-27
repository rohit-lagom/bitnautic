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
      answer: 'Yes, it depends upon the availability of the cargoes and routes.',
    },
    {
      question: 'What if a ship is not available between my preferred locations?',
      answer:
        'You can raise an enquiry, and merchants will get back to you with a customized package on your official email.',
    },
    {
      question: '24/7 customer service available?',
      answer: 'Yes. You can also reach us at hello@bitnautic.com anytime.',
    },
    {
      question: 'Can I book FCL/LCL containers?',
      answer:
        'Absolutely. We support various container types including standard 20ft, 40ft, refrigerated containers, and more.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Blur background blobs */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Client FAQ's
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-200">
            Browse our FAQs below. If you don’t find what you’re looking for, contact us anytime.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-blue-300 transform transition-transform duration-300 ${
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
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
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
