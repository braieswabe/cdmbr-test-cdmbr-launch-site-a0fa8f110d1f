import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageGridItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width: number;
  height: number;
};

export type ImageGridProps = {
  title?: string;
  subtitle?: string;
  items: ImageGridItem[];
  className?: string;
};

export function ImageGrid({
  title = "Selected work",
  subtitle = "A flexible gallery layout for case studies, portfolio highlights, and visual proof.",
  items,
  className,
}: ImageGridProps) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <figure
              key={`${item.src}-${item.alt}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {(item.title || item.description) && (
                <figcaption className="p-5">
                  {item.title ? (
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  ) : null}
                  {item.description ? (
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  ) : null}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGrid;
