import Image from "next/image";

type ImageGridProps = {
  images: { src: string; alt: string }[];
};

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.alt} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={700}
              className="h-72 w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageGrid;
