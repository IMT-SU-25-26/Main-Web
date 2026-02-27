import Image from "next/image";
import Featured from "./featured-client";
import { Achievement, Image as PrismaImage } from "@/generated/prisma/client";
import { colorList } from "@/utils/color-list";
import { formatDate } from "@/utils/format-date";

interface AchievementFeaturedProps {
  achievement: Achievement & { images?: PrismaImage[] };
  index: number;
  className?: string;
}

export default function AchievementFeatured({
  achievement,
  index,
  className,
}: AchievementFeaturedProps) {
  const accentColor = colorList[index % colorList.length];
  const description =
    achievement.description.length > 250
      ? achievement.description.slice(0, 250) + "..."
      : achievement.description;

  return (
    <Featured achievementId={achievement.id} className={className}>
      <div className="mx-auto w-screen max-w-5xl overflow-visible">
        <div className="relative mx-auto min-h-22.5 max-w-[120vw] overflow-hidden py-6 md:min-h-50 md:max-w-200">
          {/* Background */}
          <Image
            src="/images/pages/achievements/AchievementFeaturedBG.webp"
            alt="Achievement Featured Background"
            fill
            className="z-0 object-cover object-bottom-left"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto my-2 flex w-[75vw] flex-col gap-4 pb-18 md:w-[90vw] md:max-w-4xl md:flex-row md:items-center md:p-0 md:px-6 lg:px-8">
            {/* Image */}
            <div className="relative mx-auto h-52 w-57.5 shrink-0 bg-gray-300 md:mx-0 md:h-30 md:w-45">
              {achievement.images?.[0]?.url ? (
                <Image
                  src={achievement.images[0].url}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-sm text-gray-400">No Image</span>
                </div>
              )}
              <div
                className="absolute bottom-0 left-0 h-2 w-full shadow-sm"
                style={{ backgroundColor: accentColor }}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-start gap-2 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="font-family-impact px-2 py-1 text-base text-white uppercase"
                  style={{
                    backgroundColor: accentColor,
                    transform: "rotate(-0.8deg)",
                  }}
                >
                  {achievement.title}
                </span>
                <span
                  className="font-family-impact px-1 py-0.5 text-xs leading-4 font-light text-black"
                  style={{
                    backgroundColor: "#F7C235",
                    transform: "rotate(0.8deg)",
                  }}
                >
                  {formatDate(achievement, "createdAt")}
                </span>
              </div>
              <p className="font-gill max-w-md leading-relaxed font-bold text-gray-800">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Featured>
  );
}
