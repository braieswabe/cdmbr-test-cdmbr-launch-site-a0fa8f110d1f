type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-slate-400 transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default FAQAccordion;
