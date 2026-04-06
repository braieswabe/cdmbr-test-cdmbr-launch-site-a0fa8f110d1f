'use client';

import { FC, useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including web development, mobile app development, and digital marketing.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on complexity, but we provide estimated timelines during the initial consultation.',
  },
  {
    question: 'Do you provide support after project completion?',
    answer: 'Yes, we offer ongoing support and maintenance packages to ensure your project runs smoothly.',
  },
  {
    question: 'Can you work with existing websites?',
    answer: 'Absolutely! We can enhance and optimize your existing website to meet your needs.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer transparent pricing based on project scope, with options for fixed-price and hourly billing.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out through our contact form, and we’ll schedule a consultation to discuss your project.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Next.js, Node.js, and more to deliver high-quality solutions.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we tailor our solutions to fit your specific requirements and business goals.',
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col items-center">
      <Hero title="Frequently Asked Questions" subtitle="Your queries answered" />
      <section className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
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
      <CTABanner 
        title="Still have questions?" 
        subtitle="Contact us for more information!" 
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  );
};

export default FAQPage;