import Image from "next/image";

export default function ActivityBackground() {
  return (
    <>
      {/* Decorative Image */}
      <div className="select-none">
        <Image
          className="decor-img decor-img absolute -top-7 -right-3 w-25 select-none md:-top-15 md:w-45 lg:w-57.5 xl:w-75"
          src="/images/pages/activities/details/top-right.webp"
          alt=""
          width={300}
          height={327}
          draggable={false}
        ></Image>

        <Image
          className="decor-img absolute right-0 bottom-0 w-50 select-none md:w-75 lg:w-92.5 xl:w-125"
          src="/images/pages/activities/details/bottom-right.svg"
          alt=""
          width={500}
          height={251}
          draggable={false}
        ></Image>

        <Image
          className="decor-img absolute right-0 bottom-10 hidden w-50 select-none md:w-75 lg:w-92.5 xl:block xl:w-75"
          src="/images/pages/activities/details/bottom-right2.webp"
          alt=""
          width={500}
          height={251}
          draggable={false}
        ></Image>

        <Image
          className="decor-img absolute -top-23 -left-5 hidden w-75 select-none md:block lg:w-62.5 xl:w-62.5"
          src="/images/pages/activities/details/top-left.svg"
          alt=""
          width={450}
          height={287}
          draggable={false}
        ></Image>

        <Image
          className="decor-img absolute top-0 left-50 hidden w-75 select-none lg:block lg:w-62.5 xl:w-37.5"
          src="/images/pages/activities/details/top-left2.webp"
          alt=""
          width={450}
          height={287}
          draggable={false}
        ></Image>

        <Image
          className="decor-img absolute -bottom-5 -left-50 w-87.5 select-none md:left-0 md:w-75 lg:w-50 xl:w-112.5"
          src="/images/pages/activities/details/bottom-left.webp"
          alt=""
          width={450}
          height={287}
          draggable={false}
        ></Image>

        <Image
          className="decor-img absolute top-40 -left-45 z-0 w-75 select-none md:top-80 md:w-87.5 xl:top-53"
          src="/images/pages/activities/details/red-fan.svg"
          alt=""
          width={720}
          height={701}
          draggable={false}
        ></Image>
      </div>
    </>
  );
}
