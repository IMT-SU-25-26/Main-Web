"use client";

import AchievementCard from "./card";
import AchievementFeatured from "./featured";
import SearchBar from "@/components/ui/search-bar";
import { useRef } from "react";
import { Achievement, Image as PrismaImage } from "@/generated/prisma/client";
import { useAchievementsCardsAnimations } from "@/hooks/use-achievements-animation";

type AchievementWithImages = Achievement & { images?: PrismaImage[] };

interface AchievementsSearchProps {
  achievements: AchievementWithImages[];
  featuredAchievement?: AchievementWithImages | null;
}

export default function AchievementsSearch({
  achievements,
  featuredAchievement,
}: AchievementsSearchProps) {
  const searchRef = useRef<HTMLDivElement>(null);

  useAchievementsCardsAnimations(searchRef);

  return (
    <div
      ref={searchRef}
      className="z-10 mt-8 flex w-full flex-col items-center pt-40 md:max-w-[70vw] md:px-8 lg:px-32"
    >
      {/* Featured Achievement */}
      {featuredAchievement && (
        <div className="mb-4 flex w-full flex-col gap-4">
          <AchievementFeatured
            achievement={featuredAchievement}
            index={0}
            className="start-left"
          />
        </div>
      )}

      {/* All Achievements with Search */}
      <SearchBar
        items={achievements}
        className="start-bottom"
        isCentered={true}
      >
        {(filteredAchievements) => (
          <section className="z-10 mb-10 p-2">
            <div className="flex flex-wrap justify-center gap-4 px-0">
              {filteredAchievements.map((achievement, index) => (
                <div className="start-bottom" key={achievement.id}>
                  <AchievementCard achievement={achievement} index={index} />
                </div>
              ))}
            </div>
          </section>
        )}
      </SearchBar>
    </div>
  );
}
