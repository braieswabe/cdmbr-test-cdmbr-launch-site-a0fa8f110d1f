import Link from "next/link";

type CTABannerProps = {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTABanner({
  headline,
  description,
  buttonLabel,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-amber-200 bg-[linear-gradient(135deg,rgba(245,158,11,0.14),rgba(124,58,237,0.08),white)] p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
              Ready to move forward?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-600"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
