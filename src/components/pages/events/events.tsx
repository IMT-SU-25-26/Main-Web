"use client";

import "@/styles/events.css";
import EventCard from "@/components/pages/events/card";
import EventHeader from "@/components/pages/events/header";
import EventBackground from "@/components/pages/events/background";
import { useRef } from "react";
import { useEventsAnimation } from "@/hooks/use-events-animations";
import { formatDate } from "@/utils/format-date";

interface EventData {
  id: string;
  title: string;
  startDate: Date;
  images: { url: string }[];
}

interface EventsClientProps {
  events: EventData[];
}

export default function EventsPage({ events }: EventsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEventsAnimation(containerRef);

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col gap-15 items-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden pb-28">
        <EventHeader />
        
        {/* Card Section */}
        {events.map((event, index) => {
          const isReverse = index % 2 !== 0;
          const isLast = index === events.length - 1;
          const isComingSoon = new Date(event.startDate) > new Date();
          
          const formattedDate = formatDate(event, 'startDate');

          return (
            <div key={event.id} className="section-reveal w-full relative">
              <EventBackground index={index} />

              <div className="relative z-10">
                <EventCard
                  title={event.title.toUpperCase()}
                  date={formattedDate}
                  isreverse={isReverse}
                  eventId={event.id}
                  imagesrc={event.images[0]?.url}
                  islast={isLast}
                  isComingSoon={isComingSoon}
                />
              </div>
            </div>
          );
        })}

        {events.length === 0 && (
          <div className="section-reveal w-full relative">
            <EventBackground index={0} />
            <div className="relative z-10">
              <EventCard
                title="COMING SOON"
                date="COMING SOON"
                isreverse={false}
                islast={true}
                isComingSoon={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
