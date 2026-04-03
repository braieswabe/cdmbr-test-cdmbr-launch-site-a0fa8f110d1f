import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

```typescript
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";

const services = [
  { title: "Consulting", description: "Expert advice to help you navigate your challenges." },
  { title: "Development", description: "Custom software solutions tailored to your needs." },
  { title: "Support", description: "Ongoing support to ensure your success." },
];

export default function Services() {
  return (
    <div>
      <NavBar />
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-4 bg-gray-100 rounded shadow">
              <h3 className="font-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Our Process</h2>
        <ol className="mt-8 list-decimal list-inside">
          <li>Initial Consultation</li>
          <li>Needs Assessment</li>
          <li>Implementation</li>
          <li>Ongoing Support</li>
        </ol>
      </section>
      <CTABanner
        title="Ready to Get Started?"
        ctaText="Contact Us"
        ctaLink="/contact"
      />
      <Footer />
    </div>
  );
}
```