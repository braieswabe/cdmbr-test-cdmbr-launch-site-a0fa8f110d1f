import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const services = [
  { title: "Web Development", description: "Custom web applications tailored to your business needs." },
  { title: "Mobile App Development", description: "Engaging mobile applications for iOS and Android." },
  { title: "Cloud Solutions", description: "Scalable cloud solutions to enhance your business operations." },
];

export default function Services() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Our Services" />
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
        <p className="text-lg mb-6">
          We offer a range of services designed to help your business succeed in the digital landscape.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeatureCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6">Our Process</h2>
        <ol className="list-decimal list-inside">
          <li className="mb-2">Consultation: We discuss your needs and goals.</li>
          <li className="mb-2">Planning: We create a tailored strategy for your project.</li>
          <li className="mb-2">Development: Our team builds your solution with precision.</li>
          <li className="mb-2">Testing: We ensure everything works seamlessly.</li>
          <li className="mb-2">Launch: Your solution goes live, and we support you every step of the way.</li>
        </ol>
      </section>
      <CTABanner 
        title="Interested in our services?" 
        cta="Contact Us Today" 
      />
      <Footer />
    </main>
  );
}