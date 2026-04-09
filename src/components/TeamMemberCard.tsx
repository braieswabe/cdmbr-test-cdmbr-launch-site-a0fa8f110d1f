import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type TeamMemberCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
  className?: string;
};

export function TeamMemberCard({
  icon,
  number,
  title,
  description,
  className,
}: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-transform duration-300 group-hover:scale-105">
          {icon ? (
            icon
          ) : (
            <span className="text-lg font-bold">{number ?? "01"}</span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default TeamMemberCard;
