'use client';

import { FC, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';

const questionsAndAnswers = [
  {
    question: 'What services do you offer?',
    answer: 'We provide a range of services including web development, mobile app development, and digital marketing.',
  },
  {
    question: 'How can I get a quote?',
    answer: 'You can request a quote by filling out our contact form, and we will get back to you shortly.',
  },
  {
    question: 'What is your project turnaround time?',
    answer: 'Our project turnaround time varies based on complexity, but we strive to deliver within agreed timelines.',
  },
  {
    question: 'Do you offer support after project completion?',
    answer: 'Yes, we offer ongoing support and maintenance for all our projects.',
  },
  {
    question: 'Can I see examples of your previous work?',
    answer: 'Absolutely! You can view our portfolio to see our past projects.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit cards, PayPal, and bank transfers.',
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'We follow a rigorous quality assurance process to ensure that every project meets our high standards.',
  },
  {
    question: 'What if I have more questions?',
    answer: 'Feel free to reach out through our contact form, and we will be happy to assist you.',
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="border-b py-2">
              <button onClick={() => toggleQuestion(index)} className="w-full text-left text-lg font-semibold">
                {item.question}
              </button>
              {openIndex === index && <p className="mt-2 text-gray-700">{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>
      <CTABanner title="Still have questions?" subtitle="Contact us for more information!" />
      <Footer />
    </div>
  );
};

export default FAQPage;