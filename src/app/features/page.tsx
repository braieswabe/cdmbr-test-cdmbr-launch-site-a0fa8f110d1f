import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Learn more about features",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero title="Discover Our Unique Features" subtitle="Explore what sets us apart from the competition." />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Feature List</h2>
          <ul className="space-y-4">
            <li className="p-4 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Real-Time Collaboration</h3>
              <p className="text-gray-600">Work together with your team in real-time, no matter where you are. Our platform allows seamless collaboration with instant updates.</p>
            </li>
            <li className="p-4 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Advanced Analytics</h3>
              <p className="text-gray-600">Gain insights into your performance with our advanced analytics tools. Make data-driven decisions to optimize your workflow.</p>
            </li>
            <li className="p-4 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Customizable Dashboards</h3>
              <p className="text-gray-600">Tailor your dashboard to fit your needs. Choose the metrics that matter most to you and visualize them in a way that makes sense.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Feature Comparisons</h2>
          <p className="text-gray-700 mb-4">Our features are designed to outperform the competition. Here’s how we stack up:</p>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Feature</th>
                <th className="py-2 px-4 border-b">Our Product</th>
                <th className="py-2 px-4 border-b">Competitor A</th>
                <th className="py-2 px-4 border-b">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Real-Time Collaboration</td>
                <td className="py-2 px-4 border-b">✅</td>
                <td className="py-2 px-4 border-b">❌</td>
                <td className="py-2 px-4 border-b">✅</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Advanced Analytics</td>
                <td className="py-2 px-4 border-b">✅</td>
                <td className="py-2 px-4 border-b">✅</td>
                <td className="py-2 px-4 border-b">❌</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Customizable Dashboards</td>
                <td className="py-2 px-4 border-b">✅</td>
                <td className="py-2 px-4 border-b">✅</td>
                <td className="py-2 px-4 border-b">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CTABanner title="Experience the Difference" subtitle="Start your free trial today!" buttonText="Get Started" buttonLink="#" />
      <Footer />
    </div>
  );
};

export default FeaturesPage;