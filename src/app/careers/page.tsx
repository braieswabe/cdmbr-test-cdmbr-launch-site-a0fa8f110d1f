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
      <Hero title="Join Our Team" subtitle="Explore exciting career opportunities with us." />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Current Job Openings</h2>
          <ul className="space-y-4">
            <li className="p-4 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-600">We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user-friendly web applications.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </li>
            <li className="p-4 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Product Manager</h3>
              <p className="text-gray-600">Seeking a Product Manager to lead our product development efforts. You will work closely with cross-functional teams to deliver exceptional products.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </li>
            <li className="p-4 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">UX/UI Designer</h3>
              <p className="text-gray-600">Join us as a UX/UI Designer to create intuitive and engaging user experiences. Your creativity will shape our product's look and feel.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Company Culture</h2>
          <p className="text-gray-700 mb-4">At our company, we believe in fostering a collaborative and inclusive environment. Our team is passionate about innovation and dedicated to excellence. We support continuous learning and encourage our employees to grow both personally and professionally.</p>
          <p className="text-gray-700">We offer flexible working hours, remote work options, and a range of benefits designed to support your well-being. Join us and be part of a culture that values creativity, teamwork, and respect.</p>
        </div>
      </section>

      <CTABanner title="Ready to take the next step?" subtitle="Apply now and become part of our dynamic team!" buttonText="View Openings" buttonLink="#" />
      <Footer />
    </div>
  );
};

export default CareersPage;