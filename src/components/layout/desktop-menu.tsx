"use client";

import { authClient } from "@/lib/auth-client";
import { Session } from "@/types/auth";
import Link from "next/link";
import Image from "next/image";
import SignInButton from "./sign-in-button";

interface DesktopMenuProps {
  session: Session | null;
  isLoading: boolean;
  profileDropdownOpen: boolean;
  setProfileDropdownOpen: (open: boolean) => void;
}

export default function DesktopMenu({
  session,
  isLoading,
  profileDropdownOpen,
  setProfileDropdownOpen,
}: DesktopMenuProps) {
  const isLoggedIn = !!session;

  return (
    <div className="hidden lg:text-lg xl:text-lg 2xl:text-xl lg:flex gap-4 xl:gap-8 items-center">
      <Link
        className="cursor-pointer hover:underline hover:text-green-500"
        href="/about"
      >
        About
      </Link>
      <Link
        className="cursor-pointer hover:underline hover:text-red-500"
        href="/events"
      >
        Events
      </Link>
      <Link
        className="cursor-pointer hover:underline hover:text-blue-500"
        href="/achievements"
      >
        Achievements
      </Link>
      <Link
        className="cursor-pointer hover:underline hover:text-yellow-500"
        href="/activities"
      >
        Activities
      </Link>
      <Link
        className="cursor-pointer hover:underline hover:text-slate-500"
        href="/competitions"
      >
        Competitions
      </Link>
      <Link
        className="cursor-pointer hover:underline hover:text-purple-500"
        href="/members"
      >
        Members
      </Link>

      <div className="relative">
        {isLoading ? (
          <div className="animate-pulse bg-gray-300 w-10 h-10 rounded-full"></div>
        ) : (
          <div
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-all"
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          >
            <div className="profile-image rounded-full w-10 h-10 flex items-center justify-center hover:ring-2 hover:ring-blue-300 transition-all">
              {isLoggedIn ? (
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={session.user?.image || "/images/navigation/person.png"}
                    width={40}
                    height={40}
                    alt="Profile Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/images/navigation/person.png"}
                    width={40}
                    height={40}
                    alt="Guest Avatar"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {profileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-1002">
            {isLoggedIn ? (
              <>
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    {session.user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500">{session.user?.email}</p>
                </div>

                <div className="py-1">
                  <Link
                    href="/dashboard/student"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  {session.user?.role === "TECH" && (
                    <Link
                      href="/dashboard/tech"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      Tech Dashboard
                    </Link>
                  )}
                  {(session.user?.role === "SA" ||
                    session.user?.role === "TECH" ||
                    session.user?.role === "LECTURER") && (
                    <Link
                      href="/dashboard/sa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      SA Dashboard
                    </Link>
                  )}
                  {(session.user?.role === "PR" ||
                    session.user?.role === "TECH") && (
                    <Link
                      href="/dashboard/pr"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      PR Dashboard
                    </Link>
                  )}
                </div>

                <div className="border-t border-gray-200 py-1">
                  <button
                    onClick={() => {
                      authClient.signOut();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <SignInButton />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
