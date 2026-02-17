import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimations = (
  isReady: boolean,
  valuesSectionRef: RefObject<HTMLDivElement | null>,
) => {
  useGSAP(
    () => {
      if (!isReady) return;

      ScrollTrigger.refresh();

      gsap.set(".will-change-transform", {
        willChange: "transform",
        force3D: true,
      });
      gsap.set(".will-change-opacity", { willChange: "opacity" });

      const mm = gsap.matchMedia();

      // Kill any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      mm.add("(min-width: 640px), all", () => {
        // Header animation
        gsap.fromTo(
          ".about-us-text",
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
        );

        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-us-wrapper",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        aboutTl
          .fromTo(
            ".left-about-card",
            {
              opacity: 0,
              x: -100,
              rotation: -5,
            },
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              duration: 1,
              ease: "power3.out",
              force3D: true,
            },
          )
          .fromTo(
            [".su-imt-team-card-background", ".su-imt-team-card-foreground"],
            {
              opacity: 0,
              scale: 0.8,
              x: 100,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.7)",
              force3D: true,
            },
            "<",
          )
          .fromTo(
            [".dragon-about", ".dragon-breath", ".peniti"],
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "back.out(1.4)",
            },
            "<",
          )
          .fromTo(
            [
              ".circle-blue-stick-about",
              ".circle-red-stick-about",
              ".yellow-star-landing-about",
              ".red-spike-landing-about",
            ],
            {
              opacity: 0,
              y: 50,
              scale: 0.7,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
            },
            "<",
          );

        const visionMissionTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".vision-mission-wrapper",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        visionMissionTl
          .fromTo(
            ".big-fracture",
            {
              opacity: 0,
              scale: 1,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
            },
          )
          .fromTo(
            ".vision-card",
            {
              opacity: 0,
              y: -50,
              rotation: -8,
            },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            },
            "-=0.4",
          )
          .fromTo(
            ".mission-card",
            {
              opacity: 0,
              y: 50,
              rotation: 8,
            },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            },
            "-=0.6",
          )
          .fromTo(
            [".circle-kiri-fracture", ".green-arrow-about", ".pencil-ruler"],
            {
              opacity: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.5",
          );

        gsap.fromTo(
          [".our-values-text", ".step"],
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".our-values-wrapper",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        gsap.fromTo(
          ".our-values-card-container",
          {
            opacity: 0,
            y: 80,
            scale: 0.8,
          },
          {
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
            force3D: true,
            scrollTrigger: {
              trigger: ".our-values-card-wrapper",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );

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
          transformOrigin: "center center",
          force3D: true,
        });

        gsap.to(".red-spike-landing-about", {
          rotation: -360,
          repeat: -1,
          duration: 25,
          ease: "linear",
          transformOrigin: "center center",
          force3D: true,
        });

        // Footer animations
        const footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-wrapper",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        footerTl
          .fromTo(
            [".about-footer-left-background", ".about-footer-right-background"],
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
          .fromTo(
            [".about-laptop", ".about-laptop-spark", ".about-heart"],
            {
              opacity: 0,
              scale: 0.7,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: "back.out(1.4)",
            },
            "-=0.5",
          );
      });

      mm.add("(max-width: 639px)", () => {
        gsap.fromTo(
          ".about-us-paper-cloud-mobile",
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-us-text",
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Cleanup function
      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [isReady], scope: valuesSectionRef },
  );
};
