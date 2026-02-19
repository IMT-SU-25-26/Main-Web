import Image from "next/image";
import Card from "./card";

export default function TechnologySection() {
  return (
    <>
      <div className="section-reveal relative mt-10 mb-2 flex h-35 w-full items-center justify-center px-4 sm:w-83">
        <h1 className="relative top-4 z-10 -rotate-1 text-xl font-extrabold text-white sm:top-10 sm:text-2xl">
          TECHNOLOGY
        </h1>
        <Image
          src="/committee/technologyrectangle.svg"
          alt="Committee decoration"
          width={150}
          height={150}
          className="absolute top-16 z-0 h-auto w-48 sm:top-20 sm:w-62"
        />
        <Image
          src="/committee/tapeasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="tapeasset absolute z-0 h-auto w-36 -translate-x-108 -translate-y-8 sm:w-72 sm:-translate-x-160 lg:-translate-x-192 lg:-translate-y-16"
        />
      </div>
      <div className="section-reveal technology-container mt-10 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-3 sm:gap-5">
        <Card
          id="tech-1"
          name="Valentino Manuel G."
          role="COORDINATOR"
          division="TECHNOLOGY"
          gender="BOY"
          imagesrc="/tech/valen.jpg"
        />
        <Card
          id="tech-2"
          name="Bryan Fernando D."
          role="MEMBER"
          division="TECHNOLOGY"
          gender="BOY"
          imagesrc="/tech/bryan.jpg"
        />
        <Card
          id="tech-3"
          name="Obie Zuriel"
          role="MEMBER"
          division="TECHNOLOGY"
          gender="BOY"
          imagesrc="/tech/obie.jpg"
        />
        <Card
          id="tech-4"
          name="Felix Richardo"
          role="MEMBER"
          division="TECHNOLOGY"
          gender="BOY"
          imagesrc="/tech/felix.jpg"
        />
        <Card
          id="tech-5"
          name="Nicholas Leroy K."
          role="MEMBER"
          division="TECHNOLOGY"
          gender="BOY"
          imagesrc="/tech/nicho.jpg"
        />
      </div>
    </>
  );
}
