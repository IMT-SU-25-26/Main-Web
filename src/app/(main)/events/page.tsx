import { getAllEvents } from "@/services/event";
import EventsClient from "./client";

export default async function EventsPage() {
  const events = await getAllEvents();

  return <EventsClient events={events} />;
}
