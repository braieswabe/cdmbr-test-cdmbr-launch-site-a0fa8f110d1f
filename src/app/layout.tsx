```typescript
import { ReactNode } from 'react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Professional Website',
  description: 'Your partner in innovative solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```