import Image from "next/image";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width: number;
  height: number;
};

export type ImageGalleryProps = {
  title?: string;
  description?: string;
  images: GalleryImage[];
  className?: string;
};

export function ImageGallery({
  title = "Selected work that shows the quality, consistency, and attention to detail behind every project",
  description = "A curated gallery of polished visuals designed to build trust, communicate capability, and support stronger conversion.",
  images,
  className,
}: ImageGalleryProps) {
  return (
    <section
      className={cn("rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8", className)}
      aria-labelledby="image-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2
            id="image-gallery-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {(image.title || image.description) ? (
                <figcaption className="space-y-1 p-4">
                  {image.title ? (
                    <h3 className="text-sm font-semibold text-slate-900">
                      {image.title}
                    </h3>
                  ) : null}
                  {image.description ? (
                    <p className="text-sm leading-6 text-slate-600">
                      {image.description}
                    </p>
                  ) : null}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
