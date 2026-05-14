import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Apps from "@/components/Apps";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Trust from "@/components/Trust";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 text-black min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
      <Pricing />
      <Apps />
      <Benefits />
      <CTA />
      <Footer />
      <MobileNav />
    </main>
  );
}