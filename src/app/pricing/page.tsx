import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing Plans",
  description: "Learn more about transparent pricing plans",
};

import { useState } from 'react';
import CTABanner from '@/components/CTABanner';
import PricingCard from '@/components/PricingCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricingPlan = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing Plans</h1>
          <p className="text-lg text-gray-600">Choose the plan that fits your needs.</p>
          <button
            onClick={togglePricingPlan}
            className="mt-4 p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Switch to {isAnnual ? 'Monthly' : 'Annual'} Billing
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Basic Plan"
            price={isAnnual ? 120 : 12}
            features={['Feature A', 'Feature B', 'Feature C']}
            recommended={false}
          />
          <PricingCard
            title="Pro Plan"
            price={isAnnual ? 240 : 24}
            features={['Feature A', 'Feature B', 'Feature C', 'Feature D']}
            recommended={true}
          />
          <PricingCard
            title="Enterprise Plan"
            price={isAnnual ? 480 : 48}
            features={['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E']}
            recommended={false}
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What payment methods do you accept?</h3>
              <p>We accept all major credit cards and PayPal.</p>
            </div>
            <div>
              <h3 className="font-medium">Can I change my plan later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h3 className="font-medium">Is there a money-back guarantee?</h3>
              <p>Yes, we offer a 30-day money-back guarantee on all plans.</p>
            </div>
          </div>
        </section>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default PricingPage;