import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
