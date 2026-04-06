'use client';

import { useState } from "react";
import { CTABanner } from "@/components/CTABanner";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including web development, design, and digital marketing.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity, but we always aim to meet deadlines.",
  },
  {
    question: "Can you work with existing websites?",
    answer: "Yes, we can enhance and optimize your existing website.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer transparent pricing based on project scope and requirements.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Absolutely! We offer ongoing support and maintenance services.",
  },
  {
    question: "How can I get a quote?",
    answer: "You can contact us through our website to get a personalized quote.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    question: "Can I see your previous work?",
    answer: "Yes, you can check our portfolio for examples of our work.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <section className="w-full max-w-2xl p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button onClick={() => toggleFAQ(index)} className="w-full text-left text-lg font-semibold focus:outline-none">
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </section>
      <CTABanner title="Still Have Questions?" subtitle="Reach out to us for more information!" />
    </main>
  );
}