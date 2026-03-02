import Background from "@/components/pages/achievements/background";
import Achievements from "@/components/pages/achievements/search";
import {
  getFeaturedAchievement,
  getNonFeaturedAchievements,
} from "@/services/achievement";

export default async function AchievementsPage() {
  const featuredAchievement = await getFeaturedAchievement();
  const achievements = await getNonFeaturedAchievements();

  return (
    <>
      <div className="relative m-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Background />
        {/* Main Content */}
        <Achievements
          achievements={achievements}
          featuredAchievement={featuredAchievement}
        />
      </div>
    </>
  );
}
