type Stat = {
  label: string;
  value: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-10 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-semibold tracking-tight text-slate-950">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;
