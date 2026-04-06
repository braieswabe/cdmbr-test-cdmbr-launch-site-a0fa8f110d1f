```tsx
import { Hero, NavBar, Footer } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our mission and values.',
};

const AboutPage = () => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Hero title="About Our Company" />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="max-w-2xl mx-auto text-center">
          Founded in 2010, we have dedicated ourselves to providing innovative solutions that empower businesses to thrive in a competitive landscape.
        </p>
      </section>
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">Integrity</h3>
            <p>We believe in honesty and transparency in all our dealings.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p>Constantly evolving to bring the best solutions to our clients.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">Customer Focus</h3>
            <p>Your success is our priority, and we strive to exceed your expectations.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder images for team members */}
          <div className="flex flex-col items-center">
            <img src="/images/team1.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-lg font-semibold">Alice Johnson</h3>
            <p>CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team2.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-lg font-semibold">Bob Brown</h3>
            <p>CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team3.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-lg font-semibold">Cathy White</h3>
            <p>COO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team4.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-lg font-semibold">David Green</h3>
            <p>CMO</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
```