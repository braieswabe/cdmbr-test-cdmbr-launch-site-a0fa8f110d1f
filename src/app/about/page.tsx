import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero } from '@/components/Hero';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <Hero 
        headline="About Us"
        subtitle="Learn more about our mission and values."
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <p className="mb-4">Founded in 2020, we set out to create innovative solutions that empower businesses to thrive in a digital world. Our journey has been one of growth, learning, and commitment to excellence.</p>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p>To provide cutting-edge technology solutions that simplify processes and enhance productivity for our clients.</p>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li className="mb-2">Innovation: We strive to innovate and improve continuously.</li>
            <li className="mb-2">Customer Focus: Our customers are at the heart of everything we do.</li>
          </ul>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/images/team1.jpg" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="font-semibold">Alice Brown</h3>
              <p>Co-Founder</p>
            </div>
            <div className="text-center">
              <img src="/images/team2.jpg" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="font-semibold">Bob White</h3>
              <p>CTO</p>
            </div>
            <div className="text-center">
              <img src="/images/team3.jpg" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="font-semibold">Charlie Green</h3>
              <p>Marketing Director</p>
            </div>
            <div className="text-center">
              <img src="/images/team4.jpg" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="font-semibold">Diana Blue</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;