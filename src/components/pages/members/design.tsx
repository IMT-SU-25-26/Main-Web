import Image from "next/image";
import Card from "./card";

export default function DesignSection() {
  return (
    <>
      <div className="section-reveal relative mt-10 mb-2 flex h-35 w-full items-center justify-center px-4 sm:w-83">
        <h1 className="relative top-4 z-10 text-xl font-extrabold text-white sm:top-[2.3rem] sm:text-2xl">
          PDD DESIGN
        </h1>
        <Image
          src="/images/pages/members/decorations/pdddesigndesign.svg"
          alt="Committee Decoration"
          width={150}
          height={150}
          className="absolute top-16 z-0 h-auto w-40 sm:top-20 sm:w-48"
        />
        <Image
          src="/images/pages/members/decorations/leftcloudasset.png"
          alt="Committee Decoration"
          width={150}
          height={150}
          className="leftcloudasset absolute z-0 hidden h-auto -translate-x-108 translate-y-8 lg:flex lg:w-40 lg:-translate-x-174"
        />
        <Image
          src="/images/pages/members/decorations/redstarasset.png"
          alt="Committee Decoration"
          width={150}
          height={150}
          className="redstarasset absolute z-0 h-auto w-24 translate-x-96 translate-y-4 sm:w-48 sm:-translate-x-[-29rem] sm:translate-y-4 lg:translate-x-176"
        />
      </div>
      <div className="section-reveal pdddocumentation-container mt-10 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-4 sm:gap-5">
        <Card
          id="pdddesign-1"
          name="Rex Kenny W."
          role="COORDINATOR"
          division="PDD DESIGN"
          gender="BOY"
          imagesrc="/images/pages/members/design/rex.jpg"
        />
        <Card
          id="pdddesign-2"
          name="Chelsea Deanna H."
          role="MEMBER"
          division="PDD DESIGN"
          gender="GIRL"
          imagesrc="/images/pages/members/design/cz.jpg"
        />
        <Card
          id="pdddesign-3"
          name="Matahari Dea Z."
          role="MEMBER"
          division="PDD DESIGN"
          gender="GIRL"
          imagesrc="/images/pages/members/design/matahari.jpg"
        />
        <Card
          id="pdddesign-4"
          name="Bryan Carlie L.S."
          role="MEMBER"
          division="PDD DESIGN"
          gender="BOY"
          imagesrc="/images/pages/members/design/bc.jpg"
        />
      </div>
      <div className="section-reveal pdddocumentation-container relative mt-5 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-3 sm:gap-5">
        <Card
          id="pdddesign-5"
          name="Jason Christoper"
          role="MEMBER"
          division="PDD DESIGN"
          gender="BOY"
          imagesrc="/images/pages/members/design/jc.jpg"
        />
        <Card
          id="pdddesign-6"
          name="Jason Tio"
          role="MEMBER"
          division="PDD DESIGN"
          gender="BOY"
          imagesrc="/images/pages/members/design/jason.jpg"
        />
        <Card
          id="pdddesign-7"
          name="Clarice Harijanto"
          role="MEMBER"
          division="PDD DESIGN"
          gender="GIRL"
          imagesrc="/images/pages/members/design/clarice.jpg"
        />
      </div>
    </>
  );
}
