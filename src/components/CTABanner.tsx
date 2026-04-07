import Link from "next/link";

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && <p className="text-xl opacity-90 mb-8">{description}</p>}
        <Link
          href={buttonHref}
          className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
