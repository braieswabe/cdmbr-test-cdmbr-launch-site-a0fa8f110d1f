import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

type PricingTableProps = {
  tiers: PricingTier[];
  className?: string;
};

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-3", className)}>
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className={cn(
            "relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
            tier.popular
              ? "border-blue-600 ring-1 ring-blue-600/20"
              : "border-slate-200"
          )}
        >
          {tier.popular ? (
            <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-600/20">
              Most Popular
            </div>
          ) : null}

          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              {tier.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {tier.description}
            </p>
          </div>

          <div className="mb-6 flex items-end gap-2">
            <span className="text-5xl font-semibold tracking-tight text-slate-900">
              {tier.price}
            </span>
          </div>

          <ul className="mb-8 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link
              href={tier.ctaHref}
              className={cn(
                "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
                tier.popular
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/25"
                  : "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
              )}
            >
              {tier.ctaLabel}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PricingTable;
