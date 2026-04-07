import { cn } from "@/lib/cn";

type ProjectCardProps = {
  number?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function ProjectCard({
  number,
  icon,
  title,
  description,
  className
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[var(--color-primary)]">
            {icon}
          </div>
        ) : number ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white">
            {number}
          </div>
        ) : null}
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default ProjectCard;
