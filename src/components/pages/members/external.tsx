import Image from "next/image";
import Card from "./card";

export default function ExternalSection() {
  return (
    <>
      <div className="section-reveal relative mt-10 mb-2 flex h-35 w-full items-center justify-center px-4 sm:w-83">
        <h1 className="relative top-[1.2rem] z-10 -rotate-2 text-xl font-extrabold text-white sm:top-[2.7rem] sm:text-2xl">
          EXTERNAL DIVISION
        </h1>
        <Image
          src="/images/pages/members/decorations/externalrectangle.svg"
          alt="Committee decoration"
          width={150}
          height={150}
          className="absolute top-16 z-0 h-auto w-60 sm:top-20 sm:w-76"
        />
        <Image
          src="/images/pages/members/decorations/longpitaasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="pitaasset absolute z-0 h-auto w-24 -translate-x-48 -translate-y-4 rotate-70 sm:w-40 sm:-translate-x-120 sm:translate-y-4 lg:-translate-x-200 lg:translate-y-4"
        />
      </div>
      <div className="section-reveal external-container mt-10 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-3 sm:gap-5">
        <Card
          id="external-1"
          name="Delvincent Patricio"
          role="COORDINATOR"
          division="EXTERNAL"
          gender="BOY"
          imagesrc="/images/pages/members/external/delvincent.jpg"
        />
        <Card
          id="external-2"
          name="Muhammad Altaf H."
          role="MEMBER"
          division="EXTERNAL"
          gender="BOY"
          imagesrc="/images/pages/members/external/altaf.jpg"
        />
        <Card
          id="external-3"
          name="Kristoforus B.W."
          role="MEMBER"
          division="EXTERNAL"
          gender="BOY"
          imagesrc="/images/pages/members/external/bb.jpg"
        />
        <Card
          id="external-4"
          name="Nicholas Gerwin M."
          role="MEMBER"
          division="EXTERNAL"
          gender="BOY"
          imagesrc="/images/pages/members/external/niki.jpg"
        />
        <Card
          id="external-5"
          name="Filemon Jose H."
          role="MEMBER"
          division="EXTERNAL"
          gender="BOY"
          imagesrc="/images/pages/members/external/jose.jpg"
        />
        <Card
          id="external-6"
          name="Wesley Goeinwan"
          role="MEMBER"
          division="EXTERNAL"
          gender="BOY"
          imagesrc="/images/pages/members/external/wesley.jpg"
        />
      </div>
    </>
  );
}
