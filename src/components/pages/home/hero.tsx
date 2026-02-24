import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container-landing relative z-10 flex h-full w-fit items-center justify-center">
      <Image
        className="red-bubble top-0 z-8"
        src={"/images/pages/home/su-imt-home-red-bubble.svg"}
        draggable="false"
        width={924}
        height={560}
        alt="red-bubble"
        fetchPriority="high"
      />
      <Image
        className="dragon absolute bottom-16 -left-48 z-9 h-auto w-48"
        src={"/images/pages/home/dragon.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="dragon"
        fetchPriority="high"
      />
      <Image
        className="yellow-star-landing absolute top-1/3 -left-6 z-9 h-auto w-40"
        src={"/images/pages/home/yellow-star-landing.webp"}
        draggable="false"
        width={628}
        height={380}
        alt="yellow-star-landing"
        fetchPriority="high"
      />
      <Image
        className="green-spike-landing absolute top-0 left-0 z-9 h-auto w-60"
        src={"/images/pages/home/green-spike-landing.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="green-spike-landing"
        fetchPriority="high"
      />
      <Image
        className="crown absolute top-17 right-18 z-9 h-auto w-32"
        src={"/images/pages/home/crown.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="crown"
        fetchPriority="high"
      />
      <Image
        className="blue-line-landing absolute -top-15 -right-18 z-9 h-auto w-80"
        src={"/images/pages/home/blue-line-landing.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="blue-line-landing"
        fetchPriority="high"
      />
      <Image
        className="red-spike-landing absolute -right-[12.5%] bottom-[25%] z-9 h-auto w-90"
        src={"/images/pages/home/red-spike-landing.webp"}
        draggable="false"
        width={628}
        height={380}
        alt="red-spike-landing"
        fetchPriority="high"
      />
      <Image
        className="green-arrow-landing absolute -right-2.5 bottom-5 z-9 h-auto w-60"
        src={"/images/pages/home/green-arrow.png"}
        draggable="false"
        width={628}
        height={380}
        alt="green-arrow-landing"
        fetchPriority="high"
      />
      <Image
        className="among-us absolute -right-48 bottom-16 z-9 h-auto w-32"
        src={"/images/pages/home/among-us.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="mid-bubble"
        fetchPriority="high"
      />
      <Image
        className="yellow-bubble absolute top-24 left-20 z-9"
        src={"/images/pages/home/su-imt-home-yellow-bubble.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="mid-bubble"
        fetchPriority="high"
      />
      <Image
        className="front-bubble absolute top-30 left-32 z-10"
        src={"/images/pages/home/su-imt-home-front-buble.svg"}
        draggable="false"
        width={547}
        height={334}
        alt="front-bubble"
        fetchPriority="high"
      />
      <Image
        className="welcome absolute top-34 left-56 z-10"
        src={"/images/pages/home/welcome.svg"}
        draggable="false"
        width={324.6}
        height={193.7}
        alt="su-welcome"
        fetchPriority="high"
      />
      <Image
        className="demon-cat absolute top-50 left-38 z-10"
        src={"/images/pages/home/demon-cat.png"}
        draggable="false"
        width={71}
        height={67}
        alt="demon-cat"
        fetchPriority="high"
      />
      <Image
        className="stars-left absolute top-66 left-44 z-10"
        src={"/images/pages/home/stars.svg"}
        draggable="false"
        width={45}
        height={37}
        alt="stars-left"
        fetchPriority="high"
      />
      <Image
        className="stars-right absolute top-42 right-80 z-10"
        src={"/images/pages/home/stars.svg"}
        draggable="false"
        width={45}
        height={37}
        alt="stars-right"
        fetchPriority="high"
      />
      <Image
        className="to-text absolute top-60 left-[40.75%] z-10"
        src={"/images/pages/home/to.svg"}
        draggable="false"
        width={36.8}
        height={72.9}
        alt="to"
        fetchPriority="high"
      />
      <Image
        className="su-imt-text absolute top-62 right-76 z-10"
        src={"/images/pages/home/su-imt-text.svg"}
        draggable="false"
        width={426.5}
        height={126}
        alt="stars-right"
        fetchPriority="high"
      />
      <Image
        className="title-background absolute right-76 z-10"
        src={"/images/pages/home/your-creative-tech.svg"}
        draggable="false"
        width={426.5}
        height={126}
        alt="stars-right"
        fetchPriority="high"
      />
    </div>
  );
}
