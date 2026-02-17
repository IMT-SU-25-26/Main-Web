import Image from "next/image";

export default function ValuesSection() {
  return (
    <>
      {/* Desktop */}
      <div className="our-values-wrapper relative hidden w-full flex-col items-center justify-center gap-8 sm:flex">
        <Image
          src={"/images/pages/about/OurValuesText.svg"}
          width={900}
          height={900}
          alt="our-values-text"
          className="our-values-text h-auto w-[20%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/crown.svg"}
          width={900}
          height={900}
          alt="crown"
          className="crown-about absolute -top-[10%] left-[35%] h-auto w-[6.5%] -rotate-45"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/among-us.svg"}
          width={900}
          height={900}
          alt="among-us"
          className="among-us-about absolute top-[10%] right-[25%] h-auto w-[8.5%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/step.svg"}
          width={900}
          height={900}
          alt="step-text"
          className="step h-auto w-[20%]"
          draggable="false"
        />
        <div className="our-values-card-wrapper grid w-full grid-cols-2 items-center justify-center gap-16 p-16 sm:grid-cols-4">
          <div className="strive-card">
            <div className="our-values-card-container relative h-62.5 w-75 rounded-2xl bg-[#F7A7C2]">
              <Image
                src={"/images/pages/about/pin-yellow.png"}
                width={900}
                height={900}
                alt="pin-yellow"
                className="absolute -top-[20%] -right-[8%] z-5 h-auto w-[25%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute top-2 left-2 flex h-full w-full -rotate-6 flex-col gap-4 rounded-2xl bg-[#EB427B] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#EB427B]">S</h1>
                </div>
                <h1 className="our-values-text-title font-family-gill-condensed-bold text-3xl font-bold text-white">
                  STRIVE
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xs font-bold text-white">
                  Strive for excellence by pushing beyond limits to create
                  positive impact and foster continuous growth.
                </p>
              </div>
            </div>
          </div>
          <div className="take-responsibility-card mt-4">
            <div className="our-values-card-container relative h-62.5 w-75 rotate-2 rounded-2xl bg-[#ECD682]">
              <div className="our-values-details-wrapper absolute -top-6 -left-4 flex h-full w-full flex-col gap-4 rounded-2xl bg-[#F5C309] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#F5C309]">T</h1>
                </div>
                <h1 className="our-values-text-title font-family-gill-condensed-bold text-3xl font-bold text-white">
                  TAKE RESPONSIBILITY
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl font-bold text-white">
                  Take responsibility with integrity, shaping character maturity
                  through accountable actions and decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="our-values-card-container relative mt-[15%] h-62.5 w-75 rotate-2 rounded-2xl bg-[#AED8AD]">
              <Image
                src={"/images/pages/about/tape.png"}
                width={900}
                height={900}
                alt="tape"
                className="absolute -top-[10%] right-[31%] z-5 h-auto w-[50%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute -top-3 -left-2 flex h-full w-full -rotate-[4.5deg] flex-col gap-4 rounded-2xl bg-[#37951D] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#37951D]">E</h1>
                </div>
                <h1 className="our-values-text-title font-family-gill-condensed-bold text-3xl font-bold text-white">
                  EXPLORE
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl font-bold text-white">
                  Explore both the world of knowledge and the depths of oneself,
                  nurturing curiosity, self-awareness, and intellectual growth.
                </p>
              </div>
            </div>
          </div>
          <div className="pioneer-card">
            <div className="our-values-card-container relative mt-[15%] h-62.5 w-75 -rotate-6 rounded-2xl bg-[#6CAAFF]">
              <Image
                src={"/images/pages/about/clipper.png"}
                width={900}
                height={900}
                alt="clipper"
                className="absolute -top-[35%] -right-[20%] z-5 h-auto w-[50%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute -top-[1%] -left-2 flex h-full w-full rotate-[8.5deg] flex-col gap-4 rounded-2xl bg-[#0E53B2] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#0E53B2]">P</h1>
                </div>
                <h1 className="our-values-text-title font-family-gill-condensed-bold text-3xl font-bold text-white">
                  PIONEER
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl font-bold text-white">
                  Pioneer transformative initiatives with courage and vision to
                  lead innovation and change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="our-values-wrapper relative z-0 flex w-full flex-col items-center justify-center gap-4 sm:hidden">
        <Image
          src={"/images/pages/about/OurValuesText.svg"}
          width={900}
          height={900}
          alt="our-values-text"
          className="our-values-text h-auto w-[50%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/bunderan-biru-about-mobile.svg"}
          width={900}
          height={900}
          alt="crown"
          className="crown-about absolute -top-[25%] left-[0%] h-auto w-[15%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/crown.svg"}
          width={900}
          height={900}
          alt="crown"
          className="crown-about absolute -top-[4%] left-[20%] h-auto w-[8.5%] -rotate-45"
          draggable="false"
        />
        <Image
          src={"/images/pages/home/among-us.svg"}
          width={900}
          height={900}
          alt="among-us"
          className="among-us-about absolute top-[10%] right-[1.5%] h-auto w-[20.5%]"
          draggable="false"
        />
        <Image
          src={"/images/pages/about/step.svg"}
          width={900}
          height={900}
          alt="step-text"
          className="step h-auto w-[50%]"
          draggable="false"
        />

        {/* dekstop */}
        <div className="our-values-card-wrapper hidden w-full grid-cols-2 items-center justify-center gap-16 sm:grid sm:grid-cols-4 sm:p-16">
          <div className="strive-card">
            <div className="our-values-card-container relative h-62.5 w-75 rounded-2xl bg-[#F7A7C2]">
              <Image
                src={"/images/pages/about/pin-yellow.png"}
                width={900}
                height={900}
                alt="pin-yellow"
                className="absolute -top-[20%] -right-[8%] z-5 h-auto w-[25%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute top-2 left-2 flex h-full w-full -rotate-6 flex-col gap-4 rounded-2xl bg-[#EB427B] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#EB427B]">S</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  STRIVE
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="take-responsibility-card mt-4">
            <div className="our-values-card-container relative h-62.5 w-75 rotate-2 rounded-2xl bg-[#ECD682]">
              <div className="our-values-details-wrapper absolute -top-6 -left-4 flex h-full w-full flex-col gap-4 rounded-2xl bg-[#F5C309] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#F5C309]">T</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  TAKE RESPONSIBILITY
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="our-values-card-container relative mt-[15%] h-62.5 w-75 rotate-2 rounded-2xl bg-[#AED8AD]">
              <Image
                src={"/images/pages/about/tape.png"}
                width={900}
                height={900}
                alt="tape"
                className="absolute -top-[10%] right-[31%] z-5 h-auto w-[50%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute -top-3 -left-2 flex h-full w-full -rotate-[4.5deg] flex-col gap-4 rounded-2xl bg-[#37951D] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#37951D]">E</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  EXPLORE
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="pioneer-card">
            <div className="our-values-card-container relative mt-[15%] h-62.5 w-75 -rotate-6 rounded-2xl bg-[#6CAAFF]">
              <Image
                src={"/images/pages/about/clipper.png"}
                width={900}
                height={900}
                alt="clipper"
                className="absolute -top-[35%] -right-[20%] z-5 h-auto w-[50%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute -top-[1%] -left-2 flex h-full w-full rotate-[8.5deg] flex-col gap-4 rounded-2xl bg-[#0E53B2] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#0E53B2]">P</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  PIONEER
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="our-values-card-wrapper ml-[4%] grid w-full grid-cols-2 items-center justify-center gap-16 space-y-1 p-7 sm:hidden">
          <div className="strive-card">
            <div className="our-values-card-container relative flex h-62.5 w-75 flex-col items-center justify-center rounded-2xl bg-[#F7A7C2]">
              <Image
                src={"/images/pages/about/pin-yellow.png"}
                width={900}
                height={900}
                alt="pin-yellow"
                className="absolute -top-[20%] -right-[8%] z-5 h-auto w-[25%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute top-2 left-1 flex h-full w-full -rotate-4 flex-col gap-4 rounded-2xl bg-[#EB427B] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#EB427B]">S</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  STRIVE
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Strive for excellence by pushing beyond limits to create
                  positive impact and foster continuous growth.
                </p>
              </div>
            </div>
          </div>
          <div className="take-responsibility-card mt-8">
            <div className="our-values-card-container relative flex h-62.5 w-75 rotate-2 flex-col items-center justify-center rounded-2xl bg-[#ECD682]">
              <div className="our-values-details-wrapper absolute -top-3 -left-2 flex h-full w-full flex-col gap-4 rounded-2xl bg-[#F5C309] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#F5C309]">T</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  TAKE RESPONSIBILITY
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Take responsibility with integrity, shaping character maturity
                  through accountable actions and decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="explore-card">
            <div className="our-values-card-container relative mt-[15%] flex h-62.5 w-75 rotate-2 flex-col items-center justify-center rounded-2xl bg-[#AED8AD]">
              <Image
                src={"/images/pages/about/tape.png"}
                width={900}
                height={900}
                alt="tape"
                className="absolute -top-[12.5%] right-[24%] z-5 h-auto w-[50%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute -top-2 left-0 flex h-full w-full -rotate-[1.5deg] flex-col gap-4 rounded-2xl bg-[#37951D] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#37951D]">E</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  EXPLORE
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
                  Explore both the world of knowledge and the depths of oneself,
                  nurturing curiosity, self-awareness, and intellectual growth.
                </p>
              </div>
            </div>
          </div>
          <div className="pioneer-card">
            <div className="our-values-card-container relative mt-[15%] flex h-62.5 w-75 -rotate-6 flex-col items-center justify-center rounded-2xl bg-[#6CAAFF]">
              <Image
                src={"/images/pages/about/clipper.png"}
                width={900}
                height={900}
                alt="clipper"
                className="absolute -top-[35%] -right-[20%] z-5 h-auto w-[50%]"
                draggable="false"
              />
              <div className="our-values-details-wrapper absolute -top-[1%] -left-2 flex h-full w-full rotate-[6.5deg] flex-col gap-4 rounded-2xl bg-[#0E53B2] p-4">
                <div className="our-values-logo-container flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <h1 className="our-values-logo text-4xl text-[#0E53B2]">P</h1>
                </div>
                <h1 className="our-values-text-title font-family-impact text-3xl text-white">
                  PIONEER
                </h1>
                <p className="our-values-text-description font-family-gill-condensed-bold text-xl text-white">
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
