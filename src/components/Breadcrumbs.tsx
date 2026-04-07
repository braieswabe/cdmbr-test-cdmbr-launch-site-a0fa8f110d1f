import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("w-full", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = item.current || isLast || !item.href;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" /> : null}

              {isCurrent ? (
                <span
                  aria-current="page"
                  className="font-medium text-slate-900"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="rounded-md transition-colors hover:text-blue-600 hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
