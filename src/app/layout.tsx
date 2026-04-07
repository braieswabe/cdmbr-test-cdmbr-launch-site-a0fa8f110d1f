import type {{ Metadata }} from "next";
import "./globals.css";
import {{ NavBar }} from "@/components/NavBar";
import {{ Footer }} from "@/components/Footer";

export const metadata: Metadata = {{
  title: "TEST CDMBR Launch Site",
  description: "Generate qualified leads and present agency credibility with clear service positioning and measurable proof.",
}};

export default function RootLayout({{
  children,
}}: {{
  children: React.ReactNode;
}}) {{
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <NavBar />
        <main className="flex-1">
          {{children}}
        </main>
        <Footer />
      </body>
    </html>
  );
}}