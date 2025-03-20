"use client";

import HeroSection from "./(sections)/HeroSection";
import Navbar from "@/components/layouts/Navbar";
import FeatureSection from "./(sections)/FeatureSection";
import ProductSection from "./(sections)/ProductSection";
import TestimonialSection from "./(sections)/TestimonialSection";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <main className="relative min-h-dvh w-full overflow-x-hidden overflow-y-clip">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ProductSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
