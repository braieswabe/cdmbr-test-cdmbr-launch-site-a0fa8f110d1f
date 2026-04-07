import Image from "next/image";

type LogoCloudProps = {
  logos: { name: string; src: string }[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Trusted by growing teams
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;
