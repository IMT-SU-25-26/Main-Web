"use client";

import { useRef, useState } from "react";
import { Achievement, Image as PrismaImage } from "@/generated/prisma/client";
import Card from "./card";
import Featured from "./featured";
import SearchBar from "@/components/ui/search-bar";
import Pagination from "@/components/layout/pagination";
import { useAchievementsCardsAnimations } from "@/hooks/use-achievements-animation";

type AchievementWithImages = Achievement & { images?: PrismaImage[] };

interface AchievementsSearchProps {
  achievements: AchievementWithImages[];
  featuredAchievement?: AchievementWithImages | null;
}

const ITEMS_PER_PAGE = 9;

function PaginatedCards({ items }: { items: AchievementWithImages[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const paged = items.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 px-0">
        {paged.map((achievement, index) => (
          <div className="start-bottom" key={achievement.id}>
            <Card
              achievement={achievement}
              index={page * ITEMS_PER_PAGE + index}
            />
          </div>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
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
      className="z-10 mt-8 flex w-full flex-col items-center pt-40"
    >
      {/* Featured Achievement */}
      {featuredAchievement && (
        <div className="mb-4 flex w-full flex-col gap-4">
          <Featured
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
        placeholder="Search Achievement Title Here..."
      >
        {(filteredAchievements) => (
          <section className="z-10 mb-10 p-2">
            <PaginatedCards
              key={filteredAchievements.map((a) => a.id).join()}
              items={filteredAchievements}
            />
          </section>
        )}
      </SearchBar>
    </div>
  );
}
