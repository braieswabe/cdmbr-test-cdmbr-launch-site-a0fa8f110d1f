import type { ReactNode } from "react";

type TestimonialCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function TestimonialCard({
  icon,
  number,
  title,
  description,
}: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-secondary)] shadow-sm">
        {icon ?? <span className="text-sm font-bold">{number ?? "01"}</span>}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default TestimonialCard;
