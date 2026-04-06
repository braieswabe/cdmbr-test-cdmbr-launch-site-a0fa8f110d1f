'use client';

import { FC, useState } from 'react';
import { CTABanner, NavBar, Footer } from '@/components';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a range of services including web development, mobile app development, and digital marketing.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on complexity, but we typically deliver within 4-12 weeks.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer transparent pricing based on project scope. Contact us for a detailed quote.',
  },
  {
    question: 'Do you provide support after project completion?',
    answer: 'Yes, we offer ongoing support and maintenance for all our projects.',
  },
  {
    question: 'Can you work with remote teams?',
    answer: 'Absolutely! We have experience collaborating with teams across different time zones.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Next.js, and Tailwind CSS for our projects.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out to us through our contact form, and we’ll guide you through the process.',
  },
  {
    question: 'What if I have more questions?',
    answer: 'Feel free to contact us anytime, we’re here to help!',
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <section className="w-full p-6">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
      <CTABanner
        title="Have more questions?"
        subtitle="Contact us for personalized assistance."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <Footer />
    </main>
  );
};

export default FAQPage;