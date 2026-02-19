import Image from "next/image";
import Card from "./card";

export default function InternalSection() {
  return (
    <>
      <div className="section-reveal relative mt-8 mb-2 flex h-28 w-full items-center justify-center px-2 sm:h-35 sm:px-4 lg:px-0">
        <h1 className="relative top-[1.3rem] z-10 rotate-3 text-lg font-extrabold text-white sm:top-[2.8rem] sm:text-2xl">
          INTERNAL DIVISION
        </h1>

        <Image
          src="/committee/internalrectangle.svg"
          alt="Committee decoration"
          width={600}
          height={120}
          className="absolute top-12 z-0 h-auto w-60 sm:top-20 sm:w-76 lg:w-76"
        />
        <Image
          src="/committee/yellowstarasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="yellowstarasset absolute z-0 h-auto w-24 -translate-x-102 translate-y-4 sm:w-48 sm:-translate-x-140 sm:translate-y-8 lg:-translate-x-184"
        />
        <Image
          src="/committee/rightcloudasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="rightcloudasset absolute z-0 hidden h-auto translate-y-16 sm:flex sm:w-0 sm:-translate-x-[-35rem] sm:translate-y-8 lg:flex lg:w-56 lg:translate-x-158"
        />
      </div>
      <div className="section-reveal internal-container mt-6 grid grid-cols-2 items-center justify-center gap-10 px-2 sm:mt-10 sm:grid-cols-3 sm:gap-5 sm:px-4">
        <Card
          id="internal-1"
          name="Rinaldy Tanriady T."
          role="COORDINATOR"
          division="INTERNAL"
          gender="BOY"
          imagesrc="/internal/rinaldy.jpg"
        />
        <Card
          id="internal-2"
          name="Dave Tristian N."
          role="MEMBER"
          division="INTERNAL"
          gender="BOY"
          imagesrc="/internal/dave.jpg"
        />
        <Card
          id="internal-3"
          name="Amadeus Ian G."
          role="MEMBER"
          division="INTERNAL"
          gender="BOY"
          imagesrc="/internal/amadeus.jpg"
        />
        <Card
          id="internal-4"
          name="Eileen Cynthia Mark"
          role="MEMBER"
          division="INTERNAL"
          gender="GIRL"
          imagesrc="/internal/eileen.jpg"
        />
        <Card
          id="internal-5"
          name="Angga Dhamika J."
          role="MEMBER"
          division="INTERNAL"
          gender="BOY"
          imagesrc="/internal/angga.jpg"
        />
      </div>
    </>
  );
}
