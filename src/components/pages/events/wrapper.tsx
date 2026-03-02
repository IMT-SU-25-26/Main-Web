"use client";

import "@/styles/events.css";
import Card from "@/components/pages/events/card";
import Header from "@/components/pages/events/header";
import Background from "@/components/pages/events/background";
import { useRef } from "react";
import { useEventsAnimation } from "@/hooks/use-events-animations";
import { EventWithImages } from "@/types/db/event";
import { formatDate } from "@/utils/format-date";

interface EventsClientProps {
  events: EventWithImages[];
}

export default function Events({ events }: EventsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEventsAnimation(containerRef);

  return (
    <div className="overflow-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>

      <div
        ref={containerRef}
        className="flex min-h-screen w-full flex-col items-center gap-15 overflow-hidden pb-28"
      >
        <Header />

        {/* Card Section */}
        {events.map((event, index) => {
          const isReverse = index % 2 !== 0;
          const isLast = index === events.length - 1;
          const isComingSoon = new Date(event.startDate) > new Date();

          const formattedDate = formatDate(event, "startDate");

          return (
            <div key={event.id} className="section-reveal relative w-full">
              <Background index={index} />

              <div className="relative z-10">
                <Card
                  title={event.title.toUpperCase()}
                  date={formattedDate}
                  isreverse={isReverse}
                  eventId={event.id}
                  imagesrc={event.images?.[0]?.url || ""}
                  islast={isLast}
                  isComingSoon={isComingSoon}
                />
              </div>
            </div>
          );
        })}

        {events.length === 0 && (
          <div className="section-reveal relative w-full">
            <Background index={0} />
            <div className="relative z-10">
              <Card
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
