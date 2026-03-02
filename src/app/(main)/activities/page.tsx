import Activities from "@/components/pages/activities/wrapper";
import { Category } from "@/generated/prisma/enums";
import { getAllActivities } from "@/services/activity";
import {
  getApprovedApplicationsCount,
  getApplicationStatus,
} from "@/services/application";
import { getSession } from "@/lib/auth-server";
import { ActivityWithMeta } from "@/types/db/activity";

export default async function ActivitiesPage() {
  const [rawActivities, session] = await Promise.all([
    getAllActivities(),
    getSession(),
  ]);

  const userId = session?.user?.id;

  const activities: ActivityWithMeta[] = await Promise.all(
    rawActivities.map(async (activity) => {
      const [approvedCount, applicationStatus] = await Promise.all([
        getApprovedApplicationsCount(activity.id),
        userId
          ? getApplicationStatus(activity.id, userId)
          : Promise.resolve(undefined),
      ]);
      return { ...activity, approvedCount, applicationStatus };
    }),
  );

  const categories: Category[] = Object.values(Category).filter(
    (value) => typeof value === "string",
  ) as Category[];

  return (
    <Activities
      activities={activities}
      categories={categories}
      isLoggedIn={!!session}
      userId={userId}
    />
  );
}
