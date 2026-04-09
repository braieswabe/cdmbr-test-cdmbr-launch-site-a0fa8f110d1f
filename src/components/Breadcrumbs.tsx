import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={["flex flex-wrap items-center gap-2 text-sm text-slate-500", className].join(" ")}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const content = (
          <span
            className={
              isLast
                ? "font-medium text-slate-900"
                : "transition-colors hover:text-primary"
            }
          >
            {item.label}
          </span>
        );

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true" className="text-slate-300">/</span> : null}
            {item.href && !isLast ? (
              <Link href={item.href} className="rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30">
                {content}
              </Link>
            ) : (
              content
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
