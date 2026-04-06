import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero } from "@/components/Hero";

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="About Us" />
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2010, we started with a vision to provide innovative solutions that empower businesses to thrive in a digital world. Our mission is to deliver exceptional value through our services and foster long-lasting relationships with our clients.
        </p>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li className="mb-2">Innovation: We strive to innovate and improve our services continuously.</li>
          <li className="mb-2">Customer Focus: Our clients are at the heart of everything we do.</li>
        </ul>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Placeholder for team member images */}
          <div className="text-center">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-2"></div>
            <h3 className="font-semibold">Alice Johnson</h3>
            <p>Co-Founder</p>
          </div>
          <div className="text-center">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-2"></div>
            <h3 className="font-semibold">Bob Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="text-center">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-2"></div>
            <h3 className="font-semibold">Charlie Brown</h3>
            <p>Marketing Director</p>
          </div>
          <div className="text-center">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-2"></div>
            <h3 className="font-semibold">Diana Prince</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;