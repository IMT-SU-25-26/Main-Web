import Image from "next/image";

interface DecorativeImagesProps {
  index: number;
}

export default function EventBackground({ index }: DecorativeImagesProps) {
  const v = index % 10;

  if (v === 0) {
    return (
      <Image
        src="/images/pages/events/red-wheel.svg"
        alt="red wheel"
        width={400}
        height={400}
        className="absolute top-12 -right-32 z-0 w-50 sm:-right-64 sm:w-100"
      />
    );
  }

  if (v === 1) {
    return (
      <>
        <Image
          src="/images/pages/events/lightbulb.webp"
          alt="light bulb"
          width={150}
          height={150}
          className="absolute top-8 -left-8 z-0 w-18.75 rotate-15 sm:-left-16 sm:w-37.5"
        />
        <Image
          src="/images/pages/events/red-ribbon.webp"
          alt="red ribbon"
          width={150}
          height={150}
          className="absolute top-20 -left-8 z-0 w-18.75 rotate-60 sm:-left-16 sm:w-37.5"
        />
      </>
    );
  }

  if (v === 2) return null;

  if (v === 3) {
    return (
      <Image
        src="/images/pages/events/blue-wheel.svg"
        alt="blue wheel"
        width={400}
        height={400}
        className="absolute -top-20 -left-40 z-0 w-50 sm:-left-80 sm:w-100"
      />
    );
  }

  if (v === 4) {
    return (
      <Image
        src="/images/pages/events/green-arrow.webp"
        alt="green arrow"
        width={200}
        height={200}
        className="absolute top-8 right-0 z-0 w-25 sm:right-0 sm:w-50"
      />
    );
  }

  if (v === 5) {
    return (
      <Image
        src="/images/pages/events/yellowstar.webp"
        alt="yellow star"
        width={400}
        height={400}
        className="yellowstar-rotate absolute -bottom-20 -left-20 z-0 h-auto w-25 sm:-left-40 sm:w-50"
      />
    );
  }

  if (v === 6) return null;

  if (v === 7) {
    return (
      <Image
        src="/images/pages/events/blue-book.webp"
        alt="blue book"
        width={400}
        height={400}
        className="absolute -top-16 -left-20 z-0 hidden h-auto w-25 sm:-left-40 sm:block sm:w-50"
      />
    );
  }

  if (v === 8) {
    return (
      <Image
        src="/images/pages/events/camera.webp"
        alt="camera"
        width={200}
        height={200}
        className="absolute top-8 -right-6 z-0 w-25 -scale-x-100 sm:-right-12 sm:w-50"
      />
    );
  }

  return (
    <>
      <Image
        src="/images/pages/events/cloud.webp"
        alt="cloud"
        width={400}
        height={400}
        className="absolute -bottom-20 -left-20 z-0 h-auto w-25 sm:-left-40 sm:w-50"
      />
      <Image
        src="/images/pages/events/pink-oval.svg"
        alt="pink oval"
        width={200}
        height={200}
        className="absolute top-88 -right-6 z-0 h-auto w-25 sm:-right-12 sm:w-50"
      />
    </>
  );
}
