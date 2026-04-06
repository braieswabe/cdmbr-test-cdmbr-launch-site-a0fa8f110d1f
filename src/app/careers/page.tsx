import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn more about careers",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero title="Join Our Team" subtitle="Explore exciting career opportunities with us!" />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Current Job Openings</h2>
          <ul className="space-y-4">
            <li className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-700">Location: Remote</p>
              <p>Join our dynamic team to build user-friendly web applications.</p>
            </li>
            <li className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">Backend Developer</h3>
              <p className="text-gray-700">Location: On-site</p>
              <p>Help us create robust server-side applications and APIs.</p>
            </li>
            <li className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">Product Manager</h3>
              <p className="text-gray-700">Location: Hybrid</p>
              <p>Lead product development from conception to launch.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Company Culture</h2>
          <p className="mb-4">
            At our company, we believe in fostering a collaborative and inclusive environment. Our team is passionate about innovation and dedicated to helping each other grow. We celebrate diversity and strive to create a workplace where everyone feels valued.
          </p>
          <p>
            We offer flexible working hours, regular team-building activities, and a commitment to work-life balance. Join us to be part of a culture that prioritizes both professional development and personal well-being.
          </p>
        </div>
      </section>
      <CTABanner 
        title="Ready to make a difference?" 
        subtitle="Apply now and join our amazing team!" 
        buttonText="View Openings" 
        buttonLink="/careers" 
      />
      <Footer />
    </div>
  );
};

export default CareersPage;