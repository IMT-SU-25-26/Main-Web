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
      gsap.config({ force3D: true });
      gsap.defaults({ overwrite: "auto" });

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

export const useEventDetailAnimation = () => {
  useGSAP(() => {
    const decorativeImages = [
      ".top-left-image",
      ".top-right-image",
      ".pink-oval-image",
      ".bottom-left-image",
      ".camera-image",
    ];

    decorativeImages.forEach((selector, index) => {
      gsap.fromTo(
        selector,
        { opacity: 0, scale: 0.3, rotation: -15 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
        },
      );
    });

    gsap.fromTo(
      ".event-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      ".event-date",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" },
    );

    gsap.fromTo(
      ".description-paragraph",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.5, ease: "power2.out" },
    );

    gsap.fromTo(
      ".register-button-container",
      { opacity: 0, y: -50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 2, ease: "back.out(1.7)" },
    );

    gsap.fromTo(
      ".carousel-container",
      { opacity: 0, y: 50, rotateX: -10 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, delay: 0.5, ease: "power3.out" },
    );

    gsap.fromTo(
      ".background-paper",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
    );
  });
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
