import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Native Kit",
  description: "Modern React component library with shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
