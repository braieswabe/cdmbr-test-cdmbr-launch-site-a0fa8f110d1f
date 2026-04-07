type SocialProofStripProps = {
  items: string[];
};

export function SocialProofStrip({ items }: SocialProofStripProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default SocialProofStrip;
