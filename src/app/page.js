import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Apps from "@/components/Apps";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <Apps />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}