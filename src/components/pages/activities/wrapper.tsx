import Background from "./background";
import Search from "./search";
import { Category } from "@/generated/prisma/enums";
import { ActivityWithMeta } from "@/types/db/activity";

interface ActivitiesProps {
  activities: ActivityWithMeta[];
  categories: Category[];
  isLoggedIn: boolean;
  userId: string | undefined;
}

export default function Activities({
  activities,
  categories,
  isLoggedIn,
  userId,
}: ActivitiesProps) {
  return (
    <>
      <div className="h-[6vh] bg-[#F1EEE6]" />

      {/* Background Container */}
      <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden select-none">
        <Background />
        <Search
          activities={activities}
          categories={categories}
          isLoggedIn={isLoggedIn}
          userId={userId}
        />
      </div>
    </>
  );
}
