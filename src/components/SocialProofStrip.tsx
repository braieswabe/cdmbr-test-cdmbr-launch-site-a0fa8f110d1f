import { cn } from "@/lib/utils";

export type SocialProofItem = {
  value: string;
  label: string;
  detail?: string;
};

export type SocialProofStripProps = {
  items: SocialProofItem[];
  className?: string;
};

export function SocialProofStrip({
  items,
  className,
}: SocialProofStripProps) {
  return (
    <section
      aria-label="Social proof"
      className={cn(
        "rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-blue-50 p-6 shadow-sm sm:p-8",
        className
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="rounded-2xl bg-white/80 p-4 text-center shadow-sm ring-1 ring-inset ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-2xl font-bold tracking-tight text-slate-900">
              {item.value}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">
              {item.label}
            </div>
            {item.detail ? (
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {item.detail}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialProofStrip;
