import { Button } from "@/components/Button";

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
}: CTABannerProps): JSX.Element {
  return (
    <section className="rounded-3xl bg-accent px-6 py-12 text-slate-950 shadow-xl shadow-amber-500/10 sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/70">
          Ready when you are
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{headline}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-900/80 sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <Button href={buttonHref} variant="primary" size="lg" className="bg-slate-950 text-white hover:bg-slate-800">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
