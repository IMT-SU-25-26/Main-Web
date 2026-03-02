import Image from "next/image";
import CardClient from "./card-client";
import ApplyButton from "@/components/ui/apply-button";
import { colorList } from "@/utils/color-list";
import { ActivityWithImages } from "@/types/db/activity";

interface ActivityCardProps {
  activity: ActivityWithImages;
  index: number;
  className?: string;
  category: string;
  approvedCount: number;
  applicationStatus: string | undefined;
  isLoggedIn: boolean;
  userId: string | undefined;
}

export default function ActivityCard({
  activity,
  index,
  className,
  category,
  approvedCount,
  applicationStatus,
  isLoggedIn,
  userId,
}: ActivityCardProps) {
  const accentColor = colorList[index % colorList.length];
  const description = activity.description;
  const trimmedDescription =
    description.length > 75 ? description.slice(0, 75) + "..." : description;

  return (
    <CardClient activityId={activity.id} className={className}>
      {/* Paper Clip */}
      <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2">
        <Image
          src="/images/pages/activities/tape.svg"
          alt="tape"
          width={80}
          height={80}
        />
      </div>

      <div className="mb-2 h-50 w-full overflow-hidden rounded-lg sm:h-55">
        {/* Activity Image */}
        <Image
          src={activity.images?.[0]?.url || "/images/layout/placeholder.png"}
          alt={activity.title}
          width={360}
          height={144}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="flex justify-between">
        <div>
          <h3 className="w-full text-[1.3rem] font-extrabold text-black">
            {activity.title}
            <p
              style={{ background: accentColor }}
              className={`font-family-impact ml-4 inline px-4 py-1 text-[0.9rem] font-light tracking-wider text-white`}
            >
              {category}
            </p>
          </h3>

          {/* Location */}
          <div className="mt-1 flex items-center justify-start gap-1">
            <svg
              className="h-[0.6rem] w-[0.6rem] text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[0.8rem] text-gray-600">{activity.location}</p>
          </div>

          {/* Start Date */}
          <div className="mt-1 flex items-center justify-start gap-1">
            <svg
              className="h-[0.6rem] w-[0.6rem] text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[0.8rem] text-gray-600">
              {new Date(activity.startDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>

          {/* Credit Points */}
          <div className="mt-1 flex items-center justify-start gap-1">
            <svg
              className="h-[0.6rem] w-[0.6rem] text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-[0.8rem] text-gray-600">
              {activity.creditPoint} Credit Points
            </p>
          </div>
        </div>

        {/* Quota */}
        <div className="flex flex-col items-center justify-center">
          <svg
            className="h-6.25 w-6.25 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <p className="text-[0.9rem]">
            {approvedCount}/{activity.quota}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="font-gill mt-2 mb-2 w-full text-[12px] wrap-break-word text-black">
        {trimmedDescription}
      </p>

      {/* Button */}
      <ApplyButton
        bgColor={accentColor}
        className="relative mt-auto w-full py-2"
        activityId={activity.id}
        startDate={new Date(activity.startDate)}
        quota={activity.quota}
        approvedCount={approvedCount}
        initialApplicationStatus={applicationStatus}
        isLoggedIn={isLoggedIn}
        userId={userId}
      >
        Register
      </ApplyButton>
    </CardClient>
  );
}
