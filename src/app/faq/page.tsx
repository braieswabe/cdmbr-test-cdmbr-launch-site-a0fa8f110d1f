```typescript
'use client';

import { FC, useState } from 'react';
import { NavBar, Footer, CTABanner } from '@/components';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a range of services including web development, branding, and digital marketing.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on complexity, but we provide estimates during the consultation.',
  },
  {
    question: 'Do you offer support after project completion?',
    answer: 'Yes, we offer ongoing support and maintenance packages for our clients.',
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Absolutely! Visit our portfolio page to see our completed projects.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer transparent pricing based on project scope. Contact us for a detailed quote.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out via our contact form, and we’ll schedule a consultation.',
  },
  {
    question: 'What if I have more questions?',
    answer: 'Feel free to contact us directly for any additional inquiries.',
  },
  {
    question: 'Do you work with remote clients?',
    answer: 'Yes, we work with clients from all over the world, ensuring seamless communication.',
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-50">
      <NavBar />
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && <p className="py-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
      <CTABanner title="Still have questions?" description="Contact us for more information!" />
      <Footer />
    </main>
  );
};

export default FAQPage;
```