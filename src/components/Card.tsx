import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type CardProps = {
  icon?: LucideIcon;
  number?: string;
  title: string;
  description: string;
  className?: string;
};

export function Card({
  icon: Icon,
  number,
  title,
  description,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        {Icon ? (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        ) : number ? (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/15">
            {number}
          </div>
        ) : null}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default Card;
