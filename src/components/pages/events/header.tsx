import Image from "next/image";

export default function EventsHeader() {
  return (
    <>
      <div className="header-reveal relative w-full">
        <Image
          className="absolute -top-10 left-0 z-1"
          src="/images/pages/events/top-blue-paper.webp"
          alt="bluepaper"
          width={200}
          height={200}
        />

        <Image
          className="absolute -top-15 left-0 z-0 hidden sm:block"
          src="/images/pages/events/top-cloud.webp"
          alt="topcloud"
          width={500}
          height={500}
        />
        <Image
          className="absolute -top-10 right-0 z-1 -scale-x-100"
          src="/images/pages/events/top-blue-paper.webp"
          alt="bluepaper"
          width={200}
          height={200}
        />
        <Image
          className="absolute -top-15 right-0 z-0 hidden -scale-x-100 sm:block"
          src="/images/pages/events/top-cloud.webp"
          alt="topcloud"
          width={500}
          height={500}
        />
      </div>

      {/* Header */}
      <div className="header-reveal relative flex justify-center">
        <Image
          className="z-10"
          src="/images/pages/events/event-header.svg"
          alt="eventheader"
          width={600}
          height={600}
        />
        <Image
          className="yellow-star-rotate absolute top-10 left-[-27%] z-0 hidden w-25 sm:flex sm:w-43.75"
          src="/images/pages/events/yellow-star.webp"
          alt="yellowstar"
          width={175}
          height={175}
        />
        <Image
          className="yellow-star-rotate absolute top-20 right-[-27%] z-0 hidden w-25 sm:flex sm:w-43.75"
          src="/images/pages/events/yellow-star.webp"
          alt="yellowstar"
          width={175}
          height={175}
        />
      </div>
    </>
  );
}
  