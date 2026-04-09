import { cn } from "@/lib/utils";

export type StatItem = {
  label: string;
  value: string;
  description?: string;
};

export type StatsRowProps = {
  title?: string;
  subtitle?: string;
  items: StatItem[];
  className?: string;
};

export function StatsRow({
  title = "Results that matter",
  subtitle = "Clear metrics that help visitors understand the impact quickly.",
  items,
  className,
}: StatsRowProps) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-700">{item.label}</div>
              {item.description ? (
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsRow;
