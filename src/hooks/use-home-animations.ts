import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollDefaults } from "@/utils/scroll-trigger";

gsap.registerPlugin(ScrollTrigger);

export const useHomeAnimations = (containerRef: RefObject<HTMLElement>) => {
  useGSAP(
    () => {
      gsap.defaults({ force3D: true, overwrite: "auto" });

      // Hero Elements
      gsap.set(
        [
          ".red-bubble",
          ".yellow-bubble",
          ".front-bubble",
          ".stars-left",
          ".stars-right",
          ".welcome",
          ".demon-cat",
          ".to-text",
          ".su-imt-text",
          ".title-background",
          ".red-spike-landing",
          ".yellow-star-landing",
          ".green-spike-landing",
          ".green-arrow-landing",
          ".blue-line-landing",
          ".sobekan",
          ".sobekan-biru-kiri",
          ".sobekan-biru-kanan",
          ".among-us",
          ".dragon",
          ".crown",
        ],
        { opacity: 0, scale: 0.8, y: -50 },
      );

      // Union Elements
      gsap.set(".what-is-su-imt-text", { opacity: 0, y: 100, scale: 0.8 });
      gsap.set(".su-imt-description", { opacity: 0, y: 50 });
      gsap.set(".learn-more-button", { opacity: 0, scale: 0.8 });
      gsap.set([".laptop-on-stick", ".camera", ".book-laptop"], {
        opacity: 0,
        y: 80,
        scale: 0.8,
      });

      // Competition Elements
      gsap.set(".competition-text", { opacity: 0, y: 50 });
      gsap.set(".competition-left-container", { opacity: 0, x: -100 });
      gsap.set(".competition-right-container", { opacity: 0, x: 100 });
      gsap.set(".mobile-competition-container", {
        opacity: 0,
        scale: 0.8,
        rotation: -5,
      });

      // Services Elements
      gsap.set(".explore-text", { opacity: 0, y: 50 });
      gsap.set(
        [
          ".home-service-card-left",
          ".home-service-card-center",
          ".home-service-card-right",
        ],
        { opacity: 0, y: 80, scale: 0.8 },
      );
      gsap.set(".explore-button", { opacity: 0, scale: 0.5 });
      gsap.set([".paper-cloud", ".red-star-footer-left"], {
        opacity: 0,
        x: -80,
        scale: 0.8,
      });

      // Footer Elements
      gsap.set([".green-home-footer-left", ".yellow-spike-right"], {
        opacity: 0,
        y: 50,
      });

      // Hero Timeline
      const heroTl = gsap.timeline({ delay: 0.3 });

      // Hero Animations
      heroTl.to(
        [
          ".blue-line-landing",
          ".sobekan",
          ".sobekan-biru-kiri",
          ".sobekan-biru-kanan",
        ],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
      );

      heroTl.to(
        [
          ".red-bubble",
          ".yellow-bubble",
          ".front-bubble",
          ".stars-left",
          ".stars-right",
          ".welcome",
          ".demon-cat",
          ".to-text",
          ".su-imt-text",
          ".title-background",
        ],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        0,
      );

      heroTl.to(
        [
          ".red-spike-landing",
          ".yellow-star-landing",
          ".green-spike-landing",
          ".green-arrow-landing",
          ".among-us",
          ".dragon",
          ".crown",
        ],
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        0,
      );

      // Union Timeline
      const unionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container-student-union",
          start: "top 60%",
          end: "top 20%",
          ...scrollDefaults,
        },
      });

      // Union Animations
      unionTl
        .to(".what-is-su-imt-text", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          ".su-imt-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          ".learn-more-button",
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .to(
          [".laptop-on-stick", ".camera", ".book-laptop"],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        );

      // Competition Timeline
      const competitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".competition-wrapper",
          start: "top 80%",
          ...scrollDefaults,
        },
      });

      // Competition Animations
      competitionTl
        .to(".competition-text", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(
          ".competition-left-container",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          ".competition-right-container",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .to(
          ".mobile-competition-container",
          {
            opacity: 1,
            scale: 1,
            rotation: 2,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        );

      // Services Timeline
      const servicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".explore-text",
          start: "top 80%",
          ...scrollDefaults,
        },
      });

      // Services Animations
      servicesTl
        .to(".explore-text", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        })
        .to(
          [
            ".home-service-card-left",
            ".home-service-card-center",
            ".home-service-card-right",
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .to(
          ".explore-button",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
        .to(
          [".paper-cloud", ".red-star-footer-left"],
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.6",
        );

      // Footer Animations
      gsap.to([".green-home-footer-left", ".yellow-spike-right"], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".green-home-footer-left",
          start: "top 90%",
          ...scrollDefaults,
        },
      });

      // Green Line Parallax
      gsap.to(".green-line", {
        rotation: 15,
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".competition-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );
};
