'use client';

import { FC, useState } from 'react';
import { NavBar, Footer, CTABanner } from '@/components';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a range of services including web development, mobile app development, and digital marketing.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can reach our support team via the contact form on our website or by emailing support@example.com.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer competitive pricing based on the scope of the project. Please refer to our pricing page for more details.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer ongoing support and maintenance for all our projects.',
  },
  {
    question: 'Can I see your previous work?',
    answer: 'Absolutely! Please visit our portfolio page to see examples of our work.',
  },
  {
    question: 'What is your project timeline?',
    answer: 'Project timelines vary based on complexity. We will provide an estimated timeline during the consultation.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we specialize in creating custom solutions tailored to your specific needs.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Node.js, and Tailwind CSS to deliver high-quality solutions.',
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
      <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              >
                <h3 className="font-semibold">{faq.question}</h3>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default FAQPage;