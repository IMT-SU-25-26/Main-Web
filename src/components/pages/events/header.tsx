import Image from "next/image";

export default function EventsHeader() {
  return (
    <>
      <div className="header-reveal relative w-full">
        <Image
          className="absolute -top-10 left-0 z-1"
          src="/events/top-blue-paper.webp"
          alt="bluepaper"
          width={200}
          height={200}
        />

        <Image
          className="hidden sm:block absolute -top-15 left-0 z-0"
          src="/events/top-cloud.webp"
          alt="topcloud"
          width={500}
          height={500}
        />

        <Image
          className="absolute -top-10 right-0 z-1 -scale-x-100"
          src="/events/top-blue-paper.webp"
          alt="bluepaper"
          width={200}
          height={200}
        />

        <Image
          className="hidden sm:block absolute -top-15 right-0 z-0 -scale-x-100"
          src="/events/top-cloud.webp"
          alt="topcloud"
          width={500}
          height={500}
        />
      </div>
      {/* Header dengan animasi */}
      <div className="header-reveal flex justify-center relative">
        <Image
          className="z-10"
          src="/events/event-header.svg"
          alt="eventheader"
          width={600}
          height={600}
        />
        <Image
          className="yellow-star-rotate absolute hidden sm:flex left-[-27%] top-10 z-0 w-25 sm:w-43.75"
          src="/events/yellow-star.webp"
          alt="yellowstar"
          width={175}
          height={175}
        />
        <Image
          className="yellow-star-rotate absolute hidden sm:flex right-[-27%] top-20 z-0 w-25 sm:w-43.75"
          src="/events/yellow-star.webp"
          alt="yellowstar"
          width={175}
          height={175}
        />
      </div>
    </>
  );
}
