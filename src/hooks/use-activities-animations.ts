import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useActivitiesAnimations = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      gsap.fromTo(
        ".start-bottom",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
          stagger: 0.1,
          clearProps: "transform",
        },
      );

      const images = gsap.utils.toArray(".decor-img") as HTMLElement[];

      images.forEach((img, index) => {
        const fromDirection = index % 2 === 0 ? -40 : 40;

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
    },
    { scope: containerRef },
  );
};

export const useActivityAnimations = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
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

      const images = gsap.utils.toArray(".decor-img") as HTMLElement[];

      images.forEach((img, index) => {
        const fromDirection = index % 2 === 0 ? -40 : 40;

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
    },
    { scope: containerRef },
  );
};
