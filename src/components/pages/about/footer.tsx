import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="footer-wrapper w-screen flex justify-between mt-[5%]">
      <Image
        src={"/images/pages/home/sobekan-bottom-left.png"}
        width={900}
        height={900}
        alt="footer-left-background"
        className="about-footer-left-background w-[20%] h-auto"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/sobekan-bottom-right.png"}
        width={900}
        height={900}
        alt="about-footer-right-background"
        className="about-footer-right-background w-[20%] h-auto"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/laptop.png"}
        width={900}
        height={900}
        alt="laptop"
        className="about-laptop absolute bottom-[5%] -right-[1.5%] w-[25%] h-auto"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/laptop-spark.png"}
        width={900}
        height={900}
        alt="laptop-spark"
        className="about-laptop-spark absolute right-[5%] bottom-[15%] w-[15%] h-auto"
        draggable="false"
      />
      <Image
        src={"/images/pages/home/heart.png"}
        width={900}
        height={900}
        alt="heart"
        className="about-heart absolute left-[0%] bottom-[0%] w-[12.5%] h-auto"
        draggable="false"
      />
    </div>
  );
}
