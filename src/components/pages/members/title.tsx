import Image from "next/image";

export default function TitleSection() {
  return (
    <div className="section-reveal relative mt-8 flex h-35 w-full items-center justify-center px-4 sm:w-110">
      {/* Title */}
      <h1 className="relative -top-[1.3rem] z-10 -rotate-3 text-center text-2xl font-extrabold -tracking-[0.08rem] text-black sm:-top-4 sm:text-4xl">
        UNION MEMBERS
      </h1>

      {/* Decorative Assets */}
      <Image
        src="/images/pages/members/decorations/rectanglecommitteememberback.svg"
        alt="Committee Decoration"
        width={150}
        height={150}
        className="absolute left-1/2 z-0 h-auto w-74 -translate-x-1/2 sm:w-full lg:w-full"
      />
      <Image
        src="/images/pages/members/decorations/rectanglecommitteememberfront.svg"
        alt="Committee Decoration"
        width={150}
        height={150}
        className="absolute top-[0.8rem] left-1/2 z-0 h-auto w-74 -translate-x-1/2 sm:-top-[0.05rem] sm:w-full lg:w-full"
      />
      <Image
        src="/images/pages/members/decorations/paperclip.png"
        alt="Committee Decoration"
        width={150}
        height={150}
        className="absolute top-[0.8rem] z-0 h-auto w-14 -translate-x-34 sm:top-[0.05rem] sm:left-30 sm:w-18"
      />
      <Image
        src="/images/pages/members/decorations/quoteasset.png"
        alt="Committee Decoration"
        width={150}
        height={150}
        className="quoteasset absolute z-0 h-auto w-0 -translate-x-102 sm:w-28 sm:-translate-x-140 lg:-translate-x-168"
      />
      <Image
        src="/images/pages/members/decorations/bookasset.png"
        alt="Committee Decoration"
        width={150}
        height={150}
        className="bookasset absolute z-0 h-auto w-0 -translate-x-[-29rem] -translate-y-4 sm:w-60 sm:translate-x-148 lg:translate-x-172"
      />
    </div>
  );
}
