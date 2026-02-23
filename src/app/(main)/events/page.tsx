import EventsPage from "@/components/pages/events/events";
import { getAllEvents } from "@/services/event";

export default async function Events() {
  const events = await getAllEvents();

  return <EventsPage events={events} />;
}
