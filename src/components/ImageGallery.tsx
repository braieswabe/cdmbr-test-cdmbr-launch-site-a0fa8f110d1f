type ImageGalleryProps = {
  items: { title: string; caption: string }[];
};

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.title}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="aspect-[4/3] bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(124,58,237,0.12),rgba(245,158,11,0.12))]" />
          <figcaption className="p-5">
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ImageGallery;
