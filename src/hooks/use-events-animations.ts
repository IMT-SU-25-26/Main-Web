import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useEventsAnimation = (
  containerRef: RefObject<HTMLElement | null>,
) => {
useGSAP(() => {
  gsap.defaults({ force3D: true, overwrite: "auto" });

  // Animasi untuk setiap section dengan class "section-reveal"
  gsap.utils
    .toArray<HTMLElement>(".section-reveal")
    .forEach((section, index, array) => {
      // Untuk section terakhir, gunakan trigger point yang lebih rendah
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
            toggleActions: "play none none reverse", // Tambah reverse untuk reset
            refreshPriority: -1, // Prioritas refresh
          },
        },
      );
    });

  // Animasi untuk header
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

  // Animasi rotate untuk yellow-star dan yellowstar
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

  // Cleanup function
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);
}