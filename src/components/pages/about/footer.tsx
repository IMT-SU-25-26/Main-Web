import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="footer-wrapper relative mt-[5%] flex w-screen justify-between">
      <Image
        src={"/images/pages/home/sobekan-bottom-left.png"}
        width={900}
        height={900}
        alt="footer-left-background"
        className="about-footer-left-background z-0 h-auto w-[20%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/sobekan-bottom-right.png"}
        width={900}
        height={900}
        alt="about-footer-right-background"
        className="about-footer-right-background z-0 h-auto w-[20%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/laptop.png"}
        width={900}
        height={900}
        alt="laptop"
        className="about-laptop absolute -right-[1.5%] bottom-[20%] z-10 h-auto w-[25%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/laptop-spark.png"}
        width={900}
        height={900}
        alt="laptop-spark"
        className="about-laptop-spark hidden md:block absolute right-[5%] bottom-[60%] z-10 h-auto w-[15%]"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/heart.png"}
        width={900}
        height={900}
        alt="heart"
        className="about-heart absolute bottom-[0%] left-[0%] z-10 h-auto w-[12.5%]"
        draggable="false"
      />
    </div>
  );
}
