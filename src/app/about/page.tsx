import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

```typescript
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", photo: "/images/alice.jpg" },
  { name: "Bob Lee", role: "CTO", photo: "/images/bob.jpg" },
  { name: "Cathy Brown", role: "CMO", photo: "/images/cathy.jpg" },
  { name: "David Wilson", role: "COO", photo: "/images/david.jpg" },
];

export default function About() {
  return (
    <div>
      <NavBar />
      <Hero title="About Us" subtitle="Learn more about our mission and values." />
      <section className="py-16 bg-white">
        <h2 className="text-2xl font-bold text-center">Our Story</h2>
        <p className="mt-4 text-center">
          Founded in 2020, we have dedicated ourselves to providing innovative solutions that empower businesses to thrive in a digital world.
        </p>
      </section>
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl font-bold text-center">Our Mission & Values</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Innovation</h3>
            <p>We strive to innovate and improve our services continuously.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Integrity</h3>
            <p>We conduct our business with the highest ethical standards.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Customer Focus</h3>
            <p>Our customers are at the heart of everything we do.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <h2 className="text-2xl font-bold text-center">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="p-4 bg-gray-100 rounded shadow">
              <img src={member.photo} alt={member.name} className="rounded-full w-24 h-24 mx-auto" />
              <h3 className="mt-4 font-bold text-center">{member.name}</h3>
              <p className="text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
```