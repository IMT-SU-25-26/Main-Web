"use client";

import { authClient } from "@/lib/auth-client";
import { Session } from "@/types/auth";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import SignInButton from "./sign-in-button";

interface MobileMenuProps {
  session: Session | null;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  mobileDashboardOpen: boolean;
  setMobileDashboardOpen: (open: boolean) => void;
}

export default function MobileMenu({
  session,
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileDashboardOpen,
  setMobileDashboardOpen,
}: MobileMenuProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = !!session;
  
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      requestAnimationFrame(() => {
        const tl = gsap.timeline();

        const children = Array.from(mobileLinksRef.current?.children || []);

        gsap.set(mobileMenuRef.current, { x: "100%", force3D: true });
        gsap.set(overlayRef.current, { opacity: 0 });
        gsap.set(children, { x: 50, opacity: 0, force3D: true });

        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        })
          .to(
            mobileMenuRef.current,
            {
              x: "0%",
              duration: 0.3,
              ease: "power2.out",
              force3D: true,
            },
            "-=0.1",
          )
          .to(
            children,
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.05,
              ease: "power2.out",
              force3D: true,
            },
            "-=0.15",
          );
      });
    } else {
      const tl = gsap.timeline({
        onComplete: () => setMobileMenuOpen(false),
      });

      const children = Array.from(mobileLinksRef.current?.children || []);

      tl.to(children, {
        x: 50,
        opacity: 0,
        duration: 0,
        stagger: 0.01,
        ease: "power2.in",
      })
        .to(mobileMenuRef.current, {
          x: "100%",
          duration: 0,
          ease: "power2.in",
        })
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.15,
            ease: "power2.in",
          },
          "-=0.2",
        );
    }
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed top-[6.5vh] inset-0 z-999 flex justify-end w-screen h-screen bg-black/60"
        >
          <div
            ref={mobileMenuRef}
            className="w-[35%] bg-[#E5603A] p-2 flex flex-col gap-2 will-change-transform shadow-[-8px_0_12px_-4px_rgba(0,0,0,0.25)]"
          >
            <div ref={mobileLinksRef} className="flex flex-col gap-2">
              {isLoggedIn && (
                <div>
                  <button
                    className="text-white text-center w-full py-2 hover:text-cyan-400 text-md border-b-white/60 border-b will-change-transform flex justify-center items-center"
                    onClick={() => setMobileDashboardOpen(!mobileDashboardOpen)}
                  >
                    Dashboard
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                        mobileDashboardOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {mobileDashboardOpen && (
                    <div className="flex flex-col bg-white rounded-b-lg overflow-hidden">
                      <Link
                        href="/dashboard/student"
                        className="text-black text-center py-2 text-sm"
                        onClick={handleMobileMenuToggle}
                      >
                        Student
                      </Link>
                      {session.user?.role === "TECH" && (
                        <Link
                          href="/dashboard/tech"
                          className="text-black text-center py-2 text-sm"
                          onClick={handleMobileMenuToggle}
                        >
                          Tech
                        </Link>
                      )}
                      {(session.user?.role === "SA" ||
                        session.user?.role === "TECH" ||
                        session.user?.role === "LECTURER") && (
                        <Link
                          href="/dashboard/sa"
                          className="text-black text-center py-2 text-sm"
                          onClick={handleMobileMenuToggle}
                        >
                          Social Activity
                        </Link>
                      )}
                      {(session.user?.role === "PR" ||
                        session.user?.role === "TECH") && (
                        <Link
                          href="/dashboard/pr"
                          className="text-black text-center py-2 text-sm"
                          onClick={handleMobileMenuToggle}
                        >
                          Public Relations
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )}
              <Link
                className="text-white text-center w-full py-2 hover:text-green-500 text-md border-b-white/60 border-b will-change-transform"
                href="/about"
                onClick={() => handleMobileMenuToggle()}
              >
                About
              </Link>

              <Link
                className="text-white text-center w-full py-2 hover:text-red-500 text-md border-b-white/60 border-b will-change-transform"
                href="/events"
                onClick={() => handleMobileMenuToggle()}
              >
                Events
              </Link>

              <Link
                className="text-white flex justify-center items-center gap-1 text-center py-2 hover:text-blue-500 text-md border-b-white/60 border-b will-change-transform"
                href="/achievements"
                onClick={() => handleMobileMenuToggle()}
              >
                Achievements
              </Link>

              <Link
                className="text-white text-center py-2 hover:text-yellow-500 text-md border-b-white/60 border-b will-change-transform"
                href="/activities"
                onClick={() => handleMobileMenuToggle()}
              >
                Activities
              </Link>

              <Link
                className="text-white text-center w-full py-2 hover:text-slate-500 text-md border-b-white/60 border-b will-change-transform"
                href="/competitions"
                onClick={() => handleMobileMenuToggle()}
              >
                Competitions
              </Link>

              <Link
                className="text-white text-center py-2 hover:text-purple-500 text-md border-b-white/60 border-b will-change-transform"
                href="/members"
                onClick={() => handleMobileMenuToggle()}
              >
                Members
              </Link>

              {/* Mobile Auth Section */}
              <div className="flex justify-center will-change-transform">
                {isLoggedIn ? (
                  <div className="text-center bg-white rounded-lg p-4 w-full">
                    <p className="text-sm text-gray-600 w-full overflow-auto text-center">
                      {session.user?.email}
                    </p>
                    <button
                      onClick={() => {
                        authClient.signOut();
                        handleMobileMenuToggle();
                      }}
                      className="text-red-600 hover:text-red-700 text-sm mt-1"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <SignInButton />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}