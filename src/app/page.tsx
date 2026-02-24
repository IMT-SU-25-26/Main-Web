import Home from "@/components/pages/home/home";
import { getLatestActivities } from "@/services/activity";

export default async function HomePage() {
  const latestActivities = await getLatestActivities();

  return <Home latestActivities={latestActivities} />;
}
