import Image from "next/image";
import Link from "next/link";

export default function CompetitionSection() {
  return (
    <div className="competition-wrapper relative flex w-screen flex-col items-center justify-start pb-[15%]">
      <h1 className="competition-text font-family-gill-condensed-bold text-6xl font-extrabold">
        COMPETITIONS
      </h1>
      <div className="competition-right-left-container mt-14 flex h-full w-full items-center justify-center gap-40">
        <div className="competition-left-container relative z-10 h-full w-full">
          <div className="mobile-competition-container relative z-30 block sm:hidden">
            <div className="mobile-competition-background absolute -top-10 left-[5.5%] min-h-50 min-w-92 rotate-2 bg-white shadow-[8px_8px_5px_-5px_rgba(0,0,0,0.5)]">
              <div className="mobile-competition-content relative z-25 flex h-full w-full flex-col items-center justify-center p-4">
                <Image
                  className="competition-mobile-handle absolute -top-16 left-[45%] w-18 rotate-90"
                  src={"/images/pages/home/handle-card.png"}
                  width={500}
                  height={500}
                  alt="handle-card"
                />
                <Image
                  className="competition-mobile-star absolute -top-18 right-[-8%] w-30"
                  src={"/images/pages/home/star-card.png"}
                  width={500}
                  height={500}
                  alt="star-card"
                />
                <div className="image-mobile-container h-22 w-full bg-[url('/images/pages/home/comp.jpg')] bg-cover bg-no-repeat"></div>
                <h1 className="competition-mobile-title-text font-family-impact w-full text-left text-2xl text-black">
                  TECHNODAY 2025
                </h1>
                <p className="competition-mobile-description-text w-full text-xs text-black">
                  Ready to show off your skills? Technoday kembali hadir di
                  tahun 2025 dengan tema &quot; Stellar Patterns to Real World
                  Solutions!&quot;
                </p>
                <p className="competition-mobile-member-text w-full text-end text-xs text-black">
                  Team: 3 Members
                </p>
              </div>
            </div>
          </div>
          <Image
            className="red-mobile-spinner absolute right-[-22.5%] bottom-[-25%] z-2 flex w-[55%] sm:hidden"
            src={"/images/pages/home/red-spinner.svg"}
            width={500}
            height={500}
            alt="round-spike"
          />
          <Image
            className="compete-bg relative h-auto w-[85%]"
            src={"/images/pages/home/compete-bg.svg"}
            width={500}
            height={500}
            alt="background-compete"
          />
          <Image
            className="absolute top-0 left-5 z-10 hidden h-auto w-full sm:flex"
            src={"/images/pages/home/compete.svg"}
            draggable="false"
            width={500}
            height={500}
            alt="competition-left"
          />
          <Image
            className="light-bulp absolute top-[-60%] left-0 z-10 hidden h-auto w-[35%] sm:flex"
            src={"/images/pages/home/light-bulp.webp"}
            draggable="false"
            width={500}
            height={500}
            alt="competition-left"
          />
          <div className="join-now-text-container absolute bottom-[-5%] left-[47.5%] z-2 h-30 w-87.5 rounded-2xl bg-[#0E54B2] p-4 px-8">
            <div className="absolute top-[-10%] left-[5%] z-[-1] flex h-full w-full items-center justify-center rounded-2xl bg-[#ED427C]">
              <h1 className="join-now-text font-family-impact text-center text-6xl text-white">
                <Link href="/competitions">Join Now</Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="competition-right-container relative hidden h-full w-full sm:flex">
          <div className="competition-right-background relative z-2 flex h-110 w-160 rotate-[-2.5deg] flex-col gap-4 bg-white p-4 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <Image
              className="competition-right-handle absolute top-[-25%] right-[40%] w-30 rotate-90"
              src={"/images/pages/home/handle-card.png"}
              width={500}
              height={500}
              alt="handle-card"
            />
            <Image
              className="competition-star absolute top-[-15%] right-[-8%] w-40"
              src={"/images/pages/home/star-card.png"}
              width={500}
              height={500}
              alt="star-card"
            />
            <Image
              className="round-spike absolute right-[75%] bottom-[-30%] w-[40%]"
              src={"/images/pages/home/round-spike.webp"}
              width={500}
              height={500}
              alt="round-spike"
            />
            <div className="image-container h-1/2 w-full bg-gray-300 bg-[url('/images/pages/home/comp.jpg')] bg-cover bg-no-repeat"></div>
            <h1 className="competition-title-text font-family-impact text-4xl text-black">
              TECHNODAY 2025
            </h1>
            <p className="competition-description-text text-xl text-black">
              Ready to show off your skills? Technoday kembali hadir di tahun
              2025 dengan tema &quot; Stellar Patterns to Real World
              Solutions!&quot;
            </p>
            <p className="competition-member-text text-end text-xl text-black">
              Team: 3 Members
            </p>
          </div>
          <Image
            className="red-spinner absolute right-[-10%] bottom-[-30%] w-[35%]"
            src={"/images/pages/home/red-spinner.svg"}
            width={500}
            height={500}
            alt="round-spike"
          />
        </div>
      </div>
      <Image
        src={"/images/pages/home/green-line.svg"}
        alt="green-line"
        width={900}
        height={900}
        className="green-line absolute top-[-45%] right-[-10%] w-[40%]"
      />
    </div>
  );
}
