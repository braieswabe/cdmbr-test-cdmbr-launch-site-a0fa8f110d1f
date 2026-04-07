import { ReactNode } from "react";
import Link from "next/link";

export type BlogPostCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  category?: string;
  readTime?: string;
};

export function BlogPostCard({
  icon,
  title,
  description,
  href,
  category = "Insights",
  readTime = "5 min read",
}: BlogPostCardProps) {
  const CardContent = (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 text-violet-600 ring-1 ring-violet-100">
          {icon}
        </div>
        <div className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
          {category}
        </div>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-medium text-slate-500">{readTime}</span>
        <span className="text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
          Learn more
        </span>
      </div>
    </article>
  );

  if (!href) {
    return CardContent;
  }

  return (
    <Link href={href} className="block h-full">
      {CardContent}
    </Link>
  );
}

export default BlogPostCard;
