import { ReactNode } from "react";

export type ServiceCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function ServiceCard({
  icon,
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-sm">
          {icon ? icon : <span className="text-sm font-bold">{number ?? "01"}</span>}
        </div>
        {number ? (
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {number}
          </span>
        ) : null}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
