import EventDetail from "@/components/pages/events/event-detail";
import { getEventById } from "@/services/event";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  const event = await getEventById(eventId);

  return <EventDetail event={event} />;
}
