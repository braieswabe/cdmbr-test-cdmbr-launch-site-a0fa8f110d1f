import { cn } from "@/lib/utils";

export type SocialProofStat = {
  value: string;
  label: string;
};

export type SocialProofBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  stats: SocialProofStat[];
  className?: string;
};

export function SocialProofBanner({
  eyebrow = "Trusted by growing teams",
  title,
  description = "Clear results, reliable delivery, and a process built to keep projects moving.",
  stats,
  className,
}: SocialProofBannerProps) {
  return (
    <section
      aria-label="Social proof"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-md sm:px-8 sm:py-10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 opacity-80" />
      <div className="relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                {description}
              </p>
            ) : null}
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
            Proven outcomes, not promises
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={`${stat.label}-${stat.value}`}
              className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-3xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofBanner;
