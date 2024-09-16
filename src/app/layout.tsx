import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { FeaturedContent } from "@/components/FeaturedContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
     title: "RE-DACT",
     description: "Redaction Tool",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en" className="dark">
               <body className={inter.className}>
                    <div className="relative w-full flex items-center justify-center">
                    </div>
                    {children}
               </body>
          </html>
     );
}