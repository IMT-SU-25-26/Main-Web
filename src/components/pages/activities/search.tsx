"use client";

import ActivityCard from "./card";
import SearchBar from "@/components/ui/search-bar";
import { Activity, Category } from "@/generated/prisma/client";

interface ActivitiesSearchProps {
  activities: Activity[];
  categories: Category[];
  confirmApply?: (onConfirm: () => Promise<void>) => void;
}

export default function ActivitiesSearch({
  activities,
  confirmApply,
  categories,
}: ActivitiesSearchProps) {
  // Map Categories to SearchBar Format
  const categoryFilters = categories.map((category, index) => ({
    id: index,
    name: category,
  }));

  return (
    <div className="z-10 w-full px-4 md:px-8 lg:px-32">
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
                    confirmApply={confirmApply}
                    category={activity.category}
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
