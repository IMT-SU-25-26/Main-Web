import { z } from "zod";
import { ImageSchema } from "./image";
import { Achievement } from "@/generated/prisma/client";
import { Image } from "@/generated/prisma/client";

export const AchievementSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be at most 255 characters long"),
  description: z.string().min(1, "Description is required"),
  teamInfo: z
    .string()
    .min(1, "Team info is required")
    .max(255, "Team info must be at most 255 characters long"),
  featured: z.boolean().default(false),
  images: z.array(ImageSchema).optional(),
});

export type AchievementWithImages = Achievement & { images?: Image[] };
