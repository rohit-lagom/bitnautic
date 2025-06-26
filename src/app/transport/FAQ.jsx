'use client';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How much does it cost to ship a product to another country?',
      answer: 'Users will find multiple quotes from multiple shipping service providers. They can select best quote between two countries on their preferred date.',
    },
    {
      question: 'Can I ship product to anywhere in the world?',
      answer: 'Yes, it depends upon the availability of the cargoes.',
    },
    {
      question: 'What if ship is not available between my preferred locations?',
      answer: 'You can raise enquiry and specific merchants can get back to you on your official email id with customized package for you.',
    },
    {
      question: '24/7 customer services?',
      answer: 'Yes. You can also contact on hello@bitnautic.com',
    },
    {
      question: 'Can I book FCL/LCL container?',
      answer: 'Yes. There are also multiple container types like standard 20, refrigerated 40 etc.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Client FAQ's
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Browse our FAQs below. If you cannot find the answer you're looking for, please contact us
          </p>
        </motion.div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}