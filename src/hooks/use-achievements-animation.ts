import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useAchievementsCardsAnimations = (
  searchRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      gsap.fromTo(
        ".start-left",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power1.out", stagger: 0.1, clearProps: "transform" },
      );

      gsap.fromTo(
        ".start-right",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power1.out", stagger: 0.1, clearProps: "transform" },
      );

      gsap.fromTo(
        ".start-bottom",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power1.out", stagger: 0.1, clearProps: "transform" },
      );
    },
    { scope: searchRef },
  );
};

export const useAchievementsAnimations = (
  bgRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      gsap.defaults({ overwrite: "auto" });

      gsap.from(".decor-img", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(".decor-img:not(.no-float)", {
        y: "+=8",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
    },
    { scope: bgRef },
  );
};
