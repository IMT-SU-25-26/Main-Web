"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface FeaturedAchievementClientProps {
  achievementId: string;
  className?: string;
  children: React.ReactNode;
}

export default function FeaturedAchievementClient({
  achievementId,
  className,
  children,
}: FeaturedAchievementClientProps) {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname.replace(/\/$/, "")}/${achievementId}`}
      className={`active:brightness-90 ${className}`}
    >
      {children}
    </Link>
  );
}
