import { cn } from "@/lib/utils";

export type TeamMemberCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function TeamMemberCard({
  icon,
  title,
  description,
  className,
}: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 ring-1 ring-inset ring-blue-100 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default TeamMemberCard;
