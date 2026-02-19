"use client";

import "@/styles/members.css";
import Title from "@/components/pages/members/title";
import HOD from "@/components/pages/members/hod";
import Internal from "@/components/pages/members/internal";
import External from "@/components/pages/members/external";
import Design from "@/components/pages/members/design";
import Documentation from "@/components/pages/members/documentation";
import PublicRelations from "@/components/pages/members/public-relations";
import SocialActivity from "@/components/pages/members/social-activity";
import Technology from "@/components/pages/members/technology";
import { useRef, RefObject } from "react";
import { useAboutAnimations } from "@/hooks/use-about-animations";

export default function Members() {
  const containerRef = useRef<HTMLDivElement>(null);

  useAboutAnimations(containerRef as RefObject<HTMLElement>);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div
        ref={containerRef}
        className="flex min-h-screen w-screen max-w-screen flex-col items-center overflow-hidden bg-[#F1EEE6] bg-[url('/images/layout/background.png')] bg-contain bg-center pb-20"
      >
        <Title />
        <HOD />
        <Internal />
        <External />
        <Design />
        <Documentation />
        <PublicRelations />
        <SocialActivity />
        <Technology />
      </div>
    </div>
  );
}
