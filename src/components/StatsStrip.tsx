import { ReactNode } from "react";

export type StatItem = {
  label: string;
  value: string;
  description?: string;
  icon?: ReactNode;
};

export type StatsStripProps = {
  stats: StatItem[];
  title?: string;
  description?: string;
};

export function StatsStrip({
  stats,
  title = "Trusted results that move the business forward",
  description = "A concise snapshot of the outcomes clients care about most: speed, quality, and measurable growth.",
}: StatsStripProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-blue-700 p-6 text-white shadow-xl sm:p-8">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-300">
          Performance snapshot
        </p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-blue-50 sm:text-base">
          {description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-blue-50">{stat.label}</p>
              </div>
              {stat.icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-amber-300">
                  {stat.icon}
                </div>
              )}
            </div>

            {stat.description && (
              <p className="mt-4 text-sm leading-6 text-blue-100">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;
