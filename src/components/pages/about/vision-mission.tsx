import Image from "next/image";

export default function VisionMissionSection() {
  return (
    <>
      {/* Desktop */}
      <div className="vision-mission-wrapper relative -mt-[2.5%] hidden min-h-300 w-full min-w-screen items-center justify-center gap-24 sm:flex">
        <Image
          src={"/images/pages/about/BigFractureAbout.webp"}
          width={900}
          height={900}
          alt="big-fracture"
          className="big-fracture w-full100% absolute z-2 h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/CircleKiriFracture.svg"}
          width={900}
          height={900}
          alt="circle-kiri-fracture"
          className="circle-kiri-fracture absolute -bottom-[15%] left-0 h-auto w-[40%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/vision-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="vision-card absolute top-[30%] left-[10%] z-3 h-auto w-[30%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/mission-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="mission-card absolute right-[18%] bottom-[15%] z-3 h-auto w-[30%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/green-arrow.png"}
          width={900}
          height={900}
          alt="big-fracture"
          className="green-arrow-about absolute right-[43.25%] bottom-[35%] z-3 h-auto w-[18%] rotate-45"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/PencilRuler.webp"}
          width={900}
          height={900}
          alt="big-fracture"
          className="pencil-ruler absolute -top-[5%] left-[0%] z-3 h-auto w-[45%] sm:w-[23.5%]"
          draggable="false"
        />
      </div>

      {/* Mobile */}
      <div className="vision-mission-wrapper relative z-1 -mt-[2.5%] flex min-h-300 w-full min-w-screen items-center justify-center gap-24 sm:hidden">
        <Image
          src={"/images/pages/about/mobile-big-fracture.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="big-fracture absolute z-2 h-auto w-full"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/vision-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="vision-card absolute top-[30%] z-3 h-auto w-[80%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/mission-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="mission-card absolute bottom-[15%] z-3 h-auto w-[80%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/mobile-pencil-ruler.webp"}
          width={900}
          height={900}
          alt="big-fracture"
          className="pencil-ruler absolute -top-[5%] left-[0%] z-3 h-auto w-[35%] sm:w-[23.5%]"
          draggable="false"
        />
      </div>
    </>
  );
}
