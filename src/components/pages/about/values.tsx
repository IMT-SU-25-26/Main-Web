import Image from "next/image";

export default function ValuesSection() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex our-values-wrapper relative w-full flex-col justify-center items-center gap-8">
        <Image
          src={"/images/pages/about/OurValuesText.svg"}
          width={900}
          height={900}
          alt="our-values-text"
          className="our-values-text w-[20%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/crown.svg"}
          width={900}
          height={900}
          alt="crown"
          className="crown-about left-[35%] -top-[10%] -rotate-45 absolute w-[6.5%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/among-us.svg"}
          width={900}
          height={900}
          alt="among-us"
          className="among-us-about right-[25%] top-[10%] absolute w-[8.5%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/step.svg"}
          width={900}
          height={900}
          alt="step-text"
          className="step w-[20%] h-auto"
          draggable="false"
        />
        <div className="our-values-card-wrapper p-16 w-full grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-16">
          <div className="strive-card">
            <div className="our-values-card-container relative bg-[#F7A7C2] w-75 h-62.5 rounded-2xl">
              <Image
                src={"/images/pages/about/pin-yellow.png"}
                width={900}
                height={900}
                alt="pin-yellow"
                className="absolute w-[25%] h-auto z-5 -right-[8%] -top-[20%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-6 left-2 top-2">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#EB427B]">S</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                  STRIVE
                </h1>
                <p className="our-values-text-description text-xs text-white font-family-gill-condensed-bold font-bold">
                  Strive for excellence by pushing beyond limits to create
                  positive impact and foster continuous growth.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 take-responsibility-card">
            <div className="our-values-card-container relative rotate-2 bg-[#ECD682] w-75 h-62.5 rounded-2xl">
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-4 -top-6">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#F5C309]">T</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                  TAKE RESPONSIBILITY
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                  Take responsibility with integrity, shaping character maturity
                  through accountable actions and decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="relative rotate-2 our-values-card-container  mt-[15%] bg-[#AED8AD] w-75 h-62.5 rounded-2xl">
              <Image
                src={"/images/pages/about/tape.png"}
                width={900}
                height={900}
                alt="tape"
                className="absolute w-[50%] h-auto z-5 right-[31%] -top-[10%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[4.5deg] -left-2 -top-3">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#37951D]">E</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                  EXPLORE
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                  Explore both the world of knowledge and the depths of oneself,
                  nurturing curiosity, self-awareness, and intellectual growth.
                </p>
              </div>
            </div>
          </div>
          <div className="pioneer-card">
            <div className="our-values-card-container relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-75 h-62.5 rounded-2xl">
              <Image
                src={"/images/pages/about/clipper.png"}
                width={900}
                height={900}
                alt="clipper"
                className="absolute w-[50%] h-auto z-5 -right-[20%] -top-[35%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[8.5deg] -left-2 -top-[1%]">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#0E53B2]">P</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                  PIONEER
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                  Pioneer transformative initiatives with courage and vision to
                  lead innovation and change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="z-0 flex sm:hidden our-values-wrapper relative w-full flex-col justify-center items-center gap-4">
        <Image
          src={"/images/pages/about/OurValuesText.svg"}
          width={900}
          height={900}
          alt="our-values-text"
          className="our-values-text w-[50%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/bunderan-biru-about-mobile.svg"}
          width={900}
          height={900}
          alt="crown"
          className="crown-about left-[0%] -top-[25%] absolute w-[15%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/crown.svg"}
          width={900}
          height={900}
          alt="crown"
          className="crown-about left-[20%] -top-[4%] -rotate-45 absolute w-[8.5%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/among-us.svg"}
          width={900}
          height={900}
          alt="among-us"
          className="among-us-about right-[1.5%] top-[10%] absolute w-[20.5%] h-auto"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/step.svg"}
          width={900}
          height={900}
          alt="step-text"
          className="step w-[50%] h-auto"
          draggable="false"
        />

        {/* dekstop */}
        <div className="hidden sm:grid our-values-card-wrapper sm:p-16 w-full grid-cols-2 sm:grid-cols-4 justify-center items-center gap-16">
          <div className="strive-card">
            <div className="our-values-card-container relative bg-[#F7A7C2] w-75 h-62.5 rounded-2xl">
              <Image
                src={"/images/pages/about/pin-yellow.png"}
                width={900}
                height={900}
                alt="pin-yellow"
                className="absolute w-[25%] h-auto z-5 -right-[8%] -top-[20%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-6 left-2 top-2">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#EB427B]">S</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  STRIVE
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 take-responsibility-card">
            <div className="our-values-card-container relative rotate-2 bg-[#ECD682] w-75 h-62.5 rounded-2xl">
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-4 -top-6">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#F5C309]">T</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  TAKE RESPONSIBILITY
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="relative rotate-2 our-values-card-container  mt-[15%] bg-[#AED8AD] w-75 h-62.5 rounded-2xl">
              <Image
                src={"/images/pages/about/tape.png"}
                width={900}
                height={900}
                alt="tape"
                className="absolute w-[50%] h-auto z-5 right-[31%] -top-[10%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[4.5deg] -left-2 -top-3">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#37951D]">E</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  EXPLORE
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="pioneer-card">
            <div className="our-values-card-container relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-75 h-62.5 rounded-2xl">
              <Image
                src={"/images/pages/about/clipper.png"}
                width={900}
                height={900}
                alt="clipper"
                className="absolute w-[50%] h-auto z-5 -right-[20%] -top-[35%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[8.5deg] -left-2 -top-[1%]">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#0E53B2]">P</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  PIONEER
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="grid sm:hidden our-values-card-wrapper ml-[4%] p-7 w-full grid-cols-2 justify-center items-center gap-16 space-y-1">
          <div className="strive-card">
            <div className="our-values-card-container relative bg-[#F7A7C2] w-75 h-62.5 rounded-2xl flex flex-col justify-center items-center">
              <Image
                src={"/images/pages/about/pin-yellow.png"}
                width={900}
                height={900}
                alt="pin-yellow"
                className="absolute w-[25%] h-auto z-5 -right-[8%] -top-[20%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-4 left-1 top-2">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#EB427B]">S</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  STRIVE
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Strive for excellence by pushing beyond limits to create
                  positive impact and foster continuous growth.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 take-responsibility-card">
            <div className="our-values-card-container relative rotate-2 bg-[#ECD682] w-75 h-62.5 rounded-2xl flex flex-col justify-center items-center">
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-2 -top-3">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#F5C309]">T</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  TAKE RESPONSIBILITY
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Take responsibility with integrity, shaping character maturity
                  through accountable actions and decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="relative rotate-2 our-values-card-container  mt-[15%] bg-[#AED8AD] w-75 h-62.5 rounded-2xl flex flex-col justify-center items-center">
              <Image
                src={"/images/pages/about/tape.png"}
                width={900}
                height={900}
                alt="tape"
                className="absolute w-[50%] h-auto z-5 right-[24%] -top-[12.5%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[1.5deg] left-0 -top-2">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#37951D]">E</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  EXPLORE
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Explore both the world of knowledge and the depths of oneself,
                  nurturing curiosity, self-awareness, and intellectual growth.
                </p>
              </div>
            </div>
          </div>
          <div className="pioneer-card">
            <div className="our-values-card-container relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-75 h-62.5 rounded-2xl flex flex-col justify-center items-center">
              <Image
                src={"/images/pages/about/clipper.png"}
                width={900}
                height={900}
                alt="clipper"
                className="absolute w-[50%] h-auto z-5 -right-[20%] -top-[35%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[6.5deg] -left-2 -top-[1%]">
                <div className="our-values-logo-container w-12 h-12 bg-white rounded-full flex justify-center items-center">
                  <h1 className="our-values-logo text-4xl text-[#0E53B2]">P</h1>
                </div>
                <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                  PIONEER
                </h1>
                <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                  Pioneer transformative initiatives with courage and vision to
                  lead innovation and change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
