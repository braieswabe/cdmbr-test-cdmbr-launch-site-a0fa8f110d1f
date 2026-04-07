"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
  badge?: string;
  disabled?: boolean;
};

export type TabsProps = {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
  tabListClassName?: string;
  tabPanelClassName?: string;
  onTabChange?: (tabId: string) => void;
};

export function Tabs({
  tabs,
  defaultTabId,
  className,
  tabListClassName,
  tabPanelClassName,
  onTabChange,
}: TabsProps) {
  const firstEnabledTab = useMemo(
    () => tabs.find((tab) => !tab.disabled)?.id ?? tabs[0]?.id ?? "",
    [tabs]
  );

  const [activeTab, setActiveTab] = useState(defaultTabId ?? firstEnabledTab);

  const activeTabData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Content tabs"
        className={cn(
          "inline-flex w-full flex-wrap gap-2 rounded-2xl bg-slate-100 p-2",
          tabListClassName
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              disabled={tab.disabled}
              onClick={() => {
                if (tab.disabled) return;
                setActiveTab(tab.id);
                onTabChange?.(tab.id);
              }}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                isActive
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:bg-white/70 hover:text-slate-900",
                tab.disabled && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-slate-600"
              )}
            >
              <span>{tab.label}</span>
              {tab.badge ? (
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  {tab.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        id={`tabpanel-${activeTabData?.id ?? "default"}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTabData?.id ?? "default"}`}
        className={cn("mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6", tabPanelClassName)}
      >
        {activeTabData?.content}
      </div>
    </div>
  );
}

export default Tabs;
