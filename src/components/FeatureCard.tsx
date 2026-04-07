import type { ReactNode } from "react";

type FeatureCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function FeatureCard({
  icon,
  number,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[var(--color-primary)]">
          {icon ?? <span className="text-sm font-bold">{number ?? "01"}</span>}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default FeatureCard;
