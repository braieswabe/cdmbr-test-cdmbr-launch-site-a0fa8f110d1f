"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQAccordionProps = {
  items: FAQItem[];
  title?: string;
  description?: string;
};

export function FAQAccordion({
  items,
  title = "Frequently asked questions",
  description = "Clear answers to the questions teams ask most often before starting a project.",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          FAQ
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 transition-all duration-300 hover:border-blue-200"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQAccordion;
