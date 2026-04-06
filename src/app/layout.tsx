import { ReactNode } from 'react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Professional Website',
  description: 'Your go-to solution for modern SaaS applications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}