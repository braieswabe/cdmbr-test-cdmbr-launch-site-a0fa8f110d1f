import type { ReactNode } from "react";

type BlogCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function BlogCard({ icon, number, title, description }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[var(--color-primary)]">
        {icon ?? <span className="text-sm font-bold">{number ?? "01"}</span>}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default BlogCard;
