import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  ctaText = "Get Started",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlighted
          ? "bg-[var(--color-primary)] text-white shadow-2xl scale-105 relative"
          : "bg-white border border-gray-200 shadow-sm"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-sm font-semibold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      {description && (
        <p className={`text-sm mb-4 ${highlighted ? "opacity-90" : "text-gray-500"}`}>{description}</p>
      )}
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`text-sm ${highlighted ? "opacity-80" : "text-gray-500"}`}>{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 ${highlighted ? "text-white" : "text-[var(--color-primary)]"}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
          highlighted
            ? "bg-white text-[var(--color-primary)] hover:bg-gray-100"
            : "bg-[var(--color-primary)] text-white hover:opacity-90"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

export default PricingCard;
