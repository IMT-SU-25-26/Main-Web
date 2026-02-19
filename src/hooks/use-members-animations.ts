import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useMembersAnimations = (containerRef: RefObject<HTMLElement>) => {
  useGSAP(
    () => {
      gsap.defaults({ force3D: true, overwrite: "auto" });

      // Section Reveal
      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
              refreshPriority: -1,
            },
          },
        );
      });

      // Rotating Assets
      gsap.to([".yellowstarasset", ".redstarasset", ".starasset"], {
        rotate: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    },
    { scope: containerRef },
  );
};
