"use client";

import { cn } from "@/lib/utils";

export type FilterTab = {
  label: string;
  value: string;
  count?: number;
};

export type FilterTabsProps = {
  tabs: FilterTab[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
};

export function FilterTabs({
  tabs,
  activeValue,
  onChange,
  className,
  ariaLabel = "Content filters",
}: FilterTabsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="inline-flex w-full flex-wrap gap-2 rounded-2xl bg-slate-100 p-2"
      >
        {tabs.map((tab) => {
          const active = tab.value === activeValue;

          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(tab.value)}
              className={cn(
                "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-2",
                active
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:bg-white/70 hover:text-slate-900",
              )}
            >
              <span>{tab.label}</span>
              {typeof tab.count === "number" ? (
                <span className="ml-2 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
                  {tab.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterTabs;
