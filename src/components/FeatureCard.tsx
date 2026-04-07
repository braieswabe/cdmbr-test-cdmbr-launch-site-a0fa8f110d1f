import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/20 transition-transform duration-200 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default FeatureCard;
