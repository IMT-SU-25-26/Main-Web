"use client";

import "@/styles/home.css";
import Hero from "./hero";
import Union from "./union";
import Competition from "./competition";
import Services from "./services";
import Footer from "./footer";
import { useRef, RefObject } from "react";
import { useHomeAnimations } from "@/hooks/use-home-animations";
import { Activity } from "@/types/db/activity";

interface HomePageProps {
  latestActivities: Activity[];
}

export default function Home({ latestActivities }: HomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useHomeAnimations(containerRef as RefObject<HTMLElement>);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div
        ref={containerRef}
        className="flex min-h-screen w-screen max-w-screen flex-col items-center overflow-hidden"
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
