import type { ReactNode } from "react";

export type LogoCloudItem = {
  name: string;
  logo: ReactNode;
  href?: string;
};

export type LogoCloudProps = {
  title?: string;
  description?: string;
  items: LogoCloudItem[];
  className?: string;
};

export function LogoCloud({
  title = "Trusted by growing teams",
  description = "Companies choose us for clear communication, reliable delivery, and measurable results.",
  items,
  className = "",
}: LogoCloudProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Trusted partners
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((item) => {
              const content = (
                <div className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {item.logo}
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                </div>
              );

              if (item.href) {
                return (
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
                );
              }

              return <div key={item.name}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;
