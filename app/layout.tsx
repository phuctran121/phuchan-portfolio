import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Poppins } from "next/font/google";
import Particle from "@/components/Particle";
import Providers from "@/store/Provider";
import SmoothFollower from "@/components/SmoothFollowerCursor";

export const metadata: Metadata = {
  title: {
    default: "Home - Portfolio",
    template: "%s - Portfolio",
  },
  description: "Phuchan's Portfolio!",
  twitter: {
    card: "summary_large_image",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SmoothFollower />
        <Particle />
        <Providers>
          <ThemeProvider>
            <div className="relative z-10">
              <Navbar />
              <div className="min-h-screen bg-transparent">
                <main className="container mx-auto px-4">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
