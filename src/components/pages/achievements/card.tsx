import Image from "next/image";
import CardClient from "./card-client";
import { Achievement, Image as PrismaImage } from "@/generated/prisma/client";
import { colorList } from "@/utils/color-list";

interface AchievementCardProps {
  achievement: Achievement & { images?: PrismaImage[] };
  index: number;
  className?: string;
}

export default function AchievementCard({
  achievement,
  index,
  className,
}: AchievementCardProps) {
  const accentColor = colorList[index % colorList.length];
  const description =
    achievement.description.length > 100
      ? achievement.description.slice(0, 100) + "..."
      : achievement.description;

  return (
    <CardClient achievementId={achievement.id} className={className}>
      <Image
        src="/images/pages/achievements/AchievementCardBG.webp"
        alt="Achievement Card Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Achievement Image */}
      <div className="absolute top-12 left-7.5 h-35 w-65 bg-gray-300">
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
          className="absolute bottom-0 left-0 h-2 w-full"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Text Content */}
      <div className="absolute top-50 right-7.5 left-7.5">
        <h3 className="text-xl font-extrabold text-black">
          {achievement.title}
        </h3>
        <span
          className="font-family-impact mt-1 inline-block px-2 py-1 text-[12px] tracking-wide text-white uppercase"
          style={{ backgroundColor: accentColor, transform: "rotate(-0.8deg)" }}
        >
          {achievement.teamInfo}
        </span>
        <p className="font-gill mt-1 line-clamp-4 text-sm leading-snug text-black">
          {description}
        </p>
      </div>
    </CardClient>
  );
}
