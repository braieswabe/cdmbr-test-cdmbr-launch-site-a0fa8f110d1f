import type { ReactNode } from "react";

type PortfolioCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function PortfolioCard({
  icon,
  number,
  title,
  description,
}: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-40 bg-[linear-gradient(135deg,rgba(37,99,235,0.14),rgba(124,58,237,0.14),rgba(245,158,11,0.12))]" />
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[var(--color-primary)]">
          {icon ?? <span className="text-sm font-bold">{number ?? "01"}</span>}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;
