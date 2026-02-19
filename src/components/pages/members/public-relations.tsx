import Image from "next/image";
import Card from "./card";

export default function PublicRelationsSection() {
  return (
    <>
      <div className="section-reveal relative mt-10 mb-2 flex h-35 w-full items-center justify-center px-4 sm:w-83">
        <h1 className="relative top-[1.2rem] z-10 -rotate-2 text-xl font-extrabold text-white sm:top-[2.7rem] sm:text-2xl">
          PUBLIC RELATION
        </h1>
        <Image
          src="/committee/publicrelationrectangle.svg"
          alt="Committee decoration"
          width={150}
          height={150}
          className="absolute top-16 z-0 h-auto w-56 sm:top-20 sm:w-[18rem]"
        />
        <Image
          src="/committee/catasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="catasset absolute z-0 h-auto w-24 -translate-x-96 sm:w-40 sm:-translate-x-120 sm:translate-y-8 lg:-translate-x-160"
        />
      </div>
      <div className="section-reveal publicrelation-container mt-10 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-3 sm:gap-5">
        <Card
          id="pr-1"
          name="Felicia Joshlyn P."
          role="COORDINATOR"
          division="PUBLIC RELATION"
          gender="GIRL"
          imagesrc="/pr/feli.jpg"
        />
        <Card
          id="pr-2"
          name="Shatrya C.C."
          role="MEMBER"
          division="PUBLIC RELATION"
          gender="BOY"
          imagesrc="/pr/shatrya.jpg"
        />
        <Card
          id="pr-3"
          name="Dylan Patrick W."
          role="MEMBER"
          division="PUBLIC RELATION"
          gender="BOY"
          imagesrc="/pr/dylan.jpg"
        />
      </div>
    </>
  );
}
