import Link from "next/link";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

type PricingTableProps = {
  tiers: PricingTier[];
};

export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className={`rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
            tier.highlighted
              ? "border-[var(--color-primary)] bg-blue-50/60 ring-1 ring-blue-200"
              : "border-slate-200 bg-white"
          }`}
        >
          {tier.highlighted ? (
            <p className="mb-4 inline-flex rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
              Most popular
            </p>
          ) : null}
          <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {tier.description}
          </p>
          <div className="mt-6 flex items-end gap-1">
            <span className="text-4xl font-bold tracking-tight text-slate-900">
              {tier.price}
            </span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href={tier.ctaHref}
            className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
              tier.highlighted
                ? "bg-[var(--color-primary)] text-white hover:bg-blue-700"
                : "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
            }`}
          >
            {tier.ctaLabel}
          </Link>
        </article>
      ))}
    </div>
  );
}

export default PricingTable;
