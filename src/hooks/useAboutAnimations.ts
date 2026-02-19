import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reusable ScrollTrigger
const scrollDefaults = {
  toggleActions: "play none none reverse" as const,
  fastScrollEnd: true,
};

export const useAboutAnimations = (containerRef: RefObject<HTMLElement>) => {
  useGSAP(
    () => {
      gsap.defaults({ force3D: true, overwrite: "auto" });

      // Header
      gsap.set(".about-us-text", { opacity: 0, y: -50 });

      // About Section
      gsap.set(".left-about-card", { opacity: 0, x: -100, rotation: -5 });
      gsap.set(
        [".su-imt-team-card-background", ".su-imt-team-card-foreground"],
        { opacity: 0, scale: 0.8, x: 100 }
      );
      gsap.set([".dragon-about", ".dragon-breath", ".peniti"], {
        opacity: 0,
        scale: 0.5,
      });
      gsap.set(
        [
          ".circle-blue-stick-about",
          ".circle-red-stick-about",
          ".yellow-star-landing-about",
          ".red-spike-landing-about",
        ],
        { opacity: 0, y: 50, scale: 0.7 }
      );

      // Vision Mission
      gsap.set(".big-fracture", { opacity: 0, scale: 1 });
      gsap.set(".vision-card", { opacity: 0, y: -50, rotation: -8 });
      gsap.set(".mission-card", { opacity: 0, y: 50, rotation: 8 });
      gsap.set(
        [".circle-kiri-fracture", ".green-arrow-about", ".pencil-ruler"],
        { opacity: 0, scale: 0.9 }
      );

      // Value Elements
      gsap.set([".our-values-text", ".step"], { opacity: 0, y: 30 });
      gsap.set(".our-values-card-container", {
        opacity: 0,
        y: 80,
        scale: 0.8,
      });

      // Footer Elements
      gsap.set(
        [".about-footer-left-background", ".about-footer-right-background"],
        { opacity: 0, y: 50 }
      );
      gsap.set([".about-laptop", ".about-laptop-spark", ".about-heart"], {
        opacity: 0,
        scale: 0.7,
      });

      // Header Animation
      const headerTl = gsap.timeline({ delay: 0.3 });
      
      headerTl.to(".about-us-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

      // About Timeline
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us-wrapper",
          start: "top 80%",
          ...scrollDefaults,
        },
      });

      aboutTl
        .to(".left-about-card", {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          [".su-imt-team-card-background", ".su-imt-team-card-foreground"],
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "<"
        )
        .to(
          [".dragon-about", ".dragon-breath", ".peniti"],
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          "<"
        )
        .to(
          [
            ".circle-blue-stick-about",
            ".circle-red-stick-about",
            ".yellow-star-landing-about",
            ".red-spike-landing-about",
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          "<"
        );

      // Vision Mission Timeline
      const visionMissionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vision-mission-wrapper",
          start: "top 70%",
          end: "bottom 20%",
          ...scrollDefaults,
        },
      });

      visionMissionTl
        .to(".big-fracture", {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          ".vision-card",
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          ".mission-card",
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        )
        .to(
          [".circle-kiri-fracture", ".green-arrow-about", ".pencil-ruler"],
          {
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // Values Animations
      gsap.to([".our-values-text", ".step"], {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".our-values-wrapper",
          start: "top 80%",
          ...scrollDefaults,
        },
      });

      gsap.to(".our-values-card-container", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 0.4,
          from: "start",
          grid: "auto",
        },
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".our-values-card-wrapper",
          start: "top 85%",
          ...scrollDefaults,
        },
      });

      // Footer Timeline
      gsap.to(
        [
          ".about-footer-left-background",
          ".about-footer-right-background",
          ".about-laptop",
          ".about-laptop-spark",
          ".about-heart",
        ],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-wrapper",
            start: "top 90%",
            ...scrollDefaults,
          },
        }
      );

      // Continuous Animations
      gsap.to([".crown-about", ".among-us-about"], {
        rotation: "+=15",
        yoyo: true,
        repeat: -1,
        duration: 3,
        ease: "sine.inOut",
      });

      gsap.to(".yellow-star-landing-about", {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      gsap.to(".red-spike-landing-about", {
        rotation: -360,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    },
    { scope: containerRef }
  );
};
