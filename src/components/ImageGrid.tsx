"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageGridItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export type ImageGridProps = {
  items: ImageGridItem[];
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
  imageClassName?: string;
  showCaptions?: boolean;
  rounded?: boolean;
};

const columnClasses: Record<NonNullable<ImageGridProps["columns"]>, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapClasses: Record<NonNullable<ImageGridProps["gap"]>, string> = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

export function ImageGrid({
  items,
  columns = 3,
  gap = "md",
  className,
  imageClassName,
  showCaptions = true,
  rounded = true,
}: ImageGridProps) {
  return (
    <div className={cn("grid", columnClasses[columns], gapClasses[gap], className)}>
      {items.map((item, index) => {
        const width = item.width ?? 1200;
        const height = item.height ?? 900;

        return (
          <figure
            key={`${item.src}-${index}`}
            className={cn(
              "group overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
              rounded ? "rounded-2xl" : "rounded-none"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={item.priority}
                sizes={
                  columns === 4
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    : columns === 2
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className={cn(
                  "object-cover transition-transform duration-500 group-hover:scale-105",
                  imageClassName
                )}
                width={width}
                height={height}
              />
            </div>

            {showCaptions && (item.title || item.description) ? (
              <figcaption className="space-y-1 p-4">
                {item.title ? (
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                ) : null}
                {item.description ? (
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}

export default ImageGrid;
