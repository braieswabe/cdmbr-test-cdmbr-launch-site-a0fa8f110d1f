import { ReactNode } from "react";
import Link from "next/link";

export type ProjectCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  outcome?: string;
  tag?: string;
};

export function ProjectCard({
  icon,
  title,
  description,
  href,
  outcome = "Built for measurable results",
  tag = "Featured project",
}: ProjectCardProps) {
  const card = (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 via-white to-violet-50 text-blue-600 ring-1 ring-blue-100">
          {icon}
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
          {tag}
        </span>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </p>

      <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100">
        <p className="text-sm font-medium text-slate-900">{outcome}</p>
      </div>
    </article>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  );
}

export default ProjectCard;
