import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with a sleek design.",
    tags: ["E-commerce", "Web Development"],
    image: "/images/ecommerce.png",
  },
  {
    title: "Portfolio Site",
    description: "A personal portfolio showcasing creative work and projects.",
    tags: ["Portfolio", "Design"],
    image: "/images/portfolio.png",
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with user-friendly features.",
    tags: ["Blog", "CMS"],
    image: "/images/blog.png",
  },
  {
    title: "Corporate Website",
    description: "A professional corporate site with a focus on branding.",
    tags: ["Corporate", "Web Development"],
    image: "/images/corporate.png",
  },
  {
    title: "Landing Page",
    description: "An engaging landing page designed to convert visitors.",
    tags: ["Landing Page", "Marketing"],
    image: "/images/landing.png",
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile application for seamless user experience.",
    tags: ["Mobile", "App Development"],
    image: "/images/mobile.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Our Portfolio" subtitle="Showcasing our expertise and quality of work." />
      <section className="w-full max-w-6xl p-4">
        <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-center">{project.description}</p>
                <p className="mt-2">{project.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABanner title="Ready to Start Your Project?" subtitle="Contact us today to discuss your needs." />
    </main>
  );
}