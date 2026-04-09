import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoStripItem = {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
};

export type LogoStripProps = {
  title?: string;
  subtitle?: string;
  items: LogoStripItem[];
  className?: string;
};

export function LogoStrip({
  title = "Trusted by growing teams",
  subtitle = "Used by founders, operators, and in-house teams that need a polished web presence that converts.",
  items,
  className,
}: LogoStripProps) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-primary)]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => {
            const content = (
              <div className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="max-h-10 w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
                />
              </div>
            );

            return item.href ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={item.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
