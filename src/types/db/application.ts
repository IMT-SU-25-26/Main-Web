import { z } from "zod";
import { Status } from "@/generated/prisma/enums";

export const ApplicationSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  activityId: z.string().min(1, "Activity ID is required").optional(),
  competitionId: z.string().min(1, "Competition ID is required").optional(),
  status: z.enum(Status, "Status is required"),
});

export type Application = z.infer<typeof ApplicationSchema>;
