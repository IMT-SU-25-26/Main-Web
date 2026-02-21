"use client";

import Image from "next/image";
import { useRef } from "react";
import { useActivityAnimations } from "@/hooks/use-activity-animations";

const ActivityBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useActivityAnimations(bgRef);

  return (
    <div ref={bgRef}>
      {/* Pin */}
      <div className="relative z-10 inline-block">
        <Image
          src="/images/pages/activities/RedPin.webp"
          alt="Red Pin"
          className="start-bottom absolute top-3 -right-4 z-20 h-10 w-10 select-none"
          width={500}
          height={500}
          draggable={false}
        />

        {/* Paper */}
        <div className="start-bottom mt-10 mb-6 -rotate-2 bg-white px-6 py-3 shadow-lg">
          <h2 className="font-family-impact text-4xl font-extrabold tracking-wider text-black">
            ACTIVITIES
          </h2>
        </div>
      </div>

      {/* Green Quote */}
      <Image
        src="/images/pages/activities/GreenQuote.webp"
        alt="Green Quote"
        className="decor-img absolute top-12 right-5 z-0 h-max w-20 select-none md:right-10 md:w-30"
        width={500}
        height={500}
        draggable={false}
      />

      {/* LightBulb */}
      <Image
        src="/images/pages/activities/LightBulb.webp"
        alt="Light Bulb"
        className="decor-img start-right absolute top-26 left-[0.3] z-10 w-28 select-none md:left-6 md:w-30"
        width={500}
        height={500}
        draggable={false}
      />

      {/* RedStar */}
      <Image
        src="/images/pages/activities/RedStar.webp"
        alt="Red Star"
        className="decor-img absolute top-10 left-30 z-0 hidden h-max w-20 select-none md:block"
        width={500}
        height={500}
        draggable={false}
      />

      {/* Bottom Left */}
      <Image
        src="/images/pages/activities/BottomLeft.webp"
        alt="Bottom Left"
        className="decor-img absolute bottom-0 left-0 z-0 h-max w-40 select-none"
        width={500}
        height={500}
        draggable={false}
      />

      {/* Bottom Right */}
      <Image
        src="/images/pages/activities/BottomRight.webp"
        alt="Bottom Right"
        className="decor-img absolute right-0 bottom-0 z-0 h-max w-50 select-none"
        width={500}
        height={500}
        draggable={false}
      />
    </div>
  );
};

export default ActivityBackground;
