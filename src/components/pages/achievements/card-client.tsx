"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface AchievementCardClientProps {
  achievementId: string;
  className?: string;
  children: React.ReactNode;
}

export default function AchievementCardClient({
  achievementId,
  className,
  children,
}: AchievementCardClientProps) {
  const [swinging, setSwinging] = useState(false);
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname.replace(/\/$/, "")}/${achievementId}`}
      onMouseLeave={() => {
        setSwinging(true);
        setTimeout(() => setSwinging(false), 700);
      }}
      className={`relative h-100 w-80 cursor-pointer overflow-hidden duration-300 drop-shadow-md hover:origin-top hover:rotate-[1.3deg] active:scale-100 active:brightness-90 ${
        swinging ? "swing-effect" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
