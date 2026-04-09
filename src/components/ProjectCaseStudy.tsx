import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectCaseStudyProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: React.ReactNode;
  imageAlt?: string;
  metrics?: ProjectMetric[];
  outcomes?: string[];
  href?: string;
  hrefLabel?: string;
  className?: string;
};

export function ProjectCaseStudy({
  eyebrow = "Case study",
  title,
  description,
  image,
  imageAlt = "",
  metrics = [],
  outcomes = [],
  href,
  hrefLabel = "View project",
  className = "",
}: ProjectCaseStudyProps) {
  return (
    <article
      className={[
        "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      ].join(" ")}
    >
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative min-h-[260px] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-6 sm:p-8">
          <div className="absolute left-6 top-6 inline-flex items-center rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
            {eyebrow}
          </div>

          <div className="flex h-full items-center justify-center pt-10">
            {image ? (
              <div aria-label={imageAlt} className="w-full">
                {image}
              </div>
            ) : (
              <div className="w-full rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center shadow-sm backdrop-blur">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  Add a project visual, dashboard screenshot, or product mockup.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>

            {metrics.length > 0 && (
              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={`${metric.label}-${metric.value}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <dt className="text-sm font-medium text-slate-500">{metric.label}</dt>
                    <dd className="mt-1 text-xl font-semibold text-slate-900">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {outcomes.length > 0 && (
              <ul className="mt-6 space-y-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {href ? (
            <div className="mt-8">
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                {hrefLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCaseStudy;
