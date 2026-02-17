import Image from "next/image";

export default function VisionMissionSection() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex vision-mission-wrapper -mt-[2.5%] min-h-300 min-w-screen relative w-full justify-center items-center gap-24">
        <Image
          src={"/images/pages/about/BigFractureAbout.webp"}
          width={900}
          height={900}
          alt="big-fracture"
          className="big-fracture w-full100% h-auto absolute z-2"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/CircleKiriFracture.svg"}
          width={900}
          height={900}
          alt="circle-kiri-fracture"
          className="circle-kiri-fracture w-[40%] h-auto absolute -bottom-[15%] left-0"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/vision-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="vision-card w-[30%] h-auto absolute top-[30%] left-[10%] z-3"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/mission-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="mission-card w-[30%] h-auto absolute bottom-[15%] right-[18%] z-3"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/green-arrow.png"}
          width={900}
          height={900}
          alt="big-fracture"
          className="green-arrow-about w-[18%] h-auto absolute bottom-[35%] right-[43.25%] rotate-45 z-3"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/PencilRuler.webp"}
          width={900}
          height={900}
          alt="big-fracture"
          className="pencil-ruler w-[45%] sm:w-[23.5%] h-auto absolute -top-[5%] left-[0%] z-3"
          draggable="false"
        />
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden vision-mission-wrapper -mt-[2.5%] min-h-300 min-w-screen relative w-full justify-center items-center gap-24 z-1">
        <Image
          src={"/images/pages/about/mobile-big-fracture.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="big-fracture w-full h-auto absolute z-2"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/vision-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="vision-card w-[80%] h-auto absolute top-[30%] z-3"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/mission-card.svg"}
          width={900}
          height={900}
          alt="big-fracture"
          className="mission-card w-[80%] h-auto absolute bottom-[15%] z-3"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/mobile-pencil-ruler.webp"}
          width={900}
          height={900}
          alt="big-fracture"
          className="pencil-ruler w-[35%] sm:w-[23.5%] h-auto absolute -top-[5%] left-[0%] z-3"
          draggable="false"
        />
      </div>
    </>
  );
}
