import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type StatItem = {
  label: string;
  value: string;
  description?: string;
  icon?: ReactNode;
};

export type StatsStripProps = {
  title?: string;
  description?: string;
  stats: StatItem[];
  className?: string;
};

export function StatsStrip({
  title = "Trusted by teams that need clarity, speed, and measurable results",
  description = "A concise snapshot of the outcomes clients care about most: faster delivery, stronger conversion, and dependable support.",
  stats,
  className,
}: StatsStripProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8",
        className
      )}
      aria-labelledby="stats-strip-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2
            id="stats-strip-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                {stat.icon ? (
                  <div className="mt-0.5 rounded-xl bg-blue-50 p-2 text-blue-600 ring-1 ring-inset ring-blue-100 transition-colors group-hover:bg-blue-100">
                    {stat.icon}
                  </div>
                ) : null}
                <div className="min-w-0">
                  <dt className="text-sm font-medium text-slate-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                    {stat.value}
                  </dd>
                  {stat.description ? (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default StatsStrip;
