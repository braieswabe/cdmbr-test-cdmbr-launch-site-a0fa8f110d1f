import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", photo: "/images/alice.jpg" },
  { name: "Bob Brown", role: "CTO", photo: "/images/bob.jpg" },
  { name: "Charlie Davis", role: "CMO", photo: "/images/charlie.jpg" },
  { name: "Diana Evans", role: "COO", photo: "/images/diana.jpg" },
];

const values = [
  { title: "Integrity", description: "We uphold the highest standards of integrity in all our actions." },
  { title: "Innovation", description: "We foster a culture of innovation and creativity." },
  { title: "Customer Focus", description: "We prioritize our customers' needs and satisfaction." },
];

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="About Us" />
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg">
          Founded in 2020, we have been dedicated to providing top-notch solutions that empower businesses to thrive in the digital age.
        </p>
      </section>
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <img src={member.photo} alt={member.name} className="rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}