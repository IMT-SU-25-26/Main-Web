"use client";

import "@/styles/swing.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface CardClientProps {
  activityId: string;
  className?: string;
  children: React.ReactNode;
}

export default function CardClient({
  activityId,
  className,
  children,
}: CardClientProps) {
  const [swinging, setSwinging] = useState(false);
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname.replace(/\/$/, "")}/${activityId}`}
      onMouseLeave={() => {
        setSwinging(true);
        setTimeout(() => setSwinging(false), 700);
      }}
      className={`relative mt-8 flex h-107.5 w-82.5 transform flex-col rounded-xl border border-gray-200 bg-white px-4 py-4 text-left shadow-[5px_5px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:origin-top hover:rotate-[1.5deg] sm:w-90 ${
        swinging ? "swing-effect" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
