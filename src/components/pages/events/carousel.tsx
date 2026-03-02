"use client";

import Image from "next/image";
import { useRef } from "react";
import { useCarouselAnimation } from "@/hooks/use-events-animations";

interface CarouselImage {
  url: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export default function Carousel({ images }: CarouselProps) {
  const slidesRef = useRef<HTMLDivElement>(null);

  useCarouselAnimation(slidesRef, images);

  const extendedSlides = [...images, ...images];

  if (images.length === 0) {
    return (
      <div className="flex h-80 w-full items-center justify-center bg-[rgba(0,0,0,0.8)] text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <div className="relative w-full scale-x-105 overflow-hidden">
      <div
        ref={slidesRef}
        className="flex gap-2 bg-[rgba(0,0,0,0.8)]"
        style={{
          width: `${extendedSlides.length * 408}px`,
          willChange: "transform",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="relative shrink-0"
            style={{ width: "400px", height: "320px" }}
          >
            <Image
              src={slide.url}
              alt={`Event Image ${(index % images.length) + 1}`}
              fill
              className="rounded-xl object-cover"
              sizes="400px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
