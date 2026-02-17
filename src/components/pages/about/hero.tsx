import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Image
        src={"/images/pages/about/AboutUsText.webp"}
        width={900}
        height={900}
        alt="about-us-text"
        className="about-us-text sm:mt-0 w-[80%] sm:w-[40%] h-auto"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/paper-cloud.webp"}
        width={900}
        height={900}
        alt="paper-cloud"
        className="about-us-paper-cloud-mobile absolute sm:hidden w-[30%] rotate-y-180 h-auto right-0 top-[37.5%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/dragon.svg"}
        width={900}
        height={900}
        alt="dragont"
        className="about-us-dragon-mobile absolute sm:hidden w-[20%] rotate-y-180 h-auto right-[5%] top-[34.5%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/about/dragon-breath.webp"}
        width={900}
        height={900}
        alt="dragont"
        className="about-us-dragon-breath-mobile absolute sm:hidden w-[20%] h-auto right-[17%] top-[28.5%]"
        draggable="false"
      />
      {/* dekstop */}
      <div className="hidden sm:flex about-us-wrapper mt-26 relative w-full justify-center items-center gap-48">
        <div className="left-about-card relative w-1/3 h-80 bg-white rounded-3xl flex flex-col gap-4 p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
          <Image
            src={"/images/pages/home/handle-card.png"}
            width={900}
            height={900}
            alt="handle-about-us-card"
            className="handle-about-us-card absolute bottom-[20%] -left-[18%] w-[25%] h-auto"
            draggable="false"
          />
          <Image
            src={"/images/pages/about/yellow-star.webp"}
            width={900}
            height={900}
            alt="yellow-star"
            className="yellow-star-about-us absolute -bottom-[10%] -right-[8%] w-[25%] h-auto"
            draggable="false"
          />
          <h1 className="about-us-card-title-text text-5xl font-family-gill-condensed-bold font-bold">
            ABOUT US
          </h1>
          <p className="about-us-card-description-text text-2xl font-family-gill">
            Student Union Information and Multimedia Technology is a student-led
            organization that serves as a platform for students of the
            Informatics study program to grow professionally, socially, and
            academically. SU IMT UC organizes various events, workshops, and
            initiatives to enhance student engagement, develop leadership
            skills, and support innovation in technology.
          </p>
        </div>
        <Image
          src={"/images/pages/home/dragon.svg"}
          width={900}
          height={900}
          alt="handle-about-us-card"
          className="dragon-about absolute -bottom-full right-[5%] w-[10%] h-auto rotate-y-180"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/dragon-breath.webp"}
          width={900}
          height={900}
          alt="dragon-breath"
          className="dragon-breath absolute -bottom-[75%] right-[12%] w-[10%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/circle-blue-stick.svg"}
          width={900}
          height={900}
          alt="circle-blue-stick"
          className="circle-blue-stick-about absolute -left-[12.5%] -top-[45%] w-[20%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/circle-red-stick.svg"}
          width={900}
          height={900}
          alt="circle-red-stick"
          className="circle-red-stick-about absolute -right-[10.5%] -top-[95%] w-[15%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/yellow-star-landing.webp"}
          width={900}
          height={900}
          alt="yellow-star-landing-about"
          className="yellow-star-landing-about absolute right-[10.5%] -top-[65%] w-[12.5%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/red-spike-landing.webp"}
          width={900}
          height={900}
          alt="red-spike-landing-about"
          className="red-spike-landing-about absolute left-[6.5%] -top-full w-[12.5%] h-auto"
          draggable="false"
        />
        <div className="relative">
          <Image
            src={"/images/pages/about/peniti.webp"}
            width={900}
            height={900}
            alt="about-us-text"
            className="peniti w-[40%] h-auto absolute z-5 -top-[2%] -right-[9.5%]"
            draggable="false"
          />
          <div className="su-imt-team-card-background relative rotate-[8deg] bg-[#EAD6B1] w-125 h-87.5 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
          <div className="su-imt-team-card-foreground absolute rotate-[8deg] bg-[#FFFF] -left-[10%] top-[10%] w-125 h-87.5 p-4 flex flex-col gap-6 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <div className="su-imt-team-card-image-container w-full h-[80%] bg-[url('/images/pages/about/su_imt_team.webp')] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="su-imt-team-card-text text-2xl font-family-gill font-bold">
              SU IMT Team
            </h1>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex sm:hidden about-us-wrapper mt-10 relative w-full justify-start items-center gap-48">
        <div className="ml-[5%] left-about-card relative w-[60%] h-80 bg-white rounded-xl flex flex-col gap-4 p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
          <Image
            src={"/images/pages/home/handle-card.png"}
            width={900}
            height={900}
            alt="handle-about-us-card"
            className="handle-about-us-card absolute bottom-[20%] -left-[18%] w-[25%] h-auto"
            draggable="false"
          />
          <Image
            src={"/images/pages/about/yellow-star.webp"}
            width={900}
            height={900}
            alt="yellow-star"
            className="yellow-star-about-us absolute -bottom-[10%] -right-[8%] w-[25%] h-auto"
            draggable="false"
          />
          <h1 className="about-us-card-title-text text-5xl font-family-gill-condensed-bold font-bold">
            ABOUT US
          </h1>
          <p className="about-us-card-description-text text-2xl font-family-gill">
            Student Union Information and Multimedia Technology is a student-led
            organization that serves as a platform for students of the
            Informatics study program to grow professionally, socially, and
            academically. SU IMT UC organizes various events, workshops, and
            initiatives to enhance student engagement, develop leadership
            skills, and support innovation in technology.
          </p>
        </div>
        <Image
          src={"/images/pages/home/dragon.svg"}
          width={900}
          height={900}
          alt="handle-about-us-card"
          className="dragon-about absolute -bottom-full right-[5%] w-[10%] h-auto rotate-y-180"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/dragon-breath.webp"}
          width={900}
          height={900}
          alt="dragon-breath"
          className="dragon-breath absolute -bottom-[75%] right-[12%] w-[10%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/circle-red-stick.svg"}
          width={900}
          height={900}
          alt="circle-red-stick"
          className="circle-red-stick-about absolute -right-[10.5%] -top-[95%] w-[15%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/yellow-star-landing.webp"}
          width={900}
          height={900}
          alt="yellow-star-landing-about"
          className="yellow-star-landing-about absolute right-[10.5%] -top-[65%] w-[12.5%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/red-spike-landing.webp"}
          width={900}
          height={900}
          alt="red-spike-landing-about"
          className="red-spike-landing-about absolute left-[6.5%] -top-full w-[12.5%] h-auto"
          draggable="false"
        />
      </div>
      <div className="z-2 mt-[10%] w-full flex justify-end sm:hidden relative">
        <Image
          src={"/images/pages/about/peniti.webp"}
          width={900}
          height={900}
          alt="about-us-text"
          className="peniti w-[40%] h-auto absolute z-5 -top-[2%] -right-[9.5%]"
          draggable="false"
        />
        <div>
          <div className="su-imt-team-card-background relative rotate-[8deg] bg-[#EAD6B1] w-125 h-87.5 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
          <div className="su-imt-team-card-foreground absolute rotate-[8deg] bg-[#FFFF] right-[5%] top-[10%] w-125 h-87.5 p-4 flex flex-col gap-6 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <div className="su-imt-team-card-image-container w-full h-[80%] bg-[url('/images/pages/about/su_imt_team.webp')] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="su-imt-team-card-text text-2xl font-family-gill font-bold">
              SU IMT Team
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
