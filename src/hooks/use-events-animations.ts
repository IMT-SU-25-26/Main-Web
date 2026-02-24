import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useEventsAnimation = (
  containerRef: RefObject<HTMLElement | null>,
) => {
  useGSAP(
    () => {
      gsap.defaults({ force3D: true, overwrite: "auto" });

      // Section Reveal Animation
      gsap.utils
        .toArray<HTMLElement>(".section-reveal")
        .forEach((section, index, array) => {
          const isLastSection = index === array.length - 1;

          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: section,
                start: isLastSection ? "top 95%" : "top 80%",
                toggleActions: "play none none reverse",
                refreshPriority: -1,
              },
            },
          );
        });

      // Header Animation
      gsap.fromTo(
        ".header-reveal",
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".header-reveal",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Yellow Star Animation
      gsap.to(".yellow-star-rotate", {
        rotate: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });

      gsap.to(".yellowstar-rotate", {
        rotate: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    },
    { scope: containerRef },
  );
};

export const useCarouselAnimation = (
  slidesRef: RefObject<HTMLDivElement | null>,
  images: { url: string }[],
) => {
  useGSAP(
    () => {
      const slidesContainer = slidesRef.current;
      if (!slidesContainer || images.length === 0) return;

      gsap.killTweensOf(slidesContainer);

      const slideWidth = 408; // 400px + 8px Gap
      const totalSlides = images.length;
      const durationPerSlide = 3;

      gsap.set(slidesContainer, { x: 0, force3D: true });

      gsap.to(slidesContainer, {
        x: -slideWidth * totalSlides,
        duration: durationPerSlide * totalSlides,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const totalWidth = slideWidth * totalSlides;
            return (parseFloat(x) % totalWidth) + "px";
          },
        },
        force3D: true,
      });
    },
    { dependencies: [images] },
  );
};
