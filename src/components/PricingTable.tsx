import Link from "next/link";

type PricingTableProps = {
  planName: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

export function PricingTable({
  planName,
  price,
  features,
  ctaLabel,
  ctaHref,
  popular = false,
}: PricingTableProps) {
  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
        popular
          ? "border-blue-600 ring-2 ring-blue-600/10"
          : "border-slate-200",
      ].join(" ")}
    >
      {popular ? (
        <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Most Popular
        </div>
      ) : null}

      <div className="pr-24">
        <h3 className="text-xl font-bold text-slate-900">{planName}</h3>
        <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          {price}
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Transparent pricing with no hidden fees.
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className={[
            "inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
            popular
              ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
              : "bg-slate-950 text-white hover:bg-slate-800 focus:ring-slate-950",
          ].join(" ")}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default PricingTable;
