import { Button } from "@/components/Button";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export function Hero({ title, subtitle, ctaLabel, ctaHref }: HeroProps): JSX.Element {
  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
            Strategy, design, and delivery that move your business forward
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaHref} size="lg" className="bg-white text-slate-950 hover:bg-slate-100">
              {ctaLabel}
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white">
              Talk to our team
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Fast, responsive builds",
              "Clear messaging that converts",
              "Accessible by default",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
          <div className="rounded-2xl bg-white p-6 text-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What you get</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li>• A polished website that builds trust in seconds</li>
              <li>• Clear calls to action across every key page</li>
              <li>• Modular sections designed to scale with your content</li>
              <li>• Mobile-first layouts that look sharp on every screen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
