import Image from "next/image";
import Link from "next/link";

export default function UnionSection() {
  return (
    <div className="container-student-union relative z-10 mt-15 flex min-h-screen min-w-screen flex-col items-center justify-center gap-8">
      <Image
        className="sobekan absolute bottom-0 left-0 z-1 hidden h-full w-full sm:flex"
        src={"/images/pages/home/pink-big-fracture.svg"}
        draggable="false"
        width={1920}
        height={1080}
        alt="sobekan"
        fetchPriority="high"
      />
      <Image
        className="sobekan absolute bottom-0 left-0 z-1 flex h-full w-full sm:hidden"
        src={"/images/pages/home/mobile-sobekan.svg"}
        draggable="false"
        width={1920}
        height={1080}
        alt="sobekan"
        fetchPriority="high"
      />
      <h1 className="what-is-su-imt-text font-family-impact relative z-10 mt-[-10%] text-6xl font-bold text-white">
        WHAT IS SU IMT
      </h1>
      <p className="su-imt-description relative z-10 max-w-2xl text-center text-xl font-bold text-white">
        Student Union Information and Multimedia Technology is a student-led
        organization that serves as a platform for students of the Informatics
        study program to grow professionally, socially, and academically. SU IMT
        UC organizes various events, workshops, and initiatives to enhance
        student engagement, develop leadership skills, and support innovation in
        technology.
      </p>
      <Link
        href="/about"
        className="learn-more-button font-family-impact relative z-10 rounded-2xl bg-[#0E54B2] p-6 px-10 text-4xl font-bold text-white hover:bg-[#2826c3]"
      >
        Learn More
      </Link>
      <Image
        className="circle-stick absolute top-[27.5%] left-0 z-2 hidden w-1/5 sm:flex"
        src={"/images/pages/home/circle-stick.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-stick-left"
        loading="lazy"
        decoding="async"
      />
      <Image
        className="circle-on-stick laptop-on-stick absolute top-[27.5%] left-0 z-3 hidden w-1/5 sm:flex"
        src={"/images/pages/home/laptop-on-stick.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-stick-left"
        loading="lazy"
        decoding="async"
      />
      <Image
        className="book-laptop absolute top-[42.5%] left-0 z-2 hidden w-[22.5%] sm:flex"
        src={"/images/pages/home/book-laptop.webp"}
        draggable="false"
        width={422}
        height={376}
        alt="book-laptop"
        loading="lazy"
        decoding="async"
      />

      <Image
        className="camera absolute top-[27.5%] right-0 z-2 hidden w-1/5 sm:flex"
        src={"/images/pages/home/camera.webp"}
        draggable="false"
        width={422}
        height={376}
        alt="camera"
        loading="lazy"
        decoding="async"
      />
      <Image
        className="circle-background absolute top-[27.5%] right-0 z-1 hidden w-1/5 sm:flex"
        src={"/images/pages/home/circle-background-right.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-foreground"
        loading="lazy"
        decoding="async"
      />
      <Image
        className="circle-foreground absolute top-[23.5%] -right-4 z-1 hidden w-1/5 sm:flex"
        src={"/images/pages/home/circle-foreground-right.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-background"
        loading="lazy"
        decoding="async"
      />

      <Image
        className="sobekan-biru-kiri absolute top-[-22.5%] -left-[5%] z-0 w-[32.5%]"
        src={"/images/pages/home/sobekan-bottom-left.webp"}
        draggable="false"
        width={422}
        height={376}
        alt="sobekan-left"
        loading="lazy"
        decoding="async"
      />
      <Image
        className="sobekan-biru-kanan absolute top-[-22.5%] -right-[5%] z-0 w-[32.5%] rotate-y-180"
        src={"/images/pages/home/sobekan-bottom-left.webp"}
        draggable="false"
        width={422}
        height={376}
        alt="sobekan-right"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
