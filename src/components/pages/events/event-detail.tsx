"use client";

import Image from "next/image";
import Carousel from "@/components/pages/events/carousel";
import { useEventDetailAnimation } from "@/hooks/use-events-animations";
import { EventWithImages } from "@/types/db/event";
import { formatDate } from "@/utils/format-date";

interface EventDetailProps {
  event: EventWithImages | null;
}

export default function EventDetail({ event }: EventDetailProps) {
  useEventDetailAnimation();

  if (!event) return null;

  const formattedDate = formatDate(event, "startDate");

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div className="background-paper relative flex min-h-screen w-full flex-col items-center overflow-hidden">
        {/* Decorative Elements */}
        <Image
          src="/images/pages/events/top-left.webp"
          alt="top left"
          width={700}
          height={475}
          className="top-left-image absolute -top-8 left-0 w-48 opacity-80 sm:-top-12 sm:w-72 md:-top-16 md:w-100 lg:w-100"
        />
        <Image
          src="/images/pages/events/top-right.svg"
          alt="top right"
          width={700}
          height={475}
          className="top-right-image absolute top-0 right-0 w-80 opacity-70 sm:w-100 md:w-120 lg:w-140"
        />
        <Image
          src="/images/pages/events/pink-oval.svg"
          alt="pink oval"
          width={700}
          height={475}
          className="pink-oval-image absolute -bottom-40 -left-28 w-80 opacity-60 sm:-bottom-52 sm:-left-20 sm:w-100 md:-left-28 md:w-120 lg:-bottom-72 lg:w-140"
        />
        <Image
          src="/images/pages/events/bottom-left-2.svg"
          alt="bottom left"
          width={700}
          height={475}
          className="bottom-left-image absolute -bottom-12 left-0 z-1 w-48 opacity-70 sm:-bottom-16 sm:w-72 md:-bottom-20 md:w-100 lg:w-100"
        />
        <Image
          src="/images/pages/events/camera.webp"
          alt="camera"
          width={200}
          height={200}
          className="camera-image absolute -right-4 -bottom-8 w-32 -scale-x-100 rotate-[7deg] opacity-75 sm:-right-8 sm:-bottom-8 sm:w-48 md:-right-24 md:-bottom-12 md:w-60 lg:w-60"
        />

        {/* Carousel */}
        <div className="carousel-container relative mt-12 mb-8 w-full -rotate-1">
          <Carousel images={event.images || []} />
        </div>

        {/* Event Detail Content */}
        <div className="mx-auto mb-32 max-w-6xl px-8 py-16">
          {/* Date Badge */}
          <div className="event-date mb-4">
            <span className="inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-medium tracking-wider text-white uppercase">
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="event-title text-6xl leading-[0.9] font-black tracking-tight text-gray-900 sm:text-7xl md:text-8xl lg:text-9xl">
              {event.title.toUpperCase()}
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 ml-1 max-w-4xl md:ml-2">
            <p className="description-paragraph text-xl leading-relaxed font-light whitespace-pre-line text-gray-700 md:text-2xl">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
