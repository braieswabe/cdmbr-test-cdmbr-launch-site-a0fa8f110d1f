type Stat = {
  value: string;
  label: string;
};

type StatsRowProps = {
  stats: Stat[];
};

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
          <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsRow;
