"use client";

import "@/styles/home.css";
import Hero from "@/components/pages/home/hero";
import Union from "@/components/pages/home/union";
import Competition from "@/components/pages/home/competition";
import Services from "@/components/pages/home/services";
import Footer from "@/components/pages/home/footer";
import { Activity } from "@/types/db/activity";
import { useHomeAnimations } from "@/hooks/useHomeAnimations";
import { useRef, RefObject } from "react";

interface HomePageProps {
  latestActivities: Activity[];
}

export default function HomePage({ latestActivities }: HomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useHomeAnimations(containerRef as RefObject<HTMLElement>);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div
        ref={containerRef}
        className="flex min-h-screen w-screen max-w-screen flex-col items-center overflow-hidden bg-[#F1EEE6] bg-[url('/images/layout/background.png')] bg-contain bg-center"
      >
        <Hero />
        <Union />
        <Competition />
        <Services latestActivities={latestActivities} />
        <Footer />
      </div>
    </div>
  );
}
