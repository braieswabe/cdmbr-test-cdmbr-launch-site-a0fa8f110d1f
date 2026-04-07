import Link from "next/link";
import { Check } from "lucide-react";

export type PricingTier = {
  planName: string;
  price: string;
  description?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

export type PricingTableProps = {
  tiers: PricingTier[];
};

export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Transparent pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose the plan that matches your growth stage
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Clear pricing, no hidden fees, and flexible options designed to help
            you move forward with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.planName}
              className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                tier.popular
                  ? "border-blue-600 bg-white ring-2 ring-blue-600/20"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.popular ? (
                <div className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  Most popular
                </div>
              ) : null}

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  {tier.planName}
                </h3>
                {tier.description ? (
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {tier.description}
                  </p>
                ) : null}
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  <span className="pb-1 text-sm text-slate-500">/month</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={tier.ctaHref}
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
