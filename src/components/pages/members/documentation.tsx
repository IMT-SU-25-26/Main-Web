import Image from "next/image";
import Card from "./card";

export default function DocumentationSection() {
  return (
    <>
      <div className="section-reveal relative mt-10 mb-2 flex h-35 w-full items-center justify-center px-4 sm:w-83">
        <h1 className="relative top-[1.7rem] z-10 rotate-2 text-xl font-extrabold text-white sm:top-[2.6rem] sm:text-2xl">
          PDD DOCUMENTATION
        </h1>
        <Image
          src="/committee/pdddocumentationrectangle.svg"
          alt="Committee decoration"
          width={150}
          height={150}
          className="absolute top-[4.3rem] z-0 h-auto w-[18rem] sm:top-20 sm:w-148"
        />
        <Image
          src="/committee/pin.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="absolute top-[2.4rem] z-0 h-auto w-8 -translate-x-34 sm:top-8 sm:left-28 sm:w-12"
        />
      </div>
      <div className="section-reveal pdddocumentation-container mt-10 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-4 sm:gap-5">
        <Card
          id="pdddoc-1"
          name="Matthew Regan H."
          role="COORDINATOR"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/matthewregan.jpg"
        />
        <Card
          id="pdddoc-2"
          name="Sean Lawton"
          role="MEMBER"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/sean.jpg"
        />
        <Card
          id="pdddoc-3"
          name="Flabianos Jason M."
          role="MEMBER"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/flabianos.jpg"
        />
        <Card
          id="pdddoc-4"
          name="Keane Juan S."
          role="MEMBER"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/keane.jpg"
        />
      </div>
      <div className="section-reveal pdddocumentation-container relative mt-5 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-3 sm:gap-5">
        <Card
          id="pdddoc-5"
          name="Stevanus Ivan S."
          role="MEMBER"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/ivan.jpg"
        />
        <Card
          id="pdddoc-6"
          name="Clarrence A.H."
          role="MEMBER"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/clarrence.jpg"
        />
        <Card
          id="pdddoc-7"
          name="Kenneth J.H."
          role="MEMBER"
          division="PDD DOCUMENTATION"
          gender="BOY"
          imagesrc="/pdddocum/kenneth.jpg"
        />
        <Image
          src="/committee/arrowasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="arrowasset absolute z-0 h-auto w-0 sm:w-0 sm:-translate-x-100 sm:-translate-y-24 lg:w-[16rem] lg:-translate-x-124 lg:-translate-y-40"
        />
        <Image
          src="/committee/rightcloudasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="rightcloudasset2 absolute z-0 h-auto w-14 sm:w-0 sm:translate-x-204 lg:w-56 lg:translate-x-212"
        />
      </div>
    </>
  );
}
