import Link from "next/link";

type ButtonGroupProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ButtonGroup({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: ButtonGroupProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:brightness-110"
      >
        {primaryLabel}
      </Link>
      {secondaryLabel && secondaryHref ? (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
        >
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}

export default ButtonGroup;
