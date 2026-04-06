import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Professional Website',
  description: 'Your partner in innovative solutions.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;