import Link from "next/link";

export type CTABannerProps = {
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
    <section className="bg-amber-500 px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-3xl bg-white/10 p-8 text-center text-white shadow-xl ring-1 ring-white/15 backdrop-blur-sm sm:p-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
            {description}
          </p>
        </div>

        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-amber-600 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-50"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
