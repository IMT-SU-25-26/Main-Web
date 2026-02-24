import Events from "@/components/pages/events/events";
import { getAllEvents } from "@/services/event";

export default async function EventsPage() {
  const events = await getAllEvents();

  return <Events events={events} />;
}
