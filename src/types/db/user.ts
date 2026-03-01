import { z } from "zod";
import { Role } from "@/generated/prisma/enums";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .email("Invalid email address")
    .regex(
      /^[^\s@]+@ciputra\.ac\.id$/,
      "Email must be a valid Ciputra email address",
    ),
  nim: z
    .union([
      z
        .string()
        .min(13, "NIM must be 13 characters")
        .max(13, "NIM must be 13 characters")
        .regex(/^[0-9]+$/, "NIM must contain only numbers"),
      z.null(),
      z.literal("").transform(() => null),
    ])
    .optional(),
  phoneNumber: z
    .union([
      z
        .string()
        .min(1, "Phone number cannot be empty if provided")
        .max(15, "Phone number must be less than 15 characters")
        .regex(
          /^[+]?[0-9\s\-()]+$/,
          "Phone number must contain only valid characters",
        ),
      z.null(),
      z.literal("").transform(() => null),
    ])
    .optional(),
  role: z.enum(Role, "Role is required"),
});
