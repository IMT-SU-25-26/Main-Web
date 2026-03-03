"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { UserSchema } from "@/types/db/user";

export async function getAllUsers() {
  return await prisma.user.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getUserById(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}

export async function updateUser(
  userId: string,
  data: z.infer<typeof UserSchema>,
) {
  const result = UserSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid user data submitted." };
  }

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        ...result.data,
      },
    });

    revalidatePath("/dashboard/tech");

    return { success: true, user };
  } catch (err) {
    return { error: "Failed to update user: " + (err as Error).message };
  }
}

export async function deleteUser(userId: string) {
  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    revalidatePath("/dashboard/tech");

    return { success: true };
  } catch (err) {
    return { error: "Failed to delete user: " + (err as Error).message };
  }
}
