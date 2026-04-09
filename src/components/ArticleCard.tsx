import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ArticleCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
  className?: string;
};

export function ArticleCard({
  icon,
  number,
  title,
  description,
  className,
}: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] transition-colors duration-200 group-hover:bg-[color:var(--color-primary)] group-hover:text-white">
          {icon ?? <span className="text-lg font-semibold">{number ?? "01"}</span>}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
