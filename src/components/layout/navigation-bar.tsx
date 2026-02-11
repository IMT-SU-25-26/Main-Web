"use client";

import { authClient } from "@/lib/auth-client";
import { Session } from "@/types/auth";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import HamburgerMenu from "./hamburger-menu";

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
    <nav className="z-1000 fixed flex items-center px-4 sm:px-12 justify-between w-screen min-h-[6.5vh] bg-white border-b-2 border-[#E93400] text-black">
      <Link
        href="/"
        className="w-9.5 sm:w-6 md:w-8 lg:w-9 xl:w-10.5 2xl:w-12 h-auto cursor-pointer"
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
