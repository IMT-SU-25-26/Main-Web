import Image from "next/image";

export default function FooterSection() {
  return (
    <>
      <div className="relative z-2 w-full">
        <Image
          className="green-home-footer-left absolute -top-60 left-0 h-auto w-[30%]"
          src={"/images/pages/home/green-home-footer-left.svg"}
          draggable="false"
          width={1920}
          height={1080}
          alt="footer"
          loading="lazy"
        />
        <Image
          className="yellow-spike-right absolute -top-80 right-0 h-auto w-[15%]"
          src={"/images/pages/home/yellow-spike-right.webp"}
          draggable="false"
          width={1920}
          height={1080}
          alt="footer"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 h-[10vh] w-screen bg-[#E44843]"></div>
    </>
  );
}
