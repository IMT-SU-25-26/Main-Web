import EventDetail from "@/components/pages/events/event-detail";
import { notFound } from "next/navigation";
import { getEventById, getEventImages } from "@/services/event";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  const [event, images] = await Promise.all([
    getEventById(eventId),
    getEventImages(eventId),
  ]);

  if (!event) notFound();

  return <EventDetail event={event} images={images} />;
}
