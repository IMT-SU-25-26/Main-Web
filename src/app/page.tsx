import "@/styles/home.css";
import HomePage from "@/components/pages/home/home";
import { getLatestActivities } from "@/services/activity";

export default async function Home() {
  const latestActivities = await getLatestActivities();

  return <HomePage latestActivities={latestActivities} />;
}
