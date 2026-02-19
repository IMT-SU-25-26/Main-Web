export type PresidentCardProps = {
  id: string;
  name: string;
  role: string;
  division: string;
  gender: "BOY" | "GIRL";
  imagesrc?: string;
};

export type ImageConfig = {
  src: string;
  className?: string;
};

export type RoleConfig = {
  decorations: ImageConfig[];
  color: string;
};

// Decoration Configurations
export const DECORATIONS = {
  CROWN: (gender: string) => ({
    src:
      gender === "GIRL" ? "/committee/crownpink.png" : "/committee/crown.png",
    className:
      gender === "GIRL"
        ? "crown-pink absolute -top-[3.3rem] -left-[1.8rem] w-[8.5rem] h-auto"
        : "crown-blue absolute -top-[2.3rem] -left-[0.7rem] w-[7rem] h-auto",
  }),
  MIC: {
    src: "/committee/mic.png",
    className: "mic absolute bottom-[3rem] -right-[1rem] w-[7rem] h-auto",
  },
  VIKING: {
    src: "/committee/viking.png",
    className: "viking absolute -top-[3rem] right-[2.22rem] w-[7rem] h-auto",
  },
  BOOK: {
    src: "/committee/book.png",
    className: "book absolute bottom-[3.5rem] -right-[0rem] w-[7rem] h-auto",
  },
  MONEY: {
    src: "/committee/money.png",
    className: "money absolute bottom-[4.2rem] right-[0rem] w-[6rem] h-auto",
  },
  HOUSE: (gender: string) => ({
    src:
      gender === "GIRL"
        ? "/committee/housepink.png"
        : "/committee/houseblue.png",
    className:
      gender === "GIRL"
        ? "house-pink absolute bottom-[4.7rem] right-[1rem] w-[4.5rem] h-auto"
        : "house-blue absolute bottom-[4.5rem] right-[1rem] w-[5rem] h-auto",
  }),
  LEAF: {
    src: "/committee/leaf.png",
    className: "leaf absolute bottom-[4.5rem] right-[1rem] w-[4rem] h-auto",
  },
  PAINT: (gender: string) => ({
    src:
      gender === "GIRL"
        ? "/committee/paintpink.png"
        : "/committee/paintblue.png",
    className:
      gender === "GIRL"
        ? "paint-pink absolute bottom-[4.2rem] -right-[1rem] w-[6.7rem] h-auto"
        : "paint-blue absolute bottom-[4.2rem] -right-[1rem] w-[6rem] h-auto",
  }),
  CAMERA: {
    src: "/committee/camera.png",
    className: "camera absolute bottom-[4.2rem] -right-[0rem] w-[6rem] h-auto",
  },
  STATUE: (gender: string) => ({
    src:
      gender === "GIRL"
        ? "/committee/statuepink.png"
        : "/committee/statueblue.png",
    className:
      gender === "GIRL"
        ? "statue-pink absolute bottom-[4.6rem] -right-[0.8rem] w-[6rem] h-auto"
        : "statue-blue absolute bottom-[5rem] -right-[0rem] w-[5rem] h-auto",
  }),
  MEGAPHONE: {
    src: "/committee/megaphone.png",
    className: "megaphone absolute bottom-[4rem] -right-[1rem] w-[7rem] h-auto",
  },
  LAPTOP: (gender: string) => ({
    src:
      gender === "GIRL"
        ? "/committee/laptoppink.png"
        : "/committee/laptopblue.png",
    className:
      "laptop absolute bottom-[3.8rem] -right-[0.5rem] w-[6.5rem] h-auto",
  }),
};

// Division Configurations
export const DIVISION_CONFIG: Record<
  string,
  Record<string, (gender: string) => RoleConfig>
> = {
  HOD: {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.MIC],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB",
    }),
    "VICE PRES": () => ({
      decorations: [DECORATIONS.VIKING],
      color: "#0555AB",
    }),
    SECRETARY: () => ({
      decorations: [DECORATIONS.BOOK],
      color: "#F64A78",
    }),
    TREASURER: () => ({
      decorations: [DECORATIONS.MONEY],
      color: "#F64A78",
    }),
  },
  INTERNAL: {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.HOUSE(gender)],
      color: "#0555AB",
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.HOUSE(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB",
    }),
  },
  EXTERNAL: {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.LEAF],
      color: "#0555AB",
    }),
    MEMBER: () => ({
      decorations: [DECORATIONS.LEAF],
      color: "#0555AB",
    }),
  },
  "PDD DESIGN": {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.PAINT(gender)],
      color: "#0555AB",
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.PAINT(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB",
    }),
  },
  "PDD DOCUMENTATION": {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.CAMERA],
      color: "#0555AB",
    }),
    MEMBER: () => ({
      decorations: [DECORATIONS.CAMERA],
      color: "#0555AB",
    }),
  },
  "PUBLIC RELATION": {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.STATUE(gender)],
      color: "#F64A78",
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.STATUE(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB",
    }),
  },
  "SOCIAL ACTIVITY": {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.MEGAPHONE],
      color: "#0555AB",
    }),
    MEMBER: () => ({
      decorations: [DECORATIONS.MEGAPHONE],
      color: "#0555AB",
    }),
  },
  TECHNOLOGY: {
    COORDINATOR: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.LAPTOP(gender)],
      color: "#0555AB",
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.LAPTOP(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB",
    }),
  },
};
