import { z } from "zod";
import { ImageSchema } from "./image";

export const EventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Start date must be a valid date",
  }),
  images: z.array(ImageSchema).optional(),
});
