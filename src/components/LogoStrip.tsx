type LogoStripProps = {
  logos: string[];
};

export function LogoStrip({ logos }: LogoStripProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {logos.map((logo) => (
        <div
          key={logo}
          className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-500 shadow-sm"
        >
          {logo}
        </div>
      ))}
    </div>
  );
}

export default LogoStrip;
