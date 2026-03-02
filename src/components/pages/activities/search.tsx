"use client";

import ActivityCard from "./card";
import SearchBar from "@/components/ui/search-bar";
import { useRef } from "react";
import { Category } from "@/generated/prisma/enums";
import { useActivitiesAnimations } from "@/hooks/use-activities-animations";
import { ActivityWithMeta } from "@/types/db/activity";

interface ActivitiesSearchProps {
  activities: ActivityWithMeta[];
  categories: Category[];
  isLoggedIn: boolean;
  userId: string | undefined;
}

export default function ActivitiesSearch({
  activities,
  categories,
  isLoggedIn,
  userId,
}: ActivitiesSearchProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useActivitiesAnimations(bgRef, searchRef);

  // Map Categories to SearchBar Format
  const categoryFilters = categories.map((category, index) => ({
    id: index,
    name: category,
  }));

  return (
    <div ref={searchRef} className="z-10 w-full px-4 md:px-8 lg:px-32">
      <SearchBar
        items={activities}
        className="start-bottom"
        isCentered={true}
        categories={categoryFilters}
        getItemCategoryId={(item) => categories.indexOf(item.category)}
      >
        {(filteredActivities) => (
          <section className="z-10 mb-10 p-2">
            <div className="flex flex-wrap justify-center gap-4 px-0">
              {filteredActivities.map((activity, index) => (
                <div className="start-bottom" key={activity.id}>
                  <ActivityCard
                    activity={activity}
                    index={index}
                    category={activity.category}
                    approvedCount={activity.approvedCount}
                    applicationStatus={activity.applicationStatus}
                    isLoggedIn={isLoggedIn}
                    userId={userId}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </SearchBar>
    </div>
  );
}
