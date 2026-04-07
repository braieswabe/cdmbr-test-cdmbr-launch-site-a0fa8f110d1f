import type { Metadata } from "next";

export const metadata: Metadata = { title: "Case Studies | TEST CDMBR Launch Site", description: "Learn more about our case studies" };

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Discover what makes us different</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At TEST CDMBR Launch Site, we are dedicated to providing the best case studies experience.
            Our team of experts works tirelessly to exceed your expectations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With years of industry experience and a passion for excellence,
            we deliver results that truly make a difference.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-3">
            {["Expert team with proven experience", "Tailored solutions for every client", "Transparent communication throughout", "Results-driven approach"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>
      </section>
    </>
  );
}