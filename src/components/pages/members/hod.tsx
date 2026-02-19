import Image from "next/image";
import Card from "./card";

export default function HODSection() {
  return (
    <>
      <div className="section-reveal relative mb-2 flex h-28 w-full items-center justify-center px-2 sm:h-35 sm:px-4 lg:px-0">
        <h1 className="relative z-10 text-lg font-extrabold text-white sm:text-2xl">
          HEAD OF DEPARTMENT
        </h1>
        <Image
          src="/committee/hodrectangle.svg"
          alt="Committee decoration"
          width={600}
          height={120}
          className="absolute z-0 h-auto w-68 sm:w-92 lg:w-92"
        />
      </div>
      <div className="section-reveal hod-container mt-6 grid grid-cols-2 items-center justify-center gap-10 px-2 sm:mt-10 sm:grid-cols-3 sm:gap-5 sm:px-4">
        <Card
          id="hod-1"
          name="Dave Gideon T.W."
          role="PRESIDENT"
          division="HOD"
          gender="BOY"
          imagesrc="/hod/dave.jpg"
        />
        <Card
          id="hod-2"
          name="Marcellino Indra W."
          role="VICE PRES"
          division="HOD"
          gender="BOY"
          imagesrc="/hod/acel.jpg"
        />
        <Card
          id="hod-3"
          name="Theressa N.T."
          role="SECRETARY"
          division="HOD"
          gender="GIRL"
          imagesrc="/hod/there.jpg"
        />
        <Card
          id="hod-4"
          name="Graciella Chelsea L."
          role="SECRETARY"
          division="HOD"
          gender="GIRL"
          imagesrc="/hod/chelsealu.jpg"
        />
        <Card
          id="hod-5"
          name="Priscilia King C."
          role="TREASURER"
          division="HOD"
          gender="GIRL"
          imagesrc="/hod/priscilia.jpg"
        />
        <Card
          id="hod-6"
          name="Chrisensia A.G."
          role="TREASURER"
          division="HOD"
          gender="GIRL"
          imagesrc="/hod/abbie.jpg"
        />
      </div>
    </>
  );
}
