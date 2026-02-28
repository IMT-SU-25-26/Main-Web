import { z } from "zod";
import { Role } from "@/generated/prisma/enums";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  nim: z.string().min(1, "NIM is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  role: z.enum(Role, "Role is required"),
});

export type User = z.infer<typeof UserSchema>;
