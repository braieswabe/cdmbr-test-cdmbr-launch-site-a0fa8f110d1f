import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

```typescript
import { Hero, CTABanner, ServiceCard } from "@/components";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with integrated payment solutions.",
    tags: ["Web Development", "E-commerce", "React"],
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Portfolio Site",
    description: "A personal portfolio site showcasing design and development skills.",
    tags: ["Web Design", "Personal Branding", "Next.js"],
    image: "/images/portfolio.jpg",
  },
  {
    title: "Blog Platform",
    description: "A dynamic blog platform with user authentication and commenting features.",
    tags: ["Web Development", "Blog", "Node.js"],
    image: "/images/blog.jpg",
  },
  {
    title: "Corporate Website",
    description: "A sleek corporate site that highlights company values and services.",
    tags: ["Web Development", "Corporate", "Tailwind CSS"],
    image: "/images/corporate.jpg",
  },
  {
    title: "Landing Page",
    description: "An engaging landing page designed to convert visitors into leads.",
    tags: ["Web Design", "Marketing", "HTML"],
    image: "/images/landing.jpg",
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile application for managing tasks efficiently.",
    tags: ["Mobile Development", "React Native", "Productivity"],
    image: "/images/mobileapp.jpg",
  },
];

const PortfolioPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Our Portfolio" subtitle="Showcasing Our Best Work" />
      <section className="w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} layout="responsive" width={400} height={300} className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <h2 className="text-2xl font-bold text-center mb-4">Notable Clients</h2>
        <ul className="list-disc list-inside">
          <li>Company A</li>
          <li>Company B</li>
          <li>Company C</li>
          <li>Company D</li>
        </ul>
      </section>
      <CTABanner title="Ready to Start Your Project?" subtitle="Contact us today to discuss your needs!" />
    </main>
  );
};

export default PortfolioPage;
```