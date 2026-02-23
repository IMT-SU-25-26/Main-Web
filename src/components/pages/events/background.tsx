import Image from "next/image";

const DECORATIVE_IMAGES = {
  redWheel: {
    src: "/events/red-wheel.svg",
    alt: "redwheel",
    className:
      "absolute right-[-8rem] sm:right-[-16rem] top-[3rem] z-0 w-[200px] sm:w-[400px]",
    width: 400,
    height: 400,
  },
  lightBulb: {
    src: "/events/lightbulb.webp",
    alt: "lightbulb",
    className:
      "absolute left-[-2rem] sm:left-[-4rem] top-[2rem] z-0 rotate-[15deg] w-[75px] sm:w-[150px]",
    width: 150,
    height: 150,
  },
  redRibbon: {
    src: "/events/red-ribbon.webp",
    alt: "redribbon",
    className:
      "absolute left-[-2rem] sm:left-[-4rem] top-[5rem] z-0 rotate-[60deg] w-[75px] sm:w-[150px]",
    width: 150,
    height: 150,
  },
  blueWheel: {
    src: "/events/blue-wheel.svg",
    alt: "bluewheel",
    className:
      "absolute left-[-10rem] sm:left-[-20rem] top-[-5rem] z-0 w-[200px] sm:w-[400px]",
    width: 400,
    height: 400,
  },
  greenArrow: {
    src: "/events/green-arrow.webp",
    alt: "greenarrow",
    className: "absolute right-[0rem] top-[2rem] z-0 w-[100px] sm:w-[200px]",
    width: 200,
    height: 200,
  },
  yellowStar: {
    src: "/events/yellowstar.webp",
    alt: "yellowstar",
    className:
      "yellowstar-rotate absolute w-[10rem] sm:w-[20rem] h-auto left-[-5rem] sm:left-[-10rem] bottom-[-5rem] z-0",
    width: 400,
    height: 400,
  },
  blueBook: {
    src: "/events/blue-book.webp",
    alt: "bluebook",
    className:
      "absolute w-[10rem] sm:w-[20rem] h-auto left-[-5rem] sm:left-[-10rem] top-[-4rem] z-0 hidden sm:block",
    width: 400,
    height: 400,
  },
  camera: {
    src: "/events/camera.webp",
    alt: "camera",
    className:
      "absolute right-[-1.5rem] sm:right-[-3rem] top-[2rem] z-0 -scale-x-100 w-[100px] sm:w-[200px]",
    width: 200,
    height: 200,
  },
  cloud: {
    src: "/events/cloud.webp",
    alt: "cloud",
    className:
      "absolute w-[10rem] sm:w-[20rem] h-auto left-[-2.5rem] sm:left-[-5rem] bottom-[-20rem] z-0",
    width: 400,
    height: 400,
  },
  pinkOval: {
    src: "/events/pink-oval.svg",
    alt: "pinkoval",
    className:
      "absolute w-[12.5rem] sm:w-[25rem] h-auto right-[-1.5rem] sm:right-[-3rem] top-[22rem] z-0",
    width: 200,
    height: 200,
  },
};

const DECORATIVE_PATTERNS = [
  ["redWheel"],
  ["lightBulb", "redRibbon"],
  [],
  ["blueWheel"],
  ["greenArrow"],
  ["yellowStar"],
  [],
  ["blueBook"],
  ["camera"],
  ["cloud", "pinkOval"],
];

interface DecorativeImagesProps {
  index: number;
}

export default function EventBackground({ index }: DecorativeImagesProps) {
  const pattern = DECORATIVE_PATTERNS[index % DECORATIVE_PATTERNS.length];

  return (
    <>
      {pattern.map((key) => {
        const image = DECORATIVE_IMAGES[key as keyof typeof DECORATIVE_IMAGES];
        if (!image) return null;

        return (
          <Image
            key={key}
            className={image.className}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        );
      })}
    </>
  );
}
