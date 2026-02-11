"use client";

import "@/styles/home.css";
import HeroSection from "@/components/pages/home/hero";
import UnionSection from "@/components/pages/home/union";
import CompetitionSection from "@/components/pages/home/competition";
import ServicesSection from "@/components/pages/home/services";
import FooterSection from "@/components/pages/home/footer";
import { Activity } from "@/types/db/activity";
import { useHomeAnimations } from "@/hooks/home";
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
        className="hide-initial is-visible overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/images/layout/background-paper.png')] bg-contain bg-center bg-[#F1EEE6]"
      >
        <HeroSection />
        <UnionSection />
        <CompetitionSection />
        <ServicesSection latestActivities={latestActivities} />
        <FooterSection />
      </div>
    </div>
  );
}
