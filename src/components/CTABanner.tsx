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
    <section className="px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-amber-500 px-6 py-10 text-center text-slate-950 shadow-xl shadow-amber-500/20 sm:px-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/70">
            Ready when you are
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-900/80 sm:text-lg">
            {description}
          </p>

          <div className="mt-8">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-amber-500"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
