import Image from "next/image";
import Link from "next/link";
import Card from "./card";
import { Activity } from "@/types/db/activity";
import { truncateDescription } from "@/utils/truncate";

interface ServicesSectionProps {
  latestActivities: Activity[];
}

export default function ServicesSection({
  latestActivities,
}: ServicesSectionProps) {
  return (
    <div className="relative z-3 flex w-screen flex-col items-center justify-start pb-[10%]">
      <h1 className="explore-text font-family-gill-condensed-bold text-6xl font-extrabold text-black">
        EXPLORE OUR
      </h1>
      <h1 className="explore-text font-family-gill-condensed-bold text-6xl font-extrabold text-black">
        COMMUNITY SERVICES
      </h1>
      <div className="home-service-card-container relative mt-14 flex">
        {latestActivities.length > 0 && (
          <>
            <Card
              className="home-service-card-left absolute top-12 left-[25%] max-h-72"
              title={latestActivities[1]?.title || "No Activity"}
              type={latestActivities[1]?.category || "ACTIVITY"}
              description={truncateDescription(
                latestActivities[1]?.description || "No description available",
              )}
              imageUrl={latestActivities[1]?.images?.[0]?.url}
              color="#0555AB"
              opacity="75%"
            />
            <Card
              className="home-service-card-center relative z-10"
              title={latestActivities[0]?.title || "No Activity"}
              type={latestActivities[0]?.category || "ACTIVITY"}
              description={truncateDescription(
                latestActivities[0]?.description || "No description available",
              )}
              imageUrl={latestActivities[0]?.images?.[0]?.url}
              color="#0555AB"
              opacity="100%"
            />
            <Card
              className="home-service-card-right absolute top-12 right-[20%] max-h-72"
              title={latestActivities[2]?.title || "No Activity"}
              type={latestActivities[2]?.category || "ACTIVITY"}
              description={truncateDescription(
                latestActivities[2]?.description || "No description available",
              )}
              imageUrl={latestActivities[2]?.images?.[0]?.url}
              color="#0555AB"
              opacity="75%"
            />
          </>
        )}
        {latestActivities.length === 0 && (
          <>
            <Card
              className="home-service-card-left absolute top-12 left-[25%] max-h-72"
              title="No Activities"
              type="ACTIVITY"
              description="No activities available at the moment"
              color="#0555AB"
              opacity="75%"
            />
            <Card
              className="home-service-card-center relative z-10"
              title="No Activities"
              type="ACTIVITY"
              description="No activities available at the moment"
              color="#0555AB"
              opacity="100%"
            />
            <Card
              className="home-service-card-right absolute top-12 right-[20%] max-h-72"
              title="No Activities"
              type="ACTIVITY"
              description="No activities available at the moment"
              color="#0555AB"
              opacity="75%"
            />
          </>
        )}
      </div>
      <div className="relative mt-20 flex h-full w-full items-center justify-center sm:mt-40">
        <div className="explore-button absolute z-2 h-30 w-87.5 rounded-2xl bg-[#0E54B2] p-4 px-8">
          <div className="absolute top-[-10%] left-[5%] z-[-1] flex h-full w-full items-center justify-center rounded-2xl bg-[#ED427C]">
            <Link href="/activities">
              <h1 className="explore-button-text font-family-impact text-center text-6xl text-white">
                EXPLORE
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="paper-cloud absolute -top-20 left-0 flex h-auto w-[20%]"
        src={"/images/pages/home/paper-cloud.webp"}
        draggable="false"
        width={1920}
        height={1080}
        alt="footer"
      />
      <Image
        className="green-arrow-footer absolute top-0 right-0 h-auto w-[15%]"
        src={"/images/pages/home/green-arrow-home.png"}
        draggable="false"
        width={1920}
        height={1080}
        alt="footer"
      />
      <Image
        className="red-star-footer-left absolute top-[35%] left-0 hidden h-auto w-[20%] sm:flex"
        src={"/images/pages/home/orange-star-footer-left.png"}
        draggable="false"
        width={1920}
        height={1080}
        alt="footer"
      />
    </div>
  );
}
