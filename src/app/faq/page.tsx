'use client';

import { FC, useState } from 'react';
import { NavBar, Footer, CTABanner } from '@/components';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a range of services including web development, design, and digital marketing.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on complexity, but we provide estimates during the initial consultation.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer ongoing support and maintenance packages for all our projects.',
  },
  {
    question: 'Can you work with existing websites?',
    answer: 'Absolutely! We can enhance and optimize your existing website to meet your goals.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is transparent and based on the scope of the project. We provide detailed quotes.',
  },
  {
    question: 'Do you offer consultations?',
    answer: 'Yes, we offer free initial consultations to discuss your project needs.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Next.js, and Tailwind CSS for our projects.',
  },
  {
    question: 'How can I get started?',
    answer: 'Simply reach out through our contact form, and we’ll get back to you promptly!',
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button onClick={() => toggleFAQ(index)} className="w-full text-left text-lg font-semibold">
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <CTABanner title="Have more questions?" buttonText="Contact Us" />
      <Footer />
    </div>
  );
};

export default FAQPage;