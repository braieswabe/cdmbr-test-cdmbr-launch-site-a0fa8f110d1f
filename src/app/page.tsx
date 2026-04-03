import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Launch Site</h1>
          <p className="text-lg mb-8">Discover innovative solutions tailored for your needs.</p>
          <Link href="/services" className="bg-white text-gray-900 px-6 py-3 rounded-lg">Explore Services</Link>
        </div>
      </section>
    </>
  );
}