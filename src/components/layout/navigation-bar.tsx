"use client";

import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import HamburgerMenu from "./hamburger-menu";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Session } from "@/types/auth";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [session, setSession] = useState<Session>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authClient.getSession().then((res) => {
      if (res.data) {
        setSession(res.data);
      }
      setIsLoading(false);
    });
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed z-1000 flex min-h-[6.5vh] w-screen items-center justify-between border-b-2 border-[#E93400] bg-white px-4 text-black sm:px-12">
      <Link
        href="/"
        className="h-auto w-9.5 cursor-pointer sm:w-6 md:w-8 lg:w-9 xl:w-10.5 2xl:w-12"
      >
        <Image
          src={"/images/layout/su-logo.svg"}
          width={100}
          height={100}
          alt="su-logo"
        />
      </Link>

      <DesktopMenu
        session={session}
        isLoading={isLoading}
        profileDropdownOpen={profileDropdownOpen}
        setProfileDropdownOpen={setProfileDropdownOpen}
      />

      <HamburgerMenu onClick={handleMobileMenuToggle} />

      <MobileMenu
        session={session}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileDashboardOpen={mobileDashboardOpen}
        setMobileDashboardOpen={setMobileDashboardOpen}
      />

      {profileDropdownOpen && (
        <div
          className="fixed inset-0 z-1001"
          onClick={() => setProfileDropdownOpen(false)}
        ></div>
      )}
    </nav>
  );
}
