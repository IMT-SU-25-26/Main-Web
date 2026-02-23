"use client";

import "@/styles/about.css";
import Hero from "@/components/pages/about/hero";
import VisionMission from "@/components/pages/about/vision-mission";
import Values from "@/components/pages/about/values";
import Footer from "@/components/pages/about/footer";
import { useRef, RefObject } from "react";
import { useAboutAnimations } from "@/hooks/use-about-animations";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useAboutAnimations(containerRef as RefObject<HTMLElement>);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div
        ref={containerRef}
        className="flex min-h-screen w-screen max-w-screen flex-col items-center overflow-hidden"
      >
        <Hero />
        <VisionMission />
        <Values />
        <Footer />
      </div>
    </div>
  );
}
