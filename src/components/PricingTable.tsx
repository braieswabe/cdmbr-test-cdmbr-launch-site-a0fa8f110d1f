import Link from "next/link";
import { Check } from "lucide-react";

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
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={[
              "rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
              tier.highlighted
                ? "border-[var(--color-primary)] bg-[linear-gradient(180deg,rgba(37,99,235,0.06),white)] ring-1 ring-[var(--color-primary)]/20"
                : "border-slate-200 bg-white"
            ].join(" ")}
          >
            {tier.highlighted ? (
              <p className="mb-4 inline-flex rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </p>
            ) : null}
            <h3 className="text-xl font-semibold text-slate-950">{tier.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{tier.description}</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold tracking-tight text-slate-950">
                {tier.price}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--color-primary)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={tier.ctaHref}
              className={[
                "mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
                tier.highlighted
                  ? "bg-[var(--color-primary)] text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:brightness-110"
                  : "bg-slate-100 text-slate-950 hover:bg-slate-200"
              ].join(" ")}
            >
              {tier.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingTable;
