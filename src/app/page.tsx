import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { FeaturedContent } from "@/components/FeaturedContent";

export default function Home() {
     return (
          <div className="dark">
                    <div className="relative w-full flex items-center justify-center">
                         <Navbar />
                         <HeroSection />
                    </div>
                    <FeaturedContent />
          </div>
     );
}