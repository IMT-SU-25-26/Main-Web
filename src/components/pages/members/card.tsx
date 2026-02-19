import "@/styles/card.css";
import Image from "next/image";
import {
  DIVISION_CONFIG,
  PresidentCardProps,
  RoleConfig,
} from "@/utils/members";

export default function PresidentCard({
  id,
  name,
  role,
  division,
  gender,
  imagesrc,
}: PresidentCardProps) {
  const divisionConfig = DIVISION_CONFIG[division];

  let roleConfig: RoleConfig | undefined;

  const exactRoleKey = Object.keys(divisionConfig).find(
    (key) => key.toUpperCase() === role.toUpperCase(),
  );

  if (exactRoleKey) {
    roleConfig = divisionConfig[exactRoleKey](gender);
  } else {
    const partialMatchKey = Object.keys(divisionConfig).find((key) =>
      role.toUpperCase().includes(key.toUpperCase()),
    );

    if (partialMatchKey) {
      roleConfig = divisionConfig[partialMatchKey](gender);
    }
  }

  if (!roleConfig) {
    return null;
  }

  const { decorations, color } = roleConfig;

  return (
    <div
      id={id}
      className="committee-card relative h-63 w-46 rounded-md bg-white pt-4 text-center shadow-md sm:w-46"
    >
      {decorations.map((decoration, index) => (
        <Image
          key={index}
          src={decoration.src}
          alt="Committee Decoration"
          width={150}
          height={150}
          className={decoration.className}
        />
      ))}
      <div className="committee-pp mx-auto h-37 w-37 overflow-hidden rounded-full bg-[#D9D9D9]">
        <Image
          src={imagesrc || "eventsdetails/template.svg"}
          alt="Committee Member Photo"
          width={150}
          height={150}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="committee-role committee-profile mx-auto mt-3.5 flex h-6.5 w-33.5 items-center justify-center px-0.5 py-0.5 text-base font-extrabold text-white"
        style={{ backgroundColor: color }}
      >
        {role}
      </div>
      <div className="committee-name mt-3.5 text-sm text-black">{name}</div>
    </div>
  );
}
