import type { ReactNode } from "react";

type TestimonialCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function TestimonialCard({ icon, title, description }: TestimonialCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563eb] ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-100">
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default TestimonialCard;
