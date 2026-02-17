import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Image
        src={"/images/pages/about/AboutUsText.webp"}
        width={900}
        height={900}
        alt="about-us-text"
        className="about-us-text h-auto w-[80%] sm:mt-0 sm:w-[40%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/paper-cloud.webp"}
        width={900}
        height={900}
        alt="paper-cloud"
        className="about-us-paper-cloud-mobile absolute top-[37.5%] right-0 h-auto w-[30%] rotate-y-180 sm:hidden"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/dragon.svg"}
        width={900}
        height={900}
        alt="dragont"
        className="about-us-dragon-mobile absolute top-[34.5%] right-[5%] h-auto w-[20%] rotate-y-180 sm:hidden"
        draggable="false"
      />
      <Image
        src={"/images/pages/about/dragon-breath.webp"}
        width={900}
        height={900}
        alt="dragont"
        className="about-us-dragon-breath-mobile absolute top-[28.5%] right-[17%] h-auto w-[20%] sm:hidden"
        draggable="false"
      />
      {/* dekstop */}
      <div className="about-us-wrapper relative mt-26 hidden w-full items-center justify-center gap-48 sm:flex">
        <div className="left-about-card relative flex h-80 w-1/3 flex-col gap-4 rounded-3xl bg-white p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
          <Image
            src={"/images/pages/home/handle-card.png"}
            width={900}
            height={900}
            alt="handle-about-us-card"
            className="handle-about-us-card absolute bottom-[20%] -left-[18%] h-auto w-[25%]"
            draggable="false"
          />
          <Image
            src={"/images/pages/about/yellow-star.webp"}
            width={900}
            height={900}
            alt="yellow-star"
            className="yellow-star-about-us absolute -right-[8%] -bottom-[10%] h-auto w-[25%]"
            draggable="false"
          />
          <h1 className="about-us-card-title-text font-family-gill-condensed-bold text-5xl font-bold">
            ABOUT US
          </h1>
          <p className="about-us-card-description-text font-family-gill text-2xl">
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
          className="dragon-about absolute right-[5%] -bottom-full h-auto w-[10%] rotate-y-180"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/dragon-breath.webp"}
          width={900}
          height={900}
          alt="dragon-breath"
          className="dragon-breath absolute right-[12%] -bottom-[75%] h-auto w-[10%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/circle-blue-stick.svg"}
          width={900}
          height={900}
          alt="circle-blue-stick"
          className="circle-blue-stick-about absolute -top-[45%] -left-[12.5%] h-auto w-[20%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/circle-red-stick.svg"}
          width={900}
          height={900}
          alt="circle-red-stick"
          className="circle-red-stick-about absolute -top-[95%] -right-[10.5%] h-auto w-[15%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/yellow-star-landing.webp"}
          width={900}
          height={900}
          alt="yellow-star-landing-about"
          className="yellow-star-landing-about absolute -top-[65%] right-[10.5%] h-auto w-[12.5%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/red-spike-landing.webp"}
          width={900}
          height={900}
          alt="red-spike-landing-about"
          className="red-spike-landing-about absolute -top-full left-[6.5%] h-auto w-[12.5%]"
          draggable="false"
        />
        <div className="relative">
          <Image
            src={"/images/pages/about/peniti.webp"}
            width={900}
            height={900}
            alt="about-us-text"
            className="peniti absolute -top-[2%] -right-[9.5%] z-5 h-auto w-[40%]"
            draggable="false"
          />
          <div className="su-imt-team-card-background relative h-87.5 w-125 rotate-[8deg] bg-[#EAD6B1] shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
          <div className="su-imt-team-card-foreground absolute top-[10%] -left-[10%] flex h-87.5 w-125 rotate-[8deg] flex-col gap-6 bg-[#FFFF] p-4 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <div className="su-imt-team-card-image-container h-[80%] w-full bg-[url('/images/pages/about/su_imt_team.webp')] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="su-imt-team-card-text font-family-gill text-2xl font-bold">
              SU IMT Team
            </h1>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="about-us-wrapper relative mt-10 flex w-full items-center justify-start gap-48 sm:hidden">
        <div className="left-about-card relative ml-[5%] flex h-80 w-[60%] flex-col gap-4 rounded-xl bg-white p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
          <Image
            src={"/images/pages/home/handle-card.png"}
            width={900}
            height={900}
            alt="handle-about-us-card"
            className="handle-about-us-card absolute bottom-[20%] -left-[18%] h-auto w-[25%]"
            draggable="false"
          />
          <Image
            src={"/images/pages/about/yellow-star.webp"}
            width={900}
            height={900}
            alt="yellow-star"
            className="yellow-star-about-us absolute -right-[8%] -bottom-[10%] h-auto w-[25%]"
            draggable="false"
          />
          <h1 className="about-us-card-title-text font-family-gill-condensed-bold text-5xl font-bold">
            ABOUT US
          </h1>
          <p className="about-us-card-description-text font-family-gill text-2xl">
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
          className="dragon-about absolute right-[5%] -bottom-full h-auto w-[10%] rotate-y-180"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/dragon-breath.webp"}
          width={900}
          height={900}
          alt="dragon-breath"
          className="dragon-breath absolute right-[12%] -bottom-[75%] h-auto w-[10%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/circle-red-stick.svg"}
          width={900}
          height={900}
          alt="circle-red-stick"
          className="circle-red-stick-about absolute -top-[95%] -right-[10.5%] h-auto w-[15%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/yellow-star-landing.webp"}
          width={900}
          height={900}
          alt="yellow-star-landing-about"
          className="yellow-star-landing-about absolute -top-[65%] right-[10.5%] h-auto w-[12.5%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/red-spike-landing.webp"}
          width={900}
          height={900}
          alt="red-spike-landing-about"
          className="red-spike-landing-about absolute -top-full left-[6.5%] h-auto w-[12.5%]"
          draggable="false"
        />
      </div>
      <div className="relative z-2 mt-[10%] flex w-full justify-end sm:hidden">
        <Image
          src={"/images/pages/about/peniti.webp"}
          width={900}
          height={900}
          alt="about-us-text"
          className="peniti absolute -top-[2%] -right-[9.5%] z-5 h-auto w-[40%]"
          draggable="false"
        />
        <div>
          <div className="su-imt-team-card-background relative h-87.5 w-125 rotate-[8deg] bg-[#EAD6B1] shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
          <div className="su-imt-team-card-foreground absolute top-[10%] right-[5%] flex h-87.5 w-125 rotate-[8deg] flex-col gap-6 bg-[#FFFF] p-4 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <div className="su-imt-team-card-image-container h-[80%] w-full bg-[url('/images/pages/about/su_imt_team.webp')] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="su-imt-team-card-text font-family-gill text-2xl font-bold">
              SU IMT Team
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
