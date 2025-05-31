import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { oswald, roboto } from "@/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booster power - Your Ultimate Gym Experience",
  description: "Transform your fitness journey with FitZone",
  authors: [{ name: "Rajendar Kathiravel", url: "https://boosterpower.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.className} ${roboto.className}`}>
        <Providers>
          <Navbar />
          <main className="bg-teal-900 min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
