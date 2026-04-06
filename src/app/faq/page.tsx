'use client';

import { useState } from 'react';
import { NavBar, Footer, CTABanner } from '@/components';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, mobile app development, and digital marketing services.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on complexity, but we provide estimates during the consultation.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer transparent pricing based on project scope and requirements.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer maintenance and support packages for all our projects.',
  },
  {
    question: 'Can you work with my existing team?',
    answer: 'Absolutely! We can collaborate with your team to ensure project success.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies like React, Node.js, and Tailwind CSS for our projects.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out through our contact form, and we’ll schedule a consultation.',
  },
  {
    question: 'What if I need to make changes during the project?',
    answer: 'We accommodate changes as needed, ensuring your vision is realized.',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <CTABanner 
        title="Still Have Questions?" 
        description="Reach out to us for more information!" 
        buttonText="Contact Us" 
        buttonLink="/contact" 
      />
      <Footer />
    </div>
  );
};

export default FAQPage;