import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services | TEST CDMBR Launch Site", description: "Explore our services" };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[var(--color-primary)] text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600 leading-relaxed">Custom websites and web applications built with modern technologies</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[var(--color-primary)] text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Design</h3>
            <p className="text-gray-600 leading-relaxed">Beautiful, user-centered designs that convert visitors into customers</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[var(--color-primary)] text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
            <p className="text-gray-600 leading-relaxed">Strategic guidance to help your business grow and scale</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[var(--color-primary)] text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <p className="text-gray-600 leading-relaxed">Ongoing maintenance and support to keep everything running smoothly</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[var(--color-primary)] text-2xl font-bold">5</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-gray-600 leading-relaxed">Data-driven insights to optimize your digital presence</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-[var(--color-primary)] text-2xl font-bold">6</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing</h3>
            <p className="text-gray-600 leading-relaxed">Digital marketing strategies that drive real results</p>
          </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Execution", "Optimization"].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{i + 1}</div>
                <h3 className="font-semibold text-lg mb-2">{step}</h3>
                <p className="text-gray-600 text-sm">We ensure every step is handled with precision and care.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8">Let&apos;s discuss how we can help you achieve your goals.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}