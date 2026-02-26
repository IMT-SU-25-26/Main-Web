"use client";

import Image from "next/image";
import { useRef } from "react";
import { useAchievementsAnimations } from "@/hooks/use-achievements-animation";

export default function AchievementsBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useAchievementsAnimations(bgRef);

  return (
    <div ref={bgRef}>
      <Image
        className="decor-img no-float absolute top-20 left-[50%] z-10 w-[20rem] translate-x-[-50%]"
        src="/images/pages/achievements/page-title.webp"
        alt="page title"
        width={480}
        height={160}
      />
      <Image
        className="decor-img absolute top-2 left-2 hidden w-48 md:block"
        src="/images/pages/achievements/star-laptop.webp"
        alt="star laptop"
        width={120}
        height={120}
      />
      <Image
        className="decor-img absolute top-44 left-0 hidden w-16 md:block"
        src="/images/pages/achievements/blue-fan.svg"
        alt="blue fan"
        width={100}
        height={100}
      />
      <Image
        className="decor-img absolute top-16 right-0 hidden w-16 md:block"
        src="/images/pages/achievements/red-fan.svg"
        alt="red fan"
        width={100}
        height={100}
      />
      <Image
        className="decor-img absolute top-76 right-0 hidden w-32 md:block"
        src="/images/pages/achievements/green-arrow.webp"
        alt="green arrow"
        width={60}
        height={60}
      />
      <Image
        className="decor-img absolute top-112 left-0 hidden w-26 md:block"
        src="/images/pages/achievements/red-tape.webp"
        alt="red tape"
        width={100}
        height={30}
      />
      <Image
        className="decor-img absolute top-112 right-0 hidden w-20 md:block"
        src="/images/pages/achievements/yellow-tape.webp"
        alt="yellow tape"
        width={100}
        height={30}
      />
      <Image
        className="decor-img absolute bottom-0 left-0 hidden w-40 md:block"
        src="/images/pages/achievements/bottom-left-decor.webp"
        alt="bottom left"
        width={80}
        height={80}
      />
      <Image
        className="decor-img absolute right-0 bottom-0 hidden w-40 md:block"
        src="/images/pages/achievements/bottom-right-decor.webp"
        alt="bottom right"
        width={80}
        height={80}
      />
    </div>
  );
}
