import Image from "next/image";
import Card from "./card";

export default function SocialActivitySection() {
  return (
    <>
      <div className="section-reveal relative mt-10 mb-2 flex h-35 w-full items-center justify-center px-4 sm:w-83">
        <h1 className="relative top-4 z-10 text-xl font-extrabold text-white sm:top-[2.3rem] sm:text-2xl">
          SOCIAL ACTIVITY
        </h1>
        <Image
          src="/images/pages/members/decorations/socialactivityrectangle.svg"
          alt="Committee decoration"
          width={150}
          height={150}
          className="absolute top-16 z-0 h-auto w-52 sm:top-20 sm:w-68"
        />
        <Image
          src="/images/pages/members/decorations/bigleftcloudasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="bigleftcloudasset absolute z-0 h-auto w-0 -translate-y-8 sm:w-0 sm:-translate-x-140 sm:translate-y-4 lg:w-[18rem] lg:-translate-x-160"
        />
        <Image
          src="/images/pages/members/decorations/starasset.png"
          alt="Committee decoration"
          width={150}
          height={150}
          className="starasset absolute z-0 h-auto w-24 translate-x-96 -translate-y-16 sm:w-40 sm:-translate-x-[-30rem] sm:translate-y-4 lg:translate-x-152"
        />
      </div>
      <div className="section-reveal socialactivity-container mt-10 grid grid-cols-2 items-center justify-center gap-10 px-4 sm:grid-cols-4 sm:gap-5">
        <Card
          id="sa-1"
          name="Aaron Asa S."
          role="COORDINATOR"
          division="SOCIAL ACTIVITY"
          gender="BOY"
          imagesrc="/images/pages/members/social-activity/aaron.jpg"
        />
        <Card
          id="sa-2"
          name="Hans Vere Liem"
          role="MEMBER"
          division="SOCIAL ACTIVITY"
          gender="BOY"
          imagesrc="/images/pages/members/social-activity/hanz.jpg"
        />
        <Card
          id="sa-3"
          name="Muh. Dzaky N.A."
          role="MEMBER"
          division="SOCIAL ACTIVITY"
          gender="BOY"
          imagesrc="/images/pages/members/social-activity/dzaky.jpg"
        />
        <Card
          id="sa-4"
          name="Jeferey Teddy S."
          role="MEMBER"
          division="SOCIAL ACTIVITY"
          gender="BOY"
          imagesrc="/images/pages/members/social-activity/jeferey.jpg"
        />
      </div>
    </>
  );
}
