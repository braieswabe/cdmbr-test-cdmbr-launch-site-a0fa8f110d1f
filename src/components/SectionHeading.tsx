import type { ReactNode } from "react";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex w-full flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}

export default SectionHeading;
