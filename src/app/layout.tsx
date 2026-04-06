import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Professional Website</title>
        <meta name="description" content="Your go-to platform for professional solutions." />
      </head>
      <body className="bg-white text-gray-800">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}