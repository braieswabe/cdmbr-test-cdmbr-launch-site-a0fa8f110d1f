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
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Join Our Team" subtitle="Explore exciting career opportunities with us!" />

      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Current Job Openings</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-700">We are looking for a skilled Frontend Developer to join our team. If you have a passion for creating beautiful user experiences, we want to hear from you!</p>
            <a href="/apply/frontend-developer" className="text-blue-500 hover:underline">Apply Now</a>
          </li>
          <li className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Backend Developer</h3>
            <p className="text-gray-700">Join us as a Backend Developer and help us build robust server-side applications. Your expertise will be crucial in our mission to deliver top-notch services.</p>
            <a href="/apply/backend-developer" className="text-blue-500 hover:underline">Apply Now</a>
          </li>
          <li className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Product Manager</h3>
            <p className="text-gray-700">We are seeking a Product Manager to lead our product development efforts. If you have a knack for strategy and execution, we want you on our team!</p>
            <a href="/apply/product-manager" className="text-blue-500 hover:underline">Apply Now</a>
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 w-full py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Company Culture</h2>
          <p className="text-lg text-gray-700 mb-6">At our company, we foster a culture of collaboration, innovation, and inclusivity. We believe in empowering our employees to take ownership of their work and contribute to our shared success.</p>
          <p className="text-lg text-gray-700">We offer competitive benefits, flexible working hours, and opportunities for professional growth. Join us and be part of a team that values your contributions!</p>
        </div>
      </section>

      <CTABanner title="Ready to make an impact?" subtitle="Apply today and start your journey with us!" buttonText="Explore Careers" buttonLink="/careers" />
      <Footer />
    </main>
  );
};

export default CareersPage;