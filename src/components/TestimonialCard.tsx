import { ReactNode } from "react";

export type TestimonialCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  author?: string;
  role?: string;
};

export function TestimonialCard({
  icon,
  title,
  description,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 ring-1 ring-blue-100 transition-colors group-hover:text-blue-700">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Client feedback
          </p>
          <h3 className="truncate text-lg font-bold text-slate-900">{title}</h3>
        </div>
      </div>

      <blockquote className="text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </blockquote>

      {(author || role) && (
        <footer className="mt-6 border-t border-slate-100 pt-4">
          {author && (
            <p className="font-semibold text-slate-900">{author}</p>
          )}
          {role && <p className="text-sm text-slate-500">{role}</p>}
        </footer>
      )}
    </article>
  );
}

export default TestimonialCard;
