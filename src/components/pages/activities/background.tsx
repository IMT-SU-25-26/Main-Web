"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const ActivityBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  // Animate all left-starting cards
  useEffect(() => {
    gsap.fromTo(
      ".start-bottom",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0,
        ease: "power1.out",
        stagger: 0.1,
        clearProps: "transform",
      },
    );

    const ctx = gsap.context(() => {
      // Convert to typed HTMLElement array
      const images = gsap.utils.toArray(".decor-img") as HTMLElement[];

      images.forEach((img, index) => {
        const fromDirection = index % 2 === 0 ? -40 : 40; // alternate left/right

        gsap.from(img, {
          opacity: 0,
          x: fromDirection,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.15,
        });

        if (!img.classList.contains("no-float")) {
          gsap.to(img, {
            y: "+=8",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.2 + index * 0.15,
          });
        }
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef}>
      {/* Title Section - Server Component */}
      <div className="relative z-10 inline-block">
        <Image
          src="/activities/RedPin.webp"
          alt="Red Pin"
          className="start-bottom absolute top-3 -right-4 z-20 h-10 w-10 select-none"
          width={500}
          height={500}
          draggable={false}
        />

        {/* Paper */}
        <div className="start-bottom mt-10 mb-6 rotate-[-2deg] bg-white px-6 py-3 shadow-lg">
          <h2 className="font-family-impact text-4xl font-extrabold tracking-wider text-black">
            ACTIVITIES
          </h2>
        </div>
      </div>

      {/* Decorative Images - All Server Components */}

      {/* kiri */}
      <Image
        src="/activities/GreenQuote.webp"
        alt="Green Quote"
        className="decor-img absolute top-12 right-5 z-0 h-max w-20 select-none md:right-10 md:w-30"
        width={500}
        height={500}
        draggable={false}
      />

      {/* kanan */}
      <Image
        src="/activities/LightBulb.webp"
        alt="Light Bulb"
        className="decor-img start-right absolute top-26 left-[0.3] z-10 w-28 select-none md:left-6 md:w-30"
        width={500}
        height={500}
        draggable={false}
      />

      {/* kanan */}
      <Image
        src="/activities/RedStar.webp"
        alt="Red Star"
        className="decor-img absolute top-10 left-30 z-0 hidden h-max w-20 select-none md:block"
        width={500}
        height={500}
        draggable={false}
      />

      {/* kanan */}
      <Image
        src="/activities/BottomLeft.webp"
        alt="Bottom Left"
        className="decor-img absolute bottom-0 left-0 z-0 h-max w-40 select-none"
        width={500}
        height={500}
        draggable={false}
      />

      {/* kiri */}
      <Image
        src="/activities/BottomRight.webp"
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
