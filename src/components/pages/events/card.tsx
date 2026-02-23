import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  isreverse?: boolean;
  imagesrc?: string;
  islast?: boolean;
  eventId?: string;
  isComingSoon?: boolean;
}

export default function EventCard({
  title,
  date,
  isreverse,
  imagesrc,
  islast,
  eventId,
  isComingSoon,
}: EventCardProps) {
  return (
    <div className="relative mx-auto min-h-100 w-[90%] max-w-4xl rounded-md bg-[#f4f4f4] bg-cover p-6 shadow-md sm:min-h-80">
      {/* Card Content */}
      <div
        className={`flex flex-col ${
          isreverse ? "md:flex-row-reverse" : "md:flex-row"
        } relative w-full items-start justify-start gap-4`}
      >
        {/* Image Section */}
        <div
          className={`h-48 w-full shrink-0 rounded-md shadow-inner sm:h-60 md:w-[50%] ${
            imagesrc ? "bg-cover bg-center" : "bg-gray-300"
          }`}
          style={
            imagesrc ? { backgroundImage: `url('${imagesrc}')` } : undefined
          }
        />

        {/* Text Section */}
        <div
          className={`flex w-full grow flex-col items-center gap-4 text-center ${
            isreverse ? "sm:-ml-12 lg:-ml-20" : "sm:-ml-12 lg:-ml-20"
          } -mt-1 mb-13 py-4 md:mt-7`}
        >
          {/* Title and Date */}
          <div className="mt-4 flex w-full grow flex-col items-center justify-center gap-1 text-center">
            <Image
              src="/images/pages/events/red-button.svg"
              alt="paper"
              width={900}
              height={900}
              className={`absolute -top-6 z-9999 hidden h-auto w-14 sm:block ${
                isreverse ? "left-[46%]" : "right-[46%]"
              }`}
            />
            <Image
              src="/images/pages/events/red-button.svg"
              alt="paper"
              width={900}
              height={900}
              className="absolute top-[-6.5%] right-[93%] z-9999 block h-auto w-12 sm:hidden"
            />
            <Image
              src={
                isreverse
                  ? "/images/pages/events/red-rope-right.svg"
                  : "/images/pages/events/red-rope-left.svg"
              }
              alt="paper"
              width={900}
              height={900}
              className={`absolute top-4 z-50 hidden h-auto w-[1.65rem] sm:block ${
                isreverse ? "left-[47%]" : "right-[47%]"
              } ${islast ? "sm:hidden" : ""}`}
            />
            <Image
              src={"/images/pages/events/red-rope-right.svg"}
              alt="paper"
              width={900}
              height={900}
              className={`absolute top-[6%] right-full z-50 block h-auto w-[2.4rem] sm:hidden ${
                islast ? "hidden" : ""
              }`}
            />
            <h1 className="font-family-impact text-3xl text-black md:text-4xl">
              {title}
            </h1>
            <p className="text-base font-semibold tracking-wider md:text-lg">
              {date}
            </p>
          </div>

          {/* View More Button */}
          <div className="relative">
            {isComingSoon ? (
              <div className="viewmore-button absolute -bottom-10 left-1/2 z-2 h-12.5 w-45 -translate-x-1/2 cursor-not-allowed rounded-2xl bg-gray-400 p-2 px-4 opacity-75 md:-bottom-14 md:h-15 md:w-60 md:p-4 md:px-8">
                <div className="absolute top-[-10%] left-[5%] z-[-1] flex h-full w-full items-center justify-center rounded-2xl bg-gray-500">
                  <h1 className="viewmore-button-text font-family-impact text-center text-xl text-white md:text-3xl">
                    Coming Soon
                  </h1>
                </div>
              </div>
            ) : (
              <Link href={`/images/pages/events/${eventId}`}>
                <div className="viewmore-button absolute -bottom-10 left-1/2 z-2 h-12.5 w-45 -translate-x-1/2 cursor-pointer rounded-2xl bg-[#0E54B2] p-2 px-4 transition-transform hover:scale-105 md:-bottom-14 md:h-15 md:w-60 md:p-4 md:px-8">
                  <div className="absolute top-[-10%] left-[5%] z-[-1] flex h-full w-full items-center justify-center rounded-2xl bg-[#ED427C]">
                    <h1 className="viewmore-button-text font-family-impact text-center text-xl text-white md:text-3xl">
                      View More
                    </h1>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Image
        src="/images/pages/events/tearpaper.webp"
        alt="paper"
        width={900}
        height={900}
        className="absolute bottom-[-6%] left-0 h-auto w-full rotate-[2.5deg] sm:bottom-[-16%] lg:bottom-[-20%]"
      />
    </div>
  );
}
