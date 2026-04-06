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
    answer: 'Project timelines vary based on complexity, but we provide estimates during the consultation.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer maintenance and support packages for all our projects.',
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Absolutely! Check out our portfolio for examples of our previous projects.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We provide transparent pricing based on project scope and requirements.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out through our contact form, and we’ll schedule a consultation.',
  },
  {
    question: 'Do you work with remote clients?',
    answer: 'Yes, we work with clients globally and have processes in place for remote collaboration.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We have a flexible cancellation policy that we can discuss during the consultation.',
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
      <h1 className="text-3xl font-bold my-8">Frequently Asked Questions</h1>
      <section className="w-full max-w-2xl p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between w-full text-left font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </section>
      <CTABanner title="Still have questions?" buttonText="Contact Us" />
      <Footer />
    </main>
  );
};

export default FAQPage;