"use client";

import "@/styles/about.css";
import Hero from "./hero";
import VisionMission from "./vision-mission";
import Values from "./values";
import Footer from "./footer";
import { useRef } from "react";
import { useImageLoading } from "@/hooks/useImageLoading";
import { usePageRefresh } from "@/hooks/usePageRefresh";
import { useAboutAnimations } from "@/hooks/useAboutAnimations";

export default function AboutPage() {
  const valuesSectionRef = useRef<HTMLDivElement>(null);
  const isReady = useImageLoading();
  usePageRefresh();
  useAboutAnimations(isReady, valuesSectionRef);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div
        className={`hide-initial ${isReady ? "is-visible" : ""} overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/images/layout/background.png')] bg-contain bg-center bg-[#F1EEE6]`}
        ref={valuesSectionRef}
      >
        <Hero />
        <VisionMission />
        <Values />
        <Footer />
      </div>
    </div>
  );
}
