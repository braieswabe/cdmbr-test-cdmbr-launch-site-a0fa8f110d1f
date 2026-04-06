```typescript
"use client";

import { useState } from "react";
import { Hero, CTABanner } from "@/components";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including web development, design, and digital marketing.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity, but we always strive to deliver on time.",
  },
  {
    question: "Can you work with my existing team?",
    answer: "Absolutely! We can seamlessly integrate with your team to achieve your goals.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer transparent pricing based on project scope and requirements.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer ongoing support and maintenance for all our projects.",
  },
  {
    question: "How do I get started?",
    answer: "Simply reach out through our contact form, and we'll guide you from there.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col items-center">
      <Hero title="Frequently Asked Questions" subtitle="Your Questions Answered" />
      <section className="w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ List</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
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
      <CTABanner title="Still Have Questions?" subtitle="Contact us for more information!" />
    </main>
  );
};

export default FAQPage;
```