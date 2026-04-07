type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
              {item.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQAccordion;
