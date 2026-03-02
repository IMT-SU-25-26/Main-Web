import { z } from "zod";
import { ImageSchema } from "./image";
import { Event } from "@/generated/prisma/client";
import { Image } from "@/generated/prisma/client";

export const EventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Start date must be a valid date",
  }),
  images: z.array(ImageSchema).optional(),
});

export type EventWithImages = Event & { images?: Image[] };
